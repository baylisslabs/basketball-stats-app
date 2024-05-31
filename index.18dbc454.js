// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j2YDk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
// Import all of Bootstrap's JS
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _bootstrap = require("bootstrap");
var _vue = require("vue");
var _appVue = require("../components/App.vue");
var _appVueDefault = parcelHelpers.interopDefault(_appVue);
const app = (0, _vue.createApp)((0, _appVueDefault.default));
app.mount("#app");

},{"bootstrap":"h36JB","vue":"gzxs9","../components/App.vue":"9IQgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h36JB":[function(require,module,exports) {
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alert", ()=>Alert);
parcelHelpers.export(exports, "Button", ()=>Button);
parcelHelpers.export(exports, "Carousel", ()=>Carousel);
parcelHelpers.export(exports, "Collapse", ()=>Collapse);
parcelHelpers.export(exports, "Dropdown", ()=>Dropdown);
parcelHelpers.export(exports, "Modal", ()=>Modal);
parcelHelpers.export(exports, "Offcanvas", ()=>Offcanvas);
parcelHelpers.export(exports, "Popover", ()=>Popover);
parcelHelpers.export(exports, "ScrollSpy", ()=>ScrollSpy);
parcelHelpers.export(exports, "Tab", ()=>Tab);
parcelHelpers.export(exports, "Toast", ()=>Toast);
parcelHelpers.export(exports, "Tooltip", ()=>Tooltip);
var _core = require("@popperjs/core");
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const elementMap = new Map();
const Data = {
    set (element, key, instance) {
        if (!elementMap.has(element)) elementMap.set(element, new Map());
        const instanceMap = elementMap.get(element);
        // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            // eslint-disable-next-line no-console
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
        }
        instanceMap.set(key, instance);
    },
    get (element, key) {
        if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
        return null;
    },
    remove (element, key) {
        if (!elementMap.has(element)) return;
        const instanceMap = elementMap.get(element);
        instanceMap.delete(key);
        // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) elementMap.delete(element);
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = "transitionend";
/**
 * Properly escape IDs selectors to handle weird IDs
 * @param {string} selector
 * @returns {string}
 */ const parseSelector = (selector)=>{
    if (selector && window.CSS && window.CSS.escape) // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
    selector = selector.replace(/#([^\s"#']+)/g, (match, id)=>`#${CSS.escape(id)}`);
    return selector;
};
// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = (object)=>{
    if (object === null || object === undefined) return `${object}`;
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * Public Util API
 */ const getUID = (prefix)=>{
    do prefix += Math.floor(Math.random() * MAX_UID);
    while (document.getElementById(prefix));
    return prefix;
};
const getTransitionDurationFromElement = (element)=>{
    if (!element) return 0;
    // Get transition-duration of the element
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) return 0;
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = (element)=>{
    element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = (object)=>{
    if (!object || typeof object !== "object") return false;
    if (typeof object.jquery !== "undefined") object = object[0];
    return typeof object.nodeType !== "undefined";
};
const getElement = (object)=>{
    // it's a jQuery object or a node element
    if (isElement(object)) return object.jquery ? object[0] : object;
    if (typeof object === "string" && object.length > 0) return document.querySelector(parseSelector(object));
    return null;
};
const isVisible = (element)=>{
    if (!isElement(element) || element.getClientRects().length === 0) return false;
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) return elementIsVisible;
    if (closedDetails !== element) {
        const summary = element.closest("summary");
        if (summary && summary.parentNode !== closedDetails) return false;
        if (summary === null) return false;
    }
    return elementIsVisible;
};
const isDisabled = (element)=>{
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains("disabled")) return true;
    if (typeof element.disabled !== "undefined") return element.disabled;
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
const findShadowRoot = (element)=>{
    if (!document.documentElement.attachShadow) return null;
    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === "function") {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
    // when we don't find a shadow root
    if (!element.parentNode) return null;
    return findShadowRoot(element.parentNode);
};
const noop = ()=>{};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ const reflow = (element)=>{
    element.offsetHeight; // eslint-disable-line no-unused-expressions
};
const getjQuery = ()=>{
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return window.jQuery;
    return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = (callback)=>{
    if (document.readyState === "loading") {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", ()=>{
            for (const callback of DOMContentLoadedCallbacks)callback();
        });
        DOMContentLoadedCallbacks.push(callback);
    } else callback();
};
const isRTL = ()=>document.documentElement.dir === "rtl";
const defineJQueryPlugin = (plugin)=>{
    onDOMContentLoaded(()=>{
        const $ = getjQuery();
        /* istanbul ignore if */ if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = ()=>{
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
            };
        }
    });
};
const execute = (possibleCallback, args = [], defaultValue = possibleCallback)=>{
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true)=>{
    if (!waitForTransition) {
        execute(callback);
        return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target })=>{
        if (target !== transitionElement) return;
        called = true;
        transitionElement.removeEventListener(TRANSITION_END, handler);
        execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(()=>{
        if (!called) triggerTransitionEnd(transitionElement);
    }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */ const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed)=>{
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage
let uidEvent = 1;
const customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
};
const nativeEvents = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
]);
/**
 * Private methods
 */ function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
    return function handler(event) {
        hydrateObj(event, {
            delegateTarget: element
        });
        if (handler.oneOff) EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target } = event; target && target !== this; target = target.parentNode)for (const domElement of domElements){
            if (domElement !== target) continue;
            hydrateObj(event, {
                delegateTarget: target
            });
            if (handler.oneOff) EventHandler.off(element, event.type, selector, fn);
            return fn.apply(target, [
                event
            ]);
        }
    };
}
function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event)=>event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    // TODO: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
    return [
        isDelegated,
        callable,
        typeEvent
    ];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) return;
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
        const wrapFunction = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
        previousFunction.oneOff = previousFunction.oneOff && oneOff;
        return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent))if (handlerKey.includes(namespace)) removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
}
function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
}
const EventHandler = {
    on (element, event, handler, delegationFunction) {
        addHandler(element, event, handler, delegationFunction, false);
    },
    one (element, event, handler, delegationFunction) {
        addHandler(element, event, handler, delegationFunction, true);
    },
    off (element, originalTypeEvent, handler, delegationFunction) {
        if (typeof originalTypeEvent !== "string" || !element) return;
        const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = getElementEvents(element);
        const storeElementEvent = events[typeEvent] || {};
        const isNamespace = originalTypeEvent.startsWith(".");
        if (typeof callable !== "undefined") {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!Object.keys(storeElementEvent).length) return;
            removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
        }
        if (isNamespace) for (const elementEvent of Object.keys(events))removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        for (const [keyHandlers, event] of Object.entries(storeElementEvent)){
            const handlerKey = keyHandlers.replace(stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
    },
    trigger (element, event, args) {
        if (typeof event !== "string" || !element) return null;
        const $ = getjQuery();
        const typeEvent = getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        let jQueryEvent = null;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        const evt = hydrateObj(new Event(event, {
            bubbles,
            cancelable: true
        }), args);
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
        return evt;
    }
};
function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta))try {
        obj[key] = value;
    } catch (_unused) {
        Object.defineProperty(obj, key, {
            configurable: true,
            get () {
                return value;
            }
        });
    }
    return obj;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function normalizeData(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (value === Number(value).toString()) return Number(value);
    if (value === "" || value === "null") return null;
    if (typeof value !== "string") return value;
    try {
        return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
        return value;
    }
}
function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`);
}
const Manipulator = {
    setDataAttribute (element, key, value) {
        element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute (element, key) {
        element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes (element) {
        if (!element) return {};
        const attributes = {};
        const bsKeys = Object.keys(element.dataset).filter((key)=>key.startsWith("bs") && !key.startsWith("bsConfig"));
        for (const key of bsKeys){
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
        }
        return attributes;
    },
    getDataAttribute (element, key) {
        return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Class definition
 */ class Config {
    // Getters
    static get Default() {
        return {};
    }
    static get DefaultType() {
        return {};
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        return config;
    }
    _mergeConfigObj(config, element) {
        const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, "config") : {}; // try to parse
        return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...isElement(element) ? Manipulator.getDataAttributes(element) : {},
            ...typeof config === "object" ? config : {}
        };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
        for (const [property, expectedTypes] of Object.entries(configTypes)){
            const value = config[property];
            const valueType = isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const VERSION = "5.3.3";
/**
 * Class definition
 */ class BaseComponent extends Config {
    constructor(element, config){
        super();
        element = getElement(element);
        if (!element) return;
        this._element = element;
        this._config = this._getConfig(config);
        Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        for (const propertyName of Object.getOwnPropertyNames(this))this[propertyName] = null;
    }
    _queueCallback(callback, element, isAnimated = true) {
        executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config, this._element);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    // Static
    static getInstance(element) {
        return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
        return VERSION;
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
        return `${name}${this.EVENT_KEY}`;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const getSelector = (element)=>{
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
        let hrefAttribute = element.getAttribute("href");
        // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) return null;
        // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
        selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel)=>parseSelector(sel)).join(",") : null;
};
const SelectorEngine = {
    find (selector, element = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne (selector, element = document.documentElement) {
        return Element.prototype.querySelector.call(element, selector);
    },
    children (element, selector) {
        return [].concat(...element.children).filter((child)=>child.matches(selector));
    },
    parents (element, selector) {
        const parents = [];
        let ancestor = element.parentNode.closest(selector);
        while(ancestor){
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
        }
        return parents;
    },
    prev (element, selector) {
        let previous = element.previousElementSibling;
        while(previous){
            if (previous.matches(selector)) return [
                previous
            ];
            previous = previous.previousElementSibling;
        }
        return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next (element, selector) {
        let next = element.nextElementSibling;
        while(next){
            if (next.matches(selector)) return [
                next
            ];
            next = next.nextElementSibling;
        }
        return [];
    },
    focusableChildren (element) {
        const focusables = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]'
        ].map((selector)=>`${selector}:not([tabindex^="-"])`).join(",");
        return this.find(focusables, element).filter((el)=>!isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement (element) {
        const selector = getSelector(element);
        if (selector) return SelectorEngine.findOne(selector) ? selector : null;
        return null;
    },
    getElementFromSelector (element) {
        const selector = getSelector(element);
        return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector (element) {
        const selector = getSelector(element);
        return selector ? SelectorEngine.find(selector) : [];
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const enableDismissTrigger = (component, method = "hide")=>{
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
        if ([
            "A",
            "AREA"
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
        const instance = component.getOrCreateInstance(target);
        // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
        instance[method]();
    });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$f = "alert";
const DATA_KEY$a = "bs.alert";
const EVENT_KEY$b = `.${DATA_KEY$a}`;
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const CLASS_NAME_FADE$5 = "fade";
const CLASS_NAME_SHOW$8 = "show";
/**
 * Class definition
 */ class Alert extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$f;
    }
    // Public
    close() {
        const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
        if (closeEvent.defaultPrevented) return;
        this._element.classList.remove(CLASS_NAME_SHOW$8);
        const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
        this._queueCallback(()=>this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
        this._element.remove();
        EventHandler.trigger(this._element, EVENT_CLOSED);
        this.dispose();
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Alert.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ enableDismissTrigger(Alert, "close");
/**
 * jQuery
 */ defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$e = "button";
const DATA_KEY$9 = "bs.button";
const EVENT_KEY$a = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = ".data-api";
const CLASS_NAME_ACTIVE$3 = "active";
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
/**
 * Class definition
 */ class Button extends BaseComponent {
    // Getters
    static get NAME() {
        return NAME$e;
    }
    // Public
    toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Button.getOrCreateInstance(this);
            if (config === "toggle") data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event)=>{
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$d = "swipe";
const EVENT_KEY$9 = ".bs.swipe";
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const POINTER_TYPE_TOUCH = "touch";
const POINTER_TYPE_PEN = "pen";
const CLASS_NAME_POINTER_EVENT = "pointer-event";
const SWIPE_THRESHOLD = 40;
const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
};
const DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
};
/**
 * Class definition
 */ class Swipe extends Config {
    constructor(element, config){
        super();
        this._element = element;
        if (!element || !Swipe.isSupported()) return;
        this._config = this._getConfig(config);
        this._deltaX = 0;
        this._supportPointerEvents = Boolean(window.PointerEvent);
        this._initEvents();
    }
    // Getters
    static get Default() {
        return Default$c;
    }
    static get DefaultType() {
        return DefaultType$c;
    }
    static get NAME() {
        return NAME$d;
    }
    // Public
    dispose() {
        EventHandler.off(this._element, EVENT_KEY$9);
    }
    // Private
    _start(event) {
        if (!this._supportPointerEvents) {
            this._deltaX = event.touches[0].clientX;
            return;
        }
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX;
    }
    _end(event) {
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX - this._deltaX;
        this._handleSwipe();
        execute(this._config.endCallback);
    }
    _move(event) {
        this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
        const absDeltaX = Math.abs(this._deltaX);
        if (absDeltaX <= SWIPE_THRESHOLD) return;
        const direction = absDeltaX / this._deltaX;
        this._deltaX = 0;
        if (!direction) return;
        execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
        if (this._supportPointerEvents) {
            EventHandler.on(this._element, EVENT_POINTERDOWN, (event)=>this._start(event));
            EventHandler.on(this._element, EVENT_POINTERUP, (event)=>this._end(event));
            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
            EventHandler.on(this._element, EVENT_TOUCHSTART, (event)=>this._start(event));
            EventHandler.on(this._element, EVENT_TOUCHMOVE, (event)=>this._move(event));
            EventHandler.on(this._element, EVENT_TOUCHEND, (event)=>this._end(event));
        }
    }
    _eventIsPointerPenTouch(event) {
        return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$c = "carousel";
const DATA_KEY$8 = "bs.carousel";
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = ".data-api";
const ARROW_LEFT_KEY$1 = "ArrowLeft";
const ARROW_RIGHT_KEY$1 = "ArrowRight";
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
const ORDER_NEXT = "next";
const ORDER_PREV = "prev";
const DIRECTION_LEFT = "left";
const DIRECTION_RIGHT = "right";
const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
const EVENT_SLID = `slid${EVENT_KEY$8}`;
const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_CAROUSEL = "carousel";
const CLASS_NAME_ACTIVE$2 = "active";
const CLASS_NAME_SLIDE = "slide";
const CLASS_NAME_END = "carousel-item-end";
const CLASS_NAME_START = "carousel-item-start";
const CLASS_NAME_NEXT = "carousel-item-next";
const CLASS_NAME_PREV = "carousel-item-prev";
const SELECTOR_ACTIVE = ".active";
const SELECTOR_ITEM = ".carousel-item";
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_ITEM_IMG = ".carousel-item img";
const SELECTOR_INDICATORS = ".carousel-indicators";
const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
const Default$b = {
    interval: 5000,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
};
const DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
};
/**
 * Class definition
 */ class Carousel extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._interval = null;
        this._activeElement = null;
        this._isSliding = false;
        this.touchTimeout = null;
        this._swipeHelper = null;
        this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
        this._addEventListeners();
        if (this._config.ride === CLASS_NAME_CAROUSEL) this.cycle();
    }
    // Getters
    static get Default() {
        return Default$b;
    }
    static get DefaultType() {
        return DefaultType$b;
    }
    static get NAME() {
        return NAME$c;
    }
    // Public
    next() {
        this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
        // FIXME TODO use `document.visibilityState`
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) this.next();
    }
    prev() {
        this._slide(ORDER_PREV);
    }
    pause() {
        if (this._isSliding) triggerTransitionEnd(this._element);
        this._clearInterval();
    }
    cycle() {
        this._clearInterval();
        this._updateInterval();
        this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
        if (!this._config.ride) return;
        if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, ()=>this.cycle());
            return;
        }
        this.cycle();
    }
    to(index) {
        const items = this._getItems();
        if (index > items.length - 1 || index < 0) return;
        if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, ()=>this.to(index));
            return;
        }
        const activeIndex = this._getItemIndex(this._getActive());
        if (activeIndex === index) return;
        const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
        this._slide(order, items[index]);
    }
    dispose() {
        if (this._swipeHelper) this._swipeHelper.dispose();
        super.dispose();
    }
    // Private
    _configAfterMerge(config) {
        config.defaultInterval = config.interval;
        return config;
    }
    _addEventListeners() {
        if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN$1, (event)=>this._keydown(event));
        if (this._config.pause === "hover") {
            EventHandler.on(this._element, EVENT_MOUSEENTER$1, ()=>this.pause());
            EventHandler.on(this._element, EVENT_MOUSELEAVE$1, ()=>this._maybeEnableCycle());
        }
        if (this._config.touch && Swipe.isSupported()) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element))EventHandler.on(img, EVENT_DRAG_START, (event)=>event.preventDefault());
        const endCallBack = ()=>{
            if (this._config.pause !== "hover") return;
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            this.pause();
            if (this.touchTimeout) clearTimeout(this.touchTimeout);
            this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        };
        const swipeConfig = {
            leftCallback: ()=>this._slide(this._directionToOrder(DIRECTION_LEFT)),
            rightCallback: ()=>this._slide(this._directionToOrder(DIRECTION_RIGHT)),
            endCallback: endCallBack
        };
        this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) return;
        const direction = KEY_TO_DIRECTION[event.key];
        if (direction) {
            event.preventDefault();
            this._slide(this._directionToOrder(direction));
        }
    }
    _getItemIndex(element) {
        return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
        if (!this._indicatorsElement) return;
        const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute("aria-current");
        const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
        if (newActiveIndicator) {
            newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
            newActiveIndicator.setAttribute("aria-current", "true");
        }
    }
    _updateInterval() {
        const element = this._activeElement || this._getActive();
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
        this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
        if (this._isSliding) return;
        const activeElement = this._getActive();
        const isNext = order === ORDER_NEXT;
        const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
        if (nextElement === activeElement) return;
        const nextElementIndex = this._getItemIndex(nextElement);
        const triggerEvent = (eventName)=>{
            return EventHandler.trigger(this._element, eventName, {
                relatedTarget: nextElement,
                direction: this._orderToDirection(order),
                from: this._getItemIndex(activeElement),
                to: nextElementIndex
            });
        };
        const slideEvent = triggerEvent(EVENT_SLIDE);
        if (slideEvent.defaultPrevented) return;
        if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
        // TODO: change tests that use empty divs to avoid this check
        return;
        const isCycling = Boolean(this._interval);
        this.pause();
        this._isSliding = true;
        this._setActiveIndicatorElement(nextElementIndex);
        this._activeElement = nextElement;
        const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        const completeCallBack = ()=>{
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            this._isSliding = false;
            triggerEvent(EVENT_SLID);
        };
        this._queueCallback(completeCallBack, activeElement, this._isAnimated());
        if (isCycling) this.cycle();
    }
    _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
        return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
        return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
    _directionToOrder(direction) {
        if (isRTL()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
        if (isRTL()) return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Carousel.getOrCreateInstance(this, config);
            if (typeof config === "number") {
                data.to(config);
                return;
            }
            if (typeof config === "string") {
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
        carousel.to(slideIndex);
        carousel._maybeEnableCycle();
        return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
        carousel.next();
        carousel._maybeEnableCycle();
        return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, ()=>{
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels)Carousel.getOrCreateInstance(carousel);
});
/**
 * jQuery
 */ defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$b = "collapse";
const DATA_KEY$7 = "bs.collapse";
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = ".data-api";
const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = "show";
const CLASS_NAME_COLLAPSE = "collapse";
const CLASS_NAME_COLLAPSING = "collapsing";
const CLASS_NAME_COLLAPSED = "collapsed";
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
const WIDTH = "width";
const HEIGHT = "height";
const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const Default$a = {
    parent: null,
    toggle: true
};
const DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
};
/**
 * Class definition
 */ class Collapse extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isTransitioning = false;
        this._triggerArray = [];
        const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
        for (const elem of toggleList){
            const selector = SelectorEngine.getSelectorFromElement(elem);
            const filterElement = SelectorEngine.find(selector).filter((foundElement)=>foundElement === this._element);
            if (selector !== null && filterElement.length) this._triggerArray.push(elem);
        }
        this._initializeChildren();
        if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        if (this._config.toggle) this.toggle();
    }
    // Getters
    static get Default() {
        return Default$a;
    }
    static get DefaultType() {
        return DefaultType$a;
    }
    static get NAME() {
        return NAME$b;
    }
    // Public
    toggle() {
        if (this._isShown()) this.hide();
        else this.show();
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let activeChildren = [];
        // find active children
        if (this._config.parent) activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element)=>element !== this._element).map((element)=>Collapse.getOrCreateInstance(element, {
                toggle: false
            }));
        if (activeChildren.length && activeChildren[0]._isTransitioning) return;
        const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
        if (startEvent.defaultPrevented) return;
        for (const activeInstance of activeChildren)activeInstance.hide();
        const dimension = this._getDimension();
        this._element.classList.remove(CLASS_NAME_COLLAPSE);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
            this._element.style[dimension] = "";
            EventHandler.trigger(this._element, EVENT_SHOWN$6);
        };
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
        if (this._isTransitioning || !this._isShown()) return;
        const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
        if (startEvent.defaultPrevented) return;
        const dimension = this._getDimension();
        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        for (const trigger of this._triggerArray){
            const element = SelectorEngine.getElementFromSelector(trigger);
            if (element && !this._isShown(element)) this._addAriaAndCollapsedClass([
                trigger
            ], false);
        }
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE);
            EventHandler.trigger(this._element, EVENT_HIDDEN$6);
        };
        this._element.style[dimension] = "";
        this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
        return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    // Private
    _configAfterMerge(config) {
        config.toggle = Boolean(config.toggle); // Coerce string values
        config.parent = getElement(config.parent);
        return config;
    }
    _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
        for (const element of children){
            const selected = SelectorEngine.getElementFromSelector(element);
            if (selected) this._addAriaAndCollapsedClass([
                element
            ], this._isShown(selected));
        }
    }
    _getFirstLevelChildren(selector) {
        const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        // remove children if greater depth
        return SelectorEngine.find(selector, this._config.parent).filter((element)=>!children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) return;
        for (const element of triggerArray){
            element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute("aria-expanded", isOpen);
        }
    }
    // Static
    static jQueryInterface(config) {
        const _config = {};
        if (typeof config === "string" && /show|hide/.test(config)) _config.toggle = false;
        return this.each(function() {
            const data = Collapse.getOrCreateInstance(this, _config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") event.preventDefault();
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this))Collapse.getOrCreateInstance(element, {
        toggle: false
    }).toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$a = "dropdown";
const DATA_KEY$6 = "bs.dropdown";
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = ".data-api";
const ESCAPE_KEY$2 = "Escape";
const TAB_KEY$1 = "Tab";
const ARROW_UP_KEY$1 = "ArrowUp";
const ARROW_DOWN_KEY$1 = "ArrowDown";
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SHOW$6 = "show";
const CLASS_NAME_DROPUP = "dropup";
const CLASS_NAME_DROPEND = "dropend";
const CLASS_NAME_DROPSTART = "dropstart";
const CLASS_NAME_DROPUP_CENTER = "dropup-center";
const CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
const SELECTOR_MENU = ".dropdown-menu";
const SELECTOR_NAVBAR = ".navbar";
const SELECTOR_NAVBAR_NAV = ".navbar-nav";
const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
const PLACEMENT_TOPCENTER = "top";
const PLACEMENT_BOTTOMCENTER = "bottom";
const Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [
        0,
        2
    ],
    popperConfig: null,
    reference: "toggle"
};
const DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
};
/**
 * Class definition
 */ class Dropdown extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._popper = null;
        this._parent = this._element.parentNode; // dropdown wrapper
        // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
        this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
        this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
        return Default$9;
    }
    static get DefaultType() {
        return DefaultType$9;
    }
    static get NAME() {
        return NAME$a;
    }
    // Public
    toggle() {
        return this._isShown() ? this.hide() : this.show();
    }
    show() {
        if (isDisabled(this._element) || this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
        if (showEvent.defaultPrevented) return;
        this._createPopper();
        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) for (const element of [].concat(...document.body.children))EventHandler.on(element, "mouseover", noop);
        this._element.focus();
        this._element.setAttribute("aria-expanded", true);
        this._menu.classList.add(CLASS_NAME_SHOW$6);
        this._element.classList.add(CLASS_NAME_SHOW$6);
        EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
        if (isDisabled(this._element) || !this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        this._completeHide(relatedTarget);
    }
    dispose() {
        if (this._popper) this._popper.destroy();
        super.dispose();
    }
    update() {
        this._inNavbar = this._detectNavbar();
        if (this._popper) this._popper.update();
    }
    // Private
    _completeHide(relatedTarget) {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
        if (hideEvent.defaultPrevented) return;
        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.off(element, "mouseover", noop);
        if (this._popper) this._popper.destroy();
        this._menu.classList.remove(CLASS_NAME_SHOW$6);
        this._element.classList.remove(CLASS_NAME_SHOW$6);
        this._element.setAttribute("aria-expanded", "false");
        Manipulator.removeDataAttribute(this._menu, "popper");
        EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
        config = super._getConfig(config);
        if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return config;
    }
    _createPopper() {
        if (typeof _core === "undefined") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let referenceElement = this._element;
        if (this._config.reference === "parent") referenceElement = this._parent;
        else if (isElement(this._config.reference)) referenceElement = getElement(this._config.reference);
        else if (typeof this._config.reference === "object") referenceElement = this._config.reference;
        const popperConfig = this._getPopperConfig();
        this._popper = _core.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
        return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
        const parentDropdown = this._parent;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) return PLACEMENT_TOPCENTER;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) return PLACEMENT_BOTTOMCENTER;
        // We need to trim the value because custom properties can also include spaces
        const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
        return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
        const { offset } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _getPopperConfig() {
        const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }
            ]
        };
        // Disable Popper if we have a static display or Dropdown is in Navbar
        if (this._inNavbar || this._config.display === "static") {
            Manipulator.setDataAttribute(this._menu, "popper", "static"); // TODO: v6 remove
            defaultBsPopperConfig.modifiers = [
                {
                    name: "applyStyles",
                    enabled: false
                }
            ];
        }
        return {
            ...defaultBsPopperConfig,
            ...execute(this._config.popperConfig, [
                defaultBsPopperConfig
            ])
        };
    }
    _selectMenuItem({ key, target }) {
        const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element)=>isVisible(element));
        if (!items.length) return;
        // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Dropdown.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
    static clearMenus(event) {
        if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) return;
        const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
        for (const toggle of openToggles){
            const context = Dropdown.getInstance(toggle);
            if (!context || context._config.autoClose === false) continue;
            const composedPath = event.composedPath();
            const isMenuTarget = composedPath.includes(context._menu);
            if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) continue;
            // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
            if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
            const relatedTarget = {
                relatedTarget: context._element
            };
            if (event.type === "click") relatedTarget.clickEvent = event;
            context._completeHide(relatedTarget);
        }
    }
    static dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command
        const isInput = /input|textarea/i.test(event.target.tagName);
        const isEscapeEvent = event.key === ESCAPE_KEY$2;
        const isUpOrDownEvent = [
            ARROW_UP_KEY$1,
            ARROW_DOWN_KEY$1
        ].includes(event.key);
        if (!isUpOrDownEvent && !isEscapeEvent) return;
        if (isInput && !isEscapeEvent) return;
        event.preventDefault();
        // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
        const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
        const instance = Dropdown.getOrCreateInstance(getToggleButton);
        if (isUpOrDownEvent) {
            event.stopPropagation();
            instance.show();
            instance._selectMenuItem(event);
            return;
        }
        if (instance._isShown()) {
            // else is escape and we check if it is shown
            event.stopPropagation();
            instance.hide();
            getToggleButton.focus();
        }
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * jQuery
 */ defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$9 = "backdrop";
const CLASS_NAME_FADE$4 = "fade";
const CLASS_NAME_SHOW$5 = "show";
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
const Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body" // give the choice to place backdrop under different elements
};
const DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
};
/**
 * Class definition
 */ class Backdrop extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isAppended = false;
        this._element = null;
    }
    // Getters
    static get Default() {
        return Default$8;
    }
    static get DefaultType() {
        return DefaultType$8;
    }
    static get NAME() {
        return NAME$9;
    }
    // Public
    show(callback) {
        if (!this._config.isVisible) {
            execute(callback);
            return;
        }
        this._append();
        const element = this._getElement();
        if (this._config.isAnimated) reflow(element);
        element.classList.add(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            execute(callback);
        });
    }
    hide(callback) {
        if (!this._config.isVisible) {
            execute(callback);
            return;
        }
        this._getElement().classList.remove(CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            this.dispose();
            execute(callback);
        });
    }
    dispose() {
        if (!this._isAppended) return;
        EventHandler.off(this._element, EVENT_MOUSEDOWN);
        this._element.remove();
        this._isAppended = false;
    }
    // Private
    _getElement() {
        if (!this._element) {
            const backdrop = document.createElement("div");
            backdrop.className = this._config.className;
            if (this._config.isAnimated) backdrop.classList.add(CLASS_NAME_FADE$4);
            this._element = backdrop;
        }
        return this._element;
    }
    _configAfterMerge(config) {
        // use getElement() with the default "body" to get a fresh Element on each instantiation
        config.rootElement = getElement(config.rootElement);
        return config;
    }
    _append() {
        if (this._isAppended) return;
        const element = this._getElement();
        this._config.rootElement.append(element);
        EventHandler.on(element, EVENT_MOUSEDOWN, ()=>{
            execute(this._config.clickCallback);
        });
        this._isAppended = true;
    }
    _emulateAnimation(callback) {
        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$8 = "focustrap";
const DATA_KEY$5 = "bs.focustrap";
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
const TAB_KEY = "Tab";
const TAB_NAV_FORWARD = "forward";
const TAB_NAV_BACKWARD = "backward";
const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
};
const DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
};
/**
 * Class definition
 */ class FocusTrap extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isActive = false;
        this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
        return Default$7;
    }
    static get DefaultType() {
        return DefaultType$7;
    }
    static get NAME() {
        return NAME$8;
    }
    // Public
    activate() {
        if (this._isActive) return;
        if (this._config.autofocus) this._config.trapElement.focus();
        EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
        EventHandler.on(document, EVENT_FOCUSIN$2, (event)=>this._handleFocusin(event));
        EventHandler.on(document, EVENT_KEYDOWN_TAB, (event)=>this._handleKeydown(event));
        this._isActive = true;
    }
    deactivate() {
        if (!this._isActive) return;
        this._isActive = false;
        EventHandler.off(document, EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
        const { trapElement } = this._config;
        if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) return;
        const elements = SelectorEngine.focusableChildren(trapElement);
        if (elements.length === 0) trapElement.focus();
        else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
        else elements[0].focus();
    }
    _handleKeydown(event) {
        if (event.key !== TAB_KEY) return;
        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
const SELECTOR_STICKY_CONTENT = ".sticky-top";
const PROPERTY_PADDING = "padding-right";
const PROPERTY_MARGIN = "margin-right";
/**
 * Class definition
 */ class ScrollBarHelper {
    constructor(){
        this._element = document.body;
    }
    // Public
    getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
        const width = this.getWidth();
        this._disableOverFlow();
        // give padding to element to balance the hidden scrollbar width
        this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
        // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
        this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
        this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue)=>calculatedValue - width);
    }
    reset() {
        this._resetElementAttributes(this._element, "overflow");
        this._resetElementAttributes(this._element, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
        return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow");
        this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
        const scrollbarWidth = this.getWidth();
        const manipulationCallBack = (element)=>{
            if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
            this._saveInitialAttribute(element, styleProperty);
            const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
            element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
        const actualValue = element.style.getPropertyValue(styleProperty);
        if (actualValue) Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
    _resetElementAttributes(selector, styleProperty) {
        const manipulationCallBack = (element)=>{
            const value = Manipulator.getDataAttribute(element, styleProperty);
            // We only want to remove the property if the value is `null`; the value can also be zero
            if (value === null) {
                element.style.removeProperty(styleProperty);
                return;
            }
            Manipulator.removeDataAttribute(element, styleProperty);
            element.style.setProperty(styleProperty, value);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
        if (isElement(selector)) {
            callBack(selector);
            return;
        }
        for (const sel of SelectorEngine.find(selector, this._element))callBack(sel);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$7 = "modal";
const DATA_KEY$4 = "bs.modal";
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const DATA_API_KEY$2 = ".data-api";
const ESCAPE_KEY$1 = "Escape";
const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
const CLASS_NAME_OPEN = "modal-open";
const CLASS_NAME_FADE$3 = "fade";
const CLASS_NAME_SHOW$4 = "show";
const CLASS_NAME_STATIC = "modal-static";
const OPEN_SELECTOR$1 = ".modal.show";
const SELECTOR_DIALOG = ".modal-dialog";
const SELECTOR_MODAL_BODY = ".modal-body";
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
};
const DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
};
/**
 * Class definition
 */ class Modal extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._isShown = false;
        this._isTransitioning = false;
        this._scrollBar = new ScrollBarHelper();
        this._addEventListeners();
    }
    // Getters
    static get Default() {
        return Default$6;
    }
    static get DefaultType() {
        return DefaultType$6;
    }
    static get NAME() {
        return NAME$7;
    }
    // Public
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown || this._isTransitioning) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
            relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add(CLASS_NAME_OPEN);
        this._adjustDialog();
        this._backdrop.show(()=>this._showElement(relatedTarget));
    }
    hide() {
        if (!this._isShown || this._isTransitioning) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
        if (hideEvent.defaultPrevented) return;
        this._isShown = false;
        this._isTransitioning = true;
        this._focustrap.deactivate();
        this._element.classList.remove(CLASS_NAME_SHOW$4);
        this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
        EventHandler.off(window, EVENT_KEY$4);
        EventHandler.off(this._dialog, EVENT_KEY$4);
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    handleUpdate() {
        this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
        return new Backdrop({
            isVisible: Boolean(this._config.backdrop),
            // 'static' option will be translated to true, and booleans will keep their value,
            isAnimated: this._isAnimated()
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _showElement(relatedTarget) {
        // try to append dynamic modal
        if (!document.body.contains(this._element)) document.body.append(this._element);
        this._element.style.display = "block";
        this._element.removeAttribute("aria-hidden");
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.scrollTop = 0;
        const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
        if (modalBody) modalBody.scrollTop = 0;
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW$4);
        const transitionComplete = ()=>{
            if (this._config.focus) this._focustrap.activate();
            this._isTransitioning = false;
            EventHandler.trigger(this._element, EVENT_SHOWN$4, {
                relatedTarget
            });
        };
        this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event)=>{
            if (event.key !== ESCAPE_KEY$1) return;
            if (this._config.keyboard) {
                this.hide();
                return;
            }
            this._triggerBackdropTransition();
        });
        EventHandler.on(window, EVENT_RESIZE$1, ()=>{
            if (this._isShown && !this._isTransitioning) this._adjustDialog();
        });
        EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event)=>{
            // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
            EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2)=>{
                if (this._element !== event.target || this._element !== event2.target) return;
                if (this._config.backdrop === "static") {
                    this._triggerBackdropTransition();
                    return;
                }
                if (this._config.backdrop) this.hide();
            });
        });
    }
    _hideModal() {
        this._element.style.display = "none";
        this._element.setAttribute("aria-hidden", true);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        this._isTransitioning = false;
        this._backdrop.hide(()=>{
            document.body.classList.remove(CLASS_NAME_OPEN);
            this._resetAdjustments();
            this._scrollBar.reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$4);
        });
    }
    _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
        if (hideEvent.defaultPrevented) return;
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const initialOverflowY = this._element.style.overflowY;
        // return if the following background transition hasn't yet completed
        if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) return;
        if (!isModalOverflowing) this._element.style.overflowY = "hidden";
        this._element.classList.add(CLASS_NAME_STATIC);
        this._queueCallback(()=>{
            this._element.classList.remove(CLASS_NAME_STATIC);
            this._queueCallback(()=>{
                this._element.style.overflowY = initialOverflowY;
            }, this._dialog);
        }, this._dialog);
        this._element.focus();
    }
    /**
   * The following methods are used to handle overflowing modals
   */ _adjustDialog() {
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const scrollbarWidth = this._scrollBar.getWidth();
        const isBodyOverflowing = scrollbarWidth > 0;
        if (isBodyOverflowing && !isModalOverflowing) {
            const property = isRTL() ? "paddingLeft" : "paddingRight";
            this._element.style[property] = `${scrollbarWidth}px`;
        }
        if (!isBodyOverflowing && isModalOverflowing) {
            const property = isRTL() ? "paddingRight" : "paddingLeft";
            this._element.style[property] = `${scrollbarWidth}px`;
        }
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = "";
        this._element.style.paddingRight = "";
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
        return this.each(function() {
            const data = Modal.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config](relatedTarget);
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    EventHandler.one(target, EVENT_SHOW$4, (showEvent)=>{
        if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
        return;
        EventHandler.one(target, EVENT_HIDDEN$4, ()=>{
            if (isVisible(this)) this.focus();
        });
    });
    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) Modal.getInstance(alreadyOpen).hide();
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * jQuery
 */ defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$6 = "offcanvas";
const DATA_KEY$3 = "bs.offcanvas";
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const DATA_API_KEY$1 = ".data-api";
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
const ESCAPE_KEY = "Escape";
const CLASS_NAME_SHOW$3 = "show";
const CLASS_NAME_SHOWING$1 = "showing";
const CLASS_NAME_HIDING = "hiding";
const CLASS_NAME_BACKDROP = "offcanvas-backdrop";
const OPEN_SELECTOR = ".offcanvas.show";
const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
};
const DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
};
/**
 * Class definition
 */ class Offcanvas extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isShown = false;
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._addEventListeners();
    }
    // Getters
    static get Default() {
        return Default$5;
    }
    static get DefaultType() {
        return DefaultType$5;
    }
    static get NAME() {
        return NAME$6;
    }
    // Public
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown) return;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
            relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._backdrop.show();
        if (!this._config.scroll) new ScrollBarHelper().hide();
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.classList.add(CLASS_NAME_SHOWING$1);
        const completeCallBack = ()=>{
            if (!this._config.scroll || this._config.backdrop) this._focustrap.activate();
            this._element.classList.add(CLASS_NAME_SHOW$3);
            this._element.classList.remove(CLASS_NAME_SHOWING$1);
            EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                relatedTarget
            });
        };
        this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
        if (!this._isShown) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
        if (hideEvent.defaultPrevented) return;
        this._focustrap.deactivate();
        this._element.blur();
        this._isShown = false;
        this._element.classList.add(CLASS_NAME_HIDING);
        this._backdrop.hide();
        const completeCallback = ()=>{
            this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            if (!this._config.scroll) new ScrollBarHelper().reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$3);
        };
        this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    // Private
    _initializeBackDrop() {
        const clickCallback = ()=>{
            if (this._config.backdrop === "static") {
                EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                return;
            }
            this.hide();
        };
        // 'static' option will be translated to true, and booleans will keep their value
        const isVisible = Boolean(this._config.backdrop);
        return new Backdrop({
            className: CLASS_NAME_BACKDROP,
            isVisible,
            isAnimated: true,
            rootElement: this._element.parentNode,
            clickCallback: isVisible ? clickCallback : null
        });
    }
    _initializeFocusTrap() {
        return new FocusTrap({
            trapElement: this._element
        });
    }
    _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event)=>{
            if (event.key !== ESCAPE_KEY) return;
            if (this._config.keyboard) {
                this.hide();
                return;
            }
            EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        });
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Offcanvas.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    EventHandler.one(target, EVENT_HIDDEN$3, ()=>{
        // focus on trigger when it is closed
        if (isVisible(this)) this.focus();
    });
    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) Offcanvas.getInstance(alreadyOpen).hide();
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, ()=>{
    for (const selector of SelectorEngine.find(OPEN_SELECTOR))Offcanvas.getOrCreateInstance(selector).show();
});
EventHandler.on(window, EVENT_RESIZE, ()=>{
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]"))if (getComputedStyle(element).position !== "fixed") Offcanvas.getOrCreateInstance(element).hide();
});
enableDismissTrigger(Offcanvas);
/**
 * jQuery
 */ defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ // js-docs-start allow-list
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": [
        "class",
        "dir",
        "id",
        "lang",
        "role",
        ARIA_ATTRIBUTE_PATTERN
    ],
    a: [
        "target",
        "href",
        "title",
        "rel"
    ],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: [
        "src",
        "srcset",
        "alt",
        "title",
        "width",
        "height"
    ],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
// js-docs-end allow-list
const uriAttributes = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
]);
/**
 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
 * contexts.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
 */ // eslint-disable-next-line unicorn/better-regex
const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
const allowedAttribute = (attribute, allowedAttributeList)=>{
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
        if (uriAttributes.has(attributeName)) return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
        return true;
    }
    // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter((attributeRegex)=>attributeRegex instanceof RegExp).some((regex)=>regex.test(attributeName));
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) return unsafeHtml;
    if (sanitizeFunction && typeof sanitizeFunction === "function") return sanitizeFunction(unsafeHtml);
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements){
        const elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
        }
        const attributeList = [].concat(...element.attributes);
        const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
        for (const attribute of attributeList)if (!allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
    }
    return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$5 = "TemplateFactory";
const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
};
const DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
};
const DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
};
/**
 * Class definition
 */ class TemplateFactory extends Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
        return Default$4;
    }
    static get DefaultType() {
        return DefaultType$4;
    }
    static get NAME() {
        return NAME$5;
    }
    // Public
    getContent() {
        return Object.values(this._config.content).map((config)=>this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
        return this.getContent().length > 0;
    }
    changeContent(content) {
        this._checkContent(content);
        this._config.content = {
            ...this._config.content,
            ...content
        };
        return this;
    }
    toHtml() {
        const templateWrapper = document.createElement("div");
        templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
        for (const [selector, text] of Object.entries(this._config.content))this._setContent(templateWrapper, text, selector);
        const template = templateWrapper.children[0];
        const extraClass = this._resolvePossibleFunction(this._config.extraClass);
        if (extraClass) template.classList.add(...extraClass.split(" "));
        return template;
    }
    // Private
    _typeCheckConfig(config) {
        super._typeCheckConfig(config);
        this._checkContent(config.content);
    }
    _checkContent(arg) {
        for (const [selector, content] of Object.entries(arg))super._typeCheckConfig({
            selector,
            entry: content
        }, DefaultContentType);
    }
    _setContent(template, content, selector) {
        const templateElement = SelectorEngine.findOne(selector, template);
        if (!templateElement) return;
        content = this._resolvePossibleFunction(content);
        if (!content) {
            templateElement.remove();
            return;
        }
        if (isElement(content)) {
            this._putElementInTemplate(getElement(content), templateElement);
            return;
        }
        if (this._config.html) {
            templateElement.innerHTML = this._maybeSanitize(content);
            return;
        }
        templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
        return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
        return execute(arg, [
            this
        ]);
    }
    _putElementInTemplate(element, templateElement) {
        if (this._config.html) {
            templateElement.innerHTML = "";
            templateElement.append(element);
            return;
        }
        templateElement.textContent = element.textContent;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$4 = "tooltip";
const DISALLOWED_ATTRIBUTES = new Set([
    "sanitize",
    "allowList",
    "sanitizeFn"
]);
const CLASS_NAME_FADE$2 = "fade";
const CLASS_NAME_MODAL = "modal";
const CLASS_NAME_SHOW$2 = "show";
const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = "hide.bs.modal";
const TRIGGER_HOVER = "hover";
const TRIGGER_FOCUS = "focus";
const TRIGGER_CLICK = "click";
const TRIGGER_MANUAL = "manual";
const EVENT_HIDE$2 = "hide";
const EVENT_HIDDEN$2 = "hidden";
const EVENT_SHOW$2 = "show";
const EVENT_SHOWN$2 = "shown";
const EVENT_INSERTED = "inserted";
const EVENT_CLICK$1 = "click";
const EVENT_FOCUSIN$1 = "focusin";
const EVENT_FOCUSOUT$1 = "focusout";
const EVENT_MOUSEENTER = "mouseenter";
const EVENT_MOUSELEAVE = "mouseleave";
const AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
};
const Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: [
        "top",
        "right",
        "bottom",
        "left"
    ],
    html: false,
    offset: [
        0,
        6
    ],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
};
const DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
};
/**
 * Class definition
 */ class Tooltip extends BaseComponent {
    constructor(element, config){
        if (typeof _core === "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(element, config);
        // Private
        this._isEnabled = true;
        this._timeout = 0;
        this._isHovered = null;
        this._activeTrigger = {};
        this._popper = null;
        this._templateFactory = null;
        this._newContent = null;
        // Protected
        this.tip = null;
        this._setListeners();
        if (!this._config.selector) this._fixTitle();
    }
    // Getters
    static get Default() {
        return Default$3;
    }
    static get DefaultType() {
        return DefaultType$3;
    }
    static get NAME() {
        return NAME$4;
    }
    // Public
    enable() {
        this._isEnabled = true;
    }
    disable() {
        this._isEnabled = false;
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled;
    }
    toggle() {
        if (!this._isEnabled) return;
        this._activeTrigger.click = !this._activeTrigger.click;
        if (this._isShown()) {
            this._leave();
            return;
        }
        this._enter();
    }
    dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this._element.getAttribute("data-bs-original-title")) this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
        this._disposePopper();
        super.dispose();
    }
    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
        const shadowRoot = findShadowRoot(this._element);
        const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) return;
        // TODO: v6 remove this or make it optional
        this._disposePopper();
        const tip = this._getTipElement();
        this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
        const { container } = this._config;
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
        }
        this._popper = this._createPopper(tip);
        tip.classList.add(CLASS_NAME_SHOW$2);
        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.on(element, "mouseover", noop);
        const complete = ()=>{
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
            if (this._isHovered === false) this._leave();
            this._isHovered = false;
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
        if (!this._isShown()) return;
        const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
        if (hideEvent.defaultPrevented) return;
        const tip = this._getTipElement();
        tip.classList.remove(CLASS_NAME_SHOW$2);
        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))EventHandler.off(element, "mouseover", noop);
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        this._isHovered = null; // it is a trick to support manual triggering
        const complete = ()=>{
            if (this._isWithActiveTrigger()) return;
            if (!this._isHovered) this._disposePopper();
            this._element.removeAttribute("aria-describedby");
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
        if (this._popper) this._popper.update();
    }
    // Protected
    _isWithContent() {
        return Boolean(this._getTitle());
    }
    _getTipElement() {
        if (!this.tip) this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
        return this.tip;
    }
    _createTipElement(content) {
        const tip = this._getTemplateFactory(content).toHtml();
        // TODO: remove this check in v6
        if (!tip) return null;
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
        // TODO: v6 the following can be achieved with CSS only
        tip.classList.add(`bs-${this.constructor.NAME}-auto`);
        const tipId = getUID(this.constructor.NAME).toString();
        tip.setAttribute("id", tipId);
        if (this._isAnimated()) tip.classList.add(CLASS_NAME_FADE$2);
        return tip;
    }
    setContent(content) {
        this._newContent = content;
        if (this._isShown()) {
            this._disposePopper();
            this.show();
        }
    }
    _getTemplateFactory(content) {
        if (this._templateFactory) this._templateFactory.changeContent(content);
        else this._templateFactory = new TemplateFactory({
            ...this._config,
            // the `content` var has to be after `this._config`
            // to override config.content in case of popover
            content,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
        return this._templateFactory;
    }
    _getContentForTemplate() {
        return {
            [SELECTOR_TOOLTIP_INNER]: this._getTitle()
        };
    }
    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
        return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
        const placement = execute(this._config.placement, [
            this,
            tip,
            this._element
        ]);
        const attachment = AttachmentMap[placement.toUpperCase()];
        return _core.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
        const { offset } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _resolvePossibleFunction(arg) {
        return execute(arg, [
            this._element
        ]);
    }
    _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
                {
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                },
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                },
                {
                    name: "preSetPlacement",
                    enabled: true,
                    phase: "beforeMain",
                    fn: (data)=>{
                        // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                        // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                        this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
                    }
                }
            ]
        };
        return {
            ...defaultBsPopperConfig,
            ...execute(this._config.popperConfig, [
                defaultBsPopperConfig
            ])
        };
    }
    _setListeners() {
        const triggers = this._config.trigger.split(" ");
        for (const trigger of triggers){
            if (trigger === "click") EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event)=>{
                const context = this._initializeOnDelegatedTarget(event);
                context.toggle();
            });
            else if (trigger !== TRIGGER_MANUAL) {
                const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
                const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
                EventHandler.on(this._element, eventIn, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                    context._enter();
                });
                EventHandler.on(this._element, eventOut, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                    context._leave();
                });
            }
        }
        this._hideModalHandler = ()=>{
            if (this._element) this.hide();
        };
        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
        const title = this._element.getAttribute("title");
        if (!title) return;
        if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) this._element.setAttribute("aria-label", title);
        this._element.setAttribute("data-bs-original-title", title); // DO NOT USE IT. Is only for backwards compatibility
        this._element.removeAttribute("title");
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = true;
            return;
        }
        this._isHovered = true;
        this._setTimeout(()=>{
            if (this._isHovered) this.show();
        }, this._config.delay.show);
    }
    _leave() {
        if (this._isWithActiveTrigger()) return;
        this._isHovered = false;
        this._setTimeout(()=>{
            if (!this._isHovered) this.hide();
        }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
        const dataAttributes = Manipulator.getDataAttributes(this._element);
        for (const dataAttribute of Object.keys(dataAttributes))if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) delete dataAttributes[dataAttribute];
        config = {
            ...dataAttributes,
            ...typeof config === "object" && config ? config : {}
        };
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        config.container = config.container === false ? document.body : getElement(config.container);
        if (typeof config.delay === "number") config.delay = {
            show: config.delay,
            hide: config.delay
        };
        if (typeof config.title === "number") config.title = config.title.toString();
        if (typeof config.content === "number") config.content = config.content.toString();
        return config;
    }
    _getDelegateConfig() {
        const config = {};
        for (const [key, value] of Object.entries(this._config))if (this.constructor.Default[key] !== value) config[key] = value;
        config.selector = false;
        config.trigger = "manual";
        // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config;
    }
    _disposePopper() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
        if (this.tip) {
            this.tip.remove();
            this.tip = null;
        }
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Tooltip.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$3 = "popover";
const SELECTOR_TITLE = ".popover-header";
const SELECTOR_CONTENT = ".popover-body";
const Default$2 = {
    ...Tooltip.Default,
    content: "",
    offset: [
        0,
        8
    ],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
};
const DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: "(null|string|element|function)"
};
/**
 * Class definition
 */ class Popover extends Tooltip {
    // Getters
    static get Default() {
        return Default$2;
    }
    static get DefaultType() {
        return DefaultType$2;
    }
    static get NAME() {
        return NAME$3;
    }
    // Overrides
    _isWithContent() {
        return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
        return {
            [SELECTOR_TITLE]: this._getTitle(),
            [SELECTOR_CONTENT]: this._getContent()
        };
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Popover.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$2 = "scrollspy";
const DATA_KEY$2 = "bs.scrollspy";
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY = ".data-api";
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_CLICK = `click${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
const CLASS_NAME_ACTIVE$1 = "active";
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_TARGET_LINKS = "[href]";
const SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
const SELECTOR_NAV_LINKS = ".nav-link";
const SELECTOR_NAV_ITEMS = ".nav-item";
const SELECTOR_LIST_ITEMS = ".list-group-item";
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
const SELECTOR_DROPDOWN = ".dropdown";
const SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [
        0.1,
        0.5,
        1
    ]
};
const DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
};
/**
 * Class definition
 */ class ScrollSpy extends BaseComponent {
    constructor(element, config){
        super(element, config);
        // this._element is the observablesContainer and config.target the menu links wrapper
        this._targetLinks = new Map();
        this._observableSections = new Map();
        this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
        this._activeTarget = null;
        this._observer = null;
        this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
        };
        this.refresh(); // initialize
    }
    // Getters
    static get Default() {
        return Default$1;
    }
    static get DefaultType() {
        return DefaultType$1;
    }
    static get NAME() {
        return NAME$2;
    }
    // Public
    refresh() {
        this._initializeTargetsAndObservables();
        this._maybeEnableSmoothScroll();
        if (this._observer) this._observer.disconnect();
        else this._observer = this._getNewObserver();
        for (const section of this._observableSections.values())this._observer.observe(section);
    }
    dispose() {
        this._observer.disconnect();
        super.dispose();
    }
    // Private
    _configAfterMerge(config) {
        // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
        config.target = getElement(config.target) || document.body;
        // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
        config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
        if (typeof config.threshold === "string") config.threshold = config.threshold.split(",").map((value)=>Number.parseFloat(value));
        return config;
    }
    _maybeEnableSmoothScroll() {
        if (!this._config.smoothScroll) return;
        // unregister any previous listeners
        EventHandler.off(this._config.target, EVENT_CLICK);
        EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event)=>{
            const observableSection = this._observableSections.get(event.target.hash);
            if (observableSection) {
                event.preventDefault();
                const root = this._rootElement || window;
                const height = observableSection.offsetTop - this._element.offsetTop;
                if (root.scrollTo) {
                    root.scrollTo({
                        top: height,
                        behavior: "smooth"
                    });
                    return;
                }
                // Chrome 60 doesn't support `scrollTo`
                root.scrollTop = height;
            }
        });
    }
    _getNewObserver() {
        const options = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((entries)=>this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
        const targetElement = (entry)=>this._targetLinks.get(`#${entry.target.id}`);
        const activate = (entry)=>{
            this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
            this._process(targetElement(entry));
        };
        const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
        const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = parentScrollTop;
        for (const entry of entries){
            if (!entry.isIntersecting) {
                this._activeTarget = null;
                this._clearActiveClass(targetElement(entry));
                continue;
            }
            const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            // if we are scrolling down, pick the bigger offsetTop
            if (userScrollsDown && entryIsLowerThanPrevious) {
                activate(entry);
                // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
                if (!parentScrollTop) return;
                continue;
            }
            // if we are scrolling up, pick the smallest offsetTop
            if (!userScrollsDown && !entryIsLowerThanPrevious) activate(entry);
        }
    }
    _initializeTargetsAndObservables() {
        this._targetLinks = new Map();
        this._observableSections = new Map();
        const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
        for (const anchor of targetLinks){
            // ensure that the anchor has an id and is not disabled
            if (!anchor.hash || isDisabled(anchor)) continue;
            const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
            // ensure that the observableSection exists & is visible
            if (isVisible(observableSection)) {
                this._targetLinks.set(decodeURI(anchor.hash), anchor);
                this._observableSections.set(anchor.hash, observableSection);
            }
        }
    }
    _process(target) {
        if (this._activeTarget === target) return;
        this._clearActiveClass(this._config.target);
        this._activeTarget = target;
        target.classList.add(CLASS_NAME_ACTIVE$1);
        this._activateParents(target);
        EventHandler.trigger(this._element, EVENT_ACTIVATE, {
            relatedTarget: target
        });
    }
    _activateParents(target) {
        // Activate dropdown parents
        if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
            SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
            return;
        }
        for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP))// Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS))item.classList.add(CLASS_NAME_ACTIVE$1);
    }
    _clearActiveClass(parent) {
        parent.classList.remove(CLASS_NAME_ACTIVE$1);
        const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
        for (const node of activeNodes)node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = ScrollSpy.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(window, EVENT_LOAD_DATA_API$1, ()=>{
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY))ScrollSpy.getOrCreateInstance(spy);
});
/**
 * jQuery
 */ defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME$1 = "tab";
const DATA_KEY$1 = "bs.tab";
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
const ARROW_LEFT_KEY = "ArrowLeft";
const ARROW_RIGHT_KEY = "ArrowRight";
const ARROW_UP_KEY = "ArrowUp";
const ARROW_DOWN_KEY = "ArrowDown";
const HOME_KEY = "Home";
const END_KEY = "End";
const CLASS_NAME_ACTIVE = "active";
const CLASS_NAME_FADE$1 = "fade";
const CLASS_NAME_SHOW$1 = "show";
const CLASS_DROPDOWN = "dropdown";
const SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
const SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const SELECTOR_OUTER = ".nav-item, .list-group-item";
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
/**
 * Class definition
 */ class Tab extends BaseComponent {
    constructor(element){
        super(element);
        this._parent = this._element.closest(SELECTOR_TAB_PANEL);
        if (!this._parent) return;
        // Set up initial aria attributes
        this._setInitialAttributes(this._parent, this._getChildren());
        EventHandler.on(this._element, EVENT_KEYDOWN, (event)=>this._keydown(event));
    }
    // Getters
    static get NAME() {
        return NAME$1;
    }
    // Public
    show() {
        // Shows this elem and deactivate the active sibling if exists
        const innerElem = this._element;
        if (this._elemIsActive(innerElem)) return;
        // Search for active tab on same parent to deactivate it
        const active = this._getActiveElem();
        const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
            relatedTarget: innerElem
        }) : null;
        const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
            relatedTarget: active
        });
        if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) return;
        this._deactivate(active, innerElem);
        this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
        if (!element) return;
        element.classList.add(CLASS_NAME_ACTIVE);
        this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.add(CLASS_NAME_SHOW$1);
                return;
            }
            element.removeAttribute("tabindex");
            element.setAttribute("aria-selected", true);
            this._toggleDropDown(element, true);
            EventHandler.trigger(element, EVENT_SHOWN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
        if (!element) return;
        element.classList.remove(CLASS_NAME_ACTIVE);
        element.blur();
        this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.remove(CLASS_NAME_SHOW$1);
                return;
            }
            element.setAttribute("aria-selected", false);
            element.setAttribute("tabindex", "-1");
            this._toggleDropDown(element, false);
            EventHandler.trigger(element, EVENT_HIDDEN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
        if (![
            ARROW_LEFT_KEY,
            ARROW_RIGHT_KEY,
            ARROW_UP_KEY,
            ARROW_DOWN_KEY,
            HOME_KEY,
            END_KEY
        ].includes(event.key)) return;
        event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
        event.preventDefault();
        const children = this._getChildren().filter((element)=>!isDisabled(element));
        let nextActiveElement;
        if ([
            HOME_KEY,
            END_KEY
        ].includes(event.key)) nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
        else {
            const isNext = [
                ARROW_RIGHT_KEY,
                ARROW_DOWN_KEY
            ].includes(event.key);
            nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
        }
        if (nextActiveElement) {
            nextActiveElement.focus({
                preventScroll: true
            });
            Tab.getOrCreateInstance(nextActiveElement).show();
        }
    }
    _getChildren() {
        // collection of inner elements
        return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
        return this._getChildren().find((child)=>this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
        this._setAttributeIfNotExists(parent, "role", "tablist");
        for (const child of children)this._setInitialAttributesOnChild(child);
    }
    _setInitialAttributesOnChild(child) {
        child = this._getInnerElement(child);
        const isActive = this._elemIsActive(child);
        const outerElem = this._getOuterElement(child);
        child.setAttribute("aria-selected", isActive);
        if (outerElem !== child) this._setAttributeIfNotExists(outerElem, "role", "presentation");
        if (!isActive) child.setAttribute("tabindex", "-1");
        this._setAttributeIfNotExists(child, "role", "tab");
        // set attributes to the related panel too
        this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
        const target = SelectorEngine.getElementFromSelector(child);
        if (!target) return;
        this._setAttributeIfNotExists(target, "role", "tabpanel");
        if (child.id) this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
    }
    _toggleDropDown(element, open) {
        const outerElem = this._getOuterElement(element);
        if (!outerElem.classList.contains(CLASS_DROPDOWN)) return;
        const toggle = (selector, className)=>{
            const element = SelectorEngine.findOne(selector, outerElem);
            if (element) element.classList.toggle(className, open);
        };
        toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
        toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
        outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
        if (!element.hasAttribute(attribute)) element.setAttribute(attribute, value);
    }
    _elemIsActive(elem) {
        return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
        return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
        return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Tab.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    Tab.getOrCreateInstance(this).show();
});
/**
 * Initialize on focus
 */ EventHandler.on(window, EVENT_LOAD_DATA_API, ()=>{
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE))Tab.getOrCreateInstance(element);
});
/**
 * jQuery
 */ defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const NAME = "toast";
const DATA_KEY = "bs.toast";
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = "fade";
const CLASS_NAME_HIDE = "hide"; // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = "show";
const CLASS_NAME_SHOWING = "showing";
const DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
};
const Default = {
    animation: true,
    autohide: true,
    delay: 5000
};
/**
 * Class definition
 */ class Toast extends BaseComponent {
    constructor(element, config){
        super(element, config);
        this._timeout = null;
        this._hasMouseInteraction = false;
        this._hasKeyboardInteraction = false;
        this._setListeners();
    }
    // Getters
    static get Default() {
        return Default;
    }
    static get DefaultType() {
        return DefaultType;
    }
    static get NAME() {
        return NAME;
    }
    // Public
    show() {
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
        if (showEvent.defaultPrevented) return;
        this._clearTimeout();
        if (this._config.animation) this._element.classList.add(CLASS_NAME_FADE);
        const complete = ()=>{
            this._element.classList.remove(CLASS_NAME_SHOWING);
            EventHandler.trigger(this._element, EVENT_SHOWN);
            this._maybeScheduleHide();
        };
        this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
        reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
        if (!this.isShown()) return;
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
        if (hideEvent.defaultPrevented) return;
        const complete = ()=>{
            this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
            this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
            EventHandler.trigger(this._element, EVENT_HIDDEN);
        };
        this._element.classList.add(CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
        this._clearTimeout();
        if (this.isShown()) this._element.classList.remove(CLASS_NAME_SHOW);
        super.dispose();
    }
    isShown() {
        return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
        if (!this._config.autohide) return;
        if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
        this._timeout = setTimeout(()=>{
            this.hide();
        }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
        switch(event.type){
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = isInteracting;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = isInteracting;
                break;
        }
        if (isInteracting) {
            this._clearTimeout();
            return;
        }
        const nextElement = event.relatedTarget;
        if (this._element === nextElement || this._element.contains(nextElement)) return;
        this._maybeScheduleHide();
    }
    _setListeners() {
        EventHandler.on(this._element, EVENT_MOUSEOVER, (event)=>this._onInteraction(event, true));
        EventHandler.on(this._element, EVENT_MOUSEOUT, (event)=>this._onInteraction(event, false));
        EventHandler.on(this._element, EVENT_FOCUSIN, (event)=>this._onInteraction(event, true));
        EventHandler.on(this._element, EVENT_FOCUSOUT, (event)=>this._onInteraction(event, false));
    }
    _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = Toast.getOrCreateInstance(this, config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config](this);
            }
        });
    }
}
/**
 * Data API implementation
 */ enableDismissTrigger(Toast);
/**
 * jQuery
 */ defineJQueryPlugin(Toast);

},{"@popperjs/core":"7unqC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7unqC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"lCAq5","./modifiers/index.js":"cap3W","./createPopper.js":"cHuNp","./popper.js":"1PuRF","./popper-lite.js":"gKW1N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cap3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"4iMn4","./arrow.js":"31HFW","./computeStyles.js":"gDlm2","./eventListeners.js":"hBKsL","./flip.js":"fv5wq","./hide.js":"2g4OF","./offset.js":"3GKVY","./popperOffsets.js":"6I679","./preventOverflow.js":"1AMhb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iMn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2Qom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeName);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYFUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SkOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindow);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31HFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};

},{"../utils/getBasePlacement.js":"59Wp3","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/contains.js":"4QxRR","../dom-utils/getOffsetParent.js":"laoYw","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/within.js":"3glSz","../utils/mergePaddingObject.js":"lEIf9","../utils/expandToHashMap.js":"iQlH5","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Wp3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBasePlacement);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvjuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getLayoutRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CFSQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBoundingClientRect);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}

},{"./instanceOf.js":"gYFUC","../utils/math.js":"gQqVe","./getWindow.js":"2SkOo","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQqVe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ipHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isLayoutViewport);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}

},{"../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hEx0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUAString);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QxRR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laoYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOffsetParent);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","./getParentNode.js":"bIHpd","../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mZjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getComputedStyle);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qBb7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isTableElement);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIHpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getParentNode);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ9Y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentElement);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xlom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getMainAxisFromPlacement);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3glSz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEIf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergePaddingObject);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}

},{"./getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4xOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFreshSideObject);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQlH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>expandToHashMap);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDlm2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, _getWindowJsDefault.default)(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","../utils/getVariation.js":"hIo7Y","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIo7Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getVariation);
function getVariation(placement) {
    return placement.split("-")[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBKsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fv5wq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"a8CY0","../utils/getBasePlacement.js":"59Wp3","../utils/getOppositeVariationPlacement.js":"bKTLC","../utils/detectOverflow.js":"ltCuw","../utils/computeAutoPlacement.js":"gytMj","../enums.js":"lCAq5","../utils/getVariation.js":"hIo7Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8CY0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositePlacement);
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKTLC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositeVariationPlacement);
var hash = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltCuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>detectOverflow);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}

},{"../dom-utils/getClippingRect.js":"eeg2s","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getBoundingClientRect.js":"9CFSQ","./computeOffsets.js":"7jtXk","./rectToClientRect.js":"cQ3tg","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","./mergePaddingObject.js":"lEIf9","./expandToHashMap.js":"iQlH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeg2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getClippingRect);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element, strategy)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

},{"../enums.js":"lCAq5","./getViewportRect.js":"cnH2G","./getDocumentRect.js":"d94SC","./listScrollParents.js":"2di3T","./getOffsetParent.js":"laoYw","./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./getBoundingClientRect.js":"9CFSQ","./getParentNode.js":"bIHpd","./contains.js":"4QxRR","./getNodeName.js":"a2Qom","../utils/rectToClientRect.js":"cQ3tg","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnH2G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getViewportRect);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getViewportRect(element, strategy) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, _isLayoutViewportJsDefault.default)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}

},{"./getWindow.js":"2SkOo","./getDocumentElement.js":"eJ9Y1","./getWindowScrollBarX.js":"sz4Ld","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sz4Ld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScrollBarX);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XUtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScroll);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d94SC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentRect);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === "rtl") x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}

},{"./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./getWindowScrollBarX.js":"sz4Ld","./getWindowScroll.js":"1XUtN","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2di3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>listScrollParents);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy4ZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getScrollParent);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rLGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isScrollParent);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ3tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rectToClientRect);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jtXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeOffsets);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gytMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeAutoPlacement);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}

},{"./getVariation.js":"hIo7Y","../enums.js":"lCAq5","./detectOverflow.js":"ltCuw","./getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2g4OF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: hide
};

},{"../enums.js":"lCAq5","../utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GKVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"59Wp3","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I679":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AMhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === "x" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};

},{"../enums.js":"lCAq5","../utils/getBasePlacement.js":"59Wp3","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/getAltAxis.js":"59FWE","../utils/within.js":"3glSz","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/getOffsetParent.js":"laoYw","../utils/detectOverflow.js":"ltCuw","../utils/getVariation.js":"hIo7Y","../utils/getFreshSideObject.js":"g4xOt","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59FWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getAltAxis);
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHuNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/mergeByName.js":"2zTVN","./utils/detectOverflow.js":"ltCuw","./dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijPls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getCompositeRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBjCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeScroll);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pwY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getHTMLElementScroll);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N0VO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>orderModifiers);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6Chr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>debounce);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zTVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeByName);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PuRF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","./modifiers/offset.js":"3GKVY","./modifiers/flip.js":"fv5wq","./modifiers/preventOverflow.js":"1AMhb","./modifiers/arrow.js":"31HFW","./modifiers/hide.js":"2g4OF","./popper-lite.js":false,"./modifiers/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKW1N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzxs9":[function(require,module,exports) {
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compile", ()=>compile);
var _runtimeDom = require("@vue/runtime-dom");
parcelHelpers.exportAll(_runtimeDom, exports);
function initDev() {
    (0, _runtimeDom.initCustomFormatter)();
}
initDev();
const compile = ()=>{
    (0, _runtimeDom.warn)(`Runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
};

},{"@vue/runtime-dom":"9wNvI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wNvI":[function(require,module,exports) {
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition);
parcelHelpers.export(exports, "TransitionGroup", ()=>TransitionGroup);
parcelHelpers.export(exports, "VueElement", ()=>VueElement);
parcelHelpers.export(exports, "createApp", ()=>createApp);
parcelHelpers.export(exports, "createSSRApp", ()=>createSSRApp);
parcelHelpers.export(exports, "defineCustomElement", ()=>defineCustomElement);
parcelHelpers.export(exports, "defineSSRCustomElement", ()=>defineSSRCustomElement);
parcelHelpers.export(exports, "hydrate", ()=>hydrate);
parcelHelpers.export(exports, "initDirectivesForSSR", ()=>initDirectivesForSSR);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "useCssModule", ()=>useCssModule);
parcelHelpers.export(exports, "useCssVars", ()=>useCssVars);
parcelHelpers.export(exports, "vModelCheckbox", ()=>vModelCheckbox);
parcelHelpers.export(exports, "vModelDynamic", ()=>vModelDynamic);
parcelHelpers.export(exports, "vModelRadio", ()=>vModelRadio);
parcelHelpers.export(exports, "vModelSelect", ()=>vModelSelect);
parcelHelpers.export(exports, "vModelText", ()=>vModelText);
parcelHelpers.export(exports, "vShow", ()=>vShow);
parcelHelpers.export(exports, "withKeys", ()=>withKeys);
parcelHelpers.export(exports, "withModifiers", ()=>withModifiers);
var _runtimeCore = require("@vue/runtime-core");
parcelHelpers.exportAll(_runtimeCore, exports);
var _shared = require("@vue/shared");
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, namespace, is, props)=>{
        const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : doc.createElement(tag, is ? {
            is
        } : void 0);
        if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
        return el;
    },
    createText: (text)=>doc.createTextNode(text),
    createComment: (text)=>doc.createComment(text),
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode,
    nextSibling: (node)=>node.nextSibling,
    querySelector: (selector)=>doc.querySelector(selector),
    setScopeId (el, id) {
        el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent (content, parent, anchor, namespace, start, end) {
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        if (start && (start === end || start.nextSibling)) while(true){
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling)) break;
        }
        else {
            templateContainer.innerHTML = namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content;
            const template = templateContainer.content;
            if (namespace === "svg" || namespace === "mathml") {
                const wrapper = template.firstChild;
                while(wrapper.firstChild)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const Transition = (props, { slots })=>(0, _runtimeCore.h)((0, _runtimeCore.BaseTransition), resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ (0, _shared.extend)({}, (0, _runtimeCore.BaseTransitionPropsValidators), DOMTransitionPropsValidators);
const callHook = (hook, args = [])=>{
    if ((0, _shared.isArray)(hook)) hook.forEach((h2)=>h2(...args));
    else if (hook) hook(...args);
};
const hasExplicitCallback = (hook)=>{
    return hook ? (0, _shared.isArray)(hook) ? hook.some((h2)=>h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for(const key in rawProps)if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done)=>{
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done);
            callHook(hook, [
                el,
                resolve
            ]);
            nextFrame(()=>{
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return (0, _shared.extend)(baseProps, {
        onBeforeEnter (el) {
            callHook(onBeforeEnter, [
                el
            ]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            callHook(onBeforeAppear, [
                el
            ]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            el._isLeaving = true;
            const resolve = ()=>finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            addTransitionClass(el, leaveActiveClass);
            forceReflow();
            nextFrame(()=>{
                if (!el._isLeaving) return;
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) return null;
    else if ((0, _shared.isObject)(duration)) return [
        NumberOf(duration.enter),
        NumberOf(duration.leave)
    ];
    else {
        const n = NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function NumberOf(val) {
    const res = (0, _shared.toNumber)(val);
    (0, _runtimeCore.assertNumber)(res, "<transition> explicit duration");
    return res;
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c));
    (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c));
    const _vtc = el[vtcKey];
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el[vtcKey] = void 0;
    }
}
function nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) return resolve();
    const endEvent = type + "end";
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e)=>{
        if (e.target === el && ++ended >= propCount) end();
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key)=>(styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
    const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i)=>toMs(d) + toMs(delays[i])));
}
function toMs(s) {
    if (s === "auto") return 0;
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
    return document.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
    const transitionClasses = el[vtcKey];
    if (transitionClasses) value = (value ? [
        value,
        ...transitionClasses
    ] : [
        ...transitionClasses
    ]).join(" ");
    if (value == null) el.removeAttribute("class");
    else if (isSVG) el.setAttribute("class", value);
    else el.className = value;
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
    beforeMount (el, { value }, { transition }) {
        el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else setDisplay(el, value);
    },
    mounted (el, { value }, { transition }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value, oldValue }, { transition }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                setDisplay(el, false);
            });
        } else setDisplay(el, value);
    },
    beforeUnmount (el, { value }) {
        setDisplay(el, value);
    }
};
vShow.name = "show";
function setDisplay(el, value) {
    el.style.display = value ? el[vShowOriginalDisplay] : "none";
    el[vShowHidden] = !value;
}
function initVShowForSSR() {
    vShow.getSSRProps = ({ value })=>{
        if (!value) return {
            style: {
                display: "none"
            }
        };
    };
}
const CSS_VAR_TEXT = Symbol("CSS_VAR_TEXT");
function useCssVars(getter) {
    const instance = (0, _runtimeCore.getCurrentInstance)();
    if (!instance) {
        (0, _runtimeCore.warn)(`useCssVars is called without current active component instance.`);
        return;
    }
    const updateTeleports = instance.ut = (vars = getter(instance.proxy))=>{
        Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node)=>setVarsOnNode(node, vars));
    };
    instance.getCssVars = ()=>getter(instance.proxy);
    const setVars = ()=>{
        const vars = getter(instance.proxy);
        setVarsOnVNode(instance.subTree, vars);
        updateTeleports(vars);
    };
    (0, _runtimeCore.onMounted)(()=>{
        (0, _runtimeCore.watchPostEffect)(setVars);
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        (0, _runtimeCore.onUnmounted)(()=>ob.disconnect());
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 && vnode.el) setVarsOnNode(vnode.el, vars);
    else if (vnode.type === (0, _runtimeCore.Fragment)) vnode.children.forEach((c)=>setVarsOnVNode(c, vars));
    else if (vnode.type === (0, _runtimeCore.Static)) {
        let { el, anchor } = vnode;
        while(el){
            setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        let cssText = "";
        for(const key in vars){
            style.setProperty(`--${key}`, vars[key]);
            cssText += `--${key}: ${vars[key]};`;
        }
        style[CSS_VAR_TEXT] = cssText;
    }
}
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = (0, _shared.isString)(next);
    let hasControlledDisplay = false;
    if (next && !isCssString) {
        if (prev) {
            if (!(0, _shared.isString)(prev)) {
                for(const key in prev)if (next[key] == null) setStyle(style, key, "");
            } else for (const prevStyle of prev.split(";")){
                const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
                if (next[key] == null) setStyle(style, key, "");
            }
        }
        for(const key in next){
            if (key === "display") hasControlledDisplay = true;
            setStyle(style, key, next[key]);
        }
    } else {
        if (isCssString) {
            if (prev !== next) {
                const cssVarText = style[CSS_VAR_TEXT];
                if (cssVarText) next += ";" + cssVarText;
                style.cssText = next;
                hasControlledDisplay = displayRE.test(next);
            }
        } else if (prev) el.removeAttribute("style");
    }
    if (vShowOriginalDisplay in el) {
        el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
        if (el[vShowHidden]) style.display = "none";
    }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if ((0, _shared.isArray)(val)) val.forEach((v)=>setStyle(style, name, v));
    else {
        if (val == null) val = "";
        if (semicolonRE.test(val)) (0, _runtimeCore.warn)(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
        if (name.startsWith("--")) style.setProperty(name, val);
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) style.setProperty((0, _shared.hyphenate)(prefixed), val.replace(importantRE, ""), "important");
            else style[prefixed] = val;
        }
    }
}
const prefixes = [
    "Webkit",
    "Moz",
    "ms"
];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) return cached;
    let name = (0, _runtimeCore.camelize)(rawName);
    if (name !== "filter" && name in style) return prefixCache[rawName] = name;
    name = (0, _shared.capitalize)(name);
    for(let i = 0; i < prefixes.length; i++){
        const prefixed = prefixes[i] + name;
        if (prefixed in style) return prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
        if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS(xlinkNS, key, value);
    } else {
        const isBoolean = (0, _shared.isSpecialBooleanAttr)(key);
        if (value == null || isBoolean && !(0, _shared.includeBooleanAttr)(value)) el.removeAttribute(key);
        else el.setAttribute(key, isBoolean ? "" : value);
    }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
        if (prevChildren) unmountChildren(prevChildren, parentComponent, parentSuspense);
        el[key] = value == null ? "" : value;
        return;
    }
    const tag = el.tagName;
    if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
    !tag.includes("-")) {
        const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
        const newValue = value == null ? "" : value;
        if (oldValue !== newValue || !("_value" in el)) el.value = newValue;
        if (value == null) el.removeAttribute(key);
        el._value = value;
        return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
        const type = typeof el[key];
        if (type === "boolean") value = (0, _shared.includeBooleanAttr)(value);
        else if (value == null && type === "string") {
            value = "";
            needRemove = true;
        } else if (type === "number") {
            value = 0;
            needRemove = true;
        }
    }
    try {
        el[key] = value;
    } catch (e) {
        if (!needRemove) (0, _runtimeCore.warn)(`Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`, e);
    }
    needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el[veiKey] || (el[veiKey] = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) existingInvoker.value = sanitizeEventValue(nextValue, rawName);
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            const invoker = invokers[rawName] = createInvoker(sanitizeEventValue(nextValue, rawName), instance);
            addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = void 0;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while(m = name.match(optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    const event = name[2] === ":" ? name.slice(3) : (0, _shared.hyphenate)(name.slice(2));
    return [
        event,
        options
    ];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = ()=>cachedNow || (p.then(()=>cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        if (!e._vts) e._vts = Date.now();
        else if (e._vts <= invoker.attached) return;
        (0, _runtimeCore.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5, [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function sanitizeEventValue(value, propName) {
    if ((0, _shared.isFunction)(value) || (0, _shared.isArray)(value)) return value;
    (0, _runtimeCore.warn)(`Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`);
    return 0, _shared.NOOP;
}
function patchStopImmediatePropagation(e, value) {
    if ((0, _shared.isArray)(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = ()=>{
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map((fn)=>(e2)=>!e2._stopped && fn && fn(e2));
    } else return value;
}
const isNativeOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
    key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren)=>{
    const isSVG = namespace === "svg";
    if (key === "class") patchClass(el, nextValue, isSVG);
    else if (key === "style") patchStyle(el, prevValue, nextValue);
    else if ((0, _shared.isOn)(key)) {
        if (!(0, _shared.isModelListener)(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    else {
        if (key === "true-value") el._trueValue = nextValue;
        else if (key === "false-value") el._falseValue = nextValue;
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        if (key === "innerHTML" || key === "textContent") return true;
        if (key in el && isNativeOn(key) && (0, _shared.isFunction)(value)) return true;
        return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") return false;
    if (key === "form") return false;
    if (key === "list" && el.tagName === "INPUT") return false;
    if (key === "type" && el.tagName === "TEXTAREA") return false;
    if (key === "width" || key === "height") {
        const tag = el.tagName;
        if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
    }
    if (isNativeOn(key) && (0, _shared.isString)(value)) return false;
    return key in el;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineCustomElement(options, hydrate2) {
    const Comp = (0, _runtimeCore.defineComponent)(options);
    class VueCustomElement extends VueElement {
        constructor(initialProps){
            super(Comp, initialProps, hydrate2);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
/*! #__NO_SIDE_EFFECTS__ */ const defineSSRCustomElement = /* @__NO_SIDE_EFFECTS__ */ (options)=>{
    return /* @__PURE__ */ defineCustomElement(options, hydrate);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
    constructor(_def, _props = {}, hydrate2){
        super();
        this._def = _def;
        this._props = _props;
        /**
     * @internal
     */ this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        this._ob = null;
        if (this.shadowRoot && hydrate2) hydrate2(this._createVNode(), this.shadowRoot);
        else {
            if (0, this.shadowRoot) (0, _runtimeCore.warn)(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
            this.attachShadow({
                mode: "open"
            });
            if (!this._def.__asyncLoader) this._resolveProps(this._def);
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) {
            if (this._resolved) this._update();
            else this._resolveDef();
        }
    }
    disconnectedCallback() {
        this._connected = false;
        if (this._ob) {
            this._ob.disconnect();
            this._ob = null;
        }
        (0, _runtimeCore.nextTick)(()=>{
            if (!this._connected) {
                render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
   * resolve inner component definition (handle possible async component)
   */ _resolveDef() {
        this._resolved = true;
        for(let i = 0; i < this.attributes.length; i++)this._setAttr(this.attributes[i].name);
        this._ob = new MutationObserver((mutations)=>{
            for (const m of mutations)this._setAttr(m.attributeName);
        });
        this._ob.observe(this, {
            attributes: true
        });
        const resolve = (def, isAsync = false)=>{
            const { props, styles } = def;
            let numberProps;
            if (props && !(0, _shared.isArray)(props)) for(const key in props){
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                    if (key in this._props) this._props[key] = (0, _shared.toNumber)(this._props[key]);
                    (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[(0, _shared.camelize)(key)] = true;
                }
            }
            this._numberProps = numberProps;
            if (isAsync) this._resolveProps(def);
            this._applyStyles(styles);
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) asyncDef().then((def)=>resolve(def, true));
        else resolve(this._def);
    }
    _resolveProps(def) {
        const { props } = def;
        const declaredPropKeys = (0, _shared.isArray)(props) ? props : Object.keys(props || {});
        for (const key of Object.keys(this))if (key[0] !== "_" && declaredPropKeys.includes(key)) this._setProp(key, this[key], true, false);
        for (const key of declaredPropKeys.map((0, _shared.camelize)))Object.defineProperty(this, key, {
            get () {
                return this._getProp(key);
            },
            set (val) {
                this._setProp(key, val);
            }
        });
    }
    _setAttr(key) {
        let value = this.hasAttribute(key) ? this.getAttribute(key) : void 0;
        const camelKey = (0, _shared.camelize)(key);
        if (this._numberProps && this._numberProps[camelKey]) value = (0, _shared.toNumber)(value);
        this._setProp(camelKey, value, false);
    }
    /**
   * @internal
   */ _getProp(key) {
        return this._props[key];
    }
    /**
   * @internal
   */ _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) this._update();
            if (shouldReflect) {
                if (val === true) this.setAttribute((0, _shared.hyphenate)(key), "");
                else if (typeof val === "string" || typeof val === "number") this.setAttribute((0, _shared.hyphenate)(key), val + "");
                else if (!val) this.removeAttribute((0, _shared.hyphenate)(key));
            }
        }
    }
    _update() {
        render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = (0, _runtimeCore.createVNode)(this._def, (0, _shared.extend)({}, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.isCE = true;
            instance.ceReload = (newStyles)=>{
                if (this._styles) {
                    this._styles.forEach((s)=>this.shadowRoot.removeChild(s));
                    this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                this._instance = null;
                this._update();
            };
            const dispatch = (event, args)=>{
                this.dispatchEvent(new CustomEvent(event, {
                    detail: args
                }));
            };
            instance.emit = (event, ...args)=>{
                dispatch(event, args);
                if ((0, _shared.hyphenate)(event) !== event) dispatch((0, _shared.hyphenate)(event), args);
            };
            let parent = this;
            while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof VueElement) {
                instance.parent = parent._instance;
                instance.provides = parent._instance.provides;
                break;
            }
        };
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) styles.forEach((css)=>{
            const s = document.createElement("style");
            s.textContent = css;
            this.shadowRoot.appendChild(s);
            (this._styles || (this._styles = [])).push(s);
        });
    }
}
function useCssModule(name = "$style") {
    {
        const instance = (0, _runtimeCore.getCurrentInstance)();
        if (!instance) {
            (0, _runtimeCore.warn)(`useCssModule must be called inside setup()`);
            return 0, _shared.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            (0, _runtimeCore.warn)(`Current instance does not have CSS modules injected.`);
            return 0, _shared.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            (0, _runtimeCore.warn)(`Current instance does not have CSS module named "${name}".`);
            return 0, _shared.EMPTY_OBJ;
        }
        return mod;
    }
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const TransitionGroupImpl = {
    name: "TransitionGroup",
    props: /* @__PURE__ */ (0, _shared.extend)({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots }) {
        const instance = (0, _runtimeCore.getCurrentInstance)();
        const state = (0, _runtimeCore.useTransitionState)();
        let prevChildren;
        let children;
        (0, _runtimeCore.onUpdated)(()=>{
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = "";
                const cb = el[moveCbKey] = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener("transitionend", cb);
                        el[moveCbKey] = null;
                        removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener("transitionend", cb);
            });
        });
        return ()=>{
            const rawProps = (0, _runtimeCore.toRaw)(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || (0, _runtimeCore.Fragment);
            prevChildren = [];
            if (children) for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.el && child.el instanceof Element) {
                    prevChildren.push(child);
                    (0, _runtimeCore.setTransitionHooks)(child, (0, _runtimeCore.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            children = slots.default ? (0, _runtimeCore.getTransitionRawChildren)(slots.default()) : [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.key != null) (0, _runtimeCore.setTransitionHooks)(child, (0, _runtimeCore.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                else (0, _runtimeCore.warn)(`<TransitionGroup> children must be keyed.`);
            }
            return (0, _runtimeCore.createVNode)(tag, null, children);
        };
    }
};
const removeMode = (props)=>delete props.mode;
/* @__PURE__ */ removeMode(TransitionGroupImpl.props);
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el[moveCbKey]) el[moveCbKey]();
    if (el[enterCbKey]) el[enterCbKey]();
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = "0s";
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    const clone = el.cloneNode();
    const _vtc = el[vtcKey];
    if (_vtc) _vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c));
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const getModelAssigner = (vnode)=>{
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return (0, _shared.isArray)(fn) ? (value)=>(0, _shared.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event("input"));
    }
}
const assignKey = Symbol("_assign");
const vModelText = {
    created (el, { modifiers: { lazy, trim, number } }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === "number";
        addEventListener(el, lazy ? "change" : "input", (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            if (castToNumber) domValue = (0, _shared.looseToNumber)(domValue);
            el[assignKey](domValue);
        });
        if (trim) addEventListener(el, "change", ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            addEventListener(el, "compositionstart", onCompositionStart);
            addEventListener(el, "compositionend", onCompositionEnd);
            addEventListener(el, "change", onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value }) {
        el.value = value == null ? "" : value;
    },
    beforeUpdate (el, { value, modifiers: { lazy, trim, number } }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        if (el.composing) return;
        const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? (0, _shared.looseToNumber)(el.value) : el.value;
        const newValue = value == null ? "" : value;
        if (elValue === newValue) return;
        if (document.activeElement === el && el.type !== "range") {
            if (lazy) return;
            if (trim && el.value.trim() === newValue) return;
        }
        el.value = newValue;
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el[assignKey];
            if ((0, _shared.isArray)(modelValue)) {
                const index = (0, _shared.looseIndexOf)(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if ((0, _shared.isSet)(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign(getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate (el, binding, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if ((0, _shared.isArray)(value)) el.checked = (0, _shared.looseIndexOf)(value, vnode.props.value) > -1;
    else if ((0, _shared.isSet)(value)) el.checked = value.has(vnode.props.value);
    else if (value !== oldValue) el.checked = (0, _shared.looseEqual)(value, getCheckboxValue(el, true));
}
const vModelRadio = {
    created (el, { value }, vnode) {
        el.checked = (0, _shared.looseEqual)(value, vnode.props.value);
        el[assignKey] = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            el[assignKey](getValue(el));
        });
    },
    beforeUpdate (el, { value, oldValue }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        if (value !== oldValue) el.checked = (0, _shared.looseEqual)(value, vnode.props.value);
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value, modifiers: { number } }, vnode) {
        const isSetModel = (0, _shared.isSet)(value);
        addEventListener(el, "change", ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected).map((o)=>number ? (0, _shared.looseToNumber)(getValue(o)) : getValue(o));
            el[assignKey](el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
            el._assigning = true;
            (0, _runtimeCore.nextTick)(()=>{
                el._assigning = false;
            });
        });
        el[assignKey] = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value, modifiers: { number } }) {
        setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el[assignKey] = getModelAssigner(vnode);
    },
    updated (el, { value, modifiers: { number } }) {
        if (!el._assigning) setSelected(el, value);
    }
};
function setSelected(el, value, number) {
    const isMultiple = el.multiple;
    const isArrayValue = (0, _shared.isArray)(value);
    if (isMultiple && !isArrayValue && !(0, _shared.isSet)(value)) {
        (0, _runtimeCore.warn)(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for(let i = 0, l = el.options.length; i < l; i++){
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (isArrayValue) {
                const optionType = typeof optionValue;
                if (optionType === "string" || optionType === "number") option.selected = value.some((v)=>String(v) === String(optionValue));
                else option.selected = (0, _shared.looseIndexOf)(value, optionValue) > -1;
            } else option.selected = value.has(optionValue);
        } else if ((0, _shared.looseEqual)(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
function getValue(el) {
    return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "created");
    },
    mounted (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "updated");
    }
};
function resolveDynamicModel(tagName, type) {
    switch(tagName){
        case "SELECT":
            return vModelSelect;
        case "TEXTAREA":
            return vModelText;
        default:
            switch(type){
                case "checkbox":
                    return vModelCheckbox;
                case "radio":
                    return vModelRadio;
                default:
                    return vModelText;
            }
    }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value })=>({
            value
        });
    vModelRadio.getSSRProps = ({ value }, vnode)=>{
        if (vnode.props && (0, _shared.looseEqual)(vnode.props.value, value)) return {
            checked: true
        };
    };
    vModelCheckbox.getSSRProps = ({ value }, vnode)=>{
        if ((0, _shared.isArray)(value)) {
            if (vnode.props && (0, _shared.looseIndexOf)(value, vnode.props.value) > -1) return {
                checked: true
            };
        } else if ((0, _shared.isSet)(value)) {
            if (vnode.props && value.has(vnode.props.value)) return {
                checked: true
            };
        } else if (value) return {
            checked: true
        };
    };
    vModelDynamic.getSSRProps = (binding, vnode)=>{
        if (typeof vnode.type !== "string") return;
        const modelToUse = resolveDynamicModel(// resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
        vnode.type.toUpperCase(), vnode.props && vnode.props.type);
        if (modelToUse.getSSRProps) return modelToUse.getSSRProps(binding, vnode);
    };
}
const systemModifiers = [
    "ctrl",
    "shift",
    "alt",
    "meta"
];
const modifierGuards = {
    stop: (e)=>e.stopPropagation(),
    prevent: (e)=>e.preventDefault(),
    self: (e)=>e.target !== e.currentTarget,
    ctrl: (e)=>!e.ctrlKey,
    shift: (e)=>!e.shiftKey,
    alt: (e)=>!e.altKey,
    meta: (e)=>!e.metaKey,
    left: (e)=>"button" in e && e.button !== 0,
    middle: (e)=>"button" in e && e.button !== 1,
    right: (e)=>"button" in e && e.button !== 2,
    exact: (e, modifiers)=>systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers)=>{
    const cache = fn._withMods || (fn._withMods = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event, ...args)=>{
        for(let i = 0; i < modifiers.length; i++){
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    });
};
const keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
};
const withKeys = (fn, modifiers)=>{
    const cache = fn._withKeys || (fn._withKeys = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event)=>{
        if (!("key" in event)) return;
        const eventKey = (0, _shared.hyphenate)(event.key);
        if (modifiers.some((k)=>k === eventKey || keyNames[k] === eventKey)) return fn(event);
    });
};
const rendererOptions = /* @__PURE__ */ (0, _shared.extend)({
    patchProp
}, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = (0, _runtimeCore.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : (0, _runtimeCore.createHydrationRenderer)(rendererOptions);
    enabledHydration = true;
    return renderer;
}
const render = (...args)=>{
    ensureRenderer().render(...args);
};
const hydrate = (...args)=>{
    ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args)=>{
    const app = ensureRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!(0, _shared.isFunction)(component) && !component.render && !component.template) component.template = container.innerHTML;
        container.innerHTML = "";
        const proxy = mount(container, false, resolveRootNamespace(container));
        if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
        }
        return proxy;
    };
    return app;
};
const createSSRApp = (...args)=>{
    const app = ensureHydrationRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, resolveRootNamespace(container));
    };
    return app;
};
function resolveRootNamespace(container) {
    if (container instanceof SVGElement) return "svg";
    if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
        value: (tag)=>(0, _shared.isHTMLTag)(tag) || (0, _shared.isSVGTag)(tag) || (0, _shared.isMathMLTag)(tag),
        writable: false
    });
}
function injectCompilerOptionsCheck(app) {
    if ((0, _runtimeCore.isRuntimeOnly)()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, "isCustomElement", {
            get () {
                return isCustomElement;
            },
            set () {
                (0, _runtimeCore.warn)(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
        Object.defineProperty(app.config, "compilerOptions", {
            get () {
                (0, _runtimeCore.warn)(msg);
                return compilerOptions;
            },
            set () {
                (0, _runtimeCore.warn)(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if ((0, _shared.isString)(container)) {
        const res = document.querySelector(container);
        if (!res) (0, _runtimeCore.warn)(`Failed to mount app: mount target selector "${container}" returned null.`);
        return res;
    }
    if ((0, window.ShadowRoot) && container instanceof window.ShadowRoot && container.mode === "closed") (0, _runtimeCore.warn)(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    return container;
}
let ssrDirectiveInitialized = false;
const initDirectivesForSSR = ()=>{
    if (!ssrDirectiveInitialized) {
        ssrDirectiveInitialized = true;
        initVModelForSSR();
        initVShowForSSR();
    }
};

},{"@vue/runtime-core":"lmqBl","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmqBl":[function(require,module,exports) {
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>(0, _reactivity.EffectScope));
parcelHelpers.export(exports, "ReactiveEffect", ()=>(0, _reactivity.ReactiveEffect));
parcelHelpers.export(exports, "TrackOpTypes", ()=>(0, _reactivity.TrackOpTypes));
parcelHelpers.export(exports, "TriggerOpTypes", ()=>(0, _reactivity.TriggerOpTypes));
parcelHelpers.export(exports, "customRef", ()=>(0, _reactivity.customRef));
parcelHelpers.export(exports, "effect", ()=>(0, _reactivity.effect));
parcelHelpers.export(exports, "effectScope", ()=>(0, _reactivity.effectScope));
parcelHelpers.export(exports, "getCurrentScope", ()=>(0, _reactivity.getCurrentScope));
parcelHelpers.export(exports, "isProxy", ()=>(0, _reactivity.isProxy));
parcelHelpers.export(exports, "isReactive", ()=>(0, _reactivity.isReactive));
parcelHelpers.export(exports, "isReadonly", ()=>(0, _reactivity.isReadonly));
parcelHelpers.export(exports, "isRef", ()=>(0, _reactivity.isRef));
parcelHelpers.export(exports, "isShallow", ()=>(0, _reactivity.isShallow));
parcelHelpers.export(exports, "markRaw", ()=>(0, _reactivity.markRaw));
parcelHelpers.export(exports, "onScopeDispose", ()=>(0, _reactivity.onScopeDispose));
parcelHelpers.export(exports, "proxyRefs", ()=>(0, _reactivity.proxyRefs));
parcelHelpers.export(exports, "reactive", ()=>(0, _reactivity.reactive));
parcelHelpers.export(exports, "readonly", ()=>(0, _reactivity.readonly));
parcelHelpers.export(exports, "ref", ()=>(0, _reactivity.ref));
parcelHelpers.export(exports, "shallowReactive", ()=>(0, _reactivity.shallowReactive));
parcelHelpers.export(exports, "shallowReadonly", ()=>(0, _reactivity.shallowReadonly));
parcelHelpers.export(exports, "shallowRef", ()=>(0, _reactivity.shallowRef));
parcelHelpers.export(exports, "stop", ()=>(0, _reactivity.stop));
parcelHelpers.export(exports, "toRaw", ()=>(0, _reactivity.toRaw));
parcelHelpers.export(exports, "toRef", ()=>(0, _reactivity.toRef));
parcelHelpers.export(exports, "toRefs", ()=>(0, _reactivity.toRefs));
parcelHelpers.export(exports, "toValue", ()=>(0, _reactivity.toValue));
parcelHelpers.export(exports, "triggerRef", ()=>(0, _reactivity.triggerRef));
parcelHelpers.export(exports, "unref", ()=>(0, _reactivity.unref));
parcelHelpers.export(exports, "camelize", ()=>(0, _shared.camelize));
parcelHelpers.export(exports, "capitalize", ()=>(0, _shared.capitalize));
parcelHelpers.export(exports, "normalizeClass", ()=>(0, _shared.normalizeClass));
parcelHelpers.export(exports, "normalizeProps", ()=>(0, _shared.normalizeProps));
parcelHelpers.export(exports, "normalizeStyle", ()=>(0, _shared.normalizeStyle));
parcelHelpers.export(exports, "toDisplayString", ()=>(0, _shared.toDisplayString));
parcelHelpers.export(exports, "toHandlerKey", ()=>(0, _shared.toHandlerKey));
parcelHelpers.export(exports, "BaseTransition", ()=>BaseTransition);
parcelHelpers.export(exports, "BaseTransitionPropsValidators", ()=>BaseTransitionPropsValidators);
parcelHelpers.export(exports, "Comment", ()=>Comment);
parcelHelpers.export(exports, "DeprecationTypes", ()=>DeprecationTypes);
parcelHelpers.export(exports, "ErrorCodes", ()=>ErrorCodes);
parcelHelpers.export(exports, "ErrorTypeStrings", ()=>ErrorTypeStrings);
parcelHelpers.export(exports, "Fragment", ()=>Fragment);
parcelHelpers.export(exports, "KeepAlive", ()=>KeepAlive);
parcelHelpers.export(exports, "Static", ()=>Static);
parcelHelpers.export(exports, "Suspense", ()=>Suspense);
parcelHelpers.export(exports, "Teleport", ()=>Teleport);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "assertNumber", ()=>assertNumber);
parcelHelpers.export(exports, "callWithAsyncErrorHandling", ()=>callWithAsyncErrorHandling);
parcelHelpers.export(exports, "callWithErrorHandling", ()=>callWithErrorHandling);
parcelHelpers.export(exports, "cloneVNode", ()=>cloneVNode);
parcelHelpers.export(exports, "compatUtils", ()=>compatUtils);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "createBlock", ()=>createBlock);
parcelHelpers.export(exports, "createCommentVNode", ()=>createCommentVNode);
parcelHelpers.export(exports, "createElementBlock", ()=>createElementBlock);
parcelHelpers.export(exports, "createElementVNode", ()=>createBaseVNode);
parcelHelpers.export(exports, "createHydrationRenderer", ()=>createHydrationRenderer);
parcelHelpers.export(exports, "createPropsRestProxy", ()=>createPropsRestProxy);
parcelHelpers.export(exports, "createRenderer", ()=>createRenderer);
parcelHelpers.export(exports, "createSlots", ()=>createSlots);
parcelHelpers.export(exports, "createStaticVNode", ()=>createStaticVNode);
parcelHelpers.export(exports, "createTextVNode", ()=>createTextVNode);
parcelHelpers.export(exports, "createVNode", ()=>createVNode);
parcelHelpers.export(exports, "defineAsyncComponent", ()=>defineAsyncComponent);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent);
parcelHelpers.export(exports, "defineEmits", ()=>defineEmits);
parcelHelpers.export(exports, "defineExpose", ()=>defineExpose);
parcelHelpers.export(exports, "defineModel", ()=>defineModel);
parcelHelpers.export(exports, "defineOptions", ()=>defineOptions);
parcelHelpers.export(exports, "defineProps", ()=>defineProps);
parcelHelpers.export(exports, "defineSlots", ()=>defineSlots);
parcelHelpers.export(exports, "devtools", ()=>devtools);
parcelHelpers.export(exports, "getCurrentInstance", ()=>getCurrentInstance);
parcelHelpers.export(exports, "getTransitionRawChildren", ()=>getTransitionRawChildren);
parcelHelpers.export(exports, "guardReactiveProps", ()=>guardReactiveProps);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "handleError", ()=>handleError);
parcelHelpers.export(exports, "hasInjectionContext", ()=>hasInjectionContext);
parcelHelpers.export(exports, "initCustomFormatter", ()=>initCustomFormatter);
parcelHelpers.export(exports, "inject", ()=>inject);
parcelHelpers.export(exports, "isMemoSame", ()=>isMemoSame);
parcelHelpers.export(exports, "isRuntimeOnly", ()=>isRuntimeOnly);
parcelHelpers.export(exports, "isVNode", ()=>isVNode);
parcelHelpers.export(exports, "mergeDefaults", ()=>mergeDefaults);
parcelHelpers.export(exports, "mergeModels", ()=>mergeModels);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "onActivated", ()=>onActivated);
parcelHelpers.export(exports, "onBeforeMount", ()=>onBeforeMount);
parcelHelpers.export(exports, "onBeforeUnmount", ()=>onBeforeUnmount);
parcelHelpers.export(exports, "onBeforeUpdate", ()=>onBeforeUpdate);
parcelHelpers.export(exports, "onDeactivated", ()=>onDeactivated);
parcelHelpers.export(exports, "onErrorCaptured", ()=>onErrorCaptured);
parcelHelpers.export(exports, "onMounted", ()=>onMounted);
parcelHelpers.export(exports, "onRenderTracked", ()=>onRenderTracked);
parcelHelpers.export(exports, "onRenderTriggered", ()=>onRenderTriggered);
parcelHelpers.export(exports, "onServerPrefetch", ()=>onServerPrefetch);
parcelHelpers.export(exports, "onUnmounted", ()=>onUnmounted);
parcelHelpers.export(exports, "onUpdated", ()=>onUpdated);
parcelHelpers.export(exports, "openBlock", ()=>openBlock);
parcelHelpers.export(exports, "popScopeId", ()=>popScopeId);
parcelHelpers.export(exports, "provide", ()=>provide);
parcelHelpers.export(exports, "pushScopeId", ()=>pushScopeId);
parcelHelpers.export(exports, "queuePostFlushCb", ()=>queuePostFlushCb);
parcelHelpers.export(exports, "registerRuntimeCompiler", ()=>registerRuntimeCompiler);
parcelHelpers.export(exports, "renderList", ()=>renderList);
parcelHelpers.export(exports, "renderSlot", ()=>renderSlot);
parcelHelpers.export(exports, "resolveComponent", ()=>resolveComponent);
parcelHelpers.export(exports, "resolveDirective", ()=>resolveDirective);
parcelHelpers.export(exports, "resolveDynamicComponent", ()=>resolveDynamicComponent);
parcelHelpers.export(exports, "resolveFilter", ()=>resolveFilter);
parcelHelpers.export(exports, "resolveTransitionHooks", ()=>resolveTransitionHooks);
parcelHelpers.export(exports, "setBlockTracking", ()=>setBlockTracking);
parcelHelpers.export(exports, "setDevtoolsHook", ()=>setDevtoolsHook);
parcelHelpers.export(exports, "setTransitionHooks", ()=>setTransitionHooks);
parcelHelpers.export(exports, "ssrContextKey", ()=>ssrContextKey);
parcelHelpers.export(exports, "ssrUtils", ()=>ssrUtils);
parcelHelpers.export(exports, "toHandlers", ()=>toHandlers);
parcelHelpers.export(exports, "transformVNodeArgs", ()=>transformVNodeArgs);
parcelHelpers.export(exports, "useAttrs", ()=>useAttrs);
parcelHelpers.export(exports, "useModel", ()=>useModel);
parcelHelpers.export(exports, "useSSRContext", ()=>useSSRContext);
parcelHelpers.export(exports, "useSlots", ()=>useSlots);
parcelHelpers.export(exports, "useTransitionState", ()=>useTransitionState);
parcelHelpers.export(exports, "version", ()=>version);
parcelHelpers.export(exports, "warn", ()=>warn);
parcelHelpers.export(exports, "watch", ()=>watch);
parcelHelpers.export(exports, "watchEffect", ()=>watchEffect);
parcelHelpers.export(exports, "watchPostEffect", ()=>watchPostEffect);
parcelHelpers.export(exports, "watchSyncEffect", ()=>watchSyncEffect);
parcelHelpers.export(exports, "withAsyncContext", ()=>withAsyncContext);
parcelHelpers.export(exports, "withCtx", ()=>withCtx);
parcelHelpers.export(exports, "withDefaults", ()=>withDefaults);
parcelHelpers.export(exports, "withDirectives", ()=>withDirectives);
parcelHelpers.export(exports, "withMemo", ()=>withMemo);
parcelHelpers.export(exports, "withScopeId", ()=>withScopeId);
var _reactivity = require("@vue/reactivity");
var _shared = require("@vue/shared");
const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn$1(msg, ...args) {
    (0, _reactivity.pauseTracking)();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11, [
        msg + args.map((a)=>{
            var _a, _b;
            return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(({ vnode })=>`at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`
`, ...formatTrace(trace));
        console.warn(...warnArgs);
    }
    (0, _reactivity.resetTracking)();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) return [];
    const normalizedStack = [];
    while(currentVNode){
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) last.recurseCount++;
        else normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
        });
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `
`
        ], ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
function formatProp(key, value, raw) {
    if ((0, _shared.isString)(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if ((0, _reactivity.isRef)(value)) {
        value = formatProp(key, (0, _reactivity.toRaw)(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if ((0, _shared.isFunction)(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = (0, _reactivity.toRaw)(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
function assertNumber(val, type) {
    if (val === void 0) return;
    else if (typeof val !== "number") warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
    else if (isNaN(val)) warn$1(`${type} is NaN - the duration expression might be incorrect.`);
}
const ErrorCodes = {
    "SETUP_FUNCTION": 0,
    "0": "SETUP_FUNCTION",
    "RENDER_FUNCTION": 1,
    "1": "RENDER_FUNCTION",
    "WATCH_GETTER": 2,
    "2": "WATCH_GETTER",
    "WATCH_CALLBACK": 3,
    "3": "WATCH_CALLBACK",
    "WATCH_CLEANUP": 4,
    "4": "WATCH_CLEANUP",
    "NATIVE_EVENT_HANDLER": 5,
    "5": "NATIVE_EVENT_HANDLER",
    "COMPONENT_EVENT_HANDLER": 6,
    "6": "COMPONENT_EVENT_HANDLER",
    "VNODE_HOOK": 7,
    "7": "VNODE_HOOK",
    "DIRECTIVE_HOOK": 8,
    "8": "DIRECTIVE_HOOK",
    "TRANSITION_HOOK": 9,
    "9": "TRANSITION_HOOK",
    "APP_ERROR_HANDLER": 10,
    "10": "APP_ERROR_HANDLER",
    "APP_WARN_HANDLER": 11,
    "11": "APP_WARN_HANDLER",
    "FUNCTION_REF": 12,
    "12": "FUNCTION_REF",
    "ASYNC_COMPONENT_LOADER": 13,
    "13": "ASYNC_COMPONENT_LOADER",
    "SCHEDULER": 14,
    "14": "SCHEDULER"
};
const ErrorTypeStrings$1 = {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function callWithErrorHandling(fn, instance, type, args) {
    try {
        return args ? fn(...args) : fn();
    } catch (err) {
        handleError(err, instance, type);
    }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if ((0, _shared.isFunction)(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && (0, _shared.isPromise)(res)) res.catch((err)=>{
            handleError(err, instance, type);
        });
        return res;
    }
    if ((0, _shared.isArray)(fn)) {
        const values = [];
        for(let i = 0; i < fn.length; i++)values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
        return values;
    } else warn$1(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`);
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        const exposedInstance = instance.proxy;
        const errorInfo = (0, ErrorTypeStrings$1[type]);
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            (0, _reactivity.pauseTracking)();
            callWithErrorHandling(appErrorHandler, null, 10, [
                err,
                exposedInstance,
                errorInfo
            ]);
            (0, _reactivity.resetTracking)();
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    {
        const info = ErrorTypeStrings$1[type];
        if (contextVNode) pushWarningContext(contextVNode);
        warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) popWarningContext();
        if (throwInDev) throw err;
        else console.error(err);
    }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJob = queue[middle];
        const middleJobId = getId(middleJob);
        if (middleJobId < id || middleJobId === id && middleJob.pre) start = middle + 1;
        else end = middle;
    }
    return start;
}
function queueJob(job) {
    if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
        if (job.id == null) queue.push(job);
        else queue.splice(findInsertionIndex(job.id), 0, job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) queue.splice(i, 1);
}
function queuePostFlushCb(cb) {
    if (!(0, _shared.isArray)(cb)) {
        if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) pendingPostFlushCbs.push(cb);
    } else pendingPostFlushCbs.push(...cb);
    queueFlush();
}
function flushPreFlushCbs(instance, seen, i = isFlushing ? flushIndex + 1 : 0) {
    seen = seen || /* @__PURE__ */ new Map();
    for(; i < queue.length; i++){
        const cb = queue[i];
        if (cb && cb.pre) {
            if (instance && cb.id !== instance.uid) continue;
            if (checkRecursiveUpdates(seen, cb)) continue;
            queue.splice(i, 1);
            i--;
            cb();
        }
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set(pendingPostFlushCbs)
        ].sort((a, b)=>getId(a) - getId(b));
        pendingPostFlushCbs.length = 0;
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        seen = seen || /* @__PURE__ */ new Map();
        for(postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++){
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) continue;
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job)=>job.id == null ? Infinity : job.id;
const comparator = (a, b)=>{
    const diff = getId(a) - getId(b);
    if (diff === 0) {
        if (a.pre && !b.pre) return -1;
        if (b.pre && !a.pre) return 1;
    }
    return diff;
};
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    seen = seen || /* @__PURE__ */ new Map();
    queue.sort(comparator);
    const check = (job)=>checkRecursiveUpdates(seen, job);
    try {
        for(flushIndex = 0; flushIndex < queue.length; flushIndex++){
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (check(job)) continue;
                callWithErrorHandling(job, null, 14);
            }
        }
    } finally{
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) seen.set(fn, 1);
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            handleError(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10);
            return true;
        } else seen.set(fn, count + 1);
    }
}
let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Set();
(0, _shared.getGlobalThis)().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
};
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) return false;
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: /* @__PURE__ */ new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) return;
    record.initialDef.render = newRender;
    [
        ...record.instances
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        isHmrUpdating = true;
        instance.effect.dirty = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances = [
        ...record.instances
    ];
    for (const instance of instances){
        const oldComp = normalizeClassComponent(instance.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            if (oldComp !== record.initialDef) updateComponentDef(oldComp, newComp);
            hmrDirtyComponents.add(oldComp);
        }
        instance.appContext.propsCache.delete(instance.type);
        instance.appContext.emitsCache.delete(instance.type);
        instance.appContext.optionsCache.delete(instance.type);
        if (instance.ceReload) {
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        } else if (instance.parent) {
            instance.parent.effect.dirty = true;
            queueJob(instance.parent.update);
        } else if (instance.appContext.reload) instance.appContext.reload();
        else if (typeof window !== "undefined") window.location.reload();
        else console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    queuePostFlushCb(()=>{
        for (const instance of instances)hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    });
}
function updateComponentDef(oldComp, newComp) {
    (0, _shared.extend)(oldComp, newComp);
    for(const key in oldComp)if (key !== "__file" && !(key in newComp)) delete oldComp[key];
}
function tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
        }
    };
}
let devtools$1;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
    if (devtools$1) devtools$1.emit(event, ...args);
    else if (!devtoolsNotInstalled) buffer.push({
        event,
        args
    });
}
function setDevtoolsHook$1(hook, target) {
    var _a, _b;
    devtools$1 = hook;
    if (devtools$1) {
        devtools$1.enabled = true;
        buffer.forEach(({ event, args })=>devtools$1.emit(event, ...args));
        buffer = [];
    } else if (// handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
        const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push((newHook)=>{
            setDevtoolsHook$1(newHook, target);
        });
        setTimeout(()=>{
            if (!devtools$1) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3e3);
    } else {
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version) {
    emit$1("app:init" /* APP_INIT */ , app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    emit$1("app:unmount" /* APP_UNMOUNT */ , app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */ );
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */ );
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */ );
const devtoolsComponentRemoved = (component)=>{
    if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
    !devtools$1.cleanupBuffer(component)) _devtoolsComponentRemoved(component);
};
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
    return (component)=>{
        emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
    };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */ );
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */ );
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit$1("component:emit" /* COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props = instance.vnode.props || (0, _shared.EMPTY_OBJ);
    {
        const { emitsOptions, propsOptions: [propsOptions] } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !((0, _shared.toHandlerKey)(event) in propsOptions)) warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${(0, _shared.toHandlerKey)(event)}" prop.`);
            } else {
                const validator = emitsOptions[event];
                if ((0, _shared.isFunction)(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith("update:");
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || (0, _shared.EMPTY_OBJ);
        if (trim) args = rawArgs.map((a)=>(0, _shared.isString)(a) ? a.trim() : a);
        if (number) args = rawArgs.map((0, _shared.looseToNumber));
    }
    devtoolsComponentEmit(instance, event, args);
    {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[(0, _shared.toHandlerKey)(lowerCaseEvent)]) warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${(0, _shared.hyphenate)(event)}" instead of "${event}".`);
    }
    let handlerName;
    let handler = props[handlerName = (0, _shared.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
    props[handlerName = (0, _shared.toHandlerKey)((0, _shared.camelize)(event))];
    if (!handler && isModelListener) handler = props[handlerName = (0, _shared.toHandlerKey)((0, _shared.hyphenate)(event))];
    if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {};
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) return cached;
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, _shared.isFunction)(comp)) {
        const extendEmits = (raw2)=>{
            const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                (0, _shared.extend)(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw && !hasExtends) {
        if ((0, _shared.isObject)(comp)) cache.set(comp, null);
        return null;
    }
    if ((0, _shared.isArray)(raw)) raw.forEach((key)=>normalized[key] = null);
    else (0, _shared.extend)(normalized, raw);
    if ((0, _shared.isObject)(comp)) cache.set(comp, normalized);
    return normalized;
}
function isEmitListener(options, key) {
    if (!options || !(0, _shared.isOn)(key)) return false;
    key = key.slice(2).replace(/Once$/, "");
    return (0, _shared.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0, _shared.hasOwn)(options, (0, _shared.hyphenate)(key)) || (0, _shared.hasOwn)(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
function pushScopeId(id) {
    currentScopeId = id;
}
function popScopeId() {
    currentScopeId = null;
}
const withScopeId = (_id)=>withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx) return fn;
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        if (renderFnWithContext._d) setBlockTracking(-1);
        const prevInstance = setCurrentRenderingInstance(ctx);
        let res;
        try {
            res = fn(...args);
        } finally{
            setCurrentRenderingInstance(prevInstance);
            if (renderFnWithContext._d) setBlockTracking(1);
        }
        devtoolsComponentUpdated(ctx);
        return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, props, data, setupState, ctx, inheritAttrs } = instance;
    const prev = setCurrentRenderingInstance(instance);
    let result;
    let fallthroughAttrs;
    accessedAttrs = false;
    try {
        if (vnode.shapeFlag & 4) {
            const proxyToUse = withProxy || proxy;
            const thisProxy = (0, setupState.__isScriptSetup) ? new Proxy(proxyToUse, {
                get (target, key, receiver) {
                    warn$1(`Property '${String(key)}' was accessed via 'this'. Avoid using 'this' in templates.`);
                    return Reflect.get(target, key, receiver);
                }
            }) : proxyToUse;
            result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, (0, _reactivity.shallowReadonly)(props), setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            const render2 = Component;
            if (attrs === props) markAttrsAccessed();
            result = normalizeVNode(render2.length > 1 ? render2((0, _reactivity.shallowReadonly)(props), {
                get attrs () {
                    markAttrsAccessed();
                    return (0, _reactivity.shallowReadonly)(attrs);
                },
                slots,
                emit
            }) : render2((0, _reactivity.shallowReadonly)(props), null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1);
        result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (result.patchFlag > 0 && result.patchFlag & 2048) [root, setRoot] = getChildRoot(result);
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & 7) {
                if (propsOptions && keys.some((0, _shared.isModelListener))) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                root = cloneVNode(root, fallthroughAttrs, false, true);
            } else if (!accessedAttrs && root.type !== Comment) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for(let i = 0, l = allAttrs.length; i < l; i++){
                    const key = allAttrs[i];
                    if ((0, _shared.isOn)(key)) {
                        if (!(0, _shared.isModelListener)(key)) eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                    } else extraAttrs.push(key);
                }
                if (extraAttrs.length) warn$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
                if (eventAttrs.length) warn$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
            }
        }
    }
    if (vnode.dirs) {
        if (!isElementRoot(root)) warn$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
        root = cloneVNode(root, null, false, true);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
        if (!isElementRoot(root)) warn$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
        root.transition = vnode.transition;
    }
    if (setRoot) setRoot(root);
    else result = root;
    setCurrentRenderingInstance(prev);
    return result;
}
const getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren, false);
    if (!childRoot) return [
        vnode,
        void 0
    ];
    else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) return getChildRoot(childRoot);
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot)=>{
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
            else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [
                ...dynamicChildren,
                updatedRoot
            ];
        }
    };
    return [
        normalizeVNode(childRoot),
        setRoot
    ];
};
function filterSingleRoot(children, recurse = true) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (isVNode(child)) {
            if (child.type !== Comment || child.children === "v-if") {
                if (singleRoot) return;
                else {
                    singleRoot = child;
                    if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) return filterSingleRoot(singleRoot.children);
                }
            }
        } else return;
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === "class" || key === "style" || (0, _shared.isOn)(key)) (res || (res = {}))[key] = attrs[key];
    return res;
};
const filterModelListeners = (attrs, props)=>{
    const res = {};
    for(const key in attrs)if (!(0, _shared.isModelListener)(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && isHmrUpdating) return true;
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024) return true;
        if (patchFlag & 16) {
            if (!prevProps) return !!nextProps;
            return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
            }
        }
    } else {
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
    while(parent){
        const root = parent.subTree;
        if (root.suspense && root.suspense.activeBranch === vnode) root.el = vnode.el;
        if (root === vnode) {
            (vnode = parent.vnode).el = el;
            parent = parent.parent;
        } else break;
    }
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
    if ((0, _shared.isString)(component)) return resolveAsset(COMPONENTS, component, false) || component;
    else return component || NULL_DYNAMIC_COMPONENT;
}
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component, false);
            if (selfName && (selfName === name || selfName === (0, _shared.camelize)(name) || selfName === (0, _shared.capitalize)((0, _shared.camelize)(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) return Component;
        if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
            warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
        }
        return res;
    } else warn$1(`resolve${(0, _shared.capitalize)(type.slice(0, -1))} can only be used in render() or setup().`);
}
function resolve(registry, name) {
    return registry && (registry[name] || registry[(0, _shared.camelize)(name)] || registry[(0, _shared.capitalize)((0, _shared.camelize)(name))]);
}
const isSuspense = (type)=>type.__isSuspense;
let suspenseId = 0;
const SuspenseImpl = {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
        if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals);
        else {
            if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
                n2.suspense = n1.suspense;
                n2.suspense.vnode = n2;
                n2.el = n1.el;
                return;
            }
            patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if ((0, _shared.isFunction)(eventListener)) eventListener();
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals);
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds);
    if (suspense.deps > 0) {
        triggerEvent(vnode, "onPending");
        triggerEvent(vnode, "onFallback");
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        namespace, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    } else suspense.resolve(false, true);
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                if (!isHydrating) {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            }
        } else {
            suspense.pendingId = suspenseId++;
            if (isHydrating) {
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            } else unmount(pendingBranch, parentComponent, suspense);
            suspense.deps = 0;
            suspense.effects.length = 0;
            suspense.hiddenContainer = createElement("div");
            if (isInFallback) {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
                suspense.resolve(true);
            } else {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
    } else {
        triggerEvent(n2, "onPending");
        suspense.pendingBranch = newBranch;
        if (newBranch.shapeFlag & 512) suspense.pendingId = newBranch.component.suspenseId;
        else suspense.pendingId = suspenseId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
        if (suspense.deps <= 0) suspense.resolve();
        else {
            const { timeout, pendingId } = suspense;
            if (timeout > 0) setTimeout(()=>{
                if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
            }, timeout);
            else if (timeout === 0) suspense.fallback(newFallback);
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    if (!hasWarned) {
        hasWarned = true;
        console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    let parentSuspenseId;
    const isSuspensible = isVNodeSuspensible(vnode);
    if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch) {
            parentSuspenseId = parentSuspense.pendingId;
            parentSuspense.deps++;
        }
    }
    const timeout = vnode.props ? (0, _shared.toNumber)(vnode.props.timeout) : void 0;
    assertNumber(timeout, `Suspense timeout`);
    const initialAnchor = anchor;
    const suspense = {
        vnode,
        parent: parentSuspense,
        parentComponent,
        namespace,
        container,
        hiddenContainer,
        deps: 0,
        pendingId: suspenseId++,
        timeout: typeof timeout === "number" ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !isHydrating,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve (resume = false, sync = false) {
            if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
            if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
            const { vnode: vnode2, activeBranch, pendingBranch, pendingId, effects, parentComponent: parentComponent2, container: container2 } = suspense;
            let delayEnter = false;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) {
                        move(pendingBranch, container2, anchor === initialAnchor ? next(activeBranch) : anchor, 0);
                        queuePostFlushCb(effects);
                    }
                };
                if (activeBranch) {
                    if (parentNode(activeBranch.el) !== suspense.hiddenContainer) anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent2, suspense, true);
                }
                if (!delayEnter) move(pendingBranch, container2, anchor, 0);
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while(parent){
                if (parent.pendingBranch) {
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            if (!hasUnresolvedAncestor && !delayEnter) queuePostFlushCb(effects);
            suspense.effects = [];
            if (isSuspensible) {
                if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
                    parentSuspense.deps--;
                    if (parentSuspense.deps === 0 && !sync) parentSuspense.resolve();
                }
            }
            triggerEvent(vnode2, "onResolve");
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
            triggerEvent(vnode2, "onFallback");
            const anchor2 = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                patch(null, fallbackVNode, container2, anchor2, parentComponent2, null, // fallback tree will not have suspense context
                namespace2, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
            if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
            suspense.isInFallback = true;
            unmount(activeBranch, parentComponent2, null, // no suspense so unmount hooks fire now
            true);
            if (!delayEnter) mountFallback();
        },
        move (container2, anchor2, type) {
            suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
            suspense.container = container2;
        },
        next () {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep (instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) suspense.deps++;
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err)=>{
                handleError(err, instance, 0);
            }).then((asyncSetupResult)=>{
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                instance.asyncResolved = true;
                const { vnode: vnode2 } = instance;
                pushWarningContext(vnode2);
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) vnode2.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode2, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, namespace, optimized);
                if (placeholder) remove(placeholder);
                updateHOCHostEl(instance, vnode2.el);
                popWarningContext();
                if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
            });
        },
        unmount (parentSuspense2, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent, parentSuspense2, doRemove);
            if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent, parentSuspense2, doRemove);
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, // eslint-disable-next-line no-restricted-globals
    document.createElement("div"), null, namespace, slotScopeIds, optimized, rendererInternals, true);
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve(false, true);
    return result;
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if ((0, _shared.isFunction)(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if ((0, _shared.isArray)(s)) {
        const singleChild = filterSingleRoot(s);
        if (!singleChild && s.filter((child)=>child !== NULL_DYNAMIC_COMPONENT).length > 0) warn$1(`<Suspense> slots expect a single root node.`);
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s);
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if ((0, _shared.isArray)(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else queuePostFlushCb(fn);
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    let el = branch.el;
    while(!el && branch.component){
        branch = branch.component.subTree;
        el = branch.el;
    }
    vnode.el = el;
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}
function isVNodeSuspensible(vnode) {
    const suspensible = vnode.props && vnode.props.suspensible;
    return suspensible != null && suspensible !== false;
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = ()=>{
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) warn$1(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
        return ctx;
    }
};
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, (0, _shared.extend)({}, options, {
        flush: "post"
    }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, (0, _shared.extend)({}, options, {
        flush: "sync"
    }));
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
    if (!(0, _shared.isFunction)(cb)) warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, once, onTrack, onTrigger } = (0, _shared.EMPTY_OBJ)) {
    if (cb && once) {
        const _cb = cb;
        cb = (...args)=>{
            _cb(...args);
            unwatch();
        };
    }
    if (deep !== void 0 && typeof deep === "number") warn$1(`watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.`);
    if (!cb) {
        if (immediate !== void 0) warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
        if (deep !== void 0) warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
        if (once !== void 0) warn$1(`watch() "once" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    const warnInvalidSource = (s)=>{
        warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    const reactiveGetter = (source2)=>deep === true ? source2 : // for deep: false, only traverse root-level properties
        traverse(source2, deep === false ? 1 : void 0);
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if ((0, _reactivity.isRef)(source)) {
        getter = ()=>source.value;
        forceTrigger = (0, _reactivity.isShallow)(source);
    } else if ((0, _reactivity.isReactive)(source)) {
        getter = ()=>reactiveGetter(source);
        forceTrigger = true;
    } else if ((0, _shared.isArray)(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>(0, _reactivity.isReactive)(s) || (0, _reactivity.isShallow)(s));
        getter = ()=>source.map((s)=>{
                if ((0, _reactivity.isRef)(s)) return s.value;
                else if ((0, _reactivity.isReactive)(s)) return reactiveGetter(s);
                else if ((0, _shared.isFunction)(s)) return callWithErrorHandling(s, instance, 2);
                else warnInvalidSource(s);
            });
    } else if ((0, _shared.isFunction)(source)) {
        if (cb) getter = ()=>callWithErrorHandling(source, instance, 2);
        else getter = ()=>{
            if (cleanup) cleanup();
            return callWithAsyncErrorHandling(source, instance, 3, [
                onCleanup
            ]);
        };
    } else {
        getter = (0, _shared.NOOP);
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn)=>{
        cleanup = effect.onStop = ()=>{
            callWithErrorHandling(fn, instance, 4);
            cleanup = effect.onStop = void 0;
        };
    };
    let ssrCleanup;
    if (isInSSRComponentSetup) {
        onCleanup = (0, _shared.NOOP);
        if (!cb) getter();
        else if (immediate) callWithAsyncErrorHandling(cb, instance, 3, [
            getter(),
            isMultiSource ? [] : void 0,
            onCleanup
        ]);
        if (flush === "sync") {
            const ctx = useSSRContext();
            ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
        } else return 0, _shared.NOOP;
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = ()=>{
        if (!effect.active || !effect.dirty) return;
        if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v1, i)=>(0, _shared.hasChanged)(v1, oldValue[i])) : (0, _shared.hasChanged)(newValue, oldValue)) || false) {
                if (cleanup) cleanup();
                callWithAsyncErrorHandling(cb, instance, 3, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        } else effect.run();
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") scheduler = job;
    else if (flush === "post") scheduler = ()=>queuePostRenderEffect(job, instance && instance.suspense);
    else {
        job.pre = true;
        if (instance) job.id = instance.uid;
        scheduler = ()=>queueJob(job);
    }
    const effect = new (0, _reactivity.ReactiveEffect)(getter, (0, _shared.NOOP), scheduler);
    const scope = (0, _reactivity.getCurrentScope)();
    const unwatch = ()=>{
        effect.stop();
        if (scope) (0, _shared.remove)(scope.effects, effect);
    };
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
    if (cb) {
        if (immediate) job();
        else oldValue = effect.run();
    } else if (flush === "post") queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    else effect.run();
    if (ssrCleanup) ssrCleanup.push(unwatch);
    return unwatch;
}
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = (0, _shared.isString)(source) ? source.includes(".") ? createPathGetter(publicThis, source) : ()=>publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if ((0, _shared.isFunction)(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const reset = setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    reset();
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function traverse(value, depth = Infinity, seen) {
    if (depth <= 0 || !(0, _shared.isObject)(value) || value["__v_skip"]) return value;
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    depth--;
    if ((0, _reactivity.isRef)(value)) traverse(value.value, depth, seen);
    else if ((0, _shared.isArray)(value)) for(let i = 0; i < value.length; i++)traverse(value[i], depth, seen);
    else if ((0, _shared.isSet)(value) || (0, _shared.isMap)(value)) value.forEach((v1)=>{
        traverse(v1, depth, seen);
    });
    else if ((0, _shared.isPlainObject)(value)) for(const key in value)traverse(value[key], depth, seen);
    return value;
}
function validateDirectiveName(name) {
    if ((0, _shared.isBuiltInDirective)(name)) warn$1("Do not use built-in directive ids as custom directive id: " + name);
}
function withDirectives(vnode, directives) {
    if (currentRenderingInstance === null) {
        warn$1(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = getExposeProxy(currentRenderingInstance) || currentRenderingInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = (0, _shared.EMPTY_OBJ)] = directives[i];
        if (dir) {
            if ((0, _shared.isFunction)(dir)) dir = {
                mounted: dir,
                updated: dir
            };
            if (dir.deep) traverse(value);
            bindings.push({
                dir,
                instance,
                value,
                oldValue: void 0,
                arg,
                modifiers
            });
        }
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            (0, _reactivity.pauseTracking)();
            callWithAsyncErrorHandling(hook, instance, 8, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            (0, _reactivity.resetTracking)();
        }
    }
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey = Symbol("_enterCb");
function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(()=>{
        state.isMounted = true;
    });
    onBeforeUnmount(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [
    Function,
    Array
];
const BaseTransitionPropsValidators = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
};
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: BaseTransitionPropsValidators,
    setup (props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        return ()=>{
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) return;
            let child = children[0];
            if (children.length > 1) {
                let hasFound = false;
                for (const c of children)if (c.type !== Comment) {
                    if (hasFound) {
                        warn$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                        break;
                    }
                    child = c;
                    hasFound = true;
                }
            }
            const rawProps = (0, _reactivity.toRaw)(props);
            const { mode } = rawProps;
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") warn$1(`invalid <transition> mode: ${mode}`);
            if (state.isLeaving) return emptyPlaceholder(child);
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) return emptyPlaceholder(child);
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                setTransitionHooks(oldInnerChild, leavingHooks);
                if (mode === "out-in" && innerChild.type !== Comment) {
                    state.isLeaving = true;
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        if (instance.update.active !== false) {
                            instance.effect.dirty = true;
                            instance.update();
                        }
                    };
                    return emptyPlaceholder(child);
                } else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    el[leaveCbKey] = ()=>{
                        earlyRemove();
                        el[leaveCbKey] = void 0;
                        delete enterHooks.delayedLeave;
                    };
                    enterHooks.delayedLeave = delayedLeave;
                };
            }
            return child;
        };
    }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = /* @__PURE__ */ Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args)=>{
        hook && callWithAsyncErrorHandling(hook, instance, 9, args);
    };
    const callAsyncHook = (hook, args)=>{
        const done = args[1];
        callHook(hook, args);
        if ((0, _shared.isArray)(hook)) {
            if (hook.every((hook2)=>hook2.length <= 1)) done();
        } else if (hook.length <= 1) done();
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter (el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) hook = onBeforeAppear || onBeforeEnter;
                else return;
            }
            if (el[leaveCbKey]) el[leaveCbKey](true);
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) leavingVNode.el[leaveCbKey]();
            callHook(hook, [
                el
            ]);
        },
        enter (el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                } else return;
            }
            let called = false;
            const done = el[enterCbKey] = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook(cancelHook, [
                    el
                ]);
                else callHook(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el[enterCbKey] = void 0;
            };
            if (hook) callAsyncHook(hook, [
                el,
                done
            ]);
            else done();
        },
        leave (el, remove) {
            const key2 = String(vnode.key);
            if (el[enterCbKey]) el[enterCbKey](true);
            if (state.isUnmounting) return remove();
            callHook(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el[leaveCbKey] = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook(onLeaveCancelled, [
                    el
                ]);
                else callHook(onAfterLeave, [
                    el
                ]);
                el[leaveCbKey] = void 0;
                if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
            };
            leavingVNodesCache[key2] = vnode;
            if (onLeave) callAsyncHook(onLeave, [
                el,
                done
            ]);
            else done();
        },
        clone (vnode2) {
            return resolveTransitionHooks(vnode2, props, state, instance);
        }
    };
    return hooks;
}
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    if (!isKeepAlive(vnode)) return vnode;
    if (0, vnode.component) return vnode.component.subTree;
    const { shapeFlag, children } = vnode;
    if (children) {
        if (shapeFlag & 16) return children[0];
        if (shapeFlag & 32 && (0, _shared.isFunction)(children.default)) return children.default();
    }
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) setTransitionHooks(vnode.component.subTree, hooks);
    else if (vnode.shapeFlag & 128) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        let child = children[i];
        const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
        if (child.type === Fragment) {
            if (child.patchFlag & 128) keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
        } else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, {
            key
        }) : child);
    }
    if (keyedFragmentCount > 1) for(let i = 0; i < ret.length; i++)ret[i].patchFlag = -2;
    return ret;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
    return (0, _shared.isFunction)(options) ? // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (()=>(0, _shared.extend)({
            name: options.name
        }, extraOptions, {
            setup: options
        }))() : options;
}
const isAsyncWrapper = (i)=>!!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
    if ((0, _shared.isFunction)(source)) source = {
        loader: source
    };
    const { loader, loadingComponent, errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve, reject)=>{
                const userRetry = ()=>resolve(retry());
                const userFail = ()=>reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) warn$1(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
            if (comp && !(0, _shared.isObject)(comp) && !(0, _shared.isFunction)(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            resolvedComp = comp;
            return comp;
        }));
    };
    return defineComponent({
        name: "AsyncComponentWrapper",
        __asyncLoader: load,
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = currentInstance;
            if (resolvedComp) return ()=>createInnerComp(resolvedComp, instance);
            const onError = (err)=>{
                pendingRequest = null;
                handleError(err, instance, 13, !errorComponent);
            };
            if (suspensible && instance.suspense || isInSSRComponentSetup) return load().then((comp)=>{
                return ()=>createInnerComp(comp, instance);
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? createVNode(errorComponent, {
                        error: err
                    }) : null;
            });
            const loaded = (0, _reactivity.ref)(false);
            const error = (0, _reactivity.ref)();
            const delayed = (0, _reactivity.ref)(!!delay);
            if (delay) setTimeout(()=>{
                delayed.value = false;
            }, delay);
            if (timeout != null) setTimeout(()=>{
                if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                }
            }, timeout);
            load().then(()=>{
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                    instance.parent.effect.dirty = true;
                    queueJob(instance.parent.update);
                }
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return createVNode(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return createVNode(loadingComponent);
            };
        }
    });
}
function createInnerComp(comp, parent) {
    const { ref: ref2, props, children, ce } = parent.vnode;
    const vnode = createVNode(comp, props, children);
    vnode.ref = ref2;
    vnode.ce = ce;
    delete parent.vnode.ce;
    return vnode;
}
const isKeepAlive = (vnode)=>vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [
            String,
            RegExp,
            Array
        ],
        exclude: [
            String,
            RegExp,
            Array
        ],
        max: [
            String,
            Number
        ]
    },
    setup (props, { slots }) {
        const instance = getCurrentInstance();
        const sharedContext = instance.ctx;
        if (!sharedContext.renderer) return ()=>{
            const children = slots.default && slots.default();
            return children && children.length === 1 ? children[0] : children;
        };
        const cache = /* @__PURE__ */ new Map();
        const keys = /* @__PURE__ */ new Set();
        let current = null;
        instance.__v_cache = cache;
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement("div");
        sharedContext.activate = (vnode, container, anchor, namespace, optimized)=>{
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, namespace, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(()=>{
                instance2.isDeactivated = false;
                if (instance2.a) (0, _shared.invokeArrayFns)(instance2.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
            }, parentSuspense);
            devtoolsComponentAdded(instance2);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance2 = vnode.component;
            move(vnode, storageContainer, null, 1, parentSuspense);
            queuePostRenderEffect(()=>{
                if (instance2.da) (0, _shared.invokeArrayFns)(instance2.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
                instance2.isDeactivated = true;
            }, parentSuspense);
            devtoolsComponentAdded(instance2);
        };
        function unmount(vnode) {
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || !isSameVNodeType(cached, current)) unmount(cached);
            else if (current) resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        watch(()=>[
                props.include,
                props.exclude
            ], ([include, exclude])=>{
            include && pruneCache((name)=>matches(include, name));
            exclude && pruneCache((name)=>!matches(exclude, name));
        }, // prune post-render after `current` has been updated
        {
            flush: "post",
            deep: true
        });
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            if (pendingCacheKey != null) cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(()=>{
            cache.forEach((cached)=>{
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type && cached.key === vnode.key) {
                    resetShapeFlag(vnode);
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return ()=>{
            pendingCacheKey = null;
            if (!slots.default) return null;
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                warn$1(`KeepAlive should contain exactly one component child.`);
                current = null;
                return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include, exclude, max } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128) rawVNode.ssContent = vnode;
            }
            pendingCacheKey = key;
            if (cachedVNode) {
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) setTransitionHooks(vnode, vnode.transition);
                vnode.shapeFlag |= 512;
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if ((0, _shared.isArray)(pattern)) return pattern.some((p)=>matches(p, name));
    else if ((0, _shared.isString)(pattern)) return pattern.split(",").includes(name);
    else if ((0, _shared.isRegExp)(pattern)) return pattern.test(name);
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(()=>{
        (0, _shared.remove)(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    vnode.shapeFlag &= -257;
    vnode.shapeFlag &= -513;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            if (target.isUnmounted) return;
            (0, _reactivity.pauseTracking)();
            const reset = setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            reset();
            (0, _reactivity.resetTracking)();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    } else {
        const apiName = (0, _shared.toHandlerKey)(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
        warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().` + ` If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
}
const createHook = (lifecycle)=>(hook, target = currentInstance)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args)=>hook(...args), target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
}
function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if ((0, _shared.isArray)(source) || (0, _shared.isString)(source)) {
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    } else if (typeof source === "number") {
        if (!Number.isInteger(source)) warn$1(`The v-for range expect an integer value but got ${source}.`);
        ret = new Array(source);
        for(let i = 0; i < source; i++)ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    } else if ((0, _shared.isObject)(source)) {
        if (source[Symbol.iterator]) ret = Array.from(source, (item, i)=>renderItem(item, i, void 0, cached && cached[i]));
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for(let i = 0, l = keys.length; i < l; i++){
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    } else ret = [];
    if (cache) cache[index] = ret;
    return ret;
}
function createSlots(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        if ((0, _shared.isArray)(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) slots[slot.name] = slot.key ? (...args)=>{
            const res = slot.fn(...args);
            if (res) res.key = slot.key;
            return res;
        } : slot.fn;
    }
    return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
        if (name !== "default") props.name = name;
        return createVNode("slot", props, fallback && fallback());
    }
    let slot = slots[name];
    if (slot && slot.length > 1) {
        warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
        slot = ()=>[];
    }
    if (slot && slot._c) slot._d = false;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, {
        key: props.key || // slot content array of a dynamic conditional slot may have a branch
        // key attached in the `createSlots` helper, respect that
        validSlotContent && validSlotContent.key || `_${name}`
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
    if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [
        rendered.scopeId + "-s"
    ];
    if (slot && slot._c) slot._d = true;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!isVNode(child)) return true;
        if (child.type === Comment) return false;
        if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
    const ret = {};
    if (!(0, _shared.isObject)(obj)) {
        warn$1(`v-on with no argument expects an object value.`);
        return ret;
    }
    for(const key in obj)ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : (0, _shared.toHandlerKey)(key)] = obj[key];
    return ret;
}
const getPublicInstance = (i)=>{
    if (!i) return null;
    if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/* @__PURE__ */ (0, _shared.extend)(/* @__PURE__ */ Object.create(null), {
    $: (i)=>i,
    $el: (i)=>i.vnode.el,
    $data: (i)=>i.data,
    $props: (i)=>(0, _reactivity.shallowReadonly)(i.props),
    $attrs: (i)=>(0, _reactivity.shallowReadonly)(i.attrs),
    $slots: (i)=>(0, _reactivity.shallowReadonly)(i.slots),
    $refs: (i)=>(0, _reactivity.shallowReadonly)(i.refs),
    $parent: (i)=>getPublicInstance(i.parent),
    $root: (i)=>getPublicInstance(i.root),
    $emit: (i)=>i.emit,
    $options: (i)=>__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i)=>i.f || (i.f = ()=>{
            i.effect.dirty = true;
            queueJob(i.update);
        }),
    $nextTick: (i)=>i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i)=>__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : (0, _shared.NOOP)
});
const isReservedPrefix = (key)=>key === "_" || key === "$";
const hasSetupBinding = (state, key)=>state !== (0, _shared.EMPTY_OBJ) && !state.__isScriptSetup && (0, _shared.hasOwn)(state, key);
const PublicInstanceProxyHandlers = {
    get ({ _: instance }, key) {
        if (key === "__v_skip") return true;
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        if (key === "__isVue") return true;
        let normalizedProps;
        if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== void 0) switch(n){
                case 1 /* SETUP */ :
                    return setupState[key];
                case 2 /* DATA */ :
                    return data[key];
                case 4 /* CONTEXT */ :
                    return ctx[key];
                case 3 /* PROPS */ :
                    return props[key];
            }
            else if (hasSetupBinding(setupState, key)) {
                accessCache[key] = 1 /* SETUP */ ;
                return setupState[key];
            } else if (data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key)) {
                accessCache[key] = 2 /* DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && (0, _shared.hasOwn)(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */ ;
                return props[key];
            } else if (ctx !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */ ;
                return ctx[key];
            } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) accessCache[key] = 0 /* OTHER */ ;
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        if (publicGetter) {
            if (key === "$attrs") {
                (0, _reactivity.track)(instance.attrs, "get", "");
                markAttrsAccessed();
            } else if (key === "$slots") (0, _reactivity.track)(instance, "get", key);
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(ctx, key)) {
            accessCache[key] = 4 /* CONTEXT */ ;
            return ctx[key];
        } else if (// global properties
        globalProperties = appContext.config.globalProperties, (0, _shared.hasOwn)(globalProperties, key)) return globalProperties[key];
        else if (currentRenderingInstance && (!(0, _shared.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf("__v") !== 0)) {
            if (data !== (0, _shared.EMPTY_OBJ) && isReservedPrefix(key[0]) && (0, _shared.hasOwn)(data, key)) warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
            else if (instance === currentRenderingInstance) warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
        }
    },
    set ({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (hasSetupBinding(setupState, key)) {
            setupState[key] = value;
            return true;
        } else if ((0, setupState.__isScriptSetup) && (0, _shared.hasOwn)(setupState, key)) {
            warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
            return false;
        } else if (data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key)) {
            data[key] = value;
            return true;
        } else if ((0, _shared.hasOwn)(instance.props, key)) {
            warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
            return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) {
            warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
            return false;
        } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
        });
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && (0, _shared.hasOwn)(normalizedProps, key) || (0, _shared.hasOwn)(ctx, key) || (0, _shared.hasOwn)(publicPropertiesMap, key) || (0, _shared.hasOwn)(appContext.config.globalProperties, key);
    },
    defineProperty (target, key, descriptor) {
        if (descriptor.get != null) target._.accessCache[key] = 0;
        else if ((0, _shared.hasOwn)(descriptor, "value")) this.set(target, key, descriptor.value, null);
        return Reflect.defineProperty(target, key, descriptor);
    }
};
PublicInstanceProxyHandlers.ownKeys = (target)=>{
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
};
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ (0, _shared.extend)({}, PublicInstanceProxyHandlers, {
    get (target, key) {
        if (key === Symbol.unscopables) return;
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== "_" && !(0, _shared.isGloballyAllowed)(key);
        if (!has && PublicInstanceProxyHandlers.has(_, key)) warn$1(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        return has;
    }
});
function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    Object.keys(publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: (0, _shared.NOOP)
        });
    });
    return target;
}
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key],
            set: (0, _shared.NOOP)
        });
    });
}
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys((0, _reactivity.toRaw)(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
                warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>setupState[key],
                set: (0, _shared.NOOP)
            });
        }
    });
}
const warnRuntimeUsage = (method)=>warn$1(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
function defineProps() {
    warnRuntimeUsage(`defineProps`);
    return null;
}
function defineEmits() {
    warnRuntimeUsage(`defineEmits`);
    return null;
}
function defineExpose(exposed) {
    warnRuntimeUsage(`defineExpose`);
}
function defineOptions(options) {
    warnRuntimeUsage(`defineOptions`);
}
function defineSlots() {
    warnRuntimeUsage(`defineSlots`);
    return null;
}
function defineModel() {
    warnRuntimeUsage("defineModel");
}
function withDefaults(props, defaults) {
    warnRuntimeUsage(`withDefaults`);
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (!i) warn$1(`useContext() called without active instance.`);
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
    return (0, _shared.isArray)(props) ? props.reduce((normalized, p)=>(normalized[p] = null, normalized), {}) : props;
}
function mergeDefaults(raw, defaults) {
    const props = normalizePropsOrEmits(raw);
    for(const key in defaults){
        if (key.startsWith("__skip")) continue;
        let opt = props[key];
        if (opt) {
            if ((0, _shared.isArray)(opt) || (0, _shared.isFunction)(opt)) opt = props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) opt = props[key] = {
            default: defaults[key]
        };
        else warn$1(`props default key "${key}" has no corresponding declaration.`);
        if (opt && defaults[`__skip_${key}`]) opt.skipFactory = true;
    }
    return props;
}
function mergeModels(a, b) {
    if (!a || !b) return a || b;
    if ((0, _shared.isArray)(a) && (0, _shared.isArray)(b)) return a.concat(b);
    return (0, _shared.extend)({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for(const key in props)if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
        enumerable: true,
        get: ()=>props[key]
    });
    return ret;
}
function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) warn$1(`withAsyncContext called without active current instance. This is likely a bug.`);
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if ((0, _shared.isPromise)(awaitable)) awaitable = awaitable.catch((e)=>{
        setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>setCurrentInstance(ctx)
    ];
}
function createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key)=>{
        if (cache[key]) warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc");
    const { // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, // lifecycle
    created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, // public API
    expose, inheritAttrs, // assets
    components, directives, filters } = options;
    const checkDuplicateProperties = createDuplicateChecker();
    {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) for(const key in propsOptions)checkDuplicateProperties("Props" /* PROPS */ , key);
    }
    if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    if (methods) for(const key in methods){
        const methodHandler = methods[key];
        if ((0, _shared.isFunction)(methodHandler)) {
            Object.defineProperty(ctx, key, {
                value: methodHandler.bind(publicThis),
                configurable: true,
                enumerable: true,
                writable: true
            });
            checkDuplicateProperties("Methods" /* METHODS */ , key);
        } else warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
    }
    if (dataOptions) {
        if (!(0, _shared.isFunction)(dataOptions)) warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
        const data = dataOptions.call(publicThis, publicThis);
        if ((0, _shared.isPromise)(data)) warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
        if (!(0, _shared.isObject)(data)) warn$1(`data() should return an object.`);
        else {
            instance.data = (0, _reactivity.reactive)(data);
            for(const key in data){
                checkDuplicateProperties("Data" /* DATA */ , key);
                if (!isReservedPrefix(key[0])) Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: ()=>data[key],
                    set: (0, _shared.NOOP)
                });
            }
        }
    }
    shouldCacheAccess = true;
    if (computedOptions) for(const key in computedOptions){
        const opt = computedOptions[key];
        const get = (0, _shared.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0, _shared.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : (0, _shared.NOOP);
        if (get === (0, _shared.NOOP)) warn$1(`Computed property "${key}" has no getter.`);
        const set = !(0, _shared.isFunction)(opt) && (0, _shared.isFunction)(opt.set) ? opt.set.bind(publicThis) : ()=>{
            warn$1(`Write operation failed: computed property "${key}" is readonly.`);
        };
        const c = computed({
            get,
            set
        });
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value,
            set: (v1)=>c.value = v1
        });
        checkDuplicateProperties("Computed" /* COMPUTED */ , key);
    }
    if (watchOptions) for(const key in watchOptions)createWatcher(watchOptions[key], ctx, publicThis, key);
    if (provideOptions) {
        const provides = (0, _shared.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key)=>{
            provide(key, provides[key]);
        });
    }
    if (created) callHook(created, instance, "c");
    function registerLifecycleHook(register, hook) {
        if ((0, _shared.isArray)(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis)));
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if ((0, _shared.isArray)(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key)=>{
                Object.defineProperty(exposed, key, {
                    get: ()=>publicThis[key],
                    set: (val)=>publicThis[key] = val
                });
            });
        } else if (!instance.exposed) instance.exposed = {};
    }
    if (render && instance.render === (0, _shared.NOOP)) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = (0, _shared.NOOP)) {
    if ((0, _shared.isArray)(injectOptions)) injectOptions = normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if ((0, _shared.isObject)(opt)) {
            if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
            else injected = inject(opt.from || key);
        } else injected = inject(opt);
        if ((0, _reactivity.isRef)(injected)) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>injected.value,
            set: (v1)=>injected.value = v1
        });
        else ctx[key] = injected;
        checkDuplicateProperties("Inject" /* INJECT */ , key);
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling((0, _shared.isArray)(hook) ? hook.map((h)=>h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : ()=>publicThis[key];
    if ((0, _shared.isString)(raw)) {
        const handler = ctx[raw];
        if ((0, _shared.isFunction)(handler)) watch(getter, handler);
        else warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    } else if ((0, _shared.isFunction)(raw)) watch(getter, raw.bind(publicThis));
    else if ((0, _shared.isObject)(raw)) {
        if ((0, _shared.isArray)(raw)) raw.forEach((r)=>createWatcher(r, ctx, publicThis, key));
        else {
            const handler = (0, _shared.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if ((0, _shared.isFunction)(handler)) watch(getter, handler, raw);
            else warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
    } else warn$1(`Invalid watch option: "${key}"`, raw);
}
function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {};
        if (globalMixins.length) globalMixins.forEach((m)=>mergeOptions(resolved, m, optionMergeStrategies, true));
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    if ((0, _shared.isObject)(base)) cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>mergeOptions(to, m, strats, true));
    for(const key in from)if (asMixin && key === "expose") warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeEmitsOrPropsOptions,
    emits: mergeEmitsOrPropsOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return (0, _shared.extend)((0, _shared.isFunction)(to) ? to.call(this, this) : to, (0, _shared.isFunction)(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if ((0, _shared.isArray)(raw)) {
        const res = {};
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function mergeObjectOptions(to, from) {
    return to ? (0, _shared.extend)(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
    if (to) {
        if ((0, _shared.isArray)(to) && (0, _shared.isArray)(from)) return [
            .../* @__PURE__ */ new Set([
                ...to,
                ...from
            ])
        ];
        return (0, _shared.extend)(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
    } else return from;
}
function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = (0, _shared.extend)(/* @__PURE__ */ Object.create(null), to);
    for(const key in from)merged[key] = mergeAsArray(to[key], from[key]);
    return merged;
}
function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: (0, _shared.NO),
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /* @__PURE__ */ Object.create(null),
        optionsCache: /* @__PURE__ */ new WeakMap(),
        propsCache: /* @__PURE__ */ new WeakMap(),
        emitsCache: /* @__PURE__ */ new WeakMap()
    };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!(0, _shared.isFunction)(rootComponent)) rootComponent = (0, _shared.extend)({}, rootComponent);
        if (rootProps != null && !(0, _shared.isObject)(rootProps)) {
            warn$1(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = /* @__PURE__ */ new WeakSet();
        let isMounted = false;
        const app = context.app = {
            _uid: uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config () {
                return context.config;
            },
            set config (v){
                warn$1(`app.config cannot be replaced. Modify individual options instead.`);
            },
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) warn$1(`Plugin has already been applied to target app.`);
                else if (plugin && (0, _shared.isFunction)(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if ((0, _shared.isFunction)(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                } else warn$1(`A plugin must either be a function or an object with an "install" function.`);
                return app;
            },
            mixin (mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                    else warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
                } else warn$1("Mixins are only available in builds supporting Options API");
                return app;
            },
            component (name, component) {
                validateComponentName(name, context.config);
                if (!component) return context.components[name];
                if (0, context.components[name]) warn$1(`Component "${name}" has already been registered in target app.`);
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                validateDirectiveName(name);
                if (!directive) return context.directives[name];
                if (0, context.directives[name]) warn$1(`Directive "${name}" has already been registered in target app.`);
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, namespace) {
                if (!isMounted) {
                    if (0, rootContainer.__vue_app__) warn$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
                    const vnode = createVNode(rootComponent, rootProps);
                    vnode.appContext = context;
                    if (namespace === true) namespace = "svg";
                    else if (namespace === false) namespace = void 0;
                    context.reload = ()=>{
                        render(cloneVNode(vnode), rootContainer, namespace);
                    };
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, namespace);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    app._instance = vnode.component;
                    devtoolsInitApp(app, version);
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                } else warn$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
            },
            unmount () {
                if (isMounted) {
                    render(null, app._container);
                    app._instance = null;
                    devtoolsUnmountApp(app);
                    delete app._container.__vue_app__;
                } else warn$1(`Cannot unmount an app that is not mounted.`);
            },
            provide (key, value) {
                if (key in context.provides) warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
                context.provides[key] = value;
                return app;
            },
            runWithContext (fn) {
                const lastApp = currentApp;
                currentApp = app;
                try {
                    return fn();
                } finally{
                    currentApp = lastApp;
                }
            }
        };
        return app;
    };
}
let currentApp = null;
function provide(key, value) {
    if (!currentInstance) warn$1(`provide() can only be used inside setup().`);
    else {
        let provides = currentInstance.provides;
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance || currentApp) {
        const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
        if (provides && key in provides) return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && (0, _shared.isFunction)(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
        else warn$1(`injection "${String(key)}" not found.`);
    } else warn$1(`inject() can only be used inside setup() or functional components.`);
}
function hasInjectionContext() {
    return !!(currentInstance || currentRenderingInstance || currentApp);
}
const internalObjectProto = {};
const createInternalObject = ()=>Object.create(internalObjectProto);
const isInternalObject = (obj)=>Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = createInternalObject();
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = void 0;
    validateProps(rawProps || {}, props, instance);
    if (isStateful) instance.props = isSSR ? props : (0, _reactivity.shallowReactive)(props);
    else if (!instance.type.props) instance.props = attrs;
    else instance.props = props;
    instance.attrs = attrs;
}
function isInHmrContext(instance) {
    while(instance){
        if (instance.type.__hmrId) return true;
        instance = instance.parent;
    }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = (0, _reactivity.toRaw)(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
        if (patchFlag & 8) {
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                if (isEmitListener(instance.emitsOptions, key)) continue;
                const value = rawProps[key];
                if (options) {
                    if ((0, _shared.hasOwn)(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = (0, _shared.camelize)(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        let kebabKey;
        for(const key in rawCurrentProps)if (!rawProps || // for camelCase
        !(0, _shared.hasOwn)(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = (0, _shared.hyphenate)(key)) === key || !(0, _shared.hasOwn)(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && // for camelCase
                (rawPrevProps[key] !== void 0 || // for kebab-case
                rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
            } else delete props[key];
        }
        if (attrs !== rawCurrentProps) {
            for(const key in attrs)if (!rawProps || !(0, _shared.hasOwn)(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
            }
        }
    }
    if (hasAttrsChanged) (0, _reactivity.trigger)(instance.attrs, "set", "");
    validateProps(rawProps || {}, props, instance);
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        if ((0, _shared.isReservedProp)(key)) continue;
        const value = rawProps[key];
        let camelKey;
        if (options && (0, _shared.hasOwn)(options, camelKey = (0, _shared.camelize)(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = (0, _reactivity.toRaw)(props);
        const castValues = rawCastValues || (0, _shared.EMPTY_OBJ);
        for(let i = 0; i < needCastKeys.length; i++){
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !(0, _shared.hasOwn)(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = (0, _shared.hasOwn)(opt, "default");
        if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            if (opt.type !== Function && !opt.skipFactory && (0, _shared.isFunction)(defaultValue)) {
                const { propsDefaults } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    const reset = setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    reset();
                }
            } else value = defaultValue;
        }
        if (opt[0 /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* shouldCastTrue */ ] && (value === "" || value === (0, _shared.hyphenate)(key))) value = true;
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, _shared.isFunction)(comp)) {
        const extendProps = (raw2)=>{
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw2, appContext, true);
            (0, _shared.extend)(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw && !hasExtends) {
        if ((0, _shared.isObject)(comp)) cache.set(comp, (0, _shared.EMPTY_ARR));
        return 0, _shared.EMPTY_ARR;
    }
    if ((0, _shared.isArray)(raw)) for(let i = 0; i < raw.length; i++){
        if (!(0, _shared.isString)(raw[i])) warn$1(`props must be strings when using array syntax.`, raw[i]);
        const normalizedKey = (0, _shared.camelize)(raw[i]);
        if (validatePropName(normalizedKey)) normalized[normalizedKey] = (0, _shared.EMPTY_OBJ);
    }
    else if (raw) {
        if (!(0, _shared.isObject)(raw)) warn$1(`invalid props options`, raw);
        for(const key in raw){
            const normalizedKey = (0, _shared.camelize)(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = normalized[normalizedKey] = (0, _shared.isArray)(opt) || (0, _shared.isFunction)(opt) ? {
                    type: opt
                } : (0, _shared.extend)({}, opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */ ] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                    if (booleanIndex > -1 || (0, _shared.hasOwn)(prop, "default")) needCastKeys.push(normalizedKey);
                }
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    if ((0, _shared.isObject)(comp)) cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== "$" && !(0, _shared.isReservedProp)(key)) return true;
    else warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    return false;
}
function getType(ctor) {
    if (ctor === null) return "null";
    if (typeof ctor === "function") return ctor.name || "";
    else if (typeof ctor === "object") {
        const name = ctor.constructor && ctor.constructor.name;
        return name || "";
    }
    return "";
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if ((0, _shared.isArray)(expectedTypes)) return expectedTypes.findIndex((t)=>isSameType(t, type));
    else if ((0, _shared.isFunction)(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
    return -1;
}
function validateProps(rawProps, props, instance) {
    const resolvedValues = (0, _reactivity.toRaw)(props);
    const options = instance.propsOptions[0];
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        validateProp(key, resolvedValues[key], opt, (0, _reactivity.shallowReadonly)(resolvedValues), !(0, _shared.hasOwn)(rawProps, key) && !(0, _shared.hasOwn)(rawProps, (0, _shared.hyphenate)(key)));
    }
}
function validateProp(name, value, prop, props, isAbsent) {
    const { type, required, validator, skipCheck } = prop;
    if (required && isAbsent) {
        warn$1('Missing required prop: "' + name + '"');
        return;
    }
    if (value == null && !required) return;
    if (type != null && type !== true && !skipCheck) {
        let isValid = false;
        const types = (0, _shared.isArray)(type) ? type : [
            type
        ];
        const expectedTypes = [];
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
        }
        if (!isValid) {
            warn$1(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    if (validator && !validator(value, props)) warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const isSimpleType = /* @__PURE__ */ (0, _shared.makeMap)("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        if (!valid && t === "object") valid = value instanceof type;
    } else if (expectedType === "Object") valid = (0, _shared.isObject)(value);
    else if (expectedType === "Array") valid = (0, _shared.isArray)(value);
    else if (expectedType === "null") valid = value === null;
    else valid = value instanceof type;
    return {
        valid,
        expectedType
    };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length === 0) return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map((0, _shared.capitalize)).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = (0, _shared.toRawType)(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
function styleValue(value, type) {
    if (type === "String") return `"${value}"`;
    else if (type === "Number") return `${Number(value)}`;
    else return `${value}`;
}
function isExplicable(type) {
    const explicitTypes = [
        "string",
        "number",
        "boolean"
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem);
}
function isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === "boolean");
}
const isInternalKey = (key)=>key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value)=>(0, _shared.isArray)(value) ? value.map(normalizeVNode) : [
        normalizeVNode(value)
    ];
const normalizeSlot = (key, rawSlot, ctx)=>{
    if (rawSlot._n) return rawSlot;
    const normalized = withCtx((...args)=>{
        if (currentInstance && (!ctx || ctx.root === currentInstance.root)) warn$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if (isInternalKey(key)) continue;
        const value = rawSlots[key];
        if ((0, _shared.isFunction)(value)) slots[key] = normalizeSlot(key, value, ctx);
        else if (value != null) {
            warn$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
            const normalized = normalizeSlotValue(value);
            slots[key] = ()=>normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children)=>{
    if (!isKeepAlive(instance.vnode) && true) warn$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
    const normalized = normalizeSlotValue(children);
    instance.slots.default = ()=>normalized;
};
const initSlots = (instance, children)=>{
    const slots = instance.slots = createInternalObject();
    if (instance.vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            (0, _shared.extend)(slots, children);
            (0, _shared.def)(slots, "_", type, true);
        } else normalizeObjectSlots(children, slots);
    } else if (children) normalizeVNodeSlots(instance, children);
};
const updateSlots = (instance, children, optimized)=>{
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = (0, _shared.EMPTY_OBJ);
    if (vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            if (isHmrUpdating) {
                (0, _shared.extend)(slots, children);
                (0, _reactivity.trigger)(instance, "set", "$slots");
            } else if (optimized && type === 1) needDeletionCheck = false;
            else {
                (0, _shared.extend)(slots, children);
                if (!optimized && type === 1) delete slots._;
            }
        } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    if (needDeletionCheck) {
        for(const key in slots)if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
    }
};
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if ((0, _shared.isArray)(rawRef)) {
        rawRef.forEach((r, i)=>setRef(r, oldRawRef && ((0, _shared.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) return;
    const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    if (!owner) {
        warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === (0, _shared.EMPTY_OBJ) ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref) {
        if ((0, _shared.isString)(oldRef)) {
            refs[oldRef] = null;
            if ((0, _shared.hasOwn)(setupState, oldRef)) setupState[oldRef] = null;
        } else if ((0, _reactivity.isRef)(oldRef)) oldRef.value = null;
    }
    if ((0, _shared.isFunction)(ref)) callWithErrorHandling(ref, owner, 12, [
        value,
        refs
    ]);
    else {
        const _isString = (0, _shared.isString)(ref);
        const _isRef = (0, _reactivity.isRef)(ref);
        if (_isString || _isRef) {
            const doSet = ()=>{
                if (rawRef.f) {
                    const existing = _isString ? (0, _shared.hasOwn)(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
                    if (isUnmount) (0, _shared.isArray)(existing) && (0, _shared.remove)(existing, refValue);
                    else {
                        if (!(0, _shared.isArray)(existing)) {
                            if (_isString) {
                                refs[ref] = [
                                    refValue
                                ];
                                if ((0, _shared.hasOwn)(setupState, ref)) setupState[ref] = refs[ref];
                            } else {
                                ref.value = [
                                    refValue
                                ];
                                if (rawRef.k) refs[rawRef.k] = ref.value;
                            }
                        } else if (!existing.includes(refValue)) existing.push(refValue);
                    }
                } else if (_isString) {
                    refs[ref] = value;
                    if ((0, _shared.hasOwn)(setupState, ref)) setupState[ref] = value;
                } else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k) refs[rawRef.k] = value;
                } else warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            } else doSet();
        } else warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
    }
}
let hasMismatch = false;
const isSVGContainer = (container)=>container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = (container)=>container.namespaceURI.includes("MathML");
const getContainerType = (container)=>{
    if (isSVGContainer(container)) return "svg";
    if (isMathMLContainer(container)) return "mathml";
    return void 0;
};
const isComment = (node)=>node.nodeType === 8 /* COMMENT */ ;
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, createText, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            warn$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        container._vnode = vnode;
        if (hasMismatch && true) console.error(`Hydration completed but contains mismatches.`);
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const isFragmentStart = isComment(node) && node.data === "[";
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type, ref, shapeFlag, patchFlag } = vnode;
        let domType = node.nodeType;
        vnode.el = node;
        if (!("__vnode" in node)) Object.defineProperty(node, "__vnode", {
            value: vnode,
            enumerable: false
        });
        if (!("__vueParentComponent" in node)) Object.defineProperty(node, "__vueParentComponent", {
            value: parentComponent,
            enumerable: false
        });
        if (patchFlag === -2) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch(type){
            case Text:
                if (domType !== 3 /* TEXT */ ) {
                    if (vnode.children === "") {
                        insert(vnode.el = createText(""), parentNode(node), node);
                        nextNode = node;
                    } else nextNode = onMismatch();
                } else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        warn$1(`Hydration text mismatch in`, node.parentNode, `
  - rendered on server: ${JSON.stringify(node.data)}
  - expected on client: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (isTemplateNode(node)) {
                    nextNode = nextSibling(node);
                    replaceNode(vnode.el = node.content.firstChild, node, parentComponent);
                } else if (domType !== 8 /* COMMENT */  || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case Static:
                if (isFragmentStart) {
                    node = nextSibling(node);
                    domType = node.nodeType;
                }
                if (domType === 1 /* ELEMENT */  || domType === 3 /* TEXT */ ) {
                    nextNode = node;
                    const needToAdoptContent = !vnode.children.length;
                    for(let i = 0; i < vnode.staticCount; i++){
                        if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 /* ELEMENT */  ? nextNode.outerHTML : nextNode.data;
                        if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                        nextNode = nextSibling(nextNode);
                    }
                    return isFragmentStart ? nextSibling(nextNode) : nextNode;
                } else onMismatch();
                break;
            case Fragment:
                if (!isFragmentStart) nextNode = onMismatch();
                else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) {
                    if ((domType !== 1 /* ELEMENT */  || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) nextNode = onMismatch();
                    else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                } else if (shapeFlag & 6) {
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    if (isFragmentStart) nextNode = locateClosingAnchor(node);
                    else if (isComment(node) && node.data === "teleport start") nextNode = locateClosingAnchor(node, node.data, "teleport end");
                    else nextNode = nextSibling(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, getContainerType(container), optimized);
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64) {
                    if (domType !== 8 /* COMMENT */ ) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, getContainerType(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
        }
        if (ref != null) setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
        const forcePatch = type === "input" || type === "option";
        {
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
            let needCallTransitionHooks = false;
            if (isTemplateNode(el)) {
                needCallTransitionHooks = needTransition(parentSuspense, transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
                const content = el.content.firstChild;
                if (needCallTransitionHooks) transition.beforeEnter(content);
                replaceNode(content, el, parentComponent);
                vnode.el = el = content;
            }
            if (shapeFlag & 16 && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while(next){
                    hasMismatch = true;
                    if (!hasWarned) {
                        warn$1(`Hydration children mismatch on`, el, `
Server rendered element contains more child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    warn$1(`Hydration text content mismatch on`, el, `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
            if (props) for(const key in props){
                if (propHasMismatch(el, key, props[key], vnode, parentComponent)) hasMismatch = true;
                if (forcePatch && (key.endsWith("value") || key === "indeterminate") || (0, _shared.isOn)(key) && !(0, _shared.isReservedProp)(key) || // force hydrate v-bind with .prop modifiers
                key[0] === ".") patchProp(el, key, null, props[key], void 0, void 0, parentComponent);
            }
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) queueEffectWithSuspense(()=>{
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for(let i = 0; i < l; i++){
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            else if (vnode.type === Text && !vnode.children) continue;
            else {
                hasMismatch = true;
                if (!hasWarned) {
                    warn$1(`Hydration children mismatch on`, container, `
Server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned = true;
                }
                patch(null, vnode, container, null, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next);
        else {
            hasMismatch = true;
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        hasMismatch = true;
        warn$1(`Hydration node mismatch:
- rendered on server:`, node, node.nodeType === 3 /* TEXT */  ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``, `
- expected on client:`, vnode.type);
        vnode.el = null;
        if (isFragment) {
            const end = locateClosingAnchor(node);
            while(true){
                const next2 = nextSibling(node);
                if (next2 && next2 !== end) remove(next2);
                else break;
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
        return next;
    };
    const locateClosingAnchor = (node, open = "[", close = "]")=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === open) match++;
                if (node.data === close) {
                    if (match === 0) return nextSibling(node);
                    else match--;
                }
            }
        }
        return node;
    };
    const replaceNode = (newNode, oldNode, parentComponent)=>{
        const parentNode2 = oldNode.parentNode;
        if (parentNode2) parentNode2.replaceChild(newNode, oldNode);
        let parent = parentComponent;
        while(parent){
            if (parent.vnode.el === oldNode) parent.vnode.el = parent.subTree.el = newNode;
            parent = parent.parent;
        }
    };
    const isTemplateNode = (node)=>{
        return node.nodeType === 1 /* ELEMENT */  && node.tagName.toLowerCase() === "template";
    };
    return [
        hydrate,
        hydrateNode
    ];
}
function propHasMismatch(el, key, clientValue, vnode, instance) {
    var _a;
    let mismatchType;
    let mismatchKey;
    let actual;
    let expected;
    if (key === "class") {
        actual = el.getAttribute("class");
        expected = (0, _shared.normalizeClass)(clientValue);
        if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) mismatchType = mismatchKey = `class`;
    } else if (key === "style") {
        actual = el.getAttribute("style") || "";
        expected = (0, _shared.isString)(clientValue) ? clientValue : (0, _shared.stringifyStyle)((0, _shared.normalizeStyle)(clientValue));
        const actualMap = toStyleMap(actual);
        const expectedMap = toStyleMap(expected);
        if (vnode.dirs) {
            for (const { dir, value } of vnode.dirs)if (dir.name === "show" && !value) expectedMap.set("display", "none");
        }
        const root = instance == null ? void 0 : instance.subTree;
        if (vnode === root || (root == null ? void 0 : root.type) === Fragment && root.children.includes(vnode)) {
            const cssVars = (_a = instance == null ? void 0 : instance.getCssVars) == null ? void 0 : _a.call(instance);
            for(const key2 in cssVars)expectedMap.set(`--${key2}`, String(cssVars[key2]));
        }
        if (!isMapEqual(actualMap, expectedMap)) mismatchType = mismatchKey = "style";
    } else if (el instanceof SVGElement && (0, _shared.isKnownSvgAttr)(key) || el instanceof HTMLElement && ((0, _shared.isBooleanAttr)(key) || (0, _shared.isKnownHtmlAttr)(key))) {
        if ((0, _shared.isBooleanAttr)(key)) {
            actual = el.hasAttribute(key);
            expected = (0, _shared.includeBooleanAttr)(clientValue);
        } else if (clientValue == null) {
            actual = el.hasAttribute(key);
            expected = false;
        } else {
            if (el.hasAttribute(key)) actual = el.getAttribute(key);
            else if (key === "value" && el.tagName === "TEXTAREA") actual = el.value;
            else actual = false;
            expected = (0, _shared.isRenderableAttrValue)(clientValue) ? String(clientValue) : false;
        }
        if (actual !== expected) {
            mismatchType = `attribute`;
            mismatchKey = key;
        }
    }
    if (mismatchType) {
        const format = (v1)=>v1 === false ? `(not rendered)` : `${mismatchKey}="${v1}"`;
        const preSegment = `Hydration ${mismatchType} mismatch on`;
        const postSegment = `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
        warn$1(preSegment, el, postSegment);
        return true;
    }
    return false;
}
function toClassSet(str) {
    return new Set(str.trim().split(/\s+/));
}
function isSetEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const s of a){
        if (!b.has(s)) return false;
    }
    return true;
}
function toStyleMap(str) {
    const styleMap = /* @__PURE__ */ new Map();
    for (const item of str.split(";")){
        let [key, value] = item.split(":");
        key = key == null ? void 0 : key.trim();
        value = value == null ? void 0 : value.trim();
        if (key && value) styleMap.set(key, value);
    }
    return styleMap;
}
function isMapEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const [key, value] of a){
        if (value !== b.get(key)) return false;
    }
    return true;
}
let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) perf.mark(`vue-${type}-${instance.uid}`);
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
}
function isSupported() {
    if (supported !== void 0) return supported;
    if (typeof window !== "undefined" && window.performance) {
        supported = true;
        perf = window.performance;
    } else supported = false;
    return supported;
}
function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== "boolean") {
        needWarn.push(`__VUE_OPTIONS_API__`);
        (0, _shared.getGlobalThis)().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== "boolean") {
        needWarn.push(`__VUE_PROD_DEVTOOLS__`);
        (0, _shared.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ !== "boolean") {
        needWarn.push(`__VUE_PROD_HYDRATION_MISMATCH_DETAILS__`);
        (0, _shared.getGlobalThis)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
    }
    if (0, needWarn.length) {
        const multi = needWarn.length > 1;
        console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
    }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
    return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
    initFeatureFlags();
    const target = (0, _shared.getGlobalThis)();
    target.__VUE__ = true;
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = (0, _shared.NOOP), insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch(type){
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
                else patchStaticNode(n1, n2, container, namespace);
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
        if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    };
    const processText = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) hostSetText(el, n2.children);
        }
    };
    const processCommentNode = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
        else n2.el = n1.el;
    };
    const mountStaticNode = (n2, container, anchor, namespace)=>{
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
    };
    const patchStaticNode = (n1, n2, container, namespace)=>{
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace);
        } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling)=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor })=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        if (n2.type === "svg") namespace = "svg";
        else if (n2.type === "math") namespace = "mathml";
        if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        else patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        let el;
        let vnodeHook;
        const { props, shapeFlag, transition, dirs } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
        if (shapeFlag & 8) hostSetElementText(el, vnode.children);
        else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        if (props) {
            for(const key in props)if (key !== "value" && !(0, _shared.isReservedProp)(key)) hostPatchProp(el, key, null, props[key], namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
            if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        Object.defineProperty(el, "__vnode", {
            value: vnode,
            enumerable: false
        });
        Object.defineProperty(el, "__vueParentComponent", {
            value: parentComponent,
            enumerable: false
        });
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        const needCallTransitionHooks = needTransition(parentSuspense, transition);
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) subTree = filterSingleRoot(subTree.children) || subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        let { patchFlag, dynamicChildren, dirs } = n2;
        patchFlag |= n1.patchFlag & 16;
        const oldProps = n1.props || (0, _shared.EMPTY_OBJ);
        const newProps = n2.props || (0, _shared.EMPTY_OBJ);
        let vnodeHook;
        parentComponent && toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        parentComponent && toggleRecurse(parentComponent, true);
        if (isHmrUpdating) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
            traverseStaticChildren(n1, n2);
        } else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
        if (patchFlag > 0) {
            if (patchFlag & 16) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
            else {
                if (patchFlag & 2) {
                    if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
                }
                if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
                if (patchFlag & 8) {
                    const propsToUpdate = n2.dynamicProps;
                    for(let i = 0; i < propsToUpdate.length; i++){
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            if (patchFlag & 1) {
                if (n1.children !== n2.children) hostSetElementText(el, n2.children);
            }
        } else if (!optimized && dynamicChildren == null) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds)=>{
        for(let i = 0; i < newChildren.length; i++){
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            const container = // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace)=>{
        if (oldProps !== newProps) {
            if (oldProps !== (0, _shared.EMPTY_OBJ)) {
                for(const key in oldProps)if (!(0, _shared.isReservedProp)(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            for(const key in newProps){
                if ((0, _shared.isReservedProp)(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (// #5523 dev root fragment may inherit directives
        isHmrUpdating || patchFlag & 2048) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            mountChildren(// #10007
            // such fragment like `<></>` will be compiled into
            // a fragment which doesn't have a children.
            // In this case fallback to an empty array
            n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
            traverseStaticChildren(n1, n2);
        } else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
            else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
        } else updateComponent(n1, n2, optimized);
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized)=>{
        const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (0, instance.type.__hmrId) registerHMR(instance);
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
        if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        startMeasure(instance, `init`);
        setupComponent(instance);
        endMeasure(instance, `init`);
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            if (!initialVNode.el) {
                const placeholder = instance.subTree = createVNode(Comment);
                processCommentNode(null, placeholder, container, anchor);
            }
        } else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
        popWarningContext();
        endMeasure(instance, `mount`);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                pushWarningContext(n2);
                updateComponentPreRender(instance, n2, optimized);
                popWarningContext();
                return;
            } else {
                instance.next = n2;
                invalidateJob(instance.update);
                instance.effect.dirty = true;
                instance.update();
            }
        } else {
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized)=>{
        const componentUpdateFn = ()=>{
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                if (bm) (0, _shared.invokeArrayFns)(bm);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    const hydrateSubTree = ()=>{
                        startMeasure(instance, `render`);
                        instance.subTree = renderComponentRoot(instance);
                        endMeasure(instance, `render`);
                        startMeasure(instance, `hydrate`);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        endMeasure(instance, `hydrate`);
                    };
                    if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    ()=>!instance.isUnmounted && hydrateSubTree());
                    else hydrateSubTree();
                } else {
                    startMeasure(instance, `render`);
                    const subTree = instance.subTree = renderComponentRoot(instance);
                    endMeasure(instance, `render`);
                    startMeasure(instance, `patch`);
                    patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
                    endMeasure(instance, `patch`);
                    initialVNode.el = subTree.el;
                }
                if (m) queuePostRenderEffect(m, parentSuspense);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                devtoolsComponentAdded(instance);
                initialVNode = container = anchor = null;
            } else {
                let { next, bu, u, parent, vnode } = instance;
                {
                    const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
                    if (nonHydratedAsyncRoot) {
                        if (next) {
                            next.el = vnode.el;
                            updateComponentPreRender(instance, next, optimized);
                        }
                        nonHydratedAsyncRoot.asyncDep.then(()=>{
                            if (!instance.isUnmounted) componentUpdateFn();
                        });
                        return;
                    }
                }
                let originNext = next;
                let vnodeHook;
                pushWarningContext(next || instance.vnode);
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                if (bu) (0, _shared.invokeArrayFns)(bu);
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
                toggleRecurse(instance, true);
                startMeasure(instance, `render`);
                const nextTree = renderComponentRoot(instance);
                endMeasure(instance, `render`);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                startMeasure(instance, `patch`);
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, namespace);
                endMeasure(instance, `patch`);
                next.el = nextTree.el;
                if (originNext === null) updateHOCHostEl(instance, nextTree.el);
                if (u) queuePostRenderEffect(u, parentSuspense);
                if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                devtoolsComponentUpdated(instance);
                popWarningContext();
            }
        };
        const effect = instance.effect = new (0, _reactivity.ReactiveEffect)(componentUpdateFn, (0, _shared.NOOP), ()=>queueJob(update), instance.scope);
        const update = instance.update = ()=>{
            if (effect.dirty) effect.run();
        };
        update.id = instance.uid;
        toggleRecurse(instance, true);
        effect.onTrack = instance.rtc ? (e)=>(0, _shared.invokeArrayFns)(instance.rtc, e) : void 0;
        effect.onTrigger = instance.rtg ? (e)=>(0, _shared.invokeArrayFns)(instance.rtg, e) : void 0;
        update.ownerInstance = instance;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        (0, _reactivity.pauseTracking)();
        flushPreFlushCbs(instance);
        (0, _reactivity.resetTracking)();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false)=>{
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        if (patchFlag > 0) {
            if (patchFlag & 128) {
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
            } else if (patchFlag & 256) {
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
            }
        }
        if (shapeFlag & 8) {
            if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
            if (c2 !== c1) hostSetElementText(container, c2);
        } else if (prevShapeFlag & 16) {
            if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else unmountChildren(c1, parentComponent, parentSuspense, true);
        } else {
            if (prevShapeFlag & 8) hostSetElementText(container, "");
            if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        c1 = c1 || (0, _shared.EMPTY_ARR);
        c2 = c2 || (0, _shared.EMPTY_ARR);
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
        if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1;
        let e2 = l2 - 1;
        while(i <= e1 && i <= e2){
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            i++;
        }
        while(i <= e1 && i <= e2){
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                    i++;
                }
            }
        } else if (i > e2) while(i <= e1){
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
        }
        else {
            const s1 = i;
            const s2 = i;
            const keyToNewIndexMap = /* @__PURE__ */ new Map();
            for(i = s2; i <= e2; i++){
                const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                    if (keyToNewIndexMap.has(nextChild.key)) warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            let maxNewIndexSoFar = 0;
            const newIndexToOldIndexMap = new Array(toBePatched);
            for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
            for(i = s1; i <= e1; i++){
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
                else {
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                }
                if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
                    else moved = true;
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                    patched++;
                }
            }
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : (0, _shared.EMPTY_ARR);
            j = increasingNewIndexSequence.length - 1;
            for(i = toBePatched - 1; i >= 0; i--){
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (moved) {
                    if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
                    else j--;
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null)=>{
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
        if (needTransition2) {
            if (moveType === 0) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(()=>transition.enter(el), parentSuspense);
            } else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove2 = ()=>hostInsert(el, container, anchor);
                const performLeave = ()=>{
                    leave(el, ()=>{
                        remove2();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) delayLeave(el, remove2, performLeave);
                else performLeave();
            }
        } else hostInsert(el, container, anchor);
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false)=>{
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        if (ref != null) setRef(ref, null, parentSuspense, vnode, true);
        if (shapeFlag & 256) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
            (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
    };
    const remove = (vnode)=>{
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) vnode.children.forEach((child)=>{
                if (child.type === Comment) hostRemove(child.el);
                else remove(child);
            });
            else removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = ()=>{
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
        };
        if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = ()=>leave(el, performRemove);
            if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
            else performLeave();
        } else performRemove();
    };
    const removeFragment = (cur, end)=>{
        let next;
        while(cur !== end){
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove)=>{
        if (0, instance.type.__hmrId) unregisterHMR(instance);
        const { bum, scope, update, subTree, um } = instance;
        if (bum) (0, _shared.invokeArrayFns)(bum);
        scope.stop();
        if (update) {
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        if (um) queuePostRenderEffect(um, parentSuspense);
        queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        devtoolsComponentRemoved(instance);
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0)=>{
        for(let i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    };
    const getNextHostNode = (vnode)=>{
        if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
        if (vnode.shapeFlag & 128) return vnode.suspense.next();
        return hostNextSibling(vnode.anchor || vnode.el);
    };
    let isFlushing = false;
    const render = (vnode, container, namespace)=>{
        if (vnode == null) {
            if (container._vnode) unmount(container._vnode, null, null, true);
        } else patch(container._vnode || null, vnode, container, null, null, null, namespace);
        if (!isFlushing) {
            isFlushing = true;
            flushPreFlushCbs();
            flushPostFlushCbs();
            isFlushing = false;
        }
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
function needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if ((0, _shared.isArray)(ch1) && (0, _shared.isArray)(ch2)) for(let i = 0; i < ch1.length; i++){
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow) traverseStaticChildren(c1, c2);
        }
        if (c2.type === Text) c2.el = c1.el;
        if (c2.type === Comment && !c2.el) c2.el = c1.el;
    }
}
function getSequence(arr) {
    const p = arr.slice();
    const result = [
        0
    ];
    let i, j, u, v1, c;
    const len = arr.length;
    for(i = 0; i < len; i++){
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v1 = result.length - 1;
            while(u < v1){
                c = u + v1 >> 1;
                if (arr[result[c]] < arrI) u = c + 1;
                else v1 = c;
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) p[i] = result[u - 1];
                result[u] = i;
            }
        }
    }
    u = result.length;
    v1 = result[u - 1];
    while(u-- > 0){
        result[u] = v1;
        v1 = p[v1];
    }
    return result;
}
function locateNonHydratedAsyncRoot(instance) {
    const subComponent = instance.subTree.component;
    if (subComponent) {
        if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
        else return locateNonHydratedAsyncRoot(subComponent);
    }
}
const isTeleport = (type)=>type.__isTeleport;
const isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === "");
const isTargetSVG = (target)=>typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target)=>typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if ((0, _shared.isString)(targetSelector)) {
        if (!select) {
            warn$1(`Current renderer does not support string target for Teleports. (missing querySelector renderer option)`);
            return null;
        } else {
            const target = select(targetSelector);
            if (!target) warn$1(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
            return target;
        }
    } else {
        if (!targetSelector && !isTeleportDisabled(props)) warn$1(`Invalid Teleport target: ${targetSelector}`);
        return targetSelector;
    }
};
const TeleportImpl = {
    name: "Teleport",
    __isTeleport: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag, children, dynamicChildren } = n2;
        if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
                insert(targetAnchor, target);
                if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
                else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
            } else if (!disabled) warn$1("Invalid Teleport target on mount:", target, `(${typeof target})`);
            const mount = (container2, anchor2)=>{
                if (shapeFlag & 16) mountChildren(children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            };
            if (disabled) mount(container, mainAnchor);
            else if (target) mount(target, targetAnchor);
        } else {
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
            else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
            if (dynamicChildren) {
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
                traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
                else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
            } else {
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                    if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0);
                    else warn$1("Invalid Teleport target on update:", target, `(${typeof target})`);
                } else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
            }
        }
        updateCssVars(n2);
    },
    remove (vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
        if (target) hostRemove(targetAnchor);
        doRemove && hostRemove(anchor);
        if (shapeFlag & 16) {
            const shouldRemove = doRemove || !isTeleportDisabled(props);
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
    if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2;
    if (isReorder) insert(el, container, parentAnchor);
    if (!isReorder || isTeleportDisabled(props)) {
        if (shapeFlag & 16) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2);
    }
    if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            } else {
                vnode.anchor = nextSibling(node);
                let targetAnchor = targetNode;
                while(targetAnchor){
                    targetAnchor = nextSibling(targetAnchor);
                    if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                        vnode.targetAnchor = targetAnchor;
                        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                        break;
                    }
                }
                hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
        }
        updateCssVars(vnode);
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode) {
    const ctx = vnode.ctx;
    if (ctx && ctx.ut) {
        let node = vnode.children[0].el;
        while(node && node !== vnode.targetAnchor){
            if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
            node = node.nextSibling;
        }
        ctx.ut();
    }
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || (0, _shared.EMPTY_ARR) : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
    return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
        n1.shapeFlag &= -257;
        n2.shapeFlag &= -513;
        return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args)=>{
    return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
const normalizeKey = ({ key })=>key != null ? key : null;
const normalizeRef = ({ ref, ref_key, ref_for })=>{
    if (typeof ref === "number") ref = "" + ref;
    return ref != null ? (0, _shared.isString)(ref) || (0, _reactivity.isRef)(ref) || (0, _shared.isFunction)(ref) ? {
        i: currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        if (shapeFlag & 128) type.normalize(vnode);
    } else if (children) vnode.shapeFlag |= (0, _shared.isString)(children) ? 8 : 16;
    if (vnode.key !== vnode.key) warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) currentBlock.push(vnode);
    return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (!type) warn$1(`Invalid vnode type when creating vnode: ${type}.`);
        type = Comment;
    }
    if (isVNode(type)) {
        const cloned = cloneVNode(type, props, true);
        if (children) normalizeChildren(cloned, children);
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
            else currentBlock.push(cloned);
        }
        cloned.patchFlag |= -2;
        return cloned;
    }
    if (isClassComponent(type)) type = type.__vccOpts;
    if (props) {
        props = guardReactiveProps(props);
        let { class: klass, style } = props;
        if (klass && !(0, _shared.isString)(klass)) props.class = (0, _shared.normalizeClass)(klass);
        if ((0, _shared.isObject)(style)) {
            if ((0, _reactivity.isProxy)(style) && !(0, _shared.isArray)(style)) style = (0, _shared.extend)({}, style);
            props.style = (0, _shared.normalizeStyle)(style);
        }
    }
    const shapeFlag = (0, _shared.isString)(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : (0, _shared.isObject)(type) ? 4 : (0, _shared.isFunction)(type) ? 2 : 0;
    if (shapeFlag & 4 && (0, _reactivity.isProxy)(type)) {
        type = (0, _reactivity.toRaw)(type);
        warn$1(`Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props) return null;
    return (0, _reactivity.isProxy)(props) || isInternalObject(props) ? (0, _shared.extend)({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
    const { props, ref, patchFlag, children, transition } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? (0, _shared.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [
            ref,
            normalizeRef(extraProps)
        ] : normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: patchFlag === -1 && (0, _shared.isArray)(children) ? children.map(deepCloneVNode) : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce
    };
    if (transition && cloneTransition) cloned.transition = transition.clone(cloned);
    return cloned;
}
function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if ((0, _shared.isArray)(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
    return cloned;
}
function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") return createVNode(Comment);
    else if ((0, _shared.isArray)(child)) return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (typeof child === "object") return cloneIfMounted(child);
    else return createVNode(Text, null, String(child));
}
function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) children = null;
    else if ((0, _shared.isArray)(children)) type = 16;
    else if (typeof children === "object") {
        if (shapeFlag & 65) {
            const slot = children.default;
            if (slot) {
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32;
            const slotFlag = children._;
            if (!slotFlag && !isInternalObject(children)) children._ctx = currentRenderingInstance;
            else if (slotFlag === 3 && currentRenderingInstance) {
                if (currentRenderingInstance.slots._ === 1) children._ = 1;
                else {
                    children._ = 2;
                    vnode.patchFlag |= 1024;
                }
            }
        }
    } else if ((0, _shared.isFunction)(children)) {
        children = {
            default: children,
            _ctx: currentRenderingInstance
        };
        type = 32;
    } else {
        children = String(children);
        if (shapeFlag & 64) {
            type = 16;
            children = [
                createTextVNode(children)
            ];
        } else type = 8;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === "class") {
                if (ret.class !== toMerge.class) ret.class = (0, _shared.normalizeClass)([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === "style") ret.style = (0, _shared.normalizeStyle)([
                ret.style,
                toMerge.style
            ]);
            else if ((0, _shared.isOn)(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !((0, _shared.isArray)(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== "") ret[key] = toMerge[key];
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
        vnode,
        prevVNode
    ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        // to be immediately set
        next: null,
        subTree: null,
        // will be set synchronously right after creation
        effect: null,
        update: null,
        // will be set synchronously right after creation
        scope: new (0, _reactivity.EffectScope)(true),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        // to be set immediately
        emitted: null,
        // props default value
        propsDefaults: (0, _shared.EMPTY_OBJ),
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: (0, _shared.EMPTY_OBJ),
        data: (0, _shared.EMPTY_OBJ),
        props: (0, _shared.EMPTY_OBJ),
        attrs: (0, _shared.EMPTY_OBJ),
        slots: (0, _shared.EMPTY_OBJ),
        refs: (0, _shared.EMPTY_OBJ),
        setupState: (0, _shared.EMPTY_OBJ),
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    instance.ctx = createDevRenderContext(instance);
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let currentInstance = null;
const getCurrentInstance = ()=>currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
    const g = (0, _shared.getGlobalThis)();
    const registerGlobalSetter = (key, setter)=>{
        let setters;
        if (!(setters = g[key])) setters = g[key] = [];
        setters.push(setter);
        return (v1)=>{
            if (setters.length > 1) setters.forEach((set)=>set(v1));
            else setters[0](v1);
        };
    };
    internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v1)=>currentInstance = v1);
    setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v1)=>isInSSRComponentSetup = v1);
}const setCurrentInstance = (instance)=>{
    const prev = currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return ()=>{
        instance.scope.off();
        internalSetCurrentInstance(prev);
    };
};
const unsetCurrentInstance = ()=>{
    currentInstance && currentInstance.scope.off();
    internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ (0, _shared.makeMap)("slot,component");
function validateComponentName(name, { isNativeTag }) {
    if (isBuiltInTag(name) || isNativeTag(name)) warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isSSR && setInSSRSetupState(isSSR);
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && setInSSRSetupState(false);
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if (Component.name) validateComponentName(Component.name, instance.appContext.config);
    if (Component.components) {
        const names = Object.keys(Component.components);
        for(let i = 0; i < names.length; i++)validateComponentName(names[i], instance.appContext.config);
    }
    if (Component.directives) {
        const names = Object.keys(Component.directives);
        for(let i = 0; i < names.length; i++)validateDirectiveName(names[i]);
    }
    if (Component.compilerOptions && isRuntimeOnly()) warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    exposePropsOnRenderContext(instance);
    const { setup } = Component;
    if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        const reset = setCurrentInstance(instance);
        (0, _reactivity.pauseTracking)();
        const setupResult = callWithErrorHandling(setup, instance, 0, [
            (0, _reactivity.shallowReadonly)(instance.props),
            setupContext
        ]);
        (0, _reactivity.resetTracking)();
        reset();
        if ((0, _shared.isPromise)(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) return setupResult.then((resolvedResult)=>{
                handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                handleError(e, instance, 0);
            });
            else {
                instance.asyncDep = setupResult;
                if (!instance.suspense) {
                    const name = (_a = Component.name) != null ? _a : "Anonymous";
                    warn$1(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
                }
            }
        } else handleSetupResult(instance, setupResult, isSSR);
    } else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
    if ((0, _shared.isFunction)(setupResult)) {
        if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
        else instance.render = setupResult;
    } else if ((0, _shared.isObject)(setupResult)) {
        if (isVNode(setupResult)) warn$1(`setup() should not return VNodes directly - return a render function instead.`);
        instance.devtoolsRawSetupState = setupResult;
        instance.setupState = (0, _reactivity.proxyRefs)(setupResult);
        exposeSetupStateOnRenderContext(instance);
    } else if (setupResult !== void 0) warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
const isRuntimeOnly = ()=>!compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
        if (!isSSR && compile && !Component.render) {
            const template = Component.template || resolveMergedOptions(instance).template;
            if (template) {
                startMeasure(instance, `compile`);
                const { isCustomElement, compilerOptions } = instance.appContext.config;
                const { delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = (0, _shared.extend)((0, _shared.extend)({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                endMeasure(instance, `compile`);
            }
        }
        instance.render = Component.render || (0, _shared.NOOP);
        if (installWithProxy) installWithProxy(instance);
    }
    if (__VUE_OPTIONS_API__ && true) {
        const reset = setCurrentInstance(instance);
        (0, _reactivity.pauseTracking)();
        try {
            applyOptions(instance);
        } finally{
            (0, _reactivity.resetTracking)();
            reset();
        }
    }
    if (!Component.render && instance.render === (0, _shared.NOOP) && !isSSR) {
        if (!compile && Component.template) warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
        else warn$1(`Component is missing template or render function.`);
    }
}
const attrsProxyHandlers = {
    get (target, key) {
        markAttrsAccessed();
        (0, _reactivity.track)(target, "get", "");
        return target[key];
    },
    set () {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
    },
    deleteProperty () {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
    }
};
function getSlotsProxy(instance) {
    return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
        get (target, key) {
            (0, _reactivity.track)(instance, "get", "$slots");
            return target[key];
        }
    }));
}
function createSetupContext(instance) {
    const expose = (exposed)=>{
        if (instance.exposed) warn$1(`expose() should be called only once per setup().`);
        if (exposed != null) {
            let exposedType = typeof exposed;
            if (exposedType === "object") {
                if ((0, _shared.isArray)(exposed)) exposedType = "array";
                else if ((0, _reactivity.isRef)(exposed)) exposedType = "ref";
            }
            if (exposedType !== "object") warn$1(`expose() should be passed a plain object, received ${exposedType}.`);
        }
        instance.exposed = exposed || {};
    };
    {
        let attrsProxy;
        return Object.freeze({
            get attrs () {
                return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
            },
            get slots () {
                return getSlotsProxy(instance);
            },
            get emit () {
                return (event, ...args)=>instance.emit(event, ...args);
            },
            expose
        });
    }
}
function getExposeProxy(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy((0, _reactivity.proxyRefs)((0, _reactivity.markRaw)(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
        },
        has (target, key) {
            return key in target || key in publicPropertiesMap;
        }
    }));
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str)=>str.replace(classifyRE, (c)=>c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
    return (0, _shared.isFunction)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) name = match[1];
    }
    if (!name && instance && instance.parent) {
        const inferFromRegistry = (registry)=>{
            for(const key in registry){
                if (registry[key] === Component) return key;
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return (0, _shared.isFunction)(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions)=>{
    const c = (0, _reactivity.computed)(getterOrOptions, debugOptions, isInSSRComponentSetup);
    {
        const i = getCurrentInstance();
        if (i && i.appContext.config.warnRecursiveComputed) c._warnRecursive = true;
    }
    return c;
};
function useModel(props, name, options = (0, _shared.EMPTY_OBJ)) {
    const i = getCurrentInstance();
    if (!i) {
        warn$1(`useModel() called without active instance.`);
        return (0, _reactivity.ref)();
    }
    if (!i.propsOptions[0][name]) {
        warn$1(`useModel() called with prop "${name}" which is not declared.`);
        return (0, _reactivity.ref)();
    }
    const camelizedName = (0, _shared.camelize)(name);
    const hyphenatedName = (0, _shared.hyphenate)(name);
    const res = (0, _reactivity.customRef)((track, trigger)=>{
        let localValue;
        watchSyncEffect(()=>{
            const propValue = props[name];
            if ((0, _shared.hasChanged)(localValue, propValue)) {
                localValue = propValue;
                trigger();
            }
        });
        return {
            get () {
                track();
                return options.get ? options.get(localValue) : localValue;
            },
            set (value) {
                const rawProps = i.vnode.props;
                if (!(rawProps && // check if parent has passed v-model
                (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps)) && (0, _shared.hasChanged)(value, localValue)) {
                    localValue = value;
                    trigger();
                }
                i.emit(`update:${name}`, options.set ? options.set(value) : value);
            }
        };
    });
    const modifierKey = name === "modelValue" ? "modelModifiers" : `${name}Modifiers`;
    res[Symbol.iterator] = ()=>{
        let i2 = 0;
        return {
            next () {
                if (i2 < 2) return {
                    value: i2++ ? props[modifierKey] || {} : res,
                    done: false
                };
                else return {
                    done: true
                };
            }
        };
    };
    return res;
}
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if ((0, _shared.isObject)(propsOrChildren) && !(0, _shared.isArray)(propsOrChildren)) {
            if (isVNode(propsOrChildren)) return createVNode(type, null, [
                propsOrChildren
            ]);
            return createVNode(type, propsOrChildren);
        } else return createVNode(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && isVNode(children)) children = [
            children
        ];
        return createVNode(type, propsOrChildren, children);
    }
}
function initCustomFormatter() {
    if (typeof window === "undefined") return;
    const vueStyle = {
        style: "color:#3ba776"
    };
    const numberStyle = {
        style: "color:#1677ff"
    };
    const stringStyle = {
        style: "color:#f5222d"
    };
    const keywordStyle = {
        style: "color:#eb2f96"
    };
    const formatter = {
        header (obj) {
            if (!(0, _shared.isObject)(obj)) return null;
            if (obj.__isVue) return [
                "div",
                vueStyle,
                `VueInstance`
            ];
            else if ((0, _reactivity.isRef)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    genRefFlag(obj)
                ],
                "<",
                formatValue(obj.value),
                `>`
            ];
            else if ((0, _reactivity.isReactive)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    (0, _reactivity.isShallow)(obj) ? "ShallowReactive" : "Reactive"
                ],
                "<",
                formatValue(obj),
                `>${(0, _reactivity.isReadonly)(obj) ? ` (readonly)` : ``}`
            ];
            else if ((0, _reactivity.isReadonly)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    (0, _reactivity.isShallow)(obj) ? "ShallowReadonly" : "Readonly"
                ],
                "<",
                formatValue(obj),
                ">"
            ];
            return null;
        },
        hasBody (obj) {
            return obj && obj.__isVue;
        },
        body (obj) {
            if (obj && obj.__isVue) return [
                "div",
                {},
                ...formatInstance(obj.$)
            ];
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock("props", (0, _reactivity.toRaw)(instance.props)));
        if (instance.setupState !== (0, _shared.EMPTY_OBJ)) blocks.push(createInstanceBlock("setup", instance.setupState));
        if (instance.data !== (0, _shared.EMPTY_OBJ)) blocks.push(createInstanceBlock("data", (0, _reactivity.toRaw)(instance.data)));
        const computed = extractKeys(instance, "computed");
        if (computed) blocks.push(createInstanceBlock("computed", computed));
        const injected = extractKeys(instance, "inject");
        if (injected) blocks.push(createInstanceBlock("injected", injected));
        blocks.push([
            "div",
            {},
            [
                "span",
                {
                    style: keywordStyle.style + ";opacity:0.66"
                },
                "$ (internal): "
            ],
            [
                "object",
                {
                    object: instance
                }
            ]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = (0, _shared.extend)({}, target);
        if (!Object.keys(target).length) return [
            "span",
            {}
        ];
        return [
            "div",
            {
                style: "line-height:1.25em;margin-bottom:0.6em"
            },
            [
                "div",
                {
                    style: "color:#476582"
                },
                type
            ],
            [
                "div",
                {
                    style: "padding-left:1.25em"
                },
                ...Object.keys(target).map((key)=>{
                    return [
                        "div",
                        {},
                        [
                            "span",
                            keywordStyle,
                            key + ": "
                        ],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v1, asRaw = true) {
        if (typeof v1 === "number") return [
            "span",
            numberStyle,
            v1
        ];
        else if (typeof v1 === "string") return [
            "span",
            stringStyle,
            JSON.stringify(v1)
        ];
        else if (typeof v1 === "boolean") return [
            "span",
            keywordStyle,
            v1
        ];
        else if ((0, _shared.isObject)(v1)) return [
            "object",
            {
                object: asRaw ? (0, _reactivity.toRaw)(v1) : v1
            }
        ];
        else return [
            "span",
            stringStyle,
            String(v1)
        ];
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if ((0, _shared.isFunction)(Comp)) return;
        const extracted = {};
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((0, _shared.isArray)(opts) && opts.includes(key) || (0, _shared.isObject)(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type))) return true;
    }
    function genRefFlag(v1) {
        if ((0, _reactivity.isShallow)(v1)) return `ShallowRef`;
        if (v1.effect) return `ComputedRef`;
        return `Ref`;
    }
    if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
    else window.devtoolsFormatters = [
        formatter
    ];
}
function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) return cached;
    const ret = render();
    ret.memo = memo.slice();
    return cache[index] = ret;
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if ((0, _shared.hasChanged)(prev[i], memo[i])) return false;
    }
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
    return true;
}
const version = "3.4.27";
const warn = warn$1;
const ErrorTypeStrings = ErrorTypeStrings$1;
const devtools = devtools$1;
const setDevtoolsHook = setDevtoolsHook$1;
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode: isVNode,
    normalizeVNode
};
const ssrUtils = _ssrUtils;
const resolveFilter = null;
const compatUtils = null;
const DeprecationTypes = null;

},{"@vue/reactivity":"d7UXQ","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7UXQ":[function(require,module,exports) {
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>EffectScope);
parcelHelpers.export(exports, "ITERATE_KEY", ()=>ITERATE_KEY);
parcelHelpers.export(exports, "ReactiveEffect", ()=>ReactiveEffect);
parcelHelpers.export(exports, "ReactiveFlags", ()=>ReactiveFlags);
parcelHelpers.export(exports, "TrackOpTypes", ()=>TrackOpTypes);
parcelHelpers.export(exports, "TriggerOpTypes", ()=>TriggerOpTypes);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "customRef", ()=>customRef);
parcelHelpers.export(exports, "deferredComputed", ()=>deferredComputed);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "effectScope", ()=>effectScope);
parcelHelpers.export(exports, "enableTracking", ()=>enableTracking);
parcelHelpers.export(exports, "getCurrentScope", ()=>getCurrentScope);
parcelHelpers.export(exports, "isProxy", ()=>isProxy);
parcelHelpers.export(exports, "isReactive", ()=>isReactive);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly);
parcelHelpers.export(exports, "isRef", ()=>isRef);
parcelHelpers.export(exports, "isShallow", ()=>isShallow);
parcelHelpers.export(exports, "markRaw", ()=>markRaw);
parcelHelpers.export(exports, "onScopeDispose", ()=>onScopeDispose);
parcelHelpers.export(exports, "pauseScheduling", ()=>pauseScheduling);
parcelHelpers.export(exports, "pauseTracking", ()=>pauseTracking);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs);
parcelHelpers.export(exports, "reactive", ()=>reactive);
parcelHelpers.export(exports, "readonly", ()=>readonly);
parcelHelpers.export(exports, "ref", ()=>ref);
parcelHelpers.export(exports, "resetScheduling", ()=>resetScheduling);
parcelHelpers.export(exports, "resetTracking", ()=>resetTracking);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "toRaw", ()=>toRaw);
parcelHelpers.export(exports, "toRef", ()=>toRef);
parcelHelpers.export(exports, "toRefs", ()=>toRefs);
parcelHelpers.export(exports, "toValue", ()=>toValue);
parcelHelpers.export(exports, "track", ()=>track);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef);
parcelHelpers.export(exports, "unref", ()=>unref);
var _shared = require("@vue/shared");
function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
    constructor(detached = false){
        this.detached = detached;
        /**
     * @internal
     */ this._active = true;
        /**
     * @internal
     */ this.effects = [];
        /**
     * @internal
     */ this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
    get active() {
        return this._active;
    }
    run(fn) {
        if (this._active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            } finally{
                activeEffectScope = currentEffectScope;
            }
        } else warn(`cannot run an inactive effect scope.`);
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ on() {
        activeEffectScope = this;
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this._active) {
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
            if (!this.detached && this.parent && !fromParent) {
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = void 0;
            this._active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) scope.effects.push(effect);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else warn(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
}
let activeEffect;
class ReactiveEffect {
    constructor(fn, trigger, scheduler, scope){
        this.fn = fn;
        this.trigger = trigger;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        /**
     * @internal
     */ this._dirtyLevel = 4;
        /**
     * @internal
     */ this._trackId = 0;
        /**
     * @internal
     */ this._runnings = 0;
        /**
     * @internal
     */ this._shouldSchedule = false;
        /**
     * @internal
     */ this._depsLength = 0;
        recordEffectScope(this, scope);
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1;
            pauseTracking();
            for(let i = 0; i < this._depsLength; i++){
                const dep = this.deps[i];
                if (dep.computed) {
                    triggerComputed(dep.computed);
                    if (this._dirtyLevel >= 4) break;
                }
            }
            if (this._dirtyLevel === 1) this._dirtyLevel = 0;
            resetTracking();
        }
        return this._dirtyLevel >= 4;
    }
    set dirty(v) {
        this._dirtyLevel = v ? 4 : 0;
    }
    run() {
        this._dirtyLevel = 0;
        if (!this.active) return this.fn();
        let lastShouldTrack = shouldTrack;
        let lastEffect = activeEffect;
        try {
            shouldTrack = true;
            activeEffect = this;
            this._runnings++;
            preCleanupEffect(this);
            return this.fn();
        } finally{
            postCleanupEffect(this);
            this._runnings--;
            activeEffect = lastEffect;
            shouldTrack = lastShouldTrack;
        }
    }
    stop() {
        if (this.active) {
            preCleanupEffect(this);
            postCleanupEffect(this);
            this.onStop && this.onStop();
            this.active = false;
        }
    }
}
function triggerComputed(computed) {
    return computed.value;
}
function preCleanupEffect(effect2) {
    effect2._trackId++;
    effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
    if (effect2.deps.length > effect2._depsLength) {
        for(let i = effect2._depsLength; i < effect2.deps.length; i++)cleanupDepEffect(effect2.deps[i], effect2);
        effect2.deps.length = effect2._depsLength;
    }
}
function cleanupDepEffect(dep, effect2) {
    const trackId = dep.get(effect2);
    if (trackId !== void 0 && effect2._trackId !== trackId) {
        dep.delete(effect2);
        if (dep.size === 0) dep.cleanup();
    }
}
function effect(fn, options) {
    if (fn.effect instanceof ReactiveEffect) fn = fn.effect.fn;
    const _effect = new ReactiveEffect(fn, (0, _shared.NOOP), ()=>{
        if (_effect.dirty) _effect.run();
    });
    if (options) {
        (0, _shared.extend)(_effect, options);
        if (options.scope) recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) _effect.run();
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
    pauseScheduleStack++;
}
function resetScheduling() {
    pauseScheduleStack--;
    while(!pauseScheduleStack && queueEffectSchedulers.length)queueEffectSchedulers.shift()();
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
    var _a;
    if (dep.get(effect2) !== effect2._trackId) {
        dep.set(effect2, effect2._trackId);
        const oldDep = effect2.deps[effect2._depsLength];
        if (oldDep !== dep) {
            if (oldDep) cleanupDepEffect(oldDep, effect2);
            effect2.deps[effect2._depsLength++] = dep;
        } else effect2._depsLength++;
        (_a = effect2.onTrack) == null || _a.call(effect2, (0, _shared.extend)({
            effect: effect2
        }, debuggerEventExtraInfo));
    }
}
const queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
    var _a;
    pauseScheduling();
    for (const effect2 of dep.keys()){
        let tracking;
        if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
            effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
            effect2._dirtyLevel = dirtyLevel;
        }
        if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
            (_a = effect2.onTrigger) == null || _a.call(effect2, (0, _shared.extend)({
                effect: effect2
            }, debuggerEventExtraInfo));
            effect2.trigger();
            if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
                effect2._shouldSchedule = false;
                if (effect2.scheduler) queueEffectSchedulers.push(effect2.scheduler);
            }
        }
    }
    resetScheduling();
}
const createDep = (cleanup, computed)=>{
    const dep = /* @__PURE__ */ new Map();
    dep.cleanup = cleanup;
    dep.computed = computed;
    return dep;
};
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        let dep = depsMap.get(key);
        if (!dep) depsMap.set(key, dep = createDep(()=>depsMap.delete(key)));
        trackEffect(activeEffect, dep, {
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    let deps = [];
    if (type === "clear") deps = [
        ...depsMap.values()
    ];
    else if (key === "length" && (0, _shared.isArray)(target)) {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key2)=>{
            if (key2 === "length" || !(0, _shared.isSymbol)(key2) && key2 >= newLength) deps.push(dep);
        });
    } else {
        if (key !== void 0) deps.push(depsMap.get(key));
        switch(type){
            case "add":
                if (!(0, _shared.isArray)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if ((0, _shared.isMap)(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if ((0, _shared.isIntegerKey)(key)) deps.push(depsMap.get("length"));
                break;
            case "delete":
                if (!(0, _shared.isArray)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if ((0, _shared.isMap)(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if ((0, _shared.isMap)(target)) deps.push(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    pauseScheduling();
    for (const dep of deps)if (dep) triggerEffects(dep, 4, {
        target,
        type,
        key,
        newValue,
        oldValue,
        oldTarget
    });
    resetScheduling();
}
function getDepFromReactive(object, key) {
    const depsMap = targetMap.get(object);
    return depsMap && depsMap.get(key);
}
const isNonTrackableKeys = /* @__PURE__ */ (0, _shared.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter((0, _shared.isSymbol)));
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get", i + "");
            const res = arr[key](...args);
            if (res === -1 || res === false) return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            pauseScheduling();
            const res = toRaw(this)[key].apply(this, args);
            resetScheduling();
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function hasOwnProperty(key) {
    if (!(0, _shared.isSymbol)(key)) key = String(key);
    const obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
    constructor(_isReadonly = false, _isShallow = false){
        this._isReadonly = _isReadonly;
        this._isShallow = _isShallow;
    }
    get(target, key, receiver) {
        const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
        if (key === "__v_isReactive") return !isReadonly2;
        else if (key === "__v_isReadonly") return isReadonly2;
        else if (key === "__v_isShallow") return isShallow2;
        else if (key === "__v_raw") {
            if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
            // this means the reciever is a user proxy of the reactive proxy
            Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
            return;
        }
        const targetIsArray = (0, _shared.isArray)(target);
        if (!isReadonly2) {
            if (targetIsArray && (0, _shared.hasOwn)(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
            if (key === "hasOwnProperty") return hasOwnProperty;
        }
        const res = Reflect.get(target, key, receiver);
        if ((0, _shared.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly2) track(target, "get", key);
        if (isShallow2) return res;
        if (isRef(res)) return targetIsArray && (0, _shared.isIntegerKey)(key) ? res : res.value;
        if ((0, _shared.isObject)(res)) return isReadonly2 ? readonly(res) : reactive(res);
        return res;
    }
}
class MutableReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(false, isShallow2);
    }
    set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._isShallow) {
            const isOldValueReadonly = isReadonly(oldValue);
            if (!isShallow(value) && !isReadonly(value)) {
                oldValue = toRaw(oldValue);
                value = toRaw(value);
            }
            if (!(0, _shared.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                if (isOldValueReadonly) return false;
                else {
                    oldValue.value = value;
                    return true;
                }
            }
        }
        const hadKey = (0, _shared.isArray)(target) && (0, _shared.isIntegerKey)(key) ? Number(key) < target.length : (0, _shared.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    }
    deleteProperty(target, key) {
        const hadKey = (0, _shared.hasOwn)(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
        return result;
    }
    has(target, key) {
        const result = Reflect.has(target, key);
        if (!(0, _shared.isSymbol)(key) || !builtInSymbols.has(key)) track(target, "has", key);
        return result;
    }
    ownKeys(target) {
        track(target, "iterate", (0, _shared.isArray)(target) ? "length" : ITERATE_KEY);
        return Reflect.ownKeys(target);
    }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(true, isShallow2);
    }
    set(target, key) {
        warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
    deleteProperty(target, key) {
        warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value)=>value;
const getProto = (v)=>Reflect.getPrototypeOf(v);
function get(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if ((0, _shared.hasChanged)(key, rawKey)) track(rawTarget, "get", key);
        track(rawTarget, "get", rawKey);
    }
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function has(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if ((0, _shared.hasChanged)(key, rawKey)) track(rawTarget, "has", key);
        track(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
    }
    return this;
}
function set(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add", key, value);
    else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set", key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = (0, _shared.isMap)(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = (0, _shared.isMap)(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            warn(`${(0, _shared.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations2 = {
        get (key) {
            return get(this, key);
        },
        get size () {
            return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
        get (key) {
            return get(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
        get (key) {
            return get(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
        get (key) {
            return get(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get((0, _shared.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = (0, _shared.toRawType)(target);
        warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1 /* COMMON */ ;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap((0, _shared.toRawType)(value));
}
function reactive(target) {
    if (isReadonly(target)) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0, _shared.isObject)(target)) {
        warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw"]);
    return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    if (Object.isExtensible(value)) (0, _shared.def)(value, "__v_skip", true);
    return value;
}
const toReactive = (value)=>(0, _shared.isObject)(value) ? reactive(value) : value;
const toReadonly = (value)=>(0, _shared.isObject)(value) ? readonly(value) : value;
const COMPUTED_SIDE_EFFECT_WARN = `Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free`;
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR){
        this.getter = getter;
        this._setter = _setter;
        this.dep = void 0;
        this.__v_isRef = true;
        this["__v_isReadonly"] = false;
        this.effect = new ReactiveEffect(()=>getter(this._value), ()=>triggerRefValue(this, this.effect._dirtyLevel === 2 ? 2 : 3));
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly"] = isReadonly;
    }
    get value() {
        const self = toRaw(this);
        if ((!self._cacheable || self.effect.dirty) && (0, _shared.hasChanged)(self._value, self._value = self.effect.run())) triggerRefValue(self, 4);
        trackRefValue(self);
        if (self.effect._dirtyLevel >= 2) {
            if (0, this._warnRecursive) warn(COMPUTED_SIDE_EFFECT_WARN, `

getter: `, this.getter);
            triggerRefValue(self, 2);
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
    // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
    get _dirty() {
        return this.effect.dirty;
    }
    set _dirty(v) {
        this.effect.dirty = v;
    }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = (0, _shared.isFunction)(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ()=>{
            warn("Write operation failed: computed value is readonly");
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
function trackRefValue(ref2) {
    var _a;
    if (shouldTrack && activeEffect) {
        ref2 = toRaw(ref2);
        trackEffect(activeEffect, (_a = ref2.dep) != null ? _a : ref2.dep = createDep(()=>ref2.dep = void 0, ref2 instanceof ComputedRefImpl ? ref2 : void 0), {
            target: ref2,
            type: "get",
            key: "value"
        });
    }
}
function triggerRefValue(ref2, dirtyLevel = 4, newVal) {
    ref2 = toRaw(ref2);
    const dep = ref2.dep;
    if (dep) triggerEffects(dep, dirtyLevel, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
    });
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow){
        this.__v_isShallow = __v_isShallow;
        this.dep = void 0;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
        newVal = useDirectValue ? newVal : toRaw(newVal);
        if ((0, _shared.hasChanged)(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : toReactive(newVal);
            triggerRefValue(this, 4, newVal);
        }
    }
}
function triggerRef(ref2) {
    triggerRefValue(ref2, 4, (0, ref2.value));
}
function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
    return (0, _shared.isFunction)(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this.dep = void 0;
        this.__v_isRef = true;
        const { get, set } = factory(()=>trackRefValue(this), ()=>triggerRefValue(this));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (!isProxy(object)) warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = (0, _shared.isArray)(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = propertyToRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === void 0 ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
    get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
    }
}
class GetterRefImpl {
    constructor(_getter){
        this._getter = _getter;
        this.__v_isRef = true;
        this.__v_isReadonly = true;
    }
    get value() {
        return this._getter();
    }
}
function toRef(source, key, defaultValue) {
    if (isRef(source)) return source;
    else if ((0, _shared.isFunction)(source)) return new GetterRefImpl(source);
    else if ((0, _shared.isObject)(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue);
    else return ref(source);
}
function propertyToRef(source, key, defaultValue) {
    const val = source[key];
    return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
const deferredComputed = computed;
const TrackOpTypes = {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
};
const TriggerOpTypes = {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
};
const ReactiveFlags = {
    "SKIP": "__v_skip",
    "IS_REACTIVE": "__v_isReactive",
    "IS_READONLY": "__v_isReadonly",
    "IS_SHALLOW": "__v_isShallow",
    "RAW": "__v_raw"
};

},{"@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SM3y":[function(require,module,exports) {
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ /*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_ARR", ()=>EMPTY_ARR);
parcelHelpers.export(exports, "EMPTY_OBJ", ()=>EMPTY_OBJ);
parcelHelpers.export(exports, "NO", ()=>NO);
parcelHelpers.export(exports, "NOOP", ()=>NOOP);
parcelHelpers.export(exports, "PatchFlagNames", ()=>PatchFlagNames);
parcelHelpers.export(exports, "PatchFlags", ()=>PatchFlags);
parcelHelpers.export(exports, "ShapeFlags", ()=>ShapeFlags);
parcelHelpers.export(exports, "SlotFlags", ()=>SlotFlags);
parcelHelpers.export(exports, "camelize", ()=>camelize);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
parcelHelpers.export(exports, "def", ()=>def);
parcelHelpers.export(exports, "escapeHtml", ()=>escapeHtml);
parcelHelpers.export(exports, "escapeHtmlComment", ()=>escapeHtmlComment);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "genPropsAccessExp", ()=>genPropsAccessExp);
parcelHelpers.export(exports, "generateCodeFrame", ()=>generateCodeFrame);
parcelHelpers.export(exports, "getGlobalThis", ()=>getGlobalThis);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate);
parcelHelpers.export(exports, "includeBooleanAttr", ()=>includeBooleanAttr);
parcelHelpers.export(exports, "invokeArrayFns", ()=>invokeArrayFns);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isBooleanAttr", ()=>isBooleanAttr);
parcelHelpers.export(exports, "isBuiltInDirective", ()=>isBuiltInDirective);
parcelHelpers.export(exports, "isDate", ()=>isDate);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isGloballyAllowed", ()=>isGloballyAllowed);
parcelHelpers.export(exports, "isGloballyWhitelisted", ()=>isGloballyWhitelisted);
parcelHelpers.export(exports, "isHTMLTag", ()=>isHTMLTag);
parcelHelpers.export(exports, "isIntegerKey", ()=>isIntegerKey);
parcelHelpers.export(exports, "isKnownHtmlAttr", ()=>isKnownHtmlAttr);
parcelHelpers.export(exports, "isKnownSvgAttr", ()=>isKnownSvgAttr);
parcelHelpers.export(exports, "isMap", ()=>isMap);
parcelHelpers.export(exports, "isMathMLTag", ()=>isMathMLTag);
parcelHelpers.export(exports, "isModelListener", ()=>isModelListener);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isOn", ()=>isOn);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
parcelHelpers.export(exports, "isRegExp", ()=>isRegExp);
parcelHelpers.export(exports, "isRenderableAttrValue", ()=>isRenderableAttrValue);
parcelHelpers.export(exports, "isReservedProp", ()=>isReservedProp);
parcelHelpers.export(exports, "isSSRSafeAttrName", ()=>isSSRSafeAttrName);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
parcelHelpers.export(exports, "isSet", ()=>isSet);
parcelHelpers.export(exports, "isSpecialBooleanAttr", ()=>isSpecialBooleanAttr);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol);
parcelHelpers.export(exports, "isVoidTag", ()=>isVoidTag);
parcelHelpers.export(exports, "looseEqual", ()=>looseEqual);
parcelHelpers.export(exports, "looseIndexOf", ()=>looseIndexOf);
parcelHelpers.export(exports, "looseToNumber", ()=>looseToNumber);
parcelHelpers.export(exports, "makeMap", ()=>makeMap);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass);
parcelHelpers.export(exports, "normalizeProps", ()=>normalizeProps);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle);
parcelHelpers.export(exports, "objectToString", ()=>objectToString);
parcelHelpers.export(exports, "parseStringStyle", ()=>parseStringStyle);
parcelHelpers.export(exports, "propsToAttrMap", ()=>propsToAttrMap);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "slotFlagsText", ()=>slotFlagsText);
parcelHelpers.export(exports, "stringifyStyle", ()=>stringifyStyle);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toRawType", ()=>toRawType);
parcelHelpers.export(exports, "toTypeString", ()=>toTypeString);
var global = arguments[3];
function makeMap(str, expectsLowerCase) {
    const set = new Set(str.split(","));
    return expectsLowerCase ? (val)=>set.has(val.toLowerCase()) : (val)=>set.has(val);
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{};
const NO = ()=>false;
const isOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key)=>key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === "[object Map]";
const isSet = (val)=>toTypeString(val) === "[object Set]";
const isDate = (val)=>toTypeString(val) === "[object Date]";
const isRegExp = (val)=>toTypeString(val) === "[object RegExp]";
const isFunction = (val)=>typeof val === "function";
const isString = (val)=>typeof val === "string";
const isSymbol = (val)=>typeof val === "symbol";
const isObject = (val)=>val !== null && typeof val === "object";
const isPromise = (val)=>{
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value);
const toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === "[object Object]";
const isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str)=>{
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
});
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue);
const invokeArrayFns = (fns, arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](arg);
};
const def = (obj, key, value, writable = false)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        writable,
        value
    });
};
const looseToNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
const toNumber = (val)=>{
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
const PatchFlags = {
    "TEXT": 1,
    "1": "TEXT",
    "CLASS": 2,
    "2": "CLASS",
    "STYLE": 4,
    "4": "STYLE",
    "PROPS": 8,
    "8": "PROPS",
    "FULL_PROPS": 16,
    "16": "FULL_PROPS",
    "NEED_HYDRATION": 32,
    "32": "NEED_HYDRATION",
    "STABLE_FRAGMENT": 64,
    "64": "STABLE_FRAGMENT",
    "KEYED_FRAGMENT": 128,
    "128": "KEYED_FRAGMENT",
    "UNKEYED_FRAGMENT": 256,
    "256": "UNKEYED_FRAGMENT",
    "NEED_PATCH": 512,
    "512": "NEED_PATCH",
    "DYNAMIC_SLOTS": 1024,
    "1024": "DYNAMIC_SLOTS",
    "DEV_ROOT_FRAGMENT": 2048,
    "2048": "DEV_ROOT_FRAGMENT",
    "HOISTED": -1,
    "-1": "HOISTED",
    "BAIL": -2,
    "-2": "BAIL"
};
const PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
};
const ShapeFlags = {
    "ELEMENT": 1,
    "1": "ELEMENT",
    "FUNCTIONAL_COMPONENT": 2,
    "2": "FUNCTIONAL_COMPONENT",
    "STATEFUL_COMPONENT": 4,
    "4": "STATEFUL_COMPONENT",
    "TEXT_CHILDREN": 8,
    "8": "TEXT_CHILDREN",
    "ARRAY_CHILDREN": 16,
    "16": "ARRAY_CHILDREN",
    "SLOTS_CHILDREN": 32,
    "32": "SLOTS_CHILDREN",
    "TELEPORT": 64,
    "64": "TELEPORT",
    "SUSPENSE": 128,
    "128": "SUSPENSE",
    "COMPONENT_SHOULD_KEEP_ALIVE": 256,
    "256": "COMPONENT_SHOULD_KEEP_ALIVE",
    "COMPONENT_KEPT_ALIVE": 512,
    "512": "COMPONENT_KEPT_ALIVE",
    "COMPONENT": 6,
    "6": "COMPONENT"
};
const SlotFlags = {
    "STABLE": 1,
    "1": "STABLE",
    "DYNAMIC": 2,
    "2": "DYNAMIC",
    "FORWARDED": 3,
    "3": "FORWARDED"
};
const slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = isGloballyAllowed;
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + "^".repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isString(value) || isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = "";
    if (!styles || isString(styles)) return ret;
    for(const key in styles){
        const value = styles[key];
        if (isString(value) || typeof value === "number") {
            const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = "";
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) props.class = normalizeClass(klass);
    if (style) props.style = normalizeStyle(style);
    return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
    return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) return attrValidationCache[name];
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function isRenderableAttrValue(value) {
    if (value == null) return false;
    const type = typeof value;
    return type === "string" || type === "number" || type === "boolean";
}
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) return str;
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = "&quot;";
                break;
            case 38:
                escaped = "&amp;";
                break;
            case 39:
                escaped = "&#39;";
                break;
            case 60:
                escaped = "&lt;";
                break;
            case 62:
                escaped = "&gt;";
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.slice(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) return a === b;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val));
}
const toDisplayString = (val)=>{
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val)=>{
    if (val && val.__v_isRef) return replacer(_key, val.value);
    else if (isMap(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val2], i)=>{
            entries[stringifySymbol(key, i) + " =>"] = val2;
            return entries;
        }, {})
    };
    else if (isSet(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ].map((v)=>stringifySymbol(v))
    };
    else if (isSymbol(val)) return stringifySymbol(val);
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
    return val;
};
const stringifySymbol = (v, i = "")=>{
    var _a;
    return(// Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9IQgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("25201c8a45fd2895");
    if (script.__esModule) script = script.default;
    script.render = require("d76bdad551e36d0b").render;
    require("741d7b2f117c0595").default(script);
    script.__scopeId = "data-v-8afb75";
    script.__file = "/home/chris/git/basketball-stats-app/src/components/App.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "8afb75-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("8afb75-hmr", script)) __VUE_HMR_RUNTIME__.reload("8afb75-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"25201c8a45fd2895":"li5Lh","d76bdad551e36d0b":"apNzD","741d7b2f117c0595":"4oFCP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"li5Lh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const storageKey = "counters";
exports.default = {
    mounted () {
        const counters = localStorage.getItem(storageKey);
        if (counters) this.counters = JSON.parse(counters);
        else this.clear();
    },
    data () {
        return {
            counters: []
        };
    },
    methods: {
        increment (counter) {
            counter.value++;
            this.save();
        },
        decrement (counter) {
            if (counter.value) counter.value--;
            this.save();
        },
        total (counters) {
            var total = 0;
            for (const c of counters)total += c.value;
            return total;
        },
        save () {
            localStorage.setItem(storageKey, JSON.stringify(this.counters));
        },
        clear () {
            localStorage.removeItem(storageKey);
            this.counters = [
                {
                    "label": "Screens",
                    value: 0
                },
                {
                    "label": "Rebounds",
                    value: 0
                },
                {
                    "label": "Outlet Pass",
                    value: 0
                },
                {
                    "label": "Steals",
                    value: 0
                },
                {
                    "label": "Block(no foul)",
                    value: 0
                },
                {
                    "label": "Shot Attempt\n(In the paint)",
                    value: 0
                }
            ];
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apNzD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "container"
};
const _hoisted_2 = {
    class: "row d-flex align-items-center py-2 px-2"
};
const _hoisted_3 = {
    class: "col-5"
};
const _hoisted_4 = {
    class: "col-2"
};
const _hoisted_5 = [
    "onClick"
];
const _hoisted_6 = {
    class: "col-2"
};
const _hoisted_7 = [
    "onClick"
];
const _hoisted_8 = {
    class: "col d-flex justify-content-end"
};
const _hoisted_9 = {
    class: "row d-flex align-items-center py-2 px-2"
};
const _hoisted_10 = /*#__PURE__*/ (0, _vue.createElementVNode)("div", {
    class: "col-5"
}, " Total ", -1 /* HOISTED */ );
const _hoisted_11 = /*#__PURE__*/ (0, _vue.createElementVNode)("div", {
    class: "col-2"
}, null, -1 /* HOISTED */ );
const _hoisted_12 = /*#__PURE__*/ (0, _vue.createElementVNode)("div", {
    class: "col-2"
}, null, -1 /* HOISTED */ );
const _hoisted_13 = {
    class: "col d-flex justify-content-end"
};
const _hoisted_14 = /*#__PURE__*/ (0, _vue.createElementVNode)("div", {
    class: "row d-flex align-items-center py-2 px-2"
}, [
    /*#__PURE__*/ (0, _vue.createElementVNode)("div", {
        class: "col d-flex justify-content-end"
    }, [
        /*#__PURE__*/ (0, _vue.createElementVNode)("button", {
            class: "btn btn-secondary mx-2",
            "data-bs-target": "#confirmClearModal",
            "data-bs-toggle": "modal"
        }, "Clear")
    ])
], -1 /* HOISTED */ );
const _hoisted_15 = {
    class: "modal fade",
    id: "confirmClearModal",
    "aria-hidden": "true",
    "aria-labelledby": "confirmClearModalLabel",
    tabindex: "-1"
};
const _hoisted_16 = {
    class: "modal-dialog modal-dialog-centered"
};
const _hoisted_17 = {
    class: "modal-content"
};
const _hoisted_18 = /*#__PURE__*/ (0, _vue.createElementVNode)("div", {
    class: "modal-header"
}, [
    /*#__PURE__*/ (0, _vue.createElementVNode)("h1", {
        class: "modal-title fs-5",
        id: "confirmClearModalLabel"
    }, "Confirm"),
    /*#__PURE__*/ (0, _vue.createElementVNode)("button", {
        type: "button",
        class: "btn-close",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    })
], -1 /* HOISTED */ );
const _hoisted_19 = /*#__PURE__*/ (0, _vue.createElementVNode)("div", {
    class: "modal-body"
}, " This will reset all counters? ", -1 /* HOISTED */ );
const _hoisted_20 = {
    class: "modal-footer"
};
const _hoisted_21 = /*#__PURE__*/ (0, _vue.createElementVNode)("button", {
    class: "btn btn-primary",
    "data-bs-target": "#confirmClearModal",
    "data-bs-toggle": "modal"
}, "Cancel", -1 /* HOISTED */ );
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        ((0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($data.counters, (c)=>{
            return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_2, [
                (0, _vue.createElementVNode)("div", _hoisted_3, (0, _vue.toDisplayString)(c.label), 1 /* TEXT */ ),
                (0, _vue.createElementVNode)("div", _hoisted_4, [
                    (0, _vue.createElementVNode)("button", {
                        class: "btn btn-primary",
                        onClick: ($event)=>$options.increment(c)
                    }, "+1", 8 /* PROPS */ , _hoisted_5)
                ]),
                (0, _vue.createElementVNode)("div", _hoisted_6, [
                    (0, _vue.createElementVNode)("button", {
                        class: "btn btn-danger mx-2",
                        onClick: ($event)=>$options.decrement(c)
                    }, "-1", 8 /* PROPS */ , _hoisted_7)
                ]),
                (0, _vue.createElementVNode)("div", _hoisted_8, (0, _vue.toDisplayString)(c.value), 1 /* TEXT */ )
            ]);
        }), 256 /* UNKEYED_FRAGMENT */ )),
        (0, _vue.createElementVNode)("div", _hoisted_9, [
            _hoisted_10,
            _hoisted_11,
            _hoisted_12,
            (0, _vue.createElementVNode)("div", _hoisted_13, (0, _vue.toDisplayString)($options.total($data.counters)), 1 /* TEXT */ )
        ]),
        _hoisted_14,
        (0, _vue.createElementVNode)("div", _hoisted_15, [
            (0, _vue.createElementVNode)("div", _hoisted_16, [
                (0, _vue.createElementVNode)("div", _hoisted_17, [
                    _hoisted_18,
                    _hoisted_19,
                    (0, _vue.createElementVNode)("div", _hoisted_20, [
                        (0, _vue.createElementVNode)("button", {
                            class: "btn btn-primary",
                            onClick: _cache[0] || (_cache[0] = (...args)=>$options.clear && $options.clear(...args)),
                            "data-bs-target": "#confirmClearModal",
                            "data-bs-toggle": "modal"
                        }, "Confirm"),
                        _hoisted_21
                    ])
                ])
            ])
        ])
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("8afb75-hmr", render);
});

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4oFCP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["j2YDk","1SICI"], "1SICI", "parcelRequire1261")

//# sourceMappingURL=index.18dbc454.js.map
