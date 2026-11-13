# How the slot changer works

Every fighter in Smash Ultimate has 8 costumes, called slots, numbered `c00` to `c07`. A skin mod replaces one or more of them, and if two mods both replace Pikachu's `c00`, only one can show up in game. The slot changer moves a mod to the slot you pick, and can add new slots past `c07` to make room for every skin you like.

## Step 1: MOSAIC reads which slots the mod uses

When you open the slot changer, MOSAIC goes through every file in the mod and finds the slot number in its name or folder, for example `fighter/pikachu/model/body/c00/...` for the model, or the `_00` at the end of UI images like `chara_3_pikachu_00.bntx`. It then shows a grid of the fighter's slots, colored by state:

- blue: used by this mod
- yellow: already used by another enabled mod, so moving there would create a conflict
- red: the mod clashes with itself
- empty: free

## Step 2: you choose where each slot goes

For each slot the mod uses, you pick a new one. You can move `c00` to `c03`, swap two slots, drop a slot you don't want, or go past the usual 8, up to `c255`. The arrow under a slot shows the exact list of files that will be renamed.

## Step 3: MOSAIC renames everything

A costume is many files: the model, the textures, the portraits on the select screen, the victory screen render, and sometimes sounds and effects. Renaming them all by hand is where people usually make mistakes. MOSAIC renames every one of those files and folders to the new slot number at once.

For slots past `c07`, the game also has to be told the new costumes exist. MOSAIC writes three things for that:

- a `config.json`, which lists the files the new slot adds and tells ARCropolis which original files it can share (its `share-to-vanilla` section), so the animations, sounds and effects you didn't replace keep working without extracting them from the game
- the character database entry that adds the extra costumes to the select screen
- the costume names shown in game, if the mod gave them custom names

If the mod already has its own `config.json`, MOSAIC asks whether to update it or build a new one.

## Undoing a change

Before applying, you can tick "Back up the mod before applying". MOSAIC keeps a copy of the mod as it was, and you can bring it back later from the mod's right-click menu with "Restore backup from before the slot change".

## Changing many mods at once

When the conflict check finds skins on the same slot (see the Diagnostics post), the conflict window offers Change Slots Automatically. MOSAIC moves the conflicting mods to free slots, and can go past `c15` when the lower ones are all taken. You tick the mods that should stay where they are, such as stage mods, and MOSAIC handles the others.
