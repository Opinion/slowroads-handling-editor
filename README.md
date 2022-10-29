# slowroads-handling-editor
A mod for slowroads.io, provides a handling editor allowing you to customize vehicle handling on the fly. Installed using extensions such as Tampermonkey, Greasemonkey and Violentmonkey.

### NOTICE: Work in progress. Please come back later.

## How it works
 - You install a *userscript* in Tampermonkey, Greasemonkey, Violentmonkey or similar extensions
 - The *userscript* will block the original *game script* and replace it with a slightly modified version
   - The modified *game script* exposes some important variables which allows us to modify settings of the game on the fly
 - The *userscript* adds a custom menu for editing the different handling variables

## Todo

### Possible issues with relying on 'beforescriptexecute'
Just to make it clear, this is written before even attempting to make the *userscript*.
I have played around with modified handling values on slowroads.io but I have found no way of accessing those values without triggering a breakpoint in the *game script*. In order to get access to those values I plan to replace the *original game script* with a *modified game script*. The *modified game script* will save the game object to a globally accessible variable which makes it possible to modify the game through code.

Meanwhile for those interested; I introduced my breakpoint on a 'resize observer'. This allows you to consistently introduce a breakpoint by resizing the screen and by chance also gives you access to game variables like `i.current.vehicleController.vehicleDef.metrics` (vehicle handling).

---

Now back to beforescriptexecute...

See https://developer.mozilla.org/en-US/docs/Web/API/Element/beforescriptexecute_event

Firefox mentions:
> It is a proprietary event specific to Gecko (Firefox).

There are polyfills like https://github.com/jspenguin2017/Snippets/blob/master/onbeforescriptexecute.html
but they mention it has limited support in Firefox (which I think is a little weird):
```
// Compatibility:
//
// Browser    - Cancel Script - Change Script
// Chrome 67  - Yes           - Yes
// Edge 41    - Yes           - Yes
// Firefox 60 - Partially     - Yes
//
// Only inline scripts can be cancelled on Firefox
```

Things I need to figure out:
1. Does 'beforescriptexecute' work in the latest firefox version without a polyfill?
2. Does the polyfill work on the latest chrome version?
3. Does it actually polyfill or does it override firefox's 'beforescriptexecute' and break the original implementation?

If all of the above are true I might need two *userscripts*, one for firefox and one for edge and chrome.
While testing this I will make the *modified game script* available in this repo.
