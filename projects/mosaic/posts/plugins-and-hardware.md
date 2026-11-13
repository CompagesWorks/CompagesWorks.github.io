# Plugins, emulators and your Switch

MOSAIC works the same whether you play on an emulator or a real Switch. This post covers how it connects to where you play: plugins, the emulator launcher, and sending mods to your console.

## Plugins

Plugins are the `.nro` files in Skyline's `plugins` folder. ARCropolis, which loads all your mods, is one of them. They aren't regular mods, so MOSAIC gives them their own Plugins tab.

A disabled plugin is moved to a `disabled_plugins` folder next to the real one, the same way mods are, so the game skips it and you keep the file.

Popular plugins can be installed from the marketplace inside MOSAIC. Those can be checked for updates each time MOSAIC starts and updated in one click. Plugins have to match your game version, so MOSAIC asks which version of Smash you run and reminds you to reinstall them if you change it.

A `.nro` file doesn't say which version it is. MOSAIC asks UMC (Ultimate Moveset Compatibility) to recognise the file by its hash, a short code computed from the file's content that changes if a single byte changes, and compares the answer with the version it recorded. If the two don't match, MOSAIC shows you, so you can tell whether an update went through.

## Emulators

Point MOSAIC to your emulator and its data folder, and the play button under the mods list launches Smash, in fullscreen if you want. During setup, MOSAIC checks that ARCropolis is installed in that emulator's folder. If it can't find it, a short guide has you launch the game once and look for the ARCropolis text in the corner.

## Real hardware

On a Switch, mods have to travel from your PC to the SD card. MOSAIC can send them three ways:

- FTP over Wi-Fi, with an FTP server homebrew running on the Switch
- MTP over a USB cable, with a homebrew like DBI exposing the SD card
- Local Drive, when the SD card is in a card reader on your PC or mounted over USB from Hekate

With MTP or Local Drive, you can keep your library in one of two places (FTP only supports the first). In Sync mode it lives on the PC: you install and organise there, then send it over. Quick Sync sends only what you downloaded since the last sync, and Full Sync checks every mod and plugin and fixes whatever differs. In Direct mode the SD card is your library, and MOSAIC shows exactly what's on it. If you unplug the card, MOSAIC keeps the last known list on screen and asks you to reconnect before changing anything.
