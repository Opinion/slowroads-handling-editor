
![Opinion's Handling Editor for slowroads.io](header.png)
Opinion's Handling Editor is a mod for slowroads.io which gives you access to a simple handling editor. Get more out of your vehicle by customizing it's on the fly.

## Installation

### 1. Requirements
 - Firefox (tested on v106.0.2 64 bit): https://www.mozilla.org/en-US/firefox/new/
 - Tampermonkey addon for Firefox: https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/

### 2. Installation instructions
TODO (Meanwhile, copy 'userscript.js' into a new userscript in Tampermonkey, reload slowroads and have fun!)

## How it works
 - You install a *userscript* in Tampermonkey (Greasemonkey, Violentmonkey or similar extensions not tested).
 - The *userscript* will block the original *game script* and replace it with a slightly modified version.
   - The modified *game script* exposes some variables related to the game's state. This allows us to modify these settings on the fly.
 - The *userscript* also adds an in-game menu for the handling editor.

## Preview
![Preview of Opinion's Handling Editor](preview.png)

## Upcoming changes
 - Make this mod a browser extension instead of a userscript
   - **Possible?** Very much so.
   - **Chromium browser support?** Ohh yes.
   - **When?** Just hold on, I'm working on it.
