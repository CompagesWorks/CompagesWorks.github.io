# How MOSAIC is built

MOSAIC is built with Electron, the same base as the Discord and VS Code desktop apps. This post follows what happens inside the app between the moment you click a button and the moment a folder moves on your disk.

## What Electron is

A website can't touch the files on your PC. A mod manager has to, since it moves folders, unpacks archives and writes game files.

Electron packs two things into one app. The first is Chromium, the engine behind Google Chrome, which draws the window the same way a browser draws a web page. The second is Node.js, which lets JavaScript read and write files, start other programs and talk to the network like any desktop program.

So MOSAIC's interface is written with the tools of the web (HTML, CSS and TypeScript), and the same code runs on Windows, Linux and macOS.

MOSAIC is still a big download, mostly because of the tools packed inside it. Some features rely on programs written by the modding community, and MOSAIC brings them along so you don't have to install them yourself. ParamXML is one of them: it turns the game's `.prc` files into XML, a text format MOSAIC can read and edit, then turns them back. The CSS editor depends on it, and it weighs about 70 MB by itself. A tool for the character name files and 7-Zip for unpacking archives come along too. On top of that, every Electron app carries its own copy of Chromium.

## Two halves

Picture a restaurant. The dining room is what you see: the menu, the tables, the waiter taking your order. The kitchen is where the cooking happens, and customers never walk into it.

MOSAIC works the same way:

- the renderer is the dining room. It's the window: the mods list, the tabs, the buttons, the animations. It knows what to show you, but it can't open a single file on its own.
- the main process is the kitchen. It runs in the background, creates the windows, and does all the real work: moving mods, downloading from GameBanana, sending files to your Switch, launching the emulator.

When the renderer needs something done, it sends a message to the main process and waits for the answer. Electron calls this IPC, for inter-process communication.

## Why the window can't touch your files

Electron lets an app give its window full access to Node.js. MOSAIC turns that off (`nodeIntegration: false`) and keeps the window in its own isolated space (`contextIsolation: true`).

The window displays content from the internet, like GameBanana mod pages and descriptions. If a piece of that content ever ran code inside the window, that code could only press the buttons the window already has. It couldn't read your documents or delete a folder. For the same reason, MOSAIC's window refuses to navigate away to another page or open new windows on its own.

## The order pad

Between the two halves sits a small file called the preload. It's the waiter's order pad: the exact list of commands the window is allowed to send, such as `toggleMod`, `updatePlugin` or `detectConflicts`.

On the kitchen side, each command has a handler, a function that does the job and returns the result. MOSAIC groups them by topic: mods, plugins, the CSS editor, Switch transfers, updates, feedback and about fifteen more.

## One click, step by step

Here's what happens when you disable a mod.

1. You click the switch next to the mod. The renderer calls `toggleMod` with two things: the mod's folder and your mods folder.
2. The preload passes this to the main process as a `toggle-mod` message.
3. The main process works out where the mod should go. Active mods live in `mods`, and disabled ones in a `{disabled_mod}` folder right next to it, which ARCropolis doesn't read. If a mod with the same name is already waiting there, it stops and tells you instead of overwriting it.
4. It moves the folder. Nothing is copied or deleted, so disabling is instant even for a 2 GB mod.
5. Sometimes Windows refuses because something has the folder open: the game, the emulator, or an Explorer window. The main process tries again a few times within a fraction of a second. If the folder is still locked, it asks you to close whatever is using it.
6. The answer goes back to the window with the mod's new location, and the list updates.

## Why the window doesn't freeze

Each order is asynchronous: the window sends it and keeps going while the kitchen works. You can scroll or switch tabs during a long download or while a big archive unpacks. For the heaviest jobs, the main process hands the work to separate programs, such as 7-Zip for archives, so MOSAIC itself stays responsive.
