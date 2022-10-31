
![Opinion's Handling Editor for slowroads.io](header.png)
Opinion's Handling Editor is a mod for slowroads.io which gives you access to a simple handling editor. Get more out of your vehicle by customizing it on the fly.

Supports slowroads.io on version 1.0.1.

## How it works
 - You install a *userscript* in Tampermonkey (Greasemonkey, Violentmonkey or similar extensions not tested).
 - The *userscript* will block the original *game script* and replace it with a slightly modified version.
   - The modified *game script* exposes some variables related to the game's state. This allows us to modify these settings on the fly.
   - The *userscript* also adds an in-game menu for the handling editor.

## Installation Requirements
 - Firefox (tested on v106.0.2 64 bit)
 - Tampermonkey extension for Firefox
 - Userscript for Opinion's Handling Editor (see instructions)

## Installation instructions
### 1. Installing Firefox
Go to https://www.mozilla.org/en-US/firefox/new/.  
Download and install the latest version of Firefox.

> Chromium based browsers not tested. We rely on a Javascript event 'beforescriptexecute' which is only supported by Firefox  
> See https://developer.mozilla.org/en-US/docs/Web/API/Element/beforescriptexecute_event

### 2. Installing Tampermonkey
Open Firefox and install the Tampermonkey extension from https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/.

### 3. Installing userscript
With Tampermonkey installed, click the extension button (top right) and select **"Create new script..."**.
A new window will pop up. This is the userscript editor. For now, select **all** existing text and remove it.

In a new tab, go to [repo/version/1.0.1/userscript.tampermonkey.js](version/1.0.1/userscript.tampermonkey.js) and copy the userscript.

Go back to Tampermoney's userscript editor and paste the copied userscript.

Press `CTRL+S` in the userscript editor to save or select `File > Save` from the context menu. You will see a popup on the top of the screen saying "Operation completed successfully".

You can now close the tab for the userscript editor.

### 4. Enjoy
Go to https://slowroads.io and enjoy the handling editor.

> **Be careful! Some values can cause the game to crash.
> In some cases after a crash, the game needs to be loaded in a new tab to avoid extreme lagging (reloading the page is not enough sometimes).**

> Values are changed by listening to the 'change' event.  
> For best results, click anywhere inside the game after editing a value in the handling editor.

> Placed the handling editor outside the viewport of your browser? Reload the game page to get the window back.

## Preview
![Preview of Opinion's Handling Editor](preview.png)

## Upcoming changes
 - Make this mod a browser extension instead of a userscript
   - **Possible?** Very much so.
   - **Firefox and Chromium browser support?** Ohh yes.
   - **When?** Just hold on, I'm working on it.
 - Find more handling related parameters and make them configurable
   - There are individual settings for each wheel and I want to make them configurable
   - Change drive mode from the handling editor (awd, fwd, rwd) (want this before I make savable presets)
   - Change vehicle from the handling editor (car, bus, bike) (want this before I make saveable presets)
 - Add savable presets
   - Option to change to a different preset while reversing (use selected preset by default)
   - Option to change to a different preset while holding handbrake (use selected preset by default)
   - If both reversing and using handbrake, choose which should overrule the other
   - **Why?** I believe this can churn out some amazing drift handlings. I evision something like allowing the car to spin out the rear easier when holding down the handbrake.
 - Add some default presets
   - Need to do some playtesting and try to make some good handlings.
