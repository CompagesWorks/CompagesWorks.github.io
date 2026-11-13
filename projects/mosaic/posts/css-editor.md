# How the CSS editor works

The CSS is the Character Select Screen, the grid of fighters you pick from before a match. Modders edit it to give new characters a spot there. That covers moveset mods that add a whole new fighter, and echo slots, where a skin gets its own portrait and name instead of being one of a fighter's 8 costumes.

After a few of those, the grid gets crowded and the order stops making sense, and you'll probably want to hide a fighter or two. The CSS editor in the Characters tab handles that by drag and drop, and you never open a game file yourself.

## The 91 character limit

Out of the box, the game's select screen only handles 91 entries. Going past that needs community fixes: Coolsonickirby's CSS 91 Limit Remover raises the cap (up to 256 entries), and layout mods like the CSS 91+ Layout Fix shrink the icons so every character still fits on screen. MOSAIC's editor arranges whatever entries you have, but it doesn't lift the limit, so past 91 you still need those mods.

## What the game reads

The select screen is built from three game files:

- `ui_chara_db.prc` lists every character with its IDs, series icon, number of costumes, and whether it's shown
- `ui_layout_db.prc` says where each character sits on the grid
- `msg_name.msbt` holds the names written under each portrait

They're binary files you can't open in a text editor. Editing them by hand means converting them to XML with community tools, changing the right entries, and converting them back.

You start by pointing MOSAIC at your copy of these three files, usually taken from another CSS mod or your own dump. MOSAIC reads them and shows one card per fighter.

## Editing the grid

Drag the cards to reorder the roster. A right-click or the eye icon hides a character, and the Hidden list brings it back. Opening a character lets you edit its ID, the name shown on screen, its series and its number of costumes. Preview shows the layout before you save, and Randomize shuffles the order.

Portraits come from your installed mods when they have one. For characters without a local picture, MOSAIC can use community images instead.

## Adding new characters

Moveset mods that add a fighter can be added to the grid from the Characters tab. When the moveset is listed on UMC (Ultimate Moveset Compatibility, a community site that tracks moveset mods), MOSAIC fills in its IDs and costume range, and you check them before adding.

Echo slots turn a skin into its own character on the grid. With a Kiriko skin for Sheik, for example, Kiriko gets her own portrait and name on the select screen and still plays like Sheik, while the real Sheik keeps her normal costumes. Each echo slot is one more entry on the grid, which is how setups end up going past the 91 limit. You pick the mod, give the new character an ID and the costumes it uses, and MOSAIC renames the skin's menu images and adds the new entry.

## Saving

When you press Apply Layout, MOSAIC converts the grid back into the three game files and saves them as a regular mod called Character CSS Layout in your mods folder. You can turn your custom select screen on and off like any other mod, it goes to your Switch with the rest, and your original source files stay untouched.

MOSAIC also remembers your layout, so the editor reopens where you left off, and the configuration backup in Settings includes it.

## Moveset compatibility checks

Moveset mods sometimes break each other when installed together. In the Characters tab you can pick 2 to 10 movesets and MOSAIC asks UMC whether they're known to work together. You get the community votes ("12 compatible, 1 incompatible") and, when there's enough data, a prediction based on which parts of the game each moveset changes.
