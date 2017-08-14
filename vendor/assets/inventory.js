/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.loaded = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }


/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";

/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(riot) {'use strict';

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  __webpack_require__(46);

  __webpack_require__(47);

  __webpack_require__(343);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  riot.settings.brackets = '[ ]';

  var Inventory = function (_HTMLElement) {
    _inherits(Inventory, _HTMLElement);

    function Inventory() {
      _classCallCheck(this, Inventory);

      var _this = _possibleConstructorReturn(this, (Inventory.__proto__ || Object.getPrototypeOf(Inventory)).call(this));

      _this._instance = null;

      // Disabled for android
      // var root = this.attachShadow({ mode: 'open' });
      // root.innerHTML = `<slot></slot>`;
      return _this;
    }

    _createClass(Inventory, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
          case 'menu-id':
            this._menuId = newValue;
            break;

          case 'menu-api-key':
            this._menuApiKey = newValue;
            break;

          case 'default-header':
            this._defaultHeader = newValue === "" || JSON.parse(newValue);
            break;

          case 'default-group-header':
            this._defaultGroupHeader = newValue === "" || JSON.parse(newValue);
            break;

          case 'default-item':
            this._defaultItem = newValue === "" || JSON.parse(newValue);
            break;

          case 'filterable':
            this._filterable = newValue === "" || JSON.parse(newValue);
            break;

          case 'auto-scroll':
            this._autoScroll = newValue === "" || JSON.parse(newValue);
            break;

          case 'scroll-interval':
            this._scrollInterval = newValue;
            break;

          case 'x-gb-signature':
            this._xGBSignature = newValue;
            break;
        }

        if (this._menuId && this._menuApiKey) {
          this._updateRendering();
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        this._updateRendering();
      }
    }, {
      key: '_getOpts',
      value: function _getOpts() {
        return {
          menuId: this._menuId,
          menuApiKey: this._menuApiKey,
          defaultHeader: this._defaultHeader || false,
          defaultGroupHeader: this._defaultGroupHeader || false,
          defaultItem: this._defaultItem || false,
          filterable: this._filterable || false,
          autoScroll: this._autoScroll || false,
          scrollInterval: this._scrollInterval || 5000,
          xGBSignature: this._xGBSignature || null
        };
      }
    }, {
      key: '_updateRendering',
      value: function _updateRendering() {
        if (this._instance) {
          this._instance.update(this._getOpts());
        } else if (this._menuId && this.querySelector('div')) {
          var tags = riot.mount(this.querySelector('div'), 'inventory', this._getOpts());
          this._instance = tags[0];
        }
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['menu-id', 'menu-api-key', 'x-gb-signature', 'default-header', 'default-group-header', 'default-item', 'filterable', 'auto-scroll', 'scroll-interval'];
      }
    }]);

    return Inventory;
  }(HTMLElement);

  customElements.define('inventory-list', Inventory);
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

  // shim for using process in browser
  var process = module.exports = {};

  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.

  var cachedSetTimeout;
  var cachedClearTimeout;

  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  (function () {
      try {
          if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
          } else {
              cachedSetTimeout = defaultSetTimout;
          }
      } catch (e) {
          cachedSetTimeout = defaultSetTimout;
      }
      try {
          if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
          } else {
              cachedClearTimeout = defaultClearTimeout;
          }
      } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
      }
  } ())
  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }



  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }

  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  };

  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};

  function noop() {}

  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;

  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };

  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };


/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__;/* Riot v2.6.7, @license MIT */

  ;(function(window, undefined) {
    'use strict';
  var riot = { version: 'v2.6.7', settings: {} },
    // be aware, internal usage
    // ATTENTION: prefix the global dynamic variables with `__`

    // counter to give a unique id to all the Tag instances
    __uid = 0,
    // tags instances cache
    __virtualDom = [],
    // tags implementation cache
    __tagImpl = {},

    /**
     * Const
     */
    GLOBAL_MIXIN = '__global_mixin',

    // riot specific prefixes
    RIOT_PREFIX = 'riot-',
    RIOT_TAG = RIOT_PREFIX + 'tag',
    RIOT_TAG_IS = 'data-is',

    // for typeof == '' comparisons
    T_STRING = 'string',
    T_OBJECT = 'object',
    T_UNDEF  = 'undefined',
    T_FUNCTION = 'function',
    XLINK_NS = 'http://www.w3.org/1999/xlink',
    XLINK_REGEX = /^xlink:(\w+)/,
    // special native tags that cannot be treated like the others
    SPECIAL_TAGS_REGEX = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
    RESERVED_WORDS_BLACKLIST = /^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,
    // SVG tags list https://www.w3.org/TR/SVG/attindex.html#PresentationAttributes
    SVG_TAGS_LIST = ['altGlyph', 'animate', 'animateColor', 'circle', 'clipPath', 'defs', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feFlood', 'feGaussianBlur', 'feImage', 'feMerge', 'feMorphology', 'feOffset', 'feSpecularLighting', 'feTile', 'feTurbulence', 'filter', 'font', 'foreignObject', 'g', 'glyph', 'glyphRef', 'image', 'line', 'linearGradient', 'marker', 'mask', 'missing-glyph', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'tref', 'tspan', 'use'],

    // version# for IE 8-11, 0 for others
    IE_VERSION = (window && window.document || {}).documentMode | 0,

    // detect firefox to fix #1374
    FIREFOX = window && !!window.InstallTrigger
  /* istanbul ignore next */
  riot.observable = function(el) {

    /**
     * Extend the original object or create a new empty one
     * @type { Object }
     */

    el = el || {}

    /**
     * Private variables
     */
    var callbacks = {},
      slice = Array.prototype.slice

    /**
     * Private Methods
     */

    /**
     * Helper function needed to get and loop all the events in a string
     * @param   { String }   e - event string
     * @param   {Function}   fn - callback
     */
    function onEachEvent(e, fn) {
      var es = e.split(' '), l = es.length, i = 0
      for (; i < l; i++) {
        var name = es[i]
        if (name) fn(name, i)
      }
    }

    /**
     * Public Api
     */

    // extend the el object adding the observable methods
    Object.defineProperties(el, {
      /**
       * Listen to the given space separated list of `events` and
       * execute the `callback` each time an event is triggered.
       * @param  { String } events - events ids
       * @param  { Function } fn - callback function
       * @returns { Object } el
       */
      on: {
        value: function(events, fn) {
          if (typeof fn != 'function')  return el

          onEachEvent(events, function(name, pos) {
            (callbacks[name] = callbacks[name] || []).push(fn)
            fn.typed = pos > 0
          })

          return el
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Removes the given space separated list of `events` listeners
       * @param   { String } events - events ids
       * @param   { Function } fn - callback function
       * @returns { Object } el
       */
      off: {
        value: function(events, fn) {
          if (events == '*' && !fn) callbacks = {}
          else {
            onEachEvent(events, function(name, pos) {
              if (fn) {
                var arr = callbacks[name]
                for (var i = 0, cb; cb = arr && arr[i]; ++i) {
                  if (cb == fn) arr.splice(i--, 1)
                }
              } else delete callbacks[name]
            })
          }
          return el
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Listen to the given space separated list of `events` and
       * execute the `callback` at most once
       * @param   { String } events - events ids
       * @param   { Function } fn - callback function
       * @returns { Object } el
       */
      one: {
        value: function(events, fn) {
          function on() {
            el.off(events, on)
            fn.apply(el, arguments)
          }
          return el.on(events, on)
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Execute all callback functions that listen to
       * the given space separated list of `events`
       * @param   { String } events - events ids
       * @returns { Object } el
       */
      trigger: {
        value: function(events) {

          // getting the arguments
          var arglen = arguments.length - 1,
            args = new Array(arglen),
            fns

          for (var i = 0; i < arglen; i++) {
            args[i] = arguments[i + 1] // skip first argument
          }

          onEachEvent(events, function(name, pos) {

            fns = slice.call(callbacks[name] || [], 0)

            for (var i = 0, fn; fn = fns[i]; ++i) {
              if (fn.busy) continue
              fn.busy = 1
              fn.apply(el, fn.typed ? [name].concat(args) : args)
              if (fns[i] !== fn) { i-- }
              fn.busy = 0
            }

            if (callbacks['*'] && name != '*')
              el.trigger.apply(el, ['*', name].concat(args))

          })

          return el
        },
        enumerable: false,
        writable: false,
        configurable: false
      }
    })

    return el

  }
  /* istanbul ignore next */
  ;(function(riot) {

  /**
   * Simple client-side router
   * @module riot-route
   */


  var RE_ORIGIN = /^.+?\/\/+[^\/]+/,
    EVENT_LISTENER = 'EventListener',
    REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
    ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
    HAS_ATTRIBUTE = 'hasAttribute',
    REPLACE = 'replace',
    POPSTATE = 'popstate',
    HASHCHANGE = 'hashchange',
    TRIGGER = 'trigger',
    MAX_EMIT_STACK_LEVEL = 3,
    win = typeof window != 'undefined' && window,
    doc = typeof document != 'undefined' && document,
    hist = win && history,
    loc = win && (hist.location || win.location), // see html5-history-api
    prot = Router.prototype, // to minify more
    clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
    started = false,
    central = riot.observable(),
    routeFound = false,
    debouncedEmit,
    base, current, parser, secondParser, emitStack = [], emitStackLevel = 0

  /**
   * Default parser. You can replace it via router.parser method.
   * @param {string} path - current path (normalized)
   * @returns {array} array
   */
  function DEFAULT_PARSER(path) {
    return path.split(/[/?#]/)
  }

  /**
   * Default parser (second). You can replace it via router.parser method.
   * @param {string} path - current path (normalized)
   * @param {string} filter - filter string (normalized)
   * @returns {array} array
   */
  function DEFAULT_SECOND_PARSER(path, filter) {
    var re = new RegExp('^' + filter[REPLACE](/\*/g, '([^/?#]+?)')[REPLACE](/\.\./, '.*') + '$'),
      args = path.match(re)

    if (args) return args.slice(1)
  }

  /**
   * Simple/cheap debounce implementation
   * @param   {function} fn - callback
   * @param   {number} delay - delay in seconds
   * @returns {function} debounced function
   */
  function debounce(fn, delay) {
    var t
    return function () {
      clearTimeout(t)
      t = setTimeout(fn, delay)
    }
  }

  /**
   * Set the window listeners to trigger the routes
   * @param {boolean} autoExec - see route.start
   */
  function start(autoExec) {
    debouncedEmit = debounce(emit, 1)
    win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit)
    win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit)
    doc[ADD_EVENT_LISTENER](clickEvent, click)
    if (autoExec) emit(true)
  }

  /**
   * Router class
   */
  function Router() {
    this.$ = []
    riot.observable(this) // make it observable
    central.on('stop', this.s.bind(this))
    central.on('emit', this.e.bind(this))
  }

  function normalize(path) {
    return path[REPLACE](/^\/|\/$/, '')
  }

  function isString(str) {
    return typeof str == 'string'
  }

  /**
   * Get the part after domain name
   * @param {string} href - fullpath
   * @returns {string} path from root
   */
  function getPathFromRoot(href) {
    return (href || loc.href)[REPLACE](RE_ORIGIN, '')
  }

  /**
   * Get the part after base
   * @param {string} href - fullpath
   * @returns {string} path from base
   */
  function getPathFromBase(href) {
    return base[0] == '#'
      ? (href || loc.href || '').split(base)[1] || ''
      : (loc ? getPathFromRoot(href) : href || '')[REPLACE](base, '')
  }

  function emit(force) {
    // the stack is needed for redirections
    var isRoot = emitStackLevel == 0, first
    if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) return

    emitStackLevel++
    emitStack.push(function() {
      var path = getPathFromBase()
      if (force || path != current) {
        central[TRIGGER]('emit', path)
        current = path
      }
    })
    if (isRoot) {
      while (first = emitStack.shift()) first() // stack increses within this call
      emitStackLevel = 0
    }
  }

  function click(e) {
    if (
      e.which != 1 // not left click
      || e.metaKey || e.ctrlKey || e.shiftKey // or meta keys
      || e.defaultPrevented // or default prevented
    ) return

    var el = e.target
    while (el && el.nodeName != 'A') el = el.parentNode

    if (
      !el || el.nodeName != 'A' // not A tag
      || el[HAS_ATTRIBUTE]('download') // has download attr
      || !el[HAS_ATTRIBUTE]('href') // has no href attr
      || el.target && el.target != '_self' // another window or frame
      || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1 // cross origin
    ) return

    if (el.href != loc.href
      && (
        el.href.split('#')[0] == loc.href.split('#')[0] // internal jump
        || base[0] != '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
        || base[0] == '#' && el.href.split(base)[0] != loc.href.split(base)[0] // outside of #base
        || !go(getPathFromBase(el.href), el.title || doc.title) // route not found
      )) return

    e.preventDefault()
  }

  /**
   * Go to the path
   * @param {string} path - destination path
   * @param {string} title - page title
   * @param {boolean} shouldReplace - use replaceState or pushState
   * @returns {boolean} - route not found flag
   */
  function go(path, title, shouldReplace) {
    // Server-side usage: directly execute handlers for the path
    if (!hist) return central[TRIGGER]('emit', getPathFromBase(path))

    path = base + normalize(path)
    title = title || doc.title
    // browsers ignores the second parameter `title`
    shouldReplace
      ? hist.replaceState(null, title, path)
      : hist.pushState(null, title, path)
    // so we need to set it manually
    doc.title = title
    routeFound = false
    emit()
    return routeFound
  }

  /**
   * Go to path or set action
   * a single string:                go there
   * two strings:                    go there with setting a title
   * two strings and boolean:        replace history with setting a title
   * a single function:              set an action on the default route
   * a string/RegExp and a function: set an action on the route
   * @param {(string|function)} first - path / action / filter
   * @param {(string|RegExp|function)} second - title / action
   * @param {boolean} third - replace flag
   */
  prot.m = function(first, second, third) {
    if (isString(first) && (!second || isString(second))) go(first, second, third || false)
    else if (second) this.r(first, second)
    else this.r('@', first)
  }

  /**
   * Stop routing
   */
  prot.s = function() {
    this.off('*')
    this.$ = []
  }

  /**
   * Emit
   * @param {string} path - path
   */
  prot.e = function(path) {
    this.$.concat('@').some(function(filter) {
      var args = (filter == '@' ? parser : secondParser)(normalize(path), normalize(filter))
      if (typeof args != 'undefined') {
        this[TRIGGER].apply(null, [filter].concat(args))
        return routeFound = true // exit from loop
      }
    }, this)
  }

  /**
   * Register route
   * @param {string} filter - filter for matching to url
   * @param {function} action - action to register
   */
  prot.r = function(filter, action) {
    if (filter != '@') {
      filter = '/' + normalize(filter)
      this.$.push(filter)
    }
    this.on(filter, action)
  }

  var mainRouter = new Router()
  var route = mainRouter.m.bind(mainRouter)

  /**
   * Create a sub router
   * @returns {function} the method of a new Router object
   */
  route.create = function() {
    var newSubRouter = new Router()
    // assign sub-router's main method
    var router = newSubRouter.m.bind(newSubRouter)
    // stop only this sub-router
    router.stop = newSubRouter.s.bind(newSubRouter)
    return router
  }

  /**
   * Set the base of url
   * @param {(str|RegExp)} arg - a new base or '#' or '#!'
   */
  route.base = function(arg) {
    base = arg || '#'
    current = getPathFromBase() // recalculate current path
  }

  /** Exec routing right now **/
  route.exec = function() {
    emit(true)
  }

  /**
   * Replace the default router to yours
   * @param {function} fn - your parser function
   * @param {function} fn2 - your secondParser function
   */
  route.parser = function(fn, fn2) {
    if (!fn && !fn2) {
      // reset parser for testing...
      parser = DEFAULT_PARSER
      secondParser = DEFAULT_SECOND_PARSER
    }
    if (fn) parser = fn
    if (fn2) secondParser = fn2
  }

  /**
   * Helper function to get url query as an object
   * @returns {object} parsed query
   */
  route.query = function() {
    var q = {}
    var href = loc.href || current
    href[REPLACE](/[?&](.+?)=([^&]*)/g, function(_, k, v) { q[k] = v })
    return q
  }

  /** Stop routing **/
  route.stop = function () {
    if (started) {
      if (win) {
        win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit)
        win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit)
        doc[REMOVE_EVENT_LISTENER](clickEvent, click)
      }
      central[TRIGGER]('stop')
      started = false
    }
  }

  /**
   * Start routing
   * @param {boolean} autoExec - automatically exec after starting if true
   */
  route.start = function (autoExec) {
    if (!started) {
      if (win) {
        if (document.readyState == 'complete') start(autoExec)
        // the timeout is needed to solve
        // a weird safari bug https://github.com/riot/route/issues/33
        else win[ADD_EVENT_LISTENER]('load', function() {
          setTimeout(function() { start(autoExec) }, 1)
        })
      }
      started = true
    }
  }

  /** Prepare the router **/
  route.base()
  route.parser()

  riot.route = route
  })(riot)
  /* istanbul ignore next */

  /**
   * The riot template engine
   * @version v2.4.2
   */
  /**
   * riot.util.brackets
   *
   * - `brackets    ` - Returns a string or regex based on its parameter
   * - `brackets.set` - Change the current riot brackets
   *
   * @module
   */

  var brackets = (function (UNDEF) {

    var
      REGLOB = 'g',

      R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,

      R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,

      S_QBLOCKS = R_STRINGS.source + '|' +
        /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' +
        /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,

      UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),

      NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,

      FINDBRACES = {
        '(': RegExp('([()])|'   + S_QBLOCKS, REGLOB),
        '[': RegExp('([[\\]])|' + S_QBLOCKS, REGLOB),
        '{': RegExp('([{}])|'   + S_QBLOCKS, REGLOB)
      },

      DEFAULT = '{ }'

    var _pairs = [
      '{', '}',
      '{', '}',
      /{[^}]*}/,
      /\\([{}])/g,
      /\\({)|{/g,
      RegExp('\\\\(})|([[({])|(})|' + S_QBLOCKS, REGLOB),
      DEFAULT,
      /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,
      /(^|[^\\]){=[\S\s]*?}/
    ]

    var
      cachedBrackets = UNDEF,
      _regex,
      _cache = [],
      _settings

    function _loopback (re) { return re }

    function _rewrite (re, bp) {
      if (!bp) bp = _cache
      return new RegExp(
        re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''
      )
    }

    function _create (pair) {
      if (pair === DEFAULT) return _pairs

      var arr = pair.split(' ')

      if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
        throw new Error('Unsupported brackets "' + pair + '"')
      }
      arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '))

      arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr)
      arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr)
      arr[6] = _rewrite(_pairs[6], arr)
      arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCKS, REGLOB)
      arr[8] = pair
      return arr
    }

    function _brackets (reOrIdx) {
      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx]
    }

    _brackets.split = function split (str, tmpl, _bp) {
      // istanbul ignore next: _bp is for the compiler
      if (!_bp) _bp = _cache

      var
        parts = [],
        match,
        isexpr,
        start,
        pos,
        re = _bp[6]

      isexpr = start = re.lastIndex = 0

      while ((match = re.exec(str))) {

        pos = match.index

        if (isexpr) {

          if (match[2]) {
            re.lastIndex = skipBraces(str, match[2], re.lastIndex)
            continue
          }
          if (!match[3]) {
            continue
          }
        }

        if (!match[1]) {
          unescapeStr(str.slice(start, pos))
          start = re.lastIndex
          re = _bp[6 + (isexpr ^= 1)]
          re.lastIndex = start
        }
      }

      if (str && start < str.length) {
        unescapeStr(str.slice(start))
      }

      return parts

      function unescapeStr (s) {
        if (tmpl || isexpr) {
          parts.push(s && s.replace(_bp[5], '$1'))
        } else {
          parts.push(s)
        }
      }

      function skipBraces (s, ch, ix) {
        var
          match,
          recch = FINDBRACES[ch]

        recch.lastIndex = ix
        ix = 1
        while ((match = recch.exec(s))) {
          if (match[1] &&
            !(match[1] === ch ? ++ix : --ix)) break
        }
        return ix ? s.length : recch.lastIndex
      }
    }

    _brackets.hasExpr = function hasExpr (str) {
      return _cache[4].test(str)
    }

    _brackets.loopKeys = function loopKeys (expr) {
      var m = expr.match(_cache[9])

      return m
        ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }
        : { val: expr.trim() }
    }

    _brackets.array = function array (pair) {
      return pair ? _create(pair) : _cache
    }

    function _reset (pair) {
      if ((pair || (pair = DEFAULT)) !== _cache[8]) {
        _cache = _create(pair)
        _regex = pair === DEFAULT ? _loopback : _rewrite
        _cache[9] = _regex(_pairs[9])
      }
      cachedBrackets = pair
    }

    function _setSettings (o) {
      var b

      o = o || {}
      b = o.brackets
      Object.defineProperty(o, 'brackets', {
        set: _reset,
        get: function () { return cachedBrackets },
        enumerable: true
      })
      _settings = o
      _reset(b)
    }

    Object.defineProperty(_brackets, 'settings', {
      set: _setSettings,
      get: function () { return _settings }
    })

    /* istanbul ignore next: in the browser riot is always in the scope */
    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {}
    _brackets.set = _reset

    _brackets.R_STRINGS = R_STRINGS
    _brackets.R_MLCOMMS = R_MLCOMMS
    _brackets.S_QBLOCKS = S_QBLOCKS

    return _brackets

  })()

  /**
   * @module tmpl
   *
   * tmpl          - Root function, returns the template value, render with data
   * tmpl.hasExpr  - Test the existence of a expression inside a string
   * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
   */

  var tmpl = (function () {

    var _cache = {}

    function _tmpl (str, data) {
      if (!str) return str

      return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr)
    }

    _tmpl.haveRaw = brackets.hasRaw

    _tmpl.hasExpr = brackets.hasExpr

    _tmpl.loopKeys = brackets.loopKeys

    // istanbul ignore next
    _tmpl.clearCache = function () { _cache = {} }

    _tmpl.errorHandler = null

    function _logErr (err, ctx) {

      if (_tmpl.errorHandler) {

        err.riotData = {
          tagName: ctx && ctx.root && ctx.root.tagName,
          _riot_id: ctx && ctx._riot_id  //eslint-disable-line camelcase
        }
        _tmpl.errorHandler(err)
      }
    }

    function _create (str) {
      var expr = _getTmpl(str)

      if (expr.slice(0, 11) !== 'try{return ') expr = 'return ' + expr

      return new Function('E', expr + ';')    // eslint-disable-line no-new-func
    }

    var
      CH_IDEXPR = String.fromCharCode(0x2057),
      RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,
      RE_QBLOCK = RegExp(brackets.S_QBLOCKS, 'g'),
      RE_DQUOTE = /\u2057/g,
      RE_QBMARK = /\u2057(\d+)~/g

    function _getTmpl (str) {
      var
        qstr = [],
        expr,
        parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1)

      if (parts.length > 2 || parts[0]) {
        var i, j, list = []

        for (i = j = 0; i < parts.length; ++i) {

          expr = parts[i]

          if (expr && (expr = i & 1

              ? _parseExpr(expr, 1, qstr)

              : '"' + expr
                  .replace(/\\/g, '\\\\')
                  .replace(/\r\n?|\n/g, '\\n')
                  .replace(/"/g, '\\"') +
                '"'

            )) list[j++] = expr

        }

        expr = j < 2 ? list[0]
             : '[' + list.join(',') + '].join("")'

      } else {

        expr = _parseExpr(parts[1], 0, qstr)
      }

      if (qstr[0]) {
        expr = expr.replace(RE_QBMARK, function (_, pos) {
          return qstr[pos]
            .replace(/\r/g, '\\r')
            .replace(/\n/g, '\\n')
        })
      }
      return expr
    }

    var
      RE_BREND = {
        '(': /[()]/g,
        '[': /[[\]]/g,
        '{': /[{}]/g
      }

    function _parseExpr (expr, asText, qstr) {

      expr = expr
            .replace(RE_QBLOCK, function (s, div) {
              return s.length > 2 && !div ? CH_IDEXPR + (qstr.push(s) - 1) + '~' : s
            })
            .replace(/\s+/g, ' ').trim()
            .replace(/\ ?([[\({},?\.:])\ ?/g, '$1')

      if (expr) {
        var
          list = [],
          cnt = 0,
          match

        while (expr &&
              (match = expr.match(RE_CSNAME)) &&
              !match.index
          ) {
          var
            key,
            jsb,
            re = /,|([[{(])|$/g

          expr = RegExp.rightContext
          key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1]

          while (jsb = (match = re.exec(expr))[1]) skipBraces(jsb, re)

          jsb  = expr.slice(0, match.index)
          expr = RegExp.rightContext

          list[cnt++] = _wrapExpr(jsb, 1, key)
        }

        expr = !cnt ? _wrapExpr(expr, asText)
             : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0]
      }
      return expr

      function skipBraces (ch, re) {
        var
          mm,
          lv = 1,
          ir = RE_BREND[ch]

        ir.lastIndex = re.lastIndex
        while (mm = ir.exec(expr)) {
          if (mm[0] === ch) ++lv
          else if (!--lv) break
        }
        re.lastIndex = lv ? expr.length : ir.lastIndex
      }
    }

    // istanbul ignore next: not both
    var // eslint-disable-next-line max-len
      JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
      JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
      JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/

    function _wrapExpr (expr, asText, key) {
      var tb

      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
        if (mvar) {
          pos = tb ? 0 : pos + match.length

          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
            match = p + '("' + mvar + JS_CONTEXT + mvar
            if (pos) tb = (s = s[pos]) === '.' || s === '(' || s === '['
          } else if (pos) {
            tb = !JS_NOPROPS.test(s.slice(pos))
          }
        }
        return match
      })

      if (tb) {
        expr = 'try{return ' + expr + '}catch(e){E(e,this)}'
      }

      if (key) {

        expr = (tb
            ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')'
          ) + '?"' + key + '":""'

      } else if (asText) {

        expr = 'function(v){' + (tb
            ? expr.replace('return ', 'v=') : 'v=(' + expr + ')'
          ) + ';return v||v===0?v:""}.call(this)'
      }

      return expr
    }

    _tmpl.version = brackets.version = 'v2.4.2'

    return _tmpl

  })()

  /*
    lib/browser/tag/mkdom.js

    Includes hacks needed for the Internet Explorer version 9 and below
    See: http://kangax.github.io/compat-table/es5/#ie8
         http://codeplanet.io/dropping-ie8/
  */
  var mkdom = (function _mkdom() {
    var
      reHasYield  = /<yield\b/i,
      reYieldAll  = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig,
      reYieldSrc  = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
      reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig
    var
      rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },
      tblTags = IE_VERSION && IE_VERSION < 10
        ? SPECIAL_TAGS_REGEX : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/

    /**
     * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
     * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
     *
     * @param   { String } templ  - The template coming from the custom tag definition
     * @param   { String } [html] - HTML content that comes from the DOM element where you
     *           will mount the tag, mostly the original tag in the page
     * @param   { Boolean } checkSvg - flag needed to know if we need to force the svg rendering in case of loop nodes
     * @returns {HTMLElement} DOM element with _templ_ merged through `YIELD` with the _html_.
     */
    function _mkdom(templ, html, checkSvg) {
      var
        match   = templ && templ.match(/^\s*<([-\w]+)/),
        tagName = match && match[1].toLowerCase(),
        el = mkEl('div', checkSvg && isSVGTag(tagName))

      // replace all the yield tags with the tag inner html
      templ = replaceYield(templ, html)

      /* istanbul ignore next */
      if (tblTags.test(tagName))
        el = specialTags(el, templ, tagName)
      else
        setInnerHTML(el, templ)

      el.stub = true

      return el
    }

    /*
      Creates the root element for table or select child elements:
      tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
    */
    function specialTags(el, templ, tagName) {
      var
        select = tagName[0] === 'o',
        parent = select ? 'select>' : 'table>'

      // trim() is important here, this ensures we don't have artifacts,
      // so we can check if we have only one element inside the parent
      el.innerHTML = '<' + parent + templ.trim() + '</' + parent
      parent = el.firstChild

      // returns the immediate parent if tr/th/td/col is the only element, if not
      // returns the whole tree, as this can include additional elements
      if (select) {
        parent.selectedIndex = -1  // for IE9, compatible w/current riot behavior
      } else {
        // avoids insertion of cointainer inside container (ex: tbody inside tbody)
        var tname = rootEls[tagName]
        if (tname && parent.childElementCount === 1) parent = $(tname, parent)
      }
      return parent
    }

    /*
      Replace the yield tag from any tag template with the innerHTML of the
      original tag in the page
    */
    function replaceYield(templ, html) {
      // do nothing if no yield
      if (!reHasYield.test(templ)) return templ

      // be careful with #1343 - string on the source having `$1`
      var src = {}

      html = html && html.replace(reYieldSrc, function (_, ref, text) {
        src[ref] = src[ref] || text   // preserve first definition
        return ''
      }).trim()

      return templ
        .replace(reYieldDest, function (_, ref, def) {  // yield with from - to attrs
          return src[ref] || def || ''
        })
        .replace(reYieldAll, function (_, def) {        // yield without any "from"
          return html || def || ''
        })
    }

    return _mkdom

  })()

  /**
   * Convert the item looped into an object used to extend the child tag properties
   * @param   { Object } expr - object containing the keys used to extend the children tags
   * @param   { * } key - value to assign to the new object returned
   * @param   { * } val - value containing the position of the item in the array
   * @returns { Object } - new object containing the values of the original item
   *
   * The variables 'key' and 'val' are arbitrary.
   * They depend on the collection type looped (Array, Object)
   * and on the expression used on the each tag
   *
   */
  function mkitem(expr, key, val) {
    var item = {}
    item[expr.key] = key
    if (expr.pos) item[expr.pos] = val
    return item
  }

  /**
   * Unmount the redundant tags
   * @param   { Array } items - array containing the current items to loop
   * @param   { Array } tags - array containing all the children tags
   */
  function unmountRedundant(items, tags) {

    var i = tags.length,
      j = items.length,
      t

    while (i > j) {
      t = tags[--i]
      tags.splice(i, 1)
      t.unmount()
    }
  }

  /**
   * Move the nested custom tags in non custom loop tags
   * @param   { Object } child - non custom loop tag
   * @param   { Number } i - current position of the loop tag
   */
  function moveNestedTags(child, i) {
    Object.keys(child.tags).forEach(function(tagName) {
      var tag = child.tags[tagName]
      if (isArray(tag))
        each(tag, function (t) {
          moveChildTag(t, tagName, i)
        })
      else
        moveChildTag(tag, tagName, i)
    })
  }

  /**
   * Adds the elements for a virtual tag
   * @param { Tag } tag - the tag whose root's children will be inserted or appended
   * @param { Node } src - the node that will do the inserting or appending
   * @param { Tag } target - only if inserting, insert before this tag's first child
   */
  function addVirtual(tag, src, target) {
    var el = tag._root, sib
    tag._virts = []
    while (el) {
      sib = el.nextSibling
      if (target)
        src.insertBefore(el, target._root)
      else
        src.appendChild(el)

      tag._virts.push(el) // hold for unmounting
      el = sib
    }
  }

  /**
   * Move virtual tag and all child nodes
   * @param { Tag } tag - first child reference used to start move
   * @param { Node } src  - the node that will do the inserting
   * @param { Tag } target - insert before this tag's first child
   * @param { Number } len - how many child nodes to move
   */
  function moveVirtual(tag, src, target, len) {
    var el = tag._root, sib, i = 0
    for (; i < len; i++) {
      sib = el.nextSibling
      src.insertBefore(el, target._root)
      el = sib
    }
  }

  /**
   * Insert a new tag avoiding the insert for the conditional tags
   * @param   {Boolean} isVirtual [description]
   * @param   { Tag }  prevTag - tag instance used as reference to prepend our new tag
   * @param   { Tag }  newTag - new tag to be inserted
   * @param   { HTMLElement }  root - loop parent node
   * @param   { Array }  tags - array containing the current tags list
   * @param   { Function }  virtualFn - callback needed to move or insert virtual DOM
   * @param   { Object } dom - DOM node we need to loop
   */
  function insertTag(isVirtual, prevTag, newTag, root, tags, virtualFn, dom) {
    if (isInStub(prevTag.root)) return
    if (isVirtual) virtualFn(prevTag, root, newTag, dom.childNodes.length)
    else root.insertBefore(prevTag.root, newTag.root) // #1374 some browsers reset selected here
  }


  /**
   * Manage tags having the 'each'
   * @param   { Object } dom - DOM node we need to loop
   * @param   { Tag } parent - parent tag instance where the dom node is contained
   * @param   { String } expr - string contained in the 'each' attribute
   */
  function _each(dom, parent, expr) {

    // remove the each property from the original tag
    remAttr(dom, 'each')

    var mustReorder = typeof getAttr(dom, 'no-reorder') !== T_STRING || remAttr(dom, 'no-reorder'),
      tagName = getTagName(dom),
      impl = __tagImpl[tagName] || { tmpl: getOuterHTML(dom) },
      useRoot = SPECIAL_TAGS_REGEX.test(tagName),
      root = dom.parentNode,
      ref = document.createTextNode(''),
      child = getTag(dom),
      isOption = tagName.toLowerCase() === 'option', // the option tags must be treated differently
      tags = [],
      oldItems = [],
      hasKeys,
      isVirtual = dom.tagName == 'VIRTUAL'

    // parse the each expression
    expr = tmpl.loopKeys(expr)

    // insert a marked where the loop tags will be injected
    root.insertBefore(ref, dom)

    // clean template code
    parent.one('before-mount', function () {

      // remove the original DOM node
      dom.parentNode.removeChild(dom)
      if (root.stub) root = parent.root

    }).on('update', function () {
      // get the new items collection
      var items = tmpl(expr.val, parent),
        // create a fragment to hold the new DOM nodes to inject in the parent tag
        frag = document.createDocumentFragment()

      // object loop. any changes cause full redraw
      if (!isArray(items)) {
        hasKeys = items || false
        items = hasKeys ?
          Object.keys(items).map(function (key) {
            return mkitem(expr, key, items[key])
          }) : []
      }

      // loop all the new items
      var i = 0,
        itemsLength = items.length

      for (; i < itemsLength; i++) {
        // reorder only if the items are objects
        var
          item = items[i],
          _mustReorder = mustReorder && typeof item == T_OBJECT && !hasKeys,
          oldPos = oldItems.indexOf(item),
          pos = ~oldPos && _mustReorder ? oldPos : i,
          // does a tag exist in this position?
          tag = tags[pos]

        item = !hasKeys && expr.key ? mkitem(expr, item, i) : item

        // new tag
        if (
          !_mustReorder && !tag // with no-reorder we just update the old tags
          ||
          _mustReorder && !~oldPos || !tag // by default we always try to reorder the DOM elements
        ) {

          tag = new Tag(impl, {
            parent: parent,
            isLoop: true,
            hasImpl: !!__tagImpl[tagName],
            root: useRoot ? root : dom.cloneNode(),
            item: item
          }, dom.innerHTML)

          tag.mount()

          if (isVirtual) tag._root = tag.root.firstChild // save reference for further moves or inserts
          // this tag must be appended
          if (i == tags.length || !tags[i]) { // fix 1581
            if (isVirtual)
              addVirtual(tag, frag)
            else frag.appendChild(tag.root)
          }
          // this tag must be insert
          else {
            insertTag(isVirtual, tag, tags[i], root, tags, addVirtual, dom)
            oldItems.splice(i, 0, item)
          }

          tags.splice(i, 0, tag)
          pos = i // handled here so no move
        } else tag.update(item, true)

        // reorder the tag if it's not located in its previous position
        if (
          pos !== i && _mustReorder &&
          tags[i] // fix 1581 unable to reproduce it in a test!
        ) {
          // #closes 2040 PLEASE DON'T REMOVE IT!
          // there are no tests for this feature
          if (contains(items, oldItems[i]))
            insertTag(isVirtual, tag, tags[i], root, tags, moveVirtual, dom)

          // update the position attribute if it exists
          if (expr.pos)
            tag[expr.pos] = i
          // move the old tag instance
          tags.splice(i, 0, tags.splice(pos, 1)[0])
          // move the old item
          oldItems.splice(i, 0, oldItems.splice(pos, 1)[0])
          // if the loop tags are not custom
          // we need to move all their custom tags into the right position
          if (!child && tag.tags) moveNestedTags(tag, i)
        }

        // cache the original item to use it in the events bound to this node
        // and its children
        tag._item = item
        // cache the real parent tag internally
        defineProperty(tag, '_parent', parent)
      }

      // remove the redundant tags
      unmountRedundant(items, tags)

      // insert the new nodes
      root.insertBefore(frag, ref)
      if (isOption) {

        // #1374 FireFox bug in <option selected={expression}>
        if (FIREFOX && !root.multiple) {
          for (var n = 0; n < root.length; n++) {
            if (root[n].__riot1374) {
              root.selectedIndex = n  // clear other options
              delete root[n].__riot1374
              break
            }
          }
        }
      }

      // set the 'tags' property of the parent tag
      // if child is 'undefined' it means that we don't need to set this property
      // for example:
      // we don't need store the `myTag.tags['div']` property if we are looping a div tag
      // but we need to track the `myTag.tags['child']` property looping a custom child node named `child`
      if (child) parent.tags[tagName] = tags

      // clone the items array
      oldItems = items.slice()

    })

  }
  /**
   * Object that will be used to inject and manage the css of every tag instance
   */
  var styleManager = (function(_riot) {

    if (!window) return { // skip injection on the server
      add: function () {},
      inject: function () {}
    }

    var styleNode = (function () {
      // create a new style element with the correct type
      var newNode = mkEl('style')
      setAttr(newNode, 'type', 'text/css')

      // replace any user node or insert the new one into the head
      var userNode = $('style[type=riot]')
      if (userNode) {
        if (userNode.id) newNode.id = userNode.id
        userNode.parentNode.replaceChild(newNode, userNode)
      }
      else document.getElementsByTagName('head')[0].appendChild(newNode)

      return newNode
    })()

    // Create cache and shortcut to the correct property
    var cssTextProp = styleNode.styleSheet,
      stylesToInject = ''

    // Expose the style node in a non-modificable property
    Object.defineProperty(_riot, 'styleNode', {
      value: styleNode,
      writable: true
    })

    /**
     * Public api
     */
    return {
      /**
       * Save a tag style to be later injected into DOM
       * @param   { String } css [description]
       */
      add: function(css) {
        stylesToInject += css
      },
      /**
       * Inject all previously saved tag styles into DOM
       * innerHTML seems slow: http://jsperf.com/riot-insert-style
       */
      inject: function() {
        if (stylesToInject) {
          if (cssTextProp) cssTextProp.cssText += stylesToInject
          else styleNode.innerHTML += stylesToInject
          stylesToInject = ''
        }
      }
    }

  })(riot)


  function parseNamedElements(root, tag, childTags, forceParsingNamed) {

    walk(root, function(dom) {
      if (dom.nodeType == 1) {
        dom.isLoop = dom.isLoop ||
                    (dom.parentNode && dom.parentNode.isLoop || getAttr(dom, 'each'))
                      ? 1 : 0

        // custom child tag
        if (childTags) {
          var child = getTag(dom)

          if (child && !dom.isLoop)
            childTags.push(initChildTag(child, {root: dom, parent: tag}, dom.innerHTML, tag))
        }

        if (!dom.isLoop || forceParsingNamed)
          setNamed(dom, tag, [])
      }

    })

  }

  function parseExpressions(root, tag, expressions) {

    function addExpr(dom, val, extra) {
      if (tmpl.hasExpr(val)) {
        expressions.push(extend({ dom: dom, expr: val }, extra))
      }
    }

    walk(root, function(dom) {
      var type = dom.nodeType,
        attr

      // text node
      if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue)
      if (type != 1) return

      /* element */

      // loop
      attr = getAttr(dom, 'each')

      if (attr) { _each(dom, tag, attr); return false }

      // attribute expressions
      each(dom.attributes, function(attr) {
        var name = attr.name,
          bool = name.split('__')[1]

        addExpr(dom, attr.value, { attr: bool || name, bool: bool })
        if (bool) { remAttr(dom, name); return false }

      })

      // skip custom tags
      if (getTag(dom)) return false

    })

  }
  function Tag(impl, conf, innerHTML) {

    var self = riot.observable(this),
      opts = inherit(conf.opts) || {},
      parent = conf.parent,
      isLoop = conf.isLoop,
      hasImpl = conf.hasImpl,
      item = cleanUpData(conf.item),
      expressions = [],
      childTags = [],
      root = conf.root,
      tagName = root.tagName.toLowerCase(),
      attr = {},
      propsInSyncWithParent = [],
      dom

    // only call unmount if we have a valid __tagImpl (has name property)
    if (impl.name && root._tag) root._tag.unmount(true)

    // not yet mounted
    this.isMounted = false
    root.isLoop = isLoop

    // keep a reference to the tag just created
    // so we will be able to mount this tag multiple times
    root._tag = this

    // create a unique id to this tag
    // it could be handy to use it also to improve the virtual dom rendering speed
    defineProperty(this, '_riot_id', ++__uid) // base 1 allows test !t._riot_id

    extend(this, { parent: parent, root: root, opts: opts}, item)
    // protect the "tags" property from being overridden
    defineProperty(this, 'tags', {})

    // grab attributes
    each(root.attributes, function(el) {
      var val = el.value
      // remember attributes with expressions only
      if (tmpl.hasExpr(val)) attr[el.name] = val
    })

    dom = mkdom(impl.tmpl, innerHTML, isLoop)

    // options
    function updateOpts() {
      var ctx = hasImpl && isLoop ? self : parent || self

      // update opts from current DOM attributes
      each(root.attributes, function(el) {
        var val = el.value
        opts[toCamel(el.name)] = tmpl.hasExpr(val) ? tmpl(val, ctx) : val
      })
      // recover those with expressions
      each(Object.keys(attr), function(name) {
        opts[toCamel(name)] = tmpl(attr[name], ctx)
      })
    }

    function normalizeData(data) {
      for (var key in item) {
        if (typeof self[key] !== T_UNDEF && isWritable(self, key))
          self[key] = data[key]
      }
    }

    function inheritFrom(target) {
      each(Object.keys(target), function(k) {
        // some properties must be always in sync with the parent tag
        var mustSync = !RESERVED_WORDS_BLACKLIST.test(k) && contains(propsInSyncWithParent, k)

        if (typeof self[k] === T_UNDEF || mustSync) {
          // track the property to keep in sync
          // so we can keep it updated
          if (!mustSync) propsInSyncWithParent.push(k)
          self[k] = target[k]
        }
      })
    }

    /**
     * Update the tag expressions and options
     * @param   { * }  data - data we want to use to extend the tag properties
     * @param   { Boolean } isInherited - is this update coming from a parent tag?
     * @returns { self }
     */
    defineProperty(this, 'update', function(data, isInherited) {

      // make sure the data passed will not override
      // the component core methods
      data = cleanUpData(data)
      // inherit properties from the parent in loop
      if (isLoop) {
        inheritFrom(self.parent)
      }
      // normalize the tag properties in case an item object was initially passed
      if (data && isObject(item)) {
        normalizeData(data)
        item = data
      }
      extend(self, data)
      updateOpts()
      self.trigger('update', data)
      update(expressions, self)

      // the updated event will be triggered
      // once the DOM will be ready and all the re-flows are completed
      // this is useful if you want to get the "real" root properties
      // 4 ex: root.offsetWidth ...
      if (isInherited && self.parent)
        // closes #1599
        self.parent.one('updated', function() { self.trigger('updated') })
      else rAF(function() { self.trigger('updated') })

      return this
    })

    defineProperty(this, 'mixin', function() {
      each(arguments, function(mix) {
        var instance,
          props = [],
          obj

        mix = typeof mix === T_STRING ? riot.mixin(mix) : mix

        // check if the mixin is a function
        if (isFunction(mix)) {
          // create the new mixin instance
          instance = new mix()
        } else instance = mix

        var proto = Object.getPrototypeOf(instance)

        // build multilevel prototype inheritance chain property list
        do props = props.concat(Object.getOwnPropertyNames(obj || instance))
        while (obj = Object.getPrototypeOf(obj || instance))

        // loop the keys in the function prototype or the all object keys
        each(props, function(key) {
          // bind methods to self
          // allow mixins to override other properties/parent mixins
          if (key != 'init') {
            // check for getters/setters
            var descriptor = Object.getOwnPropertyDescriptor(instance, key) || Object.getOwnPropertyDescriptor(proto, key)
            var hasGetterSetter = descriptor && (descriptor.get || descriptor.set)

            // apply method only if it does not already exist on the instance
            if (!self.hasOwnProperty(key) && hasGetterSetter) {
              Object.defineProperty(self, key, descriptor)
            } else {
              self[key] = isFunction(instance[key]) ?
                instance[key].bind(self) :
                instance[key]
            }
          }
        })

        // init method will be called automatically
        if (instance.init) instance.init.bind(self)()
      })
      return this
    })

    defineProperty(this, 'mount', function() {

      updateOpts()

      // add global mixins
      var globalMixin = riot.mixin(GLOBAL_MIXIN)

      if (globalMixin)
        for (var i in globalMixin)
          if (globalMixin.hasOwnProperty(i))
            self.mixin(globalMixin[i])

      // children in loop should inherit from true parent
      if (self._parent && self._parent.root.isLoop) {
        inheritFrom(self._parent)
      }

      // initialiation
      if (impl.fn) impl.fn.call(self, opts)

      // parse layout after init. fn may calculate args for nested custom tags
      parseExpressions(dom, self, expressions)

      // mount the child tags
      toggle(true)

      // update the root adding custom attributes coming from the compiler
      // it fixes also #1087
      if (impl.attrs)
        walkAttributes(impl.attrs, function (k, v) { setAttr(root, k, v) })
      if (impl.attrs || hasImpl)
        parseExpressions(self.root, self, expressions)

      if (!self.parent || isLoop) self.update(item)

      // internal use only, fixes #403
      self.trigger('before-mount')

      if (isLoop && !hasImpl) {
        // update the root attribute for the looped elements
        root = dom.firstChild
      } else {
        while (dom.firstChild) root.appendChild(dom.firstChild)
        if (root.stub) root = parent.root
      }

      defineProperty(self, 'root', root)

      // parse the named dom nodes in the looped child
      // adding them to the parent as well
      if (isLoop)
        parseNamedElements(self.root, self.parent, null, true)

      // if it's not a child tag we can trigger its mount event
      if (!self.parent || self.parent.isMounted) {
        self.isMounted = true
        self.trigger('mount')
      }
      // otherwise we need to wait that the parent event gets triggered
      else self.parent.one('mount', function() {
        // avoid to trigger the `mount` event for the tags
        // not visible included in an if statement
        if (!isInStub(self.root)) {
          self.parent.isMounted = self.isMounted = true
          self.trigger('mount')
        }
      })
    })


    defineProperty(this, 'unmount', function(keepRootTag) {
      var el = root,
        p = el.parentNode,
        ptag,
        tagIndex = __virtualDom.indexOf(self)

      self.trigger('before-unmount')

      // remove this tag instance from the global virtualDom variable
      if (~tagIndex)
        __virtualDom.splice(tagIndex, 1)

      if (p) {

        if (parent) {
          ptag = getImmediateCustomParentTag(parent)
          // remove this tag from the parent tags object
          // if there are multiple nested tags with same name..
          // remove this element form the array
          if (isArray(ptag.tags[tagName]))
            each(ptag.tags[tagName], function(tag, i) {
              if (tag._riot_id == self._riot_id)
                ptag.tags[tagName].splice(i, 1)
            })
          else
            // otherwise just delete the tag instance
            ptag.tags[tagName] = undefined
        }

        else
          while (el.firstChild) el.removeChild(el.firstChild)

        if (!keepRootTag)
          p.removeChild(el)
        else {
          // the riot-tag and the data-is attributes aren't needed anymore, remove them
          remAttr(p, RIOT_TAG_IS)
          remAttr(p, RIOT_TAG) // this will be removed in riot 3.0.0
        }

      }

      if (this._virts) {
        each(this._virts, function(v) {
          if (v.parentNode) v.parentNode.removeChild(v)
        })
      }

      self.trigger('unmount')
      toggle()
      self.off('*')
      self.isMounted = false
      delete root._tag

    })

    // proxy function to bind updates
    // dispatched from a parent tag
    function onChildUpdate(data) { self.update(data, true) }

    function toggle(isMount) {

      // mount/unmount children
      each(childTags, function(child) { child[isMount ? 'mount' : 'unmount']() })

      // listen/unlisten parent (events flow one way from parent to children)
      if (!parent) return
      var evt = isMount ? 'on' : 'off'

      // the loop tags will be always in sync with the parent automatically
      if (isLoop)
        parent[evt]('unmount', self.unmount)
      else {
        parent[evt]('update', onChildUpdate)[evt]('unmount', self.unmount)
      }
    }


    // named elements available for fn
    parseNamedElements(dom, this, childTags)

  }
  /**
   * Attach an event to a DOM node
   * @param { String } name - event name
   * @param { Function } handler - event callback
   * @param { Object } dom - dom node
   * @param { Tag } tag - tag instance
   */
  function setEventHandler(name, handler, dom, tag) {

    dom[name] = function(e) {

      var ptag = tag._parent,
        item = tag._item,
        el

      if (!item)
        while (ptag && !item) {
          item = ptag._item
          ptag = ptag._parent
        }

      // cross browser event fix
      e = e || window.event

      // override the event properties
      if (isWritable(e, 'currentTarget')) e.currentTarget = dom
      if (isWritable(e, 'target')) e.target = e.srcElement
      if (isWritable(e, 'which')) e.which = e.charCode || e.keyCode

      e.item = item

      // prevent default behaviour (by default)
      if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
        if (e.preventDefault) e.preventDefault()
        e.returnValue = false
      }

      if (!e.preventUpdate) {
        el = item ? getImmediateCustomParentTag(ptag) : tag
        el.update()
      }

    }

  }


  /**
   * Insert a DOM node replacing another one (used by if- attribute)
   * @param   { Object } root - parent node
   * @param   { Object } node - node replaced
   * @param   { Object } before - node added
   */
  function insertTo(root, node, before) {
    if (!root) return
    root.insertBefore(before, node)
    root.removeChild(node)
  }

  /**
   * Update the expressions in a Tag instance
   * @param   { Array } expressions - expression that must be re evaluated
   * @param   { Tag } tag - tag instance
   */
  function update(expressions, tag) {

    each(expressions, function(expr, i) {

      var dom = expr.dom,
        attrName = expr.attr,
        value = tmpl(expr.expr, tag),
        parent = expr.parent || expr.dom.parentNode

      if (expr.bool) {
        value = !!value
      } else if (value == null) {
        value = ''
      }

      // #1638: regression of #1612, update the dom only if the value of the
      // expression was changed
      if (expr.value === value) {
        return
      }
      expr.value = value

      // textarea and text nodes has no attribute name
      if (!attrName) {
        // about #815 w/o replace: the browser converts the value to a string,
        // the comparison by "==" does too, but not in the server
        value += ''
        // test for parent avoids error with invalid assignment to nodeValue
        if (parent) {
          // cache the parent node because somehow it will become null on IE
          // on the next iteration
          expr.parent = parent
          if (parent.tagName === 'TEXTAREA') {
            parent.value = value                    // #1113
            if (!IE_VERSION) dom.nodeValue = value  // #1625 IE throws here, nodeValue
          }                                         // will be available on 'updated'
          else dom.nodeValue = value
        }
        return
      }

      // ~~#1612: look for changes in dom.value when updating the value~~
      if (attrName === 'value') {
        if (dom.value !== value) {
          dom.value = value
          setAttr(dom, attrName, value)
        }
        return
      } else {
        // remove original attribute
        remAttr(dom, attrName)
      }

      // event handler
      if (isFunction(value)) {
        setEventHandler(attrName, value, dom, tag)

      // if- conditional
      } else if (attrName == 'if') {
        var stub = expr.stub,
          add = function() { insertTo(stub.parentNode, stub, dom) },
          remove = function() { insertTo(dom.parentNode, dom, stub) }

        // add to DOM
        if (value) {
          if (stub) {
            add()
            dom.inStub = false
            // avoid to trigger the mount event if the tags is not visible yet
            // maybe we can optimize this avoiding to mount the tag at all
            if (!isInStub(dom)) {
              walk(dom, function(el) {
                if (el._tag && !el._tag.isMounted)
                  el._tag.isMounted = !!el._tag.trigger('mount')
              })
            }
          }
        // remove from DOM
        } else {
          stub = expr.stub = stub || document.createTextNode('')
          // if the parentNode is defined we can easily replace the tag
          if (dom.parentNode)
            remove()
          // otherwise we need to wait the updated event
          else (tag.parent || tag).one('updated', remove)

          dom.inStub = true
        }
      // show / hide
      } else if (attrName === 'show') {
        dom.style.display = value ? '' : 'none'

      } else if (attrName === 'hide') {
        dom.style.display = value ? 'none' : ''

      } else if (expr.bool) {
        dom[attrName] = value
        if (value) setAttr(dom, attrName, attrName)
        if (FIREFOX && attrName === 'selected' && dom.tagName === 'OPTION') {
          dom.__riot1374 = value   // #1374
        }

      } else if (value === 0 || value && typeof value !== T_OBJECT) {
        // <img src="{ expr }">
        if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
          attrName = attrName.slice(RIOT_PREFIX.length)
        }
        setAttr(dom, attrName, value)
      }

    })

  }
  /**
   * Specialized function for looping an array-like collection with `each={}`
   * @param   { Array } els - collection of items
   * @param   {Function} fn - callback function
   * @returns { Array } the array looped
   */
  function each(els, fn) {
    var len = els ? els.length : 0

    for (var i = 0, el; i < len; i++) {
      el = els[i]
      // return false -> current item was removed by fn during the loop
      if (el != null && fn(el, i) === false) i--
    }
    return els
  }

  /**
   * Detect if the argument passed is a function
   * @param   { * } v - whatever you want to pass to this function
   * @returns { Boolean } -
   */
  function isFunction(v) {
    return typeof v === T_FUNCTION || false   // avoid IE problems
  }

  /**
   * Get the outer html of any DOM node SVGs included
   * @param   { Object } el - DOM node to parse
   * @returns { String } el.outerHTML
   */
  function getOuterHTML(el) {
    if (el.outerHTML) return el.outerHTML
    // some browsers do not support outerHTML on the SVGs tags
    else {
      var container = mkEl('div')
      container.appendChild(el.cloneNode(true))
      return container.innerHTML
    }
  }

  /**
   * Set the inner html of any DOM node SVGs included
   * @param { Object } container - DOM node where we will inject the new html
   * @param { String } html - html to inject
   */
  function setInnerHTML(container, html) {
    if (typeof container.innerHTML != T_UNDEF) container.innerHTML = html
    // some browsers do not support innerHTML on the SVGs tags
    else {
      var doc = new DOMParser().parseFromString(html, 'application/xml')
      container.appendChild(
        container.ownerDocument.importNode(doc.documentElement, true)
      )
    }
  }

  /**
   * Checks wether a DOM node must be considered part of an svg document
   * @param   { String }  name - tag name
   * @returns { Boolean } -
   */
  function isSVGTag(name) {
    return ~SVG_TAGS_LIST.indexOf(name)
  }

  /**
   * Detect if the argument passed is an object, exclude null.
   * NOTE: Use isObject(x) && !isArray(x) to excludes arrays.
   * @param   { * } v - whatever you want to pass to this function
   * @returns { Boolean } -
   */
  function isObject(v) {
    return v && typeof v === T_OBJECT         // typeof null is 'object'
  }

  /**
   * Remove any DOM attribute from a node
   * @param   { Object } dom - DOM node we want to update
   * @param   { String } name - name of the property we want to remove
   */
  function remAttr(dom, name) {
    dom.removeAttribute(name)
  }

  /**
   * Convert a string containing dashes to camel case
   * @param   { String } string - input string
   * @returns { String } my-string -> myString
   */
  function toCamel(string) {
    return string.replace(/-(\w)/g, function(_, c) {
      return c.toUpperCase()
    })
  }

  /**
   * Get the value of any DOM attribute on a node
   * @param   { Object } dom - DOM node we want to parse
   * @param   { String } name - name of the attribute we want to get
   * @returns { String | undefined } name of the node attribute whether it exists
   */
  function getAttr(dom, name) {
    return dom.getAttribute(name)
  }

  /**
   * Set any DOM/SVG attribute
   * @param { Object } dom - DOM node we want to update
   * @param { String } name - name of the property we want to set
   * @param { String } val - value of the property we want to set
   */
  function setAttr(dom, name, val) {
    var xlink = XLINK_REGEX.exec(name)
    if (xlink && xlink[1])
      dom.setAttributeNS(XLINK_NS, xlink[1], val)
    else
      dom.setAttribute(name, val)
  }

  /**
   * Detect the tag implementation by a DOM node
   * @param   { Object } dom - DOM node we need to parse to get its tag implementation
   * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
   */
  function getTag(dom) {
    return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG_IS) ||
      getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()]
  }
  /**
   * Add a child tag to its parent into the `tags` object
   * @param   { Object } tag - child tag instance
   * @param   { String } tagName - key where the new tag will be stored
   * @param   { Object } parent - tag instance where the new child tag will be included
   */
  function addChildTag(tag, tagName, parent) {
    var cachedTag = parent.tags[tagName]

    // if there are multiple children tags having the same name
    if (cachedTag) {
      // if the parent tags property is not yet an array
      // create it adding the first cached tag
      if (!isArray(cachedTag))
        // don't add the same tag twice
        if (cachedTag !== tag)
          parent.tags[tagName] = [cachedTag]
      // add the new nested tag to the array
      if (!contains(parent.tags[tagName], tag))
        parent.tags[tagName].push(tag)
    } else {
      parent.tags[tagName] = tag
    }
  }

  /**
   * Move the position of a custom tag in its parent tag
   * @param   { Object } tag - child tag instance
   * @param   { String } tagName - key where the tag was stored
   * @param   { Number } newPos - index where the new tag will be stored
   */
  function moveChildTag(tag, tagName, newPos) {
    var parent = tag.parent,
      tags
    // no parent no move
    if (!parent) return

    tags = parent.tags[tagName]

    if (isArray(tags))
      tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0])
    else addChildTag(tag, tagName, parent)
  }

  /**
   * Create a new child tag including it correctly into its parent
   * @param   { Object } child - child tag implementation
   * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
   * @param   { String } innerHTML - inner html of the child node
   * @param   { Object } parent - instance of the parent tag including the child custom tag
   * @returns { Object } instance of the new child tag just created
   */
  function initChildTag(child, opts, innerHTML, parent) {
    var tag = new Tag(child, opts, innerHTML),
      tagName = getTagName(opts.root),
      ptag = getImmediateCustomParentTag(parent)
    // fix for the parent attribute in the looped elements
    tag.parent = ptag
    // store the real parent tag
    // in some cases this could be different from the custom parent tag
    // for example in nested loops
    tag._parent = parent

    // add this tag to the custom parent tag
    addChildTag(tag, tagName, ptag)
    // and also to the real parent tag
    if (ptag !== parent)
      addChildTag(tag, tagName, parent)
    // empty the child node once we got its template
    // to avoid that its children get compiled multiple times
    opts.root.innerHTML = ''

    return tag
  }

  /**
   * Loop backward all the parents tree to detect the first custom parent tag
   * @param   { Object } tag - a Tag instance
   * @returns { Object } the instance of the first custom parent tag found
   */
  function getImmediateCustomParentTag(tag) {
    var ptag = tag
    while (!getTag(ptag.root)) {
      if (!ptag.parent) break
      ptag = ptag.parent
    }
    return ptag
  }

  /**
   * Helper function to set an immutable property
   * @param   { Object } el - object where the new property will be set
   * @param   { String } key - object key where the new property will be stored
   * @param   { * } value - value of the new property
  * @param   { Object } options - set the propery overriding the default options
   * @returns { Object } - the initial object
   */
  function defineProperty(el, key, value, options) {
    Object.defineProperty(el, key, extend({
      value: value,
      enumerable: false,
      writable: false,
      configurable: true
    }, options))
    return el
  }

  /**
   * Get the tag name of any DOM node
   * @param   { Object } dom - DOM node we want to parse
   * @returns { String } name to identify this dom node in riot
   */
  function getTagName(dom) {
    var child = getTag(dom),
      namedTag = getAttr(dom, 'name'),
      tagName = namedTag && !tmpl.hasExpr(namedTag) ?
                  namedTag :
                child ? child.name : dom.tagName.toLowerCase()

    return tagName
  }

  /**
   * Extend any object with other properties
   * @param   { Object } src - source object
   * @returns { Object } the resulting extended object
   *
   * var obj = { foo: 'baz' }
   * extend(obj, {bar: 'bar', foo: 'bar'})
   * console.log(obj) => {bar: 'bar', foo: 'bar'}
   *
   */
  function extend(src) {
    var obj, args = arguments
    for (var i = 1; i < args.length; ++i) {
      if (obj = args[i]) {
        for (var key in obj) {
          // check if this property of the source object could be overridden
          if (isWritable(src, key))
            src[key] = obj[key]
        }
      }
    }
    return src
  }

  /**
   * Check whether an array contains an item
   * @param   { Array } arr - target array
   * @param   { * } item - item to test
   * @returns { Boolean } Does 'arr' contain 'item'?
   */
  function contains(arr, item) {
    return ~arr.indexOf(item)
  }

  /**
   * Check whether an object is a kind of array
   * @param   { * } a - anything
   * @returns {Boolean} is 'a' an array?
   */
  function isArray(a) { return Array.isArray(a) || a instanceof Array }

  /**
   * Detect whether a property of an object could be overridden
   * @param   { Object }  obj - source object
   * @param   { String }  key - object property
   * @returns { Boolean } is this property writable?
   */
  function isWritable(obj, key) {
    var props = Object.getOwnPropertyDescriptor(obj, key)
    return typeof obj[key] === T_UNDEF || props && props.writable
  }


  /**
   * With this function we avoid that the internal Tag methods get overridden
   * @param   { Object } data - options we want to use to extend the tag instance
   * @returns { Object } clean object without containing the riot internal reserved words
   */
  function cleanUpData(data) {
    if (!(data instanceof Tag) && !(data && typeof data.trigger == T_FUNCTION))
      return data

    var o = {}
    for (var key in data) {
      if (!RESERVED_WORDS_BLACKLIST.test(key)) o[key] = data[key]
    }
    return o
  }

  /**
   * Walk down recursively all the children tags starting dom node
   * @param   { Object }   dom - starting node where we will start the recursion
   * @param   { Function } fn - callback to transform the child node just found
   */
  function walk(dom, fn) {
    if (dom) {
      // stop the recursion
      if (fn(dom) === false) return
      else {
        dom = dom.firstChild

        while (dom) {
          walk(dom, fn)
          dom = dom.nextSibling
        }
      }
    }
  }

  /**
   * Minimize risk: only zero or one _space_ between attr & value
   * @param   { String }   html - html string we want to parse
   * @param   { Function } fn - callback function to apply on any attribute found
   */
  function walkAttributes(html, fn) {
    var m,
      re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g

    while (m = re.exec(html)) {
      fn(m[1].toLowerCase(), m[2] || m[3] || m[4])
    }
  }

  /**
   * Check whether a DOM node is in stub mode, useful for the riot 'if' directive
   * @param   { Object }  dom - DOM node we want to parse
   * @returns { Boolean } -
   */
  function isInStub(dom) {
    while (dom) {
      if (dom.inStub) return true
      dom = dom.parentNode
    }
    return false
  }

  /**
   * Create a generic DOM node
   * @param   { String } name - name of the DOM node we want to create
   * @param   { Boolean } isSvg - should we use a SVG as parent node?
   * @returns { Object } DOM node just created
   */
  function mkEl(name, isSvg) {
    return isSvg ?
      document.createElementNS('http://www.w3.org/2000/svg', 'svg') :
      document.createElement(name)
  }

  /**
   * Shorter and fast way to select multiple nodes in the DOM
   * @param   { String } selector - DOM selector
   * @param   { Object } ctx - DOM node where the targets of our search will is located
   * @returns { Object } dom nodes found
   */
  function $$(selector, ctx) {
    return (ctx || document).querySelectorAll(selector)
  }

  /**
   * Shorter and fast way to select a single node in the DOM
   * @param   { String } selector - unique dom selector
   * @param   { Object } ctx - DOM node where the target of our search will is located
   * @returns { Object } dom node found
   */
  function $(selector, ctx) {
    return (ctx || document).querySelector(selector)
  }

  /**
   * Simple object prototypal inheritance
   * @param   { Object } parent - parent object
   * @returns { Object } child instance
   */
  function inherit(parent) {
    return Object.create(parent || null)
  }

  /**
   * Get the name property needed to identify a DOM node in riot
   * @param   { Object } dom - DOM node we need to parse
   * @returns { String | undefined } give us back a string to identify this dom node
   */
  function getNamedKey(dom) {
    return getAttr(dom, 'id') || getAttr(dom, 'name')
  }

  /**
   * Set the named properties of a tag element
   * @param { Object } dom - DOM node we need to parse
   * @param { Object } parent - tag instance where the named dom element will be eventually added
   * @param { Array } keys - list of all the tag instance properties
   */
  function setNamed(dom, parent, keys) {
    // get the key value we want to add to the tag instance
    var key = getNamedKey(dom),
      isArr,
      // add the node detected to a tag instance using the named property
      add = function(value) {
        // avoid to override the tag properties already set
        if (contains(keys, key)) return
        // check whether this value is an array
        isArr = isArray(value)
        // if the key was never set
        if (!value)
          // set it once on the tag instance
          parent[key] = dom
        // if it was an array and not yet set
        else if (!isArr || isArr && !contains(value, dom)) {
          // add the dom node into the array
          if (isArr)
            value.push(dom)
          else
            parent[key] = [value, dom]
        }
      }

    // skip the elements with no named properties
    if (!key) return

    // check whether this key has been already evaluated
    if (tmpl.hasExpr(key))
      // wait the first updated event only once
      parent.one('mount', function() {
        key = getNamedKey(dom)
        add(parent[key])
      })
    else
      add(parent[key])

  }

  /**
   * Faster String startsWith alternative
   * @param   { String } src - source string
   * @param   { String } str - test string
   * @returns { Boolean } -
   */
  function startsWith(src, str) {
    return src.slice(0, str.length) === str
  }

  /**
   * requestAnimationFrame function
   * Adapted from https://gist.github.com/paulirish/1579671, license MIT
   */
  var rAF = (function (w) {
    var raf = w.requestAnimationFrame    ||
              w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame

    if (!raf || /iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)) {  // buggy iOS6
      var lastTime = 0

      raf = function (cb) {
        var nowtime = Date.now(), timeout = Math.max(16 - (nowtime - lastTime), 0)
        setTimeout(function () { cb(lastTime = nowtime + timeout) }, timeout)
      }
    }
    return raf

  })(window || {})

  /**
   * Mount a tag creating new Tag instance
   * @param   { Object } root - dom node where the tag will be mounted
   * @param   { String } tagName - name of the riot tag we want to mount
   * @param   { Object } opts - options to pass to the Tag instance
   * @returns { Tag } a new Tag instance
   */
  function mountTo(root, tagName, opts) {
    var tag = __tagImpl[tagName],
      // cache the inner HTML to fix #855
      innerHTML = root._innerHTML = root._innerHTML || root.innerHTML

    // clear the inner html
    root.innerHTML = ''

    if (tag && root) tag = new Tag(tag, { root: root, opts: opts }, innerHTML)

    if (tag && tag.mount) {
      tag.mount()
      // add this tag to the virtualDom variable
      if (!contains(__virtualDom, tag)) __virtualDom.push(tag)
    }

    return tag
  }
  /**
   * Riot public api
   */

  // share methods for other riot parts, e.g. compiler
  riot.util = { brackets: brackets, tmpl: tmpl }

  /**
   * Create a mixin that could be globally shared across all the tags
   */
  riot.mixin = (function() {
    var mixins = {},
      globals = mixins[GLOBAL_MIXIN] = {},
      _id = 0

    /**
     * Create/Return a mixin by its name
     * @param   { String }  name - mixin name (global mixin if object)
     * @param   { Object }  mixin - mixin logic
     * @param   { Boolean } g - is global?
     * @returns { Object }  the mixin logic
     */
    return function(name, mixin, g) {
      // Unnamed global
      if (isObject(name)) {
        riot.mixin('__unnamed_'+_id++, name, true)
        return
      }

      var store = g ? globals : mixins

      // Getter
      if (!mixin) {
        if (typeof store[name] === T_UNDEF) {
          throw new Error('Unregistered mixin: ' + name)
        }
        return store[name]
      }
      // Setter
      if (isFunction(mixin)) {
        extend(mixin.prototype, store[name] || {})
        store[name] = mixin
      }
      else {
        store[name] = extend(store[name] || {}, mixin)
      }
    }

  })()

  /**
   * Create a new riot tag implementation
   * @param   { String }   name - name/id of the new riot tag
   * @param   { String }   html - tag template
   * @param   { String }   css - custom tag css
   * @param   { String }   attrs - root tag attributes
   * @param   { Function } fn - user function
   * @returns { String } name/id of the tag just created
   */
  riot.tag = function(name, html, css, attrs, fn) {
    if (isFunction(attrs)) {
      fn = attrs
      if (/^[\w\-]+\s?=/.test(css)) {
        attrs = css
        css = ''
      } else attrs = ''
    }
    if (css) {
      if (isFunction(css)) fn = css
      else styleManager.add(css)
    }
    name = name.toLowerCase()
    __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn }
    return name
  }

  /**
   * Create a new riot tag implementation (for use by the compiler)
   * @param   { String }   name - name/id of the new riot tag
   * @param   { String }   html - tag template
   * @param   { String }   css - custom tag css
   * @param   { String }   attrs - root tag attributes
   * @param   { Function } fn - user function
   * @returns { String } name/id of the tag just created
   */
  riot.tag2 = function(name, html, css, attrs, fn) {
    if (css) styleManager.add(css)
    //if (bpair) riot.settings.brackets = bpair
    __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn }
    return name
  }

  /**
   * Mount a tag using a specific tag implementation
   * @param   { String } selector - tag DOM selector
   * @param   { String } tagName - tag implementation name
   * @param   { Object } opts - tag logic
   * @returns { Array } new tags instances
   */
  riot.mount = function(selector, tagName, opts) {

    var els,
      allTags,
      tags = []

    // helper functions

    function addRiotTags(arr) {
      var list = ''
      each(arr, function (e) {
        if (!/[^-\w]/.test(e)) {
          e = e.trim().toLowerCase()
          list += ',[' + RIOT_TAG_IS + '="' + e + '"],[' + RIOT_TAG + '="' + e + '"]'
        }
      })
      return list
    }

    function selectAllTags() {
      var keys = Object.keys(__tagImpl)
      return keys + addRiotTags(keys)
    }

    function pushTags(root) {
      if (root.tagName) {
        var riotTag = getAttr(root, RIOT_TAG_IS) || getAttr(root, RIOT_TAG)

        // have tagName? force riot-tag to be the same
        if (tagName && riotTag !== tagName) {
          riotTag = tagName
          setAttr(root, RIOT_TAG_IS, tagName)
          setAttr(root, RIOT_TAG, tagName) // this will be removed in riot 3.0.0
        }
        var tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts)

        if (tag) tags.push(tag)
      } else if (root.length) {
        each(root, pushTags)   // assume nodeList
      }
    }

    // ----- mount code -----

    // inject styles into DOM
    styleManager.inject()

    if (isObject(tagName)) {
      opts = tagName
      tagName = 0
    }

    // crawl the DOM to find the tag
    if (typeof selector === T_STRING) {
      if (selector === '*')
        // select all the tags registered
        // and also the tags found with the riot-tag attribute set
        selector = allTags = selectAllTags()
      else
        // or just the ones named like the selector
        selector += addRiotTags(selector.split(/, */))

      // make sure to pass always a selector
      // to the querySelectorAll function
      els = selector ? $$(selector) : []
    }
    else
      // probably you have passed already a tag or a NodeList
      els = selector

    // select all the registered and mount them inside their root elements
    if (tagName === '*') {
      // get all custom tags
      tagName = allTags || selectAllTags()
      // if the root els it's just a single tag
      if (els.tagName)
        els = $$(tagName, els)
      else {
        // select all the children for all the different root elements
        var nodeList = []
        each(els, function (_el) {
          nodeList.push($$(tagName, _el))
        })
        els = nodeList
      }
      // get rid of the tagName
      tagName = 0
    }

    pushTags(els)

    return tags
  }

  /**
   * Update all the tags instances created
   * @returns { Array } all the tags instances
   */
  riot.update = function() {
    return each(__virtualDom, function(tag) {
      tag.update()
    })
  }

  /**
   * Export the Virtual DOM
   */
  riot.vdom = __virtualDom

  /**
   * Export the Tag constructor
   */
  riot.Tag = Tag
    // support CommonJS, AMD & browser
    /* istanbul ignore next */
    if (typeof exports === T_OBJECT)
      module.exports = riot
    else if ("function" === T_FUNCTION && typeof __webpack_require__(45) !== T_UNDEF)
      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return riot }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    else
      window.riot = riot

  })(typeof window != 'undefined' ? window : void 0);


/***/ },
/* 45 */
/***/ function(module, exports) {

  /* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

  /* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 46 */
/***/ function(module, exports) {

  /* WEBPACK VAR INJECTION */(function(global) {/*!

  Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

  */
  // global window Object
  // optional polyfill info
  //    'auto' used by default, everything is feature detected
  //    'force' use the polyfill even if not fully needed
  function installCustomElements(window, polyfill) {'use strict';

    // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
    // THIS IS A PROJECT BASED ON A BUILD SYSTEM
    // THIS FILE IS JUST WRAPPED UP RESULTING IN
    // build/document-register-element.node.js

    var
      document = window.document,
      Object = window.Object
    ;

    var htmlClass = (function (info) {
      // (C) Andrea Giammarchi - @WebReflection - MIT Style
      var
        catchClass = /^[A-Z]+[a-z]/,
        filterBy = function (re) {
          var arr = [], tag;
          for (tag in register) {
            if (re.test(tag)) arr.push(tag);
          }
          return arr;
        },
        add = function (Class, tag) {
          tag = tag.toLowerCase();
          if (!(tag in register)) {
            register[Class] = (register[Class] || []).concat(tag);
            register[tag] = (register[tag.toUpperCase()] = Class);
          }
        },
        register = (Object.create || Object)(null),
        htmlClass = {},
        i, section, tags, Class
      ;
      for (section in info) {
        for (Class in info[section]) {
          tags = info[section][Class];
          register[Class] = tags;
          for (i = 0; i < tags.length; i++) {
            register[tags[i].toLowerCase()] =
            register[tags[i].toUpperCase()] = Class;
          }
        }
      }
      htmlClass.get = function get(tagOrClass) {
        return typeof tagOrClass === 'string' ?
          (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
          filterBy(tagOrClass);
      };
      htmlClass.set = function set(tag, Class) {
        return (catchClass.test(tag) ?
          add(tag, Class) :
          add(Class, tag)
        ), htmlClass;
      };
      return htmlClass;
    }({
      "collections": {
        "HTMLAllCollection": [
          "all"
        ],
        "HTMLCollection": [
          "forms"
        ],
        "HTMLFormControlsCollection": [
          "elements"
        ],
        "HTMLOptionsCollection": [
          "options"
        ]
      },
      "elements": {
        "Element": [
          "element"
        ],
        "HTMLAnchorElement": [
          "a"
        ],
        "HTMLAppletElement": [
          "applet"
        ],
        "HTMLAreaElement": [
          "area"
        ],
        "HTMLAttachmentElement": [
          "attachment"
        ],
        "HTMLAudioElement": [
          "audio"
        ],
        "HTMLBRElement": [
          "br"
        ],
        "HTMLBaseElement": [
          "base"
        ],
        "HTMLBodyElement": [
          "body"
        ],
        "HTMLButtonElement": [
          "button"
        ],
        "HTMLCanvasElement": [
          "canvas"
        ],
        "HTMLContentElement": [
          "content"
        ],
        "HTMLDListElement": [
          "dl"
        ],
        "HTMLDataElement": [
          "data"
        ],
        "HTMLDataListElement": [
          "datalist"
        ],
        "HTMLDetailsElement": [
          "details"
        ],
        "HTMLDialogElement": [
          "dialog"
        ],
        "HTMLDirectoryElement": [
          "dir"
        ],
        "HTMLDivElement": [
          "div"
        ],
        "HTMLDocument": [
          "document"
        ],
        "HTMLElement": [
          "element",
          "abbr",
          "address",
          "article",
          "aside",
          "b",
          "bdi",
          "bdo",
          "cite",
          "code",
          "command",
          "dd",
          "dfn",
          "dt",
          "em",
          "figcaption",
          "figure",
          "footer",
          "header",
          "i",
          "kbd",
          "mark",
          "nav",
          "noscript",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "small",
          "strong",
          "sub",
          "summary",
          "sup",
          "u",
          "var",
          "wbr"
        ],
        "HTMLEmbedElement": [
          "embed"
        ],
        "HTMLFieldSetElement": [
          "fieldset"
        ],
        "HTMLFontElement": [
          "font"
        ],
        "HTMLFormElement": [
          "form"
        ],
        "HTMLFrameElement": [
          "frame"
        ],
        "HTMLFrameSetElement": [
          "frameset"
        ],
        "HTMLHRElement": [
          "hr"
        ],
        "HTMLHeadElement": [
          "head"
        ],
        "HTMLHeadingElement": [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6"
        ],
        "HTMLHtmlElement": [
          "html"
        ],
        "HTMLIFrameElement": [
          "iframe"
        ],
        "HTMLImageElement": [
          "img"
        ],
        "HTMLInputElement": [
          "input"
        ],
        "HTMLKeygenElement": [
          "keygen"
        ],
        "HTMLLIElement": [
          "li"
        ],
        "HTMLLabelElement": [
          "label"
        ],
        "HTMLLegendElement": [
          "legend"
        ],
        "HTMLLinkElement": [
          "link"
        ],
        "HTMLMapElement": [
          "map"
        ],
        "HTMLMarqueeElement": [
          "marquee"
        ],
        "HTMLMediaElement": [
          "media"
        ],
        "HTMLMenuElement": [
          "menu"
        ],
        "HTMLMenuItemElement": [
          "menuitem"
        ],
        "HTMLMetaElement": [
          "meta"
        ],
        "HTMLMeterElement": [
          "meter"
        ],
        "HTMLModElement": [
          "del",
          "ins"
        ],
        "HTMLOListElement": [
          "ol"
        ],
        "HTMLObjectElement": [
          "object"
        ],
        "HTMLOptGroupElement": [
          "optgroup"
        ],
        "HTMLOptionElement": [
          "option"
        ],
        "HTMLOutputElement": [
          "output"
        ],
        "HTMLParagraphElement": [
          "p"
        ],
        "HTMLParamElement": [
          "param"
        ],
        "HTMLPictureElement": [
          "picture"
        ],
        "HTMLPreElement": [
          "pre"
        ],
        "HTMLProgressElement": [
          "progress"
        ],
        "HTMLQuoteElement": [
          "blockquote",
          "q",
          "quote"
        ],
        "HTMLScriptElement": [
          "script"
        ],
        "HTMLSelectElement": [
          "select"
        ],
        "HTMLShadowElement": [
          "shadow"
        ],
        "HTMLSlotElement": [
          "slot"
        ],
        "HTMLSourceElement": [
          "source"
        ],
        "HTMLSpanElement": [
          "span"
        ],
        "HTMLStyleElement": [
          "style"
        ],
        "HTMLTableCaptionElement": [
          "caption"
        ],
        "HTMLTableCellElement": [
          "td",
          "th"
        ],
        "HTMLTableColElement": [
          "col",
          "colgroup"
        ],
        "HTMLTableElement": [
          "table"
        ],
        "HTMLTableRowElement": [
          "tr"
        ],
        "HTMLTableSectionElement": [
          "thead",
          "tbody",
          "tfoot"
        ],
        "HTMLTemplateElement": [
          "template"
        ],
        "HTMLTextAreaElement": [
          "textarea"
        ],
        "HTMLTimeElement": [
          "time"
        ],
        "HTMLTitleElement": [
          "title"
        ],
        "HTMLTrackElement": [
          "track"
        ],
        "HTMLUListElement": [
          "ul"
        ],
        "HTMLUnknownElement": [
          "unknown",
          "vhgroupv",
          "vkeygen"
        ],
        "HTMLVideoElement": [
          "video"
        ]
      },
      "nodes": {
        "Attr": [
          "node"
        ],
        "Audio": [
          "audio"
        ],
        "CDATASection": [
          "node"
        ],
        "CharacterData": [
          "node"
        ],
        "Comment": [
          "#comment"
        ],
        "Document": [
          "#document"
        ],
        "DocumentFragment": [
          "#document-fragment"
        ],
        "DocumentType": [
          "node"
        ],
        "HTMLDocument": [
          "#document"
        ],
        "Image": [
          "img"
        ],
        "Option": [
          "option"
        ],
        "ProcessingInstruction": [
          "node"
        ],
        "ShadowRoot": [
          "#shadow-root"
        ],
        "Text": [
          "#text"
        ],
        "XMLDocument": [
          "xml"
        ]
      }
    }));
    
    
      
    // passed at runtime, configurable
    // via nodejs module
    if (!polyfill) polyfill = 'auto';
    
    var
      // V0 polyfill entry
      REGISTER_ELEMENT = 'registerElement',
    
      // IE < 11 only + old WebKit for attributes + feature detection
      EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
    
      // shortcuts and costants
      ADD_EVENT_LISTENER = 'addEventListener',
      ATTACHED = 'attached',
      CALLBACK = 'Callback',
      DETACHED = 'detached',
      EXTENDS = 'extends',
    
      ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
      ATTACHED_CALLBACK = ATTACHED + CALLBACK,
      CONNECTED_CALLBACK = 'connected' + CALLBACK,
      DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
      CREATED_CALLBACK = 'created' + CALLBACK,
      DETACHED_CALLBACK = DETACHED + CALLBACK,
    
      ADDITION = 'ADDITION',
      MODIFICATION = 'MODIFICATION',
      REMOVAL = 'REMOVAL',
    
      DOM_ATTR_MODIFIED = 'DOMAttrModified',
      DOM_CONTENT_LOADED = 'DOMContentLoaded',
      DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
    
      PREFIX_TAG = '<',
      PREFIX_IS = '=',
    
      // valid and invalid node names
      validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
      invalidNames = [
        'ANNOTATION-XML',
        'COLOR-PROFILE',
        'FONT-FACE',
        'FONT-FACE-SRC',
        'FONT-FACE-URI',
        'FONT-FACE-FORMAT',
        'FONT-FACE-NAME',
        'MISSING-GLYPH'
      ],
    
      // registered types and their prototypes
      types = [],
      protos = [],
    
      // to query subnodes
      query = '',
    
      // html shortcut used to feature detect
      documentElement = document.documentElement,
    
      // ES5 inline helpers || basic patches
      indexOf = types.indexOf || function (v) {
        for(var i = this.length; i-- && this[i] !== v;){}
        return i;
      },
    
      // other helpers / shortcuts
      OP = Object.prototype,
      hOP = OP.hasOwnProperty,
      iPO = OP.isPrototypeOf,
    
      defineProperty = Object.defineProperty,
      empty = [],
      gOPD = Object.getOwnPropertyDescriptor,
      gOPN = Object.getOwnPropertyNames,
      gPO = Object.getPrototypeOf,
      sPO = Object.setPrototypeOf,
    
      // jshint proto: true
      hasProto = !!Object.__proto__,
    
      // V1 helpers
      fixGetClass = false,
      DRECEV1 = '__dreCEv1',
      customElements = window.customElements,
      usableCustomElements = polyfill !== 'force' && !!(
        customElements &&
        customElements.define &&
        customElements.get &&
        customElements.whenDefined
      ),
      Dict = Object.create || Object,
      Map = window.Map || function Map() {
        var K = [], V = [], i;
        return {
          get: function (k) {
            return V[indexOf.call(K, k)];
          },
          set: function (k, v) {
            i = indexOf.call(K, k);
            if (i < 0) V[K.push(k) - 1] = v;
            else V[i] = v;
          }
        };
      },
      Promise = window.Promise || function (fn) {
        var
          notify = [],
          done = false,
          p = {
            'catch': function () {
              return p;
            },
            'then': function (cb) {
              notify.push(cb);
              if (done) setTimeout(resolve, 1);
              return p;
            }
          }
        ;
        function resolve(value) {
          done = true;
          while (notify.length) notify.shift()(value);
        }
        fn(resolve);
        return p;
      },
      justCreated = false,
      constructors = Dict(null),
      waitingList = Dict(null),
      nodeNames = new Map(),
      secondArgument = String,
    
      // used to create unique instances
      create = Object.create || function Bridge(proto) {
        // silly broken polyfill probably ever used but short enough to work
        return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
      },
    
      // will set the prototype if possible
      // or copy over all properties
      setPrototype = sPO || (
        hasProto ?
          function (o, p) {
            o.__proto__ = p;
            return o;
          } : (
        (gOPN && gOPD) ?
          (function(){
            function setProperties(o, p) {
              for (var
                key,
                names = gOPN(p),
                i = 0, length = names.length;
                i < length; i++
              ) {
                key = names[i];
                if (!hOP.call(o, key)) {
                  defineProperty(o, key, gOPD(p, key));
                }
              }
            }
            return function (o, p) {
              do {
                setProperties(o, p);
              } while ((p = gPO(p)) && !iPO.call(p, o));
              return o;
            };
          }()) :
          function (o, p) {
            for (var key in p) {
              o[key] = p[key];
            }
            return o;
          }
      )),
    
      // DOM shortcuts and helpers, if any
    
      MutationObserver = window.MutationObserver ||
                         window.WebKitMutationObserver,
    
      HTMLElementPrototype = (
        window.HTMLElement ||
        window.Element ||
        window.Node
      ).prototype,
    
      IE8 = !iPO.call(HTMLElementPrototype, documentElement),
    
      safeProperty = IE8 ? function (o, k, d) {
        o[k] = d.value;
        return o;
      } : defineProperty,
    
      isValidNode = IE8 ?
        function (node) {
          return node.nodeType === 1;
        } :
        function (node) {
          return iPO.call(HTMLElementPrototype, node);
        },
    
      targets = IE8 && [],
    
      attachShadow = HTMLElementPrototype.attachShadow,
      cloneNode = HTMLElementPrototype.cloneNode,
      dispatchEvent = HTMLElementPrototype.dispatchEvent,
      getAttribute = HTMLElementPrototype.getAttribute,
      hasAttribute = HTMLElementPrototype.hasAttribute,
      removeAttribute = HTMLElementPrototype.removeAttribute,
      setAttribute = HTMLElementPrototype.setAttribute,
    
      // replaced later on
      createElement = document.createElement,
      patchedCreateElement = createElement,
    
      // shared observer for all attributes
      attributesObserver = MutationObserver && {
        attributes: true,
        characterData: true,
        attributeOldValue: true
      },
    
      // useful to detect only if there's no MutationObserver
      DOMAttrModified = MutationObserver || function(e) {
        doesNotSupportDOMAttrModified = false;
        documentElement.removeEventListener(
          DOM_ATTR_MODIFIED,
          DOMAttrModified
        );
      },
    
      // will both be used to make DOMNodeInserted asynchronous
      asapQueue,
      asapTimer = 0,
    
      // internal flags
      setListener = false,
      doesNotSupportDOMAttrModified = true,
      dropDomContentLoaded = true,
    
      // needed for the innerHTML helper
      notFromInnerHTMLHelper = true,
    
      // optionally defined later on
      onSubtreeModified,
      callDOMAttrModified,
      getAttributesMirror,
      observer,
      observe,
    
      // based on setting prototype capability
      // will check proto or the expando attribute
      // in order to setup the node once
      patchIfNotAlready,
      patch
    ;
    
    // only if needed
    if (!(REGISTER_ELEMENT in document)) {
    
      if (sPO || hasProto) {
          patchIfNotAlready = function (node, proto) {
            if (!iPO.call(proto, node)) {
              setupNode(node, proto);
            }
          };
          patch = setupNode;
      } else {
          patchIfNotAlready = function (node, proto) {
            if (!node[EXPANDO_UID]) {
              node[EXPANDO_UID] = Object(true);
              setupNode(node, proto);
            }
          };
          patch = patchIfNotAlready;
      }
    
      if (IE8) {
        doesNotSupportDOMAttrModified = false;
        (function (){
          var
            descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
            addEventListener = descriptor.value,
            patchedRemoveAttribute = function (name) {
              var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
              e.attrName = name;
              e.prevValue = getAttribute.call(this, name);
              e.newValue = null;
              e[REMOVAL] = e.attrChange = 2;
              removeAttribute.call(this, name);
              dispatchEvent.call(this, e);
            },
            patchedSetAttribute = function (name, value) {
              var
                had = hasAttribute.call(this, name),
                old = had && getAttribute.call(this, name),
                e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
              ;
              setAttribute.call(this, name, value);
              e.attrName = name;
              e.prevValue = had ? old : null;
              e.newValue = value;
              if (had) {
                e[MODIFICATION] = e.attrChange = 1;
              } else {
                e[ADDITION] = e.attrChange = 0;
              }
              dispatchEvent.call(this, e);
            },
            onPropertyChange = function (e) {
              // jshint eqnull:true
              var
                node = e.currentTarget,
                superSecret = node[EXPANDO_UID],
                propertyName = e.propertyName,
                event
              ;
              if (superSecret.hasOwnProperty(propertyName)) {
                superSecret = superSecret[propertyName];
                event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
                event.attrName = superSecret.name;
                event.prevValue = superSecret.value || null;
                event.newValue = (superSecret.value = node[propertyName] || null);
                if (event.prevValue == null) {
                  event[ADDITION] = event.attrChange = 0;
                } else {
                  event[MODIFICATION] = event.attrChange = 1;
                }
                dispatchEvent.call(node, event);
              }
            }
          ;
          descriptor.value = function (type, handler, capture) {
            if (
              type === DOM_ATTR_MODIFIED &&
              this[ATTRIBUTE_CHANGED_CALLBACK] &&
              this.setAttribute !== patchedSetAttribute
            ) {
              this[EXPANDO_UID] = {
                className: {
                  name: 'class',
                  value: this.className
                }
              };
              this.setAttribute = patchedSetAttribute;
              this.removeAttribute = patchedRemoveAttribute;
              addEventListener.call(this, 'propertychange', onPropertyChange);
            }
            addEventListener.call(this, type, handler, capture);
          };
          defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
        }());
      } else if (!MutationObserver) {
        documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
        documentElement.setAttribute(EXPANDO_UID, 1);
        documentElement.removeAttribute(EXPANDO_UID);
        if (doesNotSupportDOMAttrModified) {
          onSubtreeModified = function (e) {
            var
              node = this,
              oldAttributes,
              newAttributes,
              key
            ;
            if (node === e.target) {
              oldAttributes = node[EXPANDO_UID];
              node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
              for (key in newAttributes) {
                if (!(key in oldAttributes)) {
                  // attribute was added
                  return callDOMAttrModified(
                    0,
                    node,
                    key,
                    oldAttributes[key],
                    newAttributes[key],
                    ADDITION
                  );
                } else if (newAttributes[key] !== oldAttributes[key]) {
                  // attribute was changed
                  return callDOMAttrModified(
                    1,
                    node,
                    key,
                    oldAttributes[key],
                    newAttributes[key],
                    MODIFICATION
                  );
                }
              }
              // checking if it has been removed
              for (key in oldAttributes) {
                if (!(key in newAttributes)) {
                  // attribute removed
                  return callDOMAttrModified(
                    2,
                    node,
                    key,
                    oldAttributes[key],
                    newAttributes[key],
                    REMOVAL
                  );
                }
              }
            }
          };
          callDOMAttrModified = function (
            attrChange,
            currentTarget,
            attrName,
            prevValue,
            newValue,
            action
          ) {
            var e = {
              attrChange: attrChange,
              currentTarget: currentTarget,
              attrName: attrName,
              prevValue: prevValue,
              newValue: newValue
            };
            e[action] = attrChange;
            onDOMAttrModified(e);
          };
          getAttributesMirror = function (node) {
            for (var
              attr, name,
              result = {},
              attributes = node.attributes,
              i = 0, length = attributes.length;
              i < length; i++
            ) {
              attr = attributes[i];
              name = attr.name;
              if (name !== 'setAttribute') {
                result[name] = attr.value;
              }
            }
            return result;
          };
        }
      }
    
      // set as enumerable, writable and configurable
      document[REGISTER_ELEMENT] = function registerElement(type, options) {
        upperType = type.toUpperCase();
        if (!setListener) {
          // only first time document.registerElement is used
          // we need to set this listener
          // setting it by default might slow down for no reason
          setListener = true;
          if (MutationObserver) {
            observer = (function(attached, detached){
              function checkEmAll(list, callback) {
                for (var i = 0, length = list.length; i < length; callback(list[i++])){}
              }
              return new MutationObserver(function (records) {
                for (var
                  current, node, newValue,
                  i = 0, length = records.length; i < length; i++
                ) {
                  current = records[i];
                  if (current.type === 'childList') {
                    checkEmAll(current.addedNodes, attached);
                    checkEmAll(current.removedNodes, detached);
                  } else {
                    node = current.target;
                    if (notFromInnerHTMLHelper &&
                        node[ATTRIBUTE_CHANGED_CALLBACK] &&
                        current.attributeName !== 'style') {
                      newValue = getAttribute.call(node, current.attributeName);
                      if (newValue !== current.oldValue) {
                        node[ATTRIBUTE_CHANGED_CALLBACK](
                          current.attributeName,
                          current.oldValue,
                          newValue
                        );
                      }
                    }
                  }
                }
              });
            }(executeAction(ATTACHED), executeAction(DETACHED)));
            observe = function (node) {
              observer.observe(
                node,
                {
                  childList: true,
                  subtree: true
                }
              );
              return node;
            };
            observe(document);
            if (attachShadow) {
              HTMLElementPrototype.attachShadow = function () {
                return observe(attachShadow.apply(this, arguments));
              };
            }
          } else {
            asapQueue = [];
            document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
            document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
          }
    
          document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
          document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
    
          HTMLElementPrototype.cloneNode = function (deep) {
            var
              node = cloneNode.call(this, !!deep),
              i = getTypeIndex(node)
            ;
            if (-1 < i) patch(node, protos[i]);
            if (deep) loopAndSetup(node.querySelectorAll(query));
            return node;
          };
        }
    
        if (-2 < (
          indexOf.call(types, PREFIX_IS + upperType) +
          indexOf.call(types, PREFIX_TAG + upperType)
        )) {
          throwTypeError(type);
        }
    
        if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
          throw new Error('The type ' + type + ' is invalid');
        }
    
        var
          constructor = function () {
            return extending ?
              document.createElement(nodeName, upperType) :
              document.createElement(nodeName);
          },
          opt = options || OP,
          extending = hOP.call(opt, EXTENDS),
          nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
          upperType,
          i
        ;
    
        if (extending && -1 < (
          indexOf.call(types, PREFIX_TAG + nodeName)
        )) {
          throwTypeError(nodeName);
        }
    
        i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
    
        query = query.concat(
          query.length ? ',' : '',
          extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
        );
    
        constructor.prototype = (
          protos[i] = hOP.call(opt, 'prototype') ?
            opt.prototype :
            create(HTMLElementPrototype)
        );
    
        loopAndVerify(
          document.querySelectorAll(query),
          ATTACHED
        );
    
        return constructor;
      };
    
      document.createElement = (patchedCreateElement = function (localName, typeExtension) {
        var
          is = getIs(typeExtension),
          node = is ?
            createElement.call(document, localName, secondArgument(is)) :
            createElement.call(document, localName),
          name = '' + localName,
          i = indexOf.call(
            types,
            (is ? PREFIX_IS : PREFIX_TAG) +
            (is || name).toUpperCase()
          ),
          setup = -1 < i
        ;
        if (is) {
          node.setAttribute('is', is = is.toLowerCase());
          if (setup) {
            setup = isInQSA(name.toUpperCase(), is);
          }
        }
        notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
        if (setup) patch(node, protos[i]);
        return node;
      });
    
    }
    
    function ASAP() {
      var queue = asapQueue.splice(0, asapQueue.length);
      asapTimer = 0;
      while (queue.length) {
        queue.shift().call(
          null, queue.shift()
        );
      }
    }
    
    function loopAndVerify(list, action) {
      for (var i = 0, length = list.length; i < length; i++) {
        verifyAndSetupAndAction(list[i], action);
      }
    }
    
    function loopAndSetup(list) {
      for (var i = 0, length = list.length, node; i < length; i++) {
        node = list[i];
        patch(node, protos[getTypeIndex(node)]);
      }
    }
    
    function executeAction(action) {
      return function (node) {
        if (isValidNode(node)) {
          verifyAndSetupAndAction(node, action);
          loopAndVerify(
            node.querySelectorAll(query),
            action
          );
        }
      };
    }
    
    function getTypeIndex(target) {
      var
        is = getAttribute.call(target, 'is'),
        nodeName = target.nodeName.toUpperCase(),
        i = indexOf.call(
          types,
          is ?
              PREFIX_IS + is.toUpperCase() :
              PREFIX_TAG + nodeName
        )
      ;
      return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
    }
    
    function isInQSA(name, type) {
      return -1 < query.indexOf(name + '[is="' + type + '"]');
    }
    
    function onDOMAttrModified(e) {
      var
        node = e.currentTarget,
        attrChange = e.attrChange,
        attrName = e.attrName,
        target = e.target,
        addition = e[ADDITION] || 2,
        removal = e[REMOVAL] || 3
      ;
      if (notFromInnerHTMLHelper &&
          (!target || target === node) &&
          node[ATTRIBUTE_CHANGED_CALLBACK] &&
          attrName !== 'style' && (
            e.prevValue !== e.newValue ||
            // IE9, IE10, and Opera 12 gotcha
            e.newValue === '' && (
              attrChange === addition ||
              attrChange === removal
            )
      )) {
        node[ATTRIBUTE_CHANGED_CALLBACK](
          attrName,
          attrChange === addition ? null : e.prevValue,
          attrChange === removal ? null : e.newValue
        );
      }
    }
    
    function onDOMNode(action) {
      var executor = executeAction(action);
      return function (e) {
        asapQueue.push(executor, e.target);
        if (asapTimer) clearTimeout(asapTimer);
        asapTimer = setTimeout(ASAP, 1);
      };
    }
    
    function onReadyStateChange(e) {
      if (dropDomContentLoaded) {
        dropDomContentLoaded = false;
        e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
      }
      loopAndVerify(
        (e.target || document).querySelectorAll(query),
        e.detail === DETACHED ? DETACHED : ATTACHED
      );
      if (IE8) purge();
    }
    
    function patchedSetAttribute(name, value) {
      // jshint validthis:true
      var self = this;
      setAttribute.call(self, name, value);
      onSubtreeModified.call(self, {target: self});
    }
    
    function setupNode(node, proto) {
      setPrototype(node, proto);
      if (observer) {
        observer.observe(node, attributesObserver);
      } else {
        if (doesNotSupportDOMAttrModified) {
          node.setAttribute = patchedSetAttribute;
          node[EXPANDO_UID] = getAttributesMirror(node);
          node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
        }
        node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
      }
      if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
        node.created = true;
        node[CREATED_CALLBACK]();
        node.created = false;
      }
    }
    
    function purge() {
      for (var
        node,
        i = 0,
        length = targets.length;
        i < length; i++
      ) {
        node = targets[i];
        if (!documentElement.contains(node)) {
          length--;
          targets.splice(i--, 1);
          verifyAndSetupAndAction(node, DETACHED);
        }
      }
    }
    
    function throwTypeError(type) {
      throw new Error('A ' + type + ' type is already registered');
    }
    
    function verifyAndSetupAndAction(node, action) {
      var
        fn,
        i = getTypeIndex(node)
      ;
      if (-1 < i) {
        patchIfNotAlready(node, protos[i]);
        i = 0;
        if (action === ATTACHED && !node[ATTACHED]) {
          node[DETACHED] = false;
          node[ATTACHED] = true;
          i = 1;
          if (IE8 && indexOf.call(targets, node) < 0) {
            targets.push(node);
          }
        } else if (action === DETACHED && !node[DETACHED]) {
          node[ATTACHED] = false;
          node[DETACHED] = true;
          i = 1;
        }
        if (i && (fn = node[action + CALLBACK])) fn.call(node);
      }
    }
    
    
    
    // V1 in da House!
    function CustomElementRegistry() {}
    
    CustomElementRegistry.prototype = {
      constructor: CustomElementRegistry,
      // a workaround for the stubborn WebKit
      define: usableCustomElements ?
        function (name, Class, options) {
          if (options) {
            CERDefine(name, Class, options);
          } else {
            var NAME = name.toUpperCase();
            constructors[NAME] = {
              constructor: Class,
              create: [NAME]
            };
            nodeNames.set(Class, NAME);
            customElements.define(name, Class);
          }
        } :
        CERDefine,
      get: usableCustomElements ?
        function (name) {
          return customElements.get(name) || get(name);
        } :
        get,
      whenDefined: usableCustomElements ?
        function (name) {
          return Promise.race([
            customElements.whenDefined(name),
            whenDefined(name)
          ]);
        } :
        whenDefined
    };
    
    function CERDefine(name, Class, options) {
      var
        is = options && options[EXTENDS] || '',
        CProto = Class.prototype,
        proto = create(CProto),
        attributes = Class.observedAttributes || empty,
        definition = {prototype: proto}
      ;
      // TODO: is this needed at all since it's inherited?
      // defineProperty(proto, 'constructor', {value: Class});
      safeProperty(proto, CREATED_CALLBACK, {
          value: function () {
            if (justCreated) justCreated = false;
            else if (!this[DRECEV1]) {
              this[DRECEV1] = true;
              new Class(this);
              if (CProto[CREATED_CALLBACK])
                CProto[CREATED_CALLBACK].call(this);
              var info = constructors[nodeNames.get(Class)];
              if (!usableCustomElements || info.create.length > 1) {
                notifyAttributes(this);
              }
            }
        }
      });
      safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
        value: function (name) {
          if (-1 < indexOf.call(attributes, name))
            CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
        }
      });
      if (CProto[CONNECTED_CALLBACK]) {
        safeProperty(proto, ATTACHED_CALLBACK, {
          value: CProto[CONNECTED_CALLBACK]
        });
      }
      if (CProto[DISCONNECTED_CALLBACK]) {
        safeProperty(proto, DETACHED_CALLBACK, {
          value: CProto[DISCONNECTED_CALLBACK]
        });
      }
      if (is) definition[EXTENDS] = is;
      name = name.toUpperCase();
      constructors[name] = {
        constructor: Class,
        create: is ? [is, secondArgument(name)] : [name]
      };
      nodeNames.set(Class, name);
      document[REGISTER_ELEMENT](name.toLowerCase(), definition);
      whenDefined(name);
      waitingList[name].r();
    }
    
    function get(name) {
      var info = constructors[name.toUpperCase()];
      return info && info.constructor;
    }
    
    function getIs(options) {
      return typeof options === 'string' ?
          options : (options && options.is || '');
    }
    
    function notifyAttributes(self) {
      var
        callback = self[ATTRIBUTE_CHANGED_CALLBACK],
        attributes = callback ? self.attributes : empty,
        i = attributes.length,
        attribute
      ;
      while (i--) {
        attribute =  attributes[i]; // || attributes.item(i);
        callback.call(
          self,
          attribute.name || attribute.nodeName,
          null,
          attribute.value || attribute.nodeValue
        );
      }
    }
    
    function whenDefined(name) {
      name = name.toUpperCase();
      if (!(name in waitingList)) {
        waitingList[name] = {};
        waitingList[name].p = new Promise(function (resolve) {
          waitingList[name].r = resolve;
        });
      }
      return waitingList[name].p;
    }
    
    function polyfillV1() {
      if (customElements) delete window.customElements;
      defineProperty(window, 'customElements', {
        configurable: true,
        value: new CustomElementRegistry()
      });
      defineProperty(window, 'CustomElementRegistry', {
        configurable: true,
        value: CustomElementRegistry
      });
      for (var
        patchClass = function (name) {
          var Class = window[name];
          if (Class) {
            window[name] = function CustomElementsV1(self) {
              var info, isNative;
              if (!self) self = this;
              if (!self[DRECEV1]) {
                justCreated = true;
                info = constructors[nodeNames.get(self.constructor)];
                isNative = usableCustomElements && info.create.length === 1;
                self = isNative ?
                  Reflect.construct(Class, empty, info.constructor) :
                  document.createElement.apply(document, info.create);
                self[DRECEV1] = true;
                justCreated = false;
                if (!isNative) notifyAttributes(self);
              }
              return self;
            };
            window[name].prototype = Class.prototype;
            try {
              Class.prototype.constructor = window[name];
            } catch(WebKit) {
              fixGetClass = true;
              defineProperty(Class, DRECEV1, {value: window[name]});
            }
          }
        },
        Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
        i = Classes.length;
        i--;
        patchClass(Classes[i])
      ) {}
      (document.createElement = function (name, options) {
        var is = getIs(options);
        return is ?
          patchedCreateElement.call(this, name, secondArgument(is)) :
          patchedCreateElement.call(this, name);
      });
    }
    
    // if customElements is not there at all
    if (!customElements || polyfill === 'force') polyfillV1();
    else {
      // if available test extends work as expected
      try {
        (function (DRE, options, name) {
          options[EXTENDS] = 'a';
          DRE.prototype = create(HTMLAnchorElement.prototype);
          DRE.prototype.constructor = DRE;
          window.customElements.define(name, DRE, options);
          if (
            getAttribute.call(document.createElement('a', {is: name}), 'is') !== name ||
            (usableCustomElements && getAttribute.call(new DRE(), 'is') !== name)
          ) {
            throw options;
          }
        }(
          function DRE() {
            return Reflect.construct(HTMLAnchorElement, [], DRE);
          },
          {},
          'document-register-element-a'
        ));
      } catch(o_O) {
        // or force the polyfill if not
        // and keep internal original reference
        polyfillV1();
      }
    }
    
    try {
      createElement.call(document, 'a', 'a');
    } catch(FireFox) {
      secondArgument = function (is) {
        return {is: is};
      };
    }
    
  }

  module.exports = installCustomElements;
  installCustomElements(global);

  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global) {"use strict";

  __webpack_require__(48);

  __webpack_require__(339);

  __webpack_require__(340);

  if (global._babelPolyfill) {
    throw new Error("only one instance of babel-polyfill is allowed");
  }
  global._babelPolyfill = true;

  var DEFINE_PROPERTY = "defineProperty";
  function define(O, key, value) {
    O[key] || Object[DEFINE_PROPERTY](O, key, {
      writable: true,
      configurable: true,
      value: value
    });
  }

  define(String.prototype, "padLeft", "".padStart);
  define(String.prototype, "padRight", "".padEnd);

  "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
    [][key] && define(Array, key, Function.call.bind([][key]));
  });
  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(49);
  __webpack_require__(98);
  __webpack_require__(99);
  __webpack_require__(100);
  __webpack_require__(101);
  __webpack_require__(103);
  __webpack_require__(106);
  __webpack_require__(107);
  __webpack_require__(108);
  __webpack_require__(109);
  __webpack_require__(110);
  __webpack_require__(111);
  __webpack_require__(112);
  __webpack_require__(113);
  __webpack_require__(114);
  __webpack_require__(116);
  __webpack_require__(118);
  __webpack_require__(120);
  __webpack_require__(122);
  __webpack_require__(125);
  __webpack_require__(126);
  __webpack_require__(127);
  __webpack_require__(131);
  __webpack_require__(133);
  __webpack_require__(135);
  __webpack_require__(138);
  __webpack_require__(139);
  __webpack_require__(140);
  __webpack_require__(141);
  __webpack_require__(143);
  __webpack_require__(144);
  __webpack_require__(145);
  __webpack_require__(146);
  __webpack_require__(147);
  __webpack_require__(148);
  __webpack_require__(149);
  __webpack_require__(151);
  __webpack_require__(152);
  __webpack_require__(153);
  __webpack_require__(155);
  __webpack_require__(156);
  __webpack_require__(157);
  __webpack_require__(159);
  __webpack_require__(160);
  __webpack_require__(161);
  __webpack_require__(162);
  __webpack_require__(163);
  __webpack_require__(164);
  __webpack_require__(165);
  __webpack_require__(166);
  __webpack_require__(167);
  __webpack_require__(168);
  __webpack_require__(169);
  __webpack_require__(170);
  __webpack_require__(171);
  __webpack_require__(172);
  __webpack_require__(177);
  __webpack_require__(178);
  __webpack_require__(182);
  __webpack_require__(183);
  __webpack_require__(184);
  __webpack_require__(185);
  __webpack_require__(187);
  __webpack_require__(188);
  __webpack_require__(189);
  __webpack_require__(190);
  __webpack_require__(191);
  __webpack_require__(192);
  __webpack_require__(193);
  __webpack_require__(194);
  __webpack_require__(195);
  __webpack_require__(196);
  __webpack_require__(197);
  __webpack_require__(198);
  __webpack_require__(199);
  __webpack_require__(200);
  __webpack_require__(201);
  __webpack_require__(202);
  __webpack_require__(203);
  __webpack_require__(205);
  __webpack_require__(206);
  __webpack_require__(212);
  __webpack_require__(213);
  __webpack_require__(215);
  __webpack_require__(216);
  __webpack_require__(217);
  __webpack_require__(221);
  __webpack_require__(222);
  __webpack_require__(223);
  __webpack_require__(224);
  __webpack_require__(225);
  __webpack_require__(227);
  __webpack_require__(228);
  __webpack_require__(229);
  __webpack_require__(230);
  __webpack_require__(233);
  __webpack_require__(235);
  __webpack_require__(236);
  __webpack_require__(237);
  __webpack_require__(239);
  __webpack_require__(241);
  __webpack_require__(243);
  __webpack_require__(244);
  __webpack_require__(245);
  __webpack_require__(247);
  __webpack_require__(248);
  __webpack_require__(249);
  __webpack_require__(250);
  __webpack_require__(257);
  __webpack_require__(260);
  __webpack_require__(261);
  __webpack_require__(263);
  __webpack_require__(264);
  __webpack_require__(267);
  __webpack_require__(268);
  __webpack_require__(270);
  __webpack_require__(271);
  __webpack_require__(272);
  __webpack_require__(273);
  __webpack_require__(274);
  __webpack_require__(275);
  __webpack_require__(276);
  __webpack_require__(277);
  __webpack_require__(278);
  __webpack_require__(279);
  __webpack_require__(280);
  __webpack_require__(281);
  __webpack_require__(282);
  __webpack_require__(283);
  __webpack_require__(284);
  __webpack_require__(285);
  __webpack_require__(286);
  __webpack_require__(287);
  __webpack_require__(288);
  __webpack_require__(290);
  __webpack_require__(291);
  __webpack_require__(292);
  __webpack_require__(293);
  __webpack_require__(294);
  __webpack_require__(295);
  __webpack_require__(297);
  __webpack_require__(298);
  __webpack_require__(299);
  __webpack_require__(300);
  __webpack_require__(301);
  __webpack_require__(302);
  __webpack_require__(303);
  __webpack_require__(304);
  __webpack_require__(306);
  __webpack_require__(307);
  __webpack_require__(309);
  __webpack_require__(310);
  __webpack_require__(311);
  __webpack_require__(312);
  __webpack_require__(315);
  __webpack_require__(316);
  __webpack_require__(317);
  __webpack_require__(318);
  __webpack_require__(319);
  __webpack_require__(320);
  __webpack_require__(321);
  __webpack_require__(322);
  __webpack_require__(324);
  __webpack_require__(325);
  __webpack_require__(326);
  __webpack_require__(327);
  __webpack_require__(328);
  __webpack_require__(329);
  __webpack_require__(330);
  __webpack_require__(331);
  __webpack_require__(332);
  __webpack_require__(333);
  __webpack_require__(334);
  __webpack_require__(337);
  __webpack_require__(338);
  module.exports = __webpack_require__(55);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // ECMAScript 6 symbols shim
  var global         = __webpack_require__(50)
    , has            = __webpack_require__(51)
    , DESCRIPTORS    = __webpack_require__(52)
    , $export        = __webpack_require__(54)
    , redefine       = __webpack_require__(64)
    , META           = __webpack_require__(68).KEY
    , $fails         = __webpack_require__(53)
    , shared         = __webpack_require__(69)
    , setToStringTag = __webpack_require__(70)
    , uid            = __webpack_require__(65)
    , wks            = __webpack_require__(71)
    , wksExt         = __webpack_require__(72)
    , wksDefine      = __webpack_require__(73)
    , keyOf          = __webpack_require__(75)
    , enumKeys       = __webpack_require__(88)
    , isArray        = __webpack_require__(91)
    , anObject       = __webpack_require__(58)
    , toIObject      = __webpack_require__(78)
    , toPrimitive    = __webpack_require__(62)
    , createDesc     = __webpack_require__(63)
    , _create        = __webpack_require__(92)
    , gOPNExt        = __webpack_require__(95)
    , $GOPD          = __webpack_require__(97)
    , $DP            = __webpack_require__(57)
    , $keys          = __webpack_require__(76)
    , gOPD           = $GOPD.f
    , dP             = $DP.f
    , gOPN           = gOPNExt.f
    , $Symbol        = global.Symbol
    , $JSON          = global.JSON
    , _stringify     = $JSON && $JSON.stringify
    , PROTOTYPE      = 'prototype'
    , HIDDEN         = wks('_hidden')
    , TO_PRIMITIVE   = wks('toPrimitive')
    , isEnum         = {}.propertyIsEnumerable
    , SymbolRegistry = shared('symbol-registry')
    , AllSymbols     = shared('symbols')
    , OPSymbols      = shared('op-symbols')
    , ObjectProto    = Object[PROTOTYPE]
    , USE_NATIVE     = typeof $Symbol == 'function'
    , QObject        = global.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = DESCRIPTORS && $fails(function(){
    return _create(dP({}, 'a', {
      get: function(){ return dP(this, 'a', {value: 7}).a; }
    })).a != 7;
  }) ? function(it, key, D){
    var protoDesc = gOPD(ObjectProto, key);
    if(protoDesc)delete ObjectProto[key];
    dP(it, key, D);
    if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
  } : dP;

  var wrap = function(tag){
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
    return typeof it == 'symbol';
  } : function(it){
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D){
    if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if(has(AllSymbols, key)){
      if(!D.enumerable){
        if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
        D = _create(D, {enumerable: createDesc(0, false)});
      } return setSymbolDesc(it, key, D);
    } return dP(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P){
    anObject(it);
    var keys = enumKeys(P = toIObject(P))
      , i    = 0
      , l = keys.length
      , key;
    while(l > i)$defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P){
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key){
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
    it  = toIObject(it);
    key = toPrimitive(key, true);
    if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
    var D = gOPD(it, key);
    if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it){
    var names  = gOPN(toIObject(it))
      , result = []
      , i      = 0
      , key;
    while(names.length > i){
      if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
    } return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
    var IS_OP  = it === ObjectProto
      , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
      , result = []
      , i      = 0
      , key;
    while(names.length > i){
      if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
    } return result;
  };

  // 19.4.1.1 Symbol([description])
  if(!USE_NATIVE){
    $Symbol = function Symbol(){
      if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
      var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function(value){
        if(this === ObjectProto)$set.call(OPSymbols, value);
        if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      };
      if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
      return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE], 'toString', function toString(){
      return this._k;
    });

    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f   = $defineProperty;
    __webpack_require__(96).f = gOPNExt.f = $getOwnPropertyNames;
    __webpack_require__(90).f  = $propertyIsEnumerable;
    __webpack_require__(89).f = $getOwnPropertySymbols;

    if(DESCRIPTORS && !__webpack_require__(74)){
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    wksExt.f = function(name){
      return wrap(wks(name));
    }
  }

  $export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

  for(var symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

  for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

  $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function(key){
      return has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(key){
      if(isSymbol(key))return keyOf(SymbolRegistry, key);
      throw TypeError(key + ' is not a symbol!');
    },
    useSetter: function(){ setter = true; },
    useSimple: function(){ setter = false; }
  });

  $export($export.S + $export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it){
      if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
      var args = [it]
        , i    = 1
        , replacer, $replacer;
      while(arguments.length > i)args.push(arguments[i++]);
      replacer = args[1];
      if(typeof replacer == 'function')$replacer = replacer;
      if($replacer || !isArray(replacer))replacer = function(key, value){
        if($replacer)value = $replacer.call(this, key, value);
        if(!isSymbol(value))return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });

  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(56)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 50 */
/***/ function(module, exports) {

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 51 */
/***/ function(module, exports) {

  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key){
    return hasOwnProperty.call(it, key);
  };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  // Thank's IE8 for his funny defineProperty
  module.exports = !__webpack_require__(53)(function(){
    return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
  });

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = function(exec){
    try {
      return !!exec();
    } catch(e){
      return true;
    }
  };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  var global    = __webpack_require__(50)
    , core      = __webpack_require__(55)
    , hide      = __webpack_require__(56)
    , redefine  = __webpack_require__(64)
    , ctx       = __webpack_require__(66)
    , PROTOTYPE = 'prototype';

  var $export = function(type, name, source){
    var IS_FORCED = type & $export.F
      , IS_GLOBAL = type & $export.G
      , IS_STATIC = type & $export.S
      , IS_PROTO  = type & $export.P
      , IS_BIND   = type & $export.B
      , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
      , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
      , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
      , key, own, out, exp;
    if(IS_GLOBAL)source = name;
    for(key in source){
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // extend global
      if(target)redefine(target, key, out, type & $export.U);
      // export
      if(exports[key] != out)hide(exports, key, exp);
      if(IS_PROTO && expProto[key] != out)expProto[key] = out;
    }
  };
  global.core = core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library` 
  module.exports = $export;

/***/ },
/* 55 */
/***/ function(module, exports) {

  var core = module.exports = {version: '2.4.0'};
  if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  var dP         = __webpack_require__(57)
    , createDesc = __webpack_require__(63);
  module.exports = __webpack_require__(52) ? function(object, key, value){
    return dP.f(object, key, createDesc(1, value));
  } : function(object, key, value){
    object[key] = value;
    return object;
  };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  var anObject       = __webpack_require__(58)
    , IE8_DOM_DEFINE = __webpack_require__(60)
    , toPrimitive    = __webpack_require__(62)
    , dP             = Object.defineProperty;

  exports.f = __webpack_require__(52) ? Object.defineProperty : function defineProperty(O, P, Attributes){
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if(IE8_DOM_DEFINE)try {
      return dP(O, P, Attributes);
    } catch(e){ /* empty */ }
    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
    if('value' in Attributes)O[P] = Attributes.value;
    return O;
  };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__(59);
  module.exports = function(it){
    if(!isObject(it))throw TypeError(it + ' is not an object!');
    return it;
  };

/***/ },
/* 59 */
/***/ function(module, exports) {

  module.exports = function(it){
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = !__webpack_require__(52) && !__webpack_require__(53)(function(){
    return Object.defineProperty(__webpack_require__(61)('div'), 'a', {get: function(){ return 7; }}).a != 7;
  });

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__(59)
    , document = __webpack_require__(50).document
    // in old IE typeof document.createElement is 'object'
    , is = isObject(document) && isObject(document.createElement);
  module.exports = function(it){
    return is ? document.createElement(it) : {};
  };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject = __webpack_require__(59);
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  module.exports = function(it, S){
    if(!isObject(it))return it;
    var fn, val;
    if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
    if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
    if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
    throw TypeError("Can't convert object to primitive value");
  };

/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = function(bitmap, value){
    return {
      enumerable  : !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable    : !(bitmap & 4),
      value       : value
    };
  };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  var global    = __webpack_require__(50)
    , hide      = __webpack_require__(56)
    , has       = __webpack_require__(51)
    , SRC       = __webpack_require__(65)('src')
    , TO_STRING = 'toString'
    , $toString = Function[TO_STRING]
    , TPL       = ('' + $toString).split(TO_STRING);

  __webpack_require__(55).inspectSource = function(it){
    return $toString.call(it);
  };

  (module.exports = function(O, key, val, safe){
    var isFunction = typeof val == 'function';
    if(isFunction)has(val, 'name') || hide(val, 'name', key);
    if(O[key] === val)return;
    if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if(O === global){
      O[key] = val;
    } else {
      if(!safe){
        delete O[key];
        hide(O, key, val);
      } else {
        if(O[key])O[key] = val;
        else hide(O, key, val);
      }
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString(){
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });

/***/ },
/* 65 */
/***/ function(module, exports) {

  var id = 0
    , px = Math.random();
  module.exports = function(key){
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  // optional / simple context binding
  var aFunction = __webpack_require__(67);
  module.exports = function(fn, that, length){
    aFunction(fn);
    if(that === undefined)return fn;
    switch(length){
      case 1: return function(a){
        return fn.call(that, a);
      };
      case 2: return function(a, b){
        return fn.call(that, a, b);
      };
      case 3: return function(a, b, c){
        return fn.call(that, a, b, c);
      };
    }
    return function(/* ...args */){
      return fn.apply(that, arguments);
    };
  };

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = function(it){
    if(typeof it != 'function')throw TypeError(it + ' is not a function!');
    return it;
  };

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  var META     = __webpack_require__(65)('meta')
    , isObject = __webpack_require__(59)
    , has      = __webpack_require__(51)
    , setDesc  = __webpack_require__(57).f
    , id       = 0;
  var isExtensible = Object.isExtensible || function(){
    return true;
  };
  var FREEZE = !__webpack_require__(53)(function(){
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function(it){
    setDesc(it, META, {value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    }});
  };
  var fastKey = function(it, create){
    // return primitive with prefix
    if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if(!has(it, META)){
      // can't set metadata to uncaught frozen object
      if(!isExtensible(it))return 'F';
      // not necessary to add metadata
      if(!create)return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function(it, create){
    if(!has(it, META)){
      // can't set metadata to uncaught frozen object
      if(!isExtensible(it))return true;
      // not necessary to add metadata
      if(!create)return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function(it){
    if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY:      META,
    NEED:     false,
    fastKey:  fastKey,
    getWeak:  getWeak,
    onFreeze: onFreeze
  };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  var global = __webpack_require__(50)
    , SHARED = '__core-js_shared__'
    , store  = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key){
    return store[key] || (store[key] = {});
  };

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  var def = __webpack_require__(57).f
    , has = __webpack_require__(51)
    , TAG = __webpack_require__(71)('toStringTag');

  module.exports = function(it, tag, stat){
    if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
  };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  var store      = __webpack_require__(69)('wks')
    , uid        = __webpack_require__(65)
    , Symbol     = __webpack_require__(50).Symbol
    , USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function(name){
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };

  $exports.store = store;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  exports.f = __webpack_require__(71);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  var global         = __webpack_require__(50)
    , core           = __webpack_require__(55)
    , LIBRARY        = __webpack_require__(74)
    , wksExt         = __webpack_require__(72)
    , defineProperty = __webpack_require__(57).f;
  module.exports = function(name){
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
  };

/***/ },
/* 74 */
/***/ function(module, exports) {

  module.exports = false;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  var getKeys   = __webpack_require__(76)
    , toIObject = __webpack_require__(78);
  module.exports = function(object, el){
    var O      = toIObject(object)
      , keys   = getKeys(O)
      , length = keys.length
      , index  = 0
      , key;
    while(length > index)if(O[key = keys[index++]] === el)return key;
  };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys       = __webpack_require__(77)
    , enumBugKeys = __webpack_require__(87);

  module.exports = Object.keys || function keys(O){
    return $keys(O, enumBugKeys);
  };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  var has          = __webpack_require__(51)
    , toIObject    = __webpack_require__(78)
    , arrayIndexOf = __webpack_require__(82)(false)
    , IE_PROTO     = __webpack_require__(86)('IE_PROTO');

  module.exports = function(object, names){
    var O      = toIObject(object)
      , i      = 0
      , result = []
      , key;
    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if(has(O, key = names[i++])){
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = __webpack_require__(79)
    , defined = __webpack_require__(81);
  module.exports = function(it){
    return IObject(defined(it));
  };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof = __webpack_require__(80);
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
    return cof(it) == 'String' ? it.split('') : Object(it);
  };

/***/ },
/* 80 */
/***/ function(module, exports) {

  var toString = {}.toString;

  module.exports = function(it){
    return toString.call(it).slice(8, -1);
  };

/***/ },
/* 81 */
/***/ function(module, exports) {

  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function(it){
    if(it == undefined)throw TypeError("Can't call method on  " + it);
    return it;
  };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject = __webpack_require__(78)
    , toLength  = __webpack_require__(83)
    , toIndex   = __webpack_require__(85);
  module.exports = function(IS_INCLUDES){
    return function($this, el, fromIndex){
      var O      = toIObject($this)
        , length = toLength(O.length)
        , index  = toIndex(fromIndex, length)
        , value;
      // Array#includes uses SameValueZero equality algorithm
      if(IS_INCLUDES && el != el)while(length > index){
        value = O[index++];
        if(value != value)return true;
      // Array#toIndex ignores holes, Array#includes - not
      } else for(;length > index; index++)if(IS_INCLUDES || index in O){
        if(O[index] === el)return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.15 ToLength
  var toInteger = __webpack_require__(84)
    , min       = Math.min;
  module.exports = function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

/***/ },
/* 84 */
/***/ function(module, exports) {

  // 7.1.4 ToInteger
  var ceil  = Math.ceil
    , floor = Math.floor;
  module.exports = function(it){
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  var toInteger = __webpack_require__(84)
    , max       = Math.max
    , min       = Math.min;
  module.exports = function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  var shared = __webpack_require__(69)('keys')
    , uid    = __webpack_require__(65);
  module.exports = function(key){
    return shared[key] || (shared[key] = uid(key));
  };

/***/ },
/* 87 */
/***/ function(module, exports) {

  // IE 8- don't enum bug keys
  module.exports = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  // all enumerable object keys, includes symbols
  var getKeys = __webpack_require__(76)
    , gOPS    = __webpack_require__(89)
    , pIE     = __webpack_require__(90);
  module.exports = function(it){
    var result     = getKeys(it)
      , getSymbols = gOPS.f;
    if(getSymbols){
      var symbols = getSymbols(it)
        , isEnum  = pIE.f
        , i       = 0
        , key;
      while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
    } return result;
  };

/***/ },
/* 89 */
/***/ function(module, exports) {

  exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 90 */
/***/ function(module, exports) {

  exports.f = {}.propertyIsEnumerable;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  // 7.2.2 IsArray(argument)
  var cof = __webpack_require__(80);
  module.exports = Array.isArray || function isArray(arg){
    return cof(arg) == 'Array';
  };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject    = __webpack_require__(58)
    , dPs         = __webpack_require__(93)
    , enumBugKeys = __webpack_require__(87)
    , IE_PROTO    = __webpack_require__(86)('IE_PROTO')
    , Empty       = function(){ /* empty */ }
    , PROTOTYPE   = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function(){
    // Thrash, waste and sodomy: IE GC bug
    var iframe = __webpack_require__(61)('iframe')
      , i      = enumBugKeys.length
      , lt     = '<'
      , gt     = '>'
      , iframeDocument;
    iframe.style.display = 'none';
    __webpack_require__(94).appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
  };

  module.exports = Object.create || function create(O, Properties){
    var result;
    if(O !== null){
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty;
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  var dP       = __webpack_require__(57)
    , anObject = __webpack_require__(58)
    , getKeys  = __webpack_require__(76);

  module.exports = __webpack_require__(52) ? Object.defineProperties : function defineProperties(O, Properties){
    anObject(O);
    var keys   = getKeys(Properties)
      , length = keys.length
      , i = 0
      , P;
    while(length > i)dP.f(O, P = keys[i++], Properties[P]);
    return O;
  };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(50).document && document.documentElement;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var toIObject = __webpack_require__(78)
    , gOPN      = __webpack_require__(96).f
    , toString  = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function(it){
    try {
      return gOPN(it);
    } catch(e){
      return windowNames.slice();
    }
  };

  module.exports.f = function getOwnPropertyNames(it){
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
  };


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  var $keys      = __webpack_require__(77)
    , hiddenKeys = __webpack_require__(87).concat('length', 'prototype');

  exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
    return $keys(O, hiddenKeys);
  };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  var pIE            = __webpack_require__(90)
    , createDesc     = __webpack_require__(63)
    , toIObject      = __webpack_require__(78)
    , toPrimitive    = __webpack_require__(62)
    , has            = __webpack_require__(51)
    , IE8_DOM_DEFINE = __webpack_require__(60)
    , gOPD           = Object.getOwnPropertyDescriptor;

  exports.f = __webpack_require__(52) ? gOPD : function getOwnPropertyDescriptor(O, P){
    O = toIObject(O);
    P = toPrimitive(P, true);
    if(IE8_DOM_DEFINE)try {
      return gOPD(O, P);
    } catch(e){ /* empty */ }
    if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
  };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(54)
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  $export($export.S, 'Object', {create: __webpack_require__(92)});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(54);
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  $export($export.S + $export.F * !__webpack_require__(52), 'Object', {defineProperty: __webpack_require__(57).f});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(54);
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  $export($export.S + $export.F * !__webpack_require__(52), 'Object', {defineProperties: __webpack_require__(93)});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  var toIObject                 = __webpack_require__(78)
    , $getOwnPropertyDescriptor = __webpack_require__(97).f;

  __webpack_require__(102)('getOwnPropertyDescriptor', function(){
    return function getOwnPropertyDescriptor(it, key){
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  // most Object methods by ES6 should accept primitives
  var $export = __webpack_require__(54)
    , core    = __webpack_require__(55)
    , fails   = __webpack_require__(53);
  module.exports = function(KEY, exec){
    var fn  = (core.Object || {})[KEY] || Object[KEY]
      , exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
  };

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.9 Object.getPrototypeOf(O)
  var toObject        = __webpack_require__(104)
    , $getPrototypeOf = __webpack_require__(105);

  __webpack_require__(102)('getPrototypeOf', function(){
    return function getPrototypeOf(it){
      return $getPrototypeOf(toObject(it));
    };
  });

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.13 ToObject(argument)
  var defined = __webpack_require__(81);
  module.exports = function(it){
    return Object(defined(it));
  };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has         = __webpack_require__(51)
    , toObject    = __webpack_require__(104)
    , IE_PROTO    = __webpack_require__(86)('IE_PROTO')
    , ObjectProto = Object.prototype;

  module.exports = Object.getPrototypeOf || function(O){
    O = toObject(O);
    if(has(O, IE_PROTO))return O[IE_PROTO];
    if(typeof O.constructor == 'function' && O instanceof O.constructor){
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.14 Object.keys(O)
  var toObject = __webpack_require__(104)
    , $keys    = __webpack_require__(76);

  __webpack_require__(102)('keys', function(){
    return function keys(it){
      return $keys(toObject(it));
    };
  });

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.7 Object.getOwnPropertyNames(O)
  __webpack_require__(102)('getOwnPropertyNames', function(){
    return __webpack_require__(95).f;
  });

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.5 Object.freeze(O)
  var isObject = __webpack_require__(59)
    , meta     = __webpack_require__(68).onFreeze;

  __webpack_require__(102)('freeze', function($freeze){
    return function freeze(it){
      return $freeze && isObject(it) ? $freeze(meta(it)) : it;
    };
  });

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.17 Object.seal(O)
  var isObject = __webpack_require__(59)
    , meta     = __webpack_require__(68).onFreeze;

  __webpack_require__(102)('seal', function($seal){
    return function seal(it){
      return $seal && isObject(it) ? $seal(meta(it)) : it;
    };
  });

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.15 Object.preventExtensions(O)
  var isObject = __webpack_require__(59)
    , meta     = __webpack_require__(68).onFreeze;

  __webpack_require__(102)('preventExtensions', function($preventExtensions){
    return function preventExtensions(it){
      return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
    };
  });

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.12 Object.isFrozen(O)
  var isObject = __webpack_require__(59);

  __webpack_require__(102)('isFrozen', function($isFrozen){
    return function isFrozen(it){
      return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  });

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.13 Object.isSealed(O)
  var isObject = __webpack_require__(59);

  __webpack_require__(102)('isSealed', function($isSealed){
    return function isSealed(it){
      return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  });

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.11 Object.isExtensible(O)
  var isObject = __webpack_require__(59);

  __webpack_require__(102)('isExtensible', function($isExtensible){
    return function isExtensible(it){
      return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  });

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.1 Object.assign(target, source)
  var $export = __webpack_require__(54);

  $export($export.S + $export.F, 'Object', {assign: __webpack_require__(115)});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 19.1.2.1 Object.assign(target, source, ...)
  var getKeys  = __webpack_require__(76)
    , gOPS     = __webpack_require__(89)
    , pIE      = __webpack_require__(90)
    , toObject = __webpack_require__(104)
    , IObject  = __webpack_require__(79)
    , $assign  = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  module.exports = !$assign || __webpack_require__(53)(function(){
    var A = {}
      , B = {}
      , S = Symbol()
      , K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k){ B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source){ // eslint-disable-line no-unused-vars
    var T     = toObject(target)
      , aLen  = arguments.length
      , index = 1
      , getSymbols = gOPS.f
      , isEnum     = pIE.f;
    while(aLen > index){
      var S      = IObject(arguments[index++])
        , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
        , length = keys.length
        , j      = 0
        , key;
      while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
    } return T;
  } : $assign;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.10 Object.is(value1, value2)
  var $export = __webpack_require__(54);
  $export($export.S, 'Object', {is: __webpack_require__(117)});

/***/ },
/* 117 */
/***/ function(module, exports) {

  // 7.2.9 SameValue(x, y)
  module.exports = Object.is || function is(x, y){
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  var $export = __webpack_require__(54);
  $export($export.S, 'Object', {setPrototypeOf: __webpack_require__(119).set});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject = __webpack_require__(59)
    , anObject = __webpack_require__(58);
  var check = function(O, proto){
    anObject(O);
    if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function(test, buggy, set){
        try {
          set = __webpack_require__(66)(Function.call, __webpack_require__(97).f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
    check: check
  };

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 19.1.3.6 Object.prototype.toString()
  var classof = __webpack_require__(121)
    , test    = {};
  test[__webpack_require__(71)('toStringTag')] = 'z';
  if(test + '' != '[object z]'){
    __webpack_require__(64)(Object.prototype, 'toString', function toString(){
      return '[object ' + classof(this) + ']';
    }, true);
  }

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = __webpack_require__(80)
    , TAG = __webpack_require__(71)('toStringTag')
    // ES3 wrong here
    , ARG = cof(function(){ return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function(it, key){
    try {
      return it[key];
    } catch(e){ /* empty */ }
  };

  module.exports = function(it){
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

  // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
  var $export = __webpack_require__(54);

  $export($export.P, 'Function', {bind: __webpack_require__(123)});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var aFunction  = __webpack_require__(67)
    , isObject   = __webpack_require__(59)
    , invoke     = __webpack_require__(124)
    , arraySlice = [].slice
    , factories  = {};

  var construct = function(F, len, args){
    if(!(len in factories)){
      for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    } return factories[len](F, args);
  };

  module.exports = Function.bind || function bind(that /*, args... */){
    var fn       = aFunction(this)
      , partArgs = arraySlice.call(arguments, 1);
    var bound = function(/* args... */){
      var args = partArgs.concat(arraySlice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };
    if(isObject(fn.prototype))bound.prototype = fn.prototype;
    return bound;
  };

/***/ },
/* 124 */
/***/ function(module, exports) {

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  module.exports = function(fn, args, that){
    var un = that === undefined;
    switch(args.length){
      case 0: return un ? fn()
                        : fn.call(that);
      case 1: return un ? fn(args[0])
                        : fn.call(that, args[0]);
      case 2: return un ? fn(args[0], args[1])
                        : fn.call(that, args[0], args[1]);
      case 3: return un ? fn(args[0], args[1], args[2])
                        : fn.call(that, args[0], args[1], args[2]);
      case 4: return un ? fn(args[0], args[1], args[2], args[3])
                        : fn.call(that, args[0], args[1], args[2], args[3]);
    } return              fn.apply(that, args);
  };

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

  var dP         = __webpack_require__(57).f
    , createDesc = __webpack_require__(63)
    , has        = __webpack_require__(51)
    , FProto     = Function.prototype
    , nameRE     = /^\s*function ([^ (]*)/
    , NAME       = 'name';

  var isExtensible = Object.isExtensible || function(){
    return true;
  };

  // 19.2.4.2 name
  NAME in FProto || __webpack_require__(52) && dP(FProto, NAME, {
    configurable: true,
    get: function(){
      try {
        var that = this
          , name = ('' + that).match(nameRE)[1];
        has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
        return name;
      } catch(e){
        return '';
      }
    }
  });

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var isObject       = __webpack_require__(59)
    , getPrototypeOf = __webpack_require__(105)
    , HAS_INSTANCE   = __webpack_require__(71)('hasInstance')
    , FunctionProto  = Function.prototype;
  // 19.2.3.6 Function.prototype[@@hasInstance](V)
  if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(57).f(FunctionProto, HAS_INSTANCE, {value: function(O){
    if(typeof this != 'function' || !isObject(O))return false;
    if(!isObject(this.prototype))return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while(O = getPrototypeOf(O))if(this.prototype === O)return true;
    return false;
  }});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

  var $export   = __webpack_require__(54)
    , $parseInt = __webpack_require__(128);
  // 18.2.5 parseInt(string, radix)
  $export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

  var $parseInt = __webpack_require__(50).parseInt
    , $trim     = __webpack_require__(129).trim
    , ws        = __webpack_require__(130)
    , hex       = /^[\-+]?0[xX]/;

  module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
    var string = $trim(String(str), 3);
    return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
  } : $parseInt;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(54)
    , defined = __webpack_require__(81)
    , fails   = __webpack_require__(53)
    , spaces  = __webpack_require__(130)
    , space   = '[' + spaces + ']'
    , non     = '\u200b\u0085'
    , ltrim   = RegExp('^' + space + space + '*')
    , rtrim   = RegExp(space + space + '*$');

  var exporter = function(KEY, exec, ALIAS){
    var exp   = {};
    var FORCE = fails(function(){
      return !!spaces[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
    if(ALIAS)exp[ALIAS] = fn;
    $export($export.P + $export.F * FORCE, 'String', exp);
  };

  // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim
  var trim = exporter.trim = function(string, TYPE){
    string = String(defined(string));
    if(TYPE & 1)string = string.replace(ltrim, '');
    if(TYPE & 2)string = string.replace(rtrim, '');
    return string;
  };

  module.exports = exporter;

/***/ },
/* 130 */
/***/ function(module, exports) {

  module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

  var $export     = __webpack_require__(54)
    , $parseFloat = __webpack_require__(132);
  // 18.2.4 parseFloat(string)
  $export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

  var $parseFloat = __webpack_require__(50).parseFloat
    , $trim       = __webpack_require__(129).trim;

  module.exports = 1 / $parseFloat(__webpack_require__(130) + '-0') !== -Infinity ? function parseFloat(str){
    var string = $trim(String(str), 3)
      , result = $parseFloat(string);
    return result === 0 && string.charAt(0) == '-' ? -0 : result;
  } : $parseFloat;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var global            = __webpack_require__(50)
    , has               = __webpack_require__(51)
    , cof               = __webpack_require__(80)
    , inheritIfRequired = __webpack_require__(134)
    , toPrimitive       = __webpack_require__(62)
    , fails             = __webpack_require__(53)
    , gOPN              = __webpack_require__(96).f
    , gOPD              = __webpack_require__(97).f
    , dP                = __webpack_require__(57).f
    , $trim             = __webpack_require__(129).trim
    , NUMBER            = 'Number'
    , $Number           = global[NUMBER]
    , Base              = $Number
    , proto             = $Number.prototype
    // Opera ~12 has broken Object#toString
    , BROKEN_COF        = cof(__webpack_require__(92)(proto)) == NUMBER
    , TRIM              = 'trim' in String.prototype;

  // 7.1.3 ToNumber(argument)
  var toNumber = function(argument){
    var it = toPrimitive(argument, false);
    if(typeof it == 'string' && it.length > 2){
      it = TRIM ? it.trim() : $trim(it, 3);
      var first = it.charCodeAt(0)
        , third, radix, maxCode;
      if(first === 43 || first === 45){
        third = it.charCodeAt(2);
        if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if(first === 48){
        switch(it.charCodeAt(1)){
          case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
          case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
          default : return +it;
        }
        for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
          code = digits.charCodeAt(i);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if(code < 48 || code > maxCode)return NaN;
        } return parseInt(digits, radix);
      }
    } return +it;
  };

  if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
    $Number = function Number(value){
      var it = arguments.length < 1 ? 0 : value
        , that = this;
      return that instanceof $Number
        // check on 1..constructor(foo) case
        && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
          ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };
    for(var keys = __webpack_require__(52) ? gOPN(Base) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES6 (in case, if modules with ES6 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
    ).split(','), j = 0, key; keys.length > j; j++){
      if(has(Base, key = keys[j]) && !has($Number, key)){
        dP($Number, key, gOPD(Base, key));
      }
    }
    $Number.prototype = proto;
    proto.constructor = $Number;
    __webpack_require__(64)(global, NUMBER, $Number);
  }

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

  var isObject       = __webpack_require__(59)
    , setPrototypeOf = __webpack_require__(119).set;
  module.exports = function(that, target, C){
    var P, S = target.constructor;
    if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
      setPrototypeOf(that, P);
    } return that;
  };

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export      = __webpack_require__(54)
    , toInteger    = __webpack_require__(84)
    , aNumberValue = __webpack_require__(136)
    , repeat       = __webpack_require__(137)
    , $toFixed     = 1..toFixed
    , floor        = Math.floor
    , data         = [0, 0, 0, 0, 0, 0]
    , ERROR        = 'Number.toFixed: incorrect invocation!'
    , ZERO         = '0';

  var multiply = function(n, c){
    var i  = -1
      , c2 = c;
    while(++i < 6){
      c2 += n * data[i];
      data[i] = c2 % 1e7;
      c2 = floor(c2 / 1e7);
    }
  };
  var divide = function(n){
    var i = 6
      , c = 0;
    while(--i >= 0){
      c += data[i];
      data[i] = floor(c / n);
      c = (c % n) * 1e7;
    }
  };
  var numToString = function(){
    var i = 6
      , s = '';
    while(--i >= 0){
      if(s !== '' || i === 0 || data[i] !== 0){
        var t = String(data[i]);
        s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
      }
    } return s;
  };
  var pow = function(x, n, acc){
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };
  var log = function(x){
    var n  = 0
      , x2 = x;
    while(x2 >= 4096){
      n += 12;
      x2 /= 4096;
    }
    while(x2 >= 2){
      n  += 1;
      x2 /= 2;
    } return n;
  };

  $export($export.P + $export.F * (!!$toFixed && (
    0.00008.toFixed(3) !== '0.000' ||
    0.9.toFixed(0) !== '1' ||
    1.255.toFixed(2) !== '1.25' ||
    1000000000000000128..toFixed(0) !== '1000000000000000128'
  ) || !__webpack_require__(53)(function(){
    // V8 ~ Android 4.3-
    $toFixed.call({});
  })), 'Number', {
    toFixed: function toFixed(fractionDigits){
      var x = aNumberValue(this, ERROR)
        , f = toInteger(fractionDigits)
        , s = ''
        , m = ZERO
        , e, z, j, k;
      if(f < 0 || f > 20)throw RangeError(ERROR);
      if(x != x)return 'NaN';
      if(x <= -1e21 || x >= 1e21)return String(x);
      if(x < 0){
        s = '-';
        x = -x;
      }
      if(x > 1e-21){
        e = log(x * pow(2, 69, 1)) - 69;
        z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if(e > 0){
          multiply(0, z);
          j = f;
          while(j >= 7){
            multiply(1e7, 0);
            j -= 7;
          }
          multiply(pow(10, j, 1), 0);
          j = e - 1;
          while(j >= 23){
            divide(1 << 23);
            j -= 23;
          }
          divide(1 << j);
          multiply(1, 1);
          divide(2);
          m = numToString();
        } else {
          multiply(0, z);
          multiply(1 << -e, 0);
          m = numToString() + repeat.call(ZERO, f);
        }
      }
      if(f > 0){
        k = m.length;
        m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
      } else {
        m = s + m;
      } return m;
    }
  });

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  var cof = __webpack_require__(80);
  module.exports = function(it, msg){
    if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
    return +it;
  };

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var toInteger = __webpack_require__(84)
    , defined   = __webpack_require__(81);

  module.exports = function repeat(count){
    var str = String(defined(this))
      , res = ''
      , n   = toInteger(count);
    if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
    for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
    return res;
  };

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export      = __webpack_require__(54)
    , $fails       = __webpack_require__(53)
    , aNumberValue = __webpack_require__(136)
    , $toPrecision = 1..toPrecision;

  $export($export.P + $export.F * ($fails(function(){
    // IE7-
    return $toPrecision.call(1, undefined) !== '1';
  }) || !$fails(function(){
    // V8 ~ Android 4.3-
    $toPrecision.call({});
  })), 'Number', {
    toPrecision: function toPrecision(precision){
      var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
      return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
    }
  });

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.1 Number.EPSILON
  var $export = __webpack_require__(54);

  $export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.2 Number.isFinite(number)
  var $export   = __webpack_require__(54)
    , _isFinite = __webpack_require__(50).isFinite;

  $export($export.S, 'Number', {
    isFinite: function isFinite(it){
      return typeof it == 'number' && _isFinite(it);
    }
  });

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.3 Number.isInteger(number)
  var $export = __webpack_require__(54);

  $export($export.S, 'Number', {isInteger: __webpack_require__(142)});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.3 Number.isInteger(number)
  var isObject = __webpack_require__(59)
    , floor    = Math.floor;
  module.exports = function isInteger(it){
    return !isObject(it) && isFinite(it) && floor(it) === it;
  };

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.4 Number.isNaN(number)
  var $export = __webpack_require__(54);

  $export($export.S, 'Number', {
    isNaN: function isNaN(number){
      return number != number;
    }
  });

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.5 Number.isSafeInteger(number)
  var $export   = __webpack_require__(54)
    , isInteger = __webpack_require__(142)
    , abs       = Math.abs;

  $export($export.S, 'Number', {
    isSafeInteger: function isSafeInteger(number){
      return isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
  });

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.6 Number.MAX_SAFE_INTEGER
  var $export = __webpack_require__(54);

  $export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.10 Number.MIN_SAFE_INTEGER
  var $export = __webpack_require__(54);

  $export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

  var $export     = __webpack_require__(54)
    , $parseFloat = __webpack_require__(132);
  // 20.1.2.12 Number.parseFloat(string)
  $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

  var $export   = __webpack_require__(54)
    , $parseInt = __webpack_require__(128);
  // 20.1.2.13 Number.parseInt(string, radix)
  $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.3 Math.acosh(x)
  var $export = __webpack_require__(54)
    , log1p   = __webpack_require__(150)
    , sqrt    = Math.sqrt
    , $acosh  = Math.acosh;

  $export($export.S + $export.F * !($acosh
    // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
    && Math.floor($acosh(Number.MAX_VALUE)) == 710
    // Tor Browser bug: Math.acosh(Infinity) -> NaN 
    && $acosh(Infinity) == Infinity
  ), 'Math', {
    acosh: function acosh(x){
      return (x = +x) < 1 ? NaN : x > 94906265.62425156
        ? Math.log(x) + Math.LN2
        : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
  });

/***/ },
/* 150 */
/***/ function(module, exports) {

  // 20.2.2.20 Math.log1p(x)
  module.exports = Math.log1p || function log1p(x){
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  };

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.5 Math.asinh(x)
  var $export = __webpack_require__(54)
    , $asinh  = Math.asinh;

  function asinh(x){
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  }

  // Tor Browser bug: Math.asinh(0) -> -0 
  $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.7 Math.atanh(x)
  var $export = __webpack_require__(54)
    , $atanh  = Math.atanh;

  // Tor Browser bug: Math.atanh(-0) -> 0 
  $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
    atanh: function atanh(x){
      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
  });

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.9 Math.cbrt(x)
  var $export = __webpack_require__(54)
    , sign    = __webpack_require__(154);

  $export($export.S, 'Math', {
    cbrt: function cbrt(x){
      return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
  });

/***/ },
/* 154 */
/***/ function(module, exports) {

  // 20.2.2.28 Math.sign(x)
  module.exports = Math.sign || function sign(x){
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.11 Math.clz32(x)
  var $export = __webpack_require__(54);

  $export($export.S, 'Math', {
    clz32: function clz32(x){
      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
  });

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.12 Math.cosh(x)
  var $export = __webpack_require__(54)
    , exp     = Math.exp;

  $export($export.S, 'Math', {
    cosh: function cosh(x){
      return (exp(x = +x) + exp(-x)) / 2;
    }
  });

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.14 Math.expm1(x)
  var $export = __webpack_require__(54)
    , $expm1  = __webpack_require__(158);

  $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 158 */
/***/ function(module, exports) {

  // 20.2.2.14 Math.expm1(x)
  var $expm1 = Math.expm1;
  module.exports = (!$expm1
    // Old FF bug
    || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
    // Tor Browser bug
    || $expm1(-2e-17) != -2e-17
  ) ? function expm1(x){
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  } : $expm1;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.16 Math.fround(x)
  var $export   = __webpack_require__(54)
    , sign      = __webpack_require__(154)
    , pow       = Math.pow
    , EPSILON   = pow(2, -52)
    , EPSILON32 = pow(2, -23)
    , MAX32     = pow(2, 127) * (2 - EPSILON32)
    , MIN32     = pow(2, -126);

  var roundTiesToEven = function(n){
    return n + 1 / EPSILON - 1 / EPSILON;
  };


  $export($export.S, 'Math', {
    fround: function fround(x){
      var $abs  = Math.abs(x)
        , $sign = sign(x)
        , a, result;
      if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs);
      if(result > MAX32 || result != result)return $sign * Infinity;
      return $sign * result;
    }
  });

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
  var $export = __webpack_require__(54)
    , abs     = Math.abs;

  $export($export.S, 'Math', {
    hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
      var sum  = 0
        , i    = 0
        , aLen = arguments.length
        , larg = 0
        , arg, div;
      while(i < aLen){
        arg = abs(arguments[i++]);
        if(larg < arg){
          div  = larg / arg;
          sum  = sum * div * div + 1;
          larg = arg;
        } else if(arg > 0){
          div  = arg / larg;
          sum += div * div;
        } else sum += arg;
      }
      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
  });

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.18 Math.imul(x, y)
  var $export = __webpack_require__(54)
    , $imul   = Math.imul;

  // some WebKit versions fails with big numbers, some has wrong arity
  $export($export.S + $export.F * __webpack_require__(53)(function(){
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
  }), 'Math', {
    imul: function imul(x, y){
      var UINT16 = 0xffff
        , xn = +x
        , yn = +y
        , xl = UINT16 & xn
        , yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.21 Math.log10(x)
  var $export = __webpack_require__(54);

  $export($export.S, 'Math', {
    log10: function log10(x){
      return Math.log(x) / Math.LN10;
    }
  });

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.20 Math.log1p(x)
  var $export = __webpack_require__(54);

  $export($export.S, 'Math', {log1p: __webpack_require__(150)});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.22 Math.log2(x)
  var $export = __webpack_require__(54);

  $export($export.S, 'Math', {
    log2: function log2(x){
      return Math.log(x) / Math.LN2;
    }
  });

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.28 Math.sign(x)
  var $export = __webpack_require__(54);

  $export($export.S, 'Math', {sign: __webpack_require__(154)});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.30 Math.sinh(x)
  var $export = __webpack_require__(54)
    , expm1   = __webpack_require__(158)
    , exp     = Math.exp;

  // V8 near Chromium 38 has a problem with very small numbers
  $export($export.S + $export.F * __webpack_require__(53)(function(){
    return !Math.sinh(-2e-17) != -2e-17;
  }), 'Math', {
    sinh: function sinh(x){
      return Math.abs(x = +x) < 1
        ? (expm1(x) - expm1(-x)) / 2
        : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
    }
  });

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.33 Math.tanh(x)
  var $export = __webpack_require__(54)
    , expm1   = __webpack_require__(158)
    , exp     = Math.exp;

  $export($export.S, 'Math', {
    tanh: function tanh(x){
      var a = expm1(x = +x)
        , b = expm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }
  });

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.34 Math.trunc(x)
  var $export = __webpack_require__(54);

  $export($export.S, 'Math', {
    trunc: function trunc(it){
      return (it > 0 ? Math.floor : Math.ceil)(it);
    }
  });

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

  var $export        = __webpack_require__(54)
    , toIndex        = __webpack_require__(85)
    , fromCharCode   = String.fromCharCode
    , $fromCodePoint = String.fromCodePoint;

  // length should be 1, old FF problem
  $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
      var res  = []
        , aLen = arguments.length
        , i    = 0
        , code;
      while(aLen > i){
        code = +arguments[i++];
        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000
          ? fromCharCode(code)
          : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
        );
      } return res.join('');
    }
  });

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

  var $export   = __webpack_require__(54)
    , toIObject = __webpack_require__(78)
    , toLength  = __webpack_require__(83);

  $export($export.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite){
      var tpl  = toIObject(callSite.raw)
        , len  = toLength(tpl.length)
        , aLen = arguments.length
        , res  = []
        , i    = 0;
      while(len > i){
        res.push(String(tpl[i++]));
        if(i < aLen)res.push(String(arguments[i]));
      } return res.join('');
    }
  });

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 21.1.3.25 String.prototype.trim()
  __webpack_require__(129)('trim', function($trim){
    return function trim(){
      return $trim(this, 3);
    };
  });

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $at  = __webpack_require__(173)(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  __webpack_require__(174)(String, 'String', function(iterated){
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function(){
    var O     = this._t
      , index = this._i
      , point;
    if(index >= O.length)return {value: undefined, done: true};
    point = $at(O, index);
    this._i += point.length;
    return {value: point, done: false};
  });

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

  var toInteger = __webpack_require__(84)
    , defined   = __webpack_require__(81);
  // true  -> String#at
  // false -> String#codePointAt
  module.exports = function(TO_STRING){
    return function(that, pos){
      var s = String(defined(that))
        , i = toInteger(pos)
        , l = s.length
        , a, b;
      if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var LIBRARY        = __webpack_require__(74)
    , $export        = __webpack_require__(54)
    , redefine       = __webpack_require__(64)
    , hide           = __webpack_require__(56)
    , has            = __webpack_require__(51)
    , Iterators      = __webpack_require__(175)
    , $iterCreate    = __webpack_require__(176)
    , setToStringTag = __webpack_require__(70)
    , getPrototypeOf = __webpack_require__(105)
    , ITERATOR       = __webpack_require__(71)('iterator')
    , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
    , FF_ITERATOR    = '@@iterator'
    , KEYS           = 'keys'
    , VALUES         = 'values';

  var returnThis = function(){ return this; };

  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind){
      if(!BUGGY && kind in proto)return proto[kind];
      switch(kind){
        case KEYS: return function keys(){ return new Constructor(this, kind); };
        case VALUES: return function values(){ return new Constructor(this, kind); };
      } return function entries(){ return new Constructor(this, kind); };
    };
    var TAG        = NAME + ' Iterator'
      , DEF_VALUES = DEFAULT == VALUES
      , VALUES_BUG = false
      , proto      = Base.prototype
      , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
      , $default   = $native || getMethod(DEFAULT)
      , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
      , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
      , methods, key, IteratorPrototype;
    // Fix native
    if($anyNative){
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
      if(IteratorPrototype !== Object.prototype){
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
    // Define iterator
    if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
      hide(proto, ITERATOR, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG]  = returnThis;
    if(DEFAULT){
      methods = {
        values:  DEF_VALUES ? $default : getMethod(VALUES),
        keys:    IS_SET     ? $default : getMethod(KEYS),
        entries: $entries
      };
      if(FORCED)for(key in methods){
        if(!(key in proto))redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

/***/ },
/* 175 */
/***/ function(module, exports) {

  module.exports = {};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var create         = __webpack_require__(92)
    , descriptor     = __webpack_require__(63)
    , setToStringTag = __webpack_require__(70)
    , IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  __webpack_require__(56)(IteratorPrototype, __webpack_require__(71)('iterator'), function(){ return this; });

  module.exports = function(Constructor, NAME, next){
    Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(54)
    , $at     = __webpack_require__(173)(false);
  $export($export.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos){
      return $at(this, pos);
    }
  });

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
  'use strict';
  var $export   = __webpack_require__(54)
    , toLength  = __webpack_require__(83)
    , context   = __webpack_require__(179)
    , ENDS_WITH = 'endsWith'
    , $endsWith = ''[ENDS_WITH];

  $export($export.P + $export.F * __webpack_require__(181)(ENDS_WITH), 'String', {
    endsWith: function endsWith(searchString /*, endPosition = @length */){
      var that = context(this, searchString, ENDS_WITH)
        , endPosition = arguments.length > 1 ? arguments[1] : undefined
        , len    = toLength(that.length)
        , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
        , search = String(searchString);
      return $endsWith
        ? $endsWith.call(that, search, end)
        : that.slice(end - search.length, end) === search;
    }
  });

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

  // helper for String#{startsWith, endsWith, includes}
  var isRegExp = __webpack_require__(180)
    , defined  = __webpack_require__(81);

  module.exports = function(that, searchString, NAME){
    if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(defined(that));
  };

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

  // 7.2.8 IsRegExp(argument)
  var isObject = __webpack_require__(59)
    , cof      = __webpack_require__(80)
    , MATCH    = __webpack_require__(71)('match');
  module.exports = function(it){
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
  };

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

  var MATCH = __webpack_require__(71)('match');
  module.exports = function(KEY){
    var re = /./;
    try {
      '/./'[KEY](re);
    } catch(e){
      try {
        re[MATCH] = false;
        return !'/./'[KEY](re);
      } catch(f){ /* empty */ }
    } return true;
  };

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
  'use strict';
  var $export  = __webpack_require__(54)
    , context  = __webpack_require__(179)
    , INCLUDES = 'includes';

  $export($export.P + $export.F * __webpack_require__(181)(INCLUDES), 'String', {
    includes: function includes(searchString /*, position = 0 */){
      return !!~context(this, searchString, INCLUDES)
        .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(54);

  $export($export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: __webpack_require__(137)
  });

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
  'use strict';
  var $export     = __webpack_require__(54)
    , toLength    = __webpack_require__(83)
    , context     = __webpack_require__(179)
    , STARTS_WITH = 'startsWith'
    , $startsWith = ''[STARTS_WITH];

  $export($export.P + $export.F * __webpack_require__(181)(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString /*, position = 0 */){
      var that   = context(this, searchString, STARTS_WITH)
        , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
        , search = String(searchString);
      return $startsWith
        ? $startsWith.call(that, search, index)
        : that.slice(index, index + search.length) === search;
    }
  });

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.2 String.prototype.anchor(name)
  __webpack_require__(186)('anchor', function(createHTML){
    return function anchor(name){
      return createHTML(this, 'a', 'name', name);
    }
  });

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(54)
    , fails   = __webpack_require__(53)
    , defined = __webpack_require__(81)
    , quot    = /"/g;
  // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
  var createHTML = function(string, tag, attribute, value) {
    var S  = String(defined(string))
      , p1 = '<' + tag;
    if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };
  module.exports = function(NAME, exec){
    var O = {};
    O[NAME] = exec(createHTML);
    $export($export.P + $export.F * fails(function(){
      var test = ''[NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    }), 'String', O);
  };

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.3 String.prototype.big()
  __webpack_require__(186)('big', function(createHTML){
    return function big(){
      return createHTML(this, 'big', '', '');
    }
  });

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.4 String.prototype.blink()
  __webpack_require__(186)('blink', function(createHTML){
    return function blink(){
      return createHTML(this, 'blink', '', '');
    }
  });

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.5 String.prototype.bold()
  __webpack_require__(186)('bold', function(createHTML){
    return function bold(){
      return createHTML(this, 'b', '', '');
    }
  });

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.6 String.prototype.fixed()
  __webpack_require__(186)('fixed', function(createHTML){
    return function fixed(){
      return createHTML(this, 'tt', '', '');
    }
  });

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.7 String.prototype.fontcolor(color)
  __webpack_require__(186)('fontcolor', function(createHTML){
    return function fontcolor(color){
      return createHTML(this, 'font', 'color', color);
    }
  });

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.8 String.prototype.fontsize(size)
  __webpack_require__(186)('fontsize', function(createHTML){
    return function fontsize(size){
      return createHTML(this, 'font', 'size', size);
    }
  });

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.9 String.prototype.italics()
  __webpack_require__(186)('italics', function(createHTML){
    return function italics(){
      return createHTML(this, 'i', '', '');
    }
  });

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.10 String.prototype.link(url)
  __webpack_require__(186)('link', function(createHTML){
    return function link(url){
      return createHTML(this, 'a', 'href', url);
    }
  });

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.11 String.prototype.small()
  __webpack_require__(186)('small', function(createHTML){
    return function small(){
      return createHTML(this, 'small', '', '');
    }
  });

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.12 String.prototype.strike()
  __webpack_require__(186)('strike', function(createHTML){
    return function strike(){
      return createHTML(this, 'strike', '', '');
    }
  });

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.13 String.prototype.sub()
  __webpack_require__(186)('sub', function(createHTML){
    return function sub(){
      return createHTML(this, 'sub', '', '');
    }
  });

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // B.2.3.14 String.prototype.sup()
  __webpack_require__(186)('sup', function(createHTML){
    return function sup(){
      return createHTML(this, 'sup', '', '');
    }
  });

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

  // 20.3.3.1 / 15.9.4.4 Date.now()
  var $export = __webpack_require__(54);

  $export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export     = __webpack_require__(54)
    , toObject    = __webpack_require__(104)
    , toPrimitive = __webpack_require__(62);

  $export($export.P + $export.F * __webpack_require__(53)(function(){
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
  }), 'Date', {
    toJSON: function toJSON(key){
      var O  = toObject(this)
        , pv = toPrimitive(O);
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
  var $export = __webpack_require__(54)
    , fails   = __webpack_require__(53)
    , getTime = Date.prototype.getTime;

  var lz = function(num){
    return num > 9 ? num : '0' + num;
  };

  // PhantomJS / old WebKit has a broken implementations
  $export($export.P + $export.F * (fails(function(){
    return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
  }) || !fails(function(){
    new Date(NaN).toISOString();
  })), 'Date', {
    toISOString: function toISOString(){
      if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
      var d = this
        , y = d.getUTCFullYear()
        , m = d.getUTCMilliseconds()
        , s = y < 0 ? '-' : y > 9999 ? '+' : '';
      return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
        '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
        'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
        ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
    }
  });

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

  var DateProto    = Date.prototype
    , INVALID_DATE = 'Invalid Date'
    , TO_STRING    = 'toString'
    , $toString    = DateProto[TO_STRING]
    , getTime      = DateProto.getTime;
  if(new Date(NaN) + '' != INVALID_DATE){
    __webpack_require__(64)(DateProto, TO_STRING, function toString(){
      var value = getTime.call(this);
      return value === value ? $toString.call(this) : INVALID_DATE;
    });
  }

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

  var TO_PRIMITIVE = __webpack_require__(71)('toPrimitive')
    , proto        = Date.prototype;

  if(!(TO_PRIMITIVE in proto))__webpack_require__(56)(proto, TO_PRIMITIVE, __webpack_require__(204));

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var anObject    = __webpack_require__(58)
    , toPrimitive = __webpack_require__(62)
    , NUMBER      = 'number';

  module.exports = function(hint){
    if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
    return toPrimitive(anObject(this), hint != NUMBER);
  };

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
  var $export = __webpack_require__(54);

  $export($export.S, 'Array', {isArray: __webpack_require__(91)});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var ctx            = __webpack_require__(66)
    , $export        = __webpack_require__(54)
    , toObject       = __webpack_require__(104)
    , call           = __webpack_require__(207)
    , isArrayIter    = __webpack_require__(208)
    , toLength       = __webpack_require__(83)
    , createProperty = __webpack_require__(209)
    , getIterFn      = __webpack_require__(210);

  $export($export.S + $export.F * !__webpack_require__(211)(function(iter){ Array.from(iter); }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
      var O       = toObject(arrayLike)
        , C       = typeof this == 'function' ? this : Array
        , aLen    = arguments.length
        , mapfn   = aLen > 1 ? arguments[1] : undefined
        , mapping = mapfn !== undefined
        , index   = 0
        , iterFn  = getIterFn(O)
        , length, result, step, iterator;
      if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
        for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = toLength(O.length);
        for(result = new C(length); length > index; index++){
          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

  // call something on iterator step with safe closing on error
  var anObject = __webpack_require__(58);
  module.exports = function(iterator, fn, value, entries){
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch(e){
      var ret = iterator['return'];
      if(ret !== undefined)anObject(ret.call(iterator));
      throw e;
    }
  };

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

  // check on default Array iterator
  var Iterators  = __webpack_require__(175)
    , ITERATOR   = __webpack_require__(71)('iterator')
    , ArrayProto = Array.prototype;

  module.exports = function(it){
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $defineProperty = __webpack_require__(57)
    , createDesc      = __webpack_require__(63);

  module.exports = function(object, index, value){
    if(index in object)$defineProperty.f(object, index, createDesc(0, value));
    else object[index] = value;
  };

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

  var classof   = __webpack_require__(121)
    , ITERATOR  = __webpack_require__(71)('iterator')
    , Iterators = __webpack_require__(175);
  module.exports = __webpack_require__(55).getIteratorMethod = function(it){
    if(it != undefined)return it[ITERATOR]
      || it['@@iterator']
      || Iterators[classof(it)];
  };

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

  var ITERATOR     = __webpack_require__(71)('iterator')
    , SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function(){ SAFE_CLOSING = true; };
    Array.from(riter, function(){ throw 2; });
  } catch(e){ /* empty */ }

  module.exports = function(exec, skipClosing){
    if(!skipClosing && !SAFE_CLOSING)return false;
    var safe = false;
    try {
      var arr  = [7]
        , iter = arr[ITERATOR]();
      iter.next = function(){ return {done: safe = true}; };
      arr[ITERATOR] = function(){ return iter; };
      exec(arr);
    } catch(e){ /* empty */ }
    return safe;
  };

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export        = __webpack_require__(54)
    , createProperty = __webpack_require__(209);

  // WebKit Array.of isn't generic
  $export($export.S + $export.F * __webpack_require__(53)(function(){
    function F(){}
    return !(Array.of.call(F) instanceof F);
  }), 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of(/* ...args */){
      var index  = 0
        , aLen   = arguments.length
        , result = new (typeof this == 'function' ? this : Array)(aLen);
      while(aLen > index)createProperty(result, index, arguments[index++]);
      result.length = aLen;
      return result;
    }
  });

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 22.1.3.13 Array.prototype.join(separator)
  var $export   = __webpack_require__(54)
    , toIObject = __webpack_require__(78)
    , arrayJoin = [].join;

  // fallback for not array-like strings
  $export($export.P + $export.F * (__webpack_require__(79) != Object || !__webpack_require__(214)(arrayJoin)), 'Array', {
    join: function join(separator){
      return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
    }
  });

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

  var fails = __webpack_require__(53);

  module.exports = function(method, arg){
    return !!method && fails(function(){
      arg ? method.call(null, function(){}, 1) : method.call(null);
    });
  };

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export    = __webpack_require__(54)
    , html       = __webpack_require__(94)
    , cof        = __webpack_require__(80)
    , toIndex    = __webpack_require__(85)
    , toLength   = __webpack_require__(83)
    , arraySlice = [].slice;

  // fallback for not array-like ES3 strings and DOM objects
  $export($export.P + $export.F * __webpack_require__(53)(function(){
    if(html)arraySlice.call(html);
  }), 'Array', {
    slice: function slice(begin, end){
      var len   = toLength(this.length)
        , klass = cof(this);
      end = end === undefined ? len : end;
      if(klass == 'Array')return arraySlice.call(this, begin, end);
      var start  = toIndex(begin, len)
        , upTo   = toIndex(end, len)
        , size   = toLength(upTo - start)
        , cloned = Array(size)
        , i      = 0;
      for(; i < size; i++)cloned[i] = klass == 'String'
        ? this.charAt(start + i)
        : this[start + i];
      return cloned;
    }
  });

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export   = __webpack_require__(54)
    , aFunction = __webpack_require__(67)
    , toObject  = __webpack_require__(104)
    , fails     = __webpack_require__(53)
    , $sort     = [].sort
    , test      = [1, 2, 3];

  $export($export.P + $export.F * (fails(function(){
    // IE8-
    test.sort(undefined);
  }) || !fails(function(){
    // V8 bug
    test.sort(null);
    // Old WebKit
  }) || !__webpack_require__(214)($sort)), 'Array', {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn){
      return comparefn === undefined
        ? $sort.call(toObject(this))
        : $sort.call(toObject(this), aFunction(comparefn));
    }
  });

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export  = __webpack_require__(54)
    , $forEach = __webpack_require__(218)(0)
    , STRICT   = __webpack_require__(214)([].forEach, true);

  $export($export.P + $export.F * !STRICT, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn /* , thisArg */){
      return $forEach(this, callbackfn, arguments[1]);
    }
  });

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex
  var ctx      = __webpack_require__(66)
    , IObject  = __webpack_require__(79)
    , toObject = __webpack_require__(104)
    , toLength = __webpack_require__(83)
    , asc      = __webpack_require__(219);
  module.exports = function(TYPE, $create){
    var IS_MAP        = TYPE == 1
      , IS_FILTER     = TYPE == 2
      , IS_SOME       = TYPE == 3
      , IS_EVERY      = TYPE == 4
      , IS_FIND_INDEX = TYPE == 6
      , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
      , create        = $create || asc;
    return function($this, callbackfn, that){
      var O      = toObject($this)
        , self   = IObject(O)
        , f      = ctx(callbackfn, that, 3)
        , length = toLength(self.length)
        , index  = 0
        , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
        , val, res;
      for(;length > index; index++)if(NO_HOLES || index in self){
        val = self[index];
        res = f(val, index, O);
        if(TYPE){
          if(IS_MAP)result[index] = res;            // map
          else if(res)switch(TYPE){
            case 3: return true;                    // some
            case 5: return val;                     // find
            case 6: return index;                   // findIndex
            case 2: result.push(val);               // filter
          } else if(IS_EVERY)return false;          // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
  var speciesConstructor = __webpack_require__(220);

  module.exports = function(original, length){
    return new (speciesConstructor(original))(length);
  };

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__(59)
    , isArray  = __webpack_require__(91)
    , SPECIES  = __webpack_require__(71)('species');

  module.exports = function(original){
    var C;
    if(isArray(original)){
      C = original.constructor;
      // cross-realm fallback
      if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
      if(isObject(C)){
        C = C[SPECIES];
        if(C === null)C = undefined;
      }
    } return C === undefined ? Array : C;
  };

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(54)
    , $map    = __webpack_require__(218)(1);

  $export($export.P + $export.F * !__webpack_require__(214)([].map, true), 'Array', {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn /* , thisArg */){
      return $map(this, callbackfn, arguments[1]);
    }
  });

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(54)
    , $filter = __webpack_require__(218)(2);

  $export($export.P + $export.F * !__webpack_require__(214)([].filter, true), 'Array', {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn /* , thisArg */){
      return $filter(this, callbackfn, arguments[1]);
    }
  });

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(54)
    , $some   = __webpack_require__(218)(3);

  $export($export.P + $export.F * !__webpack_require__(214)([].some, true), 'Array', {
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn /* , thisArg */){
      return $some(this, callbackfn, arguments[1]);
    }
  });

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(54)
    , $every  = __webpack_require__(218)(4);

  $export($export.P + $export.F * !__webpack_require__(214)([].every, true), 'Array', {
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn /* , thisArg */){
      return $every(this, callbackfn, arguments[1]);
    }
  });

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(54)
    , $reduce = __webpack_require__(226);

  $export($export.P + $export.F * !__webpack_require__(214)([].reduce, true), 'Array', {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn /* , initialValue */){
      return $reduce(this, callbackfn, arguments.length, arguments[1], false);
    }
  });

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

  var aFunction = __webpack_require__(67)
    , toObject  = __webpack_require__(104)
    , IObject   = __webpack_require__(79)
    , toLength  = __webpack_require__(83);

  module.exports = function(that, callbackfn, aLen, memo, isRight){
    aFunction(callbackfn);
    var O      = toObject(that)
      , self   = IObject(O)
      , length = toLength(O.length)
      , index  = isRight ? length - 1 : 0
      , i      = isRight ? -1 : 1;
    if(aLen < 2)for(;;){
      if(index in self){
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if(isRight ? index < 0 : length <= index){
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export = __webpack_require__(54)
    , $reduce = __webpack_require__(226);

  $export($export.P + $export.F * !__webpack_require__(214)([].reduceRight, true), 'Array', {
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: function reduceRight(callbackfn /* , initialValue */){
      return $reduce(this, callbackfn, arguments.length, arguments[1], true);
    }
  });

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export       = __webpack_require__(54)
    , $indexOf      = __webpack_require__(82)(false)
    , $native       = [].indexOf
    , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

  $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(214)($native)), 'Array', {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? $native.apply(this, arguments) || 0
        : $indexOf(this, searchElement, arguments[1]);
    }
  });

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export       = __webpack_require__(54)
    , toIObject     = __webpack_require__(78)
    , toInteger     = __webpack_require__(84)
    , toLength      = __webpack_require__(83)
    , $native       = [].lastIndexOf
    , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

  $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(214)($native)), 'Array', {
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
      // convert -0 to +0
      if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
      var O      = toIObject(this)
        , length = toLength(O.length)
        , index  = length - 1;
      if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
      if(index < 0)index = length + index;
      for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
      return -1;
    }
  });

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  var $export = __webpack_require__(54);

  $export($export.P, 'Array', {copyWithin: __webpack_require__(231)});

  __webpack_require__(232)('copyWithin');

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  'use strict';
  var toObject = __webpack_require__(104)
    , toIndex  = __webpack_require__(85)
    , toLength = __webpack_require__(83);

  module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
    var O     = toObject(this)
      , len   = toLength(O.length)
      , to    = toIndex(target, len)
      , from  = toIndex(start, len)
      , end   = arguments.length > 2 ? arguments[2] : undefined
      , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
      , inc   = 1;
    if(from < to && to < from + count){
      inc  = -1;
      from += count - 1;
      to   += count - 1;
    }
    while(count-- > 0){
      if(from in O)O[to] = O[from];
      else delete O[to];
      to   += inc;
      from += inc;
    } return O;
  };

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = __webpack_require__(71)('unscopables')
    , ArrayProto  = Array.prototype;
  if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(56)(ArrayProto, UNSCOPABLES, {});
  module.exports = function(key){
    ArrayProto[UNSCOPABLES][key] = true;
  };

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  var $export = __webpack_require__(54);

  $export($export.P, 'Array', {fill: __webpack_require__(234)});

  __webpack_require__(232)('fill');

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  'use strict';
  var toObject = __webpack_require__(104)
    , toIndex  = __webpack_require__(85)
    , toLength = __webpack_require__(83);
  module.exports = function fill(value /*, start = 0, end = @length */){
    var O      = toObject(this)
      , length = toLength(O.length)
      , aLen   = arguments.length
      , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
      , end    = aLen > 2 ? arguments[2] : undefined
      , endPos = end === undefined ? length : toIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
  };

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
  var $export = __webpack_require__(54)
    , $find   = __webpack_require__(218)(5)
    , KEY     = 'find'
    , forced  = true;
  // Shouldn't skip holes
  if(KEY in [])Array(1)[KEY](function(){ forced = false; });
  $export($export.P + $export.F * forced, 'Array', {
    find: function find(callbackfn/*, that = undefined */){
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  __webpack_require__(232)(KEY);

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
  var $export = __webpack_require__(54)
    , $find   = __webpack_require__(218)(6)
    , KEY     = 'findIndex'
    , forced  = true;
  // Shouldn't skip holes
  if(KEY in [])Array(1)[KEY](function(){ forced = false; });
  $export($export.P + $export.F * forced, 'Array', {
    findIndex: function findIndex(callbackfn/*, that = undefined */){
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  __webpack_require__(232)(KEY);

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(238)('Array');

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var global      = __webpack_require__(50)
    , dP          = __webpack_require__(57)
    , DESCRIPTORS = __webpack_require__(52)
    , SPECIES     = __webpack_require__(71)('species');

  module.exports = function(KEY){
    var C = global[KEY];
    if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
      configurable: true,
      get: function(){ return this; }
    });
  };

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var addToUnscopables = __webpack_require__(232)
    , step             = __webpack_require__(240)
    , Iterators        = __webpack_require__(175)
    , toIObject        = __webpack_require__(78);

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  module.exports = __webpack_require__(174)(Array, 'Array', function(iterated, kind){
    this._t = toIObject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function(){
    var O     = this._t
      , kind  = this._k
      , index = this._i++;
    if(!O || index >= O.length){
      this._t = undefined;
      return step(1);
    }
    if(kind == 'keys'  )return step(0, index);
    if(kind == 'values')return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

/***/ },
/* 240 */
/***/ function(module, exports) {

  module.exports = function(done, value){
    return {value: value, done: !!done};
  };

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

  var global            = __webpack_require__(50)
    , inheritIfRequired = __webpack_require__(134)
    , dP                = __webpack_require__(57).f
    , gOPN              = __webpack_require__(96).f
    , isRegExp          = __webpack_require__(180)
    , $flags            = __webpack_require__(242)
    , $RegExp           = global.RegExp
    , Base              = $RegExp
    , proto             = $RegExp.prototype
    , re1               = /a/g
    , re2               = /a/g
    // "new" creates a new object, old webkit buggy here
    , CORRECT_NEW       = new $RegExp(re1) !== re1;

  if(__webpack_require__(52) && (!CORRECT_NEW || __webpack_require__(53)(function(){
    re2[__webpack_require__(71)('match')] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))){
    $RegExp = function RegExp(p, f){
      var tiRE = this instanceof $RegExp
        , piRE = isRegExp(p)
        , fiU  = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
        : inheritIfRequired(CORRECT_NEW
          ? new Base(piRE && !fiU ? p.source : p, f)
          : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
        , tiRE ? this : proto, $RegExp);
    };
    var proxy = function(key){
      key in $RegExp || dP($RegExp, key, {
        configurable: true,
        get: function(){ return Base[key]; },
        set: function(it){ Base[key] = it; }
      });
    };
    for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
    proto.constructor = $RegExp;
    $RegExp.prototype = proto;
    __webpack_require__(64)(global, 'RegExp', $RegExp);
  }

  __webpack_require__(238)('RegExp');

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 21.2.5.3 get RegExp.prototype.flags
  var anObject = __webpack_require__(58);
  module.exports = function(){
    var that   = anObject(this)
      , result = '';
    if(that.global)     result += 'g';
    if(that.ignoreCase) result += 'i';
    if(that.multiline)  result += 'm';
    if(that.unicode)    result += 'u';
    if(that.sticky)     result += 'y';
    return result;
  };

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  __webpack_require__(244);
  var anObject    = __webpack_require__(58)
    , $flags      = __webpack_require__(242)
    , DESCRIPTORS = __webpack_require__(52)
    , TO_STRING   = 'toString'
    , $toString   = /./[TO_STRING];

  var define = function(fn){
    __webpack_require__(64)(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if(__webpack_require__(53)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
    define(function toString(){
      var R = anObject(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
    });
  // FF44- RegExp#toString has a wrong name
  } else if($toString.name != TO_STRING){
    define(function toString(){
      return $toString.call(this);
    });
  }

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

  // 21.2.5.3 get RegExp.prototype.flags()
  if(__webpack_require__(52) && /./g.flags != 'g')__webpack_require__(57).f(RegExp.prototype, 'flags', {
    configurable: true,
    get: __webpack_require__(242)
  });

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

  // @@match logic
  __webpack_require__(246)('match', 1, function(defined, MATCH, $match){
    // 21.1.3.11 String.prototype.match(regexp)
    return [function match(regexp){
      'use strict';
      var O  = defined(this)
        , fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, $match];
  });

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var hide     = __webpack_require__(56)
    , redefine = __webpack_require__(64)
    , fails    = __webpack_require__(53)
    , defined  = __webpack_require__(81)
    , wks      = __webpack_require__(71);

  module.exports = function(KEY, length, exec){
    var SYMBOL   = wks(KEY)
      , fns      = exec(defined, SYMBOL, ''[KEY])
      , strfn    = fns[0]
      , rxfn     = fns[1];
    if(fails(function(){
      var O = {};
      O[SYMBOL] = function(){ return 7; };
      return ''[KEY](O) != 7;
    })){
      redefine(String.prototype, KEY, strfn);
      hide(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function(string, arg){ return rxfn.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function(string){ return rxfn.call(string, this); }
      );
    }
  };

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

  // @@replace logic
  __webpack_require__(246)('replace', 2, function(defined, REPLACE, $replace){
    // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
    return [function replace(searchValue, replaceValue){
      'use strict';
      var O  = defined(this)
        , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    }, $replace];
  });

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

  // @@search logic
  __webpack_require__(246)('search', 1, function(defined, SEARCH, $search){
    // 21.1.3.15 String.prototype.search(regexp)
    return [function search(regexp){
      'use strict';
      var O  = defined(this)
        , fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    }, $search];
  });

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

  // @@split logic
  __webpack_require__(246)('split', 2, function(defined, SPLIT, $split){
    'use strict';
    var isRegExp   = __webpack_require__(180)
      , _split     = $split
      , $push      = [].push
      , $SPLIT     = 'split'
      , LENGTH     = 'length'
      , LAST_INDEX = 'lastIndex';
    if(
      'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
      'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
      'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
      '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
      '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
      ''[$SPLIT](/.?/)[LENGTH]
    ){
      var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
      // based on es5-shim implementation, need to rework it
      $split = function(separator, limit){
        var string = String(this);
        if(separator === undefined && limit === 0)return [];
        // If `separator` is not a regex, use native split
        if(!isRegExp(separator))return _split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var separator2, match, lastIndex, lastLength, i;
        // Doesn't need flags gy, but they don't hurt
        if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
        while(match = separatorCopy.exec(string)){
          // `separatorCopy.lastIndex` is not reliable cross-browser
          lastIndex = match.index + match[0][LENGTH];
          if(lastIndex > lastLastIndex){
            output.push(string.slice(lastLastIndex, match.index));
            // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
            if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
              for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
            });
            if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if(output[LENGTH] >= splitLimit)break;
          }
          if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
        }
        if(lastLastIndex === string[LENGTH]){
          if(lastLength || !separatorCopy.test(''))output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
    // Chakra, V8
    } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
      $split = function(separator, limit){
        return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
      };
    }
    // 21.1.3.17 String.prototype.split(separator, limit)
    return [function split(separator, limit){
      var O  = defined(this)
        , fn = separator == undefined ? undefined : separator[SPLIT];
      return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
    }, $split];
  });

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var LIBRARY            = __webpack_require__(74)
    , global             = __webpack_require__(50)
    , ctx                = __webpack_require__(66)
    , classof            = __webpack_require__(121)
    , $export            = __webpack_require__(54)
    , isObject           = __webpack_require__(59)
    , aFunction          = __webpack_require__(67)
    , anInstance         = __webpack_require__(251)
    , forOf              = __webpack_require__(252)
    , speciesConstructor = __webpack_require__(253)
    , task               = __webpack_require__(254).set
    , microtask          = __webpack_require__(255)()
    , PROMISE            = 'Promise'
    , TypeError          = global.TypeError
    , process            = global.process
    , $Promise           = global[PROMISE]
    , process            = global.process
    , isNode             = classof(process) == 'process'
    , empty              = function(){ /* empty */ }
    , Internal, GenericPromiseCapability, Wrapper;

  var USE_NATIVE = !!function(){
    try {
      // correct subclassing with @@species support
      var promise     = $Promise.resolve(1)
        , FakePromise = (promise.constructor = {})[__webpack_require__(71)('species')] = function(exec){ exec(empty, empty); };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
    } catch(e){ /* empty */ }
  }();

  // helpers
  var sameConstructor = function(a, b){
    // with library wrapper special case
    return a === b || a === $Promise && b === Wrapper;
  };
  var isThenable = function(it){
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var newPromiseCapability = function(C){
    return sameConstructor($Promise, C)
      ? new PromiseCapability(C)
      : new GenericPromiseCapability(C);
  };
  var PromiseCapability = GenericPromiseCapability = function(C){
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject){
      if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject  = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject  = aFunction(reject);
  };
  var perform = function(exec){
    try {
      exec();
    } catch(e){
      return {error: e};
    }
  };
  var notify = function(promise, isReject){
    if(promise._n)return;
    promise._n = true;
    var chain = promise._c;
    microtask(function(){
      var value = promise._v
        , ok    = promise._s == 1
        , i     = 0;
      var run = function(reaction){
        var handler = ok ? reaction.ok : reaction.fail
          , resolve = reaction.resolve
          , reject  = reaction.reject
          , domain  = reaction.domain
          , result, then;
        try {
          if(handler){
            if(!ok){
              if(promise._h == 2)onHandleUnhandled(promise);
              promise._h = 1;
            }
            if(handler === true)result = value;
            else {
              if(domain)domain.enter();
              result = handler(value);
              if(domain)domain.exit();
            }
            if(result === reaction.promise){
              reject(TypeError('Promise-chain cycle'));
            } else if(then = isThenable(result)){
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch(e){
          reject(e);
        }
      };
      while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if(isReject && !promise._h)onUnhandled(promise);
    });
  };
  var onUnhandled = function(promise){
    task.call(global, function(){
      var value = promise._v
        , abrupt, handler, console;
      if(isUnhandled(promise)){
        abrupt = perform(function(){
          if(isNode){
            process.emit('unhandledRejection', value, promise);
          } else if(handler = global.onunhandledrejection){
            handler({promise: promise, reason: value});
          } else if((console = global.console) && console.error){
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
      } promise._a = undefined;
      if(abrupt)throw abrupt.error;
    });
  };
  var isUnhandled = function(promise){
    if(promise._h == 1)return false;
    var chain = promise._a || promise._c
      , i     = 0
      , reaction;
    while(chain.length > i){
      reaction = chain[i++];
      if(reaction.fail || !isUnhandled(reaction.promise))return false;
    } return true;
  };
  var onHandleUnhandled = function(promise){
    task.call(global, function(){
      var handler;
      if(isNode){
        process.emit('rejectionHandled', promise);
      } else if(handler = global.onrejectionhandled){
        handler({promise: promise, reason: promise._v});
      }
    });
  };
  var $reject = function(value){
    var promise = this;
    if(promise._d)return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if(!promise._a)promise._a = promise._c.slice();
    notify(promise, true);
  };
  var $resolve = function(value){
    var promise = this
      , then;
    if(promise._d)return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if(promise === value)throw TypeError("Promise can't be resolved itself");
      if(then = isThenable(value)){
        microtask(function(){
          var wrapper = {_w: promise, _d: false}; // wrap
          try {
            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
          } catch(e){
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch(e){
      $reject.call({_w: promise, _d: false}, e); // wrap
    }
  };

  // constructor polyfill
  if(!USE_NATIVE){
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor){
      anInstance(this, $Promise, PROMISE, '_h');
      aFunction(executor);
      Internal.call(this);
      try {
        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
      } catch(err){
        $reject.call(this, err);
      }
    };
    Internal = function Promise(executor){
      this._c = [];             // <- awaiting reactions
      this._a = undefined;      // <- checked in isUnhandled reactions
      this._s = 0;              // <- state
      this._d = false;          // <- done
      this._v = undefined;      // <- value
      this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false;          // <- notify
    };
    Internal.prototype = __webpack_require__(256)($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected){
        var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
        reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail   = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode ? process.domain : undefined;
        this._c.push(reaction);
        if(this._a)this._a.push(reaction);
        if(this._s)notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function(onRejected){
        return this.then(undefined, onRejected);
      }
    });
    PromiseCapability = function(){
      var promise  = new Internal;
      this.promise = promise;
      this.resolve = ctx($resolve, promise, 1);
      this.reject  = ctx($reject, promise, 1);
    };
  }

  $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
  __webpack_require__(70)($Promise, PROMISE);
  __webpack_require__(238)(PROMISE);
  Wrapper = __webpack_require__(55)[PROMISE];

  // statics
  $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r){
      var capability = newPromiseCapability(this)
        , $$reject   = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x){
      // instanceof instead of internal slot check because we should fix it without replacement native Promise core
      if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
      var capability = newPromiseCapability(this)
        , $$resolve  = capability.resolve;
      $$resolve(x);
      return capability.promise;
    }
  });
  $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(211)(function(iter){
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable){
      var C          = this
        , capability = newPromiseCapability(C)
        , resolve    = capability.resolve
        , reject     = capability.reject;
      var abrupt = perform(function(){
        var values    = []
          , index     = 0
          , remaining = 1;
        forOf(iterable, false, function(promise){
          var $index        = index++
            , alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function(value){
            if(alreadyCalled)return;
            alreadyCalled  = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if(abrupt)reject(abrupt.error);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable){
      var C          = this
        , capability = newPromiseCapability(C)
        , reject     = capability.reject;
      var abrupt = perform(function(){
        forOf(iterable, false, function(promise){
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if(abrupt)reject(abrupt.error);
      return capability.promise;
    }
  });

/***/ },
/* 251 */
/***/ function(module, exports) {

  module.exports = function(it, Constructor, name, forbiddenField){
    if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
      throw TypeError(name + ': incorrect invocation!');
    } return it;
  };

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

  var ctx         = __webpack_require__(66)
    , call        = __webpack_require__(207)
    , isArrayIter = __webpack_require__(208)
    , anObject    = __webpack_require__(58)
    , toLength    = __webpack_require__(83)
    , getIterFn   = __webpack_require__(210)
    , BREAK       = {}
    , RETURN      = {};
  var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
    var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
      , f      = ctx(fn, that, entries ? 2 : 1)
      , index  = 0
      , length, step, iterator, result;
    if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
      result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if(result === BREAK || result === RETURN)return result;
    } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
      result = call(iterator, f, step.value, entries);
      if(result === BREAK || result === RETURN)return result;
    }
  };
  exports.BREAK  = BREAK;
  exports.RETURN = RETURN;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)
  var anObject  = __webpack_require__(58)
    , aFunction = __webpack_require__(67)
    , SPECIES   = __webpack_require__(71)('species');
  module.exports = function(O, D){
    var C = anObject(O).constructor, S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

  var ctx                = __webpack_require__(66)
    , invoke             = __webpack_require__(124)
    , html               = __webpack_require__(94)
    , cel                = __webpack_require__(61)
    , global             = __webpack_require__(50)
    , process            = global.process
    , setTask            = global.setImmediate
    , clearTask          = global.clearImmediate
    , MessageChannel     = global.MessageChannel
    , counter            = 0
    , queue              = {}
    , ONREADYSTATECHANGE = 'onreadystatechange'
    , defer, channel, port;
  var run = function(){
    var id = +this;
    if(queue.hasOwnProperty(id)){
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function(event){
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if(!setTask || !clearTask){
    setTask = function setImmediate(fn){
      var args = [], i = 1;
      while(arguments.length > i)args.push(arguments[i++]);
      queue[++counter] = function(){
        invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id){
      delete queue[id];
    };
    // Node.js 0.8-
    if(__webpack_require__(80)(process) == 'process'){
      defer = function(id){
        process.nextTick(ctx(run, id, 1));
      };
    // Browsers with MessageChannel, includes WebWorkers
    } else if(MessageChannel){
      channel = new MessageChannel;
      port    = channel.port2;
      channel.port1.onmessage = listener;
      defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
      defer = function(id){
        global.postMessage(id + '', '*');
      };
      global.addEventListener('message', listener, false);
    // IE8-
    } else if(ONREADYSTATECHANGE in cel('script')){
      defer = function(id){
        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
          html.removeChild(this);
          run.call(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function(id){
        setTimeout(ctx(run, id, 1), 0);
      };
    }
  }
  module.exports = {
    set:   setTask,
    clear: clearTask
  };

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

  var global    = __webpack_require__(50)
    , macrotask = __webpack_require__(254).set
    , Observer  = global.MutationObserver || global.WebKitMutationObserver
    , process   = global.process
    , Promise   = global.Promise
    , isNode    = __webpack_require__(80)(process) == 'process';

  module.exports = function(){
    var head, last, notify;

    var flush = function(){
      var parent, fn;
      if(isNode && (parent = process.domain))parent.exit();
      while(head){
        fn   = head.fn;
        head = head.next;
        try {
          fn();
        } catch(e){
          if(head)notify();
          else last = undefined;
          throw e;
        }
      } last = undefined;
      if(parent)parent.enter();
    };

    // Node.js
    if(isNode){
      notify = function(){
        process.nextTick(flush);
      };
    // browsers with MutationObserver
    } else if(Observer){
      var toggle = true
        , node   = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
      notify = function(){
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if(Promise && Promise.resolve){
      var promise = Promise.resolve();
      notify = function(){
        promise.then(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else {
      notify = function(){
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
      };
    }

    return function(fn){
      var task = {fn: fn, next: undefined};
      if(last)last.next = task;
      if(!head){
        head = task;
        notify();
      } last = task;
    };
  };

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

  var redefine = __webpack_require__(64);
  module.exports = function(target, src, safe){
    for(var key in src)redefine(target, key, src[key], safe);
    return target;
  };

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var strong = __webpack_require__(258);

  // 23.1 Map Objects
  module.exports = __webpack_require__(259)('Map', function(get){
    return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key){
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value){
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var dP          = __webpack_require__(57).f
    , create      = __webpack_require__(92)
    , redefineAll = __webpack_require__(256)
    , ctx         = __webpack_require__(66)
    , anInstance  = __webpack_require__(251)
    , defined     = __webpack_require__(81)
    , forOf       = __webpack_require__(252)
    , $iterDefine = __webpack_require__(174)
    , step        = __webpack_require__(240)
    , setSpecies  = __webpack_require__(238)
    , DESCRIPTORS = __webpack_require__(52)
    , fastKey     = __webpack_require__(68).fastKey
    , SIZE        = DESCRIPTORS ? '_s' : 'size';

  var getEntry = function(that, key){
    // fast case
    var index = fastKey(key), entry;
    if(index !== 'F')return that._i[index];
    // frozen object case
    for(entry = that._f; entry; entry = entry.n){
      if(entry.k == key)return entry;
    }
  };

  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
      var C = wrapper(function(that, iterable){
        anInstance(that, C, NAME, '_i');
        that._i = create(null); // index
        that._f = undefined;    // first entry
        that._l = undefined;    // last entry
        that[SIZE] = 0;         // size
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear(){
          for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
            entry.r = true;
            if(entry.p)entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function(key){
          var that  = this
            , entry = getEntry(that, key);
          if(entry){
            var next = entry.n
              , prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if(prev)prev.n = next;
            if(next)next.p = prev;
            if(that._f == entry)that._f = next;
            if(that._l == entry)that._l = prev;
            that[SIZE]--;
          } return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /*, that = undefined */){
          anInstance(this, C, 'forEach');
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
            , entry;
          while(entry = entry ? entry.n : this._f){
            f(entry.v, entry.k, this);
            // revert to the last existing entry
            while(entry && entry.r)entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key){
          return !!getEntry(this, key);
        }
      });
      if(DESCRIPTORS)dP(C.prototype, 'size', {
        get: function(){
          return defined(this[SIZE]);
        }
      });
      return C;
    },
    def: function(that, key, value){
      var entry = getEntry(that, key)
        , prev, index;
      // change existing entry
      if(entry){
        entry.v = value;
      // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true), // <- index
          k: key,                        // <- key
          v: value,                      // <- value
          p: prev = that._l,             // <- previous entry
          n: undefined,                  // <- next entry
          r: false                       // <- removed
        };
        if(!that._f)that._f = entry;
        if(prev)prev.n = entry;
        that[SIZE]++;
        // add to index
        if(index !== 'F')that._i[index] = entry;
      } return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP){
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      $iterDefine(C, NAME, function(iterated, kind){
        this._t = iterated;  // target
        this._k = kind;      // kind
        this._l = undefined; // previous
      }, function(){
        var that  = this
          , kind  = that._k
          , entry = that._l;
        // revert to the last existing entry
        while(entry && entry.r)entry = entry.p;
        // get next entry
        if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
          // or finish the iteration
          that._t = undefined;
          return step(1);
        }
        // return step by kind
        if(kind == 'keys'  )return step(0, entry.k);
        if(kind == 'values')return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

      // add [@@species], 23.1.2.2, 23.2.2.2
      setSpecies(NAME);
    }
  };

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var global            = __webpack_require__(50)
    , $export           = __webpack_require__(54)
    , redefine          = __webpack_require__(64)
    , redefineAll       = __webpack_require__(256)
    , meta              = __webpack_require__(68)
    , forOf             = __webpack_require__(252)
    , anInstance        = __webpack_require__(251)
    , isObject          = __webpack_require__(59)
    , fails             = __webpack_require__(53)
    , $iterDetect       = __webpack_require__(211)
    , setToStringTag    = __webpack_require__(70)
    , inheritIfRequired = __webpack_require__(134);

  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
    var Base  = global[NAME]
      , C     = Base
      , ADDER = IS_MAP ? 'set' : 'add'
      , proto = C && C.prototype
      , O     = {};
    var fixMethod = function(KEY){
      var fn = proto[KEY];
      redefine(proto, KEY,
        KEY == 'delete' ? function(a){
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'has' ? function has(a){
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'get' ? function get(a){
          return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
          : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
      );
    };
    if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
      new C().entries().next();
    }))){
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
      meta.NEED = true;
    } else {
      var instance             = new C
        // early implementations not supports chaining
        , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
        // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
        , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same
        , BUGGY_ZERO = !IS_WEAK && fails(function(){
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new C()
            , index     = 5;
          while(index--)$instance[ADDER](index, index);
          return !$instance.has(-0);
        });
      if(!ACCEPT_ITERABLES){ 
        C = wrapper(function(target, iterable){
          anInstance(target, C, NAME);
          var that = inheritIfRequired(new Base, target, C);
          if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }
      if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
      // weak collections should not contains .clear method
      if(IS_WEAK && proto.clear)delete proto.clear;
    }

    setToStringTag(C, NAME);

    O[NAME] = C;
    $export($export.G + $export.W + $export.F * (C != Base), O);

    if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

    return C;
  };

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var strong = __webpack_require__(258);

  // 23.2 Set Objects
  module.exports = __webpack_require__(259)('Set', function(get){
    return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value){
      return strong.def(this, value = value === 0 ? 0 : value, value);
    }
  }, strong);

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var each         = __webpack_require__(218)(0)
    , redefine     = __webpack_require__(64)
    , meta         = __webpack_require__(68)
    , assign       = __webpack_require__(115)
    , weak         = __webpack_require__(262)
    , isObject     = __webpack_require__(59)
    , getWeak      = meta.getWeak
    , isExtensible = Object.isExtensible
    , uncaughtFrozenStore = weak.ufstore
    , tmp          = {}
    , InternalMap;

  var wrapper = function(get){
    return function WeakMap(){
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };

  var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key){
      if(isObject(key)){
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value){
      return weak.def(this, key, value);
    }
  };

  // 23.3 WeakMap Objects
  var $WeakMap = module.exports = __webpack_require__(259)('WeakMap', wrapper, methods, weak, true, true);

  // IE11 WeakMap frozen keys fix
  if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
    InternalMap = weak.getConstructor(wrapper);
    assign(InternalMap.prototype, methods);
    meta.NEED = true;
    each(['delete', 'has', 'get', 'set'], function(key){
      var proto  = $WeakMap.prototype
        , method = proto[key];
      redefine(proto, key, function(a, b){
        // store frozen objects on internal weakmap shim
        if(isObject(a) && !isExtensible(a)){
          if(!this._f)this._f = new InternalMap;
          var result = this._f[key](a, b);
          return key == 'set' ? this : result;
        // store all the rest on native weakmap
        } return method.call(this, a, b);
      });
    });
  }

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var redefineAll       = __webpack_require__(256)
    , getWeak           = __webpack_require__(68).getWeak
    , anObject          = __webpack_require__(58)
    , isObject          = __webpack_require__(59)
    , anInstance        = __webpack_require__(251)
    , forOf             = __webpack_require__(252)
    , createArrayMethod = __webpack_require__(218)
    , $has              = __webpack_require__(51)
    , arrayFind         = createArrayMethod(5)
    , arrayFindIndex    = createArrayMethod(6)
    , id                = 0;

  // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function(that){
    return that._l || (that._l = new UncaughtFrozenStore);
  };
  var UncaughtFrozenStore = function(){
    this.a = [];
  };
  var findUncaughtFrozen = function(store, key){
    return arrayFind(store.a, function(it){
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function(key){
      var entry = findUncaughtFrozen(this, key);
      if(entry)return entry[1];
    },
    has: function(key){
      return !!findUncaughtFrozen(this, key);
    },
    set: function(key, value){
      var entry = findUncaughtFrozen(this, key);
      if(entry)entry[1] = value;
      else this.a.push([key, value]);
    },
    'delete': function(key){
      var index = arrayFindIndex(this.a, function(it){
        return it[0] === key;
      });
      if(~index)this.a.splice(index, 1);
      return !!~index;
    }
  };

  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
      var C = wrapper(function(that, iterable){
        anInstance(that, C, NAME, '_i');
        that._i = id++;      // collection id
        that._l = undefined; // leak store for uncaught frozen objects
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function(key){
          if(!isObject(key))return false;
          var data = getWeak(key);
          if(data === true)return uncaughtFrozenStore(this)['delete'](key);
          return data && $has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key){
          if(!isObject(key))return false;
          var data = getWeak(key);
          if(data === true)return uncaughtFrozenStore(this).has(key);
          return data && $has(data, this._i);
        }
      });
      return C;
    },
    def: function(that, key, value){
      var data = getWeak(anObject(key), true);
      if(data === true)uncaughtFrozenStore(that).set(key, value);
      else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var weak = __webpack_require__(262);

  // 23.4 WeakSet Objects
  __webpack_require__(259)('WeakSet', function(get){
    return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value){
      return weak.def(this, value, true);
    }
  }, weak, false, true);

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export      = __webpack_require__(54)
    , $typed       = __webpack_require__(265)
    , buffer       = __webpack_require__(266)
    , anObject     = __webpack_require__(58)
    , toIndex      = __webpack_require__(85)
    , toLength     = __webpack_require__(83)
    , isObject     = __webpack_require__(59)
    , ArrayBuffer  = __webpack_require__(50).ArrayBuffer
    , speciesConstructor = __webpack_require__(253)
    , $ArrayBuffer = buffer.ArrayBuffer
    , $DataView    = buffer.DataView
    , $isView      = $typed.ABV && ArrayBuffer.isView
    , $slice       = $ArrayBuffer.prototype.slice
    , VIEW         = $typed.VIEW
    , ARRAY_BUFFER = 'ArrayBuffer';

  $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

  $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it){
      return $isView && $isView(it) || isObject(it) && VIEW in it;
    }
  });

  $export($export.P + $export.U + $export.F * __webpack_require__(53)(function(){
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
  }), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end){
      if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
      var len    = anObject(this).byteLength
        , first  = toIndex(start, len)
        , final  = toIndex(end === undefined ? len : end, len)
        , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
        , viewS  = new $DataView(this)
        , viewT  = new $DataView(result)
        , index  = 0;
      while(first < final){
        viewT.setUint8(index++, viewS.getUint8(first++));
      } return result;
    }
  });

  __webpack_require__(238)(ARRAY_BUFFER);

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

  var global = __webpack_require__(50)
    , hide   = __webpack_require__(56)
    , uid    = __webpack_require__(65)
    , TYPED  = uid('typed_array')
    , VIEW   = uid('view')
    , ABV    = !!(global.ArrayBuffer && global.DataView)
    , CONSTR = ABV
    , i = 0, l = 9, Typed;

  var TypedArrayConstructors = (
    'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
  ).split(',');

  while(i < l){
    if(Typed = global[TypedArrayConstructors[i++]]){
      hide(Typed.prototype, TYPED, true);
      hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  }

  module.exports = {
    ABV:    ABV,
    CONSTR: CONSTR,
    TYPED:  TYPED,
    VIEW:   VIEW
  };

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var global         = __webpack_require__(50)
    , DESCRIPTORS    = __webpack_require__(52)
    , LIBRARY        = __webpack_require__(74)
    , $typed         = __webpack_require__(265)
    , hide           = __webpack_require__(56)
    , redefineAll    = __webpack_require__(256)
    , fails          = __webpack_require__(53)
    , anInstance     = __webpack_require__(251)
    , toInteger      = __webpack_require__(84)
    , toLength       = __webpack_require__(83)
    , gOPN           = __webpack_require__(96).f
    , dP             = __webpack_require__(57).f
    , arrayFill      = __webpack_require__(234)
    , setToStringTag = __webpack_require__(70)
    , ARRAY_BUFFER   = 'ArrayBuffer'
    , DATA_VIEW      = 'DataView'
    , PROTOTYPE      = 'prototype'
    , WRONG_LENGTH   = 'Wrong length!'
    , WRONG_INDEX    = 'Wrong index!'
    , $ArrayBuffer   = global[ARRAY_BUFFER]
    , $DataView      = global[DATA_VIEW]
    , Math           = global.Math
    , RangeError     = global.RangeError
    , Infinity       = global.Infinity
    , BaseBuffer     = $ArrayBuffer
    , abs            = Math.abs
    , pow            = Math.pow
    , floor          = Math.floor
    , log            = Math.log
    , LN2            = Math.LN2
    , BUFFER         = 'buffer'
    , BYTE_LENGTH    = 'byteLength'
    , BYTE_OFFSET    = 'byteOffset'
    , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
    , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
    , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

  // IEEE754 conversions based on https://github.com/feross/ieee754
  var packIEEE754 = function(value, mLen, nBytes){
    var buffer = Array(nBytes)
      , eLen   = nBytes * 8 - mLen - 1
      , eMax   = (1 << eLen) - 1
      , eBias  = eMax >> 1
      , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
      , i      = 0
      , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
      , e, m, c;
    value = abs(value)
    if(value != value || value === Infinity){
      m = value != value ? 1 : 0;
      e = eMax;
    } else {
      e = floor(log(value) / LN2);
      if(value * (c = pow(2, -e)) < 1){
        e--;
        c *= 2;
      }
      if(e + eBias >= 1){
        value += rt / c;
      } else {
        value += rt * pow(2, 1 - eBias);
      }
      if(value * c >= 2){
        e++;
        c /= 2;
      }
      if(e + eBias >= eMax){
        m = 0;
        e = eMax;
      } else if(e + eBias >= 1){
        m = (value * c - 1) * pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * pow(2, eBias - 1) * pow(2, mLen);
        e = 0;
      }
    }
    for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
    buffer[--i] |= s * 128;
    return buffer;
  };
  var unpackIEEE754 = function(buffer, mLen, nBytes){
    var eLen  = nBytes * 8 - mLen - 1
      , eMax  = (1 << eLen) - 1
      , eBias = eMax >> 1
      , nBits = eLen - 7
      , i     = nBytes - 1
      , s     = buffer[i--]
      , e     = s & 127
      , m;
    s >>= 7;
    for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
    if(e === 0){
      e = 1 - eBias;
    } else if(e === eMax){
      return m ? NaN : s ? -Infinity : Infinity;
    } else {
      m = m + pow(2, mLen);
      e = e - eBias;
    } return (s ? -1 : 1) * m * pow(2, e - mLen);
  };

  var unpackI32 = function(bytes){
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
  };
  var packI8 = function(it){
    return [it & 0xff];
  };
  var packI16 = function(it){
    return [it & 0xff, it >> 8 & 0xff];
  };
  var packI32 = function(it){
    return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
  };
  var packF64 = function(it){
    return packIEEE754(it, 52, 8);
  };
  var packF32 = function(it){
    return packIEEE754(it, 23, 4);
  };

  var addGetter = function(C, key, internal){
    dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
  };

  var get = function(view, bytes, index, isLittleEndian){
    var numIndex = +index
      , intIndex = toInteger(numIndex);
    if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b
      , start = intIndex + view[$OFFSET]
      , pack  = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
  };
  var set = function(view, bytes, index, conversion, value, isLittleEndian){
    var numIndex = +index
      , intIndex = toInteger(numIndex);
    if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b
      , start = intIndex + view[$OFFSET]
      , pack  = conversion(+value);
    for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  };

  var validateArrayBufferArguments = function(that, length){
    anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
    var numberLength = +length
      , byteLength   = toLength(numberLength);
    if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
    return byteLength;
  };

  if(!$typed.ABV){
    $ArrayBuffer = function ArrayBuffer(length){
      var byteLength = validateArrayBufferArguments(this, length);
      this._b       = arrayFill.call(Array(byteLength), 0);
      this[$LENGTH] = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength){
      anInstance(this, $DataView, DATA_VIEW);
      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = buffer[$LENGTH]
        , offset       = toInteger(byteOffset);
      if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
      this[$BUFFER] = buffer;
      this[$OFFSET] = offset;
      this[$LENGTH] = byteLength;
    };

    if(DESCRIPTORS){
      addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
      addGetter($DataView, BUFFER, '_b');
      addGetter($DataView, BYTE_LENGTH, '_l');
      addGetter($DataView, BYTE_OFFSET, '_o');
    }

    redefineAll($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset){
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset){
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /*, littleEndian */){
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /*, littleEndian */){
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /*, littleEndian */){
        return unpackI32(get(this, 4, byteOffset, arguments[1]));
      },
      getUint32: function getUint32(byteOffset /*, littleEndian */){
        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /*, littleEndian */){
        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(byteOffset /*, littleEndian */){
        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(byteOffset, value){
        set(this, 1, byteOffset, packI8, value);
      },
      setUint8: function setUint8(byteOffset, value){
        set(this, 1, byteOffset, packI8, value);
      },
      setInt16: function setInt16(byteOffset, value /*, littleEndian */){
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setUint16: function setUint16(byteOffset, value /*, littleEndian */){
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setInt32: function setInt32(byteOffset, value /*, littleEndian */){
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setUint32: function setUint32(byteOffset, value /*, littleEndian */){
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
        set(this, 4, byteOffset, packF32, value, arguments[2]);
      },
      setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
        set(this, 8, byteOffset, packF64, value, arguments[2]);
      }
    });
  } else {
    if(!fails(function(){
      new $ArrayBuffer;     // eslint-disable-line no-new
    }) || !fails(function(){
      new $ArrayBuffer(.5); // eslint-disable-line no-new
    })){
      $ArrayBuffer = function ArrayBuffer(length){
        return new BaseBuffer(validateArrayBufferArguments(this, length));
      };
      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
      for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
        if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
      };
      if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
    }
    // iOS Safari 7.x bug
    var view = new $DataView(new $ArrayBuffer(2))
      , $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
      setInt8: function setInt8(byteOffset, value){
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value){
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, true);
  }
  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);
  hide($DataView[PROTOTYPE], $typed.VIEW, true);
  exports[ARRAY_BUFFER] = $ArrayBuffer;
  exports[DATA_VIEW] = $DataView;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(54);
  $export($export.G + $export.W + $export.F * !__webpack_require__(265).ABV, {
    DataView: __webpack_require__(266).DataView
  });

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(269)('Int8', 1, function(init){
    return function Int8Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  if(__webpack_require__(52)){
    var LIBRARY             = __webpack_require__(74)
      , global              = __webpack_require__(50)
      , fails               = __webpack_require__(53)
      , $export             = __webpack_require__(54)
      , $typed              = __webpack_require__(265)
      , $buffer             = __webpack_require__(266)
      , ctx                 = __webpack_require__(66)
      , anInstance          = __webpack_require__(251)
      , propertyDesc        = __webpack_require__(63)
      , hide                = __webpack_require__(56)
      , redefineAll         = __webpack_require__(256)
      , toInteger           = __webpack_require__(84)
      , toLength            = __webpack_require__(83)
      , toIndex             = __webpack_require__(85)
      , toPrimitive         = __webpack_require__(62)
      , has                 = __webpack_require__(51)
      , same                = __webpack_require__(117)
      , classof             = __webpack_require__(121)
      , isObject            = __webpack_require__(59)
      , toObject            = __webpack_require__(104)
      , isArrayIter         = __webpack_require__(208)
      , create              = __webpack_require__(92)
      , getPrototypeOf      = __webpack_require__(105)
      , gOPN                = __webpack_require__(96).f
      , getIterFn           = __webpack_require__(210)
      , uid                 = __webpack_require__(65)
      , wks                 = __webpack_require__(71)
      , createArrayMethod   = __webpack_require__(218)
      , createArrayIncludes = __webpack_require__(82)
      , speciesConstructor  = __webpack_require__(253)
      , ArrayIterators      = __webpack_require__(239)
      , Iterators           = __webpack_require__(175)
      , $iterDetect         = __webpack_require__(211)
      , setSpecies          = __webpack_require__(238)
      , arrayFill           = __webpack_require__(234)
      , arrayCopyWithin     = __webpack_require__(231)
      , $DP                 = __webpack_require__(57)
      , $GOPD               = __webpack_require__(97)
      , dP                  = $DP.f
      , gOPD                = $GOPD.f
      , RangeError          = global.RangeError
      , TypeError           = global.TypeError
      , Uint8Array          = global.Uint8Array
      , ARRAY_BUFFER        = 'ArrayBuffer'
      , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
      , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
      , PROTOTYPE           = 'prototype'
      , ArrayProto          = Array[PROTOTYPE]
      , $ArrayBuffer        = $buffer.ArrayBuffer
      , $DataView           = $buffer.DataView
      , arrayForEach        = createArrayMethod(0)
      , arrayFilter         = createArrayMethod(2)
      , arraySome           = createArrayMethod(3)
      , arrayEvery          = createArrayMethod(4)
      , arrayFind           = createArrayMethod(5)
      , arrayFindIndex      = createArrayMethod(6)
      , arrayIncludes       = createArrayIncludes(true)
      , arrayIndexOf        = createArrayIncludes(false)
      , arrayValues         = ArrayIterators.values
      , arrayKeys           = ArrayIterators.keys
      , arrayEntries        = ArrayIterators.entries
      , arrayLastIndexOf    = ArrayProto.lastIndexOf
      , arrayReduce         = ArrayProto.reduce
      , arrayReduceRight    = ArrayProto.reduceRight
      , arrayJoin           = ArrayProto.join
      , arraySort           = ArrayProto.sort
      , arraySlice          = ArrayProto.slice
      , arrayToString       = ArrayProto.toString
      , arrayToLocaleString = ArrayProto.toLocaleString
      , ITERATOR            = wks('iterator')
      , TAG                 = wks('toStringTag')
      , TYPED_CONSTRUCTOR   = uid('typed_constructor')
      , DEF_CONSTRUCTOR     = uid('def_constructor')
      , ALL_CONSTRUCTORS    = $typed.CONSTR
      , TYPED_ARRAY         = $typed.TYPED
      , VIEW                = $typed.VIEW
      , WRONG_LENGTH        = 'Wrong length!';

    var $map = createArrayMethod(1, function(O, length){
      return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
    });

    var LITTLE_ENDIAN = fails(function(){
      return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
    });

    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
      new Uint8Array(1).set({});
    });

    var strictToLength = function(it, SAME){
      if(it === undefined)throw TypeError(WRONG_LENGTH);
      var number = +it
        , length = toLength(it);
      if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
      return length;
    };

    var toOffset = function(it, BYTES){
      var offset = toInteger(it);
      if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
      return offset;
    };

    var validate = function(it){
      if(isObject(it) && TYPED_ARRAY in it)return it;
      throw TypeError(it + ' is not a typed array!');
    };

    var allocate = function(C, length){
      if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
        throw TypeError('It is not a typed array constructor!');
      } return new C(length);
    };

    var speciesFromList = function(O, list){
      return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
    };

    var fromList = function(C, list){
      var index  = 0
        , length = list.length
        , result = allocate(C, length);
      while(length > index)result[index] = list[index++];
      return result;
    };

    var addGetter = function(it, key, internal){
      dP(it, key, {get: function(){ return this._d[internal]; }});
    };

    var $from = function from(source /*, mapfn, thisArg */){
      var O       = toObject(source)
        , aLen    = arguments.length
        , mapfn   = aLen > 1 ? arguments[1] : undefined
        , mapping = mapfn !== undefined
        , iterFn  = getIterFn(O)
        , i, length, values, result, step, iterator;
      if(iterFn != undefined && !isArrayIter(iterFn)){
        for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
          values.push(step.value);
        } O = values;
      }
      if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
      for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
        result[i] = mapping ? mapfn(O[i], i) : O[i];
      }
      return result;
    };

    var $of = function of(/*...items*/){
      var index  = 0
        , length = arguments.length
        , result = allocate(this, length);
      while(length > index)result[index] = arguments[index++];
      return result;
    };

    // iOS Safari 6.x fails here
    var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

    var $toLocaleString = function toLocaleString(){
      return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
    };

    var proto = {
      copyWithin: function copyWithin(target, start /*, end */){
        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
      },
      every: function every(callbackfn /*, thisArg */){
        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
        return arrayFill.apply(validate(this), arguments);
      },
      filter: function filter(callbackfn /*, thisArg */){
        return speciesFromList(this, arrayFilter(validate(this), callbackfn,
          arguments.length > 1 ? arguments[1] : undefined));
      },
      find: function find(predicate /*, thisArg */){
        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      findIndex: function findIndex(predicate /*, thisArg */){
        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      forEach: function forEach(callbackfn /*, thisArg */){
        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      indexOf: function indexOf(searchElement /*, fromIndex */){
        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      includes: function includes(searchElement /*, fromIndex */){
        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      join: function join(separator){ // eslint-disable-line no-unused-vars
        return arrayJoin.apply(validate(this), arguments);
      },
      lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
        return arrayLastIndexOf.apply(validate(this), arguments);
      },
      map: function map(mapfn /*, thisArg */){
        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
        return arrayReduce.apply(validate(this), arguments);
      },
      reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
        return arrayReduceRight.apply(validate(this), arguments);
      },
      reverse: function reverse(){
        var that   = this
          , length = validate(that).length
          , middle = Math.floor(length / 2)
          , index  = 0
          , value;
        while(index < middle){
          value         = that[index];
          that[index++] = that[--length];
          that[length]  = value;
        } return that;
      },
      some: function some(callbackfn /*, thisArg */){
        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      sort: function sort(comparefn){
        return arraySort.call(validate(this), comparefn);
      },
      subarray: function subarray(begin, end){
        var O      = validate(this)
          , length = O.length
          , $begin = toIndex(begin, length);
        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
          O.buffer,
          O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
          toLength((end === undefined ? length : toIndex(end, length)) - $begin)
        );
      }
    };

    var $slice = function slice(start, end){
      return speciesFromList(this, arraySlice.call(validate(this), start, end));
    };

    var $set = function set(arrayLike /*, offset */){
      validate(this);
      var offset = toOffset(arguments[1], 1)
        , length = this.length
        , src    = toObject(arrayLike)
        , len    = toLength(src.length)
        , index  = 0;
      if(len + offset > length)throw RangeError(WRONG_LENGTH);
      while(index < len)this[offset + index] = src[index++];
    };

    var $iterators = {
      entries: function entries(){
        return arrayEntries.call(validate(this));
      },
      keys: function keys(){
        return arrayKeys.call(validate(this));
      },
      values: function values(){
        return arrayValues.call(validate(this));
      }
    };

    var isTAIndex = function(target, key){
      return isObject(target)
        && target[TYPED_ARRAY]
        && typeof key != 'symbol'
        && key in target
        && String(+key) == String(key);
    };
    var $getDesc = function getOwnPropertyDescriptor(target, key){
      return isTAIndex(target, key = toPrimitive(key, true))
        ? propertyDesc(2, target[key])
        : gOPD(target, key);
    };
    var $setDesc = function defineProperty(target, key, desc){
      if(isTAIndex(target, key = toPrimitive(key, true))
        && isObject(desc)
        && has(desc, 'value')
        && !has(desc, 'get')
        && !has(desc, 'set')
        // TODO: add validation descriptor w/o calling accessors
        && !desc.configurable
        && (!has(desc, 'writable') || desc.writable)
        && (!has(desc, 'enumerable') || desc.enumerable)
      ){
        target[key] = desc.value;
        return target;
      } else return dP(target, key, desc);
    };

    if(!ALL_CONSTRUCTORS){
      $GOPD.f = $getDesc;
      $DP.f   = $setDesc;
    }

    $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
      getOwnPropertyDescriptor: $getDesc,
      defineProperty:           $setDesc
    });

    if(fails(function(){ arrayToString.call({}); })){
      arrayToString = arrayToLocaleString = function toString(){
        return arrayJoin.call(this);
      }
    }

    var $TypedArrayPrototype$ = redefineAll({}, proto);
    redefineAll($TypedArrayPrototype$, $iterators);
    hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
    redefineAll($TypedArrayPrototype$, {
      slice:          $slice,
      set:            $set,
      constructor:    function(){ /* noop */ },
      toString:       arrayToString,
      toLocaleString: $toLocaleString
    });
    addGetter($TypedArrayPrototype$, 'buffer', 'b');
    addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
    addGetter($TypedArrayPrototype$, 'byteLength', 'l');
    addGetter($TypedArrayPrototype$, 'length', 'e');
    dP($TypedArrayPrototype$, TAG, {
      get: function(){ return this[TYPED_ARRAY]; }
    });

    module.exports = function(KEY, BYTES, wrapper, CLAMPED){
      CLAMPED = !!CLAMPED;
      var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
        , ISNT_UINT8 = NAME != 'Uint8Array'
        , GETTER     = 'get' + KEY
        , SETTER     = 'set' + KEY
        , TypedArray = global[NAME]
        , Base       = TypedArray || {}
        , TAC        = TypedArray && getPrototypeOf(TypedArray)
        , FORCED     = !TypedArray || !$typed.ABV
        , O          = {}
        , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
      var getter = function(that, index){
        var data = that._d;
        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
      };
      var setter = function(that, index, value){
        var data = that._d;
        if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
      };
      var addElement = function(that, index){
        dP(that, index, {
          get: function(){
            return getter(this, index);
          },
          set: function(value){
            return setter(this, index, value);
          },
          enumerable: true
        });
      };
      if(FORCED){
        TypedArray = wrapper(function(that, data, $offset, $length){
          anInstance(that, TypedArray, NAME, '_d');
          var index  = 0
            , offset = 0
            , buffer, byteLength, length, klass;
          if(!isObject(data)){
            length     = strictToLength(data, true)
            byteLength = length * BYTES;
            buffer     = new $ArrayBuffer(byteLength);
          } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
            buffer = data;
            offset = toOffset($offset, BYTES);
            var $len = data.byteLength;
            if($length === undefined){
              if($len % BYTES)throw RangeError(WRONG_LENGTH);
              byteLength = $len - offset;
              if(byteLength < 0)throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if(TYPED_ARRAY in data){
            return fromList(TypedArray, data);
          } else {
            return $from.call(TypedArray, data);
          }
          hide(that, '_d', {
            b: buffer,
            o: offset,
            l: byteLength,
            e: length,
            v: new $DataView(buffer)
          });
          while(index < length)addElement(that, index++);
        });
        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
        hide(TypedArrayPrototype, 'constructor', TypedArray);
      } else if(!$iterDetect(function(iter){
        // V8 works with iterators, but fails in many other cases
        // https://code.google.com/p/v8/issues/detail?id=4552
        new TypedArray(null); // eslint-disable-line no-new
        new TypedArray(iter); // eslint-disable-line no-new
      }, true)){
        TypedArray = wrapper(function(that, data, $offset, $length){
          anInstance(that, TypedArray, NAME);
          var klass;
          // `ws` module bug, temporarily remove validation length for Uint8Array
          // https://github.com/websockets/ws/pull/645
          if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
          if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
            return $length !== undefined
              ? new Base(data, toOffset($offset, BYTES), $length)
              : $offset !== undefined
                ? new Base(data, toOffset($offset, BYTES))
                : new Base(data);
          }
          if(TYPED_ARRAY in data)return fromList(TypedArray, data);
          return $from.call(TypedArray, data);
        });
        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
          if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
        });
        TypedArray[PROTOTYPE] = TypedArrayPrototype;
        if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
      }
      var $nativeIterator   = TypedArrayPrototype[ITERATOR]
        , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
        , $iterator         = $iterators.values;
      hide(TypedArray, TYPED_CONSTRUCTOR, true);
      hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
      hide(TypedArrayPrototype, VIEW, true);
      hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

      if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
        dP(TypedArrayPrototype, TAG, {
          get: function(){ return NAME; }
        });
      }

      O[NAME] = TypedArray;

      $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

      $export($export.S, NAME, {
        BYTES_PER_ELEMENT: BYTES,
        from: $from,
        of: $of
      });

      if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

      $export($export.P, NAME, proto);

      setSpecies(NAME);

      $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

      $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

      $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

      $export($export.P + $export.F * fails(function(){
        new TypedArray(1).slice();
      }), NAME, {slice: $slice});

      $export($export.P + $export.F * (fails(function(){
        return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
      }) || !fails(function(){
        TypedArrayPrototype.toLocaleString.call([1, 2]);
      })), NAME, {toLocaleString: $toLocaleString});

      Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
      if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
    };
  } else module.exports = function(){ /* empty */ };

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(269)('Uint8', 1, function(init){
    return function Uint8Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(269)('Uint8', 1, function(init){
    return function Uint8ClampedArray(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  }, true);

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(269)('Int16', 2, function(init){
    return function Int16Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(269)('Uint16', 2, function(init){
    return function Uint16Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(269)('Int32', 4, function(init){
    return function Int32Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(269)('Uint32', 4, function(init){
    return function Uint32Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(269)('Float32', 4, function(init){
    return function Float32Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(269)('Float64', 8, function(init){
    return function Float64Array(data, byteOffset, length){
      return init(this, data, byteOffset, length);
    };
  });

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
  var $export   = __webpack_require__(54)
    , aFunction = __webpack_require__(67)
    , anObject  = __webpack_require__(58)
    , rApply    = (__webpack_require__(50).Reflect || {}).apply
    , fApply    = Function.apply;
  // MS Edge argumentsList argument is optional
  $export($export.S + $export.F * !__webpack_require__(53)(function(){
    rApply(function(){});
  }), 'Reflect', {
    apply: function apply(target, thisArgument, argumentsList){
      var T = aFunction(target)
        , L = anObject(argumentsList);
      return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
    }
  });

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
  var $export    = __webpack_require__(54)
    , create     = __webpack_require__(92)
    , aFunction  = __webpack_require__(67)
    , anObject   = __webpack_require__(58)
    , isObject   = __webpack_require__(59)
    , fails      = __webpack_require__(53)
    , bind       = __webpack_require__(123)
    , rConstruct = (__webpack_require__(50).Reflect || {}).construct;

  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails(function(){
    function F(){}
    return !(rConstruct(function(){}, [], F) instanceof F);
  });
  var ARGS_BUG = !fails(function(){
    rConstruct(function(){});
  });

  $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
    construct: function construct(Target, args /*, newTarget*/){
      aFunction(Target);
      anObject(args);
      var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
      if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
      if(Target == newTarget){
        // w/o altered newTarget, optimization for 0-4 arguments
        switch(args.length){
          case 0: return new Target;
          case 1: return new Target(args[0]);
          case 2: return new Target(args[0], args[1]);
          case 3: return new Target(args[0], args[1], args[2]);
          case 4: return new Target(args[0], args[1], args[2], args[3]);
        }
        // w/o altered newTarget, lot of arguments case
        var $args = [null];
        $args.push.apply($args, args);
        return new (bind.apply(Target, $args));
      }
      // with altered newTarget, not support built-in constructors
      var proto    = newTarget.prototype
        , instance = create(isObject(proto) ? proto : Object.prototype)
        , result   = Function.apply.call(Target, instance, args);
      return isObject(result) ? result : instance;
    }
  });

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
  var dP          = __webpack_require__(57)
    , $export     = __webpack_require__(54)
    , anObject    = __webpack_require__(58)
    , toPrimitive = __webpack_require__(62);

  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
  $export($export.S + $export.F * __webpack_require__(53)(function(){
    Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
  }), 'Reflect', {
    defineProperty: function defineProperty(target, propertyKey, attributes){
      anObject(target);
      propertyKey = toPrimitive(propertyKey, true);
      anObject(attributes);
      try {
        dP.f(target, propertyKey, attributes);
        return true;
      } catch(e){
        return false;
      }
    }
  });

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.4 Reflect.deleteProperty(target, propertyKey)
  var $export  = __webpack_require__(54)
    , gOPD     = __webpack_require__(97).f
    , anObject = __webpack_require__(58);

  $export($export.S, 'Reflect', {
    deleteProperty: function deleteProperty(target, propertyKey){
      var desc = gOPD(anObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    }
  });

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 26.1.5 Reflect.enumerate(target)
  var $export  = __webpack_require__(54)
    , anObject = __webpack_require__(58);
  var Enumerate = function(iterated){
    this._t = anObject(iterated); // target
    this._i = 0;                  // next index
    var keys = this._k = []       // keys
      , key;
    for(key in iterated)keys.push(key);
  };
  __webpack_require__(176)(Enumerate, 'Object', function(){
    var that = this
      , keys = that._k
      , key;
    do {
      if(that._i >= keys.length)return {value: undefined, done: true};
    } while(!((key = keys[that._i++]) in that._t));
    return {value: key, done: false};
  });

  $export($export.S, 'Reflect', {
    enumerate: function enumerate(target){
      return new Enumerate(target);
    }
  });

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.6 Reflect.get(target, propertyKey [, receiver])
  var gOPD           = __webpack_require__(97)
    , getPrototypeOf = __webpack_require__(105)
    , has            = __webpack_require__(51)
    , $export        = __webpack_require__(54)
    , isObject       = __webpack_require__(59)
    , anObject       = __webpack_require__(58);

  function get(target, propertyKey/*, receiver*/){
    var receiver = arguments.length < 3 ? target : arguments[2]
      , desc, proto;
    if(anObject(target) === receiver)return target[propertyKey];
    if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
      ? desc.value
      : desc.get !== undefined
        ? desc.get.call(receiver)
        : undefined;
    if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
  }

  $export($export.S, 'Reflect', {get: get});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
  var gOPD     = __webpack_require__(97)
    , $export  = __webpack_require__(54)
    , anObject = __webpack_require__(58);

  $export($export.S, 'Reflect', {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
      return gOPD.f(anObject(target), propertyKey);
    }
  });

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.8 Reflect.getPrototypeOf(target)
  var $export  = __webpack_require__(54)
    , getProto = __webpack_require__(105)
    , anObject = __webpack_require__(58);

  $export($export.S, 'Reflect', {
    getPrototypeOf: function getPrototypeOf(target){
      return getProto(anObject(target));
    }
  });

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.9 Reflect.has(target, propertyKey)
  var $export = __webpack_require__(54);

  $export($export.S, 'Reflect', {
    has: function has(target, propertyKey){
      return propertyKey in target;
    }
  });

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.10 Reflect.isExtensible(target)
  var $export       = __webpack_require__(54)
    , anObject      = __webpack_require__(58)
    , $isExtensible = Object.isExtensible;

  $export($export.S, 'Reflect', {
    isExtensible: function isExtensible(target){
      anObject(target);
      return $isExtensible ? $isExtensible(target) : true;
    }
  });

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.11 Reflect.ownKeys(target)
  var $export = __webpack_require__(54);

  $export($export.S, 'Reflect', {ownKeys: __webpack_require__(289)});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

  // all object keys, includes non-enumerable and symbols
  var gOPN     = __webpack_require__(96)
    , gOPS     = __webpack_require__(89)
    , anObject = __webpack_require__(58)
    , Reflect  = __webpack_require__(50).Reflect;
  module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
    var keys       = gOPN.f(anObject(it))
      , getSymbols = gOPS.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.12 Reflect.preventExtensions(target)
  var $export            = __webpack_require__(54)
    , anObject           = __webpack_require__(58)
    , $preventExtensions = Object.preventExtensions;

  $export($export.S, 'Reflect', {
    preventExtensions: function preventExtensions(target){
      anObject(target);
      try {
        if($preventExtensions)$preventExtensions(target);
        return true;
      } catch(e){
        return false;
      }
    }
  });

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
  var dP             = __webpack_require__(57)
    , gOPD           = __webpack_require__(97)
    , getPrototypeOf = __webpack_require__(105)
    , has            = __webpack_require__(51)
    , $export        = __webpack_require__(54)
    , createDesc     = __webpack_require__(63)
    , anObject       = __webpack_require__(58)
    , isObject       = __webpack_require__(59);

  function set(target, propertyKey, V/*, receiver*/){
    var receiver = arguments.length < 4 ? target : arguments[3]
      , ownDesc  = gOPD.f(anObject(target), propertyKey)
      , existingDescriptor, proto;
    if(!ownDesc){
      if(isObject(proto = getPrototypeOf(target))){
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = createDesc(0);
    }
    if(has(ownDesc, 'value')){
      if(ownDesc.writable === false || !isObject(receiver))return false;
      existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }

  $export($export.S, 'Reflect', {set: set});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.14 Reflect.setPrototypeOf(target, proto)
  var $export  = __webpack_require__(54)
    , setProto = __webpack_require__(119);

  if(setProto)$export($export.S, 'Reflect', {
    setPrototypeOf: function setPrototypeOf(target, proto){
      setProto.check(target, proto);
      try {
        setProto.set(target, proto);
        return true;
      } catch(e){
        return false;
      }
    }
  });

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/tc39/Array.prototype.includes
  var $export   = __webpack_require__(54)
    , $includes = __webpack_require__(82)(true);

  $export($export.P, 'Array', {
    includes: function includes(el /*, fromIndex = 0 */){
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  __webpack_require__(232)('includes');

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/mathiasbynens/String.prototype.at
  var $export = __webpack_require__(54)
    , $at     = __webpack_require__(173)(true);

  $export($export.P, 'String', {
    at: function at(pos){
      return $at(this, pos);
    }
  });

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/tc39/proposal-string-pad-start-end
  var $export = __webpack_require__(54)
    , $pad    = __webpack_require__(296);

  $export($export.P, 'String', {
    padStart: function padStart(maxLength /*, fillString = ' ' */){
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/tc39/proposal-string-pad-start-end
  var toLength = __webpack_require__(83)
    , repeat   = __webpack_require__(137)
    , defined  = __webpack_require__(81);

  module.exports = function(that, maxLength, fillString, left){
    var S            = String(defined(that))
      , stringLength = S.length
      , fillStr      = fillString === undefined ? ' ' : String(fillString)
      , intMaxLength = toLength(maxLength);
    if(intMaxLength <= stringLength || fillStr == '')return S;
    var fillLen = intMaxLength - stringLength
      , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/tc39/proposal-string-pad-start-end
  var $export = __webpack_require__(54)
    , $pad    = __webpack_require__(296);

  $export($export.P, 'String', {
    padEnd: function padEnd(maxLength /*, fillString = ' ' */){
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
  __webpack_require__(129)('trimLeft', function($trim){
    return function trimLeft(){
      return $trim(this, 1);
    };
  }, 'trimStart');

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
  __webpack_require__(129)('trimRight', function($trim){
    return function trimRight(){
      return $trim(this, 2);
    };
  }, 'trimEnd');

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://tc39.github.io/String.prototype.matchAll/
  var $export     = __webpack_require__(54)
    , defined     = __webpack_require__(81)
    , toLength    = __webpack_require__(83)
    , isRegExp    = __webpack_require__(180)
    , getFlags    = __webpack_require__(242)
    , RegExpProto = RegExp.prototype;

  var $RegExpStringIterator = function(regexp, string){
    this._r = regexp;
    this._s = string;
  };

  __webpack_require__(176)($RegExpStringIterator, 'RegExp String', function next(){
    var match = this._r.exec(this._s);
    return {value: match, done: match === null};
  });

  $export($export.P, 'String', {
    matchAll: function matchAll(regexp){
      defined(this);
      if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
      var S     = String(this)
        , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
        , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
      rx.lastIndex = toLength(regexp.lastIndex);
      return new $RegExpStringIterator(rx, S);
    }
  });

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(73)('asyncIterator');

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(73)('observable');

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/tc39/proposal-object-getownpropertydescriptors
  var $export        = __webpack_require__(54)
    , ownKeys        = __webpack_require__(289)
    , toIObject      = __webpack_require__(78)
    , gOPD           = __webpack_require__(97)
    , createProperty = __webpack_require__(209);

  $export($export.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
      var O       = toIObject(object)
        , getDesc = gOPD.f
        , keys    = ownKeys(O)
        , result  = {}
        , i       = 0
        , key;
      while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
      return result;
    }
  });

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/tc39/proposal-object-values-entries
  var $export = __webpack_require__(54)
    , $values = __webpack_require__(305)(false);

  $export($export.S, 'Object', {
    values: function values(it){
      return $values(it);
    }
  });

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

  var getKeys   = __webpack_require__(76)
    , toIObject = __webpack_require__(78)
    , isEnum    = __webpack_require__(90).f;
  module.exports = function(isEntries){
    return function(it){
      var O      = toIObject(it)
        , keys   = getKeys(O)
        , length = keys.length
        , i      = 0
        , result = []
        , key;
      while(length > i)if(isEnum.call(O, key = keys[i++])){
        result.push(isEntries ? [key, O[key]] : O[key]);
      } return result;
    };
  };

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/tc39/proposal-object-values-entries
  var $export  = __webpack_require__(54)
    , $entries = __webpack_require__(305)(true);

  $export($export.S, 'Object', {
    entries: function entries(it){
      return $entries(it);
    }
  });

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export         = __webpack_require__(54)
    , toObject        = __webpack_require__(104)
    , aFunction       = __webpack_require__(67)
    , $defineProperty = __webpack_require__(57);

  // B.2.2.2 Object.prototype.__defineGetter__(P, getter)
  __webpack_require__(52) && $export($export.P + __webpack_require__(308), 'Object', {
    __defineGetter__: function __defineGetter__(P, getter){
      $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
    }
  });

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

  // Forced replacement prototype accessors methods
  module.exports = __webpack_require__(74)|| !__webpack_require__(53)(function(){
    var K = Math.random();
    // In FF throws only define methods
    __defineSetter__.call(null, K, function(){ /* empty */});
    delete __webpack_require__(50)[K];
  });

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export         = __webpack_require__(54)
    , toObject        = __webpack_require__(104)
    , aFunction       = __webpack_require__(67)
    , $defineProperty = __webpack_require__(57);

  // B.2.2.3 Object.prototype.__defineSetter__(P, setter)
  __webpack_require__(52) && $export($export.P + __webpack_require__(308), 'Object', {
    __defineSetter__: function __defineSetter__(P, setter){
      $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
    }
  });

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export                  = __webpack_require__(54)
    , toObject                 = __webpack_require__(104)
    , toPrimitive              = __webpack_require__(62)
    , getPrototypeOf           = __webpack_require__(105)
    , getOwnPropertyDescriptor = __webpack_require__(97).f;

  // B.2.2.4 Object.prototype.__lookupGetter__(P)
  __webpack_require__(52) && $export($export.P + __webpack_require__(308), 'Object', {
    __lookupGetter__: function __lookupGetter__(P){
      var O = toObject(this)
        , K = toPrimitive(P, true)
        , D;
      do {
        if(D = getOwnPropertyDescriptor(O, K))return D.get;
      } while(O = getPrototypeOf(O));
    }
  });

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $export                  = __webpack_require__(54)
    , toObject                 = __webpack_require__(104)
    , toPrimitive              = __webpack_require__(62)
    , getPrototypeOf           = __webpack_require__(105)
    , getOwnPropertyDescriptor = __webpack_require__(97).f;

  // B.2.2.5 Object.prototype.__lookupSetter__(P)
  __webpack_require__(52) && $export($export.P + __webpack_require__(308), 'Object', {
    __lookupSetter__: function __lookupSetter__(P){
      var O = toObject(this)
        , K = toPrimitive(P, true)
        , D;
      do {
        if(D = getOwnPropertyDescriptor(O, K))return D.set;
      } while(O = getPrototypeOf(O));
    }
  });

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $export  = __webpack_require__(54);

  $export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(313)('Map')});

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var classof = __webpack_require__(121)
    , from    = __webpack_require__(314);
  module.exports = function(NAME){
    return function toJSON(){
      if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
      return from(this);
    };
  };

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

  var forOf = __webpack_require__(252);

  module.exports = function(iter, ITERATOR){
    var result = [];
    forOf(iter, false, result.push, result, ITERATOR);
    return result;
  };


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $export  = __webpack_require__(54);

  $export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(313)('Set')});

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/ljharb/proposal-global
  var $export = __webpack_require__(54);

  $export($export.S, 'System', {global: __webpack_require__(50)});

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/ljharb/proposal-is-error
  var $export = __webpack_require__(54)
    , cof     = __webpack_require__(80);

  $export($export.S, 'Error', {
    isError: function isError(it){
      return cof(it) === 'Error';
    }
  });

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = __webpack_require__(54);

  $export($export.S, 'Math', {
    iaddh: function iaddh(x0, x1, y0, y1){
      var $x0 = x0 >>> 0
        , $x1 = x1 >>> 0
        , $y0 = y0 >>> 0;
      return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
    }
  });

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = __webpack_require__(54);

  $export($export.S, 'Math', {
    isubh: function isubh(x0, x1, y0, y1){
      var $x0 = x0 >>> 0
        , $x1 = x1 >>> 0
        , $y0 = y0 >>> 0;
      return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
    }
  });

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = __webpack_require__(54);

  $export($export.S, 'Math', {
    imulh: function imulh(u, v){
      var UINT16 = 0xffff
        , $u = +u
        , $v = +v
        , u0 = $u & UINT16
        , v0 = $v & UINT16
        , u1 = $u >> 16
        , v1 = $v >> 16
        , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
    }
  });

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = __webpack_require__(54);

  $export($export.S, 'Math', {
    umulh: function umulh(u, v){
      var UINT16 = 0xffff
        , $u = +u
        , $v = +v
        , u0 = $u & UINT16
        , v0 = $v & UINT16
        , u1 = $u >>> 16
        , v1 = $v >>> 16
        , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
    }
  });

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

  var metadata                  = __webpack_require__(323)
    , anObject                  = __webpack_require__(58)
    , toMetaKey                 = metadata.key
    , ordinaryDefineOwnMetadata = metadata.set;

  metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
  }});

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

  var Map     = __webpack_require__(257)
    , $export = __webpack_require__(54)
    , shared  = __webpack_require__(69)('metadata')
    , store   = shared.store || (shared.store = new (__webpack_require__(261)));

  var getOrCreateMetadataMap = function(target, targetKey, create){
    var targetMetadata = store.get(target);
    if(!targetMetadata){
      if(!create)return undefined;
      store.set(target, targetMetadata = new Map);
    }
    var keyMetadata = targetMetadata.get(targetKey);
    if(!keyMetadata){
      if(!create)return undefined;
      targetMetadata.set(targetKey, keyMetadata = new Map);
    } return keyMetadata;
  };
  var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
  };
  var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
  };
  var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
    getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
  };
  var ordinaryOwnMetadataKeys = function(target, targetKey){
    var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
      , keys        = [];
    if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
    return keys;
  };
  var toMetaKey = function(it){
    return it === undefined || typeof it == 'symbol' ? it : String(it);
  };
  var exp = function(O){
    $export($export.S, 'Reflect', O);
  };

  module.exports = {
    store: store,
    map: getOrCreateMetadataMap,
    has: ordinaryHasOwnMetadata,
    get: ordinaryGetOwnMetadata,
    set: ordinaryDefineOwnMetadata,
    keys: ordinaryOwnMetadataKeys,
    key: toMetaKey,
    exp: exp
  };

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

  var metadata               = __webpack_require__(323)
    , anObject               = __webpack_require__(58)
    , toMetaKey              = metadata.key
    , getOrCreateMetadataMap = metadata.map
    , store                  = metadata.store;

  metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
    var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
      , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
    if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
    if(metadataMap.size)return true;
    var targetMetadata = store.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store['delete'](target);
  }});

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

  var metadata               = __webpack_require__(323)
    , anObject               = __webpack_require__(58)
    , getPrototypeOf         = __webpack_require__(105)
    , ordinaryHasOwnMetadata = metadata.has
    , ordinaryGetOwnMetadata = metadata.get
    , toMetaKey              = metadata.key;

  var ordinaryGetMetadata = function(MetadataKey, O, P){
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
  };

  metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  }});

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

  var Set                     = __webpack_require__(260)
    , from                    = __webpack_require__(314)
    , metadata                = __webpack_require__(323)
    , anObject                = __webpack_require__(58)
    , getPrototypeOf          = __webpack_require__(105)
    , ordinaryOwnMetadataKeys = metadata.keys
    , toMetaKey               = metadata.key;

  var ordinaryMetadataKeys = function(O, P){
    var oKeys  = ordinaryOwnMetadataKeys(O, P)
      , parent = getPrototypeOf(O);
    if(parent === null)return oKeys;
    var pKeys  = ordinaryMetadataKeys(parent, P);
    return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
  };

  metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
  }});

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

  var metadata               = __webpack_require__(323)
    , anObject               = __webpack_require__(58)
    , ordinaryGetOwnMetadata = metadata.get
    , toMetaKey              = metadata.key;

  metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
    return ordinaryGetOwnMetadata(metadataKey, anObject(target)
      , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  }});

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

  var metadata                = __webpack_require__(323)
    , anObject                = __webpack_require__(58)
    , ordinaryOwnMetadataKeys = metadata.keys
    , toMetaKey               = metadata.key;

  metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
  }});

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

  var metadata               = __webpack_require__(323)
    , anObject               = __webpack_require__(58)
    , getPrototypeOf         = __webpack_require__(105)
    , ordinaryHasOwnMetadata = metadata.has
    , toMetaKey              = metadata.key;

  var ordinaryHasMetadata = function(MetadataKey, O, P){
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if(hasOwn)return true;
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
  };

  metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  }});

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

  var metadata               = __webpack_require__(323)
    , anObject               = __webpack_require__(58)
    , ordinaryHasOwnMetadata = metadata.has
    , toMetaKey              = metadata.key;

  metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
    return ordinaryHasOwnMetadata(metadataKey, anObject(target)
      , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  }});

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

  var metadata                  = __webpack_require__(323)
    , anObject                  = __webpack_require__(58)
    , aFunction                 = __webpack_require__(67)
    , toMetaKey                 = metadata.key
    , ordinaryDefineOwnMetadata = metadata.set;

  metadata.exp({metadata: function metadata(metadataKey, metadataValue){
    return function decorator(target, targetKey){
      ordinaryDefineOwnMetadata(
        metadataKey, metadataValue,
        (targetKey !== undefined ? anObject : aFunction)(target),
        toMetaKey(targetKey)
      );
    };
  }});

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
  var $export   = __webpack_require__(54)
    , microtask = __webpack_require__(255)()
    , process   = __webpack_require__(50).process
    , isNode    = __webpack_require__(80)(process) == 'process';

  $export($export.G, {
    asap: function asap(fn){
      var domain = isNode && process.domain;
      microtask(domain ? domain.bind(fn) : fn);
    }
  });

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/zenparsing/es-observable
  var $export     = __webpack_require__(54)
    , global      = __webpack_require__(50)
    , core        = __webpack_require__(55)
    , microtask   = __webpack_require__(255)()
    , OBSERVABLE  = __webpack_require__(71)('observable')
    , aFunction   = __webpack_require__(67)
    , anObject    = __webpack_require__(58)
    , anInstance  = __webpack_require__(251)
    , redefineAll = __webpack_require__(256)
    , hide        = __webpack_require__(56)
    , forOf       = __webpack_require__(252)
    , RETURN      = forOf.RETURN;

  var getMethod = function(fn){
    return fn == null ? undefined : aFunction(fn);
  };

  var cleanupSubscription = function(subscription){
    var cleanup = subscription._c;
    if(cleanup){
      subscription._c = undefined;
      cleanup();
    }
  };

  var subscriptionClosed = function(subscription){
    return subscription._o === undefined;
  };

  var closeSubscription = function(subscription){
    if(!subscriptionClosed(subscription)){
      subscription._o = undefined;
      cleanupSubscription(subscription);
    }
  };

  var Subscription = function(observer, subscriber){
    anObject(observer);
    this._c = undefined;
    this._o = observer;
    observer = new SubscriptionObserver(this);
    try {
      var cleanup      = subscriber(observer)
        , subscription = cleanup;
      if(cleanup != null){
        if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
        else aFunction(cleanup);
        this._c = cleanup;
      }
    } catch(e){
      observer.error(e);
      return;
    } if(subscriptionClosed(this))cleanupSubscription(this);
  };

  Subscription.prototype = redefineAll({}, {
    unsubscribe: function unsubscribe(){ closeSubscription(this); }
  });

  var SubscriptionObserver = function(subscription){
    this._s = subscription;
  };

  SubscriptionObserver.prototype = redefineAll({}, {
    next: function next(value){
      var subscription = this._s;
      if(!subscriptionClosed(subscription)){
        var observer = subscription._o;
        try {
          var m = getMethod(observer.next);
          if(m)return m.call(observer, value);
        } catch(e){
          try {
            closeSubscription(subscription);
          } finally {
            throw e;
          }
        }
      }
    },
    error: function error(value){
      var subscription = this._s;
      if(subscriptionClosed(subscription))throw value;
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.error);
        if(!m)throw value;
        value = m.call(observer, value);
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    },
    complete: function complete(value){
      var subscription = this._s;
      if(!subscriptionClosed(subscription)){
        var observer = subscription._o;
        subscription._o = undefined;
        try {
          var m = getMethod(observer.complete);
          value = m ? m.call(observer, value) : undefined;
        } catch(e){
          try {
            cleanupSubscription(subscription);
          } finally {
            throw e;
          }
        } cleanupSubscription(subscription);
        return value;
      }
    }
  });

  var $Observable = function Observable(subscriber){
    anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
  };

  redefineAll($Observable.prototype, {
    subscribe: function subscribe(observer){
      return new Subscription(observer, this._f);
    },
    forEach: function forEach(fn){
      var that = this;
      return new (core.Promise || global.Promise)(function(resolve, reject){
        aFunction(fn);
        var subscription = that.subscribe({
          next : function(value){
            try {
              return fn(value);
            } catch(e){
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    }
  });

  redefineAll($Observable, {
    from: function from(x){
      var C = typeof this === 'function' ? this : $Observable;
      var method = getMethod(anObject(x)[OBSERVABLE]);
      if(method){
        var observable = anObject(method.call(x));
        return observable.constructor === C ? observable : new C(function(observer){
          return observable.subscribe(observer);
        });
      }
      return new C(function(observer){
        var done = false;
        microtask(function(){
          if(!done){
            try {
              if(forOf(x, false, function(it){
                observer.next(it);
                if(done)return RETURN;
              }) === RETURN)return;
            } catch(e){
              if(done)throw e;
              observer.error(e);
              return;
            } observer.complete();
          }
        });
        return function(){ done = true; };
      });
    },
    of: function of(){
      for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
      return new (typeof this === 'function' ? this : $Observable)(function(observer){
        var done = false;
        microtask(function(){
          if(!done){
            for(var i = 0; i < items.length; ++i){
              observer.next(items[i]);
              if(done)return;
            } observer.complete();
          }
        });
        return function(){ done = true; };
      });
    }
  });

  hide($Observable.prototype, OBSERVABLE, function(){ return this; });

  $export($export.G, {Observable: $Observable});

  __webpack_require__(238)('Observable');

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

  // ie9- setTimeout & setInterval additional parameters fix
  var global     = __webpack_require__(50)
    , $export    = __webpack_require__(54)
    , invoke     = __webpack_require__(124)
    , partial    = __webpack_require__(335)
    , navigator  = global.navigator
    , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
  var wrap = function(set){
    return MSIE ? function(fn, time /*, ...args */){
      return set(invoke(
        partial,
        [].slice.call(arguments, 2),
        typeof fn == 'function' ? fn : Function(fn)
      ), time);
    } : set;
  };
  $export($export.G + $export.B + $export.F * MSIE, {
    setTimeout:  wrap(global.setTimeout),
    setInterval: wrap(global.setInterval)
  });

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var path      = __webpack_require__(336)
    , invoke    = __webpack_require__(124)
    , aFunction = __webpack_require__(67);
  module.exports = function(/* ...pargs */){
    var fn     = aFunction(this)
      , length = arguments.length
      , pargs  = Array(length)
      , i      = 0
      , _      = path._
      , holder = false;
    while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
    return function(/* ...args */){
      var that = this
        , aLen = arguments.length
        , j = 0, k = 0, args;
      if(!holder && !aLen)return invoke(fn, pargs, that);
      args = pargs.slice();
      if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
      while(aLen > k)args.push(arguments[k++]);
      return invoke(fn, args, that);
    };
  };

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(50);

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

  var $export = __webpack_require__(54)
    , $task   = __webpack_require__(254);
  $export($export.G + $export.B, {
    setImmediate:   $task.set,
    clearImmediate: $task.clear
  });

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

  var $iterators    = __webpack_require__(239)
    , redefine      = __webpack_require__(64)
    , global        = __webpack_require__(50)
    , hide          = __webpack_require__(56)
    , Iterators     = __webpack_require__(175)
    , wks           = __webpack_require__(71)
    , ITERATOR      = wks('iterator')
    , TO_STRING_TAG = wks('toStringTag')
    , ArrayValues   = Iterators.Array;

  for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
    var NAME       = collections[i]
      , Collection = global[NAME]
      , proto      = Collection && Collection.prototype
      , key;
    if(proto){
      if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
      if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = ArrayValues;
      for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
    }
  }

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global, process) {/**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
   * additional grant of patent rights can be found in the PATENTS file in
   * the same directory.
   */

  !(function(global) {
    "use strict";

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    var inModule = typeof module === "object";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      if (inModule) {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return;
    }

    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = inModule ? module.exports : {};

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    runtime.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] =
      GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    runtime.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    runtime.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            resolve(result);
          }, reject);
        }
      }

      if (typeof process === "object" && process.domain) {
        invoke = process.domain.bind(invoke);
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    runtime.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function(innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList)
      );

      return runtime.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            if (method === "return" ||
                (method === "throw" && delegate.iterator[method] === undefined)) {
              // A return or throw (when the delegate iterator has no throw
              // method) always terminates the yield* loop.
              context.delegate = null;

              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              var returnMethod = delegate.iterator["return"];
              if (returnMethod) {
                var record = tryCatch(returnMethod, delegate.iterator, arg);
                if (record.type === "throw") {
                  // If the return method threw an exception, let that
                  // exception prevail over the original return or throw.
                  method = "throw";
                  arg = record.arg;
                  continue;
                }
              }

              if (method === "return") {
                // Continue with the outer return, now that the delegate
                // iterator has been terminated.
                continue;
              }
            }

            var record = tryCatch(
              delegate.iterator[method],
              delegate.iterator,
              arg
            );

            if (record.type === "throw") {
              context.delegate = null;

              // Like returning generator.throw(uncaught), but without the
              // overhead of an extra function call.
              method = "throw";
              arg = record.arg;
              continue;
            }

            // Delegate generator ran and handled its own exceptions so
            // regardless of what the method was, we continue as if it is
            // "next" with an undefined arg.
            method = "next";
            arg = undefined;

            var info = record.arg;
            if (info.done) {
              context[delegate.resultName] = info.value;
              context.next = delegate.nextLoc;
            } else {
              state = GenStateSuspendedYield;
              return info;
            }

            context.delegate = null;
          }

          if (method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = arg;

          } else if (method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw arg;
            }

            if (context.dispatchException(arg)) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              method = "next";
              arg = undefined;
            }

          } else if (method === "return") {
            context.abrupt("return", arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            var info = {
              value: record.arg,
              done: context.done
            };

            if (record.arg === ContinueSentinel) {
              if (context.delegate && method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                arg = undefined;
              }
            } else {
              return info;
            }

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(arg) call above.
            method = "throw";
            arg = record.arg;
          }
        }
      };
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    runtime.values = values;

    function doneResult() {
      return { value: undefined, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.next = finallyEntry.finallyLoc;
        } else {
          this.complete(record);
        }

        return ContinueSentinel;
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = record.arg;
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        return ContinueSentinel;
      }
    };
  })(
    // Among the various tricks for obtaining a reference to the global
    // object, this seems to be the most reliable technique that does not
    // use indirect eval (which violates Content Security Policy).
    typeof global === "object" ? global :
    typeof window === "object" ? window :
    typeof self === "object" ? self : this
  );

  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(13)))

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(341);
  module.exports = __webpack_require__(55).RegExp.escape;

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/benjamingr/RexExp.escape
  var $export = __webpack_require__(54)
    , $re     = __webpack_require__(342)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

  $export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 342 */
/***/ function(module, exports) {

  module.exports = function(regExp, replace){
    var replacer = replace === Object(replace) ? function(part){
      return replace[part];
    } : replace;
    return function(it){
      return String(it).replace(regExp, replacer);
    };
  };

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(riot) {'use strict';

  __webpack_require__(344);

  __webpack_require__(345);

  __webpack_require__(347);

  __webpack_require__(348);

  var _inventory = __webpack_require__(349);

  riot.tag2('inventory', '<div class="inventory-menu"> <virtual if="[!defaultHeader]" each="[[opts]]"> <yield from="header"></yield> </virtual> <header if="[defaultHeader]" data="[opts]"></header> <filter-bar if="[opts.filterable]" on-sort="[handleSort]" on-search="[handleSearch]" on-brand-filter="[handleBrandFilter]" on-group-filter="[handleGroupFilter]" brands="[brands]" groups="[groups]" brand-filter="[filters.brandFilter]" group-filter="[filters.groupFilter]" class="inventory-filter-bar"></filter-bar> <p class="inventory-loading-message" if="[noData()]">Loading...</p> <div each="[groups]" if="[parent.groupedItems[id]]" class="inventory-list"> <div if="[!parent.defaultGroupHeader]"> <yield from="group-header"></yield> </div> <div if="[parent.defaultGroupHeader]"> <group-header data="[this]"></group-header> </div> <div if="[!parent.defaultItem]"> <virtual each="[parent.groupedItems[id]]"> <yield from="item"></yield> </virtual> </div> <div if="[parent.defaultItem]"> <item each="[parent.groupedItems[id]]" data="[this]"></item> </div> </div> <b if="[error]">Errors: [error]</b> </div>', '.inventory-menu { font-family: \'Open Sans\', sans-serif; color: #484848; } .inventory-filter-bar { margin-bottom: 1.5rem; display: block; }', '', function (opts) {
    var _this = this;

    this.name = '';
    this.groups = [];
    this.menuItems = [];
    this.groupedItems = {};
    this.filters = {};
    this.brands = [];

    this.defaultHeader = this.opts.defaultHeader;
    this.defaultGroupHeader = this.opts.defaultGroupHeader;
    this.defaultItem = this.opts.defaultItem;
    this.autoScroll = this.opts.autoScroll;
    this.scrollInterval = this.opts.scrollInterval;

    this.init = _inventory.init.bind(this);
    this.refilter = _inventory.refilter.bind(this);

    window.formatMoney = function (price) {
      var realPrice = price / 100;
      return '$' + realPrice.toFixed(2);
    };

    this.noData = function () {
      return _this.groups.length === 0;
    };

    this.handleSort = function (value) {
      _this.filters.sortBy = value;
      _this.refilter();
    };

    this.handleSearch = function (value) {
      _this.filters.quickSearch = value;
      _this.refilter();
    };

    this.handleBrandFilter = function (value) {
      _this.filters.brandFilter = value;
      _this.refilter();
    };

    this.handleGroupFilter = function (value) {
      _this.filters.groupFilter = value;
      _this.refilter();
    };

    this.clearInterval = function () {
      if (_this.intervalId) {
        clearInterval(_this.intervalId);
        _this.intervalId = null;
      }
    };

    this.on('mount', this.init);

    this.on('update', function () {
      _this.clearInterval();

      if (_this.autoScroll) {
        _this.intervalId = setInterval(function () {
          var clientHeight = document.documentElement.clientHeight;
          if (document.body.scrollHeight <= clientHeight + window.pageYOffset) {
            window.scrollTo(0, 0);
          } else {
            window.scrollBy(0, clientHeight - clientHeight / 10);
          }
        }, _this.scrollInterval);
      }
    });

    this.on('unmount', function () {
      _this.clearInterval();
    });
  });
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(riot) {'use strict';

  riot.tag2('header', '<h1 class="inventory-header">Inventory Menu</h1>', '', '', function (opts) {});
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(riot) {'use strict';

  __webpack_require__(346);

  riot.tag2('item', '<div class="inventory-item-details"> <div class="inventory-item-name"> [opts.data.name] </div> <div class="inventory-item-additional-details"> <span class="inventory-item-brand">[opts.data.brand]</span> <span if="[hasValue(\'thc\')]" class="inventory-item-badge inventory-item-thc">[opts.data.thc]% THC</span> <span if="[hasValue(\'cbd\')]" class="inventory-item-badge inventory-item-cbd">[opts.data.cbd]% CBD</span> </div> </div> <div class="inventory-item-price-container"> <price-item each="[opts.data.prices]" price="[this.price]" unit="[this.unit]" type="[this.type]"></price-item> </div>', '.inventory-item { width: 100%; padding: .5rem; margin: .3rem 0; display: flex; flex-direction: row; justify-content: space-between; background-color: #f3f3f9; box-sizing: border-box; } .inventory-item:nth-of-type(2n) { background-color: #dddde0; } .inventory-item-name { font-size: 1.4rem; } .inventory-item-additional-details { margin-top: .3rem; color: gray; font-size: .9rem; font-weight: 100; } .inventory-item-brand { font-style: italic; margin-right: .5rem; } .inventory-item-badge { color: gray; border-radius: 3px; margin: 0 .1rem; padding: .1rem .3rem; } .inventory-item-thc { background-color: #c0e090; } .inventory-item-cbd { background-color: #b5e4ff; } .inventory-item-price-container{ display: flex; flex-directio: row; }', 'class="inventory-item"', function (opts) {
    var _this = this;

    this.hasValue = function (field) {
      return _this.opts.data[field] || _this.opts.data[field] === 0;
    };
  });
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(riot) {'use strict';

  riot.tag2('price-item', '<div class="inventory-item-price"> <div>$<span class="inventory-item-price-value">[opts.price/100]</span></div> <div class="inventory-item-price-unit">[opts.unit] [opts.type]</div> </div>', '.inventory-item-price { padding: 0 .4rem; } .inventory-item-price>div { text-align: center; } .inventory-item-price-value { font-size: 1.1rem; font-weight: bold; } .inventory-item-price-unit{ color: gray; font-size: .8rem; font-weight: 100; margin-top: .3rem; }', '', function (opts) {});
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(riot) {'use strict';

  riot.tag2('group-header', '<div class="inventory-group-header">[opts.data.name]</div>', '.inventory-group-header { background: green; font-size: 1.2rem; padding: .5rem; margin-top: .7rem; color: white; }', '', function (opts) {});
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(riot) {'use strict';

  riot.tag2('filter-bar', '<div class="inventory-filter-container"> <div class="inventory-filter-item"> <div class="inventory-filter-label">Search Menu</div> <input onkeyup="[handleSearch]" class="inventory-filter-input"> </div> <div class="inventory-filter-item"> <div class="inventory-filter-label">Sort By</div> <select name="fields" class="inventory-filter-input" onchange="[handleSort]"> <option value="name">Name</option> <option value="brand">Brand Name</option> </select> </div> <div class="inventory-filter-item"> <div class="inventory-filter-label">Filter by Brand</div> <select name="brands" class="inventory-filter-input" onchange="[handleBrandFilter]"> <option value="[null]" selected="[opts.brandFilter==null]">all</option> <option each="[opts.brands]" value="[this.title]" selected="[parent.opts.brandFilter==this.title]">[this.title]</option> </select> </div> </div> <div class="inventory-filter-label">Show Group</div> <div class="inventory-filter-button-group"> <div onclick="[handleGroupFilter(null)]" class="[inventory-filter-group-link:true,inventory-filter-group-active:opts.groupFilter==null]">All</div> <div each="[opts.groups]" onclick="[handleGroupFilter(this.id)]" class="[inventory-filter-group-link:true,inventory-filter-group-active:parent.opts.groupFilter==this.id]"> [this.name] </div> </div>', '.inventory-filter-container { display: flex; justify-content: space-between; flex-direction: row; margin-bottom: .5rem; } .inventory-filter-item { width: calc(33% - 0.5rem); } .inventory-filter-input { height: 34px; padding: 4px 10px; background-color: #fff; border: 1px solid #D1D1D1; border-radius: 4px; box-shadow: none; box-sizing: border-box; width: 100%; } .inventory-filter-label { font-size: .8rem; padding-bottom: .3rem; } .inventory-filter-button-group { display: flex; flex-direction: row; flex-wrap: wrap; border-radius: 4px; background-color: #fff; border: 1px solid #D1D1D1; box-sizing: border-box; overflow: hidden; } .inventory-filter-group-link { height: 100%; border-right: solid 1px #D1D1D1; padding: 8px 10px; box-sizing: border-box; font-size: .8rem; cursor: pointer; } .inventory-filter-group-link:hover { background-color: #f3f3f9; } .inventory-filter-group-link:last-of-type { border-right: 0px; } .inventory-filter-group-active { background-color: #f3f3f9; }', '', function (opts) {
    var _this = this;

    this.handleSort = function (e) {
      return _this.opts.onSort(e.target.value);
    };
    this.handleSearch = function (e) {
      return _this.opts.onSearch(e.target.value);
    };
    this.handleBrandFilter = function (e) {
      return _this.opts.onBrandFilter(e.target.value);
    };
    this.handleGroupFilter = function (groupName) {
      return function () {
        return _this.opts.onGroupFilter(groupName);
      };
    };
  });
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.init = init;
  exports.refilter = refilter;

  var _groupBy = __webpack_require__(350);

  var _groupBy2 = _interopRequireDefault(_groupBy);

  var _filter = __webpack_require__(351);

  var _filter2 = _interopRequireDefault(_filter);

  var _api = __webpack_require__(352);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var STORAGE_NAME = 'offlineState';

  function init() {
    var _this = this;

    updateState(getOfflineState(this.opts.menuId), this.filters, this.update);

    (0, _api.connect)({
      menuId: this.opts.menuId,
      menuApiKey: this.opts.menuApiKey,
      xGBSignature: this.opts.xGBSignature,
      onSync: function onSync(_ref) {
        var menu_items = _ref.menu_items,
            menu_groups = _ref.menu_groups,
            name = _ref.name;

        var menu = { menuItems: menu_items, name: name, groups: menu_groups };
        updateState(menu, _this.filters, _this.update, _this.opts.menuId);
      },
      onItemAdded: function onItemAdded(data) {
        var menuItems = _this.menuItems.concat([data]);
        updateState({ menuItems: menuItems }, _this.filters, _this.update, _this.opts.menuId);
      },
      onItemUpdated: function onItemUpdated(data) {
        var menuItems = updateItem(_this.menuItems, data);
        updateState({ menuItems: menuItems }, _this.filters, _this.update, _this.opts.menuId);
      },
      onItemRemoved: function onItemRemoved(data) {
        var menuItems = _this.menuItems.filter(function (item) {
          return item.id !== data.id;
        });
        updateState({ menuItems: menuItems }, _this.filters, _this.update, _this.opts.menuId);
      },
      onGroupAdded: function onGroupAdded(data) {
        updateState({ groups: _this.groups.concat([data]) }, _this.filters, _this.update, _this.opts.menuId);
      },
      onGroupUpdated: function onGroupUpdated(data) {
        updateState({ groups: updateItem(_this.groups, data) }, _this.filters, _this.update, _this.opts.menuId);
      },
      onGroupRemoved: function onGroupRemoved(data) {
        updateState({ groups: _this.groups.filter(function (group) {
            return group.id !== data.id;
          }) }, _this.filters, _this.update, _this.opts.menuId);
      }
    });
  }

  function refilter() {
    var filteredItems = (0, _filter2.default)(this.menuItems, this.filters);
    var groupedItems = (0, _groupBy2.default)(filteredItems, getMenuId);

    this.update({ groupedItems: groupedItems });
  }

  var getBrands = function getBrands(items) {
    return [].concat(_toConsumableArray(new Set(items.map(function (i) {
      return i.brand;
    })))).map(function (b) {
      return { title: b };
    });
  };

  var updateState = function updateState(newState, filters, update, menuId) {
    var name = newState.name,
        groups = newState.groups,
        menuItems = newState.menuItems;

    var state = {};

    if (groups || menuItems) {
      updateOfflineState(menuId, newState);
    }

    if (menuItems) {
      var filteredItems = (0, _filter2.default)(menuItems, filters);
      state.menuItems = menuItems;
      state.brands = getBrands(menuItems);
      state.groupedItems = (0, _groupBy2.default)(filteredItems, getMenuId);
    }

    if (groups) {
      state.groups = groups;
    }

    if (name) {
      state.name = name;
    }

    update(state);
  };

  var getMenuId = function getMenuId(x) {
    return x.menu_group_id;
  };

  var updateItem = function updateItem(list, item) {
    var newItems = void 0;

    var founded = list.find(function (x) {
      return x.id === item.id;
    });
    if (founded) {
      newItems = list.map(function (x) {
        return x.id === item.id ? item : x;
      });
    } else {
      newItems = [].concat(_toConsumableArray(list), [item]);
    }

    return newItems;
  };

  var getOfflineState = function getOfflineState(menuId) {
    return JSON.parse(localStorage.getItem(menuId)) || {};
  };

  var updateOfflineState = function updateOfflineState(menuId, _ref2) {
    var groups = _ref2.groups,
        menuItems = _ref2.menuItems,
        name = _ref2.name;

    var offlineState = getOfflineState();
    localStorage.setItem(menuId, JSON.stringify({
      groups: groups || offlineState.groups,
      menuItems: menuItems || offlineState.menuItems,
      name: name || offlineState.name
    }));
  };

/***/ },
/* 350 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports.default = groupBy;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function groupBy(list, getGroup) {
    return list.reduce(function (acc, item) {
      var group = getGroup(item);
      return _extends({}, acc, _defineProperty({}, group, [].concat(_toConsumableArray(acc[group] || []), [item])));
    }, {});
  }

/***/ },
/* 351 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (items, _ref) {
    var _ref$sortBy = _ref.sortBy,
        sortBy = _ref$sortBy === undefined ? 'name' : _ref$sortBy,
        quickSearch = _ref.quickSearch,
        brandFilter = _ref.brandFilter,
        groupFilter = _ref.groupFilter;

    var filteredItems = items;

    filteredItems = filteredItems.sort(function (a, b) {
      return a[sortBy] > b[sortBy];
    });

    if (brandFilter) {
      filteredItems = filteredItems.filter(function (i) {
        return i.brand === brandFilter;
      });
    }

    if (groupFilter) {
      filteredItems = filteredItems.filter(function (i) {
        return i.menu_group_id === groupFilter;
      });
    }

    if (quickSearch) {
      filteredItems = filteredItems.filter(function (item) {
        return item.name.toLowerCase().includes(quickSearch.toLowerCase());
      });
    }

    return filteredItems;
  };

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.connect = undefined;

  var _pusherJs = __webpack_require__(353);

  var _pusherJs2 = _interopRequireDefault(_pusherJs);

  var _menu = __webpack_require__(354);

  var _menu2 = _interopRequireDefault(_menu);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var PUSHER_KEY = 'dfa3f4237dfbbc1a5a31';

  var noop = function noop() {};

  var connect = exports.connect = function connect(_ref) {
    var menuId = _ref.menuId,
        menuApiKey = _ref.menuApiKey,
        xGBSignature = _ref.xGBSignature,
        _ref$onSync = _ref.onSync,
        onSync = _ref$onSync === undefined ? noop : _ref$onSync,
        _ref$onItemAdded = _ref.onItemAdded,
        onItemAdded = _ref$onItemAdded === undefined ? noop : _ref$onItemAdded,
        _ref$onItemUpdated = _ref.onItemUpdated,
        onItemUpdated = _ref$onItemUpdated === undefined ? noop : _ref$onItemUpdated,
        _ref$onItemRemoved = _ref.onItemRemoved,
        onItemRemoved = _ref$onItemRemoved === undefined ? noop : _ref$onItemRemoved,
        _ref$onGroupAdded = _ref.onGroupAdded,
        onGroupAdded = _ref$onGroupAdded === undefined ? noop : _ref$onGroupAdded,
        _ref$onGroupUpdated = _ref.onGroupUpdated,
        onGroupUpdated = _ref$onGroupUpdated === undefined ? noop : _ref$onGroupUpdated,
        _ref$onGroupRemoved = _ref.onGroupRemoved,
        onGroupRemoved = _ref$onGroupRemoved === undefined ? noop : _ref$onGroupRemoved;

    var pusher = new _pusherJs2.default(PUSHER_KEY, {
      authEndpoint: 'https://api.greenbits.com/auth/menu_feed',
      auth: {
        params: {
          id: menuId,
          api_key: menuApiKey
        }
      },
      encrypted: true
    });

    var channel = pusher.subscribe('private-menu_feed.' + menuId);

    channel.bind('item_added', onItemAdded);
    channel.bind('item_updated', onItemUpdated);
    channel.bind('item_removed', onItemRemoved);
    channel.bind('group_added', onGroupAdded);
    channel.bind('group_updated', onGroupUpdated);
    channel.bind('group_removed', onGroupRemoved);

    pusher.connection.bind('connected', function () {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status == 200) {
          // Typical action to be performed when the document is ready:
          var data = JSON.parse(request.response);
          if (data.menu_items.length > 0) {
            onSync(data);
          } else {
            // SHOULD WE REMOVE THIS ? @wojteg
            onSync({ menu_items: _menu2.default.items, menu_groups: _menu2.default.groups, name: "mocked data" });
          }
        }
      };
      request.open('POST', 'https://api.greenbits.com/api/v1/menu_feeds/' + menuId + '/sync', true);
      request.setRequestHeader('X-GB-Menu-Api-Key', menuApiKey);
      if (xGBSignature) {
        request.setRequestHeader('X-GB-Signature', xGBSignature);
      }
      request.send({ sync: true });
    });
  };

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

  /*!
   * Pusher JavaScript Library v3.2.4
   * http://pusher.com/
   *
   * Copyright 2016, Pusher
   * Released under the MIT licence.
   */

  (function webpackUniversalModuleDefinition(root, factory) {
    if(true)
      module.exports = factory();
    else if(typeof define === 'function' && define.amd)
      define([], factory);
    else if(typeof exports === 'object')
      exports["Pusher"] = factory();
    else
      root["Pusher"] = factory();
  })(this, function() {
  return /******/ (function(modules) { // webpackBootstrap
  /******/  // The module cache
  /******/  var installedModules = {};

  /******/  // The require function
  /******/  function __webpack_require__(moduleId) {

  /******/    // Check if module is in cache
  /******/    if(installedModules[moduleId])
  /******/      return installedModules[moduleId].exports;

  /******/    // Create a new module (and put it into the cache)
  /******/    var module = installedModules[moduleId] = {
  /******/      exports: {},
  /******/      id: moduleId,
  /******/      loaded: false
  /******/    };

  /******/    // Execute the module function
  /******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

  /******/    // Flag the module as loaded
  /******/    module.loaded = true;

  /******/    // Return the exports of the module
  /******/    return module.exports;
  /******/  }


  /******/  // expose the modules object (__webpack_modules__)
  /******/  __webpack_require__.m = modules;

  /******/  // expose the module cache
  /******/  __webpack_require__.c = installedModules;

  /******/  // __webpack_public_path__
  /******/  __webpack_require__.p = "";

  /******/  // Load entry module and return exports
  /******/  return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var pusher_1 = __webpack_require__(1);
    module.exports = pusher_1["default"];


  /***/ },
  /* 1 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var runtime_1 = __webpack_require__(2);
    var Collections = __webpack_require__(9);
    var dispatcher_1 = __webpack_require__(23);
    var timeline_1 = __webpack_require__(38);
    var level_1 = __webpack_require__(39);
    var StrategyBuilder = __webpack_require__(40);
    var timers_1 = __webpack_require__(12);
    var defaults_1 = __webpack_require__(5);
    var DefaultConfig = __webpack_require__(62);
    var logger_1 = __webpack_require__(8);
    var factory_1 = __webpack_require__(42);
    var Pusher = (function () {
        function Pusher(app_key, options) {
            var _this = this;
            checkAppKey(app_key);
            options = options || {};
            this.key = app_key;
            this.config = Collections.extend(DefaultConfig.getGlobalConfig(), options.cluster ? DefaultConfig.getClusterConfig(options.cluster) : {}, options);
            this.channels = factory_1["default"].createChannels();
            this.global_emitter = new dispatcher_1["default"]();
            this.sessionID = Math.floor(Math.random() * 1000000000);
            this.timeline = new timeline_1["default"](this.key, this.sessionID, {
                cluster: this.config.cluster,
                features: Pusher.getClientFeatures(),
                params: this.config.timelineParams || {},
                limit: 50,
                level: level_1["default"].INFO,
                version: defaults_1["default"].VERSION
            });
            if (!this.config.disableStats) {
                this.timelineSender = factory_1["default"].createTimelineSender(this.timeline, {
                    host: this.config.statsHost,
                    path: "/timeline/v2/" + runtime_1["default"].TimelineTransport.name
                });
            }
            var getStrategy = function (options) {
                var config = Collections.extend({}, _this.config, options);
                return StrategyBuilder.build(runtime_1["default"].getDefaultStrategy(config), config);
            };
            this.connection = factory_1["default"].createConnectionManager(this.key, Collections.extend({ getStrategy: getStrategy,
                timeline: this.timeline,
                activityTimeout: this.config.activity_timeout,
                pongTimeout: this.config.pong_timeout,
                unavailableTimeout: this.config.unavailable_timeout
            }, this.config, { encrypted: this.isEncrypted() }));
            this.connection.bind('connected', function () {
                _this.subscribeAll();
                if (_this.timelineSender) {
                    _this.timelineSender.send(_this.connection.isEncrypted());
                }
            });
            this.connection.bind('message', function (params) {
                var internal = (params.event.indexOf('pusher_internal:') === 0);
                if (params.channel) {
                    var channel = _this.channel(params.channel);
                    if (channel) {
                        channel.handleEvent(params.event, params.data);
                    }
                }
                if (!internal) {
                    _this.global_emitter.emit(params.event, params.data);
                }
            });
            this.connection.bind('connecting', function () {
                _this.channels.disconnect();
            });
            this.connection.bind('disconnected', function () {
                _this.channels.disconnect();
            });
            this.connection.bind('error', function (err) {
                logger_1["default"].warn('Error', err);
            });
            Pusher.instances.push(this);
            this.timeline.info({ instances: Pusher.instances.length });
            if (Pusher.isReady) {
                this.connect();
            }
        }
        Pusher.ready = function () {
            Pusher.isReady = true;
            for (var i = 0, l = Pusher.instances.length; i < l; i++) {
                Pusher.instances[i].connect();
            }
        };
        Pusher.log = function (message) {
            if (Pusher.logToConsole && (window).console && (window).console.log) {
                (window).console.log(message);
            }
        };
        Pusher.getClientFeatures = function () {
            return Collections.keys(Collections.filterObject({ "ws": runtime_1["default"].Transports.ws }, function (t) { return t.isSupported({}); }));
        };
        Pusher.prototype.channel = function (name) {
            return this.channels.find(name);
        };
        Pusher.prototype.allChannels = function () {
            return this.channels.all();
        };
        Pusher.prototype.connect = function () {
            this.connection.connect();
            if (this.timelineSender) {
                if (!this.timelineSenderTimer) {
                    var encrypted = this.connection.isEncrypted();
                    var timelineSender = this.timelineSender;
                    this.timelineSenderTimer = new timers_1.PeriodicTimer(60000, function () {
                        timelineSender.send(encrypted);
                    });
                }
            }
        };
        Pusher.prototype.disconnect = function () {
            this.connection.disconnect();
            if (this.timelineSenderTimer) {
                this.timelineSenderTimer.ensureAborted();
                this.timelineSenderTimer = null;
            }
        };
        Pusher.prototype.bind = function (event_name, callback) {
            this.global_emitter.bind(event_name, callback);
            return this;
        };
        Pusher.prototype.unbind = function (event_name, callback) {
            this.global_emitter.unbind(event_name, callback);
            return this;
        };
        Pusher.prototype.bind_all = function (callback) {
            this.global_emitter.bind_all(callback);
            return this;
        };
        Pusher.prototype.subscribeAll = function () {
            var channelName;
            for (channelName in this.channels.channels) {
                if (this.channels.channels.hasOwnProperty(channelName)) {
                    this.subscribe(channelName);
                }
            }
        };
        Pusher.prototype.subscribe = function (channel_name) {
            var channel = this.channels.add(channel_name, this);
            if (channel.subscriptionPending && channel.subscriptionCancelled) {
                channel.reinstateSubscription();
            }
            else if (!channel.subscriptionPending && this.connection.state === "connected") {
                channel.subscribe();
            }
            return channel;
        };
        Pusher.prototype.unsubscribe = function (channel_name) {
            var channel = this.channels.find(channel_name);
            if (channel && channel.subscriptionPending) {
                channel.cancelSubscription();
            }
            else {
                channel = this.channels.remove(channel_name);
                if (channel && this.connection.state === "connected") {
                    channel.unsubscribe();
                }
            }
        };
        Pusher.prototype.send_event = function (event_name, data, channel) {
            return this.connection.send_event(event_name, data, channel);
        };
        Pusher.prototype.isEncrypted = function () {
            if (runtime_1["default"].getProtocol() === "https:") {
                return true;
            }
            else {
                return Boolean(this.config.encrypted);
            }
        };
        Pusher.instances = [];
        Pusher.isReady = false;
        Pusher.logToConsole = false;
        Pusher.Runtime = runtime_1["default"];
        Pusher.ScriptReceivers = runtime_1["default"].ScriptReceivers;
        Pusher.DependenciesReceivers = runtime_1["default"].DependenciesReceivers;
        Pusher.auth_callbacks = runtime_1["default"].auth_callbacks;
        return Pusher;
    }());
    exports.__esModule = true;
    exports["default"] = Pusher;
    function checkAppKey(key) {
        if (key === null || key === undefined) {
            throw "You must pass your app key when you instantiate Pusher.";
        }
    }
    runtime_1["default"].setup(Pusher);


  /***/ },
  /* 2 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var dependencies_1 = __webpack_require__(3);
    var xhr_auth_1 = __webpack_require__(7);
    var jsonp_auth_1 = __webpack_require__(14);
    var script_request_1 = __webpack_require__(15);
    var jsonp_request_1 = __webpack_require__(16);
    var script_receiver_factory_1 = __webpack_require__(4);
    var jsonp_timeline_1 = __webpack_require__(17);
    var transports_1 = __webpack_require__(18);
    var net_info_1 = __webpack_require__(25);
    var default_strategy_1 = __webpack_require__(26);
    var transport_connection_initializer_1 = __webpack_require__(27);
    var http_1 = __webpack_require__(28);
    var Runtime = {
        nextAuthCallbackID: 1,
        auth_callbacks: {},
        ScriptReceivers: script_receiver_factory_1.ScriptReceivers,
        DependenciesReceivers: dependencies_1.DependenciesReceivers,
        getDefaultStrategy: default_strategy_1["default"],
        Transports: transports_1["default"],
        transportConnectionInitializer: transport_connection_initializer_1["default"],
        HTTPFactory: http_1["default"],
        TimelineTransport: jsonp_timeline_1["default"],
        getXHRAPI: function () {
            return window.XMLHttpRequest;
        },
        getWebSocketAPI: function () {
            return window.WebSocket || window.MozWebSocket;
        },
        setup: function (PusherClass) {
            var _this = this;
            window.Pusher = PusherClass;
            var initializeOnDocumentBody = function () {
                _this.onDocumentBody(PusherClass.ready);
            };
            if (!window.JSON) {
                dependencies_1.Dependencies.load("json2", {}, initializeOnDocumentBody);
            }
            else {
                initializeOnDocumentBody();
            }
        },
        getDocument: function () {
            return document;
        },
        getProtocol: function () {
            return this.getDocument().location.protocol;
        },
        getAuthorizers: function () {
            return { ajax: xhr_auth_1["default"], jsonp: jsonp_auth_1["default"] };
        },
        onDocumentBody: function (callback) {
            var _this = this;
            if (document.body) {
                callback();
            }
            else {
                setTimeout(function () {
                    _this.onDocumentBody(callback);
                }, 0);
            }
        },
        createJSONPRequest: function (url, data) {
            return new jsonp_request_1["default"](url, data);
        },
        createScriptRequest: function (src) {
            return new script_request_1["default"](src);
        },
        getLocalStorage: function () {
            try {
                return window.localStorage;
            }
            catch (e) {
                return undefined;
            }
        },
        createXHR: function () {
            if (this.getXHRAPI()) {
                return this.createXMLHttpRequest();
            }
            else {
                return this.createMicrosoftXHR();
            }
        },
        createXMLHttpRequest: function () {
            var Constructor = this.getXHRAPI();
            return new Constructor();
        },
        createMicrosoftXHR: function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        },
        getNetwork: function () {
            return net_info_1.Network;
        },
        createWebSocket: function (url) {
            var Constructor = this.getWebSocketAPI();
            return new Constructor(url);
        },
        createSocketRequest: function (method, url) {
            if (this.isXHRSupported()) {
                return this.HTTPFactory.createXHR(method, url);
            }
            else if (this.isXDRSupported(url.indexOf("https:") === 0)) {
                return this.HTTPFactory.createXDR(method, url);
            }
            else {
                throw "Cross-origin HTTP requests are not supported";
            }
        },
        isXHRSupported: function () {
            var Constructor = this.getXHRAPI();
            return Boolean(Constructor) && (new Constructor()).withCredentials !== undefined;
        },
        isXDRSupported: function (encrypted) {
            var protocol = encrypted ? "https:" : "http:";
            var documentProtocol = this.getProtocol();
            return Boolean((window['XDomainRequest'])) && documentProtocol === protocol;
        },
        addUnloadListener: function (listener) {
            if (window.addEventListener !== undefined) {
                window.addEventListener("unload", listener, false);
            }
            else if (window.attachEvent !== undefined) {
                window.attachEvent("onunload", listener);
            }
        },
        removeUnloadListener: function (listener) {
            if (window.addEventListener !== undefined) {
                window.removeEventListener("unload", listener, false);
            }
            else if (window.detachEvent !== undefined) {
                window.detachEvent("onunload", listener);
            }
        }
    };
    exports.__esModule = true;
    exports["default"] = Runtime;


  /***/ },
  /* 3 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var script_receiver_factory_1 = __webpack_require__(4);
    var defaults_1 = __webpack_require__(5);
    var dependency_loader_1 = __webpack_require__(6);
    exports.DependenciesReceivers = new script_receiver_factory_1.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers");
    exports.Dependencies = new dependency_loader_1["default"]({
        cdn_http: defaults_1["default"].cdn_http,
        cdn_https: defaults_1["default"].cdn_https,
        version: defaults_1["default"].VERSION,
        suffix: defaults_1["default"].dependency_suffix,
        receivers: exports.DependenciesReceivers
    });


  /***/ },
  /* 4 */
  /***/ function(module, exports) {

    "use strict";
    var ScriptReceiverFactory = (function () {
        function ScriptReceiverFactory(prefix, name) {
            this.lastId = 0;
            this.prefix = prefix;
            this.name = name;
        }
        ScriptReceiverFactory.prototype.create = function (callback) {
            this.lastId++;
            var number = this.lastId;
            var id = this.prefix + number;
            var name = this.name + "[" + number + "]";
            var called = false;
            var callbackWrapper = function () {
                if (!called) {
                    callback.apply(null, arguments);
                    called = true;
                }
            };
            this[number] = callbackWrapper;
            return { number: number, id: id, name: name, callback: callbackWrapper };
        };
        ScriptReceiverFactory.prototype.remove = function (receiver) {
            delete this[receiver.number];
        };
        return ScriptReceiverFactory;
    }());
    exports.ScriptReceiverFactory = ScriptReceiverFactory;
    exports.ScriptReceivers = new ScriptReceiverFactory("_pusher_script_", "Pusher.ScriptReceivers");


  /***/ },
  /* 5 */
  /***/ function(module, exports) {

    "use strict";
    var Defaults = {
        VERSION: "3.2.4",
        PROTOCOL: 7,
        host: 'ws.pusherapp.com',
        ws_port: 80,
        wss_port: 443,
        sockjs_host: 'sockjs.pusher.com',
        sockjs_http_port: 80,
        sockjs_https_port: 443,
        sockjs_path: "/pusher",
        stats_host: 'stats.pusher.com',
        channel_auth_endpoint: '/pusher/auth',
        channel_auth_transport: 'ajax',
        activity_timeout: 120000,
        pong_timeout: 30000,
        unavailable_timeout: 10000,
        cdn_http: 'http://js.pusher.com',
        cdn_https: 'https://js.pusher.com',
        dependency_suffix: ''
    };
    exports.__esModule = true;
    exports["default"] = Defaults;


  /***/ },
  /* 6 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var script_receiver_factory_1 = __webpack_require__(4);
    var runtime_1 = __webpack_require__(2);
    var DependencyLoader = (function () {
        function DependencyLoader(options) {
            this.options = options;
            this.receivers = options.receivers || script_receiver_factory_1.ScriptReceivers;
            this.loading = {};
        }
        DependencyLoader.prototype.load = function (name, options, callback) {
            var self = this;
            if (self.loading[name] && self.loading[name].length > 0) {
                self.loading[name].push(callback);
            }
            else {
                self.loading[name] = [callback];
                var request = runtime_1["default"].createScriptRequest(self.getPath(name, options));
                var receiver = self.receivers.create(function (error) {
                    self.receivers.remove(receiver);
                    if (self.loading[name]) {
                        var callbacks = self.loading[name];
                        delete self.loading[name];
                        var successCallback = function (wasSuccessful) {
                            if (!wasSuccessful) {
                                request.cleanup();
                            }
                        };
                        for (var i = 0; i < callbacks.length; i++) {
                            callbacks[i](error, successCallback);
                        }
                    }
                });
                request.send(receiver);
            }
        };
        DependencyLoader.prototype.getRoot = function (options) {
            var cdn;
            var protocol = runtime_1["default"].getDocument().location.protocol;
            if ((options && options.encrypted) || protocol === "https:") {
                cdn = this.options.cdn_https;
            }
            else {
                cdn = this.options.cdn_http;
            }
            return cdn.replace(/\/*$/, "") + "/" + this.options.version;
        };
        DependencyLoader.prototype.getPath = function (name, options) {
            return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
        };
        ;
        return DependencyLoader;
    }());
    exports.__esModule = true;
    exports["default"] = DependencyLoader;


  /***/ },
  /* 7 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var logger_1 = __webpack_require__(8);
    var runtime_1 = __webpack_require__(2);
    var ajax = function (context, socketId, callback) {
        var self = this, xhr;
        xhr = runtime_1["default"].createXHR();
        xhr.open("POST", self.options.authEndpoint, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        for (var headerName in this.authOptions.headers) {
            xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data, parsed = false;
                    try {
                        data = JSON.parse(xhr.responseText);
                        parsed = true;
                    }
                    catch (e) {
                        callback(true, 'JSON returned from webapp was invalid, yet status code was 200. Data was: ' + xhr.responseText);
                    }
                    if (parsed) {
                        callback(false, data);
                    }
                }
                else {
                    logger_1["default"].warn("Couldn't get auth info from your webapp", xhr.status);
                    callback(true, xhr.status);
                }
            }
        };
        xhr.send(this.composeQuery(socketId));
        return xhr;
    };
    exports.__esModule = true;
    exports["default"] = ajax;


  /***/ },
  /* 8 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var collections_1 = __webpack_require__(9);
    var pusher_1 = __webpack_require__(1);
    var Logger = {
        debug: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (!pusher_1["default"].log) {
                return;
            }
            pusher_1["default"].log(collections_1.stringify.apply(this, arguments));
        },
        warn: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var message = collections_1.stringify.apply(this, arguments);
            if ((window).console) {
                if ((window).console.warn) {
                    (window).console.warn(message);
                }
                else if ((window).console.log) {
                    (window).console.log(message);
                }
            }
            if (pusher_1["default"].log) {
                pusher_1["default"].log(message);
            }
        }
    };
    exports.__esModule = true;
    exports["default"] = Logger;


  /***/ },
  /* 9 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var base64_1 = __webpack_require__(10);
    var util_1 = __webpack_require__(11);
    function extend(target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < sources.length; i++) {
            var extensions = sources[i];
            for (var property in extensions) {
                if (extensions[property] && extensions[property].constructor &&
                    extensions[property].constructor === Object) {
                    target[property] = extend(target[property] || {}, extensions[property]);
                }
                else {
                    target[property] = extensions[property];
                }
            }
        }
        return target;
    }
    exports.extend = extend;
    function stringify() {
        var m = ["Pusher"];
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === "string") {
                m.push(arguments[i]);
            }
            else {
                m.push(safeJSONStringify(arguments[i]));
            }
        }
        return m.join(" : ");
    }
    exports.stringify = stringify;
    function arrayIndexOf(array, item) {
        var nativeIndexOf = Array.prototype.indexOf;
        if (array === null) {
            return -1;
        }
        if (nativeIndexOf && array.indexOf === nativeIndexOf) {
            return array.indexOf(item);
        }
        for (var i = 0, l = array.length; i < l; i++) {
            if (array[i] === item) {
                return i;
            }
        }
        return -1;
    }
    exports.arrayIndexOf = arrayIndexOf;
    function objectApply(object, f) {
        for (var key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                f(object[key], key, object);
            }
        }
    }
    exports.objectApply = objectApply;
    function keys(object) {
        var keys = [];
        objectApply(object, function (_, key) {
            keys.push(key);
        });
        return keys;
    }
    exports.keys = keys;
    function values(object) {
        var values = [];
        objectApply(object, function (value) {
            values.push(value);
        });
        return values;
    }
    exports.values = values;
    function apply(array, f, context) {
        for (var i = 0; i < array.length; i++) {
            f.call(context || (window), array[i], i, array);
        }
    }
    exports.apply = apply;
    function map(array, f) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            result.push(f(array[i], i, array, result));
        }
        return result;
    }
    exports.map = map;
    function mapObject(object, f) {
        var result = {};
        objectApply(object, function (value, key) {
            result[key] = f(value);
        });
        return result;
    }
    exports.mapObject = mapObject;
    function filter(array, test) {
        test = test || function (value) { return !!value; };
        var result = [];
        for (var i = 0; i < array.length; i++) {
            if (test(array[i], i, array, result)) {
                result.push(array[i]);
            }
        }
        return result;
    }
    exports.filter = filter;
    function filterObject(object, test) {
        var result = {};
        objectApply(object, function (value, key) {
            if ((test && test(value, key, object, result)) || Boolean(value)) {
                result[key] = value;
            }
        });
        return result;
    }
    exports.filterObject = filterObject;
    function flatten(object) {
        var result = [];
        objectApply(object, function (value, key) {
            result.push([key, value]);
        });
        return result;
    }
    exports.flatten = flatten;
    function any(array, test) {
        for (var i = 0; i < array.length; i++) {
            if (test(array[i], i, array)) {
                return true;
            }
        }
        return false;
    }
    exports.any = any;
    function all(array, test) {
        for (var i = 0; i < array.length; i++) {
            if (!test(array[i], i, array)) {
                return false;
            }
        }
        return true;
    }
    exports.all = all;
    function encodeParamsObject(data) {
        return mapObject(data, function (value) {
            if (typeof value === "object") {
                value = safeJSONStringify(value);
            }
            return encodeURIComponent(base64_1["default"](value.toString()));
        });
    }
    exports.encodeParamsObject = encodeParamsObject;
    function buildQueryString(data) {
        var params = filterObject(data, function (value) {
            return value !== undefined;
        });
        var query = map(flatten(encodeParamsObject(params)), util_1["default"].method("join", "=")).join("&");
        return query;
    }
    exports.buildQueryString = buildQueryString;
    function decycleObject(object) {
        var objects = [], paths = [];
        return (function derez(value, path) {
            var i, name, nu;
            switch (typeof value) {
                case 'object':
                    if (!value) {
                        return null;
                    }
                    for (i = 0; i < objects.length; i += 1) {
                        if (objects[i] === value) {
                            return { $ref: paths[i] };
                        }
                    }
                    objects.push(value);
                    paths.push(path);
                    if (Object.prototype.toString.apply(value) === '[object Array]') {
                        nu = [];
                        for (i = 0; i < value.length; i += 1) {
                            nu[i] = derez(value[i], path + '[' + i + ']');
                        }
                    }
                    else {
                        nu = {};
                        for (name in value) {
                            if (Object.prototype.hasOwnProperty.call(value, name)) {
                                nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
                            }
                        }
                    }
                    return nu;
                case 'number':
                case 'string':
                case 'boolean':
                    return value;
            }
        }(object, '$'));
    }
    exports.decycleObject = decycleObject;
    function safeJSONStringify(source) {
        try {
            return JSON.stringify(source);
        }
        catch (e) {
            return JSON.stringify(decycleObject(source));
        }
    }
    exports.safeJSONStringify = safeJSONStringify;


  /***/ },
  /* 10 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    function encode(s) {
        return btoa(utob(s));
    }
    exports.__esModule = true;
    exports["default"] = encode;
    var fromCharCode = String.fromCharCode;
    var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = {};
    for (var i = 0, l = b64chars.length; i < l; i++) {
        b64tab[b64chars.charAt(i)] = i;
    }
    var cb_utob = function (c) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c
            : cc < 0x800 ? fromCharCode(0xc0 | (cc >>> 6)) +
                fromCharCode(0x80 | (cc & 0x3f))
                : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
                    fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
                    fromCharCode(0x80 | (cc & 0x3f));
    };
    var utob = function (u) {
        return u.replace(/[^\x00-\x7F]/g, cb_utob);
    };
    var cb_encode = function (ccc) {
        var padlen = [0, 2, 1][ccc.length % 3];
        var ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0));
        var chars = [
            b64chars.charAt(ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = (window).btoa || function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };


  /***/ },
  /* 11 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var timers_1 = __webpack_require__(12);
    var Util = {
        now: function () {
            if (Date.now) {
                return Date.now();
            }
            else {
                return new Date().valueOf();
            }
        },
        defer: function (callback) {
            return new timers_1.OneOffTimer(0, callback);
        },
        method: function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var boundArguments = Array.prototype.slice.call(arguments, 1);
            return function (object) {
                return object[name].apply(object, boundArguments.concat(arguments));
            };
        }
    };
    exports.__esModule = true;
    exports["default"] = Util;


  /***/ },
  /* 12 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var abstract_timer_1 = __webpack_require__(13);
    function clearTimeout(timer) {
        (window).clearTimeout(timer);
    }
    function clearInterval(timer) {
        (window).clearInterval(timer);
    }
    var OneOffTimer = (function (_super) {
        __extends(OneOffTimer, _super);
        function OneOffTimer(delay, callback) {
            _super.call(this, setTimeout, clearTimeout, delay, function (timer) {
                callback();
                return null;
            });
        }
        return OneOffTimer;
    }(abstract_timer_1["default"]));
    exports.OneOffTimer = OneOffTimer;
    var PeriodicTimer = (function (_super) {
        __extends(PeriodicTimer, _super);
        function PeriodicTimer(delay, callback) {
            _super.call(this, setInterval, clearInterval, delay, function (timer) {
                callback();
                return timer;
            });
        }
        return PeriodicTimer;
    }(abstract_timer_1["default"]));
    exports.PeriodicTimer = PeriodicTimer;


  /***/ },
  /* 13 */
  /***/ function(module, exports) {

    "use strict";
    var Timer = (function () {
        function Timer(set, clear, delay, callback) {
            var _this = this;
            this.clear = clear;
            this.timer = set(function () {
                if (_this.timer) {
                    _this.timer = callback(_this.timer);
                }
            }, delay);
        }
        Timer.prototype.isRunning = function () {
            return this.timer !== null;
        };
        Timer.prototype.ensureAborted = function () {
            if (this.timer) {
                this.clear(this.timer);
                this.timer = null;
            }
        };
        return Timer;
    }());
    exports.__esModule = true;
    exports["default"] = Timer;


  /***/ },
  /* 14 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var logger_1 = __webpack_require__(8);
    var jsonp = function (context, socketId, callback) {
        if (this.authOptions.headers !== undefined) {
            logger_1["default"].warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
        }
        var callbackName = context.nextAuthCallbackID.toString();
        context.nextAuthCallbackID++;
        var document = context.getDocument();
        var script = document.createElement("script");
        context.auth_callbacks[callbackName] = function (data) {
            callback(false, data);
        };
        var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
        script.src = this.options.authEndpoint +
            '?callback=' +
            encodeURIComponent(callback_name) +
            '&' +
            this.composeQuery(socketId);
        var head = document.getElementsByTagName("head")[0] || document.documentElement;
        head.insertBefore(script, head.firstChild);
    };
    exports.__esModule = true;
    exports["default"] = jsonp;


  /***/ },
  /* 15 */
  /***/ function(module, exports) {

    "use strict";
    var ScriptRequest = (function () {
        function ScriptRequest(src) {
            this.src = src;
        }
        ScriptRequest.prototype.send = function (receiver) {
            var self = this;
            var errorString = "Error loading " + self.src;
            self.script = document.createElement("script");
            self.script.id = receiver.id;
            self.script.src = self.src;
            self.script.type = "text/javascript";
            self.script.charset = "UTF-8";
            if (self.script.addEventListener) {
                self.script.onerror = function () {
                    receiver.callback(errorString);
                };
                self.script.onload = function () {
                    receiver.callback(null);
                };
            }
            else {
                self.script.onreadystatechange = function () {
                    if (self.script.readyState === 'loaded' ||
                        self.script.readyState === 'complete') {
                        receiver.callback(null);
                    }
                };
            }
            if (self.script.async === undefined && document.attachEvent &&
                /opera/i.test(navigator.userAgent)) {
                self.errorScript = document.createElement("script");
                self.errorScript.id = receiver.id + "_error";
                self.errorScript.text = receiver.name + "('" + errorString + "');";
                self.script.async = self.errorScript.async = false;
            }
            else {
                self.script.async = true;
            }
            var head = document.getElementsByTagName('head')[0];
            head.insertBefore(self.script, head.firstChild);
            if (self.errorScript) {
                head.insertBefore(self.errorScript, self.script.nextSibling);
            }
        };
        ScriptRequest.prototype.cleanup = function () {
            if (this.script) {
                this.script.onload = this.script.onerror = null;
                this.script.onreadystatechange = null;
            }
            if (this.script && this.script.parentNode) {
                this.script.parentNode.removeChild(this.script);
            }
            if (this.errorScript && this.errorScript.parentNode) {
                this.errorScript.parentNode.removeChild(this.errorScript);
            }
            this.script = null;
            this.errorScript = null;
        };
        return ScriptRequest;
    }());
    exports.__esModule = true;
    exports["default"] = ScriptRequest;


  /***/ },
  /* 16 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var Collections = __webpack_require__(9);
    var runtime_1 = __webpack_require__(2);
    var JSONPRequest = (function () {
        function JSONPRequest(url, data) {
            this.url = url;
            this.data = data;
        }
        JSONPRequest.prototype.send = function (receiver) {
            if (this.request) {
                return;
            }
            var query = Collections.buildQueryString(this.data);
            var url = this.url + "/" + receiver.number + "?" + query;
            this.request = runtime_1["default"].createScriptRequest(url);
            this.request.send(receiver);
        };
        JSONPRequest.prototype.cleanup = function () {
            if (this.request) {
                this.request.cleanup();
            }
        };
        return JSONPRequest;
    }());
    exports.__esModule = true;
    exports["default"] = JSONPRequest;


  /***/ },
  /* 17 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var runtime_1 = __webpack_require__(2);
    var script_receiver_factory_1 = __webpack_require__(4);
    var getAgent = function (sender, encrypted) {
        return function (data, callback) {
            var scheme = "http" + (encrypted ? "s" : "") + "://";
            var url = scheme + (sender.host || sender.options.host) + sender.options.path;
            var request = runtime_1["default"].createJSONPRequest(url, data);
            var receiver = runtime_1["default"].ScriptReceivers.create(function (error, result) {
                script_receiver_factory_1.ScriptReceivers.remove(receiver);
                request.cleanup();
                if (result && result.host) {
                    sender.host = result.host;
                }
                if (callback) {
                    callback(error, result);
                }
            });
            request.send(receiver);
        };
    };
    var jsonp = {
        name: 'jsonp',
        getAgent: getAgent
    };
    exports.__esModule = true;
    exports["default"] = jsonp;


  /***/ },
  /* 18 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var transports_1 = __webpack_require__(19);
    var transport_1 = __webpack_require__(21);
    var URLSchemes = __webpack_require__(20);
    var runtime_1 = __webpack_require__(2);
    var dependencies_1 = __webpack_require__(3);
    var Collections = __webpack_require__(9);
    var SockJSTransport = new transport_1["default"]({
        file: "sockjs",
        urls: URLSchemes.sockjs,
        handlesActivityChecks: true,
        supportsPing: false,
        isSupported: function () {
            return true;
        },
        isInitialized: function () {
            return window.SockJS !== undefined;
        },
        getSocket: function (url, options) {
            return new window.SockJS(url, null, {
                js_path: dependencies_1.Dependencies.getPath("sockjs", {
                    encrypted: options.encrypted
                }),
                ignore_null_origin: options.ignoreNullOrigin
            });
        },
        beforeOpen: function (socket, path) {
            socket.send(JSON.stringify({
                path: path
            }));
        }
    });
    var xdrConfiguration = {
        isSupported: function (environment) {
            var yes = runtime_1["default"].isXDRSupported(environment.encrypted);
            return yes;
        }
    };
    var XDRStreamingTransport = new transport_1["default"](Collections.extend({}, transports_1.streamingConfiguration, xdrConfiguration));
    var XDRPollingTransport = new transport_1["default"](Collections.extend({}, transports_1.pollingConfiguration, xdrConfiguration));
    transports_1["default"].xdr_streaming = XDRStreamingTransport;
    transports_1["default"].xdr_polling = XDRPollingTransport;
    transports_1["default"].sockjs = SockJSTransport;
    exports.__esModule = true;
    exports["default"] = transports_1["default"];


  /***/ },
  /* 19 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var URLSchemes = __webpack_require__(20);
    var transport_1 = __webpack_require__(21);
    var Collections = __webpack_require__(9);
    var runtime_1 = __webpack_require__(2);
    var WSTransport = new transport_1["default"]({
        urls: URLSchemes.ws,
        handlesActivityChecks: false,
        supportsPing: false,
        isInitialized: function () {
            return Boolean(runtime_1["default"].getWebSocketAPI());
        },
        isSupported: function () {
            return Boolean(runtime_1["default"].getWebSocketAPI());
        },
        getSocket: function (url) {
            return runtime_1["default"].createWebSocket(url);
        }
    });
    var httpConfiguration = {
        urls: URLSchemes.http,
        handlesActivityChecks: false,
        supportsPing: true,
        isInitialized: function () {
            return true;
        }
    };
    exports.streamingConfiguration = Collections.extend({ getSocket: function (url) {
            return runtime_1["default"].HTTPFactory.createStreamingSocket(url);
        }
    }, httpConfiguration);
    exports.pollingConfiguration = Collections.extend({ getSocket: function (url) {
            return runtime_1["default"].HTTPFactory.createPollingSocket(url);
        }
    }, httpConfiguration);
    var xhrConfiguration = {
        isSupported: function () {
            return runtime_1["default"].isXHRSupported();
        }
    };
    var XHRStreamingTransport = new transport_1["default"](Collections.extend({}, exports.streamingConfiguration, xhrConfiguration));
    var XHRPollingTransport = new transport_1["default"](Collections.extend({}, exports.pollingConfiguration, xhrConfiguration));
    var Transports = {
        ws: WSTransport,
        xhr_streaming: XHRStreamingTransport,
        xhr_polling: XHRPollingTransport
    };
    exports.__esModule = true;
    exports["default"] = Transports;


  /***/ },
  /* 20 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var defaults_1 = __webpack_require__(5);
    function getGenericURL(baseScheme, params, path) {
        var scheme = baseScheme + (params.encrypted ? "s" : "");
        var host = params.encrypted ? params.hostEncrypted : params.hostUnencrypted;
        return scheme + "://" + host + path;
    }
    function getGenericPath(key, queryString) {
        var path = "/app/" + key;
        var query = "?protocol=" + defaults_1["default"].PROTOCOL +
            "&client=js" +
            "&version=" + defaults_1["default"].VERSION +
            (queryString ? ("&" + queryString) : "");
        return path + query;
    }
    exports.ws = {
        getInitial: function (key, params) {
            return getGenericURL("ws", params, getGenericPath(key, "flash=false"));
        }
    };
    exports.http = {
        getInitial: function (key, params) {
            var path = (params.httpPath || "/pusher") + getGenericPath(key);
            return getGenericURL("http", params, path);
        }
    };
    exports.sockjs = {
        getInitial: function (key, params) {
            return getGenericURL("http", params, params.httpPath || "/pusher");
        },
        getPath: function (key, params) {
            return getGenericPath(key);
        }
    };


  /***/ },
  /* 21 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var transport_connection_1 = __webpack_require__(22);
    var Transport = (function () {
        function Transport(hooks) {
            this.hooks = hooks;
        }
        Transport.prototype.isSupported = function (environment) {
            return this.hooks.isSupported(environment);
        };
        Transport.prototype.createConnection = function (name, priority, key, options) {
            return new transport_connection_1["default"](this.hooks, name, priority, key, options);
        };
        return Transport;
    }());
    exports.__esModule = true;
    exports["default"] = Transport;


  /***/ },
  /* 22 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var util_1 = __webpack_require__(11);
    var Collections = __webpack_require__(9);
    var dispatcher_1 = __webpack_require__(23);
    var logger_1 = __webpack_require__(8);
    var runtime_1 = __webpack_require__(2);
    var TransportConnection = (function (_super) {
        __extends(TransportConnection, _super);
        function TransportConnection(hooks, name, priority, key, options) {
            _super.call(this);
            this.initialize = runtime_1["default"].transportConnectionInitializer;
            this.hooks = hooks;
            this.name = name;
            this.priority = priority;
            this.key = key;
            this.options = options;
            this.state = "new";
            this.timeline = options.timeline;
            this.activityTimeout = options.activityTimeout;
            this.id = this.timeline.generateUniqueID();
        }
        TransportConnection.prototype.handlesActivityChecks = function () {
            return Boolean(this.hooks.handlesActivityChecks);
        };
        TransportConnection.prototype.supportsPing = function () {
            return Boolean(this.hooks.supportsPing);
        };
        TransportConnection.prototype.connect = function () {
            var _this = this;
            if (this.socket || this.state !== "initialized") {
                return false;
            }
            var url = this.hooks.urls.getInitial(this.key, this.options);
            try {
                this.socket = this.hooks.getSocket(url, this.options);
            }
            catch (e) {
                util_1["default"].defer(function () {
                    _this.onError(e);
                    _this.changeState("closed");
                });
                return false;
            }
            this.bindListeners();
            logger_1["default"].debug("Connecting", { transport: this.name, url: url });
            this.changeState("connecting");
            return true;
        };
        TransportConnection.prototype.close = function () {
            if (this.socket) {
                this.socket.close();
                return true;
            }
            else {
                return false;
            }
        };
        TransportConnection.prototype.send = function (data) {
            var _this = this;
            if (this.state === "open") {
                util_1["default"].defer(function () {
                    if (_this.socket) {
                        _this.socket.send(data);
                    }
                });
                return true;
            }
            else {
                return false;
            }
        };
        TransportConnection.prototype.ping = function () {
            if (this.state === "open" && this.supportsPing()) {
                this.socket.ping();
            }
        };
        TransportConnection.prototype.onOpen = function () {
            if (this.hooks.beforeOpen) {
                this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
            }
            this.changeState("open");
            this.socket.onopen = undefined;
        };
        TransportConnection.prototype.onError = function (error) {
            this.emit("error", { type: 'WebSocketError', error: error });
            this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
        };
        TransportConnection.prototype.onClose = function (closeEvent) {
            if (closeEvent) {
                this.changeState("closed", {
                    code: closeEvent.code,
                    reason: closeEvent.reason,
                    wasClean: closeEvent.wasClean
                });
            }
            else {
                this.changeState("closed");
            }
            this.unbindListeners();
            this.socket = undefined;
        };
        TransportConnection.prototype.onMessage = function (message) {
            this.emit("message", message);
        };
        TransportConnection.prototype.onActivity = function () {
            this.emit("activity");
        };
        TransportConnection.prototype.bindListeners = function () {
            var _this = this;
            this.socket.onopen = function () {
                _this.onOpen();
            };
            this.socket.onerror = function (error) {
                _this.onError(error);
            };
            this.socket.onclose = function (closeEvent) {
                _this.onClose(closeEvent);
            };
            this.socket.onmessage = function (message) {
                _this.onMessage(message);
            };
            if (this.supportsPing()) {
                this.socket.onactivity = function () { _this.onActivity(); };
            }
        };
        TransportConnection.prototype.unbindListeners = function () {
            if (this.socket) {
                this.socket.onopen = undefined;
                this.socket.onerror = undefined;
                this.socket.onclose = undefined;
                this.socket.onmessage = undefined;
                if (this.supportsPing()) {
                    this.socket.onactivity = undefined;
                }
            }
        };
        TransportConnection.prototype.changeState = function (state, params) {
            this.state = state;
            this.timeline.info(this.buildTimelineMessage({
                state: state,
                params: params
            }));
            this.emit(state, params);
        };
        TransportConnection.prototype.buildTimelineMessage = function (message) {
            return Collections.extend({ cid: this.id }, message);
        };
        return TransportConnection;
    }(dispatcher_1["default"]));
    exports.__esModule = true;
    exports["default"] = TransportConnection;


  /***/ },
  /* 23 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var callback_registry_1 = __webpack_require__(24);
    var Dispatcher = (function () {
        function Dispatcher(failThrough) {
            this.callbacks = new callback_registry_1["default"]();
            this.global_callbacks = [];
            this.failThrough = failThrough;
        }
        Dispatcher.prototype.bind = function (eventName, callback, context) {
            this.callbacks.add(eventName, callback, context);
            return this;
        };
        Dispatcher.prototype.bind_all = function (callback) {
            this.global_callbacks.push(callback);
            return this;
        };
        Dispatcher.prototype.unbind = function (eventName, callback, context) {
            this.callbacks.remove(eventName, callback, context);
            return this;
        };
        Dispatcher.prototype.unbind_all = function (eventName, callback) {
            this.callbacks.remove(eventName, callback);
            return this;
        };
        Dispatcher.prototype.emit = function (eventName, data) {
            var i;
            for (i = 0; i < this.global_callbacks.length; i++) {
                this.global_callbacks[i](eventName, data);
            }
            var callbacks = this.callbacks.get(eventName);
            if (callbacks && callbacks.length > 0) {
                for (i = 0; i < callbacks.length; i++) {
                    callbacks[i].fn.call(callbacks[i].context || (window), data);
                }
            }
            else if (this.failThrough) {
                this.failThrough(eventName, data);
            }
            return this;
        };
        return Dispatcher;
    }());
    exports.__esModule = true;
    exports["default"] = Dispatcher;


  /***/ },
  /* 24 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var Collections = __webpack_require__(9);
    var CallbackRegistry = (function () {
        function CallbackRegistry() {
            this._callbacks = {};
        }
        CallbackRegistry.prototype.get = function (name) {
            return this._callbacks[prefix(name)];
        };
        CallbackRegistry.prototype.add = function (name, callback, context) {
            var prefixedEventName = prefix(name);
            this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
            this._callbacks[prefixedEventName].push({
                fn: callback,
                context: context
            });
        };
        CallbackRegistry.prototype.remove = function (name, callback, context) {
            if (!name && !callback && !context) {
                this._callbacks = {};
                return;
            }
            var names = name ? [prefix(name)] : Collections.keys(this._callbacks);
            if (callback || context) {
                this.removeCallback(names, callback, context);
            }
            else {
                this.removeAllCallbacks(names);
            }
        };
        CallbackRegistry.prototype.removeCallback = function (names, callback, context) {
            Collections.apply(names, function (name) {
                this._callbacks[name] = Collections.filter(this._callbacks[name] || [], function (binding) {
                    return (callback && callback !== binding.fn) ||
                        (context && context !== binding.context);
                });
                if (this._callbacks[name].length === 0) {
                    delete this._callbacks[name];
                }
            }, this);
        };
        CallbackRegistry.prototype.removeAllCallbacks = function (names) {
            Collections.apply(names, function (name) {
                delete this._callbacks[name];
            }, this);
        };
        return CallbackRegistry;
    }());
    exports.__esModule = true;
    exports["default"] = CallbackRegistry;
    function prefix(name) {
        return "_" + name;
    }


  /***/ },
  /* 25 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var dispatcher_1 = __webpack_require__(23);
    var NetInfo = (function (_super) {
        __extends(NetInfo, _super);
        function NetInfo() {
            _super.call(this);
            var self = this;
            if (window.addEventListener !== undefined) {
                window.addEventListener("online", function () {
                    self.emit('online');
                }, false);
                window.addEventListener("offline", function () {
                    self.emit('offline');
                }, false);
            }
        }
        NetInfo.prototype.isOnline = function () {
            if (window.navigator.onLine === undefined) {
                return true;
            }
            else {
                return window.navigator.onLine;
            }
        };
        return NetInfo;
    }(dispatcher_1["default"]));
    exports.NetInfo = NetInfo;
    exports.Network = new NetInfo();


  /***/ },
  /* 26 */
  /***/ function(module, exports) {

    "use strict";
    var getDefaultStrategy = function (config) {
        var wsStrategy;
        if (config.encrypted) {
            wsStrategy = [
                ":best_connected_ever",
                ":ws_loop",
                [":delayed", 2000, [":http_fallback_loop"]]
            ];
        }
        else {
            wsStrategy = [
                ":best_connected_ever",
                ":ws_loop",
                [":delayed", 2000, [":wss_loop"]],
                [":delayed", 5000, [":http_fallback_loop"]]
            ];
        }
        return [
            [":def", "ws_options", {
                    hostUnencrypted: config.wsHost + ":" + config.wsPort,
                    hostEncrypted: config.wsHost + ":" + config.wssPort
                }],
            [":def", "wss_options", [":extend", ":ws_options", {
                        encrypted: true
                    }]],
            [":def", "sockjs_options", {
                    hostUnencrypted: config.httpHost + ":" + config.httpPort,
                    hostEncrypted: config.httpHost + ":" + config.httpsPort,
                    httpPath: config.httpPath
                }],
            [":def", "timeouts", {
                    loop: true,
                    timeout: 15000,
                    timeoutLimit: 60000
                }],
            [":def", "ws_manager", [":transport_manager", {
                        lives: 2,
                        minPingDelay: 10000,
                        maxPingDelay: config.activity_timeout
                    }]],
            [":def", "streaming_manager", [":transport_manager", {
                        lives: 2,
                        minPingDelay: 10000,
                        maxPingDelay: config.activity_timeout
                    }]],
            [":def_transport", "ws", "ws", 3, ":ws_options", ":ws_manager"],
            [":def_transport", "wss", "ws", 3, ":wss_options", ":ws_manager"],
            [":def_transport", "sockjs", "sockjs", 1, ":sockjs_options"],
            [":def_transport", "xhr_streaming", "xhr_streaming", 1, ":sockjs_options", ":streaming_manager"],
            [":def_transport", "xdr_streaming", "xdr_streaming", 1, ":sockjs_options", ":streaming_manager"],
            [":def_transport", "xhr_polling", "xhr_polling", 1, ":sockjs_options"],
            [":def_transport", "xdr_polling", "xdr_polling", 1, ":sockjs_options"],
            [":def", "ws_loop", [":sequential", ":timeouts", ":ws"]],
            [":def", "wss_loop", [":sequential", ":timeouts", ":wss"]],
            [":def", "sockjs_loop", [":sequential", ":timeouts", ":sockjs"]],
            [":def", "streaming_loop", [":sequential", ":timeouts",
                    [":if", [":is_supported", ":xhr_streaming"],
                        ":xhr_streaming",
                        ":xdr_streaming"
                    ]
                ]],
            [":def", "polling_loop", [":sequential", ":timeouts",
                    [":if", [":is_supported", ":xhr_polling"],
                        ":xhr_polling",
                        ":xdr_polling"
                    ]
                ]],
            [":def", "http_loop", [":if", [":is_supported", ":streaming_loop"], [
                        ":best_connected_ever",
                        ":streaming_loop",
                        [":delayed", 4000, [":polling_loop"]]
                    ], [
                        ":polling_loop"
                    ]]],
            [":def", "http_fallback_loop",
                [":if", [":is_supported", ":http_loop"], [
                        ":http_loop"
                    ], [
                        ":sockjs_loop"
                    ]]
            ],
            [":def", "strategy",
                [":cached", 1800000,
                    [":first_connected",
                        [":if", [":is_supported", ":ws"],
                            wsStrategy,
                            ":http_fallback_loop"
                        ]
                    ]
                ]
            ]
        ];
    };
    exports.__esModule = true;
    exports["default"] = getDefaultStrategy;


  /***/ },
  /* 27 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var dependencies_1 = __webpack_require__(3);
    function default_1() {
        var self = this;
        self.timeline.info(self.buildTimelineMessage({
            transport: self.name + (self.options.encrypted ? "s" : "")
        }));
        if (self.hooks.isInitialized()) {
            self.changeState("initialized");
        }
        else if (self.hooks.file) {
            self.changeState("initializing");
            dependencies_1.Dependencies.load(self.hooks.file, { encrypted: self.options.encrypted }, function (error, callback) {
                if (self.hooks.isInitialized()) {
                    self.changeState("initialized");
                    callback(true);
                }
                else {
                    if (error) {
                        self.onError(error);
                    }
                    self.onClose();
                    callback(false);
                }
            });
        }
        else {
            self.onClose();
        }
    }
    exports.__esModule = true;
    exports["default"] = default_1;


  /***/ },
  /* 28 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var http_xdomain_request_1 = __webpack_require__(29);
    var http_1 = __webpack_require__(31);
    http_1["default"].createXDR = function (method, url) {
        return this.createRequest(http_xdomain_request_1["default"], method, url);
    };
    exports.__esModule = true;
    exports["default"] = http_1["default"];


  /***/ },
  /* 29 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var Errors = __webpack_require__(30);
    var hooks = {
        getRequest: function (socket) {
            var xdr = new window.XDomainRequest();
            xdr.ontimeout = function () {
                socket.emit("error", new Errors.RequestTimedOut());
                socket.close();
            };
            xdr.onerror = function (e) {
                socket.emit("error", e);
                socket.close();
            };
            xdr.onprogress = function () {
                if (xdr.responseText && xdr.responseText.length > 0) {
                    socket.onChunk(200, xdr.responseText);
                }
            };
            xdr.onload = function () {
                if (xdr.responseText && xdr.responseText.length > 0) {
                    socket.onChunk(200, xdr.responseText);
                }
                socket.emit("finished", 200);
                socket.close();
            };
            return xdr;
        },
        abortRequest: function (xdr) {
            xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
            xdr.abort();
        }
    };
    exports.__esModule = true;
    exports["default"] = hooks;


  /***/ },
  /* 30 */
  /***/ function(module, exports) {

    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var BadEventName = (function (_super) {
        __extends(BadEventName, _super);
        function BadEventName() {
            _super.apply(this, arguments);
        }
        return BadEventName;
    }(Error));
    exports.BadEventName = BadEventName;
    var RequestTimedOut = (function (_super) {
        __extends(RequestTimedOut, _super);
        function RequestTimedOut() {
            _super.apply(this, arguments);
        }
        return RequestTimedOut;
    }(Error));
    exports.RequestTimedOut = RequestTimedOut;
    var TransportPriorityTooLow = (function (_super) {
        __extends(TransportPriorityTooLow, _super);
        function TransportPriorityTooLow() {
            _super.apply(this, arguments);
        }
        return TransportPriorityTooLow;
    }(Error));
    exports.TransportPriorityTooLow = TransportPriorityTooLow;
    var TransportClosed = (function (_super) {
        __extends(TransportClosed, _super);
        function TransportClosed() {
            _super.apply(this, arguments);
        }
        return TransportClosed;
    }(Error));
    exports.TransportClosed = TransportClosed;
    var UnsupportedTransport = (function (_super) {
        __extends(UnsupportedTransport, _super);
        function UnsupportedTransport() {
            _super.apply(this, arguments);
        }
        return UnsupportedTransport;
    }(Error));
    exports.UnsupportedTransport = UnsupportedTransport;
    var UnsupportedStrategy = (function (_super) {
        __extends(UnsupportedStrategy, _super);
        function UnsupportedStrategy() {
            _super.apply(this, arguments);
        }
        return UnsupportedStrategy;
    }(Error));
    exports.UnsupportedStrategy = UnsupportedStrategy;


  /***/ },
  /* 31 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var http_request_1 = __webpack_require__(32);
    var http_socket_1 = __webpack_require__(33);
    var http_streaming_socket_1 = __webpack_require__(35);
    var http_polling_socket_1 = __webpack_require__(36);
    var http_xhr_request_1 = __webpack_require__(37);
    var HTTP = {
        createStreamingSocket: function (url) {
            return this.createSocket(http_streaming_socket_1["default"], url);
        },
        createPollingSocket: function (url) {
            return this.createSocket(http_polling_socket_1["default"], url);
        },
        createSocket: function (hooks, url) {
            return new http_socket_1["default"](hooks, url);
        },
        createXHR: function (method, url) {
            return this.createRequest(http_xhr_request_1["default"], method, url);
        },
        createRequest: function (hooks, method, url) {
            return new http_request_1["default"](hooks, method, url);
        }
    };
    exports.__esModule = true;
    exports["default"] = HTTP;


  /***/ },
  /* 32 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var runtime_1 = __webpack_require__(2);
    var dispatcher_1 = __webpack_require__(23);
    var MAX_BUFFER_LENGTH = 256 * 1024;
    var HTTPRequest = (function (_super) {
        __extends(HTTPRequest, _super);
        function HTTPRequest(hooks, method, url) {
            _super.call(this);
            this.hooks = hooks;
            this.method = method;
            this.url = url;
        }
        HTTPRequest.prototype.start = function (payload) {
            var _this = this;
            this.position = 0;
            this.xhr = this.hooks.getRequest(this);
            this.unloader = function () {
                _this.close();
            };
            runtime_1["default"].addUnloadListener(this.unloader);
            this.xhr.open(this.method, this.url, true);
            if (this.xhr.setRequestHeader) {
                this.xhr.setRequestHeader("Content-Type", "application/json");
            }
            this.xhr.send(payload);
        };
        HTTPRequest.prototype.close = function () {
            if (this.unloader) {
                runtime_1["default"].removeUnloadListener(this.unloader);
                this.unloader = null;
            }
            if (this.xhr) {
                this.hooks.abortRequest(this.xhr);
                this.xhr = null;
            }
        };
        HTTPRequest.prototype.onChunk = function (status, data) {
            while (true) {
                var chunk = this.advanceBuffer(data);
                if (chunk) {
                    this.emit("chunk", { status: status, data: chunk });
                }
                else {
                    break;
                }
            }
            if (this.isBufferTooLong(data)) {
                this.emit("buffer_too_long");
            }
        };
        HTTPRequest.prototype.advanceBuffer = function (buffer) {
            var unreadData = buffer.slice(this.position);
            var endOfLinePosition = unreadData.indexOf("\n");
            if (endOfLinePosition !== -1) {
                this.position += endOfLinePosition + 1;
                return unreadData.slice(0, endOfLinePosition);
            }
            else {
                return null;
            }
        };
        HTTPRequest.prototype.isBufferTooLong = function (buffer) {
            return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
        };
        return HTTPRequest;
    }(dispatcher_1["default"]));
    exports.__esModule = true;
    exports["default"] = HTTPRequest;


  /***/ },
  /* 33 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var state_1 = __webpack_require__(34);
    var util_1 = __webpack_require__(11);
    var runtime_1 = __webpack_require__(2);
    var autoIncrement = 1;
    var HTTPSocket = (function () {
        function HTTPSocket(hooks, url) {
            this.hooks = hooks;
            this.session = randomNumber(1000) + "/" + randomString(8);
            this.location = getLocation(url);
            this.readyState = state_1["default"].CONNECTING;
            this.openStream();
        }
        HTTPSocket.prototype.send = function (payload) {
            return this.sendRaw(JSON.stringify([payload]));
        };
        HTTPSocket.prototype.ping = function () {
            this.hooks.sendHeartbeat(this);
        };
        HTTPSocket.prototype.close = function (code, reason) {
            this.onClose(code, reason, true);
        };
        HTTPSocket.prototype.sendRaw = function (payload) {
            if (this.readyState === state_1["default"].OPEN) {
                try {
                    runtime_1["default"].createSocketRequest("POST", getUniqueURL(getSendURL(this.location, this.session))).start(payload);
                    return true;
                }
                catch (e) {
                    return false;
                }
            }
            else {
                return false;
            }
        };
        HTTPSocket.prototype.reconnect = function () {
            this.closeStream();
            this.openStream();
        };
        ;
        HTTPSocket.prototype.onClose = function (code, reason, wasClean) {
            this.closeStream();
            this.readyState = state_1["default"].CLOSED;
            if (this.onclose) {
                this.onclose({
                    code: code,
                    reason: reason,
                    wasClean: wasClean
                });
            }
        };
        HTTPSocket.prototype.onChunk = function (chunk) {
            if (chunk.status !== 200) {
                return;
            }
            if (this.readyState === state_1["default"].OPEN) {
                this.onActivity();
            }
            var payload;
            var type = chunk.data.slice(0, 1);
            switch (type) {
                case 'o':
                    payload = JSON.parse(chunk.data.slice(1) || '{}');
                    this.onOpen(payload);
                    break;
                case 'a':
                    payload = JSON.parse(chunk.data.slice(1) || '[]');
                    for (var i = 0; i < payload.length; i++) {
                        this.onEvent(payload[i]);
                    }
                    break;
                case 'm':
                    payload = JSON.parse(chunk.data.slice(1) || 'null');
                    this.onEvent(payload);
                    break;
                case 'h':
                    this.hooks.onHeartbeat(this);
                    break;
                case 'c':
                    payload = JSON.parse(chunk.data.slice(1) || '[]');
                    this.onClose(payload[0], payload[1], true);
                    break;
            }
        };
        HTTPSocket.prototype.onOpen = function (options) {
            if (this.readyState === state_1["default"].CONNECTING) {
                if (options && options.hostname) {
                    this.location.base = replaceHost(this.location.base, options.hostname);
                }
                this.readyState = state_1["default"].OPEN;
                if (this.onopen) {
                    this.onopen();
                }
            }
            else {
                this.onClose(1006, "Server lost session", true);
            }
        };
        HTTPSocket.prototype.onEvent = function (event) {
            if (this.readyState === state_1["default"].OPEN && this.onmessage) {
                this.onmessage({ data: event });
            }
        };
        HTTPSocket.prototype.onActivity = function () {
            if (this.onactivity) {
                this.onactivity();
            }
        };
        HTTPSocket.prototype.onError = function (error) {
            if (this.onerror) {
                this.onerror(error);
            }
        };
        HTTPSocket.prototype.openStream = function () {
            var _this = this;
            this.stream = runtime_1["default"].createSocketRequest("POST", getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
            this.stream.bind("chunk", function (chunk) {
                _this.onChunk(chunk);
            });
            this.stream.bind("finished", function (status) {
                _this.hooks.onFinished(_this, status);
            });
            this.stream.bind("buffer_too_long", function () {
                _this.reconnect();
            });
            try {
                this.stream.start();
            }
            catch (error) {
                util_1["default"].defer(function () {
                    _this.onError(error);
                    _this.onClose(1006, "Could not start streaming", false);
                });
            }
        };
        HTTPSocket.prototype.closeStream = function () {
            if (this.stream) {
                this.stream.unbind_all();
                this.stream.close();
                this.stream = null;
            }
        };
        return HTTPSocket;
    }());
    function getLocation(url) {
        var parts = /([^\?]*)\/*(\??.*)/.exec(url);
        return {
            base: parts[1],
            queryString: parts[2]
        };
    }
    function getSendURL(url, session) {
        return url.base + "/" + session + "/xhr_send";
    }
    function getUniqueURL(url) {
        var separator = (url.indexOf('?') === -1) ? "?" : "&";
        return url + separator + "t=" + (+new Date()) + "&n=" + autoIncrement++;
    }
    function replaceHost(url, hostname) {
        var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
        return urlParts[1] + hostname + urlParts[3];
    }
    function randomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    function randomString(length) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result.push(randomNumber(32).toString(32));
        }
        return result.join('');
    }
    exports.__esModule = true;
    exports["default"] = HTTPSocket;


  /***/ },
  /* 34 */
  /***/ function(module, exports) {

    "use strict";
    var State;
    (function (State) {
        State[State["CONNECTING"] = 0] = "CONNECTING";
        State[State["OPEN"] = 1] = "OPEN";
        State[State["CLOSED"] = 3] = "CLOSED";
    })(State || (State = {}));
    exports.__esModule = true;
    exports["default"] = State;


  /***/ },
  /* 35 */
  /***/ function(module, exports) {

    "use strict";
    var hooks = {
        getReceiveURL: function (url, session) {
            return url.base + "/" + session + "/xhr_streaming" + url.queryString;
        },
        onHeartbeat: function (socket) {
            socket.sendRaw("[]");
        },
        sendHeartbeat: function (socket) {
            socket.sendRaw("[]");
        },
        onFinished: function (socket, status) {
            socket.onClose(1006, "Connection interrupted (" + status + ")", false);
        }
    };
    exports.__esModule = true;
    exports["default"] = hooks;


  /***/ },
  /* 36 */
  /***/ function(module, exports) {

    "use strict";
    var hooks = {
        getReceiveURL: function (url, session) {
            return url.base + "/" + session + "/xhr" + url.queryString;
        },
        onHeartbeat: function () {
        },
        sendHeartbeat: function (socket) {
            socket.sendRaw("[]");
        },
        onFinished: function (socket, status) {
            if (status === 200) {
                socket.reconnect();
            }
            else {
                socket.onClose(1006, "Connection interrupted (" + status + ")", false);
            }
        }
    };
    exports.__esModule = true;
    exports["default"] = hooks;


  /***/ },
  /* 37 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var runtime_1 = __webpack_require__(2);
    var hooks = {
        getRequest: function (socket) {
            var Constructor = runtime_1["default"].getXHRAPI();
            var xhr = new Constructor();
            xhr.onreadystatechange = xhr.onprogress = function () {
                switch (xhr.readyState) {
                    case 3:
                        if (xhr.responseText && xhr.responseText.length > 0) {
                            socket.onChunk(xhr.status, xhr.responseText);
                        }
                        break;
                    case 4:
                        if (xhr.responseText && xhr.responseText.length > 0) {
                            socket.onChunk(xhr.status, xhr.responseText);
                        }
                        socket.emit("finished", xhr.status);
                        socket.close();
                        break;
                }
            };
            return xhr;
        },
        abortRequest: function (xhr) {
            xhr.onreadystatechange = null;
            xhr.abort();
        }
    };
    exports.__esModule = true;
    exports["default"] = hooks;


  /***/ },
  /* 38 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var Collections = __webpack_require__(9);
    var util_1 = __webpack_require__(11);
    var level_1 = __webpack_require__(39);
    var Timeline = (function () {
        function Timeline(key, session, options) {
            this.key = key;
            this.session = session;
            this.events = [];
            this.options = options || {};
            this.sent = 0;
            this.uniqueID = 0;
        }
        Timeline.prototype.log = function (level, event) {
            if (level <= this.options.level) {
                this.events.push(Collections.extend({}, event, { timestamp: util_1["default"].now() }));
                if (this.options.limit && this.events.length > this.options.limit) {
                    this.events.shift();
                }
            }
        };
        Timeline.prototype.error = function (event) {
            this.log(level_1["default"].ERROR, event);
        };
        Timeline.prototype.info = function (event) {
            this.log(level_1["default"].INFO, event);
        };
        Timeline.prototype.debug = function (event) {
            this.log(level_1["default"].DEBUG, event);
        };
        Timeline.prototype.isEmpty = function () {
            return this.events.length === 0;
        };
        Timeline.prototype.send = function (sendfn, callback) {
            var _this = this;
            var data = Collections.extend({
                session: this.session,
                bundle: this.sent + 1,
                key: this.key,
                lib: "js",
                version: this.options.version,
                cluster: this.options.cluster,
                features: this.options.features,
                timeline: this.events
            }, this.options.params);
            this.events = [];
            sendfn(data, function (error, result) {
                if (!error) {
                    _this.sent++;
                }
                if (callback) {
                    callback(error, result);
                }
            });
            return true;
        };
        Timeline.prototype.generateUniqueID = function () {
            this.uniqueID++;
            return this.uniqueID;
        };
        return Timeline;
    }());
    exports.__esModule = true;
    exports["default"] = Timeline;


  /***/ },
  /* 39 */
  /***/ function(module, exports) {

    "use strict";
    var TimelineLevel;
    (function (TimelineLevel) {
        TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
        TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
        TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
    })(TimelineLevel || (TimelineLevel = {}));
    exports.__esModule = true;
    exports["default"] = TimelineLevel;


  /***/ },
  /* 40 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var Collections = __webpack_require__(9);
    var util_1 = __webpack_require__(11);
    var transport_manager_1 = __webpack_require__(41);
    var Errors = __webpack_require__(30);
    var transport_strategy_1 = __webpack_require__(55);
    var sequential_strategy_1 = __webpack_require__(56);
    var best_connected_ever_strategy_1 = __webpack_require__(57);
    var cached_strategy_1 = __webpack_require__(58);
    var delayed_strategy_1 = __webpack_require__(59);
    var if_strategy_1 = __webpack_require__(60);
    var first_connected_strategy_1 = __webpack_require__(61);
    var runtime_1 = __webpack_require__(2);
    var Transports = runtime_1["default"].Transports;
    exports.build = function (scheme, options) {
        var context = Collections.extend({}, globalContext, options);
        return evaluate(scheme, context)[1].strategy;
    };
    var UnsupportedStrategy = {
        isSupported: function () {
            return false;
        },
        connect: function (_, callback) {
            var deferred = util_1["default"].defer(function () {
                callback(new Errors.UnsupportedStrategy());
            });
            return {
                abort: function () {
                    deferred.ensureAborted();
                },
                forceMinPriority: function () { }
            };
        }
    };
    function returnWithOriginalContext(f) {
        return function (context) {
            return [f.apply(this, arguments), context];
        };
    }
    var globalContext = {
        extend: function (context, first, second) {
            return [Collections.extend({}, first, second), context];
        },
        def: function (context, name, value) {
            if (context[name] !== undefined) {
                throw "Redefining symbol " + name;
            }
            context[name] = value;
            return [undefined, context];
        },
        def_transport: function (context, name, type, priority, options, manager) {
            var transportClass = Transports[type];
            if (!transportClass) {
                throw new Errors.UnsupportedTransport(type);
            }
            var enabled = (!context.enabledTransports ||
                Collections.arrayIndexOf(context.enabledTransports, name) !== -1) &&
                (!context.disabledTransports ||
                    Collections.arrayIndexOf(context.disabledTransports, name) === -1);
            var transport;
            if (enabled) {
                transport = new transport_strategy_1["default"](name, priority, manager ? manager.getAssistant(transportClass) : transportClass, Collections.extend({
                    key: context.key,
                    encrypted: context.encrypted,
                    timeline: context.timeline,
                    ignoreNullOrigin: context.ignoreNullOrigin
                }, options));
            }
            else {
                transport = UnsupportedStrategy;
            }
            var newContext = context.def(context, name, transport)[1];
            newContext.Transports = context.Transports || {};
            newContext.Transports[name] = transport;
            return [undefined, newContext];
        },
        transport_manager: returnWithOriginalContext(function (_, options) {
            return new transport_manager_1["default"](options);
        }),
        sequential: returnWithOriginalContext(function (_, options) {
            var strategies = Array.prototype.slice.call(arguments, 2);
            return new sequential_strategy_1["default"](strategies, options);
        }),
        cached: returnWithOriginalContext(function (context, ttl, strategy) {
            return new cached_strategy_1["default"](strategy, context.Transports, {
                ttl: ttl,
                timeline: context.timeline,
                encrypted: context.encrypted
            });
        }),
        first_connected: returnWithOriginalContext(function (_, strategy) {
            return new first_connected_strategy_1["default"](strategy);
        }),
        best_connected_ever: returnWithOriginalContext(function () {
            var strategies = Array.prototype.slice.call(arguments, 1);
            return new best_connected_ever_strategy_1["default"](strategies);
        }),
        delayed: returnWithOriginalContext(function (_, delay, strategy) {
            return new delayed_strategy_1["default"](strategy, { delay: delay });
        }),
        "if": returnWithOriginalContext(function (_, test, trueBranch, falseBranch) {
            return new if_strategy_1["default"](test, trueBranch, falseBranch);
        }),
        is_supported: returnWithOriginalContext(function (_, strategy) {
            return function () {
                return strategy.isSupported();
            };
        })
    };
    function isSymbol(expression) {
        return (typeof expression === "string") && expression.charAt(0) === ":";
    }
    function getSymbolValue(expression, context) {
        return context[expression.slice(1)];
    }
    function evaluateListOfExpressions(expressions, context) {
        if (expressions.length === 0) {
            return [[], context];
        }
        var head = evaluate(expressions[0], context);
        var tail = evaluateListOfExpressions(expressions.slice(1), head[1]);
        return [[head[0]].concat(tail[0]), tail[1]];
    }
    function evaluateString(expression, context) {
        if (!isSymbol(expression)) {
            return [expression, context];
        }
        var value = getSymbolValue(expression, context);
        if (value === undefined) {
            throw "Undefined symbol " + expression;
        }
        return [value, context];
    }
    function evaluateArray(expression, context) {
        if (isSymbol(expression[0])) {
            var f = getSymbolValue(expression[0], context);
            if (expression.length > 1) {
                if (typeof f !== "function") {
                    throw "Calling non-function " + expression[0];
                }
                var args = [Collections.extend({}, context)].concat(Collections.map(expression.slice(1), function (arg) {
                    return evaluate(arg, Collections.extend({}, context))[0];
                }));
                return f.apply(this, args);
            }
            else {
                return [f, context];
            }
        }
        else {
            return evaluateListOfExpressions(expression, context);
        }
    }
    function evaluate(expression, context) {
        if (typeof expression === "string") {
            return evaluateString(expression, context);
        }
        else if (typeof expression === "object") {
            if (expression instanceof Array && expression.length > 0) {
                return evaluateArray(expression, context);
            }
        }
        return [expression, context];
    }


  /***/ },
  /* 41 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var factory_1 = __webpack_require__(42);
    var TransportManager = (function () {
        function TransportManager(options) {
            this.options = options || {};
            this.livesLeft = this.options.lives || Infinity;
        }
        TransportManager.prototype.getAssistant = function (transport) {
            return factory_1["default"].createAssistantToTheTransportManager(this, transport, {
                minPingDelay: this.options.minPingDelay,
                maxPingDelay: this.options.maxPingDelay
            });
        };
        TransportManager.prototype.isAlive = function () {
            return this.livesLeft > 0;
        };
        TransportManager.prototype.reportDeath = function () {
            this.livesLeft -= 1;
        };
        return TransportManager;
    }());
    exports.__esModule = true;
    exports["default"] = TransportManager;


  /***/ },
  /* 42 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var assistant_to_the_transport_manager_1 = __webpack_require__(43);
    var handshake_1 = __webpack_require__(44);
    var pusher_authorizer_1 = __webpack_require__(47);
    var timeline_sender_1 = __webpack_require__(48);
    var presence_channel_1 = __webpack_require__(49);
    var private_channel_1 = __webpack_require__(50);
    var channel_1 = __webpack_require__(51);
    var connection_manager_1 = __webpack_require__(53);
    var channels_1 = __webpack_require__(54);
    var Factory = {
        createChannels: function () {
            return new channels_1["default"]();
        },
        createConnectionManager: function (key, options) {
            return new connection_manager_1["default"](key, options);
        },
        createChannel: function (name, pusher) {
            return new channel_1["default"](name, pusher);
        },
        createPrivateChannel: function (name, pusher) {
            return new private_channel_1["default"](name, pusher);
        },
        createPresenceChannel: function (name, pusher) {
            return new presence_channel_1["default"](name, pusher);
        },
        createTimelineSender: function (timeline, options) {
            return new timeline_sender_1["default"](timeline, options);
        },
        createAuthorizer: function (channel, options) {
            return new pusher_authorizer_1["default"](channel, options);
        },
        createHandshake: function (transport, callback) {
            return new handshake_1["default"](transport, callback);
        },
        createAssistantToTheTransportManager: function (manager, transport, options) {
            return new assistant_to_the_transport_manager_1["default"](manager, transport, options);
        }
    };
    exports.__esModule = true;
    exports["default"] = Factory;


  /***/ },
  /* 43 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var util_1 = __webpack_require__(11);
    var Collections = __webpack_require__(9);
    var AssistantToTheTransportManager = (function () {
        function AssistantToTheTransportManager(manager, transport, options) {
            this.manager = manager;
            this.transport = transport;
            this.minPingDelay = options.minPingDelay;
            this.maxPingDelay = options.maxPingDelay;
            this.pingDelay = undefined;
        }
        AssistantToTheTransportManager.prototype.createConnection = function (name, priority, key, options) {
            var _this = this;
            options = Collections.extend({}, options, {
                activityTimeout: this.pingDelay
            });
            var connection = this.transport.createConnection(name, priority, key, options);
            var openTimestamp = null;
            var onOpen = function () {
                connection.unbind("open", onOpen);
                connection.bind("closed", onClosed);
                openTimestamp = util_1["default"].now();
            };
            var onClosed = function (closeEvent) {
                connection.unbind("closed", onClosed);
                if (closeEvent.code === 1002 || closeEvent.code === 1003) {
                    _this.manager.reportDeath();
                }
                else if (!closeEvent.wasClean && openTimestamp) {
                    var lifespan = util_1["default"].now() - openTimestamp;
                    if (lifespan < 2 * _this.maxPingDelay) {
                        _this.manager.reportDeath();
                        _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
                    }
                }
            };
            connection.bind("open", onOpen);
            return connection;
        };
        AssistantToTheTransportManager.prototype.isSupported = function (environment) {
            return this.manager.isAlive() && this.transport.isSupported(environment);
        };
        return AssistantToTheTransportManager;
    }());
    exports.__esModule = true;
    exports["default"] = AssistantToTheTransportManager;


  /***/ },
  /* 44 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var Collections = __webpack_require__(9);
    var Protocol = __webpack_require__(45);
    var connection_1 = __webpack_require__(46);
    var Handshake = (function () {
        function Handshake(transport, callback) {
            this.transport = transport;
            this.callback = callback;
            this.bindListeners();
        }
        Handshake.prototype.close = function () {
            this.unbindListeners();
            this.transport.close();
        };
        Handshake.prototype.bindListeners = function () {
            var _this = this;
            this.onMessage = function (m) {
                _this.unbindListeners();
                var result;
                try {
                    result = Protocol.processHandshake(m);
                }
                catch (e) {
                    _this.finish("error", { error: e });
                    _this.transport.close();
                    return;
                }
                if (result.action === "connected") {
                    _this.finish("connected", {
                        connection: new connection_1["default"](result.id, _this.transport),
                        activityTimeout: result.activityTimeout
                    });
                }
                else {
                    _this.finish(result.action, { error: result.error });
                    _this.transport.close();
                }
            };
            this.onClosed = function (closeEvent) {
                _this.unbindListeners();
                var action = Protocol.getCloseAction(closeEvent) || "backoff";
                var error = Protocol.getCloseError(closeEvent);
                _this.finish(action, { error: error });
            };
            this.transport.bind("message", this.onMessage);
            this.transport.bind("closed", this.onClosed);
        };
        Handshake.prototype.unbindListeners = function () {
            this.transport.unbind("message", this.onMessage);
            this.transport.unbind("closed", this.onClosed);
        };
        Handshake.prototype.finish = function (action, params) {
            this.callback(Collections.extend({ transport: this.transport, action: action }, params));
        };
        return Handshake;
    }());
    exports.__esModule = true;
    exports["default"] = Handshake;


  /***/ },
  /* 45 */
  /***/ function(module, exports) {

    "use strict";
    exports.decodeMessage = function (message) {
        try {
            var params = JSON.parse(message.data);
            if (typeof params.data === 'string') {
                try {
                    params.data = JSON.parse(params.data);
                }
                catch (e) {
                    if (!(e instanceof SyntaxError)) {
                        throw e;
                    }
                }
            }
            return params;
        }
        catch (e) {
            throw { type: 'MessageParseError', error: e, data: message.data };
        }
    };
    exports.encodeMessage = function (message) {
        return JSON.stringify(message);
    };
    exports.processHandshake = function (message) {
        message = exports.decodeMessage(message);
        if (message.event === "pusher:connection_established") {
            if (!message.data.activity_timeout) {
                throw "No activity timeout specified in handshake";
            }
            return {
                action: "connected",
                id: message.data.socket_id,
                activityTimeout: message.data.activity_timeout * 1000
            };
        }
        else if (message.event === "pusher:error") {
            return {
                action: this.getCloseAction(message.data),
                error: this.getCloseError(message.data)
            };
        }
        else {
            throw "Invalid handshake";
        }
    };
    exports.getCloseAction = function (closeEvent) {
        if (closeEvent.code < 4000) {
            if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
                return "backoff";
            }
            else {
                return null;
            }
        }
        else if (closeEvent.code === 4000) {
            return "ssl_only";
        }
        else if (closeEvent.code < 4100) {
            return "refused";
        }
        else if (closeEvent.code < 4200) {
            return "backoff";
        }
        else if (closeEvent.code < 4300) {
            return "retry";
        }
        else {
            return "refused";
        }
    };
    exports.getCloseError = function (closeEvent) {
        if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
            return {
                type: 'PusherError',
                data: {
                    code: closeEvent.code,
                    message: closeEvent.reason || closeEvent.message
                }
            };
        }
        else {
            return null;
        }
    };


  /***/ },
  /* 46 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Collections = __webpack_require__(9);
    var dispatcher_1 = __webpack_require__(23);
    var Protocol = __webpack_require__(45);
    var logger_1 = __webpack_require__(8);
    var Connection = (function (_super) {
        __extends(Connection, _super);
        function Connection(id, transport) {
            _super.call(this);
            this.id = id;
            this.transport = transport;
            this.activityTimeout = transport.activityTimeout;
            this.bindListeners();
        }
        Connection.prototype.handlesActivityChecks = function () {
            return this.transport.handlesActivityChecks();
        };
        Connection.prototype.send = function (data) {
            return this.transport.send(data);
        };
        Connection.prototype.send_event = function (name, data, channel) {
            var message = { event: name, data: data };
            if (channel) {
                message.channel = channel;
            }
            logger_1["default"].debug('Event sent', message);
            return this.send(Protocol.encodeMessage(message));
        };
        Connection.prototype.ping = function () {
            if (this.transport.supportsPing()) {
                this.transport.ping();
            }
            else {
                this.send_event('pusher:ping', {});
            }
        };
        Connection.prototype.close = function () {
            this.transport.close();
        };
        Connection.prototype.bindListeners = function () {
            var _this = this;
            var listeners = {
                message: function (m) {
                    var message;
                    try {
                        message = Protocol.decodeMessage(m);
                    }
                    catch (e) {
                        _this.emit('error', {
                            type: 'MessageParseError',
                            error: e,
                            data: m.data
                        });
                    }
                    if (message !== undefined) {
                        logger_1["default"].debug('Event recd', message);
                        switch (message.event) {
                            case 'pusher:error':
                                _this.emit('error', { type: 'PusherError', data: message.data });
                                break;
                            case 'pusher:ping':
                                _this.emit("ping");
                                break;
                            case 'pusher:pong':
                                _this.emit("pong");
                                break;
                        }
                        _this.emit('message', message);
                    }
                },
                activity: function () {
                    _this.emit("activity");
                },
                error: function (error) {
                    _this.emit("error", { type: "WebSocketError", error: error });
                },
                closed: function (closeEvent) {
                    unbindListeners();
                    if (closeEvent && closeEvent.code) {
                        _this.handleCloseEvent(closeEvent);
                    }
                    _this.transport = null;
                    _this.emit("closed");
                }
            };
            var unbindListeners = function () {
                Collections.objectApply(listeners, function (listener, event) {
                    _this.transport.unbind(event, listener);
                });
            };
            Collections.objectApply(listeners, function (listener, event) {
                _this.transport.bind(event, listener);
            });
        };
        Connection.prototype.handleCloseEvent = function (closeEvent) {
            var action = Protocol.getCloseAction(closeEvent);
            var error = Protocol.getCloseError(closeEvent);
            if (error) {
                this.emit('error', error);
            }
            if (action) {
                this.emit(action);
            }
        };
        return Connection;
    }(dispatcher_1["default"]));
    exports.__esModule = true;
    exports["default"] = Connection;


  /***/ },
  /* 47 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var runtime_1 = __webpack_require__(2);
    var Authorizer = (function () {
        function Authorizer(channel, options) {
            this.channel = channel;
            var authTransport = options.authTransport;
            if (typeof runtime_1["default"].getAuthorizers()[authTransport] === "undefined") {
                throw "'" + authTransport + "' is not a recognized auth transport";
            }
            this.type = authTransport;
            this.options = options;
            this.authOptions = (options || {}).auth || {};
        }
        Authorizer.prototype.composeQuery = function (socketId) {
            var query = 'socket_id=' + encodeURIComponent(socketId) +
                '&channel_name=' + encodeURIComponent(this.channel.name);
            for (var i in this.authOptions.params) {
                query += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]);
            }
            return query;
        };
        Authorizer.prototype.authorize = function (socketId, callback) {
            Authorizer.authorizers = Authorizer.authorizers || runtime_1["default"].getAuthorizers();
            return Authorizer.authorizers[this.type].call(this, runtime_1["default"], socketId, callback);
        };
        return Authorizer;
    }());
    exports.__esModule = true;
    exports["default"] = Authorizer;


  /***/ },
  /* 48 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var runtime_1 = __webpack_require__(2);
    var TimelineSender = (function () {
        function TimelineSender(timeline, options) {
            this.timeline = timeline;
            this.options = options || {};
        }
        TimelineSender.prototype.send = function (encrypted, callback) {
            if (this.timeline.isEmpty()) {
                return;
            }
            this.timeline.send(runtime_1["default"].TimelineTransport.getAgent(this, encrypted), callback);
        };
        return TimelineSender;
    }());
    exports.__esModule = true;
    exports["default"] = TimelineSender;


  /***/ },
  /* 49 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var private_channel_1 = __webpack_require__(50);
    var logger_1 = __webpack_require__(8);
    var members_1 = __webpack_require__(52);
    var PresenceChannel = (function (_super) {
        __extends(PresenceChannel, _super);
        function PresenceChannel(name, pusher) {
            _super.call(this, name, pusher);
            this.members = new members_1["default"]();
        }
        PresenceChannel.prototype.authorize = function (socketId, callback) {
            var _this = this;
            _super.prototype.authorize.call(this, socketId, function (error, authData) {
                if (!error) {
                    if (authData.channel_data === undefined) {
                        logger_1["default"].warn("Invalid auth response for channel '" +
                            _this.name +
                            "', expected 'channel_data' field");
                        callback("Invalid auth response");
                        return;
                    }
                    var channelData = JSON.parse(authData.channel_data);
                    _this.members.setMyID(channelData.user_id);
                }
                callback(error, authData);
            });
        };
        PresenceChannel.prototype.handleEvent = function (event, data) {
            switch (event) {
                case "pusher_internal:subscription_succeeded":
                    this.subscriptionPending = false;
                    this.subscribed = true;
                    if (this.subscriptionCancelled) {
                        this.pusher.unsubscribe(this.name);
                    }
                    else {
                        this.members.onSubscription(data);
                        this.emit("pusher:subscription_succeeded", this.members);
                    }
                    break;
                case "pusher_internal:member_added":
                    var addedMember = this.members.addMember(data);
                    this.emit('pusher:member_added', addedMember);
                    break;
                case "pusher_internal:member_removed":
                    var removedMember = this.members.removeMember(data);
                    if (removedMember) {
                        this.emit('pusher:member_removed', removedMember);
                    }
                    break;
                default:
                    private_channel_1["default"].prototype.handleEvent.call(this, event, data);
            }
        };
        PresenceChannel.prototype.disconnect = function () {
            this.members.reset();
            _super.prototype.disconnect.call(this);
        };
        return PresenceChannel;
    }(private_channel_1["default"]));
    exports.__esModule = true;
    exports["default"] = PresenceChannel;


  /***/ },
  /* 50 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var factory_1 = __webpack_require__(42);
    var channel_1 = __webpack_require__(51);
    var PrivateChannel = (function (_super) {
        __extends(PrivateChannel, _super);
        function PrivateChannel() {
            _super.apply(this, arguments);
        }
        PrivateChannel.prototype.authorize = function (socketId, callback) {
            var authorizer = factory_1["default"].createAuthorizer(this, this.pusher.config);
            return authorizer.authorize(socketId, callback);
        };
        return PrivateChannel;
    }(channel_1["default"]));
    exports.__esModule = true;
    exports["default"] = PrivateChannel;


  /***/ },
  /* 51 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var dispatcher_1 = __webpack_require__(23);
    var Errors = __webpack_require__(30);
    var logger_1 = __webpack_require__(8);
    var Channel = (function (_super) {
        __extends(Channel, _super);
        function Channel(name, pusher) {
            _super.call(this, function (event, data) {
                logger_1["default"].debug('No callbacks on ' + name + ' for ' + event);
            });
            this.name = name;
            this.pusher = pusher;
            this.subscribed = false;
            this.subscriptionPending = false;
            this.subscriptionCancelled = false;
        }
        Channel.prototype.authorize = function (socketId, callback) {
            return callback(false, {});
        };
        Channel.prototype.trigger = function (event, data) {
            if (event.indexOf("client-") !== 0) {
                throw new Errors.BadEventName("Event '" + event + "' does not start with 'client-'");
            }
            return this.pusher.send_event(event, data, this.name);
        };
        Channel.prototype.disconnect = function () {
            this.subscribed = false;
        };
        Channel.prototype.handleEvent = function (event, data) {
            if (event.indexOf("pusher_internal:") === 0) {
                if (event === "pusher_internal:subscription_succeeded") {
                    this.subscriptionPending = false;
                    this.subscribed = true;
                    if (this.subscriptionCancelled) {
                        this.pusher.unsubscribe(this.name);
                    }
                    else {
                        this.emit("pusher:subscription_succeeded", data);
                    }
                }
            }
            else {
                this.emit(event, data);
            }
        };
        Channel.prototype.subscribe = function () {
            var _this = this;
            if (this.subscribed) {
                return;
            }
            this.subscriptionPending = true;
            this.subscriptionCancelled = false;
            this.authorize(this.pusher.connection.socket_id, function (error, data) {
                if (error) {
                    _this.handleEvent('pusher:subscription_error', data);
                }
                else {
                    _this.pusher.send_event('pusher:subscribe', {
                        auth: data.auth,
                        channel_data: data.channel_data,
                        channel: _this.name
                    });
                }
            });
        };
        Channel.prototype.unsubscribe = function () {
            this.subscribed = false;
            this.pusher.send_event('pusher:unsubscribe', {
                channel: this.name
            });
        };
        Channel.prototype.cancelSubscription = function () {
            this.subscriptionCancelled = true;
        };
        Channel.prototype.reinstateSubscription = function () {
            this.subscriptionCancelled = false;
        };
        return Channel;
    }(dispatcher_1["default"]));
    exports.__esModule = true;
    exports["default"] = Channel;


  /***/ },
  /* 52 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var Collections = __webpack_require__(9);
    var Members = (function () {
        function Members() {
            this.reset();
        }
        Members.prototype.get = function (id) {
            if (Object.prototype.hasOwnProperty.call(this.members, id)) {
                return {
                    id: id,
                    info: this.members[id]
                };
            }
            else {
                return null;
            }
        };
        Members.prototype.each = function (callback) {
            var _this = this;
            Collections.objectApply(this.members, function (member, id) {
                callback(_this.get(id));
            });
        };
        Members.prototype.setMyID = function (id) {
            this.myID = id;
        };
        Members.prototype.onSubscription = function (subscriptionData) {
            this.members = subscriptionData.presence.hash;
            this.count = subscriptionData.presence.count;
            this.me = this.get(this.myID);
        };
        Members.prototype.addMember = function (memberData) {
            if (this.get(memberData.user_id) === null) {
                this.count++;
            }
            this.members[memberData.user_id] = memberData.user_info;
            return this.get(memberData.user_id);
        };
        Members.prototype.removeMember = function (memberData) {
            var member = this.get(memberData.user_id);
            if (member) {
                delete this.members[memberData.user_id];
                this.count--;
            }
            return member;
        };
        Members.prototype.reset = function () {
            this.members = {};
            this.count = 0;
            this.myID = null;
            this.me = null;
        };
        return Members;
    }());
    exports.__esModule = true;
    exports["default"] = Members;


  /***/ },
  /* 53 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var dispatcher_1 = __webpack_require__(23);
    var timers_1 = __webpack_require__(12);
    var logger_1 = __webpack_require__(8);
    var Collections = __webpack_require__(9);
    var runtime_1 = __webpack_require__(2);
    var ConnectionManager = (function (_super) {
        __extends(ConnectionManager, _super);
        function ConnectionManager(key, options) {
            var _this = this;
            _super.call(this);
            this.key = key;
            this.options = options || {};
            this.state = "initialized";
            this.connection = null;
            this.encrypted = !!options.encrypted;
            this.timeline = this.options.timeline;
            this.connectionCallbacks = this.buildConnectionCallbacks();
            this.errorCallbacks = this.buildErrorCallbacks();
            this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
            var Network = runtime_1["default"].getNetwork();
            Network.bind("online", function () {
                _this.timeline.info({ netinfo: "online" });
                if (_this.state === "connecting" || _this.state === "unavailable") {
                    _this.retryIn(0);
                }
            });
            Network.bind("offline", function () {
                _this.timeline.info({ netinfo: "offline" });
                if (_this.connection) {
                    _this.sendActivityCheck();
                }
            });
            this.updateStrategy();
        }
        ConnectionManager.prototype.connect = function () {
            if (this.connection || this.runner) {
                return;
            }
            if (!this.strategy.isSupported()) {
                this.updateState("failed");
                return;
            }
            this.updateState("connecting");
            this.startConnecting();
            this.setUnavailableTimer();
        };
        ;
        ConnectionManager.prototype.send = function (data) {
            if (this.connection) {
                return this.connection.send(data);
            }
            else {
                return false;
            }
        };
        ;
        ConnectionManager.prototype.send_event = function (name, data, channel) {
            if (this.connection) {
                return this.connection.send_event(name, data, channel);
            }
            else {
                return false;
            }
        };
        ;
        ConnectionManager.prototype.disconnect = function () {
            this.disconnectInternally();
            this.updateState("disconnected");
        };
        ;
        ConnectionManager.prototype.isEncrypted = function () {
            return this.encrypted;
        };
        ;
        ConnectionManager.prototype.startConnecting = function () {
            var _this = this;
            var callback = function (error, handshake) {
                if (error) {
                    _this.runner = _this.strategy.connect(0, callback);
                }
                else {
                    if (handshake.action === "error") {
                        _this.emit("error", { type: "HandshakeError", error: handshake.error });
                        _this.timeline.error({ handshakeError: handshake.error });
                    }
                    else {
                        _this.abortConnecting();
                        _this.handshakeCallbacks[handshake.action](handshake);
                    }
                }
            };
            this.runner = this.strategy.connect(0, callback);
        };
        ;
        ConnectionManager.prototype.abortConnecting = function () {
            if (this.runner) {
                this.runner.abort();
                this.runner = null;
            }
        };
        ;
        ConnectionManager.prototype.disconnectInternally = function () {
            this.abortConnecting();
            this.clearRetryTimer();
            this.clearUnavailableTimer();
            if (this.connection) {
                var connection = this.abandonConnection();
                connection.close();
            }
        };
        ;
        ConnectionManager.prototype.updateStrategy = function () {
            this.strategy = this.options.getStrategy({
                key: this.key,
                timeline: this.timeline,
                encrypted: this.encrypted
            });
        };
        ;
        ConnectionManager.prototype.retryIn = function (delay) {
            var _this = this;
            this.timeline.info({ action: "retry", delay: delay });
            if (delay > 0) {
                this.emit("connecting_in", Math.round(delay / 1000));
            }
            this.retryTimer = new timers_1.OneOffTimer(delay || 0, function () {
                _this.disconnectInternally();
                _this.connect();
            });
        };
        ;
        ConnectionManager.prototype.clearRetryTimer = function () {
            if (this.retryTimer) {
                this.retryTimer.ensureAborted();
                this.retryTimer = null;
            }
        };
        ;
        ConnectionManager.prototype.setUnavailableTimer = function () {
            var _this = this;
            this.unavailableTimer = new timers_1.OneOffTimer(this.options.unavailableTimeout, function () {
                _this.updateState("unavailable");
            });
        };
        ;
        ConnectionManager.prototype.clearUnavailableTimer = function () {
            if (this.unavailableTimer) {
                this.unavailableTimer.ensureAborted();
            }
        };
        ;
        ConnectionManager.prototype.sendActivityCheck = function () {
            var _this = this;
            this.stopActivityCheck();
            this.connection.ping();
            this.activityTimer = new timers_1.OneOffTimer(this.options.pongTimeout, function () {
                _this.timeline.error({ pong_timed_out: _this.options.pongTimeout });
                _this.retryIn(0);
            });
        };
        ;
        ConnectionManager.prototype.resetActivityCheck = function () {
            var _this = this;
            this.stopActivityCheck();
            if (!this.connection.handlesActivityChecks()) {
                this.activityTimer = new timers_1.OneOffTimer(this.activityTimeout, function () {
                    _this.sendActivityCheck();
                });
            }
        };
        ;
        ConnectionManager.prototype.stopActivityCheck = function () {
            if (this.activityTimer) {
                this.activityTimer.ensureAborted();
            }
        };
        ;
        ConnectionManager.prototype.buildConnectionCallbacks = function () {
            var _this = this;
            return {
                message: function (message) {
                    _this.resetActivityCheck();
                    _this.emit('message', message);
                },
                ping: function () {
                    _this.send_event('pusher:pong', {});
                },
                activity: function () {
                    _this.resetActivityCheck();
                },
                error: function (error) {
                    _this.emit("error", { type: "WebSocketError", error: error });
                },
                closed: function () {
                    _this.abandonConnection();
                    if (_this.shouldRetry()) {
                        _this.retryIn(1000);
                    }
                }
            };
        };
        ;
        ConnectionManager.prototype.buildHandshakeCallbacks = function (errorCallbacks) {
            var _this = this;
            return Collections.extend({}, errorCallbacks, {
                connected: function (handshake) {
                    _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
                    _this.clearUnavailableTimer();
                    _this.setConnection(handshake.connection);
                    _this.socket_id = _this.connection.id;
                    _this.updateState("connected", { socket_id: _this.socket_id });
                }
            });
        };
        ;
        ConnectionManager.prototype.buildErrorCallbacks = function () {
            var _this = this;
            var withErrorEmitted = function (callback) {
                return function (result) {
                    if (result.error) {
                        _this.emit("error", { type: "WebSocketError", error: result.error });
                    }
                    callback(result);
                };
            };
            return {
                ssl_only: withErrorEmitted(function () {
                    _this.encrypted = true;
                    _this.updateStrategy();
                    _this.retryIn(0);
                }),
                refused: withErrorEmitted(function () {
                    _this.disconnect();
                }),
                backoff: withErrorEmitted(function () {
                    _this.retryIn(1000);
                }),
                retry: withErrorEmitted(function () {
                    _this.retryIn(0);
                })
            };
        };
        ;
        ConnectionManager.prototype.setConnection = function (connection) {
            this.connection = connection;
            for (var event in this.connectionCallbacks) {
                this.connection.bind(event, this.connectionCallbacks[event]);
            }
            this.resetActivityCheck();
        };
        ;
        ConnectionManager.prototype.abandonConnection = function () {
            if (!this.connection) {
                return;
            }
            this.stopActivityCheck();
            for (var event in this.connectionCallbacks) {
                this.connection.unbind(event, this.connectionCallbacks[event]);
            }
            var connection = this.connection;
            this.connection = null;
            return connection;
        };
        ConnectionManager.prototype.updateState = function (newState, data) {
            var previousState = this.state;
            this.state = newState;
            if (previousState !== newState) {
                var newStateDescription = newState;
                if (newStateDescription === "connected") {
                    newStateDescription += " with new socket ID " + data.socket_id;
                }
                logger_1["default"].debug('State changed', previousState + ' -> ' + newStateDescription);
                this.timeline.info({ state: newState, params: data });
                this.emit('state_change', { previous: previousState, current: newState });
                this.emit(newState, data);
            }
        };
        ConnectionManager.prototype.shouldRetry = function () {
            return this.state === "connecting" || this.state === "connected";
        };
        return ConnectionManager;
    }(dispatcher_1["default"]));
    exports.__esModule = true;
    exports["default"] = ConnectionManager;


  /***/ },
  /* 54 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var Collections = __webpack_require__(9);
    var factory_1 = __webpack_require__(42);
    var Channels = (function () {
        function Channels() {
            this.channels = {};
        }
        Channels.prototype.add = function (name, pusher) {
            if (!this.channels[name]) {
                this.channels[name] = createChannel(name, pusher);
            }
            return this.channels[name];
        };
        Channels.prototype.all = function () {
            return Collections.values(this.channels);
        };
        Channels.prototype.find = function (name) {
            return this.channels[name];
        };
        Channels.prototype.remove = function (name) {
            var channel = this.channels[name];
            delete this.channels[name];
            return channel;
        };
        Channels.prototype.disconnect = function () {
            Collections.objectApply(this.channels, function (channel) {
                channel.disconnect();
            });
        };
        return Channels;
    }());
    exports.__esModule = true;
    exports["default"] = Channels;
    function createChannel(name, pusher) {
        if (name.indexOf('private-') === 0) {
            return factory_1["default"].createPrivateChannel(name, pusher);
        }
        else if (name.indexOf('presence-') === 0) {
            return factory_1["default"].createPresenceChannel(name, pusher);
        }
        else {
            return factory_1["default"].createChannel(name, pusher);
        }
    }


  /***/ },
  /* 55 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var factory_1 = __webpack_require__(42);
    var util_1 = __webpack_require__(11);
    var Errors = __webpack_require__(30);
    var Collections = __webpack_require__(9);
    var TransportStrategy = (function () {
        function TransportStrategy(name, priority, transport, options) {
            this.name = name;
            this.priority = priority;
            this.transport = transport;
            this.options = options || {};
        }
        TransportStrategy.prototype.isSupported = function () {
            return this.transport.isSupported({
                encrypted: this.options.encrypted
            });
        };
        TransportStrategy.prototype.connect = function (minPriority, callback) {
            var _this = this;
            if (!this.isSupported()) {
                return failAttempt(new Errors.UnsupportedStrategy(), callback);
            }
            else if (this.priority < minPriority) {
                return failAttempt(new Errors.TransportPriorityTooLow(), callback);
            }
            var connected = false;
            var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
            var handshake = null;
            var onInitialized = function () {
                transport.unbind("initialized", onInitialized);
                transport.connect();
            };
            var onOpen = function () {
                handshake = factory_1["default"].createHandshake(transport, function (result) {
                    connected = true;
                    unbindListeners();
                    callback(null, result);
                });
            };
            var onError = function (error) {
                unbindListeners();
                callback(error);
            };
            var onClosed = function () {
                unbindListeners();
                var serializedTransport;
                serializedTransport = Collections.safeJSONStringify(transport);
                callback(new Errors.TransportClosed(serializedTransport));
            };
            var unbindListeners = function () {
                transport.unbind("initialized", onInitialized);
                transport.unbind("open", onOpen);
                transport.unbind("error", onError);
                transport.unbind("closed", onClosed);
            };
            transport.bind("initialized", onInitialized);
            transport.bind("open", onOpen);
            transport.bind("error", onError);
            transport.bind("closed", onClosed);
            transport.initialize();
            return {
                abort: function () {
                    if (connected) {
                        return;
                    }
                    unbindListeners();
                    if (handshake) {
                        handshake.close();
                    }
                    else {
                        transport.close();
                    }
                },
                forceMinPriority: function (p) {
                    if (connected) {
                        return;
                    }
                    if (_this.priority < p) {
                        if (handshake) {
                            handshake.close();
                        }
                        else {
                            transport.close();
                        }
                    }
                }
            };
        };
        return TransportStrategy;
    }());
    exports.__esModule = true;
    exports["default"] = TransportStrategy;
    function failAttempt(error, callback) {
        util_1["default"].defer(function () {
            callback(error);
        });
        return {
            abort: function () { },
            forceMinPriority: function () { }
        };
    }


  /***/ },
  /* 56 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var Collections = __webpack_require__(9);
    var util_1 = __webpack_require__(11);
    var timers_1 = __webpack_require__(12);
    var SequentialStrategy = (function () {
        function SequentialStrategy(strategies, options) {
            this.strategies = strategies;
            this.loop = Boolean(options.loop);
            this.failFast = Boolean(options.failFast);
            this.timeout = options.timeout;
            this.timeoutLimit = options.timeoutLimit;
        }
        SequentialStrategy.prototype.isSupported = function () {
            return Collections.any(this.strategies, util_1["default"].method("isSupported"));
        };
        SequentialStrategy.prototype.connect = function (minPriority, callback) {
            var _this = this;
            var strategies = this.strategies;
            var current = 0;
            var timeout = this.timeout;
            var runner = null;
            var tryNextStrategy = function (error, handshake) {
                if (handshake) {
                    callback(null, handshake);
                }
                else {
                    current = current + 1;
                    if (_this.loop) {
                        current = current % strategies.length;
                    }
                    if (current < strategies.length) {
                        if (timeout) {
                            timeout = timeout * 2;
                            if (_this.timeoutLimit) {
                                timeout = Math.min(timeout, _this.timeoutLimit);
                            }
                        }
                        runner = _this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: _this.failFast }, tryNextStrategy);
                    }
                    else {
                        callback(true);
                    }
                }
            };
            runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
            return {
                abort: function () {
                    runner.abort();
                },
                forceMinPriority: function (p) {
                    minPriority = p;
                    if (runner) {
                        runner.forceMinPriority(p);
                    }
                }
            };
        };
        SequentialStrategy.prototype.tryStrategy = function (strategy, minPriority, options, callback) {
            var timer = null;
            var runner = null;
            if (options.timeout > 0) {
                timer = new timers_1.OneOffTimer(options.timeout, function () {
                    runner.abort();
                    callback(true);
                });
            }
            runner = strategy.connect(minPriority, function (error, handshake) {
                if (error && timer && timer.isRunning() && !options.failFast) {
                    return;
                }
                if (timer) {
                    timer.ensureAborted();
                }
                callback(error, handshake);
            });
            return {
                abort: function () {
                    if (timer) {
                        timer.ensureAborted();
                    }
                    runner.abort();
                },
                forceMinPriority: function (p) {
                    runner.forceMinPriority(p);
                }
            };
        };
        return SequentialStrategy;
    }());
    exports.__esModule = true;
    exports["default"] = SequentialStrategy;


  /***/ },
  /* 57 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var Collections = __webpack_require__(9);
    var util_1 = __webpack_require__(11);
    var BestConnectedEverStrategy = (function () {
        function BestConnectedEverStrategy(strategies) {
            this.strategies = strategies;
        }
        BestConnectedEverStrategy.prototype.isSupported = function () {
            return Collections.any(this.strategies, util_1["default"].method("isSupported"));
        };
        BestConnectedEverStrategy.prototype.connect = function (minPriority, callback) {
            return connect(this.strategies, minPriority, function (i, runners) {
                return function (error, handshake) {
                    runners[i].error = error;
                    if (error) {
                        if (allRunnersFailed(runners)) {
                            callback(true);
                        }
                        return;
                    }
                    Collections.apply(runners, function (runner) {
                        runner.forceMinPriority(handshake.transport.priority);
                    });
                    callback(null, handshake);
                };
            });
        };
        return BestConnectedEverStrategy;
    }());
    exports.__esModule = true;
    exports["default"] = BestConnectedEverStrategy;
    function connect(strategies, minPriority, callbackBuilder) {
        var runners = Collections.map(strategies, function (strategy, i, _, rs) {
            return strategy.connect(minPriority, callbackBuilder(i, rs));
        });
        return {
            abort: function () {
                Collections.apply(runners, abortRunner);
            },
            forceMinPriority: function (p) {
                Collections.apply(runners, function (runner) {
                    runner.forceMinPriority(p);
                });
            }
        };
    }
    function allRunnersFailed(runners) {
        return Collections.all(runners, function (runner) {
            return Boolean(runner.error);
        });
    }
    function abortRunner(runner) {
        if (!runner.error && !runner.aborted) {
            runner.abort();
            runner.aborted = true;
        }
    }


  /***/ },
  /* 58 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var util_1 = __webpack_require__(11);
    var runtime_1 = __webpack_require__(2);
    var sequential_strategy_1 = __webpack_require__(56);
    var Collections = __webpack_require__(9);
    var CachedStrategy = (function () {
        function CachedStrategy(strategy, transports, options) {
            this.strategy = strategy;
            this.transports = transports;
            this.ttl = options.ttl || 1800 * 1000;
            this.encrypted = options.encrypted;
            this.timeline = options.timeline;
        }
        CachedStrategy.prototype.isSupported = function () {
            return this.strategy.isSupported();
        };
        CachedStrategy.prototype.connect = function (minPriority, callback) {
            var encrypted = this.encrypted;
            var info = fetchTransportCache(encrypted);
            var strategies = [this.strategy];
            if (info && info.timestamp + this.ttl >= util_1["default"].now()) {
                var transport = this.transports[info.transport];
                if (transport) {
                    this.timeline.info({
                        cached: true,
                        transport: info.transport,
                        latency: info.latency
                    });
                    strategies.push(new sequential_strategy_1["default"]([transport], {
                        timeout: info.latency * 2 + 1000,
                        failFast: true
                    }));
                }
            }
            var startTimestamp = util_1["default"].now();
            var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
                if (error) {
                    flushTransportCache(encrypted);
                    if (strategies.length > 0) {
                        startTimestamp = util_1["default"].now();
                        runner = strategies.pop().connect(minPriority, cb);
                    }
                    else {
                        callback(error);
                    }
                }
                else {
                    storeTransportCache(encrypted, handshake.transport.name, util_1["default"].now() - startTimestamp);
                    callback(null, handshake);
                }
            });
            return {
                abort: function () {
                    runner.abort();
                },
                forceMinPriority: function (p) {
                    minPriority = p;
                    if (runner) {
                        runner.forceMinPriority(p);
                    }
                }
            };
        };
        return CachedStrategy;
    }());
    exports.__esModule = true;
    exports["default"] = CachedStrategy;
    function getTransportCacheKey(encrypted) {
        return "pusherTransport" + (encrypted ? "Encrypted" : "Unencrypted");
    }
    function fetchTransportCache(encrypted) {
        var storage = runtime_1["default"].getLocalStorage();
        if (storage) {
            try {
                var serializedCache = storage[getTransportCacheKey(encrypted)];
                if (serializedCache) {
                    return JSON.parse(serializedCache);
                }
            }
            catch (e) {
                flushTransportCache(encrypted);
            }
        }
        return null;
    }
    function storeTransportCache(encrypted, transport, latency) {
        var storage = runtime_1["default"].getLocalStorage();
        if (storage) {
            try {
                storage[getTransportCacheKey(encrypted)] = Collections.safeJSONStringify({
                    timestamp: util_1["default"].now(),
                    transport: transport,
                    latency: latency
                });
            }
            catch (e) {
            }
        }
    }
    function flushTransportCache(encrypted) {
        var storage = runtime_1["default"].getLocalStorage();
        if (storage) {
            try {
                delete storage[getTransportCacheKey(encrypted)];
            }
            catch (e) {
            }
        }
    }


  /***/ },
  /* 59 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var timers_1 = __webpack_require__(12);
    var DelayedStrategy = (function () {
        function DelayedStrategy(strategy, _a) {
            var number = _a.delay;
            this.strategy = strategy;
            this.options = { delay: number };
        }
        DelayedStrategy.prototype.isSupported = function () {
            return this.strategy.isSupported();
        };
        DelayedStrategy.prototype.connect = function (minPriority, callback) {
            var strategy = this.strategy;
            var runner;
            var timer = new timers_1.OneOffTimer(this.options.delay, function () {
                runner = strategy.connect(minPriority, callback);
            });
            return {
                abort: function () {
                    timer.ensureAborted();
                    if (runner) {
                        runner.abort();
                    }
                },
                forceMinPriority: function (p) {
                    minPriority = p;
                    if (runner) {
                        runner.forceMinPriority(p);
                    }
                }
            };
        };
        return DelayedStrategy;
    }());
    exports.__esModule = true;
    exports["default"] = DelayedStrategy;


  /***/ },
  /* 60 */
  /***/ function(module, exports) {

    "use strict";
    var IfStrategy = (function () {
        function IfStrategy(test, trueBranch, falseBranch) {
            this.test = test;
            this.trueBranch = trueBranch;
            this.falseBranch = falseBranch;
        }
        IfStrategy.prototype.isSupported = function () {
            var branch = this.test() ? this.trueBranch : this.falseBranch;
            return branch.isSupported();
        };
        IfStrategy.prototype.connect = function (minPriority, callback) {
            var branch = this.test() ? this.trueBranch : this.falseBranch;
            return branch.connect(minPriority, callback);
        };
        return IfStrategy;
    }());
    exports.__esModule = true;
    exports["default"] = IfStrategy;


  /***/ },
  /* 61 */
  /***/ function(module, exports) {

    "use strict";
    var FirstConnectedStrategy = (function () {
        function FirstConnectedStrategy(strategy) {
            this.strategy = strategy;
        }
        FirstConnectedStrategy.prototype.isSupported = function () {
            return this.strategy.isSupported();
        };
        FirstConnectedStrategy.prototype.connect = function (minPriority, callback) {
            var runner = this.strategy.connect(minPriority, function (error, handshake) {
                if (handshake) {
                    runner.abort();
                }
                callback(error, handshake);
            });
            return runner;
        };
        return FirstConnectedStrategy;
    }());
    exports.__esModule = true;
    exports["default"] = FirstConnectedStrategy;


  /***/ },
  /* 62 */
  /***/ function(module, exports, __webpack_require__) {

    "use strict";
    var defaults_1 = __webpack_require__(5);
    exports.getGlobalConfig = function () {
        return {
            wsHost: defaults_1["default"].host,
            wsPort: defaults_1["default"].ws_port,
            wssPort: defaults_1["default"].wss_port,
            httpHost: defaults_1["default"].sockjs_host,
            httpPort: defaults_1["default"].sockjs_http_port,
            httpsPort: defaults_1["default"].sockjs_https_port,
            httpPath: defaults_1["default"].sockjs_path,
            statsHost: defaults_1["default"].stats_host,
            authEndpoint: defaults_1["default"].channel_auth_endpoint,
            authTransport: defaults_1["default"].channel_auth_transport,
            activity_timeout: defaults_1["default"].activity_timeout,
            pong_timeout: defaults_1["default"].pong_timeout,
            unavailable_timeout: defaults_1["default"].unavailable_timeout
        };
    };
    exports.getClusterConfig = function (clusterName) {
        return {
            wsHost: "ws-" + clusterName + ".pusher.com",
            httpHost: "sockjs-" + clusterName + ".pusher.com"
        };
    };


  /***/ }
  /******/ ])
  });
  ;

/***/ },
/* 354 */
/***/ function(module, exports) {

  "use strict";

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var groups = [{
    "id": "a08c12b4-5ce2-4259-a097-ab8c2ec8bb6c",
    "name": "Sativa"
  }, {
    "id": "a08c12b4-5ce2-4259-a097-ab8c2ec8bb6e",
    "name": "Concentrate"
  }, {
    "id": "a08c12b4-5ce2-4259-a097-ab8c2ec8bb62",
    "name": "Flower"
  }, {
    "id": "a08c12b4-5ce2-4259-a097-ab8c2ec8bb63",
    "name": "Edible"
  }, {
    "id": "a08c12b4-5ce2-4259-a097-ab8c2ec8bb64",
    "name": "Topical"
  }];

  exports.groups = groups;

  var brands = ['Avitas', 'Avittum', 'Silica', 'Silica Phoenix', 'Inferno Farms', '420 Natural', 'Stoners Farms', 'Agro Couture', 'Rootworx', 'Dawg Star'];
  var oneOf = function oneOf(list) {
    return list[Math.round(Math.random() * (list.length - 1))];
  };
  var randomString = function randomString(words) {
    return [].concat(_toConsumableArray(new Array(words))).map(function (x) {
      return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, Math.round(Math.random() * 5 + 3));
    }).join(' ');
  };

  exports.manyItems = [].concat(_toConsumableArray(new Array(200))).map(function (x, idx) {
    return {
      "id": idx,
      "menu_group_id": oneOf(groups).id,
      "name": randomString(3),
      "strain": randomString(2),
      "brand": oneOf(brands),
      "description": randomString(8),
      "prices": [{ "price": Math.round(Math.random() * 1000 + 1), "unit": "5", "type": "g" }, { "price": Math.round(Math.random() * 1000 + 1), "unit": "1", "type": "g" }],
      "thc": Math.random() * 100,
      "cbd": Math.random() * 100
    };
  });

  exports.items = [{
    "id": "afe0d8d2-2a10-44aa-9fb9-ddb5119c9364",
    "menu_group_id": "a08c12b4-5ce2-4259-a097-ab8c2ec8bb6c",
    "name": "AV Jack Herer",
    "strain": "Jack Herer",
    "brand": "Avitas",
    "description": "The best strain.",
    "prices": [{ "price": 1000, "unit": "2.35", "type": "g" }, { "price": 2000, "unit": "1", "type": "g" }]
  }, {
    "id": "afe0d8d2-2a10-44aa-9fb9-ddb5119c64",
    "menu_group_id": "a08c12b4-5ce2-4259-a097-ab8c2ec8bb6c",
    "name": "AV Jack Herer 23",
    "strain": "Jack Herer 23",
    "brand": "Avitas 23",
    "description": "The best strain. 23",
    "prices": [{ "price": 500, "unit": "6.35", "type": "g" }, { "price": 3000, "unit": "1", "type": "each" }]
  }, {
    "id": "bfe0d8d2-2a10-44aa-9fb9-ddb5119c65",
    "menu_group_id": "a08c12b4-5ce2-4259-a097-ab8c2ec8bb6e",
    "name": "Bubba Kush",
    "strain": "",
    "brand": "Avitas",
    "description": "Buuuuubba",
    "prices": [{ "price": 350, "unit": "1", "type": "g" }]
  }, {
    "id": "bfe0d8d2-2a10-44aa-9fb9-ddb5119c66",
    "menu_group_id": "a08c12b4-5ce2-4259-a097-ab8c2ec8bb6e",
    "name": "Bubba Rubba Kush",
    "strain": "",
    "brand": "Avitatum",
    "description": "Buuuuubba",
    "prices": [{ "price": 100, "unit": "2", "type": "0z" }]
  }];

/***/ }
/******/ ]);