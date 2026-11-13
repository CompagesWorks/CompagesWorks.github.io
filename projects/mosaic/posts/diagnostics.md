# The Diagnostics page

The Diagnostics page sits in Settings → Diagnostics, and it's where we send people first when the game crashes, a costume looks wrong, or something stopped working. It holds every tool MOSAIC has for tracking down a problem.

## Conflict detection

Two mods conflict when both replace the same file in the game. If two Mario skins both replace Mario's c00 body texture, the game can only use one. ARCropolis spots this at boot and asks what to do: say no and it skips every conflicting file, so both mods end up half loaded.

MOSAIC lists every file inside every enabled mod and checks whether any file path shows up more than once. Matches are grouped by fighter and costume slot. You read something like "Mario, c00: these 3 files are in both Mod A and Mod B" instead of a wall of paths.

From there you can disable one of the mods, move it to another slot with the slot changer so both fit, or delete only the conflicting file from one mod when you want to keep the rest of it.

Some files are shared on purpose and cause no harm, and MOSAIC already skips the common ones. For anything else, the Ignored conflicts list hides a file from the checks. Ignoring a conflict only hides it in MOSAIC; ARCropolis still sees both files and can still ask about them at boot.

## The `.nro` limit check

`.nro` files are small programs that run alongside the game. Besides the plugins in Skyline's `plugins` folder, recent versions of ARCropolis also load a `plugin.nro` placed inside a mod's own folder, so some mods bring their own code with them. Stack too many of those and the game can fail to boot, usually without saying why.

MOSAIC counts the `.nro` files in your enabled mods and warns you past 64, on emulator and on Switch. It tells you how many to turn off and which mods they come from.

## Batch testing

When the game crashes and you have 200 mods enabled, finding the one responsible by hand takes forever. Batch testing uses what programmers call a binary search: cut the suspects in half, test, and repeat.

1. You choose whether to start with your mods or your plugins.
2. MOSAIC turns off half of them.
3. You launch the game (if you use an emulator, there's a launch button on that screen) and check whether the problem is still there.
4. You tell MOSAIC whether it still breaks or works now.
5. MOSAIC now knows which half holds the culprit and splits that half again.

Each round removes half the suspects, so 200 mods take around 8 tests. Sometimes the problem only goes away when a whole group is off together, which means two mods are breaking each other, and MOSAIC reports that as well.

You can leave the screen and come back later; the session is saved. When you finish or cancel, MOSAIC puts every mod and plugin back the way it was.

## The diagnostic report

When you ask for help on our Discord, the first question is usually what you have installed. The Export diagnostic report button answers it in one file.

The report is a JSON file with your MOSAIC version, your system, your mods and plugins (with the plugin versions MOSAIC recognised), your library folders and your CSS editor data. You can hide your user name from the folder paths before saving. Passwords and game or emulator settings are never included.

## Maintenance

Downloads and installs go through a temporary folder that normally cleans itself up. An interrupted install can leave files behind, and Clear temporary files removes them. It's safe to press at any time.
