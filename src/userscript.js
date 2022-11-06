// ==UserScript==
// @name         Opinion's Handling Editor for slowroads.io
// @namespace    https://github.com/Opinion/slowroads-handling-editor
// @version      1.2.pre-release
// @description  This mod adds a handling editor for slowroads.io. Supports game version v1.0.1 on script 'main.e7a33c55.chunk.js'
// @author       Opinion
// @match        https://slowroads.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=slowroads.io
// @grant        none
// @run-at       document-start
// ==/UserScript==

/* globals unsafeWindow, window */

const Core = {
    /**
     * Custom logger
     *
     * @param  {...any} args Arguments you want to log
     */
    log(...args) {
        console.log('[🔧]', '[OPINION]', ...args)
    },

    /**
     * Settings
     */
    settings: {
        supportedVersion: '1.0.1',
        originalGameScript: 'https://slowroads.io/static/js/main.e7a33c55.chunk.js',
        modifiedGameScript: 'https://cdn.jsdelivr.net/gh/Opinion/slowroads-handling-editor@userscript-v1.2/dist/main.modified.e7a33c55.chunk.js',
    },
}

const WindowInteraction = {
    /**
     * Get window 'unsafeWindow' or 'window'
     *
     * To support Greasemonkey, we need to access 'window' through 'unsafeWindow'.
     * Details: https://wiki.greasespot.net/UnsafeWindow
     *
     * @returns {Window}
     */
    getWindow() {
        return typeof unsafeWindow === 'object'
            ? unsafeWindow
            : window
    },

    /**
     * Get Toastify through window
     *
     * @returns {Toastify|function|null}
     */
    getToastify() {
        return this.getWindow()?.Toastify
    },

    /**
     * Get 'exposedI' through window
     *
     * @returns {object|null}
     */
    getExposedI() {
        return this.getWindow()?.exposedI
    },
}

const HandlingEditor = {
    /* Include 'Core' */
    log: Core.log,
    settings: Core.settings,

    /**
     * Append a <script> element to <head>
     */
    appendScript(src) {
        const element = document.createElement('script')
        element.src = src
        document.head.append(element)
        this.log('Appended script', { element, src })
    },

    /**
     * Append a <link> element to <head>
     */
    appendStyle(src) {
        const element = document.createElement('link')
        element.href = src
        element.rel = 'stylesheet'
        document.head.append(element)
        this.log('Appended style', { element, src })
    },

    /**
     * Append a <script> element to <body> with raw code
     *
     * Useful because we can de-elevate (is that a word?) code and let it run from the page.
     * Code will NOT run with the elevated permissions of the userscript.
     */
    appendRawScript(code) {
        const element = document.createElement('script')
        element.innerHTML = code
        document.body.append(element)
        this.log('Appended raw script', { element, code })
    },

    /**
     * Initialize scripts and dependencies
     */
    initialize() {
        this.log('Initializing...')

        // Append modifified game script
        this.appendScript(this.settings.modifiedGameScript)

        // Append Toastify.js : https://apvarun.github.io/toastify-js
        this.appendScript('https://cdn.jsdelivr.net/npm/toastify-js')
        this.appendStyle('https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css')

        // Waiting until the game has started and dependencies are loaded
        this.log('Before we start the handling editor we need to wait for some conditions...')
        this.settings.pleaseWait = setInterval(this.waitUntilReady, 500)
    },

    /**
     * Wait conditions
     *
     * ## Condition structure
     *  - condition.name           : Required : string. Name of the condition.
     *  - condition.passes         : Required : function. Requirement to pass the condition.
     *  - condition.checkMessage   : Optional : string, null or undefined. Message before checking the condition.
     *  - condition.successMessage : Optional : string, null or undefined. Message when passing the condition.
     *  - condition.failedMessage  : Optional : string, null or undefined. Message when the condition doesn't pass.
     */
    waitConditions: [
        {
            name: 'Toastify.js',
            passes: () => typeof WindowInteraction.getToastify() === 'function',
            checkMessage: 'Waiting for Toastify.js to finish loading...',
            successMessage: 'Toastify.js successfully loaded!',
        },
        {
            name: 'Game start',
            passes: () => WindowInteraction.getExposedI()?.current?.firstFrame === true,
            checkMessage: 'Waiting for the game to start (press \'begin\')...',
            successMessage: 'Game has started!',
        },
        {
            name: 'Vehicle spawn',
            passes: () => typeof WindowInteraction.getExposedI()?.current?.vehicleController !== 'undefined',
            failedMessage: 'Couldn\'t find \'vehicleController\'. This usually takes a few seconds.',
            successMessage: 'Found \'vehicleController\'.',
        },
    ],

    /**
     * Timer function which starts the handling editor when all conditions have passed
     *
     * Note: Runs in a 'setInterval' timer.
     */
    waitUntilReady() {
        const self = HandlingEditor

        // Running conditions
        let failedCondition = false
        const conditions = self.waitConditions
        for (let i = 0; i < conditions.length; i++) {
            const condition = conditions[i]
            const logPrefix = `[Wait condition: ${condition.name}]`

            // Checking 'checkMessage'
            if (condition.checkMessage) {
                self.log(logPrefix, condition.checkMessage)
                condition.checkMessage = null
            }

            // Checking if the condition passes
            if (condition.passes() === false) {
                // Checking 'failedMessage'
                if (condition.failedMessage) {
                    // We don't clear failed message because we want to make the user aware that something isn't quite right
                    self.log(logPrefix, condition.failedMessage)
                }

                failedCondition = true
                break
            }

            // Checking 'successMessage'
            if (condition.successMessage) {
                self.log(logPrefix, condition.successMessage)
                condition.successMessage = null
            }
        }

        // Exiting if a condition failed
        if (failedCondition) {
            return
        }

        // Stopping timer and starting handling editor
        self.log('Passed all conditions. Starting handling editor!')
        clearInterval(self.settings.pleaseWait)
        self.startHandlingEditor()
    },

    /**
     * Make a toast
     *
     * Passed through a script tag to let it execute from the page.
     *
     * @param message Toast message
     * @param type Toast type
     * @param duration Duration in mills
     * @param close Do you want a close button to be shown?
     */
    makeToast(message = null, type = 'default', duration = 5000, close = true) {
        const types = {
            default: {
                background: 'linear-gradient(to right bottom, rgb(158, 168, 170), rgb(124, 147, 155))',
                cursor: 'initial',
            },
            info: {
                background: 'linear-gradient(to bottom right, rgb(17, 130, 114), rgb(70, 110, 125))',
                cursor: 'initial',
            },
        }

        // Create toastify payload
        const payload = {
            text: message,
            duration,
            escapeMarkup: false,
            close,
            gravity: 'top',
            position: 'center',
            stopOnFocus: 'true',
            style: types[type],
        }

        // Turn payload into JSON so we can pass it through a raw script element
        const payloadAsJson = JSON.stringify(payload)
        this.appendRawScript(`
            {
                // Greasemonkey doesn't like it when we call a function through 'unsafeWindow'
                // This script block is appended to the page and will not be executed with elevated permissions.
            
                // This payload was converted to JSON by the handling editor and is accessible as an object
                // without any changes
                const payload = ${payloadAsJson}
            
                // Since this code block runs from the page, we can access Toastify without going through 'window'
                Toastify(payload).showToast()
            }`)
    },

    /**
     * Hanling keys available in the handling editor
     * (if you want to add more, remember to add matching HTML inputs too)
     */
    handlingKeys: [
        'accel', /*      */'topSpeed',
        'brake', /*      */'reverse',
        'aeroFactor', /* */'dampening',
        'drag', /*       */'jerk',
        'rockFactor', /* */'rollResistance',
        'slipBase', /*   */'slipMod',
        'maxSteer', /*   */'steerSpeed',
        'steerAccel', /* */'steerInterval',
        'mass',
    ],

    /**
     * Starts handling editor (main)
     */
    startHandlingEditor() {
        this.makeToast('You can open the handling editor by pressing the cog in the <b>top left</b> corner.', 'default', 25000)
        this.makeToast('🔧 Now playing with Opinion\'s handling editor. Have fun out there :)', 'info', 12000)

        // Window toggled and position
        const windowX = '4.5rem'
        const windowY = '2rem'
        let windowActiveClass = ''
        if (localStorage.getItem('x-handling-editor-active')) {
            windowActiveClass = 'active'
        }

        // Size of input steps (up/down arrows when focusing inputs)
        const stepSize = 0.01
        const stepSizeAttribute = `step="${stepSize}"`

        // Create Handling Editor UI
        const handlingEditorOuterElement = document.createElement('div')
        handlingEditorOuterElement.id = 'handling-editor-outer'
        handlingEditorOuterElement.innerHTML = `
<div id="handling-editor-toggle" class="active">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
</div>
<div id="handling-editor" class="noselect ${windowActiveClass}">
    <div id="handling-editor-header" class="title">
        <div></div>
        Opinion's Handling Editor
        <div></div>
    </div>
    <div class="control-grid">
        <div class="left">
            <!-- Left side -->
            <div>
                <label for="handling-accel">accel</label>
                <input type="number" ${stepSizeAttribute} id="handling-accel">
            </div>
            <div>
                <label for="handling-brake">brake</label>
                <input type="number" ${stepSizeAttribute} id="handling-brake">
            </div>
            <div>
                <label for="handling-aeroFactor">aeroFactor</label>
                <input type="number" ${stepSizeAttribute} id="handling-aeroFactor">
            </div>
            <div>
                <label for="handling-drag">drag</label>
                <input type="number" ${stepSizeAttribute} id="handling-drag">
            </div>
            <div>
                <label for="handling-rockFactor">rockFactor</label>
                <input type="number" ${stepSizeAttribute} id="handling-rockFactor">
            </div>
            <div>
                <label for="handling-slipBase">slipBase</label>
                <input type="number" ${stepSizeAttribute} id="handling-slipBase">
            </div>
            <div>
                <label for="handling-maxSteer">maxSteer</label>
                <input type="number" ${stepSizeAttribute} id="handling-maxSteer">
            </div>
            <div>
                <label for="handling-steerAccel">steerAccel</label>
                <input type="number" ${stepSizeAttribute} id="handling-steerAccel">
            </div>
            <div>
                <label for="handling-mass">mass</label>
                <input type="number" ${stepSizeAttribute} id="handling-mass">
            </div>
        </div>
        <div class="right">
            <!-- Right side -->
            <div>
                <label for="handling-topSpeed">topSpeed</label>
                <input type="number" ${stepSizeAttribute} id="handling-topSpeed">
            </div>
            <div>
                <label for="handling-reverse">reverse</label>
                <input type="number" ${stepSizeAttribute} id="handling-reverse">
            </div>
            <div>
                <label for="handling-dampening">dampening</label>
                <input type="number" ${stepSizeAttribute} id="handling-dampening">
            </div>
            <div>
                <label for="handling-jerk">jerk</label>
                <input type="number" ${stepSizeAttribute} id="handling-jerk">
            </div>
            <div>
                <label for="handling-rollResistance">rollResistance</label>
                <input type="number" ${stepSizeAttribute} id="handling-rollResistance">
            </div>
            <div>
                <label for="handling-slipMod">slipMod</label>
                <input type="number" ${stepSizeAttribute} id="handling-slipMod">
            </div>
            <div>
                <label for="handling-steerSpeed">steerSpeed</label>
                <input type="number" ${stepSizeAttribute} id="handling-steerSpeed">
            </div>
            <div>
                <label for="handling-steerInterval">steerInterval</label>
                <input type="number" ${stepSizeAttribute} id="handling-steerInterval">
            </div>
            <div>
                <label for="handling-reset">Messed up?</label>
                <button id="handling-reset" style="width: 100%;">reset handling</button>
            </div>
        </div>
    </div>
</div>
<style>
#handling-editor-outer {}
#handling-editor-toggle {
    display: none;
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 24px;
    height: 24px;
    color: hsla(0,0%,100%,.7333333333333333);
    z-index: 10;
    padding: 4px;
    border-radius: 50%;
    cursor: pointer;
    background-color: #22222242;
}
#handling-editor-toggle:hover {
    background-color: #222;
    color: #fff;
}
#handling-editor-toggle.active {
   display: block;
}
#handling-editor {
    position: absolute;
    left: ${windowX};
    top: ${windowY};
    display: none;
    width: 350px;
    background: rgba(30, 30, 30, 0.64);
    z-index: 10;
    color: #fff;
}
#handling-editor.active {
    display: block;
}
#handling-editor .title {
    display: flex;
    justify-content: space-between;
    place-items: center;
    gap: 16px;
    padding: 12px 16px 12px 16px;
    text-align: center;
    text-shadow: 2px 2px 0px #000;
    cursor: grab;
}
#handling-editor .title.grabbing {
    cursor: grabbing;
}
#handling-editor .title div{
    flex-grow: 1;
    border-bottom: 1px solid #999;
}
#handling-editor .control-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 12px;
}
#handling-editor .control-grid * {
    box-sizing: border-box;
}
#handling-editor .control-grid > .left {
    margin-left: 16px;
}
#handling-editor .control-grid > .right {
    margin-right: 16px;
}
#handling-editor .control-grid > div > div {
    margin-top: 10px;
}
#handling-editor .control-grid > div > div > input {
    display: inline-block;
    width: 100%;
    background: #222222aa;
    border: none;
    color: #BBBECE;
    margin-left: 4px;
}
#handling-editor .control-grid > div > div > input[type=number]::-webkit-inner-spin-button,
#handling-editor .control-grid > div > div > input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number] {
    -moz-appearance:textfield;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
`
        document.body.append(handlingEditorOuterElement)

        const handlingEditorToggleElement = this.getHandlingEditorToggleElement()
        const handlingEditorElement = this.getHandlingEditorElement()

        // Making handling editor draggable
        this.dragElement(handlingEditorElement)

        // Event :: Toggle handling editor
        handlingEditorToggleElement.addEventListener('click', function() {
            handlingEditorElement.classList.toggle('active')
            if (handlingEditorElement.classList.contains('active')) {
                localStorage.setItem('x-handling-editor-active', true)
            } else {
                localStorage.removeItem('x-handling-editor-active')
            }
        })

        // Loading handling (and create event listeners)
        this.loadHandling(true)

        // Creating event listener for reset button
        const self = this
        const resetButtonElement = document.getElementById('handling-reset')
        resetButtonElement.addEventListener('click', () => {
            self.resetHandling()
        })
    },
    updateHandling(handlingKey, value) {
        const handlingMetrics = WindowInteraction.getExposedI().current.vehicleController.vehicleDef.metrics
        handlingMetrics[handlingKey] = parseFloat(value)
    },
    resetHandling() {
        if (typeof this.settings.defaultHandling === 'undefined') {
            this.makeToast('Can\'t reset handling. Default values have not been intialized yet.')
            return
        }
        for (let i = 0; i < this.handlingKeys.length; i++) {
            const handlingKey = this.handlingKeys[i]

            // Resetting handling for the current key
            const handlingMetrics = WindowInteraction.getExposedI().current.vehicleController.vehicleDef.metrics
            handlingMetrics[handlingKey] = this.settings.defaultHandling[handlingKey]
        }

        // Loading new values to UI
        this.loadHandling(false)
    },
    loadHandling(firstRun = false) {
        if (firstRun) {
            this.settings.defaultHandling = {}
        }

        for (let i = 0; i < this.handlingKeys.length; i++) {
            const handlingKey = this.handlingKeys[i]

            // Getting corresponding input and setting initial value
            const inputElement = document.getElementById(`handling-${handlingKey}`)
            const handlingMetrics = WindowInteraction.getExposedI().current.vehicleController.vehicleDef.metrics
            const initialValue = handlingMetrics[handlingKey]
            inputElement.value = initialValue
            this.log('Set initial value of', handlingKey, 'to', initialValue)

            if (firstRun) {
                // Storing in default handling
                this.settings.defaultHandling[handlingKey] = initialValue

                // Creating event listener
                const self = this
                inputElement.addEventListener('change', () => {
                    self.updateHandling(handlingKey, inputElement.value)
                })
            }
        }
    },
    getHandlingEditorOuterElement() {
        return document.getElementById('handling-editor-outer')
    },
    getHandlingEditorToggleElement() {
        return document.getElementById('handling-editor-toggle')
    },
    getHandlingEditorElement() {
        return document.getElementById('handling-editor')
    },
    dragElement(element) {
        let pos1 = 0; let pos2 = 0; let pos3 = 0; let pos4 = 0
        const headerElement = document.getElementById(element.id + '-header')
        if (headerElement) {
            // if present, the header is where you move the DIV from:
            headerElement.onmousedown = dragMouseDown
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            element.onmousedown = dragMouseDown
        }

        function dragMouseDown(e) {
            e = e || WindowInteraction.getWindow().event
            e.preventDefault()
            // get the mouse cursor position at startup:
            pos3 = e.clientX
            pos4 = e.clientY
            document.onmouseup = closeDragElement
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag

            if (headerElement) {
                headerElement.classList.add('grabbing')
            }
        }

        function elementDrag(e) {
            e = e || WindowInteraction.getWindow().event
            e.preventDefault()
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX
            pos2 = pos4 - e.clientY
            pos3 = e.clientX
            pos4 = e.clientY
            // set the element's new position:
            element.style.top = (element.offsetTop - pos2) + 'px'
            element.style.left = (element.offsetLeft - pos1) + 'px'
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null
            document.onmousemove = null

            if (headerElement) {
                headerElement.classList.remove('grabbing')
            }
        }
    },
};

(function() {
    'use strict'
    addEventListener('beforescriptexecute', (e) => {
        if (e.target.src === HandlingEditor.settings.originalGameScript) {
            HandlingEditor.log('Detected game script, we will try to prevent execution...', e)
            e.preventDefault()
            HandlingEditor.initialize()
        }
    })
})()
