
![Opinion's Handling Editor for slowroads.io](header.png)
Opinion's Handling Editor is a mod for slowroads.io which gives you access to a simple handling editor. Get more out of your vehicle by customizing it on the fly.

 Supports [slowroads.io](https://slowroads.io/) on version 1.0.1.  
 Firefox is currently required.

## How it works
 - You install a *userscript* in Violentmonkey or Greasemonkey (similar extensions not tested).
 - The *userscript* will attempt to block the original *game script* and replace it with a *modified game script* (hosted here).
   - The modified *game script* exposes a variable containing the game's state.
   - Because we now have acces to the game's state, we can modify game settings on the fly.
   - The *userscript* adds an in-game menu for the handling editor.

## Installation
Go to the [latest release](https://github.com/Opinion/slowroads-handling-editor/releases/latest) and follow our installation guide.

## Mod preview
![Preview of Opinion's Handling Editor](preview.png)

## Common problems

> Setting values too high or too low can cause the game to crash.  
> If the game crashes or freezes, just reload the page.

> After a crash, sometimes reloading the page isn't enough and the game can get laggier
> over time.  
> To resolve this, simply open the game in a new tab.

> Switching vehicle does not update values shown in the handling editor. Recommended to
> reload the page after switching vehicles.

> The default vehicle handling is currently stored when the handling editor starts. In
> order to update the stored default handling you must reload the page after switching
> vehicles.  
> Switching vehicle and pressing "reset handling" without reloading the page will not
> restore the correct handling for your chosen vehicle.

> Editing values or pressing the "reset handling" button will steal the focus from the
> game. For best results, click anywhere inside the game after interacting with the
> handling editor.
