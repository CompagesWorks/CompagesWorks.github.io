# What MOSAIC sends, and what stays on your PC

MOSAIC is a mod manager, so most of what it does happens in folders on your PC. A few features do talk to the internet, though. This post lists each one: what goes out, where it goes, and how to turn it off.

MOSAIC has no accounts and no ads.

## Anonymous crash reports

When something breaks in MOSAIC, we want to know, even if nobody reports it. MOSAIC uses PostHog for this, on their servers in the EU.

On first launch, MOSAIC creates a random ID, so we can tell that ten crashes came from one PC and not from ten. The ID isn't tied to your name, your Discord or your GameBanana account. Alongside it, MOSAIC sends:

- the MOSAIC version, the operating system and its version, and the processor type (x64 or ARM)
- the language MOSAIC runs in
- crash reports: the error message, and where in MOSAIC's code it happened

An error message can include a file path, for example the mod MOSAIC was reading when it failed. On Windows, that path often contains your user name.

This is on by default. You can turn it off in Settings → App → Analytics.

## Discord status

If Discord is open on your PC, MOSAIC shows on your profile what you're doing in it: the tab you're on, how many mods you have installed, and how long MOSAIC has been open. It never shows your mods' names.

MOSAIC hands this to the Discord app on your PC, which puts it on your profile. You can turn the status off in Settings → Interface → Discord Rich Presence.

## Update checks

Each time it starts, MOSAIC asks GitHub whether a new version of MOSAIC is out. It doesn't download anything until you say yes. You can turn the automatic check off in Settings → Updates and check by hand with the Check for Updates button.

Plugins installed from the marketplace are checked the same way, against their own GitHub pages. That check has its own switch in the same place.

## Announcements and credits

On startup, MOSAIC also reads a small file we host on GitHub. When we need to tell everyone something, like a known bug or a required update, it shows up as a message in the app. The credits tab is loaded the same way. MOSAIC only downloads these two files and sends nothing back.

## Things you start yourself

The rest only happens when you use the feature:

- Browsing the marketplace and installing mods loads pages and files from GameBanana, like a web browser would.
- To recognise a plugin, MOSAIC sends its hash to UMC (Ultimate Moveset Compatibility). A hash is a short code computed from the file. It doesn't contain the file, and the file can't be rebuilt from it.
- The Characters tab loads fighter portraits from the official Smash Bros. website.
- The form in Settings → Feedback sends us your message, the contact info you choose to give, the MOSAIC version, its language, your operating system, and the log files you pick.

## What never leaves your PC

The diagnostic report from the Diagnostics page is saved as a file on your PC. It's only sent if you send it yourself, for example on our Discord. The same goes for your mods, your plugins, your emulator and Switch settings, and your FTP details.
