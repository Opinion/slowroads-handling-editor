(this.webpackJsonpapp = this.webpackJsonpapp || [
]).push([[0],
[
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, i) {
  },
  function (e, t, i) {
  },
  function (e, t, i) {
    'use strict';
    i.r(t),
    t.default = i.p + 'static/media/debug_body.193b9327.obj'
  },
  function (e, t, i) {
    'use strict';
    i.r(t),
    t.default = i.p + 'static/media/debug_wheel.291c4dc1.obj'
  },
  function (e, t, i) {
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, i) {
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, i) {
    'use strict';
    i.r(t),
    t.default = i.p + 'static/media/marsrock.055b2928.obj'
  },
  function (e, t, i) {
    'use strict';
    i.r(t),
    t.default = i.p + 'static/media/mono_2.a6225cf4.obj'
  },
  function (e, t, i) {
    'use strict';
    i.r(t),
    t.default = i.p + 'static/media/mono_wheel.0c7cdca8.obj'
  },
  function (e, t, i) {
    'use strict';
    i.r(t),
    t.default = i.p + 'static/media/bus-02.07c5f9f2.obj'
  },
  function (e, t, i) {
    'use strict';
    i.r(t),
    t.default = i.p + 'static/media/bus-wheel.32095e6e.obj'
  },
  function (e, t, i) {
    'use strict';
    i.r(t),
    t.default = i.p + 'static/media/roadster-07.0d45cf64.obj'
  },
  function (e, t, i) {
    'use strict';
    i.r(t),
    t.default = i.p + 'static/media/roadster_wheel_02.bbc40837.obj'
  },
  function (e, t, i) {
  },
  ,
  function (e, t, i) {
  },
  function (e, t, i) {
  },
  function (e, t, i) {
  },
  function (e, t, i) {
  },
  function (e, t, i) {
  },
  function (e, t, i) {
  },
  function (e, t, i) {
  },
  function (e, t, i) {
    'use strict';
    i.r(t);
    var s = i(2),
    n = i.n(s),
    a = i(22),
    r = i.n(a),
    h = (i(32), i(18), i(1)),
    o = i(26);
    class l {
      constructor(e = null) {
        this.listeners = [
        ],
        this.value = null,
        this.default = null,
        this.value = e
      }
      reset() {
        this.set(this.default)
      }
      set(e) {
        this.value !== e && (this.value = e, this.onChanged(this.value))
      }
      onChanged(e) {
        for (let t of this.listeners) t(e)
      }
      addListener(e) {
        'function' === typeof e && (this.listeners.includes(e) || this.listeners.push(e))
      }
      removeListener(e) {
        let t = this.listeners.indexOf(e);
        t >= 0 && this.listeners.splice(t, 1)
      }
    }
    var d = new l(!0);
    var c = window.localStorage.getItem('isDev');
    var p = new class {
      constructor() {
        this.key = {
        },
        this.mouse = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        },
        this.listeners = {
        },
        this.click = {
          left: !1,
          right: !1
        },
        this.onMouseDownBound = this.onMouseDown.bind(this),
        this.onMouseUpBound = this.onMouseUp.bind(this),
        this.onMouseMoveBound = this.onMouseMove.bind(this),
        this.scroll = 0,
        this.scrollDelta = 0,
        this.scrollFactor = - 1,
        this.onScrollBound = this.onScroll.bind(this),
        this.scrollSense = 0.05,
        this.onKeyDownBound = e=>{
          this.onKeyDown(e)
        },
        this.onKeyDown = this.onKeyDownUnlocked,
        this.onKeyDownNull = () =>{
        },
        this.onKeyUpBound = e=>{
          this.onKeyUp(e)
        },
        this.onKeyUp = this.onKeyUpUnlocked,
        this.onKeyUpNull = () =>{
        },
        this.mouseEnabled = !0,
        this.keysLocked = !1,
        this.mouseWasEnabled = !0
      }
      init(e) {
        this.dom = e,
        this.dom.addEventListener('mousedown', this.onMouseDownBound, !1),
        this.dom.addEventListener('mouseup', this.onMouseUpBound, !1),
        this.dom.addEventListener('mousemove', this.onMouseMoveBound, !1),
        this.dom.addEventListener('wheel', this.onScrollBound, !1),
        this.dom.addEventListener('keydown', this.onKeyDownBound, !1),
        this.dom.addEventListener('keyup', this.onKeyUpBound, !1)
      }
      destroy() {
        this.dom.removeEventListener('mousedown', this.onMouseDownBound, !1),
        this.dom.removeEventListener('mouseup', this.onMouseUpBound, !1),
        this.dom.removeEventListener('mousemove', this.onMouseMoveBound, !1),
        this.dom.removeEventListener('wheel', this.onScrollBound, !1),
        this.dom.removeEventListener('keydown', this.onKeyDownBound, !1),
        this.dom.removeEventListener('keyup', this.onKeyUpBound, !1)
      }
      addListener(e, t) {
        e in this.listeners || (this.listeners[e] = [
        ]),
        this.listeners[e].push(t)
      }
      removeListener(e, t) {
        if (e in this.listeners) {
          let i = this.listeners[e].indexOf(t);
          i >= 0 && this.listeners[e].splice(i, 1)
        }
      }
      onMouseDown(e) {
        this.mouseEnabled && (0 == e.button ? this.click.left = !0 : 2 == e.button && (this.click.right = !0))
      }
      onMouseUp(e) {
        this.mouseEnabled && (0 == e.button ? this.click.left = !1 : 2 == e.button && (this.click.right = !1))
      }
      onMouseMove(e) {
        this.mouse.x = e.clientX,
        this.mouse.y = e.clientY
      }
      onScroll(e) {
        this.scrollDelta = e.deltaY > 0 ? 1 : - 1,
        this.scroll += this.scrollDelta * this.scrollSense,
        this.scroll = Math.min(Math.max(this.scroll, - 1), 1)
      }
      onKey(e) {
        if (e in this.listeners) {
          for (let t of this.listeners[e]) t();
          return !0
        }
        return !1
      }
      onKeyDownUnlocked(e) {
        this.key[e.code] = !0,
        this.onKey(e.code) && e.preventDefault()
      }
      onKeyUpUnlocked(e) {
        this.key[e.code] = !1
      }
      resetKeyState() {
        for (let e in this.key) this.key[e] = !1
      }
      setMouseEnabled(e) {
        this.mouseEnabled = e,
        this.scroll = 0,
        this.click.left = !1,
        this.click.right = !1
      }
      lockKeys() {
        this.keysLocked || (this.resetKeyState(), this.mouseWasEnabled = this.mouseEnabled, this.setMouseEnabled(!1), this.keysLocked = !0, this.onKeyDown = this.onKeyDownNull, this.onKeyUp = this.onKeyUpNull)
      }
      unlockKeys() {
        this.keysLocked && (this.keysLocked = !1, this.setMouseEnabled(!0), this.onKeyDown = this.onKeyDownUnlocked, this.onKeyUp = this.onKeyUpUnlocked)
      }
    };
    var u = {
      Forward: 'KeyW',
      Left: 'KeyA',
      Right: 'KeyD',
      Backward: 'KeyS',
      LeftArrow: 'ArrowLeft',
      UpArrow: 'ArrowUp',
      RightArrow: 'ArrowRight',
      DownArrow: 'ArrowDown',
      Handbrake: 'Space',
      BoostAccel: 'ShiftLeft',
      BoostAccel2: 'ShiftRight',
      Auto: 'Equal',
      Mute: 'KeyM',
      PageUp: 'PageUp',
      PageDown: 'PageDown',
      Q: 'KeyQ',
      E: 'KeyE',
      Camera: 'KeyC',
      StickySteer: 'IntlBackslash',
      Shift: 'ShiftLeft',
      SwitchDrive: 'KeyB',
      NodeDebug: 'KeyN',
      Reset: 'KeyR',
      Lights: 'KeyL',
      Headlights: 'KeyH',
      Pause: 'KeyP',
      UI: 'KeyU',
      Debug: 'F3',
      Debug2: 'F4',
      Reload: 'F6',
      StepTicker: 'BracketRight',
      Ackermann: 'KeyX',
      AutoDrive: 'KeyF',
      NextSkin: 'KeyG',
      NextTopo: 'KeyH',
      Esc: 'Escape',
      Any: - 1,
      Fullscreen: 'F11',
      Control: 'ControlLeft',
      T: 'KeyT',
      Tab: 'Tab',
      Plus: 'NumpadAdd',
      Minus: 'NumpadSubtract',
      CameraToggle: 'Backquote',
      ResetCamera: 'KeyG',
      Caps: 'CapsLock',
      Num1: 'Digit1'
    };
    const g = () =>{
      let e = !1;
      return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (e = !0),
      e
    };
    var m = g() && null === window.localStorage.getItem('force-allow-mobile');
    class x {
      constructor(e) {
        if (this.listeners = {
          any: [
          ]
        }, this.value = {
        }, e) for (let t in e) this.value[t] = e[t],
        this[t] = e[t]
      }
      reset() {
        this.set([])
      }
      setMany(e) {
        for (let t in e) console.log('Setting ', t, e[t]),
        this.set(t, e[t], !0);
        for (let t in e) console.log('Firing onchanged ', t, this.value[t]),
        this.onChanged(t, this.value[t])
      }
      set(e, t, i = !1) {
        e in this.value && this.value[e] !== t && (this.value[e] = t, this[e] = t, i || this.onChanged(e, this.value[e]))
      }
      onChanged(e, t) {
        for (let i of this.listeners[e] || [
        ]) i(t);
        for (let i of this.listeners.any || [
        ]) i(e)
      }
      addListener(e, t) {
        'function' === typeof t && (e in this.listeners || (this.listeners[e] = [
        ]), this.listeners[e].push(t))
      }
      removeListener(e, t) {
        if (!(e in this.listeners)) return;
        let i = this.listeners[e].indexOf(t);
        i >= 0 && this.listeners[e].splice(i, 1)
      }
    }
    const v = {
      AudioLevel: 'AudioLevel',
      Units: 'Units',
      AutoPause: 'AutoPause',
      DoubleTap: 'DoubleTap'
    },
    w = {
      AudioLevel: 0.5,
      Units: 0,
      AutoPause: 0,
      DoubleTap: 0
    };
    var f = new class extends x {
      constructor(...e) {
        super (...e),
        this.value = w,
        this.loadConfig()
      }
      set(e, t) {
        super.set(e, t),
        window.localStorage.setItem(v[e], t)
      }
      loadConfig() {
        let e,
        t;
        for (t in this.value) e = JSON.parse(window.localStorage.getItem(v[t]) || w[t]),
        console.log('GameConfig: Load ', t, e),
        this.set(t, e)
      }
    }(w);
    const b = 'no_prompt_ha';
    var A = new class extends l {
      constructor(...e) {
        super (...e),
        this.default = !1,
        this.value = !1,
        this.disabled = null != window.localStorage.getItem(b)
      }
      disable() {
        this.disabled = !0,
        window.localStorage.setItem(b, !0)
      }
    };
    const y = window.location.pathname.includes('dash');
    var I = new class {
      constructor() {
        this.appTime = 0,
        this.listeners = [
        ],
        this.stateListeners = [
        ],
        this.blurListeners = [
        ],
        this.slowListeners = [
        ],
        this.slowInterval = 20,
        this.slowTimer = null,
        this.wasPaused = !1,
        this.paused = !1,
        this.blurred = !1,
        this.playSpeed = 1,
        this.onSplash = !1,
        this.playLocked = !1,
        this.tick30Bound = this.tick30.bind(this),
        this.startTime = Date.now() / 1000,
        this.playTime = 0,
        this.pTime = this.startTime,
        this.pSlowTime = this.startTime,
        p.addListener(u.Pause, (() =>{
          this.toggle(!0)
        })),
        c && (p.addListener(u.StepTicker, this.tickOnce.bind(this)), p.addListener(u.Plus, (() =>{
          this.playSpeed += 0.25,
          console.log(this.playSpeed)
        })), p.addListener(u.Minus, (() =>{
          this.playSpeed > 0.3 && (this.playSpeed -= 0.25),
          console.log(this.playSpeed)
        }))),
        A.addListener((() =>{
          this.retire(!0)
        })),
        window.onblur = () =>{
          0 == f.value.AutoPause && this.pause()
        },
        window.onfocus = () =>{
          this.wasPaused || this.resume()
        },
        document.addEventListener('visibilitychange', (e=>{
          'visible' == document.visibilityState ? (this.blurred = !1, this.updateBlurListeners()) : (this.blurred = !0, this.updateBlurListeners())
        })),
        m || y || (this.tick(), this.slowTimer = setInterval(this.tick30Bound, this.slowInterval))
      }
      toggle(e = !1) {
        this.paused ? this.resume(e) : (this.wasPaused = !0, this.pause(e))
      }
      retire() {
        this.paused = !0,
        this.updateStateListeners(),
        cancelAnimationFrame(this.tickRAF),
        clearInterval(this.slowTimer),
        this.tick = () =>{
        },
        this.resume = () =>{
        }
      }
      pause(e = !1) {
        this.playLocked = e || this.playLocked,
        y || this.paused || (this.paused = !0, this.updateStateListeners(), cancelAnimationFrame(this.tickRAF), clearInterval(this.slowTimer))
      }
      resume(e = !1) {
        this.playLocked && !e || y || this.paused && (this.paused = !1, this.playLocked = !1, this.wasPaused = !1, this.updateStateListeners(), this.pTime = Date.now() / 1000, this.pSlowTime = this.pTime, this.tick(), this.slowTimer = setInterval(this.tick30Bound, this.slowInterval))
      }
      tick() {
        this.tickRAF = requestAnimationFrame((() =>this.tick())),
        this.time = Date.now() / 1000,
        this.appTime = this.time - this.startTime,
        this.dT = this.time - this.pTime,
        this.dT = this.dT > 0.1 ? 0.1 : this.dT,
        this.dT && (this.playTime += this.dT, this.dT *= this.playSpeed, this.updateListeners()),
        this.pTime = this.time
      }
      tick30() {
        this.slowTime = Date.now() / 1000,
        this.slowdT = this.slowTime - this.pSlowTime,
        this.updateSlowListeners(this.slowdT),
        this.pSlowTime = this.slowTime
      }
      tickOnce() {
        console.log('\n\n ---------- STEP ---------- \n\n'),
        this.paused = !0,
        cancelAnimationFrame(this.tickRAF),
        clearInterval(this.slowTimer),
        this.time = Date.now() / 1000,
        this.appTime = this.time - this.startTime,
        this.dT = 0.016,
        this.updateListeners(),
        this.pTime = this.time,
        this.tick30()
      }
      updateListeners() {
        this.listeners.map((e=>e(this.dT, this.appTime)))
      }
      addListener(e) {
        this.listeners.includes(e) || this.listeners.push(e)
      }
      removeListener(e) {
        let t = this.listeners.indexOf(e);
        t >= 0 && this.listeners.splice(t, 1)
      }
      updateSlowListeners() {
        this.slowListeners.map((e=>e(this.slowdT, this.appTime)))
      }
      addSlowListener(e) {
        this.slowListeners.includes(e) || this.slowListeners.push(e)
      }
      removeSlowListener(e) {
        let t = this.slowListeners.indexOf(e);
        t >= 0 && this.slowListeners.splice(t, 1)
      }
      updateStateListeners() {
        this.stateListeners.map((e=>e(this.paused)))
      }
      addStateListener(e) {
        this.stateListeners.includes(e) || this.stateListeners.push(e)
      }
      removeStateListener(e) {
        let t = this.stateListeners.indexOf(e);
        t >= 0 && this.stateListeners.splice(t, 1)
      }
      updateBlurListeners() {
        this.blurListeners.map((e=>e(this.blurred)))
      }
      addBlurListener(e) {
        this.blurListeners.includes(e) || this.blurListeners.push(e)
      }
      removeBlurListener(e) {
        let t = this.blurListeners.indexOf(e);
        t >= 0 && this.blurListeners.splice(t, 1)
      }
    };
    const D = {
    };
    let N = window.location.search.substring(1).split('&');
    for (let _c of N) {
      let e = _c.split('=');
      if (e[0].length) try {
        D[e[0]] = JSON.parse(e[1])
      } catch (Kc) {
        D[e[0]] = e[1].toString()
      }
    }
    var M = D;
    let C = 1 == M.autodrive;
    C || !1 === M.autodrive || (C = null !== window.localStorage.getItem('has-autodrive'));
    var j = new class extends l {
      set(e) {
        super.set(e),
        e ? window.localStorage.setItem('has-autodrive', !0) : window.localStorage.removeItem('has-autodrive')
      }
    }(C);
    const k = {
      bonk: {
        src: i.p + 'static/media/surface_hit.8d170970.wav',
        sound: null
      },
      autoOn: {
        src: i.p + 'static/media/auto_on.4166c93e.wav',
        sound: null,
        vol: 0.5
      },
      autoOff: {
        src: i.p + 'static/media/auto_off.6dfe6c40.wav',
        sound: null,
        vol: 0.5
      }
    };
    var z = new class {
      constructor() {
        this.loader = new h.d,
        this.hasInit = !1,
        this.muted = !1,
        this.prevLevel = 0.5,
        this.onAutodriveBound = this.onAutodrive.bind(this),
        this.onLevelChangedBound = this.onLevelChanged.bind(this),
        this.wasMuted = !1,
        this.onTickerStateBound = this.onTickerState.bind(this),
        this.fadeInBound = this.fadeIn.bind(this),
        this.fadeCounter = 0,
        this.fadeTime = 1,
        this.initListeners = [
        ],
        this.listener = new h.c,
        I.addStateListener(this.onTickerStateBound),
        I.addBlurListener(this.onTickerStateBound),
        this.listener.setMasterVolume(f.AudioLevel),
        this.prevLevel = f.AudioLevel,
        f.addListener(v.AudioLevel, this.onLevelChangedBound),
        j.addListener(this.onAutodriveBound)
      }
      onAutodrive(e) {
        e ? this.play('autoOn') : this.play('autoOff')
      }
      onLevelChanged(e) {
        this.muted = 0 == e,
        this.listener.setMasterVolume(e)
      }
      onTickerState(e) {
        I.paused || I.blurred ? (this.wasMuted = this.muted, this.listener.setMasterVolume(0)) : this.wasMuted || this.listener.setMasterVolume(f.AudioLevel)
      }
      init() {
        if (this.hasInit) return;
        let e;
        'running' !== this.listener.context.state && (this.listener.context.resume(), this.listener.setMasterVolume(0), I.addListener(this.fadeInBound));
        for (let t in k) e = k[t],
        this.loadAudio(e);
        this.hasInit = !0;
        for (let t of this.initListeners) t()
      }
      fadeIn(e) {
        this.fadeCounter += e;
        let t = Math.min(f.AudioLevel, this.fadeCounter / this.fadeTime);
        this.listener.setMasterVolume(t),
        this.fadeCounter / this.fadeTime >= 1 && I.removeListener(this.fadeInBound)
      }
      play(e) {
        e in k && k[e].sound && (k[e].sound.isPlaying && k[e].sound.stop(), k[e].sound.play())
      }
      loadAudio(e) {
        let t = new h.b(this.listener);
        this.loader.load(e.src, (i=>{
          t.setBuffer(i),
          e.sound = t,
          e.vol && t.setVolume(e.vol)
        }))
      }
      getAudio(e, t) {
        let i = new h.b(this.listener);
        this.loader.load(e, (e=>{
          i.setBuffer(e),
          t(i)
        }))
      }
      getPositionalAudio(e, t, i = null) {
        null == i && (i = new h.M(this.listener)),
        this.loader.load(e, (e=>{
          i.setBuffer(e),
          t(i)
        }))
      }
      mute() {
        this.muted = !0,
        this.listener.setMasterVolume(0)
      }
      unmute() {
        this.muted = !1,
        this.listener.setMasterVolume(1)
      }
      toggleMute() {
        I.paused ? this.wasMuted = !this.wasMuted : (this.muted = !this.muted, this.muted && f.AudioLevel > 0 && (this.prevLevel = f.AudioLevel), f.set(v.AudioLevel, this.muted ? 0 : this.prevLevel))
      }
      addInitListener(e) {
        this.initListeners.push(e)
      }
    };
    const S = 'reset',
    O = 'modelChanged',
    L = 'headlights';
    class R extends h.G {
      constructor() {
        super (),
        this.listeners = {
        },
        this.headlightColour = 16777215,
        this.geo = new h.G,
        this.pPosition = new h.W,
        this.frontAxlePosition = new h.W,
        this.fwd = new h.W,
        this.accel = new h.W,
        this.pVel = new h.W,
        this.vel = new h.W,
        this.velDir = new h.W,
        this.speed = 0,
        this.steer = 0,
        this.steerL = 0,
        this.steerR = 0,
        this.direction = 0,
        this.drive = 0,
        this.braking = !1,
        this.handbrake = !1,
        this.heading = 0,
        this.gradient = 0,
        this.roll = 0,
        this.pitch = 0,
        this.headlights = !0,
        this.headlightsManual = !1,
        this.downforce = 0,
        this.brakeForce = 0,
        this.brakeLerp = 0,
        this.slip = 0,
        this.speedLerp = 0,
        this.motionHeading = 0,
        this.wrongWay = !1,
        this.rockLonTarget = 0,
        this.rockLon = 0,
        this.rockLatTarget = 0,
        this.rockLat = 0,
        this.lights = {
          left: {
            light: null,
            target: null
          },
          right: {
            light: null,
            target: null
          }
        },
        this.hasInit = !1,
        this.steerDifferential = 1,
        this.rearSteerDifferential = 1,
        this.frSteerDifferential = 1,
        this.intensityFactor = 1,
        this.headlightIntensity = 1,
        this.add(this.geo),
        this.lightsContainer = new h.G;
        let e = new h.G,
        t = new h.T(16777215, 1, 80, 0.5, 0.5, 1.8);
        t.target = e,
        this.lights.left.light = t,
        this.lights.left.target = e;
        let i = new h.G;
        this.lights.right.target = i;
        let s = t.clone();
        s.target = i,
        this.lights.right.light = s,
        this.lightsContainer.add(t),
        this.lightsContainer.add(s),
        this.lightsContainer.add(e),
        this.lightsContainer.add(i),
        this.add(this.lightsContainer),
        this.setHeadlightColour(this.headlightColour),
        this.frustumCulled = !1,
        this.matrixAutoUpdate = !1,
        this.matrixWorldAutoUpdate = !1,
        this.hasInit = !0
      }
      setHeadlightColour(e) {
        this.headlightColour = e,
        this.lights.left.light.color.setHex(e),
        this.lights.right.light.color.setHex(e)
      }
      update() {
      }
      reset() {
        this.pPosition.copy(this.position),
        this.speed = 0,
        this.pVel.set(0, 0, 0),
        this.vel.set(0, 0, 0),
        this.velDir.set(0, 0, 0),
        this.accel.set(0, 0, 0),
        this.steer = 0,
        this.steerL = 0,
        this.steerR = 0,
        this.drive = 0,
        this.direction = 0,
        this.braking = !1,
        this.handbrake = !1,
        this.downforce = 0,
        this.brakeForce = 0,
        this.brakeLerp = 0,
        this.wrongWay = !1,
        this.slip = 0,
        this.frontAxlePosition.copy(this.position),
        this.fireEvent('reset')
      }
      updateSteer() {
        let e = Math.sin(this.steer),
        t = Math.cos(this.steer) * this.wheels.length * 2,
        i = 2 * this.wheels.length * e / (t - this.wheels.width * e),
        s = 2 * this.wheels.length * e / (t + this.wheels.width * e);
        this.steerL = Math.atan(i),
        this.steerR = Math.atan(s),
        this.frSteerDifferential = this.wheels.length / Math.sin(this.steer) / (this.wheels.length / Math.tan(this.steer)) || 1,
        this.bike || (this.steerDifferential = this.wheels.length / Math.sin(this.steerL) / (this.wheels.length / Math.sin(this.steerR)) || 1, this.rearSteerDifferential = this.wheels.length / i / (this.wheels.length / s) || 1, this.frSteerDifferential = this.wheels.length / Math.sin(this.steer) / (this.wheels.length / Math.tan(this.steer)) || 1, this.steerDifferential *= this.frSteerDifferential, this.rearSteerDifferential /= this.frSteerDifferential)
      }
      setModel(e) {
        this.reset(),
        this.metrics = e.metrics,
        this.wheels = e.wheels,
        this.cameras = e.cameras,
        this.bike = !!e.bike,
        this.hasInit && (this.lights.left.light.position.copy(this.metrics.headlightPos), this.lights.left.target.position.copy(this.metrics.headlightPos), this.lights.left.target.position.z += 1, this.lights.left.target.position.y -= 0.05, this.lights.right.light.position.copy(this.lights.left.light.position), this.lights.right.light.position.x *= - 1, this.lights.right.target.position.copy(this.lights.left.target.position), this.lights.right.target.position.x *= - 1),
        this.fireEvent(O)
      }
      setHeadlights(e, t = !1) {
        !e && !t && this.headlights && this.headlightsManual || (this.headlightsManual = (this.headlightsManual || t) && e, this.headlights = e, this.intensityFactor = e ? 1 : 0, this.setHeadlightIntensity(this.headlightIntensity), this.fireEvent(L))
      }
      setHeadlightIntensity(e) {
        this.headlightIntensity = e,
        this.lights.right.light.intensity = e * this.intensityFactor,
        this.lights.left.light.intensity = e * this.intensityFactor
      }
      fireEvent(e, t = null) {
        e in this.listeners && this.listeners[e].map((e=>e(t)))
      }
      addListener(e, t) {
        e in this.listeners || (this.listeners[e] = [
        ]),
        this.listeners[e].push(t)
      }
      removeListener(e, t) {
        if (!(e in this.listeners)) return;
        let i = this.listeners[e].indexOf(t);
        i >= 0 && this.listeners[e].splice(i, 1)
      }
    }
    var T = new R;
    const P = 0.3,
    G = window.localStorage.getItem('settings-camera-mode') || 0;
    var B = '\n\n  uniform sampler2D noiseMap;\n  uniform bool isNight;\n\n  attribute float variant;\n  // attribute vec3 groundNormal;\n  attribute float shadow;\n\n  #define SPRITE_NORMAL vec3(0.0, 1.0, 0.0);\n\n  varying vec2 vUvOffset;\n  varying float vShadow;\n  varying float vNoise;\n\n  varying float vLightGrass;\n  varying float vDarkGrass;\n  #ifdef TREES\n    uniform bool highDef;\n  #endif\n\n';
    var W = '\n\n  // Get uvLookup  from variant\n\n  /* Indexed into the texture as such:\n\n    2 | 3\n    - + -\n    0 | 1\n\n  */\n\n  vShadow = 1.0 - shadow;\n\n  // Common pieces for bush and grass\n  #if defined(GRASS) || defined(BUSH)\n    // We\'re only interested in the INSTANCE position for this, not vertex pos\n    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);\n\n    float fade = texture2D(noiseMap, vec2(\n      wPos.x / 100.0,\n      wPos.z / 100.0\n    )).r;\n\n    float fade0 = texture2D(noiseMap, vec2(\n      wPos.x / 800.0,\n      wPos.z / 800.0\n    )).r;\n\n    float fade1 = texture2D(noiseMap, vec2(\n      wPos.x / 6400.0,\n      wPos.z / 6400.0\n    )).r;\n\n    fade0 = min(max(0.0,(fade0 - 0.25) * 2.0), 1.0);\n    float fade1b = min(max(0.0,(fade1 - 0.25) * 2.0), 1.0);\n\n    float heightVal = min(1.0, wPos.y/100.0);\n\n    vDarkGrass = 1.0;//1.1 - fade1b * 0.1;\n    vLightGrass = max(0.0, fade1b * heightVal * (fade0 + heightVal));\n\n    if(variant < 2.0) {\n      vLightGrass *= variant / 4.0 + 0.5;\n    }\n\n    #ifdef GRASS\n      float vari = 2.0;\n      if(shadow > 0.1) {\n        vari = floor(fade * 2.0) + 2.0;\n      }\n\n    #endif\n\n    #ifdef BUSH\n      float vari = variant; // Use given actual type for bushes maybe?\n    #endif\n\n    vUvOffset.x = mod(vari, 2.0) * 0.5;\n    vUvOffset.y = floor(vari / 2.0) * 0.5;\n\n  #endif\n\n  // Grass specific pieces\n  #ifdef GRASS\n\n    vNoise = fade;\n\n    if((vLightGrass + vNoise / 10.0 > 0.5 || fade < 0.25) && variant > 0.8) {\n      // 0, 0 for lower left, which is the pale hay type\n      vUvOffset *= 0.0;\n    }\n\n    //// HEATHER\n\n    heightVal =\n      min(1.0, wPos.y / 170.0)\n      *\n      fade1\n      *\n      (texture2D(noiseMap, vec2(\n        wPos.x / 1200.0,\n        wPos.z / 1200.0\n      )).r / 2.0 + 0.5);\n\n    heightVal = smoothstep(0.47, 0.53, heightVal) * fade0;\n\n    if(heightVal > 0.5 && variant > 0.8) {\n\n      // Sink the bush at the edges of the heather patch\n      transformed.y -= 1.0 - heightVal;\n\n      vUvOffset.x = 0.5;\n      vUvOffset.y = 0.0;\n      vLightGrass = 1.0 - heightVal;// - 0.5) * 2.0;\n      vDarkGrass = 1.0;\n    }\n\n  #endif\n\n\n  #ifdef TREES\n\n    vec4 wPos = modelMatrix * instanceMatrix * vec4( 1.0 );\n\n    vNoise = texture2D(noiseMap, vec2(\n      wPos.x / 4000.0,\n      wPos.z / 4000.0\n    )).r\n    *\n    texture2D(noiseMap, vec2(\n      wPos.x / 800.0,\n      wPos.z / 800.0\n    )).r;\n    // *\n    // (min(1.0, wPos.y / 25.0)) * 2.0\n    // -\n    // 0.5;\n\n    // vNoise *= 0.4;\n\n    // float vari = texture2D(noiseMap, vec2(\n    //   wPos.x / 200.0,\n    //   wPos.z / 200.0\n    // )).r;\n    //\n    // // Manually sample ranges\n    // if(vari < 0.4) {\n    //   vari = 0.0;\n    // } else if(vari < 0.6) {\n    //   vari = 1.0;\n    // } else {\n    //   vari = 2.0;\n    // }\n\n    // abuse vShadow for more texture\n    if(highDef) {\n      vShadow = texture2D(noiseMap, vec2(\n        wPos.x / 20.0,\n        wPos.z / 20.0\n      )).r - 0.5;\n    }\n\n    vUvOffset.x = mod(variant, 2.0) * 0.5;\n    vUvOffset.y = floor(variant / 2.0) * 0.5;\n\n  #endif\n\n  #ifdef AUTO_NORMAL\n    vNormal = SPRITE_NORMAL;\n  #endif\n';
    var E = '\n  varying vec2 vUvOffset;\n  varying float vShadow;\n  varying float vNoise;\n\n  varying float vLightGrass;\n  varying float vDarkGrass;\n\n  uniform vec4 colouration;\n\n  #ifdef TREES\n    uniform sampler2D mapb;\n    uniform bool highDef;\n  #endif\n';
    var Z = '\n\nvec4 texelColor = texture2D( map, vUv + vUvOffset );\n\n  #ifdef GRASS\n    texelColor += colouration * vLightGrass * vNoise;\n    texelColor.rgb *= vDarkGrass;\n    texelColor.rgb *= vShadow;\n  #endif\n\n  #ifdef BUSH\n    texelColor.rgb *= 1.0 - (vLightGrass * 0.1);\n    texelColor.rgb *= vShadow;\n  #endif\n\n  #ifdef TREES\n    // Possibly use a second set\n    if(highDef == true) {\n      if(vNoise > 0.25) {\n        texelColor = texture2D( mapb, vUv + vUvOffset );\n      }\n      texelColor += colouration * vShadow;\n    }\n  #endif\n\n  diffuseColor *= texelColor;\n';
    const F = new h.U,
    H = (e, t = 1, i = h.O) =>{
      let s = F.load(e);
      return s.wrapS = i,
      s.wrapT = i,
      s.anisotropy = t,
      s
    },
    Q = (e, t = {
    }) =>{
      for (let i in t) e.userData[i] = {
        value: t[i]
      };
      return e.userData.isNight = {
        value: !1
      },
      i=>{
        for (let s in t) i.uniforms[s] = e.userData[s];
        i.uniforms.isNight = e.userData.isNight,
        i.vertexShader = i.vertexShader.replace('#define STANDARD', '#define STANDARD\n' + B),
        i.vertexShader = i.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n' + W),
        i.fragmentShader = i.fragmentShader.replace('#define STANDARD', '#define STANDARD\n' + E),
        i.fragmentShader = i.fragmentShader.replace('#include <normal_fragment_begin>', '\n  float faceDirection = -1.0;\n  vec3 normal = normalize(vNormal);  \n  vec3 geometryNormal = normal;\n'),
        i.fragmentShader = i.fragmentShader.replace('#include <map_fragment>', Z),
        i.fragmentShader = i.fragmentShader.replace('#include <lights_fragment_begin>', '\n/**\n * This is a template that can be used to light a material, it uses pluggable\n * RenderEquations (RE)for specific lighting scenarios.\n *\n * Instructions for use:\n * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n * - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n *\n * TODO:\n * - Add area light support.\n * - Add sphere light support.\n * - Add diffuse light probe (irradiance cubemap) support.\n */\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n#ifdef USE_CLEARCOAT\n\n\tgeometry.clearcoatNormal = clearcoatNormal;\n\n#endif\n\n#ifdef USE_IRIDESCENCE\n\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\n\tif ( material.iridescenceThickness == 0.0 ) {\n\n\t\tmaterial.iridescence = 0.0;\n\n\t} else {\n\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\n\t}\n\n\tif ( material.iridescence > 0.0 ) {\n\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\n\t\t// Iridescence F0 approximation\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\n\t}\n\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n/* REFERENCE\n\nvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n  vec3 lVector = spotLight.position - geometry.position;\n  light.direction = normalize( lVector );\n  float angleCos = dot( light.direction, spotLight.direction );\n  float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n  if ( spotAttenuation > 0.0 ) {\n    float lightDistance = length( lVector );\n    light.color = spotLight.color * spotAttenuation;\n    light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n    light.visible = ( light.color != vec3( 0.0 ) );\n  } else {\n    light.color = vec3( 0.0 );\n    light.visible = false;\n  }\n}\n\nstruct SpotLight {\n  vec3 position;\n  \n\t\tvec3 direction;\n  \n\t\tvec3 color;\n  \n\t\tfloat distance;\n  \n\t\tfloat decay;\n  \n\t\tfloat coneCos;\n  \n\t\tfloat penumbraCos;\n  \n\t\n}\n\n*/\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\n  #ifdef AUTO_NORMAL\n    geometry.normal = geometry.viewDir;\n  #endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n    // Temper the intensity since we\'re directly reflecting; 100%  is just too bright\n    spotLight.color *= 0.75;\n    // Extra tempering if autonorm (perfectly vertical)\n    #ifdef AUTO_NORMAL\n      spotLight.color *= 0.33;\n    #endif\n\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\n\t\t// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n  geometry.normal = normal;\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n')
      }
    },
    Y = e=>{
      e.vertexShader = e.vertexShader.replace('#define STANDARD', '#define STANDARD\n' + B),
      e.vertexShader = e.vertexShader.replace('#include <uv2_vertex>', '#include <uv2_vertex>\n' + W),
      e.fragmentShader = e.fragmentShader.replace('#define STANDARD', '#define STANDARD\n' + E),
      e.fragmentShader = e.fragmentShader.replace('#include <map_fragment>', Z)
    },
    V = (e, t = 0.75, i = 0, s = null, n = {
    }, a = {
    }) =>{
      let r = new h.F({
        map: H(e, i, h.h),
        alphaTest: t,
        side: h.k,
        depthTest: !0,
        roughness: 1,
        defines: n
      });
      return s && (r.normalMap = H(s, i)),
      r.onBeforeCompile = Q(r, a),
      r
    },
    U = (e, t = 0.75, i = 0, s = null, n = null, a = {
    }, r = {
    }) =>{
      let o = new h.F({
        map: H(e, i, h.O),
        alphaTest: t,
        side: h.k,
        depthTest: !0,
        roughness: 1,
        defines: a
      });
      return s && (o.normalMap = H(s, i)),
      o.onBeforeCompile = Q(o, r),
      o
    };
    var X = H;
    const J = [
      {
        midlineHorizon: 2000,
        midlineFineHorizon: 100,
        farSize: 200,
        viewDist: 200,
        fwdHorizon: 40,
        rearHorizon: 10,
        nearFwdHorizon: 15,
        wallGenHorizon: 65,
        wallRenderHorizon: 20
      },
      {
        midlineHorizon: 2000,
        midlineFineHorizon: 100,
        farSize: 400,
        viewDist: 800,
        fwdHorizon: 90,
        rearHorizon: 15,
        nearFwdHorizon: 25,
        wallGenHorizon: 80,
        wallRenderHorizon: 35
      },
      {
        midlineHorizon: 2000,
        midlineFineHorizon: 110,
        farSize: 700,
        viewDist: 1400,
        fwdHorizon: 180,
        rearHorizon: 20,
        nearFwdHorizon: 30,
        wallGenHorizon: 95,
        wallRenderHorizon: 50
      },
      {
        midlineHorizon: 2000,
        midlineFineHorizon: 125,
        farSize: 1000,
        viewDist: 2000,
        fwdHorizon: 250,
        rearHorizon: 30,
        nearFwdHorizon: 40,
        wallGenHorizon: 115,
        wallRenderHorizon: 70
      },
      {
        midlineFineHorizon: 50,
        farSize: 1000,
        fwdHorizon: 10,
        nearFwdHorizon: 10,
        wallGenHorizon: 40,
        wallRenderHorizon: 20
      }
    ],
    q = [
      {
        medRes: 5,
        nearRes: 10
      },
      {
        medRes: 8,
        nearRes: 16
      },
      {
        medRes: 10,
        nearRes: 20
      },
      {
        medRes: 12,
        nearRes: 24
      }
    ],
    K = isNaN(parseInt(window.localStorage.getItem('config-view-lod-index'))) ? 2 : parseInt(window.localStorage.getItem('config-view-lod-index'));
    let _ = isNaN(parseInt(window.localStorage.getItem('config-detail-lod-index'))) ? 1 : parseInt(window.localStorage.getItem('config-detail-lod-index')),
    $ = J[K],
    ee = q[_];
    const te = e=>{
      $ = J[e],
      me = $.farSize,
      xe = me / 10,
      we = $.viewDist,
      fe = we / Math.cos(ve * (Math.PI / 180) / 2 * (window.screen.availWidth / window.screen.availHeight)),
      ae = $.midlineHorizon,
      oe = $.midlineFineHorizon,
      Ie = $.fwdHorizon,
      De = $.rearHorizon,
      Ce = $.nearFwdHorizon,
      je = $.rearHorizon,
      We = $.wallGenHorizon,
      Ee = $.wallRenderHorizon,
      be.density = Math.sqrt(5 / (we * we))
    },
    ie = e=>{
      ee = q[e],
      _ = e,
      ye = ee.medRes,
      Me = ee.nearRes,
      be = e > 1 ? new h.q(16777215, Math.sqrt(5 / (we * we))) : new h.p(16777215, 0.1 * we, we)
    },
    se = (e, t, i) =>{
      be.color.setHex(e),
      be.near = t,
      be.far = i,
      be.isFogExp2 && (be.density = Math.sqrt(5 / (i * i)))
    },
    ne = () =>be;
    let ae = 1500;
    const re = 1000,
    he = ae - re;
    let oe = $.midlineFineHorizon,
    le = 7;
    const de = e=>{
      le = e
    },
    ce = new h.a(16777215, 0.1),
    pe = new h.s(16777215, 16777215, 0.2),
    ue = new h.j(16777215, 0.6);
    ue.sunOffset = new h.W(0, 100, 0);
    const ge = new h.i(16777215);
    let me = $.farSize,
    xe = me / 10;
    const ve = 68;
    let we = me * Math.floor(2.5),
    fe = we / Math.cos(ve * (Math.PI / 180) / 2 * (window.screen.availWidth / window.screen.availHeight));
    let be = new h.p(16777215, 0.1 * we, we);
    const Ae = 10;
    let ye = ee.medRes,
    Ie = $.fwdHorizon,
    De = $.rearHorizon;
    const Ne = 10;
    let Me = ee.nearRes,
    Ce = $.nearFwdHorizon,
    je = De;
    let ke = 1.4;
    const ze = e=>{
      ke = e
    };
    let Se = 0.95;
    const Oe = e=>{
      Se = e
    };
    let Le = 0.85;
    const Re = e=>{
      Le = e
    };
    let Te = 3;
    const Pe = e=>{
      Te = e
    },
    Ge = 0.4,
    Be = new h.F({
      map: null,
      alphaTest: 0.75
    });
    let We = $.wallGenHorizon,
    Ee = $.wallRenderHorizon;
    const Ze = 30;
    $.treeRenderHorizon;
    const Fe = new h.C({
      depthTest: !1,
      fog: !0,
      map: X(null, 2)
    });
    Fe.userData.nearCol = {
      value: new h.i(0)
    },
    Fe.userData.farCol = {
      value: new h.i(65535)
    },
    Fe.userData.hasClouds = {
      value: !0
    },
    Fe.userData.camPos = {
      value: new h.W
    },
    Fe.userData.time = {
      value: 0
    },
    Fe.onBeforeCompile = e=>(e.uniforms.nearCol = Fe.userData.nearCol, e.uniforms.farCol = Fe.userData.farCol, e.uniforms.hasClouds = Fe.userData.hasClouds, e.uniforms.camPos = Fe.userData.camPos, e.uniforms.time = Fe.userData.time, e.vertexShader = e.vertexShader.replace('#include <uv_pars_vertex>', '#include <uv_pars_vertex>\n\n  uniform float time;\n  uniform vec3 camPos;\n\n  varying vec4 wPos;\n  varying vec2 vUUv;\n  varying vec2 vUUUv;\n\n  float skyScale = 7000.0; // Width of sky texture in metres\n  float skyScale2 = 5600.0;\n'), e.vertexShader = e.vertexShader.replace('#include <uv_vertex>', '#include <uv_vertex>\n\n  wPos = modelMatrix * vec4( position, 1.0 );\n\n  // Distance (height) from camera to virtual plane\n  // Big hmm here, these values may intersect with road on rare occasions, could min them\n  float h0 = 350.0 - camPos.y;\n  // Distance from camera to image plane\n  float h1 = 450.0 - camPos.y;\n\n  float lowerScale = skyScale2 * h1 / h0;\n  float motionScale = (h1 - h0) / h0;\n\n  vUUv.x = wPos.x + time;\n  vUUv.y = wPos.z + time;\n\n  vUUv /= skyScale;\n\n  vUUUv.x = ((wPos.x + camPos.x * motionScale ) / lowerScale) + (3000.0 + time) / skyScale2;\n  vUUUv.y = ((wPos.z + camPos.z * motionScale ) / lowerScale) + (3000.0 + time) / skyScale2;\n\n'), e.vertexShader = e.vertexShader.replace('#include <fog_vertex>', 'vFogDepth = -mvPosition.z;\n#ifdef FOG_EXP2\nvFogDepth = max(0.0, (vFogDepth - fogNear) * (fogFar / (fogFar - fogNear)));\n#endif\n'), e.fragmentShader = e.fragmentShader.replace('#include <uv_pars_fragment>', '#include <uv_pars_fragment>\n\n  uniform vec3 nearCol;\n  uniform vec3 farCol;\n  uniform bool hasClouds;\n\n  varying vec2 vUUv;\n  varying vec2 vUUUv;\n\n  const highp float NOISE_GRANULARITY = 0.1;\n\n  highp float random(vec2 coords) {\n     return (fract(sin(dot(coords.xy, vec2(12.9898,78.233))) * 43758.5453) * 0.2) - 0.1;\n  }\n'), e.fragmentShader = e.fragmentShader.replace('#include <aomap_fragment>', '#include <aomap_fragment>\n\n  float vX = (vUv.x - 0.5) * 5.0;\n  float vY = (vUv.y - 0.5) * 5.0;\n\n  float dist = max(0.0, 1.0 - sqrt((vX * vX) + (vY * vY)));\n\n  // DITHERING - todo only on high qual?\n  // dist += random(vec2(vX, vY));\n\n  vec4 skyCol = vec4(mix(farCol, nearCol, dist*dist), 1.0);\n\n  if(hasClouds) {\n\n    // vec4 upperClouds = texture2D(map, vUUv);\n    // vec4 lowerClouds = texture2D(map, vUUUv);\n    //\n    // if(lowerClouds.a > 0.5) {\n    //   lowerClouds.rgb = mix(lowerClouds.rgb, vec3(1.0, 0.5, 0.28), (lowerClouds.a - 0.5) * 2.0);\n    // }\n    //\n    // vec4 cloudCol = max(upperClouds, lowerClouds);\n\n    vec4 cloudCol = max(texture2D( map, vUUv ), texture2D(map, vUUUv)); // MAX\n    // vec4 cloudCol = texture2D( map, vUUv ) * texture2D(map, vUUUv); // MULTIPLY\n    // vec4 cloudCol = (texture2D(map, vUUv) + texture2D( map, vUUUv )) / 2.0; // AVERAGE\n\n    // Apply colour if we have it?\n\n    diffuseColor = mix(skyCol, cloudCol, cloudCol.a);\n\n  } else {\n    diffuseColor = skyCol;\n  }\n\n'), e);
    const He = new h.I(ve, 1, 0.25, fe);
    He.fwd = new h.W(0, 0, 1);
    var Qe = He;
    const Ye = () =>Date.now().toString(16).substring(3);
    let Ve = Ye(),
    Ue = 0,
    Xe = window.location.search.substring(1).split('&'),
    Je = localStorage.getItem('seed');
    if (Je) {
      console.log('Restoring seed from local storage'),
      Ve = Je;
      let e = localStorage.getItem('config-scene-topography') || 'normal',
      t = Ve + '?' + e,
      i = 0;
      try {
        i = JSON.parse(localStorage.getItem(t)) || 0,
        console.log('Restoring saved progress to node ', i)
      } catch (Kc) {
        console.warn('Could not load saved progress for seed ', Ve)
      }
      Ue = i
    }
    if (Xe.length) for (let _c of Xe) {
      let e = _c.split('=');
      if ('seed' == e[0]) console.log('Overriding seed with querystring'),
      Ve = e[1];
       else if ('node' == e[0]) {
        console.log('Overriding start node with querystring');
        try {
          Ue = JSON.parse(e[1])
        } catch (Kc) {
          console.error('Invalid start node param')
        }
      }
    }
    localStorage.setItem('seed', Ve);
    const qe = (e = null, t = !1) =>(null === e && (e = Ye()), (e = e.toString()) == Ve || !Ke(e) && (localStorage.setItem('seed', e), t && window.location.reload(), Ve = e, !0)),
    Ke = e=>{
      let t = e.toString();
      return !!(t.length <= 0 || t.includes('?') || t.includes(' ')) && (console.warn('Invalid seed ', t), !0)
    };
    Ve = Ve.toString(),
    console.log('SEED: ', Ve);
    if (Je = localStorage.getItem('start-node'), Je) {
      console.log('Restoring starting node as ', Je);
      try {
        Ue = JSON.parse(Je)
      } catch (Kc) {
        console.warn('Failed to retrieve intial node from ls')
      }
    }
    localStorage.removeItem('start-node');
    Ue > 0 && (Ue -= 5);
    var _e = i(15);
    const $e = {
      discretisedTail: null,
      head: null,
      tail: null,
      vehicleIndex: 0,
      vehicleNode: null,
      initIndex: 0
    },
    et = {
    },
    tt = (e, t, i, s = !1, n = !1) =>{
      for (et.checkNode = i, et.dist = (i.p.x - e) * (i.p.x - e) + (i.p.z - t) * (i.p.z - t), et.closestDist = et.dist, et.closestNode = et.checkNode, et.closestFwdDist = et.dist, et.closestRearDist = et.dist, et.checkInterval = 10; et.checkInterval > 0; et.checkInterval -= 9) {
        for (et.checkMargin = 10 == et.checkInterval ? 1.9 : 1.2, et.closestFwdNode = et.closestNode, et.closestRearNode = et.closestNode, et.lastChance = !1, et.checkCount = 0, et.checkNode = et.closestFwdNode; !(et.checkCount >= 10 || et.checkNode.i + et.checkInterval > $e.tail.i); ) {
          if (et.checkInterval > 1 ? et.checkNode = et.checkNode.next.next.next.next.next.next.next.next.next.next : et.checkNode = et.checkNode.next, et.dist = (et.checkNode.p.x - e) * (et.checkNode.p.x - e) + (et.checkNode.p.z - t) * (et.checkNode.p.z - t), et.dist < et.closestDist) et.lastChance = !1,
          et.closestDist = et.dist,
          et.closestFwdDist = et.closestDist,
          et.closestFwdNode = et.checkNode;
           else if (et.dist < et.closestDist * et.checkMargin) et.lastChance = !1;
           else {
            if (et.lastChance) break;
            et.lastChance = !0
          }
          et.checkCount++
        }
        for (et.checkNode = et.closestRearNode, et.lastChance = !1, et.checkCount = 0; !(et.checkCount >= 10 || et.checkNode.i - et.checkInterval < $e.head.i); ) {
          if (et.checkInterval > 1 ? et.checkNode = et.checkNode.prev.prev.prev.prev.prev.prev.prev.prev.prev.prev : et.checkNode = et.checkNode.prev, et.dist = (et.checkNode.p.x - e) * (et.checkNode.p.x - e) + (et.checkNode.p.z - t) * (et.checkNode.p.z - t), et.dist < et.closestDist) et.lastChance = !1,
          et.closestDist = et.dist,
          et.closestRearDist = et.closestDist,
          et.closestRearNode = et.checkNode;
           else if (et.dist < et.closestDist * et.checkMargin) et.lastChance = !1;
           else {
            if (et.lastChance) break;
            et.lastChance = !0
          }
          et.checkCount++
        }
        if (et.closestFwdDist < et.closestRearDist ? et.closestNode = et.closestFwdNode : et.closestNode = et.closestRearNode, !s) break
      }
      return {
        n: et.closestNode,
        d2: et.closestDist
      }
    },
    it = (e, t, i, s = !1, n = !1) =>{
      var a,
      r;
      if (et.side = i.n.x * (t - i.p.z) - i.n.z * (e - i.p.x), n && console.log(e, t, i.p.x, i.p.z), et.side < 0 && (null === (a = i.next) || void 0 === a ? void 0 : a.next)) for (et.t = i.next.n.x * (t - i.next.p.z) - i.next.n.z * (e - i.next.p.x); et.t < 0 && i.next; ) et.side = et.t,
      i = i.next,
      et.t = i.next.n.x * (t - i.next.p.z) - i.next.n.z * (e - i.next.p.x);
       else for (; et.side > 0 && i.prev; ) i = i.prev,
      et.side = i.n.x * (t - i.p.z) - i.n.z * (e - i.p.x);
      if (et.x1 = i.p.x, et.z1 = i.p.z, et.x2 = i.next.p.x, et.z2 = i.next.p.z, et.len = (et.x2 - et.x1) * (et.x2 - et.x1) + (et.z2 - et.z1) * (et.z2 - et.z1), et.t = ((e - et.x1) * (et.x2 - et.x1) + (t - et.z1) * (et.z2 - et.z1)) / et.len, et.t = Math.max(Math.min(et.t, 1), 0), s && (null === (r = i.next.ps) || void 0 === r ? void 0 : r.length)) {
        var h,
        o;
        if (et.t1 = Math.min(0.999, et.t) * i.ps.length, et.t2 = Math.floor(et.t1), et.t1 = et.t1 - et.t2, et.pa = i.ps[et.t2], et.na = i.ns[et.t2], et.pb = i.next.p, et.nb = i.next.n, et.t2 < i.ps.length - 1 && (et.pb = i.ps[et.t2 + 1], et.nb = i.ns[et.t2 + 1]), n && console.log(et.t1, et.t2), void 0 === et.na || void 0 === et.pa) console.log('UNDEFINED looking up ', e, t),
        console.log(i),
        console.log(i.ps),
        console.log(null === (h = i.ps) || void 0 === h ? void 0 : h.length),
        console.log(i.ns),
        console.log(null === (o = i.ns) || void 0 === o ? void 0 : o.length),
        console.log(et.t1, et.t2);
        return et.side = et.na.x * (t - et.pa.z) - et.na.z * (e - et.pa.x),
        et.side < 0 && et.t2 < i.ps.length - 2 ? et.nb.x * (t - et.pb.z) - et.nb.z * (e - et.pb.x) < 0 && (et.t2++, et.pa = i.ps[et.t2], et.pb = i.ps[et.t2 + 1], et.na = i.ns[et.t2]) : et.side > 0 && et.t2 > 0 && (et.t2--, et.pa = i.ps[et.t2], et.pb = i.ps[et.t2 + 1], et.na = i.ns[et.t2]),
        et.x1 = et.pa.x,
        et.z1 = et.pa.z,
        et.x2 = et.pb.x,
        et.z2 = et.pb.z,
        et.len = (et.x2 - et.x1) * (et.x2 - et.x1) + (et.z2 - et.z1) * (et.z2 - et.z1),
        et.t1 = ((e - et.x1) * (et.x2 - et.x1) + (t - et.z1) * (et.z2 - et.z1)) / et.len,
        et.x3 = et.x1 + et.t1 * (et.x2 - et.x1),
        et.z3 = et.z1 + et.t1 * (et.z2 - et.z1),
        et.x1 = et.x3 - e,
        et.z1 = et.z3 - t,
        et.side = et.x1 * et.na.x + et.z1 * et.na.z,
        {
          d: Math.sqrt(et.x1 * et.x1 + et.z1 * et.z1),
          y: et.pa.y + et.t1 * (et.pb.y - et.pa.y),
          da: i.da + et.t * (i.next.da - i.da),
          s: et.side < 0 ? - 1 : 1,
          w: i.w + et.t * (i.next.w - i.w),
          g: i.g + et.t * (i.next.g - i.g),
          t: et.t,
          n: i
        }
      }
      return et.x3 = et.x1 + et.t * (et.x2 - et.x1),
      et.z3 = et.z1 + et.t * (et.z2 - et.z1),
      et.x1 = et.x3 - e,
      et.z1 = et.z3 - t,
      et.side = et.x1 * i.n.x + et.z1 * i.n.z,
      {
        d: Math.sqrt(et.x1 * et.x1 + et.z1 * et.z1),
        y: i.p.y + et.t * (i.next.p.y - i.p.y),
        da: i.da + et.t * (i.next.da - i.da),
        s: et.side < 0 ? - 1 : 1,
        w: i.w + et.t * (i.next.w - i.w),
        g: i.g + et.t * (i.next.g - i.g),
        t: et.t,
        n: i
      }
    };
    var st = $e;
    const nt = new h.W(0, 1, 0),
    at = {
    };
    class rt {
      static initialise(e) {
        console.log('Loading near grid cell...'),
        e()
      }
      constructor(e, t, i, s = !1) {
        this.retired = !1,
        this.isDebug = !1,
        this.centroid = new h.W,
        this.genRow = 0,
        this.genIndex = 0,
        this.nodeIndex = 0,
        this.meshReady = !1,
        this.foliRow = 0,
        this.foliIndex = 0,
        this.foliageReady = !1,
        this.lod = 0,
        this.tileCoords = {
          x: 0,
          z: 0
        },
        this.originNode = null,
        this.isDebug = !1,
        this.farCell = {
          x: 0,
          z: 0
        },
        this.initialised = !1,
        this.getHeight = () =>{
        },
        this.lod = e,
        this.heightmap = i,
        this.heights = [
        ],
        this.res = t,
        this.res1 = t + 1,
        this.grads = [
        ],
        this.norms = new Float32Array(this.res1 * this.res1 * 3),
        this.verts = new Float32Array(this.res1 * this.res1 * 3),
        this.roadProx = new Float32Array(this.res1 * this.res1),
        this.treeMask = new Float32Array(this.res1 * this.res1),
        this.curves = new Float32Array(this.res1 * this.res1),
        this.signedRoadProx = [
        ]
      }
      initGeneration(e, t, i, s = !1, n) {
        if (this.initialised = !1, this.retired = !1, this.hide(), this.active = !1, this.originNode = e, this.originIndex = e.i, this.coords = t, this.tileCoords = {
          x: t.x % xe,
          z: t.z % xe
        }, this.heightmap = n, this.tileCoords.x < 0 && (this.tileCoords.x += xe), this.tileCoords.z < 0 && (this.tileCoords.z += xe), this.originPos = {
          x: t.x * Ne,
          y: 0,
          z: t.z * Ne
        }, this.originPos.y = this.heightmap.getXZ(this.originPos.x, this.originPos.z), this.centroid.set(this.originPos.x + 5, this.originPos.y, this.originPos.z + 5), this.tileset = i, this.tileIndex = i.nextTileIndex++, this.tileset.registerCallback(this.tileIndex, (e=>{
          this.tileIndex = e
        })), this.tileset.setRetireIndex(this.originIndex), 0 == this.tileIndex && this.tileset.setOrigin(this.originPos), this.indexOffset = this.tileIndex * this.tileset.vertexCount, this.genRow = 0, this.genIndex = 0, this.farCell.x = Math.floor(this.originPos.x / me), this.farCell.z = Math.floor(this.originPos.z / me), this.preHeights = [
        ], 0 == wh.value.detailLodIndex ? (this.precomputeHeights(), this.getHeight = this.lookupHeight2) : this.getHeight = n.getXZ.bind(n), this.preCurves = [
        ], this.precomputeCurvature(), this.initialised = this.preInitialise(s), this.initialised && s) {
          for (; !this.generate(); );
          this.display(1 == this.lod)
        }
      }
      preInitialise() {
        return !0
      }
      static sharpLerpAB(e, t, i) {
        return (t - e) * i + e
      }
      static hockeyLerp(e) {
        if (e > 0.3333) {
          let t = 1 - (e - 0.3333) / 0.6667;
          return 1 - t * t * 0.5
        }
        return 1.5 * e
      }
      getNormal(e, t) {
        let i,
        s;
        i = e < 0 ? Math.floor((Ne + e % Ne) / Ne * this.res) : Math.floor(e % Ne / Ne * this.res),
        s = t < 0 ? Math.floor((Ne + t % Ne) / Ne * this.res) : Math.floor(t % Ne / Ne * this.res);
        let n = 3 * (i * this.res1 + s);
        return [this.norms[n],
        this.norms[n + 1],
        this.norms[n + 2]]
      }
      getNormalAtIndex(e) {
      }
      lookupHeight(e, t) {
        return at.tx = (e - this.originPos.x) / Ne * this.res,
        at.tz = (t - this.originPos.z) / Ne * this.res,
        at.x = Math.floor(at.tx),
        at.z = Math.floor(at.tz),
        at.tx -= at.x,
        at.tz -= at.z,
        at.xi = at.x * this.res1,
        at.zi = at.z,
        at.c1 = this.heights[at.xi + at.zi] * (1 - at.tx) + this.heights[at.xi + this.res1 + at.zi] * at.tx,
        at.c2 = this.heights[at.xi + at.zi + 1] * (1 - at.tx) + this.heights[at.xi + this.res1 + at.zi + 1] * at.tx,
        at.c1 * (1 - at.tz) + at.c2 * at.tz
      }
      lerpHeight(e, t, i) {
        return at.lh = 0,
        i.h = i.n.h + i.t * (i.n.next.h - i.n.h),
        i.gfa = i.n.gfa + i.t * (i.n.next.gfa - i.n.gfa),
        i.ga = Math.max(Math.abs(i.g), Math.abs(i.h)) / 3.6,
        i.w += Ge + i.ga,
        i.y -= 0.015 + 0.025 * i.gfa,
        i.ga = 1 - i.ga * i.ga,
        at.rm = 4 + 16 * Math.min(0.75, Math.max(0.4, i.ga)),
        i.d < i.w + at.rm ? i.d < i.w && !i.n.bridge ? at.lh = i.y : (at.lt = Math.max(0, Math.min(1, 2 * (i.d - i.w) / at.rm)), at.lt = rt.hockeyLerp(at.lt), at.lh = this.getHeight(e, t), i.n.bridge && at.lh < 0 && (at.lh > - i.y ? at.lt = Math.max(at.lt, at.lh / - i.y) : at.lt = 1), at.lh = at.lh * at.lt + i.y * (1 - at.lt)) : at.lh = this.getHeight(e, t),
        at.lh
      }
      static lerpHeightGlobal(e, t, i, s) {
        let n = 0;
        if (i.ga = Math.max(Math.abs(i.g), Math.abs(i.n.h)) / 3.6, i.w += Ge + i.ga, i.y -= 0.01 + 0.02 * i.n.gfa, i.ga = 1 - i.ga * i.ga, at.rm = 4 + 16 * Math.min(0.75, Math.max(0.4, i.ga)), i.d < i.w + at.rm) if (i.d < i.w && !i.n.bridge) n = i.y;
         else {
          let a = Math.max(0, Math.min(1, 2 * (i.d - i.w) / at.rm));
          a = rt.hockeyLerp(a),
          n = s(e, t),
          i.n.bridge && n < 0 && (a = n > - i.y ? Math.max(a, n / - i.y) : 1),
          n = n * a + i.y * (1 - a)
        } else n = s(e, t);
        return n
      }
      lookupHeight2(e, t) {
        return at.tx = (e - this.originPos.x) / Ne,
        at.tz = (t - this.originPos.z) / Ne,
        at.tx < 0 ? (at.tx += 1, at.tz < 0 ? (at.tz += 1, at.c1 = this.preHeights[0] * (1 - at.tx) + this.preHeights[1] * at.tx, at.c2 = this.preHeights[4] * (1 - at.tx) + this.preHeights[5] * at.tx) : at.tz > 1 ? (at.tz -= 1, at.c1 = this.preHeights[8] * (1 - at.tx) + this.preHeights[9] * at.tx, at.c2 = this.preHeights[12] * (1 - at.tx) + this.preHeights[13] * at.tx) : (at.c1 = this.preHeights[4] * (1 - at.tx) + this.preHeights[5] * at.tx, at.c2 = this.preHeights[8] * (1 - at.tx) + this.preHeights[9] * at.tx)) : at.tx > 1 ? (at.tx -= 1, at.tz < 0 ? (at.tz += 1, at.c1 = this.preHeights[2] * (1 - at.tx) + this.preHeights[3] * at.tx, at.c2 = this.preHeights[6] * (1 - at.tx) + this.preHeights[7] * at.tx) : at.tz > 1 ? (at.tz -= 1, at.c1 = this.preHeights[10] * (1 - at.tx) + this.preHeights[11] * at.tx, at.c2 = this.preHeights[14] * (1 - at.tx) + this.preHeights[15] * at.tx) : (at.c1 = this.preHeights[6] * (1 - at.tx) + this.preHeights[7] * at.tx, at.c2 = this.preHeights[10] * (1 - at.tx) + this.preHeights[11] * at.tx)) : at.tz < 0 ? (at.tz += 1, at.c1 = this.preHeights[1] * (1 - at.tx) + this.preHeights[2] * at.tx, at.c2 = this.preHeights[5] * (1 - at.tx) + this.preHeights[6] * at.tx) : at.tz > 1 ? (at.tz -= 1, at.c1 = this.preHeights[9] * (1 - at.tx) + this.preHeights[10] * at.tx, at.c2 = this.preHeights[13] * (1 - at.tx) + this.preHeights[14] * at.tx) : (at.c1 = this.preHeights[5] * (1 - at.tx) + this.preHeights[6] * at.tx, at.c2 = this.preHeights[9] * (1 - at.tx) + this.preHeights[10] * at.tx),
        at.c1 * (1 - at.tz) + at.c2 * at.tz
      }
      generate() {
        if (!this.initialised) return this.initialised = this.preInitialise(),
        !1;
        if (this.genRow > this.res) return !0;
        let e,
        t,
        i,
        s,
        n,
        a,
        r,
        h,
        o;
        this.genIndex = this.genRow * (this.res + 1) * 3,
        h = this.genRow / this.res * 10;
        for (let l = 0; l <= this.res; l++) o = l / this.res * 10,
        e = this.genIndex + 3 * l,
        t = e / 3,
        a = h + this.originPos.x,
        r = o + this.originPos.z,
        n = it(a, r, this.originNode, 1 == this.lod),
        n.e = Ge + Math.abs(n.da),
        this.signedRoadProx[t] = n.d - (n.w + n.e),
        i = n.d - n.w,
        s = this.lerpHeight(a, r, n),
        this.isDebug && console.log(n.t, n.n.h, n.n.gfa, n.n.next.gfa),
        this.heights[t] = s,
        this.roadProx[t] = i,
        this.treeMask[t] = 0,
        this.verts[e] = a - this.tileset.origin.x,
        this.verts[e + 1] = s - this.tileset.origin.y,
        this.verts[e + 2] = r - this.tileset.origin.z;
        return this.genRow > 0 && (this.computeSquareNormalsRow(this.genRow - 1), this.postProcessRow(this.genRow - 1)),
        this.genRow++,
        this.genRow > this.res && (this.computeSquareNormalsRow(this.genRow - 1), this.centroid.y = (this.heights[0] + this.heights[this.res] + this.heights[this.res * this.res1] + this.heights[this.res1 * this.res + this.res]) / 4, this.centroid.sub(this.tileset.origin), this.postProcessRow(this.genRow - 1), this.postProcessCell()),
        this.genRow > this.res
      }
      postProcessRow(e) {
      }
      postProcessCell() {
      }
      computeSquareNormalsRow(e) {
        let t,
        i,
        s,
        n,
        a,
        r,
        o,
        l,
        d,
        c,
        p = Ne / this.res,
        u = 2 * p,
        g = new h.W,
        m = new h.W;
        for (d = e * this.res1, t = 0; t <= this.res; t++) {
          r = e * p + this.originPos.x,
          o = t * p + this.originPos.z,
          0 == t ? (r = e * p + this.originPos.x, o = this.originPos.z - p, l = it(r, o, this.originNode, 1 == this.lod), n = this.lerpHeight(r, o, l)) : n = this.heights[d + (t - 1)],
          t == this.res ? (r = e * p + this.originPos.x, o = this.originPos.z + (t + 1) * p, l = it(r, o, this.originNode, 1 == this.lod), a = this.lerpHeight(r, o, l)) : a = this.heights[d + (t + 1)],
          0 == e ? (r = this.originPos.x - p, o = t * p + this.originPos.z, l = it(r, o, this.originNode, 1 == this.lod), i = this.lerpHeight(r, o, l)) : i = this.heights[(e - 1) * this.res1 + t],
          e == this.res ? (r = (e + 1) * p + this.originPos.x, o = t * p + this.originPos.z, l = it(r, o, this.originNode, 1 == this.lod), s = this.lerpHeight(r, o, l)) : s = this.heights[(e + 1) * this.res1 + t],
          g.set(u, s - i, 0),
          m.set(0, a - n, u),
          g.cross(m).normalize().negate(),
          c = 3 * (d + t),
          this.norms[c] = g.x,
          this.norms[c + 1] = g.y,
          this.norms[c + 2] = g.z;
          let h = e / this.res1,
          x = t / this.res1,
          v = this.preCurves[0] * (1 - h) + this.preCurves[1] * h,
          w = this.preCurves[2] * (1 - h) + this.preCurves[3] * h;
          this.curves[d + t] = v * (1 - x) + w * x,
          this.grads[d + t] = 1 - Math.abs(g.dot(nt))
        }
      }
      precomputeHeights() {
        this.preHeights.length = 0;
        let e,
        t,
        i = this.originPos.x,
        s = this.originPos.z;
        for (t = - 1; t < 3; t++) for (e = - 1; e < 3; e++) this.preHeights.push(this.heightmap.getXZ(i + 10 * e, s + 10 * t))
      }
      precomputeCurvature() {
        let e = this.originPos.x,
        t = this.originPos.z;
        this.getCurvature(e, t),
        this.getCurvature(e + 10, t),
        this.getCurvature(e, t + 10),
        this.getCurvature(e + 10, t + 10)
      }
      getCurvature(e, t, i = 5) {
        let s = this.heightmap.getXZLayer(e - i, t, 0) + this.heightmap.getXZLayer(e + i, t, 0) + this.heightmap.getXZLayer(e, t - i, 0) + this.heightmap.getXZLayer(e, t + i, 0);
        s = s / 4 - this.heightmap.getXZ(e, t),
        this.preCurves.push(0.02 * s)
      }
      display(e = !1) {
        this.active = !0,
        this.tileset.tileReady(this.tileIndex, this.verts, this.norms, this.curves, this.roadProx, this.treeMask, this.centroid, e)
      }
      show() {
        this.tileset.draw(),
        this.active = !0
      }
      hide() {
        this.active = !1
      }
      retire() {
        this.tileset.hideTile(this.tileIndex),
        this.retired = !0
      }
    }
    var ht = rt;
    class ot extends h.g {
      constructor(e, t) {
        super ();
        let i,
        s,
        n,
        a,
        r = [
        ],
        o = [
        ],
        l = [
        ],
        d = [
        ];
        this.res = e,
        this.size = t,
        this.count = (e + 1) * (e + 1);
        for (let h = 0; h <= e; h++) for (let c = 0; c <= e; c++) r.push(h / e * t, 0, c / e * t),
        l.push(0),
        h < e && c < e && (i = h * (e + 1) + c, s = h * (e + 1) + (c + 1), n = (h + 1) * (e + 1) + c, a = (h + 1) * (e + 1) + (c + 1), o.push(i, s, n), o.push(s, a, n)),
        d.push(0);
        this.setIndex(o),
        this.setAttribute('position', new h.o(new Float32Array(r), 3)),
        this.setAttribute('heightOffset', new h.o(new Float32Array(l), 1)),
        this.attributes.heightOffset.setUsage(h.l),
        this.setAttribute('normal', new h.o(new Float32Array(r.length), 3)),
        this.attributes.normal.setUsage(h.l),
        this.setAttribute('curvature', new h.o(new Float32Array(d), 1)),
        this.attributes.curvature.setUsage(h.l)
      }
      computeBoundingSphere() {
        null == this.boundingSphere && (this.boundingSphere = new h.R(new h.W, 0));
        const e = this.attributes.position.array,
        t = this.attributes.heightOffset.array;
        let i = e.length,
        s = t.length,
        n = e[i - 3] - e[0],
        a = t[s - 1] - t[0],
        r = e[i - 1] - e[2],
        o = n * n + a * a + r * r,
        l = this.res * (this.res + 1),
        d = this.res,
        c = 3 * l,
        p = 3 * d;
        n = e[p] - e[c],
        a = t[d] - t[l],
        r = e[p + 2] - e[c + 2];
        let u = n * n + a * a + r * r;
        u > o ? (this.boundingSphere.radius = Math.sqrt(u) / 2, this.boundingSphere.center.set((e[c] + e[p]) / 2, (t[l] + t[d]) / 2, (e[c + 2] + e[p + 2]) / 2)) : (this.boundingSphere.radius = Math.sqrt(o) / 2, this.boundingSphere.center.set((e[0] + e[i - 3]) / 2, (t[0] + t[s - 1]) / 2, (e[2] + e[i - 1]) / 2)),
        isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
      }
      computeTriangleNormals() {
        const e = this.index,
        t = this.attributes.position,
        i = this.attributes.normal,
        s = new h.W,
        n = new h.W,
        a = new h.W,
        r = new h.W,
        o = new h.W,
        l = new h.W,
        d = new h.W,
        c = new h.W;
        let p,
        u,
        g;
        for (let h = 0, m = e.count; h < m; h += 3) p = e.getX(h + 0),
        u = e.getX(h + 1),
        g = e.getX(h + 2),
        s.fromBufferAttribute(t, p),
        n.fromBufferAttribute(t, u),
        a.fromBufferAttribute(t, g),
        d.subVectors(a, n),
        c.subVectors(s, n),
        d.cross(c),
        r.fromBufferAttribute(i, p),
        o.fromBufferAttribute(i, u),
        l.fromBufferAttribute(i, g),
        r.add(d),
        o.add(d),
        l.add(d),
        i.setXYZ(p, r.x, r.y, r.z),
        i.setXYZ(u, o.x, o.y, o.z),
        i.setXYZ(g, l.x, l.y, l.z);
        this.normalizeNormals(),
        this.attributes.normal.needsUpdate = !0
      }
    }
    const lt = new h.W(0, 1, 0),
    dt = {
      vecV: new h.W,
      vecH: new h.W
    };
    var ct = class {
      constructor(e, t) {
        this.isDebug = !1,
        this.genRow = 0,
        this.genIndex = 0,
        this.nodeIndex = 0,
        this.latestIndex = 0,
        this.overlapIndex = 0,
        this.overlapCells = [
        ],
        this.needsOverlapRedraw = !1,
        this.ready = !1,
        this.originNode = null,
        this.exitNode = null,
        this.isDebug = !1,
        this.res = xe,
        this.res1 = this.res + 1,
        this.res3 = 3 * this.res1,
        this.size = me,
        this.heightmap = e,
        this.heights = [
        ],
        this.grads = [
        ],
        this.geo = new ot(this.res, this.size),
        this.ground = new h.B(this.geo, t),
        this.verts = this.geo.attributes.position.array,
        this.heightOffsets = this.geo.attributes.heightOffset.array,
        this.mesh = new h.G,
        this.mesh.matrixAutoUpdate = !1,
        this.mesh.renderOrder = 10,
        this.mesh.add(this.ground),
        this.mesh.visible = !1
      }
      initGeneration(e, t, i, s, n, a, r = !1) {
        this.hide(),
        this.originNode = i,
        this.exitNode = s,
        this.originCoords = {
          x: e,
          z: t
        },
        this.originPos = {
          x: e * this.size,
          y: 0,
          z: t * this.size
        },
        this.heightmap = a,
        this.mesh.position.copy(this.originPos),
        this.needsOverlapRedraw = r,
        this.genRow = 0,
        this.genIndex = 0,
        this.overlapIndex = 0,
        this.overlapCells.length = 0,
        this.overlapTile = null,
        n && (this.overlapTile = n, this.overlapCells = Object.keys(this.overlapTile)),
        this.originPos.y = this.heightmap.getXZ(this.originPos.x, this.originPos.z),
        this.mesh.position.y = this.originPos.y,
        this.isDebug = !1,
        this.ready = !1
      }
      resetOverlapMap(e, t) {
        this.exitNode = e,
        this.overlapIndex = 0,
        this.overlapCells.length = 0,
        this.overlapTile = null,
        t && (this.overlapTile = t, this.overlapCells = Object.keys(this.overlapTile))
      }
      forceGenerate() {
        for (; !this.generate(); );
        this.display()
      }
      generate() {
        if (this.genRow <= this.res) {
          for (this.genIndex = this.genRow * this.res1 * 3, dt.i = 0; dt.i <= this.res; dt.i++) dt.index = this.genIndex + 3 * dt.i,
          dt.index3 = this.genRow * this.res1 + dt.i,
          dt.x = this.verts[dt.index] + this.originPos.x,
          dt.z = this.verts[dt.index + 2] + this.originPos.z,
          dt.h = this.heightmap.getXZ(dt.x, dt.z),
          this.heights[dt.index3] = dt.h,
          this.heightOffsets[dt.index3] = dt.h - this.mesh.position.y;
          return this.genRow > 0 && this.computeSquareNormalsRow(this.genRow - 1),
          this.genRow++,
          this.genRow > this.res && (this.computeSquareNormalsRow(this.genRow - 1), this.geo.attributes.normal.needsUpdate = !0, this.geo.attributes.curvature.needsUpdate = !0),
          !1
        }
        if (this.overlapIndex < this.overlapCells.length) {
          for (dt.oz in dt.ox = this.overlapCells[this.overlapIndex], this.overlapTile[dt.ox]) this.overlapTile[dt.ox][dt.oz] < 0 || (dt.index = dt.ox * this.res1 + 1 * dt.oz, this.heightOffsets[dt.index] = this.heights[dt.index] - this.mesh.position.y - 4 * (this.overlapTile[dt.ox][dt.oz] + 0.75));
          return this.overlapIndex++,
          !1
        }
        return this.mesh.visible && this.display(),
        this.ready = !0,
        !0
      }
      lookupHeight(e, t) {
        return e < 0 || e > me || t < 0 || t > me ? this.heightmap.getXZ(this.originPos.x + e, this.originPos.z + t) : (dt.cx = Math.max(e / 10, 0), dt.cz = Math.max(t / 10, 0), dt.ix = Math.min(xe - 1, Math.floor(dt.cx)), dt.iz = Math.min(xe - 1, Math.floor(dt.cz)), dt.index = this.res1 * dt.ix + dt.iz, dt.px = dt.cx - dt.ix, dt.pz = dt.cz - dt.iz, dt.hx = this.heights[dt.index] * (1 - dt.px) + this.heights[dt.index + this.res1] * dt.px, dt.hz = this.heights[dt.index + 1] * (1 - dt.px) + this.heights[dt.index + this.res1 + 1] * dt.px, dt.hx * (1 - dt.pz) + dt.hz * dt.pz)
      }
      display(e = !1) {
        if (e && !this.ready) for (; !this.generate(); );
        this.geo.attributes.heightOffset.needsUpdate = !0,
        this.geo.computeBoundingSphere(),
        this.mesh.updateMatrix(),
        this.show()
      }
      retire() {
        this.hide()
      }
      show() {
        this.mesh.visible = !0
      }
      hide() {
        this.mesh.visible = !1
      }
      computeSquareNormalsRow(e) {
        for (dt.d = me / this.res, dt.d2 = 2 * dt.d, dt.normalAttribute = this.geo.attributes.normal, dt.curvatureAttribute = this.geo.attributes.curvature, dt.rowIndex = e * this.res1, dt.j = 0; dt.j <= this.res; dt.j++) dt.hAvg = 0,
        dt.tX = e * dt.d + this.originPos.x,
        dt.tZ = dt.j * dt.d + this.originPos.z,
        dt.hAvg += this.heightmap.getXZLayer(dt.tX + 5, dt.tZ, 0),
        dt.hAvg += this.heightmap.getXZLayer(dt.tX - 5, dt.tZ, 0),
        dt.hAvg += this.heightmap.getXZLayer(dt.tX, dt.tZ + 5, 0),
        dt.hAvg += this.heightmap.getXZLayer(dt.tX, dt.tZ - 5, 0),
        dt.hAvg = dt.hAvg / 4 - this.heights[dt.rowIndex + dt.j],
        0 == dt.j ? (dt.tX = e * dt.d + this.originPos.x, dt.tZ = this.originPos.z - dt.d, dt.left = this.heightmap.getXZ(dt.tX, dt.tZ)) : dt.left = this.heights[dt.rowIndex + (dt.j - 1)],
        dt.j == this.res ? (dt.tX = e * dt.d + this.originPos.x, dt.tZ = this.originPos.z + (dt.j + 1) * dt.d, dt.right = this.heightmap.getXZ(dt.tX, dt.tZ)) : dt.right = this.heights[dt.rowIndex + (dt.j + 1)],
        0 == e ? (dt.tX = this.originPos.x - dt.d, dt.tZ = dt.j * dt.d + this.originPos.z, dt.up = this.heightmap.getXZ(dt.tX, dt.tZ)) : dt.up = this.heights[(e - 1) * this.res1 + dt.j],
        e == this.res ? (dt.tX = (e + 1) * dt.d + this.originPos.x, dt.tZ = dt.j * dt.d + this.originPos.z, dt.down = this.heightmap.getXZ(dt.tX, dt.tZ)) : dt.down = this.heights[(e + 1) * this.res1 + dt.j],
        dt.vecV.set(dt.d2, dt.down - dt.up, 0),
        dt.vecH.set(0, dt.right - dt.left, dt.d2),
        dt.vecV.cross(dt.vecH).normalize().negate(),
        dt.normalAttribute.setXYZ(dt.rowIndex + dt.j, dt.vecV.x, dt.vecV.y, dt.vecV.z),
        this.grads[dt.rowIndex + dt.j] = 1 - Math.abs(dt.vecV.dot(lt)),
        dt.curvatureAttribute.array[dt.rowIndex + dt.j] = 0.02 * dt.hAvg
      }
    };
    class pt {
      constructor() {
        this.nearGridCell = ht,
        this.farGridCell = ct
      }
      sanitiseConfig(e) {
        this.skinList.includes(e.value.skin) || (console.log('Scene config not compatible; reverting to default skin'), e.set('skin', 'default', !0), e.set('weatherIndex', 0, !0))
      }
      loader() {
        return 1
      }
      updateConfig(e, t) {
      }
      reset(e, t, i) {
        this.initialise(e, t, i)
      }
      initialise(e, t, i) {
        this.seed = e,
        i()
      }
      onMidlineReady() {
      }
      onGridReady() {
      }
      nextWeather() {
      }
      setScene(e) {
      }
      setWeather(e) {
      }
      nextSkin() {
      }
      nextTopography() {
      }
      prepareGeometry() {
      }
      update() {
      }
      destroy() {
      }
    }
    pt.sceneName = 'Scene',
    pt.hasTrees = !0,
    pt.hasGrass = !0;
    var ut = class {
      constructor(e) {
        this.rand = new window.alea(e || Ve)
      }
      generate() {
      }
      getXZ(e, t) {
        return 0
      }
      getCell(e, t) {
        return e in this.cacheAccess || (this.cacheAccess[e] = {
        }),
        this.cacheAccess[e][t] = !0,
        this.cache[e] && this.cache[e][t] || this.cacheCell(e, t),
        e in this.cacheAccess || (this.cacheAccess[e] = {
        }),
        this.cacheAccess[e][t] = !0,
        this.cache[e][t]
      }
      clearCache() {
        if (this.cacheCount <= this.maxCached) return;
        let e,
        t;
        for (e in this.cache) {
          for (t in this.cache[e]) if (this.cacheAccess[e][t]) this.cacheAccess[e][t] = !1;
           else if (delete this.cache[e][t], delete this.cacheAccess[e][t], this.cacheCount--, this.cacheCount <= this.maxCached) break;
          if (this.cacheCount <= this.maxCached) break
        }
      }
      generateCell(e, t) {
        return []
      }
      cacheCell(e, t) {
        this.cacheCount++,
        this.clearCache();
        let i = this.generateCell(e, t);
        e in this.cache || (this.cache[e] = {
        }),
        this.cache[e][t] = i
      }
      destroy() {
      }
    };
    const gt = 'Hanne!',
    mt = {
      layer: 0,
      d: 0,
      h: 0,
      sq: 0,
      sqb: 0,
      wx: 0,
      wz: 0,
      ox: 0,
      oz: 0,
      px: 0,
      pz: 0,
      cell: null,
      ix: 0,
      iz: 0,
      depth: 0
    },
    xt = {
      ...mt
    },
    vt = {
    };
    var wt = class extends ut {
      constructor(...e) {
        super (...e),
        this.resolution = 5,
        this.depth = 3,
        this.upscale = 2,
        this.heightScale = 1,
        this.heightOffset = 0,
        this.upscaleType = 0,
        this.controls = [
        ],
        this.cache = {
        },
        this.cacheAccess = {
        },
        this.cacheCount = 0,
        this.maxCached = 9,
        this.qCache = {
        },
        this.smoothingFunc = () =>{
        },
        this.useQuick = !1;
        let t = e[1] || {
        };
        switch (null !== t.heightScale && (this.heightScale = t.heightScale), null !== t.resolution && (this.resolution = t.resolution), this.seed = e[0] || gt, this.depth = t.depth || 3, this.radiusType = null == t.radiusType ? 1 : t.radiusType, this.upscale = t.upscale || 2, this.upscaleType = null == t.upscaleType ? 0 : t.upscaleType, this.upscaleFactor = null == t.upscaleFactor ? 2 : t.upscaleFactor, this.squared = t.squared || !1, this.compound = t.compound || !1, this.depthHeightFactor = t.depthHeightFactor || 1, this.smoothLerpIndex = null == t.smoothLerp ? 2 : t.smoothLerp, this.smoothLerpIndex) {
          case 2:
            this.smoothingFunc = this.smootherLerp;
            break;
          case 1:
            this.smoothingFunc = this.smoothLerp;
            break;
          case 0:
          default:
            this.smoothingFunc = this.sharpLerp
        }
        if (null != t.resolutions) this.resolutions = t.resolutions,
        this.resolution = this.resolutions[0],
        this.depth = this.resolutions.length;
         else {
          this.resolutions = [
            this.resolution
          ];
          for (let e = 0; e < this.depth - 1; e++) this.resolutions.push(this.calculateNextDepthResolution(this.resolutions[e], e))
        }
        this.controls = [
        ],
        this.cellScaleMetres = 1000,
        this.cellScaleWorld = 3000,
        this.heightOffset = t.heightOffset,
        this.cacheCell(0, 0)
      }
      cosLerp(e) {
        return Math.cos(3.1415 * e) + 1
      }
      sharpLerp(e) {
        return 1 - e
      }
      smoothLerp(e) {
        return - 1 * (3 - 2 * e) * e * e + 1
      }
      smootherLerp(e) {
        return (e * (6 * e - 15) + 10) * e * e * e * - 1 + 1
      }
      sharpLerpAB(e, t, i) {
        return (t - e) * i + e
      }
      smootherLerpAB(e, t, i) {
        return (i * (6 * i - 15) + 10) * i * i * i * (t - e) + e
      }
      lerpHeight(e, t, i, s) {
        return (e = (s.x - t) * (s.x - t) + (s.z - i) * (s.z - i)) < s.r2 ? this.smoothingFunc(e / s.r2) * s.y : 0
      }
      clearCache() {
        if (!(this.cacheCount <= this.maxCached)) for (vt.ox in this.cache) {
          for (vt.oz in this.cache[vt.ox]) if (this.cacheAccess[vt.ox][vt.oz]) this.cacheAccess[vt.ox][vt.oz] = !1;
           else if (delete this.cache[vt.ox][vt.oz], delete this.cacheAccess[vt.ox][vt.oz], this.cacheCount--, this.cacheCount <= this.maxCached) break;
          if (this.cacheCount <= this.maxCached) break
        }
      }
      cacheCell(e, t) {
        for (this.cacheCount++, this.clearCache(), vt.cell = [
        ], vt.hFactor = 1, vt.rand = new window.alea(this.seed + e + t), vt.depthRes = this.resolution, vt.layer = [
        ], vt.dhf = this.depthHeightFactor, vt.d = 0; vt.d < this.depth; vt.d++) {
          for (vt.depthRes = this.resolutions[vt.d], vt.hFactor = this.resolution / vt.depthRes * vt.dhf, vt.dhf *= this.depthHeightFactor, vt.layer = [
          ], vt.rad = 1 / vt.depthRes, vt.i = 0; vt.i < vt.depthRes; vt.i++) {
            for (vt.subLayer = [
            ], vt.j = 0; vt.j < vt.depthRes; vt.j++) vt.h = 2 * vt.rand() - 1,
            this.squared && (vt.h < 0 ? vt.h *= - vt.h * (1 + vt.h) * 4 : vt.h *= vt.h * (1 - vt.h) * 4),
            vt.h *= vt.hFactor,
            vt.subLayer.push({
              x: (vt.i + 0.5) / vt.depthRes,
              y: vt.h * this.heightScale,
              z: (vt.j + 0.5) / vt.depthRes,
              r: vt.rad,
              r2: vt.rad * vt.rad
            });
            vt.layer.push(vt.subLayer)
          }
          vt.cell.push(vt.layer)
        }
        e in this.cache || (this.cache[e] = {
        }),
        this.cache[e][t] = vt.cell
      }
      calculateNextDepthResolution(e, t) {
        switch (this.upscaleType) {
          case 5:
            let i,
            s = this.resolution,
            n = this.resolution;
            for (let e = 0; e < t + 1; e++) i = s + n,
            n = s,
            s = i;
            return i;
          case 4:
            return e * this.upscaleFactor + (t + 1);
          case 3:
            return Math.round(e * this.upscaleFactor);
          case 2:
            return Math.pow(this.resolution, t + 2);
          case 1:
            return this.resolution + Math.pow(this.upscale, t + 1);
          case 0:
          default:
            return e + this.upscale * (t + 1)
        }
      }
      getNextDepthResolution(e, t) {
        return this.resolutions[t + 1]
      }
      getResolution(e, t) {
        return this.resolutions[t]
      }
      getNode(e, t, i, s) {
      }
      getCell(e, t) {
        return e in this.cacheAccess || (this.cacheAccess[e] = {
        }),
        this.cacheAccess[e][t] = !0,
        this.cache[e] && this.cache[e][t] || this.cacheCell(e, t),
        e in this.cacheAccess || (this.cacheAccess[e] = {
        }),
        this.cacheAccess[e][t] = !0,
        this.cache[e][t]
      }
      getQuickCell(e, t) {
        return this.cache[e] && this.cache[e][t] || this.cacheCell(e, t),
        e in this.cacheAccess || (this.cacheAccess[e] = {
        }),
        this.cacheAccess[e][t] = !0,
        this.qCache[e] && this.qCache[e][t] || this.quickCache(e, t, this.cache[e][t][this.depth - 1]),
        this.qCache[e][t]
      }
      quickCache(e, t, i) {
        if (e in this.qCache) {
          if (t in this.qCache[e]) return
        } else this.qCache[e] = {
        };
        let s = [
        ];
        this.useQuick = !1;
        for (let n of i) {
          let i = [
          ];
          for (let s of n) i.push({
            x: s.x,
            y: this.getXZ((e + s.x) * this.cellScaleWorld, (t + s.z) * this.cellScaleWorld),
            z: s.z,
            r: s.r,
            r2: s.r2
          });
          s.push(i)
        }
        this.useQuick = !0,
        this.qCache[e][t] = s
      }
      getXZQuick(e, t) {
        let i,
        s,
        n,
        a,
        r,
        h;
        return xt.d = 0,
        xt.h = 0,
        xt.wx = e / this.cellScaleWorld,
        xt.wz = t / this.cellScaleWorld,
        xt.ox = Math.floor(xt.wx),
        xt.oz = Math.floor(xt.wz),
        xt.px = xt.wx - xt.ox,
        xt.pz = xt.wz - xt.oz,
        xt.layer = this.getQuickCell(xt.ox, xt.oz),
        xt.sq = this.getResolution(this.resolution, this.depth - 1),
        xt.sqb = xt.sq - 1,
        xt.ssq = xt.sq,
        xt.ssqb = xt.sqb,
        i = xt.px * xt.sq - 0.5,
        xt.ix = Math.floor(xt.px * xt.sq - 0.5),
        s = xt.pz * xt.sq - 0.5,
        xt.iz = Math.floor(xt.pz * xt.sq - 0.5),
        i -= xt.ix,
        s -= xt.iz,
        xt.ix >= 0 ? (n = xt.iz >= 0 ? xt.layer[xt.ix][xt.iz].y : this.getQuickCell(xt.ox, xt.oz - 1) [xt.ix][xt.sqb].y, a = xt.iz < xt.ssqb ? xt.layer[xt.ix][xt.iz + 1].y : this.getQuickCell(xt.ox, xt.oz + 1) [xt.ix][0].y) : (n = xt.iz >= 0 ? this.getQuickCell(xt.ox - 1, xt.oz) [xt.sqb][xt.iz].y : this.getQuickCell(xt.ox - 1, xt.oz - 1) [xt.sqb][xt.sqb].y, a = xt.iz < xt.ssqb ? this.getQuickCell(xt.ox - 1, xt.oz) [xt.sqb][xt.iz + 1].y : this.getQuickCell(xt.ox - 1, xt.oz + 1) [xt.sqb][0].y),
        xt.ix < xt.ssqb ? (r = xt.iz >= 0 ? xt.layer[xt.ix + 1][xt.iz].y : this.getQuickCell(xt.ox, xt.oz - 1) [xt.ix + 1][xt.sqb].y, h = xt.iz < xt.ssqb ? xt.layer[xt.ix + 1][xt.iz + 1].y : this.getQuickCell(xt.ox, xt.oz + 1) [xt.ix + 1][0].y) : (r = xt.iz >= 0 ? this.getQuickCell(xt.ox + 1, xt.oz) [0][xt.iz].y : this.getQuickCell(xt.ox + 1, xt.oz - 1) [0][xt.sqb].y, h = xt.iz < xt.ssqb ? this.getQuickCell(xt.ox + 1, xt.oz) [0][xt.iz + 1].y : this.getQuickCell(xt.ox + 1, xt.oz + 1) [0][0].y),
        n = this.sharpLerpAB(n, a, s),
        r = this.sharpLerpAB(r, h, s),
        this.sharpLerpAB(n, r, i)
      }
      getXZLayer(e, t, i) {
        mt.layer = 0,
        mt.d = 0,
        mt.h = 0,
        mt.sq = this.resolution,
        mt.sqb = mt.sq - 1,
        mt.wx = e / this.cellScaleWorld,
        mt.wz = t / this.cellScaleWorld,
        mt.ox = Math.floor(mt.wx),
        mt.oz = Math.floor(mt.wz),
        mt.px = mt.wx - mt.ox,
        mt.pz = mt.wz - mt.oz,
        mt.cell = this.getCell(mt.ox, mt.oz);
        let s = this.depth;
        mt.depth = 0;
        let n = 0;
        for (mt.layer of mt.cell) if (n++ === i) {
          if (mt.depth == s) break;
          mt.ix = Math.floor(mt.px * mt.sq - 0.5),
          mt.iz = Math.floor(mt.pz * mt.sq - 0.5),
          mt.th = 0,
          mt.ix >= 0 ? (mt.iz >= 0 ? mt.th += this.lerpHeight(mt.d, mt.px, mt.pz, mt.layer[mt.ix][mt.iz]) : mt.th += this.lerpHeight(mt.d, mt.px, mt.pz + 1, this.getCell(mt.ox, mt.oz - 1) [mt.depth][mt.ix][mt.sqb]), mt.iz < mt.sqb ? mt.th += this.lerpHeight(mt.d, mt.px, mt.pz, mt.layer[mt.ix][mt.iz + 1]) : mt.th += this.lerpHeight(mt.d, mt.px, mt.pz - 1, this.getCell(mt.ox, mt.oz + 1) [mt.depth][mt.ix][0])) : (mt.iz >= 0 ? mt.th += this.lerpHeight(mt.d, mt.px + 1, mt.pz, this.getCell(mt.ox - 1, mt.oz) [mt.depth][mt.sqb][mt.iz]) : mt.th += this.lerpHeight(mt.d, mt.px + 1, mt.pz + 1, this.getCell(mt.ox - 1, mt.oz - 1) [mt.depth][mt.sqb][mt.sqb]), mt.iz < mt.sqb ? mt.th += this.lerpHeight(mt.d, mt.px + 1, mt.pz, this.getCell(mt.ox - 1, mt.oz) [mt.depth][mt.sqb][mt.iz + 1]) : mt.th += this.lerpHeight(mt.d, mt.px + 1, mt.pz - 1, this.getCell(mt.ox - 1, mt.oz + 1) [mt.depth][mt.sqb][0])),
          mt.ix < mt.sqb ? (mt.iz >= 0 ? mt.th += this.lerpHeight(mt.d, mt.px, mt.pz, mt.layer[mt.ix + 1][mt.iz]) : mt.th += this.lerpHeight(mt.d, mt.px, mt.pz + 1, this.getCell(mt.ox, mt.oz - 1) [mt.depth][mt.ix + 1][mt.sqb]), mt.iz < mt.sqb ? mt.th += this.lerpHeight(mt.d, mt.px, mt.pz, mt.layer[mt.ix + 1][mt.iz + 1]) : mt.th += this.lerpHeight(mt.d, mt.px, mt.pz - 1, this.getCell(mt.ox, mt.oz + 1) [mt.depth][mt.ix + 1][0])) : (mt.iz >= 0 ? mt.th += this.lerpHeight(mt.d, mt.px - 1, mt.pz, this.getCell(mt.ox + 1, mt.oz) [mt.depth][0][mt.iz]) : mt.th += this.lerpHeight(mt.d, mt.px - 1, mt.pz + 1, this.getCell(mt.ox + 1, mt.oz - 1) [mt.depth][0][mt.sqb]), mt.iz < mt.sqb ? mt.th += this.lerpHeight(mt.d, mt.px - 1, mt.pz, this.getCell(mt.ox + 1, mt.oz) [mt.depth][0][mt.iz + 1]) : mt.th += this.lerpHeight(mt.d, mt.px - 1, mt.pz - 1, this.getCell(mt.ox + 1, mt.oz + 1) [mt.depth][0][0])),
          mt.h += mt.th,
          mt.depth++,
          mt.sq = this.resolutions[mt.depth],
          mt.sqb = mt.sq - 1
        } else mt.depth++,
        mt.sq = this.resolutions[mt.depth],
        mt.sqb = mt.sq - 1;
        return mt.h + this.heightOffset
      }
      getXZ(e, t, i) {
        for (mt.layer of(mt.d = 0, mt.h = 0, mt.heightFactor = 1, mt.sq = this.resolution, mt.sqb = mt.sq - 1, mt.wx = e / this.cellScaleWorld, mt.wz = t / this.cellScaleWorld, mt.ox = Math.floor(mt.wx), mt.oz = Math.floor(mt.wz), mt.px = mt.wx - mt.ox, mt.pz = mt.wz - mt.oz, mt.cell = this.getCell(mt.ox, mt.oz), i = i || this.depth, mt.depth = 0, mt.cell)) {
          if (mt.depth == i) break;
          mt.ix = Math.floor(mt.px * mt.sq - 0.5),
          mt.iz = Math.floor(mt.pz * mt.sq - 0.5),
          mt.th = 0,
          mt.ix >= 0 ? (mt.iz >= 0 ? mt.th += this.lerpHeight(mt.d, mt.px, mt.pz, mt.layer[mt.ix][mt.iz]) : mt.th += this.lerpHeight(mt.d, mt.px, mt.pz + 1, this.getCell(mt.ox, mt.oz - 1) [mt.depth][mt.ix][mt.sqb]), mt.iz < mt.sqb ? mt.th += this.lerpHeight(mt.d, mt.px, mt.pz, mt.layer[mt.ix][mt.iz + 1]) : mt.th += this.lerpHeight(mt.d, mt.px, mt.pz - 1, this.getCell(mt.ox, mt.oz + 1) [mt.depth][mt.ix][0])) : (mt.iz >= 0 ? mt.th += this.lerpHeight(mt.d, mt.px + 1, mt.pz, this.getCell(mt.ox - 1, mt.oz) [mt.depth][mt.sqb][mt.iz]) : mt.th += this.lerpHeight(mt.d, mt.px + 1, mt.pz + 1, this.getCell(mt.ox - 1, mt.oz - 1) [mt.depth][mt.sqb][mt.sqb]), mt.iz < mt.sqb ? mt.th += this.lerpHeight(mt.d, mt.px + 1, mt.pz, this.getCell(mt.ox - 1, mt.oz) [mt.depth][mt.sqb][mt.iz + 1]) : mt.th += this.lerpHeight(mt.d, mt.px + 1, mt.pz - 1, this.getCell(mt.ox - 1, mt.oz + 1) [mt.depth][mt.sqb][0])),
          mt.ix < mt.sqb ? (mt.iz >= 0 ? mt.th += this.lerpHeight(mt.d, mt.px, mt.pz, mt.layer[mt.ix + 1][mt.iz]) : mt.th += this.lerpHeight(mt.d, mt.px, mt.pz + 1, this.getCell(mt.ox, mt.oz - 1) [mt.depth][mt.ix + 1][mt.sqb]), mt.iz < mt.sqb ? mt.th += this.lerpHeight(mt.d, mt.px, mt.pz, mt.layer[mt.ix + 1][mt.iz + 1]) : mt.th += this.lerpHeight(mt.d, mt.px, mt.pz - 1, this.getCell(mt.ox, mt.oz + 1) [mt.depth][mt.ix + 1][0])) : (mt.iz >= 0 ? mt.th += this.lerpHeight(mt.d, mt.px - 1, mt.pz, this.getCell(mt.ox + 1, mt.oz) [mt.depth][0][mt.iz]) : mt.th += this.lerpHeight(mt.d, mt.px - 1, mt.pz + 1, this.getCell(mt.ox + 1, mt.oz - 1) [mt.depth][0][mt.sqb]), mt.iz < mt.sqb ? mt.th += this.lerpHeight(mt.d, mt.px - 1, mt.pz, this.getCell(mt.ox + 1, mt.oz) [mt.depth][0][mt.iz + 1]) : mt.th += this.lerpHeight(mt.d, mt.px - 1, mt.pz - 1, this.getCell(mt.ox + 1, mt.oz + 1) [mt.depth][0][0])),
          mt.temper = 1,
          mt.depth > 0 && (mt.temper = Math.min(Math.max(0.25, (mt.h + this.heightOffset + 30) / 80), 1)),
          mt.h += mt.th * mt.temper,
          mt.depth++,
          mt.sq = this.resolutions[mt.depth],
          mt.sqb = mt.sq - 1
        }
        return mt.h + this.heightOffset
      }
    },
    ft = i.p + 'static/media/grass_summer_01.bb65c929.webp',
    bt = i.p + 'static/media/gravel_01.72d5f86f.webp',
    At = i.p + 'static/media/rock_06.7e502144.webp',
    yt = i.p + 'static/media/forest_summer_01.629b3e11.webp',
    It = i.p + 'static/media/heather_01.3b4049ea.webp',
    Dt = i.p + 'static/media/sand_01.8bf3d9a0.webp',
    Nt = i.p + 'static/media/road_03.29415d96.webp',
    Mt = i.p + 'static/media/road_03_base.2e84c9f2.webp',
    Ct = i.p + 'static/media/foliage_grass_summer.2ca20eaf.webp',
    jt = i.p + 'static/media/foliage_bush_summer.7d19f331.webp',
    kt = i.p + 'static/media/trees_summer_far_04.9b418c41.webp',
    zt = i.p + 'static/media/trees_summer_near_04.0b483335.webp',
    St = i.p + 'static/media/trees_summer_far_04b.71d33b5e.webp',
    Ot = i.p + 'static/media/trees_summer_near_04b.c599bf59.webp',
    Lt = i.p + 'static/media/trees_autumn_near_01.e4b1c1b7.webp',
    Rt = i.p + 'static/media/trees_autumn_far_01.476e1169.webp',
    Tt = i.p + 'static/media/trees_autumn_near_01b.784c372a.webp',
    Pt = i.p + 'static/media/trees_autumn_far_01b.b7bc28be.webp',
    Gt = i.p + 'static/media/grass_autumn_01.c593833e.webp',
    Bt = i.p + 'static/media/forest_autumn_01.cd958a6a.webp',
    Wt = i.p + 'static/media/foliage_grass_autumn.f92557d8.webp',
    Et = i.p + 'static/media/foliage_bush_autumn.f642e219.webp',
    Zt = i.p + 'static/media/trees_spring_near_01.2740d9e4.webp',
    Ft = i.p + 'static/media/trees_spring_far_01.e5b43ddb.webp',
    Ht = i.p + 'static/media/trees_spring_far_01b.77e3faf6.webp',
    Qt = i.p + 'static/media/trees_spring_near_01b.dc9a1b07.webp',
    Yt = i.p + 'static/media/grass_spring_01.768b870f.webp',
    Vt = i.p + 'static/media/heather_spring_01.73869f54.webp',
    Ut = i.p + 'static/media/foliage_grass_spring.2de5b784.webp',
    Xt = i.p + 'static/media/foliage_bush_spring.53436f47.webp',
    Jt = i.p + 'static/media/snow_01.5d24a4d9.webp',
    qt = i.p + 'static/media/forest_winter.d339edd9.webp',
    Kt = i.p + 'static/media/road_04.3a2daa1d.webp',
    _t = i.p + 'static/media/road_04_base.2ca13356.webp',
    $t = i.p + 'static/media/trees_winter_near_01.bc2b0a44.webp',
    ei = i.p + 'static/media/trees_winter_far_01.22579e5a.webp',
    ti = i.p + 'static/media/trees_winter_near_01b.6c45b1e5.webp',
    ii = i.p + 'static/media/trees_winter_far_01b.d995fc50.webp',
    si = i.p + 'static/media/rock_06_winter.1a82fc8c.webp',
    ni = i.p + 'static/media/foliage_brush_winter.3157e6a1.webp',
    ai = i.p + 'static/media/concrete_01.467e237b.webp',
    ri = i.p + 'static/media/drystone_04.c9668f42.webp',
    hi = i.p + 'static/media/drystone_04_snow.aee09a95.webp',
    oi = i.p + 'static/media/wall_barrier_wood.06bbc7c3.webp',
    li = i.p + 'static/media/wall_barrier_wood_snow.5df52f00.webp',
    di = i.p + 'static/media/clouds_01b.d86e8361.webp',
    ci = i.p + 'static/media/clouds_02.d765d208.webp',
    pi = i.p + 'static/media/clouds_03.0544ea9f.webp',
    ui = i.p + 'static/media/clouds_04.bdcd8039.webp',
    gi = i.p + 'static/media/clouds_sunrise_b.76566df4.webp',
    mi = i.p + 'static/media/clouds_autumn_sunset.97e16563.webp',
    xi = i.p + 'static/media/clouds_winter_sunrise.10f858c5.webp',
    vi = i.p + 'static/media/ambiance_summer_low.2130513f.mp3',
    wi = i.p + 'static/media/ambiance_cloudy.4d5b0a33.mp3',
    fi = i.p + 'static/media/wind_02.deef0e2d.mp3',
    bi = i.p + 'static/media/rock_06_bump.12f4b9f0.webp',
    Ai = i.p + 'static/media/crossfade_fine.0d1ec73b.webp',
    yi = i.p + 'static/media/crossfade_finest.3013f964.webp';
    var Ii = i.p + 'static/media/sea_waves.fba92bab.webp';
    const Di = {
      treemap: {
        heightScale: 1,
        heightOffset: 1.25,
        resolutions: [
          3,
          13,
          41
        ],
        squared: !0,
        depthHeightFactor: 1.8,
        threshold: 0.3,
        threshold2: 0.6,
        threshold3: 0.65
      },
      topography: {
        normal: {
          heightmap: {
            heightScale: 160,
            heightOffset: 95,
            resolutions: [
              3,
              12,
              24
            ],
            compound: !1,
            squared: !0,
            depthHeightFactor: 1
          },
          roadWidth: 3,
          smoothWindow: 7
        },
        hard: {
          heightmap: {
            heightScale: 165,
            heightOffset: 120,
            resolutions: [
              3,
              12,
              24,
              36
            ],
            compound: !1,
            squared: !0,
            depthHeightFactor: 0.98
          },
          roadWidth: 2.8,
          smoothWindow: 5
        },
        easy: {
          heightmap: {
            heightScale: 180,
            heightOffset: 110,
            resolutions: [
              3,
              12
            ],
            compound: !1,
            squared: !0,
            depthHeightFactor: 0.9
          },
          roadWidth: 3.2,
          smoothWindow: 7
        },
        flat: {
          heightmap: {
            heightScale: 0,
            heightOffset: 50,
            resolution: 1,
            depth: 1,
            upscale: 1
          },
          roadWidth: 20,
          smoothWindow: 7
        }
      },
      weathers: {
      default:
        {
          audio: {
            ambiance: {
              src: vi,
              ls: 0.1,
              le: 0.1
            },
            wind: {
              src: fi,
              ls: 0.07,
              le: 0.07
            }
          },
          water: 7048371,
          waterSkyReflection: 10143703,
          underwater: 4215398,
          col: 16121855,
          hemTop: 6710886,
          hemGround: 16777215,
          skyCol: 6859256,
          skyColFar: 13368830,
          skyMap: di,
          amb: 0,
          hem: 0.6,
          dir: 0.9,
          fogNear: 0.25,
          fogFar: 1,
          sunPos: [
            0,
            100,
            0
          ]
        },
        clear: {
          col: 15794175,
          skyCol: 6859256,
          skyColFar: 13368830,
          hemTop: 13688285,
          hemGround: 6317670,
          water: 7048371,
          waterSkyReflection: 10143703,
          underwater: 4215398,
          amb: 0.2,
          hem: 0.2,
          dir: 0.8,
          fogNear: 0.5,
          fogFar: 1,
          sunPos: [
            0,
            100,
            0
          ]
        },
        clearSpring: {
          col: 16777200,
          skyCol: 5815520,
          skyColFar: 11599615,
          hemTop: 12303274,
          hemGround: 8947831,
          water: 8034974,
          waterSkyReflection: 10872550,
          underwater: 4478295,
          amb: 0,
          hem: 0.6,
          dir: 0.8,
          fogNear: 0.1,
          fogFar: 1,
          sunPos: [
            0,
            100,
            0
          ]
        },
        clearAutumn: {
          col: 15794175,
          skyCol: 6859256,
          skyColFar: 13368830,
          hemTop: 11582395,
          hemGround: 8423560,
          water: 7048371,
          waterSkyReflection: 10143703,
          underwater: 4281193,
          amb: 0,
          hem: 0.5,
          dir: 0.7,
          fogNear: 0.2,
          fogFar: 1,
          sunPos: [
            0,
            100,
            0
          ]
        },
        clearSnow: {
          col: 16645887,
          skyCol: 6611189,
          skyColFar: 9627639,
          skyMap: null,
          hemTop: 11582395,
          hemGround: 10529450,
          water: 9151142,
          waterSkyReflection: 11592172,
          underwater: 4213066,
          amb: 0.4,
          hem: 0,
          dir: 0.6,
          fogNear: - 0.1,
          fogFar: 1
        },
        sunrise: {
          col: 16760805,
          skyCol: 14000311,
          skyColFar: 15752863,
          skyMap: gi,
          hemTop: 16760805,
          hemGround: 7825015,
          water: 11240347,
          waterSkyReflection: 13792927,
          underwater: 4536640,
          amb: 0,
          hem: 0.4,
          dir: 0.2,
          fogNear: 0,
          fogFar: 1
        },
        springSunrise: {
          col: 16763868,
          skyCol: 14517675,
          skyColFar: 16750020,
          skyMap: gi,
          hemTop: 16770028,
          hemGround: 7825015,
          water: 12682908,
          waterSkyReflection: 14388399,
          underwater: 4537407,
          amb: 0,
          hem: 0.5,
          dir: 0.25,
          fogNear: 0,
          fogFar: 1
        },
        autumnSunrise: {
          col: 15191218,
          skyCol: 12886223,
          skyColFar: 12371399,
          skyMap: null,
          hemTop: 15191218,
          water: 8285060,
          waterSkyReflection: 9939630,
          underwater: 3748667,
          hemGround: 16777215,
          amb: 0,
          hem: 0.4,
          dir: 0.1,
          fogNear: 0.25,
          fogFar: 1
        },
        winterSunrise: {
          col: 16641966,
          skyCol: 7829367,
          skyColFar: 13948336,
          skyMap: xi,
          hemTop: 13948336,
          hemGround: 5592405,
          water: 8158057,
          waterSkyReflection: 13088880,
          underwater: 4013366,
          amb: 0,
          hem: 0.5,
          dir: 0.25,
          fogNear: 0.25,
          fogFar: 1
        },
        sunset: {
          col: 16761489,
          skyCol: 6611189,
          skyColFar: 16769464,
          skyMap: ui,
          hemTop: 16772047,
          hemGround: 7829367,
          water: 10062204,
          waterSkyReflection: 14595739,
          underwater: 4209463,
          amb: 0.2,
          hem: 0.4,
          dir: 0.3,
          fogNear: 0,
          fogFar: 1
        },
        twilight: {
          col: 10650820,
          skyCol: 4539806,
          skyColFar: 10387156,
          skyMap: pi,
          hemTop: 10650820,
          hemGround: 6710886,
          water: 4868728,
          waterSkyReflection: 8152737,
          underwater: 2829110,
          amb: 0,
          hem: 0.4,
          dir: 0.2,
          fogNear: 0,
          fogFar: 1,
          headlights: !0
        },
        autumnSunset: {
          col: 16767690,
          skyCol: 7562623,
          skyColFar: 13672883,
          skyMap: mi,
          hemTop: 15380673,
          hemGround: 6710886,
          water: 5984868,
          waterSkyReflection: 13209736,
          underwater: 3749181,
          amb: 0,
          hem: 0.5,
          dir: 0.2,
          fogNear: 0,
          fogFar: 1
        },
        winterSunset: {
          col: 14849919,
          skyCol: 15267574,
          skyColFar: 16566188,
          skyMap: null,
          hemTop: 16433573,
          hemGround: 6710886,
          water: 6903885,
          waterSkyReflection: 11903124,
          underwater: 3353897,
          amb: 0,
          hem: 0.3,
          dir: 0.1,
          fogNear: 0,
          fogFar: 1,
          headlights: !0
        },
        rain: {
          audio: {
            ambiance: {
              src: wi,
              ls: 0.1,
              le: 0.1
            }
          },
          col: 11843770,
          hemTop: 11183520,
          hemGround: 6709334,
          skyCol: 10988204,
          skyColFar: 11843770,
          skyMap: pi,
          water: 7631213,
          waterSkyReflection: 10330788,
          underwater: 3552307,
          amb: 0,
          hem: 0.6,
          dir: 0.5,
          fogNear: 0,
          fogFar: 1,
          dynamicFog: !0
        },
        springRain: {
          audio: {
            ambiance: {
              src: wi,
              ls: 0.1,
              le: 0.1
            }
          },
          col: 13750208,
          hemTop: 13421772,
          hemGround: 8947848,
          skyCol: 11381664,
          skyColFar: 13421248,
          skyMap: di,
          water: 8159347,
          waterSkyReflection: 12304304,
          underwater: 3618868,
          amb: 0,
          hem: 0.6,
          dir: 0.6,
          fogNear: 0,
          fogFar: 1,
          dynamicFog: !0
        },
        autumnRain: {
          audio: {
            ambiance: {
              src: wi,
              ls: 0.1,
              le: 0.1
            }
          },
          col: 10262415,
          hemTop: 16773350,
          hemGround: 6709334,
          skyCol: 9539465,
          skyColFar: 10263189,
          skyMap: ci,
          water: 4670524,
          waterSkyReflection: 7696744,
          underwater: 2828839,
          amb: 0,
          hem: 0.5,
          dir: 0.2,
          fogNear: 0,
          fogFar: 1,
          dynamicFog: !0
        },
        night: {
          audio: {
            ambiance: {
              src: wi,
              ls: 0.1,
              le: 0.1
            }
          },
          col: 1184020,
          skyCol: 1184020,
          skyColFar: 1184020,
          skyMap: ci,
          water: 131332,
          waterSkyReflection: 1184020,
          underwater: 131332,
          amb: 1.25,
          hem: 0,
          dir: 0,
          fogNear: 0.1,
          fogFar: 1,
          headlights: !0
        },
        snow: {
          audio: {
            ambiance: {
              src: wi,
              ls: 0.1,
              le: 0.1
            }
          },
          col: 11772819,
          skyCol: 11246985,
          skyColFar: 11180677,
          skyMap: pi,
          water: 8353387,
          waterSkyReflection: 10655879,
          underwater: 3552048,
          hemTop: 14275267,
          hemGround: 6709334,
          amb: 0,
          hem: 0.6,
          dir: 0.3,
          fogNear: 0,
          fogFar: 0.75,
          dynamicFog: !0
        }
      },
      skins: {
        spring: {
          name: 'spring',
          weathers: [
            'springSunrise',
            'clearSpring',
            'springRain',
            'autumnSunset',
            'night'
          ],
          cycles: [
            ['clearSpring',
            'autumnSunset',
            'night',
            'night',
            'springSunrise'],
            [
              'springRain',
              'autumnSunset',
              'night',
              'night',
              'springSunrise'
            ]
          ],
          grass: Yt,
          heather: Vt,
          foliage: {
            trees: [
              Ft,
              Zt
            ],
            treesb: [
              Ht,
              Qt
            ],
            grass: Ut,
            bush: Xt,
            grassColouration: [
              20 / 255,
              10 / 255,
              20 / 255,
              0
            ],
            treeColouration: [
              - 0.07,
              0.1,
              0.05,
              0
            ]
          }
        },
      default:
        {
          name: 'summer',
          weathers: [
            'sunrise',
            'clear',
            'rain',
            'sunset',
            'night'
          ],
          cycles: [
            ['clear',
            'sunset',
            'night',
            'night',
            'sunrise'],
            [
              'rain',
              'sunset',
              'night',
              'night',
              'sunrise'
            ]
          ],
          grass: ft,
          gravel: bt,
          rock: At,
          forest: yt,
          heather: It,
          water: 11057343,
          sand: Dt,
          road: Nt,
          roadBase: Mt,
          walls: {
            sea: ai,
            fence: oi,
            drystone: ri
          },
          foliage: {
            trees: [
              kt,
              zt
            ],
            treesb: [
              St,
              Ot
            ],
            grass: Ct,
            bush: jt,
            grassColouration: [
              52 / 255,
              20 / 255,
              36 / 255,
              0
            ],
            treeColouration: [
              - 0.05,
              0.1,
              0.1,
              0
            ]
          }
        },
        autumn: {
          name: 'autumn',
          weathers: [
            'autumnSunrise',
            'clearAutumn',
            'autumnRain',
            'twilight',
            'night'
          ],
          cycles: [
            ['clear',
            'twilight',
            'night',
            'night',
            'autumnSunrise'],
            [
              'autumnRain',
              'twilight',
              'night',
              'night',
              'autumnSunrise'
            ]
          ],
          grass: Gt,
          forest: Bt,
          gravel: bt,
          foliage: {
            trees: [
              Rt,
              Lt
            ],
            treesb: [
              Pt,
              Tt
            ],
            grass: Wt,
            bush: Et,
            grassColouration: [
              60 / 255,
              25 / 255,
              45 / 255,
              0
            ],
            treeColouration: [
              0.1,
              - 0.05,
              0,
              0
            ]
          }
        },
        winter: {
          name: 'winter',
          weathers: [
            'winterSunrise',
            'clearSnow',
            'snow',
            'winterSunset',
            'night'
          ],
          cycles: [
            ['snow',
            'winterSunset',
            'night',
            'night',
            'winterSunrise'],
            [
              'clearSnow',
              'winterSunset',
              'night',
              'night',
              'winterSunrise'
            ]
          ],
          grass: Jt,
          gravel: qt,
          forest: qt,
          heather: qt,
          sand: qt,
          road: Kt,
          roadBase: _t,
          rock: si,
          water: 12110031,
          foliage: {
            trees: [
              ei,
              $t
            ],
            treesb: [
              ii,
              ti
            ],
            grass: null,
            bush: ni,
            grassColouration: [
              0,
              0,
              0,
              0
            ],
            treeColouration: [
              0.15,
              0.15,
              0.15,
              0
            ]
          },
          friction: {
            road: 1.2,
            side: 0.8,
            grass: 0.6
          },
          walls: {
            drystone: hi,
            fence: li
          }
        }
      },
      time: {
        noon: {
        }
      }
    },
    Ni = (e, t) =>{
      ji = Ci[e],
      zi = ki[e],
      Oi = Si[e],
      Ri = Li[e],
      Bi = Gi[t],
      Wi = Bi / 20,
      Fi = t > 1,
      0 == t ? Hi = 2 : 1 == t ? Hi = Math.floor(fe / 100) : 2 == t ? Hi = Math.floor(me / 50) : 3 == t && (Hi = Math.floor(me / 25)),
      Qi(t)
    },
    Mi = new h.F({
      map: X(ft, 0),
      displacementMap: X(bi, 4)
    }),
    Ci = [
      700,
      2000,
      3500,
      6000
    ];
    let ji = 3500;
    const ki = [
      200,
      400,
      600,
      800
    ];
    let zi = 400;
    const Si = [
      20,
      50,
      100,
      150
    ];
    let Oi = 100;
    const Li = [
      15,
      20,
      25,
      30
    ];
    let Ri = 10;
    const Ti = X(Ai),
    Pi = [
      V(null, 0.75, 4, null, {
        TREES: '',
        AUTO_NORMAL: ''
      }, {
        noiseMap: Ti,
        mapb: null,
        highDef: !0,
        colouration: [
          0,
          0,
          0,
          0
        ]
      }),
      V(null, 0.75, 4, null, {
        TREES: '',
        AUTO_NORMAL: ''
      }, {
        noiseMap: Ti,
        mapb: null,
        highDef: !0,
        colouration: [
          0,
          0,
          0,
          0
        ]
      })
    ],
    Gi = [
      5000,
      10000,
      20000,
      30000
    ];
    let Bi = 5000,
    Wi = Bi / 20;
    const Ei = [
      V(null, 0.75, 4, null, {
        GRASS: '',
        AUTO_NORMAL: ''
      }, {
        noiseMap: Ti,
        colouration: [
          0,
          0,
          0,
          0
        ]
      }),
      V(null, 0.75, 4, null, {
        BUSH: '',
        AUTO_NORMAL: ''
      }, {
        noiseMap: Ti,
        colouration: [
          0,
          0,
          0,
          0
        ]
      })
    ];
    Mi.userData.grassMap = {
      value: null
    },
    Mi.userData.sandMap = {
      value: null
    },
    Mi.userData.rockMap = {
      value: X(bi, 4)
    },
    Mi.userData.rockBumpMap = {
      value: null
    },
    Mi.userData.gravelMap = {
      value: null
    },
    Mi.userData.heatherMap = {
      value: null
    },
    Mi.userData.forestMap = {
      value: null
    },
    Mi.userData.roadBaseMap = {
      value: null
    },
    Mi.userData.fadeRockMap = {
      value: X(Ai, 4)
    },
    Mi.userData.fadeFiner = {
      value: X(yi, 4)
    },
    Mi.userData.colouration = {
      value: [
        0.18,
        0.08,
        0.1,
        0
      ]
    },
    Mi.onBeforeCompile = e=>(e.uniforms.grassMap = Mi.userData.grassMap, e.uniforms.sandMap = Mi.userData.sandMap, e.uniforms.rockMap = Mi.userData.rockMap, e.uniforms.rockBumpMap = Mi.userData.rockBumpMap, e.uniforms.gravelMap = Mi.userData.gravelMap, e.uniforms.heatherMap = Mi.userData.heatherMap, e.uniforms.forestMap = Mi.userData.forestMap, e.uniforms.roadBaseMap = Mi.userData.roadBaseMap, e.uniforms.fadeRockMap = Mi.userData.fadeRockMap, e.uniforms.fadeFiner = Mi.userData.fadeFiner, e.uniforms.colouration = Mi.userData.colouration, e.vertexShader = e.vertexShader.replace('#include <displacementmap_pars_vertex>', '\n\nattribute float heightOffset;\nattribute float roadProximity;\nattribute float treeMask;\nattribute float curvature;\nattribute float grass;\n\nvarying float height;\nvarying float steepness;\nvarying float roadProx;\nvarying float vTreeMask;\nvarying vec2 vWv;\nvarying vec2 vWWv;\nvarying float vCurvature;\nvarying float vGrass;\nvarying float vLightGrass;\nvarying float vDarkGrass;\nvarying float vHeather;\n\nfloat wuvSize = 800.0;\n\nuniform sampler2D displacementMap;\nuniform sampler2D fadeRockMap;\n\nfloat map(float value, float min1, float max1, float min2, float max2) {\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\nvec3 upvec = vec3(0.0,1.0,0.0);\n\n'), e.vertexShader = e.vertexShader.replace('#include <displacementmap_vertex>', '\n\n  vec4 wPos = modelMatrix * vec4( position, 1.0 );\n\n  height = wPos.y + heightOffset;\n\n  // Unclear if worthwhile...\n  // if(abs(wPos.x) > 14000.0) {\n  //   wPos.x = mod(wPos.x, 14000.0);\n  // }\n  // if(abs(wPos.z) > 14000.0) {\n  //   wPos.z = mod(wPos.z, 14000.0);\n  // }\n\n  // Set UVs from world pos\n  vUv.x = wPos.x / 10.0;\n  vUv.y = wPos.z / 10.0;\n\n\n  // 0 is perfectly flat, 1 is 90 degrees\n  steepness = 1.0 - dot(normal, upvec);\n  steepness = clamp(steepness * 2.0, 0.0, 1.0);\n\n  // Anything up to 0.8 is 1\n  // 0.8 down to 0.6\n  // 0.6 and under is 0\n\n  // steepness = 1.0 - clamp((steepness - 0.6) / 0.2, 0.0, 1.0);\n  // steepness = 1.0 - map(steepness, 0.2, 0.7, 0.0, 1.0);\n\n  // steepness = 1.0 - steepness;//clamp((steepness * 2.0), 0.0, 1.0);\n  // steepness = map(steepness, 0.0, 1.0, 0.3, 0.7);\n\n  vWv.x = wPos.x / wuvSize;\n  vWv.y = wPos.z / wuvSize;\n\n  vWWv.x = vWv.x / 8.0;\n  vWWv.y = vWv.y / 8.0;\n\n  // MAGIC NUMBERS TO BE TWEAKED BASED ON HEIGHT PARAMETERS\n  if(curvature > 0.0) {\n    vCurvature = max(-1.0, curvature * -4.0);\n  } else {\n    vCurvature = min(1.0, curvature * -4.0);\n  }\n\n  //// GET FADES\n\n  float fade0 = texture2D(fadeRockMap, vWv).r;\n  float fade1 = texture2D(fadeRockMap, vWWv).r;\n  float fade2 = (texture2D(fadeRockMap,\n    vec2(\n      vWWv.x = wPos.x / 1200.0,\n      vWWv.y = wPos.z / 1200.0\n    )\n  ).r / 2.0) + 0.5;\n\n  //// HEATHER\n\n  vHeather = smoothstep(0.47, 0.53, min(1.0,height / 170.0) * fade1 * fade2);\n\n  //// GRASSES\n\n  // Focus contrast on middle range for sharper edges\n\n  fade0 = min(max(0.0,(fade0 - 0.25) * 2.0), 1.0);\n  fade1 = min(max(0.0,(fade1 - 0.25) * 2.0), 1.0);\n\n  float heightVal = min(1.0, height/100.0);\n  vLightGrass = min(1.0, max(0.0, fade1 * heightVal * (fade0 + heightVal)));\n  if(roadProximity > 0.0 && roadProximity < 2.0) {\n    vLightGrass *= roadProximity / 4.0 + 0.5;\n    vHeather *= roadProximity / 2.0;\n  }\n  vDarkGrass = 1.0;// 1.1 - (fade1 * 0.1);\n\n\n  //// ROAD PROX\n\n  roadProx = roadProximity;\n\n  //// TREE MASK\n\n  vTreeMask = treeMask;\n\n  //// GRASS  FIDDLING\n\n  // if(vCurvature > 0.0) {\n  //   vGrass = grass * vCurvature;\n  // } else {\n  //   vGrass = 0.0;\n  // }\n  // vGrass = grass * min(1.0, height / 100.0);\n\n  vGrass = grass;\n\n  vWWv.x = wPos.x / 400.0;\n  vWWv.y = wPos.z / 400.0;\n\n  transformed += vec3(0.0, heightOffset, 0.0);\n\n  // Experimenting with displacement map\n  transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * steepness * 1.25 );\n\n'), e.fragmentShader = e.fragmentShader.replace('#include <map_pars_fragment>', '\n\n  varying float height;\n  varying float steepness;\n  varying float roadProx;\n  varying float vTreeMask;\n  varying float vCurvature;\n  varying float vGrass;\n  varying vec2 vWv;\n  varying vec2 vWWv;\n  varying float vLightGrass;\n  varying float vDarkGrass;\n  varying float vHeather;\n\n  uniform sampler2D grassMap;\n  uniform sampler2D sandMap;\n  uniform sampler2D rockMap;\n  uniform sampler2D rockMapBump;\n  uniform sampler2D gravelMap;\n  uniform sampler2D forestMap;\n  uniform sampler2D heatherMap;\n  uniform sampler2D fadeRockMap;\n  uniform sampler2D fadeFiner;\n\n  uniform vec4 colouration;\n\n  vec4 rockTex;\n\n  vec4 terrainBlend(vec4 tx1, float w1, vec4 tx2, float w2, float depth) {\n    // Perform the blending\n    float ma = max(tx1.a + w1, tx2.a + w2) - depth;\n    float b1 = max(tx1.a + w1 - ma, 0.0);\n    float b2 = max(tx2.a + w2 - ma, 0.0);\n\n    return ((tx1 * b1) + (tx2 * b2)) / (b1 + b2);\n  }\n\n  vec4 roadCol = vec4(0.45, 0.45, 0.474, 1.0);\n\n\n'), e.fragmentShader = e.fragmentShader.replace('#include <map_fragment>', '\n\n  float fade = texture2D(fadeRockMap, vUv).r;\n  float fade1 = texture2D(fadeRockMap, vWv).r;\n  float fade2 = (texture2D(fadeRockMap, vWWv).r / 2.0) + 0.5;\n\n  float heightVal = min(1.0, (height/ 150.0));\n\n  vec4 darkGrass = texture2D(heatherMap, vUv);\n  darkGrass.a = darkGrass.g;\n\n  //// GRASS 1\n\n  vec4 texelColor = texture2D( grassMap, vUv );\n\n  //// LIGHT GRASS\n\n  texelColor += colouration * vLightGrass;\n\n  //// HEATHER\n\n  texelColor = mix(texelColor, darkGrass, vHeather * smoothstep(0.3, 0.7, fade1));\n\n  //// TREE MASK\n\n  texelColor = mix(texelColor, texture2D(forestMap, vUv), vTreeMask);\n  // texelColor.a = 1.0;\n  // vec4 forestCol = texture2D(forestMap, vUv);\n  // forestCol.a = 1.0 + fade * 0.1;//forestCol.r;// - fade * 0.5;\n  // texelColor = terrainBlend(\n  //   texelColor,\n  //   1.0-vTreeMask,\n  //   forestCol,\n  //   vTreeMask + fade * 0.25,\n  //   0.25\n  // );\n  // texelColor.a = 1.0;\n\n  //// DARK GRASS\n\n  texelColor *= vDarkGrass;\n\n  //// SAND BLEND\n\n  if(height < 4.0) {\n    float dark = 1.0 - vTreeMask * 0.3;\n    if(height < 0.0) {\n      texelColor = texture2D(sandMap, vUv) * 0.8333;\n    } else {\n      if(height < 2.0) {\n        dark = min(dark, 1.0 - (2.0 - height) / 12.0);\n      }\n      texelColor = mix(texture2D(sandMap, vUv) * dark, texelColor, height / 4.0);\n    }\n  }\n\n  //// ROADSIDE GRAVEL\n\n  if(roadProx < -0.2) {\n    texelColor = roadCol; // TODO pass in different colour as tex?\n  } else if(roadProx != 0.0 && roadProx < 0.7) {\n\n    float rp = roadProx / 0.7;\n\n    texelColor = mix(\n      texture2D(gravelMap, vUv),\n      texelColor,\n      smoothstep(\n        rp + 0.15,\n        rp - 0.15,\n        fade\n      )\n    );\n    // // Texture blend mode, not worth it\n    // vec4 gravelTex = texture2D(gravelMap, vUv);\n    // // float rp = roadProx / 1.25;\n    // gravelTex.a = gravelTex.r * gravelTex.r;\n    // texelColor.a = fade;\n    //\n    // texelColor = terrainBlend(\n      //   texelColor,\n      //   rp,\n      //   gravelTex,\n      //   1.0-rp,\n      //   0.1\n      // );\n\n\n\n\n  }\n\n  //// STEEPNESS CLIFF\n\n\n  if(roadProx == 0.0) {\n    rockTex = texture2D(rockMap, vWv) * (1.0 - vTreeMask * 0.5);\n    rockTex.a = 1.0 - texture2D(rockMapBump, vWv).r;\n  } else {\n    rockTex = texture2D(rockMap, vUv) * (1.0 - vTreeMask * 0.5);\n    rockTex.a = texture2D(rockMapBump, vUv).r;\n  }\n\n  texelColor.a = 0.2 + fade1 * 0.2;\n  texelColor = terrainBlend(texelColor,0.7, rockTex, steepness, 0.06);\n  texelColor.a = 1.0;\n\n  //// FINAL COMPOSITION\n\n  diffuseColor *= texelColor;\n\n'), e);
    let Zi = null,
    Fi = !1,
    Hi = 50;
    const Qi = e=>{
      var t;
      null === (t = Zi) || void 0 === t || t.dispose();
      let i = {
      };
      e > 0 && (i.WATER_WAVES = '', e > 1 && (i.WATER_DEPTH = '')),
      Zi = new h.C({
        wireframe: !1
      }),
      Zi.defines = i,
      Zi.userData.camPos = {
        value: new h.W
      },
      Zi.userData.skyCol = {
        value: [
          1,
          1,
          1,
          1
        ]
      },
      Zi.userData.waves = {
        value: X(Ii, 4)
      },
      Zi.userData.sunCol = {
        value: [
          1,
          1,
          1,
          1
        ]
      },
      Zi.userData.time = {
        value: 0
      },
      Zi.onBeforeCompile = e=>(e.uniforms.camPos = Zi.userData.camPos, e.uniforms.skyCol = Zi.userData.skyCol, e.uniforms.waves = Zi.userData.waves, e.uniforms.sunCol = Zi.userData.sunCol, e.uniforms.time = Zi.userData.time, e.vertexShader = e.vertexShader.replace('#include <color_pars_vertex>', '#include <color_pars_vertex>\n\n\n  #ifdef WATER_DEPTH\n\n    attribute float depth;\n\n  #endif\n\n  #ifdef WATER_WAVES\n\n    uniform float time;\n\n    varying vec2 vUw;\n    varying vec2 vUUw;\n    varying vec2 vUUUw;\n\n  #endif\n\n  varying vec4 wPos;\n\n  #ifdef WATER_DEPTH\n\n    varying float vDepth;\n\n  #endif\n\n'), e.vertexShader = e.vertexShader.replace('#include <color_vertex>', '#include <color_vertex>\n\n\n  wPos = modelMatrix * vec4( position, 1.0 );\n\n  #ifdef WATER_WAVES\n\n    // 50 and 200 for normal map\n\n\n    vUw.x = (time + wPos.x) / 200.0;\n    vUw.y = (time + wPos.z) / 200.0;\n\n    vUUw.x = (wPos.x - time) / 800.0;\n    vUUw.y = (wPos.z - time) / 800.0;\n\n    vUUUw.x = (wPos.x - time) / 300.0;\n    vUUUw.y = (wPos.z - time) / 300.0;\n  #endif\n\n  #ifdef WATER_DEPTH\n    vDepth = depth;\n  #endif\n\n'), e.fragmentShader = e.fragmentShader.replace('#include <map_pars_fragment>', '#include <map_pars_fragment>\n\n\n\nuniform vec3 camPos;\nuniform vec4 skyCol;\nuniform vec4 sunCol;\n\n#ifdef WATER_WAVES\n  uniform sampler2D waves;\n\n  varying vec2 vUw;\n  varying vec2 vUUw;\n  varying vec2 vUUUw;\n\n#endif\n\nvarying vec4 wPos;\n\n#ifdef WATER_DEPTH\n  varying float vDepth;\n#endif\n\nvec3 upvec = vec3(0.0,1.0,0.0);\n\n\n'), e.fragmentShader = e.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n\n\n  #ifdef WATER_DEPTH\n    // Abandon water rendering if it\'s well under ground\n    if(vDepth > 10.0) {\n      discard;\n    }\n  #endif\n  \n  vec3 camNorm = normalize(vec3(\n    camPos.x - wPos.x,\n    camPos.y - wPos.y,\n    camPos.z - wPos.z\n  ));\n\n  float seaDot = dot(camNorm, upvec);\n\n  #if defined(WATER_WAVES) || defined(WATER_DEPTH)\n\n\n    // Add lightness\n    float wave1 = texture2D(waves, vUw).r + 0.1;\n    float wave2 = texture2D(waves, vUUw).r + 0.1;\n\n    // Add darkness?\n    float wave4 = (texture2D(waves, vUUUw).r + 0.1);\n    float wave5 = (texture2D(waves, vUUw - vUw).r + 0.1);\n\n    //// WAVE RIPPLES\n\n    float darkReflect = 0.0;\n\n    #ifdef WATER_DEPTH\n\n      if(vDepth > -2.0) {\n        if(vDepth > -1.0) {\n          darkReflect = 1.0;\n        } else {\n          darkReflect = (2.0 + vDepth);\n        }\n      }\n\n    #endif\n\n    // Extra dark ripples by sea edge\n    seaDot += wave4 * wave5 * (0.5 + darkReflect / 4.0);\n    // No ripples by sea edge\n    seaDot -= wave1 * wave2 * (1.0 - darkReflect);\n\n    //// EDGE HIGHLIGHT\n\n    #ifdef WATER_DEPTH\n\n      if(vDepth < 0.0) {\n        if(vDepth > -2.0) {\n          seaDot -= (2.0 + vDepth) * 0.05 * (1.0 - wave2);\n        }\n      } else {\n        seaDot -= 0.1 * (1.0 - wave2);\n      }\n    #endif\n\n    //// CLAMP SEADOT\n\n    seaDot = min(max(0.0, seaDot), 1.0);\n\n    //// BLEND SKY WITH DARK BY SEADOT\n\n    float seaDotMix = 1.0 - seaDot;\n    diffuseColor = mix(diffuseColor, skyCol, seaDotMix * seaDotMix);\n\n    //// DARKEN DEPTHS\n\n    #ifdef WATER_DEPTH\n\n      if(vDepth < 0.0) {\n        diffuseColor *= 1.0 - min(1.0, vDepth / -15.0) * 0.2;\n      }\n\n    #endif\n\n    //// HIGHLIGHTS ON SHALLOW ANGLES\n\n    float sunDotMix = 0.0;\n    if(seaDot < 0.125) {\n      sunDotMix = 1.0 - seaDot * 8.0;\n    }\n    diffuseColor = mix(diffuseColor, sunCol, sunDotMix * sunDotMix);\n\n  #else\n    float seaDotMix = 1.0 - seaDot;\n    diffuseColor = mix(diffuseColor, skyCol, seaDotMix * seaDotMix);\n  #endif\n\n  //// FINALISE\n\n  diffuseColor.a = 1.0;\n\n'), e)
    };
    Ni(K, _);
    var Yi = Di;
    const Vi = [
      0,
      180,
      480,
      900
    ];
    var Ui = new class extends l {
      constructor(...e) {
        super (...e),
        this.default = 0,
        this.value = 0,
        this.cycleLength = Vi[0]
      }
      set(e) {
        this.cycleLength = Vi[e],
        super.set(e)
      }
    };
    const Xi = '1.0.2';
    let Ji = localStorage.getItem('seen-version');
    const qi = null !== Ji && Ji !== Xi,
    Ki = [
      'Hosting switched to save costs - high-res textures reinstated',
      'Vehicle physics tweaked to reduce slip and improve stability',
      'Temporary feature: use "?autodrive=true" in the URL will have autodrive initialise enabled',
      'Temporary feature: use "?cruisecontrol=[speed]" in the URL to initialise in cruise control (km per hour)',
      'Hard roads made slightly wider',
      'Improvements to the autodrive\'s reset intelligence',
      'Driving backwards discouraged more clearly',
      'Multiple small UX bugs fixed'
    ],
    _i = {
      targetDate: 'mid/late-November',
      changes: [
        'Controller/wheel support',
        'In-vehicle first-person view',
        'Revamped control panel UI for extra physics/audio/game/control settings',
        'Further bug fixes, including audio issues and environment generation bugs'
      ]
    };
    window.localStorage.setItem('seen-version', Xi);
    const $i = e=>{
      let t = {
        major: 0,
        minor: 0,
        patch: 0,
        release: 10,
        releaseVersion: 10
      },
      i = e,
      s = null;
      if (e.indexOf('-') > 0 && (i = (e = e.split('-')) [0], s = e[1]), i = i.split('.'), t.major = parseInt(i[0]), t.minor = parseInt(i[1]), t.patch = parseInt(i[2]), s) {
        s = s.split('.');
        let e = s[0];
        t.release = 'alpha' == e ? 0 : 'beta' == e ? 1 : 2,
        t.releaseVersion = parseInt(s[1])
      }
      return t
    };
    var es = Xi;
    var ts = {
      version: es,
      seed: Ve,
      'draw-calls': 0,
      'heightmap-cache': 0,
      'roadside-objects': 0,
      farcells: 0,
      'farcells-staged': 0,
      'nearcell-staged': 0
    },
    is = i(10);
    class ss extends h.G {
      constructor(...e) {
        super (...e),
        this.geoSource = null,
        this.materials = {
        },
        this.objectType = 'root',
        this.worldPosition = new h.W,
        this.variant = 0,
        this.variantMaterials = [
        ]
      }
      initialiseGeometry(e) {
        this.geoSource && ss.loader.load(this.geoSource, (t=>{
          t.traverse((e=>{
            e.isMesh && (e.userData.matName = e.name.split('_') [1], e.userData.matName in this.materials ? e.material = this.materials[e.userData.matName] : e.material = this.materials.default)
          })),
          this.add(t),
          e(this)
        }))
      }
      destroy() {
        this.traverse((e=>{
          e.isMesh && e.geometry.dispose()
        }))
      }
      updatePosition() {
        this.position.subVectors(this.worldPosition, this.parent.position)
      }
      updateRetireIndex(e) {
        this.retireIndex = e + 5
      }
      setVariant(e) {
        e < 0 || e >= this.variantMaterials.length ? console.warn('No variant index ' + e + ' found for object type ' + this.objectType) : (this.variantIndex = e, this.traverse((e=>{
          e.isMesh && e.userData.matName in this.variantMaterials[this.variantIndex] && (e.material = this.variantMaterials[this.variantIndex][e.userData.matName])
        })))
      }
    }
    ss.loader = new is.a;
    var ns = ss,
    as = i.p + 'static/media/sign.c5b548a5.obj',
    rs = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDE2OjI4OjE1WiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMVQxNjoyODoxNVoiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAxVDE2OjI4OjE1WiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMThkYjE2OS1mMjY5LTI3NGYtYWMwNC1mYzhmZGIwMmY5M2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MGQyNWZiNi04NDU4LTFjNGUtYjJjNS0wMTExOGEzYzRjMGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplZjM0ZDlmZi04MWQ5LTdlNGItOGYxMS0zZTFiY2UzMDJjNzUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplZjM0ZDlmZi04MWQ5LTdlNGItOGYxMS0zZTFiY2UzMDJjNzUiIHN0RXZ0OndoZW49IjIwMjItMDItMDFUMTY6Mjg6MTVaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYxOGRiMTY5LWYyNjktMjc0Zi1hYzA0LWZjOGZkYjAyZjkzZCIgc3RFdnQ6d2hlbj0iMjAyMi0wMi0wMVQxNjoyODoxNVoiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4VqR/6AAAADElEQVQIHWOo598OAAJWAUbmdvdzAAAAAElFTkSuQmCC';
    const hs = 0,
    os = 1,
    ls = 2,
    ds = 3,
    cs = 5,
    ps = 6,
    us = 8,
    gs = 9,
    ms = 10,
    xs = 11,
    vs = [
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDE4OjU5OjA5WiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMVQxODo1OTowOVoiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAxVDE4OjU5OjA5WiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3YzM5YjcwZC00NGU0LTUzNDYtOTEwOS0xMjU3MjhiZjg3OGUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmNDc1ZTE1MS02MmZhLTE4NDItOWM0Mi0yMjdkNzRjOTk4NzQi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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDE4OjU4OjI0WiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMVQxODo1ODoyNFoiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAxVDE4OjU4OjI0WiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OTlkMTg2MC02NjVlLTZiNGItODIxMS00YTJmODZjMDY5NTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplOWM1MThkMy1jOWM1LTBkNDAtODZjYS1mNTI3M2QwYjQzODgi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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDE4OjU0OjEwWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMVQxODo1NDoxMFoiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAxVDE4OjU0OjEwWiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphNTNlOTZlZC0wNzg5LTc2NDQtYmU3Yi05YjZkYTVjZTk5ZTAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxNzlkMmIyNi01ZTcwLWJiNGEtODAyMS1jMjE1Y2ZmMmY3ZDgi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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDE4OjU0OjM4WiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMVQxODo1NDozOFoiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAxVDE4OjU0OjM4WiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyOTg4MjdkYy01Y2Y1LWIyNGItOGE2ZS03Njk4OTJiYThkZmUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNTQwZGNiOS04NTBhLWFkNGEtODQyYS0xNzIxMjA4NzA0N2Ii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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGNmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDIwOjI3OjMzWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMVQyMDoyNzozM1oiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAxVDIwOjI3OjMzWiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxZWNhNDY1ZC1jOTQyLTBjNDMtOWJkZS1iMzg2YTNkNWU1OGUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2ZDAyZjIxMi00NDRkLTEzNGUtYmU4Yy0xOWI1ZTg4ODFkOGEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NTZjZGY2YS01OTc2LTU3NDQtYjJhMS1jYmIyOTgwNjc1NzUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NTZjZGY2YS01OTc2LTU3NDQtYjJhMS1jYmIyOTgwNjc1NzUiIHN0RXZ0OndoZW49IjIwMjItMDItMDFUMjA6Mjc6MzNaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlY2E0NjVkLWM5NDItMGM0My05YmRlLWIzODZhM2Q1ZTU4ZSIgc3RFdnQ6d2hlbj0iMjAyMi0wMi0wMVQyMDoyNzozM1oiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSIhIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSIhIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5dhtDoAAAT3klEQVR42u1dB1hU17aOJkaTm+Sq8ba85OZ9uffl3rwkNsoMZehSpDcBQVREY8MWY8t9scUYTYwxRk1ixR5jbyDNmWEGGDoiIlYsMAxNkTblzKx39qENRoR9mIEZ2Pv7fs8ZmjPn//c6a+291jovAMALBP0X5CIQAZCLQARAQARAQARAQATQN5FsxesI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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHzGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDIwOjI3OjEyWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMlQxNDo1NDoyMloiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAyVDE0OjU0OjIyWiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiNTZiYjAwNS02YmRjLWY5NDMtYjY4MS02OTQ4MWE2MDY0OTgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiMWUxMGI5Mi03YTkzLTMwNDAtOGFjMC1hNTE1ODRkZTZlZWIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NzA5MDQ4Ny1jZDE3LWI3NGUtYWQ1Zi0zODU4ZjExYjc5MzAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3MDkwNDg3LWNkMTctYjc0ZS1hZDVmLTM4NThmMTFiNzkzMCIgc3RFdnQ6d2hlbj0iMjAyMi0wMi0wMVQyMDoyNzoxMloiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmRmZTJhMGQtMmM0OS0zYzQ0LWEzZjEtNGJiZmQzYWJiY2YyIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTAxVDIwOjI3OjEyWiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNTZiYjAwNS02YmRjLWY5NDMtYjY4MS02OTQ4MWE2MDY0OTgiIHN0RXZ0OndoZW49IjIwMjItMDItMDJUMTQ6NTQ6MjJaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iMTUlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSIxNSUi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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHzGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDIwOjI3OjEyWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMlQxNDo1Mzo1NloiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAyVDE0OjUzOjU2WiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4YTExMzQzMS00MWJlLTNiNGEtODk1Yy0xODBkOTYzNzdkNmYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjN2VmYjY3MS0xZGRjLWJkNGYtYWE5NS0xNTU5ZGU0ODczZWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NzA5MDQ4Ny1jZDE3LWI3NGUtYWQ1Zi0zODU4ZjExYjc5MzAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3MDkwNDg3LWNkMTctYjc0ZS1hZDVmLTM4NThmMTFiNzkzMCIgc3RFdnQ6d2hlbj0iMjAyMi0wMi0wMVQyMDoyNzoxMloiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmRmZTJhMGQtMmM0OS0zYzQ0LWEzZjEtNGJiZmQzYWJiY2YyIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTAxVDIwOjI3OjEyWiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4YTExMzQzMS00MWJlLTNiNGEtODk1Yy0xODBkOTYzNzdkNmYiIHN0RXZ0OndoZW49IjIwMjItMDItMDJUMTQ6NTM6NTZaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iMjAlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSIyMCUi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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGNmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDIwOjI3OjEyWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMVQyMDoyNzoxMloiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAxVDIwOjI3OjEyWiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmZGZlMmEwZC0yYzQ5LTNjNDQtYTNmMS00YmJmZDNhYmJjZjIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1NzMxZDNmYy1mOWY2LTZjNDMtYmYwNy02ZjVjNWE2MjkzNGUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NzA5MDQ4Ny1jZDE3LWI3NGUtYWQ1Zi0zODU4ZjExYjc5MzAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzA5MDQ4Ny1jZDE3LWI3NGUtYWQ1Zi0zODU4ZjExYjc5MzAiIHN0RXZ0OndoZW49IjIwMjItMDItMDFUMjA6Mjc6MTJaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZkZmUyYTBkLTJjNDktM2M0NC1hM2YxLTRiYmZkM2FiYmNmMiIgc3RFdnQ6d2hlbj0iMjAyMi0wMi0wMVQyMDoyNzoxMloiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSIhIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSIhIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz64/6jGAAAT1klEQVR42u2dB1hU17bHo4nR5Ca5arwtL7l5X+59uTcviY0yQxm6FOlNQBEV0diwxdhyX2wxRhNjjFGTWLHH2BtKc2aYAYaOiIgVCwxDk86UM7Pe2QchMyrCPszADOz9fX/PAKIzZ/3OPmutvfY6LwDAC0R9V+QkEADISSAAEBEAiAgARASA3qlkG157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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHLmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDIwOjI3OjEyWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMlQxNDo1Mjo1NloiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAyVDE0OjUyOjU2WiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1YjQ3ZTcyNS03MjJjLWY1NGQtOTNkNC05MWI2MDE3MzY2OTAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3YTRjZWRiMC0xYjkzLWMwNDMtODJkMC0yMTQ1ZmM5MDllMjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NzA5MDQ4Ny1jZDE3LWI3NGUtYWQ1Zi0zODU4ZjExYjc5MzAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3MDkwNDg3LWNkMTctYjc0ZS1hZDVmLTM4NThmMTFiNzkzMCIgc3RFdnQ6d2hlbj0iMjAyMi0wMi0wMVQyMDoyNzoxMloiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmRmZTJhMGQtMmM0OS0zYzQ0LWEzZjEtNGJiZmQzYWJiY2YyIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTAxVDIwOjI3OjEyWiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YjQ3ZTcyNS03MjJjLWY1NGQtOTNkNC05MWI2MDE3MzY2OTAiIHN0RXZ0OndoZW49IjIwMjItMDItMDJUMTQ6NTI6NTZaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iMTUlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSIxNSUi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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHLmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDIwOjI3OjEyWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMlQxNDo1MzoxN1oiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAyVDE0OjUzOjE3WiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiNTk0OGVkNi1mZTViLWE0NGEtYjZlMy04ZDM5ZGJjOTdjMzUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZDJlYzBkOS00Yjg0LTI4NDAtYWZjOC0wOWM3OTVkMTkyMGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NzA5MDQ4Ny1jZDE3LWI3NGUtYWQ1Zi0zODU4ZjExYjc5MzAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3MDkwNDg3LWNkMTctYjc0ZS1hZDVmLTM4NThmMTFiNzkzMCIgc3RFdnQ6d2hlbj0iMjAyMi0wMi0wMVQyMDoyNzoxMloiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmRmZTJhMGQtMmM0OS0zYzQ0LWEzZjEtNGJiZmQzYWJiY2YyIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTAxVDIwOjI3OjEyWiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNTk0OGVkNi1mZTViLWE0NGEtYjZlMy04ZDM5ZGJjOTdjMzUiIHN0RXZ0OndoZW49IjIwMjItMDItMDJUMTQ6NTM6MTdaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iMjAlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSIyMCUi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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDIwOjM1OjE1WiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMVQyMDozNToxNVoiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAxVDIwOjM1OjE1WiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1YjcyNGQ1Yy0xMTE2LTZhNDktYjBlNy01YWNjZDlkZDA2M2MiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmN2ViYTA2Ni1lYmRmLWJiNDgtYWVkYi0zODkzZDdmMDM0MTMi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', 0.75, 0, rs)
      },
      {
        sign: V('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTAxVDIwOjM1OjQxWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0wMVQyMDozNTo0MVoiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTAxVDIwOjM1OjQxWiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ODBhMzZmZS05MDViLTU0NDAtYmE4ZS1jNjNlNDc4ZWRlY2IiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1Nzg2ZDY0Yi0xOTczLTYwNDQtYjdjOS04YmEyZTM0MWQ3MGMi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', 0.75, 0, rs)
      }
    ],
    ws = new h.D({
      color: 16777215
    });
    var fs = class extends ns {
      constructor(...e) {
        super (...e),
        this.geoSource = as,
        this.objectType = 'WarningSign',
        this.variantMaterials = vs,
        this.materials = {
          pole: ws,
          sign: this.variantMaterials[0].sign
        }
      }
    },
    bs = i.p + 'static/media/vergemarker.f5ec7eac.obj';
    const As = {
      white: new h.D({
        color: 16777215,
        emissive: 16777215,
        emissiveIntensity: 0.2
      }),
      black: new h.D({
        color: 3355443,
        flatShading: !0
      }),
      reflect: new h.D({
        color: 16720418,
        emissive: 16720418,
        emissiveIntensity: 0.2
      })
    };
    var ys = class extends ns {
      constructor(...e) {
        super (...e),
        this.geoSource = bs,
        this.objectType = 'VergeMarker',
        this.materials = As
      }
    };
    const Is = {
      main: new h.D({
        color: 8947848
      })
    };
    var Ds = class extends ns {
      constructor(...e) {
        super (...e),
        this.geoSource = null,
        this.objectType = 'BridgeSupport',
        this.materials = Is
      }
      initialiseGeometry(e) {
        super.initialiseGeometry();
        let t = new h.B(new h.e(2 * Te, 20, 1), this.materials.main);
        t.position.y = - 10.5,
        this.add(t),
        e(this)
      }
    },
    Ns = i.p + 'static/media/wallcap.aac16301.obj';
    var Ms = class {
      constructor() {
        this.boundingSphere = new h.R,
        this.bounds = {
          maxX: 0,
          minX: 0,
          maxY: 0,
          minY: 0,
          maxZ: 0,
          minZ: 0
        },
        this.seg = {
        },
        this.drawNode = null,
        this.drawnNode = 0
      }
      static checkMakeSegment(e) {
      }
      computeBoundingSphere() {
      }
      drawSegment() {
      }
      drawNextNode() {
      }
      postProcess() {
      }
      retire() {
        this.drawnNode = 0
      }
    },
    Cs = i.p + 'static/media/concrete_01.76bdb714.jpg';
    const js = 1 / 6,
    ks = 2 * js,
    zs = 151,
    Ss = {
    };
    class Os extends Ms {
      constructor(e = null, t = null) {
        super (),
        this.mapSource = Cs,
        this.normSource = null,
        this.getHeightAt = t,
        this.material = new h.F({
          map: null,
          flatShading: !0
        }),
        this.mesh = new h.B(Os.getGeo(), this.material),
        this.mesh.matrixAutoUpdate = !1,
        this.mesh.geometry.setDrawRange(0, 0),
        this.posAttribute = this.mesh.geometry.attributes.position,
        this.posArr = this.posAttribute.array,
        this.uvAttribute = this.mesh.geometry.attributes.uv,
        this.uvArr = this.uvAttribute.array,
        e && this.drawSegment(e),
        this.applyMaterial()
      }
      applyMaterial() {
        this.mapSource && (this.material.map = X(this.mapSource, 4)),
        this.normSource && (this.material.normalMap = X(this.normSource, 4))
      }
      setMap(e) {
        this.material.map = e
      }
      drawSegment(e) {
        return this.seg = e,
        this.drawNode = this.seg.startNode,
        this.pi = 0,
        this.ui = 0,
        this.ox = this.seg.startNode.p.x,
        this.oz = this.seg.startNode.p.z,
        this.lOffset = this.seg.distance < 0 ? js : 0,
        this.uvDist = 0,
        this.ux2 = 0.46153846153846156,
        this.ux1 = 1 - this.ux2,
        this.ni = 0,
        this.drawNextNode()
      }
      drawNextNode() {
        for (Ss.dnp = this.drawNode.p, this.ni > 0 ? (this.bounds.maxX = Math.max(this.bounds.maxX, Ss.dnp.x - this.ox), this.bounds.minX = Math.min(this.bounds.minX, Ss.dnp.x - this.ox), this.bounds.maxY = Math.max(this.bounds.maxY, Ss.dnp.y), this.bounds.minY = Math.min(this.bounds.minY, Ss.dnp.y), this.bounds.maxZ = Math.max(this.bounds.maxZ, Ss.dnp.z - this.oz), this.bounds.minZ = Math.min(this.bounds.minZ, Ss.dnp.z - this.oz)) : (this.bounds.maxX = Ss.dnp.x - this.ox, this.bounds.minX = Ss.dnp.x - this.ox, this.bounds.maxY = Ss.dnp.y, this.bounds.minY = Ss.dnp.y, this.bounds.maxZ = Ss.dnp.z - this.oz, this.bounds.minZ = Ss.dnp.z - this.oz), Ss.j = 0; Ss.j < this.drawNode.ps.length; Ss.j += 2) Ss.pj = this.drawNode.ps[Ss.j],
        Ss.nj = this.drawNode.ns[Ss.j],
        Ss.x = Ss.pj.x + Ss.nj.x * (this.seg.distance - this.lOffset),
        Ss.xw = Ss.x + Ss.nj.x * js,
        Ss.z = Ss.pj.z + Ss.nj.z * (this.seg.distance - this.lOffset),
        Ss.zw = Ss.z + Ss.nj.z * js,
        this.posArr[this.pi++] = Ss.x - this.ox - Ss.nj.x * ks,
        this.posArr[this.pi++] = Ss.pj.y,
        this.posArr[this.pi++] = Ss.z - this.oz - Ss.nj.z * ks,
        this.posArr[this.pi++] = Ss.x - this.ox,
        this.posArr[this.pi++] = Ss.pj.y + 1,
        this.posArr[this.pi++] = Ss.z - this.oz,
        this.posArr[this.pi++] = Ss.xw - this.ox,
        this.posArr[this.pi++] = Ss.pj.y + 1,
        this.posArr[this.pi++] = Ss.zw - this.oz,
        this.posArr[this.pi++] = Ss.xw - this.ox + Ss.nj.x * ks,
        this.posArr[this.pi++] = Ss.pj.y,
        this.posArr[this.pi++] = Ss.zw - this.oz + Ss.nj.z * ks,
        this.seg.contiguousStart || 0 != this.ni || 0 != Ss.j || (this.posArr[this.pi - 11] -= 1, this.posArr[this.pi - 8] -= 1, this.posArr[this.pi - 5] -= 1, this.posArr[this.pi - 2] -= 1),
        this.uvArr[this.ui++] = 1,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvArr[this.ui++] = this.ux1,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvArr[this.ui++] = this.ux2,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvArr[this.ui++] = 0,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvDist++;
        return this.ni++,
        this.drawNode = this.drawNode.next,
        !(this.drawNode.i < this.seg.endNode.i) && (Ss.pj = this.drawNode.p, Ss.nj = this.drawNode.n, Ss.x = Ss.pj.x + Ss.nj.x * (this.seg.distance - this.lOffset), Ss.xw = Ss.x + Ss.nj.x * js, Ss.z = Ss.pj.z + Ss.nj.z * (this.seg.distance - this.lOffset), Ss.zw = Ss.z + Ss.nj.z * js, this.posArr[this.pi++] = Ss.x - this.ox - Ss.nj.x * ks, this.posArr[this.pi++] = Ss.pj.y, this.posArr[this.pi++] = Ss.z - this.oz - Ss.nj.z * ks, this.posArr[this.pi++] = Ss.x - this.ox, this.posArr[this.pi++] = Ss.pj.y + 1, this.posArr[this.pi++] = Ss.z - this.oz, this.posArr[this.pi++] = Ss.xw - this.ox, this.posArr[this.pi++] = Ss.pj.y + 1, this.posArr[this.pi++] = Ss.zw - this.oz, this.posArr[this.pi++] = Ss.xw - this.ox + Ss.nj.x * ks, this.posArr[this.pi++] = Ss.pj.y, this.posArr[this.pi++] = Ss.zw - this.oz + Ss.nj.z * ks, this.seg.contiguousEnd || (this.posArr[this.pi - 11] -= 1, this.posArr[this.pi - 8] -= 1, this.posArr[this.pi - 5] -= 1, this.posArr[this.pi - 2] -= 1), this.uvArr[this.ui++] = 1, this.uvArr[this.ui++] = this.uvDist, this.uvArr[this.ui++] = 0.55, this.uvArr[this.ui++] = this.uvDist, this.uvArr[this.ui++] = 0.45, this.uvArr[this.ui++] = this.uvDist, this.uvArr[this.ui++] = 0, this.uvArr[this.ui++] = this.uvDist, this.mesh.geometry.setDrawRange(0, 5 * this.seg.length * 6 * 3), this.computeBoundingSphere(), this.mesh.geometry.boundingSphere = this.boundingSphere, this.mesh.position.set(this.ox, - 0.25, this.oz), this.posAttribute.needsUpdate = !0, this.uvAttribute.needsUpdate = !0, this.mesh.visible = !0, this.mesh.updateMatrix(), !0)
      }
      computeBoundingSphere() {
        Ss.minX = this.bounds.minX,
        Ss.maxX = this.bounds.maxX,
        Ss.minY = this.bounds.minY,
        Ss.maxY = this.bounds.maxY,
        Ss.minZ = this.bounds.minZ,
        Ss.maxZ = this.bounds.maxZ,
        this.boundingSphere.center.x = (Ss.minX + Ss.maxX) / 2,
        this.boundingSphere.center.y = (Ss.minY + Ss.maxY) / 2,
        this.boundingSphere.center.z = (Ss.minZ + Ss.maxZ) / 2,
        this.boundingSphere.radius = Math.sqrt((Ss.maxX - Ss.minX) * (Ss.maxX - Ss.minX) + (Ss.maxY - Ss.minY) * (Ss.maxY - Ss.minY) + (Ss.maxZ - Ss.minZ) * (Ss.maxZ - Ss.minZ)) / 2 + 10
      }
      retire() {
        this.mesh.visible = !1
      }
      static getNorms() {
        let e = [
        ];
        for (let t = 0; t < zs; t++) e.push(1, 0, 0, 0, 1, 0, 0, 1, 0, - 1, 0, 0);
        return e
      }
      static getGeo() {
        let e = new h.g;
        return e.setIndex(Os.getIndex()),
        e.setAttribute('position', new h.o(new Float32Array(1812), 3)),
        e.attributes.position.setUsage(h.l),
        e.setAttribute('uv', new h.o(new Float32Array(1208), 2)),
        e.attributes.uv.setUsage(h.l),
        e
      }
      static getIndex() {
        let e,
        t,
        i,
        s,
        n,
        a,
        r,
        h,
        o = [
        ];
        for (let l = 0; l < zs; l++) e = 4 * l,
        t = e + 1,
        i = e + 2,
        s = e + 3,
        n = 4 * (l + 1),
        a = n + 1,
        r = n + 2,
        h = n + 3,
        o.push(e, t, n, t, a, n, t, i, a, i, r, a, i, s, r, s, h, r);
        return o
      }
    }
    var Ls = Os;
    var Rs = class {
      constructor(e, t, i, s) {
        this.startNode = e,
        this.endNode = t,
        this.type = i,
        this.distance = s,
        this.length = t.i - e.i,
        this.contiguousStart = !1,
        this.contiguousEnd = !1
      }
      copy(e) {
        this.startNode = e.startNode,
        this.endNode = e.endNode,
        this.type = e.type,
        this.distance = e.distance,
        this.length = e.length,
        this.contiguousStart = e.contiguousStart,
        this.contiguousEnd = e.contiguousEnd
      }
    };
    var Ts = class {
      constructor(e, t) {
        this.prevRight = new Rs(e, e, - 1, 0),
        this.prevLeft = new Rs(e, e, - 1, 0),
        this.typeID = t
      }
      generateLeft(e) {
        return this.test = this.testLeft,
        this.prev = this.prevLeft,
        this.side = - 1,
        this.seg = null,
        e.i > this.prev.endNode.i && this.testGenLeft(e) && (this.seg = this.generate(e), this.seg && (this.prevLeft = this.seg)),
        this.seg
      }
      testGenLeft(e) {
        return !1
      }
      generateRight(e) {
        return this.test = this.testRight,
        this.prev = this.prevRight,
        this.side = 1,
        this.seg = null,
        e.i > this.prev.endNode.i && this.testGenRight(e) && (this.seg = this.generate(e), this.seg && (this.prevRight = this.seg)),
        this.seg
      }
      testGenRight(e) {
        return !1
      }
      generate(e) {
      }
    };
    var Ps = class {
      constructor(e = 10, t = 1, i = 0) {
        this.rands = [
        ],
        this.index = 0,
        this.rand = new window.alea(Ve);
        for (let s = 0; s < e; s++) this.rands.push(this.rand() * t - i);
        this.count = e,
        this.index = 0
      }
      next() {
        return this.index >= this.count && (this.index = 0),
        this.rands[this.index++]
      }
    };
    const Gs = 1.2,
    Bs = 0.3,
    Ws = 0.2,
    Es = new Ps(23, 0.1),
    Zs = new Ps(37, 0.2),
    Fs = new h.F({
      map: X(null, 4),
      flatShading: !0
    }),
    Hs = {
    };
    class Qs extends Ts {
      constructor(...e) {
        super (...e),
        this.p = new h.W
      }
      generate(e) {
        let t = e;
        for (; t.prev && this.test(t.prev) && e.i - t.i < 4; ) t = t.prev;
        for (; this.test(e.next) && e.next.i - t.i < Ze; ) e = e.next;
        if (e.i - t.i < 1) return e.i == t.i && (this.p.copy(e.p), this.p.x += e.n.x * (Te + 1.1) * this.side, this.p.z += e.n.z * (Te + 1.1) * this.side, Xs.addObject(Us.WallCap, this.p, Math.PI - e.a, e.i)),
        null;
        let i = new Rs(t, e, this.typeID, this.side < 0 ? - t.dswl : - t.dswr);
        return this.prev.endNode.i == t.i && this.prev.type == i.type && (this.prev.contiguousEnd = !0, i.contiguousStart = !0, i.distance = this.prev.distance),
        i
      }
      testGenLeft(e) {
        return void 0 !== e.dsel || void 0 !== e.dswl
      }
      testGenRight(e) {
        return void 0 !== e.dser || void 0 !== e.dswr
      }
      testGen(e) {
        return void 0 !== e.dswl || void 0 !== e.dswr
      }
      testLeft(e) {
        return void 0 !== e.dswl
      }
      testRight(e) {
        return void 0 !== e.dswr
      }
    }
    var Ys = class extends Ls {
      constructor(...e) {
        super (...e),
        this.p = new h.W,
        this.mesh.material = Fs
      }
      getDistFromGradient(e) {
        return Te + 1
      }
      drawSegment(e) {
        return this.seg = e,
        this.drawNode = this.seg.startNode,
        this.pi = 0,
        this.ui = 0,
        this.ox = this.seg.startNode.p.x,
        this.oz = this.seg.startNode.p.z,
        this.lOffset = this.seg.distance < 0 ? Bs : 0,
        this.uvDist = 0,
        this.ux2 = 0.4444444444444445,
        this.ux1 = 1 - this.ux2,
        this.ni = 0,
        this.side = e.distance < 0 ? - 1 : 1,
        this.h = 0,
        this.d = 0,
        this.drawNextNode()
      }
      drawNextNode() {
        for (Hs.dnp = this.drawNode.p, this.ni > 0 ? (this.bounds.maxX = Math.max(this.bounds.maxX, Hs.dnp.x - this.ox), this.bounds.minX = Math.min(this.bounds.minX, Hs.dnp.x - this.ox), this.bounds.maxY = Math.max(this.bounds.maxY, Hs.dnp.y), this.bounds.minY = Math.min(this.bounds.minY, Hs.dnp.y), this.bounds.maxZ = Math.max(this.bounds.maxZ, Hs.dnp.z - this.oz), this.bounds.minZ = Math.min(this.bounds.minZ, Hs.dnp.z - this.oz)) : (this.bounds.maxX = Hs.dnp.x - this.ox, this.bounds.minX = Hs.dnp.x - this.ox, this.bounds.maxY = Hs.dnp.y, this.bounds.minY = Hs.dnp.y, this.bounds.maxZ = Hs.dnp.z - this.oz, this.bounds.minZ = Hs.dnp.z - this.oz), this.seg.distance = this.getDistFromGradient(this.drawNode.g) * this.side, Hs.j = 0; Hs.j < this.drawNode.ps.length; Hs.j += 2) Hs.pj = this.drawNode.ps[Hs.j],
        Hs.nj = this.drawNode.ns[Hs.j],
        Hs.x = Hs.pj.x + Hs.nj.x * (this.seg.distance - this.lOffset + this.d),
        Hs.xw = Hs.x + Hs.nj.x * Bs,
        Hs.z = Hs.pj.z + Hs.nj.z * (this.seg.distance - this.lOffset + this.d),
        Hs.zw = Hs.z + Hs.nj.z * Bs,
        Hs.y = this.drawNode.ps[Hs.j].y,
        this.posArr[this.pi++] = Hs.x - this.ox - Hs.nj.x * Ws,
        this.posArr[this.pi++] = Hs.y,
        this.posArr[this.pi++] = Hs.z - this.oz - Hs.nj.z * Ws,
        this.posArr[this.pi++] = Hs.x - this.ox,
        this.posArr[this.pi++] = Hs.y + Gs + this.h,
        this.posArr[this.pi++] = Hs.z - this.oz,
        this.posArr[this.pi++] = Hs.xw - this.ox,
        this.posArr[this.pi++] = Hs.y + Gs + this.h,
        this.posArr[this.pi++] = Hs.zw - this.oz,
        this.posArr[this.pi++] = Hs.xw - this.ox + Hs.nj.x * Ws,
        this.posArr[this.pi++] = Hs.y,
        this.posArr[this.pi++] = Hs.zw - this.oz + Hs.nj.z * Ws,
        this.uvArr[this.ui++] = 1,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvArr[this.ui++] = this.ux1,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvArr[this.ui++] = this.ux2,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvArr[this.ui++] = 0,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvDist++,
        this.h = Es.next(),
        this.d = Zs.next();
        return this.ni++,
        this.drawNode = this.drawNode.next,
        !(this.drawNode.i < this.seg.endNode.i) && (this.h = 0, this.d = 0, Hs.pj = this.drawNode.p, Hs.nj = this.drawNode.n, Hs.x = Hs.pj.x + Hs.nj.x * (this.seg.distance - this.lOffset + this.d), Hs.xw = Hs.x + Hs.nj.x * Bs, Hs.z = Hs.pj.z + Hs.nj.z * (this.seg.distance - this.lOffset + this.d), Hs.zw = Hs.z + Hs.nj.z * Bs, Hs.y = Hs.pj.y, this.posArr[this.pi++] = Hs.x - this.ox - Hs.nj.x * Ws, this.posArr[this.pi++] = Hs.y, this.posArr[this.pi++] = Hs.z - this.oz - Hs.nj.z * Ws, this.posArr[this.pi++] = Hs.x - this.ox, this.posArr[this.pi++] = Hs.y + Gs, this.posArr[this.pi++] = Hs.z - this.oz, this.posArr[this.pi++] = Hs.xw - this.ox, this.posArr[this.pi++] = Hs.y + Gs, this.posArr[this.pi++] = Hs.zw - this.oz, this.posArr[this.pi++] = Hs.xw - this.ox + Hs.nj.x * Ws, this.posArr[this.pi++] = Hs.y, this.posArr[this.pi++] = Hs.zw - this.oz + Hs.nj.z * Ws, this.uvArr[this.ui++] = 1, this.uvArr[this.ui++] = this.uvDist, this.uvArr[this.ui++] = this.ux1, this.uvArr[this.ui++] = this.uvDist, this.uvArr[this.ui++] = this.ux2, this.uvArr[this.ui++] = this.uvDist, this.uvArr[this.ui++] = 0, this.uvArr[this.ui++] = this.uvDist, this.mesh.geometry.setDrawRange(0, 5 * this.seg.length * 6 * 3), this.computeBoundingSphere(), this.mesh.geometry.boundingSphere = this.boundingSphere, this.mesh.position.set(this.ox, - 0.35, this.oz), this.posAttribute.needsUpdate = !0, this.uvAttribute.needsUpdate = !0, this.mesh.visible = !0, this.mesh.updateMatrix(), this.seg.contiguousStart || (this.p.x = (this.posArr[0] + this.posArr[9]) / 2 + this.mesh.position.x, this.p.y = this.posArr[1], this.p.z = (this.posArr[2] + this.posArr[11]) / 2 + this.mesh.position.z, Xs.addObject(Us.WallCap, this.p, Math.PI + Math.PI / 2 - this.seg.startNode.a, this.seg.startNode.i)), this.seg.contiguousEnd || (this.p.x = (this.posArr[this.pi - 3] + this.posArr[this.pi - 12]) / 2 + this.mesh.position.x, this.p.y = this.posArr[this.pi - 2], this.p.z = (this.posArr[this.pi - 1] + this.posArr[this.pi - 10]) / 2 + this.mesh.position.z, Xs.addObject(Us.WallCap, this.p, Math.PI + Math.PI / 2 - this.seg.endNode.a, this.seg.endNode.i)), !0)
      }
    };
    const Vs = {
      VergeMarker: {
        class : ys,
        geo: null
      },
      WarningSign: {
        class : fs,
        geo: null
      },
      BridgeSupport: {
        class : Ds,
        geo: null
      },
      WallCap: {
        class : class extends ns {
          constructor(...e) {
            super (...e),
            this.geoSource = Ns,
            this.objectType = 'WallCap',
            this.materials = {
            default:
              Fs
            }
          }
        },
        geo: null
      }
    },
    Us = {
      VergeMarker: 'VergeMarker',
      WarningSign: 'WarningSign',
      BridgeSupport: 'BridgeSupport',
      WallCap: 'WallCap'
    };
    var Xs = new class {
      constructor() {
        this.lastRepositionIndex = 0,
        this.pools = {
        },
        this.active = [
        ],
        this.loadingQueue = [
        ],
        this.getHeightAt = () =>{
        },
        this.loadCounter = 0,
        this.didLoadBound = this.didLoad.bind(this),
        this.addObjectBound = this.addObject.bind(this),
        this.container = new h.G,
        this.container.matrixAutoUpdate = !1,
        this.loadingQueue = [
        ]
      }
      destroy() {
        this.loadingQueue.length = 0;
        for (let i in this.pools) {
          var e;
          for (let e of this.pools[i]) e.destroy();
          null === (e = Vs[i].geo) || void 0 === e || e.destroy()
        }
        for (let i of this.active) {
          var t;
          null === (t = i.destroy) || void 0 === t || t.call(i)
        }
        for (this.container.traverse((e=>{
          e.isMesh && (e.geometry.dispose(), e.material.dispose())
        })), this.active.length = 0, this.pools = {
        }; this.container.children.length; ) this.container.remove(this.container.children[0])
      }
      initialise(e) {
        this.getHeightAt = e,
        this.initLibrary()
      }
      initLibrary() {
        for (let e in Vs) this.loadObject(e),
        this.pools[e] = [
        ]
      }
      loadObject(e) {
        let t = Vs[e],
        i = new t.class;
        i.initialiseGeometry((() =>{
          t.geo = i,
          this.didLoad()
        }))
      }
      didLoad() {
        if (this.loadCounter++, this.loadCounter >= Object.keys(Vs).length) for (; this.loadingQueue.length; ) {
          let e = this.loadingQueue.pop();
          this.addObject(...e)
        }
      }
      addCustom(e, t, i, s, n = null) {
        if (n || (n = 5), st.vehicleIndex > s + n) return;
        let a;
        for (e.keyName = null, e.worldPosition = t.clone(), e.position.subVectors(e.worldPosition, this.container.position), e.rotation.y = i, e.visible = !0, e.retireIndex = s + n, this.container.add(e), a = 0; a < this.active.length && !(this.active[a].retireIndex > e.retireIndex); a++);
        this.active.splice(a, 0, e)
      }
      addObject(e, t, i, s, n = null) {
        if (!(e in Vs)) return void console.error('Unrecognised roadside object type ', e);
        if (!Vs[e].geo) return void this.loadingQueue.push([e,
        t,
        i,
        s,
        n]);
        let a,
        r;
        for (this.pools[e].length ? a = this.pools[e].pop() : (a = Vs[e].geo.clone(), this.container.add(a), ts['roadside-objects']++), a.keyName = e, a.worldPosition.copy(t), a.position.subVectors(a.worldPosition, this.container.position), a.rotation.y = i, a.visible = !0, a.retireIndex = s + 5, null !== n && a.setVariant(n), r = 0; r < this.active.length && !(this.active[r].retireIndex > a.retireIndex); r++);
        return this.active.splice(r, 0, a),
        a
      }
      update() {
        if (this.active.length && st.vehicleIndex >= this.active[0].retireIndex) {
          let e = this.active.shift();
          e.visible = !1,
          e.keyName ? this.pools[e.keyName].push(e) : this.container.remove(e)
        }
        if (this.active.length > 30) {
          let e = this.active.shift();
          e.visible = !1,
          e.keyName ? this.pools[e.keyName].push(e) : this.container.remove(e)
        }
        if (st.vehicleIndex - this.lastRepositionIndex > 100) {
          this.container.position.x = st.vehicleNode.p.x,
          this.container.position.z = st.vehicleNode.p.z,
          this.container.updateMatrix();
          for (let e of this.container.children) e.position.subVectors(e.worldPosition, this.container.position);
          this.lastRepositionIndex = st.vehicleIndex
        }
      }
    },
    Js = i.p + 'static/media/wall_barrier_02.44c5c0ea.webp',
    qs = i.p + 'static/media/wall_barrier_02_n.0c79c69f.webp';
    const Ks = 0.78,
    _s = 151;
    let $s = 0.55,
    en = 0.68,
    tn = 0.88,
    sn = 0,
    nn = null;
    const an = U(Js, 0.75, 8, qs, null, {
    }),
    rn = {
    };
    class hn extends Ms {
      constructor(e = null) {
        super (),
        this.p = new h.W,
        this.mapSource = null,
        this.normSource = null,
        this.bounds = {
          maxX: 0,
          minX: 0,
          maxY: 0,
          minY: 0,
          maxZ: 0,
          minZ: 0
        },
        this.material = an,
        this.mesh = new h.B(hn.getGeo(), this.material),
        this.mesh.matrixAutoUpdate = !1,
        this.mesh.geometry.setDrawRange(0, 0),
        this.posAttribute = this.mesh.geometry.attributes.position,
        this.posArr = this.posAttribute.array,
        this.normAttribute = this.mesh.geometry.attributes.normal,
        this.normArr = this.normAttribute.array,
        this.uvAttribute = this.mesh.geometry.attributes.uv,
        this.uvArr = this.uvAttribute.array,
        e && this.drawSegment(e),
        this.applyMaterial()
      }
      applyMaterial() {
        this.mapSource && (this.material.map = X(this.mapSource, 4)),
        this.normSource && (this.material.normalMap = X(this.normSource, 4))
      }
      setMap(e) {
        this.material.map = e
      }
      drawSegment(e) {
        return this.seg = e,
        this.drawNode = this.seg.startNode,
        this.pi = 0,
        this.normi = 0,
        this.ui = 0,
        this.ox = this.seg.startNode.p.x,
        this.oz = this.seg.startNode.p.z,
        this.uvDist = 0,
        this.side = Math.sign(e.distance),
        this.ni = 0,
        this.drawNextNode()
      }
      drawNextNode() {
        for (rn.dnp = this.drawNode.p, this.ni > 0 ? (this.bounds.maxX = Math.max(this.bounds.maxX, rn.dnp.x - this.ox), this.bounds.minX = Math.min(this.bounds.minX, rn.dnp.x - this.ox), this.bounds.maxY = Math.max(this.bounds.maxY, rn.dnp.y), this.bounds.minY = Math.min(this.bounds.minY, rn.dnp.y), this.bounds.maxZ = Math.max(this.bounds.maxZ, rn.dnp.z - this.oz), this.bounds.minZ = Math.min(this.bounds.minZ, rn.dnp.z - this.oz)) : (this.bounds.maxX = rn.dnp.x - this.ox, this.bounds.minX = rn.dnp.x - this.ox, this.bounds.maxY = rn.dnp.y, this.bounds.minY = rn.dnp.y, this.bounds.maxZ = rn.dnp.z - this.oz, this.bounds.minZ = rn.dnp.z - this.oz), rn.j = 0; rn.j < this.drawNode.ps.length; rn.j += 2) rn.pj = this.drawNode.ps[rn.j],
        rn.nj = this.drawNode.ns[rn.j],
        rn.njs = {
          x: rn.nj.x * - this.side,
          z: rn.nj.z * - this.side
        },
        rn.x = rn.pj.x + rn.nj.x * this.seg.distance,
        rn.x1 = rn.x + 0.1 * rn.nj.x * this.side,
        rn.z = rn.pj.z + rn.nj.z * this.seg.distance,
        rn.z1 = rn.z + 0.1 * rn.nj.z * this.side,
        this.normArr[this.pi] = rn.njs.x,
        this.posArr[this.pi++] = rn.x1 - this.ox,
        this.normArr[this.pi] = 0,
        this.posArr[this.pi++] = rn.pj.y,
        this.normArr[this.pi] = rn.njs.z,
        this.posArr[this.pi++] = rn.z1 - this.oz,
        _ > 2 && (this.normArr[this.pi] = rn.njs.x, this.posArr[this.pi++] = rn.x1 - this.ox, this.normArr[this.pi] = 0, this.posArr[this.pi++] = rn.pj.y + 0.42900000000000005, this.normArr[this.pi] = rn.njs.z, this.posArr[this.pi++] = rn.z1 - this.oz),
        _ > 1 && (this.normArr[this.pi] = rn.njs.x, this.posArr[this.pi++] = rn.x - this.ox, this.normArr[this.pi] = 0, this.posArr[this.pi++] = rn.pj.y + 0.5304000000000001, this.normArr[this.pi] = rn.njs.z, this.posArr[this.pi++] = rn.z - this.oz),
        _ > 0 && (this.normArr[this.pi] = rn.njs.x, this.posArr[this.pi++] = rn.x - this.ox, this.normArr[this.pi] = 0, this.posArr[this.pi++] = rn.pj.y + 0.6864, this.normArr[this.pi] = rn.njs.z, this.posArr[this.pi++] = rn.z - this.oz),
        this.normArr[this.pi] = rn.njs.x,
        this.posArr[this.pi++] = rn.x1 - this.ox,
        this.normArr[this.pi] = 0,
        this.posArr[this.pi++] = rn.pj.y + Ks,
        this.normArr[this.pi] = rn.njs.z,
        this.posArr[this.pi++] = rn.z1 - this.oz;
        if (this.ni++, this.drawNode = this.drawNode.next, this.drawNode.i < this.seg.endNode.i) return !1;
        if (rn.pj = this.drawNode.p, rn.nj = this.drawNode.n, rn.njs = {
          x: rn.nj.x * - this.side,
          z: rn.nj.z * - this.side
        }, rn.x = rn.pj.x + rn.nj.x * this.seg.distance, rn.z = rn.pj.z + rn.nj.z * this.seg.distance, rn.x1 = rn.x + 0.1 * rn.nj.x * this.side, rn.z1 = rn.z + 0.1 * rn.nj.z * this.side, this.normArr[this.pi] = rn.njs.x, this.posArr[this.pi++] = rn.x1 - this.ox, this.normArr[this.pi] = 0, this.posArr[this.pi++] = rn.pj.y, this.normArr[this.pi] = rn.njs.z, this.posArr[this.pi++] = rn.z1 - this.oz, _ > 2 && (this.normArr[this.pi] = rn.njs.x, this.posArr[this.pi++] = rn.x1 - this.ox, this.normArr[this.pi] = 0, this.posArr[this.pi++] = rn.pj.y + 0.42900000000000005, this.normArr[this.pi] = rn.njs.z, this.posArr[this.pi++] = rn.z1 - this.oz), _ > 1 && (this.normArr[this.pi] = rn.njs.x, this.posArr[this.pi++] = rn.x - this.ox, this.normArr[this.pi] = 0, this.posArr[this.pi++] = rn.pj.y + 0.5304000000000001, this.normArr[this.pi] = rn.njs.z, this.posArr[this.pi++] = rn.z - this.oz), _ > 0 && (this.normArr[this.pi] = rn.njs.x, this.posArr[this.pi++] = rn.x - this.ox, this.normArr[this.pi] = 0, this.posArr[this.pi++] = rn.pj.y + 0.6864, this.normArr[this.pi] = rn.njs.z, this.posArr[this.pi++] = rn.z - this.oz), this.normArr[this.pi] = rn.njs.x, this.posArr[this.pi++] = rn.x1 - this.ox, this.normArr[this.pi] = 0, this.posArr[this.pi++] = rn.pj.y + Ks, this.normArr[this.pi] = rn.njs.z, this.posArr[this.pi++] = rn.z1 - this.oz, this.mesh.geometry.setDrawRange(0, 5 * this.seg.length * (2 * (_ + 1)) * 3), this.computeBoundingSphere(), this.mesh.geometry.boundingSphere = this.boundingSphere, this.mesh.position.set(this.ox, - 0.15, this.oz), this.posAttribute.needsUpdate = !0, this.normAttribute.needsUpdate = !0, this.mesh.visible = !0, this.mesh.updateMatrix(), !this.seg.contiguousStart) for (this.p.x = this.posArr[0] + this.mesh.position.x, this.p.y = this.posArr[1], this.p.z = this.posArr[2] + this.mesh.position.z, Xs.addObject(Us.VergeMarker, this.p, Math.PI + Math.PI / 2 - this.seg.startNode.a, this.seg.startNode.i), rn.ii = 0; rn.ii < _ + 2; rn.ii++) this.posArr[3 * rn.ii + 1] -= Ks;
        if (!this.seg.contiguousEnd) for (rn.ii = 0; rn.ii < _ + 2; rn.ii++) this.posArr[this.pi - (3 * rn.ii + 2)] -= Ks;
        return !0
      }
      retire() {
        this.mesh.visible = !1
      }
      computeBoundingSphere() {
        rn.minX = this.bounds.minX,
        rn.maxX = this.bounds.maxX,
        rn.minY = this.bounds.minY,
        rn.maxY = this.bounds.maxY,
        rn.minZ = this.bounds.minZ,
        rn.maxZ = this.bounds.maxZ,
        this.boundingSphere.center.x = (rn.minX + rn.maxX) / 2,
        this.boundingSphere.center.y = (rn.minY + rn.maxY) / 2,
        this.boundingSphere.center.z = (rn.minZ + rn.maxZ) / 2,
        this.boundingSphere.radius = Math.sqrt((rn.maxX - rn.minX) * (rn.maxX - rn.minX) + (rn.maxY - rn.minY) * (rn.maxY - rn.minY) + (rn.maxZ - rn.minZ) * (rn.maxZ - rn.minZ)) / 2 + 10
      }
      static getNorms() {
        let e = [
        ];
        for (let t = 0; t < _s * (_ + 2); t++) e.push(0, 0, 1);
        return e
      }
      static getUV() {
        let e = [
        ];
        for (let t = 0; t < _s; t++) 0 == _ ? e.push(t, 0, t, 1) : 1 == _ ? e.push(t, 0, t, tn, t, 1) : 2 == _ ? e.push(t, 0, t, $s, t, tn, t, 1) : e.push(t, 0, t, $s, t, en, t, tn, t, 1);
        return e
      }
      static getGeo() {
        if (null !== nn && sn == _) return nn.clone();
        let e = new h.g;
        e.setIndex(hn.getIndex()),
        e.setAttribute('position', new h.o(new Float32Array(453 * (_ + 2)), 3)),
        e.attributes.position.setUsage(h.l),
        e.setAttribute('uv', new h.o(new Float32Array(hn.getUV()), 2));
        let t = new Float32Array(hn.getNorms());
        return e.setAttribute('normal', new h.o(t, 3)),
        e.attributes.normal.setUsage(h.l),
        nn = e,
        sn = _,
        e
      }
      static getIndex() {
        let e = [
        ];
        if (0 == _) {
          let t,
          i,
          s,
          n;
          for (let a = 0; a < _s; a++) t = 2 * a,
          i = t + 1,
          s = 2 * (a + 1),
          n = s + 1,
          e.push(t, i, s),
          e.push(i, n, s)
        } else if (1 == _) {
          let t,
          i,
          s,
          n,
          a,
          r;
          for (let h = 0; h < _s; h++) t = 3 * h,
          i = t + 1,
          s = t + 2,
          n = 3 * (h + 1),
          a = n + 1,
          r = n + 2,
          e.push(t, i, n, i, a, n, i, s, a, s, r, a)
        } else if (2 == _) {
          let t,
          i,
          s,
          n,
          a,
          r,
          h,
          o;
          for (let l = 0; l < _s; l++) t = 4 * l,
          i = t + 1,
          s = t + 2,
          n = t + 3,
          a = 4 * (l + 1),
          r = a + 1,
          h = a + 2,
          o = a + 3,
          e.push(t, i, a, i, r, a, i, s, r, s, h, r, s, n, h, n, o, h)
        } else {
          let t,
          i,
          s,
          n,
          a,
          r,
          h,
          o,
          l,
          d;
          for (let c = 0; c < _s; c++) t = 5 * c,
          i = t + 1,
          s = t + 2,
          n = t + 3,
          a = t + 4,
          r = 5 * (c + 1),
          h = r + 1,
          o = r + 2,
          l = r + 3,
          d = r + 4,
          e.push(t, i, r, i, h, r, i, s, h, s, o, h, s, n, o, n, l, o, n, a, l, a, d, l)
        }
        return e
      }
    }
    class on extends Ts {
      constructor(...e) {
        super (...e),
        this.fenceID = 4
      }
      generate(e) {
        let t = e.prev;
        for (e = e.next; this.test(t) && t.prev && t.i > this.prev.endNode.i && e.i - t.i < 11; ) t = t.prev;
        for (t.i - this.prev.endNode.i < 4 && (t = this.prev.endNode); this.test(e) && e.i - t.i < Ze; ) e = e.next;
        let i = this.typeID;
        wh.value.detailLodIndex > 1 && (t.i % 2 == 0 || this.prev.endNode.i == t.i && this.prev.type == this.fenceID) && (i = this.fenceID);
        let s = new Rs(t, e, i, (t.w + Ge) * this.side);
        return this.prev.endNode.i == t.i && this.prev.type == s.type && (this.prev.contiguousEnd = !0, s.contiguousStart = !0, s.distance = this.prev.distance),
        s
      }
      testGenLeft(e) {
        return !e.bridge && null == e.lWallDist && e.i >= this.prevLeft.endNode.i && (e.g < - 1 || e.g < 0 && e.da > 0.2 && e.h < 0.6)
      }
      testGenRight(e) {
        return !e.bridge && null == e.rWallDist && e.i >= this.prevRight.endNode.i && (e.g > 1 || e.g > 0 && e.da < - 0.2 && e.h < 0.6)
      }
      testLeft(e) {
        return !e.bridge && e.p.y > 3 && (e.g < - 0.5 || e.g < 0.1 && e.da < - 0.05 && e.h < 0.6)
      }
      testRight(e) {
        return !e.bridge && e.p.y > 3 && (e.g > 0.5 || e.g > - 0.1 && e.da > 0.05 && e.h < 0.6)
      }
    }
    var ln = hn,
    dn = i.p + 'static/media/wall_barrier_wood_n.f554ec90.webp';
    let cn = 0.52,
    pn = 0.56,
    un = 0.8,
    gn = 0.956,
    mn = 0,
    xn = null;
    const vn = U(null, 0.75, 8, dn, null, {
    }),
    wn = {
    };
    class fn extends Ms {
      constructor(e = null) {
        super (),
        this.p = new h.W,
        this.postIndex = [
        ],
        this.fenceIndex = [
        ],
        this.drawIndex = [
        ],
        this.fenceIndexTemplate = [
        ],
        this.mapSource = null,
        this.normSource = null,
        this.bounds = {
          maxX: 0,
          minX: 0,
          maxY: 0,
          minY: 0,
          maxZ: 0,
          minZ: 0
        },
        this.material = vn,
        this.mesh = new h.B(fn.getGeo(), this.material),
        this.mesh.matrixAutoUpdate = !1,
        this.mesh.geometry.setDrawRange(0, 0),
        this.posAttribute = this.mesh.geometry.attributes.position,
        this.posArr = this.posAttribute.array,
        this.normAttribute = this.mesh.geometry.attributes.normal,
        this.normArr = this.normAttribute.array,
        this.uvAttribute = this.mesh.geometry.attributes.uv,
        this.uvArr = this.uvAttribute.array,
        this.fenceIndexTemplate = fn.getFenceIndex(),
        e && this.drawSegment(e),
        this.applyMaterial()
      }
      applyMaterial() {
        this.mapSource && (this.material.map = X(this.mapSource, 4)),
        this.normSource && (this.material.normalMap = X(this.normSource, 4))
      }
      setMap(e) {
        this.material.map = e
      }
      drawSegment(e) {
        return this.seg = e,
        this.drawNode = this.seg.startNode,
        this.pi = 0,
        this.ui = 0,
        this.normi = 0,
        this.postI = 6 * (2 * this.seg.length + 1) * 3,
        this.postUVI = 6 * (2 * this.seg.length + 1) * 2,
        this.postIndex.length = 0,
        this.ox = this.seg.startNode.p.x,
        this.oz = this.seg.startNode.p.z,
        this.uvDist = 0,
        this.side = Math.sign(e.distance),
        this.ni = 0,
        this.si = 0,
        this.fenceDrawCount = 60 * this.seg.length,
        this.fenceVertCount = 0,
        this.fenceIndex.length = 0,
        this.fenceTriangleCount = 0,
        this.postIndexCount = 6 * (2 * this.seg.length + 1),
        this.postDrawCount = 0,
        this.drawNextNode()
      }
      updateBounds() {
        wn.dnp = this.drawNode.p,
        this.ni > 0 ? (this.bounds.maxX = Math.max(this.bounds.maxX, wn.dnp.x - this.ox), this.bounds.minX = Math.min(this.bounds.minX, wn.dnp.x - this.ox), this.bounds.maxY = Math.max(this.bounds.maxY, wn.dnp.y), this.bounds.minY = Math.min(this.bounds.minY, wn.dnp.y), this.bounds.maxZ = Math.max(this.bounds.maxZ, wn.dnp.z - this.oz), this.bounds.minZ = Math.min(this.bounds.minZ, wn.dnp.z - this.oz)) : (this.bounds.maxX = wn.dnp.x - this.ox, this.bounds.minX = wn.dnp.x - this.ox, this.bounds.maxY = wn.dnp.y, this.bounds.minY = wn.dnp.y, this.bounds.maxZ = wn.dnp.z - this.oz, this.bounds.minZ = wn.dnp.z - this.oz)
      }
      drawFenceVert(e, t, i, s, n = 0) {
        this.normArr[this.pi] = wn.njs.x,
        this.posArr[this.pi++] = e,
        this.normArr[this.pi] = 0,
        this.posArr[this.pi++] = wn.pj.y + 1 * t + n,
        this.normArr[this.pi] = wn.njs.z,
        this.posArr[this.pi++] = i,
        this.uvArr[this.ui++] = this.si,
        this.uvArr[this.ui++] = 0.4 * s
      }
      buildNextFenceIndex() {
        for (wn.fi = 3 * this.fenceTriangleCount, wn.i = 0; wn.i < 30; wn.i++) this.fenceIndex.push(this.fenceIndexTemplate[wn.fi + wn.i]);
        this.fenceTriangleCount += 10
      }
      drawFencePost() {
        wn.xA = wn.x - 0.02 * wn.nj.x * this.side + 0.06 * - wn.nj.z,
        wn.zA = wn.z - 0.02 * wn.nj.z * this.side + 0.06 * wn.nj.x,
        wn.xB = wn.x + 0.11 * wn.nj.x * this.side + 0.06 * - wn.nj.z,
        wn.zB = wn.z + 0.11 * wn.nj.z * this.side + 0.06 * wn.nj.x,
        wn.xC = wn.x + 0.11 * wn.nj.x * this.side - 0.06 * - wn.nj.z,
        wn.zC = wn.z + 0.11 * wn.nj.z * this.side - 0.06 * wn.nj.x,
        wn.xD = wn.x - 0.02 * wn.nj.x * this.side - 0.06 * - wn.nj.z,
        wn.zD = wn.z - 0.02 * wn.nj.z * this.side - 0.06 * wn.nj.x,
        wn.njs.x = 0,
        wn.njs.z = 0,
        wn.nup = 1,
        this.normArr[this.postI] = wn.njs.x,
        this.posArr[this.postI++] = wn.xA,
        this.normArr[this.postI] = wn.nup,
        this.posArr[this.postI++] = wn.pj.y,
        this.normArr[this.postI] = wn.njs.z,
        this.posArr[this.postI++] = wn.zA,
        this.normArr[this.postI] = wn.njs.x,
        this.posArr[this.postI++] = wn.xA,
        this.normArr[this.postI] = wn.nup,
        this.posArr[this.postI++] = wn.pj.y + 1 + 0.03,
        this.normArr[this.postI] = wn.njs.z,
        this.posArr[this.postI++] = wn.zA,
        this.normArr[this.postI] = wn.njs.x,
        this.posArr[this.postI++] = wn.xB,
        this.normArr[this.postI] = wn.nup,
        this.posArr[this.postI++] = wn.pj.y,
        this.normArr[this.postI] = wn.njs.z,
        this.posArr[this.postI++] = wn.zB,
        this.normArr[this.postI] = wn.njs.x,
        this.posArr[this.postI++] = wn.xB,
        this.normArr[this.postI] = wn.nup,
        this.posArr[this.postI++] = wn.pj.y + 1 + 0.03,
        this.normArr[this.postI] = wn.njs.z,
        this.posArr[this.postI++] = wn.zB,
        this.normArr[this.postI] = wn.njs.x,
        this.posArr[this.postI++] = wn.xC,
        this.normArr[this.postI] = wn.nup,
        this.posArr[this.postI++] = wn.pj.y,
        this.normArr[this.postI] = wn.njs.z,
        this.posArr[this.postI++] = wn.zC,
        this.normArr[this.postI] = wn.njs.x,
        this.posArr[this.postI++] = wn.xC,
        this.normArr[this.postI] = wn.nup,
        this.posArr[this.postI++] = wn.pj.y + 1 + 0.03,
        this.normArr[this.postI] = wn.njs.z,
        this.posArr[this.postI++] = wn.zC,
        this.normArr[this.postI] = wn.njs.x,
        this.posArr[this.postI++] = wn.xD,
        this.normArr[this.postI] = wn.nup,
        this.posArr[this.postI++] = wn.pj.y,
        this.normArr[this.postI] = wn.njs.z,
        this.posArr[this.postI++] = wn.zD,
        this.normArr[this.postI] = wn.njs.x,
        this.posArr[this.postI++] = wn.xD,
        this.normArr[this.postI] = wn.nup,
        this.posArr[this.postI++] = wn.pj.y + 1 + 0.03,
        this.normArr[this.postI] = wn.njs.z,
        this.posArr[this.postI++] = wn.zD,
        this.normArr[this.postI] = wn.njs.x,
        this.posArr[this.postI++] = wn.xD,
        this.normArr[this.postI] = wn.nup,
        this.posArr[this.postI++] = wn.pj.y + 1 + 0.03,
        this.normArr[this.postI] = wn.njs.z,
        this.posArr[this.postI++] = wn.zD,
        this.uvArr[this.postUVI++] = 0.25,
        this.uvArr[this.postUVI++] = 1,
        this.uvArr[this.postUVI++] = 0.25,
        this.uvArr[this.postUVI++] = 0.5,
        this.uvArr[this.postUVI++] = 0.5,
        this.uvArr[this.postUVI++] = 1,
        this.uvArr[this.postUVI++] = 0.5,
        this.uvArr[this.postUVI++] = 0.5,
        this.uvArr[this.postUVI++] = 0.75,
        this.uvArr[this.postUVI++] = 1,
        this.uvArr[this.postUVI++] = 0.75,
        this.uvArr[this.postUVI++] = 0.5,
        this.uvArr[this.postUVI++] = 0,
        this.uvArr[this.postUVI++] = 1,
        this.uvArr[this.postUVI++] = 0,
        this.uvArr[this.postUVI++] = 0.5,
        this.uvArr[this.postUVI++] = 0.5,
        this.uvArr[this.postUVI++] = 0.42,
        this.postIndex.push(this.postIndexCount, this.postIndexCount + 3, this.postIndexCount + 1, this.postIndexCount, this.postIndexCount + 2, this.postIndexCount + 3, this.postIndexCount + 2, this.postIndexCount + 5, this.postIndexCount + 3, this.postIndexCount + 2, this.postIndexCount + 4, this.postIndexCount + 5, this.postIndexCount + 4, this.postIndexCount + 7, this.postIndexCount + 5, this.postIndexCount + 4, this.postIndexCount + 6, this.postIndexCount + 7, this.postIndexCount + 6, this.postIndexCount + 1, this.postIndexCount + 7, this.postIndexCount + 6, this.postIndexCount, this.postIndexCount + 1, this.postIndexCount + 1, this.postIndexCount + 3, this.postIndexCount + 8, this.postIndexCount + 3, this.postIndexCount + 5, this.postIndexCount + 8),
        this.postIndexCount += 9,
        this.postDrawCount += 30
      }
      drawNextNode(e = !1) {
        for (this.updateBounds(), wn.j = 0; wn.j < this.drawNode.ps.length; wn.j += 5) wn.pj = this.drawNode.ps[wn.j],
        wn.nj = this.drawNode.ns[wn.j],
        wn.njs = {
          x: wn.nj.x * - this.side,
          z: wn.nj.z * - this.side
        },
        wn.x = wn.pj.x + wn.nj.x * this.seg.distance - this.ox,
        wn.x1 = wn.x + 0.08 * wn.nj.x * this.side,
        wn.z = wn.pj.z + wn.nj.z * this.seg.distance - this.oz,
        wn.z1 = wn.z + 0.08 * wn.nj.z * this.side,
        wn.rand = 0.06 * Math.random() - 0.03,
        wn.rand2 = 0.06 * Math.random() - 0.03,
        this.drawFenceVert(wn.x, 0, wn.z, 0, wn.rand),
        this.drawFenceVert(wn.x, pn, wn.z, cn, wn.rand),
        this.drawFenceVert(wn.x1, pn, wn.z1, pn, wn.rand),
        this.drawFenceVert(wn.x, un, wn.z, un, wn.rand2),
        this.drawFenceVert(wn.x, 1, wn.z, gn, wn.rand2),
        this.drawFenceVert(wn.x1, 1, wn.z1, 1, wn.rand2),
        (this.ni > 0 || 0 == wn.j) && this.buildNextFenceIndex(),
        (this.ni > 0 || this.seg.contiguousStart || wn.j > 0) && this.drawFencePost(),
        this.si++;
        if (this.ni++, this.drawNode = this.drawNode.next, this.drawNode.i < this.seg.endNode.i) return !1;
        if (this.updateBounds(), wn.pj = this.drawNode.p, wn.nj = this.drawNode.n, wn.njs = {
          x: wn.nj.x * - this.side,
          z: wn.nj.z * - this.side
        }, wn.x = wn.pj.x + wn.nj.x * this.seg.distance - this.ox, wn.z = wn.pj.z + wn.nj.z * this.seg.distance - this.oz, wn.x1 = wn.x + 0.1 * wn.nj.x * this.side, wn.z1 = wn.z + 0.1 * wn.nj.z * this.side, this.drawFenceVert(wn.x, 0, wn.z, 0), this.drawFenceVert(wn.x, pn, wn.z, cn), this.drawFenceVert(wn.x1, pn, wn.z1, pn), this.drawFenceVert(wn.x, un, wn.z, un), this.drawFenceVert(wn.x, 1, wn.z, gn), this.drawFenceVert(wn.x1, 1, wn.z1, 1), this.buildNextFenceIndex(), this.seg.contiguousEnd && this.drawFencePost(), this.si++, this.mesh.geometry.setDrawRange(0, this.fenceDrawCount + this.postDrawCount), this.computeBoundingSphere(), this.mesh.geometry.boundingSphere = this.boundingSphere, this.drawIndex = this.fenceIndex.concat(this.postIndex), this.mesh.geometry.setIndex(this.drawIndex), this.mesh.position.set(this.ox, - 0.15, this.oz), this.posAttribute.needsUpdate = !0, this.normAttribute.needsUpdate = !0, this.uvAttribute.needsUpdate = !0, this.mesh.visible = !0, this.mesh.updateMatrix(), !this.seg.contiguousStart) for (this.p.x = this.posArr[0] + this.mesh.position.x, this.p.y = this.posArr[1], this.p.z = this.posArr[2] + this.mesh.position.z, Xs.addObject(Us.VergeMarker, this.p, Math.PI + Math.PI / 2 - this.seg.startNode.a, this.seg.startNode.i), wn.ii = 0; wn.ii < 6; wn.ii++) this.posArr[3 * wn.ii + 1] -= 1;
        if (!this.seg.contiguousEnd) for (wn.ii = 0; wn.ii < 6; wn.ii++) this.posArr[this.pi - (3 * wn.ii + 2)] -= 1;
        return !0
      }
      retire() {
        this.mesh.visible = !1
      }
      computeBoundingSphere() {
        wn.minX = this.bounds.minX,
        wn.maxX = this.bounds.maxX,
        wn.minY = this.bounds.minY,
        wn.maxY = this.bounds.maxY,
        wn.minZ = this.bounds.minZ,
        wn.maxZ = this.bounds.maxZ,
        this.boundingSphere.center.x = (wn.minX + wn.maxX) / 2,
        this.boundingSphere.center.y = (wn.minY + wn.maxY) / 2,
        this.boundingSphere.center.z = (wn.minZ + wn.maxZ) / 2,
        this.boundingSphere.radius = Math.sqrt((wn.maxX - wn.minX) * (wn.maxX - wn.minX) + (wn.maxY - wn.minY) * (wn.maxY - wn.minY) + (wn.maxZ - wn.minZ) * (wn.maxZ - wn.minZ)) / 2 + 10
      }
      static getNorms() {
        let e = [
        ];
        for (let t = 0; t < 366; t++) e.push(0, 0, 1);
        return e
      }
      static getUV() {
        let e = [
        ];
        for (let t = 0; t < 61; t++) e.push(t, 0, t, cn, t, pn, t, un, t, gn, t, 1);
        return e
      }
      static getGeo() {
        if (null !== xn && mn == _) return xn.clone();
        let e = new h.g;
        return e.setAttribute('position', new h.o(new Float32Array(5490), 3)),
        e.attributes.position.setUsage(h.l),
        e.setAttribute('uv', new h.o(new Float32Array(3660), 2)),
        e.attributes.uv.setUsage(h.l),
        e.setAttribute('normal', new h.o(new Float32Array(5490), 3)),
        e.attributes.normal.setUsage(h.l),
        xn = e,
        mn = _,
        e
      }
      static getFenceIndex() {
        let e,
        t,
        i,
        s,
        n,
        a,
        r,
        h,
        o,
        l,
        d,
        c,
        p = [
        ];
        for (let u = 0; u < 61; u++) e = 6 * u,
        t = e + 1,
        i = e + 2,
        s = e + 3,
        n = e + 4,
        a = e + 5,
        r = 6 * (u + 1),
        h = r + 1,
        o = r + 2,
        l = r + 3,
        d = r + 4,
        c = r + 5,
        p.push(e, t, r, t, h, r, t, i, h, i, o, h, i, s, o, s, l, o, s, n, l, n, d, l, n, a, d, a, c, d);
        return p
      }
    }
    var bn = fn;
    const An = 2.3,
    yn = 0.3833333333333333,
    In = 0.19166666666666665,
    Dn = new h.F({
      map: null,
      flatShading: !0
    }),
    Nn = {
    };
    class Mn extends Ts {
      generate(e) {
        let t = e.prev;
        for (e = e.next; this.testGen(t) && t.prev && e.i - t.i < 4; ) t = t.prev;
        for (t.i - this.prev.endNode.i < 4 && (t = this.prev.endNode); this.testGen(e) && e.i - t.i < Ze; ) e = e.next;
        let i = new Rs(t, e, this.typeID, (t.w + 0) * this.side);
        return this.prev.endNode.i == t.i && this.prev.type == i.type && (this.prev.contiguousEnd = !0, i.contiguousStart = !0, i.distance = this.prev.distance),
        i
      }
      testGenLeft(e) {
        return e.bridge && e.i >= this.prev.endNode.i
      }
      testGenRight(e) {
        return e.bridge && e.i >= this.prev.endNode.i
      }
      testGen(e) {
        return e.bridge && e.i >= this.prev.endNode.i
      }
      testLeft(e) {
        return e.bridge
      }
      testRight(e) {
        return e.bridge
      }
    }
    var Cn = class extends Ls {
      constructor(...e) {
        super (...e),
        this.mapSource = Yi.skins.default.walls.sea,
        this.p = new h.W,
        this.mesh.material = Dn
      }
      drawSegment(e) {
        return this.seg = e,
        this.drawNode = this.seg.startNode,
        this.pi = 0,
        this.ui = 0,
        this.ox = this.seg.startNode.p.x,
        this.oz = this.seg.startNode.p.z,
        this.lOffset = this.seg.distance < 0 ? yn : 0,
        this.uvDist = 0,
        this.ux1 = 1.15,
        this.ux2 = 1.3416666666666666,
        this.ux3 = 2.4916666666666663,
        this.ni = 0,
        this.drawNextNode()
      }
      drawNextNode() {
        for (Nn.dnp = this.drawNode.p, this.ni > 0 ? (this.bounds.maxX = Math.max(this.bounds.maxX, Nn.dnp.x - this.ox), this.bounds.minX = Math.min(this.bounds.minX, Nn.dnp.x - this.ox), this.bounds.maxY = Math.max(this.bounds.maxY, Nn.dnp.y), this.bounds.minY = Math.min(this.bounds.minY, Nn.dnp.y), this.bounds.maxZ = Math.max(this.bounds.maxZ, Nn.dnp.z - this.oz), this.bounds.minZ = Math.min(this.bounds.minZ, Nn.dnp.z - this.oz)) : (this.bounds.maxX = Nn.dnp.x - this.ox, this.bounds.minX = Nn.dnp.x - this.ox, this.bounds.maxY = Nn.dnp.y, this.bounds.minY = Nn.dnp.y, this.bounds.maxZ = Nn.dnp.z - this.oz, this.bounds.minZ = Nn.dnp.z - this.oz), Nn.j = 0; Nn.j < this.drawNode.ps.length; Nn.j += 2) Nn.pj = this.drawNode.ps[Nn.j],
        Nn.nj = this.drawNode.ns[Nn.j],
        Nn.x = Nn.pj.x + Nn.nj.x * (this.seg.distance - this.lOffset),
        Nn.xw = Nn.x + Nn.nj.x * yn,
        Nn.z = Nn.pj.z + Nn.nj.z * (this.seg.distance - this.lOffset),
        Nn.zw = Nn.z + Nn.nj.z * yn,
        this.posArr[this.pi++] = Nn.x - this.ox - Nn.nj.x * In,
        this.posArr[this.pi++] = Nn.pj.y,
        this.posArr[this.pi++] = Nn.z - this.oz - Nn.nj.z * In,
        this.posArr[this.pi++] = Nn.x - this.ox,
        this.posArr[this.pi++] = Nn.pj.y + An,
        this.posArr[this.pi++] = Nn.z - this.oz,
        this.posArr[this.pi++] = Nn.xw - this.ox,
        this.posArr[this.pi++] = Nn.pj.y + An,
        this.posArr[this.pi++] = Nn.zw - this.oz,
        this.posArr[this.pi++] = Nn.xw - this.ox + Nn.nj.x * In,
        this.posArr[this.pi++] = Nn.pj.y,
        this.posArr[this.pi++] = Nn.zw - this.oz + Nn.nj.z * In,
        this.seg.contiguousStart || 0 != this.ni || 0 != Nn.j || (this.posArr[this.pi - 11] -= 1.15, this.posArr[this.pi - 8] -= 1.15, this.posArr[this.pi - 5] -= 1.15, this.posArr[this.pi - 2] -= 1.15),
        this.uvArr[this.ui++] = 0,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvArr[this.ui++] = this.ux1,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvArr[this.ui++] = this.ux2,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvArr[this.ui++] = this.ux3,
        this.uvArr[this.ui++] = this.uvDist,
        this.uvDist++;
        return this.ni++,
        this.drawNode = this.drawNode.next,
        !(this.drawNode.i < this.seg.endNode.i) && (Nn.pj = this.drawNode.p, Nn.nj = this.drawNode.n, Nn.x = Nn.pj.x + Nn.nj.x * (this.seg.distance - this.lOffset), Nn.xw = Nn.x + Nn.nj.x * yn, Nn.z = Nn.pj.z + Nn.nj.z * (this.seg.distance - this.lOffset), Nn.zw = Nn.z + Nn.nj.z * yn, this.posArr[this.pi++] = Nn.x - this.ox - Nn.nj.x * In, this.posArr[this.pi++] = Nn.pj.y, this.posArr[this.pi++] = Nn.z - this.oz - Nn.nj.z * In, this.posArr[this.pi++] = Nn.x - this.ox, this.posArr[this.pi++] = Nn.pj.y + An, this.posArr[this.pi++] = Nn.z - this.oz, this.posArr[this.pi++] = Nn.xw - this.ox, this.posArr[this.pi++] = Nn.pj.y + An, this.posArr[this.pi++] = Nn.zw - this.oz, this.posArr[this.pi++] = Nn.xw - this.ox + Nn.nj.x * In, this.posArr[this.pi++] = Nn.pj.y, this.posArr[this.pi++] = Nn.zw - this.oz + Nn.nj.z * In, this.seg.contiguousEnd || (this.posArr[this.pi - 11] -= An, this.posArr[this.pi - 8] -= An, this.posArr[this.pi - 5] -= An, this.posArr[this.pi - 2] -= An), this.uvArr[this.ui++] = 1, this.uvArr[this.ui++] = this.uvDist, this.uvArr[this.ui++] = 0.55, this.uvArr[this.ui++] = this.uvDist, this.uvArr[this.ui++] = 0.45, this.uvArr[this.ui++] = this.uvDist, this.uvArr[this.ui++] = 0, this.uvArr[this.ui++] = this.uvDist, this.mesh.geometry.setDrawRange(0, 5 * this.seg.length * 6 * 3), this.computeBoundingSphere(), this.mesh.geometry.boundingSphere = this.boundingSphere, this.mesh.position.set(this.ox, - 1.5, this.oz), this.posAttribute.needsUpdate = !0, this.uvAttribute.needsUpdate = !0, this.mesh.visible = !0, this.mesh.updateMatrix(), this.seg.contiguousStart || (this.p.x = (this.posArr[0] + this.posArr[9]) / 2 + this.mesh.position.x, this.p.y = this.posArr[7] - 1.15, this.p.z = (this.posArr[2] + this.posArr[11]) / 2 + this.mesh.position.z, Xs.addObject(Us.VergeMarker, this.p, Math.PI + Math.PI / 2 - this.seg.startNode.a, this.seg.startNode.i)), !0)
      }
    };
    const jn = new h.F({
      map: null,
      flatShading: !0
    });
    class kn extends Ls {
      constructor(...e) {
        super (...e),
        this.mapSource = Yi.skins.default.walls.sea,
        this.mesh.material = jn
      }
    }
    kn.waterHeight = 2.5,
    kn.waterThreshold = 3;
    class zn extends Ts {
      constructor(...e) {
        super (...e),
        this.drystoneID = 2
      }
      generate(e) {
        let t = e.prev;
        for (e = e.next; this.test(t) && t.prev && e.i - t.i < 4 && t.i > this.prev.endNode.i && e.i - t.i < Ze; ) t = t.prev;
        for (t.i - this.prev.endNode.i < 4 && (t = this.prev.endNode); this.test(e) && e.i - t.i < Ze; ) e = e.next;
        let i = this.typeID;
        (t.i % 2 == 0 || this.prev.endNode.i == t.i && this.prev.type == this.drystoneID) && (i = this.drystoneID);
        let s = new Rs(t, e, i, (t.w + 1) * this.side);
        return this.prev.endNode.i >= t.i && this.prev.type == s.type && (this.prev.contiguousEnd = !0, s.contiguousStart = !0, s.distance = this.prev.distance),
        s
      }
      testGenLeft(e) {
        return e.i >= this.prev.endNode.i && this.testGen(e) && this.testLeft(e)
      }
      testGenRight(e) {
        return e.i >= this.prev.endNode.i && this.testGen(e) && this.testRight(e)
      }
      testGen(e) {
        return !e.bridge && (e.p.y <= kn.waterHeight || e.i == this.prev.endNode.i && e.p.y < kn.waterThreshold)
      }
      testLeft(e) {
        return !e.bridge && (e.g < 0.15 || e.p.y < kn.waterThreshold && e.h < - 0.5)
      }
      testRight(e) {
        return !e.bridge && (e.g > 0.15 || e.p.y < kn.waterThreshold && e.h < - 0.5)
      }
    }
    const Sn = {
      Barrier: 0,
      SeaWall: 1,
      Drystone: 2,
      Bridge: 3,
      Fence: 4
    },
    On = [
      ln,
      kn,
      Ys,
      Cn,
      bn
    ];
    var Ln = class {
      constructor(e) {
        this.activeSegments = [
        ],
        this.prevSegmentsLeft = [
        ],
        this.prevSegmentsRight = [
        ],
        this.stagedSegments = [
        ],
        this.count = 0,
        this.prevWasContiguous = !1,
        this.getHeightAt = e,
        this.container = new h.G,
        this.segments = [
        ],
        this.initPools()
      }
      destroy() {
        for (this.container.traverse((e=>{
          e.isMesh && e.geometry.dispose()
        })); this.container.children.length; ) this.container.remove(this.container.children[0])
      }
      initialise() {
        this.renderIndex = st.vehicleIndex,
        this.genNode = st.vehicleNode,
        this.genIndex = st.vehicleIndex,
        this.genNodeLeft = st.vehicleNode,
        this.genNodeRight = st.vehicleNode,
        this.bridgeWallGenerator = new Mn(st.vehicleNode, Sn.Bridge),
        this.seaWallGenerator = new zn(st.vehicleNode, Sn.SeaWall),
        this.seaWallGenerator.drystoneID = Sn.Drystone,
        this.drystoneGenerator = new Qs(st.vehicleNode, Sn.Drystone, this.getHeightAt),
        this.barrierGenerator = new on(st.vehicleNode, Sn.Barrier);
        do {
          this.updateGeneration()
        } while (this.genIndex < st.vehicleIndex + We);
        for (; this.segments.length > 0 && st.vehicleIndex + Ee >= this.segments[0].startNode.i; ) this.drawNextSegment();
        do {
          this.updateStaged()
        } while (this.stagedSegments.length)
      }
      initPools() {
        this.pools = [
        ];
        let e,
        t,
        i = Object.keys(Sn).length;
        for (e = 0; e < i; e++) t = new On[e](null, this.getHeightAt),
        this.container.add(t.mesh),
        this.pools.push([t])
      }
      setSkin(e) {
      }
      handleMidlineReset() {
        (st.tail.i < this.genNodeLeft.i || st.tail.i < this.genNodeRight.i) && (console.error('Wall controller must handle reset gracefully'), this.genNodeLeft = st.tail, this.genNodeRight = st.tail, this.renderIndex = st.tail.i)
      }
      updateGeneration() {
        this.genIndex < st.vehicleIndex + We && this.genIndex++,
        this.genNodeLeft.i < this.genIndex && (this.genNodeLeft = this.genNodeLeft.next, this.checkGenerateLeftSegment()),
        this.genNodeRight.i < this.genIndex && (this.genNodeRight = this.genNodeRight.next, this.checkGenerateRightSegment())
      }
      update() {
        for (this.updateGeneration(); this.segments.length > 0 && st.vehicleIndex + Ee >= this.segments[0].startNode.i; ) this.drawNextSegment();
        if (this.activeSegments.length) for (; st.vehicleIndex > this.activeSegments[0].endNode.i + 10 && (this.retireSegment(this.activeSegments.shift()), 0 != this.activeSegments.length); );
      }
      updateStaged() {
        this.stagedSegments.length && this.stagedSegments[0].drawNextNode() && (this.stagedSegments.shift(), ts.walls = this.activeSegments.length + ' (' + this.stagedSegments.length + ')')
      }
      checkGenerateLeftSegment() {
        this.addLeftSegment(this.bridgeWallGenerator.generateLeft(this.genNodeLeft)),
        this.addLeftSegment(this.seaWallGenerator.generateLeft(this.genNodeLeft)),
        this.addLeftSegment(this.drystoneGenerator.generateLeft(this.genNodeLeft)),
        this.addLeftSegment(this.barrierGenerator.generateLeft(this.genNodeLeft))
      }
      checkGenerateRightSegment() {
        this.addRightSegment(this.bridgeWallGenerator.generateRight(this.genNodeRight)),
        this.addRightSegment(this.seaWallGenerator.generateRight(this.genNodeRight)),
        this.addRightSegment(this.drystoneGenerator.generateRight(this.genNodeRight)),
        this.addRightSegment(this.barrierGenerator.generateRight(this.genNodeRight))
      }
      addRightSegment(e) {
        if (!e) return;
        let t = e.startNode;
        for (; t.i < e.endNode.i; ) (!t.rWallDist || t.rWallDist > e.distance) && (t.rWallDist = e.distance, t.wallSide = - 1),
        t = t.next;
        this.segments.push(e)
      }
      addLeftSegment(e) {
        if (!e) return;
        let t = e.startNode;
        for (; t.i < e.endNode.i; ) (!t.lWallDist || t.lWallDist > - e.distance) && (t.lWallDist = - e.distance, t.wallSide = 1),
        t = t.next;
        this.segments.push(e)
      }
      getSegmentObject(e) {
        let t;
        if (this.pools[e].length) t = this.pools[e].pop();
         else {
          t = new (0, On[e]) (null, this.getHeightAt),
          this.container.add(t.mesh)
        }
        return t
      }
      drawNextSegment() {
        let e = this.segments.shift(),
        t = this.getSegmentObject(e.type);
        t.drawSegment(e) || this.stagedSegments.push(t),
        e.obj = t,
        this.activeSegments.push(e),
        ts.walls = this.activeSegments.length + ' (' + this.stagedSegments.length + ')'
      }
      retireSegment(e) {
        e.obj.retire(),
        ts.walls = this.activeSegments.length + ' (' + this.stagedSegments.length + ')',
        this.pools[e.type].push(e.obj)
      }
    };
    const Rn = 1.5 * Math.PI;
    var Tn = class {
      constructor() {
        this.root = null,
        this.turnTail = null,
        this.gradTail = null,
        this.chevTail = null,
        this.placementNode = null,
        this.placementPos = new h.W,
        this.lastSignIndex = 0,
        this.lastSignPos = new h.W,
        this.lastSignRot = 0,
        this.dA = 0,
        this.lastTurnIndex = - 10,
        this.lastTurnType = null,
        this.lastTurnGeo = null,
        this.turnDir = 0,
        this.dH = 0,
        this.lastGradIndex = - 16,
        this.lastGradGeo = null,
        this.taildH = 0,
        this.curHillDir = 0,
        this.onHill = !1,
        this.steepness = 0,
        this.curHillSteepness = 0,
        this.cA = 0,
        this.lastChevIndex = 0,
        this.chevDir = 0
      }
      initialise() {
        for (this.root = st.vehicleNode.next.next.next, this.turnTail = this.root, this.dA = this.root.da, this.gradTail = this.root, this.chevTail = this.root, this.cA = Math.abs(this.root.da); this.turnTail.i < this.root.i + 5; ) this.turnTail = this.turnTail.next,
        this.dA += this.turnTail.da;
        for (; this.gradTail.i < this.root.i + 8; ) this.gradTail = this.gradTail.next;
        for (; this.chevTail.i < this.root.i + 4; ) this.chevTail = this.chevTail.next,
        this.cA += Math.abs(this.chevTail.da);
        for (; this.root.i < st.vehicleNode.i + 25; ) this.update()
      }
      destroy() {
        for (this.container.traverse((e=>{
          e.isMesh && e.geometry.dispose()
        })); this.container.children.length; ) this.container.remove(this.container.children[0])
      }
      handleMidlineReset() {
        console.warn('No midline reset handling for SignController')
      }
      update() {
        this.checkPlaceTurnSign(),
        this.checkPlaceGradientSign(),
        this.checkPlaceChevron(),
        this.root = this.root.next
      }
      checkPlaceTurnSign() {
        if (this.dA -= this.root.da, this.turnTail = this.turnTail.next, this.dA += this.turnTail.da, this.turnDir = this.dA < 0 ? 1 : - 1, Math.abs(this.dA) > 0.9) if (this.turnTail.i - this.lastTurnIndex > 10) {
          if (this.placementNode = this.root.prev.prev.prev, this.placementNode.bridge) return;
          let s;
          var e,
          t,
          i;
          if (this.placementNode.da < - 0.1) s = Rn - (null === (e = this.placementNode.prev) || void 0 === e || null === (t = e.prev) || void 0 === t || null === (i = t.prev) || void 0 === i ? void 0 : i.a) || this.placementNode.a,
          this.placementPos.set(this.placementNode.p.x + this.placementNode.n.x * (this.placementNode.w + 1), this.placementNode.p.y, this.placementNode.p.z + this.placementNode.n.z * (this.placementNode.w + 1));
           else s = Rn - this.placementNode.a,
          this.placementPos.set(this.placementNode.p.x - this.placementNode.n.x * (this.placementNode.w + 1), this.placementNode.p.y, this.placementNode.p.z - this.placementNode.n.z * (this.placementNode.w + 1));
          this.turnTail.i >= this.lastSignIndex && this.turnTail.i - this.lastSignIndex < 5 && this.combineWithLastGradSign(this.turnTail.i, s),
          this.lastTurnType = this.turnDir < 0 ? hs : os,
          this.lastTurnIndex = this.turnTail.i,
          this.lastTurnGeo = Xs.addObject(Us.WarningSign, this.placementPos, s, this.placementNode.i, this.lastTurnType),
          this.lastSignIndex = this.turnTail.i,
          this.lastSignPos.copy(this.placementPos),
          this.lastSignRot = s
        } else this.lastTurnGeo && (this.turnDir > 0 && this.lastTurnType == hs ? (this.lastTurnIndex = this.turnTail.i, this.lastTurnType = ls, this.lastTurnGeo.setVariant(ls)) : this.turnDir < 0 && this.lastTurnType == os && (this.lastTurnIndex = this.turnTail.i, this.lastTurnType = ds, this.lastTurnGeo.setVariant(ds)))
      }
      combineWithLastGradSign(e, t) {
        this.lastGradGeo && (this.lastGradGeo.worldPosition.copy(this.placementPos), this.lastGradGeo.worldPosition.y -= 0.65, this.lastGradGeo.updatePosition(), this.lastGradGeo.updateRetireIndex(e), this.lastGradGeo.rotation.y = t)
      }
      checkPlaceGradientSign() {
        var e;
        if (this.gradTail = this.gradTail.next, this.dH = this.gradTail.p.y - this.root.p.y, this.climbing = this.dH > 0, this.dH = Math.abs(this.dH), this.steepness = this.dH > 12 ? this.dH > 16 ? 2 : 1 : 0, this.taildH = this.gradTail.p.y - this.gradTail.prev.p.y, this.onHill) this.curHillDir > 0 && this.taildH < 0 || this.curHillDir < 0 && this.taildH > 0 ? this.onHill = !1 : this.steepness > this.curHillSteepness && (null === (e = this.lastGradGeo) || void 0 === e || e.setVariant(this.curHillDir > 0 ? ps : gs));
         else if (this.steepness > 0 && this.gradTail.i - this.lastGradIndex > 16) {
          let e,
          n;
          if (this.onHill = !0, this.curHillDir = this.climbing ? 1 : - 1, this.curHillSteepness = this.steepness, this.gradTail.i - 3 - this.lastSignIndex < 5) this.lastGradIndex = this.lastSignIndex,
          this.placementPos.copy(this.lastSignPos),
          this.placementPos.y -= 0.65,
          e = this.lastSignRot;
           else {
            if (this.lastGradIndex = this.gradTail.i, this.placementNode = this.root.prev.prev.prev, this.placementNode.bridge) return;
            var t,
            i,
            s;
            if (e = Rn - this.placementNode.a, this.placementNode.da < - 0.1) this.placementPos.set(this.placementNode.p.x + this.placementNode.n.x * (this.placementNode.w + 1), this.placementNode.p.y, this.placementNode.p.z + this.placementNode.n.z * (this.placementNode.w + 1)),
            e = Rn - (null === (t = this.placementNode.prev) || void 0 === t || null === (i = t.prev) || void 0 === i || null === (s = i.prev) || void 0 === s ? void 0 : s.a) || this.placementNode.a;
             else this.placementPos.set(this.placementNode.p.x - this.placementNode.n.x * (this.placementNode.w + 1), this.placementNode.p.y, this.placementNode.p.z - this.placementNode.n.z * (this.placementNode.w + 1));
            this.lastSignIndex = this.gradTail.i,
            this.lastSignPos.copy(this.placementPos),
            this.lastSignRot = e
          }
          n = this.climbing ? this.steepness > 1 ? ps : cs : this.steepness > 1 ? gs : us,
          this.lastGradGeo = Xs.addObject(Us.WarningSign, this.placementPos, e, this.placementNode.i, n)
        }
      }
      checkPlaceChevron() {
        if (this.chevTail = this.chevTail.next, this.chevTail.i - this.lastChevIndex < 8) return this.cA -= Math.abs(this.root.da),
        void (this.cA += Math.abs(this.chevTail.da));
        if (this.chevDir = this.chevTail.da < 0 ? 1 : - 1, Math.abs(this.chevTail.da) > 0.6 && this.cA < 0.6) {
          var e,
          t;
          this.placementNode = this.chevTail,
          Math.abs(this.placementNode.prev.da) > 0.25 && (this.placementNode = this.placementNode.prev),
          this.lastChevIndex = this.chevTail.i;
          let i = Rn - ((null === (e = this.placementNode.prev) || void 0 === e || null === (t = e.prev) || void 0 === t ? void 0 : t.a) || this.placementNode.a);
          this.placementPos.set(this.placementNode.p.x - this.placementNode.n.x * (this.placementNode.w + 0.7) * this.chevDir, this.placementNode.p.y - 0.6, this.placementNode.p.z - this.placementNode.n.z * (this.placementNode.w + 0.7) * this.chevDir),
          Xs.addObject(Us.WarningSign, this.placementPos, i, this.placementNode.i, this.chevDir < 0 ? ms : xs),
          this.placementNode.ps ? (this.placementPos.set(this.placementNode.ps[4].x - this.placementNode.ns[4].x * (this.placementNode.w + 0.7) * this.chevDir, this.placementNode.ps[4].y - 0.6, this.placementNode.ps[4].z - this.placementNode.ns[4].z * (this.placementNode.w + 0.7) * this.chevDir), Xs.addObject(Us.WarningSign, this.placementPos, i, this.placementNode.i, this.chevDir < 0 ? ms : xs), this.placementNode = this.placementNode.prev, this.placementPos.set(this.placementNode.ps[6].x - this.placementNode.ns[6].x * (this.placementNode.w + 0.7) * this.chevDir, this.placementNode.ps[6].y - 0.6, this.placementNode.ps[6].z - this.placementNode.ns[6].z * (this.placementNode.w + 0.7) * this.chevDir), Xs.addObject(Us.WarningSign, this.placementPos, i, this.placementNode.i, this.chevDir < 0 ? ms : xs)) : console.warn('Attempting to place chevron without fine points')
        }
        this.cA -= Math.abs(this.root.da),
        this.cA += Math.abs(this.chevTail.da)
      }
    };
    const Pn = 1.5 * Math.PI;
    class Gn extends h.G {
      constructor() {
        super (),
        this.shadowMat = new h.C({
          transparent: !0,
          opacity: 0.33,
          color: 0
        }),
        this.waterOffset = 0.03,
        this.p = new h.W,
        this.originPos = new h.W;
        this.geo = new h.g,
        this.geo.setIndex(this.getIndex(26)),
        this.geo.setAttribute('position', new h.o(new Float32Array(156), 3)),
        this.verts = this.geo.attributes.position.array,
        this.geo.attributes.position.setUsage(h.l);
        let e = new h.B(this.geo, this.shadowMat);
        this.add(e)
      }
      drawBridge(e) {
        this.originPos.copy(e.p);
        let t,
        i,
        s,
        n = 0,
        a = e;
        for (n = 0; n < 25 && (this.p.copy(a.p).sub(this.originPos), i = a.n, s = a.w + 0.6, t = 6 * n, this.verts[t] = this.p.x + i.x * s, this.verts[t + 1] = - this.originPos.y + this.waterOffset, this.verts[t + 2] = this.p.z + i.z * s, this.verts[t + 3] = this.p.x - i.x * s, this.verts[t + 4] = - this.originPos.y + this.waterOffset, this.verts[t + 5] = this.p.z - i.z * s, a.bridge); n++) a = a.next;
        this.geo.setDrawRange(0, 6 * (n - 1)),
        this.geo.attributes.position.needsUpdate = !0,
        this.geo.computeBoundingSphere()
      }
      getIndex(e) {
        let t,
        i,
        s,
        n,
        a = [
        ];
        for (let r = 0; r < e - 1; r++) t = 2 * r,
        i = t + 1,
        s = 2 * (r + 1),
        n = s + 1,
        a.push(t, s, i),
        a.push(i, s, n);
        return a
      }
    }
    class Bn extends h.G {
      constructor() {
        super (),
        this.waterOffset = 0.03,
        this.wallMaterial = new h.F({
          color: 12303291,
          side: h.k,
          flatShading: !0
        }),
        this.p = new h.W,
        this.originPos = new h.W;
        this.geo = new h.g,
        this.geo.setIndex(this.getIndex(25)),
        this.geo.setAttribute('position', new h.o(new Float32Array(312), 3)),
        this.verts = this.geo.attributes.position.array,
        this.geo.attributes.position.setUsage(h.l);
        let e = new h.B(this.geo, this.wallMaterial);
        this.add(e)
      }
      drawBridge(e) {
        this.originPos.copy(e.p);
        let t,
        i,
        s,
        n = 0,
        a = e;
        for (n = 0; n < 25 && (this.p.copy(a.p).sub(this.originPos), i = a.n, s = a.w + 0.6, t = 12 * n, this.verts[t] = this.p.x + i.x * s, this.verts[t + 1] = this.p.y + 1, this.verts[t + 2] = this.p.z + i.z * s, this.verts[t + 3] = this.p.x + i.x * s, this.verts[t + 4] = this.p.y - 1, this.verts[t + 5] = this.p.z + i.z * s, this.verts[t + 6] = this.p.x - i.x * s, this.verts[t + 7] = this.p.y - 1, this.verts[t + 8] = this.p.z - i.z * s, this.verts[t + 9] = this.p.x - i.x * s, this.verts[t + 10] = this.p.y + 1, this.verts[t + 11] = this.p.z - i.z * s, a.bridge); n++) a = a.next;
        this.geo.setDrawRange(0, 18 * (n - 1)),
        this.geo.attributes.position.needsUpdate = !0,
        this.geo.computeBoundingSphere()
      }
      getIndex(e) {
        let t,
        i,
        s,
        n,
        a,
        r,
        h,
        o,
        l = [
        ];
        for (let d = 0; d < e; d++) t = 4 * d,
        i = t + 1,
        s = t + 2,
        n = t + 3,
        a = 4 * (d + 1),
        r = a + 1,
        h = a + 2,
        o = a + 3,
        l.push(t, i, a, i, r, a, i, s, r, s, h, r, s, n, h, n, o, h);
        return l
      }
    }
    var Wn = class {
      constructor() {
        this.root = null,
        this.tail = null,
        this.shadowPool = [
        ],
        this.wallPool = [
        ]
      }
      initialise() {
        for (this.root = st.vehicleNode; this.root.i < st.vehicleNode.i + 100; ) this.update()
      }
      getShadowObject() {
        if (this.shadowPool.length && !this.shadowPool[0].visible) return this.shadowPool.shift();
        {
          let e = new Gn;
          return this.shadowPool.push(e),
          e
        }
      }
      getWallObject() {
        if (this.wallPool.length && !this.wallPool[0].visible) return this.wallPool.shift();
        {
          let e = new Bn;
          return this.wallPool.push(e),
          e
        }
      }
      update() {
        if (this.root.bridge) {
          let e = this.root.next;
          for (; e.bridge; ) e = e.next;
          let t = e.i - this.root.i,
          i = this.getWallObject();
          i.drawBridge(this.root),
          Xs.addCustom(i, this.root.p, 0, this.root.i, - (Ee - 10));
          let s = this.getShadowObject();
          s.drawBridge(this.root),
          Xs.addCustom(s, this.root.p, 0, e.i, 50);
          let n = (t + 1) % 2;
          for (; this.root.bridge; ) n % 2 == 0 && Xs.addObject(Us.BridgeSupport, this.root.p, Pn - this.root.a, this.root.i),
          this.root = this.root.next,
          n++
        }
        this.root = this.root.next
      }
    };
    const En = 0.04,
    Zn = new h.L({
      color: 16777215,
      fog: !1,
      size: 0.04,
      transparent: !0,
      opacity: 0
    });
    Zn.userData.headlightPos = {
      value: new h.W
    },
    Zn.userData.headlightDir = {
      value: new h.W
    },
    Zn.onBeforeCompile = e=>{
      e.uniforms.headlightPos = Zn.userData.headlightPos,
      e.uniforms.headlightDir = Zn.userData.headlightDir,
      e.vertexShader = e.vertexShader.replace('#include <clipping_planes_pars_vertex>', '#include <clipping_planes_pars_vertex>\n\n  uniform vec3 headlightPos;\n  uniform vec3 headlightDir;\n\n  varying float vBrightness;\n'),
      e.vertexShader = e.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n\n\n  vec4 wPos = modelMatrix * vec4(position, 1.0);\n\n  vec3 carDir = headlightPos - wPos.xyz;\n\n  // Distance to catseyes,\n  float carDist = length(carDir);\n\n  if(carDist < 150.0) {\n    // View distance of 150m\n    float distBrightnessFactor = 1.0 - (carDist - 50.0) / 100.0;\n\n    // Check if car is aiming at the light close enough\n    float angleBrightnessFactor = max(0.0, dot(normal, headlightDir));\n\n    // Check\n    float coneBrightnessFactor = dot(headlightDir, normalize(carDir));\n    coneBrightnessFactor = (coneBrightnessFactor - 0.8) / 0.2;\n\n    // NOTE: Could set the road colour here to save on transparency rendering\n    vBrightness = distBrightnessFactor * angleBrightnessFactor * coneBrightnessFactor;\n  } else {\n    vBrightness = 0.0;\n  }\n\n'),
      e.fragmentShader = e.fragmentShader.replace('#include <clipping_planes_pars_fragment>', '#include <clipping_planes_pars_fragment>\n\n\n  varying float vBrightness;\n\n'),
      e.fragmentShader = e.fragmentShader.replace('#include <alphatest_fragment>', '#include <alphatest_fragment>\n\n\n  diffuseColor.a = vBrightness;\n\n')
    };
    const Fn = {
    };
    var Hn = class {
      constructor() {
        this.container = new h.G,
        this.instances = [
        ],
        this.eyeOffset = 0,
        this.genNode = null,
        this.seenIndex = 0
      }
      initInstances() {
        for (let e = 0; e < 2; e++) this.instances.push(this.getInstance())
      }
      getInstance() {
        let e = new h.g;
        e.setAttribute('position', new h.o(new Float32Array(3 * this.pointsCount), 3)),
        e.attributes.position.setUsage(h.l),
        e.setAttribute('normal', new h.o(new Float32Array(3 * this.pointsCount), 3)),
        e.attributes.normal.setUsage(h.l);
        let t = new h.K(e, Zn);
        return t.visible = !0,
        t.frustumCulled = !1,
        t.matrixAutoUpdate = !1,
        this.container.add(t),
        t
      }
      initialise() {
        for (this.eyeSpacing = 6.25, this.pointsCount = 2 * Math.ceil(400 / this.eyeSpacing), this.eyeOffset = 0.25 * this.eyeSpacing, this.genNode = st.head, this.seenIndex = st.head.i, this.initInstances(), this.prepNextInstance(); this.seenIndex < st.vehicleIndex + 56; ) this.update()
      }
      update() {
        this.seenIndex < st.vehicleIndex + 56 && (this.drawNextNode(), this.genNode = this.genNode.next, this.seenIndex = this.genNode.i, this.curInstance.userData.retireIndex <= st.vehicleIndex && (this.curInstance.visible = !1)),
        Zn.userData.headlightDir.value.copy(T.fwd).negate(),
        Zn.userData.headlightPos.value.copy(T.frontAxlePosition),
        Zn.uniformsNeedUpdate = !0
      }
      drawNextNode() {
        this.eyeOffset >= 0 && this.eyeOffset < 10 && (Fn.placementDist = this.eyeOffset, Fn.psA = Math.max(0, Math.floor(Fn.placementDist)), Fn.pa = this.genNode.ps[Fn.psA], Fn.psA < 9 ? Fn.pb = this.genNode.ps[Fn.psA + 1] : Fn.pb = this.genNode.next.ps[0], Fn.pLerp = Fn.placementDist - Fn.psA, Fn.p = {
          x: Fn.pa.x * (1 - Fn.pLerp) + Fn.pb.x * Fn.pLerp,
          y: Fn.pa.y * (1 - Fn.pLerp) + Fn.pb.y * Fn.pLerp,
          z: Fn.pa.z * (1 - Fn.pLerp) + Fn.pb.z * Fn.pLerp
        }, Fn.n = this.genNode.ns[Fn.psA], Fn.nn = {
          x: Fn.n.x,
          z: Fn.n.z
        }, this.curNormArr[this.curIndex] = - Fn.n.z, this.curPosArr[this.curIndex++] = Fn.p.x + Fn.nn.x * En - this.curInstanceOffset.x, this.curNormArr[this.curIndex] = 0, this.curPosArr[this.curIndex++] = Fn.p.y + 0.03 - this.curInstanceOffset.y, this.curNormArr[this.curIndex] = Fn.n.x, this.curPosArr[this.curIndex++] = Fn.p.z + Fn.nn.z * En - this.curInstanceOffset.z, this.curNormArr[this.curIndex] = - Fn.n.z, this.curPosArr[this.curIndex++] = Fn.p.x - Fn.nn.x * En - this.curInstanceOffset.x, this.curNormArr[this.curIndex] = 0, this.curPosArr[this.curIndex++] = Fn.p.y + 0.03 - this.curInstanceOffset.y, this.curNormArr[this.curIndex] = Fn.n.x, this.curPosArr[this.curIndex++] = Fn.p.z - Fn.nn.z * En - this.curInstanceOffset.z, this.curIndex > this.maxIndex - 6 && this.cycleInstances(), this.eyeOffset = Fn.placementDist),
        this.eyeOffset = this.eyeOffset + this.eyeSpacing,
        this.eyeOffset < 10 ? this.drawNextNode() : this.eyeOffset -= 10
      }
      cycleInstances() {
        this.curInstance.geometry.attributes.position.needsUpdate = !0,
        this.curInstance.geometry.attributes.normal.needsUpdate = !0,
        this.curInstance.updateMatrix(),
        this.curInstance.visible = !0,
        this.curInstance.userData.retireIndex = this.genNode.i + 3,
        this.instances.push(this.instances.shift()),
        this.prepNextInstance()
      }
      prepNextInstance() {
        this.curInstance = this.instances[0],
        this.curPosArr = this.curInstance.geometry.attributes.position.array,
        this.curNormArr = this.curInstance.geometry.attributes.normal.array,
        this.curInstanceOffset = {
          x: 0,
          y: 0,
          z: 0
        },
        this.genNode && (this.curInstanceOffset = this.genNode.p),
        this.curInstance.position.copy(this.curInstanceOffset),
        this.curIndex = 0,
        this.maxIndex = 3 * this.pointsCount
      }
    };
    const Qn = {
    },
    Yn = 2 * Math.PI;
    var Vn = class extends ut {
      constructor(...e) {
        super (...e),
        this.gradients = [
        ],
        this.heightOffset = 150,
        this.heightInitial = 1,
        this.resolution = 2,
        this.depth = 3,
        this.upscale = 5,
        this.cache = {
        },
        this.cacheAccess = {
        },
        this.cacheCount = 0,
        this.maxCached = 12,
        this.cellScaleMetres = 1500,
        this.cellScaleWorld = 1500,
        this.squared = !1,
        this.compound = !1,
        this.useQuick = !1,
        this.resolutions = [
        ],
        this.smooth = !1;
        let t = e[1] || {
        };
        if (this.seed = e[0] || 'foliage', this.heightScale = t.heightScale || 1, this.heightInitial = 'heightInitial' in t ? t.heightInitial : 1, this.resolution = t.resolution || 5, this.depth = t.depth || 3, this.upscale = t.upscale || 3, this.heightOffset = t.heightOffset || 0, this.upscaleFactor = t.upscaleFactor || 2, this.squared = t.squared || !1, this.squareLayers = t.squareLayers || this.depth, this.compound = t.compound || !1, this.threshold = t.threshold || 0.7, this.threshold2 = t.threshold2 || 0.8, this.threshold3 = t.threshold3 || 0.9, this.smooth = !!t.smooth, this.gap1 = this.threshold2 - this.threshold, this.gap2 = this.threshold3 - this.threshold2, this.gap3 = 1 - this.threshold3, null != t.resolutions) this.resolutions = t.resolutions,
        this.resolution = this.resolutions[0],
        this.depth = this.resolutions.length;
         else {
          this.resolutions = [
            this.resolution
          ];
          for (let e = 0; e < this.depth - 1; e++) this.resolutions.push(this.calculateNextDepthResolution(this.resolutions[e], e))
        }
        this.cellScaleWorld = this.cellScaleMetres
      }
      generateCell(e, t) {
        let i,
        s,
        n,
        a,
        r = new window.alea(this.seed + e + t),
        h = this.resolution,
        o = [
        ],
        l = [
        ];
        for (i = 0; i < this.depth; i++) {
          for (l = [
          ], s = 0; s < h; s++) for (l.push([]), n = 0; n < h; n++) a = r() * Yn,
          l[s].push({
            x: Math.cos(a),
            y: Math.sin(a)
          });
          o.push(l),
          h = this.getNextDepthResolution(h, i)
        }
        return o
      }
      calculateNextDepthResolution(e, t) {
        return Math.round(e * this.upscaleFactor)
      }
      getNextDepthResolution(e, t) {
        return this.resolutions[t + 1]
      }
      dotGridGradient(e, t, i, s, n) {
        return this.grad = e[t][i],
        (s - t) * this.grad.x + (n - i) * this.grad.y
      }
      sharpLerp(e, t, i) {
        return (t - e) * i + e
      }
      smoothLerp(e, t, i) {
        return (t - e) * (3 - 2 * i) * i * i + e
      }
      smootherLerp(e, t, i) {
        return (i * (6 * i - 15) + 10) * i * i * i * (t - e) + e
      }
      getXZ(e, t, i) {
        for (Qn.layer of(Qn.d = 0, Qn.h = 0, Qn.sq = this.resolution, Qn.sqb = Qn.sq - 1, Qn.wx = e / this.cellScaleWorld, Qn.wz = t / this.cellScaleWorld, Qn.ox = Math.floor(Qn.wx), Qn.oz = Math.floor(Qn.wz), Qn.px = Qn.wx - Qn.ox, Qn.pz = Qn.wz - Qn.oz, Qn.cell = this.getCell(Qn.ox, Qn.oz), i = i || this.depth, Qn.depth = 0, Qn.h = this.heightInitial, Qn.heightFactor = 1, Qn.ch = 0, Qn.cell)) {
          if (Qn.depth == i) break;
          Qn.sx = Qn.px * Qn.sq,
          Qn.sz = Qn.pz * Qn.sq,
          Qn.ix = Math.floor(Qn.sx),
          Qn.ix1 = Qn.ix + 1,
          Qn.iz = Math.floor(Qn.sz),
          Qn.iz1 = Qn.iz + 1,
          Qn.qx = Qn.sx - Qn.ix,
          Qn.qz = Qn.sz - Qn.iz,
          Qn.n0 = this.dotGridGradient(Qn.layer, Qn.ix, Qn.iz, Qn.sx, Qn.sz),
          Qn.ix1 < Qn.sq ? Qn.n1 = this.dotGridGradient(Qn.layer, Qn.ix1, Qn.iz, Qn.sx, Qn.sz) : Qn.n1 = this.dotGridGradient(this.getCell(Qn.ox + 1, Qn.oz) [Qn.depth], 0, Qn.iz, Qn.sx - Qn.sq, Qn.sz),
          Qn.int0 = this.sharpLerp(Qn.n0, Qn.n1, Qn.qx),
          Qn.iz1 < Qn.sq ? (Qn.n0 = this.dotGridGradient(Qn.layer, Qn.ix, Qn.iz1, Qn.sx, Qn.sz), Qn.ix1 < Qn.sq ? Qn.n1 = this.dotGridGradient(Qn.layer, Qn.ix1, Qn.iz1, Qn.sx, Qn.sz) : Qn.n1 = this.dotGridGradient(this.getCell(Qn.ox + 1, Qn.oz) [Qn.depth], 0, Qn.iz1, Qn.sx - Qn.sq, Qn.sz)) : (Qn.n0 = this.dotGridGradient(this.getCell(Qn.ox, Qn.oz + 1) [Qn.depth], Qn.ix, 0, Qn.sx, Qn.sz - Qn.sq), Qn.ix1 < Qn.sq ? Qn.n1 = this.dotGridGradient(this.getCell(Qn.ox, Qn.oz + 1) [Qn.depth], Qn.ix1, 0, Qn.sx, Qn.sz - Qn.sq) : Qn.n1 = this.dotGridGradient(this.getCell(Qn.ox + 1, Qn.oz + 1) [Qn.depth], 0, 0, Qn.sx - Qn.sq, Qn.sz - Qn.sq)),
          Qn.int1 = this.sharpLerp(Qn.n0, Qn.n1, Qn.qx),
          Qn.heightFactor = 1 / (Qn.depth + 1),
          Qn.h += this.sharpLerp(Qn.int0, Qn.int1, Qn.qz) * Qn.heightFactor,
          Qn.sq = this.getNextDepthResolution(Qn.sq, Qn.depth),
          Qn.depth++
        }
        return this.squared && (Qn.h < 0 ? Qn.h *= - Qn.h * (1 + Qn.h) * 4 : Qn.h *= Qn.h * (1 - Qn.h) * 4),
        Qn.h = Qn.h * this.heightScale + this.heightOffset,
        this.smooth ? Qn.h > this.threshold ? Qn.h > this.threshold3 ? 2 + (Qn.h - this.threshold3) / this.gap3 : Qn.h > this.threshold2 ? 1 + (Qn.h - this.threshold2) / this.gap2 : (Qn.h - this.threshold) / this.gap1 : (Qn.h, 0) : Qn.h > this.threshold ? Qn.h > this.threshold3 ? 3 : Qn.h > this.threshold2 ? 2 : 1 : 0
      }
      getXZLayer(e, t, i) {
        for (Qn.layer of(Qn.d = 0, Qn.h = 0, Qn.sq = this.resolution, Qn.sqb = Qn.sq - 1, Qn.wx = e / this.cellScaleWorld, Qn.wz = t / this.cellScaleWorld, Qn.ox = Math.floor(Qn.wx), Qn.oz = Math.floor(Qn.wz), Qn.px = Qn.wx - Qn.ox, Qn.pz = Qn.wz - Qn.oz, Qn.cell = this.getCell(Qn.ox, Qn.oz), Qn.depth = 0, Qn.h = this.heightInitial, Qn.heightFactor = 1, Qn.ch = 0, Qn.cell)) if (Qn.depth < i) Qn.sq = this.getNextDepthResolution(Qn.sq, Qn.depth),
        Qn.depth++;
         else {
          if (Qn.depth == this.depth || Qn.depth > i) break;
          Qn.sx = Qn.px * Qn.sq,
          Qn.sz = Qn.pz * Qn.sq,
          Qn.ix = Math.floor(Qn.sx),
          Qn.ix1 = Qn.ix + 1,
          Qn.iz = Math.floor(Qn.sz),
          Qn.iz1 = Qn.iz + 1,
          Qn.qx = Qn.sx - Qn.ix,
          Qn.qz = Qn.sz - Qn.iz,
          Qn.n0 = this.dotGridGradient(Qn.layer, Qn.ix, Qn.iz, Qn.sx, Qn.sz),
          Qn.ix1 < Qn.sq ? Qn.n1 = this.dotGridGradient(Qn.layer, Qn.ix1, Qn.iz, Qn.sx, Qn.sz) : Qn.n1 = this.dotGridGradient(this.getCell(Qn.ox + 1, Qn.oz) [Qn.depth], 0, Qn.iz, Qn.sx - Qn.sq, Qn.sz),
          Qn.int0 = this.smootherLerp(Qn.n0, Qn.n1, Qn.qx),
          Qn.iz1 < Qn.sq ? (Qn.n0 = this.dotGridGradient(Qn.layer, Qn.ix, Qn.iz1, Qn.sx, Qn.sz), Qn.ix1 < Qn.sq ? Qn.n1 = this.dotGridGradient(Qn.layer, Qn.ix1, Qn.iz1, Qn.sx, Qn.sz) : Qn.n1 = this.dotGridGradient(this.getCell(Qn.ox + 1, Qn.oz) [Qn.depth], 0, Qn.iz1, Qn.sx - Qn.sq, Qn.sz)) : (Qn.n0 = this.dotGridGradient(this.getCell(Qn.ox, Qn.oz + 1) [Qn.depth], Qn.ix, 0, Qn.sx, Qn.sz - Qn.sq), Qn.ix1 < Qn.sq ? Qn.n1 = this.dotGridGradient(this.getCell(Qn.ox, Qn.oz + 1) [Qn.depth], Qn.ix1, 0, Qn.sx, Qn.sz - Qn.sq) : Qn.n1 = this.dotGridGradient(this.getCell(Qn.ox + 1, Qn.oz + 1) [Qn.depth], 0, 0, Qn.sx - Qn.sq, Qn.sz - Qn.sq)),
          Qn.int1 = this.smootherLerp(Qn.n0, Qn.n1, Qn.qx),
          Qn.heightFactor = this.resolution / Qn.sq,
          this.compound && (Qn.heightFactor *= Qn.h),
          Qn.h += this.smootherLerp(Qn.int0, Qn.int1, Qn.qz) * Qn.heightFactor,
          Qn.sq = this.getNextDepthResolution(Qn.sq, Qn.depth),
          Qn.depth++
        }
        return this.squared && (Qn.h *= Qn.h),
        Qn.h += Qn.ch,
        Qn.h * this.heightScale + this.heightOffset
      }
      smootherLerpW(e) {
        return (e * (6 * e - 15) + 10) * e * e * e * - 1 + 1
      }
      sharpLerpW(e) {
        return 1 - e
      }
      smoothLerpW(e) {
        return - 1 * (3 - 2 * e) * e * e + 1
      }
    };
    const Un = {
      layer: 0,
      d: 0,
      h: 0,
      sq: 0,
      sqb: 0,
      wx: 0,
      wz: 0,
      ox: 0,
      oz: 0,
      px: 0,
      pz: 0,
      cell: null,
      ix: 0,
      iz: 0,
      depth: 0
    },
    Xn = {
      ...Un
    };
    var Jn = class extends ut {
      constructor(...e) {
        super (...e),
        this.resolution = 5,
        this.depth = 3,
        this.upscale = 2,
        this.heightScale = 1,
        this.heightOffset = 0,
        this.upscaleType = 0,
        this.controls = [
        ],
        this.cache = {
        },
        this.cacheAccess = {
        },
        this.cacheCount = 0,
        this.maxCached = 9,
        this.qCache = {
        },
        this.smoothingFunc = () =>{
        },
        this.useQuick = !1;
        let t = e[1] || {
        };
        switch (null !== t.heightScale && (this.heightScale = t.heightScale), null !== t.resolution && (this.resolution = t.resolution), this.seed = e[0] || gt, this.depth = t.depth || 3, this.radiusType = null == t.radiusType ? 1 : t.radiusType, this.upscale = t.upscale || 2, this.upscaleType = null == t.upscaleType ? 0 : t.upscaleType, this.upscaleFactor = null == t.upscaleFactor ? 2 : t.upscaleFactor, this.threshold = t.threshold, this.threshold2 = t.threshold2, this.threshold3 = t.threshold3, this.squared = t.squared || !1, this.compound = t.compound || !1, this.depthHeightFactor = t.depthHeightFactor || 1, this.smoothLerpIndex = null == t.smoothLerp ? 2 : t.smoothLerp, this.smoothLerpIndex) {
          case 2:
            this.smoothingFunc = this.smootherLerp;
            break;
          case 1:
            this.smoothingFunc = this.smoothLerp;
            break;
          case 0:
          default:
            this.smoothingFunc = this.sharpLerp
        }
        if (null != t.resolutions) this.resolutions = t.resolutions,
        this.resolution = this.resolutions[0],
        this.depth = this.resolutions.length;
         else {
          this.resolutions = [
            this.resolution
          ];
          for (let e = 0; e < this.depth - 1; e++) this.resolutions.push(this.calculateNextDepthResolution(this.resolutions[e], e))
        }
        this.controls = [
        ],
        this.cellScaleMetres = 1000,
        this.cellScaleWorld = 3000,
        this.heightOffset = t.heightOffset
      }
      cosLerp(e) {
        return Math.cos(3.1415 * e) + 1
      }
      sharpLerp(e) {
        return 1 - e
      }
      smoothLerp(e) {
        return - 1 * (3 - 2 * e) * e * e + 1
      }
      smootherLerp(e) {
        return (e * (6 * e - 15) + 10) * e * e * e * - 1 + 1
      }
      sharpLerpAB(e, t, i) {
        return (t - e) * i + e
      }
      smootherLerpAB(e, t, i) {
        return (i * (6 * i - 15) + 10) * i * i * i * (t - e) + e
      }
      lerpHeight(e, t, i, s) {
        return (e = (s.x - t) * (s.x - t) + (s.z - i) * (s.z - i)) < s.r2 ? this.sharpLerp(e / s.r2) * s.y : 0
      }
      clearCache() {
        if (this.cacheCount <= this.maxCached) return;
        let e,
        t;
        for (e in this.cache) {
          for (t in this.cache[e]) if (this.cacheAccess[e][t]) this.cacheAccess[e][t] = !1;
           else if (delete this.cache[e][t], delete this.cacheAccess[e][t], this.cacheCount--, this.cacheCount <= this.maxCached) break;
          if (this.cacheCount <= this.maxCached) break
        }
      }
      cacheCell(e, t) {
        let i;
        this.cacheCount++,
        this.clearCache();
        let s = [
        ],
        n = 1,
        a = new window.alea(this.seed + e + t),
        r = this.resolution,
        h = [
        ],
        o = this.depthHeightFactor;
        for (i = 0; i < this.depth; i++) {
          let e,
          t,
          l,
          d,
          c;
          for (r = this.resolutions[i], n = this.resolution / r * o, o *= this.depthHeightFactor, h = [
          ], c = 1 / r, t = 0; t < r; t++) {
            for (e = [
            ], l = 0; l < r; l++) d = 2 * a() - 1,
            this.squared && (d *= d < 0 ? - d * (1 + d) * 4 : d * (1 - d) * 4),
            d *= n,
            e.push({
              x: (t + 0.5) / r,
              y: d * this.heightScale,
              z: (l + 0.5) / r,
              r: c,
              r2: c * c
            });
            h.push(e)
          }
          s.push(h)
        }
        e in this.cache || (this.cache[e] = {
        }),
        this.cache[e][t] = s
      }
      calculateNextDepthResolution(e, t) {
        switch (this.upscaleType) {
          case 5:
            let i,
            s = this.resolution,
            n = this.resolution;
            for (let e = 0; e < t + 1; e++) i = s + n,
            n = s,
            s = i;
            return i;
          case 4:
            return e * this.upscaleFactor + (t + 1);
          case 3:
            return Math.round(e * this.upscaleFactor);
          case 2:
            return Math.pow(this.resolution, t + 2);
          case 1:
            return this.resolution + Math.pow(this.upscale, t + 1);
          case 0:
          default:
            return e + this.upscale * (t + 1)
        }
      }
      getNextDepthResolution(e, t) {
        return this.resolutions[t + 1]
      }
      getResolution(e, t) {
        return this.resolutions[t]
      }
      getNode(e, t, i, s) {
      }
      getCell(e, t) {
        return e in this.cacheAccess || (this.cacheAccess[e] = {
        }),
        this.cacheAccess[e][t] = !0,
        this.cache[e] && this.cache[e][t] || this.cacheCell(e, t),
        e in this.cacheAccess || (this.cacheAccess[e] = {
        }),
        this.cacheAccess[e][t] = !0,
        this.cache[e][t]
      }
      getQuickCell(e, t) {
        return this.cache[e] && this.cache[e][t] || this.cacheCell(e, t),
        e in this.cacheAccess || (this.cacheAccess[e] = {
        }),
        this.cacheAccess[e][t] = !0,
        this.qCache[e] && this.qCache[e][t] || this.quickCache(e, t, this.cache[e][t][this.depth - 1]),
        this.qCache[e][t]
      }
      quickCache(e, t, i) {
        if (e in this.qCache) {
          if (t in this.qCache[e]) return
        } else this.qCache[e] = {
        };
        let s = [
        ];
        this.useQuick = !1;
        for (let n of i) {
          let i = [
          ];
          for (let s of n) i.push({
            x: s.x,
            y: this.getXZ((e + s.x) * this.cellScaleWorld, (t + s.z) * this.cellScaleWorld),
            z: s.z,
            r: s.r,
            r2: s.r2
          });
          s.push(i)
        }
        this.useQuick = !0,
        this.qCache[e][t] = s
      }
      getXZQuick(e, t) {
        let i,
        s,
        n,
        a,
        r,
        h;
        return Xn.d = 0,
        Xn.h = 0,
        Xn.wx = e / this.cellScaleWorld,
        Xn.wz = t / this.cellScaleWorld,
        Xn.ox = Math.floor(Xn.wx),
        Xn.oz = Math.floor(Xn.wz),
        Xn.px = Xn.wx - Xn.ox,
        Xn.pz = Xn.wz - Xn.oz,
        Xn.layer = this.getQuickCell(Xn.ox, Xn.oz),
        Xn.sq = this.getResolution(this.resolution, this.depth - 1),
        Xn.sqb = Xn.sq - 1,
        Xn.ssq = Xn.sq,
        Xn.ssqb = Xn.sqb,
        i = Xn.px * Xn.sq - 0.5,
        Xn.ix = Math.floor(Xn.px * Xn.sq - 0.5),
        s = Xn.pz * Xn.sq - 0.5,
        Xn.iz = Math.floor(Xn.pz * Xn.sq - 0.5),
        i -= Xn.ix,
        s -= Xn.iz,
        Xn.ix >= 0 ? (n = Xn.iz >= 0 ? Xn.layer[Xn.ix][Xn.iz].y : this.getQuickCell(Xn.ox, Xn.oz - 1) [Xn.ix][Xn.sqb].y, a = Xn.iz < Xn.ssqb ? Xn.layer[Xn.ix][Xn.iz + 1].y : this.getQuickCell(Xn.ox, Xn.oz + 1) [Xn.ix][0].y) : (n = Xn.iz >= 0 ? this.getQuickCell(Xn.ox - 1, Xn.oz) [Xn.sqb][Xn.iz].y : this.getQuickCell(Xn.ox - 1, Xn.oz - 1) [Xn.sqb][Xn.sqb].y, a = Xn.iz < Xn.ssqb ? this.getQuickCell(Xn.ox - 1, Xn.oz) [Xn.sqb][Xn.iz + 1].y : this.getQuickCell(Xn.ox - 1, Xn.oz + 1) [Xn.sqb][0].y),
        Xn.ix < Xn.ssqb ? (r = Xn.iz >= 0 ? Xn.layer[Xn.ix + 1][Xn.iz].y : this.getQuickCell(Xn.ox, Xn.oz - 1) [Xn.ix + 1][Xn.sqb].y, h = Xn.iz < Xn.ssqb ? Xn.layer[Xn.ix + 1][Xn.iz + 1].y : this.getQuickCell(Xn.ox, Xn.oz + 1) [Xn.ix + 1][0].y) : (r = Xn.iz >= 0 ? this.getQuickCell(Xn.ox + 1, Xn.oz) [0][Xn.iz].y : this.getQuickCell(Xn.ox + 1, Xn.oz - 1) [0][Xn.sqb].y, h = Xn.iz < Xn.ssqb ? this.getQuickCell(Xn.ox + 1, Xn.oz) [0][Xn.iz + 1].y : this.getQuickCell(Xn.ox + 1, Xn.oz + 1) [0][0].y),
        n = this.sharpLerpAB(n, a, s),
        r = this.sharpLerpAB(r, h, s),
        this.sharpLerpAB(n, r, i)
      }
      getXZLayer(e, t, i) {
        Un.layer = 0,
        Un.d = 0,
        Un.h = 0,
        Un.sq = this.resolution,
        Un.sqb = Un.sq - 1,
        Un.wx = e / this.cellScaleWorld,
        Un.wz = t / this.cellScaleWorld,
        Un.ox = Math.floor(Un.wx),
        Un.oz = Math.floor(Un.wz),
        Un.px = Un.wx - Un.ox,
        Un.pz = Un.wz - Un.oz,
        Un.cell = this.getCell(Un.ox, Un.oz);
        let s = this.depth;
        Un.depth = 0;
        let n = 0;
        for (Un.layer of Un.cell) if (n++ === i) {
          if (Un.depth == s) break;
          Un.ix = Math.floor(Un.px * Un.sq - 0.5),
          Un.iz = Math.floor(Un.pz * Un.sq - 0.5),
          Un.th = 0,
          Un.ix >= 0 ? (Un.iz >= 0 ? Un.th += this.lerpHeight(Un.d, Un.px, Un.pz, Un.layer[Un.ix][Un.iz]) : Un.th += this.lerpHeight(Un.d, Un.px, Un.pz + 1, this.getCell(Un.ox, Un.oz - 1) [Un.depth][Un.ix][Un.sqb]), Un.iz < Un.sqb ? Un.th += this.lerpHeight(Un.d, Un.px, Un.pz, Un.layer[Un.ix][Un.iz + 1]) : Un.th += this.lerpHeight(Un.d, Un.px, Un.pz - 1, this.getCell(Un.ox, Un.oz + 1) [Un.depth][Un.ix][0])) : (Un.iz >= 0 ? Un.th += this.lerpHeight(Un.d, Un.px + 1, Un.pz, this.getCell(Un.ox - 1, Un.oz) [Un.depth][Un.sqb][Un.iz]) : Un.th += this.lerpHeight(Un.d, Un.px + 1, Un.pz + 1, this.getCell(Un.ox - 1, Un.oz - 1) [Un.depth][Un.sqb][Un.sqb]), Un.iz < Un.sqb ? Un.th += this.lerpHeight(Un.d, Un.px + 1, Un.pz, this.getCell(Un.ox - 1, Un.oz) [Un.depth][Un.sqb][Un.iz + 1]) : Un.th += this.lerpHeight(Un.d, Un.px + 1, Un.pz - 1, this.getCell(Un.ox - 1, Un.oz + 1) [Un.depth][Un.sqb][0])),
          Un.ix < Un.sqb ? (Un.iz >= 0 ? Un.th += this.lerpHeight(Un.d, Un.px, Un.pz, Un.layer[Un.ix + 1][Un.iz]) : Un.th += this.lerpHeight(Un.d, Un.px, Un.pz + 1, this.getCell(Un.ox, Un.oz - 1) [Un.depth][Un.ix + 1][Un.sqb]), Un.iz < Un.sqb ? Un.th += this.lerpHeight(Un.d, Un.px, Un.pz, Un.layer[Un.ix + 1][Un.iz + 1]) : Un.th += this.lerpHeight(Un.d, Un.px, Un.pz - 1, this.getCell(Un.ox, Un.oz + 1) [Un.depth][Un.ix + 1][0])) : (Un.iz >= 0 ? Un.th += this.lerpHeight(Un.d, Un.px - 1, Un.pz, this.getCell(Un.ox + 1, Un.oz) [Un.depth][0][Un.iz]) : Un.th += this.lerpHeight(Un.d, Un.px - 1, Un.pz + 1, this.getCell(Un.ox + 1, Un.oz - 1) [Un.depth][0][Un.sqb]), Un.iz < Un.sqb ? Un.th += this.lerpHeight(Un.d, Un.px - 1, Un.pz, this.getCell(Un.ox + 1, Un.oz) [Un.depth][0][Un.iz + 1]) : Un.th += this.lerpHeight(Un.d, Un.px - 1, Un.pz - 1, this.getCell(Un.ox + 1, Un.oz + 1) [Un.depth][0][0])),
          Un.h += Un.th,
          Un.depth++,
          Un.sq = this.resolutions[Un.depth],
          Un.sqb = Un.sq - 1
        } else Un.depth++,
        Un.sq = this.resolutions[Un.depth],
        Un.sqb = Un.sq - 1;
        return Un.h + this.heightOffset
      }
      getXZ(e, t, i) {
        for (Un.layer of(Un.d = 0, Un.h = 0, Un.heightFactor = 1, Un.sq = this.resolution, Un.sqb = Un.sq - 1, Un.wx = e / this.cellScaleWorld, Un.wz = t / this.cellScaleWorld, Un.ox = Math.floor(Un.wx), Un.oz = Math.floor(Un.wz), Un.px = Un.wx - Un.ox, Un.pz = Un.wz - Un.oz, Un.cell = this.getCell(Un.ox, Un.oz), i = i || this.depth, Un.depth = 0, Un.cell)) {
          if (Un.depth == i) break;
          Un.ix = Math.floor(Un.px * Un.sq - 0.5),
          Un.iz = Math.floor(Un.pz * Un.sq - 0.5),
          Un.th = 0,
          Un.ix >= 0 ? (Un.iz >= 0 ? Un.th += this.lerpHeight(Un.d, Un.px, Un.pz, Un.layer[Un.ix][Un.iz]) : Un.th += this.lerpHeight(Un.d, Un.px, Un.pz + 1, this.getCell(Un.ox, Un.oz - 1) [Un.depth][Un.ix][Un.sqb]), Un.iz < Un.sqb ? Un.th += this.lerpHeight(Un.d, Un.px, Un.pz, Un.layer[Un.ix][Un.iz + 1]) : Un.th += this.lerpHeight(Un.d, Un.px, Un.pz - 1, this.getCell(Un.ox, Un.oz + 1) [Un.depth][Un.ix][0])) : (Un.iz >= 0 ? Un.th += this.lerpHeight(Un.d, Un.px + 1, Un.pz, this.getCell(Un.ox - 1, Un.oz) [Un.depth][Un.sqb][Un.iz]) : Un.th += this.lerpHeight(Un.d, Un.px + 1, Un.pz + 1, this.getCell(Un.ox - 1, Un.oz - 1) [Un.depth][Un.sqb][Un.sqb]), Un.iz < Un.sqb ? Un.th += this.lerpHeight(Un.d, Un.px + 1, Un.pz, this.getCell(Un.ox - 1, Un.oz) [Un.depth][Un.sqb][Un.iz + 1]) : Un.th += this.lerpHeight(Un.d, Un.px + 1, Un.pz - 1, this.getCell(Un.ox - 1, Un.oz + 1) [Un.depth][Un.sqb][0])),
          Un.ix < Un.sqb ? (Un.iz >= 0 ? Un.th += this.lerpHeight(Un.d, Un.px, Un.pz, Un.layer[Un.ix + 1][Un.iz]) : Un.th += this.lerpHeight(Un.d, Un.px, Un.pz + 1, this.getCell(Un.ox, Un.oz - 1) [Un.depth][Un.ix + 1][Un.sqb]), Un.iz < Un.sqb ? Un.th += this.lerpHeight(Un.d, Un.px, Un.pz, Un.layer[Un.ix + 1][Un.iz + 1]) : Un.th += this.lerpHeight(Un.d, Un.px, Un.pz - 1, this.getCell(Un.ox, Un.oz + 1) [Un.depth][Un.ix + 1][0])) : (Un.iz >= 0 ? Un.th += this.lerpHeight(Un.d, Un.px - 1, Un.pz, this.getCell(Un.ox + 1, Un.oz) [Un.depth][0][Un.iz]) : Un.th += this.lerpHeight(Un.d, Un.px - 1, Un.pz + 1, this.getCell(Un.ox + 1, Un.oz - 1) [Un.depth][0][Un.sqb]), Un.iz < Un.sqb ? Un.th += this.lerpHeight(Un.d, Un.px - 1, Un.pz, this.getCell(Un.ox + 1, Un.oz) [Un.depth][0][Un.iz + 1]) : Un.th += this.lerpHeight(Un.d, Un.px - 1, Un.pz - 1, this.getCell(Un.ox + 1, Un.oz + 1) [Un.depth][0][0])),
          Un.h += Un.th,
          Un.depth++,
          Un.sq = this.resolutions[Un.depth],
          Un.sqb = Un.sq - 1
        }
        return Un.h += this.heightOffset,
        Un.h > this.threshold ? Un.h > this.threshold3 ? (Un.th *= Un.th, Un.th > 0.11 ? Un.th > 0.13 ? 2 : 1 : 0) : Un.h > this.threshold2 ? 1 : 2 : 3
      }
    };
    var qn = new class {
      constructor() {
        this.lib = {
          trees: {
          },
          brush: {
          }
        },
        this.randMaps = {
          trees: [
            [],
            [
            ],
            [
            ]
          ],
          brush: [
          ]
        },
        this.stagedTiles = {
          trees: {
          },
          brush: {
          }
        },
        this.hasTrees = !0,
        this.hasGrass = !0,
        this.rand = new window.alea(Ve),
        this.rands = [
        ],
        this.randIndex = 0,
        this.farTreeInstancePool = [
        ],
        this.buildLibrary(),
        this.buildRandMaps(),
        this.buildRands()
      }
      buildMap(e) {
        this.treeMap = new Jn(Ve, e),
        this.grassMap = new Vn(Ve, {
          heightScale: 2,
          heightOffset: 0.5,
          heightInitial: 0,
          resolutions: [
            5
          ],
          threshold: 0.05,
          threshold2: 0.25,
          threshold3: 0.5,
          smooth: !0
        })
      }
      buildRandMaps() {
        let e,
        t,
        i;
        for (e = 1; e <= 8; e++) for (i = 0; i < this.randMaps.trees.length; i++) {
          let e = [
          ],
          s = Math.ceil(1.4 * (i + this.rand())),
          n = 0.05,
          a = 1 - 2 * n;
          for (t = 0; t < s; t++) e.push(n + this.rand() * a, n + this.rand() * a);
          this.randMaps.trees[i].push(e)
        }
      }
      buildRands() {
        for (let e = 0; e < 101; e++) this.rands.push(this.rand())
      }
      getRand() {
        return this.randIndex >= this.rands.length && (this.randIndex = 0),
        this.rands[this.randIndex++]
      }
      getTreesAt(e, t) {
        return this.t = this.treeMap.getXZ(e, t),
        this.t ? this.getSeededTreeMap(this.t, (e + t) / 10) : null
      }
      getSeededTreeMap(e, t) {
        return this.randMaps.trees[e - 1][7 & t]
      }
      getTreeMap(e) {
        return this.randMaps.trees[e - 1][Math.floor(8 * this.getRand())]
      }
      buildLibrary() {
        let e = new h.g,
        t = new Float32Array([ - 0.5,
        0,
        0,
        - 0.5,
        1,
        0,
        0.5,
        1,
        0,
        0.5,
        0,
        0,
        0,
        0,
        0.5,
        0,
        1,
        0.5,
        0,
        1,
        - 0.5,
        0,
        0,
        - 0.5]);
        e.setAttribute('position', new h.o(t, 3));
        let i = new Float32Array([0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0]);
        e.setAttribute('normal', new h.o(i, 3));
        let s = new Float32Array([0,
        0,
        0,
        0.49,
        0.5,
        0.49,
        0.5,
        0,
        0,
        0,
        0,
        0.49,
        0.5,
        0.49,
        0.5,
        0]);
        e.setAttribute('uv', new h.o(s, 2));
        e.setIndex([0,
        1,
        2,
        0,
        2,
        3,
        4,
        5,
        6,
        4,
        6,
        7]),
        this.baseGeo = e;
        let n = e.clone();
        n.scale(8, 8, 8),
        this.lib.trees.far = {
          geo: n,
          mat: Pi[0]
        };
        let a = e.clone(),
        r = new Float32Array([0,
        0,
        0,
        0.49,
        0.25,
        0.49,
        0.25,
        0,
        0.25,
        0,
        0.25,
        0.49,
        0.5,
        0.49,
        0.5,
        0]);
        a.setAttribute('uv', new h.o(r, 2));
        let o = a.clone();
        o.scale(8, 8, 8),
        this.lib.trees.near = {
          geo: o,
          mat: Pi[1]
        };
        let l = e.clone();
        l.scale(1.6, 1.6, 1.6),
        this.lib.brush.grass = {
          geo: l,
          mat: Ei[0]
        };
        let d = a.clone();
        d.scale(1.6, 1.6, 1.6),
        this.lib.brush.bush = {
          geo: d,
          mat: Ei[1]
        }
      }
      getGrassInstance(e) {
        let t = new h.u(this.lib.brush.grass.geo.clone(), this.lib.brush.grass.mat, e);
        return t.matrixAutoUpdate = !1,
        t.geometry.setAttribute('variant', new h.t(new Float32Array(e), 1)),
        t.instanceVariant = t.geometry.attributes.variant,
        t.instanceVariant.setUsage(h.l),
        t.geometry.setAttribute('shadow', new h.t(new Float32Array(e), 1)),
        t.instanceShadow = t.geometry.attributes.shadow,
        t.instanceShadow.setUsage(h.l),
        t.position.y = - 0.1,
        t.instanceMatrix.setUsage(h.l),
        t
      }
      getBushInstance(e) {
        let t = new h.u(this.lib.brush.bush.geo.clone(), this.lib.brush.bush.mat, e);
        return t.matrixAutoUpdate = !1,
        t.geometry.setAttribute('variant', new h.t(new Float32Array(e), 1)),
        t.instanceVariant = t.geometry.attributes.variant,
        t.instanceVariant.setUsage(h.l),
        t.geometry.setAttribute('shadow', new h.t(new Float32Array(e), 1)),
        t.instanceShadow = t.geometry.attributes.shadow,
        t.instanceShadow.setUsage(h.l),
        t.position.y = - 0.1,
        t.instanceMatrix.setUsage(h.l),
        t
      }
      prepareTreeInstance(e, t, i = !0) {
        e.geometry.setAttribute('variant', new h.t(new Float32Array(t), 1)),
        e.instanceVariant = e.geometry.attributes.variant,
        e.instanceVariant.setUsage(h.l),
        i && (e.geometry.setAttribute('shadow', new h.t(new Float32Array(t), 1)), e.instanceShadow = e.geometry.attributes.shadow, e.instanceShadow.setUsage(h.l)),
        e.position.y = - 0.5,
        e.instanceMatrix.setUsage(h.l)
      }
      getNearTreeDetailInstance(e) {
        let t = new h.u(this.lib.trees.detail.geo.clone(), this.lib.trees.detail.mat, e);
        return t.matrixAutoUpdate = !1,
        t.frustumCulled = !0,
        this.prepareTreeInstance(t, e, !1),
        t
      }
      getNearTreeInstance(e) {
        let t = new h.u(this.lib.trees.near.geo.clone(), this.lib.trees.near.mat, e);
        return t.matrixAutoUpdate = !1,
        this.prepareTreeInstance(t, e, !1),
        t
      }
      returnFarTreeInstance(e) {
        e.visible = !1,
        e.count = 0,
        this.farTreeInstancePool.push(e)
      }
      getFarTreeInstance(e) {
        if (this.farTreeInstancePool.length) return this.farTreeInstancePool.pop();
        let t = new h.u(this.lib.trees.far.geo.clone(), this.lib.trees.far.mat, e);
        return t.matrixAutoUpdate = !1,
        t.frustumCulled = !0,
        this.prepareTreeInstance(t, e, !1),
        t
      }
    };
    const Kn = new h.A;
    class _n {
      constructor() {
        this.initNodeIndex = 0,
        this.retireNodeIndex = - 1,
        this.showNodeIndex = 0
      }
    }
    var $n = class {
      constructor(e, t, i = 50, s = null) {
        this.lodInstances = [
          [],
          [
          ]
        ],
        this.stagedInstances = [
          [],
          [
          ]
        ],
        this.activeInstances = [
          [],
          [
          ]
        ],
        this.currentInstances = [
        ],
        this.minRenderDist = 50,
        this.maxInstanceRange = 50,
        this.debug = !1,
        this.skipLod = null,
        this.instanceCounter = 0,
        this.container = new h.G,
        this.instanceType = e,
        this.skipLod = s,
        this.instanceCount = t,
        this.minRenderDist = i,
        this.maxInstanceRange = i
      }
      revert(e, t) {
        this.instanceCount = e || this.instanceCount,
        this.minRenderDist = t || this.minRenderDist,
        this.maxInstanceRange = this.minRenderDist,
        this.destroy(),
        this.lodInstances[0].length = 0,
        this.lodInstances[1].length = 0,
        this.stagedInstances[0].length = 0,
        this.stagedInstances[1].length = 0,
        this.activeInstances[0].length = 0,
        this.activeInstances[1].length = 0,
        this.initialise()
      }
      reset() {
        for (let e of this.currentInstances) null != e && (e.index = 0, e.showNodeIndex = 0, e.retireNodeIndex = 0, e.initNodeIndex = 0, e.mesh.count = 0, e.mesh.visible = !1);
        this.lodInstances[0].length = 0,
        this.lodInstances[1].length = 0,
        this.stagedInstances[0].length = 0,
        this.stagedInstances[1].length = 0,
        this.activeInstances[0].length = 0,
        this.activeInstances[1].length = 0
      }
      destroy() {
        this.container.traverse((e=>{
          e.isMesh && e.geometry.dispose()
        })),
        this.container.clear()
      }
      initialise() {
        0 !== this.skipLod && (ts['instance-' + this.instanceType.typeName + '-0'] = 1, this.currentInstances[0] = this.getInstance(st.head.p)),
        1 !== this.skipLod && (ts['instance-' + this.instanceType.typeName + '-1'] = 1, this.currentInstances[1] = this.getInstance(st.head.p))
      }
      initInstance(e) {
      }
      getInstance(e = null) {
        let t = new this.instanceType;
        return t.mesh.matrixAutoUpdate = !1,
        e && (t.mesh.position.copy(e), t.mesh.updateMatrix()),
        t.mesh.visible = !1,
        t.iid = this.instanceCounter++,
        this.container.add(t.mesh),
        t
      }
      addInstance(e, t, i, s, n, a = null, r = 0) {
        let h = this.currentInstances[e];
        0 == h.index ? this.stageInstance(e, h, s, n) : h.retireNodeIndex = s + 3,
        Kn.makeTranslation( - h.mesh.position.x, - h.mesh.position.y, - h.mesh.position.z),
        t.premultiply(Kn),
        h.mesh.setMatrixAt(h.index, t),
        h.index++,
        h.index >= this.instanceCount && this.cycleInstances(e)
      }
      stageInstance(e, t, i, s) {
        t.initNodeIndex = i,
        t.showNodeIndex = i - this.minRenderDist,
        t.retireNodeIndex = i + this.maxInstanceRange + 3,
        t.mesh.position.copy(s),
        t.mesh.updateMatrix(),
        this.stagedInstances[e].push(t)
      }
      updateInstanceState(e) {
        e.mesh.instanceMatrix.needsUpdate = !0,
        e.mesh.count = Math.min(this.instanceCount, Math.max(0, e.index))
      }
      updateCurrentInstance(e) {
        let t = this.currentInstances[e];
        st.vehicleIndex >= t.showNodeIndex && this.updateInstanceState(t)
      }
      initialiseVisible() {
        let e,
        t;
        do {
          e = this.stagedInstances[0].length,
          t = this.stagedInstances[1].length,
          this.updateVisible()
        } while (e != this.stagedInstances[0].length || t !== this.stagedInstances[1].length)
      }
      updateVisible() {
        0 !== this.skipLod && (this.t = this.stagedInstances[0], this.t.length && st.vehicleIndex >= this.t[0].showNodeIndex && (this.updateInstanceState(this.t[0]), this.t[0].mesh.visible = !0, this.activeInstances[0].push(this.t.shift())), this.t = this.activeInstances[0], this.t.length && this.t[0].retireNodeIndex <= st.vehicleIndex && (this.t[0].mesh.visible = !1, this.lodInstances[0].push(this.activeInstances[0].shift())), this.currentInstances[0].index && st.vehicleIndex >= this.currentInstances[0].initNodeIndex && this.cycleInstances(0), ts['instance-' + this.instanceType.typeName + '-0'] = this.activeInstances[0].length + '(' + this.stagedInstances[0].length + ')'),
        1 !== this.skipLod && (this.t = this.stagedInstances[1], this.t.length && st.vehicleIndex >= this.t[0].showNodeIndex && (this.updateInstanceState(this.t[0]), this.t[0].mesh.visible = !0, this.activeInstances[1].push(this.t.shift())), this.t = this.activeInstances[1], this.t.length && this.t[0].retireNodeIndex <= st.vehicleIndex && (this.t[0].mesh.visible = !1, this.lodInstances[1].push(this.activeInstances[1].shift())), this.currentInstances[1].index && st.vehicleIndex >= this.currentInstances[1].initNodeIndex && this.cycleInstances(1), ts['instance-' + this.instanceType.typeName + '-1'] = this.activeInstances[1].length + '(' + this.stagedInstances[1].length + ')')
      }
      cycleInstances(e) {
        let t = this.currentInstances[e];
        t.mesh.count != t.index && this.updateInstanceState(t),
        this.lodInstances[e].length ? t = this.lodInstances[e].pop() : (t = this.getInstance(), ts['instance-' + this.instanceType.typeName + '-' + e] = this.activeInstances[e].length + '(' + (this.stagedInstances[e].length + 1) + ')'),
        t.index = 0,
        t.mesh.count = 0,
        t.mesh.visible = !1,
        this.currentInstances[e] = t
      }
    };
    const ea = new h.A;
    var ta = class extends $n {
      addInstance(e, t, i, s, n, a = null, r = null) {
        this.temp = this.currentInstances[e],
        0 == this.temp.index ? this.stageInstance(e, this.temp, s, n) : s > this.temp.retireNodeIndex && (this.temp.retireNodeIndex = s),
        ea.makeTranslation( - this.temp.mesh.position.x, - this.temp.mesh.position.y, - this.temp.mesh.position.z),
        t.premultiply(ea),
        this.temp.mesh.setMatrixAt(this.temp.index, t),
        this.temp.mesh.instanceVariant.array[this.temp.index] = i,
        null !== r && (this.temp.mesh.instanceShadow.array[this.temp.index] = r),
        this.temp.index++,
        this.temp.index >= this.instanceCount && this.cycleInstances(e, s, n)
      }
      updateInstanceState(e) {
        e.mesh.instanceMatrix.needsUpdate = !0,
        e.mesh.instanceVariant.needsUpdate = !0,
        e.mesh.instanceShadow && (e.mesh.instanceShadow.needsUpdate = !0),
        e.mesh.count = Math.min(this.instanceCount, Math.max(0, e.index))
      }
      updateCurrentInstance(e) {
        let t = this.currentInstances[e];
        st.vehicleIndex >= t.showNodeIndex && t.mesh.count < t.index && this.updateInstanceState(t)
      }
      cycleInstances(e) {
        let t = this.currentInstances[e];
        t.retireNodeIndex += 5,
        t.mesh.count != t.index && this.updateInstanceState(t),
        this.lodInstances[e].length ? t = this.lodInstances[e].pop() : (t = this.getInstance(), ts['instance-' + this.instanceType.typeName + '-' + e] = this.activeInstances[e].length + '(' + this.stagedInstances[e].length + ')'),
        t.index = 0,
        t.mesh.count = 0,
        t.mesh.visible = !1,
        this.currentInstances[e] = t
      }
    };
    class ia extends _n {
      constructor() {
        super (),
        this.index = 0,
        this.mesh = qn.getNearTreeInstance(zi),
        this.retireNodeIndex = - 1,
        this.showNodeIndex = 0
      }
    }
    ia.typeName = 'trees';
    var sa = new ta(ia, zi, Oi, 1);
    class na extends _n {
      constructor() {
        super (),
        this.index = 0,
        this.mesh = qn.getGrassInstance(Bi),
        this.mesh.receiveShadow = wh.value.detailLodIndex > 0,
        this.retireNodeIndex = - 1,
        this.showNodeIndex = 0
      }
    }
    na.typeName = 'grass';
    var aa = new ta(na, Bi, Ri);
    class ra extends _n {
      constructor() {
        super (),
        this.index = 0,
        this.mesh = qn.getBushInstance(Wi),
        this.mesh.receiveShadow = wh.value.detailLodIndex > 1,
        this.retireNodeIndex = - 1,
        this.showNodeIndex = 0
      }
    }
    ra.typeName = 'bush';
    var ha = new ta(ra, Wi, Ri, 0);
    const oa = {
    },
    la = new h.G,
    da = new Ps(157),
    ca = new Ps(157, 1, 0.5),
    pa = new Ps(103, 6.28),
    ua = new Ps(101, 4),
    ga = new Ps(101, 0.4),
    ma = {
    };
    class xa extends ht {
      constructor(...e) {
        super (...e),
        this.treeDensity = !1,
        this.forceTrees = !1,
        this.trees = [
        ],
        this.treeMaskCorners = [
        ],
        this.treeDensity = 0,
        this.renderFoliage = !0
      }
      display(...e) {
        super.display(...e),
        1 == this.lod && this.tileset.mesh.visible && (aa.updateCurrentInstance(1), ha.updateCurrentInstance(1))
      }
      preInitialise(e) {
        var t;
        if (this.forceTrees = e, this.trees.length = 0, this.renderFoliage = wh.value.detailLodIndex > 0, ma.treeMask = null === (t = oa[this.farCell.x]) || void 0 === t ? void 0 : t[this.farCell.z], !ma.treeMask) return !1;
        ma.res1 = xe + 1,
        ma.treeIndex = this.tileCoords.x * ma.res1 + this.tileCoords.z,
        this.treeMaskCorners[0] = ma.treeMask[ma.treeIndex],
        this.treeMaskCorners[1] = ma.treeMask[ma.treeIndex + ma.res1],
        this.treeMaskCorners[2] = ma.treeMask[ma.treeIndex + 1],
        this.treeMaskCorners[3] = ma.treeMask[ma.treeIndex + 1 + ma.res1],
        this.treeDensity = this.treeMaskCorners.reduce(((e, t) =>e + t), 0) / 4;
        let i = qn.getTreesAt(this.originPos.x, this.originPos.z);
        if (i) {
          let e,
          t,
          s;
          for (t = 0; t < i.length; t += 2) s = pa.next(),
          e = {
            position: [
              i[t],
              i[t + 1]
            ],
            rotation: s,
            type: Math.round(s / 2)
          },
          s = it(e.position[0] * Ne + this.originPos.x, e.position[1] * Ne + this.originPos.z, this.originNode, !1),
          s.e = Ge + Math.abs(s.da),
          s.d - (s.w + s.e) > 2 && this.trees.push(e)
        } else if (this.originNode.dswl || this.originNode.dswr) {
          let e = it(this.originPos.x + 5, this.originPos.z + 5, this.originNode);
          if (e.d < e.w + 4 && (e.s > 0 && this.originNode.dswl || e.s < 0 && this.originNode.dswr)) {
            let t = (e.w + 2 - e.d) / 10;
            t > 0 && t < 0.2 && this.trees.push({
              position: [
                0.5 - t * this.originNode.n.x * e.s,
                0.5 - t * this.originNode.n.z * e.s
              ],
              rotation: 15 * t,
              type: Math.floor(12 * t)
            })
          }
        }
        return !0
      }
      postProcessRow(e) {
        this.placeGrassRow(e)
      }
      postProcessCell() {
        if (0 == this.lod || this.forceTrees) {
          let e,
          t,
          i;
          for (let s of this.trees) e = Math.floor(s.position[0] * this.res),
          t = Math.floor(s.position[1] * this.res),
          i = e * this.res1 + t,
          this.grads[i] < 0.2 && this.heights[i] > 1 && (la.position.set((this.coords.x + s.position[0]) * Ne, this.heights[i] - (0.5 + this.grads[i]), (this.coords.z + s.position[1]) * Ne), ma.tms = 0.15 * (3 * this.treeDensity - 1) + 1, ma.hb = ma.tms + (ga.next() - 0.2) * ma.tms, la.scale.set(ma.hb, ma.hb, ma.hb), la.rotation.y = s.rotation, la.updateMatrix(), sa.addInstance(0, la.matrix, s.type, this.originIndex, la.position))
        }
      }
      nearestTreeDist(e, t) {
        let i,
        s = - 1;
        for (let n of this.trees) i = (n.position[0] - e) * (n.position[0] - e) + (n.position[1] - t) * (n.position[1] - t),
        (i < s || s < 0) && (s = i);
        return s
      }
      placeGrassRow(e) {
        for (ma.j = 0; ma.j <= this.res; ma.j++) if (ma.ind = e * this.res1 + ma.j, ma.h = this.heights[ma.ind], ma.r = this.signedRoadProx[ma.ind], ma.n = [
          this.norms[3 * ma.ind],
          this.norms[3 * ma.ind + 1],
          this.norms[3 * ma.ind + 2]
        ], ma.az = e / this.res, ma.ax = ma.j / this.res, ma.ma = this.treeMaskCorners[2] * ma.ax + this.treeMaskCorners[0] * (1 - ma.ax), ma.mb = this.treeMaskCorners[3] * ma.ax + this.treeMaskCorners[1] * (1 - ma.ax), ma.tm = ma.mb * ma.az + ma.ma * (1 - ma.az), ma.r < 2 && (ma.tm *= ma.r / 2), this.treeMask[ma.ind] = ma.tm, this.renderFoliage && (ma.grassProb = ma.j < this.res1 && ma.r > 0.2 && ma.r < 20 ? ma.h > 2 ? this.grads[ma.ind] < 0.2 ? 1 : 0.4 - this.grads[ma.ind] : ma.h - 1 : 0, ma.grassProb > da.next())) {
          if (ma.r < Ge ? ma.h -= Ge - ma.r : ma.h -= ma.r / 20, la.position.set((this.coords.x + ma.az) * Ne + ca.next(), ma.h - this.grads[ma.ind] / 2 + 0.2 * ca.next(), (this.coords.z + ma.ax) * Ne + ca.next()), la.rotation.y = pa.next(), ma.treeProx = this.nearestTreeDist(ma.az, ma.ax), ma.treeProx < 0 ? ma.treeProx = 0 : (ma.treeProx = 0.25 - Math.min(0.25, ma.treeProx / 0.25), ma.r < 4 && (ma.treeProx *= ma.r / 4)), this.treeMask[ma.ind] = Math.max(this.treeMask[ma.ind], 4 * ma.treeProx), ma.treeProx = this.treeMask[ma.ind] / 2 + Math.abs(this.grads[ma.ind] / 2), ma.bushProb = this.treeDensity + 0.008, ma.bushProb < 0.5 && (this.originNode.dswl || this.originNode.dswr) && ma.r > 1 && ma.r < 1.6 && (ma.side = - this.originNode.n.z * (this.originPos.z + 10 * ma.az - this.originNode.p.z) - this.originNode.n.x * (this.originPos.x + 10 * ma.ax - this.originNode.p.x), (this.originNode.dswl && ma.side > 0 || this.originNode.dswr && ma.side < 0) && (ma.bushProb += 0.33), ma.bushProb > 1 && (ma.bushProb = 1)), ma.r < 0.5 || ma.r > 4 ? ma.bushProb = 0 : ma.r < 1 ? ma.bushProb *= 4 * (ma.r - 0.5) : ma.r < 2 ? ma.bushProb *= 2 : ma.r < 4 && (ma.bushProb *= 4 - ma.r), ma.bushProb *= 0.25, 1 == this.lod && ma.bushProb > Math.random()) {
            la.scale.x = la.scale.y = la.scale.z = Math.min(ma.r, 1 + this.treeDensity * ga.next()),
            la.rotation.y = pa.next(),
            la.updateMatrix(),
            ha.addInstance(1, la.matrix, Math.floor(ua.next()), this.originIndex, la.position, ma.n, ma.treeProx);
            continue
          }
          la.scale.y = 1,
          ma.r > 1 ? ma.r > 2 ? la.scale.y += 0.5 * this.treeDensity : la.scale.y += (ma.r - 1) * this.treeDensity * 0.5 : la.scale.y = Math.max(0.75, ma.r),
          la.scale.x = la.scale.z = la.scale.y,
          la.updateMatrix(),
          aa.addInstance(this.lod, la.matrix, ma.r, this.originIndex, la.position, ma.n, ma.treeProx)
        }
      }
    }
    xa.paved = !0;
    var va = xa;
    const wa = {
      size: 1000,
      nodes: [
        [0,
        0],
        [
          200,
          0
        ],
        [
          400,
          0
        ],
        [
          600,
          0
        ],
        [
          750,
          0
        ],
        [
          1000,
          0
        ],
        [
          0,
          200
        ],
        [
          200,
          100
        ],
        [
          400,
          100
        ],
        [
          550,
          200
        ],
        [
          750,
          200
        ],
        [
          1000,
          150
        ],
        [
          0,
          300
        ],
        [
          200,
          300
        ],
        [
          300,
          300
        ],
        [
          500,
          300
        ],
        [
          800,
          350
        ],
        [
          1000,
          350
        ],
        [
          0,
          500
        ],
        [
          150,
          500
        ],
        [
          300,
          450
        ],
        [
          500,
          450
        ],
        [
          600,
          450
        ],
        [
          800,
          450
        ],
        [
          1000,
          500
        ],
        [
          0,
          700
        ],
        [
          150,
          700
        ],
        [
          300,
          700
        ],
        [
          300,
          650
        ],
        [
          400,
          650
        ],
        [
          600,
          650
        ],
        [
          700,
          650
        ],
        [
          800,
          650
        ],
        [
          1000,
          650
        ],
        [
          0,
          850
        ],
        [
          200,
          850
        ],
        [
          300,
          850
        ],
        [
          400,
          850
        ],
        [
          500,
          850
        ],
        [
          700,
          800
        ],
        [
          850,
          800
        ],
        [
          1000,
          800
        ],
        [
          0,
          1000
        ],
        [
          200,
          1000
        ],
        [
          300,
          1000
        ],
        [
          500,
          1000
        ],
        [
          700,
          1000
        ],
        [
          850,
          1000
        ],
        [
          1000,
          1000
        ]
      ],
      fields: [
        {
          nodes: [
            0,
            1,
            7,
            6
          ],
          center: [
            100,
            75
          ],
          radius2: 25625,
          radius: 160.0781059358212,
          walls: [
            0,
            1,
            2,
            3
          ]
        },
        {
          nodes: [
            1,
            2,
            8,
            7
          ],
          center: [
            300,
            50
          ],
          radius2: 12500,
          walls: [
            4,
            5,
            6,
            1
          ],
          radius: 111.80339887498948
        },
        {
          nodes: [
            2,
            3,
            9,
            8
          ],
          center: [
            487.5,
            75
          ],
          radius2: 19531.25,
          walls: [
            7,
            8,
            9,
            5
          ],
          radius: 139.75424859373686
        },
        {
          nodes: [
            3,
            4,
            10,
            9
          ],
          center: [
            662.5,
            100
          ],
          radius2: 22656.25,
          walls: [
            10,
            11,
            12,
            8
          ],
          radius: 150.5199322349037
        },
        {
          nodes: [
            4,
            5,
            11,
            10
          ],
          center: [
            875,
            87.5
          ],
          radius2: 28281.25,
          walls: [
            13,
            14,
            15,
            11
          ],
          radius: 168.17030058842138
        },
        {
          nodes: [
            6,
            7,
            13,
            12
          ],
          center: [
            100,
            225
          ],
          radius2: 25625,
          walls: [
            2,
            16,
            17,
            18
          ],
          radius: 160.0781059358212
        },
        {
          nodes: [
            7,
            8,
            14,
            13
          ],
          center: [
            275,
            200
          ],
          radius2: 25625,
          walls: [
            6,
            19,
            20,
            16
          ],
          radius: 160.0781059358212
        },
        {
          nodes: [
            8,
            9,
            15,
            14
          ],
          center: [
            437.5,
            225
          ],
          radius2: 24531.25,
          walls: [
            9,
            21,
            22,
            19
          ],
          radius: 156.62455107677084
        },
        {
          nodes: [
            9,
            10,
            16,
            15
          ],
          center: [
            650,
            262.5
          ],
          radius2: 30156.25,
          walls: [
            12,
            23,
            24,
            21
          ],
          radius: 173.65554986812256
        },
        {
          nodes: [
            10,
            11,
            17,
            16
          ],
          center: [
            887.5,
            262.5
          ],
          radius2: 25312.5,
          walls: [
            15,
            25,
            26,
            23
          ],
          radius: 159.0990257669732
        },
        {
          nodes: [
            12,
            13,
            19,
            18
          ],
          center: [
            87.5,
            400
          ],
          radius2: 22656.25,
          walls: [
            17,
            27,
            28,
            29
          ],
          radius: 150.5199322349037
        },
        {
          nodes: [
            13,
            14,
            20,
            19
          ],
          center: [
            237.5,
            387.5
          ],
          radius2: 20312.5,
          walls: [
            20,
            30,
            31,
            27
          ],
          radius: 142.52192813739225
        },
        {
          nodes: [
            14,
            15,
            21,
            20
          ],
          center: [
            400,
            375
          ],
          radius2: 15625,
          walls: [
            22,
            32,
            33,
            30
          ],
          radius: 125
        },
        {
          nodes: [
            15,
            16,
            23,
            22,
            21
          ],
          center: [
            640,
            400
          ],
          radius2: 29600,
          walls: [
            24,
            34,
            35,
            36,
            32
          ],
          radius: 172.04650534085255
        },
        {
          nodes: [
            16,
            17,
            24,
            23
          ],
          center: [
            900,
            412.5
          ],
          radius2: 17656.25,
          walls: [
            26,
            37,
            38,
            34
          ],
          radius: 132.87682265918312
        },
        {
          nodes: [
            18,
            19,
            26,
            25
          ],
          center: [
            75,
            600
          ],
          radius2: 15625,
          walls: [
            28,
            39,
            40,
            41
          ],
          radius: 125
        },
        {
          nodes: [
            19,
            20,
            28,
            27,
            26
          ],
          center: [
            240,
            600
          ],
          radius2: 26100,
          walls: [
            31,
            42,
            43,
            44,
            39
          ],
          radius: 161.55494421403512
        },
        {
          nodes: [
            20,
            21,
            29,
            28
          ],
          center: [
            375,
            550
          ],
          radius2: 25625,
          walls: [
            33,
            45,
            46,
            42
          ],
          radius: 160.0781059358212
        },
        {
          nodes: [
            21,
            22,
            30,
            29
          ],
          center: [
            525,
            550
          ],
          radius2: 25625,
          walls: [
            36,
            47,
            48,
            45
          ],
          radius: 160.0781059358212
        },
        {
          nodes: [
            22,
            23,
            32,
            31,
            30
          ],
          center: [
            700,
            570
          ],
          radius2: 24400,
          walls: [
            35,
            49,
            50,
            51,
            47
          ],
          radius: 156.20499351813308
        },
        {
          nodes: [
            23,
            24,
            33,
            32
          ],
          center: [
            900,
            562.5
          ],
          radius2: 22656.25,
          walls: [
            38,
            52,
            53,
            49
          ],
          radius: 150.5199322349037
        },
        {
          nodes: [
            25,
            26,
            35,
            34
          ],
          center: [
            87.5,
            775
          ],
          radius2: 18281.25,
          walls: [
            40,
            54,
            55,
            56
          ],
          radius: 135.2081728298996
        },
        {
          nodes: [
            26,
            27,
            36,
            35
          ],
          center: [
            237.5,
            775
          ],
          radius2: 13281.25,
          walls: [
            44,
            57,
            58,
            54
          ],
          radius: 115.2443057161611
        },
        {
          nodes: [
            27,
            28,
            29,
            37,
            36
          ],
          center: [
            340,
            740
          ],
          radius2: 15700,
          walls: [
            43,
            46,
            59,
            60,
            57
          ],
          radius: 125.29964086141668
        },
        {
          nodes: [
            29,
            30,
            38,
            37
          ],
          center: [
            475,
            750
          ],
          radius2: 25625,
          walls: [
            48,
            61,
            62,
            59
          ],
          radius: 160.0781059358212
        },
        {
          nodes: [
            30,
            31,
            39,
            38
          ],
          center: [
            625,
            737.5
          ],
          radius2: 28281.25,
          walls: [
            51,
            63,
            64,
            61
          ],
          radius: 168.17030058842138
        },
        {
          nodes: [
            31,
            32,
            40,
            39
          ],
          center: [
            762.5,
            725
          ],
          radius2: 13281.25,
          walls: [
            50,
            65,
            66,
            63
          ],
          radius: 115.2443057161611
        },
        {
          nodes: [
            32,
            33,
            41,
            40
          ],
          center: [
            912.5,
            725
          ],
          radius2: 18281.25,
          walls: [
            53,
            67,
            68,
            65
          ],
          radius: 135.2081728298996
        },
        {
          nodes: [
            34,
            35,
            43,
            42
          ],
          center: [
            100,
            925
          ],
          radius2: 15625,
          walls: [
            55,
            69,
            70,
            71
          ],
          radius: 125
        },
        {
          nodes: [
            35,
            36,
            37,
            44,
            43
          ],
          center: [
            280,
            910
          ],
          radius2: 18000,
          walls: [
            58,
            60,
            72,
            73,
            69
          ],
          radius: 134.16407864998737
        },
        {
          nodes: [
            37,
            38,
            45,
            44
          ],
          center: [
            425,
            925
          ],
          radius2: 21250,
          walls: [
            62,
            74,
            75,
            72
          ],
          radius: 145.7737973711325
        },
        {
          nodes: [
            38,
            39,
            46,
            45
          ],
          center: [
            600,
            912.5
          ],
          radius2: 22656.25,
          walls: [
            64,
            76,
            77,
            74
          ],
          radius: 150.5199322349037
        },
        {
          nodes: [
            39,
            40,
            47,
            46
          ],
          center: [
            775,
            900
          ],
          radius2: 15625,
          walls: [
            66,
            78,
            79,
            76
          ],
          radius: 125
        },
        {
          nodes: [
            40,
            41,
            48,
            47
          ],
          center: [
            925,
            900
          ],
          radius2: 15625,
          walls: [
            68,
            80,
            81,
            78
          ],
          radius: 125
        }
      ],
      walls: [
        [0,
        0,
        200,
        0],
        [
          200,
          0,
          200,
          100
        ],
        [
          200,
          100,
          0,
          200
        ],
        [
          0,
          200,
          0,
          0
        ],
        [
          200,
          0,
          400,
          0
        ],
        [
          400,
          0,
          400,
          100
        ],
        [
          400,
          100,
          200,
          100
        ],
        [
          400,
          0,
          600,
          0
        ],
        [
          600,
          0,
          550,
          200
        ],
        [
          550,
          200,
          400,
          100
        ],
        [
          600,
          0,
          750,
          0
        ],
        [
          750,
          0,
          750,
          200
        ],
        [
          750,
          200,
          550,
          200
        ],
        [
          750,
          0,
          1000,
          0
        ],
        [
          1000,
          0,
          1000,
          150
        ],
        [
          1000,
          150,
          750,
          200
        ],
        [
          200,
          100,
          200,
          300
        ],
        [
          200,
          300,
          0,
          300
        ],
        [
          0,
          300,
          0,
          200
        ],
        [
          400,
          100,
          300,
          300
        ],
        [
          300,
          300,
          200,
          300
        ],
        [
          550,
          200,
          500,
          300
        ],
        [
          500,
          300,
          300,
          300
        ],
        [
          750,
          200,
          800,
          350
        ],
        [
          800,
          350,
          500,
          300
        ],
        [
          1000,
          150,
          1000,
          350
        ],
        [
          1000,
          350,
          800,
          350
        ],
        [
          200,
          300,
          150,
          500
        ],
        [
          150,
          500,
          0,
          500
        ],
        [
          0,
          500,
          0,
          300
        ],
        [
          300,
          300,
          300,
          450
        ],
        [
          300,
          450,
          150,
          500
        ],
        [
          500,
          300,
          500,
          450
        ],
        [
          500,
          450,
          300,
          450
        ],
        [
          800,
          350,
          800,
          450
        ],
        [
          800,
          450,
          600,
          450
        ],
        [
          600,
          450,
          500,
          450
        ],
        [
          1000,
          350,
          1000,
          500
        ],
        [
          1000,
          500,
          800,
          450
        ],
        [
          150,
          500,
          150,
          700
        ],
        [
          150,
          700,
          0,
          700
        ],
        [
          0,
          700,
          0,
          500
        ],
        [
          300,
          450,
          300,
          650
        ],
        [
          300,
          650,
          300,
          700
        ],
        [
          300,
          700,
          150,
          700
        ],
        [
          500,
          450,
          400,
          650
        ],
        [
          400,
          650,
          300,
          650
        ],
        [
          600,
          450,
          600,
          650
        ],
        [
          600,
          650,
          400,
          650
        ],
        [
          800,
          450,
          800,
          650
        ],
        [
          800,
          650,
          700,
          650
        ],
        [
          700,
          650,
          600,
          650
        ],
        [
          1000,
          500,
          1000,
          650
        ],
        [
          1000,
          650,
          800,
          650
        ],
        [
          150,
          700,
          200,
          850
        ],
        [
          200,
          850,
          0,
          850
        ],
        [
          0,
          850,
          0,
          700
        ],
        [
          300,
          700,
          300,
          850
        ],
        [
          300,
          850,
          200,
          850
        ],
        [
          400,
          650,
          400,
          850
        ],
        [
          400,
          850,
          300,
          850
        ],
        [
          600,
          650,
          500,
          850
        ],
        [
          500,
          850,
          400,
          850
        ],
        [
          700,
          650,
          700,
          800
        ],
        [
          700,
          800,
          500,
          850
        ],
        [
          800,
          650,
          850,
          800
        ],
        [
          850,
          800,
          700,
          800
        ],
        [
          1000,
          650,
          1000,
          800
        ],
        [
          1000,
          800,
          850,
          800
        ],
        [
          200,
          850,
          200,
          1000
        ],
        [
          200,
          1000,
          0,
          1000
        ],
        [
          0,
          1000,
          0,
          850
        ],
        [
          400,
          850,
          300,
          1000
        ],
        [
          300,
          1000,
          200,
          1000
        ],
        [
          500,
          850,
          500,
          1000
        ],
        [
          500,
          1000,
          300,
          1000
        ],
        [
          700,
          800,
          700,
          1000
        ],
        [
          700,
          1000,
          500,
          1000
        ],
        [
          850,
          800,
          850,
          1000
        ],
        [
          850,
          1000,
          700,
          1000
        ],
        [
          1000,
          800,
          1000,
          1000
        ],
        [
          1000,
          1000,
          850,
          1000
        ]
      ],
      nodeToFields: [
        [0],
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4
        ],
        [
          0,
          5
        ],
        [
          0,
          1,
          5,
          6
        ],
        [
          1,
          2,
          6,
          7
        ],
        [
          2,
          3,
          7,
          8
        ],
        [
          3,
          4,
          8,
          9
        ],
        [
          4,
          9
        ],
        [
          5,
          10
        ],
        [
          5,
          6,
          10,
          11
        ],
        [
          6,
          7,
          11,
          12
        ],
        [
          7,
          8,
          12,
          13
        ],
        [
          8,
          9,
          13,
          14
        ],
        [
          9,
          14
        ],
        [
          10,
          15
        ],
        [
          10,
          11,
          15,
          16
        ],
        [
          11,
          12,
          16,
          17
        ],
        [
          12,
          13,
          17,
          18
        ],
        [
          13,
          18,
          19
        ],
        [
          13,
          14,
          19,
          20
        ],
        [
          14,
          20
        ],
        [
          15,
          21
        ],
        [
          15,
          16,
          21,
          22
        ],
        [
          16,
          22,
          23
        ],
        [
          16,
          17,
          23
        ],
        [
          17,
          18,
          23,
          24
        ],
        [
          18,
          19,
          24,
          25
        ],
        [
          19,
          25,
          26
        ],
        [
          19,
          20,
          26,
          27
        ],
        [
          20,
          27
        ],
        [
          21,
          28
        ],
        [
          21,
          22,
          28,
          29
        ],
        [
          22,
          23,
          29
        ],
        [
          23,
          24,
          29,
          30
        ],
        [
          24,
          25,
          30,
          31
        ],
        [
          25,
          26,
          31,
          32
        ],
        [
          26,
          27,
          32,
          33
        ],
        [
          27,
          33
        ],
        [
          28
        ],
        [
          28,
          29
        ],
        [
          29,
          30
        ],
        [
          30,
          31
        ],
        [
          31,
          32
        ],
        [
          32,
          33
        ],
        [
          33
        ]
      ]
    };
    var fa = wa;
    let ba = me,
    Aa = 2 * ba * 3;
    const ya = 1.45,
    Ia = Te + 1.25,
    Da = new Ps(97),
    Na = new h.F({
      map: X(null),
      side: h.k,
      flatShading: !0,
      emissiveIntensity: 0.01
    }),
    Ma = {
    };
    class Ca extends h.g {
      constructor() {
        super (),
        this.wallMap = [
        ],
        this.curVertIndex = 0,
        this.curIndex = 0;
        let e = 2 * ba * 3;
        this.setIndex(new Float32Array(2 * (ba - 1))),
        this.setAttribute('position', new h.o(new Float32Array(e), 3)),
        this.attributes.position.setUsage(h.l);
        let t = [
        ],
        i = 0;
        for (let s = 0; s < e; s += 6) t.push(0, i, 0.45, i),
        i += 2;
        this.setAttribute('uv', new h.o(new Float32Array(t), 2)),
        this.attributes.uv.setUsage(h.l),
        this.matrixAutoUpdate = !1,
        this.setDrawRange(0, 0)
      }
    }
    var ja = class {
      constructor(e, t, i, s, n) {
        this.verts = [
        ],
        this.index = [
        ],
        this.wallMap = [
        ],
        this.wallsToDraw = [
        ],
        this.fieldMap = [
        ],
        this.leftWallNodes = [
        ],
        this.rightWallNodes = [
        ],
        this.curWallIndex = 0,
        this.curVertIndex = 0,
        this.curUVIndex = 0,
        this.curIndex = 0,
        this.fieldMapOffset = new h.V,
        this.getXZ = () =>{
        },
        this.getXZQuick = () =>{
        },
        this.addTree = () =>{
        },
        this.initialised = !1,
        this.initCounter = 0,
        this.ready = !1,
        this.renderWalls = !0,
        this.distantResolution = 20,
        this.fieldChance = 0,
        this.getXZ = e,
        this.getXZQuick = t,
        this.getTreeDensity = i,
        this.addTree = s,
        ba = me,
        Aa = 2 * ba * 3,
        this.renderWalls = n,
        this.geo = new Ca,
        this.verts = this.geo.attributes.position.array,
        this.uvs = this.geo.attributes.uv.array,
        this.index = [
        ],
        this.mesh = new h.B(this.geo, Na),
        this.mesh.visible = !1,
        Ma.na = new h.V,
        Ma.nb = new h.V,
        Ma.t = new h.V,
        Ma.ti = new h.V,
        Ma.nextVert = new h.V
      }
      initialise(e, t = null, i = null, s = !1, n = !0) {
        if (this.originPos = e, this.debug = s, t && i) {
          if (n) for (this.originNode = t, Ma.midNodeIndex = (i.i - t.i) / 2, Ma.i = 0; Ma.i < Ma.midNodeIndex && this.originNode.next; Ma.i++) this.originNode = this.originNode.next;
          this.entryNode = t,
          this.exitNode = i,
          this.distantResolution = 10,
          this.checkBothDirections = i.i - t.i > 0.15 * me || !n
        } else this.originNode = null,
        this.entryNode = null,
        this.exitNode = null,
        this.distantResolution = 20;
        this.wallMap.length = 0,
        this.fieldMap.length = 0,
        this.skippedNodes = [
        ],
        this.wallsToDraw.length = 0,
        this.wallTileOffsets = [
        ],
        this.wallOffsets = [
        ],
        this.skippedFieldNodes = [
        ],
        this.skippedFieldNodeIDs = [
        ],
        this.skippedFieldNodeOffset = [
        ],
        this.leftWallNodes.length = 0,
        this.rightWallNodes.length = 0,
        this.index.length = 0,
        this.curWallIndex = 0,
        this.curVertIndex = 0,
        this.curUVIndex = 0,
        this.curIndex = 0,
        n && this.geo.setDrawRange(0, 0),
        this.fieldMapOffset.x = this.originPos.x % 1000,
        this.fieldMapOffset.z = this.originPos.z % 1000,
        this.fieldMapOffset.x < 0 && (this.fieldMapOffset.x += 1000),
        this.fieldMapOffset.z < 0 && (this.fieldMapOffset.z += 1000),
        this.initialised = !1,
        this.initCounter = 0,
        this.ready = !1
      }
      continueInitialise() {
        if (this.initCounter < fa.fields.length) {
          if (Ma.fi = this.initCounter, Ma.f = fa.fields[this.initCounter++], Ma.fX = Ma.f.center[0] - this.fieldMapOffset.x, Ma.fZ = Ma.f.center[1] - this.fieldMapOffset.z, Ma.tX = 0, Ma.tZ = 0, Ma.fX < 0 && (Ma.fX += 1000, Ma.tX = 1000), Ma.fZ < 0 && (Ma.fZ += 1000, Ma.tZ = 1000), Ma.tX -= this.fieldMapOffset.x, Ma.tZ -= this.fieldMapOffset.z, Ma.debug = this.debug && (24 == Ma.fi || 25 == Ma.fi), Ma.fX < me && Ma.fZ < me) {
            for (Ma.fn of Ma.f.nodes) if (Ma.fnn = fa.nodes[Ma.fn], Ma.fnX = Ma.fnn[0] - this.fieldMapOffset.x, Ma.fnZ = Ma.fnn[1] - this.fieldMapOffset.z, Ma.fnX < 0 && (Ma.fnX += 1000), Ma.fnZ < 0 && (Ma.fnZ += 1000), Ma.fnX > me || Ma.fnZ > me) return;
            if (Ma.h = this.getXZQuick(Ma.fX, Ma.fZ), Ma.h > 10 && Ma.h < 100 && 0 == this.getTreeDensity(Ma.fX, Ma.fZ)) if (Ma.fX += this.originPos.x, Ma.fZ += this.originPos.z, this.originNode) if (this.checkBothDirections ? (Ma.rd = tt(Ma.fX, Ma.fZ, this.entryNode, !0, Ma.debug), Ma.rd2 = tt(Ma.fX, Ma.fZ, this.exitNode, !0, Ma.debug), Ma.rd.d2 > Ma.rd2.d2 && (Ma.rd = Ma.rd2)) : Ma.rd = tt(Ma.fX, Ma.fZ, this.originNode, !0, Ma.debug), Ma.rd.d2 > Ma.f.radius2) for (Ma.w of Ma.f.walls) this.wallMap[Ma.w] || (this.wallMap[Ma.w] = !0, this.wallOffsets.push([Ma.tX,
            Ma.tZ]), this.wallsToDraw.push(fa.walls[Ma.w]), this.fieldMap[Ma.fi] = !0);
             else for (Ma.sni of Ma.f.nodes) this.skippedFieldNodes[Ma.sni] = Ma.rd.n,
            this.skippedFieldNodeIDs[Ma.sni] = !0,
            this.skippedFieldNodeOffset[Ma.sni] = [
              Ma.tX,
              Ma.tZ
            ];
             else for (Ma.w of Ma.f.walls) this.wallMap[Ma.w] || (this.wallMap[Ma.w] = !0, this.wallOffsets.push([Ma.tX,
            Ma.tZ]), this.wallsToDraw.push(fa.walls[Ma.w]), this.fieldMap[Ma.fi] = !0)
          }
        } else {
          for (Ma.rightIndex = - 1, Ma.leftIndex = - 1, Ma.ni = 0; Ma.ni < fa.nodes.length; Ma.ni++) if (this.skippedFieldNodeIDs[Ma.ni]) for (Ma.fi of fa.nodeToFields[Ma.ni]) if (this.fieldMap[Ma.fi]) {
            if (Ma.node = fa.nodes[Ma.ni], Ma.offset = this.skippedFieldNodeOffset[Ma.ni], Ma.rd = it(Ma.node[0] + Ma.offset[0] + this.originPos.x, Ma.node[1] + Ma.offset[1] + this.originPos.z, this.skippedFieldNodes[Ma.ni]), Ma.rd.d > fa.fields[Ma.fi].radius || Ma.rd.s < 0 && Ma.rd.n.g < - 1.5 || Ma.rd.s > 0 && Ma.rd.n.g > 1.5) break;
            if (Ma.doBreak = !1, Ma.rd.s < 0) {
              for (Ma.rwn of this.rightWallNodes) if (1 == Math.abs(Ma.rd.n.i - Ma.rwn.i)) {
                Ma.doBreak = !0;
                break
              }
              if (Ma.doBreak) break;
              this.rightWallNodes.push(Ma.rd.n),
              Ma.rightIndex = this.wallsToDraw.length
            } else {
              for (Ma.lwn of this.leftWallNodes) if (1 == Math.abs(Ma.rd.n.i - Ma.lwn.i)) {
                Ma.doBreak = !0;
                break
              }
              if (Ma.doBreak) break;
              this.leftWallNodes.push(Ma.rd.n),
              Ma.leftIndex = this.wallsToDraw.length
            }
            Ma.d = Ia + 0.1,
            Ma.na.set(Ma.rd.n.p.x - Ma.rd.n.n.x * Ma.d * Ma.rd.s, Ma.rd.n.p.z - Ma.rd.n.n.z * Ma.d * Ma.rd.s),
            this.wallsToDraw.push([Ma.node[0],
            Ma.node[1],
            Ma.na.x - this.originPos.x - Ma.offset[0],
            Ma.na.y - this.originPos.z - Ma.offset[1],
            Ma.rd.n]),
            this.wallOffsets.push(Ma.offset);
            break
          }
          1 == this.rightWallNodes.length && (this.wallsToDraw.splice(Ma.rightIndex, 1), this.wallOffsets.splice(Ma.rightIndex, 1), Ma.rightIndex < Ma.leftIndex && Ma.leftIndex--),
          1 == this.leftWallNodes.length && (this.wallsToDraw.splice(Ma.leftIndex, 1), this.wallOffsets.splice(Ma.leftIndex, 1)),
          this.initialised = !0,
          this.ready = this.curWallIndex >= this.wallsToDraw.length
        }
      }
      buildNextWall() {
        if (this.initialised) {
          if (this.curVertIndex >= Aa || this.curWallIndex >= this.wallsToDraw.length || !this.renderWalls) return this.ready = !0,
          void this.finalise();
          for (Ma.cwi = this.wallsToDraw.length - 1 - this.curWallIndex, Ma.nodes = this.wallsToDraw[Ma.cwi], Ma.offset = this.wallOffsets[Ma.cwi], Ma.na.set(Ma.nodes[0], Ma.nodes[1]), Ma.nb.set(Ma.nodes[2], Ma.nodes[3]), Ma.d = Ma.na.distanceTo(Ma.nb), Ma.t.subVectors(Ma.nb, Ma.na).normalize(), Ma.ti.set( - Ma.t.y, Ma.t.x), Ma.fieldToTile = {
            x: Ma.offset[0],
            z: Ma.offset[1]
          }, Ma.fieldToWorld = {
            x: Ma.fieldToTile.x + this.originPos.x,
            z: Ma.fieldToTile.z + this.originPos.z
          }, Ma.refreshIndex = !0, Ma.n = Ma.nodes[4], Ma.nearWall = !!Ma.n, Ma.distanceBetween = 0, Ma.minDist = Ma.n ? 1 : 10, Ma.hOffset = this.originPos.y + 0.6, Ma.doBreak = !1; ; ) {
            if (Ma.d < Ma.minDist ? (Ma.na.copy(Ma.nb), Ma.hOffset += 0.2, Ma.distanceBetween = Ma.d, Ma.doBreak = !0) : (Ma.na.x += Ma.t.x * Ma.distanceBetween, Ma.na.y += Ma.t.y * Ma.distanceBetween), Ma.nextVert.copy(Ma.na), Ma.nearWall && Ma.d < 15 ? (Ma.rd = it(Ma.nextVert.x + Ma.fieldToWorld.x, Ma.nextVert.y + Ma.fieldToWorld.z, Ma.n), Ma.h = ht.lerpHeightGlobal(Ma.nextVert.x + Ma.fieldToWorld.x, Ma.nextVert.y + Ma.fieldToWorld.z, Ma.rd, this.getXZ)) : Ma.h = this.getXZQuick(Ma.nextVert.x + Ma.fieldToTile.x, Ma.nextVert.y + Ma.fieldToTile.z), Ma.nextVert.x += Ma.fieldToTile.x, Ma.nextVert.y += Ma.fieldToTile.z, Ma.byWater = Ma.h < 5, Ma.h -= Ma.hOffset, Ma.nearWall && wh.value.detailLodIndex > 0 ? (this.verts[this.curVertIndex++] = Ma.nextVert.x + 0.2 * Ma.ti.x, this.verts[this.curVertIndex++] = Ma.h, this.verts[this.curVertIndex++] = Ma.nextVert.y + 0.2 * Ma.ti.y, this.verts[this.curVertIndex++] = Ma.nextVert.x + 0.1 * Ma.ti.x, this.verts[this.curVertIndex++] = Ma.h + ya, this.verts[this.curVertIndex++] = Ma.nextVert.y + 0.1 * Ma.ti.y, this.verts[this.curVertIndex++] = Ma.nextVert.x - 0.1 * Ma.ti.x, this.verts[this.curVertIndex++] = Ma.h + ya, this.verts[this.curVertIndex++] = Ma.nextVert.y - 0.1 * Ma.ti.y, this.verts[this.curVertIndex++] = Ma.nextVert.x - 0.2 * Ma.ti.x, this.verts[this.curVertIndex++] = Ma.h, this.verts[this.curVertIndex++] = Ma.nextVert.y - 0.2 * Ma.ti.y, this.uvs[this.curUVIndex++] = 0, this.uvs[this.curUVIndex++] = 0.46 * Ma.d, this.uvs[this.curUVIndex++] = 0.44, this.uvs[this.curUVIndex++] = 0.46 * Ma.d, this.uvs[this.curUVIndex++] = 0.56, this.uvs[this.curUVIndex++] = 0.46 * Ma.d, this.uvs[this.curUVIndex++] = 1, this.uvs[this.curUVIndex++] = 0.46 * Ma.d, Ma.refreshIndex || (Ma.ii = this.curIndex - 4, this.index.push(Ma.ii, Ma.ii + 5, Ma.ii + 1, Ma.ii, Ma.ii + 4, Ma.ii + 5, Ma.ii + 1, Ma.ii + 6, Ma.ii + 2, Ma.ii + 1, Ma.ii + 5, Ma.ii + 6, Ma.ii + 2, Ma.ii + 7, Ma.ii + 3, Ma.ii + 2, Ma.ii + 6, Ma.ii + 7)), this.curIndex += 4, Ma.refreshIndex = !1) : Ma.byWater ? Ma.refreshIndex = !0 : (this.verts[this.curVertIndex++] = Ma.nextVert.x, this.verts[this.curVertIndex++] = Ma.h, this.verts[this.curVertIndex++] = Ma.nextVert.y, this.verts[this.curVertIndex++] = Ma.nextVert.x, this.verts[this.curVertIndex++] = Ma.h + ya, this.verts[this.curVertIndex++] = Ma.nextVert.y, this.uvs[this.curUVIndex++] = 0, this.uvs[this.curUVIndex++] = 0.46 * Ma.d, this.uvs[this.curUVIndex++] = 0.46, this.uvs[this.curUVIndex++] = 0.46 * Ma.d, Ma.refreshIndex || (Ma.ii = this.curIndex - 2, this.index.push(Ma.ii, Ma.ii + 3, Ma.ii + 1, Ma.ii, Ma.ii + 2, Ma.ii + 3)), this.curIndex += 2, Ma.refreshIndex = !1), Ma.n ? (Ma.distanceBetween = Math.min(10, Math.max(2, Ma.d / 2)), !Ma.byWater && Ma.d > 20 && Da.next() < 0.1 && this.addTree(Ma.nextVert.x, Ma.h, Ma.nextVert.y)) : (Ma.distanceBetween = this.distantResolution, !Ma.byWater && Da.next() < 0.2 && this.addTree(Ma.nextVert.x, Ma.h, Ma.nextVert.y)), Ma.d -= Ma.distanceBetween, this.curVertIndex >= Aa) {
              this.curWallIndex = this.wallsToDraw.length;
              break
            }
            if (Ma.doBreak) break
          }
          this.curWallIndex++,
          this.ready = this.curWallIndex >= this.wallsToDraw.length,
          this.ready && this.finalise()
        } else this.continueInitialise()
      }
      finalise() {
        if (this.leftWallNodes.length > 1) for (this.leftWallNodes = this.leftWallNodes.sort(((e, t) =>e.i < t.i ? - 1 : 1)), Ma.ci = 0; Ma.ci < this.leftWallNodes.length - 1; Ma.ci++) {
          var e;
          if (Ma.curNode = this.leftWallNodes[Ma.ci], Ma.target = this.leftWallNodes[Ma.ci + 1], Ma.target.i - Ma.curNode.i < 30) for (; Ma.curNode.i <= Ma.target.i; ) Ma.curNode.dswl = Ia,
          Ma.curNode = Ma.curNode.next;
           else (null === (e = Ma.curNode.prev) || void 0 === e ? void 0 : e.dswl) || (Ma.curNode.dsel = !0)
        }
        if (this.rightWallNodes.length > 1) for (this.rightWallNodes = this.rightWallNodes.sort(((e, t) =>e.i < t.i ? - 1 : 1)), Ma.ci = 0; Ma.ci < this.rightWallNodes.length - 1; Ma.ci++) {
          var t;
          if (Ma.curNode = this.rightWallNodes[Ma.ci], Ma.target = this.rightWallNodes[Ma.ci + 1], Ma.target.i - Ma.curNode.i < 30) for (; Ma.curNode.i <= Ma.target.i; ) Ma.curNode.dswr = - Ia,
          Ma.curNode = Ma.curNode.next;
           else (null === (t = Ma.curNode.prev) || void 0 === t ? void 0 : t.dswr) || (Ma.curNode.dser = !0)
        }
        this.geo.attributes.position.needsUpdate = !0,
        this.geo.attributes.uv.needsUpdate = !0,
        this.geo.setDrawRange(0, this.index.length),
        this.geo.setIndex(this.index),
        this.mesh.updateMatrix(),
        this.mesh.visible = !0
      }
    };
    const ka = new h.G,
    za = new Ps(103, 2 * Math.PI),
    Sa = new Ps(51, 0.4),
    Oa = {
      vecV: new h.W,
      vecH: new h.W
    };
    var La = class extends ct {
      constructor(...e) {
        super (...e),
        this.maxTreeCount = 5120,
        this.treeMapRows = [
        ],
        this.treeInstanceIndex = 0,
        this.treeMap = [
        ],
        this.currentTreeInstance = 0,
        this.treeInstances = [
        ],
        this.farWallRenderer = null,
        this.ready = !1,
        this.isDebug = !1,
        this.treeGenIndex = 0,
        this.treeMapTile = null,
        this.nearestNode = null,
        this.sea = null,
        this.seaRes = 10,
        this.seaDepth = null,
        this.seaDepthIndex = 0,
        this.seaRow = 0,
        this.maxTreeCount = ji,
        this.treeInstances.push(qn.getFarTreeInstance(this.maxTreeCount)),
        this.trees = this.treeInstances[0],
        this.trees.count = 0,
        this.geo.setAttribute('treeMask', new h.o(new Float32Array(this.geo.count), 1)),
        this.geo.attributes.treeMask.setUsage(h.l),
        this.treeMask = this.geo.attributes.treeMask.array,
        this.geo.setAttribute('grass', new h.o(new Float32Array(this.geo.count), 1)),
        this.geo.attributes.grass.setUsage(h.l),
        this.grassArr = this.geo.attributes.grass.array,
        this.mesh.add(this.trees),
        this.renderFarWalls = wh.value.detailLodIndex > 0,
        this.farWallRenderer = new ja(((e, t) =>this.heightmap.getXZ(e, t)), ((e, t) =>this.lookupHeight(e, t)), ((e, t) =>this.lookupTreemapDensity(e, t)), ((e, t, i) =>this.addWallTree(e, t, i)), this.renderFarWalls),
        this.renderFarWalls && this.mesh.add(this.farWallRenderer.mesh)
      }
      initGeneration(e, t, i, s, n, a, r) {
        super.initGeneration(e, t, i, s, n, a, r),
        this.treeInstanceIndex = 0,
        this.treeGenIndex = 0;
        for (let h of this.treeInstances) h.count = 0,
        h.visible = !1;
        this.currentTreeInstance = 0,
        this.trees = this.treeInstances[this.currentTreeInstance],
        this.trees.visible = !0,
        oa[e] || (oa[e] = {
        }),
        oa[e][t] = null,
        Fi ? (this.sea || (this.sea = this.getSeaMesh(), this.mesh.add(this.sea)), this.seaDepth = this.sea.geometry.attributes.depth.array, this.seaDepthIndex = 0, this.seaRow = 0, this.sea.visible = !0, this.sea.position.y = - this.mesh.position.y) : (this.sea && (this.sea.visible = !1), this.seaRow = Hi + 1),
        this.farWallRenderer.initialise(this.originPos, i, s, this.debug),
        (e + t) % 3 == 0 && (this.farWallRenderer.ready = !0)
      }
      resetOverlapMap(e, t) {
        super.resetOverlapMap(e, t),
        this.treeInstanceIndex = 0,
        this.treeGenIndex = 0,
        this.currentTreeInstance = 0,
        this.trees = this.treeInstances[this.currentTreeInstance],
        this.trees.visible = !0,
        this.farWallRenderer.initialise(this.originPos, this.originNode, e, this.debug, !1),
        (this.originCoords.x + this.originCoords.z) % 3 == 0 && (this.farWallRenderer.ready = !0)
      }
      getSeaMesh() {
        let e = new h.J(this.size, this.size, Hi, Hi);
        e.setAttribute('depth', new h.o(new Float32Array((Hi + 1) * (Hi + 1)), 1)),
        e.attributes.depth.setUsage(h.l);
        let t = new h.B(e, Zi);
        return t.position.x += this.size / 2,
        t.position.z += this.size / 2,
        t.rotation.x = - Math.PI / 2,
        t
      }
      generate() {
        if (this.genRow <= this.res) {
          for (this.genIndex = this.genRow * this.res1 * 3, Oa.i = 0; Oa.i <= this.res; Oa.i++) Oa.index = this.genIndex + 3 * Oa.i,
          Oa.index3 = this.genRow * this.res1 + Oa.i,
          Oa.x = this.verts[Oa.index] + this.originPos.x,
          Oa.z = this.verts[Oa.index + 2] + this.originPos.z,
          Oa.h = this.heightmap.getXZ(Oa.x, Oa.z),
          this.heights[Oa.index3] = Oa.h,
          this.heightOffsets[Oa.index3] = Oa.h - this.mesh.position.y,
          this.treeMask[Oa.index3] = 0,
          this.treeMap[Oa.index3] = qn.treeMap.getXZ(Oa.x, Oa.z),
          Oa.h < 100 ? this.grassArr[Oa.index3] = qn.grassMap.getXZ(Oa.x, Oa.z) / 3 * (Oa.h / 100) : this.grassArr[Oa.index3] = qn.grassMap.getXZ(Oa.x, Oa.z) / 3;
          return this.genRow > 0 && this.computeSquareNormalsRow(this.genRow - 1),
          this.genRow++,
          this.genRow > this.res && (this.computeSquareNormalsRow(this.genRow - 1), this.geo.attributes.normal.needsUpdate = !0, this.geo.attributes.curvature.needsUpdate = !0, this.geo.attributes.grass.needsUpdate = !0),
          !1
        }
        if (this.overlapIndex < this.overlapCells.length) {
          for (Oa.oz in Oa.ox = this.overlapCells[this.overlapIndex], this.overlapTile[Oa.ox]) this.overlapTile[Oa.ox][Oa.oz] < 0 || (Oa.index = Oa.ox * this.res1 + 1 * Oa.oz, this.heightOffsets[Oa.index] = this.heights[Oa.index] - this.mesh.position.y - (5 + 2 * this.overlapTile[Oa.ox][Oa.oz]));
          return this.overlapIndex++,
          !1
        }
        if (this.treeGenIndex < this.res) return this.computeTreeRow(this.treeGenIndex),
        this.treeGenIndex++,
        !1;
        if (!this.farWallRenderer.ready) return this.farWallRenderer.buildNextWall(),
        !1;
        if (this.seaRow <= Hi) {
          for (Oa.genIndex = this.seaRow * (Hi + 1), Oa.i = 0; Oa.i <= Hi; Oa.i++) this.seaDepth[Oa.genIndex + Oa.i] = this.lookupHeight(Oa.i / Hi * this.size, this.seaRow / Hi * this.size);
          return this.seaRow++,
          !1
        }
        return this.readyTrees(),
        this.geo.attributes.treeMask.needsUpdate = !0,
        Fi && (this.sea.geometry.attributes.depth.needsUpdate = !0),
        oa[this.originCoords.x][this.originCoords.z] = this.treeMask,
        this.mesh.visible && this.display(),
        this.ready = !0,
        !0
      }
      lookupTreemapDensity(e, t) {
        return e < 0 || e > this.size || t < 0 || t > this.size ? 0 : (Oa.cx = Math.max(e / 10, 0), Oa.cz = Math.max(t / 10, 0), Oa.ix = Math.min(this.size - 1, Math.floor(Oa.cx)), Oa.iz = Math.min(this.size - 1, Math.floor(Oa.cz)), Oa.index = this.res1 * Oa.ix + Oa.iz, this.treeMask[Oa.index])
      }
      addWallTree(e, t, i) {
        ka.position.set(e, t - 1, i),
        ka.rotation.y = za.next(),
        ka.scale.set(0.75, 0.75, 0.75),
        ka.updateMatrix(),
        this.trees.setMatrixAt(this.treeInstanceIndex, ka.matrix),
        this.trees.instanceVariant.array[this.treeInstanceIndex] = 0,
        ka.rotation.y > 2.1 && (ka.rotation.y > 4.2 ? this.trees.instanceVariant.array[this.treeInstanceIndex] = 2 : this.trees.instanceVariant.array[this.treeInstanceIndex] = 3),
        this.treeInstanceIndex++,
        this.treeInstanceIndex >= this.maxTreeCount && this.getNewTreeInstance()
      }
      readyTrees() {
        this.trees.instanceMatrix.needsUpdate = !0,
        this.trees.instanceVariant.needsUpdate = !0,
        this.trees.count = Math.min(this.maxTreeCount, Math.max(0, this.treeInstanceIndex))
      }
      getNewTreeInstance() {
        if (this.readyTrees(), this.currentTreeInstance++, this.treeInstances.length <= this.currentTreeInstance) {
          let e = qn.getFarTreeInstance(this.maxTreeCount);
          this.mesh.add(e),
          this.treeInstances.push(e)
        }
        this.trees = this.treeInstances[this.currentTreeInstance],
        this.trees.count = 0,
        this.trees.visible = !0,
        this.treeInstanceIndex = 0
      }
      computeTreeRow(e) {
        for (Oa.i = 0; Oa.i < this.res; Oa.i++) if (this.treeInstanceIndex >= this.maxTreeCount && this.getNewTreeInstance(), Oa.index = e * this.res1 * 3 + 3 * Oa.i, Oa.index3 = e * this.res1 + Oa.i, Oa.tm = this.treeMap[Oa.index3], 0 != Oa.tm && (Oa.doContinue = !1, this.heights[Oa.index3] < 0 && (this.treeMask[Oa.index3] = 0, Oa.doContinue = !0), this.heights[Oa.index3 + 1] < 0 && (this.treeMask[Oa.index3 + 1] = 0, Oa.doContinue = !0), this.heights[Oa.index3 + this.res1] < 0 && (this.treeMask[Oa.index3 + this.res1] = 0, Oa.doContinue = !0), this.heights[Oa.index3 + 1 + this.res1] < 0 && (this.treeMask[Oa.index3 + 1 + this.res1] = 0, Oa.doContinue = !0), !Oa.doContinue)) if (this.grads[Oa.index] > 0.2) this.treeMask[Oa.index3] = 0,
        this.treeMask[Oa.index3 + 1] = 0,
        this.treeMask[Oa.index3 + this.res1] = 0,
        this.treeMask[Oa.index3 + 1 + this.res1] = 0;
         else {
          Oa.tx = e,
          Oa.tz = Oa.i,
          Oa.jInit = 0,
          this.overlapTile && Oa.tx + 1 in this.overlapTile && Oa.tz + 1 in this.overlapTile[Oa.tx + 1] && (Oa.jInit = 100),
          Oa.treePositions = qn.getTreeMap(Oa.tm);
          for (Oa.j = Oa.jInit; Oa.j < Oa.treePositions.length; Oa.j += 2) Oa.ox = Oa.treePositions[Oa.j],
          Oa.oz = Oa.treePositions[Oa.j + 1],
          Oa.ha = Oa.ox * this.heightOffsets[Oa.index3 + this.res1] + (1 - Oa.ox) * this.heightOffsets[Oa.index3],
          Oa.hb = Oa.ox * this.heightOffsets[Oa.index3 + 1 + this.res1] + (1 - Oa.ox) * this.heightOffsets[Oa.index3 + 1],
          ka.position.set(10 * Oa.ox + 10 * Oa.tx, Oa.oz * Oa.hb + (1 - Oa.oz) * Oa.ha, 10 * Oa.oz + 10 * Oa.tz),
          ka.rotation.y = za.next(),
          Oa.tms = 0.15 * (Oa.tm - 1) + 1,
          Oa.hb = Oa.tms + (Sa.next() - 0.2) * Oa.tms,
          ka.scale.set(Oa.hb, Oa.hb, Oa.hb),
          ka.updateMatrix(),
          this.trees.setMatrixAt(this.treeInstanceIndex, ka.matrix),
          this.trees.instanceVariant.array[this.treeInstanceIndex] = 0,
          ka.rotation.y > 2.1 && (ka.rotation.y > 4.2 ? this.trees.instanceVariant.array[this.treeInstanceIndex] = 2 : this.trees.instanceVariant.array[this.treeInstanceIndex] = 3),
          this.treeInstanceIndex++,
          this.treeInstanceIndex >= this.maxTreeCount && this.getNewTreeInstance();
          Oa.hb = Oa.tm / 3,
          this.treeMask[Oa.index3] = Math.max(Oa.hb, this.treeMask[Oa.index3]),
          this.treeMask[Oa.index3 + 1] = Math.max(Oa.hb, this.treeMask[Oa.index3 + 1]),
          this.treeMask[Oa.index3 + this.res1] = Math.max(Oa.hb, this.treeMask[Oa.index3 + this.res1]),
          this.treeMask[Oa.index3 + 1 + this.res1] = Math.max(Oa.hb, this.treeMask[Oa.index3 + 1 + this.res1])
        }
      }
      display(e = !1) {
        super.display(e);
        for (let t of this.treeInstances) t.visible && (t.geometry.boundingSphere = this.geo.boundingSphere.clone());
        this.farWallRenderer.geo.boundingSphere = this.geo.boundingSphere.clone(),
        this.sea && (this.sea.geometry.boundingSphere = {
          center: {
            x: 0,
            y: 0,
            z: 0
          },
          radius: this.geo.boundingSphere.radius
        })
      }
      retire() {
        super.retire(),
        this.resetTrees(),
        delete oa[this.originCoords.x][this.originCoords.z],
        Object.keys(oa[this.originCoords.x]).length || delete oa[this.originCoords.x]
      }
      resetTrees() {
        for (; this.treeInstances.length > 1; ) qn.returnFarTreeInstance(this.treeInstances.pop());
        this.treeInstances[0].visible = !1
      }
    };
    class Ra extends pt {
      constructor(e) {
        super (),
        this.nearGridCell = va,
        this.farGridCell = La,
        this.groundMaterial = Mi,
        this.skinList = Object.keys(Yi.skins),
        this.skinIndex = 0,
        this.weatherList = Object.keys(Yi.weathers),
        this.curWeatherIndex = 0,
        this.skinWeatherList = [
        ],
        this.weatherOverride = !1,
        this.cycleWeathers = !1,
        this.weatherCycles = [
        ],
        this.weatherCycleIndex = 0,
        this.weatherCycleCurrentIndex = 0,
        this.weatherCycleInterval = 0,
        this.weatherCycleCounter = 0,
        this.colorsA = {
          col: new h.i,
          hemTop: new h.i,
          hemGround: new h.i,
          water: new h.i,
          waterSkyReflection: new h.i,
          underwater: new h.i,
          skyCol: new h.i,
          skyColFar: new h.i
        },
        this.colorsB = {
          col: new h.i,
          hemTop: new h.i,
          hemGround: new h.i,
          water: new h.i,
          waterSkyReflection: new h.i,
          underwater: new h.i,
          skyCol: new h.i,
          skyColFar: new h.i
        },
        this.weatherBlend = {
          amb: 0,
          dir: 0,
          hem: 0,
          fogNear: 0,
          fogFar: 0,
          col: new h.i,
          hemTop: new h.i,
          hemGround: new h.i,
          water: new h.i,
          waterSkyReflection: new h.i,
          underwater: new h.i,
          skyCol: new h.i,
          skyColFar: new h.i
        },
        this.topoList = Object.keys(Yi.topography),
        this.topoIndex = 0,
        this.ambiantAudio = null,
        this.windAudio = null,
        this.cachedTextures = {
        default:
          {
          }
        },
        this.onWeatherCycleChangedBound = this.onWeatherCycleChanged.bind(this),
        this.loadState = {
          init: !1,
          walls: !1,
          reset: !0,
          progress: 0
        },
        this.lastVehicleIndex = 0,
        this.seaDepth = null,
        this.fogHeight = 0,
        this.dynamicFog = !1,
        this.fogUpdate = !1,
        this.inWater = !1,
        this.lerpOffset = 0,
        this.lerpCounter = 0,
        this.timeInterval = 1,
        this.weatherType = 0,
        this.curWeatherIndex = 0,
        this.audioLerp = 0,
        this.tCol = new h.i,
        this.getHeightAt = e,
        this.container = new h.G,
        this.config = Yi,
        Xs.initialise(e),
        this.container.add(Xs.container),
        this.wallController = new Ln(this.getHeightAt),
        this.container.add(this.wallController.container),
        this.signController = new Tn,
        this.bridgeController = new Wn(this.getHeightAt),
        this.catsEyesController = new Hn,
        this.container.add(this.catsEyesController.container),
        this.container.add(sa.container),
        wh.value.detailLodIndex > 0 && (this.container.add(aa.container), this.container.add(ha.container)),
        qn.buildMap(Yi.treemap),
        sa.reset(),
        aa.reset(),
        ha.reset(),
        T.addListener(L, this.onHeadlightsChanged.bind(this)),
        Ui.addListener(this.onWeatherCycleChangedBound),
        this.onWeatherCycleChanged()
      }
      onWeatherCycleChanged(e) {
        var t;
        if (0 != Ui.cycleLength && (null === (t = this.skin) || void 0 === t ? void 0 : t.cycles)) {
          for (this.cycleWeathers || (this.weatherCycleIndex = 0), this.cycleWeathers = !0, this.weatherCycles = this.skin.cycles, this.weatherCycleIndex = 0; this.weatherCycleIndex < this.weatherCycles.length && (this.weatherCycleCurrentList = this.weatherCycles[this.weatherCycleIndex], this.weatherCycleCurrentIndex = this.weatherCycleCurrentList.indexOf(this.skinWeatherList[this.curWeatherIndex]), !(this.weatherCycleCurrentIndex >= 0)); this.weatherCycleIndex++);
          this.weatherCycleCurrentIndex < 0 && (this.weatherCycleCurrentIndex = 0),
          this.weatherCycleInterval = Ui.cycleLength / this.weatherCycleCurrentList.length,
          this.weatherCycleCounter = 0,
          this.prepWeatherBlend()
        } else this.cycleWeathers = !1
      }
      updateConfig(e, t) {
        Ni(e, t)
      }
      sanitiseConfig(e, t = !1) {
        !t && this.skinList.includes(e.value.skin) || (e.set('skin', 'default', !0), e.set('weatherIndex', 1, !0))
      }
      destroy() {
        Xs.destroy(),
        this.ambientAudio.stop(),
        this.windAudio.stop(),
        this.container.traverse((e=>{
          e.geometry && e.geometry.dispose()
        })),
        this.container.clear();
        for (let e in this.cachedTextures) for (let t in this.cachedTextures[e]) if (this.cachedTextures[e][t].isTexture) this.cachedTextures[e][t].dispose();
         else for (let i in this.cachedTextures[e][t]) this.cachedTextures[e][t][i].isTexture && this.cachedTextures[e][t][i].dispose();
        delete this.cachedTextures,
        sa.destroy(),
        aa.destroy(),
        ha.destroy()
      }
      loader() {
        return 1
      }
      initialise(e, t, i) {
        this.seed = e;
        let s = t.topography;
        this.topoIndex = this.topoList.indexOf(s),
        delete this.heightmap,
        this.heightmap = new wt(e, Yi.topography[s].heightmap),
        de(Yi.topography[s].smoothWindow),
        Pe(Yi.topography[s].roadWidth),
        Fi || this.initSea(),
        i()
      }
      onMidlineReady() {
        this.lastVehicleIndex = st.vehicleIndex,
        this.signController.initialise(),
        this.bridgeController.initialise(),
        this.catsEyesController.initialise(),
        sa.revert(zi, Oi),
        aa.revert(Bi, Ri),
        ha.revert(Wi, Ri),
        this.sea && (this.sea.position.x = st.vehicleNode.p.x, this.sea.position.z = st.vehicleNode.p.z)
      }
      onGridReady() {
        this.wallController.initialise(),
        ha.initialiseVisible(),
        aa.initialiseVisible(),
        sa.initialiseVisible()
      }
      handleMidlineReset() {
        this.wallController.handleMidlineReset()
      }
      initSea() {
        let e = 2 * fe,
        t = new h.J(e, e, Hi, Hi);
        this.sea = new h.B(t, Zi),
        this.sea.rotation.x = - Math.PI / 2,
        this.sea.frustumCulled = !1,
        this.container.add(this.sea)
      }
      destroySea() {
        this.sea && (this.sea.geometry.dispose(), this.container.remove(this.sea), this.sea = null)
      }
      update(e) {
        var t;
        this.lastVehicleIndex < st.vehicleIndex && (this.lastVehicleIndex++, this.wallController.update(), this.signController.update(), this.bridgeController.update(), Xs.update(), aa.updateVisible(), ha.updateVisible(), sa.updateVisible(), this.sea && (this.sea.position.x = st.vehicleNode.p.x, this.sea.position.z = st.vehicleNode.p.z)),
        this.catsEyesController.update(),
        this.wallController.updateStaged(),
        (null === (t = Qe.parent) || void 0 === t ? void 0 : t.position) ? (Zi.userData.camPos.value.copy(Qe.parent.position), Fe.userData.camPos.value.copy(Qe.parent.position)) : (Zi.userData.camPos.value.copy(Qe.position), Fe.userData.camPos.value.copy(Qe.position)),
        Zi.userData.time.value = 2 * I.appTime,
        Zi.uniformsNeedUpdate = !0,
        this.cycleWeathers ? this.updateWeather(e) : this.dynamicFog && this.fogUpdate && (this.dynamicFogNear = 1 - Math.min(1, T.position.y / 200), this.dynamicFogFar = 0.2 + 0.8 * this.dynamicFogNear, se(this.weather.col, we * this.weather.fogNear * this.dynamicFogNear, Math.max(50, we * this.weather.fogFar * this.dynamicFogFar))),
        this.fogUpdate = !this.fogUpdate,
        Qe.position.y < 0 ? (this.inWater = !0, this.underwaterCol = this.weather.underwater, this.cycleWeathers && (this.underwaterCol = this.weatherBlend.underwater.getHex()), ge.setHex(this.underwaterCol), this.fogVis = 2 * Math.max(0, 8 + Qe.position.y), se(this.underwaterCol, - 30 + this.fogVis, 10 + this.fogVis)) : this.inWater && (this.inWater = !1, this.cycleWeathers || (ge.setHex(this.weather.col), this.cycleWeathers ? this.updateWeather(e) : this.dynamicFog && this.fogUpdate ? (this.dynamicFogNear = 1 - Math.min(1, T.position.y / 200), this.dynamicFogFar = 0.2 + 0.8 * this.dynamicFogNear, se(this.weather.col, we * this.weather.fogNear * this.dynamicFogNear, Math.max(50, we * this.weather.fogFar * this.dynamicFogFar))) : se(this.weather.col, we * this.weather.fogNear, we * this.weather.fogFar)))
      }
      smoothLerp(e) {
        return - 1 * (3 - 2 * e) * e * e + 1
      }
      smootherLerp(e) {
        return (e * (6 * e - 15) + 10) * e * e * e * - 1 + 1
      }
      prepWeatherBlend() {
        this.weatherCycleCurrentIndex >= this.weatherCycleCurrentList.length && (this.weatherCycleIndex = (this.weatherCycleIndex + 1) % this.weatherCycles.length, this.weatherCycleCurrentList = this.weatherCycles[this.weatherCycleIndex], this.weatherCycleCurrentIndex = 0),
        this.wA = Yi.weathers[this.weatherCycleCurrentList[this.weatherCycleCurrentIndex]],
        this.weatherCycleCurrentIndex == this.weatherCycleCurrentList.length - 1 ? this.wB = Yi.weathers[this.weatherCycles[(this.weatherCycleIndex + 1) % this.weatherCycles.length][0]] : this.wB = Yi.weathers[this.weatherCycleCurrentList[this.weatherCycleCurrentIndex + 1]],
        this.colorsA.col.setHex(this.wA.col),
        this.colorsA.hemTop.setHex(this.wA.hemTop),
        this.colorsA.hemGround.setHex(this.wA.hemGround),
        this.colorsA.water.setHex(this.wA.water),
        this.colorsA.waterSkyReflection.setHex(this.wA.waterSkyReflection),
        this.colorsA.underwater.setHex(this.wA.underwater),
        this.colorsA.skyCol.setHex(this.wA.skyCol),
        this.colorsA.skyColFar.setHex(this.wA.skyColFar),
        this.colorsB.col.setHex(this.wB.col),
        this.colorsB.hemTop.setHex(this.wB.hemTop),
        this.colorsB.hemGround.setHex(this.wB.hemGround),
        this.colorsB.water.setHex(this.wB.water),
        this.colorsB.waterSkyReflection.setHex(this.wB.waterSkyReflection),
        this.colorsB.underwater.setHex(this.wB.underwater),
        this.colorsB.skyCol.setHex(this.wB.skyCol),
        this.colorsB.skyColFar.setHex(this.wB.skyColFar)
      }
      updateWeather(e) {
        this.weatherCycleCounter += e,
        this.weatherCycleCounter > this.weatherCycleInterval && (this.weatherCycleCounter -= this.weatherCycleInterval, this.weatherCycleCurrentIndex++, this.prepWeatherBlend(this.wA, this.wB));
        let t = this.weatherCycleCounter / this.weatherCycleInterval;
        t = this.smoothLerp(1 - t);
        let i = 1 - t;
        this.weatherBlend.amb = this.wA.amb * i + this.wB.amb * t,
        this.weatherBlend.dir = this.wA.dir * i + this.wB.dir * t,
        this.weatherBlend.hem = this.wA.hem * i + this.wB.hem * t,
        this.weatherBlend.fogNear = this.wA.fogNear * i + this.wB.fogNear * t,
        this.weatherBlend.fogFar = this.wA.fogFar * i + this.wB.fogFar * t,
        this.weatherBlend.col.copy(this.colorsA.col).lerp(this.colorsB.col, t),
        this.weatherBlend.hemTop.copy(this.colorsA.hemTop).lerp(this.colorsB.hemTop, t),
        this.weatherBlend.hemGround.copy(this.colorsA.hemGround).lerp(this.colorsB.hemGround, t),
        this.weatherBlend.water.copy(this.colorsA.water).lerp(this.colorsB.water, t),
        this.weatherBlend.waterSkyReflection.copy(this.colorsA.waterSkyReflection).lerp(this.colorsB.waterSkyReflection, t),
        this.weatherBlend.underwater.copy(this.colorsA.underwater).lerp(this.colorsB.underwater, t),
        this.weatherBlend.skyCol.copy(this.colorsA.skyCol).lerp(this.colorsB.skyCol, t),
        this.weatherBlend.skyColFar.copy(this.colorsA.skyColFar).lerp(this.colorsB.skyColFar, t),
        ce.intensity = this.weatherBlend.amb,
        ce.color.copy(this.weatherBlend.col),
        Na.emissive.copy(ce.color),
        pe.intensity = this.weatherBlend.hem,
        pe.color.copy(this.weatherBlend.hemTop),
        pe.groundColor.copy(this.weatherBlend.hemGround),
        ue.intensity = this.weatherBlend.dir,
        ue.color.copy(this.weatherBlend.col),
        ue.sunOffset.fromArray([0,
        100,
        0]),
        ge.copy(this.weatherBlend.col),
        T.headlightsManual || (this.wA.headlights && !this.wB.headlights ? T.setHeadlights(t < 0.5) : !this.wA.headlights && this.wB.headlights && T.setHeadlights(t > 0.5)),
        T.headlights && this.updateHeadlightIntensity(),
        this.wA.dynamicFog || this.wB.dynamicFog ? (this.vehicleFogLerp = Math.min(1, T.position.y / 200), this.wA.dynamicFog && !this.wB.dynamicFog ? this.dynamicFogNear = 1 - this.vehicleFogLerp * i : this.wB.dynamicFog && !this.wA.dynamicFog ? this.dynamicFogNear = 1 - this.vehicleFogLerp * t : this.dynamicFogNear = 1 - this.vehicleFogLerp, this.dynamicFogFar = 0.2 + 0.8 * this.dynamicFogNear, se(this.weatherBlend.col.getHex(), we * this.weatherBlend.fogNear * this.dynamicFogNear, Math.max(50, we * this.weatherBlend.fogFar * this.dynamicFogFar))) : se(this.weatherBlend.col.getHex(), we * this.weatherBlend.fogNear, we * this.weatherBlend.fogFar),
        Fe.userData.hasClouds.value = !1,
        Fe.userData.nearCol.value.copy(this.weatherBlend.skyCol),
        Fe.userData.farCol.value.copy(this.weatherBlend.skyColFar),
        Fe.uniformsNeedUpdate = !0,
        Zi.color.copy(this.weatherBlend.water),
        Zi.userData.sunCol.value = this.hexToArray(this.weatherBlend.col.getHex()),
        Zi.userData.skyCol.value = this.hexToArray(this.weatherBlend.waterSkyReflection.getHex()),
        Zi.uniformsNeedUpdate = !0
      }
      updateHeadlightIntensity() {
        T.setHeadlightIntensity(Math.max(0.25, 3.25 - 2.5 * (ue.intensity + pe.intensity)))
      }
      onHeadlightsChanged() {
        this.catsEyesController.container.visible = T.headlights
      }
      nextSkin() {
        this.setSkin(this.skinList[++this.skinIndex % this.skinList.length]),
        this.onWeatherCycleChanged(Ui.value)
      }
      setTopography(e) {
        window.localStorage.setItem('config-scene-topography', e)
      }
      nextTopography() {
        this.setTopography(this.topoList[++this.topoIndex % this.topoList.length])
      }
      loadGroundMaterialSkin(e, t, i, s, n = 4) {
        this.skin[e] ? (i[e] || (i[e] = X(this.skin[e], n)), Mi.userData[t].value = i[e]) : (s[e] || (s[e] = X(Yi.skins.default[e], n)), Mi.userData[t].value = s[e])
      }
      getSkinName(e) {
        var t;
        return (null === (t = Yi.skins[e]) || void 0 === t ? void 0 : t.name) || e
      }
      setScene(e) {
        this.setSkin(e.skin),
        this.setWeatherIndex(e.weatherIndex % this.skinWeatherList.length),
        this.onWeatherCycleChanged(Ui.value)
      }
      setSkin(e) {
        this.skinName = e;
        let t = Yi.skins.default;
        this.skin = Yi.skins[e],
        this.cachedTextures[e] || (this.cachedTextures[e] = {
        });
        let i = this.cachedTextures[e],
        s = this.cachedTextures.default;
        this.loadGroundMaterialSkin('grass', 'grassMap', i, s, 2),
        this.loadGroundMaterialSkin('forest', 'forestMap', i, s),
        this.loadGroundMaterialSkin('heather', 'heatherMap', i, s),
        this.loadGroundMaterialSkin('gravel', 'gravelMap', i, s),
        this.loadGroundMaterialSkin('rock', 'rockMap', i, s),
        this.loadGroundMaterialSkin('sand', 'sandMap', i, s),
        this.loadGroundMaterialSkin('roadBase', 'roadBaseMap', i, s),
        this.skin.road ? (i.road || (i.road = X(this.skin.road, 8)), Be.map = i.road) : (s.road || (s.road = X(t.road, 8)), Be.map = s.road),
        Mi.userData.colouration.value = t.foliage.grassColouration,
        Ei[0].userData.colouration.value = t.foliage.grassColouration,
        Ei[1].userData.colouration.value = t.foliage.grassColouration,
        Pi[0].userData.colouration.value = t.foliage.treeColouration,
        Pi[1].userData.colouration.value = t.foliage.treeColouration,
        this.skin.foliage && (this.skin.foliage.trees ? (i.foliage || (i.foliage = {
        }), i.foliage.trees || (i.foliage.trees = [
          X(this.skin.foliage.trees[0], 4),
          X(this.skin.foliage.trees[1], 4)
        ]), Pi[0].map = i.foliage.trees[0], Pi[1].map = i.foliage.trees[1], this.skin.foliage.treesb && wh.value.detailLodIndex > 0 ? (i.foliage.treesb || (i.foliage.treesb = [
          X(this.skin.foliage.treesb[0], 4),
          X(this.skin.foliage.treesb[1], 4)
        ]), Pi[0].userData.mapb.value = i.foliage.treesb[0], Pi[1].userData.mapb.value = i.foliage.treesb[1], Pi[0].userData.highDef.value = !0, Pi[1].userData.highDef.value = !0) : (Pi[0].userData.mapb.value = null, Pi[1].userData.mapb.value = null, Pi[0].userData.highDef.value = !1, Pi[1].userData.highDef.value = !1)) : (s.foliage || (s.foliage = {
        }), s.foliage.trees || (s.foliage.trees = [
          X(t.foliage.trees[0], 4),
          X(t.foliage.trees[1], 4)
        ]), Pi[0].map = s.foliage.trees[0], Pi[1].map = s.foliage.trees[1]), 'grass' in this.skin.foliage ? (i.foliage || (i.foliage = {
        }), i.foliage.grass || (i.foliage.grass = X(this.skin.foliage.grass, 4)), Ei[0].map = i.foliage.grass) : (s.foliage || (s.foliage = {
        }), s.foliage.grass || (s.foliage.grass = X(t.foliage.grass, 4)), Ei[0].map = s.foliage.grass), 'bush' in this.skin.foliage ? (i.foliage || (i.foliage = {
        }), i.foliage.bush || (i.foliage.bush = X(this.skin.foliage.bush, 4)), Ei[1].map = i.foliage.bush) : (s.foliage || (s.foliage = {
        }), s.foliage.bush || (s.foliage.bush = X(t.foliage.bush, 4)), Ei[1].map = s.foliage.bush), this.skin.foliage.grassColouration && (Mi.userData.colouration.value = this.skin.foliage.grassColouration, Ei[0].userData.colouration.value = this.skin.foliage.grassColouration, Ei[1].userData.colouration.value = this.skin.foliage.grassColouration), this.skin.foliage.treeColouration && (Pi[0].userData.colouration.value = this.skin.foliage.treeColouration, Pi[1].userData.colouration.value = this.skin.foliage.treeColouration)),
        Mi.uniformsNeedUpdate = !0,
        Ei[0].uniformsNeedUpdate = !0,
        Ei[1].uniformsNeedUpdate = !0,
        Pi[0].uniformsNeedUpdate = !0,
        Pi[1].uniformsNeedUpdate = !0,
        this.skin.walls ? (i.walls || (i.walls = {
        }), s.walls || (s.walls = {
        }), jn.visible = !0, 'sea' in this.skin.walls ? (null == this.skin.walls.sea && (jn.visible = !1), i.walls.sea || (i.walls.sea = X(this.skin.walls.sea, 4)), jn.map = i.walls.sea) : (s.walls.sea || (s.walls.sea = X(t.walls.sea, 4)), jn.map = s.walls.sea), Dn.visible = !0, this.skin.walls.sea ? (i.walls.sea || (i.walls.sea = X(this.skin.walls.sea, 4)), Dn.map = i.walls.sea) : (s.walls.sea || (s.walls.sea = X(t.walls.sea, 4)), Dn.map = s.walls.sea), Fs.visible = !0, 'drystone' in this.skin.walls ? (null == this.skin.walls.drystone && (Fs.visible = !1), i.walls.drystone || (i.walls.drystone = X(this.skin.walls.drystone, 4)), Fs.map = i.walls.drystone) : (s.walls.drystone || (s.walls.drystone = X(t.walls.drystone, 4)), Fs.map = s.walls.drystone), 'fence' in this.skin.walls ? (i.walls.fence || (i.walls.fence = X(this.skin.walls.fence, 4)), vn.map = i.walls.fence) : (s.walls.fence || (s.walls.drystone = X(t.walls.fence, 4)), vn.map = s.walls.fence)) : (s.walls || (s.walls = {
        }), s.walls.drystone || (s.walls.drystone = X(t.walls.drystone, 4)), Fs.map = s.walls.drystone, s.walls.fence || (s.walls.fence = X(t.walls.fence, 4)), vn.map = s.walls.fence, s.walls.sea || (s.walls.sea = X(t.walls.sea, 4)), jn.map = s.walls.sea, Dn.map = s.walls.sea),
        Na.map = Fs.map,
        this.skin.friction ? (ze(this.skin.friction.road), Oe(this.skin.friction.side), Re(this.skin.friction.grass)) : (ze(1.4), Oe(0.95), Re(0.85)),
        this.weatherOverride = !1,
        this.skin.weathers ? (this.weatherOverride = !0, this.skinWeatherList = this.skin.weathers, this.setWeather(this.skinWeatherList[this.curWeatherIndex % this.skinWeatherList.length])) : this.setWeather(this.weatherList[this.curWeatherIndex % this.weatherList.length]),
        this.onWeatherCycleChanged(Ui.value)
      }
      setWeatherIndex(e) {
        this.curWeatherIndex = e,
        this.weatherOverride ? this.setWeather(this.skinWeatherList[e]) : this.setWeather(this.weatherList[e])
      }
      nextWeather() {
        this.weatherOverride ? this.setWeather(this.skinWeatherList[++this.curWeatherIndex % this.skinWeatherList.length]) : this.setWeather(this.weatherList[++this.curWeatherIndex % this.weatherList.length])
      }
      updateAudio() {
        var e,
        t;
        this.t = Math.min(1, T.speed / 35),
        this.t *= this.t,
        this.audioLerp = 0.9 * this.audioLerp + 0.1 * this.t,
        null === (e = this.ambientAudio) || void 0 === e || e.setVolume(1 - this.audioLerp),
        null === (t = this.windAudio) || void 0 === t || t.setVolume(0.8 * this.audioLerp)
      }
      hexToArray(e) {
        return this.tCol.setHex(e).toArray().concat(1)
      }
      setWeather(e) {
        var t,
        i,
        s,
        n;
        this.weather = Yi.weathers[e],
        this.weatherB = Yi.weathers.sunset;
        let a = Yi.weathers.default,
        r = (null === (t = this.weather) || void 0 === t || null === (i = t.audio) || void 0 === i ? void 0 : i.ambiance) || a.audio.ambiance;
        z.getAudio(r.src, (e=>{
          this.ambientAudio && this.ambientAudio.stop(),
          e.setLoop(!0),
          e.setLoopStart(r.ls),
          e.setLoopEnd(e.buffer.duration - r.le),
          this.ambientAudio = e,
          e.setVolume(0),
          e.play()
        }));
        let h = (null === (s = this.weather) || void 0 === s || null === (n = s.audio) || void 0 === n ? void 0 : n.wind) || a.audio.wind;
        z.getAudio(h.src, (e=>{
          this.windAudio && this.windAudio.stop(),
          e.setLoop(!0),
          e.setLoopStart(h.ls),
          e.setLoopEnd(e.buffer.duration - h.le),
          this.windAudio = e,
          e.setVolume(0),
          e.play()
        })),
        ce.intensity = this.weather.amb,
        ce.color.setHex(this.weather.col),
        Na.emissive.copy(ce.color),
        pe.intensity = this.weather.hem,
        pe.color.setHex(this.weather.hemTop || this.weather.col),
        pe.groundColor.setHex(this.weather.hemGround || this.weather.col),
        ue.intensity = this.weather.dir,
        ue.color.setHex(this.weather.col),
        ue.sunOffset.fromArray(this.weather.sunPos || [
          0,
          100,
          0
        ]),
        ge.setHex(this.weather.col),
        T.setHeadlightColour(16777215),
        se(this.weather.col, we * this.weather.fogNear, we * this.weather.fogFar),
        this.dynamicFog = !!this.weather.dynamicFog,
        this.cachedTextures[e] || (this.cachedTextures[e] = {
        });
        let o = this.cachedTextures[e],
        l = this.cachedTextures.default;
        Fe.userData.hasClouds.value = !0,
        'skyMap' in this.weather ? null == this.weather.skyMap ? Fe.userData.hasClouds.value = !1 : (o.skyMap || (o.skyMap = X(this.weather.skyMap, 2)), Fe.map = o.skyMap) : (l.skyMap || (l.skyMap = X(a.skyMap, 2)), Fe.map = l.skyMap),
        this.weather.skyCol ? (Fe.userData.nearCol.value.setHex(this.weather.skyCol), Fe.userData.farCol.value.setHex(this.weather.skyColFar)) : (Fe.userData.nearCol.value.setHex(a.skyCol), Fe.userData.farCol.value.setHex(a.skyColFar)),
        Fe.uniformsNeedUpdate = !0,
        Zi.visible = !0,
        'water' in this.weather ? (null == this.weather.water && (Zi.visible = !1), Zi.color.setHex(this.weather.water), Zi.userData.sunCol.value = this.hexToArray(this.weather.col), Zi.userData.skyCol.value = this.hexToArray(this.weather.waterSkyReflection || a.waterSkyReflection), Zi.uniformsNeedUpdate = !0) : Zi.color.setHex(a.water),
        T.setHeadlights(!!this.weather.headlights),
        this.onWeatherCycleChanged(Ui.value)
      }
    }
    Ra.config = Yi,
    Ra.sceneName = 'Peaks';
    var Ta = Ra;
    const Pa = {
    },
    Ga = 2 * Math.PI;
    var Ba = class extends ut {
      constructor(...e) {
        super (...e),
        this.gradients = [
        ],
        this.scale = 4000,
        this.heightOffset = 150,
        this.heightInitial = 1,
        this.resolution = 2,
        this.depth = 3,
        this.upscale = 5,
        this.cache = {
        },
        this.cacheAccess = {
        },
        this.cacheCount = 0,
        this.maxCached = 15,
        this.craterLayers = 3,
        this.craterDepth = 2,
        this.craterCache = {
        },
        this.cellScaleMetres = 1500,
        this.cellScaleWorld = 1000,
        this.squared = !1,
        this.compound = !1,
        this.useQuick = !1;
        let t = e[1] || {
        };
        this.seed = e[0] || Ve,
        this.heightScale = t.heightScale || 1,
        this.heightInitial = t.heightInitial || 1,
        this.resolution = t.resolution || 5,
        this.depth = t.depth || 3,
        this.upscale = t.upscale || 3,
        this.heightOffset = t.heightOffset || 0,
        this.upscaleFactor = t.upscaleFactor || 2,
        this.craterLayers = null == t.craterLayers ? 2 : t.craterLayers,
        this.craterProb = t.craterProb || 0.33,
        this.craterDepth = t.craterDepth || 2,
        this.squared = t.squared || !1,
        this.squareLayers = t.squareLayers || this.depth,
        this.compound = t.compound || !1,
        this.cellScaleWorld = this.cellScaleMetres
      }
      clearCache() {
        if (this.cacheCount <= this.maxCached) return;
        let e,
        t;
        for (e in this.cache) {
          for (t in this.cache[e]) if (this.cacheAccess[e][t]) this.cacheAccess[e][t] = !1;
           else if (delete this.cache[e][t], delete this.cacheAccess[e][t], e in this.craterCache && delete this.craterCache[e][t], this.cacheCount--, this.cacheCount <= this.maxCached) break;
          if (this.cacheCount <= this.maxCached) break
        }
        ts['heightmap-cache'] = this.cacheCount
      }
      checkCellCrater(e, t, i, s, n) {
        var a;
        return this.craterCache[e] && this.craterCache[e][t] || this.cacheCellCraters(e, t),
        null === (a = this.craterCache[e][t][n][Math.floor(i * (2 * (n + 1)))]) || void 0 === a ? void 0 : a[Math.floor(s * (2 * (n + 1)))]
      }
      cacheCellCraters(e, t) {
        let i,
        s,
        n,
        a,
        r,
        h,
        o,
        l,
        d,
        c,
        p,
        u,
        g = [
        ],
        m = 0,
        x = new window.alea('' + this.seed + e + t);
        for (let v = 0; v < this.craterLayers; v++) {
          for (i = {
          }, s = 2 * (v + 1), n = 1 / (2 * s), h = 1 / s / 2, o = h / 2, r = h - o, m = this.craterProb * s * s, a = 0; a < m; a++) c = o + x() * r,
          l = h - c,
          d = - l / 2,
          p = Math.floor(x() * s),
          u = Math.floor(x() * s),
          i[p] || (i[p] = {
          }),
          i[p][u] = {
            x: p / s + n + (x() * l + d),
            y: - (1 + x()) * this.craterDepth,
            z: u / s + n + (x() * l + d),
            r: c,
            r2: c * c,
            r3: c * c * c * 0.512
          };
          g.push(i)
        }
        return this.craterCache[e] || (this.craterCache[e] = {
        }),
        this.craterCache[e][t] = g,
        g
      }
      generateCell(e, t) {
        let i,
        s,
        n,
        a,
        r = new window.alea(this.seed + e + t),
        h = this.resolution,
        o = [
        ],
        l = [
        ];
        for (i = 0; i < this.depth; i++) {
          for (l = [
          ], s = 0; s < h; s++) for (l.push([]), n = 0; n < h; n++) a = r() * Ga,
          l[s].push({
            x: Math.cos(a),
            y: Math.sin(a)
          });
          o.push(l),
          h = this.getNextDepthResolution(h, i)
        }
        return o
      }
      getNextDepthResolution(e, t) {
        return Math.round(e * this.upscaleFactor)
      }
      dotGridGradient(e, t, i, s, n) {
        return this.grad = e[t][i],
        (s - t) * this.grad.x + (n - i) * this.grad.y
      }
      sharpLerp(e, t, i) {
        return (t - e) * i + e
      }
      smoothLerp(e, t, i) {
        return (t - e) * (3 - 2 * i) * i * i + e
      }
      smootherLerp(e, t, i) {
        return (i * (6 * i - 15) + 10) * i * i * i * (t - e) + e
      }
      getXZ(e, t, i) {
        for (Pa.layer of(Pa.d = 0, Pa.h = 0, Pa.sq = this.resolution, Pa.sqb = Pa.sq - 1, Pa.wx = e / this.cellScaleWorld, Pa.wz = t / this.cellScaleWorld, Pa.ox = Math.floor(Pa.wx), Pa.oz = Math.floor(Pa.wz), Pa.px = Pa.wx - Pa.ox, Pa.pz = Pa.wz - Pa.oz, Pa.cell = this.getCell(Pa.ox, Pa.oz), i = i || this.depth, Pa.depth = 0, Pa.h = this.heightInitial, Pa.heightFactor = 1, Pa.ch = 0, Pa.cell)) {
          if (Pa.depth == i) break;
          Pa.sx = Pa.px * Pa.sq,
          Pa.sz = Pa.pz * Pa.sq,
          Pa.ix = Math.floor(Pa.sx),
          Pa.ix1 = Pa.ix + 1,
          Pa.iz = Math.floor(Pa.sz),
          Pa.iz1 = Pa.iz + 1,
          Pa.qx = Pa.sx - Pa.ix,
          Pa.qz = Pa.sz - Pa.iz,
          Pa.n0 = this.dotGridGradient(Pa.layer, Pa.ix, Pa.iz, Pa.sx, Pa.sz),
          Pa.ix1 < Pa.sq ? Pa.n1 = this.dotGridGradient(Pa.layer, Pa.ix1, Pa.iz, Pa.sx, Pa.sz) : Pa.n1 = this.dotGridGradient(this.getCell(Pa.ox + 1, Pa.oz) [Pa.depth], 0, Pa.iz, Pa.sx - Pa.sq, Pa.sz),
          Pa.int0 = this.smootherLerp(Pa.n0, Pa.n1, Pa.qx),
          Pa.iz1 < Pa.sq ? (Pa.n0 = this.dotGridGradient(Pa.layer, Pa.ix, Pa.iz1, Pa.sx, Pa.sz), Pa.ix1 < Pa.sq ? Pa.n1 = this.dotGridGradient(Pa.layer, Pa.ix1, Pa.iz1, Pa.sx, Pa.sz) : Pa.n1 = this.dotGridGradient(this.getCell(Pa.ox + 1, Pa.oz) [Pa.depth], 0, Pa.iz1, Pa.sx - Pa.sq, Pa.sz)) : (Pa.n0 = this.dotGridGradient(this.getCell(Pa.ox, Pa.oz + 1) [Pa.depth], Pa.ix, 0, Pa.sx, Pa.sz - Pa.sq), Pa.ix1 < Pa.sq ? Pa.n1 = this.dotGridGradient(this.getCell(Pa.ox, Pa.oz + 1) [Pa.depth], Pa.ix1, 0, Pa.sx, Pa.sz - Pa.sq) : Pa.n1 = this.dotGridGradient(this.getCell(Pa.ox + 1, Pa.oz + 1) [Pa.depth], 0, 0, Pa.sx - Pa.sq, Pa.sz - Pa.sq)),
          Pa.int1 = this.smootherLerp(Pa.n0, Pa.n1, Pa.qx),
          Pa.heightFactor = this.resolution / Pa.sq,
          this.compound && (Pa.heightFactor *= Pa.h),
          Pa.cl = 1,
          Pa.depth < this.craterLayers && (Pa.craterFactor = 1 / (2 * (Pa.depth + 1)), Pa.c = this.checkCellCrater(Pa.ox, Pa.oz, Pa.px, Pa.pz, Pa.depth), Pa.c && (Pa.d = (Pa.c.x - Pa.px) * (Pa.c.x - Pa.px) + (Pa.c.z - Pa.pz) * (Pa.c.z - Pa.pz), Pa.d < Pa.c.r2 && (Pa.ch -= Pa.c.y * (1 - this.smoothLerpW(1 - Pa.d / Pa.c.r2)) * Pa.craterFactor * 0.5 * Pa.cl, Pa.d *= Math.sqrt(Pa.d), Pa.d < Pa.c.r3 && (Pa.d = Pa.d / Pa.c.r3, Pa.ch += Pa.c.y * (1 - this.smootherLerpW(1 - Pa.d)) * Pa.craterFactor * Pa.cl, Pa.cl = Math.min(Pa.cl, Pa.d))))),
          Pa.h += this.smootherLerp(Pa.int0, Pa.int1, Pa.qz) * Pa.heightFactor * Pa.cl,
          Pa.sq = this.getNextDepthResolution(Pa.sq, Pa.depth),
          Pa.depth++
        }
        return this.squared && (Pa.h *= Pa.h),
        Pa.h += Pa.ch,
        Pa.h * this.heightScale + this.heightOffset
      }
      getXZLayer(e, t, i) {
        for (Pa.layer of(Pa.d = 0, Pa.h = 0, Pa.sq = this.resolution, Pa.sqb = Pa.sq - 1, Pa.wx = e / this.cellScaleWorld, Pa.wz = t / this.cellScaleWorld, Pa.ox = Math.floor(Pa.wx), Pa.oz = Math.floor(Pa.wz), Pa.px = Pa.wx - Pa.ox, Pa.pz = Pa.wz - Pa.oz, Pa.cell = this.getCell(Pa.ox, Pa.oz), Pa.depth = 0, Pa.h = this.heightInitial, Pa.heightFactor = 1, Pa.ch = 0, Pa.cell)) if (Pa.depth < i) Pa.sq = this.getNextDepthResolution(Pa.sq, Pa.depth),
        Pa.depth++;
         else {
          if (Pa.depth == this.depth || Pa.depth > i) break;
          Pa.sx = Pa.px * Pa.sq,
          Pa.sz = Pa.pz * Pa.sq,
          Pa.ix = Math.floor(Pa.sx),
          Pa.ix1 = Pa.ix + 1,
          Pa.iz = Math.floor(Pa.sz),
          Pa.iz1 = Pa.iz + 1,
          Pa.qx = Pa.sx - Pa.ix,
          Pa.qz = Pa.sz - Pa.iz,
          Pa.n0 = this.dotGridGradient(Pa.layer, Pa.ix, Pa.iz, Pa.sx, Pa.sz),
          Pa.ix1 < Pa.sq ? Pa.n1 = this.dotGridGradient(Pa.layer, Pa.ix1, Pa.iz, Pa.sx, Pa.sz) : Pa.n1 = this.dotGridGradient(this.getCell(Pa.ox + 1, Pa.oz) [Pa.depth], 0, Pa.iz, Pa.sx - Pa.sq, Pa.sz),
          Pa.int0 = this.smootherLerp(Pa.n0, Pa.n1, Pa.qx),
          Pa.iz1 < Pa.sq ? (Pa.n0 = this.dotGridGradient(Pa.layer, Pa.ix, Pa.iz1, Pa.sx, Pa.sz), Pa.ix1 < Pa.sq ? Pa.n1 = this.dotGridGradient(Pa.layer, Pa.ix1, Pa.iz1, Pa.sx, Pa.sz) : Pa.n1 = this.dotGridGradient(this.getCell(Pa.ox + 1, Pa.oz) [Pa.depth], 0, Pa.iz1, Pa.sx - Pa.sq, Pa.sz)) : (Pa.n0 = this.dotGridGradient(this.getCell(Pa.ox, Pa.oz + 1) [Pa.depth], Pa.ix, 0, Pa.sx, Pa.sz - Pa.sq), Pa.ix1 < Pa.sq ? Pa.n1 = this.dotGridGradient(this.getCell(Pa.ox, Pa.oz + 1) [Pa.depth], Pa.ix1, 0, Pa.sx, Pa.sz - Pa.sq) : Pa.n1 = this.dotGridGradient(this.getCell(Pa.ox + 1, Pa.oz + 1) [Pa.depth], 0, 0, Pa.sx - Pa.sq, Pa.sz - Pa.sq)),
          Pa.int1 = this.smootherLerp(Pa.n0, Pa.n1, Pa.qx),
          Pa.heightFactor = this.resolution / Pa.sq,
          this.compound && (Pa.heightFactor *= Pa.h),
          Pa.cl = 1,
          Pa.depth < this.craterLayers && (Pa.craterFactor = 1 / (2 * (Pa.depth + 1)), Pa.c = this.checkCellCrater(Pa.ox, Pa.oz, Pa.px, Pa.pz, Pa.depth), Pa.c && (Pa.d = (Pa.c.x - Pa.px) * (Pa.c.x - Pa.px) + (Pa.c.z - Pa.pz) * (Pa.c.z - Pa.pz), Pa.d < Pa.c.r2 && (Pa.ch -= Pa.c.y * (1 - this.smoothLerpW(1 - Pa.d / Pa.c.r2)) * Pa.craterFactor * 0.5 * Pa.cl, Pa.d *= Math.sqrt(Pa.d), Pa.d < Pa.c.r3 && (Pa.d = Pa.d / Pa.c.r3, Pa.ch += Pa.c.y * (1 - this.smootherLerpW(1 - Pa.d)) * Pa.craterFactor * Pa.cl, Pa.cl = Math.min(Pa.cl, Pa.d))))),
          Pa.h += this.smootherLerp(Pa.int0, Pa.int1, Pa.qz) * Pa.heightFactor * Pa.cl,
          Pa.sq = this.getNextDepthResolution(Pa.sq, Pa.depth),
          Pa.depth++
        }
        return this.squared && (Pa.h *= Pa.h),
        Pa.h += Pa.ch,
        Pa.h * this.heightScale + this.heightOffset
      }
      smootherLerpW(e) {
        return (e * (6 * e - 15) + 10) * e * e * e * - 1 + 1
      }
      sharpLerpW(e) {
        return 1 - e
      }
      smoothLerpW(e) {
        return - 1 * (3 - 2 * e) * e * e + 1
      }
    },
    Wa = i.p + 'static/media/road_offworld.235fa320.webp',
    Ea = i.p + 'static/media/mars_road_base.4b28c294.webp',
    Za = i.p + 'static/media/mars_surface.4083a724.webp',
    Fa = i.p + 'static/media/mars_subsurface.d95fa5d1.webp',
    Ha = i.p + 'static/media/mars_surface_bump.65340168.webp',
    Qa = i.p + 'static/media/mars_cliff_bump.8e6fa674.webp',
    Ya = i.p + 'static/media/mars_shale.9fd99ef9.webp',
    Va = i.p + 'static/media/mars_shale_bump.c92f843f.webp',
    Ua = i.p + 'static/media/mars_rubble.c8241124.webp',
    Xa = i.p + 'static/media/mars_rubble_bump.80ebc535.webp',
    Ja = i.p + 'static/media/mars_rock.75c6c859.webp',
    qa = i.p + 'static/media/mars_rock_bump.15322551.webp',
    Ka = i.p + 'static/media/mars_cliff.3ae2933c.webp',
    _a = i.p + 'static/media/mars_barrier_wide.d7dc8819.webp',
    $a = i.p + 'static/media/venus_road_base.20746f01.webp',
    er = i.p + 'static/media/venus_surface.38f0fb31.webp',
    tr = i.p + 'static/media/venus_shale.bafde95f.webp',
    ir = i.p + 'static/media/venus_rubble.1f56f6fb.webp',
    sr = i.p + 'static/media/venus_rock.c3115f27.webp',
    nr = i.p + 'static/media/venus_cliff.fbb8e3df.webp',
    ar = i.p + 'static/media/road_venus.61168361.webp',
    rr = i.p + 'static/media/venus_barrier_wide.1b943c45.webp',
    hr = i.p + 'static/media/moon_surface.f0a08f87.webp',
    or = i.p + 'static/media/moon_rock.47e45865.webp',
    lr = i.p + 'static/media/moon_gravel.b53b019d.webp',
    dr = i.p + 'static/media/moon_shale.07a93da8.webp',
    cr = i.p + 'static/media/moon_cliff.4bb9ff9d.webp',
    pr = i.p + 'static/media/road_moon.c594cb0f.webp',
    ur = i.p + 'static/media/clouds_01.e03e365b.webp',
    gr = i.p + 'static/media/clouds_02.840643a8.webp',
    mr = i.p + 'static/media/ambiance_offworld.41a010f6.mp3',
    xr = i.p + 'static/media/wind_offworld_02.5468adb6.mp3',
    vr = i.p + 'static/media/crossfade_fine.0d1ec73b.webp',
    wr = i.p + 'static/media/crossfade_finest.da758a11.webp';
    const fr = {
      topography: {
        normal: {
          heightmap: {
            heightScale: 50,
            heightOffset: 500,
            heightInitial: 1.1,
            resolution: 1,
            craterLayers: 2,
            craterDepth: 0.75,
            upscaleFactor: 2.5,
            depth: 4,
            midlineDepth: 5,
            squared: !0,
            compound: !0
          },
          roadWidth: 3,
          smoothWindow: 7
        },
        hard: {
          heightmap: {
            heightScale: 40,
            heightOffset: 500,
            heightInitial: 1,
            resolution: 2,
            craterLayers: 3,
            craterDepth: 1.5,
            upscaleFactor: 2,
            depth: 5,
            midlineDepth: 5,
            squared: !0,
            compound: !1
          },
          roadWidth: 2.8,
          smoothWindow: 5
        },
        easy: {
          heightmap: {
            heightScale: 45,
            heightOffset: 500,
            heightInitial: 1.5,
            resolution: 2,
            craterLayers: 2,
            craterDepth: 0.75,
            upscaleFactor: 2,
            depth: 3,
            midlineDepth: 5,
            squared: !1,
            compound: !0
          },
          roadWidth: 3.2,
          smoothWindow: 7
        },
        flat: {
          heightmap: {
            heightScale: 0,
            heightOffset: 50,
            resolution: 1,
            depth: 1,
            upscale: 1
          },
          roadWidth: 20,
          smoothWindow: 7
        }
      },
      weathers: {
      default:
        {
          audio: {
            ambiance: {
              src: mr,
              ls: 0.1,
              le: 0.1
            },
            wind: {
              src: xr,
              ls: 0.07,
              le: 0.07
            }
          },
          water: 11378325,
          col: 16121855,
          hemTop: 6710886,
          hemGround: 16777215,
          skyCol: 5197130,
          skyColFar: 15904116,
          skyMap: ur,
          amb: 0.2,
          hem: 0.3,
          dir: 0.5,
          fogNear: 0,
          fogFar: 1,
          sunPos: [
            0,
            100,
            0
          ]
        },
        mars: {
          audio: {
            ambiance: {
              src: mr,
              ls: 0.1,
              le: 0.1
            },
            wind: {
              src: xr,
              ls: 0.07,
              le: 0.07
            }
          },
          col: 16758891,
          skyCol: 11378567,
          skyColFar: 16761989,
          skyMap: null,
          hemTop: 16769727,
          hemGround: 0,
          water: 11378325,
          amb: 0.4,
          hem: 0.2,
          dir: 0.5,
          fogNear: - 0.05,
          fogFar: 1,
          sunPos: [
            0,
            100,
            - 75
          ]
        },
        marsRise: {
          col: 5338516,
          skyCol: 2368806,
          skyColFar: 5338516,
          skyMap: null,
          amb: 0,
          hem: 0.25,
          dir: 0.25,
          headlights: !0,
          headlightColour: 9694965,
          fogNear: - 0.1,
          fogFar: 1,
          sunPos: [
            0,
            100,
            200
          ]
        },
        marsNight: {
          col: 1579803,
          skyCol: 1183766,
          skyColFar: 1579803,
          skyMap: null,
          amb: 0.7,
          hem: 0.5,
          dir: 0.2,
          headlights: !0,
          headlightColour: 9694965
        },
        venus: {
          audio: {
            ambiance: {
              src: mr,
              ls: 0.1,
              le: 0.1
            },
            wind: {
              src: xr,
              ls: 0.1,
              le: 0.1
            }
          },
          col: 14729798,
          skyCol: 12624422,
          skyColFar: 12624422,
          skyMap: gr,
          water: null,
          amb: 0,
          hem: 0.5,
          dir: 0.5,
          fogNear: - 0.1,
          fogFar: 0.5
        },
        venusSet: {
          col: 6049571,
          skyCol: 2366739,
          skyColFar: 6049571,
          skyMap: gr,
          water: null,
          amb: 0.2,
          hem: 0.6,
          dir: 0.2,
          fogNear: - 0.2,
          fogFar: 0.5,
          headlights: !0,
          headlightColour: 16773557
        },
        moon: {
          audio: {
            ambiance: {
              src: null,
              ls: 0.1,
              le: 0.1
            },
            wind: {
              src: null,
              ls: 0.07,
              le: 0.07
            }
          },
          col: 1118480,
          skyCol: 1118480,
          skyColFar: 1118480,
          skyMap: null,
          hemTop: 16777215,
          hemGround: 0,
          water: null,
          amb: 2,
          hem: 0,
          dir: 15,
          fogNear: 0.25,
          fogFar: 1,
          sunPos: [
            - 25,
            100,
            75
          ]
        }
      },
      skins: {
      default:
        {
          name: 'mars',
          weathers: [
            'mars',
            'marsRise'
          ],
          surface: Za,
          subSurface: Fa,
          gravel: Ea,
          gravelBump: Qa,
          rock: Ja,
          cliff: Ka,
          shale: Ya,
          shaleBump: Va,
          rubble: Ua,
          rubbleBump: Xa,
          road: Wa,
          roadBase: Ea,
          friction: {
            road: 0.99,
            side: 0.95,
            grass: 0.9
          },
          walls: {
            barrier: _a
          }
        },
        venus: {
          name: 'venus',
          weathers: [
            'venus',
            'venusSet'
          ],
          surface: $a,
          subSurface: er,
          gravel: er,
          cliff: nr,
          rock: sr,
          shale: tr,
          rubble: ir,
          road: ar,
          roadBase: er,
          water: null,
          friction: {
            road: 0.99,
            side: 0.95,
            grass: 0.9
          },
          walls: {
            barrier: rr
          }
        },
        moon: {
          name: 'moon',
          weathers: [
            'moon'
          ],
          surface: hr,
          subSurface: or,
          gravel: lr,
          cliff: cr,
          rock: or,
          shale: dr,
          rubble: null,
          road: pr,
          roadBase: lr,
          water: null,
          friction: {
            road: 0.99,
            side: 0.9,
            grass: 0.8
          },
          walls: {
            barrier: rr
          }
        }
      }
    };
    let br = new h.F({
      map: X(Za, 0)
    });
    br.userData.surfaceMap = {
      value: null
    },
    br.userData.surfaceBump = {
      value: X(Ha, 0)
    },
    br.userData.subSurfaceMap = {
      value: null
    },
    br.userData.shaleMap = {
      value: null
    },
    br.userData.shaleBump = {
      value: X(Va, 4)
    },
    br.userData.rockMap = {
      value: null
    },
    br.userData.rockBump = {
      value: X(qa, 0)
    },
    br.userData.cliffMap = {
      value: null
    },
    br.userData.cliffBump = {
      value: X(Qa, 0)
    },
    br.userData.gravelMap = {
      value: null
    },
    br.userData.roadBaseMap = {
      value: null
    },
    br.userData.fadeRockMap = {
      value: X(vr, 4)
    },
    br.userData.fadeFiner = {
      value: X(wr, 4)
    },
    br.onBeforeCompile = e=>(e.uniforms.surfaceMap = Ar.userData.surfaceMap, e.uniforms.surfaceBump = Ar.userData.surfaceBump, e.uniforms.subSurfaceMap = Ar.userData.subSurfaceMap, e.uniforms.shaleMap = Ar.userData.shaleMap, e.uniforms.shaleBump = Ar.userData.shaleBump, e.uniforms.rockMap = Ar.userData.rockMap, e.uniforms.rockBump = Ar.userData.rockBump, e.uniforms.cliffMap = Ar.userData.cliffMap, e.uniforms.cliffBump = Ar.userData.cliffBump, e.uniforms.gravelMap = Ar.userData.gravelMap, e.uniforms.roadBaseMap = Ar.userData.roadBaseMap, e.uniforms.fadeRockMap = Ar.userData.fadeRockMap, e.uniforms.fadeFiner = Ar.userData.fadeFiner, e.vertexShader = e.vertexShader.replace('#include <displacementmap_pars_vertex>', '\n\nattribute float heightOffset;\nattribute float roadProximity;\nattribute float curvature;\nattribute vec2 wuv;\n\nvarying float height;\nvarying float steepness;\nvarying float roadProx;\nvarying float vCurvature;\nvarying vec2 vWv;\nvarying vec2 vWWv;\n\nuniform sampler2D displacementMap;\nuniform sampler2D fadeFiner;\n\nfloat wuvSize = 150.0;\n\nfloat map(float value, float min1, float max1, float min2, float max2) {\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\nvec3 upvec = vec3(0.0,1.0,0.0);\n\n'), e.vertexShader = e.vertexShader.replace('#include <displacementmap_vertex>', '\n\n  vec4 wPos = modelMatrix * vec4( position, 1.0 );\n  height = wPos.y + heightOffset;\n\n  vUv.x = wPos.x / 10.0;\n  vUv.y = wPos.z / 10.0;\n\n\n  // 0 is perfectly flat, 1 is 90 degrees\n  steepness = 1.0 - dot(normal, upvec);\n  steepness = clamp(steepness * 4.0, 0.0, 1.0);\n\n  // Anything up to 0.8 is 1\n  // 0.8 down to 0.6\n  // 0.6 and under is 0\n\n  // steepness = 1.0 - clamp((steepness - 0.6) / 0.2, 0.0, 1.0);\n  // steepness = 1.0 - map(steepness, 0.2, 0.7, 0.0, 1.0);\n\n  // steepness = 1.0 - steepness;//clamp((steepness * 2.0), 0.0, 1.0);\n  // steepness = map(steepness, 0.0, 1.0, 0.3, 0.7);\n\n  if(roadProximity < 0.0) {\n    roadProx = -roadProximity * 2.0;\n  } else {\n    roadProx = 0.0;\n  }\n  // roadProx = roadProximity;\n\n  // if(roadProx > -1.0) {\n  //   transformed.y += texture2D( fadeFiner, vUv ).r * 0.1;\n  // }\n\n  // MAGIC NUMBERS TO BE TWEAKED BASED ON HEIGHT PARAMETERS\n  if(curvature > 0.0) {\n    vCurvature = min(1.0, curvature * 5.0);\n  } else {\n    vCurvature = max(-1.0, curvature * 5.0);\n  }\n\n  // TODO PASS IN SCALE AS UNIFORM\n  vWv.x = wPos.x / wuvSize;\n  vWv.y = wPos.z / wuvSize;\n\n  vWWv.x = vWv.x / 10.0;\n  vWWv.y = vWv.y / 10.0;\n\n  transformed += vec3(0.0, heightOffset, 0.0);\n\n  // Experimenting with displacement map\n  if(steepness > 0.3) {\n    transformed += normalize( objectNormal ) * ( texture2D( fadeFiner, vUv ).x * (steepness-0.3) * 0.5 );\n  }\n\n'), e.fragmentShader = e.fragmentShader.replace('#include <map_pars_fragment>', '\n\n  varying float height;\n  varying float steepness;\n  varying float roadProx;\n  varying float vCurvature;\n  varying vec2 vWv;\n  varying vec2 vWWv;\n\n  uniform sampler2D surfaceMap;\n  uniform sampler2D subSurfaceMap;\n  uniform sampler2D surfaceBump;\n  uniform sampler2D shaleMap;\n  uniform sampler2D shaleBump;\n  uniform sampler2D rockMap;\n  uniform sampler2D rockBump;\n  uniform sampler2D cliffMap;\n  uniform sampler2D cliffBump;\n  uniform sampler2D gravelMap;\n  uniform sampler2D gravelBump;\n  uniform sampler2D roadBaseMap;\n  uniform sampler2D fadeRockMap;\n  uniform sampler2D fadeFiner;\n\n\n  vec4 terrainBlend(vec4 tx1, float w1, vec4 tx2, float w2, float depth) {\n    // Perform the blending\n    float ma = max(tx1.a + w1, tx2.a + w2) - depth;\n    float b1 = max(tx1.a + w1 - ma, 0.0);\n    float b2 = max(tx2.a + w2 - ma, 0.0);\n\n    return ((tx1 * b1) + (tx2 * b2)) / (b1 + b2);\n  }\n\n'), e.fragmentShader = e.fragmentShader.replace('#include <map_fragment>', '\n\n  vec4 texelColor = texture2D( surfaceMap, vUv );\n\n  // Prep textures ahead of blending\n  vec4 surfaceTex = texture2D(surfaceMap, vUv); //vec4(0.7,0.7,0.0,1.0);\n  vec4 subSurfaceTex = texture2D(subSurfaceMap, vUv); //vec4(0.5,0.5,0.0,1.0);\n  vec4 shaleTex = texture2D(shaleMap, vUv);\n\n  vec4 rockTex = texture2D(rockMap, vUv); //vec4(0.3,0.3,0.1,1.0);\n\n  vec4 gravelTex = texture2D(gravelMap, vUv);\n  vec4 cliffTex = texture2D(cliffMap, vUv); //vec4(0.15,0.15,0.0,1.0);\n\n  // Get our fades at different scales\n  float fade0 = texture2D( fadeRockMap, vUv ).r;\n  float fade1 = texture2D( fadeRockMap, vWv ).r;\n  float fade2 = texture2D( fadeRockMap, vWWv ).r;\n\n  // Set alphas from maps etc.\n  float rockFade = texture2D(rockBump, vWv).r;\n  rockTex.a = texture2D(rockBump, vUv).r;\n  gravelTex.a = texture2D(gravelBump, vUv).r;\n  cliffTex.a = texture2D(cliffBump, vUv).r;\n  surfaceTex.a = texture2D(surfaceBump, vUv).r;\n  shaleTex.a = texture2D(shaleBump, vUv).r;\n\n  subSurfaceTex.a = fade1;\n\n  float roadProx2 = 1.0 - max(0.0, min(1.0, roadProx*0.25));\n\n  float w;\n\n  //// SAND/SURFACE\n\n  texelColor = mix(surfaceTex, subSurfaceTex, max(0.0,vCurvature-0.5)*fade2);\n\n  //// SHALE\n\n  if(vCurvature >= fade2) {\n    w = (vCurvature - fade2 * fade1) * roadProx2;\n\n    if(fade1 > 0.5) {\n      w *= 1.0 - (fade1 - 0.5) * 2.0;\n    }\n\n    w = min(0.6, w);\n    texelColor.a = 0.5;\n    texelColor = terrainBlend(texelColor, 1.0 - w, shaleTex, w, 0.1);\n  } else if(fade2 > 0.25) {\n    w = (fade2 - 0.25) * roadProx2;\n    texelColor = terrainBlend(texelColor, 1.0 - w, shaleTex, w, 0.1);\n  }\n\n  //// ROCK OUTCROPS\n\n  w = max(-0.8, ((vCurvature - fade2) * max(0.5, fade1))) * roadProx2;\n  rockTex.a -= rockFade;\n\n  if(w < 0.0) {\n    texelColor.a = 0.25 + fade2; //max(0.75, fade1);\n    texelColor = terrainBlend(texelColor, 1.0+w, rockTex, -w, 0.2);\n  } else if(fade1 > 0.5) {\n    texelColor.a = 0.25 + fade2;\n    w = (fade1 - 0.5) * 2.0;\n    texelColor = terrainBlend(texelColor, 1.0-w, rockTex, w, 0.2);\n  }\n\n  //// CLIFFS\n\n  if(steepness > 0.2) {\n    w = (steepness-0.2) + fade1 * 0.2;\n    texelColor = terrainBlend(texelColor, 1.0-w, cliffTex, w, 0.2);\n  }\n\n  //// ROAD PROXIMITY\n\n  if(roadProx > 0.0) {\n    w = min(1.0, (roadProx/2.5) - fade1*fade0);\n    texelColor = terrainBlend(texelColor, 1.0-w, gravelTex, w, 0.5);\n  }\n\n  texelColor.a = 1.0;\n\n  diffuseColor *= texelColor;\n\n'), e);
    const Ar = br,
    yr = (e, t) =>{
      Mr = Nr[Math.floor((e + t) / 2)],
      Dr = Ir[e],
      Cr = ye,
      kr()
    },
    Ir = [
      5,
      10,
      15,
      20
    ];
    let Dr = 10;
    const Nr = [
      500,
      1000,
      2000,
      3000
    ];
    let Mr = 1000;
    let Cr = 32;
    const jr = [
    ],
    kr = () =>{
      jr.length = 0;
      let e,
      t = new window.alea('bump');
      for (let i = 0; i < Cr; i++) {
        e = [
        ];
        for (let i = 0; i < Cr; i++) e.push(0.1 * t());
        e.push(e[0]),
        jr.push(e)
      }
      jr.push(jr[0])
    };
    yr(K, _),
    kr();
    var zr = fr;
    var Sr = {
      rock: {
        src: i(38),
        obj: null
      }
    };
    var Or = class {
      constructor(e, t) {
        this.loader = new is.a,
        this.assetCount = Object.keys(e).length,
        this.loadCount = 0,
        this.onComplete = t,
        this.loadedAssets = {
        };
        for (let i in e) this.loader.load(e[i].src.default, (e=>{
          this.loadedAssets[i] = e,
          this.onLoaded(i)
        }))
      }
      onLoaded(e) {
        ++this.loadCount >= this.assetCount && this.onComplete(this.loadedAssets)
      }
    },
    Lr = i.p + 'static/media/marsmarker.6a313c62.obj';
    const Rr = {
      black: new h.D({
        color: 5588019
      }),
      reflect: new h.D({
        color: 2293725,
        emissive: 2293725,
        emissiveIntensity: 0.2
      })
    };
    var Tr = class extends ns {
      constructor(...e) {
        super (...e),
        this.geoSource = Lr,
        this.objectType = 'VergeMarker',
        this.materials = Rr
      }
    },
    Pr = i.p + 'static/media/marsbarrier.c460e93d.obj';
    const Gr = {
      black: new h.D({
        color: 5588019
      }),
      reflect: new h.D({
        color: 2293725,
        emissive: 2293725,
        emissiveIntensity: 0.75
      })
    };
    const Br = {
      VergeMarker: {
        class : Tr,
        geo: null
      },
      BarrierMarker: {
        class : class extends ns {
          constructor(...e) {
            super (...e),
            this.geoSource = Pr,
            this.objectType = 'BarrierMarker',
            this.materials = Gr
          }
        },
        geo: null
      }
    },
    Wr = 'BarrierMarker';
    var Er = new class {
      constructor() {
        this.lastRepositionIndex = 0,
        this.pools = {
        },
        this.active = [
        ],
        this.loadingQueue = [
        ],
        this.getHeightAt = () =>{
        },
        this.loadCounter = 0,
        this.didLoadBound = this.didLoad.bind(this),
        this.addObjectBound = this.addObject.bind(this),
        this.container = new h.G,
        this.container.matrixAutoUpdate = !1,
        this.loadingQueue = [
        ]
      }
      destroy() {
        this.loadingQueue.length = 0;
        for (let t in this.pools) {
          var e;
          for (let e of this.pools[t]) e.destroy();
          null === (e = Br[t].geo) || void 0 === e || e.destroy()
        }
        for (let t of this.active) t.destroy();
        for (this.active.length = 0, this.pools = {
        }; this.container.children.length; ) this.container.remove(this.container.children[0])
      }
      initialise(e) {
        this.getHeightAt = e,
        this.initLibrary()
      }
      reset(e) {
        this.getHeightAt = e
      }
      initLibrary() {
        for (let e in Br) this.loadObject(e),
        this.pools[e] = [
        ]
      }
      loadObject(e) {
        let t = Br[e],
        i = new t.class;
        i.initialiseGeometry((() =>{
          t.geo = i,
          this.didLoad()
        }))
      }
      didLoad() {
        if (this.loadCounter++, this.loadCounter >= Object.keys(Br).length) for (; this.loadingQueue.length; ) {
          let e = this.loadingQueue.pop();
          this.addObject(...e)
        }
      }
      addCustom(e, t, i, s, n = null) {
        if (n || (n = 5), st.vehicleIndex > s + n) return;
        let a;
        for (e.keyName = null, e.worldPosition = t.clone(), e.position.subVectors(e.worldPosition, this.container.position), e.rotation.y = i, e.visible = !0, e.retireIndex = s + n, this.container.add(e), a = 0; a < this.active.length && !(this.active[a].retireIndex > e.retireIndex); a++);
        this.active.splice(a, 0, e)
      }
      addObject(e, t, i, s, n = null) {
        if (!(e in Br)) return void console.error('Unrecognised roadside object type ', e);
        if (!Br[e].geo) return void this.loadingQueue.push([e,
        t,
        i,
        s,
        n]);
        let a,
        r;
        for (this.pools[e].length ? a = this.pools[e].pop() : (a = Br[e].geo.clone(), this.container.add(a), ts['roadside-objects']++), a.keyName = e, a.worldPosition.copy(t), a.position.subVectors(a.worldPosition, this.container.position), a.rotation.y = i, a.visible = !0, a.retireIndex = s + 5, null !== n && a.setVariant(n), r = 0; r < this.active.length && !(this.active[r].retireIndex > a.retireIndex); r++);
        return this.active.splice(r, 0, a),
        a
      }
      update() {
        if (this.active.length && st.vehicleIndex >= this.active[0].retireIndex) {
          let e = this.active.shift();
          e.visible = !1,
          e.keyName ? this.pools[e.keyName].push(e) : this.container.remove(e)
        }
        if (st.vehicleIndex - this.lastRepositionIndex > 100) {
          this.container.position.x = st.vehicleNode.p.x,
          this.container.position.z = st.vehicleNode.p.z,
          this.container.updateMatrix();
          for (let e of this.container.children) e.position.subVectors(e.worldPosition, this.container.position);
          this.lastRepositionIndex = st.vehicleIndex
        }
      }
    };
    const Zr = 0.8,
    Fr = 151,
    Hr = 0.65,
    Qr = ((e, t = 0.75, i = 0, s = null, n = null, a = !1) =>{
      let r = new h.F({
        map: H(e, i, h.O),
        alphaTest: t,
        side: h.k,
        depthTest: !0,
        roughness: 1,
        flatShading: !0
      });
      return s && (r.normalMap = H(s, i)),
      r.onBeforeCompile = Y,
      r
    }) (null, 0.75, 8, null, null, !0),
    Yr = {
    };
    class Vr extends Ms {
      constructor(e = null) {
        super (),
        this.p = new h.W,
        this.ni = 0,
        this.mapSource = null,
        this.normSource = null,
        this.material = Qr,
        this.mesh = new h.B(Vr.getGeo(), this.material),
        this.mesh.matrixAutoUpdate = !1,
        this.mesh.geometry.setDrawRange(0, 0),
        this.posAttribute = this.mesh.geometry.attributes.position,
        this.posArr = this.posAttribute.array,
        this.uvAttribute = this.mesh.geometry.attributes.uv,
        this.uvArr = this.uvAttribute.array,
        e && this.drawSegment(e),
        this.applyMaterial()
      }
      applyMaterial() {
        this.mapSource && (this.material.map = X(this.mapSource, 4)),
        this.normSource && (this.material.normalMap = X(this.normSource, 4))
      }
      setMap(e) {
        this.material.map = e
      }
      drawSegment(e) {
        return this.seg = e,
        this.drawNode = this.seg.startNode,
        this.pi = 0,
        this.ui = 0,
        this.ni = 0,
        this.ox = this.seg.startNode.p.x,
        this.oz = this.seg.startNode.p.z,
        this.uvDist = 0,
        this.side = Math.sign(e.distance),
        this.drawNextNode()
      }
      drawNextNode() {
        for (Yr.dnp = this.drawNode.p, this.ni > 0 ? (this.bounds.maxX = Math.max(this.bounds.maxX, Yr.dnp.x - this.ox), this.bounds.minX = Math.min(this.bounds.minX, Yr.dnp.x - this.ox), this.bounds.maxY = Math.max(this.bounds.maxY, Yr.dnp.y), this.bounds.minY = Math.min(this.bounds.minY, Yr.dnp.y), this.bounds.maxZ = Math.max(this.bounds.maxZ, Yr.dnp.z - this.oz), this.bounds.minZ = Math.min(this.bounds.minZ, Yr.dnp.z - this.oz)) : (this.bounds.maxX = Yr.dnp.x - this.ox, this.bounds.minX = Yr.dnp.x - this.ox, this.bounds.maxY = Yr.dnp.y, this.bounds.minY = Yr.dnp.y, this.bounds.maxZ = Yr.dnp.z - this.oz, this.bounds.minZ = Yr.dnp.z - this.oz), Yr.j = 0; Yr.j < this.drawNode.ps.length; Yr.j += 2) Yr.pj = this.drawNode.ps[Yr.j],
        Yr.nj = this.drawNode.ns[Yr.j],
        Yr.x = Yr.pj.x + Yr.nj.x * this.seg.distance,
        Yr.x1 = Yr.x + 0.1 * Yr.nj.x * this.side,
        Yr.z = Yr.pj.z + Yr.nj.z * this.seg.distance,
        Yr.z1 = Yr.z + 0.1 * Yr.nj.z * this.side,
        this.posArr[this.pi++] = Yr.x1 - this.ox,
        this.posArr[this.pi++] = Yr.pj.y,
        this.posArr[this.pi++] = Yr.z1 - this.oz,
        this.posArr[this.pi++] = Yr.x - this.ox,
        this.posArr[this.pi++] = Yr.pj.y + 0.52,
        this.posArr[this.pi++] = Yr.z - this.oz,
        this.posArr[this.pi++] = Yr.x - this.ox,
        this.posArr[this.pi++] = Yr.pj.y + 0.7200000000000001,
        this.posArr[this.pi++] = Yr.z - this.oz,
        this.posArr[this.pi++] = Yr.x1 - this.ox,
        this.posArr[this.pi++] = Yr.pj.y + Zr,
        this.posArr[this.pi++] = Yr.z1 - this.oz;
        return this.ni++,
        this.drawNode = this.drawNode.next,
        !(this.drawNode.i < this.seg.endNode.i) && (Yr.pj = this.drawNode.p, Yr.nj = this.drawNode.n, Yr.x = Yr.pj.x + Yr.nj.x * this.seg.distance, Yr.z = Yr.pj.z + Yr.nj.z * this.seg.distance, Yr.x1 = Yr.x + 0.1 * Yr.nj.x * this.side, Yr.z1 = Yr.z + 0.1 * Yr.nj.z * this.side, this.posArr[this.pi++] = Yr.x1 - this.ox, this.posArr[this.pi++] = Yr.pj.y, this.posArr[this.pi++] = Yr.z1 - this.oz, this.posArr[this.pi++] = Yr.x - this.ox, this.posArr[this.pi++] = Yr.pj.y + 0.52, this.posArr[this.pi++] = Yr.z - this.oz, this.posArr[this.pi++] = Yr.x - this.ox, this.posArr[this.pi++] = Yr.pj.y + 0.7200000000000001, this.posArr[this.pi++] = Yr.z - this.oz, this.posArr[this.pi++] = Yr.x1 - this.ox, this.posArr[this.pi++] = Yr.pj.y + Zr, this.posArr[this.pi++] = Yr.z1 - this.oz, this.mesh.geometry.setDrawRange(0, 5 * this.seg.length * 6 * 3), this.computeBoundingSphere(), this.mesh.geometry.boundingSphere = this.boundingSphere, this.mesh.position.set(this.ox, - 0.1, this.oz), this.posAttribute.needsUpdate = !0, this.mesh.visible = !0, this.mesh.updateMatrix(), this.seg.contiguousStart || (this.p.x = this.posArr[0] + this.mesh.position.x, this.p.y = this.posArr[1], this.p.z = this.posArr[2] + this.mesh.position.z, Er.addObject(Wr, this.p, Math.PI + Math.PI / 2 * this.side - this.seg.startNode.a, this.seg.startNode.i)), !0)
      }
      retire() {
        this.mesh.visible = !1
      }
      computeBoundingSphere() {
        Yr.minX = this.bounds.minX,
        Yr.maxX = this.bounds.maxX,
        Yr.minY = this.bounds.minY,
        Yr.maxY = this.bounds.maxY,
        Yr.minZ = this.bounds.minZ,
        Yr.maxZ = this.bounds.maxZ,
        this.boundingSphere.center.x = (Yr.minX + Yr.maxX) / 2,
        this.boundingSphere.center.y = (Yr.minY + Yr.maxY) / 2,
        this.boundingSphere.center.z = (Yr.minZ + Yr.maxZ) / 2,
        this.boundingSphere.radius = Math.sqrt((Yr.maxX - Yr.minX) * (Yr.maxX - Yr.minX) + (Yr.maxY - Yr.minY) * (Yr.maxY - Yr.minY) + (Yr.maxZ - Yr.minZ) * (Yr.maxZ - Yr.minZ)) / 2 + 10
      }
      static getNorms() {
        let e = [
        ];
        for (let t = 0; t < Fr; t++) e.push(0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0);
        return e
      }
      static getUV() {
        let e = [
        ],
        t = 0;
        for (let i = 0; i < Fr; i++) t = 0.4 * i,
        e.push(t, 0, t, Hr, t, 0.9, t, 1);
        return e
      }
      static getGeo() {
        let e = new h.g;
        e.setIndex(Vr.getIndex()),
        e.setAttribute('position', new h.o(new Float32Array(1812), 3)),
        e.attributes.position.setUsage(h.l),
        e.setAttribute('uv', new h.o(new Float32Array(Vr.getUV()), 2));
        let t = new Float32Array(Vr.getNorms());
        return e.setAttribute('normal', new h.o(t, 3)),
        e
      }
      static getIndex() {
        let e,
        t,
        i,
        s,
        n,
        a,
        r,
        h,
        o = [
        ];
        for (let l = 0; l < Fr; l++) e = 4 * l,
        t = e + 1,
        i = e + 2,
        s = e + 3,
        n = 4 * (l + 1),
        a = n + 1,
        r = n + 2,
        h = n + 3,
        o.push(e, t, n, t, a, n, t, i, a, i, r, a, i, s, r, s, h, r);
        return o
      }
    }
    class Ur extends Ts {
      generate(e) {
        let t = e.prev;
        for (e = e.next; this.test(t) && t.prev && t.i > this.prev.endNode.i; ) t = t.prev;
        for (t.i - this.prev.endNode.i < 4 && (t = this.prev.endNode); this.test(e) && e.i - t.i < Ze; ) e = e.next;
        let i = new Rs(t, e, this.typeID, (t.w + Ge) * this.side);
        return this.prev.endNode.i == t.i && this.prev.type == i.type && (this.prev.contiguousEnd = !0, i.contiguousStart = !0, i.distance = this.prev.distance),
        i
      }
      testGenLeft(e) {
        return !e.bridge && null == e.lWallDist && e.i >= this.prevLeft.endNode.i && (e.g < - 1.25 || e.g < 0 && e.da > 0.25 && e.h < 0.6)
      }
      testGenRight(e) {
        return !e.bridge && null == e.rWallDist && e.i >= this.prevRight.endNode.i && (e.g > 1.25 || e.g > 0 && e.da < - 0.25 && e.h < 0.6)
      }
      testLeft(e) {
        return !e.bridge && e.p.y > 3 && (e.g < - 0.75 || e.g < 0.1 && e.da < - 0.05 && e.h < 0.6)
      }
      testRight(e) {
        return !e.bridge && e.p.y > 3 && (e.g > 0.75 || e.g > - 0.1 && e.da > 0.05 && e.h < 0.6)
      }
    }
    const Xr = {
      Barrier: 0
    },
    Jr = [
      Vr
    ];
    var qr = class {
      constructor(e) {
        this.stagedSegments = [
        ],
        this.activeSegments = [
        ],
        this.count = 0,
        this.prevWasContiguous = !1,
        this.getHeightAt = e,
        this.container = new h.G,
        this.segments = [
        ],
        this.initPools()
      }
      initialise() {
        this.renderIndex = st.vehicleIndex,
        this.genNode = st.vehicleNode,
        this.genIndex = st.vehicleIndex,
        this.genNodeLeft = st.vehicleNode,
        this.genNodeRight = st.vehicleNode,
        this.barrierGenerator = new Ur(st.vehicleNode, Xr.Barrier),
        this.segments.length = 0;
        do {
          this.updateGeneration()
        } while (this.genIndex < st.vehicleIndex + We);
        for (; this.segments.length > 0 && st.vehicleIndex + Ee >= this.segments[0].startNode.i; ) this.drawNextSegment();
        do {
          this.updateStaged()
        } while (this.stagedSegments.length)
      }
      reset(e) {
        this.getHeightAt = e,
        this.resetPools(),
        this.initialise()
      }
      initPools() {
        this.pools = [
        ];
        let e,
        t,
        i = Object.keys(Xr).length;
        for (e = 0; e < i; e++) t = new Jr[e](null, this.getHeightAt),
        this.container.add(t.mesh),
        this.pools.push([t])
      }
      resetPools() {
        for (; this.activeSegments.length; ) this.retireSegment(this.activeSegments.shift())
      }
      setSkin(e) {
      }
      handleMidlineReset() {
        (st.tail.i < this.genNodeLeft.i || st.tail.i < this.genNodeRight.i) && (console.error('Wall controller must handle reset gracefully'), this.genNodeLeft = st.tail, this.genNodeRight = st.tail, this.renderIndex = st.tail.i)
      }
      updateGeneration() {
        this.genIndex++,
        this.genNodeLeft.i < this.genIndex && (this.genNodeLeft = this.genNodeLeft.next, this.checkGenerateLeftSegment()),
        this.genNodeRight.i < this.genIndex && (this.genNodeRight = this.genNodeRight.next, this.checkGenerateRightSegment())
      }
      update() {
        for (this.updateGeneration(); this.segments.length > 0 && st.vehicleIndex + Ee >= this.segments[0].startNode.i; ) this.drawNextSegment();
        if (this.activeSegments.length) for (; st.vehicleIndex > this.activeSegments[0].endNode.i + 10 && (this.retireSegment(this.activeSegments.shift()), 0 != this.activeSegments.length); );
      }
      updateStaged() {
        this.stagedSegments.length && this.stagedSegments[0].drawNextNode() && (this.stagedSegments.shift(), ts.walls = this.activeSegments.length + ' (' + this.stagedSegments.length + ')')
      }
      checkGenerateLeftSegment() {
        this.addLeftSegment(this.barrierGenerator.generateLeft(this.genNodeLeft))
      }
      checkGenerateRightSegment() {
        this.addRightSegment(this.barrierGenerator.generateRight(this.genNodeRight))
      }
      addRightSegment(e) {
        if (!e) return;
        let t = e.startNode;
        for (; t.i < e.endNode.i; ) (!t.rWallDist || t.rWallDist > e.distance) && (t.rWallDist = e.distance, t.wallSide = - 1),
        t = t.next;
        this.segments.push(e)
      }
      addLeftSegment(e) {
        if (!e) return;
        let t = e.startNode;
        for (; t.i < e.endNode.i; ) (!t.lWallDist || t.lWallDist > - e.distance) && (t.lWallDist = - e.distance, t.wallSide = 1),
        t = t.next;
        this.segments.push(e)
      }
      getSegmentObject(e) {
        let t;
        if (this.pools[e].length) t = this.pools[e].pop();
         else {
          t = new (0, Jr[e]) (null, this.getHeightAt),
          this.container.add(t.mesh)
        }
        return t
      }
      drawNextSegment() {
        let e = this.segments.shift(),
        t = this.getSegmentObject(e.type);
        t.drawSegment(e) || this.stagedSegments.push(t),
        e.obj = t,
        this.activeSegments.push(e),
        ts.walls = this.activeSegments.length + ' (' + this.stagedSegments.length + ')'
      }
      retireSegment(e) {
        e.obj.retire(),
        this.pools[e.type].push(e.obj),
        ts.walls = this.activeSegments.length + ' (' + this.stagedSegments.length + ')'
      }
    };
    const Kr = new h.F({
      map: null
    });
    const _r = new class {
      constructor() {
        this.loader = new is.a,
        this.meshes = [
        ],
        this.template = null;
        let e = X(Xa);
        Kr.map = e,
        Kr.bumpMap = e,
        Kr.bumpScale = 0.02
      }
      getInstancedMesh(e) {
        let t = new h.u(Sr.rock.geo.clone(), Kr, e);
        return t.matrixAutoUpdate = !1,
        t.instanceMatrix.setUsage(h.l),
        this.template || this.meshes.push(),
        t
      }
    };
    class $r extends _n {
      constructor() {
        super (),
        this.index = 0,
        this.mesh = _r.getInstancedMesh(Mr),
        this.mesh.receiveShadow = !0,
        this.retireNodeIndex = - 1,
        this.showNodeIndex = 0
      }
    }
    $r.typeName = 'rubble',
    $r.rubbleController = _r;
    var eh = new $n($r, Mr, Dr);
    const th = new h.G,
    ih = new Ps(119),
    sh = new Ps(47, 6.28),
    nh = new Ps(119, 0.7, - 0.1),
    ah = {
    },
    rh = (e, t, i, s) =>(ah.x = Math.round((e - i.x) / Ne * Cr), ah.z = Math.round((t - i.z) / Ne * Cr), ah.x < 0 ? ah.x += Cr : ah.x >= Cr && (ah.x -= Cr), ah.z < 0 ? ah.z += Cr : ah.z >= Cr && (ah.z -= Cr), jr[ah.x][ah.z]);
    class hh extends ht {
      constructor(...e) {
        super (...e),
        this.rubbleProb = 0.05,
        this.rubbleProb = 100 / (this.res1 * this.res1)
      }
      lerpHeight(e, t, i) {
        i.ga = Math.abs(i.g),
        i.w += Ge + 0.25 * i.ga;
        let s = 0,
        n = 16 * (1 - Math.max(0.25, Math.min(0.5, 0.25 * i.ga)));
        if (i.d < i.w + n) if (i.d < i.w) s = i.y,
        i.d < i.w - 1 ? s += 0.15 * rh(e, t, this.originPos, this.res) : s += rh(e, t, this.originPos, this.res) * (1 - (i.w - i.d));
         else {
          let a = Math.max(0, Math.min(1, (i.d - i.w) / n));
          a = hh.hockeyLerp(a),
          s = this.heightmap.getXZ(e, t),
          s = s * a + i.y * (1 - a) + rh(e, t, this.originPos, this.res) * Math.max(0, Math.min(1, 1 - (i.d - i.w) / n))
        } else s = this.heightmap.getXZ(e, t);
        return s
      }
      postProcessRow(e) {
        eh.active && this.placeRubbleRow(e)
      }
      placeRubbleRow(e) {
        let t,
        i,
        s,
        n,
        a,
        r;
        for (let h = 0; h < this.res; h++) t = e * this.res1 + h,
        s = this.heights[t],
        i = this.signedRoadProx[t],
        n = [
          this.norms[3 * t],
          this.norms[3 * t + 1],
          this.norms[3 * t + 2]
        ],
        a = i > 0.2 && i < 20 ? this.grads[t] < 0.1 ? 1 : 0.1 - this.grads[t] : 0,
        r = nh.next(),
        a *= Math.abs(this.curves[t]),
        a * this.rubbleProb > ih.next() && (s -= i < Ge ? Ge - i : i / 20 * 0.2, s -= 0.1 * r, th.position.set((this.coords.x + e / this.res) * Ne + (ih.next() - 0.5), s - this.grads[t] / 2, (this.coords.z + h / this.res) * Ne + (ih.next() - 0.5)), th.scale.set(r, r, r), th.rotation.y = sh.next(), th.rotation.x = sh.next(), th.updateMatrix(), eh.addInstance(this.lod, th.matrix, 0, this.originIndex, th.position, n))
      }
      postProcessCell() {
      }
      display() {
        super.display(),
        1 == this.lod && this.tileset.mesh.visible && eh.updateCurrentInstance(1)
      }
    }
    hh.paved = !1;
    var oh = hh;
    var lh = class extends ct {
    },
    dh = i.p + 'static/media/earthrise.c3eff6a4.webp';
    class ch extends pt {
      constructor(e) {
        super (),
        this.groundMaterial = Ar,
        this.nearGridCell = oh,
        this.farGridCell = lh,
        this.skinList = Object.keys(zr.skins),
        this.skinIndex = 0,
        this.weatherList = Object.keys(zr.weathers),
        this.weatherIndex = 0,
        this.skinWeatherList = [
        ],
        this.weatherOverride = !1,
        this.topoList = Object.keys(zr.topography),
        this.topoIndex = 0,
        this.ambiantAudio = null,
        this.windAudio = null,
        this.cachedTextures = {
        default:
          {
          }
        },
        this.hasRubble = !0,
        this.lastVehicleIndex = 0,
        this.loadState = {
          init: !1,
          assets: !1,
          walls: !1,
          reset: !0,
          progress: 0
        },
        this.p = new h.W,
        this.curWeatherIndex = 0,
        this.audioLerp = 0,
        this.getHeightAt = e,
        this.container = new h.G,
        this.config = zr
      }
      updateConfig(e, t) {
        yr(e, t),
        eh.revert(Mr, Dr)
      }
      destroy() {
        var e,
        t;
        Er.destroy(),
        null === (e = this.ambientAudio) || void 0 === e || e.stop(),
        null === (t = this.windAudio) || void 0 === t || t.stop(),
        this.container.traverse((e=>{
          e.isMesh && e.geometry.dispose()
        })),
        this.container.clear();
        for (let i in this.cachedTextures) for (let e in this.cachedTextures[i]) if (this.cachedTextures[i][e].isTexture) this.cachedTextures[i][e].dispose();
         else for (let t in this.cachedTextures[i][e]) this.cachedTextures[i][e][t].isTexture && this.cachedTextures[i][e][t].dispose();
        delete this.cachedTextures,
        this.destroyAssets(),
        eh.destroy()
      }
      initialise(e, t, i) {
        var s;
        this.seed = e;
        let n = t.topography;
        this.topoIndex = this.topoList.indexOf(n),
        null === (s = this.heightmap) || void 0 === s || s.destroy(),
        this.heightmap = new Ba(e, zr.topography[n].heightmap),
        this.loadState.init = !1,
        this.loadState.progress = 0,
        de(zr.topography[n].smoothWindow),
        Pe(zr.topography[n].roadWidth),
        this.hasRubble = wh.value.detailLodIndex > 0,
        this.loadState.assets || new Or(Sr, this.onAssetsLoaded.bind(this)),
        i()
      }
      onGridReady() {
        eh.updateVisible()
      }
      reset(e, t, i) {
        this.loadState.reset = !1,
        this.initialise(e, t, (() =>{
          this.loadState.init = !0,
          i()
        }))
      }
      destroyAssets() {
        for (let e in Sr) Sr[e].geo.dispose()
      }
      onAssetsLoaded(e) {
        for (let t in Sr) Sr[t].geo = e[t].children[0].geometry;
        eh.revert(Mr, Dr),
        this.loadState.assets = !0
      }
      loader() {
        return this.loadState.init ? this.loadState.assets ? this.loadState.walls ? (this.loadState.reset || (this.lastVehicleIndex = st.vehicleIndex, this.wallController.reset(this.getHeightAt), Er.reset(this.getHeightAt), this.loadState.reset = !0), eh.revert(Mr, Dr), 1) : (this.wallController = new qr(this.getHeightAt), this.wallController.initialise(), this.container.add(this.wallController.container), this.loadState.walls = !0, 0.9) : (this.loadState.walls = !1, 0.7) : (this.lastVehicleIndex = st.vehicleIndex, this.earthrise || (this.earthrise = new h.B(new h.J(10, 10), new h.C({
          map: X(dh),
          fog: !1,
          depthTest: !1,
          alphaTest: 0.5,
          side: h.k
        })), this.earthrise.renderOrder = - 1, this.earthrise.rotation.y = - Math.PI / 2, this.container.add(this.earthrise)), Er.initialise(this.getHeightAt), this.container.add(Er.container), this.hasRubble && this.container.add(eh.container), eh.active = this.hasRubble, this.loadState.init = !0, 0.3)
      }
      handleMidlineReset() {
        this.wallController.handleMidlineReset()
      }
      update() {
        if (this.earthrise.visible && (this.earthrise.position.x = Qe.position.x + 100, this.earthrise.position.y = Qe.position.y + 15, this.earthrise.position.z = Qe.position.z), st.vehicleIndexDidChange) do {
          this.lastVehicleIndex++,
          this.wallController.update(),
          Er.update(),
          this.hasRubble && eh.updateVisible()
        } while (this.lastVehicleIndex < st.vehicleIndex);
        this.wallController.updateStaged()
      }
      nextSkin() {
        this.setSkin(this.skinList[++this.skinIndex % this.skinList.length])
      }
      setTopography(e) {
        window.localStorage.setItem('config-scene-topography', e)
      }
      nextTopography() {
        this.setTopography(this.topoList[++this.topoIndex % this.topoList.length])
      }
      loadGroundMaterialSkin(e, t, i, s, n = 4) {
        this.skin[e] ? (i[e] || (i[e] = X(this.skin[e], n)), Ar.userData[t].value = i[e]) : (s[e] || (s[e] = X(zr.skins.default[e], n)), Ar.userData[t].value = s[e])
      }
      getSkinName(e) {
        var t;
        return (null === (t = zr.skins[e]) || void 0 === t ? void 0 : t.name) || e
      }
      setScene(e) {
        this.setSkin(e.skin),
        this.setWeatherIndex(e.weatherIndex % this.skinWeatherList.length)
      }
      sanitiseConfig(e) {
        super.sanitiseConfig(e),
        e.set('weatherIndex', 0, !0)
      }
      setSkin(e) {
        this.skinName = e,
        this.earthrise.visible = 'moon' == e;
        let t = zr.skins.default;
        this.skin = zr.skins[e],
        this.cachedTextures[e] || (this.cachedTextures[e] = {
        });
        let i = this.cachedTextures[e],
        s = this.cachedTextures.default;
        this.loadGroundMaterialSkin('surface', 'surfaceMap', i, s),
        this.loadGroundMaterialSkin('subSurface', 'subSurfaceMap', i, s),
        this.loadGroundMaterialSkin('shale', 'shaleMap', i, s, 8),
        this.loadGroundMaterialSkin('gravel', 'gravelMap', i, s),
        this.loadGroundMaterialSkin('rock', 'rockMap', i, s),
        this.loadGroundMaterialSkin('cliff', 'cliffMap', i, s),
        this.loadGroundMaterialSkin('roadBase', 'roadBaseMap', i, s),
        Ar.uniformsNeedUpdate = !0,
        this.skin.road ? (i.road || (i.road = X(this.skin.road, 8)), Be.map = i.road) : (s.road || (s.road = X(t.road, 8)), Be.map = s.road),
        this.skin.rubble ? (i.rubble || (i.rubble = X(this.skin.rubble, 2)), eh.container.visible = !0, Kr.map = i.rubble) : eh.container.visible = !1,
        this.skin.walls ? (i.walls || (i.walls = {
        }), s.walls || (s.walls = {
        }), Qr.visible = !0, 'barrier' in this.skin.walls ? (null == this.skin.walls.barrier && (Qr.visible = !1), i.walls.barrier || (i.walls.barrier = X(this.skin.walls.barrier, 4)), Qr.map = i.walls.barrier) : (s.walls.barrer || (s.walls.barrier = X(t.walls.barrier, 4)), Qr.map = s.walls.barrier)) : (s.walls || (s.walls = {
        }), s.walls.barrier || (s.walls.barrier = X(t.walls.barrier, 4)), Qr.map = s.walls.barrier),
        this.skin.friction ? (ze(this.skin.friction.road), Oe(this.skin.friction.side), Re(this.skin.friction.grass)) : (ze(1.4), Oe(0.95), Re(0.85)),
        this.weatherOverride = !1,
        this.skin.weathers ? (this.weatherOverride = !0, this.skinWeatherList = this.skin.weathers, this.setWeather(this.skinWeatherList[this.curWeatherIndex % this.skinWeatherList.length])) : this.setWeather(this.weatherList[this.curWeatherIndex % this.weatherList.length])
      }
      setWeatherIndex(e) {
        this.curWeatherIndex = e,
        this.weatherOverride ? this.setWeather(this.skinWeatherList[e]) : this.setWeather(this.weatherList[e])
      }
      nextWeather() {
        this.weatherOverride ? this.setWeather(this.skinWeatherList[++this.weatherIndex % this.skinWeatherList.length]) : this.setWeather(this.weatherList[++this.weatherIndex % this.weatherList.length])
      }
      updateAudio() {
        var e,
        t;
        this.t = Math.min(1, T.speed / 35),
        this.t *= this.t,
        this.audioLerp = 0.9 * this.audioLerp + 0.1 * this.t,
        null === (e = this.ambientAudio) || void 0 === e || e.setVolume(1 - this.audioLerp),
        null === (t = this.windAudio) || void 0 === t || t.setVolume(0.8 * this.audioLerp)
      }
      setWeather(e) {
        var t,
        i,
        s,
        n;
        this.weather = zr.weathers[e];
        let a = zr.weathers.default;
        this.ambientAudio && this.ambientAudio.stop();
        let r = (null === (t = this.weather) || void 0 === t || null === (i = t.audio) || void 0 === i ? void 0 : i.ambiance) || a.audio.ambiance;
        null !== r.src && z.getAudio(r.src, (e=>{
          this.ambientAudio && this.ambientAudio.stop(),
          e.setLoop(!0),
          e.setLoopStart(r.ls),
          e.setLoopEnd(e.buffer.duration - r.le),
          this.ambientAudio = e,
          e.setVolume(0),
          e.play()
        })),
        this.windAudio && this.windAudio.stop();
        let h = (null === (s = this.weather) || void 0 === s || null === (n = s.audio) || void 0 === n ? void 0 : n.wind) || a.audio.wind;
        null !== h.src && z.getAudio(h.src, (e=>{
          e.setLoop(!0),
          e.setLoopStart(h.ls),
          e.setLoopEnd(e.buffer.duration - h.le),
          this.windAudio = e,
          e.setVolume(0),
          e.play()
        })),
        ce.intensity = this.weather.amb,
        ce.color.setHex(this.weather.col),
        pe.intensity = this.weather.hem,
        pe.color.setHex(this.weather.hemTop || this.weather.col),
        pe.groundColor.setHex(this.weather.hemGround || this.weather.col),
        ue.intensity = this.weather.dir,
        ue.color.setHex(this.weather.col),
        ue.sunOffset.fromArray(this.weather.sunPos || [
          0,
          100,
          0
        ]),
        T.setHeadlightColour(this.weather.headlightColour || 16777215),
        ge.setHex(this.weather.col),
        se(this.weather.col, we * this.weather.fogNear, we * this.weather.fogFar),
        this.cachedTextures[e] || (this.cachedTextures[e] = {
        });
        let o = this.cachedTextures[e],
        l = this.cachedTextures.default;
        Fe.userData.hasClouds.value = !0,
        'skyMap' in this.weather ? null == this.weather.skyMap ? Fe.userData.hasClouds.value = !1 : (o.skyMap || (o.skyMap = X(this.weather.skyMap, 2)), Fe.map = o.skyMap) : (l.skyMap || (l.skyMap = X(a.skyMap, 2)), Fe.map = l.skyMap),
        this.weather.skyCol ? (Fe.userData.nearCol.value.setHex(this.weather.skyCol), Fe.userData.farCol.value.setHex(this.weather.skyColFar)) : (Fe.userData.nearCol.value.setHex(a.skyCol), Fe.userData.farCol.value.setHex(a.skyColFar)),
        T.setHeadlights(!!this.weather.headlights)
      }
    }
    ch.config = zr,
    ch.sceneName = 'Planet',
    ch.hasTrees = !1,
    ch.hasGrass = !1;
    const ph = {
      Hills: Ta,
      Planet: ch
    },
    uh = [
      'Hills',
      'Planet'
    ],
    gh = [
      'easy',
      'normal',
      'hard'
    ],
    mh = [
      0.5,
      0.75,
      1,
      1.5
    ],
    xh = {
      seed: 'seed',
      sceneName: 'config-scene-name',
      topography: 'config-scene-topography',
      skin: 'config-scene-skin',
      weatherIndex: 'config-scene-weather-index',
      viewLodIndex: 'config-view-lod-index',
      detailLodIndex: 'config-detail-lod-index',
      antialias: 'config-antialias',
      renderScale: 'config-render-scale'
    },
    vh = {
      seed: Ve,
      sceneName: 'Hills',
      topography: 'normal',
      skin: 'default',
      weatherIndex: 1,
      viewLodIndex: 2,
      detailLodIndex: 1,
      antialias: !0,
      renderScale: 2
    };
    var wh = new class extends x {
      constructor() {
        super (),
        this.value = {
          ...vh
        },
        this.initialValue = {
          ...vh
        },
        this.initialNode = 0,
        this.accumulatedProgress = 0,
        this.sceneMeta = {
        },
        this.buildSceneMeta(),
        this.loadConfig(),
        this.loadProgress();
        let e = window.location.search.substring(1).split('&');
        for (let t of e) {
          let e = t.split('=');
          if ('node' == e[0]) try {
            let t = parseInt(e[1]);
            !isNaN(t) && t > 0 && (this.initialNode = t, console.log('Overwriting initial node from QS: ', e[1]))
          } catch (Kc) {
            console.error('Failed to load initial node from QS:', e[1])
          } else 'topo' == e[0] && (gh.includes(e[1]) || 'flat' === e[1] ? (this.set('topography', e[1], !0), console.log('Overwriting topography from QS: ', e[1])) : (console.warn('Invalid topo parameter; reverting to \'normal\''), this.set('topography', 'normal', !0)))
        }
      }
      resetMemory() {
        console.log('Resetting config to defaults');
        for (let e in this.value) window.localStorage.setItem(xh[e], vh[e])
      }
      buildSceneMeta() {
        let e,
        t = {
          current: vh.sceneName,
          hasCycles: !1,
          scenes: {
          }
        };
        for (let i in ph) {
          e = ph[i].config,
          t.scenes[i] = {
            topography: Object.keys(e.topography),
            skins: Object.keys(e.skins)
          };
          let s = {
          },
          n = {
          };
          for (let a in e.skins) s[a] = e.skins[a].weathers.slice(),
          n[a] = e.skins[a].name,
          t.scenes[i].hasCycles = t.hasCycles || void 0 !== e.skins[a].cycles;
          t.scenes[i].skinWeathers = s,
          t.scenes[i].skinNames = n
        }
        return this.sceneMeta = t,
        this.sceneMeta
      }
      set(e, t, i = !1) {
        i || !d.value ? (super.set(e, t, i), window.localStorage.setItem(xh[e], t)) : console.warn('Preventing config update to ' + e + ' during load')
      }
      loadConfig() {
        let e,
        t;
        for (t in this.value) {
          if (e = window.localStorage.getItem(xh[t]) || vh[t], 'sceneName' == t) e in ph || (console.warn('Loaded unrecognsied scene name ' + e + ', restoring default'), e = vh.sceneName),
          this.sceneMeta.current = e;
           else try {
            e = JSON.parse(e)
          } catch (Kc) {
          }
          console.log('SceneConfig: Load ', t, e),
          this.set(t, e, !0),
          this.initialValue[t] = e
        }
      }
      revertProgress() {
        this.saveProgress(0, 0),
        this.saveProgress = () =>{
        }
      }
      saveProgress(e = 0, t = null) {
        let i = this.getConfigKey();
        window.localStorage.setItem(i + '_node', Math.max(0, e - 5)),
        null !== t && window.localStorage.setItem(i + '_progress', t)
      }
      loadProgress() {
        this.convertLegacyProgress(),
        this.initialNode = 0,
        this.accumulatedProgress = 0;
        let e = this.getConfigKey(),
        t = e + '_node';
        if (localStorage.getItem(t)) {
          let e = parseInt(localStorage.getItem(t));
          e && (this.initialNode = e)
        }
        let i = e + '_progress';
        if (localStorage.getItem(i)) {
          let e = parseInt(localStorage.getItem(i));
          e && (this.accumulatedProgress = e)
        }
        if (localStorage.getItem('restore-progress')) {
          let e = 0;
          try {
            e = parseInt(localStorage.getItem('restore-progress')),
            e > 0 && (this.accumulatedProgress += e, localStorage.setItem(i, this.accumulatedProgress), console.log('Storing accumulated progress ', e, this.accumulatedProgress))
          } catch (Kc) {
          }
          localStorage.removeItem('restore-progress')
        }
        console.log('Loaded node and progress ' + this.initialNode + ', ' + this.accumulatedProgress + ' for confKey ' + e)
      }
      convertLegacyProgress() {
        try {
          let e,
          t,
          i,
          s,
          n = JSON.parse(localStorage.getItem('analytics_seeds')),
          a = [
            'easy',
            'normal',
            'hard'
          ];
          for (t of n) if (t) for (i of(e = t.toString(), a)) s = e + '?' + i,
          localStorage.getItem(s) && (console.log('Converting legacy progress for seed ', e, i), localStorage.setItem(e + '_Hills_' + i + '_node', localStorage.getItem(s)), localStorage.removeItem(s))
        } catch (Kc) {
        }
      }
      getConfigKey() {
        return this.value.seed + '_' + this.value.sceneName + '_' + this.value.topography
      }
    },
    fh = i.p + 'static/media/rolling_06.84342ca7.mp3',
    bh = i.p + 'static/media/veh_accel_06.8478c426.mp3',
    Ah = i.p + 'static/media/veh_car.9991c48a.svg',
    yh = i.p + 'static/media/veh_bus.9b1fce50.svg',
    Ih = i.p + 'static/media/veh_bike.af1bd6f4.svg',
    Dh = i.p + 'static/media/roadster-07b_map.17a06a45.jpg';
    const Nh = {
      Chase: {
        pitch: {
          near: 0.3,
          far: 0.2
        },
        yOffset: {
          near: 0.8,
          far: 1
        },
        posOffset: [
          0,
          0,
          1.4
        ],
        range: {
          near: 4,
          far: 4.75
        },
        farSpeed: 45,
        smoothFactor: 1.5
      },
      ChaseFar: {
        pitch: {
          near: 0.25,
          far: 0.15
        },
        yOffset: {
          near: 1,
          far: 2
        },
        posOffset: [
          0,
          0,
          1.4
        ],
        range: {
          near: 6,
          far: 9
        },
        farSpeed: 45,
        smoothFactor: 1.25
      },
      FirstPerson: {
        pitch: {
          near: 0.05,
          far: 0.05
        },
        yOffset: {
          near: 0.7,
          far: 0.7
        },
        posOffset: [
          0,
          0.4,
          3
        ],
        range: {
          near: 0.75,
          far: 0.75
        },
        farSpeed: 45,
        smoothFactor: 0.3
      },
      Bonnet: {
        pitch: {
          near: 0.05,
          far: 0.05
        },
        yOffset: {
          near: 0.6,
          far: 0.6
        },
        posOffset: [
          0,
          0.4,
          3.4
        ],
        range: {
          near: 0,
          far: 0
        },
        farSpeed: 45,
        smoothFactor: 0.3,
        hideVehicle: !0
      }
    },
    Mh = {
      Debug: {
        enabled: !1,
        name: 'Debug',
        skins: [
        ],
        bodyObj: i(19),
        wheelObj: i(20),
        icon: Ah,
        audio: {
          roll: fh,
          engine: bh
        },
        wheels: {
          tyreWidth: 0.1,
          width: 1.36,
          length: 2.75,
          radius: 0.342665,
          circumference: 2.1,
          travel: 0.07
        },
        metrics: {
          shadowMapSize: 4,
          accel: 9,
          reverse: 5,
          jerk: 48,
          brake: 8,
          mass: 700,
          maxSteer: 0.68,
          axleHeight: 0.342665,
          dampening: 0.04,
          rockFactor: 4,
          drag: 0.001,
          topSpeed: 45,
          rollResistance: 0.06,
          steerInterval: 1,
          slipBase: 0.1,
          slipMod: 0.05,
          aeroFactor: 0.5,
          headlightPos: {
            x: 0.64,
            y: 0.7,
            z: 3.1
          }
        },
        cameras: Nh
      },
      Bike: {
        enabled: !1,
        name: 'Bike',
        skins: [
        ],
        bike: !0,
        bodyObj: i(39),
        wheelObj: i(40),
        icon: Ih,
        audio: {
          roll: fh,
          engine: bh
        },
        materials: {
        },
        wheels: {
          tyreWidth: 0.077,
          width: 0,
          length: 1.95,
          radius: 0.26,
          circumference: 1.63,
          travel: 0.07
        },
        metrics: {
          shadowMapSize: 4,
          steerSpeed: 1.57,
          accel: 11,
          reverse: 5,
          jerk: 48,
          brake: 8,
          mass: 700,
          steerAccel: 8,
          maxSteer: 0.4,
          dampening: 0.08,
          rockFactor: 5,
          drag: 0.001,
          topSpeed: 53,
          rollResistance: 0.04,
          steerInterval: 1.8,
          slipBase: 1,
          slipMod: 0,
          aeroFactor: 0.4,
          headlightPos: {
            x: 0.3,
            y: 0.75,
            z: 2.25
          }
        },
        cameras: {
          Chase: {
            pitch: {
              near: 0.3,
              far: 0.2
            },
            yOffset: {
              near: 0.8,
              far: 1
            },
            posOffset: [
              0,
              0,
              1
            ],
            range: {
              near: 3.5,
              far: 4.5
            },
            farSpeed: 50,
            smoothFactor: 0.85,
            hideVehicle: !1
          },
          ChaseFar: {
            pitch: {
              near: 0.25,
              far: 0.15
            },
            yOffset: {
              near: 1,
              far: 2
            },
            posOffset: [
              0,
              0,
              1
            ],
            range: {
              near: 6,
              far: 9
            },
            farSpeed: 50,
            smoothFactor: 0.65
          },
          FirstPerson: {
            pitch: {
              near: 0.05,
              far: 0.05
            },
            yOffset: {
              near: 0.7,
              far: 0.7
            },
            posOffset: [
              0,
              0.4,
              2.3
            ],
            range: {
              near: 0.75,
              far: 0.75
            },
            farSpeed: 50,
            smoothFactor: 0.2,
            hideVehicle: !0
          }
        }
      },
      Bus: {
        enabled: !0,
        name: 'Coach',
        skins: [
        ],
        bodyObj: i(41),
        wheelObj: i(42),
        icon: yh,
        audio: {
          roll: fh,
          engine: bh
        },
        wheels: {
          tyreWidth: 0.2,
          width: 2.24,
          length: 5.47,
          radius: 0.3955,
          circumference: 2.485,
          travel: 0.16
        },
        metrics: {
          shadowMapSize: 8,
          steerSpeed: 0.45,
          accel: 6,
          reverse: 5,
          jerk: 6,
          brake: 4,
          mass: 1400,
          steerAccel: 6,
          maxSteer: 0.65,
          axleHeight: 0.3955,
          dampening: 0.06,
          rockFactor: 5,
          drag: 0.002,
          topSpeed: 32,
          rollResistance: 0.03,
          steerInterval: 2,
          slipBase: 1,
          slipMod: 0.25,
          aeroFactor: 0,
          headlightPos: {
            x: 0.75,
            y: 0.75,
            z: 7.25
          }
        },
        cameras: {
          Chase: {
            pitch: {
              near: 0.35,
              far: 0.3
            },
            yOffset: {
              near: 1.6,
              far: 2.6
            },
            posOffset: [
              0,
              0,
              2.7
            ],
            range: {
              near: 9,
              far: 11
            },
            farSpeed: 30,
            smoothFactor: 1.6
          },
          ChaseFar: {
            pitch: {
              near: 0.4,
              far: 0.3
            },
            yOffset: {
              near: 2,
              far: 4
            },
            posOffset: [
              0,
              0,
              2.7
            ],
            range: {
              near: 14,
              far: 16
            },
            farSpeed: 30,
            smoothFactor: 1.4
          },
          FirstPerson: {
            pitch: {
              near: 0.05,
              far: 0.05
            },
            yOffset: {
              near: 1.8,
              far: 1.8
            },
            posOffset: [
              0,
              0,
              6.6
            ],
            range: {
              near: 0.75,
              far: 0.75
            },
            farSpeed: 30,
            smoothFactor: 0.4,
            hideVehicle: !0
          }
        }
      },
      Roadster: {
        enabled: !0,
        name: 'Roadster',
        bodyObj: i(43),
        wheelObj: i(44),
        map: Dh,
        icon: Ah,
        audio: {
          roll: fh,
          engine: bh
        },
        wheels: {
          tyreWidth: 0.1,
          width: 1.36,
          length: 2.75,
          radius: 0.342665,
          circumference: 2.1,
          travel: 0.07
        },
        skins: {
          basic: {
            body: 16316664
          }
        },
        metrics: {
          shadowMapSize: 4,
          steerSpeed: 1.57,
          accel: 9,
          reverse: 5,
          jerk: 48,
          brake: 8,
          mass: 700,
          steerAccel: 12,
          maxSteer: 0.68,
          axleHeight: 0.342665,
          dampening: 0.04,
          rockFactor: 4,
          drag: 0.001,
          topSpeed: 45,
          rollResistance: 0.06,
          steerInterval: 1,
          slipBase: 0.2,
          slipMod: 0.1,
          aeroFactor: 0.4,
          headlightPos: {
            x: 0.64,
            y: 0.7,
            z: 3.1
          }
        },
        cameras: Nh
      },
      Rover: {
        enabled: !1,
        name: 'Rover',
        skins: [
        ],
        bodyObj: i(19),
        wheelObj: i(20),
        icon: Ah,
        audio: {
          roll: fh,
          engine: bh
        },
        materials: {
        },
        wheels: {
          tyreWidth: 0.25,
          width: 2,
          length: 3,
          radius: 0.4,
          circumference: 2.513,
          travel: 0.15
        },
        metrics: {
          shadowMapSize: 4,
          steerSpeed: 1.57,
          accel: 7,
          reverse: 5,
          jerk: 48,
          brake: 8,
          mass: 700,
          steerAccel: 12,
          maxSteer: 0.68,
          axleHeight: 0.4,
          dampening: 0.03,
          rockFactor: 5,
          drag: 0.001,
          topSpeed: 35,
          rollResistance: 0.06,
          steerInterval: 1,
          slipBase: 0.1,
          slipMod: 0.05,
          aeroFactor: 0.5,
          headlightPos: {
            x: 0.64,
            y: 0.7,
            z: 3.1
          }
        },
        cameras: Nh
      }
    };
    const Ch = {
      Roadster: Mh.Roadster,
      Bike: Mh.Bike,
      Coach: Mh.Bus
    },
    jh = 1;
    const kh = 0,
    zh = 1,
    Sh = 2,
    Oh = {
      type: 'config-vehicle-type',
      mode: 'config-vehicle-mode',
      input: 'config-vehicle-input'
    },
    Lh = {
      type: 'Roadster',
      mode: 0,
      input: 0
    };
    var Rh = new class extends x {
      constructor() {
        super (),
        this.value = Lh,
        this.loadConfig()
      }
      set(e, t) {
        super.set(e, t),
        window.localStorage.setItem(Oh[e], t)
      }
      resetMemory() {
        for (let e in this.value) window.localStorage.setItem(Oh[e], Lh[e])
      }
      loadConfig() {
        let e,
        t;
        for (t in this.value) e = window.localStorage.getItem(Oh[t]) || Lh[t],
        isNaN(parseInt(e)) || (e = parseInt(e)),
        this[t] = e,
        console.log('VehicleConfig: Load ', t, e),
        this.set(t, e)
      }
    };
    const Th = 'analytics_returningPlayer',
    Ph = 'analytics_lastActive',
    Gh = {
      newUser: null == localStorage.getItem(Th),
      lastActiveTime: localStorage.getItem(Ph)
    };
    var Bh = Gh;
    var Wh = new class {
      constructor() {
        this.speed = 0,
        this.dist = 0
      }
      cosntructor() {
        this.reset()
      }
      reset() {
        this.speed = 0,
        this.dist = 0
      }
    };
    const Eh = [
      0.44704,
      0.277778
    ],
    Zh = [
      90 * Eh[0],
      150 * Eh[1]
    ];
    var Fh = new class extends l {
      getConversion(e) {
        this.conversion = Eh[e],
        this.default = Zh[e],
        null != this.value && this.set(5 * Math.round(this.value / this.conversion / 5) * this.conversion)
      }
      constructor() {
        super (),
        this.default = Zh[0],
        this.value = JSON.parse(window.localStorage.getItem('cruise-control')),
        this.conversion = Eh[f.Units],
        this.getConversionBound = this.getConversion.bind(this),
        this.vehicleTypeChangedBound = this.vehicleTypeChanged.bind(this),
        M.cruisecontrol && !isNaN(M.cruisecontrol) && this.set(M.cruisecontrol / 3.6),
        f.addListener(v.Units, this.getConversionBound),
        Rh.addListener('type', this.vehicleTypeChangedBound)
      }
      vehicleTypeChanged(e) {
        this.default = Math.min(Zh[f.Units], T.metrics.topSpeed),
        null !== this.value && this.set(this.default)
      }
      set(e) {
        if (this.value !== e) {
          if (T.metrics && e > T.metrics.topSpeed) e = T.metrics.topSpeed;
           else if (e < 0) return;
          null != e && (e = Math.max(Math.min(50, e), 0), e = 5 * Math.round(e / this.conversion / 5) * this.conversion),
          window.localStorage.setItem('cruise-control', e),
          this.value = e,
          this.onChanged(this.value)
        }
      }
      inc5() {
        this.set(this.value + 5 * this.conversion)
      }
      dec5() {
        this.set(this.value - 5 * this.conversion)
      }
    };
    var Hh = new class extends l {
    },
    Qh = new l(null);
    const Yh = 'https://34.250.221.219:443',
    Vh = 'initialise',
    Uh = 'feedback',
    Xh = 'analytics_returningPlayer',
    Jh = 'analytics_totalTime',
    qh = 'analytics_totalDist',
    Kh = 'analytics_seeds',
    _h = 'analytics_disable',
    $h = 'analytics_lastVisit',
    eo = 'analytics_lastActive',
    to = 'analytics_revisits',
    io = 'analytics_sessions',
    so = 'analytics_stickySteer';
    var no = new class {
      constructor() {
        this.socket = null,
        this.connected = !1,
        this.playerProfile = {
        },
        this.midlineLoadTime = 0,
        this.envLoadTime = 0,
        this.startTime = Date.now(),
        this.onTickerStateChangedBound = this.onTickerStateChanged.bind(this),
        this.onCruiseTargetBound = this.onCruiseTarget.bind(this),
        this.doInitialiseAnalytics = !1,
        this.analyticsInitialised = !1,
        I.addStateListener(this.onTickerStateChangedBound),
        Fh.addListener(this.onCruiseTargetBound),
        j.addListener((e=>{
          this.sendUpdate('autodrive', e)
        })),
        this.loadPlayerProfile(),
        this.initialiseConnection()
      }
      onTickerStateChanged(e) {
        this.connected && this.sendUpdate('paused', e)
      }
      onCruiseTarget(e) {
        this.connected && this.sendUpdate('cruiseControl', e)
      }
      checkLocation(e) {
        var t = new XMLHttpRequest;
        t.open('GET', 'https://ipapi.co/json'),
        t.setRequestHeader('Content-Type', 'application/json'),
        t.timeout = 3000,
        t.send(null),
        t.onreadystatechange = function () {
          if (4 === t.readyState && 200 === t.status) try {
            var i = JSON.parse(t.response);
            console.log('Analytics: Got location of ', i.country_name),
            e({
              country: i.country,
              city: i.city,
              region: i.region
            })
          } catch (Kc) {
            e({
              country: 'unknown',
              city: 'unknown',
              region: 'unknown'
            })
          }
        }
      }
      initialiseConnection() {
        if (window.localStorage.getItem('analytics-disabled')) return console.log('Analytics: Disabled; will not connect'),
        window.localStorage.removeItem('unsent-feedback'),
        void (this.socket = {
          emit: () =>{
          }
        });
        this.connected || (console.log('Analytics: Initialising socket'), this.socket = Object(_e.a) (Yh, {
          reconnection: !1,
          rejectUnauthorized: !1
        }), this.socket.on('connect', (() =>{
          console.log('Analytics: Connected'),
          this.connected = !0,
          this.doInitialiseAnalytics && this.initialiseAnalytics(),
          g() && this.sendUpdate('mobile', !0)
        })), this.socket.on('pre_initialise', (e=>{
          Qh.set(e.cumulativeMeters);
          let t = document.getElementById('splash-player-count');
          t && e.playerCount && (t.innerHTML = e.playerCount + ' playing &#183; '),
          e.latestVersion && ((e, t) =>{
            if (e === t) return 0;
            let i = $i(t),
            s = $i(e);
            return 100000 * s.major + 10000 * s.minor + 1000 * s.patch + 10 * s.release + s.releaseVersion > 100000 * i.major + 10000 * i.minor + 1000 * i.patch + 10 * i.release + i.releaseVersion ? 1 : - 1
          }) (e.latestVersion, es) > 0 && (console.log('! Version out of date - prompting refresh'), document.getElementById('update-alert').style.display = 'block')
        })), this.socket.on('connect_error', (e=>{
          console.error('Analytics: Connection failed'),
          console.error(e),
          this.connected = !1
        })), Hh.set(this.socket))
      }
      initialiseAnalytics() {
        if (this.getStorage(_h)) return;
        if (this.analyticsInitialised) return;
        if (window.onbeforeunload = () =>this.savePlayerProfile(), !this.connected) return void (this.doInitialiseAnalytics = !0);
        let e = {
          sceneConfig: {
            seed: Ve,
            ...wh.value,
            initNode: wh.initialNode,
            accumProg: wh.accumulatedProgress
          },
          vehConfig: Rh.value,
          playerProfile: this.playerProfile
        };
        'default' == wh.value.skin && ('Planet' == wh.value.sceneName ? e.sceneConfig.skin = 'mars' : e.sceneConfig.skin = 'summer'),
        window.localStorage.getItem('analytics-nowrite') && (e.playerProfile.noWriteAnalytics = !0),
        this.socket.emit(Vh, e),
        this.sendCachedFeedback(),
        this.analyticsInitialised = !0
      }
      loadPlayerProfile() {
        let e = {
          totalTime: 0,
          totalDist: 0,
          seeds: [
          ],
          browser: this.checkBrowser(),
          resolution: {
            w: window.screen.width,
            h: window.screen.height
          },
          midlineLoadTime: this.midlineLoadTime,
          envLoadTime: this.envLoadTime,
          visitTime: Date.now(),
          revisitCount: 0,
          isRevisit: !1,
          lastVisit: null,
          cameraMode: 'Chase',
          isMobile: g(),
          version: es,
          sessionCount: 1,
          stickySteerCount: 0,
          pixelRatio: window.devicePixelRatio
        };
        if (e.returningPlayer = !Bh.newUser, e.totalTime = 0, e.returningPlayer) if (e.totalTime = this.getStorage(Jh, parseInt) || 0, e.totalDist = this.getStorage(qh, parseInt) || 0, e.seeds = this.getStorage(Kh) || [
        ], e.lastVisit = this.getStorage($h, parseInt) || null, e.lastActive = this.getStorage(eo, parseInt) || null, e.revisitCount = this.getStorage(to, parseInt) || 0, e.sessionCount = this.getStorage(io, parseInt) || 1, e.stickySteerCount = this.getStorage(so, parseInt) || 0, e.sessionCount++, e.lastActive) {
          Date.now() - e.lastActive > 30000 && (e.revisitCount++, e.isRevisit = !0)
        } else e.revisitCount++,
        e.isRevisit = !0;
        return this.playerProfile = e,
        this.recordSeed(Ve),
        this.playerProfile
      }
      recordSeed(e) {
        this.playerProfile.seeds.includes(e) || this.playerProfile.seeds.push(e)
      }
      savePlayerProfile() {
        this.playerProfile && (this.playerProfile.totalDist += Wh.dist, this.setStorage(Xh, !0), this.setStorage(Jh, Math.floor(this.playerProfile.totalTime + 1000 * I.playTime)), this.setStorage(qh, this.playerProfile.totalDist), this.setStorage(Kh, this.playerProfile.seeds), this.setStorage($h, this.playerProfile.visitTime), this.setStorage(eo, Date.now()), this.setStorage(to, this.playerProfile.revisitCount), this.setStorage(io, this.playerProfile.sessionCount), this.setStorage(so, this.playerProfile.stickySteerCount))
      }
      sendFeedback(e) {
        if (this.connected) this.sendUpdate(Uh, e);
         else {
          let t = [
          ];
          if (window.localStorage.getItem('unsent-feedback')) try {
            t = JSON.parse(window.localStorage.getItem('unsent-feedback'))
          } catch (Kc) {
            t = [
            ]
          }
          t.push(e),
          window.localStorage.setItem('unsent-feedback', JSON.stringify(t))
        }
      }
      sendCachedFeedback() {
        let e = [
        ];
        if (window.localStorage.getItem('unsent-feedback')) try {
          e = JSON.parse(window.localStorage.getItem('unsent-feedback'));
          for (let t of e) this.sendUpdate(Uh, t)
        } catch (Kc) {
          console.error('Could not write unsent feedback from prior session')
        }
        window.localStorage.removeItem('unsent-feedback')
      }
      sendUpdate(e, t) {
        var i;
        null === (i = this.socket) || void 0 === i || i.emit(e, t)
      }
      getStorage(e, t = null) {
        let i = null;
        try {
          i = JSON.parse(window.localStorage.getItem(e)),
          'function' === typeof t && (i = t(i))
        } catch (Kc) {
          console.warn('Could not parse analytics item ', e),
          console.log(window.localStorage.getItem(e)),
          console.log(Kc),
          window.localStorage.removeItem(e)
        }
        return i
      }
      setStorage(e, t) {
        void 0 !== t && ('number' === typeof t && isNaN(t) ? console.warn('Attempting to store NaN value ', e) : window.localStorage.setItem(e, JSON.stringify(t)))
      }
      checkBrowser() {
        return - 1 != (navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) ? 'Opera' : - 1 != navigator.userAgent.indexOf('Edg') ? 'Edge' : - 1 != navigator.userAgent.indexOf('Chrome') ? 'Chrome' : - 1 != navigator.userAgent.indexOf('Safari') ? 'Safari' : - 1 != navigator.userAgent.indexOf('Firefox') ? 'Firefox' : - 1 != navigator.userAgent.indexOf('MSIE') || 1 == !!document.documentMode ? 'IE' : 'unknown'
      }
      logStickySteer() {
        this.playerProfile.stickySteerCount++,
        this.sendUpdate('stickySteer', this.playerProfile.stickySteerCount)
      }
    };
    var ao = new h.P;
    const ro = new h.C({
      color: 110832,
      fog: !1,
      depthTest: !1
    });
    h.G;
    class ho extends h.G {
      constructor(e) {
        super ();
        let t = new h.S(0.5, 8, 8);
        this.mesh = new h.B(t, ro.clone()),
        (null === e || void 0 === e ? void 0 : e.scale) && this.scale.set(e.scale, e.scale, e.scale),
        (null === e || void 0 === e ? void 0 : e.color) && this.mesh.material.color.setHex(e.color),
        this.add(this.mesh),
        ao.add(this)
      }
    }
    const oo = Math.floor(le / 2);
    let lo = !1;
    const co = 10,
    po = (wh.value.topography, 0.463),
    uo = 10,
    go = 2,
    mo = 0.18,
    xo = {
    },
    vo = {
      vecA: new h.W,
      vecB: new h.W
    };
    var wo = class {
      constructor(e = !1) {
        this.lineMat = new h.w({
          color: 16724787
        }),
        this.lineIndex = 0,
        this.head = null,
        this.tail = null,
        this.discretisedTail = null,
        this.origin = new h.W,
        this.prevOriginSide = 0,
        this.originOverflow = 0,
        this.antiTarget = new h.W,
        this.antiTargetRevert = 40,
        this.antiTargetRange = 0,
        this.antiTargetDebug = lo ? new ho({
          color: 16711935,
          scale: 10
        }) : null,
        this.antiTargetTrigger = 0,
        this.antiTargetTriggerPoint = new h.W,
        this.antiTargetTriggerCount = 0,
        this.antiWeight = 0,
        this.antiResetIndex = 0,
        this.maxRetractIndex = 0,
        this.bridging = !1,
        this.antiBridgePoint = new h.W,
        this.bridge = {
          landing: new h.W,
          distance: 0,
          spawnNode: null
        },
        this.turnTrackers = [
          {
            i: 0,
            m: 15,
            r: 15,
            n: null,
            a: 3.3,
            da: 0,
            o: 0
          },
          {
            i: 1,
            m: 30,
            r: 10,
            n: null,
            a: 3.3,
            da: 0,
            o: 0.5
          },
          {
            i: 2,
            m: 60,
            r: 15,
            n: null,
            a: 3.4,
            da: 0,
            o: 0.75
          },
          {
            i: 3,
            m: 120,
            r: 20,
            n: null,
            a: 3.6,
            da: 0,
            o: 0.8
          }
        ],
        this.trackIndex = null,
        this.vehicleDebug = lo ? new ho({
          color: 16711680,
          scale: 0.5
        }) : null,
        this.antiDir = new h.W,
        this.originDir = new h.W(0, 0, 1),
        this.midlineDir = new h.W,
        this.midlineOrth = new h.W,
        this.hasInitGeneration = !1,
        this.generationResets = 0,
        this.hasInitSmoothing = !1,
        this.hasInitDiscretisation = !1,
        this.loaderIteration = 0,
        this.tVec = new h.W,
        this.h1 = 0,
        this.h2 = 0,
        this.feelDir = new h.W(1, 0, 0.5),
        this.feelLeft = lo ? new ho({
          color: 255,
          scale: 1
        }) : null,
        this.feelRight = lo ? new ho({
          color: 16711680,
          scale: 1
        }) : null,
        this.prevT = 0,
        this.byWater = !1,
        this.waterFactor = 0,
        this.closestApproach = 0,
        this.trackRevertCount = 0,
        this.allowEmergencyBridge = !1,
        this.landing = new h.W,
        this.smoothWindowHead = null,
        this.doUpdate = 0,
        this.didExtend = !1,
        this.lineOrigin = new h.W,
        this.container = new h.G,
        lo = !1,
        lo && (this.lineArr = new Float32Array(150000), this.lineGeo = new h.g, this.lineGeo.setAttribute('position', new h.f(this.lineArr, 3)), this.lineGeo.attributes.position.updateRange.count = 0, this.line = new h.v(this.lineGeo, this.lineMat), this.container.add(this.line))
      }
      initialise(e, t, i) {
        return this.heightmap = t,
        this.hasInitGeneration = !1,
        this.generationResets = 0,
        this.hasInitSmoothing = !1,
        this.hasInitDiscretisation = !1,
        this.loaderIteration = 0,
        this.maxResets = wh.initialNode / 30 + 50,
        st.vehicleIndex = 0,
        st.vehicleIndexDidChange = !0,
        this.reset(e, i)
      }
      loader() {
        if (!this.hasInitGeneration) {
          if (st.tail.i < wh.initialNode + ae) {
            if (this.extendMidline() || this.generationResets++, 320 == this.antiTargetRevert || this.generationResets > this.maxResets || null == st.tail.prev) {
              if (this.generationResets = 0, this.antiTargetRevert = 15, console.error('Bad seed ', st.head.a), delete st.head.next, st.head.next = null, st.head.a += this.rand(), st.head.a > 6.28) return - 1;
              for (xo.tracker of(this.originDir.set(Math.cos(st.head.a), 0, Math.sin(st.head.a)), st.tail = st.head, this.smoothWindowHead = st.head, this.turnTrackers)) xo.tracker.n = st.head,
              xo.tracker.da = 0;
              this.resetBridgeState(),
              this.bridging = !1,
              this.trackRevertCount = 0,
              this.antiTargetRevert = 0
            }
          } else {
            for (this.hasInitGeneration = !0, xo.n = st.head, xo.i = 0; xo.i <= oo; xo.i++) xo.h = {
              i: 0 - (xo.i + 1),
              p: st.head.p.clone(),
              c: st.head.c.clone(),
              h: 0,
              next: xo.n,
              prev: null
            },
            xo.n.prev = xo.h,
            xo.n = xo.n.prev;
            this.smoothWindowHead = xo.n
          }
          return st.tail.i - st.head.i > ae && (st.head = st.head.next, delete st.head.prev, st.head.prev = null, st.vehicleNode = st.head),
          st.tail.i / (wh.initialNode + ae) * 0.8
        }
        return this.hasInitSmoothing ? this.hasInitDiscretisation ? void 0 : st.discretisedTail.i < st.vehicleIndex + oe ? (this.discretiseNext(), 0.9 + st.discretisedTail.i / (st.vehicleIndex + oe) * 0.0999) : (this.hasInitDiscretisation = !0, 1) : (this.smoothWindowHead.i < st.tail.i - le ? this.smoothHeight() : (this.hasInitSmoothing = !0, delete st.head.prev, this.resetDiscretised()), 0.8 + this.smoothWindowHead.i / (st.tail.i - le) * 0.1)
      }
      finalise() {
        for (st.vehicleNode = st.head, xo.i = 0; xo.i < 5; xo.i++) st.vehicleNode = st.vehicleNode.next;
        st.vehicleIndex = st.vehicleNode.i,
        st.vehicleIndexDidChange = !0
      }
      destroy() {
        this.revert(),
        lo && this.lineGeo.dispose()
      }
      revert() {
        for (xo.t of(delete st.head, delete st.discretisedTail, delete st.tail, delete st.vehicleNode, this.turnTrackers)) xo.t.n = null
      }
      reset(e, t) {
        for (xo.tracker of(this.revert(), this.rand = new window.alea(e), st.head = {
          i: 0,
          p: new h.W(t.x, this.heightmap.getXZ(t.x, t.z, this.heightmap.midlineDepth), t.z),
          n: {
            x: 1,
            z: 0
          },
          a: Math.PI / 2,
          da: 0,
          t: 0,
          c: new h.W,
          w: Te,
          g: 0,
          gfa: 0,
          h: 0,
          ps: null,
          ns: null,
          next: null,
          prev: null
        }, st.tail = st.head, st.vehicleNode = st.head, st.vehicleIndex = st.head.i, st.vehicleIndexDidChange = !0, this.originDir.set(Math.cos(st.head.a), 0, Math.sin(st.head.a)), this.origin.copy(st.head.p), lo && (this.lineOrigin.copy(this.origin), this.line.position.copy(this.lineOrigin), this.line.position.y = 0), this.smoothWindowHead = st.head, this.turnTrackers)) xo.tracker.n = st.head,
        xo.tracker.da = 0
      }
      processCurve(e, t, i, s, n = !1) {
        for (xo.ps = [
        ], xo.ns = [
        ], xo.i = 0; xo.i < s; xo.i++) xo.t = xo.i / s,
        xo.ti = 1 - xo.t,
        xo.x = xo.ti * xo.ti * e.p.x + 2 * xo.ti * xo.t * t.x + xo.t * xo.t * i.p.x,
        xo.z = xo.ti * xo.ti * e.p.z + 2 * xo.ti * xo.t * t.z + xo.t * xo.t * i.p.z,
        xo.ps.push({
          x: xo.x,
          y: xo.ti * xo.ti * e.p.y + 2 * xo.ti * xo.t * t.y + xo.t * xo.t * i.p.y,
          z: xo.z
        }),
        n && xo.i > 0 && (xo.dx = xo.x - xo.ps[xo.i - 1].x, xo.dz = xo.z - xo.ps[xo.i - 1].z, xo.dxz = Math.sqrt(xo.dx * xo.dx + xo.dz * xo.dz), xo.ns.push({
          x: - xo.dz / xo.dxz,
          z: xo.dx / xo.dxz
        }));
        return n && (xo.dx = i.x - xo.ps[s - 1].x, xo.dz = i.z - xo.ps[s - 1].z, xo.dxz = Math.sqrt(xo.dx * xo.dx + xo.dz * xo.dz), xo.ns.push({
          x: - xo.dz / xo.dxz,
          z: xo.dx / xo.dxz
        })),
        {
          ps: xo.ps,
          ns: xo.ns
        }
      }
      stitchNormals(e, t) {
        let i,
        s,
        n,
        a = e.ps[e.ps.length - 2];
        i = t.ps[0].x - a.x,
        s = t.ps[0].z - a.z,
        n = Math.sqrt(i * i + s * s),
        e.ns[e.ps.length - 1] = {
          x: - s / n,
          z: i / n
        },
        a = e.ps[e.ps.length - 1],
        i = t.ps[1].x - a.x,
        s = t.ps[1].z - a.z,
        n = Math.sqrt(i * i + s * s),
        t.ns[0] = {
          x: - s / n,
          z: i / n
        };
        for (let r = 1; r < t.ps.length - 1; r++) i = t.ps[r + 1].x - t.ps[r - 1].x,
        s = t.ps[r + 1].z - t.ps[r - 1].z,
        n = Math.sqrt(i * i + s * s),
        t.ns[r] = {
          x: - s / n,
          z: i / n
        }
      }
      resetDiscretised() {
        st.discretisedTail = st.head,
        st.vehicleIndex = st.head.i,
        st.vehicleNode = st.head,
        xo.head = st.head,
        xo.pc = this.processCurve(xo.head, xo.head.c, xo.head.next, 10, !0),
        st.head.ps = xo.pc.ps,
        st.head.ns = xo.pc.ns,
        st.vehicleNode = st.head
      }
      discretiseNext() {
        xo.nextTail = st.discretisedTail.next,
        xo.pc = this.processCurve(xo.nextTail, xo.nextTail.c, xo.nextTail.next, 10),
        this.stitchNormals(st.discretisedTail, xo.pc),
        xo.nextTail.ps = xo.pc.ps,
        xo.nextTail.ns = xo.pc.ns,
        st.discretisedTail = xo.nextTail
      }
      drawFeelers(e) {
        this.feelLeft.position.copy(st.tail.p),
        this.feelRight.position.copy(st.tail.p);
        let t = Math.cos(st.tail.a - po) * e + st.tail.p.x,
        i = Math.sin(st.tail.a - po) * e + st.tail.p.z;
        this.feelLeft.position.set(t, this.heightmap.getXZ(t, i, this.heightmap.midlineDepth), i),
        t = Math.cos(st.tail.a + po) * e + st.tail.p.x,
        i = Math.sin(st.tail.a + po) * e + st.tail.p.z,
        this.feelRight.position.set(t, this.heightmap.getXZ(t, i, this.heightmap.midlineDepth), i)
      }
      extendMidline() {
        if (this.didExtend = !0, lo && this.lineIndex >= 150000) return;
        for (vo.tracker of(st.tail.i > ae && st.tail.i - st.vehicleIndex < re && !this.allowEmergencyBridge && !this.bridging && (console.warn('Midline stuck; safe horizon no longer safe. Allowing emergency bridge'), this.allowEmergencyBridge = !0), xo.feelDist = co * (1 + this.waterFactor), xo.feelL = this.heightmap.getXZ(Math.cos(st.tail.a - po) * xo.feelDist + st.tail.p.x, Math.sin(st.tail.a - po) * xo.feelDist + st.tail.p.z, this.heightmap.midlineDepth), xo.feelR = this.heightmap.getXZ(Math.cos(st.tail.a + po) * xo.feelDist + st.tail.p.x, Math.sin(st.tail.a + po) * xo.feelDist + st.tail.p.z, this.heightmap.midlineDepth), xo.feelA = this.heightmap.getXZ(st.tail.p.x, st.tail.p.z, this.heightmap.midlineDepth), xo.feelA = Math.max(xo.feelA, go), this.waterFactor = 0, this.byWater = !1, (xo.feelR < 2 * go || xo.feelL < 2 * go) && (this.byWater = !0), xo.feelAvg = (xo.feelR + xo.feelL) / 2, xo.feelAvg < 3 * go && (xo.feelAvg > go ? this.waterFactor = 1 - (xo.feelAvg - go) / (2 * go) : this.waterFactor = 1), xo.feelDif = (xo.feelR - xo.feelL) / 2, xo.gradLat = (xo.feelL - xo.feelR) / xo.feelDist, xo.gradLat /= mo, xo.gradLon = (xo.feelAvg - xo.feelA) / xo.feelDist, xo.gradLon /= mo, xo.bT = 0, 0 !== xo.feelDif && (xo.bT = (xo.feelAvg - xo.feelA) / xo.feelDif), xo.bT = Math.max(Math.min(xo.bT, 1), - 1), this.midlineDir.set(Math.cos(st.tail.a), 0, Math.sin(st.tail.a)), this.midlineOrth.set( - this.midlineDir.z, 0, this.midlineDir.x), vo.originDot = Math.max(Math.min(1, this.midlineDir.dot(this.originDir)), - 1), vo.originSide = - 1 * this.midlineOrth.dot(this.originDir), 0 != vo.originSide && (vo.originSide /= Math.abs(vo.originSide)), vo.originSide == this.prevOriginSide && this.originOverflow > 1.5 && (1 == vo.originSide ? vo.originSide = - 2 : vo.originSide = 2), vo.originSide !== this.prevOriginSide ? vo.originSide > this.prevOriginSide ? this.prevT < 0 ? (this.originOverflow += this.prevT, this.originOverflow > 0 ? (vo.originSide = this.prevOriginSide, vo.originDot = - 1) : this.originOverflow = 0) : this.prevT > 0 && (this.originOverflow += this.prevT, vo.originSide = this.prevOriginSide, vo.originDot = - 1) : this.prevT > 0 ? (this.originOverflow -= this.prevT, this.originOverflow > 0 ? (vo.originSide = this.prevOriginSide, vo.originDot = - 1) : this.originOverflow = 0) : this.prevT < 0 && (this.originOverflow -= this.prevT, vo.originSide = this.prevOriginSide, vo.originDot = - 1) : this.originOverflow = 0, this.prevOriginSide = vo.originSide, vo.originAng = Math.acos(vo.originDot), xo.gradLeft = (xo.feelL - xo.feelA) / xo.feelDist / mo, xo.gradRight = (xo.feelR - xo.feelA) / xo.feelDist / mo, xo.maxT = 1, xo.minT = - 1, xo.gradLeftAbs = Math.abs(xo.gradLeft), xo.gradRightAbs = Math.abs(xo.gradRight), (xo.gradLeftAbs > 1 || xo.gradRightAbs > 1) && (xo.gradDif = (xo.gradLeft - xo.gradRight) / 2, xo.gradAvg = (xo.gradLeft + xo.gradRight) / 2, xo.gradLeft > 1 && xo.gradRight > 1 || xo.gradLeft < - 1 && xo.gradRight < - 1 ? xo.gradLeftAbs < xo.gradRightAbs ? (xo.maxT = 1, xo.minT = 1) : (xo.maxT = - 1, xo.minT = - 1) : (xo.gradLeftAbs > 1 && (xo.gradLeft < 0 ? xo.maxT = (1 + xo.gradAvg) / Math.abs(xo.gradDif) : xo.maxT = (1 - xo.gradAvg) / Math.abs(xo.gradDif)), xo.gradRightAbs > 1 && (xo.gradRight < 0 ? xo.minT = (1 + xo.gradAvg) / Math.abs(xo.gradDif) : xo.minT = (1 - xo.gradAvg) / Math.abs(xo.gradDif), xo.minT *= - 1))), xo.gradAvg = (Math.abs(xo.gradLat) + Math.abs(xo.gradLon)) / 2, xo.maxDif = 0.5 + 0.5 * Math.abs(xo.gradAvg), xo.maxT *= 1.5, xo.minT *= 1.5, xo.maxT > 0 && (xo.maxT = Math.min(xo.maxT, this.prevT + xo.maxDif)), xo.minT < 0 && (xo.minT = Math.max(xo.minT, this.prevT - xo.maxDif)), this.byWater && (xo.gradLat < 0 ? xo.maxT > 0 && (xo.maxT *= 1 - this.waterFactor) : xo.minT < 0 && (xo.minT *= 1 - this.waterFactor)), xo.bT = Math.max(Math.min(xo.maxT, xo.bT), xo.minT), !this.bridging && this.byWater && (vo.originSide < 0 && xo.gradLat > 0 || vo.originSide > 0 && xo.gradLat < 0) && (this.tVec.set(0, 0, 0), (0 == this.originOverflow && this.allowEmergencyBridge || xo.gradLon < - 0.3 && Math.abs(xo.gradLat) < 1) && (this.tVec.x = this.midlineDir.x, this.tVec.z = this.midlineDir.z, this.tVec.normalize(), this.testForBridge(st.tail.prev, 1, this.tVec)), this.tVec.x = st.tail.prev.n.x * - vo.originSide, this.tVec.z = st.tail.prev.n.z * - vo.originSide, this.tVec.normalize(), this.testForBridge(st.tail.prev, 1, this.tVec), this.allowEmergencyBridge && (this.tVec.x += this.midlineDir.x, this.tVec.z += this.midlineDir.z, this.tVec.normalize(), this.testForBridge(st.tail.prev, 1, this.tVec))), xo.gradLon2 = xo.gradLon * xo.gradLon, xo.gradLon2 <= 1 ? (!this.byWater || xo.gradLon > 0) && (xo.bT *= Math.abs(xo.gradLon2)) : xo.bT < 0 ? xo.bT = xo.minT : xo.bT = xo.maxT, xo.bT = Math.max(Math.min(xo.maxT, xo.bT), xo.minT), this.antiWeight = 0, this.antiTargetRange > 0 && (vo.d = st.tail.p.x - this.antiTarget.x, vo.d = vo.d * vo.d + (st.tail.p.z - this.antiTarget.z) * (st.tail.p.z - this.antiTarget.z), this.antiDir.set(this.antiTarget.x - st.tail.p.x, 0, this.antiTarget.z - st.tail.p.z), this.antiDir.normalize(), vo.antiDot = this.midlineDir.dot(this.antiDir), vo.d < this.antiTargetRange ? (this.antiWeight = 1 - vo.d / this.antiTargetRange, vo.antiSide = this.midlineOrth.dot(this.antiDir), vo.antiRedirect = 2 * po * vo.antiSide, vo.antiAdjust = (vo.antiDot + 1) / 2, this.antiWeight *= vo.antiAdjust, vo.antiRedirect = Math.max(Math.min(xo.maxT, vo.antiRedirect), xo.minT), xo.bT = this.antiWeight * vo.antiRedirect + (1 - this.antiWeight) * xo.bT) : vo.antiDot < - 0.707 && (this.antiTargetRange = 0, this.trackIndex = null, this.trackRevertCount = 0)), vo.originAdjust = (1 - (vo.originDot + 1) / 2) * (1 - this.waterFactor * this.waterFactor), vo.originAdjust *= 1 - this.antiWeight, vo.originRedirect = vo.originAng * vo.originSide / po, vo.originRedirect = Math.max(Math.min(xo.maxT, vo.originRedirect), xo.minT), xo.bT = vo.originAdjust * vo.originRedirect + (1 - vo.originAdjust) * xo.bT, vo.shouldBridge = !this.bridging && this.byWater && this.bridge.spawnNode && st.tail.i - this.bridge.spawnNode.i < 150 && (this.originOverflow > 0 || this.allowEmergencyBridge), this.turnTrackers)) if (vo.tracker.da += st.tail.da, vo.tracker.n.i <= st.tail.i - vo.tracker.m && (vo.tracker.da -= vo.tracker.n.da, vo.tracker.n = vo.tracker.n.next), Math.abs(vo.tracker.da) > vo.tracker.a && (this.byWater || vo.originDot < vo.tracker.o) || vo.shouldBridge) {
          for (this.bridging && (vo.shouldBridge = !1, this.bridging = !1, this.bridge.spawnNode = null), vo.shouldBridge || this.trackRevertCount++, (vo.shouldBridge || this.trackRevertCount > 5 && this.bridge.spawnNode && st.tail.i - this.bridge.spawnNode.i < this.antiTargetRevert) && (this.bridging = !0, this.improveBridgeStartNode(), this.bridge.landing.y = (this.bridge.spawnNode.p.y + this.bridge.landing.y) / 2, this.bridge.height = this.bridge.landing.y), this.didExtend = !1, vo.revertDistance = 0, this.bridging ? (this.trackIndex = null, this.antiTargetRange = 0, this.antiTargetTrigger = st.tail.i, vo.revertDistance = st.tail.i - this.bridge.spawnNode.i) : Math.abs(this.antiResetIndex - st.tail.i) < 2 * vo.tracker.m || this.trackIndex == vo.tracker.i && this.antiWeight > 0 ? (this.antiTargetTriggerCount++, this.antiTargetRevert += this.antiTargetTriggerCount * vo.tracker.r, st.tail.i - this.antiTargetRevert < this.maxRetractIndex && (this.antiTarget.copy(st.tail.p), this.antiTargetRevert = st.tail.i - this.maxRetractIndex, console.warn('Max revert; allowing emergency bridge'), this.allowEmergencyBridge = !0), vo.revertDistance = this.antiTargetRevert) : (this.trackIndex = vo.tracker.i, this.antiTarget.copy(st.tail.p), this.antiTargetRevert = vo.tracker.m, this.antiTargetTrigger = st.tail.i, this.antiTargetTriggerPoint.copy(this.antiTarget), this.antiTargetTriggerCount = 0, vo.revertDistance = this.antiTargetRevert), vo.resetIndex = st.tail.i - vo.revertDistance; st.tail.i > vo.resetIndex; ) {
            var e;
            if (!st.tail.bridge && (null === (e = st.tail.prev) || void 0 === e ? void 0 : e.bridge)) {
              for (vo.bn = st.tail.prev; null === (t = vo.bn) || void 0 === t ? void 0 : t.bridge; ) {
                var t;
                vo.bn = vo.bn.prev
              }
              if (vo.bn.i < vo.resetIndex) break;
              this.antiBridgePoint.copy(st.tail.p)
            }
            if (null == st.tail.prev || st.tail.i - st.head.i < le) break;
            st.tail = st.tail.prev,
            delete st.tail.next,
            st.tail.next = null
          }
          if (this.smoothWindowHead.i > st.tail.i - le) for (vo.startI = 0, this.smoothWindowHead.i <= st.tail.i ? vo.startI = Math.max(0, st.tail.i - this.smoothWindowHead.i) : (this.smoothWindowHead = st.tail, this.smoothWindowHead.p.y += this.smoothWindowHead.h), vo.i = vo.startI; vo.i <= le; vo.i++) this.smoothWindowHead.prev && (this.smoothWindowHead = this.smoothWindowHead.prev, this.smoothWindowHead.p.y += this.smoothWindowHead.h);
          for (vo.tracker2 of(this.bridging || (this.antiTargetRange = 4 * this.antiTarget.distanceToSquared(st.tail.p), this.antiResetIndex = st.tail.i), !this.bridging && this.bridge.spawnNode && this.bridge.spawnNode.i > st.tail.i && this.resetBridgeState(), st.vehicleIndex > st.tail.i && (st.vehicleIndex = st.tail.i, st.vehicleNode = st.tail), this.hasInitGeneration && st.tail.i - re + 100 < st.vehicleIndex && (console.error('Midline reset violation'), console.log(st.vehicleIndex, st.tail.i)), this.turnTrackers)) for (vo.tracker2.n = st.tail, vo.tracker2.da = st.tail.da, vo.i = 0; vo.i < vo.tracker2.m && vo.tracker2.n.prev; vo.i++) vo.tracker2.n = vo.tracker2.n.prev,
          vo.tracker2.da += vo.tracker2.n.da;
          return this.prevT = st.tail.t,
          this.waterFactor = Math.max(Math.min(1, 1 - (st.tail.p.y - go) / (2 * go)), 0),
          'o' in st.tail ? st.tail.o < 0 ? (this.prevOriginSide = - 1, this.originOverflow = - st.tail.o) : (this.prevOriginSide = 1, this.originOverflow = st.tail.o) : (this.midlineDir.set(Math.cos(st.tail.a), 0, Math.sin(st.tail.a)), this.midlineOrth.set( - this.midlineDir.z, 0, this.midlineDir.x), vo.originDot = this.midlineDir.dot(this.originDir), vo.originSide = - 1 * this.midlineOrth.dot(this.originDir), 0 != vo.originSide && (vo.originSide /= Math.abs(vo.originSide)), this.prevOriginSide = vo.originSide, this.originOverflow = 0),
          !1
        }
        this.bridging && (vo.vecA.set(this.bridge.landing.x - st.tail.p.x, 0, this.bridge.landing.z - st.tail.p.z).normalize(), vo.vecB.set(st.tail.p.x - st.tail.prev.p.x, 0, st.tail.p.z - st.tail.prev.p.z).normalize(), st.tail.p.distanceTo(this.bridge.landing) < 10 && (this.bridging = !1, this.allowEmergencyBridge = !1, this.resetBridgeState()), xo.dot = Math.min(vo.vecA.dot(vo.vecB), 1), xo.side = (this.bridge.landing.x - st.tail.p.x) * vo.vecB.z - (this.bridge.landing.z - st.tail.p.z) * vo.vecB.x, xo.side = xo.side < 0 ? - 1 : 1, xo.bT = Math.min(Math.max(Math.acos(xo.dot), - 1.5), 1.5) * xo.side),
        this.prevT = xo.bT,
        xo.bDir = st.tail.a - xo.bT * po,
        xo.bDir < - Math.PI ? xo.bDir += 2 * Math.PI : xo.bDir > Math.PI && (xo.bDir -= 2 * Math.PI),
        vo.cDist = 0.5 * uo,
        vo.x = Math.cos(st.tail.a) * vo.cDist + st.tail.p.x,
        vo.z = Math.sin(st.tail.a) * vo.cDist + st.tail.p.z,
        vo.roadSinkFactor = 0.1 * (1 - this.waterFactor),
        st.tail.c.x = vo.x,
        st.tail.c.y = st.tail.p.y,
        st.tail.c.z = vo.z,
        vo.nx = vo.x - st.tail.p.x,
        vo.nz = vo.z - st.tail.p.z,
        vo.nxz = Math.sqrt(vo.nx * vo.nx + vo.nz * vo.nz),
        st.tail.n = {
          x: - vo.nz / vo.nxz,
          z: vo.nx / vo.nxz
        },
        vo.x = Math.cos(xo.bDir) * vo.cDist + vo.x,
        vo.z = Math.sin(xo.bDir) * vo.cDist + vo.z;
        let i = {
          i: st.tail.i + 1,
          p: new h.W(vo.x, (this.bridging ? this.bridge.height : Math.max(this.heightmap.getXZ(vo.x, vo.z, this.heightmap.midlineDepth), go)) - vo.roadSinkFactor, vo.z),
          a: xo.bDir,
          da: xo.bT * po,
          h: 0,
          c: new h.W,
          t: xo.bT,
          n: {
            x: 0,
            z: 1
          },
          w: Te,
          g: xo.gradLat,
          gfa: Math.abs(xo.gradLon),
          next: null,
          prev: st.tail
        };
        return this.bridging && (i.bridge = !0),
        st.tail.c.y = (st.tail.c.y + i.p.y) / 2,
        this.originOverflow > 0 && (i.o = this.originOverflow * vo.originSide),
        st.tail.next = i,
        isNaN(vo.x) ? (console.log('NAN x AT INDEX ' + i.i), console.log('bT ', xo.bT), console.log('bDir ', xo.bDir), console.log('E.originDot ', vo.originDot), console.log('originAdjust ', vo.originAdjust), console.log('OriginRedirect ', vo.originRedirect), console.log('OriginSide ', vo.originSide), console.log('originAng ', vo.originAng), console.log('Origindir ', this.originDir), console.log('Min max ', xo.minT, xo.maxT), console.log('Gradlat, lon ', xo.gradLat, xo.gradLon), console.log('gradAVg ', xo.gradAvg), console.log('antiWeight ', this.antiWeight), console.log('feelL, feelR ', xo.feelL, xo.feelR), console.log('feelAvg ', xo.feelAvg), console.log('feelDif ', xo.feelDif), console.log('waterFactor ', this.waterFactor), console.log('maxDif ', xo.maxDif), !1) : (lo && this.drawPoints(st.tail), st.tail = i, this.maxRetractIndex = Math.max(this.maxRetractIndex, st.tail.i - he), st.tail.i > 1640 && st.tail.i, !0)
      }
      resetBridgeState() {
        this.bridge.spawnNode = null,
        this.bridge.distance = 0,
        this.bridge.landing.set(0, 0, 0)
      }
      improveBridgeStartNode() {
        let e,
        t,
        i = this.bridge.spawnNode.prev,
        s = this.bridge.spawnNode.p.distanceToSquared(this.bridge.landing),
        n = new h.V,
        a = new h.V;
        a.x = i.p.x - i.prev.p.x,
        a.y = i.p.z - i.prev.p.z,
        a.normalize(),
        n.set(this.bridge.landing.x - i.p.x, this.bridge.landing.z - i.p.z).normalize(),
        t = a.dot(n);
        let r = a.dot(n);
        for (let h = 0; h < 20 && i.prev && !(Math.abs(i.p.y - this.bridge.landing.y) > 2); h++) e = i.p.distanceToSquared(this.bridge.landing),
        a.x = i.p.x - i.prev.p.x,
        a.y = i.p.z - i.prev.p.z,
        a.normalize(),
        n.set(this.bridge.landing.x - i.p.x, this.bridge.landing.z - i.p.z).normalize(),
        t = a.dot(n),
        (e < s || s < 0) && t > - 0.1 && (s = e, this.bridge.spawnNode = i),
        t > r && e < 1.2 * s && (r = t, this.bridge.spawnNode = i),
        i = i.prev
      }
      testForBridge(e, t, i) {
        this.landing = new h.W;
        let s = 0,
        n = 250,
        a = 5,
        r = n / 2;
        if (this.allowEmergencyBridge) do {
          this.landing.x = e.p.x + i.x * n * t,
          this.landing.z = e.p.z + i.z * n * t,
          this.landing.y = this.heightmap.getXZ(this.landing.x, this.landing.z, this.heightmap.midlineDepth),
          n += 250,
          a += 1
        } while (this.landing.y < 2);
         else if (this.landing.x = e.p.x + i.x * n * t, this.landing.z = e.p.z + i.z * n * t, this.landing.y = this.heightmap.getXZ(this.landing.x, this.landing.z, this.heightmap.midlineDepth), this.landing.y < 2) return this.landing.y = 0,
        null;
        for (let h = 0; h < a; h++) this.landing.x = e.p.x + i.x * r * t,
        this.landing.z = e.p.z + i.z * r * t,
        this.landing.y = this.heightmap.getXZ(this.landing.x, this.landing.z, this.heightmap.midlineDepth),
        this.landing.y < 2 ? (s = r, r = 0.5 * s + 0.5 * n) : (n = r, r = 0.5 * s + 0.5 * n);
        return r < 40 || this.landing.distanceTo(this.antiBridgePoint) < 100 ? null : (!this.bridge.spawnNode || e.i - this.bridge.spawnNode.i > 20 || r < this.bridge.distance) && this.checkBridgeQuality(e.p, this.landing) ? (this.bridge.spawnNode = e, this.bridge.distance = r, this.bridge.landing.copy(this.landing), this.landing) : null
      }
      checkBridgeQuality(e, t) {
        let i = e.clone().add(t).multiplyScalar(0.5);
        if (this.heightmap.getXZ(i.x, i.z, this.heightmap.midlineDepth) > - 2) return !1;
        let s = t.clone().sub(e);
        if (s.y = 0, s.normalize(), 0 == this.originOverflow && s.dot(this.originDir) < 0) return !1;
        s.y = s.x,
        s.x = - s.z,
        s.z = s.y;
        let n = e.distanceTo(i) / 2,
        a = s.clone().multiplyScalar(n).add(i);
        return !(this.heightmap.getXZ(a.x, a.z, this.heightmap.midlineDepth) > 0) && (a = s.multiplyScalar( - n).add(i), !(this.heightmap.getXZ(a.x, a.z, this.heightmap.midlineDepth) > 0))
      }
      smoothHeight() {
        for (vo.avg = 0, vo.n = this.smoothWindowHead, vo.i = 0; vo.i < le; vo.i++) vo.avg += vo.n.p.y,
        vo.n = vo.n.next,
        vo.i <= oo && (vo.s = vo.n);
        vo.avg /= le,
        vo.r = vo.s.prev,
        vo.q = vo.r.prev,
        vo.s.h = vo.s.p.y - vo.avg,
        vo.hAngle = (vo.avg - (vo.q.p.y - vo.q.h)) / 20,
        vo.r.c.y = vo.r.p.y - vo.r.h + 5 * vo.hAngle,
        this.smoothWindowHead.p.y -= this.smoothWindowHead.h,
        this.smoothWindowHead = this.smoothWindowHead.next
      }
      update() {
        return st.tail.i < st.vehicleIndex + ae ? (this.extendMidline(), this.smoothHeight()) : st.tail.i - st.head.i > ae && (xo.n = st.head.next, delete st.head, st.head = xo.n, st.head.prev = null),
        st.discretisedTail.i < st.vehicleIndex + oe ? this.discretiseNext() : st.discretisedTail.i - st.head.i > oe && (xo.n = st.head.next, delete st.head, st.head = xo.n, st.head.prev = null),
        this.didExtend
      }
      drawFine(e) {
        let t;
        for (; null === (i = e.next) || void 0 === i ? void 0 : i.ps; ) {
          var i;
          for (t of e.ps) this.lineArr[this.lineIndex++] = t.x,
          this.lineArr[this.lineIndex++] = t.y + 1,
          this.lineArr[this.lineIndex++] = t.z;
          e = e.next
        }
        this.lineGeo.setDrawRange(0, this.lineIndex / 3),
        this.lineGeo.attributes.position.needsUpdate = !0,
        this.lineGeo.computeBoundingSphere()
      }
      drawPoints(e) {
        let t,
        i,
        s,
        n,
        a;
        for (; e.next; ) {
          for (s of(t = new h.N(e.p, e.c, e.next.p), i = t.getPoints(1), i)) n = s.x - this.line.position.x,
          a = s.z - this.line.position.z,
          this.lineArr[this.lineIndex++] = n,
          this.lineArr[this.lineIndex++] = Math.max(2, this.heightmap.getXZ(s.x, s.z, this.heightmap.midlineDepth)) + 1,
          this.lineArr[this.lineIndex++] = a;
          e = e.next
        }
        this.lineGeo.setDrawRange(0, this.lineIndex / 3),
        this.lineGeo.attributes.position.needsUpdate = !0,
        this.lineGeo.computeBoundingSphere()
      }
    };
    class fo {
      static getUVs(e) {
        let t = [
        ],
        i = Math.floor(100 / (2 * Te));
        i = 16;
        for (let s = 0; s <= e; s++) t.push(1, s / e * 16),
        t.push(0, s / e * 16);
        return t
      }
      constructor(e, t = !1) {
        this.genNode = null,
        this.genIndex = 0,
        this.nodeIndex = 0,
        this.originPos = new h.W,
        this.numPoints = 10,
        this.isCoarse = !1,
        this.p = new h.W,
        this.numPoints = e,
        this.isCoarse = t,
        this.geo = new h.g,
        this.geo.setIndex(fo.getIndex(e + 1)),
        this.geo.setAttribute('position', new h.o(new Float32Array(2 * (e + 1) * 3), 3)),
        this.verts = this.geo.attributes.position.array,
        this.geo.attributes.position.setUsage(h.l);
        let i = fo.getUVs(e);
        this.geo.setAttribute('uv', new h.o(new Float32Array(i), 2)),
        this.mesh = new h.B(this.geo, Be),
        this.mesh.matrixAutoUpdate = !1,
        this.mesh.receiveShadow = !0,
        this.mesh.visible = !1
      }
      initialise(e) {
        for (this.initGeneration(e); !this.generate(); );
        this.display()
      }
      initGeneration(e, t = 0) {
        this.midlineNode = e,
        this.genNode = e,
        this.originPos.copy(e.p),
        this.mesh.position.copy(this.originPos),
        this.genIndex = 0,
        this.nodeIndex = 0
      }
      generate() {
        let e,
        t;
        this.isCoarse ? (this.p.copy(this.genNode.p).sub(this.originPos), e = this.genNode.n, t = this.genNode.w) : (this.nodeIndex >= this.genNode.ps.length && (this.nodeIndex = 0, this.genNode = this.genNode.next), this.p.copy(this.genNode.ps[this.nodeIndex]).sub(this.originPos), e = this.genNode.ns[this.nodeIndex], t = this.genNode.w);
        let i = 6 * this.genIndex;
        return this.verts[i] = this.p.x + e.x * t,
        this.verts[i + 1] = this.p.y + 0.01,
        this.verts[i + 2] = this.p.z + e.z * t,
        this.verts[i + 3] = this.p.x - e.x * t,
        this.verts[i + 4] = this.p.y + 0.01,
        this.verts[i + 5] = this.p.z - e.z * t,
        this.genIndex++,
        this.isCoarse ? this.genIndex <= this.numPoints && (this.genNode = this.genNode.next) : this.nodeIndex += 1,
        this.genIndex == this.numPoints + 1
      }
      display() {
        this.geo.attributes.position.needsUpdate = !0,
        this.geo.computeVertexNormals(),
        this.geo.computeBoundingSphere(),
        this.mesh.updateMatrix(),
        this.show()
      }
      show() {
        this.mesh.visible = !0
      }
      hide() {
        this.mesh.visible = !1
      }
      retire() {
        this.hide()
      }
      static getIndex(e) {
        let t,
        i,
        s,
        n,
        a = [
        ];
        for (let r = 0; r < e - 1; r++) t = 2 * r,
        i = t + 1,
        s = 2 * (r + 1),
        n = s + 1,
        a.push(t, s, i),
        a.push(i, s, n);
        return a
      }
    }
    fo.mat = new h.D({
      color: 8947848
    });
    var bo = class {
      constructor() {
        this.nearSegs = [
        ],
        this.farSegs = [
        ],
        this.seenIndex = 0,
        this.nearIndex = 0,
        this.nearCheck = 15,
        this.nextNearReady = !1,
        this.farIndex = 0,
        this.farCheck = 45,
        this.nextFarReady = !1,
        this.container = new h.G,
        this.initSegs(),
        this.nearIndex = 0,
        this.farIndex = 0
      }
      destroy() {
        for (this.container.traverse((e=>{
          e.isMesh && e.geometry.dispose()
        })); this.container.children.length; ) this.container.remove(this.container.children[0])
      }
      handleMidlineReset() {
        st.tail.i < this.farIndex && console.error('Road controller cannot handle reset gracefully')
      }
      initSegs() {
        let e;
        for (e = 0; e < 10; e++) {
          let e = new fo(10, !0);
          this.container.add(e.mesh),
          this.farSegs.push(e)
        }
        for (this.farSegs[1].initialise(st.head), this.farSegs[0].initialise(this.farSegs[1].genNode), this.farSegs[0].hide(), this.farSegs[1].hide(), this.farSegs[9].initGeneration(this.farSegs[0].genNode), e = 0; e < 4; e++) {
          let e = new fo(100);
          this.container.add(e.mesh),
          this.nearSegs.push(e)
        }
        this.nearSegs[1].initialise(st.head),
        this.nearSegs[0].initialise(this.nearSegs[1].genNode),
        this.nearSegs[3].initGeneration(this.nearSegs[0].genNode)
      }
      update() {
        if (this.nextNearReady || (this.nextNearReady = this.nearSegs[3].generate()), this.nearIndex - st.vehicleIndex < this.nearCheck) {
          for (; !this.nextNearReady; ) this.nextNearReady = this.nearSegs[3].generate();
          this.nearSegs.unshift(this.nearSegs.pop()),
          this.nearSegs[0].display(),
          this.nearIndex = this.nearSegs[0].genNode.i,
          this.nearSegs[3].retire(),
          this.nearSegs[3].initGeneration(this.nearSegs[0].genNode),
          this.nextNearReady = !1
        }
        if (this.nextFarReady) {
          if (this.farIndex - st.vehicleIndex < this.farCheck) {
            this.farSegs.unshift(this.farSegs.pop()),
            this.farSegs[0].display(),
            this.farIndex = this.farSegs[0].genNode.i,
            this.farSegs[9].retire(),
            this.farSegs[9].initGeneration(this.farSegs[0].genNode),
            this.nextFarReady = !1;
            let e = Math.floor(4.5) - 1;
            this.farSegs[e].hide(),
            this.farSegs[e + 3].show()
          }
        } else this.nextFarReady = this.farSegs[9].generate()
      }
    };
    class Ao extends h.g {
      updateHeights() {
        this.attributes.heightOffset.needsUpdate = !0
      }
      drawCount(e) {
        this.setDrawRange(0, e * this.res * this.res * 6),
        this.attributes.position.needsUpdate = !0,
        this.attributes.normal.needsUpdate = !0,
        this.attributes.heightOffset.needsUpdate = !0,
        this.attributes.roadProximity.needsUpdate = !0,
        this.attributes.treeMask.needsUpdate = !0,
        this.attributes.curvature.needsUpdate = !0
      }
      constructor(e, t, i) {
        super (),
        this.tileIndexSize = 0,
        this.centroid = new h.W;
        let s = t + 1;
        this.res = t;
        let n,
        a,
        r,
        o,
        l = s * s * i,
        d = [
        ],
        c = [
        ],
        p = [
        ],
        u = 0;
        for (let h = 0; h < i; h++) {
          for (let e = 0; e <= t; e++) for (let i = 0; i <= t; i++) d.push(i / t, e / t),
          c.push(i / t / 10, e / t / 10),
          e < t && i < t && (n = e * s + i + u, a = e * s + (i + 1) + u, r = (e + 1) * s + i + u, o = (e + 1) * s + (i + 1) + u, p.push(n, a, r), p.push(a, o, r));
          u += s * s
        }
        this.setIndex(p),
        this.setAttribute('position', new h.o(new Float32Array(3 * l), 3)),
        this.attributes.position.setUsage(h.l),
        this.setAttribute('normal', new h.o(new Float32Array(3 * l), 3)),
        this.attributes.normal.setUsage(h.l),
        this.setAttribute('heightOffset', new h.o(new Float32Array(l), 1)),
        this.attributes.heightOffset.setUsage(h.l),
        this.setAttribute('roadProximity', new h.o(new Float32Array(l), 1)),
        this.attributes.roadProximity.setUsage(h.l),
        this.setAttribute('treeMask', new h.o(new Float32Array(l), 1)),
        this.attributes.treeMask.setUsage(h.l),
        this.setAttribute('curvature', new h.o(new Float32Array(l), 1)),
        this.attributes.curvature.setUsage(h.l),
        this.setAttribute('uv', new h.o(new Float32Array(d), 2)),
        this.setAttribute('wuv', new h.o(new Float32Array(c), 2))
      }
      computeBoundingSphere(e = null) {
        if (null == this.boundingSphere && (this.boundingSphere = new h.R(new h.W, 0)), null == e) return;
        let t;
        for (t of(this.boundingSphere.center.set(0, 0, 0), e)) t && this.boundingSphere.center.add(t);
        this.boundingSphere.center.multiplyScalar(1 / e.length);
        let i,
        s = 0;
        for (t of e) i = t.distanceToSquared(this.boundingSphere.center),
        i > s && (s = i);
        this.boundingSphere.radius = Math.sqrt(s) + 10
      }
    }
    var yo = class {
      constructor(e, t, i, s, n) {
        this.indexCallbacks = [
        ],
        this.redrawTilesets = {
        },
        this.redrawCells = [
        ],
        this.centroids = [
        ],
        this.centroid = new h.W,
        this.origin = new h.W,
        this.lod = e,
        this.res = t,
        this.id = s,
        0 == this.lod ? this.tileCount = i * i * 4 : this.tileCount = i * i * 1,
        this.vertexCount = (t + 1) * (t + 1),
        this.nextTileIndex = 0,
        this.maxTileIndex = this.tileCount - 1,
        this.readyCount = 0,
        this.drawCount = 0,
        this.retireIndex = De,
        this.geo = new Ao(e, t, this.tileCount),
        this.mesh = new h.B(this.geo, n),
        this.showHeight = new Float32Array((t + 1) * (t + 1)),
        this.hideHeight = new Float32Array((t + 1) * (t + 1));
        for (let a = 0; a < this.hideHeight.length; a++) this.hideHeight[a] = - 5,
        this.showHeight[a] = 0;
        this.mesh.visible = !1,
        this.mesh.receiveShadow = !0,
        this.mesh.matrixAutoUpdate = !1,
        this.posArr = this.geo.attributes.position.array,
        this.normArr = this.geo.attributes.normal.array,
        this.curveArr = this.geo.attributes.curvature.array,
        this.heightOffsetArr = this.geo.attributes.heightOffset.array,
        this.roadProxArr = this.geo.attributes.roadProximity.array,
        this.treeMaskArr = this.geo.attributes.treeMask.array,
        this.vec3Count = 3 * this.vertexCount,
        this.floatCount = this.vertexCount
      }
      reset() {
        this.nextTileIndex = 0,
        this.retireIndex = De,
        this.readyCount = 0,
        this.drawCount = 0,
        this.indexCallbacks.length = 0,
        this.mesh.visible = !1,
        this.redrawTilesets = {
        },
        this.redrawCells.length = 0,
        this.centroids.length = 0,
        this.geo.drawCount(this.nextTileIndex)
      }
      registerCallback(e, t) {
        this.indexCallbacks[e] = t
      }
      setOrigin(e) {
        this.origin.copy(e),
        this.mesh.position.copy(this.origin)
      }
      setRetireIndex(e) {
        this.retireIndex = Math.max(this.retireIndex, e + De)
      }
      tileReady(e, t, i, s, n, a, r, h) {
        this.posArr.set(t, e * t.length),
        this.normArr.set(i, e * i.length),
        this.curveArr.set(s, e * s.length),
        this.heightOffsetArr.set(this.showHeight, e * this.showHeight.length),
        this.roadProxArr.set(n, e * n.length),
        this.treeMaskArr.set(a, e * a.length),
        this.centroids[e] = r,
        this.readyCount++,
        this.drawCount++,
        (this.readyCount == this.tileCount || h) && this.draw()
      }
      registerRedrawCell(e) {
        this.redrawCells.push(e)
      }
      registerRedraw(e) {
        e.id in this.redrawTilesets || (this.redrawTilesets[e.id] = e)
      }
      hideTile(e) {
        this.heightOffsetArr.set(this.hideHeight, e * this.floatCount)
      }
      draw() {
        if (this.redrawCells.length) {
          let e;
          for (e of this.redrawCells) e.retire(),
          this.registerRedraw(e.tileset);
          for (e in this.redrawTilesets) this.redrawTilesets[e].update()
        }
        this.mesh.visible = !0,
        this.geo.drawCount(this.drawCount),
        this.geo.computeBoundingSphere(this.centroids),
        this.mesh.updateMatrix()
      }
      update() {
        this.geo.updateHeights()
      }
    },
    Io = i.p + 'static/media/road-despawns.677d3840.webp';
    const Do = {
    };
    var No = class {
      constructor(e, t, i) {
        this.cells = [
          [],
          [
          ]
        ],
        this.lods = [
          {
            res: ye,
            node: null,
            horizon: Ie,
            tileSize: 5,
            tiles: Math.floor(2.5),
            prevCheck: {
              x: 0,
              z: 0
            }
          },
          {
            res: Me,
            node: null,
            horizon: Ce,
            tileSize: 3,
            tiles: Math.floor(1.5),
            prevCheck: {
              x: 0,
              z: 0
            }
          }
        ],
        this.tilesets = [
          [],
          [
          ]
        ],
        this.stagedCells = [
        ],
        this.loadedCells = {
        },
        this.activeCells = {
        },
        this.counts = [
          0,
          0
        ],
        this.nearNode = null,
        this.medIndex = 0,
        this.medNode = null,
        this.seenIndex = - 1,
        this.rearNode = null,
        this.prevCheckCell = {
          x: 0,
          z: 0
        },
        this.heightmap = e,
        this.container = new h.G,
        this.container.matrixAutoUpdate = !1,
        this.despawnBarrier = new h.B(new h.J(4, 1), new h.C({
          map: X(Io, 16),
          alphaTest: 0.5
        })),
        this.container.add(this.despawnBarrier),
        this.groundMaterial = t,
        this.resetLodConfig(),
        this.cellClass = i,
        this.cellClass.initialise((() =>{
          this.initialise()
        })),
        this.seenIndex = st.head.i
      }
      destroy() {
        for (this.container.traverse((e=>{
          e.isMesh && e.geometry.dispose()
        })); this.container.children.length; ) this.container.remove(this.container.children[0])
      }
      loader() {
        return this.progressNodes(!0, 1) ? (this.lods[1].node.i - this.seenIndex) / this.lods[1].horizon * 0.5 : this.progressNodes(!0, 0, 0) ? 0.5 + (this.lods[0].node.i - this.seenIndex) / this.lods[0].horizon * 0.5 : 1
      }
      resetLodConfig() {
        this.lods = [
          {
            res: ye,
            node: null,
            horizon: Ie,
            tileSize: 5,
            tiles: Math.floor(2.5),
            prevCheck: {
              x: 0,
              z: 0
            }
          },
          {
            res: Me,
            node: null,
            horizon: Ce,
            tileSize: 3,
            tiles: Math.floor(1.5),
            prevCheck: {
              x: 0,
              z: 0
            }
          }
        ]
      }
      reset(e) {
        this.heightmap = e,
        this.nearNode = st.head,
        this.seenIndex = st.head.i,
        this.resetLodConfig();
        for (let t of this.cells) for (let e of t) e.retire();
        for (let t of this.stagedCells) t.retire(),
        this.cells[t.lod].push(t);
        this.stagedCells.length = 0,
        delete this.activeCells,
        this.activeCells = {
        },
        delete this.loadedCells,
        this.loadedCells = {
        };
        for (let t of this.tilesets) for (let e of t) e.reset();
        this.initialise()
      }
      handleMidlineReset() {
        st.tail.i < this.lods[0].node.i && console.error('Near grid cannot reset gracefully')
      }
      testGround(e, t, i) {
        let s = Math.floor(e / Ne),
        n = Math.floor(t / Ne);
        if (null == i && (i = {
          n: [
            0,
            1,
            0
          ]
        }), i.f = Le, i.r = !1, i.w = !1, this.activeCells[s] && this.activeCells[s][n]) {
          i.n = this.loadedCells[s][n].getNormal(e, t);
          let a = it(e, t, this.loadedCells[s][n].originNode, !0);
          return a.n.lWallDist && 1 == a.s && (i.w = !0, i.wi = Math.floor(100 * a.n.lWallDist), !0 === i.insideWall ? i.wd = a.d - (a.n.lWallDist - 0.2) : !1 === i.insideWall ? i.wd = a.d - (a.n.lWallDist + 0.2) : i.wd = a.d - a.n.lWallDist, i.ws = a.s, i.wn = a.n.n),
          a.n.rWallDist && - 1 == a.s && (i.w = !0, i.wi = - 1 * Math.floor(100 * a.n.rWallDist), !0 === i.insideWall ? i.wd = a.d - (a.n.rWallDist - 0.2) : !1 === i.insideWall ? i.wd = a.d - (a.n.rWallDist + 0.2) : i.wd = a.d - a.n.rWallDist, i.wn = a.n.n, i.ws = a.s),
          a.d < a.w ? (this.cellClass.paved ? i.h = a.y : i.h = this.loadedCells[s][n].lookupHeight(e, t), i.f = ke, i.r = !0) : (a.d < a.w + Ge && (i.f = Se), i.h = this.loadedCells[s][n].lookupHeight(e, t)),
          i
        }
        return i.h = this.heightmap.getXZ(e, t),
        i.n.length = 0,
        i.n.push(0, 1, 0),
        i
      }
      testHeight(e, t) {
        let i = Math.floor(e / Ne),
        s = Math.floor(t / Ne);
        if (this.loadedCells[i] && this.loadedCells[i][s]) {
          let n = it(e, t, this.loadedCells[i][s].originNode, !0);
          return n.d < n.w ? n.y : this.loadedCells[i][s].lerpHeight(e, t, n)
        }
        return this.heightmap.getXZ(e, t)
      }
      getCoords(e) {
        return {
          x: Math.floor(e.x / Ne),
          y: 0,
          z: Math.floor(e.z / Ne)
        }
      }
      getOrigin(e) {
        return {
          x: Math.floor(e.x / Ne) * Ne,
          y: 0,
          z: Math.floor(e.z / Ne) * Ne
        }
      }
      getCell(e, t) {
        let i = this.cells[e];
        if (i.length && (i[i.length - 1].retired || this.seenIndex - i[i.length - 1].originIndex > je)) {
          var s,
          n;
          let e = i.pop();
          return (null === (s = this.loadedCells[e.coords.x]) || void 0 === s ? void 0 : s[e.coords.z]) && this.loadedCells[e.coords.x][e.coords.z].lod == e.lod && (delete this.loadedCells[e.coords.x][e.coords.z], t != e.coords.x && 0 == Object.keys(this.loadedCells[e.coords.x]).length && delete this.loadedCells[e.coords.x]),
          (null === (n = this.activeCells[e.coords.x]) || void 0 === n ? void 0 : n[e.coords.z]) && this.activeCells[e.coords.x][e.coords.z].lod == e.lod && ((!this.rearNode || e.originNode.i > this.rearNode.i) && (this.rearNode = e.originNode, this.despawnBarrier.position.copy(this.rearNode.next.p), this.despawnBarrier.position.y += 1, this.despawnBarrier.rotation.y = 0.5 * Math.PI - this.rearNode.next.a), delete this.activeCells[e.coords.x][e.coords.z], t !== e.coords.x && 0 == Object.keys(this.activeCells[e.coords.x]).length && delete this.activeCells[e.coords.x]),
          e
        }
        {
          let t = new this.cellClass(e, this.lods[e].res, this.heightmap);
          return this.counts[e]++,
          t
        }
      }
      getTileset(e) {
        let t,
        i = this.tilesets[e];
        if (i.length) {
          if (t = i[0], t.nextTileIndex <= t.maxTileIndex) return t;
          if (i.length > 1 && (t = i[i.length - 1], this.seenIndex >= t.retireIndex)) return i.unshift(i.pop()),
          i[0].reset(),
          i[0]
        }
        return t = new yo(e, this.lods[e].res, this.lods[e].tileSize, i.length, this.groundMaterial),
        this.container.add(t.mesh),
        i.unshift(t),
        ts['nearcell-' + e] = i.length,
        i[0]
      }
      initialise() {
        let e,
        t;
        for (this.despawnBarrier.position.copy(st.head.p), this.despawnBarrier.position.y += 1, this.despawnBarrier.rotation.y = 0.5 * Math.PI - st.head.a, e = 1; e >= 0; e--) {
          let i,
          s,
          n,
          a,
          r,
          h;
          t = this.lods[e],
          t.node = st.head,
          i = this.getCoords(t.node.p);
          let o = t.tiles;
          for (s = - o; s <= o; s++) for (a = i.x + s, n = - o; n <= o; n++) r = i.z + n,
          a in this.loadedCells || (this.loadedCells[a] = {
          }),
          r in this.loadedCells[a] && this.loadedCells[a][r].lod,
          h = this.getCell(e),
          h.initGeneration(t.node, {
            x: a,
            z: r
          }, this.getTileset(e), !0, this.heightmap),
          this.cells[e].unshift(h),
          this.loadedCells[a][r] = h,
          a in this.activeCells || (this.activeCells[a] = {
          }),
          this.activeCells[a][r] = h;
          t.prevCheck.x = i.x,
          t.prevCheck.z = i.z
        }
      }
      progressNodes(e = !1, t = 0, i = 1) {
        let s,
        n;
        for (Do.finished = 0, Do.l = i; Do.l >= t; Do.l--) if (Do.lod = this.lods[Do.l], Do.lod.node.i >= this.seenIndex + Do.lod.horizon) Do.finished++;
         else if (Do.lod.node = Do.lod.node.next, Do.cs = this.getCoords(Do.lod.node.p), Do.cs.x != Do.lod.prevCheck.x || Do.cs.z != Do.lod.prevCheck.z) {
          for (Do.dx = Do.cs.x - Do.lod.prevCheck.x, Do.dz = Do.cs.z - Do.lod.prevCheck.z, Do.tf = Do.lod.tiles, Do.i = - Do.tf; Do.i <= Do.tf; Do.i++) 0 !== Do.dx && (s = Do.cs.x + Do.dx * Do.tf, n = Do.cs.z + Do.i, s in this.loadedCells || (this.loadedCells[s] = {
          }), (!(n in this.loadedCells[s]) || this.loadedCells[s][n].lod < Do.l) && (Do.c = this.getCell(Do.l, s), Do.c.initGeneration(Do.lod.node, {
            x: s,
            z: n
          }, this.getTileset(Do.l), e, this.heightmap), this.hadLoadedLod = !1, this.loadedCells[s][n] && this.loadedCells[s][n].lod < Do.l && (this.hadLoadedLod = !0), this.loadedCells[s][n] = Do.c, e ? (this.hadLoadedLod, this.cells[Do.l].unshift(Do.c), s in this.activeCells ? this.activeCells[s][n] && Do.c.tileset.registerRedrawCell(this.activeCells[s][n]) : this.activeCells[s] = {
          }, this.activeCells[s][n] = Do.c) : this.stagedCells.unshift(Do.c))),
          0 !== Do.dz && (s = Do.cs.x + Do.i, n = Do.cs.z + Do.dz * Do.tf, s in this.loadedCells || (this.loadedCells[s] = {
          }), (!(n in this.loadedCells[s]) || this.loadedCells[s][n].lod < Do.l) && (Do.c = this.getCell(Do.l, s), Do.c.initGeneration(Do.lod.node, {
            x: s,
            z: n
          }, this.getTileset(Do.l), e, this.heightmap), this.hadLoadedLod = !1, this.loadedCells[s][n] && this.loadedCells[s][n].lod < Do.l && (this.hadLoadedLod = !0), this.loadedCells[s][n] = Do.c, e ? (this.hadLoadedLod, this.cells[Do.l].unshift(Do.c), s in this.activeCells ? this.activeCells[s][n] && Do.c.tileset.registerRedrawCell(this.activeCells[s][n]) : this.activeCells[s] = {
          }, this.activeCells[s][n] = Do.c) : this.stagedCells.unshift(Do.c)));
          Do.lod.prevCheck.x = Do.cs.x,
          Do.lod.prevCheck.z = Do.cs.z
        }
        return Do.finished < 2 - t
      }
      update() {
        if (this.seenIndex < st.vehicleIndex) this.seenIndex++,
        this.progressNodes();
         else if (this.stagedCells.length) for (Do.canPop = !0, Do.max = this.stagedCells.length / 2 + 3, Do.s = this.stagedCells.length - 1; Do.s >= 0 && !(--Do.max <= 0); Do.s--) if (this.stagedCells[Do.s].generate() && Do.canPop) {
          if (Do.c = this.stagedCells.pop(), this.cells[Do.c.lod].unshift(Do.c), this.activeCells[Do.c.coords.x]) {
            if (this.activeCells[Do.c.coords.x][Do.c.coords.z]) {
              if (!(this.activeCells[Do.c.coords.x][Do.c.coords.z].lod < Do.c.lod)) {
                Do.c.retire();
                continue
              }
              Do.c.tileset.registerRedrawCell(this.activeCells[Do.c.coords.x][Do.c.coords.z])
            }
          } else this.activeCells[Do.c.coords.x] = {
          };
          Do.c.display(),
          this.activeCells[Do.c.coords.x][Do.c.coords.z] = Do.c
        } else Do.canPop = !1;
        ts['nearcell-staged'] = this.stagedCells.length
      }
    };
    let Mo = 250,
    Co = 50;
    const jo = Math.floor(2),
    ko = {
    },
    zo = {
    },
    So = {
    },
    Oo = {
    };
    class Lo {
      constructor(e, t, i) {
        this.retiredCells = [
        ],
        this.loadedCells = {
        },
        this.seenCells = {
        },
        this.tf = Math.floor(2.5),
        this.prevTile = {
          x: - 99999,
          z: - 99999
        },
        this.overlapCheckTile = {
          x: 0,
          z: 0
        },
        this.overlapPrevCheck = {
          x: - 99999,
          z: - 99999
        },
        this.overlapRedrawTiles = [
        ],
        this.stagedTilesets = [
        ],
        this.stagingCells = [
        ],
        this.preStagedCells = [
        ],
        this.upcomingTilesets = [
        ],
        this.loadState = {
          init: !1,
          overlap: !1,
          tileset: !1
        },
        this.preStagedCellMap = {
        },
        this.cellCount = 0,
        this.heightmap = e,
        this.groundMaterial = t,
        this.container = new h.G,
        this.cellClass = i,
        this.container.matrixAutoUpdate = !1,
        this.seenIndex = st.vehicleIndex - 1,
        this.initialise()
      }
      destroy() {
        this.container.traverse((e=>{
          e.isMesh && e.geometry.dispose()
        })),
        this.container.clear()
      }
      reset(e) {
        this.heightmap = e,
        this.seenIndex = st.head.i;
        let t = Object.keys(ko);
        for (let s of t) delete ko[s];
        this.upcomingTilesets.length = 0,
        this.stagedTilesets.length = 0,
        this.prevTile.x = - 9999,
        this.prevTile.z = - 9999;
        let i = Object.keys(this.loadedCells);
        for (let s of i) {
          let e = Object.keys(this.loadedCells[s]);
          for (let t of e) this.retireCell(s, t)
        }
        this.stagingCells.length = 0,
        this.initialise()
      }
      loader() {
        return this.stagingCells.length ? (this.stagingCells[0].generate() && this.stagingCells.shift(), (this.stageInitCount - this.stagingCells.length) / this.stageInitCount) : 1
      }
      initialise() {
        Mo = Math.min(me / 10 * 2.5, 990),
        Co = Math.max(10, Mo / 4);
        let e = Object.keys(ko);
        for (let i of e) delete ko[i];
        let t = Object.keys(zo);
        for (let i of t) delete zo[i],
        delete So[i];
        for (this.checkNode = st.vehicleNode, this.checkIndex = this.checkNode.i, this.seenIndex = st.vehicleIndex - 1, this.initialiseOverlapMap(), this.checkInitialTileset(this.checkNode), this.checkStageTileset(); this.preStagedCells.length; ) Oo.psc = this.preStagedCells.shift(),
        delete this.preStagedCellMap[this.getCellKey(Oo.psc[0], Oo.psc[1])],
        this.stageCell(Oo.psc);
        this.stageInitCount = this.stagingCells.length,
        this.checkDrawTileset()
      }
      handleMidlineReset() {
        if (this.checkIndex > st.tail.i) throw console.error('Midline reset will affect fargrid lookahead'),
        this.checkNode = st.vehicleNode,
        this.checkIndex = st.vehicleIndex,
        new Error('Midline stuck at node ' + st.tail.i);
        if (this.overlapCheckNode.i >= st.tail.i) {
          let e = Object.keys(zo);
          for (let t of e) {
            let e = Object.keys(zo[t]);
            for (let i of e) zo[t][i].i > st.tail.i && (delete zo[t][i], delete So[t][i])
          }
          this.overlapCheckNode = st.tail
        }
        this.seenIndex = Math.min(st.vehicleIndex, this.seenIndex)
      }
      retireCell(e, t) {
        this.seenCells[e] && (delete this.seenCells[e][t], 0 == Object.keys(this.seenCells[e]).length && delete this.seenCells[e]);
        let i = this.loadedCells[e][t];
        delete this.loadedCells[e][t],
        0 == Object.keys(this.loadedCells[e]).length && delete this.loadedCells[e],
        i.retire(),
        this.retiredCells.push(i)
      }
      checkActiveCell(e, t) {
        var i,
        s;
        let n = Math.floor(e / me),
        a = Math.floor(t / me);
        return !!(null === (i = this.loadedCells[n]) || void 0 === i || null === (s = i[a]) || void 0 === s ? void 0 : s.mesh.visible)
      }
      addOverlap(e, t, i, s, n = null, a = 1) {
        ko[e] || (ko[e] = {
        }),
        ko[e][t] || (ko[e][t] = {
        }),
        ko[e][t][i] || (ko[e][t][i] = {
        }),
        (!ko[e][t][i][s] || ko[e][t][i][s] < a) && (ko[e][t][i][s] = a),
        null !== n && (!ko[e][t][i][n] || ko[e][t][i][n] < a) && (ko[e][t][i][n] = a),
        zo[e] || (zo[e] = {
        }, So[e] = {
        }),
        zo[e][t] || (zo[e][t] = this.overlapCheckNode),
        So[e][t] = this.overlapCheckNode
      }
      applyTileOverlap(e, t, i, s, n) {
        let a = i + 1,
        r = s + 1;
        this.addOverlap(e, t, i, s, r, n),
        this.addOverlap(e, t, a, s, r, n),
        0 == i ? (this.addOverlap(e - 1, t, xe, s, s + 1, n), 0 == s ? this.addOverlap(e - 1, t - 1, xe, xe, null, n) : r == xe && this.addOverlap(e - 1, t + 1, xe, 0, null, n)) : a == xe && (this.addOverlap(e + 1, t, 0, s, s + 1, n), 0 == s ? this.addOverlap(e + 1, t - 1, 0, xe, null, n) : r == xe && this.addOverlap(e + 1, t + 1, 0, 0, null, n)),
        0 == s ? (this.addOverlap(e, t - 1, i, xe, null, n), this.addOverlap(e, t - 1, i + 1, xe, null, n)) : r == xe && (this.addOverlap(e, t + 1, i, 0, null, n), this.addOverlap(e, t + 1, i + 1, 0, null, n))
      }
      initialiseOverlapMap() {
        this.overlapCheckNode = st.head;
        let e = Math.floor(this.overlapCheckNode.p.x / Ae),
        t = Math.floor(this.overlapCheckNode.p.z / Ae);
        this.overlapPrevCheck.x = e,
        this.overlapPrevCheck.z = t;
        let i,
        s,
        n,
        a,
        r,
        h,
        o = Math.floor(2);
        for (let l = - o; l <= o; l++) for (let d = - o; d <= o; d++) i = (e + l) * Ae / me,
        s = (t + d) * Ae / me,
        n = Math.floor(i),
        a = Math.floor(s),
        r = (e + l) % xe,
        h = (t + d) % xe,
        r < 0 && (r += xe),
        h < 0 && (h += xe),
        l == - o || l == o || d == - o || d == o ? this.applyTileOverlap(n, a, r, h, - 1) : this.applyTileOverlap(n, a, r, h, Math.abs(this.overlapCheckNode.g));
        for (this.overlapCheckNode = this.overlapCheckNode.next; this.overlapCheckNode.i < st.vehicleIndex + 1000; ) this.updateOverlapMap()
      }
      updateOverlapRedraw() {
        for (Oo.fz2 = me / 2, Oo.oci = this.overlapRedrawTiles.length - 1; Oo.oci >= 0; Oo.oci--) {
          var e,
          t,
          i,
          s,
          n;
          if (Oo.ocx = this.overlapRedrawTiles[Oo.oci][0], Oo.ocz = this.overlapRedrawTiles[Oo.oci][1], Oo.cx = So[Oo.ocx][Oo.ocz].p.x, Oo.cz = So[Oo.ocx][Oo.ocz].p.z, (Oo.cx - this.overlapCheckNode.p.x) * (Oo.cx - this.overlapCheckNode.p.x) + (Oo.cz - this.overlapCheckNode.p.z) * (Oo.cz - this.overlapCheckNode.p.z) > 40000) if (this.overlapRedrawTiles.splice(Oo.oci, 1), null === (e = this.loadedCells[Oo.ocx]) || void 0 === e ? void 0 : e[Oo.ocz]) if (this.loadedCells[Oo.ocx][Oo.ocz].resetOverlapMap(null === (t = So[Oo.ocx]) || void 0 === t ? void 0 : t[Oo.ocz], null === (i = ko[Oo.ocx]) || void 0 === i ? void 0 : i[Oo.ocz]), this.loadedCells[Oo.ocx][Oo.ocz].ready) this.stagingCells.push(this.loadedCells[Oo.ocx][Oo.ocz]);
           else {
            let e = this.loadedCells[Oo.ocx][Oo.ocz];
            console.log(e.genRow, e.overlapIndex, e.treeGenIndex, e.farWallRenderer.ready)
          } else console.log(null === (s = this.loadedCells[Oo.ocx]) || void 0 === s || null === (n = s[Oo.ocz]) || void 0 === n ? void 0 : n.ready)
        }
      }
      updateOverlapMap() {
        if (Oo.nx = Math.floor(this.overlapCheckNode.p.x / Ae), Oo.nz = Math.floor(this.overlapCheckNode.p.z / Ae), Oo.nx == this.overlapPrevCheck.x && Oo.nz == this.overlapPrevCheck.z && this.overlapCheckNode.next) return void (this.overlapCheckNode = this.overlapCheckNode.next);
        let e,
        t,
        i,
        s;
        this.overlapRedrawTiles.length && this.updateOverlapRedraw(),
        Oo.dx = Oo.nx - this.overlapPrevCheck.x,
        Oo.dz = Oo.nz - this.overlapPrevCheck.z,
        this.overlapPrevCheck.x = Oo.nx,
        this.overlapPrevCheck.z = Oo.nz;
        let n,
        a,
        r,
        h = jo;
        for (r = 1 - h; r <= h; r++) {
          var o,
          l;
          if (0 != Oo.dx) n = this.overlapCheckNode.p.x + Oo.dx * h * Ae,
          a = this.overlapCheckNode.p.z + r * Ae,
          e = Math.floor(n / me),
          t = Math.floor(a / me),
          e in this.seenCells || (this.seenCells[e] = {
          }),
          this.seenCells[e][t] = this.overlapCheckNode.i,
          (null === (o = this.loadedCells[e]) || void 0 === o ? void 0 : o[t]) && !this.loadedCells[e][t].needsOverlapRedraw && (this.loadedCells[e][t].needsOverlapRedraw = !0, this.overlapRedrawTiles.push([e,
          t])),
          i = Math.floor((n - e * me) / Ae),
          s = Math.floor((a - t * me) / Ae),
          this.applyTileOverlap(e, t, i, s, - 1);
          if (0 !== Oo.dz) n = this.overlapCheckNode.p.x + r * Ae,
          a = this.overlapCheckNode.p.z + Oo.dz * h * Ae,
          e = Math.floor(n / me),
          t = Math.floor(a / me),
          e in this.seenCells || (this.seenCells[e] = {
          }),
          this.seenCells[e][t] = this.overlapCheckNode.i,
          (null === (l = this.loadedCells[e]) || void 0 === l ? void 0 : l[t]) && !this.loadedCells[e][t].needsOverlapRedraw && (this.loadedCells[e][t].needsOverlapRedraw = !0, this.overlapRedrawTiles.push([e,
          t])),
          i = Math.floor((n - e * me) / Ae),
          s = Math.floor((a - t * me) / Ae),
          this.applyTileOverlap(e, t, i, s, - 1)
        }
        for (h -= 1, r = - h; r <= h; r++) 0 != Oo.dx && (n = this.overlapCheckNode.p.x + Oo.dx * h * Ae, a = this.overlapCheckNode.p.z + r * Ae, e = Math.floor(n / me), t = Math.floor(a / me), e in this.seenCells || (this.seenCells[e] = {
        }), this.seenCells[e][t] = this.overlapCheckNode.i, i = Math.floor((n - e * me) / Ae), s = Math.floor((a - t * me) / Ae), this.applyTileOverlap(e, t, i, s, Math.abs(this.overlapCheckNode.g))),
        0 !== Oo.dz && (n = this.overlapCheckNode.p.x + r * Ae, a = this.overlapCheckNode.p.z + Oo.dz * h * Ae, e = Math.floor(n / me), t = Math.floor(a / me), e in this.seenCells || (this.seenCells[e] = {
        }), this.seenCells[e][t] = this.overlapCheckNode.i, i = Math.floor((n - e * me) / Ae), s = Math.floor((a - t * me) / Ae), this.applyTileOverlap(e, t, i, s, Math.abs(this.overlapCheckNode.g)));
        this.overlapCheckNode.next && (this.overlapCheckNode = this.overlapCheckNode.next)
      }
      checkInitialTileset(e) {
        let t,
        i,
        s,
        n,
        a = this.getCoords(e.p),
        r = a.x,
        h = a.z,
        o = {
          node: e,
          originIndex: e.i,
          newTiles: [
          ],
          deadTiles: [
          ]
        };
        for (t = - this.tf; t <= this.tf; t++) for (s = t + r, i = - this.tf; i <= this.tf; i++) n = i + h,
        o.newTiles.push([s,
        n]),
        s in this.seenCells || (this.seenCells[s] = {
        }),
        (!(n in this.seenCells) || e.i > this.seenCells[s][n]) && (this.seenCells[s][n] = e.i);
        this.upcomingTilesets.push(o),
        this.prevTile.x = r,
        this.prevTile.z = h
      }
      checkTilesetForNode(e) {
        let t = this.getCoords(e.p),
        i = t.x,
        s = t.z;
        if (i === this.prevTile.x && s === this.prevTile.z) return;
        let n,
        a,
        r,
        h,
        o,
        l,
        d,
        c,
        p = i - this.prevTile.x,
        u = s - this.prevTile.z,
        g = {
          node: e,
          originIndex: this.checkIndex,
          newTiles: [
          ],
          deadTiles: [
          ]
        };
        for (0 !== p && (o = this.prevTile.x + p * (this.tf + 1), l = this.prevTile.x - p * this.tf), 0 !== u && (d = this.prevTile.z + u * (this.tf + 1), c = this.prevTile.z - u * this.tf), n = - this.tf; n <= this.tf; n++) for (r = n + i, a = - this.tf; a <= this.tf; a++) h = a + s,
        0 !== p && (r == o && g.newTiles.push([o,
        h]), r - p == l && g.deadTiles.push([l,
        h - u])),
        0 !== u && (h == d && g.newTiles.push([r,
        d]), h - u == c && (void 0 !== l && r - p === l || g.deadTiles.push([r - p,
        c]))),
        r in this.seenCells || (this.seenCells[r] = {
        }),
        (!(h in this.seenCells[r]) || this.checkIndex > this.seenCells[r][h]) && (this.seenCells[r][h] = this.checkIndex);
        this.upcomingTilesets.push(g),
        this.prevTile.x = i,
        this.prevTile.z = s
      }
      getCellKey(e, t) {
        return e + ':' + t
      }
      checkStageTileset() {
        if (this.upcomingTilesets[0].originIndex < st.vehicleIndex + Co) {
          let e,
          t,
          i,
          s,
          n = this.upcomingTilesets.shift();
          for (i of n.newTiles) e = i[0],
          t = i[1],
          s = this.getCellKey(e, t),
          e in this.loadedCells && t in this.loadedCells[e] || s in this.preStagedCellMap || (this.preStagedCellMap[s] = !0, this.preStagedCells.push([e,
          t]));
          this.stagedTilesets.push(n)
        }
      }
      stageCell(e) {
        var t,
        i,
        s,
        n;
        Oo.c = this.getCell(),
        Oo.x = e[0],
        Oo.z = e[1],
        Oo.x in this.loadedCells || (this.loadedCells[Oo.x] = {
        }),
        Oo.redraw = !!(null === (t = this.loadedCells[Oo.x][Oo.z]) || void 0 === t ? void 0 : t.needsOverlapRedraw),
        Oo.c.initGeneration(Oo.x, Oo.z, null === (i = zo[Oo.x]) || void 0 === i ? void 0 : i[Oo.z], null === (s = So[Oo.x]) || void 0 === s ? void 0 : s[Oo.z], null === (n = ko[Oo.x]) || void 0 === n ? void 0 : n[Oo.z], this.heightmap, Oo.redraw),
        this.loadedCells[Oo.x][Oo.z] = Oo.c,
        this.stagingCells.push(Oo.c)
      }
      checkDrawTileset() {
        if (st.vehicleIndex >= this.stagedTilesets[0].originIndex) {
          let i,
          s = this.stagedTilesets[0];
          for (i of s.newTiles) {
            var e,
            t;
            if (!(null === (e = this.loadedCells[i[0]]) || void 0 === e || null === (t = e[i[1]]) || void 0 === t ? void 0 : t.ready)) return;
            this.loadedCells[i[0]][i[1]].display()
          }
          for (i of s.deadTiles) {
            let e = i[0],
            t = i[1];
            e in this.seenCells && this.seenCells[e][t] < s.originIndex ? (this.retireCell(e, t), ko[e] && (delete ko[e][t], 0 == Object.keys(ko[e]).length && delete ko[e]), zo[e] && (delete zo[e][t], delete So[e][t], 0 == Object.keys(zo[e]).length && (delete zo[e], delete So[e]))) : this.loadedCells[e][t].hide()
          }
          this.stagedTilesets.shift()
        }
      }
      update() {
        if (this.checkIndex < st.vehicleIndex + Mo && this.checkNode.next) this.checkNode = this.checkNode.next,
        this.checkIndex = this.checkNode.i,
        this.checkTilesetForNode(this.checkNode);
         else if (this.overlapCheckNode.i < st.vehicleIndex + 1000) this.updateOverlapMap();
         else if (this.preStagedCells.length) Oo.psc = this.preStagedCells.shift(),
        delete this.preStagedCellMap[this.getCellKey(Oo.psc[0], Oo.psc[1])],
        this.stageCell(Oo.psc);
         else if (this.stagingCells.length) {
          for (Oo.max = this.stagingCells.length / 2 + 2, Oo.c = 0; Oo.c < this.stagingCells.length && !(--Oo.max <= 0); Oo.c++) this.stagingCells[Oo.c].generate() && (this.stagingCells.splice(Oo.c, 1), Oo.c--);
          ts['farcells-staged'] = this.stagingCells.length
        }
        this.seenIndex < st.vehicleIndex && (this.upcomingTilesets.length && this.checkStageTileset(), this.stagedTilesets.length && this.checkDrawTileset(), this.seenIndex++)
      }
      getCoords(e) {
        return {
          x: Math.floor(e.x / me),
          y: 0,
          z: Math.floor(e.z / me)
        }
      }
      getOrigin(e) {
        return {
          x: Math.floor(e.x / me) * me,
          y: 0,
          z: Math.floor(e.z / me) * me
        }
      }
      getCell() {
        if (this.retiredCells.length) return this.retiredCells.pop();
        this.cellCount++;
        let e = new this.cellClass(this.heightmap, this.groundMaterial);
        return ts.farcells = this.cellCount,
        this.container.add(e.mesh),
        e
      }
    }
    var Ro = new class {
      constructor() {
        this.arng = new window.alea(Ve),
        this.container = new h.G,
        this.scene = null,
        this.envLayer = new h.G,
        this.vehicleOrigin = new h.W,
        this.loadProg = 0,
        this.sceneReady = !1,
        this.checkPerformance = !1,
        this.topographyLoaderInit = this._topographyLoaderInit.bind(this),
        this.topographyReset = this._topographyReset.bind(this),
        this.topographyLoader = this._topographyLoader.bind(this),
        this.sceneReset = this._sceneReset.bind(this),
        this.sceneLoaderInit = this._sceneLoaderInit.bind(this),
        this.sceneLoader = this._sceneLoader.bind(this),
        this.updateConfig = this._updateConfig.bind(this),
        this.farGridLoaderInit = this._farGridLoaderInit.bind(this),
        this.farGridReset = this._farGridReset.bind(this),
        this.farGridLoader = this._farGridLoader.bind(this),
        this.nearGridReset = this._nearGridReset.bind(this),
        this.nearGridLoaderInit = this._nearGridLoaderInit.bind(this),
        this.nearGridLoader = this._nearGridLoader.bind(this),
        this.postGridLoader = this._postGridLoader.bind(this),
        this.setSceneTopographyBound = this.setSceneToplogy.bind(this),
        this.setSceneSkinBound = this.setSceneSkin.bind(this),
        this.setSceneWeatherIndexBound = this.setSceneWeatherIndex.bind(this),
        this.sunOffset = new h.W,
        this.checkTimer = 0.2,
        this.lastCheckTime = - 1,
        this.skySpeed = 5,
        this.skyOffset = 225,
        wh.addListener('topography', this.setSceneTopographyBound),
        wh.addListener('skin', this.setSceneSkinBound),
        wh.addListener('weatherIndex', this.setSceneWeatherIndexBound),
        this.container.add(this.envLayer),
        te(wh.value.viewLodIndex),
        ie(wh.value.detailLodIndex)
      }
      nextSkin() {
        let e = wh.value.sceneName,
        t = wh.value.skin,
        i = wh.value.weatherIndex,
        s = wh.sceneMeta.scenes[e];
        if (i++, s.skinWeathers[t].length > i) wh.set('weatherIndex', i);
         else {
          let e = s.skins.indexOf(t);
          wh.set('weatherIndex', 0),
          wh.set('skin', s.skins[(e + 1) % s.skins.length])
        }
      }
      prevSkin() {
        let e = wh.value.sceneName,
        t = wh.value.skin,
        i = wh.value.weatherIndex,
        s = wh.sceneMeta.scenes[e],
        n = s.skinWeathers[t];
        if (i--, i >= 0) wh.set('weatherIndex', i);
         else {
          let e = s.skins.indexOf(t) - 1;
          e < 0 && (e = s.skins.length - 1),
          wh.set('weatherIndex', n.length - 1),
          wh.set('skin', s.skins[e])
        }
      }
      initScene(e) {
        let t = e;
        this.scene && (this.envLayer.remove(this.scene.container), this.scene.destroy(), delete this.scene),
        this.scene = new t(this.getNearGridHeightAt.bind(this)),
        this.envLayer.add(this.scene.container),
        this.scene.sanitiseConfig(wh),
        this.scene.initialise(Ve, wh.value, (() =>this.onSceneReady()))
      }
      onSceneReady() {
        this.loadProg = 0,
        this.sceneReady = !0,
        this.heightmap = this.scene.heightmap,
        this.midline && (this.container.remove(this.midline.container), this.midline.destroy()),
        this.midline = new wo,
        this.getOriginPose(),
        this.midline.initialise(Ve, this.heightmap, this.vehicleOrigin),
        this.midlineAttempts = 0,
        no.sendUpdate('skinChange', this.scene.getSkinName(wh.value.skin))
      }
      _topographyLoaderInit() {
        this.sceneReady = !1,
        this.loadProg = 0,
        this.loadTime = Date.now(),
        window.localStorage.getItem('seed_failed') && (console.log('BAD SEED'), window.localStorage.removeItem('seed_failed')),
        this.checkPerformance = !1,
        window.localStorage.getItem('analytics_returningPlayer') || (console.log('Env: Analysing performance for dynamic config'), this.checkPerformance = !0),
        this.initScene(ph[wh.value.sceneName])
      }
      _topographyReset() {
        this.sceneReady = !1,
        this.scene.reset(Ve, wh.value, (() =>this.onSceneReady))
      }
      _topographyLoader() {
        return this.sceneReady ? this.buildMidline() : 0
      }
      _sceneReset() {
      }
      _sceneLoaderInit() {
        console.log(' - Topography initialised in', Date.now() - this.loadTime),
        no.midlineLoadTime = Date.now() - this.loadTime,
        no.playerProfile && (no.playerProfile.midlineLoadTime = no.midlineLoadTime)
      }
      _sceneLoader() {
        return this.loadProg = this.scene.loader(),
        this.loadProg >= 1 && (this.scene.setScene(wh.value), this.initSky(), this.initRoad()),
        this.loadProg
      }
      _updateConfig() {
        te(wh.value.viewLodIndex),
        ie(wh.value.detailLodIndex),
        this.scene.updateConfig(wh.value.viewLodIndex, wh.value.detailLodIndex),
        this.scene.setScene(wh.value);
        let e = 2 * fe;
        this.sky.scale.set(e, e, e),
        wh.value.detailLodIndex * wh.value.viewLodIndex == 0 ? this.sky.visible = !1 : this.sky.visible = !0,
        Qe.far = fe,
        Qe.updateProjectionMatrix()
      }
      _farGridLoaderInit() {
        this.loadTime = Date.now(),
        this.farGrid && (this.farGrid.destroy(), this.envLayer.remove(this.farGrid.container), delete this.farGrid),
        this.farGrid = new Lo(this.heightmap, this.scene.groundMaterial, this.scene.farGridCell),
        this.envLayer.add(this.farGrid.container)
      }
      _farGridReset() {
        this.farGrid.reset(this.heightmap)
      }
      _farGridLoader() {
        return this.loadProg = this.farGrid.loader(),
        this.loadProg
      }
      _nearGridReset() {
        this.nearGrid.reset(this.heightmap)
      }
      _nearGridLoaderInit() {
        console.log(' - Far grid initialised in', Date.now() - this.loadTime),
        this.nearGrid && (this.nearGrid.destroy(), this.envLayer.remove(this.nearGrid.container), delete this.nearGrid),
        this.nearGrid = new No(this.heightmap, this.scene.groundMaterial, this.scene.nearGridCell),
        this.envLayer.add(this.nearGrid.container)
      }
      _nearGridLoader() {
        return this.loadProg = this.nearGrid.loader(),
        1 == this.loadProg && (console.log(' - Both grids initialised in', Date.now() - this.loadTime), no.envLoadTime = Date.now() - this.loadTime, no.playerProfile && (no.playerProfile.envLoadTime = no.envLoadTime), no.sendUpdate('loadTimes', {
          midline: no.midlineLoadTime,
          env: no.envLoadTime
        })),
        this.loadProg
      }
      _postGridLoader() {
        return this.scene.onGridReady(),
        1
      }
      buildMidline() {
        return this.loadProg = this.midline.loader(),
        this.loadProg < 1 ? this.loadProg < 0 ? (this.midlineAttempts++, this.midlineAttempts >= 25 || 0 == wh.initialNode && this.midlineAttempts >= 4 ? (console.log('Too many failed - reloading'), void qe(Date.now(), !0)) : (this.getOriginPose(this.midlineAttempts), this.vehicleOrigin.x + this.vehicleOrigin.z > 1000000 ? void qe(Date.now(), !0) : (this.midline.initialise(Ve, this.heightmap, this.vehicleOrigin), 0))) : this.loadProg : (this.midline.finalise(), this.scene.onMidlineReady(), this.loadProg = 0, 1)
      }
      setSceneToplogy(e) {
        this.scene.setTopography(e)
      }
      setSceneSkin(e) {
        this.scene.setSkin(e),
        no.sendUpdate('skinChange', this.scene.getSkinName(e))
      }
      setSceneWeatherIndex(e) {
        this.scene.setWeatherIndex(e),
        no.sendUpdate('weatherChange', e)
      }
      initSky() {
        if (this.sky) return;
        let e = 2 * fe;
        this.sky = new h.B(new h.J(1, 1, 10, 10), Fe),
        this.sky.rotation.x = Math.PI / 2,
        this.sky.position.y = 200,
        this.sky.renderOrder = - 100,
        this.sky.scale.set(e, e, e),
        this.sky.frustumCulled = !1,
        this.envLayer.add(this.sky)
      }
      initRoad() {
        this.roadController && (this.roadController.destroy(), this.container.remove(this.roadController.container), delete this.roadController),
        this.roadController = new bo,
        this.container.add(this.roadController.container)
      }
      getHeightAt(e, t, i) {
        return this.heightmap.getXZ(e, t, i)
      }
      getNearGridHeightAt(e, t) {
        return this.nearGrid.testHeight(e, t)
      }
      testGround(e, t) {
        return this.nearGrid.testGround(e.x, e.z, t)
      }
      testFarGrid(e, t) {
        return this.farGrid.checkActiveCell(e, t)
      }
      getHeight(e, t, i) {
        let s = this.nearGrid.testHeight(e.x, e.z);
        return s || this.heightmap.getXZ(e.x, e.z, i)
      }
      getOriginPose(e = 0) {
        let t = new window.alea(Ve),
        i = 0 + 500 * e,
        s = 500 * e,
        n = this.getHeightAt(i, s),
        a = this.getHeightAt(i + 1, s + 1),
        r = Math.abs((a - n) / 1.414);
        for (; n < 20 || r > 0.5; ) i += 100 * Math.abs(t()),
        s += 100 * Math.abs(t()),
        n = this.getHeightAt(i, s),
        a = this.getHeightAt(i + 1, s + 1),
        r = Math.abs((a - n) / 1.414);
        return n = this.getHeightAt(i, s),
        this.vehicleOrigin.set(i, n, s),
        this.vehicleOrigin
      }
      update(e, t) {
        if (this.midline.update()) {
          try {
            this.roadController.update()
          } catch (Kc) {
            throw Kc.cause = 'roadController',
            Kc
          }
          try {
            this.scene.update(e, t)
          } catch (Kc) {
            throw Kc.cause = 'sceneController',
            Kc
          }
          try {
            this.nearGrid.update()
          } catch (Kc) {
            throw Kc.cause = 'nearGrid',
            Kc
          }
          try {
            this.farGrid.update()
          } catch (Kc) {
            throw Kc.cause = 'farGrid',
            Kc
          }
        } else this.roadController.handleMidlineReset(),
        this.scene.handleMidlineReset(),
        this.nearGrid.handleMidlineReset(),
        this.farGrid.handleMidlineReset();
        this.scene.updateAudio(),
        this.updateSky(e, t)
      }
      updateSky(e, t) {
        ue.position.x = T.position.x + ue.sunOffset.x,
        ue.position.y = T.position.y + ue.sunOffset.y,
        ue.position.z = T.position.z + ue.sunOffset.z,
        this.sky.position.x = T.position.x,
        this.sky.position.y = T.position.y + this.skyOffset,
        this.sky.position.z = T.position.z,
        Fe.userData.time.value = t * this.skySpeed,
        Fe.uniformsNeedUpdate = !0
      }
    };
    const To = {
      Chase: {
        name: 'Near Chase',
        i: 0,
        pitch: {
          near: 0.3,
          far: 0.2
        },
        yOffset: {
          near: 0.8,
          far: 1
        },
        posOffset: new h.W(0, 0, 1.4),
        range: {
          near: 3.5,
          far: 4.5
        },
        farSpeed: 45,
        smoothFactor: 1.5
      },
      ChaseFar: {
        name: 'Far Chase',
        i: 1,
        pitch: {
          near: 0.25,
          far: 0.15
        },
        yOffset: {
          near: 1,
          far: 2
        },
        posOffset: new h.W(0, 0, 0),
        range: {
          near: 7,
          far: 10
        },
        farSpeed: 45,
        smoothFactor: 1.25
      },
      FirstPerson: {
        name: 'First Person',
        i: 2,
        pitch: {
          near: 0.05,
          far: 0.05
        },
        yOffset: {
          near: 0.7,
          far: 0.7
        },
        posOffset: new h.W(0, 0.6, 1.4),
        smoothFactor: 0.33,
        range: {
          near: 0.75,
          far: 0.75
        },
        farSpeed: 45,
        rollFactor: - 0.75
      },
      Bonnet: {
        name: 'Bonnet',
        i: 3,
        posOffset: new h.W,
        rollFactor: - 0.75
      },
      Debug: {
        name: 'Debug',
        i: 4,
        pitch: {
          near: 0.5,
          far: 0.5
        },
        yOffset: {
          near: 10,
          far: 20
        },
        posOffset: new h.W(0, 0, 0),
        smoothFactor: 1.5,
        range: {
          near: 40,
          far: 40
        },
        farSpeed: 45
      }
    };
    let Po = [
      'Chase',
      'ChaseFar',
      'FirstPerson'
    ];
    const Go = 'config-camera-mode';
    var Bo = class {
      smoothLerp(e) {
        return - 1 * (3 - 2 * (e = Math.min(1, e))) * e * e + 1
      }
      smootherLerp(e) {
        return ((e = Math.min(1, e)) * (6 * e - 15) + 10) * e * e * e * - 1 + 1
      }
      constructor(e) {
        if (this.onViewChange = () =>{
        }, this.mode = To[Po[G]], this.modeIndex = 0, this.boosting = !1, this.targetFOV = 0, this.curFOV = ve, this.boostFOV = ve + 3, this.orientation = new h.m(0, 0, 0, 'YXZ'), this.targets = {
          y: 0,
          x: 0
        }, this.vCenter = new h.W, this.camFwd = new h.W, this.uLerpA = 0, this.uLerpB = 0, this.uDist = 0, this.uSmoothA = 0, this.uSmoothB = 0, this.uH = 0, this.uCollisionCheck = 1, this.randFrame = !1, this.onViewChange = e, this.camera = Qe, this.camera.add(z.listener), T.addListener(S, this.reset.bind(this)), T.addListener(O, this.initVehicleAngles.bind(this)), window.localStorage.getItem(Go)) try {
          this.modeIndex = JSON.parse(window.localStorage.getItem(Go))
        } catch {
          console.log('Camera: Failed to load mode from memory')
        }
        this.initVehicleAngles(!0)
      }
      initVehicleAngles(e = !1) {
        if (!T.cameras) return;
        Po = Object.keys(T.cameras);
        let t = T.cameras;
        for (let i in t) {
          let e = To[i],
          s = t[i];
          e.pitch = s.pitch,
          e.yOffset = s.yOffset,
          e.posOffset.fromArray(s.posOffset),
          e.range = s.range,
          e.farSpeed = s.farSpeed,
          e.smoothFactor = s.smoothFactor,
          e.hideVehicle = s.hideVehicle
        }
        this.modeIndex %= Po.length,
        this.mode = To[Po[this.modeIndex]],
        e || window.localStorage.setItem(Go, this.modeIndex),
        this.reset()
      }
      updateViewDist() {
        this.camera.far = we,
        this.camera.updateProjectionMatrix()
      }
      reset() {
        let e = 0;
        isNaN(this.orientation.y + this.targets.y) || (e = this.targets.y - this.orientation.y),
        e %= 2 * Math.PI,
        this.uLerpA = this.smoothLerp(T.speed / this.mode.farSpeed),
        this.uLerpB = 1 - this.uLerpA,
        this.targets.x = this.mode.pitch.near * this.uLerpA + this.mode.pitch.far * this.uLerpB + T.pitch,
        this.targets.x *= - 1,
        this.targets.y = T.heading - Math.PI,
        this.targets.z = 0,
        this.mode.rollFactor && (this.targets.z = T.roll * this.mode.rollFactor),
        this.orientation.x = this.targets.x,
        this.orientation.y = this.targets.y - e,
        this.orientation.z = this.targets.z,
        T.geo.visible = !this.mode.hideVehicle
      }
      setSize(e, t) {
        this.camera.aspect = e / t,
        this.camera.updateProjectionMatrix(),
        this.onViewChange()
      }
      update(e) {
        p.key[u.Camera] && (this.modeIndex = (this.modeIndex + 1) % Po.length, this.mode = To[Po[this.modeIndex]], window.localStorage.setItem(Go, this.modeIndex), this.reset(), no.sendUpdate('cameraChange', Po[this.modeIndex]), p.key[u.Camera] = !1),
        this.uLerpA = this.smoothLerp(T.speed / this.mode.farSpeed),
        this.uLerpB = 1 - this.uLerpA,
        this.uSmoothA = Math.min(e / (P * this.mode.smoothFactor), 1),
        this.uSmoothC = this.uSmoothA / 2,
        this.uSmoothB = 1 - this.uSmoothA,
        this.uSmoothD = 1 - this.uSmoothC,
        this.vCenter.copy(this.mode.posOffset).applyQuaternion(T.quaternion).add(T.position),
        this.vCenter.y += this.mode.yOffset.near * this.uLerpA + this.mode.yOffset.far * this.uLerpB,
        this.camera.position.copy(this.vCenter);
        let t = T.heading - Math.PI;
        this.targets.y < - 2 && t > 2 ? this.orientation.y += 2 * Math.PI : this.targets.y > 2 && t < - 2 && (this.orientation.y -= 2 * Math.PI),
        this.targets.y = t,
        this.mode.rollFactor ? (this.targets.x = this.mode.pitch.near * this.uLerpA + this.mode.pitch.far * this.uLerpB + T.pitch, this.targets.z = T.roll * this.mode.rollFactor, this.orientation.z = this.targets.z * this.uSmoothA + this.orientation.z * this.uSmoothB) : (this.targets.x = this.mode.pitch.near * this.uLerpA + this.mode.pitch.far * this.uLerpB + T.pitch, this.targets.x = Math.max( - 0.2, this.targets.x)),
        this.targets.x *= - 1,
        this.orientation.x = this.targets.x * this.uSmoothC + this.orientation.x * this.uSmoothD,
        this.orientation.y = this.targets.y * this.uSmoothA + this.orientation.y * this.uSmoothB,
        this.camera.setRotationFromEuler(this.orientation),
        this.camera.getWorldDirection(this.camFwd),
        Qe.fwd.copy(this.camFwd).normalize().multiplyScalar( - 1),
        this.uDist = this.mode.range.near * this.uLerpA + this.mode.range.far * this.uLerpB,
        this.camera.position.add(this.camFwd.multiplyScalar( - this.uDist)),
        this.uCollisionCheck -= e,
        this.mode.i < 2 && this.uCollisionCheck < 0 && (this.uH = Ro.getHeight(this.camera.position) + 1.5, this.uH > this.camera.position.y ? (this.camera.position.y = this.uH, this.camera.lookAt(this.vCenter)) : this.uH < this.camera.position.y + 2 ? this.uCollisionCheck = (this.uH - this.camera.position.y) / 2 : this.collisionCheck = 1)
      }
      updateConfig() {
      }
      destroy() {
        this.camera.clear()
      }
    };
    var Wo = class {
      smoothLerp(e) {
        return - 1 * (3 - 2 * (e = Math.min(1, e))) * e * e + 1
      }
      smootherLerp(e) {
        return ((e = Math.min(1, e)) * (6 * e - 15) + 10) * e * e * e * - 1 + 1
      }
      constructor(e, t) {
        this.onViewChange = () =>{
        },
        this.modeIndex = 0,
        this.lockChangeAlertBound = this.lockChangeAlert.bind(this),
        this.onMouseMoveBound = this.onMouseMove.bind(this),
        this.orientation = new h.m(0, 0, 0, 'YXZ'),
        this.targets = {
          y: 0,
          x: 0
        },
        this.vCenter = new h.W,
        this.camFwd = new h.W,
        this.uLerpA = 0,
        this.uLerpB = 0,
        this.uDist = 0,
        this.uSmoothA = 0,
        this.uSmoothB = 0,
        this.uH = 0,
        this.uCollisionCheck = 1,
        this.randFrame = !1,
        this.dir = new h.W,
        this.leftVec = new h.W(0, 0, 1),
        this.upVec = new h.W(0, 1, 0),
        this.camUp = new h.W,
        this.camLeft = new h.W,
        this.trackPosition = new h.W,
        this.targetPosition = new h.W,
        this.targetSmoothing = 0.025,
        this.posVec = new h.W,
        this.sX = 0,
        this.sZ = 1,
        this.targetSpeed = 0,
        this.speed = 0,
        this.baseSpeed = 75,
        this.targetElevSpeed = 0,
        this.elevSpeed = 0,
        this.baseElevSpeed = 25,
        this.targetRotSpeed = 0,
        this.rotSpeed = 0,
        this.baseRotSpeed = 1,
        this.targetRotX = 0,
        this.targetRotY = 0,
        this.mouseSense = 0.001,
        this.targetZoom = 1,
        this.curZoom = 1,
        this.maxZoom = 8,
        this.minZoom = 0.75,
        this.zoomSpeed = 5,
        this.xSmooth = 0.003,
        this.rotSmooth = 0.02,
        this.matchSpeed = !1,
        this.track = !1,
        this.onViewChange = e,
        this.camera = Qe,
        this.camContainer = new h.G,
        this.camContainer.add(this.camera),
        this.camContainer.rotation.order = 'ZYX',
        this.camera.rotation.set(0, 0, 0),
        this.camera.rotation.y = Math.PI,
        this.camera.position.set(0, 0, 0),
        this.canvas = t,
        this.canvas.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock,
        this.canvas.onclick = () =>{
          this.canvas.requestPointerLock()
        },
        document.addEventListener('pointerlockchange', this.lockChangeAlertBound, !1),
        this.camera.add(z.listener),
        this.debug = new h.B(new h.S(2, 32, 16), new h.C({
          color: 110832
        })),
        ao.add(this.debug),
        this.reset()
      }
      lockChangeAlert() {
        document.pointerLockElement === this.canvas || document.mozPointerLockElement === this.canvas ? document.addEventListener('mousemove', this.onMouseMoveBound, !1) : document.removeEventListener('mousemove', this.onMouseMoveBound, !1)
      }
      onMouseMove(e) {
        this.targetRotY -= e.movementX * this.mouseSense / this.curZoom,
        this.targetRotX += e.movementY * this.mouseSense * this.camera.aspect / this.curZoom
      }
      updateViewDist() {
        this.camera.far = we,
        this.camera.updateProjectionMatrix()
      }
      reset() {
        this.camContainer.position.copy(T.position),
        this.camContainer.position.y += 5,
        this.camContainer.rotation.y = T.heading,
        this.camContainer.rotation.x = 0.2,
        this.curZoom = 1,
        this.targetZoom = 1,
        this.sX = Math.sin(this.camContainer.rotation.y + Math.PI),
        this.sZ = Math.cos(this.camContainer.rotation.y + Math.PI),
        this.targetPosition.copy(this.camContainer.position),
        this.targetRotX = this.camContainer.rotation.x,
        this.targetRotY = this.camContainer.rotation.y
      }
      setSize(e, t) {
        this.camera.aspect = e / t,
        this.camera.updateProjectionMatrix(),
        this.onViewChange()
      }
      update(e) {
        if (p.key[u.Camera] && (this.camera.far = 10000, this.camera.updateProjectionMatrix(), p.key[u.Camera] = !1), p.key[u.StickySteer] && (p.key[u.StickySteer] = !1, this.matchSpeed = !this.matchSpeed), p.key[u.NodeDebug]) {
          let e = tt(this.camContainer.position.x, this.camContainer.position.z, st.vehicleNode, !0).n,
          t = it(this.camContainer.position.x, this.camContainer.position.z, e);
          console.log('Near node is ' + t.n.i + ' at dist ' + t.d),
          this.debug.position.copy(t.n.p),
          p.key[u.NodeDebug] = !1
        }
        this.matchSpeed ? this.targetSpeed = Math.max(1, T.speed) : (this.speed = 0.9 * this.speed, this.targetSpeed = 0),
        this.targetElevSpeed = 0,
        this.posVec.set(0, 0, 0),
        this.dir.x = 0,
        this.hadInput = !1,
        p.key[u.Forward] && (this.hadInput = !0, this.posVec.x -= e * this.speed * this.sX, this.posVec.z -= e * this.speed * this.sZ),
        p.key[u.Backward] && (this.hadInput = !0, this.posVec.x += e * this.speed * this.sX, this.posVec.z += e * this.speed * this.sZ),
        this.dir.z = 0,
        p.key[u.Left] && (this.hadInput = !0, this.posVec.x -= e * this.speed * this.sZ, this.posVec.z += e * this.speed * this.sX),
        p.key[u.Right] && (this.hadInput = !0, this.posVec.x += e * this.speed * this.sZ, this.posVec.z -= e * this.speed * this.sX),
        this.hadElev = !1,
        p.click.right ? (this.hadElev = !0, this.posVec.y -= e * this.elevSpeed) : p.click.left && (this.hadElev = !0, this.posVec.y += e * this.elevSpeed),
        this.hadInput && !this.matchSpeed && (this.targetSpeed = this.baseSpeed),
        this.hadElev && (this.targetElevSpeed = this.baseElevSpeed),
        p.key[u.BoostAccel] && (this.targetSpeed *= 2),
        this.speed = 0.9 * this.speed + 0.1 * this.targetSpeed,
        this.elevSpeed = 0.95 * this.elevSpeed + 0.05 * this.targetElevSpeed,
        this.hadRot = !1,
        this.targetRotSpeed = 0,
        p.key[u.LeftArrow] ? (this.hadRot = !0, this.targetRotY += e * this.rotSpeed) : p.key[u.RightArrow] && (this.hadRot = !0, this.targetRotY -= e * this.rotSpeed),
        p.key[u.UpArrow] ? (this.hadRot = !0, this.targetRotX -= e * this.rotSpeed * 0.5) : p.key[u.DownArrow] && (this.hadRot = !0, this.targetRotX += e * this.rotSpeed * 0.5),
        this.hadRot && (this.targetRotSpeed = 1 * this.baseRotSpeed / this.curZoom),
        p.key[u.Num1] && (this.targetRotSpeed *= 2),
        this.rotSpeed = 0.98 * this.rotSpeed + 0.02 * this.targetRotSpeed,
        this.camContainer.rotation.x = this.camContainer.rotation.x * (1 - this.rotSmooth) + this.targetRotX * this.rotSmooth,
        this.camContainer.rotation.y = this.camContainer.rotation.y * (1 - this.rotSmooth) + this.targetRotY * this.rotSmooth,
        this.sX = Math.sin(this.camContainer.rotation.y + Math.PI),
        this.sZ = Math.cos(this.camContainer.rotation.y + Math.PI),
        0 != p.scrollDelta && (this.targetZoom -= p.scrollDelta * e * this.zoomSpeed, this.targetZoom = Math.max(Math.min(this.maxZoom, this.targetZoom), this.minZoom), p.scrollDelta = 0),
        this.curZoom = 0.95 * this.curZoom + 0.05 * this.targetZoom,
        this.curZoom != this.camera.zoom && (this.camera.zoom = this.curZoom, this.camera.updateProjectionMatrix()),
        p.key[u.T] && (p.key[u.T] = !1, this.track = !this.track, this.track || (this.camera.rotation.x = 0, this.camera.rotation.y = Math.PI, this.camera.rotation.z = 0)),
        this.track && (this.trackPosition.copy(T.frontAxlePosition), this.trackPosition.y += 0.5, this.camContainer.lookAt(this.trackPosition)),
        p.key[u.ResetCamera] && (this.reset(), p.key[u.ResetCamera] = !1),
        this.camera.getWorldDirection(this.camFwd),
        this.targetPosition.add(this.posVec),
        this.camContainer.position.lerp(this.targetPosition, this.targetSmoothing),
        this.uCollisionCheck -= e,
        this.uCollisionCheck < 0 && (this.uH = Ro.getHeight(this.targetPosition) + 0.5, this.uH > this.targetPosition.y ? this.targetPosition.y = this.uH : this.uH < this.targetPosition.y + 2 ? this.uCollisionCheck = (this.uH - this.targetPosition.y) / 2 : this.collisionCheck = 1)
      }
      updateConfig() {
      }
      destroy() {
        this.camContainer.clear(),
        this.camera.clear(),
        ao.remove(this.debug)
      }
    };
    function Eo(e, t) {
      return 0 == t ? e > 0 ? Math.PI / 2 : 3 * Math.PI / 2 : 0 == e ? t > 0 ? 0 : Math.PI : e > 0 ? t > 0 ? Math.atan(e / t) : Math.PI + Math.atan(e / t) : t < 0 ? Math.PI + Math.atan(e / t) : 2 * Math.PI + Math.atan(e / t)
    }
    var Zo = new class extends l {
      constructor(...e) {
        super (...e),
        this.default = - 9.81,
        this.value = - 9.81
      }
    };
    var Fo = {
      mouseWidgetHeight: 24,
      mouseWidgetWidth: 640,
      useMouse: !0
    },
    Ho = i.p + 'static/media/achievement.3ef707de.wav';
    const Qo = {
      edge: !1
    },
    Yo = {
      edge: 'achievement-edge'
    };
    var Vo = new class extends x {
      constructor(...e) {
        super (...e),
        this.value = Qo,
        this.hasLoaded = !1,
        this.sound = null,
        this.loadAchievements(),
        this.hasLoaded = !0,
        z.hasInit ? this.onAudioInit() : z.addInitListener(this.onAudioInit.bind(this))
      }
      onAudioInit() {
        z.getAudio(Ho, (e=>{
          this.sound = e
        }))
      }
      set(e, t) {
        var i;
        e in this.value && !this.value[e] && 1 == t && (null === (i = this.sound) || void 0 === i || i.play(), window.localStorage.setItem(Yo[e], t));
        super.set(e, t)
      }
      loadAchievements() {
        let e,
        t;
        for (t in this.value) e = JSON.parse(window.localStorage.getItem(Yo[t]) || Qo[t]),
        this.value[t] = e
      }
    };
    const Uo = Object.keys(Ch),
    Xo = () =>({
      personal: Jo(),
      global: {
        daily: Jo(),
        allTime: Jo()
      }
    }),
    Jo = () =>{
      let e = {
      };
      for (let t of gh) {
        e[t] = {
        };
        for (let i of Uo) e[t][i] = - 1
      }
      return e
    },
    qo = Xo();
    var Ko = new class extends x {
    }({
      ...qo,
      key: 'fastestMile',
      seconds: - 1,
      live: {
        value: - 1,
        progress: 0,
        prev: 0
      },
      liveInterval: {
        startTime: 0,
        startNode: 0,
        endNode: 160
      }
    });
    const _o = [
      {
        key: 'fastestMile',
        label: 'Fastest Any Mile',
        unit: 'seconds',
        state: Ko,
        stateKey: 'seconds'
      },
      {
        key: 'fastestFirstFive',
        label: 'Fastest First Five Miles',
        unit: 'seconds'
      },
      {
        key: 'furthestJourney',
        label: 'Furthest Single Journey',
        unit: 'meters'
      },
      {
        key: 'furthestOnRoad',
        label: 'Furthest On-Road',
        unit: 'meters'
      }
    ];
    var $o = new class extends x {
      constructor(e) {
        super (e),
        this.updateView(),
        this.loadRecords(),
        this.listenRecords(),
        Rh.addListener('type', this.onVehicleChanged.bind(this))
      }
      switchBoard() {
        'global' == this.view.board ? this.set('view', {
          ...this.view,
          board: 'personal'
        }) : this.set('view', {
          ...this.view,
          board: 'global'
        })
      }
      switchTime() {
        'daily' == this.view.time ? this.set('view', {
          ...this.view,
          time: 'allTime'
        }) : this.set('view', {
          ...this.view,
          time: 'daily'
        })
      }
      loadRecords() {
        for (let e of _o) e.state && e.state.set('personal', this.getRecords('records_' + e.key))
      }
      updateView() {
        this.set('view', {
          ...this.view,
          topography: wh.initialValue.topography,
          vehicle: Rh.value.type
        })
      }
      onVehicleChanged(e) {
        this.updateView()
      }
      listenRecords() {
      }
      getRecords(e) {
        let t = null;
        try {
          t = JSON.parse(window.localStorage.getItem(e))
        } catch (Kc) {
          console.warn('Could not load record ' + e + ' from local storage')
        }
        if (null == t) {
          t = Xo().personal
        }
        return t
      }
      storeRecords(e, t) {
        window.localStorage.setItem('records_' + e, JSON.stringify(t))
      }
      getStorage(e) {
        let t = null;
        try {
          t = JSON.parse(window.localStorage.getItem(e))
        } catch (Kc) {
          console.warn('Could not load record ' + e + ' from local storage')
        }
        return t
      }
      encodeKey(e) {
        return 'records_' + wh.initialValue.topography + '_' + Rh.value.type + '_' + e
      }
      store(e, t) {
        isNaN(t) ? console.warn('Avoiding record of NaN value ', t) : t < 0 ? console.warn('Avoiding record of default value ', t) : window.localStorage.setItem(this.encodeKey(e), t)
      }
    }({
      view: {
        topography: 'normal',
        vehicle: 'Roadster',
        time: 'daily',
        board: 'personal'
      },
      global: null
    });
    var el = new class extends l {
      constructor(...e) {
        super (...e),
        this.default = !1,
        this.value = !1
      }
    };
    var tl = new class {
      constructor() {
        this.onDisplayBound = this.onDisplay.bind(this),
        this.onSocketBound = this.onSocket.bind(this),
        this.hasInit = !1,
        this.updateViewBound = this.updateView.bind(this),
        this.seenIndex = 0,
        this.updateBound = this.update.bind(this),
        this.endNodeOffset = 0,
        this.endNodeTracker = 0,
        null !== Hh.value ? this.onSocket(Hh.value) : Hh.addListener(this.onSocketBound),
        $o.addListener('view', this.updateViewBound),
        el.addListener(this.onDisplayBound)
      }
      onDisplay(e) {
        e ? (this.resetFastestMile(), I.addSlowListener(this.updateBound)) : I.addSlowListener(this.updateBound)
      }
      onSocket(e) {
        e.on('leaderboard', this.onNewLeaderboard.bind(this)),
        e.on('partialLeaderboard', this.onPartialLeaderboard.bind(this)),
        e.on('newRecord', this.onNewRecord.bind(this)),
        e.emit('requestLeaderboard')
      }
      onNewLeaderboard(e) {
        $o.set('global', e)
      }
      onPartialLeaderboard(e) {
      }
      onNewRecord(e) {
        console.log('Got a new record!')
      }
      submitRecord(e, t, i, s, n = 'Anonymous') {
        Hh.value && Hh.value.emit('challengeRecord', {
          key: i,
          topography: e,
          vehicle: t,
          value: s,
          name: n
        })
      }
      updateView(e) {
        this.resetFastestMile()
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1,
        this.hasInit || this.resetFastestMile(),
        this.hasInit = !0
      }
      init() {
        $o.updateView(),
        this.resetFastestMile(),
        this.paused = !0,
        this.hasInit = !1
      }
      resetFastestMile() {
        Ko.set('liveInterval', {
          startTime: I.playTime,
          startNode: st.vehicleIndex,
          endNode: st.vehicleIndex + 160
        }),
        Ko.set('live', {
          value: 0,
          prev: Ko.live.prev,
          progress: 0
        })
      }
      nodeDidChange() {
        wh.saveProgress(st.vehicleIndex)
      }
      update(e) {
        this.paused || (this.updateFastestMile(e), this.seenIndex = st.vehicleIndex)
      }
      checkRecordBreak(e, t, i) {
        return !(e < 1) && (this.tr = t.personal[$o.view.topography][$o.view.vehicle], (e < this.tr || this.tr < 0) && (t.personal[$o.view.topography][$o.view.vehicle] = e, !0))
      }
      updateFastestMile(e) {
        Ko.live.value += 1000 * e / 1000,
        this.seenIndex !== st.vehicleIndex && (Ko.live.progress = (st.vehicleIndex - Ko.liveInterval.startNode) / 160, Ko.liveInterval.endNode <= st.vehicleIndex && (this.checkRecordBreak(Ko.live.value, Ko) && (Ko.onChanged('personal', Ko.personal), $o.storeRecords(Ko.key, Ko.personal)), this.submitRecord($o.view.topography, $o.view.vehicle, Ko.key, Ko.live.value), Ko.set('liveInterval', {
          startTime: I.playTime,
          startNode: st.vehicleIndex,
          endNode: st.vehicleIndex + 160
        }), Ko.live.prev = Ko.live.value, Ko.live.value = 0, Ko.live.progress = 0)),
        Ko.onChanged('live', Ko.live)
      }
    };
    const il = {
      None: 0,
      Basic: 1,
      Reset: 2,
      Boost: 3,
      UTurn: 4,
      Reverse: 5
    },
    sl = {
      Reset: 'seen-reset',
      Boost: 'seen-boost'
    },
    nl = {
      Basic: Bh.newUser,
      Reset: null == localStorage.getItem(sl.Reset),
      Boost: null == localStorage.getItem(sl.Boost)
    },
    al = e=>{
      e in nl && (nl[e] = !1, localStorage.setItem(sl[e], !0), rl.value == il[e] && rl.set(il.None))
    },
    rl = new l(Bh.newUser ? il.Basic : il.None);
    var hl = rl,
    ol = i.p + 'static/media/tyres_01_m.2ec57852.mp3',
    ll = i.p + 'static/media/sus_01.6624d5cb.mp3',
    dl = i.p + 'static/media/veh_brake_02.4c95eb2a.mp3',
    cl = i.p + 'static/media/veh_brake_01.9dca1f18.mp3',
    pl = i.p + 'static/media/rolling_offroad_04.e2ad11f4.mp3',
    ul = i.p + 'static/media/veh_scrape_01.3499a87a.mp3',
    gl = i.p + 'static/media/hit_01.33777ad9.mp3',
    ml = i.p + 'static/media/hit_02.c5bc2ff2.mp3',
    xl = i.p + 'static/media/hit_03.43267a22.mp3';
    const vl = 'roll',
    wl = 'engine',
    fl = 'engine2',
    bl = 'brake',
    Al = 'boost',
    yl = 0.8,
    Il = {
      brake: dl,
      boost: cl,
      engine2: dl
    },
    Dl = {
      sus: ll,
      tyre: ol,
      roll: null,
      offroad: pl
    },
    Nl = {
      hits: [
        gl,
        ml,
        xl
      ],
      scrape: ul
    };
    var Ml = class {
      constructor(e) {
        this.sounds = {
          tyres: [
          ],
          sus: [
          ],
          rolls: [
          ],
          offroads: [
          ]
        },
        this.worldSounds = {
          hits: [
          ],
          scrape: null
        },
        this.audioReady = !1,
        this.paved = !0,
        this.updateNull = () =>{
        },
        this.vol = 0,
        this.decel = !1,
        this.lerpTarget = 0,
        this.speedTarget = 0,
        this.boostT = 0,
        this.brakeT = 0,
        this.tls = [
          0,
          0,
          0,
          0
        ],
        this.coll = !1,
        this.hitIndex = 0,
        this.vc = e,
        this.update = this.updateNull,
        'Planet' == wh.sceneName && (this.paved = !1),
        wh.addListener('sceneName', (e=>this.paved = 'Planet' !== e))
      }
      suspend() {
        for (let t in this.sounds) {
          var e;
          if (Array.isArray(this.sounds[t])) for (let e of this.sounds[t]) e.setVolume(0);
           else null === (e = this.sounds[t]) || void 0 === e || e.setVolume(0)
        }
        for (let t of this.worldSounds.hits) t.setVolume(0);
        this.worldSounds.scrape.setVolume(0)
      }
      initForVehicle(e, t, i) {
        this.update = this.updateNull,
        this.inputs = t,
        this.wheels = i,
        this.soundCount = 0,
        this.soundLoaded = 0;
        for (let r in e.audio) this.loadSound(r, e.audio[r]);
        for (let r in Il) e.audio[r] || this.loadSound(r, Il[r]);
        Dl.roll = e.audio.roll,
        this.loadWorldSounds();
        for (let r in this.sounds) {
          var s,
          n;
          for (let e = 0; e < this.sounds[r].length; e++) this.sounds[r][e].stop();
          null === (s = (n = this.sounds[r]).stop) || void 0 === s || s.call(n)
        }
        let a = [
        ];
        e.bike ? a.push({
          x: 0,
          z: e.wheels.length
        }, {
          x: 0,
          z: 0
        }) : a.push({
          x: e.wheels.width / 2,
          z: e.wheels.length
        }, {
          x: - e.wheels.width / 2,
          z: e.wheels.length
        }, {
          x: e.wheels.width / 2,
          z: 0
        }, {
          x: - e.wheels.width / 2,
          z: 0
        });
        for (let r = 0; r < a.length; r++) this.loadTyre(r, a[r]);
        this.lerpTarget = 0,
        this.speedTarget = 0
      }
      soundDidLoad() {
        this.soundLoaded++,
        this.soundLoaded >= this.soundCount && (this.update = this.updateLive)
      }
      loadHit(e) {
        this.soundCount++,
        z.getPositionalAudio(Nl.hits[e], (t=>{
          this.worldSounds.hits[e] = t,
          t.setRefDistance(5),
          t.setRolloffFactor(3 * yl),
          t.setVolume(0),
          T.add(t),
          t.onEnded = () =>{
            t.stop()
          },
          this.soundDidLoad()
        }), this.worldSounds.hits[e])
      }
      loadWorldSounds() {
        for (let e = 0; e < Nl.hits.length; e++) this.loadHit(e);
        this.soundCount++,
        z.getPositionalAudio(Nl.scrape, (e=>{
          this.worldSounds.scrape && (this.worldSounds.scrape.stop(), T.remove(this.worldSounds.scrape)),
          this.worldSounds.scrape = e,
          e.setLoop(!0),
          e.setLoopStart(0.1),
          e.setLoopEnd(e.buffer.duration - 0.1),
          e.setVolume(0),
          e.setRefDistance(8),
          e.setRolloffFactor(yl),
          e.play(),
          e.position.set(0, 0.5, T.wheels.length / 2),
          T.add(this.worldSounds.scrape),
          this.soundDidLoad()
        }))
      }
      loadTyre(e, t) {
        this.soundCount += 4,
        z.getPositionalAudio(Dl.tyre, (i=>{
          this.sounds.tyres[e] && this.sounds.tyres[e].stop(),
          this.sounds.tyres[e] = i,
          i.setLoop(!0),
          i.setLoopStart(0.1),
          i.setLoopEnd(i.buffer.duration - 0.1),
          i.setRefDistance(2 * T.wheels.length),
          i.setRolloffFactor(4),
          i.setVolume(0),
          i.offset = Math.random() * i.buffer.duration,
          i.detune = - 400 * Math.random(),
          i.play(),
          i.position.x = t.x,
          i.position.z = t.z,
          T.add(i),
          this.soundDidLoad()
        }), this.sounds.tyres[e]),
        z.getPositionalAudio(Dl.roll, (i=>{
          this.sounds.rolls[e] && this.sounds.rolls[e].stop(),
          this.sounds.rolls[e] = i,
          i.setLoop(!0),
          i.setLoopStart(0.1),
          i.setLoopEnd(i.buffer.duration - 0.1),
          i.setVolume(0),
          i.setRefDistance(2 * T.wheels.length),
          i.setRolloffFactor(3 * yl),
          i.offset = (0.1 * Math.random() + 0.25 * e) * i.buffer.duration,
          i.play(),
          i.position.x = t.x,
          i.position.z = t.z,
          T.add(i),
          this.soundDidLoad()
        }), this.sounds.rolls[e]),
        z.getPositionalAudio(Dl.offroad, (i=>{
          this.sounds.offroads[e] && this.sounds.offroads[e].stop(),
          this.sounds.offroads[e] = i,
          i.setLoop(!0),
          i.setLoopStart(0.1),
          i.setLoopEnd(i.buffer.duration - 0.1),
          i.setVolume(0),
          i.setRefDistance(2 * T.wheels.length),
          i.setRolloffFactor(3 * yl),
          i.offset = Math.random() * i.buffer.duration,
          i.detune = 800 * Math.random(),
          i.play(),
          i.position.x = t.x,
          i.position.z = t.z,
          e < 2 && (i.position.z = T.wheels.length),
          T.add(i),
          this.soundDidLoad()
        }), this.sounds.offroads[e]),
        z.getPositionalAudio(Dl.sus, (i=>{
          this.sounds.sus[e] && this.sounds.sus[e].stop(),
          this.sounds.sus[e] = i,
          i.setLoop(!0),
          i.setLoopStart(0.1),
          i.setLoopEnd(i.buffer.duration - 0.1),
          i.setRefDistance(0.8),
          i.setRolloffFactor(yl),
          i.setVolume(0),
          i.offset = Math.random() * i.buffer.duration,
          i.detune = - 400 * Math.random(),
          i.play(),
          i.position.x = t.x,
          i.position.z = t.z,
          T.add(i),
          this.soundDidLoad()
        }), this.sounds.sus[e])
      }
      loadSound(e, t) {
        this.soundCount++,
        z.getPositionalAudio(t, (t=>{
          var i;
          null === (i = this.sounds[e]) || void 0 === i || i.stop(),
          this.sounds[e] = t,
          e == vl && (t.setLoop(!0), t.setLoopStart(0.1), t.setLoopEnd(t.buffer.duration - 0.1), t.setVolume(0), t.setRefDistance(2 * T.wheels.length), t.setRolloffFactor(yl), t.play(), t.position.set(0, 0.5, T.wheels.length / 2)),
          e != wl && e != fl || (t.setLoop(!0), t.setLoopStart(0.1), t.setLoopEnd(t.buffer.duration - 0.1), t.setRefDistance(2 * T.wheels.length), t.setRolloffFactor(yl), t.position.set(0, 0.5, T.wheels.length), t.setVolume(0), t.play()),
          e != bl && e != Al || (t.setLoop(!0), t.setLoopStart(0.1), t.setLoopEnd(t.buffer.duration - 0.1), t.setRefDistance(2 * T.wheels.length), t.setRolloffFactor(yl), t.position.set(0, 0.5, T.wheels.length / 2), t.setVolume(0), t.play()),
          T.add(this.sounds[e]),
          this.soundDidLoad()
        }), this.sounds[e])
      }
      updateLive(e, t, i) {
        this.updateEngine(e, this.inputs),
        this.updateBoost(),
        this.updateBrakes(),
        this.updateTyres(e, this.wheels),
        this.updateCollisions()
      }
      updateEngine(e, t) {
        let i = this.sounds.engine,
        s = this.sounds.engine2,
        n = T.speed / (1.25 * T.metrics.topSpeed);
        n = n < 0.5 ? n * n * 2 : 2 * (1 - n),
        n *= Math.abs(this.vc.inputs.accel) / T.metrics.accel,
        0 != t.accel ? (this.vol < 0.2 ? this.vol = 0.2 : this.vol < 1 && (this.decel && (this.vol += 0.2, this.decel = !1), this.vol += 2 * e, this.vol = Math.min(1, this.vol, T.speed / 20)), this.speedTarget = Math.min(T.speed, T.metrics.topSpeed + 10) / 15 + 2, this.lerpTarget = 0.95 * this.lerpTarget + 0.05 * this.speedTarget, i.setPlaybackRate(4 * this.lerpTarget), s.setPlaybackRate(0.06 + this.lerpTarget / 16), this.t1 = 0.6 * (1 - this.smoothstep(this.vol)), i.setVolume(this.t1), s.setVolume(this.t1 * n)) : this.vol > 0 && (0 == this.decel && (this.lerpTarget -= 0.05), this.decel = !0, this.vol -= e, this.vol = Math.max(0, this.vol), this.t1 = 0.6 * this.vol, i.setVolume(this.t1), s.setVolume(this.t1 * n))
      }
      updateBoost() {
        if (this.sounds.boost) {
          if (this.vc.hasAccel && this.vc.hasBoost) {
            let e = T.speed / T.metrics.topSpeed,
            t = 1 - Math.min(1, e);
            t = 0.75 + (1 - t) / 2,
            this.sounds.boost.setPlaybackRate(t),
            t = 2 * (1 - (t - 0.25)),
            this.boostT = 0.9 * this.boostT + 0.1 * t
          } else this.boostT *= 0.9;
          this.sounds.boost.setVolume(1.5 * this.boostT)
        }
      }
      updateBrakes() {
        T.braking ? (this.brakeT = 0.9 * this.brakeT + 0.1 * Math.min(1, Math.max(0, (T.speed - 5) / 20)), this.sounds.brake.setPlaybackRate(1), this.sounds.brake.setVolume(0.4 * this.brakeT * T.brakeLerp)) : this.sounds.brake.setVolume(0)
      }
      updateTyres(e, t) {
        let i = 1 * Math.max(0, Math.min(1, (T.speed - 2) / T.metrics.topSpeed));
        for (let s of t) {
          if (T.bike && s.i > 1) break;
          this.maxAud = Math.max(0, Math.min(1, ((Math.abs(s.latDirDot) - 0.05) * s.speed - 2) / 4)),
          T.handbrake && s.i > 1 && (this.maxAud = Math.max(this.maxAud, Math.min(1, (Math.abs(s.lonDirDot * s.speed) - 2) / 4))),
          T.braking && s.speed > 40 && (this.maxAud = Math.max(this.maxAud, 0.5 * Math.abs(s.lonDirDot))),
          this.tl = this.tls[s.i],
          this.maxAud > 0 ? this.tl = 0.95 * this.tl + 0.05 * this.maxAud : this.tl = 0.8 * this.tl,
          s.shockPos < 0.25 && (this.tl *= 4 * s.shockPos),
          s.onRoad && this.paved ? (this.sounds.tyres[s.i].setVolume(this.tl), this.sounds.offroads[s.i].setVolume(0), this.sounds.rolls[s.i].setVolume(i), this.sounds.rolls[s.i].setPlaybackRate(0.6 + T.speed / T.metrics.topSpeed * 0.4)) : (this.sounds.tyres[s.i].setVolume(0), s.shockPos < 0.25 ? this.sounds.offroads[s.i].setVolume(Math.max(i * s.shockPos * 4, this.tl)) : this.sounds.offroads[s.i].setVolume(Math.max(i, this.tl)), this.sounds.offroads[s.i].setPlaybackRate(0.5 + T.speed / T.metrics.topSpeed), this.sounds.rolls[s.i].setVolume(0)),
          this.tls[s.i] = this.tl,
          this.tl = Math.max(Math.min(1, Math.abs(40 * s.dShockPos)), 0),
          this.tl *= s.shockPos < 0.5 ? 0 : 2 * s.shockPos - 1,
          this.sounds.sus[s.i].setVolume(0.6 * this.tl)
        }
      }
      updateRoll() {
        this.sounds.roll.setVolume(Math.max(0, Math.min(1, (T.speed - 2) / T.metrics.topSpeed)))
      }
      updateCollisions() {
        this.vc.didCollide && !this.vc.collisionsDisabled ? this.coll ? this.worldSounds.scrape.setVolume(Math.min(1, 2 * this.vc.collisionStrength)) : (this.coll = !0, this.worldSounds.hits[this.hitIndex].setVolume(Math.min(1, 0.6 * this.vc.collisionStrength)), this.worldSounds.hits[this.hitIndex].detune = - 1200 * Math.random() + 600, this.worldSounds.hits[this.hitIndex].play(), this.hitIndex = (this.hitIndex + 1) % 2) : (this.coll = !1, this.worldSounds.scrape.setVolume(0))
      }
      smoothstep(e) {
        return - 1 * (3 - 2 * e) * e * e + 1
      }
    };
    const Cl = 2 * Math.PI,
    jl = 2.5 * Math.PI,
    kl = {
      easy: 0.6,
      normal: 0.75,
      hard: 0.6
    },
    zl = {
      easy: 0.55,
      normal: 0.55,
      hard: 0.4
    },
    Sl = {
    };
    var Ol = class {
      constructor(e) {
        this.inputs = {
          accel: 0,
          steer: 0,
          brake: 0
        },
        this.targetNode = null,
        this.targetFineIndex = 0,
        this.targetPos = new h.W,
        this.targetSpeed = 0,
        this.targetRoadHeading = 0,
        this.dH = 0,
        this.angleDif = 0,
        this.angleDifAbs = 0,
        this.lookahead = 20,
        this.bendiness = 0,
        this.bendyAngles = [
        ],
        this.bendyLookahead = 4,
        this.bendyFactor = 1,
        this.bendinessVal = 0,
        this.lateralOffsetFactor = 2,
        this.debugShape = null,
        this.doNotResetIfOffroad = !1,
        this.updateIndex = 0,
        this.vehicleIndex = 0,
        this.vehicleAccel = 0,
        this.pVehicleSpeed = 0,
        this.vehicleFrontAxel = new h.W,
        this.pRoadEdgeProximity = 0,
        this.dRoadEdgeProximity = 0,
        this.pSteer = 0,
        this.lerpIndex = 0,
        this.resetVehicle = e || (() =>{
        }),
        this.debugShape = new h.B(new h.S(0.5, 32, 16), new h.C({
          color: 16711935
        })),
        this.bendinessShape = new h.B(new h.S(0.5, 32, 16), new h.C({
          color: 65535
        })),
        this.targetShape = new h.B(new h.S(0.3, 32, 16), new h.C({
          color: 16776960
        })),
        wh.addListener('topography', (() =>this.onTopographyChanged())),
        wh.addListener('sceneName', (() =>this.onTopographyChanged())),
        this.onTopographyChanged()
      }
      onTopographyChanged() {
        'Planet' == wh.value.sceneName ? this.bendyFactor = zl[wh.value.topography] : this.bendyFactor = kl[wh.value.topography]
      }
      initialise() {
        this.doNotResetIfOffroad = !T.onRoad,
        this.vehicleIndex = st.vehicleIndex,
        this.targetNode = st.vehicleNode,
        this.bendyAngles.length = 0,
        this.bendyRoot = st.vehicleNode,
        this.bendyTail = st.vehicleNode,
        this.bendiness = this.targetNode.da,
        this.bendyAngles.push(this.targetNode.da);
        for (let e = 1; e < this.bendyLookahead; e++) this.bendyTail = this.bendyTail.next,
        this.bendiness += this.bendyTail.da,
        this.bendyAngles.push(Math.abs(this.bendyTail.da))
      }
      reset() {
        this.pDeltaSteer = 0,
        this.pSteer = 0,
        this.steerSpeed = 0
      }
      update(e) {
        if (this.vehicleAccel = (T.speed - this.pVehicleSpeed) / e, this.pVehicleSpeed = T.speed, Sl.m = it(T.frontAxlePosition.x, T.frontAxlePosition.z, st.vehicleNode, !0), this.roadEdgeProximity = Sl.m.d / (Te - T.wheels.width / 2) * Sl.m.s, this.roadEdgeProximity < 0 ? this.roadEdgeProximity = Math.max( - 1, Math.min(0, 2 * (this.roadEdgeProximity + 0.5))) : this.roadEdgeProximity = Math.min(1, Math.max(0, 2 * (this.roadEdgeProximity - 0.5))), this.roadEdgeProximityAbs = Math.abs(this.roadEdgeProximity), this.dRoadEdgeProximity = this.roadEdgeProximityAbs - this.pRoadEdgeProximity, this.pRoadEdgeProximity = this.roadEdgeProximityAbs, T.onRoad) null != this.offRoadTime && (this.offRoadTime = null),
        this.doNotResetIfOffroad = !1;
         else if (!this.doNotResetIfOffroad) if (null == this.offRoadTime) this.offRoadTime = Date.now(),
        this.offRoadMidlineDist = Sl.m.d;
         else if (Date.now() - this.offRoadTime > 5000) {
          if (Sl.m.d > this.offRoadMidlineDist - 5) return void this.resetVehicle();
          this.offRoadTime = Date.now()
        }
        if (T.speed < 1) {
          if (null == this.stuckTime) this.stuckTime = Date.now();
           else if (Date.now() - this.stuckTime > 3000) return console.log('Autodrive stuck; forcing a reset'),
          this.stuckTime = null,
          void this.resetVehicle()
        } else null !== this.stuckTime && (this.stuckTime = null);
        this.updateTarget(),
        Sl.dist = this.targetPos.distanceTo(T.position),
        Sl.steerRadius = Sl.dist / 2 / Math.sin(this.angleDifAbs),
        this.inputs.steer = Math.atan(T.wheels.length / Sl.steerRadius),
        this.angleDif > 0 && (this.inputs.steer *= - 1),
        Sl.angleOfArrival = - 2 * this.angleDif + T.heading,
        Sl.vnHeading = T.heading - (jl - st.vehicleNode.a) % Cl,
        Sl.vnHeading > 3 ? Sl.vnHeading -= Cl : Sl.vnHeading < - 3 && (Sl.vnHeading += Cl),
        Sl.vnHeading = Math.abs(Sl.vnHeading),
        Sl.targetArrivalDif = this.targetRoadHeading - Sl.angleOfArrival,
        Sl.targetArrivalDif > 3 ? Sl.targetArrivalDif -= Cl : Sl.targetArrivalDif < - 3 && (Sl.targetArrivalDif += Cl),
        Sl.targetArrivalDif = Math.abs(Sl.targetArrivalDif),
        Sl.beelineAssessment = 1.5 * Sl.targetArrivalDif,
        Sl.beelineAssessment += 4 * Math.abs(T.slip),
        Sl.beelineAssessment += Sl.vnHeading,
        this.beelineFactor = 1 - Math.max(0, Math.min(1, Math.cos(Sl.beelineAssessment))),
        this.dRoadEdgeProximity > 0 && Math.sign(this.roadEdgeProximity) != Math.sign(this.inputs.steer) && (this.beelineFactor += this.roadEdgeProximityAbs / 4, this.beelineFactor = Math.max(0, Math.min(1, this.beelineFactor))),
        this.beelineSteer = - this.angleDif,
        this.inputs.steer = this.inputs.steer * (1 - this.beelineFactor) + this.beelineSteer * this.beelineFactor,
        this.roadEdgeProximityAbs > 0 && (this.inputs.steer < 0 && this.roadEdgeProximity < 0 && st.vehicleNode.rWallDist || this.inputs.steer > 0 && this.roadEdgeProximity > 0 && st.vehicleNode.lWallDist) && (this.inputs.steer /= 1 + this.roadEdgeProximityAbs * this.roadEdgeProximityAbs * this.roadEdgeProximityAbs),
        this.inputs.steer = Math.max(Math.min(T.metrics.maxSteer, this.inputs.steer), - T.metrics.maxSteer),
        this.targetSpeed = this.lookahead,
        T.speed > this.targetSpeed ? (this.targetDecel = (this.targetSpeed * this.targetSpeed - T.speed * T.speed) / (2 * Sl.dist), this.inputs.accel = 0, this.inputs.brake > 0 ? this.brakeThreshold = Math.max(1, 1.5 - this.bendinessMax * T.metrics.brake / 4) : this.brakeThreshold = Math.max(1.05, 1.5 - this.bendinessMax * T.metrics.brake / 4), this.brakeFactor = 1 + 3 * this.bendinessMax, this.brakeFactor *= 1 - (5 * T.slip + 3 * Math.abs(this.inputs.steer)), T.speed / this.targetSpeed > this.brakeThreshold ? (this.inputs.brake = T.speed / this.targetSpeed - 1, this.inputs.brake *= this.brakeFactor, this.inputs.brake = Math.min(1, this.inputs.brake)) : this.inputs.brake = 0) : 0 == this.inputs.accel && T.speed > 0.95 * this.targetSpeed ? (this.inputs.accel = 0, this.inputs.brake = 0) : (this.inputs.accel = T.metrics.accel, this.inputs.brake = 0),
        this.updateIndex++,
        this.updateIndex >= 7 && (this.updateIndex = 0),
        T.bike ? this.steerLerp = 7 * e : this.steerLerp = 0.5,
        this.inputs.steer = this.pSteer * (1 - this.steerLerp) + this.inputs.steer * this.steerLerp,
        this.pSteer = this.inputs.steer
      }
      updateTarget() {
        this.lookahead = 15 + this.bendinessVal * (0.8 * T.metrics.topSpeed - 15),
        this.maxTargetDist = 10 + Math.max(0, Math.min(this.lookahead, T.speed) - 10);
        let e = Math.floor(this.maxTargetDist / 10);
        (this.targetNode.i < st.vehicleIndex + e || this.lerpIndex >= 10 || this.targetNode.i <= st.vehicleIndex) && (this.bendiness -= this.targetNode.da, this.bendyAngles.shift(), this.targetNode = this.targetNode.next, this.bendyTail = this.bendyTail.next, this.bendiness += this.bendyTail.da, this.bendyAngles.push(Math.abs(this.bendyTail.da)), this.bendinessShape.position.copy(this.bendyTail.p), this.lerpIndex = 0, this.dH = this.targetNode.p.y - st.vehicleNode.p.y, this.bendinessVal = Math.abs(this.bendiness / this.bendyLookahead), this.bendinessMax = Math.max(...this.bendyAngles), this.bendinessLerp = Math.min(1, (this.bendinessMax - this.bendinessVal) / 0.75), this.bendinessVal = this.bendinessVal * (1 - this.bendinessLerp) + this.bendinessMax * this.bendinessLerp, this.bendinessVal -= 0.025, this.bendinessVal = Math.min(1, Math.max(0, this.bendyFactor - this.bendinessVal) / this.bendyFactor), this.bendinessVal *= this.bendinessVal, this.bendinessVal *= this.bendinessVal);
        let t = this.targetNode.p.distanceTo(T.position);
        if (this.lerpIndex = Math.max(this.lerpIndex, Math.max(Math.floor(this.maxTargetDist - t)), 0), this.lerpIndex < 10) {
          this.targetPos.copy(this.targetNode.ps[this.lerpIndex]);
          let e = this.targetNode.a - this.targetNode.next.a;
          e = e > 3 ? this.targetNode.next.a + Cl : e < - 3 ? this.targetNode.next.a - Cl : this.targetNode.next.a;
          let t = 1 - this.lerpIndex / 10;
          this.targetRoadHeading = this.targetNode.a * t + e * (1 - t)
        } else this.targetPos.copy(this.targetNode.next.p),
        this.targetRoadHeading = this.targetNode.next.a;
        this.targetRoadHeading = (jl - this.targetRoadHeading) % Cl;
        let i = Eo(this.targetPos.x - T.position.x, this.targetPos.z - T.position.z);
        this.angleDif = T.heading - i,
        this.angleDif > Math.PI ? this.angleDif -= Cl : this.angleDif < - Math.PI && (this.angleDif += Cl),
        this.angleDifAbs = Math.abs(this.angleDif),
        this.targetShape.position.copy(this.targetNode.p),
        this.debugShape.position.copy(this.targetPos)
      }
    };
    const Ll = [
      2.23694,
      3.59999
    ],
    Rl = [
      1 / 1604,
      0.001
    ];
    const Tl = new h.W(0, 1, 0),
    Pl = 2 * Math.PI,
    Gl = 0.5,
    Bl = {
    default:
      new h.E({
        color: 11184810
      }),
      grey: new h.D({
        color: 5592405
      }),
      wheel: new h.D({
        color: 4473924
      }),
      white: new h.D({
        color: 15658734
      }),
      black: new h.D({
        color: 3355443
      }),
      tire: new h.D({
        color: 2236962
      }),
      body: new h.F({
        color: 16316664,
        roughness: 0.5
      }),
      map: new h.F({
        color: 16777215,
        roughness: 0.5,
        map: X(null)
      }),
      metal: new h.D({
        color: 16777215
      }),
      redlight: new h.F({
        color: 6702148,
        emissive: 16711680,
        roughness: 0.5
      }),
      rearlight: new h.F({
        color: 6702148,
        emissive: 16711680,
        roughness: 0.5,
        emissiveIntensity: 0
      }),
      reverselight: new h.F({
        color: 6710852,
        emissive: 16777096
      }),
      headlight: new h.F({
        color: 6710886,
        emissive: 16777181
      }),
      window: new h.E({
        color: 6712183,
        specular: 2236962
      }),
      shadow: new h.C({
        color: 0,
        colorWrite: !1,
        depthWrite: !1,
        side: h.k
      }),
      null: new h.D({
        color: 16711935
      })
    },
    Wl = {
      turnSpeed: 0,
      turnAccel: 0,
      pTurnSpeed: 0
    };
    var El = class {
      constructor() {
        this.inputs = {
          accel: 0,
          steer: 0,
          brake: 0,
          handbrake: 0,
          stiffSteer: 0
        },
        this.sounds = {
        },
        this.inputDisabled = !1,
        this.orientation = new h.m(0, 0, 0, 'YXZ'),
        this.steerOrientation = new h.m(0, 0, 0, 'YXZ'),
        this.vehicleDef = null,
        this.selectedVehicleIndex = 0,
        this.driveModeIndex = 0,
        this.driveForceFactor = 1,
        this.insideWall = !0,
        this.wasInsideWall = !0,
        this.tiltX = 0,
        this.tiltZ = 0,
        this.body = null,
        this.wheels = new h.G,
        this.wheelEulers = [
        ],
        this.tV = new h.W,
        this.tVec = new h.W,
        this.wheelHeights = [
        ],
        this.groundHeights = [
        ],
        this.wheelFwd = new h.W(0, 0, 1),
        this.wheelVelDir = new h.W,
        this.wheelVelMag = 0,
        this.targetHeading = 0,
        this.pOrientation = 0,
        this.motionDir = new h.W,
        this.pPos = new h.W,
        this.analytics = {
          resetCount: 0,
          rawDS: 0
        },
        this.promptResetTimer = null,
        this.update = () =>{
        },
        this.dom = {
        },
        this.hasInit = !1,
        this.canCancelAutodrive = !1,
        this.canEnableAutodrive = !0,
        this.changeVehicleBound = this.changeVehicle.bind(this),
        this.changeModeBound = this.changeMode.bind(this),
        this.wasUsingCruise = !1,
        this.changeInputBound = this.changeInput.bind(this),
        this.headlights = {
          left: {
          },
          right: {
          }
        },
        this.pdT = 0.1,
        this.holdHandbrake = !1,
        this.uiTimer = 0,
        this.speedFactor = 1,
        this.distFactor = 1,
        this.onUnitsChangedBound = this.onUnitsChanged.bind(this),
        this.groundAngleLat = 0,
        this.groundAngleLon = 0,
        this.wheelDown = new h.W,
        this.didCollide = !1,
        this.printDebug = !1,
        this.v1 = new h.W,
        this.v2 = new h.W,
        this.v3 = new h.W,
        this.v4 = new h.W,
        this.v5 = new h.W,
        this.didCrash = !1,
        this.curWallIndex = null,
        this.collisionStrength = 0,
        this.wrongWay = !1,
        this.nodeCheckFrame = 60,
        this.targetVehicleNodeIndex = 0,
        this.nextUpdateDistance = 25,
        this.nextUpdateIncrement = 25,
        this.maxUpdateIncrement = 250,
        this.nextAnalyticsUpdate = {
        },
        this.steerSpeed = 0,
        this.steerMode = 1,
        this.lastAccel = 0,
        this.hasBoost = !1,
        this.hasAccel = !1,
        this.boostFromTap = !1,
        this.useMouse = !0,
        this.maxSteerSpeed = 4,
        this.prevSteer = 0,
        this.scrollSteer = !1,
        this.scrollAccel = !1,
        this.mouse = {
          x: 0,
          y: 0
        },
        this.prevMouse = {
          x: 0,
          y: 0
        },
        this.mouseDist = 0,
        this.mouseCruiseSpeed = Fh.default,
        this.autodrive = j.value,
        this.soggyStiff = !1,
        this.soggyTurnInterval = 0.75,
        this.soggyInterval = 1,
        this.soggyTimer = 0,
        this.soggyLerp = 0,
        this.soggyTurning = !1,
        this.soggyTurningDir = 0,
        this.soggyStartPoint = 0,
        this.soggySteerFactor = 1,
        this.soggySteerTimeFactor = 1,
        this.soggyMaxSteer = 1,
        this.soggyStiffLerp = 0,
        this.soggySlip = 1,
        this.soggySlipB = 1,
        this.initialise()
      }
      initialise() {
        this.autoDriver = new Ol((() =>{
          this.resetToNode(st.vehicleNode)
        })),
        this.initialisePosition(),
        this.audio = new Ml(this),
        Rh.addListener('type', this.changeVehicleBound),
        Rh.addListener('mode', this.changeModeBound),
        Rh.addListener('input', this.changeInputBound),
        this.changeInput(Rh.value.input, !0),
        f.addListener('Units', this.onUnitsChangedBound),
        this.onUnitsChanged(f.Units),
        this.initVehicle(Ch[Rh.value.type]),
        this.dom.speed = document.getElementById('ui-speed-val'),
        this.dom.dist = document.getElementById('ui-dist-val'),
        this.dom.mouseMarker = document.getElementById('ui-mouse-bar-marker'),
        this.dom.mousePrompt = document.getElementById('ui-mouse-prompt'),
        T.addListener(L, this.onHeadlightsChanged.bind(this)),
        this.onHeadlightsChanged(),
        Wh.dist = 10 * (st.vehicleNode.i - st.initIndex + wh.accumulatedProgress),
        wh.addListener('weatherIndex', (() =>this.updateHeadlights())),
        p.addListener(u.Headlights, (() =>T.setHeadlights(!T.headlights, !0))),
        p.addListener(u.Lights, (() =>T.setHeadlights(!T.headlights, !0))),
        p.addListener(u.AutoDrive, (() =>{
          this.canToggleAutodrive && (j.set(!this.autodrive), this.canToggleAutodrive = !1)
        })),
        j.addListener((() =>{
          this.onAutodrive()
        })),
        this.onAutodrive(),
        this.headlights = T.headlights,
        this.hasInit = !0
      }
      onAutodrive() {
        this.autodrive = j.value,
        T.handbrake = !1,
        this.holdHandbrake = !1,
        this.autodrive && (this.canCancelAutodrive = !1, this.autoDriver.initialise())
      }
      initialisePosition() {
        st.initIndex = st.vehicleNode.i - wh.initialNode;
        let e = st.vehicleNode.a - st.vehicleNode.next.da / 2;
        this.setPose(st.vehicleNode.p.x, st.vehicleNode.p.y, st.vehicleNode.p.z, Math.PI / 2 - e, !0),
        this.autoDriver.initialise()
      }
      detatch() {
        Rh.removeListener('type', this.changeVehicleBound),
        Rh.removeListener('mode', this.changeVehicleBound),
        f.removeListener('Units', this.onUnitsChangedBound),
        T.removeListener(L, this.onHeadlightsChanged.bind(this))
      }
      setDriveMode(e) {
        if (this.driveModeFactor = 0.5, this.wheels.children[0].hasDrive = !0, this.wheels.children[1].hasDrive = !0, this.driveMode = e, T.bike) switch (e) {
          case zh:
            this.driveModeFactor = 1,
            this.wheels.children[0].hasDrive = !0,
            this.wheels.children[1].hasDrive = !1;
            break;
          case Sh:
            this.driveModeFactor = 1,
            this.wheels.children[0].hasDrive = !1,
            this.wheels.children[1].hasDrive = !0
        } else switch (this.wheels.children[2].hasDrive = !0, this.wheels.children[3].hasDrive = !0, e) {
          case zh:
            this.driveModeFactor = 1,
            this.wheels.children[2].hasDrive = !1,
            this.wheels.children[3].hasDrive = !1;
            break;
          case Sh:
            this.driveModeFactor = 1,
            this.wheels.children[0].hasDrive = !1,
            this.wheels.children[1].hasDrive = !1
        }
      }
      onHeadlightsChanged() {
        this.setLights(T.headlights)
      }
      changeVehicle(e) {
        this.initVehicle(Ch[e]),
        no.sendUpdate('vehicleChange', e)
      }
      changeMode(e) {
        this.setDriveMode(e),
        no.sendUpdate('driveModeChange', e)
      }
      changeInput(e, t = !1) {
        this.useMouse = e == jh,
        this.useMouse ? null == Fh.value ? Fh.reset() : t || (this.wasUsingCruise = !0) : this.wasUsingCruise || t ? this.wasUsingCruise = !1 : Fh.set(null),
        t || j.set(!1),
        no.sendUpdate('inputModeChange', e),
        this.hasInit && this.resetToNode(st.vehicleNode)
      }
      setLights(e) {
        e ? (Bl.rearlight.emissiveIntensity = 0.5, Bl.headlight.emissiveIntensity = 0.5) : (Bl.rearlight.emissiveIntensity = 0, Bl.headlight.emissiveIntensity = 0)
      }
      updateHeadlights() {
        let e = 3.25 - 2.5 * (ue.intensity + pe.intensity),
        t = Math.max(0.25, e);
        T.setHeadlightIntensity(t)
      }
      positionHeadlights() {
      }
      initVehicle(e) {
        var t;
        if ((null === (t = this.vehicleDef) || void 0 === t ? void 0 : t.name) == e.name) return;
        for (this.update = this.updatePass; T.geo.children.length; ) T.geo.remove(T.geo.children[T.geo.children.length - 1]);
        this.vehicleDef = e,
        this.soggySteerTimeFactor = 1,
        T.setModel(e),
        e.map && (Bl.map.map = X(e.map));
        let i = e.bodyObj,
        s = e.wheelObj;
        const n = new is.a;
        let a = Bl;
        if (e.skins) {
          let t = Object.keys(e.skins) [0];
          for (let i in e.skins[t]) a[i].color.setHex(e.skins[t][i])
        }
        n.load(i.default, (e=>{
          e.traverse((e=>{
            if (e.isMesh) {
              let t = Bl.default,
              i = e.name.split('_') [1];
              i in Bl && (t = Bl[i]),
              e.material = t,
              'shadow' == i && (e.castShadow = !0)
            }
          })),
          this.positionHeadlights(),
          this.updateHeadlights(),
          e.rotation.y = - Math.PI / 2,
          T.geo.add(e)
        })),
        n.load(s.default, (t=>{
          t.traverse((e=>{
            if (e.isMesh) {
              let t = Bl.wheel,
              i = e.name.split('_') [1];
              i in Bl && (t = Bl[i]),
              e.material = t,
              'shadow' == i && (e.castShadow = !0),
              e.position.z -= T.wheels.tyreWidth
            }
          })),
          this.initWheels(t, T.bike),
          this.setDriveMode(Rh.value.mode),
          this.audio.initForVehicle(e, this.inputs, this.wheels.children),
          this.resetToNode(st.vehicleNode),
          this.update = this.updateStationed,
          tl.pause()
        }))
      }
      initLights() {
        T.setHeadlightColour(T.headlightColour)
      }
      setPose(e, t, i, s, n = !1) {
        for (var a; s < 0; ) s += 2 * Math.PI;
        let r = 0;
        if (n && (null === (a = T.wheels) || void 0 === a ? void 0 : a.length)) {
          let n = new h.W(e + Math.sin(s) * T.wheels.length, t, i + Math.cos(s) * T.wheels.length),
          a = Ro.getHeight(n);
          r = - Math.tan((a - t) / T.wheels.length),
          t += T.wheels.travel / 2
        }
        T.position.set(e, t, i),
        this.orientation.x = r,
        this.orientation.z = 0,
        this.orientation.y = s,
        T.heading = this.orientation.y,
        T.motionHeading = T.heading,
        T.setRotationFromEuler(this.orientation),
        T.updateMatrix(),
        T.updateMatrixWorld(),
        this.updateVehicleNode(),
        st.vehicleIndexDidChange = !0
      }
      initWheels(e, t = !1) {
        let i,
        s = this.vehicleDef.wheels;
        for (; this.wheels.children.length; ) this.wheels.remove(this.wheels.children[this.wheels.children.length - 1]);
        this.wheelEulers.length = 0,
        i = e.clone(),
        this.prepWheelState(i, s),
        i.i = 0,
        i.name = 'fl',
        i.front = !0,
        i.relPos = new h.W(t ? 0 : s.width / 2, s.radius, s.length),
        i.hasDrive = !0,
        i.position.copy(i.relPos),
        i.rotation.y = Math.PI / 2,
        this.wheelEulers.push(new h.m(0, Math.PI / 2, 0, 'YXZ')),
        this.wheels.add(i),
        this.updateWheelWorldPos(i),
        i.pPos.copy(i.worldPos),
        i = e.clone(),
        this.prepWheelState(i, s),
        i.i = 1,
        i.front = !t,
        i.name = 'fr',
        i.relPos = new h.W(t ? 0 : - s.width / 2, s.radius, t ? 0 : s.length),
        i.hasDrive = !0,
        i.position.copy(i.relPos),
        i.rotation.y = - Math.PI / 2,
        this.wheelEulers.push(new h.m(0, - Math.PI / 2, 0, 'YXZ')),
        this.wheels.add(i),
        this.updateWheelWorldPos(i),
        i.pPos.copy(i.worldPos),
        t || (i = e.clone(), this.prepWheelState(i, s), i.i = 2, i.front = !1, i.name = 'rl', i.relPos = new h.W(s.width / 2, s.radius, 0), i.hasDrive = !1, i.position.copy(i.relPos), i.rotation.y = Math.PI / 2, this.wheels.add(i), this.updateWheelWorldPos(i), i.pPos.copy(i.worldPos), i = e.clone(), this.prepWheelState(i, s), i.i = 3, i.front = !1, i.name = 'rr', i.relPos = new h.W( - s.width / 2, s.radius, 0), i.hasDrive = !1, i.position.copy(i.relPos), i.rotation.y = - Math.PI / 2, this.wheels.add(i), this.updateWheelWorldPos(i), i.pPos.copy(i.worldPos)),
        T.geo.add(this.wheels)
      }
      prepWheelState(e, t) {
        e.shockPos = 0.5,
        e.dShockPos = 0,
        e.shockFactor = 0.5,
        e.shockExcess = 0,
        e.groundHeight = 0,
        e.pHeight = 0,
        e.worldPos = new h.W,
        e.tPos = new h.W,
        e.tVel = new h.W,
        e.pVel = new h.W,
        e.pPos = new h.W,
        e.height = 0,
        e.pSus = 0,
        e.vel = new h.W,
        e.velDir = new h.W,
        e.acc = new h.W,
        e.groundCollide = 0,
        e.groundNorm = new h.W,
        e.groundState = {
          n: [
            0,
            1,
            0
          ]
        },
        e.speed = 0,
        e.lonDirDot = 0,
        e.latDirDot = 0,
        e.friction = 1,
        e.wd = 0,
        e.collisionFactor = 0,
        e.radius = t.radius,
        e.travel = t.travel
      }
      updateWheelWorldPos(e) {
        e.worldPos.copy(e.relPos),
        e.worldPos.applyMatrix4(T.matrixWorld)
      }
      destroy() {
      }
      suspend() {
        this.audio.suspend(),
        this.update = this.updateStationed,
        tl.pause()
      }
      reload() {
        this.initialisePosition(),
        this.resetToNode(st.vehicleNode)
      }
      updateStationed(e) {
        if (st.vehicleIndexDidChange = !1, T.pPosition.copy(T.position), this.handleInput(e), T.handbrake = !0, this.useMouse && this.hasAccel || !this.useMouse && (0 != T.drive || null !== Fh.value) || this.autodrive) return T.handbrake = !1,
        this.holdHandbrake = null == Fh.value,
        this.update = this.updateLive,
        tl.resume(),
        void (this.dom.mousePrompt.style.display = 'none');
        this.inputs.accel = 0,
        this.updateWheelMotion(e),
        this.updateChassisMotion(e),
        this.updateWheelState(e),
        this.audio.update(e),
        this.pdT = e
      }
      updatePass(e, t) {
      }
      updateLive(e, t) {
        T.pPosition.copy(T.position),
        this.handleInput(e),
        this.updateWheelMotion(e),
        this.updateChassisMotion(e),
        this.updateWheelState(e),
        this.didCollide && !this.collisionsDisabled && (this.updateChassisMotion(e), this.updateWheelState(e), this.didCollide = !0),
        this.updateVehicleState(e),
        this.uiTimer += e,
        this.uiTimer > 0.033 && (this.uiTimer -= 0.033, this.updateUI()),
        this.pdT = e,
        st.vehicleIndexDidChange = !1,
        this.updateVehicleNode();
        try {
          this.audio.update(e)
        } catch (Kc) {
          if (this.handleCrash(), this.didCrash) throw Kc.cause = 'vehicle_matrix',
          Kc.data = this.wheels.children[0],
          Kc
        }
      }
      updateVehicleState(e) {
        var t,
        i,
        s,
        n;
        for (Wl.w of(this.dS = (t = T.pPosition.x, i = T.pPosition.z, s = T.position.x, n = T.position.z, Math.sqrt((s - t) * (s - t) + (n - i) * (n - i))), this.analytics.rawDS += this.dS, T.vel.subVectors(T.pPosition, T.position).multiplyScalar(1 / e), T.speed = this.dS / e, T.speedLerp = Math.min(1, T.speed / T.metrics.topSpeed), Wh.speed = T.speed, T.accel.set(0, 0, 0), this.wheels.children)) T.accel.add(Wl.w.acc.multiplyScalar(1 / e));
        if (T.accel.multiplyScalar(0.25), T.accel.applyAxisAngle(Tl, - this.orientation.y), T.pVel.copy(T.vel), !isFinite(T.speed)) {
          let e = {
            wheelHeights: this.wheelHeights,
            tiltX: this.tiltX,
            tiltZ: this.tiltZ,
            dS: this.dS,
            speed: T.speed,
            pos: T.position,
            pPos: T.pPosition,
            nodeIndex: st.vehicleIndex,
            onRoad: T.onRoad
          };
          throw new Error(JSON.stringify(e))
        }
      }
      onUnitsChanged(e) {
        this.speedFactor = Ll[e],
        this.distFactor = Rl[e]
      }
      updateUI() {
        this.dom.speed.innerHTML = (Wh.speed * this.speedFactor).toFixed(1),
        this.dom.dist.innerHTML = (Math.floor(Wh.dist * this.distFactor * 10) / 10).toFixed(1)
      }
      updateBasic(e) {
        T.speed += this.inputs.accel * e,
        T.steer += this.inputs.steer * e,
        T.steer = Math.max(Math.min(T.metrics.maxSteer, T.steer), - T.metrics.maxSteer),
        T.position.x += Math.cos(T.rotation.y) * T.speed * e,
        T.position.z -= Math.sin(T.rotation.y) * T.speed * e,
        T.rotation.y += T.steer * e
      }
      updateWheelMotion(e) {
        let t;
        for (t of(this.printDebug = !this.printDebug, this.wheelDown.set(0, - T.wheels.radius, 0).applyEuler(this.orientation), T.rockLonTarget = T.accel.z + this.sinTiltX * Zo.value, T.rockLonTarget > 0 ? T.rockLonTarget /= Math.max(T.rockLonTarget, 14) : T.rockLonTarget /= - 1 * Math.min(T.rockLonTarget, - 14), T.rockLonTarget *= T.metrics.rockFactor, Wl.l = Math.min(1, 15 * e), T.rockLon = T.rockLon * (1 - Wl.l) + T.rockLonTarget * Wl.l, this.vehicleDef.bike || (T.rockLatTarget = T.accel.x - this.sinTiltZ * Zo.value, T.rockLatTarget > 0 ? T.rockLatTarget /= Math.max(T.rockLatTarget, 20) : T.rockLatTarget /= - 1 * Math.min(T.rockLatTarget, - 20), T.rockLatTarget *= T.metrics.rockFactor, T.rockLat = T.rockLat * (1 - Wl.l) + T.rockLatTarget * Wl.l), this.wheels.children)) t.front && (this.steerOrientation.copy(this.orientation), T.bike ? this.steerOrientation.y += T.steer : 0 == t.i ? this.steerOrientation.y += T.steerL : this.steerOrientation.y += T.steerR),
        t.vel.subVectors(t.worldPos, t.pPos),
        t.tVel.subVectors(t.tPos, t.pPos),
        Wl.steepness = 0,
        t.shockPos > 0 && t.dH > 0 && (Wl.steepness = t.dH / t.vel.length()),
        t.dXZ = Math.sqrt(t.vel.x * t.vel.x + t.vel.z * t.vel.z),
        t.dH = t.groundHeight - t.pHeight,
        t.collisionFactor = 0,
        t.pdH = (t.vel.y - t.tVel.y) / t.dXZ,
        !t.onRoad && t.dH > 0 && t.pdH > 0 && t.pdH < 1 && (Wl.m = 1 - 2 * t.pdH, Wl.m < 1 && (t.vel.x *= Wl.m, t.vel.z *= Wl.m)),
        t.velDir.copy(t.vel).normalize(),
        0 == t.shockPos ? t.dS = 0.98 * t.dS : t.dS = t.vel.length(),
        t.vel.divideScalar(this.pdT),
        t.speed = t.vel.length(),
        t.pPos.copy(t.worldPos),
        t.front ? (this.tV.set(0, 0, 1).applyEuler(this.steerOrientation), t.lonDirDot = t.velDir.dot(this.tV), t.direction = t.lonDirDot < 0 ? - 1 : 1, this.tV.set(1, 0, 0).applyEuler(this.steerOrientation), t.latDirDot = t.velDir.dot(this.tV)) : (this.tV.set(0, 0, 1).applyEuler(this.orientation), t.lonDirDot = t.velDir.dot(this.tV), t.direction = t.lonDirDot < 0 ? - 1 : 1, this.tV.set(1, 0, 0).applyEuler(this.orientation), t.latDirDot = t.velDir.dot(this.tV)),
        t.dXZ > 0.001 ? t.groundAngle = - Math.atan(t.dH / t.dXZ) || 0 : t.groundAngle = this.tiltX * t.lonDirDot + this.tiltZ * t.latDirDot,
        t.acc.set(0, 0, 0),
        T.braking ? (T.brakeLerp += e / 0.25, T.brakeLerp > 1 && (T.brakeLerp = 1), T.brakeForce = T.brakeLerp * T.metrics.brake, this.autodrive && (T.brakeForce = this.autoDriver.inputs.brake * T.metrics.brake), Wl.maxDecel = t.speed * t.lonDirDot / e * - 1, Wl.maxDecel < 0 ? t.acc.z = Math.max(Wl.maxDecel, - T.brakeForce) : t.acc.z = Math.min(Wl.maxDecel, T.brakeForce), t.speed < 0.1 && (T.braking = !1)) : t.hasDrive && (t.acc.z = T.drive * this.driveModeFactor, T.bike ? t.front ? t.acc.z *= T.frSteerDifferential : t.acc.z /= T.frSteerDifferential : 0 == t.i ? t.acc.z *= T.steerDifferential : 1 == t.i ? t.acc.z /= T.steerDifferential : 2 == t.i ? t.acc.z *= T.rearSteerDifferential : t.acc.z /= T.rearSteerDifferential),
        t.friction < 1 && (t.acc.z *= t.friction),
        T.bike && (t.friction *= 2),
        !t.front && T.handbrake && (t.acc.z = 0),
        Wl.wheelWeight = 2 * t.shockFactor,
        Wl.frictionMultiplier = this.hasBoost && !this.autodrive ? Math.max(0.75, Math.abs(t.lonDirDot)) : 1,
        Wl.latNorm = Wl.wheelWeight * Math.cos(t.groundAngle * Math.abs(t.latDirDot)) * - Zo.value * t.friction * Wl.frictionMultiplier,
        this.useMouse || this.autodrive ? T.bike || this.autodrive ? Wl.maxLat = t.speed * t.latDirDot / e * - 1 - Zo.value * this.sinTiltZ : Wl.maxLat = t.speed * t.latDirDot / e * - 0.5 - Zo.value * this.sinTiltZ : (Wl.maxLat = t.speed / e * - t.latDirDot, t.hasDrive && this.hasBoost ? (Rh.mode == kh && (Wl.maxLat *= T.metrics.slipBase - 1.25 * T.metrics.slipMod * (T.speedLerp * T.speedLerp)), (Rh.mode == zh || Rh.mode == Sh) && (Wl.maxLat *= T.metrics.slipBase - T.metrics.slipMod * (T.speedLerp * T.speedLerp))) : t.speed > 1 && (Wl.maxLat *= T.metrics.slipBase - T.metrics.slipMod * (T.speedLerp * T.speedLerp)), Wl.maxLat -= Zo.value * this.sinTiltZ),
        t.slip = 0,
        Wl.maxLat < 0 ? Wl.maxLat < - Wl.latNorm ? (t.spin = t.acc.z > 0 && t.latDirDot > 0.3, t.slip = t.latDirDot, t.acc.x += - Wl.latNorm) : (t.spin = !1, t.acc.x += Wl.maxLat) : Wl.maxLat > Wl.latNorm ? (t.spin = t.acc.z > 0 && t.latDirDot < - 0.3, t.slip = - t.latDirDot, t.acc.x += Wl.latNorm) : (t.spin = !1, t.acc.x += Wl.maxLat),
        !t.front && T.handbrake && (Wl.lonNorm = Wl.wheelWeight * Math.cos(t.groundAngle * t.lonDirDot) * - Zo.value * t.friction * Wl.frictionMultiplier, Wl.maxLon = t.speed * t.lonDirDot / e * - 1 + Zo.value * this.sinTiltX * 2, t.acc.z += Math.max(Math.min(Wl.maxLon, Wl.lonNorm), - Wl.lonNorm)),
        (t.onRoad || 1 == t.groundNorm.y) && (t.acc.x += Wl.wheelWeight * Zo.value * this.sinTiltZ, t.acc.z -= Wl.wheelWeight * Zo.value * this.sinTiltX),
        Wl.rawSpeed = t.speed * t.lonDirDot,
        !(t.i > 1 && T.handbrake) && Math.abs(Wl.rawSpeed) > 0 && (Wl.rollResistance = Wl.rawSpeed * T.metrics.rollResistance, Wl.rawSpeed < 0 ? Wl.rollResistance += Math.max( - 0.1, Wl.rawSpeed / e) : Wl.rollResistance += Math.min(0.1, Wl.rawSpeed / e), t.acc.z -= Wl.rollResistance),
        t.acc.y += T.downforce * Zo.value,
        t.acc.z *= Math.min(1, 3 * t.shockFactor),
        t.front ? t.acc.applyEuler(this.steerOrientation) : t.acc.applyEuler(this.orientation),
        t.acc.y += Zo.value,
        t.onRoad || 1 == t.groundNorm.y || (t.acc.x -= Wl.wheelWeight * Zo.value * t.groundNorm.x * 1.5, t.acc.z -= Wl.wheelWeight * Zo.value * t.groundNorm.z * 1.5),
        t.shockPos > 0 && (t.front ? t.acc.y += T.rockLon : t.acc.y -= T.rockLon, T.bike || (t.i % 2 == 0 ? t.acc.y += T.rockLat : t.acc.y -= T.rockLat)),
        t.acc.y -= Wl.wheelWeight * Zo.value,
        t.dSus = (t.pSus - t.acc.y) / e,
        t.pSus = t.acc.y,
        t.dSus < 0 ? t.dSus *= T.metrics.dampening : T.bike ? t.dSus *= 0.5 * T.metrics.dampening : t.dSus *= 1.5 * T.metrics.dampening,
        t.acc.y -= t.dSus,
        t.vel.add(t.acc.multiplyScalar(e)),
        t.tPos.addVectors(t.worldPos, t.vel.multiplyScalar(e)),
        t.pVel.copy(t.vel),
        this.wheelHeights[t.i] = t.tPos.y,
        this.groundHeights[t.i] = t.groundHeight,
        t.shockPos > 0 && (t.hasDrive && t.spin ? t.dS *= 1 + T.slip : t.dS *= Math.abs(t.lonDirDot))
      }
      updateChassisMotion(e) {
        Wl.wheelWidth = this.vehicleDef.wheels.width,
        Wl.wheelLength = this.vehicleDef.wheels.length,
        Wl.axleFPos = this.v1,
        Wl.axleFDir = this.v2,
        Wl.axleRPos = this.v3,
        Wl.axleRDir = this.v4,
        Wl.chassisDir = this.v5,
        T.bike ? (Wl.axleFPos.copy(this.wheels.children[0].tPos), Wl.axleRPos.copy(this.wheels.children[1].tPos), Wl.shockF = this.wheels.children[0].collisionFactor + this.wheels.children[0].shockPos, Wl.shockR = this.wheels.children[1].collisionFactor + this.wheels.children[1].shockPos, Wl.shockSum = Wl.shockF + Wl.shockR, Wl.shockRatio = 0 == Wl.shockSum ? 0.5 : Wl.shockR / Wl.shockSum) : (Wl.wL = this.wheels.children[0], Wl.wR = this.wheels.children[1], Wl.d = Wl.wL.tPos.distanceTo(Wl.wR.tPos), Wl.shockSum = Wl.wL.collisionFactor + Wl.wR.collisionFactor, Wl.shockRatio = 0 == Wl.shockSum ? 0.5 : Wl.wL.collisionFactor / Wl.shockSum, Wl.discrepency = Wl.d - Wl.wheelWidth, Wl.leftOffset = Wl.discrepency * (1 - Wl.shockRatio), Wl.axleFDir.subVectors(Wl.wR.tPos, Wl.wL.tPos).normalize(), Wl.axleFPos.copy(Wl.axleFDir), Wl.axleFPos.multiplyScalar(Wl.wheelWidth / 2 + Wl.leftOffset), Wl.axleFPos.add(Wl.wL.tPos), Wl.wL = this.wheels.children[2], Wl.wR = this.wheels.children[3], Wl.d = Wl.wL.tPos.distanceTo(Wl.wR.tPos), Wl.shockSum = Wl.wL.collisionFactor + Wl.wR.collisionFactor, Wl.shockRatio = 0 == Wl.shockSum ? 0.5 : Wl.wL.collisionFactor / Wl.shockSum, Wl.discrepency = Wl.d - Wl.wheelWidth, Wl.leftOffset = Wl.discrepency * (1 - Wl.shockRatio), Wl.axleRDir.subVectors(Wl.wR.tPos, Wl.wL.tPos).normalize(), Wl.axleRPos.copy(Wl.axleRDir), Wl.axleRPos.multiplyScalar(Wl.wheelWidth / 2 + Wl.leftOffset), Wl.axleRPos.add(Wl.wL.tPos), Wl.shockF = this.wheels.children[0].collisionFactor + this.wheels.children[1].collisionFactor, Wl.shockR = this.wheels.children[2].collisionFactor + this.wheels.children[3].collisionFactor, Wl.shockSum = Wl.shockF + Wl.shockR, Wl.shockRatio = 0 == Wl.shockSum ? 0.5 : Wl.shockR / Wl.shockSum),
        Wl.d = Wl.axleFPos.distanceTo(Wl.axleRPos),
        Wl.discrepency = Wl.d - Wl.wheelLength,
        Wl.leftOffset = Wl.discrepency * (1 - Wl.shockRatio),
        Wl.chassisDir.subVectors(Wl.axleFPos, Wl.axleRPos).normalize(),
        T.position.copy(Wl.chassisDir),
        T.position.multiplyScalar(Wl.leftOffset),
        T.position.add(Wl.axleRPos),
        T.frontAxlePosition.copy(Wl.axleFPos),
        this.pOrientation = T.heading,
        this.orientation.y = Eo(Wl.chassisDir.x, Wl.chassisDir.z),
        Wl.deltaHeading = this.orientation.y - T.heading,
        Wl.deltaHeading > 3 ? T.heading += Pl : Wl.deltaHeading < - 3 && (T.heading -= Pl),
        Wl.deltaHeading = this.orientation.y - T.heading,
        T.speedLerp = T.speed / T.metrics.topSpeed,
        Wl.turnSpeed = (this.orientation.y - T.heading) / e,
        Wl.turnAccel = (Wl.turnSpeed - Wl.pTurnSpeed) / e,
        Wl.maxTurnAccel = 5 - 2 * T.speedLerp,
        this.didCollide || (Wl.turnAccel < - Wl.maxTurnAccel ? Wl.turnSpeed = Wl.pTurnSpeed - Wl.maxTurnAccel * e : Wl.turnAccel > Wl.maxTurnAccel && (Wl.turnSpeed = Wl.pTurnSpeed + Wl.maxTurnAccel * e)),
        this.orientation.y = T.heading + Wl.turnSpeed * e,
        Wl.pTurnSpeed = Wl.turnSpeed,
        this.orientation.y > Pl ? this.orientation.y -= Pl : this.orientation.y < - Pl && (this.orientation.y += Pl),
        T.heading = this.orientation.y,
        T.fwd.set(Math.sin(T.heading), 0, Math.cos(T.heading)),
        T.position.y > 0 ? this.tVec.subVectors(T.pPosition, T.position).normalize().multiplyScalar(T.metrics.drag * T.speed * T.speed * e * e) : this.tVec.subVectors(T.pPosition, T.position).normalize().multiplyScalar(0.25 * T.speed * T.speed * e * e),
        T.position.add(this.tVec),
        T.bike ? (Wl.d1 = this.wheels.children[0].tPos.distanceTo(this.wheels.children[1].tPos), Wl.r1 = Math.asin((this.wheelHeights[0] - this.wheelHeights[1]) / Wl.d1), this.tiltX = - Wl.r1 || 0, this.tiltX = Math.max(Math.min(1.2, this.tiltX), - 1.2), this.sinTiltX = Math.sin(this.tiltX), T.pitch = this.tiltX, this.orientation.x = this.tiltX, Wl.r1 = Math.asin((this.groundHeights[0] - this.groundHeights[1]) / Wl.d1), this.gradientX = - Wl.r1 || 0, Wl.vs = T.steer / (T.metrics.maxSteer * this.soggySteerFactor) * Math.min(1, T.speed / T.metrics.topSpeed), this.tiltZ = 1.2 * - Wl.vs, T.slip = this.wheels.children[1].slip) : (Wl.d1 = this.wheels.children[0].tPos.distanceTo(this.wheels.children[2].tPos), Wl.d2 = this.wheels.children[1].tPos.distanceTo(this.wheels.children[3].tPos), Wl.r1 = Math.asin((this.wheelHeights[0] - this.wheelHeights[2]) / Wl.d1), Wl.r2 = Math.asin((this.wheelHeights[1] - this.wheelHeights[3]) / Wl.d2), Wl.tiltX = - (Wl.r1 + Wl.r2) / 2 || this.tiltX, Wl.tiltLerp = 3 * (1 + T.speedLerp), Math.abs(Wl.tiltX - this.tiltX) / e < Wl.tiltLerp ? this.tiltX = Wl.tiltX : Wl.tiltX < this.tiltX ? this.tiltX -= Wl.tiltLerp * e : this.tiltX += Wl.tiltLerp * e, this.tiltX = Math.max(Math.min(1.3, this.tiltX), - 1.3), this.sinTiltX = Math.sin(this.tiltX), T.pitch = this.tiltX, this.orientation.x = this.tiltX, Wl.r1 = Math.asin((this.groundHeights[0] - this.groundHeights[2]) / Wl.d1), Wl.r2 = Math.asin((this.groundHeights[1] - this.groundHeights[3]) / Wl.d2), this.gradientX = - (Wl.r1 + Wl.r2) / 2 || 0, Wl.d2 = Wl.wheelWidth * Math.cos(this.tiltX), Wl.d1 = this.wheelHeights[1] - this.wheelHeights[0], Wl.r1 = Math.asin(Wl.d1 / Wl.d2), Wl.d1 = this.wheelHeights[3] - this.wheelHeights[2], Wl.r2 = Math.asin(Wl.d1 / Wl.d2), Wl.shockF = this.wheels.children[0].shockPos + this.wheels.children[1].shockPos, Wl.shockR = this.wheels.children[2].shockPos + this.wheels.children[3].shockPos, Wl.shockSum = Wl.shockF + Wl.shockR, Wl.shockRatio = 0 == Wl.shockSum ? 0.5 : Wl.shockF / Wl.shockSum, Wl.tiltZ = - (Wl.r1 * Wl.shockRatio + Wl.r2 * (1 - Wl.shockRatio)) || this.tiltZ, Math.abs(Wl.tiltZ - this.tiltZ) / e < Wl.tiltLerp ? this.tiltZ = Wl.tiltZ : Wl.tiltZ < this.tiltZ ? this.tiltZ -= Wl.tiltLerp * e : this.tiltZ += Wl.tiltLerp * e, T.slip = (this.wheels.children[0].slip + this.wheels.children[1].slip + this.wheels.children[2].slip + this.wheels.children[3].slip) / 4),
        T.gradient = this.gradientX,
        this.tiltZ = Math.max(Math.min(1.3, this.tiltZ), - 1.3),
        this.orientation.z = this.tiltZ,
        T.roll = this.tiltZ,
        this.sinTiltZ = Math.sin(this.tiltZ),
        this.tVec.set(0, - T.wheels.radius, 0).applyEuler(this.orientation),
        T.position.add(this.tVec),
        this.motionDir.copy(T.position).sub(this.pPos).normalize(),
        !this.didCollide && T.direction > 0 ? (Wl.trueHeading = Eo(this.motionDir.x, this.motionDir.z), Wl.trueHeading - T.motionHeading > 3 ? T.motionHeading += Pl : Wl.trueHeading - T.motionHeading < - 3 && (T.motionHeading -= Pl), T.motionHeading = 0 * T.motionHeading + 1 * Eo(this.motionDir.x, this.motionDir.z), T.speed < 5 && (T.motionHeading = T.motionHeading * (T.speed / 5) + T.heading * (1 - T.speed / 5))) : T.motionHeading = T.heading,
        this.pPos.copy(T.position),
        T.setRotationFromEuler(this.orientation);
        try {
          T.updateMatrix(),
          T.updateMatrixWorld(),
          this.didCrash = !1
        } catch (Kc) {
          if (this.handleCrash(), this.didCrash) throw Kc.cause = 'vehicle_matrix',
          Kc;
          this.didCrash = !0
        }
      }
      handleCrash() {
        this.resetToNode(st.vehicleNode)
      }
      updateWheelState(e) {
        let t;
        for (t of(Wl.wheelCirc = this.vehicleDef.wheels.circumference, T.downforce = Math.min(1, T.speed / T.metrics.topSpeed), T.downforce *= T.downforce * T.metrics.aeroFactor, T.bike ? (Wl.r = 0, Wl.r = this.wheels.children[0].dS / Wl.wheelCirc * 6.28 * this.wheels.children[0].direction, this.wheelEulers[0].z += Wl.r, this.wheelEulers[0].y = T.steer * (1 - Math.sin(Math.abs(this.tiltZ))) + 1.57, this.wheels.children[0].setRotationFromEuler(this.wheelEulers[0]), Wl.r = this.wheels.children[1].dS / Wl.wheelCirc * 6.28 * this.wheels.children[1].direction, this.wheels.children[1].rotation.x = this.wheels.children[1].rotation.x + Wl.r) : (Wl.r = 0, Wl.r = this.wheels.children[0].dS / Wl.wheelCirc * 6.28 * this.wheels.children[0].direction, this.wheelEulers[0].z += Wl.r, this.wheelEulers[0].y = T.steerL + 1.57, this.wheels.children[0].setRotationFromEuler(this.wheelEulers[0]), Wl.r = this.wheels.children[1].dS / Wl.wheelCirc * 6.28 * this.wheels.children[1].direction, this.wheelEulers[1].z -= Wl.r, this.wheelEulers[1].y = T.steerR - 1.57, this.wheels.children[1].setRotationFromEuler(this.wheelEulers[1]), T.handbrake || (Wl.r = this.wheels.children[2].dS / Wl.wheelCirc * 6.28 * this.wheels.children[2].direction, this.wheels.children[2].rotation.x = this.wheels.children[2].rotation.x + Wl.r, Wl.r = this.wheels.children[3].dS / Wl.wheelCirc * 6.28 * this.wheels.children[3].direction, this.wheels.children[3].rotation.x = this.wheels.children[3].rotation.x + Wl.r)), Wl.d = T.wheels.radius, Wl.airborne = !1, Wl.grounded = !1, this.didCollide || (this.collisionStrength = 0, this.collisionsDisabled = !1), this.didCollide = !1, T.onRoad = !1, this.wheelsInside = {
        }, this.wheels.children)) this.updateWheelWorldPos(t),
        t.pHeight = t.groundHeight,
        this.tVec.copy(t.worldPos).add(this.wheelDown),
        t.groundState.insideWall = t.insideWall,
        t.groundState.debug = 1 == t.i,
        Wl.ground = Ro.testGround(this.tVec, t.groundState),
        t.groundNorm.set(Wl.ground.n[0], Wl.ground.n[1], Wl.ground.n[2]),
        t.groundHeight = Wl.ground.h,
        t.friction = Wl.ground.f,
        t.onRoad = Wl.ground.r,
        T.onRoad = T.onRoad || t.onRoad,
        Wl.airborne = Wl.airborne || t.groundHeight < t.worldPos.y - 1,
        Wl.grounded = Wl.grounded || t.onRoad && t.worldPos.y < t.groundHeight + 0.1,
        Wl.ground.w ? (t.wd = Wl.ground.wd, t.wn = Wl.ground.wn, t.ws = Wl.ground.ws, null == t.wi || t.wi != Wl.ground.wi ? (t.wi = Wl.ground.wi, t.insideWall = t.wd < 0, t.mayCollide = !0, null == this.wheelsInside[Wl.ground.wi] && (this.wheelsInside[Wl.ground.wi] = t.insideWall), this.wheelsInside[t.wi] !== t.insideWall && (this.collideWallEnd(t), this.didCollide = !0)) : (null == this.wheelsInside[Wl.ground.wi] && (this.wheelsInside[Wl.ground.wi] = this.collisionsDisabled ? t.wd < 0 : t.insideWall), this.wheelsInside[t.wi] !== t.insideWall && (this.collideWallEnd(t), this.didCollide = !0), this.collisionsDisabled ? this.wheelsInside[t.wi] !== t.wd < 0 ? this.didCollide = !0 : t.insideWall = t.wd < 0 : t.insideWall !== t.wd < 0 ? (this.collideWallEdge(t), this.didCollide = !0) : t.insideWall = t.wd < 0)) : (t.wi = null, t.insideWall = null),
        Wl.shockDist = - (t.worldPos.y - t.groundHeight - Wl.d) + t.travel,
        t.shockFactor = Math.max(Wl.shockDist / (2 * t.travel), 0),
        t.prevShockPos = t.shockPos,
        t.shockPos = t.shockFactor,
        t.shockExcess = 0,
        t.shockPos > 1 && (t.shockExcess = t.shockPos - 1, t.shockExcess = Math.min(1, t.shockExcess), t.worldPos.y += t.shockExcess * t.travel * 2, t.shockPos = 1),
        t.dShockPos = t.shockPos - t.prevShockPos,
        t.position.y = t.radius + t.shockPos * t.travel * 2 - t.travel;
        !nl.Reset || T.onRoad || this.promptResetTimer ? this.promptResetTimer && T.onRoad && (hl.value == il.Reset && hl.set(il.None), clearTimeout(this.promptResetTimer), this.promptResetTimer = null) : this.promptResetTimer = setTimeout((() =>{
          hl.set(il.Reset),
          setTimeout((() =>{
            hl.value == il.Reset && hl.set(il.None)
          }), 15000)
        }), 5000),
        !this.autodrive && nl.Boost && hl.value == il.None && T.onRoad && T.speed > 5 && this.tiltX < - 0.11 && (hl.set(il.Boost), setTimeout((() =>{
          al('Boost')
        }), [
          3000
        ])),
        Wl.airborne && !Wl.grounded && (this.collisionsDisabled = !0),
        T.bike ? T.direction = this.wheels.children[1].direction : T.direction = Math.min(this.wheels.children[2].direction, this.wheels.children[3].direction),
        t.speed < 0.5 && (T.direction = 0)
      }
      collideTerrain(e, t) {
        T.bike,
        e.collisionFactor = 1,
        this.wheelHeights[e.i] = e.tPos.y,
        this.collisionStrength = 0
      }
      collideWallEnd(e) {
        this.collisionsDisabled || (this.tVec.copy(e.tPos), e.tPos.copy(e.pPos), e.pPos.copy(this.tVec), T.bike || (this.tVec.copy(e.vel), this.tVec.y = 0, e.tPos.add(this.tVec.multiplyScalar( - 0.8))), e.collisionFactor = 1, this.wheelHeights[e.i] = e.tPos.y, this.collisionStrength = T.speed / 10)
      }
      collideWallEdge(e, t = 1) {
        this.collisionsDisabled || (this.tVec.set(e.wn.x, 0.01, e.wn.z), e.tPos.add(this.tVec.multiplyScalar(e.wd * e.ws)), this.collTemp = (e.velDir.x * - e.wn.z + e.velDir.z * e.wn.x) * Math.abs(e.wd) * 0.75, this.tVec.set( - e.wn.z, 0, e.wn.x).multiplyScalar(this.collTemp), e.tPos.sub(this.tVec), e.collisionFactor = 1, this.collisionStrength = Math.max(this.collisionStrength, Math.abs(this.collTemp / this.pdT)), this.wheelHeights[e.i] = e.tPos.y)
      }
      updateVehicleNode() {
        if (st.vehicleNode.next) {
          if (st.vehicleNode.i < this.targetVehicleNodeIndex) return T.wrongWay = !1,
          hl.value == il.UTurn && hl.set(il.None),
          st.vehicleNode = st.vehicleNode.next,
          st.vehicleIndex = st.vehicleNode.i,
          st.vehicleIndexDidChange = !0,
          void tl.nodeDidChange();
          Wl.d1 = T.position.distanceToSquared(st.vehicleNode.p),
          Wl.d2 = T.position.distanceToSquared(st.vehicleNode.next.next.p),
          Wl.d2 > 14400 ? (this.nodeCheckFrame--, this.nodeCheckFrame <= 0 && (this.nodeCheckFrame = 60, Wl.closest = tt(T.position.x, T.position.z, st.vehicleNode, !0), Wl.closest.n.i > st.vehicleNode.i && (this.targetVehicleNodeIndex = Wl.closest.n.i), Vo.value.edge || Ro.testFarGrid(T.position.x, T.position.z) || (Vo.set('edge', !0), no.sendUpdate('achievment', 'edge')))) : Wl.d2 < Wl.d1 ? (T.wrongWay = !1, hl.value != il.UTurn && hl.value != il.Reverse || hl.set(il.None), st.vehicleNode = st.vehicleNode.next, st.vehicleIndex = st.vehicleNode.i, st.vehicleIndexDidChange = !0, tl.nodeDidChange()) : Wl.d1 > 400 && T.onRoad ? (T.wrongWay || (Wl.transformedNodeAngle = (2.5 * Math.PI - st.vehicleNode.a) % (2 * Math.PI), Wl.angleDif = Math.abs(T.heading - Wl.transformedNodeAngle), Wl.angleDif > 2 && Wl.angleDif < 4.3 && (no.sendUpdate('wrongWay'), T.wrongWay = !0, hl.set(il.UTurn))), !T.wrongWay && T.direction < 0 && (T.reversingTooFar = !0, hl.set(il.Reverse))) : T.wrongWay ? (Wl.transformedNodeAngle = (2.5 * Math.PI - st.vehicleNode.a) % (2 * Math.PI), Wl.angleDif = Math.abs(T.heading - Wl.transformedNodeAngle), (Wl.angleDif < 1.4 || Wl.angleDif > 4.9) && (T.wrongWay = !1, hl.value == il.UTurn && hl.set(il.None))) : T.reversingTooFar && (T.reversingTooFar = !1, hl.value == il.Reverse && hl.set(il.None)),
          Wh.dist = 10 * (st.vehicleNode.i - st.initIndex + wh.accumulatedProgress),
          this.analytics.rawDS > this.nextUpdateDistance && (this.nextUpdateDistance = this.analytics.rawDS + this.nextUpdateIncrement, this.nextUpdateIncrement < this.maxUpdateIncrement && (this.nextUpdateIncrement = Math.min(this.maxUpdateIncrement, 2 * this.nextUpdateIncrement)), this.nextAnalyticsUpdate.distance = Wh.dist, this.nextAnalyticsUpdate.rawDistance = this.analytics.rawDS, this.nextAnalyticsUpdate.speed = Wh.speed, no.sendUpdate('vehicleController', this.nextAnalyticsUpdate), this.nextAnalyticsUpdate = {
          })
        }
      }
      handleInput(e) {
        this.inputs.accel = 0,
        this.inputs.drive = 0,
        0 != p.scrollDelta && null != Fh.value && (p.scrollDelta < 0 ? Fh.inc5() : Fh.dec5()),
        this.canToggleAutodrive = !p.key[u.AutoDrive],
        this.inputDisabled && !this.autodrive || (this.autodrive ? (this.autoDriver.update(e), this.inputs.accel = this.autoDriver.inputs.accel, this.inputs.steer = this.autoDriver.inputs.steer, null !== Fh.value && (T.speed > Fh.value && (this.inputs.accel = 0, T.speed > Fh.value + 1 && (this.autoDriver.inputs.brake = Math.max(this.autoDriver.inputs.brake, T.speed / Fh.value - 1))), 0 == Fh.value ? (this.inputs.accel = 0, this.autoDriver.inputs.brake = 1) : T.handbrake && (T.handbrake = !1)), this.autoDriver.inputs.brake > 0 ? (T.braking || (T.brakeLerp = 0), T.braking = !0, Bl.redlight.emissiveIntensity = Gl) : (T.braking = !1, Bl.redlight.emissiveIntensity = 0), !this.useMouse && (p.key[u.Left] || p.key[u.LeftArrow] || p.key[u.Forward] || p.key[u.UpArrow] || p.key[u.Right] || p.key[u.RightArrow] || p.key[u.Backward] || p.key[u.DownArrow]) ? this.canCancelAutodrive && !this.inputDisabled && j.set(!1) : this.canCancelAutodrive = !0) : this.useMouse ? (Wl.w2 = window.innerWidth / 2, Wl.mouseWidth = Math.max(Wl.w2, Fo.mouseWidgetWidth) / 2, Wl.h2 = window.innerHeight / 2, Wl.wHeight = window.innerHeight * (Fo.mouseWidgetHeight / 100) + 25, p.mouseEnabled ? (this.mouse.x = (p.mouse.x - Wl.w2) / Wl.mouseWidth, this.mouse.y = - (p.mouse.y - (Wl.h2 - Wl.wHeight) - Wl.h2) / Wl.h2 * 2) : (this.mouse.x = 0, this.mouse.y = 0), this.mouse.x = Math.max(Math.min(1, this.mouse.x), - 1), this.mouse.y = Math.max(0, this.mouse.y), this.canMouse = this.mouse.y > 0, T.handbrake && (this.hasAccel = !1, this.steer = 0, this.mouse.x = 0), null == Fh.value ? (this.hasAccel = p.click.left && this.canMouse, this.hasAccel && (this.inputs.accel = T.metrics.accel), this.hasBoost = !1) : (this.hasAccel = p.click.left && this.canMouse, this.hasBoost = null !== Fh.value && this.hasAccel), p.click.right ? (this.hasAccel = !1, T.direction > 0 ? (T.braking || (T.brakeLerp = 0), T.braking = !0, Bl.redlight.emissiveIntensity = Gl, this.inputs.accel = 0) : (T.braking = !1, this.inputs.accel = 0.75 * - T.metrics.accel, Bl.redlight.emissiveIntensity = 0)) : (T.braking = !1, Bl.redlight.emissiveIntensity = 0, !this.hasBoost && T.direction < 0 && (T.braking = !0, Bl.redlight.emissiveIntensity = Gl)), T.braking ? Bl.redlight.emissiveIntensity = Gl : Bl.redlight.emissiveIntensity = 0, this.inputs.steer = - this.mouse.x, this.mouse.y <= 0 && (this.inputs.steer = 0), Wl.da = this.inputs.steer - this.prevSteer, Wl.da < - this.maxSteerSpeed * e ? this.inputs.steer = this.prevSteer - this.maxSteerSpeed * e : Wl.da > this.maxSteerSpeed * e && (this.inputs.steer = this.prevSteer + this.maxSteerSpeed * e), this.prevSteer = this.inputs.steer, this.dom.mouseMarker.style.transform = 'translateX(' + (50 + 50 * - this.inputs.steer) + '%)', this.inputs.steer *= 1 - T.speed / T.metrics.topSpeed * 0.4) : (this.hasBoost = this.hasBoost && (this.hasAccel || null !== Fh.value), p.key[u.Forward] || p.key[u.UpArrow] ? (this.hasAccel || 0 != f.DoubleTap || (this.hasBoost = !this.hasAccel && I.appTime - this.lastAccel < 0.15, this.boostFromTap = this.hasBoost), this.boostFromTap && 0 === f.DoubleTap || (this.hasBoost = !(!p.key[u.BoostAccel] && !p.key[u.BoostAccel2])), nl.Boost && this.hasBoost && al('Boost'), this.hasAccel = !0, this.lastAccel = I.appTime, !this.hasBoost && T.direction < 0 ? (T.braking = !0, Bl.redlight.emissiveIntensity = Gl) : (T.braking = !1, Bl.redlight.emissiveIntensity = 0, this.inputs.accel = T.metrics.accel), this.holdHandbrake = !1) : p.key[u.Backward] || p.key[u.DownArrow] ? (this.hasAccel = !1, T.direction > 0 ? (T.braking || (T.brakeLerp = 0), T.braking = !0, Bl.redlight.emissiveIntensity = Gl) : (T.braking = !1, this.inputs.accel = - T.metrics.accel, Bl.redlight.emissiveIntensity = 0), this.holdHandbrake = !1) : (this.hasAccel = !1, T.braking = !1, Bl.redlight.emissiveIntensity = 0), this.inputs.steer = 0, (p.key[u.Left] || p.key[u.LeftArrow]) && (this.inputs.steer += 1), (p.key[u.Right] || p.key[u.RightArrow]) && (this.inputs.steer -= 1), this.inputs.stiffSteer = p.key[u.StickySteer], this.inputs.stiffSteer && p.key[u.Handbrake] && !this.inputs.handbrake && (this.holdHandbrake = !0), this.inputs.handbrake = !T.bike && p.key[u.Handbrake], T.handbrake = !T.bike && p.key[u.Handbrake] || this.holdHandbrake), null === Fh.value || this.autodrive || T.braking || T.handbrake || 0 != this.inputs.accel && !this.useMouse || (this.useMouse || (this.hasBoost = !(!p.key[u.BoostAccel] && !p.key[u.BoostAccel2])), this.inputs.accel >= 0 && Fh.value - T.speed > 0 && (this.inputs.accel = Math.min(T.metrics.accel, (Fh.value - T.speed) / e)), this.useMouse && this.hasBoost && (this.inputs.accel = T.metrics.accel)), this.hasBoost ? this.inputs.accel += T.metrics.accel * Math.max(0, 1 - T.speed / T.metrics.topSpeed) : this.inputs.accel > 0 && T.speed < 27 && (this.inputs.accel += T.metrics.accel * Math.max(0, 0.5 * (1 - T.speed / 27))), p.key[u.Reset] ? (this.resetToNode(st.vehicleNode), nl.Reset && al('Reset'), p.key[u.Reset] = !1, this.analytics.resetCount++, no.sendUpdate('resetCount', this.analytics.resetCount), this.holdHandbrake = null == Fh.value) : c && (p.key[u.PageUp] && st.vehicleNode.next ? (this.resetToNode(st.vehicleNode.next), this.holdHandbrake = !0, p.key[u.PageUp] = !1) : p.key[u.PageDown] && st.vehicleNode.prev && (this.resetToNode(st.vehicleNode.prev), this.holdHandbrake = !0, p.key[u.PageDown] = !1)), this.autodrive ? (T.steer = this.inputs.steer, T.updateSteer()) : this.getSoggySteerState(e), this.getDriveState(e), this.inputDisabled || (p.scrollDelta = 0), T.hasBoost = this.hasBoost)
      }
      checkAutodriveProgress() {
      }
      resetToNode(e) {
        let t = e.a - e.next.da / 2;
        this.setPose(e.p.x, e.p.y, e.p.z, Math.PI / 2 - t, !0),
        this.inputs.accel = 0,
        this.inputs.steer = 0,
        this.inputs.brake = 0,
        this.inputs.handbrake = 0,
        this.inputs.stiffSteer = 0,
        this.hasBoost = !1;
        let i = 0;
        for (let s of this.wheels.children) s.shockPos = 0.5,
        s.groundHeight = 0,
        s.vel.set(0, 0, 0),
        s.velDir.set(0, 0, 0),
        s.acc.set(0, 0, 0),
        s.dSus = 0,
        s.pSus = 0,
        s.dS = 0,
        s.tPos.set(0, 0, 0),
        s.prevShockPos = 0.5,
        s.insideWall = !0,
        s.i % 2 == 0 ? s.rotation.set(0, Math.PI / 2, 0) : s.rotation.set(0, - Math.PI / 2, 0),
        s.collisionFactor = 0,
        s.wd = 0,
        this.wheelHeights[i] = 0,
        i++,
        this.updateWheelWorldPos(s),
        s.pPos.copy(s.worldPos);
        i = 0;
        for (let s of this.wheelEulers) i % 2 == 0 ? s.set(0, Math.PI / 2, 0) : s.set(0, - Math.PI / 2, 0);
        this.pPos.copy(T.position),
        T.pitch = this.orientation.x,
        T.reset(),
        hl.value == il.UTurn && hl.set(il.None),
        Wh.speed = T.speed,
        Wl.turnSpeed = 0,
        Wl.pTurnSpeed = 0,
        this.targetHeading = 0,
        this.update = this.updateStationed,
        tl.pause(),
        this.tiltX = this.orientation.x,
        this.sinTiltX = Math.sin(this.tiltX),
        this.tiltZ = this.orientation.z,
        this.sinTiltZ = Math.sin(this.tiltZ),
        this.dS = 0,
        this.didCollide = !1,
        this.collisionsDisabled = !1,
        this.updateUI(),
        st.vehicleNode = e,
        st.vehicleIndex = e.i,
        st.vehicleIndexDidChange = !0,
        this.targetVehicleNodeIndex = st.vehicleIndex,
        this.motionDir.set(0, 0, 1),
        this.steerOrientation.copy(this.orientation),
        this.autoDriver.reset(),
        this.useMouse && (this.dom.mousePrompt.style.display = 'block')
      }
      getDriveState(e) {
        this.inputs.accel > 0 ? T.drive < this.inputs.accel ? (T.drive += T.metrics.jerk * e, T.drive > this.inputs.accel && (T.drive = this.inputs.accel)) : T.drive = this.inputs.accel : T.drive > this.inputs.accel ? (T.drive -= T.metrics.jerk * e, T.drive < this.inputs.accel && (T.drive = this.inputs.accel)) : T.drive = this.inputs.accel
      }
      smootherLerp(e) {
        return (e * (6 * e - 15) + 10) * e * e * e
      }
      smoothLerp(e) {
        return (3 - 2 * e) * e * e
      }
      halfLerp(e) {
        return 2 * ((3 - 2 * (e = e / 2 + 0.5)) * e * e - 0.5)
      }
      getSoggySteerState(e) {
        if (Wl.maxSteer = T.metrics.maxSteer, this.soggySteerFactor = 1 - 0.75 * T.speedLerp, T.bike ? (this.soggyTurnInterval = T.metrics.steerInterval, this.soggySteerTimeFactor = 1 + T.speedLerp * T.speedLerp) : (this.soggyTurnInterval = T.metrics.steerInterval, this.soggySteerTimeFactor = 1 + 0.5 * T.speedLerp, T.slip > 0 && !this.inputs.stiffSteer && (this.soggySlip = 1 - T.slip, this.soggySlip *= this.soggySlip, this.soggySlipB = Math.max(0.5, this.soggySlip), this.soggySteerTimeFactor *= this.soggySlipB, this.soggySteerFactor = 1 - 0.75 * T.speedLerp * this.soggySlipB)), this.useMouse && (this.soggySteerTimeFactor = 0.05 / this.soggyTurnInterval), Wl.maxSteer *= this.soggySteerFactor, Wl.steerTarget = this.inputs.steer * Wl.maxSteer, this.inputs.stiffSteer) return this.soggyStiff = !0,
        this.soggyStiffLerp = Math.min(1, this.soggyStiffLerp + 10 * e),
        e /= 2 * this.soggyTurnInterval,
        this.inputs.steer != this.soggyTurningDir && (this.soggyStiffLerp = 0, this.soggyTurningDir = this.inputs.steer),
        0 == this.inputs.steer ? Wl.steerTarget = T.steer : T.steer += this.inputs.steer * e * (Wl.maxSteer / T.metrics.maxSteer) * Math.abs((T.steer - Wl.steerTarget) / Wl.maxSteer) * this.soggyStiffLerp,
        void T.updateSteer();
        this.soggyStiff && (this.soggyStiff = !1, this.soggyTimer = 0, this.soggyStartPoint = T.steer),
        0 != this.inputs.steer || this.useMouse ? this.soggyTurning && this.soggyTurningDir == this.inputs.steer || (this.soggyTimer = 0, this.soggyStartPoint = T.steer, this.soggyInterval = this.soggyTurnInterval / (Math.abs(Wl.steerTarget - T.steer) / Wl.maxSteer), T.bike && Math.abs(Wl.steerTarget - T.steer) > Wl.maxSteer && (this.soggyInterval *= 1 - T.speedLerp / 2), this.soggyTurning = !0, this.soggyTurningDir = this.inputs.steer) : this.soggyTurning && (this.soggyTurning = !1, T.bike ? this.soggyInterval = this.soggyTurnInterval * Math.abs(T.steer / (1 * Wl.maxSteer)) : this.soggyInterval = this.soggySlipB * this.soggyTurnInterval * Math.abs(T.steer / (2 * Wl.maxSteer)), this.soggyTimer = 0, this.soggyStartPoint = T.steer, this.soggyTurningDir = 0),
        this.soggyTimer += e / this.soggySteerTimeFactor,
        this.soggyLerp = Math.min(1, this.soggyTimer / this.soggyInterval),
        this.soggyLerp = this.halfLerp(this.soggyLerp),
        T.steer = this.soggyStartPoint * (1 - this.soggyLerp) + Wl.steerTarget * this.soggyLerp,
        T.updateSteer()
      }
    };
    const Zl = {
    },
    Fl = (e, t) =>{
      if (isNaN(t)) console.warn('Attempting to set nan config value for ', e);
       else {
        window.localStorage.setItem(Ql[e], t),
        Yl[e] = t;
        for (let i of Zl[e] || [
        ]) i(t)
      }
    },
    Hl = {
      UseAckermann: !0,
      AudioLevel: 1,
      Units: 0
    },
    Ql = {
    },
    Yl = {
      UseAckermann: Hl.UseAckermann,
      AudioLevel: Hl.AudioLevel,
      Units: Hl.Units
    };
    for (let _c in Yl) {
      let e;
      Ql[_c] = 'config-' + _c;
      try {
        e = JSON.parse(window.localStorage.getItem(Ql[_c]))
      } catch (Kc) {
        console.warn('JSON Parsing exception'),
        console.warn(Kc),
        Fl(_c, Hl[_c]),
        e = Hl[_c]
      }
      Yl[_c] = null === e ? Hl[_c] : e
    }
    var Vl = Yl;
    new class {
      constructor() {
        this.setBound = this.set.bind(this),
        this.ls = window.localStorage,
        this.loadConfig()
      }
      loadConfig() {
        let e;
        for (let t in Vl) e = this.get(t),
        Vl[t] = null == e ? Hl[t] : e
      }
      get(e) {
        return JSON.parse(this.ls.getItem('config-' + e))
      }
      set(e, t) {
        console.log('Set config \'' + e + '\' to ' + t),
        Vl[e] = t,
        window.localStorage.setItem('config-' + e, t)
      }
    };
    const Ul = 'no_prompt_fps';
    var Xl = new class extends l {
      constructor(...e) {
        super (...e),
        this.default = !1,
        this.value = !1,
        this.disabled = null != window.localStorage.getItem(Ul) || null != window.localStorage.getItem('analytics_didChangeQuality') || wh.value.viewLodIndex * wh.value.detailLodIndex == 0
      }
      disable() {
        this.disabled = !0,
        window.localStorage.setItem(Ul, !0)
      }
    };
    var Jl = new class {
      constructor() {
        this.domStats = {
        },
        this.active = !1,
        this.initialised = !1,
        this.showCamPos = !1,
        this.updateBound = this.update.bind(this),
        p.addListener(u.Debug, this.toggleActive.bind(this)),
        p.addListener(u.Debug2, (() =>{
          this.showCamPos = !this.showCamPos
        }))
      }
      setStats(e) {
        this.stats = e,
        document.body.appendChild(this.stats.dom),
        this.stats.dom.style.display = 'none'
      }
      init() {
        this.dom = document.getElementById('ui-debug'),
        this.domPos = document.getElementById('ui-debug-position'),
        this.domFarCoords = document.getElementById('ui-debug-far-coords'),
        this.domNode = document.getElementById('ui-debug-node'),
        this.domTail = document.getElementById('ui-debug-midline-tail');
        for (let e in ts) {
          let t = document.createElement('div');
          t.className = 'ui-debug-row';
          let i = document.createElement('div');
          i.className = 'ui-debug-label',
          i.innerHTML = e + ':',
          t.appendChild(i);
          let s = document.createElement('div');
          s.className = 'ui-debug-value',
          s.innerHTML = ts[e],
          t.appendChild(s),
          this.dom.appendChild(t),
          this.domStats[e] = s
        }
        this.initialised = !0
      }
      toggleActive() {
        this.initialised || this.init(),
        this.stats && (this.active = !this.active, this.active ? (I.addListener(this.updateBound), this.dom.style.display = 'flex', this.stats.dom.style.display = 'block') : (I.removeListener(this.updateBound), this.dom.style.display = 'none', this.stats.dom.style.display = 'none'))
      }
      update() {
        let e,
        t,
        i;
        this.showCamPos ? Qe.parent ? (e = Qe.parent.position.x, t = Qe.parent.position.y, i = Qe.parent.position.z) : (e = Qe.position.x, t = Qe.position.y, i = Qe.position.z) : (e = T.position.x, t = T.position.y, i = T.position.z),
        this.domPos.innerHTML = Math.floor(e) + 'x ' + Math.floor(t) + 'y ' + Math.floor(i) + 'z';
        let s,
        n,
        a = e / me,
        r = i / me;
        s = Math.floor((a - Math.floor(a)) * xe),
        n = Math.floor((r - Math.floor(r)) * xe),
        a = Math.floor(a),
        r = Math.floor(r),
        this.domFarCoords.innerHTML = s + ', ' + n + ' @ ' + a + ', ' + r,
        this.domNode.innerHTML = st.vehicleNode.i,
        this.domTail.innerHTML = st.tail.i;
        for (let h in this.domStats) this.domStats[h].innerHTML = ts[h]
      }
    };
    var ql = class {
      constructor(e, t, i, s) {
        this.screenSize = new h.V,
        this.renderScale = 1,
        this.onError = () =>{
        },
        this.onLoadProgress = () =>{
        },
        this.loadStages = [
        ],
        this.isCineCam = !1,
        this.loadLoopBound = this.loadLoop.bind(this),
        this.maxLoadLoops = 1000,
        this.loadLoopCount = 0,
        this.loadInactivityTimer = 0,
        this.prevLoadProg = 0,
        this.fineLoadProgress = 0,
        this.initialised = !1,
        this.midlineDidReset = !0,
        this.onLoadedBound = this.onLoaded.bind(this),
        this.firstFrame = !0,
        this.basicPromptInterval = null,
        this.onAudioInitBound = this.onAudioInit.bind(this),
        this.onTickerStateBound = this.onTickerState.bind(this),
        this.lights = {
        },
        this.fpsTracker = 0,
        this.statsTimer = 0,
        this.updateBound = this.update.bind(this),
        this.physDT = 0,
        this.maxPhysDT = 0.02,
        this.minPhysDT = 0.004,
        this.checkNoGPU = 0,
        this.lowFPSWaiter = 0,
        this.canvas = e,
        this.onError = i,
        this.onLoadProgress = s,
        this.stats = new o.a,
        this.stats.dom.style.left = '',
        this.stats.dom.style.right = '0',
        this.pauseDom = document.getElementById('game-paused'),
        this.initScene(e),
        I.addStateListener(this.onTickerStateBound),
        p.init(t),
        p.addListener(u.NodeDebug, (() =>console.log(st.vehicleNode))),
        p.addListener(u.Mute, (() =>{
          c && (null == this.scene.fog ? this.scene.fog = new h.q(16448255, 0.00025) : this.scene.fog = null),
          z.toggleMute()
        })),
        p.addListener(u.CameraToggle, (() =>this.toggleCamera())),
        p.addListener(u.E, (() =>{
          this.isCineCam || (p.key[u.E] = !1, Ro.nextSkin())
        })),
        p.addListener(u.Q, (() =>{
          this.isCineCam || (p.key[u.Q] = !1, Ro.prevSkin())
        })),
        wh.addListener('seed', (() =>{
          no.recordSeed(wh.value.seed),
          this.regenerateAll()
        })),
        wh.addListener('sceneName', (() =>{
          this.regenerateAll()
        })),
        wh.addListener('topography', (() =>{
          this.regenerateTopography()
        })),
        wh.addListener('viewLodIndex', (() =>{
          this.regenerateViewDist()
        })),
        wh.addListener('detailLodIndex', this.regenerateDetail.bind(this)),
        wh.addListener('renderScale', (e=>{
          this.renderScale = mh[e],
          no.sendUpdate('renderScale', e),
          this.setSize(this.screenSize.x, this.screenSize.y)
        })),
        this.renderScale = mh[wh.value.renderScale],
        p.lockKeys(),
        T.addListener(O, this.onVehicleChanged.bind(this)),
        this.generate()
      }
      pregenerate() {
        d.set(!0),
        no.sendUpdate('sceneConfigChange', {
          ...wh.value,
          initNode: wh.initialNode,
          accumProg: wh.accumulatedProgress
        }),
        wh.loadProgress(),
        p.lockKeys(),
        this.vehicleController.suspend(),
        I.removeListener(this.updateBound),
        this.midlineDidReset = !0,
        this.loadProgress = 0,
        this.loadStages.length = 0,
        this.onLoadProgress(0)
      }
      regenerateAll() {
        this.pregenerate(),
        this.scene.fog = ne(),
        this.generate()
      }
      regenerateSeed() {
      }
      regenerateTopography() {
        this.pregenerate(),
        this.loadStages.push({
          name: 'topography',
          setup: Ro.topographyLoaderInit,
          loader: Ro.topographyLoader,
          portion: 0.25,
          frameIterations: 50
        }),
        this.loadStages.push({
          name: 'scene',
          setup: Ro.sceneLoaderInit,
          loader: Ro.sceneLoader,
          portion: 0.1,
          frameIterations: 1
        }),
        this.loadStages.push({
          name: 'farGrid',
          setup: Ro.farGridReset,
          loader: Ro.farGridLoader,
          portion: 0.35,
          frameIterations: 10
        }),
        this.loadStages.push({
          name: 'nearGrid',
          setup: Ro.nearGridReset,
          loader: Ro.nearGridLoader,
          portion: 0.28,
          frameIterations: 10
        }),
        this.loadStages.push({
          name: 'finalise',
          setup: () =>{
          },
          loader: Ro.postGridLoader,
          portion: 0.02,
          frameIterations: 10
        }),
        this.loadStage = this.loadStages[0],
        this.loadStage.setup(),
        I.addListener(this.loadLoopBound)
      }
      regenerateViewDist() {
        Ro.updateConfig(),
        this.camController.updateViewDist(),
        this.regenerateAll()
      }
      regenerateDetail() {
        Ro.updateConfig(),
        this.regenerateAll();
        let e = 512 * (wh.value.detailLodIndex + 1);
        ue.shadow.mapSize.width = e,
        ue.shadow.mapSize.height = e,
        ue.shadow.map.dispose(),
        ue.shadow.map = null
      }
      generate() {
        this.loadProgress = 0,
        this.midlineDidReset = !0,
        this.loadStages.push({
          name: 'topography',
          setup: Ro.topographyLoaderInit,
          loader: Ro.topographyLoader,
          portion: 0.25,
          frameIterations: 50
        }),
        this.loadStages.push({
          name: 'scene',
          setup: Ro.sceneLoaderInit,
          loader: Ro.sceneLoader,
          portion: 0.1,
          frameIterations: 1
        }),
        this.loadStages.push({
          name: 'farGrid',
          setup: Ro.farGridLoaderInit,
          loader: Ro.farGridLoader,
          portion: 0.35,
          frameIterations: 10
        }),
        this.loadStages.push({
          name: 'nearGrid',
          setup: Ro.nearGridLoaderInit,
          loader: Ro.nearGridLoader,
          portion: 0.28,
          frameIterations: 10
        }),
        this.loadStages.push({
          name: 'finalise',
          setup: () =>{
          },
          loader: Ro.postGridLoader,
          portion: 0.02,
          frameIterations: 10
        }),
        this.loadStage = this.loadStages[0],
        this.loadStage.setup(),
        I.addListener(this.loadLoopBound)
      }
      loadLoop(e) {
        try {
          let t,
          i = 1000 * e,
          s = Date.now() + i;
          for (this.fineLoadProgress = 0, t = 0; t < this.maxLoadLoops && (this.fineLoadProgress = this.loadStage.loader(), !(this.fineLoadProgress >= 1 || Date.now() >= s)); t++);
          if (this.fineLoadProgress >= 1) {
            let e = this.loadStages.shift();
            if (this.loadProgress += e.portion, console.log('Loaded ' + e.name + '...'), 0 == this.loadStages.length) return console.log('Loading complete'),
            I.removeListener(this.loadLoopBound),
            void this.onLoaded();
            this.loadStage = this.loadStages[0],
            this.loadStage.setup(),
            this.fineLoadProgress = this.loadProgress,
            this.onLoadProgress(this.loadProgress)
          } else this.fineLoadProgress = this.loadProgress + this.loadStages[0].portion * this.fineLoadProgress,
          this.onLoadProgress(this.fineLoadProgress);
          if (this.prevLoadProg >= this.fineLoadProgress) {
            if (this.loadInactivityTimer += e, this.loadInactivityTimer > 3) {
              if (no.sendFeedback('LOAD ERROR: Stuck at progress ', this.loadProgress), !Bh.NewPlayer) return this.onError('LOAD ERROR: Stuck at progress ', this.loadProgress),
              void I.retire();
              qe(null, !0)
            }
          } else this.loadInactivityTimer = 0;
          this.prevLoadProg = this.fineLoadProgress,
          this.loadLoopCount = 0,
          this.render(),
          this.stats.update()
        } catch (Kc) {
          return console.error(Kc),
          this.onError(Kc.stack.toString()),
          no.sendFeedback('LOAD ERROR: ' + Kc.stack.toString()),
          void I.retire()
        }
      }
      onLoaded() {
        this.initialised ? (this.vehicleController.reload(this.midlineDidReset), p.unlockKeys()) : (this.initVehicle(), window.addEventListener('keydown', this.onAudioInitBound), window.addEventListener('mousedown', this.onAudioInitBound), Jl.setStats(this.stats), tl.init(), this.initialised = !0),
        this.camController.updateViewDist(),
        d.set(!1),
        this.onLoadProgress(1),
        this.beginRender()
      }
      awaitVehicleMotion() {
        T.speed > 1 && (hl.set(il.None), clearInterval(this.basicPromptInterval))
      }
      beginGame() {
        var e,
        t;
        e = Th,
        t = !0,
        localStorage.setItem(e, t),
        hl.value !== il.None && (this.basicPromptInterval = setInterval(this.awaitVehicleMotion.bind(this), 3000)),
        p.unlockKeys(),
        this.canvas.focus(),
        no.initialiseAnalytics()
      }
      resetVehicle() {
        this.vehicleController.resetToNode(st.vehicleNode)
      }
      onAudioInit() {
        z.init(),
        window.removeEventListener('keydown', this.onAudioInitBound),
        window.removeEventListener('mousedown', this.onAudioInitBound)
      }
      onTickerState(e) {
        this.pauseDom.style.display = e ? 'block' : 'none'
      }
      initRenderer(e = !0, t = !0) {
        this.renderer = new h.X({
          canvas: this.canvas,
          antialias: e,
          powerPreference: 'high-performance',
          stencil: !1,
          logarithmicDepthBuffer: t
        }),
        console.log('Device pixel ratio: ', window.devicePixelRatio),
        this.renderer.setPixelRatio(Math.min(1, window.devicePixelRatio)),
        this.renderer.setClearColor(16777215, 1),
        console.log('Antialias, logdepth ', e, t),
        this.renderer.shadowMap.enabled = !0
      }
      initScene(e) {
        this.scene = ao,
        this.scene.background = ge,
        this.scene.fog = ne(),
        this.renderer = new h.X({
          canvas: this.canvas,
          antialias: wh.value.antialias,
          powerPreference: 'high-performance',
          stencil: !1,
          logarithmicDepthBuffer: !1
        }),
        console.log('Device pixel ratio: ', window.devicePixelRatio),
        this.renderer.setPixelRatio(Math.min(1, window.devicePixelRatio)),
        this.renderer.setClearColor(16777215, 1),
        this.renderer.shadowMap.enabled = !0,
        this.lights.ambient = ce,
        this.scene.add(this.lights.ambient);
        let t = pe;
        t.position.set(0, 1, 0),
        this.lights.hemi = t,
        this.scene.add(this.lights.hemi);
        let i = ue;
        i.position.set(0, 10, 0),
        i.castShadow = !0,
        i.shadow.radius = 2,
        i.shadow.camera.left = - 4,
        i.shadow.camera.right = 4,
        i.shadow.camera.top = 4,
        i.shadow.camera.bottom = - 4,
        i.shadow.camera.updateProjectionMatrix();
        let s = 512 * (wh.value.detailLodIndex + 1);
        i.shadow.mapSize.width = s,
        i.shadow.mapSize.height = s,
        i.shadow.camera.near = 0.5,
        i.shadow.camera.far = 300,
        i.target = T,
        this.lights.dir = i,
        this.scene.add(this.lights.dir),
        this.toggleCamera(),
        this.scene.add(Ro.container),
        this.scene.add(T),
        this.setSize(e.offsetWidth, e.offsetHeight),
        this.render()
      }
      toggleCamera() {
        this.camController && (this.camController.destroy(), this.camController.camContainer ? this.scene.remove(this.camController.camContainer) : this.scene.remove(this.camController.camera), this.isCineCam = !this.isCineCam, this.vehicleController.inputDisabled = this.isCineCam),
        this.isCineCam ? this.camController = new Wo(this.onViewChange.bind(this), this.canvas) : this.camController = new Bo(this.onViewChange.bind(this))
      }
      initVehicle() {
        this.vehicleController = new El,
        this.onVehicleChanged()
      }
      onVehicleChanged() {
        let e = this.lights.dir.shadow.camera,
        t = T.metrics.shadowMapSize;
        e.left = - t,
        e.right = t,
        e.top = t,
        e.bottom = - t,
        e.updateProjectionMatrix()
      }
      destroy() {
        for (this.camController.destroy(), this.vehicleController.destroy(), this.bikeController.destroy(), I.removeListener(this.updateBound); this.scene.children.length; ) console.log('Removing scene children'),
        this.scene.remove(this.scene.children[0]);
        for (; this.canvas.lastChild; ) this.canvas.removeChild(this.canvas.lastChild);
        this.renderer.clear()
      }
      render() {
        this.renderer.render(this.scene, this.camController.camera)
      }
      beginRender() {
        T.headlights || (T.setHeadlights(!0), T.lightsContainer.position.y -= 100, this.update(I.dT, I.appTime), T.setHeadlights(!1), T.lightsContainer.position.y += 100),
        I.addListener(this.updateBound)
      }
      update(e, t) {
        A.disabled || (e > 0.07 ? (this.checkNoGPU += 1, this.checkNoGPU > 10 && (A.set(!0), A.disable())) : this.checkNoGPU > 0 && (this.checkNoGPU -= 1));
        try {
          if (this.physDT += e, this.physDT > this.maxPhysDT) for (this.vehicleController.update(this.maxPhysDT, t), this.physDT -= this.maxPhysDT; this.physDT > this.maxPhysDT; ) this.vehicleController.update(this.maxPhysDT, t),
          this.physDT -= this.maxPhysDT;
          this.physDT > this.minPhysDT && (this.vehicleController.update(this.physDT), this.physDT = 0),
          this.camController.update(e),
          Ro.update(e, t)
        } catch (Kc) {
          return console.error(Kc),
          this.onError(Kc.stack.toString()),
          no.sendFeedback('UPDATE ERROR IN ' + Kc.cause + ': ' + Kc.stack.toString()),
          void I.retire()
        }
        this.render(),
        this.stats.update(),
        ts['draw-calls'] = this.renderer.info.render.calls,
        this.fpsTracker++,
        this.statsTimer += e,
        this.statsTimer >= 5 && this.updateStats()
      }
      updateStats() {
        this.curFPS = this.fpsTracker / this.statsTimer,
        this.fpsTracker = 0,
        this.statsTimer = 0,
        this.lowFPSWaiter > 3 && this.curFPS < 45 && this.curFPS > 15 && !Xl.disabled && (this.curFPS < 20 && A.set(!0), Xl.set(!0), Xl.disable()),
        this.lowFPSWaiter++,
        no.sendUpdate('stats', {
          fps: this.curFPS,
          drawCalls: this.renderer.info.render.calls,
          playTime: 1000 * I.playTime
        })
      }
      onViewChange() {
      }
      setSize(e, t) {
        this.screenSize.set(e, t),
        this.renderer.setSize(e * this.renderScale, t * this.renderScale),
        this.camController.setSize(e, t),
        this.render()
      }
    },
    Kl = (i(17), i.p + 'static/media/warning.2f7f711f.svg'),
    _l = i.p + 'static/media/u_turn.38a08a9e.svg',
    $l = i.p + 'static/media/arrow_up.fdd3dd06.svg',
    ed = (i(45), i.p + 'static/media/no_mobile_1.959d982f.svg'),
    td = i.p + 'static/media/anslo_ico.77ddc9f9.svg',
    id = i.p + 'static/media/splash-logo-placeholder-7b.2d60164d.png',
    sd = i(0);
    const nd = [
      {
        q: 'Why does it run so poorly/like a slideshow?',
        a: 'Check that your browser application is running with hardware acceleration enabled - both in the browser settings and your GPU settings'
      },
      {
        q: 'What\'s different about this driving game?',
        a: 'The custom environment generation engine has been carefully designed for expansive, true-to-life scenery stretching endlessly into the horizon without repetition. With an entirely procedurally generated world, players can easily swap between different locations, seasons, and weathers to suit their mood. And, being browser-based, accessing the game couldn\'t be easier; one click and you\'re off.'
      },
      {
        q: 'How does the environment generation engine work?',
        a: 'The full write-up is still in the works (see above), but in short: a heightmap is generated with a custom algorithm similar to perlin noise, and the road\'s midline is traced through that heightmap using simple rules on gradient and curvature. The environment is rendered in chunks of different resolutions based on how close to the road\'s midline they will appear. Add in a lot of dynamic geometry management, textures, and basic vehicle physics, and you have Slow Roads.'
      },
      {
        q: 'Why a JavaScript browser game, and not a conventional engine?',
        a: 'Browser games have a massive benefit of broad compatibility and ease of access; as long as you have a modern browser, simply load up the web page and start playing in one click - no installs or logins needed. Further, writing browser games in pure JavaScript, rather than building them from an engine such as Unity, allows for more powerful control over optimisation, which is critical for a demanding game such as this. Beyond that... breaking convention and proving novel capabilities can be a rewarding challenge in itself.'
      },
      {
        q: 'Why electric vehicles?',
        a: 'EVs work well in this context for a few reasons: they\'re quieter and more peaceful; they\'re simpler and more intuitive to gamify (no gears or RPM concerns); the physics and audio is easier to code; and they\'re the future - combustion engines are quickly becoming old fashioned. That said, I\'m open to adding more vehicle types, including manual transmission, in future.'
      },
      {
        q: 'Will you make it open source?',
        a: 'Probably not anytime soon, but I\'m not against it in principle. The codebase has always been "experimental", and as such unreadable to anyone but me, so probably of limited value right now. If there\'s interest, I may isolate and open source interesting subsystems like the routing algorithm, or expose an interface for graphics mods.'
      },
      {
        q: 'Why can I drive through trees and signs?',
        a: 'Off-road object collisions might be a useful "threat" for discouraging shortcuts in a competitive context, but if you\'re just here to chill they would only add insult to injury. Ignoring off-road object collisions is also a huge saving on physics processing, so altogether it\'s a reasonable tradeoff.'
      },
      {
        q: 'Why is driving off-road so broken? No shadows, sinking into the ground, missing geometry, etc.',
        a: 'Off-road driving isn\'t an intended gameplay element, so it isn\'t really supported; rather, I decided there\'s no reason to prohibit it. The engine is optimised for going one direction and following the road only, so don\'t be surprised if it "looks broken" should you choose to ignore that.'
      },
      {
        q: 'Will you support mobile/controllers/wheels?',
        a: 'Controllers yes, but achieving good performance on mobiles might be difficult, and is something I still need to explore. Support for controllers and wheels is planned in the next few weeks.'
      },
      {
        q: 'How much will it cost?',
        a: Object(sd.jsxs) (sd.Fragment, {
          children: [
            'Nothing! And no ads, either... enjoy this as a respite from run-away capitalism. However, keeping the game online relies upon kind ',
            Object(sd.jsx) ('a', {
              className: 'about-link',
              href: 'https://ko-fi.com/slowroads',
              children: 'donations'
            }),
            ', so anything you might be able to contribute would go a long way to supporting it.'
          ]
        })
      },
      {
        q: 'Slow roads? More like Fast Roads!',
        a: 'The idea of a "slow road" is about taking the longer scenic route instead of the highway, not about how fast you drive.'
      },
      {
        q: 'Will you offer a downloadable/Steam version?',
        a: 'I\'m considering a Steam release with extra features in the future, though it\'s not certain. However, if I don\'t go that route, it should be possible to offer a free download of the web version.'
      },
      {
        q: 'Can you add X feature/Y vehicle model/make it more like [insert AAA game here]?',
        a: 'Probably not - the browser is a somewhat limited platform, so advanced features and lots of content isn\'t a realistic goal. I would also like to maintain the casual, minimal design of the game, and not make it too similar to existing racing games; they already offer all the hardcore features I can\'t.'
      },
      {
        q: 'I\'m a developer/artist/musician, can I contribute my work to the game?',
        a: 'I\'m not accepting content from others, sorry; this is still a personal project for me, and a portfolio piece, so involving work from others defeats the purpose. But thanks for the interest!'
      }
    ],
    ad = [
      {
        title: '1. Project overview (tl;dr for all sections)',
        link: 'https://anslo.medium.com/slow-roads-tl-dr-a664ac6bce40'
      },
      {
        title: '2. Generating realistic environment heightmaps (early November)'
      },
      {
        title: '3. Pathing a route through the environment'
      },
      {
        title: '4. Rendering seamless, dynamically-generated environment geometry'
      },
      {
        title: '5. Graphics and shading'
      },
      {
        title: '6. Cheap vehicle physics'
      },
      {
        title: '7. Optimisation strategies'
      },
      {
        title: '8. UX approach'
      },
      {
        title: '9. Testing and analytics'
      },
      {
        title: '10. Project Retrospective'
      }
    ],
    rd = ({
      title: e,
      link: t
    }) =>t ? Object(sd.jsxs) (sd.Fragment, {
      children: [
        Object(sd.jsx) ('a', {
          className: 'about-link splash-blog-link',
          href: t,
          target: '_blank',
          rel: 'noopener noreferrer',
          children: e
        }),
        Object(sd.jsx) ('hr', {
        })
      ]
    }) : Object(sd.jsxs) (sd.Fragment, {
      children: [
        Object(sd.jsx) ('div', {
          className: 'splash-blog-missing',
          children: e
        }),
        Object(sd.jsx) ('hr', {
        })
      ]
    }),
    hd = ({
      q: e,
      a: t
    }) =>{
      const [i,
      n] = Object(s.useState) (!1);
      return Object(sd.jsxs) ('div', {
        className: 'faq-qa',
        children: [
          Object(sd.jsxs) ('div', {
            className: 'faq-q',
            onMouseDown: e=>{
              n(!i),
              e.preventDefault()
            },
            children: [
              Object(sd.jsx) ('div', {
                children: e
              }),
              Object(sd.jsx) ('div', {
                style: {
                  paddingLeft: '12px'
                },
                children: i ? '-' : '+'
              })
            ]
          }),
          i && Object(sd.jsx) ('div', {
            className: 'faq-a',
            children: t
          })
        ]
      })
    },
    od = () =>Object(sd.jsxs) ('div', {
      id: 'splash-changelog',
      children: [
        'New Version: ',
        Object(sd.jsx) ('strong', {
          children: es
        }),
        Object(sd.jsx) ('br', {
        }),
        Object(sd.jsx) ('ul', {
          children: Ki.map((e=>Object(sd.jsx) ('li', {
            className: 'splash-version-change',
            children: e
          })))
        }),
        Object(sd.jsxs) ('div', {
          id: 'splash-feedback-prompt',
          children: [
            'Please use the feedback form to let me know what you think, or ',
            Object(sd.jsx) ('a', {
              href: 'https://discord.gg/s8XPAAj',
              children: 'join the discord'
            }),
            ' and tell me personally!'
          ]
        }),
        Object(sd.jsx) ('hr', {
          style: {
            borderColor: '#fff',
            opacity: 0.1
          }
        }),
        Object(sd.jsxs) ('div', {
          className: 'splash-version-footer',
          children: [
            'Next update target: ',
            _i.targetDate,
            Object(sd.jsx) ('br', {
            }),
            Object(sd.jsx) ('ul', {
              children: _i.changes.map(((e, t) =>Object(sd.jsx) ('li', {
                className: 'splash-version-change',
                children: e
              }, 'ch' + t)))
            })
          ]
        })
      ]
    }),
    ld = ({
      loadProgress: e,
      gameHasBegun: t,
      onBegin: i
    }) =>Object(sd.jsx) ('div', {
      id: 'splash-loader',
      className: 'splash-ready',
      onClick: e=>{
        e.preventDefault(),
        i()
      },
      children: t ? 'return' : 'begin'
    }),
    dd = () =>Object(sd.jsxs) ('div', {
      className: 'splash-notsupported',
      children: [
        Object(sd.jsx) ('img', {
          className: 'splash-notsupported-icon',
          src: ed,
          alt: ''
        }),
        Object(sd.jsx) ('br', {
        }),
        'Apologies, this project is not yet properly supported on mobile devices.',
        Object(sd.jsx) ('br', {
        }),
        Object(sd.jsx) ('br', {
        }),
        'If you\'re not on a mobile device, please disregard this message and click below to force a reload.',
        Object(sd.jsx) ('br', {
        }),
        Object(sd.jsx) ('br', {
        }),
        Object(sd.jsx) ('div', {
          className: 'splash-reload',
          onMouseDown: () =>{
            window.localStorage.setItem('force-allow-mobile', !0),
            window.location.reload()
          },
          children: 'I have a keyboard'
        })
      ]
    });
    var cd = ({
      onClose: e,
      supported: t,
      gameHasBegun: i,
      loadProgress: s
    }) =>Object(sd.jsxs) ('div', {
      id: 'splash-container',
      children: [
        qi && Object(sd.jsx) (od, {
        }),
        Object(sd.jsx) ('div', {
          id: 'home-bg'
        }),
        Object(sd.jsxs) ('div', {
          id: 'home',
          children: [
            t && Object(sd.jsxs) (sd.Fragment, {
              children: [
                Object(sd.jsxs) ('div', {
                  id: 'splash-version',
                  children: [
                    Object(sd.jsx) ('span', {
                      id: 'splash-player-count'
                    }),
                    'v',
                    es
                  ]
                }),
                Object(sd.jsxs) ('a', {
                  id: 'splash-anslo',
                  href: 'https://twitter.com/anslogen',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: [
                    Object(sd.jsx) ('img', {
                      src: td,
                      id: 'splash-anslo-img',
                      alt: ''
                    }),
                    Object(sd.jsx) ('div', {
                      children: 'from anslo.dev © 2022'
                    })
                  ]
                }),
                Object(sd.jsxs) ('div', {
                  id: 'splash-license',
                  children: [
                    'This work is licensed under a ',
                    Object(sd.jsx) ('a', {
                      rel: 'license',
                      className: 'splash-link',
                      href: 'http://creativecommons.org/licenses/by-nc-nd/4.0/',
                      children: 'CC BY-NC-ND 4.0 International License'
                    })
                  ]
                })
              ]
            }),
            Object(sd.jsx) ('div', {
              id: 'splash-logo-placeholder'
            }),
            Object(sd.jsx) ('img', {
              id: 'splash-logo',
              src: id,
              alt: ''
            }),
            Object(sd.jsx) ('div', {
              id: 'splash-header',
              children: 'slow roads'
            }),
            Object(sd.jsx) ('div', {
              id: 'splash-subheader',
              children: 'endless driving zen'
            }),
            t ? Object(sd.jsx) (ld, {
              loadProgress: s,
              gameHasBegun: i,
              onBegin: e
            }) : Object(sd.jsx) (dd, {
            }),
            Object(sd.jsxs) ('a', {
              id: 'splash-about',
              href: '#about',
              children: [
                'about',
                Object(sd.jsx) ('br', {
                }),
                '▾'
              ]
            }),
            t && Object(sd.jsxs) ('div', {
              id: 'splash-footer',
              children: [
                Object(sd.jsx) ('div', {
                  className: 'splash-footer-link',
                  children: Object(sd.jsxs) ('a', {
                    href: 'https://ko-fi.com/slowroads',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: [
                      'donate',
                      Object(sd.jsx) ('span', {
                        className: 'outlink'
                      })
                    ]
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'splash-footer-link',
                  children: Object(sd.jsxs) ('a', {
                    className: 'splash-link',
                    href: 'https://discord.gg/s8XPAAj',
                    children: [
                      'discord',
                      Object(sd.jsx) ('span', {
                        className: 'outlink'
                      })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        Object(sd.jsxs) ('div', {
          id: 'about',
          children: [
            Object(sd.jsxs) ('a', {
              id: 'splash-top',
              href: '#home',
              children: [
                '▴',
                Object(sd.jsx) ('br', {
                }),
                'back up'
              ]
            }),
            Object(sd.jsxs) ('div', {
              id: 'about-wrapper',
              children: [
                Object(sd.jsx) ('div', {
                  className: 'about-content',
                  style: {
                    marginBottom: '80px'
                  },
                  children: Object(sd.jsxs) ('div', {
                    className: 'splash-about',
                    children: [
                      Object(sd.jsx) ('strong', {
                        children: 'Slow Roads'
                      }),
                      ' is a casual, procedurally-generated driving game which lets you disconnect from life for a while and run endlessly toward the distant horizon. Set the scenery to suit your mood, throw on some music, and',
                      Object(sd.jsx) ('br', {
                      }),
                      Object(sd.jsx) ('strong', {
                        children: 'just drive'
                      }),
                      '.'
                    ]
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'splash-topo-divider',
                  children: Object(sd.jsx) ('div', {
                    className: 'splash-topo-header',
                    children: 'Background'
                  })
                }),
                Object(sd.jsxs) ('div', {
                  className: 'about-content',
                  children: [
                    Object(sd.jsxs) ('div', {
                      className: 'splash-nav',
                      children: [
                        Object(sd.jsx) ('a', {
                          className: 'splash-nav-item',
                          href: '#background',
                          children: 'background'
                        }),
                        Object(sd.jsx) ('a', {
                          className: 'splash-nav-item',
                          href: '#development',
                          children: 'development plan'
                        }),
                        Object(sd.jsx) ('a', {
                          className: 'splash-nav-item',
                          href: '#blog',
                          children: 'technical blog'
                        }),
                        Object(sd.jsx) ('a', {
                          className: 'splash-nav-item',
                          href: '#faq',
                          children: 'faq'
                        }),
                        Object(sd.jsx) ('a', {
                          className: 'splash-nav-item',
                          href: '#archive',
                          children: 'attributions'
                        })
                      ]
                    }),
                    Object(sd.jsxs) ('div', {
                      className: 'splash-about-text',
                      children: [
                        'My name is ',
                        Object(sd.jsx) ('a', {
                          className: 'about-link',
                          href: 'https://anslo.dev',
                          children: 'anslo'
                        }),
                        ' and I\'m a creative developer exploring in the space between design and computer science. With a background in software engineering and a life-long love of functional art, my projects focus on finding novel applications of digital technology in answering interesting design questions.',
                        Object(sd.jsx) ('br', {
                        }),
                        Object(sd.jsx) ('br', {
                        }),
                        'Slow Roads exists primarily as an exploration of procedural scenery generation, but also as an experiment testing the boundaries of 3D application development within JavaScript. As a game, this project is a nostalgic love letter to the rolling hills of the Peak District, and to the arcade rally games I would play for hours on end as a child. As a technical demo, I aim to set a high bar and redress the negative idea of what can be accomplished in the browser.',
                        Object(sd.jsx) ('br', {
                        }),
                        Object(sd.jsx) ('br', {
                        }),
                        'Aside from this, my hope is that those in need of a simple, soothing escape will find it here.'
                      ]
                    })
                  ]
                }),
                Object(sd.jsx) ('div', {
                  className: 'splash-topo-divider',
                  children: Object(sd.jsx) ('div', {
                    className: 'splash-topo-header',
                    children: 'Development Plan'
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'about-content',
                  children: Object(sd.jsxs) ('div', {
                    className: 'splash-about-text',
                    children: [
                      'Following an unexpectedly positive response, development will continue until at least the end of the year, to address the critical bugs and add the most popular features. Maintaining the casual experience with an emphasis on scenery remains the priority, though some hardcore features may be considered in the future for an added challenge.',
                      Object(sd.jsx) ('br', {
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      Object(sd.jsx) ('div', {
                        className: 'splash-about-title',
                        children: 'Upcoming Release - v1.1.0 (mid/late-November):'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      Object(sd.jsxs) ('div', {
                        style: {
                          marginLeft: '16px'
                        },
                        children: [
                          '- Support for controllers and wheels ',
                          Object(sd.jsx) ('br', {
                          }),
                          '- In-vehicle first-person view ',
                          Object(sd.jsx) ('br', {
                          }),
                          '- Revamped control panel with extra settings for physics/audio/controls/gameplay ',
                          Object(sd.jsx) ('br', {
                          }),
                          '- Mouse-look when in autodrive/key-control ',
                          Object(sd.jsx) ('br', {
                          }),
                          '- Further bug fixes to minimise generation errors and resolve audio issues ',
                          Object(sd.jsx) ('br', {
                          })
                        ]
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      Object(sd.jsx) ('div', {
                        className: 'splash-about-title',
                        children: 'Planned Future Features:'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      Object(sd.jsxs) ('div', {
                        style: {
                          marginLeft: '16px'
                        },
                        children: [
                          '- More locations and world types',
                          Object(sd.jsx) ('br', {
                          }),
                          '- Improved weather effects (rain, snow, fog, wind) and better dynamic controls ',
                          Object(sd.jsx) ('br', {
                          }),
                          '- Improved environmental detail and effects (birds, buildings, structures, cows...) ',
                          Object(sd.jsx) ('br', {
                          }),
                          '- Improved lighting and shadows ',
                          Object(sd.jsx) ('br', {
                          }),
                          '- Improved autodrive, including a lane-follow option ',
                          Object(sd.jsx) ('br', {
                          }),
                          '- Quality-of-life features like maximum speed lock, past seeds menu ',
                          Object(sd.jsx) ('br', {
                          })
                        ]
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Find the full plan of work on my ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://public.zenkit.com/c/VRrOoJJR08/slow-roads?v=AB7dI0FTBJ',
                        children: 'ZenKit board'
                      }),
                      '.',
                      Object(sd.jsx) ('br', {
                      }),
                      'Join the ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://discord.gg/t2UWVKcy3z',
                        children: 'discord server'
                      }),
                      ' to discuss new ideas.',
                      Object(sd.jsx) ('br', {
                      }),
                      'Supporters on ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://ko-fi.com/slowroads',
                        children: 'ko-fi'
                      }),
                      ' get early access and priority requests!',
                      Object(sd.jsx) ('br', {
                      })
                    ]
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'splash-topo-divider',
                  children: Object(sd.jsx) ('div', {
                    className: 'splash-topo-header',
                    children: 'Technical Blog'
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'about-content',
                  children: Object(sd.jsxs) ('div', {
                    className: 'splash-about-text',
                    children: [
                      'While I have no immediate plans to make the source code public, over the next few weeks I will be writing blog posts diving into each of the main components. If you\'re curious, please follow me on ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://twitter.com/anslogen',
                        children: 'Twitter'
                      }),
                      ' or ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://anslo.medium.com/',
                        children: 'Medium'
                      }),
                      ' to be notified of new posts.',
                      Object(sd.jsx) ('br', {
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      Object(sd.jsx) ('div', {
                        className: 'splash-about-blog-list',
                        children: ad.map(((e, t) =>Object(sd.jsx) (rd, {
                          title: e.title,
                          link: e.link
                        }, t)))
                      })
                    ]
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'splash-topo-divider',
                  children: Object(sd.jsx) ('div', {
                    className: 'splash-topo-header',
                    children: 'FAQ'
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'about-content',
                  children: Object(sd.jsx) ('div', {
                    className: 'splash-about-text',
                    children: nd.map(((e, t) =>Object(sd.jsx) (hd, {
                      q: e.q,
                      a: e.a
                    }, t)))
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'splash-topo-divider',
                  children: Object(sd.jsx) ('div', {
                    className: 'splash-topo-header',
                    children: 'Attributions'
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'about-content',
                  children: Object(sd.jsxs) ('div', {
                    className: 'splash-about-text',
                    children: [
                      'Brake audio - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/Hencocor/sounds/407406/',
                        children: 'Hencocor on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Ambient audio - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/InspectorJ/sounds/401543/',
                        children: 'InspectorJ on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Tyre audio - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/fractanimal/sounds/614627/',
                        children: 'fractanimal on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Gravel audio - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/seth-m/sounds/341069/',
                        children: 'seth-m on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Boost audio - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/YleArkisto/sounds/342892/',
                        children: 'YleArkisto on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Suspension audio - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/ingudios/sounds/119468/',
                        children: 'ingudios on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Collision sounds - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/jakobthiesen/sounds/174836/',
                        children: 'jakobthiesen on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Collision sounds - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/jakobthiesen/sounds/174837/',
                        children: 'jakobthiesen on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Collision sounds - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/SubwaySandwitch420/sounds/538947/',
                        children: 'SubwaySandwitch420 on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Barrier scrape sound - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/eyenorth/sounds/464846/',
                        children: 'eyenorth on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      'Misc sound effects - ',
                      Object(sd.jsx) ('a', {
                        className: 'about-link',
                        href: 'https://freesound.org/people/HECKFRICKER/sounds/625312/',
                        children: 'HECKFRICKER on freesound.org'
                      }),
                      Object(sd.jsx) ('br', {
                      })
                    ]
                  })
                })
              ]
            }),
            null == Qh.value ? Object(sd.jsx) ('div', {
              id: 'splash-distance',
              className: 'splash-footer',
              children: 'thank you for playing'
            }) : Object(sd.jsxs) ('div', {
              id: 'splash-distance',
              className: 'splash-footer',
              children: [
                'thank you for over ',
                Math.floor(Qh.value / 1000),
                ' kilometres travelled'
              ]
            })
          ]
        })
      ]
    }),
    pd = (i(47), i.p + 'static/media/lock_open.2037b97e.svg'),
    ud = i.p + 'static/media/lock_closed.2c30efba.svg',
    gd = i.p + 'static/media/refresh.56c65653.svg';
    const md = [
      'mph',
      'kmph'
    ],
    xd = [
      'miles',
      'km'
    ],
    vd = [
      0.44704,
      0.277778
    ],
    wd = [
      60 * vd[0],
      100 * vd[1]
    ],
    fd = ({
      conversion: e,
      cruiseDefault: t
    }) =>{
      const [i,
      n] = Object(s.useState) (Fh.value),
      [
        a,
        r
      ] = Object(s.useState) (t),
      [
        h,
        o
      ] = Object(s.useState) (!1);
      return Object(s.useEffect) ((() =>{
        null != i && r(i)
      }), [
        r,
        i
      ]),
      Object(s.useEffect) ((() =>(Fh.addListener(n), () =>{
        Fh.removeListener(n)
      })), [
        n
      ]),
      Object(sd.jsxs) ('div', {
        id: 'ui-cruise-controls',
        children: [
          Object(sd.jsx) ('img', {
            id: 'ui-cruise-toggle',
            title: 'Toggle cruise control',
            alt: '',
            src: null === i ? pd : ud,
            onMouseDown: () =>{
              Fh.set(null == Fh.value ? a : null)
            },
            onMouseEnter: () =>o(!0),
            onMouseLeave: () =>o(!1)
          }),
          null !== i && Object(sd.jsxs) ('div', {
            id: 'ui-cruise-select',
            children: [
              Object(sd.jsx) ('div', {
                className: 'ui-cruise-arrow',
                onMouseDown: () =>{
                  Fh.inc5()
                },
                children: '▴'
              }),
              Object(sd.jsx) ('div', {
                id: 'ui-cruise-value',
                children: Math.round(i / e)
              }),
              Object(sd.jsx) ('div', {
                className: 'ui-cruise-arrow',
                onMouseDown: () =>{
                  Fh.dec5()
                },
                children: '▾'
              })
            ]
          }),
          null == i && h && Object(sd.jsx) ('div', {
            id: 'ui-cruise-label',
            children: 'Cruise control'
          })
        ]
      })
    };
    var bd = () =>{
      const [e,
      t] = Object(s.useState) (f.Units),
      [
        i,
        n
      ] = Object(s.useState) (!1);
      return Object(s.useEffect) ((() =>(f.addListener(v.Units, t), () =>{
        f.removeListener(v.Units, t)
      })), [
      ]),
      Object(sd.jsxs) ('div', {
        id: 'main-stats',
        children: [
          Object(sd.jsxs) ('div', {
            id: 'ui-dist',
            className: 'ui-stat',
            children: [
              Object(sd.jsx) ('span', {
                id: 'ui-dist-val',
                className: 'ui-stat-val',
                children: '0'
              }),
              Object(sd.jsx) ('div', {
                className: 'ui-stat-unit',
                onMouseDown: () =>f.set(v.Units, (e + 1) % 2),
                children: xd[e]
              }),
              Object(sd.jsxs) ('div', {
                id: 'ui-dist-reset',
                children: [
                  Object(sd.jsx) ('img', {
                    id: 'ui-dist-reset-icon',
                    alt: '',
                    src: gd,
                    onMouseEnter: () =>n(!0),
                    onMouseLeave: () =>n(!1),
                    onClick: () =>{
                      wh.revertProgress(),
                      window.localStorage.setItem('reloading', !0),
                      window.location.reload()
                    }
                  }),
                  i && Object(sd.jsx) ('div', {
                    id: 'ui-dist-reset-warning',
                    children: 'Reset distance (page will reload)'
                  })
                ]
              })
            ]
          }),
          Object(sd.jsx) ('div', {
            className: 'ui-stat-spacer'
          }),
          Object(sd.jsxs) ('div', {
            id: 'ui-speed',
            className: 'ui-stat',
            children: [
              Object(sd.jsx) ('span', {
                id: 'ui-speed-val',
                className: 'ui-stat-val',
                children: '0'
              }),
              Object(sd.jsx) ('div', {
                className: 'ui-stat-unit',
                onMouseDown: () =>f.set(v.Units, (e + 1) % 2),
                children: md[e]
              }),
              Object(sd.jsx) (fd, {
                conversion: vd[e],
                cruiseDefault: wd[e]
              })
            ]
          })
        ]
      })
    },
    Ad = (i(21), i.p + 'static/media/globe.0021026f.svg'),
    yd = i.p + 'static/media/config.fa1e0797.svg',
    Id = i.p + 'static/media/v_config_1.45a9fb9a.svg',
    Dd = i.p + 'static/media/w_clear.e325f7bb.svg',
    Nd = i.p + 'static/media/w_sunset.6daecb38.svg',
    Md = i.p + 'static/media/w_sunrise.d42cfd8c.svg',
    Cd = i.p + 'static/media/w_cloud.126a5129.svg',
    jd = i.p + 'static/media/w_night.c1e24675.svg',
    kd = i.p + 'static/media/cycle_timer.e67c5684.svg',
    zd = i.p + 'static/media/s_winter.a14698ea.svg',
    Sd = i.p + 'static/media/s_spring.9771ab1e.svg',
    Od = i.p + 'static/media/s_summer.eea0686a.svg',
    Ld = i.p + 'static/media/s_autumn.76993205.svg',
    Rd = i.p + 'static/media/mars.4b77b21a.svg',
    Td = i.p + 'static/media/s_moon.ef286549.svg',
    Pd = i.p + 'static/media/venus.7fd51f92.svg',
    Gd = i.p + 'static/media/panorama.568dc952.svg',
    Bd = i.p + 'static/media/feedback2.24052523.svg',
    Wd = i.p + 'static/media/controls.0048d852.svg',
    Ed = i.p + 'static/media/controls_mouse_icon.0ab0135a.svg',
    Zd = i.p + 'static/media/favicon_circle_white.eb1953e3.svg',
    Fd = (i.p, i.p, i.p + 'static/media/ico_kofi.0dd3be2c.svg'),
    Hd = (i.p, i.p + 'static/media/controls_mouse_buttons.1f93e888.svg'),
    Qd = i.p + 'static/media/loc_hills_lines.39f0c4cc.png',
    Yd = i.p + 'static/media/loc_offworld.5e298b5e.png',
    Vd = (i(48), i.p + 'static/media/vol_high.30de055e.svg'),
    Ud = i.p + 'static/media/vol_off.11497865.svg';
    const Xd = ({
      container: e,
      level: t,
      setLevel: i,
      dragging: n,
      setDragging: a
    }) =>{
      const r = Object(s.useCallback) ((t=>{
        if (e.current) {
          let s = e.current.getBoundingClientRect();
          i(Math.min(Math.max(0, (s.bottom - t.clientY) / s.height), 1))
        }
        t.stopPropagation()
      }), [
        e,
        i
      ]),
      h = Object(s.useCallback) ((() =>{
        a(!1)
      }), [
        a
      ]);
      return Object(s.useEffect) ((() =>(n ? (window.addEventListener('mousemove', r), window.addEventListener('mouseup', h)) : (window.removeEventListener('mousemove', r), window.removeEventListener('mouseup', h)), () =>{
        window.removeEventListener('mousemove', r),
        window.removeEventListener('mouseup', h)
      })), [
        r,
        h,
        n
      ]),
      Object(sd.jsx) ('div', {
        id: 'slider-handle',
        style: {
          top: 100 * (1 - t) + '%'
        },
        onMouseDown: e=>{
          r(e),
          a(!0),
          e.stopPropagation()
        }
      })
    };
    var Jd = () =>{
      const [e,
      t] = Object(s.useState) (f.AudioLevel),
      [
        i,
        n
      ] = Object(s.useState) (e > 0),
      [
        a,
        r
      ] = Object(s.useState) (0.5),
      [
        h,
        o
      ] = Object(s.useState) (!1),
      l = Object(s.useRef) (null);
      return Object(s.useEffect) ((() =>{
        n(e <= 0)
      }), [
        n,
        e
      ]),
      Object(s.useEffect) ((() =>{
        f.set(v.AudioLevel, e)
      }), [
        e
      ]),
      Object(s.useEffect) ((() =>(f.addListener(v.AudioLevel, t), () =>{
        f.removeListener(v.AudioLevel, t)
      })), [
        t
      ]),
      Object(sd.jsx) (xc, {
        icon: i ? Ud : Vd,
        expanded: !!h,
        onMouseDown: s=>{
          i ? t(0 == a ? 0.5 : a) : (r(e), t(0)),
          s.stopPropagation()
        },
        children: Object(sd.jsx) ('div', {
          id: 'slider-container',
          ref: l,
          children: Object(sd.jsx) ('div', {
            id: 'slider-line',
            onMouseDown: e=>{
              let i = e.target.getBoundingClientRect();
              t((i.bottom - e.clientY) / i.height),
              o(!0),
              e.stopPropagation()
            },
            children: Object(sd.jsx) (Xd, {
              level: e,
              setLevel: t,
              dragging: h,
              setDragging: o,
              container: l
            })
          })
        })
      })
    };
    const qd = [
      Wd,
      Ed
    ],
    Kd = {
      clearSnow: Dd,
      clearSpring: Dd,
      clearAutumn: Dd,
      sunset: Nd,
      twilight: Nd,
      autumnSunset: Nd,
      winterSunset: Nd,
      autumnSunrise: Md,
      winterSunrise: Md,
      springSunrise: Md,
      sunrise: Md,
      clear: Dd,
      rain: Cd,
      autumnRain: Cd,
      springRain: Cd,
      snow: Cd,
      mars: Dd,
      venus: Cd,
      night: jd,
      marsRise: Nd,
      venusSet: Nd,
      moon: Dd
    },
    _d = {
      spring: Sd,
      summer: Od,
      autumn: Ld,
      winter: zd,
      mars: Rd,
      venus: Pd,
      moon: Td
    },
    $d = n.a.memo((({
      toggleSplash: e
    }) =>Object(sd.jsx) (sd.Fragment, {
      children: Object(sd.jsxs) ('div', {
        id: 'menu-bar',
        onMouseEnter: () =>{
          p.setMouseEnabled(!1)
        },
        onMouseLeave: () =>{
          p.setMouseEnabled(!0)
        },
        children: [
          Object(sd.jsx) (ec, {
          }),
          Object(sd.jsx) (dc, {
            toggleSplash: e
          })
        ]
      })
    }))),
    ec = () =>Object(sd.jsxs) ('div', {
      id: 'menu-bar-left',
      children: [
        Object(sd.jsx) (tc, {
        }),
        Object(sd.jsx) ('div', {
          className: 'menu-bar-vertical-divider'
        }),
        Object(sd.jsx) (oc, {
        }),
        Object(sd.jsx) (lc, {
        })
      ]
    }),
    tc = () =>{
      const [e,
      t] = Object(s.useState) (!1),
      [
        i,
        n
      ] = Object(s.useState) (Ve),
      [
        a,
        r
      ] = Object(s.useState) (wh.value.sceneName),
      [
        h,
        o
      ] = Object(s.useState) (wh.value.topography),
      [
        l,
        d
      ] = Object(s.useState) (!1),
      [
        c,
        p
      ] = Object(s.useState) (!1),
      [
        u,
        g
      ] = Object(s.useState) (!1),
      [
        m,
        x
      ] = Object(s.useState) (Ve),
      [
        v,
        w
      ] = Object(s.useState) (wh.value.sceneName),
      [
        f,
        b
      ] = Object(s.useState) (wh.value.topography),
      [
        A,
        y
      ] = Object(s.useState) (!1);
      return Object(s.useEffect) ((() =>{
        t(l || c || u)
      }), [
        t,
        l,
        c,
        u
      ]),
      Object(s.useEffect) ((() =>{
        d(m !== i)
      }), [
        d,
        m,
        i
      ]),
      Object(s.useEffect) ((() =>{
        p(v !== a)
      }), [
        p,
        v,
        a
      ]),
      Object(s.useEffect) ((() =>{
        g(f !== h)
      }), [
        g,
        f,
        h
      ]),
      Object(sd.jsx) (sd.Fragment, {
        children: Object(sd.jsxs) ('div', {
          className: 'menu-item',
          tabIndex: - 1,
          onMouseEnter: () =>{
            y(!0)
          },
          onMouseLeave: () =>{
            y(!1)
          },
          children: [
            Object(sd.jsx) (ac, {
              src: Ad
            }),
            A && Object(sd.jsxs) ('div', {
              className: 'menu-panel',
              children: [
                Object(sd.jsx) ('div', {
                  className: 'menu-panel-row menu-panel-title',
                  style: {
                    color: c ? '#fff' : '',
                    textShadow: c ? '0px 0px 5px #fff' : ''
                  },
                  children: 'scene'
                }),
                Object(sd.jsx) (sc, {
                  options: [
                    'HILLS',
                    'OFF-WORLD'
                  ],
                  bgs: [
                    Qd,
                    Yd
                  ],
                  selectedIndex: uh.indexOf(v),
                  onSelectIndex: e=>{
                    e < 2 && w(uh[e])
                  }
                }),
                Object(sd.jsx) ('div', {
                  className: 'menu-panel-row menu-panel-title',
                  style: {
                    color: u ? '#fff' : '',
                    textShadow: u ? '0px 0px 5px #fff' : ''
                  },
                  children: 'road complexity'
                }),
                Object(sd.jsx) (sc, {
                  options: [
                    'CASUAL',
                    'NORMAL',
                    'HARD'
                  ],
                  bgs: [
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAA8CAYAAAC9xKUYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA3LTIwVDE4OjI2OjUwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA3LTIwVDIyOjI1OjI3KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNy0yMFQyMjoyNToyNyswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiMDMwZWJhNi0zM2ExLTczNGEtOWVmYS1mNWNiZTYxOGUwNmUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1NWZiMTAyYi03OTQxLWIxNGQtYWMzYi1hOGQwN2QzNjRhOTkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkN2RiZGM1Zi02OTcwLWYyNGQtOGVjYi1kY2U0NDQ1NWNmMTgiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ3ZGJkYzVmLTY5NzAtZjI0ZC04ZWNiLWRjZTQ0NDU1Y2YxOCIgc3RFdnQ6d2hlbj0iMjAyMi0wNy0yMFQxODoyNjo1MCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YmUwMzA0Ni0yYjU5LWQ3NDUtOTE1Mi00YTIzMmNiMWIyNDciIHN0RXZ0OndoZW49IjIwMjItMDctMjBUMTg6MjY6NTArMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjAzMGViYTYtMzNhMS03MzRhLTllZmEtZjVjYmU2MThlMDZlIiBzdEV2dDp3aGVuPSIyMDIyLTA3LTIwVDIyOjI1OjI3KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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',
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAA8CAYAAAC9xKUYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA3LTIwVDE4OjI2OjUwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA3LTIwVDIyOjI0OjE5KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNy0yMFQyMjoyNDoxOSswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkOGQzZTNhOC1lZTRkLWRmNDYtOTc0MS00YThkOGZmNDVmYjYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2MDk3Y2Y0Zi01MzRhLTA5NGMtYjg1MS03NDAzODQ1NjM5YjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkN2RiZGM1Zi02OTcwLWYyNGQtOGVjYi1kY2U0NDQ1NWNmMTgiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ3ZGJkYzVmLTY5NzAtZjI0ZC04ZWNiLWRjZTQ0NDU1Y2YxOCIgc3RFdnQ6d2hlbj0iMjAyMi0wNy0yMFQxODoyNjo1MCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YmUwMzA0Ni0yYjU5LWQ3NDUtOTE1Mi00YTIzMmNiMWIyNDciIHN0RXZ0OndoZW49IjIwMjItMDctMjBUMTg6MjY6NTArMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDhkM2UzYTgtZWU0ZC1kZjQ2LTk3NDEtNGE4ZDhmZjQ1ZmI2IiBzdEV2dDp3aGVuPSIyMDIyLTA3LTIwVDIyOjI0OjE5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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',
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAA8CAYAAAC9xKUYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA3LTIwVDE4OjI2OjUwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA3LTIwVDIyOjIzOjI2KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNy0yMFQyMjoyMzoyNiswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMjI5ZmVhYS1kM2Q5LTI3NDktOTMxYy1hOTcxZmNiNGUwMzkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowMWQxODExZC1hNjczLTc5NDctOGU1ZS0yYTc5OWE4MjVlMzUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkN2RiZGM1Zi02OTcwLWYyNGQtOGVjYi1kY2U0NDQ1NWNmMTgiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ3ZGJkYzVmLTY5NzAtZjI0ZC04ZWNiLWRjZTQ0NDU1Y2YxOCIgc3RFdnQ6d2hlbj0iMjAyMi0wNy0yMFQxODoyNjo1MCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YmUwMzA0Ni0yYjU5LWQ3NDUtOTE1Mi00YTIzMmNiMWIyNDciIHN0RXZ0OndoZW49IjIwMjItMDctMjBUMTg6MjY6NTArMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjIyOWZlYWEtZDNkOS0yNzQ5LTkzMWMtYTk3MWZjYjRlMDM5IiBzdEV2dDp3aGVuPSIyMDIyLTA3LTIwVDIyOjIzOjI2KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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'
                  ],
                  selectedIndex: gh.indexOf(f),
                  onSelectIndex: e=>b(gh[e])
                }),
                Object(sd.jsx) ('div', {
                  className: 'menu-panel-row menu-panel-title',
                  style: {
                    color: l ? '#fff' : '',
                    textShadow: l ? '0px 0px 5px #fff' : ''
                  },
                  children: 'generation seed'
                }),
                Object(sd.jsx) (ic, {
                  curValue: m,
                  onChanged: x
                }),
                Object(sd.jsx) ('div', {
                  className: 'menu-panel-row menu-panel-title',
                  children: e && Object(sd.jsx) ('div', {
                    className: 'menu-apply-arrows arrows-down',
                    children: '▾ ▾ ▾'
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'menu-panel-row menu-apply-row',
                  children: Object(sd.jsx) ('div', {
                    id: 'menu-apply',
                    className: e ? 'menu-panel-button' : 'menu-panel-button-inactive',
                    onMouseDown: () =>{
                      e && (l ? (qe(m), wh.set('topography', f, !0), wh.set('sceneName', v, !0), wh.set('seed', m)) : c ? (wh.set('topography', f, !0), wh.set('sceneName', v)) : wh.set('topography', f), n(Ve), o(f), r(v))
                    },
                    children: 'apply changes'
                  })
                }),
                Object(sd.jsx) ('div', {
                  className: 'menu-panel-row menu-panel-title',
                  children: e && Object(sd.jsx) ('div', {
                    className: 'menu-apply-arrows arrows-up',
                    children: '▴ ▴ ▴'
                  })
                })
              ]
            })
          ]
        })
      })
    },
    ic = ({
      curValue: e,
      onChanged: t
    }) =>{
      const [i,
      n] = Object(s.useState) (e),
      [
        a,
        r
      ] = Object(s.useState) (!1);
      return Object(s.useEffect) ((() =>{
        r(!Ke(i))
      }), [
        r,
        i
      ]),
      Object(s.useEffect) ((() =>{
        a && t(i)
      }), [
        a,
        t,
        i
      ]),
      Object(s.useEffect) ((() =>() =>{
        p.unlockKeys()
      }), [
      ]),
      Object(sd.jsx) ('div', {
        className: 'menu-panel-row',
        children: Object(sd.jsx) ('input', {
          className: a || 0 == i.length ? 'seed-input' : 'seed-input seed-invalid',
          tabIndex: 1,
          placeholder: 'seed',
          value: i,
          maxLength: 32,
          onChange: e=>n(e.target.value),
          onKeyDown: e=>{
            13 == e.which && e.target.blur()
          },
          onFocus: () =>{
            p.lockKeys()
          },
          onBlur: () =>{
            a || n(Ve),
            p.unlockKeys()
          }
        })
      })
    },
    sc = ({
      options: e,
      bgs: t,
      selectedIndex: i,
      onSelectIndex: n
    }) =>{
      const [a,
      r] = Object(s.useState) (!1);
      return Object(sd.jsxs) ('div', {
        className: 'menu-panel-row',
        style: t ? {
          backgroundImage: 'url(' + t[i] + ')'
        }
         : {
        },
        onMouseEnter: () =>r(!0),
        onMouseLeave: () =>r(!1),
        children: [
          Object(sd.jsxs) ('div', {
            className: '',
            children: [
              e[i],
              Object(sd.jsx) ('div', {
                className: 'menu-panel-row-expand',
                style: {
                  opacity: a ? 1 : 0.75
                },
                children: '▸'
              })
            ]
          }),
          a && Object(sd.jsxs) ('div', {
            className: 'menu-panel-option-list',
            style: {
              transform: 'translateY(-' + (31 * e.length - 31) + 'px)'
            },
            children: [
              e.map(((e, i) =>Object(sd.jsx) ('div', {
                className: 'menu-panel-option-list-row',
                style: t ? {
                  backgroundImage: 'url(' + t[i] + ')'
                }
                 : {
                },
                onClick: () =>n(i),
                children: e
              }, 'option-' + e))),
              Object(sd.jsx) ('div', {
                className: 'panel-expander'
              })
            ]
          })
        ]
      })
    },
    nc = ({
      options: e,
      selectedIndex: t,
      onSelectIndex: i
    }) =>Object(sd.jsx) ('div', {
      className: 'menu-panel-row',
      children: e.map(((e, s) =>Object(sd.jsx) ('div', {
        className: t == s ? 'menu-panel-choice-option choice-selected' : 'menu-panel-choice-option',
        onClick: () =>i(s),
        children: e
      }, 'option-' + e)))
    }),
    ac = ({
      src: e,
      text: t,
      onMouseDown: i,
      highlight: s
    }) =>t ? Object(sd.jsx) ('div', {
      className: s ? 'menu-icon-text highlight' : 'menu-icon-text',
      onMouseDown: i,
      children: t
    }) : Object(sd.jsx) ('img', {
      className: s ? 'menu-icon highlight' : 'menu-icon',
      src: e,
      alt: '',
      width: '50%',
      onMouseDown: i
    }),
    rc = () =>{
      const [e,
      t] = Object(s.useState) (Ui.value);
      return Object(s.useEffect) ((() =>(Ui.addListener(t), () =>{
        Ui.removeListener(t)
      })), [
        t
      ]),
      Object(sd.jsx) ('div', {
        style: {
          borderTop: '1px solid #fff4'
        },
        children: Object(sd.jsxs) (wc, {
          selected: !1,
          icon: kd,
          label: 'cycle timer',
          children: [
            Object(sd.jsx) (bc, {
              selected: 0 == e,
              text: 'off',
              onMouseDown: () =>Ui.set(0)
            }),
            Object(sd.jsx) (bc, {
              selected: 1 == e,
              text: '3m',
              onMouseDown: () =>Ui.set(1)
            }),
            Object(sd.jsx) (bc, {
              selected: 2 == e,
              text: '8m',
              onMouseDown: () =>Ui.set(2)
            }),
            Object(sd.jsx) (bc, {
              selected: 3 == e,
              text: '15m',
              onMouseDown: () =>Ui.set(3)
            })
          ]
        })
      })
    },
    hc = ({
      canSelect: e,
      configKey: t,
      configVal: i,
      icon: n,
      onMouseDown: a
    }) =>{
      const [r,
      h] = Object(s.useState) (wh.value[t]);
      return Object(s.useEffect) ((() =>(wh.addListener(t, h), () =>{
        wh.removeListener(t, h)
      })), [
        t
      ]),
      Object(sd.jsx) (bc, {
        selected: r == i && e,
        icon: n,
        onMouseDown: a
      })
    },
    oc = () =>{
      const [e,
      t] = Object(s.useState) (wh.sceneMeta.scenes[wh.sceneMeta.current]),
      [
        i,
        n
      ] = Object(s.useState) (wh.value.skin),
      a = Object(s.useCallback) ((() =>{
        t(wh.sceneMeta.scenes[wh.value.sceneName]),
        n('default')
      }), [
        t
      ]);
      Object(s.useEffect) ((() =>(wh.addListener('sceneName', a), () =>{
        wh.removeListener('sceneName', a)
      })), [
        a
      ]),
      Object(s.useEffect) ((() =>(wh.addListener('skin', n), () =>{
        wh.removeListener('skin', n)
      })), [
        n
      ]),
      Object(s.useEffect) ((() =>(wh.addListener('seed', a), () =>{
        wh.removeListener('seed', a)
      })), [
        a
      ]);
      const r = Object(s.useCallback) (((t, i) =>{
        wh.set('skin', e.skins[t]),
        wh.set('weatherIndex', i)
      }), [
        e
      ]),
      h = Object(s.useCallback) ((t=>{
        wh.set('skin', e.skins[t]),
        console.log('Skin index ', t),
        wh.set('weatherIndex', 0)
      }), [
        e
      ]);
      let o = e.skins,
      l = e.skinNames,
      d = e.skinWeathers;
      return Object(sd.jsxs) (xc, {
        icon: Gd,
        children: [
          o.length && o.map(((e, t) =>Object(sd.jsx) (wc, {
            selected: e == i,
            icon: _d[l[e]],
            label: l[e],
            onMouseDown: () =>h(t),
            children: d[e].map(((s, n) =>Object(sd.jsx) (hc, {
              canSelect: e == i,
              configKey: 'weatherIndex',
              configVal: n,
              icon: Kd[s],
              onMouseDown: () =>r(t, n)
            }, n)))
          }, e))),
          e.hasCycles && Object(sd.jsx) (rc, {
          }),
          Object(sd.jsx) ('div', {
            className: 'stack-back',
            style: {
              width: '200px'
            }
          })
        ]
      })
    },
    lc = () =>{
      const [e,
      t] = Object(s.useState) (Rh.value.type);
      return Object(s.useEffect) ((() =>(Rh.addListener('type', t), () =>{
        Rh.removeListener('type', t)
      })), [
      ]),
      Object(sd.jsxs) (xc, {
        icon: Id,
        children: [
          Object.keys(Ch).map((t=>Object(sd.jsx) (wc, {
            selected: t == e,
            icon: Ch[t].icon,
            label: t.toLowerCase(),
            onMouseDown: () =>Rh.set('type', t)
          }, 'veh-type-' + t))),
          Object(sd.jsx) ('div', {
            className: 'stack-back',
            style: {
              width: '200px'
            }
          })
        ]
      })
    },
    dc = ({
      toggleSplash: e
    }) =>Object(sd.jsxs) ('div', {
      id: 'menu-bar-right',
      children: [
        Object(sd.jsx) (uc, {
        }),
        Object(sd.jsx) (gc, {
        }),
        Object(sd.jsx) (Jd, {
        }),
        Object(sd.jsx) (pc, {
        }),
        Object(sd.jsx) (cc, {
        }),
        Object(sd.jsx) ('div', {
          className: 'menu-bar-vertical-divider'
        }),
        Object(sd.jsx) (mc, {
          toggleSplash: e
        })
      ]
    }),
    cc = () =>{
      const [e,
      t] = Object(s.useState) (!1),
      [
        i,
        n
      ] = Object(s.useState) (wh.value.viewLodIndex),
      [
        a,
        r
      ] = Object(s.useState) (wh.value.detailLodIndex),
      [
        h,
        o
      ] = Object(s.useState) (wh.value.renderScale),
      [
        l,
        d
      ] = Object(s.useState) (Rh.value.mode),
      [
        c,
        p
      ] = Object(s.useState) (f.value[v.DoubleTap]),
      [
        u,
        g
      ] = Object(s.useState) (f.value[v.Units]),
      [
        m,
        x
      ] = Object(s.useState) (f.value[v.AutoPause]),
      [
        w,
        b
      ] = Object(s.useState) (Xl.value);
      return Object(s.useEffect) ((() =>(Xl.addListener(b), () =>{
        Xl.removeListener(b)
      })), [
        b
      ]),
      Object(s.useEffect) ((() =>(wh.addListener('viewLodIndex', n), () =>{
        wh.removeListener('viewLodIndex', n)
      })), [
        n
      ]),
      Object(s.useEffect) ((() =>(wh.addListener('detailLodIndex', r), () =>{
        wh.removeListener('detailLodIndex', r)
      })), [
        r
      ]),
      Object(s.useEffect) ((() =>(wh.addListener('renderScale', o), () =>{
        wh.removeListener('renderScale', o)
      })), [
        r
      ]),
      Object(s.useEffect) ((() =>(Rh.addListener('mode', d), () =>{
        Rh.removeListener('mode', d)
      })), [
        d
      ]),
      Object(s.useEffect) ((() =>(f.addListener(v.Units, g), () =>{
        f.removeListener(v.Units, g)
      })), [
        g
      ]),
      Object(s.useEffect) ((() =>(f.addListener(v.AutoPause, x), () =>{
        f.removeListener(v.AutoPause, x)
      })), [
        x
      ]),
      Object(s.useEffect) ((() =>(f.addListener(v.DoubleTap, p), () =>{
        f.removeListener(v.DoubleTap, p)
      })), [
        p
      ]),
      Object(sd.jsxs) (sd.Fragment, {
        children: [
          Object(sd.jsxs) ('div', {
            className: 'menu-item',
            style: {
              backgroundColor: w ? '#222' : ''
            },
            tabIndex: - 1,
            onMouseEnter: () =>{
              Xl.set(!1),
              t(!0)
            },
            onMouseLeave: () =>{
              t(!1)
            },
            children: [
              Object(sd.jsx) (ac, {
                src: yd
              }),
              e && Object(sd.jsxs) ('div', {
                className: 'menu-panel',
                style: {
                  right: '-51px',
                  overflowY: 'auto'
                },
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'menu-panel-row menu-panel-title',
                    children: 'drive mode'
                  }),
                  Object(sd.jsx) (nc, {
                    options: [
                      'awd',
                      'fwd',
                      'rwd'
                    ],
                    selectedIndex: l,
                    onSelectIndex: e=>Rh.set('mode', e)
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'menu-panel-row menu-panel-title',
                    children: 'units'
                  }),
                  Object(sd.jsx) (nc, {
                    options: [
                      'miles',
                      'kilometres'
                    ],
                    selectedIndex: u,
                    onSelectIndex: e=>f.set(v.Units, e)
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'menu-panel-row menu-panel-title',
                    children: 'double-tap to boost'
                  }),
                  Object(sd.jsx) (nc, {
                    options: [
                      'on',
                      'off'
                    ],
                    selectedIndex: c,
                    onSelectIndex: e=>f.set(v.DoubleTap, e)
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'menu-panel-row menu-panel-title',
                    children: 'pause when inactive'
                  }),
                  Object(sd.jsx) (nc, {
                    options: [
                      'on',
                      'off'
                    ],
                    selectedIndex: m,
                    onSelectIndex: e=>f.set(v.AutoPause, e)
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'menu-panel-row menu-panel-title',
                    children: 'view distance'
                  }),
                  Object(sd.jsx) (nc, {
                    options: [
                      'low',
                      'med',
                      'high',
                      'ultra'
                    ],
                    selectedIndex: i,
                    onSelectIndex: e=>wh.set('viewLodIndex', e)
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'menu-panel-row menu-panel-title',
                    children: 'environment detail'
                  }),
                  Object(sd.jsx) (nc, {
                    options: [
                      'low',
                      'med',
                      'high',
                      'ultra'
                    ],
                    selectedIndex: a,
                    onSelectIndex: e=>wh.set('detailLodIndex', e)
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'menu-panel-row menu-panel-title',
                    children: 'render scale'
                  }),
                  Object(sd.jsx) (nc, {
                    options: [
                      '0.5',
                      '0.75',
                      '1.0',
                      '1.5'
                    ],
                    selectedIndex: h,
                    onSelectIndex: e=>wh.set('renderScale', e)
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'menu-panel-row menu-panel-title'
                  })
                ]
              })
            ]
          }),
          w && Object(sd.jsxs) ('div', {
            id: 'fps-prompt',
            children: [
              Object(sd.jsx) ('span', {
                style: {
                  fontSize: '18px',
                  fontWeight: 1000
                },
                children: 'Low FPS?'
              }),
              Object(sd.jsx) ('br', {
              }),
              'Try lowering the quality settings',
              Object(sd.jsx) ('br', {
              }),
              ' or enabling hardware acceleration',
              Object(sd.jsx) ('br', {
              }),
              Object(sd.jsx) ('span', {
                style: {
                  paddingLeft: 'calc(100% - 50px)'
                },
                children: '↓'
              })
            ]
          })
        ]
      })
    },
    pc = () =>{
      const [e,
      t] = Object(s.useState) (!1),
      [
        i,
        n
      ] = Object(s.useState) (''),
      [
        a,
        r
      ] = Object(s.useState) (!1),
      [
        h,
        o
      ] = Object(s.useState) (!1);
      return Object(s.useEffect) ((() =>{
        e || r(!1)
      }), [
        r,
        e
      ]),
      Object(s.useEffect) ((() =>() =>{
        p.setMouseEnabled(!0),
        p.unlockKeys()
      }), [
      ]),
      Object(s.useEffect) ((() =>{
        e && (o(!1), window.localStorage.setItem('feedback-seen', !0)),
        e && !a || (p.setMouseEnabled(!0), p.unlockKeys())
      }), [
        e,
        a
      ]),
      Object(sd.jsxs) (sd.Fragment, {
        children: [
          h && Object(sd.jsx) ('div', {
            className: 'feedback-prompt',
            children: 'Any thoughts so far?'
          }),
          e && Object(sd.jsxs) ('div', {
            className: 'feedback-main',
            onMouseEnter: e=>{
              t(!0)
            },
            onMouseLeave: e=>{
              t(!1)
            },
            children: [
              Object(sd.jsxs) ('div', {
                className: 'feedback-header',
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'feedback-title',
                    children: 'Feedback'
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'feedback-close',
                    onMouseDown: e=>{
                      t(!1),
                      e.preventDefault()
                    },
                    children: 'close'
                  })
                ]
              }),
              Object(sd.jsxs) ('div', {
                className: 'feedback-blurb',
                children: [
                  'Please share any thoughts, complaints, or ideas for features below.',
                  Object(sd.jsx) ('br', {
                  }),
                  'You can also join the ',
                  Object(sd.jsx) ('a', {
                    className: 'feedback-link',
                    href: 'https://discord.gg/s8XPAAj',
                    children: 'discord'
                  }),
                  ' to talk to me directly.'
                ]
              }),
              a ? Object(sd.jsx) ('div', {
                className: 'feedback-input feedback-sent',
                children: 'Thanks!'
              }) : Object(sd.jsxs) (sd.Fragment, {
                children: [
                  Object(sd.jsx) ('textarea', {
                    className: 'feedback-input',
                    type: 'text',
                    maxLength: '500',
                    placeholder: 'Max 500 characters',
                    value: i,
                    onChange: e=>n(e.target.value),
                    onFocus: () =>{
                      p.lockKeys()
                    },
                    onBlur: () =>{
                      p.unlockKeys()
                    }
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'feedback-send',
                    onMouseDown: e=>{
                      i.length && !a && (no.sendFeedback(i), n(''), r(!0), window.localStorage.setItem('feedback-seen', !0)),
                      e.preventDefault()
                    },
                    children: 'Send'
                  })
                ]
              })
            ]
          }),
          Object(sd.jsx) ('div', {
            className: e ? 'menu-item item-selected' : h ? 'menu-item highlight' : 'menu-item',
            style: {
              padding: '0px 12px',
              width: 'auto',
              textAlign: 'right',
              display: 'flex'
            },
            onMouseEnter: e=>{
              t(!0),
              e.preventDefault()
            },
            onMouseLeave: e=>{
              t(!1),
              e.preventDefault()
            },
            children: Object(sd.jsx) ('img', {
              alt: '',
              style: {
                height: '50%',
                marginTop: '25px',
                marginRight: '4px',
                transform: 'translateY(-50%)'
              },
              src: Bd
            })
          })
        ]
      })
    },
    uc = () =>Object(sd.jsxs) ('a', {
      href: 'https://ko-fi.com/slowroads',
      target: '_blank',
      rel: 'noreferrer',
      title: 'Support development on Ko-fi!',
      className: 'menu-item',
      style: {
        padding: '0px 12px',
        width: 'auto',
        textAlign: 'right',
        display: 'flex'
      },
      children: [
        Object(sd.jsx) ('img', {
          alt: '',
          style: {
            height: '50%',
            marginTop: '25px',
            marginRight: '8px',
            transform: 'translateY(-50%)'
          },
          src: Fd
        }),
        Object(sd.jsx) ('div', {
          style: {
            fontSize: '14px',
            color: '#fff'
          },
          children: 'donate'
        })
      ]
    }),
    gc = () =>{
      const [e,
      t] = Object(s.useState) (Rh.value.input),
      [
        i,
        n
      ] = Object(s.useState) (1);
      return Object(s.useEffect) ((() =>(Rh.addListener('input', t), () =>{
        Rh.removeListener('input', t)
      })), [
        t
      ]),
      Object(sd.jsx) (sd.Fragment, {
        children: Object(sd.jsxs) (xc, {
          icon: qd[e],
          children: [
            Object(sd.jsx) (wc, {
              selected: 1 == e,
              icon: Ed,
              label: 'mouse',
              onMouseDown: () =>{
                Rh.set('input', 1)
              },
              onMouseEnter: () =>n(2),
              onMouseLeave: () =>n(0)
            }),
            Object(sd.jsx) (wc, {
              selected: 0 == e,
              icon: Wd,
              label: 'keyboard',
              onMouseDown: () =>{
                Rh.set('input', 0)
              },
              onMouseEnter: () =>n(1),
              onMouseLeave: () =>n(0)
            }),
            i > 0 && Object(sd.jsx) ('div', {
              id: 'controls-bg',
              children: 2 == i ? Object(sd.jsxs) ('div', {
                children: [
                  Object(sd.jsxs) ('div', {
                    className: 'control-panel-title',
                    children: [
                      'Mouse Controls',
                      Object(sd.jsx) ('br', {
                      }),
                      Object(sd.jsx) ('br', {
                      }),
                      Object(sd.jsx) ('span', {
                        style: {
                          color: '#fff8'
                        },
                        children: '(first-person camera recommended)'
                      })
                    ]
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'control-panel',
                    children: Object(sd.jsx) ('img', {
                      className: 'control-mouse-img',
                      src: Hd,
                      alt: ''
                    })
                  })
                ]
              }) : Object(sd.jsxs) ('div', {
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'control-panel-title',
                    children: 'Keyboard Controls'
                  }),
                  Object(sd.jsxs) ('div', {
                    className: 'control-panel',
                    children: [
                      Object(sd.jsxs) ('div', {
                        className: 'control-section',
                        children: [
                          Object(sd.jsx) ('div', {
                            className: 'control-key-row',
                            children: Object(sd.jsx) ('div', {
                              className: 'control-key',
                              children: 'W'
                            })
                          }),
                          Object(sd.jsxs) ('div', {
                            className: 'control-key-row',
                            children: [
                              Object(sd.jsx) ('div', {
                                className: 'control-key',
                                children: 'A'
                              }),
                              Object(sd.jsx) ('div', {
                                className: 'control-key',
                                children: 'S'
                              }),
                              Object(sd.jsx) ('div', {
                                className: 'control-key',
                                children: 'D'
                              })
                            ]
                          }),
                          Object(sd.jsxs) ('div', {
                            className: 'control-label',
                            children: [
                              'drive',
                              Object(sd.jsx) ('br', {
                              }),
                              '(or arrow keys)'
                            ]
                          })
                        ]
                      }),
                      Object(sd.jsxs) ('div', {
                        className: 'control-section',
                        children: [
                          Object(sd.jsx) ('div', {
                            className: 'control-key-row',
                            style: {
                              marginTop: '6.5vh'
                            },
                            children: Object(sd.jsx) ('div', {
                              className: 'control-key',
                              children: 'W'
                            })
                          }),
                          Object(sd.jsxs) ('div', {
                            className: 'control-label',
                            children: [
                              'boost accel',
                              Object(sd.jsx) ('br', {
                              }),
                              '(double-tap)'
                            ]
                          })
                        ]
                      }),
                      Object(sd.jsxs) ('div', {
                        className: 'control-section',
                        children: [
                          Object(sd.jsx) ('div', {
                            className: 'control-key-row',
                            style: {
                              marginTop: '6.5vh'
                            },
                            children: Object(sd.jsx) ('div', {
                              className: 'control-key',
                              style: {
                                width: '9vh'
                              },
                              children: 'SHIFT'
                            })
                          }),
                          Object(sd.jsxs) ('div', {
                            className: 'control-label',
                            children: [
                              'boost accel',
                              Object(sd.jsx) ('br', {
                              }),
                              '(hold)'
                            ]
                          })
                        ]
                      }),
                      Object(sd.jsxs) ('div', {
                        className: 'control-section',
                        children: [
                          Object(sd.jsx) ('div', {
                            className: 'control-key-row',
                            style: {
                              marginTop: '6.5vh'
                            },
                            children: Object(sd.jsx) ('div', {
                              className: 'control-key',
                              children: 'R'
                            })
                          }),
                          Object(sd.jsx) ('div', {
                            className: 'control-label',
                            children: 'reset vehicle'
                          })
                        ]
                      }),
                      Object(sd.jsxs) ('div', {
                        className: 'control-section',
                        children: [
                          Object(sd.jsx) ('div', {
                            className: 'control-key-row',
                            style: {
                              marginTop: '6.5vh'
                            },
                            children: Object(sd.jsx) ('div', {
                              className: 'control-key',
                              children: 'F'
                            })
                          }),
                          Object(sd.jsx) ('div', {
                            className: 'control-label',
                            children: 'toggle autodrive'
                          })
                        ]
                      })
                    ]
                  }),
                  Object(sd.jsxs) ('div', {
                    className: 'control-panel',
                    children: [
                      Object(sd.jsxs) ('div', {
                        className: 'control-section',
                        children: [
                          Object(sd.jsx) ('div', {
                            className: 'control-key-row',
                            style: {
                              marginTop: '6.5vh'
                            },
                            children: Object(sd.jsx) ('div', {
                              className: 'control-key',
                              style: {
                                width: '18vh'
                              },
                              children: 'SPACE'
                            })
                          }),
                          Object(sd.jsx) ('div', {
                            className: 'control-label',
                            children: 'handbrake'
                          })
                        ]
                      }),
                      Object(sd.jsxs) ('div', {
                        className: 'control-section',
                        children: [
                          Object(sd.jsx) ('div', {
                            className: 'control-key-row',
                            style: {
                              marginTop: '6.5vh'
                            },
                            children: Object(sd.jsx) ('div', {
                              className: 'control-key',
                              children: 'C'
                            })
                          }),
                          Object(sd.jsx) ('div', {
                            className: 'control-label',
                            children: 'change camera'
                          })
                        ]
                      }),
                      Object(sd.jsxs) ('div', {
                        className: 'control-section',
                        children: [
                          Object(sd.jsxs) ('div', {
                            className: 'control-key-row',
                            style: {
                              marginTop: '6.5vh'
                            },
                            children: [
                              Object(sd.jsx) ('div', {
                                className: 'control-key',
                                children: 'Q'
                              }),
                              Object(sd.jsx) ('div', {
                                className: 'control-key',
                                children: 'E'
                              })
                            ]
                          }),
                          Object(sd.jsx) ('div', {
                            className: 'control-label',
                            children: 'prev/next weather'
                          })
                        ]
                      }),
                      Object(sd.jsxs) ('div', {
                        className: 'control-section',
                        children: [
                          Object(sd.jsx) ('div', {
                            className: 'control-key-row',
                            style: {
                              marginTop: '6.5vh'
                            },
                            children: Object(sd.jsx) ('div', {
                              className: 'control-key',
                              children: 'H'
                            })
                          }),
                          Object(sd.jsx) ('div', {
                            className: 'control-label',
                            children: 'toggle headlights'
                          })
                        ]
                      }),
                      Object(sd.jsxs) ('div', {
                        className: 'control-section',
                        children: [
                          Object(sd.jsx) ('div', {
                            className: 'control-key-row',
                            style: {
                              marginTop: '6.5vh'
                            },
                            children: Object(sd.jsx) ('div', {
                              className: 'control-key',
                              children: 'U'
                            })
                          }),
                          Object(sd.jsx) ('div', {
                            className: 'control-label',
                            children: 'toggle UI'
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        })
      })
    },
    mc = ({
      toggleSplash: e
    }) =>Object(sd.jsx) (sd.Fragment, {
      children: Object(sd.jsx) ('div', {
        className: 'menu-item',
        onMouseDown: () =>e(),
        children: Object(sd.jsx) (ac, {
          src: Zd
        })
      })
    }),
    xc = e=>{
      const [t,
      i] = Object(s.useState) (e.expanded);
      return Object(sd.jsxs) ('div', {
        className: e.highlight ? 'menu-item highlight' : 'menu-item',
        tabIndex: - 1,
        onMouseEnter: () =>{
          var t;
          i(!0),
          null === (t = e.onExpanded) || void 0 === t || t.call(e, !0)
        },
        onMouseLeave: () =>{
          var t;
          i(!1),
          null === (t = e.onExpanded) || void 0 === t || t.call(e, !1)
        },
        children: [
          Object(sd.jsx) (ac, {
            src: e.icon,
            onMouseDown: e.onMouseDown,
            highlight: e.highlight
          }),
          (t || e.expanded) && Object(sd.jsx) (vc, {
            children: e.children
          })
        ]
      })
    },
    vc = e=>Object(sd.jsx) ('div', {
      className: 'menu-stack',
      children: e.children
    }),
    wc = e=>{
      const [t,
      i] = Object(s.useState) (e.expanded || e.pinned);
      return Object(s.useEffect) ((() =>{
        i(e.pinned)
      }), [
        e.pinned
      ]),
      Object(sd.jsxs) ('div', {
        className: e.selected ? 'menu-item item-selected' : 'menu-item',
        onMouseEnter: () =>{
          var t;
          i(!0),
          null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onMouseLeave: () =>{
          var t;
          i(e.pinned),
          null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
        },
        children: [
          Object(sd.jsx) ('img', {
            className: 'menu-icon',
            src: e.icon,
            alt: '',
            onMouseDown: () =>{
              var t;
              return null === (t = e.onMouseDown) || void 0 === t ? void 0 : t.call(e)
            }
          }),
          t && e.children ? Object(sd.jsx) (fc, {
            children: e.children
          }) : Object(sd.jsx) ('div', {
            className: 'stack-label',
            style: e.selected ? {
              color: '#fff'
            }
             : {
            },
            onMouseEnter: () =>i(!0),
            onMouseLeave: () =>i(!1),
            children: e.label
          })
        ]
      })
    },
    fc = e=>Object(sd.jsx) ('div', {
      className: 'stack-row',
      children: e.children
    }),
    bc = e=>Object(sd.jsx) ('div', {
      className: e.selected ? 'stack-row-item item-selected' : 'stack-row-item',
      onMouseDown: () =>{
        var t;
        return null === (t = e.onMouseDown) || void 0 === t ? void 0 : t.call(e)
      },
      children: Object(sd.jsx) (ac, {
        src: e.icon,
        text: e.text
      })
    });
    var Ac = $d;
    i(49);
    const yc = 16,
    Ic = 0.0625;
    class Dc {
      constructor(e, t, i, s) {
        this.origin = {
          x: 0,
          z: 0
        },
        this.seenIndex = 0,
        this.loadedNode = null,
        this.subNode = 0,
        this.angles = [
        ],
        this.pos = {
          x: 0,
          y: 0
        },
        this.onLoadStateBound = this.onLoadState.bind(this),
        this.onTickBound = this.onTick.bind(this),
        this.progressCounter = 0,
        this.tickTimer = 0,
        this.svg = e,
        this.lineDOM = t,
        this.points = this.lineDOM.points,
        this.underlineDOM = i,
        this.uPoints = this.underlineDOM.points,
        this.circleDOM = s,
        this.loadedNode = st.vehicleNode,
        this.seenIndex = st.vehicleNode.i,
        this.baseA = st.vehicleNode.a,
        this.angles.push(this.baseA),
        this.pA = this.baseA,
        this.pos.x = this.loadedNode.p.x,
        this.pos.y = this.loadedNode.p.z,
        d.addListener(this.onLoadStateBound),
        this.onLoadState(d.value)
      }
      onLoadState(e) {
        e ? I.removeSlowListener(this.onTickBound) : I.addSlowListener(this.onTickBound)
      }
      makePoint(e, t) {
        let i = this.svg.createSVGPoint();
        return i.x = e,
        i.y = t,
        i
      }
      destroy() {
        I.removeSlowListener(this.onTickBound),
        d.removeListener(this.onLoadStateBound)
      }
      onTick(e) {
        if (this.lerp = Math.floor(((e, t, i) =>{
          let s,
          n,
          a,
          r,
          h,
          o;
          return a = i.p.x,
          r = i.p.z,
          h = i.next.p.x,
          o = i.next.p.z,
          s = (h - a) * (h - a) + (o - r) * (o - r),
          n = ((e - a) * (h - a) + (t - r) * (o - r)) / s,
          isNaN(n) ? 0 : Math.max(Math.min(n, 1), 0)
        }) (T.position.x, T.position.z, st.vehicleNode) * yc), !(this.loadedNode.i == st.vehicleNode.i + 16 && this.lerp <= this.subNode)) {
          for (; this.loadedNode.i < st.vehicleNode.i + 16; ) {
            for (this.i = this.subNode; this.i < yc; this.i++) this.l = this.i / yc,
            this.l1 = 1 - this.l,
            this.p = this.makePoint(this.loadedNode.p.x * this.l1 + this.loadedNode.next.p.x * this.l, this.loadedNode.p.z * this.l1 + this.loadedNode.next.p.z * this.l),
            this.points.appendItem(this.p),
            this.uPoints.appendItem(this.p),
            this.baseA -= this.loadedNode.next.da * Ic,
            this.angles.push(this.baseA);
            this.loadedNode = this.loadedNode.next,
            this.progressCounter++,
            this.progressCounter > 100 && Math.abs(this.loadedNode.a - this.baseA) < 0.1 && (this.baseA = this.loadedNode.a, this.progressCounter = 0),
            this.subNode = 0
          }
          for (this.i = this.subNode; this.i < this.lerp; this.i++) this.l = this.i / yc,
          this.l1 = 1 - this.l,
          this.p = this.makePoint(this.loadedNode.p.x * this.l1 + this.loadedNode.next.p.x * this.l, this.loadedNode.p.z * this.l1 + this.loadedNode.next.p.z * this.l),
          this.points.appendItem(this.p),
          this.uPoints.appendItem(this.p),
          this.baseA -= this.loadedNode.next.da * Ic,
          this.angles.push(this.baseA);
          for (this.subNode = this.lerp; this.points.length > 256; ) this.points.removeItem(0),
          this.uPoints.removeItem(0),
          this.angles.shift(),
          this.pos = this.points.getItem(0)
        }
        this.pA = 0.95 * this.pA + 0.05 * this.angles[0],
        this.transform = 'rotate(' + (90 - 180 * this.pA / Math.PI) + ')',
        this.transform += ' translate(' + - 1 * this.pos.x + ' ' + - 1 * this.pos.y + ')',
        this.lineDOM.setAttribute('transform', this.transform),
        this.underlineDOM.setAttribute('transform', this.transform),
        this.circleDOM.setAttribute('cx', this.pos.x),
        this.circleDOM.setAttribute('cy', this.pos.y),
        this.circleDOM.setAttribute('transform', this.transform)
      }
    }
    var Nc = n.a.memo((() =>{
      const e = Object(s.useRef) (null),
      t = Object(s.useRef) (null),
      i = Object(s.useRef) (null),
      n = Object(s.useRef) (null),
      a = Object(s.useRef) (null),
      [
        r,
        h
      ] = Object(s.useState) (j.value);
      return Object(s.useEffect) ((() =>{
        if (null !== e.current && null !== t.current && null !== i.current && null !== n.current) return a.current || (a.current = new Dc(e.current, t.current, i.current, n.current)),
        () =>{
          a.current && a.current.destroy()
        }
      }), [
        e,
        t,
        i,
        n,
        a
      ]),
      Object(s.useEffect) ((() =>(j.addListener(h), () =>{
        j.removeListener(h)
      })), [
        h
      ]),
      Object(sd.jsx) ('div', {
        id: 'upcoming-container',
        style: {
          opacity: r ? '0' : '1'
        },
        children: Object(sd.jsx) ('svg', {
          ref: e,
          viewBox: '0 0 160 120',
          width: '100%',
          height: '100%',
          children: Object(sd.jsxs) ('g', {
            transform: 'translate(80 96) scale(-0.5 -0.5)',
            children: [
              Object(sd.jsx) ('polyline', {
                ref: i,
                points: '',
                transform: 'translate(0 0)',
                stroke: '#2224',
                strokeWidth: '24',
                strokeLinecap: 'round',
                fill: 'none'
              }),
              Object(sd.jsx) ('polyline', {
                ref: t,
                points: '',
                transform: 'translate(0 0)',
                stroke: '#fff9',
                strokeWidth: '12',
                strokeLinecap: 'round',
                fill: 'none'
              }),
              Object(sd.jsx) ('circle', {
                ref: n,
                fill: '#444',
                r: '3'
              })
            ]
          })
        })
      })
    }));
    i(50);
    const Mc = {
      edge: {
        title: 'The Edge',
        body: '"What did you expect?"'
      }
    };
    var Cc = () =>{
      const [e,
      t] = Object(s.useState) (null),
      [
        i,
        n
      ] = Object(s.useState) (null);
      return Object(s.useEffect) ((() =>(Vo.addListener('any', t), () =>{
        Vo.removeListener('any', t)
      })), [
        t
      ]),
      Object(s.useEffect) ((() =>{
        e && n(Mc[e])
      }), [
        e,
        n
      ]),
      null !== e && setTimeout((() =>{
        t(null)
      }), 5000),
      Object(sd.jsx) ('div', {
        id: 'achievement',
        className: null !== e ? 'achievement-active' : '',
        children: null != i && Object(sd.jsxs) (sd.Fragment, {
          children: [
            Object(sd.jsx) ('div', {
              id: 'achievement-title',
              children: i.title
            }),
            Object(sd.jsx) ('div', {
              id: 'achievement-body',
              children: i.body
            }),
            Object(sd.jsx) ('div', {
              id: 'achievement-unlocked',
              children: 'achievement unlocked'
            })
          ]
        })
      })
    };
    i(51);
    const jc = e=>{
      if ('number' !== typeof e && (e = parseFloat(e)), e < 60) return e.toFixed(3);
      let t = Math.floor(e / 60);
      return (e = (e - 60 * t).toFixed(3)) < 10 && (e = '0' + e),
      t < 10 && (t = '0' + t),
      t + ':' + e
    },
    kc = ({
      view: e
    }) =>Object(sd.jsxs) ('div', {
      id: 'ui-records-leaderboard',
      children: [
        Object(sd.jsxs) ('div', {
          className: 'ui-records-title',
          children: [
            Object(sd.jsx) ('div', {
              children: 'Records'
            }),
            Object(sd.jsxs) ('div', {
              className: 'ui-records-board-switch',
              children: [
                Object(sd.jsx) ('div', {
                  className: 'ui-records-board-switch-arrow',
                  onMouseDown: () =>$o.switchBoard(),
                  children: '◂'
                }),
                Object(sd.jsx) ('div', {
                  className: 'ui-records-board-switch-value',
                  children: e.board
                }),
                Object(sd.jsx) ('div', {
                  className: 'ui-records-board-switch-arrow',
                  onMouseDown: () =>$o.switchBoard(),
                  children: '▸'
                })
              ]
            }),
            'global' == e.board && Object(sd.jsxs) ('div', {
              className: 'ui-records-board-switch',
              children: [
                Object(sd.jsx) ('div', {
                  className: 'ui-records-board-switch-arrow',
                  onMouseDown: () =>$o.switchTime(),
                  children: '◂'
                }),
                Object(sd.jsx) ('div', {
                  className: 'ui-records-board-switch-value',
                  children: 'allTime' == e.time ? 'all time' : 'daily'
                }),
                Object(sd.jsx) ('div', {
                  className: 'ui-records-board-switch-arrow',
                  onMouseDown: () =>$o.switchTime(),
                  children: '▸'
                })
              ]
            })
          ]
        }),
        'personal' == e.board ? Object(sd.jsx) (zc, {
          topography: e.topography,
          vehicle: e.vehicle
        }) : Object(sd.jsx) (Sc, {
          time: e.time,
          topography: e.topography,
          vehicle: e.vehicle
        })
      ]
    }),
    zc = ({
      topography: e,
      vehicle: t
    }) =>{
      const [i,
      n] = Object(s.useState) (Ko.personal),
      a = Object(s.useCallback) ((e=>{
        n({
          ...e
        })
      }), [
        n
      ]);
      Object(s.useEffect) ((() =>(Ko.addListener('personal', a), () =>{
        Ko.removeListener('personal', a)
      })), [
        a
      ]);
      const r = i[e][t];
      return Object(sd.jsxs) ('div', {
        className: 'ui-records-row',
        children: [
          Object(sd.jsx) ('div', {
            className: 'ui-records-record',
            children: 'Fastest Mile:'
          }),
          Object(sd.jsx) ('div', {
            className: 'ui-records-value',
            children: r < 0 ? '-' : jc(r)
          })
        ]
      })
    },
    Sc = ({
      time: e,
      topography: t,
      vehicle: i
    }) =>{
      var n,
      a;
      const [r,
      h] = Object(s.useState) ($o.global);
      Object(s.useEffect) ((() =>($o.addListener('global', h), () =>{
        $o.removeListener('global', h)
      })), [
        h
      ]);
      let o = null;
      return r && (o = r[e][t][i]),
      o ? Object(sd.jsxs) ('div', {
        className: 'ui-records-row',
        children: [
          Object(sd.jsx) ('div', {
            className: 'ui-records-record',
            children: 'Fastest Mile:'
          }),
          Object(sd.jsx) ('div', {
            className: 'ui-records-value',
            children: (null === (n = o) || void 0 === n || null === (a = n.fastestMile) || void 0 === a ? void 0 : a.value) > 0 ? jc(o.fastestMile.value) : '-'
          }),
          Object(sd.jsx) ('div', {
            className: 'ui-records-addendum',
            children: o.fastestMile.name
          })
        ]
      }) : Object(sd.jsx) ('div', {
        className: 'ui-records-row',
        style: {
          fontStyle: 'italic'
        },
        children: 'Could not connect'
      })
    },
    Oc = e=>{
      const [t,
      i] = Object(s.useState) (Ko.live),
      n = Object(s.useCallback) ((e=>{
        i({
          ...e
        })
      }), [
        i
      ]);
      return Object(s.useEffect) ((() =>(Ko.addListener('live', n), () =>{
        Ko.removeListener('live', n)
      })), [
        n
      ]),
      Object(sd.jsxs) ('div', {
        id: 'ui-records-current',
        children: [
          Object(sd.jsx) ('div', {
            className: 'ui-records-title',
            children: 'Current'
          }),
          Object(sd.jsxs) ('div', {
            className: 'ui-records-row',
            children: [
              Object(sd.jsx) ('div', {
                className: 'ui-records-record',
                children: 'Fastest Mile:'
              }),
              Object(sd.jsx) ('div', {
                className: 'ui-records-value',
                children: t.value < 0 ? '-' : jc(t.value.toFixed(3))
              }),
              Object(sd.jsxs) ('div', {
                className: 'ui-records-addendum',
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'ui-records-progress',
                    children: Object(sd.jsx) ('div', {
                      className: 'ui-records-progress-fill',
                      style: {
                        width: 100 * t.progress + '%'
                      }
                    })
                  }),
                  Object(sd.jsx) ('img', {
                    alt: '',
                    src: gd,
                    className: 'ui-records-reset',
                    onMouseDown: () =>{
                      tl.resetFastestMile()
                    }
                  })
                ]
              })
            ]
          }),
          Object(sd.jsxs) ('div', {
            className: 'ui-records-row',
            children: [
              Object(sd.jsx) ('div', {
                className: 'ui-records-record',
                style: {
                  fontSize: '14px',
                  fontStyle: 'italic'
                },
                children: 'previous:'
              }),
              Object(sd.jsx) ('div', {
                className: 'ui-records-value',
                style: {
                  fontSize: '12px'
                },
                children: t.prev <= 0 ? '-' : jc(t.prev)
              }),
              Object(sd.jsx) ('div', {
                className: 'ui-records-addendum',
                style: {
                  fontSize: '10px'
                }
              })
            ]
          })
        ]
      })
    };
    var Lc = e=>{
      var t;
      const [i,
      n] = Object(s.useState) (el.value),
      [
        a,
        r
      ] = Object(s.useState) ($o.view);
      return Object(s.useEffect) ((() =>(el.addListener(n), () =>{
        el.removeListener(n)
      })), [
      ]),
      Object(s.useEffect) ((() =>($o.addListener('view', r), () =>{
        $o.removeListener('view', r)
      })), [
        r
      ]),
      i ? Object(sd.jsxs) ('div', {
        id: 'ui-records-main',
        children: [
          Object(sd.jsxs) ('div', {
            id: 'ui-records-header',
            children: [
              Object(sd.jsx) ('div', {
                id: 'ui-records-title',
                children: 'STATS'
              }),
              Object(sd.jsx) ('div', {
                id: 'ui-records-category',
                children: a.topography + ' / ' + (null === (t = a.vehicle) || void 0 === t ? void 0 : t.toLowerCase())
              })
            ]
          }),
          Object(sd.jsx) (kc, {
            view: a
          }),
          Object(sd.jsx) ('br', {
          }),
          Object(sd.jsx) (Oc, {
          })
        ]
      }) : Object(sd.jsx) (sd.Fragment, {
        children: ' '
      })
    };
    const Rc = 'reloading';
    let Tc = !1;
    if (!Bh.newUser) try {
      let e = JSON.parse(Bh.lastActiveTime);
      Tc = Date.now() - e < 30000
    } catch (Kc) {
    }
    const Pc = !(Tc || null !== window.localStorage.getItem(Rc));
    window.localStorage.removeItem(Rc);
    const Gc = n.a.memo((() =>{
      const e = Object(s.useRef) (null),
      t = Object(s.useRef) (null),
      i = Object(s.useRef) (null),
      [
        n,
        a
      ] = Object(s.useState) (Pc),
      [
        r,
        h
      ] = Object(s.useState) (!0),
      [
        o,
        l
      ] = Object(s.useState) (0),
      [
        d,
        c
      ] = Object(s.useState) (null),
      [
        g,
        x
      ] = Object(s.useState) (!Pc),
      [
        v,
        w
      ] = Object(s.useState) (!1),
      f = Object(s.useCallback) ((() =>{
        n ? I.resume(!0) : I.pause(!0),
        !g && n && x(!0),
        a(!n)
      }), [
        a,
        n,
        x,
        g
      ]),
      b = Object(s.useCallback) ((() =>{
        h(!r)
      }), [
        h,
        r
      ]);
      Object(s.useEffect) ((() =>(p.addListener(u.Esc, f), () =>{
        p.removeListener(u.Esc, f)
      })), [
        f
      ]),
      Object(s.useEffect) ((() =>(p.addListener(u.UI, b), () =>{
        p.removeListener(u.UI, b)
      })), [
        b
      ]),
      Object(s.useEffect) ((() =>(A.addListener(w), () =>{
        A.removeListener(w)
      })), [
        w
      ]),
      Object(s.useEffect) ((() =>{
        if (null === e.current || null === t.current) return;
        if (new ResizeObserver((t=>{
          i.current && e.current && i.current.setSize(e.current.offsetWidth, e.current.offsetHeight)
        })).observe(e.current), !i.current && g) {
          if (m) return;
          i.current = new ql(t.current, e.current, c, l),
          console.log('Making new sceneController and beginning'),
          i.current.beginGame()
        }
        return () =>{
          i.current
        }
      }), [
        g
      ]);
      const y = o < 1;
      return Object(sd.jsxs) ('div', {
        id: 'game-main',
        ref: e,
        tabIndex: 1,
        className: 'render-panel',
        children: [
          n && Object(sd.jsx) (cd, {
            supported: !m,
            loadProgress: o,
            gameHasBegun: g,
            onClose: () =>{
              var e;
              f(),
              null === (e = i.current) || void 0 === e || e.beginGame()
            }
          }),
          null !== d && Object(sd.jsx) (Fc, {
            msg: d
          }),
          Object(sd.jsxs) ('div', {
            id: 'update-alert',
            onMouseDown: e=>{
              e.target.style.display = 'none'
            },
            children: [
              Object(sd.jsx) ('div', {
                className: 'update-alert-title',
                children: 'New version available!'
              }),
              'Update with a hard refresh',
              Object(sd.jsx) ('br', {
              }),
              '(CTRL + F5)'
            ]
          }),
          g && Object(sd.jsxs) ('div', {
            id: 'game-ui',
            style: {
              display: n || !r ? 'none' : 'block'
            },
            onContextMenu: e=>{
              e.preventDefault()
            },
            children: [
              Object(sd.jsx) (Ec, {
              }),
              Object(sd.jsx) (Cc, {
              }),
              Object(sd.jsx) (Zc, {
                sceneController: i
              }),
              Object(sd.jsx) ('div', {
                id: 'game-paused',
                onClick: () =>{
                  v ? A.disable() : I.resume(!0)
                },
                children: 1 == v ? Object(sd.jsxs) ('div', {
                  className: 'game-paused-ha',
                  children: [
                    'Critically low FPS detected - check you have hardware acceleration enabled for your browser.',
                    Object(sd.jsx) ('br', {
                    }),
                    Object(sd.jsx) ('br', {
                    }),
                    'You may have to check your browser settings, GPU control panel, or OS settings for your browser application.',
                    Object(sd.jsx) ('br', {
                    }),
                    Object(sd.jsx) ('br', {
                    }),
                    'Refresh the page to dismiss this message.',
                    Object(sd.jsx) ('br', {
                    })
                  ]
                }) : Object(sd.jsx) ('div', {
                  className: 'game-paused-main',
                  children: 'PAUSED'
                })
              }),
              Object(sd.jsx) (Lc, {
              }),
              Object(sd.jsx) (Wc, {
              }),
              Object(sd.jsx) (Ac, {
                toggleSplash: f
              }),
              Object(sd.jsx) (bd, {
              }),
              y ? Object(sd.jsx) (Bc, {
                loadProgress: o
              }) : Object(sd.jsx) (Nc, {
              }),
              Object(sd.jsx) ('div', {
                id: 'game-ui-backing'
              })
            ]
          }),
          Object(sd.jsxs) ('div', {
            id: 'ui-debug',
            children: [
              Object(sd.jsxs) ('div', {
                className: 'ui-debug-row',
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'ui-debug-label',
                    children: 'Position:'
                  }),
                  Object(sd.jsx) ('div', {
                    id: 'ui-debug-position',
                    children: '1, 2, 3'
                  })
                ]
              }),
              Object(sd.jsxs) ('div', {
                className: 'ui-debug-row',
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'ui-debug-label',
                    children: 'Far Coords:'
                  }),
                  Object(sd.jsx) ('div', {
                    id: 'ui-debug-far-coords',
                    children: '1, 2, 3'
                  })
                ]
              }),
              Object(sd.jsxs) ('div', {
                className: 'ui-debug-row',
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'ui-debug-label',
                    children: 'Vehicle Node:'
                  }),
                  Object(sd.jsx) ('div', {
                    id: 'ui-debug-node',
                    children: '1'
                  })
                ]
              }),
              Object(sd.jsxs) ('div', {
                className: 'ui-debug-row',
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'ui-debug-label',
                    children: 'Midline Tail:'
                  }),
                  Object(sd.jsx) ('div', {
                    id: 'ui-debug-midline-tail',
                    children: '123'
                  })
                ]
              }),
              Object(sd.jsx) ('hr', {
              })
            ]
          }),
          Object(sd.jsx) ('canvas', {
            ref: t,
            className: 'render-canvas',
            tabIndex: - 1,
            onContextMenu: e=>{
              e.preventDefault()
            }
          })
        ]
      })
    })),
    Bc = ({
      loadProgress: e
    }) =>Object(sd.jsx) ('div', {
      id: 'live-loader-bg',
      children: Object(sd.jsxs) ('div', {
        id: 'live-loader',
        children: [
          Object(sd.jsx) ('div', {
            className: 'live-load-text',
            children: Math.round(100 * e) + '%'
          }),
          Object(sd.jsx) ('div', {
            className: 'live-load-bar',
            style: {
              width: 100 * e + '%'
            }
          }),
          Object(sd.jsx) ('div', {
            className: 'live-load-title',
            children: 'generating...'
          })
        ]
      })
    }),
    Wc = () =>{
      const [e,
      t] = Object(s.useState) (j.value);
      return Object(s.useEffect) ((() =>(j.addListener(t), () =>{
        j.removeListener(t)
      })), [
        t
      ]),
      Object(sd.jsxs) ('div', {
        id: 'autodrive',
        className: e ? 'autodrive-active' : '',
        onMouseDown: () =>j.set(!e),
        children: [
          Object(sd.jsx) ('div', {
            className: e ? 'autodrive-bar autodrive-bar-left autodrive-bar-active' : 'autodrive-bar autodrive-bar-left'
          }),
          Object(sd.jsxs) ('div', {
            id: 'autodrive-button',
            children: [
              'autodrive ',
              e ? 'on' : 'off'
            ]
          }),
          Object(sd.jsx) ('div', {
            className: e ? 'autodrive-bar autodrive-bar-right autodrive-bar-active' : 'autodrive-bar autodrive-bar-right'
          })
        ]
      })
    },
    Ec = () =>{
      const [e,
      t] = Object(s.useState) (hl.value),
      [
        i,
        n
      ] = Object(s.useState) (hl.value);
      return Object(s.useEffect) ((() =>(hl.addListener(t), () =>{
        hl.removeListener(t)
      })), [
        t
      ]),
      Object(s.useEffect) ((() =>{
        e !== il.None && n(e)
      }), [
        e,
        n
      ]),
      Object(sd.jsxs) ('div', {
        id: 'control-prompt',
        style: {
          opacity: hl.value
        },
        children: [
          i == il.Basic && Object(sd.jsxs) (sd.Fragment, {
            children: [
              Object(sd.jsxs) ('div', {
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'control-key-row',
                    children: Object(sd.jsx) ('div', {
                      className: 'control-key',
                      children: 'W'
                    })
                  }),
                  Object(sd.jsxs) ('div', {
                    className: 'control-key-row',
                    children: [
                      Object(sd.jsx) ('div', {
                        className: 'control-key',
                        children: 'A'
                      }),
                      Object(sd.jsx) ('div', {
                        className: 'control-key',
                        children: 'S'
                      }),
                      Object(sd.jsx) ('div', {
                        className: 'control-key',
                        children: 'D'
                      })
                    ]
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'control-label',
                    children: 'drive'
                  })
                ]
              }),
              Object(sd.jsxs) ('div', {
                style: {
                  width: '18vh'
                },
                children: [
                  Object(sd.jsxs) ('div', {
                    className: 'control-key-row',
                    style: {
                      marginTop: '5.8vh'
                    },
                    children: [
                      Object(sd.jsx) ('div', {
                        className: 'control-key',
                        children: 'Q'
                      }),
                      Object(sd.jsx) ('div', {
                        className: 'control-key',
                        children: 'E'
                      })
                    ]
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'control-label',
                    children: 'change setting'
                  })
                ]
              }),
              Object(sd.jsxs) ('div', {
                style: {
                  width: '18vh'
                },
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'control-key-row',
                    style: {
                      marginTop: '5.8vh'
                    },
                    children: Object(sd.jsx) ('div', {
                      className: 'control-key',
                      children: 'C'
                    })
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'control-label',
                    children: 'change camera'
                  })
                ]
              }),
              Object(sd.jsxs) ('div', {
                style: {
                  width: '18vh'
                },
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'control-key-row',
                    style: {
                      marginTop: '5.8vh'
                    },
                    children: Object(sd.jsx) ('div', {
                      className: 'control-key',
                      children: 'F'
                    })
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'control-label',
                    children: 'toggle autodrive'
                  })
                ]
              })
            ]
          }),
          i == il.Reset && Object(sd.jsxs) ('div', {
            style: {
              width: '18vh'
            },
            children: [
              Object(sd.jsx) ('div', {
                className: 'control-key-row',
                style: {
                  marginTop: '6.5vh'
                },
                children: Object(sd.jsx) ('div', {
                  className: 'control-key',
                  children: 'R'
                })
              }),
              Object(sd.jsx) ('div', {
                className: 'control-label',
                children: 'stay on the road'
              })
            ]
          }),
          i == il.Boost && Object(sd.jsxs) ('div', {
            style: {
              width: '18vh'
            },
            children: [
              Object(sd.jsx) ('div', {
                className: 'control-key-row',
                style: {
                  marginTop: '6.5vh'
                },
                children: Object(sd.jsx) ('div', {
                  className: 'control-key',
                  style: {
                    width: '8vh'
                  },
                  children: 'shift'
                })
              }),
              Object(sd.jsx) ('div', {
                className: 'control-label',
                children: 'hold to boost acceleration'
              })
            ]
          }),
          i == il.UTurn && Object(sd.jsxs) ('div', {
            style: {
              width: '18vh'
            },
            children: [
              Object(sd.jsx) ('div', {
                className: 'control-key-row',
                style: {
                  marginTop: '6.5vh'
                },
                children: Object(sd.jsx) ('img', {
                  id: 'wrong-way-icon',
                  src: _l,
                  alt: ''
                })
              }),
              Object(sd.jsx) ('div', {
                className: 'control-label',
                children: 'wrong way'
              })
            ]
          }),
          i == il.Reverse && Object(sd.jsxs) ('div', {
            style: {
              width: '18vh'
            },
            children: [
              Object(sd.jsx) ('div', {
                className: 'control-key-row',
                style: {
                  marginTop: '6.5vh'
                },
                children: Object(sd.jsx) ('img', {
                  id: 'wrong-way-icon',
                  src: $l,
                  alt: ''
                })
              }),
              Object(sd.jsx) ('div', {
                className: 'control-label',
                children: 'keep moving forward'
              })
            ]
          })
        ]
      })
    },
    Zc = ({
      sceneController: e
    }) =>{
      const [t,
      i] = Object(s.useState) (Rh.input);
      Object(s.useEffect) ((() =>(Rh.addListener('input', i), () =>Rh.removeListener('input', i))), [
        i
      ]);
      const n = t == jh;
      return Object(sd.jsxs) ('div', {
        id: 'ui-mouse',
        style: {
          bottom: 'calc(' + Fo.mouseWidgetHeight + 'vh + 25px)',
          display: n ? 'block' : 'none'
        },
        children: [
          Object(sd.jsx) ('div', {
            id: 'ui-mouse-prompt',
            children: '[ click to begin ]'
          }),
          Object(sd.jsxs) ('div', {
            id: 'ui-mouse-input',
            children: [
              Object(sd.jsxs) ('div', {
                className: 'ui-mouse-bar',
                children: [
                  Object(sd.jsx) ('div', {
                    className: 'ui-mouse-bar-line'
                  }),
                  Object(sd.jsx) ('div', {
                    className: 'ui-mouse-bar-midline'
                  })
                ]
              }),
              Object(sd.jsx) ('div', {
                id: 'ui-mouse-bar-marker',
                children: Object(sd.jsx) ('div', {
                  className: 'ui-mouse-bar-marker-tick'
                })
              })
            ]
          }),
          Object(sd.jsx) ('div', {
            className: 'ui-mouse-bar-boundary'
          }),
          Object(sd.jsx) ('div', {
            className: 'ui-mouse-reset',
            onMouseDown: t=>{
              var i;
              null === (i = e.current) || void 0 === i || i.resetVehicle(),
              t.preventDefault(),
              t.stopPropagation()
            },
            children: 'reset'
          })
        ]
      })
    },
    Fc = ({
      msg: e
    }) =>Object(sd.jsxs) ('div', {
      id: 'game-error',
      children: [
        Object(sd.jsx) ('img', {
          id: 'game-error-icon',
          src: Kl,
          alt: ''
        }),
        Object(sd.jsx) ('br', {
        }),
        Object(sd.jsx) ('br', {
        }),
        Object(sd.jsx) ('div', {
          id: 'game-error-title',
          children: 'Critical Error'
        }),
        Object(sd.jsx) ('br', {
        }),
        Object(sd.jsxs) ('div', {
          id: 'game-error-message',
          children: [
            'Apologies - please click below to continue with a different generation seed. Your distance progress will carry over.',
            Object(sd.jsx) ('br', {
            }),
            Object(sd.jsx) ('br', {
            }),
            'This error has been recorded for investigation.'
          ]
        }),
        Object(sd.jsx) ('br', {
        }),
        Object(sd.jsx) ('br', {
        }),
        Object(sd.jsx) ('div', {
          id: 'game-error-reload',
          onMouseDown: () =>{
            window.localStorage.setItem('restore-progress', st.vehicleIndex - st.initIndex + wh.accumulatedProgress),
            qe(null, !0)
          },
          children: 'reload'
        })
      ]
    });
    var Hc = Gc;
    const Qc = () =>Object(sd.jsx) ('div', {
      className: 'App',
      children: Object(sd.jsx) (Hc, {
      })
    });
    var Yc = function () {
      return Object(sd.jsx) (Qc, {
      })
    };
    i(27),
    i(3),
    i(52);
    sd.Fragment,
    sd.Fragment,
    sd.Fragment;
    i(53);
    const Vc = {
      sessionCount: 0,
      pastSessionCount: 0,
      averages: {
        duration: 0,
        distance: 0,
        resetCount: 0,
        skins: {
        },
        difficultyResets: {
          easy: 0,
          normal: 0,
          hard: 0
        },
        skinChanges: 0,
        weatherChanges: 0,
        vehicleChanges: 0,
        driveModeChanges: 0,
        cruiseControlSpeed: 0,
        fps: 0,
        autodriveTime: 0
      },
      maxes: {
        duration: 0,
        distance: 0
      },
      cumulatives: {
        difficulty: {
          easy: 0,
          normal: 0,
          hard: 0
        },
        totalVisits: 0,
        viewDistance: [
        ],
        detailLevel: [
        ],
        returningPlayers: 0,
        revisits: 0,
        skinTimes: {
        },
        driveModeTimes: {
        },
        stickySteer: 0,
        cruiseControlUses: 0,
        browser: {
        },
        hourlyVisits: [
        ],
        lowFPS: 0,
        lowFPSBrowser: {
        },
        lowFPSResolution: {
        },
        lowFPSView: [
          0,
          0,
          0,
          0
        ],
        lowFPSDetail: [
          0,
          0,
          0,
          0
        ],
        location: {
        }
      },
      poorPerformance: [
      ],
      activeSessions: {
      },
      feedback: [
      ],
      quarterlyActiveSessions: [
      ],
      quarterlyCumulativeSessions: [
      ],
      pastSessions: [
      ],
      upTime: 0
    };
    new class {
      constructor() {
        this.connected = !1,
        this.sessionCount = 0,
        this.pastSessionCount = 0,
        this.averages = {
          duration: 0,
          distance: 0,
          resetCount: 0,
          skins: {
          },
          difficultyResets: {
            easy: 0,
            normal: 0,
            hard: 0
          },
          skinChanges: 0,
          weatherChanges: 0,
          vehicleChanges: 0,
          driveModeChanges: 0,
          autodriveTime: 0
        },
        this.maxes = {
          duration: 0,
          distance: 0
        },
        this.cumulatives = {
          totalVisits: 0,
          revisits: 0,
          mobileVisits: 0,
          returningPlayers: 0,
          difficulty: {
            easy: 0,
            normal: 0,
            hard: 0
          },
          viewDistance: [
          ],
          detailLevel: [
          ],
          skinTimes: {
          },
          driveModeTimes: {
          },
          hourlyVisits: [
          ],
          browser: {
          }
        },
        this.activeSessions = {
        },
        this.feedback = [
        ],
        this.quarterlyActiveSessions = [
        ],
        this.quarterlyCumulativeSessions = [
        ],
        this.poorPerformance = [
        ],
        this.pastSessions = [
        ],
        this.upTime = 0,
        this.callbacks = {
        },
        this.setConnected = () =>{
        };
        for (let e in Vc) this.callbacks[e] = () =>{
        }
      }
      initialise() {
        this.connected || (console.log('yada yada'), this.socket = Object(_e.a) (Yh), this.socket.on('connect', (() =>{
          console.log('Got connect'),
          this.socket.emit('request-dash', window.location.hash.slice(1))
        })), this.socket.on('connect_error', (() =>{
          this.setConnected(!1)
        })), this.socket.on('disconnect', (() =>{
          this.setConnected(!1)
        })), this.socket.on('authenticated', (e=>{
          console.log('Authenticated'),
          console.log(e),
          this.connected = !0,
          this.setConnected(!0),
          this.parseData(e)
        })), this.socket.on('dash-update', (e=>{
          this.parseData(e)
        })))
      }
      parseData(e) {
        for (let t in e) 'dashSessionCount' !== t && 'dashSessions' !== t && (this[t] = e[t], 'averages' == t && (e.averages.autodriveTime = Uc(e.averages.autodriveTime), e.averages.duration = Uc(e.averages.duration)), this.callbacks[t](this[t]))
      }
      addCallback(e, t) {
        this.callbacks[e] = t
      }
    };
    function Uc(e) {
      let t = e / 1000,
      i = t / 60;
      t %= 60;
      let s = i / 60;
      return i %= 60,
      Xc(Math.floor(s)) + ':' + Xc(Math.floor(i)) + ':' + Xc(Math.floor(t))
    }
    function Xc(e) {
      return e < 10 ? '0' + e : '' + e
    }
    const Jc = {
      layer: 0,
      d: 0,
      h: 0,
      sq: 0,
      sqb: 0,
      wx: 0,
      wz: 0,
      ox: 0,
      oz: 0,
      px: 0,
      pz: 0,
      cell: null,
      ix: 0,
      iz: 0,
      depth: 0
    };
    new h.Q({
      uniforms: {
        groundCol: {
          value: new h.i(4473924)
        }
      },
      vertexShader: '\n  attribute float gradient;\n\n  varying vec4 col;\n\n  varying float height;\n  varying float vGradient;\n\n  void main() {\n    vec4 wPos = modelMatrix * vec4( position, 1.0 );\n\n    // col.x = 0.5;\n    // col.y = wPos.y / 1000.0; // Height range between black and white // doesn\'t get used\n    // col.z = 0.5;\n    // col.w = 1.0;\n\n    height = wPos.y / 200.0; // clamp between 0 and 1 if possible? choose something matched to scene, 200m max range\n\n    vGradient = gradient;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position.x, 0.0, position.z, 1.0 );\n  }\n',
      fragmentShader: '\n\nvarying vec4 col;\nvarying float height;\nvarying float vGradient;\n\nvoid main() {\n\n  float hh = mod(height * 200.0, 5.0); // mod is spacing between lines, height converted back to metres\n\n  // swap - and pos tan for whack art\n  // Use atan for more accurate version\n\n  float boundA = 0.1 + vGradient * 0.25;// + tan(vGradient);//*vGradient*0.25;\n\n  float addB = 0.1 + vGradient * 0.25;\n  float boundB = 5.0 - addB;\n\n  if(hh < boundA) {\n    if(hh < boundA * 0.6) {\n      hh = 0.0;\n    } else {\n      hh = (hh - boundA * 0.6) / (boundA * 0.4);\n    }\n  } else if(hh > boundB) {\n    if(hh > 5.0 - (addB * 0.4)) {\n      hh = 1.0 - (hh - (addB * 0.4)) / (addB * 0.6);\n    } else {\n      hh = 1.0;\n    }\n  } else {\n    hh = 1.0;\n  }\n\n  vec3 base = vec3(0.0, 0.0, 0.0);\n  // vec3 base = vec3(height);\n  vec3 topo = vec3(hh, hh, hh);\n\n  gl_FragColor = vec4(mix(base, topo, 1.0), 1.0);\n}\n\n'
    }),
    new h.a(16777215, 0.1),
    new h.s(16777215, 16777215, 0.2),
    new h.j(16777215, 0.6);
    var qc = e=>{
      e && e instanceof Function && i.e(3).then(i.bind(null, 55)).then((({
        getCLS: t,
        getFID: i,
        getFCP: s,
        getLCP: n,
        getTTFB: a
      }) =>{
        t(e),
        i(e),
        s(e),
        n(e),
        a(e)
      }))
    };
    r.a.render(Object(sd.jsx) (n.a.StrictMode, {
      children: Object(sd.jsx) (Yc, {
      })
    }), document.getElementById('root')),
    qc()
  }
],
[
  [54,
  1,
  2]
]]);
