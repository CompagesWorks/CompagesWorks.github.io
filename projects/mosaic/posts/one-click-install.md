# How 1-click install works

You click the 1-click install button on a GameBanana page, MOSAIC asks you to confirm, and a few seconds later the mod is in your list, ready to play. In between, MOSAIC works out how the mod was packed and fixes it.

## Every modder packs their files differently

Smash Ultimate mods are folders of files. The game, through ARCropolis, only reads them if they follow a precise layout: one folder per mod, with folders like `fighter`, `ui`, `sound`, `stage`, `effect`, etc. inside it.

Nobody zips their mod the same way, though. Over the years we've seen archives like these:

```
Coin Coffer.zip                Coin Coffer.zip              Coin Coffer.zip
└─ fighter/                    └─ Coin Coffer/              └─ SD card/
   └─ pacman/...                  └─ v2/                       └─ ultimate/
                                     └─ Coin Coffer/              └─ mods/
                                        ├─ fighter/                  └─ Coin Coffer/
                                        └─ ui/                          └─ fighter/
```

That's the same mod in three shapes. Drop any of them into your mods folder as is, and the game will either ignore it or load it wrong.

## MOSAIC looks for the real mod inside the archive

MOSAIC unpacks the archive in a temporary folder and goes looking for the part the game cares about. A folder counts as a mod when it holds something the game recognises: folders like `fighter`, `ui`, `sound` or `stage`, a `config.json`, or a `plugin.nro`.

- Extra wrapper folders (`Coin Coffer/v2/Coin Coffer/...`) get dug through until the mod turns up.
- A full SD card layout (`ultimate/mods/...`) is recognised and the mods inside it are pulled out. If the archive also ships other `ultimate` folders next to `mods`, those are copied to the right place too.
- An archive holding several mods becomes several separate mods in your list.
- The `__MACOSX` folders and `.DS_Store` files that Macs leave in zips are thrown away.

Whatever went in, your mods folder ends up looking like this:

```
mods/
└─ Coin Coffer/
   ├─ fighter/
   ├─ ui/
   ├─ info.toml      ← name, author, version, description
   └─ preview.webp   ← the picture shown in MOSAIC
```

The game reads that right away, and so does the rest of MOSAIC: the slot changer, the CSS editor and the conflict checks all expect this layout. `info.toml` and `preview.webp` are the same files ARCropolis's own in-game mod manager reads, so your mods also show up with their name and picture there.

## The extras come along

When MOSAIC pulls a mod out of a nested archive, it also brings the files the author left next to it: the mod's `info.toml`, its preview image, and any `.txt` readme. MOSAIC tells you when a mod has a readme, since those often contain install notes you'll want to read.

## Missing info comes from GameBanana

This mostly applies to installs from a GameBanana page, since that's how MOSAIC knows which mod it is. If the author didn't ship an info file or a picture, MOSAIC writes one from the page: name, author, version, category, description, and the first screenshot, converted to `.webp`. That's why mods that came as a bare zip still show a proper title and image in your list.

## Safety nets

Before downloading, MOSAIC can warn you when the mod needs another mod or plugin you don't have, or one you've turned off.

If you like trying mods one at a time, a setting makes every new install arrive disabled, so nothing changes in game until you turn it on.

Once the install is done, the downloaded archive and the temporary files are deleted so they don't pile up on your disk.

If you play on a real Switch, the new mod is queued and goes to your console with the next sync.
