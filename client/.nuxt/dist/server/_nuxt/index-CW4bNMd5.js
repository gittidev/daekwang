var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { defineComponent, ref, computed, mergeProps, useSSRContext, unref, watch, isRef, getCurrentScope, onScopeDispose, nextTick, getCurrentInstance, toRefs as toRefs$1, customRef, readonly, watchEffect, useSlots, shallowRef, createElementBlock, onMounted, onUnmounted, openBlock, normalizeStyle, normalizeClass, provide, createRenderer, h, inject, Fragment, reactive, createCommentVNode, renderSlot, createElementVNode, useAttrs, createVNode, render, createBlock, withAsyncContext, withCtx, Suspense } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderSuspense, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-GXG8ACDz.js";
import { useRoute, useRouter } from "vue-router";
import * as Jn from "three";
import { Scene, Raycaster, PerspectiveCamera, WebGLRenderer, NoToneMapping, PCFSoftShadowMap, ACESFilmicToneMapping, SRGBColorSpace, Color, Clock, MathUtils, Camera, REVISION, Object3D, BufferAttribute, Vector2, Vector3, ShaderChunk, MOUSE, TOUCH, Group, WebGLRenderTarget, PlaneGeometry, MeshBasicMaterial, Mesh, OrthographicCamera, MeshDepthMaterial, ShaderMaterial, EventDispatcher, Spherical, Quaternion, Loader, Ray, Plane, FileLoader, BufferGeometry, LoaderUtils, MeshPhysicalMaterial, SpotLight, PointLight, DirectionalLight, Matrix4, InstancedMesh, InstancedBufferAttribute, TextureLoader, ImageBitmapLoader, InterleavedBuffer, InterleavedBufferAttribute, LinearMipmapLinearFilter, NearestMipmapLinearFilter, LinearMipmapNearestFilter, NearestMipmapNearestFilter, LinearFilter, NearestFilter, RepeatWrapping, MirroredRepeatWrapping, ClampToEdgeWrapping, Texture, PointsMaterial, Material, LineBasicMaterial, MeshStandardMaterial, DoubleSide, PropertyBinding, SkinnedMesh, LineSegments, Line, LineLoop, Points, Skeleton, AnimationClip, Bone, InterpolateDiscrete, InterpolateLinear, VectorKeyframeTrack, NumberKeyframeTrack, QuaternionKeyframeTrack, FrontSide, TrianglesDrawMode, TriangleFanDrawMode, TriangleStripDrawMode, Interpolant, Box3, Sphere, AudioListener, Audio, AudioLoader, BackSide, UniformsUtils, Triangle, Euler, Vector4, Line3, BoxGeometry, HalfFloatType, CompressedTexture, RGBAFormat, DataTexture, RawShaderMaterial, AdditiveBlending, Box2, Uniform, ShapePath } from "three";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
class Grad {
  constructor(x, y, z2) {
    __publicField(this, "x");
    __publicField(this, "y");
    __publicField(this, "z");
    this.x = x;
    this.y = y;
    this.z = z2;
  }
  dot2(x, y) {
    return this.x * x + this.y * y;
  }
}
class Noise {
  constructor(seed = 0) {
    __publicField(this, "grad3");
    __publicField(this, "p");
    __publicField(this, "perm");
    __publicField(this, "gradP");
    this.grad3 = [
      new Grad(1, 1, 0),
      new Grad(-1, 1, 0),
      new Grad(1, -1, 0),
      new Grad(-1, -1, 0),
      new Grad(1, 0, 1),
      new Grad(-1, 0, 1),
      new Grad(1, 0, -1),
      new Grad(-1, 0, -1),
      new Grad(0, 1, 1),
      new Grad(0, -1, 1),
      new Grad(0, 1, -1),
      new Grad(0, -1, -1)
    ];
    this.p = [
      151,
      160,
      137,
      91,
      90,
      15,
      131,
      13,
      201,
      95,
      96,
      53,
      194,
      233,
      7,
      225,
      140,
      36,
      103,
      30,
      69,
      142,
      8,
      99,
      37,
      240,
      21,
      10,
      23,
      190,
      6,
      148,
      247,
      120,
      234,
      75,
      0,
      26,
      197,
      62,
      94,
      252,
      219,
      203,
      117,
      35,
      11,
      32,
      57,
      177,
      33,
      88,
      237,
      149,
      56,
      87,
      174,
      20,
      125,
      136,
      171,
      168,
      68,
      175,
      74,
      165,
      71,
      134,
      139,
      48,
      27,
      166,
      77,
      146,
      158,
      231,
      83,
      111,
      229,
      122,
      60,
      211,
      133,
      230,
      220,
      105,
      92,
      41,
      55,
      46,
      245,
      40,
      244,
      102,
      143,
      54,
      65,
      25,
      63,
      161,
      1,
      216,
      80,
      73,
      209,
      76,
      132,
      187,
      208,
      89,
      18,
      169,
      200,
      196,
      135,
      130,
      116,
      188,
      159,
      86,
      164,
      100,
      109,
      198,
      173,
      186,
      3,
      64,
      52,
      217,
      226,
      250,
      124,
      123,
      5,
      202,
      38,
      147,
      118,
      126,
      255,
      82,
      85,
      212,
      207,
      206,
      59,
      227,
      47,
      16,
      58,
      17,
      182,
      189,
      28,
      42,
      223,
      183,
      170,
      213,
      119,
      248,
      152,
      2,
      44,
      154,
      163,
      70,
      221,
      153,
      101,
      155,
      167,
      43,
      172,
      9,
      129,
      22,
      39,
      253,
      19,
      98,
      108,
      110,
      79,
      113,
      224,
      232,
      178,
      185,
      112,
      104,
      218,
      246,
      97,
      228,
      251,
      34,
      242,
      193,
      238,
      210,
      144,
      12,
      191,
      179,
      162,
      241,
      81,
      51,
      145,
      235,
      249,
      14,
      239,
      107,
      49,
      192,
      214,
      31,
      181,
      199,
      106,
      157,
      184,
      84,
      204,
      176,
      115,
      121,
      50,
      45,
      127,
      4,
      150,
      254,
      138,
      236,
      205,
      93,
      222,
      114,
      67,
      29,
      24,
      72,
      243,
      141,
      128,
      195,
      78,
      66,
      215,
      61,
      156,
      180
    ];
    this.perm = new Array(512);
    this.gradP = new Array(512);
    this.seed(seed);
  }
  seed(seed) {
    if (seed > 0 && seed < 1) seed *= 65536;
    seed = Math.floor(seed);
    if (seed < 256) seed |= seed << 8;
    for (let i = 0; i < 256; i++) {
      const v = i & 1 ? this.p[i] ^ seed & 255 : this.p[i] ^ seed >> 8 & 255;
      this.perm[i] = this.perm[i + 256] = v;
      this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12];
    }
  }
  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  lerp(a, b, t) {
    return (1 - t) * a + t * b;
  }
  perlin2(x, y) {
    let X = Math.floor(x), Y = Math.floor(y);
    x -= X;
    y -= Y;
    X &= 255;
    Y &= 255;
    const n00 = this.gradP[X + this.perm[Y]].dot2(x, y);
    const n01 = this.gradP[X + this.perm[Y + 1]].dot2(x, y - 1);
    const n10 = this.gradP[X + 1 + this.perm[Y]].dot2(x - 1, y);
    const n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(x - 1, y - 1);
    const u = this.fade(x);
    const v = this.fade(y);
    return this.lerp(this.lerp(n00, n10, u), this.lerp(n01, n11, u), v);
  }
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FloatingPaths",
  __ssrInlineRender: true,
  props: {
    lineColor: { type: String, default: "hsl(var(--foreground))" },
    backgroundColor: { type: String, default: "transparent" },
    waveSpeedX: { type: Number, default: 0.0125 },
    waveSpeedY: { type: Number, default: 5e-3 },
    waveAmpX: { type: Number, default: 32 },
    waveAmpY: { type: Number, default: 16 },
    xGap: { type: Number, default: 30 },
    yGap: { type: Number, default: 48 },
    friction: { type: Number, default: 0.925 },
    tension: { type: Number, default: 5e-3 },
    maxCursorMove: { type: Number, default: 100 },
    className: String
  },
  setup(__props) {
    const containerRef = ref(null);
    ref(null);
    ref(null);
    ref({ width: 0, height: 0, left: 0, top: 0 });
    ref([]);
    ref(new Noise(Math.random()));
    const mouseRef = ref({
      x: -10,
      y: 0,
      lx: 0,
      ly: 0,
      sx: 0,
      sy: 0,
      v: 0,
      vs: 0,
      a: 0,
      set: false
    });
    const cursorStyle = computed(() => ({
      transform: `translate3d(calc(${mouseRef.value.sx}px - 50%), calc(${mouseRef.value.sy}px - 50%), 0)`,
      willChange: "transform"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "absolute top-0 left-0 w-full h-full overflow-hidden",
        style: { backgroundColor: __props.backgroundColor }
      }, _attrs))}><div class="absolute top-0 left-0 rounded-full w-2 h-2 bg-foreground/10" style="${ssrRenderStyle(cursorStyle.value)}"></div><canvas class="block w-full h-full"></canvas></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloatingPaths.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BackgroundPaths",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        lineColor: "rgba(0, 0, 0, 0.3)",
        backgroundColor: "transparent",
        waveSpeedX: 0.04,
        waveSpeedY: 0.02,
        waveAmpX: 40,
        waveAmpY: 10,
        friction: 0.95,
        tension: 0.1,
        maxCursorMove: 50,
        xGap: 24,
        yGap: 60
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackgroundPaths.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function createEventHook() {
  const fns = /* @__PURE__ */ new Set();
  const off = (fn) => {
    fns.delete(fn);
  };
  const on = (fn) => {
    fns.add(fn);
    const offFn = () => off(fn);
    tryOnScopeDispose(offFn);
    return {
      off: offFn
    };
  };
  const trigger = (...args) => {
    return Promise.all(Array.from(fns).map((fn) => fn(...args)));
  };
  return {
    on,
    off,
    trigger
  };
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = false;
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke2) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke2());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke2());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke2());
      }, duration);
    });
  };
  return filter;
}
function objectPick(obj, keys2, omitUndefined = false) {
  return keys2.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || obj[k] !== void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
function refDebounced(value, ms = 200, options = {}) {
  const debounced = ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}
function toRefs(objectRef, options = {}) {
  if (!isRef(objectRef))
    return toRefs$1(objectRef);
  const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
  for (const key in objectRef.value) {
    result[key] = customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        var _a;
        const replaceRef = (_a = toValue(options.replaceRef)) != null ? _a : true;
        if (replaceRef) {
          if (Array.isArray(objectRef.value)) {
            const copy = [...objectRef.value];
            copy[key] = v;
            objectRef.value = copy;
          } else {
            const newObject = { ...objectRef.value, [key]: v };
            Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
            objectRef.value = newObject;
          }
        } else {
          objectRef.value[key] = v;
        }
      }
    }));
  }
  return result;
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    if (isActive.value)
      timer = setInterval(cb, intervalValue);
  }
  if (isRef(interval) || typeof interval === "function") {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        ;
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el2, event, listener, options2) => {
    el2.addEventListener(event, listener, options2);
    return () => el2.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el2, options2]) => {
      cleanup();
      if (!el2)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register(el2, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const value = toValue(target);
    const items = (Array.isArray(value) ? value : [value]).map(unrefElement).filter(notNullish);
    return new Set(items);
  });
  const stopWatch = watch(
    () => targets.value,
    (targets2) => {
      cleanup();
      if (isSupported.value && targets2.size) {
        observer = new MutationObserver(callback);
        targets2.forEach((el2) => observer.observe(el2, mutationOptions));
      }
    },
    { immediate: true, flush: "post" }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    fpsLimit = void 0,
    window: window2 = defaultWindow
  } = options;
  const isActive = ref(false);
  const intervalLimit = fpsLimit ? 1e3 / fpsLimit : null;
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp2) {
    if (!isActive.value || !window2)
      return;
    if (!previousFrameTimestamp)
      previousFrameTimestamp = timestamp2;
    const delta = timestamp2 - previousFrameTimestamp;
    if (intervalLimit && delta < intervalLimit) {
      rafId = window2.requestAnimationFrame(loop);
      return;
    }
    previousFrameTimestamp = timestamp2;
    fn({ delta, timestamp: timestamp2 });
    rafId = window2.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window2) {
      isActive.value = true;
      previousFrameTimestamp = 0;
      rafId = window2.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window2) {
      window2.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
function useDevicePixelRatio(options = {}) {
  const {
    window: window2 = defaultWindow
  } = options;
  const pixelRatio = ref(1);
  if (window2) {
    let observe2 = function() {
      pixelRatio.value = window2.devicePixelRatio;
      cleanup2();
      media = window2.matchMedia(`(resolution: ${pixelRatio.value}dppx)`);
      media.addEventListener("change", observe2, { once: true });
    }, cleanup2 = function() {
      media == null ? void 0 : media.removeEventListener("change", observe2);
    };
    let media;
    observe2();
    tryOnScopeDispose(cleanup2);
  }
  return { pixelRatio };
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const _targets = toValue(target);
    return Array.isArray(_targets) ? _targets.map((el2) => unrefElement(el2)) : [unrefElement(_targets)];
  });
  const stopWatch = watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window2) {
        observer = new ResizeObserver(callback);
        for (const _el of els) {
          if (_el)
            observer.observe(_el, observerOptions);
        }
      }
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementBounding(target, options = {}) {
  const {
    reset = true,
    windowResize = true,
    windowScroll = true,
    immediate = true,
    updateTiming = "sync"
  } = options;
  const height = ref(0);
  const bottom = ref(0);
  const left = ref(0);
  const right = ref(0);
  const top = ref(0);
  const width = ref(0);
  const x = ref(0);
  const y = ref(0);
  function recalculate() {
    const el2 = unrefElement(target);
    if (!el2) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el2.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  function update() {
    if (updateTiming === "sync")
      recalculate();
    else if (updateTiming === "next-frame")
      requestAnimationFrame(() => recalculate());
  }
  useResizeObserver(target, update);
  watch(() => unrefElement(target), (ele) => !ele && update());
  useMutationObserver(target, update, {
    attributeFilter: ["style", "class"]
  });
  if (windowScroll)
    useEventListener("scroll", update, { capture: true, passive: true });
  if (windowResize)
    useEventListener("resize", update, { passive: true });
  tryOnMounted(() => {
    if (immediate)
      update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}
function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const { window: window2 = defaultWindow, box = "content-box" } = options;
  const isSVG = computed(() => {
    var _a, _b;
    return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
  });
  const width = ref(initialSize.width);
  const height = ref(initialSize.height);
  const { stop: stop1 } = useResizeObserver(
    target,
    ([entry]) => {
      const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
      if (window2 && isSVG.value) {
        const $elem = unrefElement(target);
        if ($elem) {
          const rect = $elem.getBoundingClientRect();
          width.value = rect.width;
          height.value = rect.height;
        }
      } else {
        if (boxSize) {
          const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
          width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
          height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
        } else {
          width.value = entry.contentRect.width;
          height.value = entry.contentRect.height;
        }
      }
    },
    options
  );
  tryOnMounted(() => {
    const ele = unrefElement(target);
    if (ele) {
      width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
      height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
    }
  });
  const stop2 = watch(
    () => unrefElement(target),
    (ele) => {
      width.value = ele ? initialSize.width : 0;
      height.value = ele ? initialSize.height : 0;
    }
  );
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}
function useFps(options) {
  var _a;
  const fps = ref(0);
  if (typeof performance === "undefined")
    return fps;
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}
function useMemory(options = {}) {
  const memory = ref();
  const isSupported = useSupported(() => typeof performance !== "undefined" && "memory" in performance);
  if (isSupported.value) {
    const { interval = 1e3 } = options;
    useIntervalFn(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}
const defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
const keys = /* @__PURE__ */ Object.keys(defaultState);
function usePointer(options = {}) {
  const {
    target = defaultWindow
  } = options;
  const isInside = ref(false);
  const state = ref(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType))
      return;
    state.value = objectPick(event, keys, false);
  };
  if (target) {
    const listenerOptions = { passive: true };
    useEventListener(target, ["pointerdown", "pointermove", "pointerup"], handler, listenerOptions);
    useEventListener(target, "pointerleave", () => isInside.value = false, listenerOptions);
  }
  return {
    ...toRefs(state),
    isInside
  };
}
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true,
    type = "inner"
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window2) {
      if (type === "outer") {
        width.value = window2.outerWidth;
        height.value = window2.outerHeight;
      } else if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}
const dn$1 = "@tresjs/core", pn = "module", mn = "4.3.1", hn = "pnpm@9.1.4", gn$1 = "Declarative ThreeJS using Vue Components", vn$1 = "Alvaro Saburido <hola@alvarosaburido.dev> (https://github.com/alvarosabu/)", yn$1 = "MIT", _n = {
  type: "git",
  url: "git+https://github.com/Tresjs/tres.git"
}, wn$1 = [
  "vue",
  "3d",
  "threejs",
  "three",
  "threejs-vue"
], bn = false, Mn = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/tres.js",
    require: "./dist/tres.umd.cjs"
  },
  "./components": {
    types: "./dist/src/components/index.d.ts"
  },
  "./composables": {
    types: "./dist/src/composables/index.d.ts"
  },
  "./types": {
    types: "./dist/src/types/index.d.ts"
  },
  "./utils": {
    types: "./dist/src/utils/index.d.ts"
  },
  "./*": "./*"
}, Pn = "./dist/tres.js", Cn = "./dist/tres.js", En = "./dist/index.d.ts", Tn = [
  "*.d.ts",
  "dist"
], Sn = {
  access: "public"
}, xn = {
  dev: "cd playground/vue && npm run dev",
  "dev:nuxt": "cd playground/nuxt && npm run dev",
  build: "vite build",
  test: "vitest",
  "test:ci": "vitest run",
  "test:ui": "vitest --ui --coverage.enabled=true",
  release: "release-it",
  coverage: "vitest run --coverage",
  lint: "eslint .",
  "lint:fix": "eslint . --fix",
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:serve": "vitepress serve docs",
  "docs:preview": "vitepress preview docs",
  "docs:contributors": "esno scripts/update-contributors.ts"
}, An$1 = {
  three: ">=0.133",
  vue: ">=3.4"
}, kn = {
  "@alvarosabu/utils": "^3.2.0",
  "@vue/devtools-api": "^6.6.3",
  "@vueuse/core": "^11.1.0"
}, Ln = {
  "@release-it/conventional-changelog": "^9.0.0",
  "@stackblitz/sdk": "^1.11.0",
  "@tresjs/cientos": "4.0.3",
  "@tresjs/eslint-config": "^1.4.0",
  "@types/three": "^0.169.0",
  "@typescript-eslint/eslint-plugin": "^8.8.1",
  "@typescript-eslint/parser": "^8.8.1",
  "@vitejs/plugin-vue": "^5.1.4",
  "@vitest/coverage-c8": "^0.33.0",
  "@vitest/coverage-v8": "^2.1.2",
  "@vitest/ui": "^2.1.2",
  "@vue/test-utils": "^2.4.6",
  eslint: "^9.12.0",
  "eslint-plugin-vue": "^9.29.0",
  esno: "^4.8.0",
  gsap: "^3.12.5",
  husky: "^9.1.6",
  jsdom: "^25.0.1",
  kolorist: "^1.8.0",
  ohmyfetch: "^0.4.21",
  pathe: "^1.1.2",
  "release-it": "^17.8.2",
  "rollup-plugin-analyzer": "^4.0.0",
  "rollup-plugin-copy": "^3.5.0",
  "rollup-plugin-visualizer": "^5.12.0",
  sponsorkit: "^0.15.5",
  three: "^0.169.0",
  unocss: "^0.63.4",
  unplugin: "^1.14.1",
  "unplugin-vue-components": "^0.27.4",
  vite: "^5.4.8",
  "vite-plugin-banner": "^0.8.0",
  "vite-plugin-dts": "4.2.4",
  "vite-plugin-inspect": "^0.8.7",
  "vite-plugin-require-transform": "^1.0.21",
  "vite-svg-loader": "^5.1.0",
  vitepress: "1.4.0",
  vitest: "^2.1.2",
  vue: "3.5.12",
  "vue-demi": "^0.14.10"
}, Rn = {
  name: dn$1,
  type: pn,
  version: mn,
  packageManager: hn,
  description: gn$1,
  author: vn$1,
  license: yn$1,
  repository: _n,
  keywords: wn$1,
  sideEffects: bn,
  exports: Mn,
  main: Pn,
  module: Cn,
  types: En,
  files: Tn,
  publishConfig: Sn,
  scripts: xn,
  peerDependencies: An$1,
  dependencies: kn,
  devDependencies: Ln
};
function On(e) {
  const t = { nodes: {}, materials: {} };
  return e && e.traverse((n) => {
    n.name && (t.nodes[n.name] = n), n.material && !t.materials[n.material.name] && (t.materials[n.material.name] = n.material);
  }), t;
}
async function Dn(e, t, n, r, s) {
  const { logError: l } = V(), i = new e();
  return n && n(i), await new Promise((a, c) => {
    i.load(
      t,
      (o) => {
        const f = o;
        f.scene && Object.assign(f, On(f.scene)), a(f);
      },
      r,
      (o) => {
        l("[useLoader] - Failed to load resource", o), c(o);
      }
    );
  });
}
function Me$1(e) {
  return typeof e > "u";
}
function de(e) {
  return Array.isArray(e);
}
function Bn(e) {
  return typeof e == "number";
}
function ft(e) {
  return typeof e == "string";
}
function G(e) {
  return typeof e == "function";
}
function H(e) {
  return e === Object(e) && !de(e) && !G(e);
}
function N(e) {
  return H(e) && "isObject3D" in e && !!e.isObject3D;
}
function ze(e) {
  return H(e) && "isCamera" in e && !!e.isCamera;
}
function In$1(e) {
  return H(e) && "isBufferGeometry" in e && !!e.isBufferGeometry;
}
function $n$1(e) {
  return H(e) && "isMaterial" in e && !!e.isMaterial;
}
function Un(e) {
  return H(e) && "isFog" in e && !!e.isFog;
}
function Fn$1(e) {
  return H(e) && "isScene" in e && !!e.isScene;
}
function re(e) {
  return N(e) || In$1(e) || $n$1(e) || Un(e);
}
function Wn(e) {
  return H(e) && !!e.isPrimitive;
}
const dt$1 = (e, t) => {
  for (const n of Object.keys(t))
    t[n] instanceof Object && Object.assign(t[n], dt$1(e[n], t[n]));
  return Object.assign(e || {}, t), e;
}, Nn = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", zn = /* @__PURE__ */ Yn(Nn);
function Ge$1(e) {
  return e && e.nodeType === 1;
}
function oe(e) {
  return e.replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
const Gn = /\B([A-Z])/g;
function Vn(e) {
  return e.replace(Gn, "-$1").toLowerCase();
}
function Yn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let s = 0; s < r.length; s++)
    n[r[s]] = true;
  return (s) => !!n[s];
}
const Ve = (e, t) => {
  if (!t)
    return;
  const n = Array.isArray(t) ? t : t.match(/([^[.\]])+/g);
  return n == null ? void 0 : n.reduce((r, s) => r && r[s], e);
}, qn = (e, t, n) => {
  const r = Array.isArray(t) ? t : t.match(/([^[.\]])+/g);
  r && r.reduce((s, l, i) => (s[l] === void 0 && (s[l] = {}), i === r.length - 1 && (s[l] = n), s[l]), e);
};
function pt$1(e, t) {
  if (Ge$1(e) && Ge$1(t)) {
    const s = e.attributes, l = t.attributes;
    return s.length !== l.length ? false : Array.from(s).every(({ name: i, value: a }) => t.getAttribute(i) === a);
  }
  if (e === t)
    return true;
  if (e === null || typeof e != "object" || t === null || typeof t != "object")
    return false;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return false;
  for (const s of n)
    if (!r.includes(s) || !pt$1(e[s], t[s]))
      return false;
  return true;
}
function Kn(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length)
    return false;
  for (let n = 0; n < e.length; n++)
    if (!pt$1(e[n], t[n]))
      return false;
  return true;
}
function er$1(e) {
  return "map" in e;
}
function Ye(e) {
  er$1(e) && e.map && e.map.dispose(), e.dispose();
}
function mt(e) {
  var n, r;
  if (e.parent && ((n = e.removeFromParent) == null || n.call(e)), delete e.__tres, [...e.children].forEach((s) => mt(s)), !(e instanceof Scene)) {
    const s = e;
    e && ((r = e.dispose) == null || r.call(e)), s.geometry && (s.geometry.dispose(), delete s.geometry), Array.isArray(s.material) ? (s.material.forEach((l) => Ye(l)), delete s.material) : s.material && (Ye(s.material), delete s.material);
  }
}
function tr$1(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    t(e[r], r) && (e[n] = e[r], n++);
  return e.length = n, e;
}
function Pe(e, t) {
  let n = e;
  if (t.includes("-")) {
    const r = t.split("-");
    let s = r.shift();
    for (; n && r.length; )
      s in n ? (n = n[s], s = r.shift()) : s = qe(s, r.shift());
    return { target: n, key: qe(s, ...r) };
  } else
    return { target: n, key: t };
}
function qe(...e) {
  return e.map((t, n) => n === 0 ? t : t.charAt(0).toUpperCase() + t.slice(1)).join("");
}
const Ke = /-\d+$/;
function nr$1(e, t, n) {
  if (ft(n)) {
    if (Ke.test(n)) {
      const l = n.replace(Ke, ""), { target: i, key: a } = Pe(e, l);
      if (!Array.isArray(i[a])) {
        const c = i[a], o = [];
        o.__tresDetach = () => {
          o.every((f) => Me$1(f)) && (i[a] = c);
        }, i[a] = o;
      }
    }
    const { target: r, key: s } = Pe(e, n);
    t.__tres.previousAttach = r[s], r[s] = Q(t);
  } else
    t.__tres.previousAttach = n(e, t);
}
function rr$1(e, t, n) {
  var r, s, l;
  if (ft(n)) {
    const { target: i, key: a } = Pe(e, n), c = t.__tres.previousAttach;
    c === void 0 ? delete i[a] : i[a] = c, "__tresDetach" in i && i.__tresDetach();
  } else
    (s = (r = t.__tres) == null ? void 0 : r.previousAttach) == null || s.call(r, e, t);
  (l = t.__tres) == null || delete l.previousAttach;
}
function z(e, t, n) {
  const r = e;
  return r.__tres = {
    type: "unknown",
    eventCount: 0,
    root: n,
    handlers: {},
    memoizedProps: {},
    objects: [],
    parent: null,
    previousAttach: null,
    ...t
  }, r.__tres.attach || (r.isMaterial ? r.__tres.attach = "material" : r.isBufferGeometry ? r.__tres.attach = "geometry" : r.isFog && (r.__tres.attach = "fog")), r;
}
function ht(e) {
  var n;
  const t = (n = e == null ? void 0 : e.__tres) == null ? void 0 : n.root;
  t && t.render && t.render.canBeInvalidated.value && t.invalidate();
}
function or$1(e, t, n) {
  var s;
  if (!G(e.setPixelRatio))
    return;
  let r = 0;
  if (de(n) && n.length >= 2) {
    const [l, i] = n;
    r = MathUtils.clamp(t, l, i);
  } else Bn(n) ? r = n : r = t;
  r !== ((s = e.getPixelRatio) == null ? void 0 : s.call(e)) && e.setPixelRatio(r);
}
function sr$1(e, t, n, r, s) {
  const l = [...t.__tres.objects], i = Q(t);
  if (e = Q(e), i === e)
    return true;
  const a = z(e, t.__tres ?? {}, s), c = t.parent ?? t.__tres.parent ?? null, o = { ...t.__tres.memoizedProps };
  delete o.object;
  for (const f of l)
    gt(f, s), vt(f, s);
  i.__tres.objects = [], r.remove(t);
  for (const [f, y] of Object.entries(o))
    r.patchProp(a, f, a[f], y);
  n(e), r.insert(t, c);
  for (const f of l)
    r.insert(f, t);
  return true;
}
function Q(e) {
  return Wn(e) ? (e.object.__tres = e.__tres, e.object) : e;
}
function gt(e, t) {
  var r, s, l, i;
  const n = ((r = e.__tres) == null ? void 0 : r.parent) || t.scene.value;
  e.__tres && (e.__tres.parent = null), n && n.__tres && "objects" in n.__tres && tr$1(n.__tres.objects, (a) => a !== e), (s = e.__tres) != null && s.attach ? rr$1(n, e, e.__tres.attach) : ((i = (l = e.parent) == null ? void 0 : l.remove) == null || i.call(l, Q(e)), e.parent = null);
}
function vt(e, t) {
  var n;
  (n = e.traverse) == null || n.call(e, (r) => {
    var s;
    t.deregisterCamera(r), (s = t.eventManager) == null || s.deregisterPointerMissedObject(r);
  }), t.deregisterCamera(e), ht(e);
}
const ar$1 = ({ sizes: e }) => {
  const t = ref([]), n = computed(
    () => t.value[0]
  ), r = (i) => {
    const a = i instanceof Camera ? i : t.value.find((o) => o.uuid === i);
    if (!a)
      return;
    const c = t.value.filter(({ uuid: o }) => o !== a.uuid);
    t.value = [a, ...c];
  }, s = (i, a = false) => {
    if (ze(i)) {
      const c = i;
      if (t.value.some(({ uuid: o }) => o === c.uuid))
        return;
      a ? r(c) : t.value.push(c);
    }
  }, l = (i) => {
    if (ze(i)) {
      const a = i;
      t.value = t.value.filter(({ uuid: c }) => c !== a.uuid);
    }
  };
  return watchEffect(() => {
    e.aspectRatio.value && t.value.forEach((i) => {
      !i.manual && (i instanceof PerspectiveCamera || lr(i)) && (i instanceof PerspectiveCamera ? i.aspect = e.aspectRatio.value : (i.left = e.width.value * -0.5, i.right = e.width.value * 0.5, i.top = e.height.value * 0.5, i.bottom = e.height.value * -0.5), i.updateProjectionMatrix());
    });
  }), onUnmounted(() => {
    t.value = [];
  }), {
    camera: n,
    cameras: t,
    registerCamera: s,
    deregisterCamera: l,
    setCameraActive: r
  };
};
function lr(e) {
  return e.hasOwnProperty("isOrthographicCamera") && e.isOrthographicCamera;
}
const pe$1 = "[TresJS ▲ ■ ●] ";
function cr$1(...e) {
  typeof e[0] == "string" ? e[0] = pe$1 + e[0] : e.unshift(pe$1), console.error(...e);
}
function ur$1(...e) {
  typeof e[0] == "string" ? e[0] = pe$1 + e[0] : e.unshift(pe$1), console.warn(...e);
}
function fr$1(e, t) {
}
function V() {
  return {
    logError: cr$1,
    logWarning: ur$1,
    logMessage: fr$1
  };
}
const Ce = ref({}), Ee = (e) => Object.assign(Ce.value, e);
function ye() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set();
  let n = 0, r = false;
  const s = () => {
    const o = Array.from(e.entries()).sort((f, y) => {
      const u = f[1].priority - y[1].priority;
      return u === 0 ? f[1].addI - y[1].addI : u;
    });
    t.clear(), o.forEach((f) => t.add(f[0]));
  }, l = (o) => {
    e.delete(o), t.delete(o);
  };
  return { on: (o, f = 0) => {
    e.set(o, { priority: f, addI: n++ });
    const y = () => l(o);
    return tryOnScopeDispose(y), r = true, {
      off: y
    };
  }, off: l, trigger: (...o) => {
    r && (s(), r = false), t.forEach((f) => f(...o));
  }, dispose: () => {
    e.clear(), t.clear();
  }, get count() {
    return e.size;
  } };
}
function dr$1() {
  let e = true, t = true, n = false;
  const r = new Clock(false), s = ref(r.running), l = ref(false);
  let i;
  const a = MathUtils.generateUUID();
  let c = null;
  const o = ye(), f = ye(), y = ye();
  E();
  let u = {};
  function v(M) {
    u = M;
  }
  function h2(M, A, p = 0) {
    switch (A) {
      case "before":
        return o.on(M, p);
      case "render":
        return c || (c = M), f.dispose(), f.on(M);
      case "after":
        return y.on(M, p);
    }
  }
  function g() {
    t && (t = false, E(), b());
  }
  function d() {
    t = true, E(), cancelAnimationFrame(i);
  }
  function _() {
    n = false, E();
  }
  function P() {
    n = true, E();
  }
  function C() {
    l.value = true;
  }
  function T() {
    l.value = false;
  }
  function b() {
    if (!e) {
      i = requestAnimationFrame(b);
      return;
    }
    const M = r.getDelta(), A = r.getElapsedTime(), p = {
      camera: unref(u.camera),
      scene: unref(u.scene),
      renderer: unref(u.renderer),
      raycaster: unref(u.raycaster),
      controls: unref(u.controls),
      invalidate: u.invalidate,
      advance: u.advance
    }, w = { delta: M, elapsed: A, clock: r, ...p };
    s.value && o.trigger(w), l.value || (f.count ? f.trigger(w) : c && c(w)), s.value && y.trigger(w), i = requestAnimationFrame(b);
  }
  function E() {
    const M = !t && !n;
    r.running !== M && (r.running ? r.stop() : r.start()), s.value = r.running;
  }
  return {
    loopId: a,
    register: (M, A, p) => h2(M, A, p),
    start: g,
    stop: d,
    pause: P,
    resume: _,
    pauseRender: C,
    resumeRender: T,
    isRenderPaused: l,
    isActive: s,
    setContext: v,
    setReady: (M) => e = M
  };
}
function ke(e) {
  let t = 0;
  return e.traverse((n) => {
    if (n.isMesh && n.geometry && n.type !== "HightlightMesh") {
      const r = n.geometry, s = r.attributes.position.count * 3 * Float32Array.BYTES_PER_ELEMENT, l = r.index ? r.index.count * Uint32Array.BYTES_PER_ELEMENT : 0, i = r.attributes.normal ? r.attributes.normal.count * 3 * Float32Array.BYTES_PER_ELEMENT : 0, a = r.attributes.uv ? r.attributes.uv.count * 2 * Float32Array.BYTES_PER_ELEMENT : 0, c = s + l + i + a;
      t += c;
    }
  }), t;
}
const mr$1 = Number.parseInt(REVISION.replace("dev", ""));
function hr$1(e) {
  return e instanceof Color ? e : Array.isArray(e) ? new Color(...e) : new Color(e);
}
const se = {
  realistic: {
    shadows: true,
    physicallyCorrectLights: true,
    outputColorSpace: SRGBColorSpace,
    toneMapping: ACESFilmicToneMapping,
    toneMappingExposure: 3,
    shadowMap: {
      enabled: true,
      type: PCFSoftShadowMap
    }
  },
  flat: {
    toneMapping: NoToneMapping,
    toneMappingExposure: 1
  }
};
function gr({
  canvas: e,
  options: t,
  contextParts: { sizes: n, render: r, invalidate: s, advance: l }
}) {
  const i = computed(() => ({
    alpha: toValue(t.alpha) ?? true,
    depth: toValue(t.depth),
    canvas: unrefElement(e),
    context: toValue(t.context),
    stencil: toValue(t.stencil),
    antialias: toValue(t.antialias) ?? true,
    precision: toValue(t.precision),
    powerPreference: toValue(t.powerPreference),
    premultipliedAlpha: toValue(t.premultipliedAlpha),
    preserveDrawingBuffer: toValue(t.preserveDrawingBuffer),
    logarithmicDepthBuffer: toValue(t.logarithmicDepthBuffer),
    failIfMajorPerformanceCaveat: toValue(t.failIfMajorPerformanceCaveat)
  })), a = shallowRef(new WebGLRenderer(i.value));
  function c() {
    t.renderMode === "on-demand" && s();
  }
  watch(i, () => {
    a.value.dispose(), a.value = new WebGLRenderer(i.value), c();
  }), watch([n.width, n.height], () => {
    a.value.setSize(n.width.value, n.height.value), c();
  }, {
    immediate: true
  }), watch(() => t.clearColor, c);
  const { pixelRatio: o } = useDevicePixelRatio(), { logError: f } = V(), u = (() => {
    const h2 = new WebGLRenderer(), g = {
      shadowMap: {
        enabled: h2.shadowMap.enabled,
        type: h2.shadowMap.type
      },
      toneMapping: h2.toneMapping,
      toneMappingExposure: h2.toneMappingExposure,
      outputColorSpace: h2.outputColorSpace
    };
    return h2.dispose(), g;
  })(), v = toValue(t.renderMode);
  return v === "on-demand" && s(), v === "manual" && setTimeout(() => {
    l();
  }, 100), watchEffect(() => {
    const h2 = toValue(t.preset);
    h2 && (h2 in se || f(`Renderer Preset must be one of these: ${Object.keys(se).join(", ")}`), dt$1(a.value, se[h2])), or$1(a.value, o.value, toValue(t.dpr)), v === "always" && (r.frames.value = Math.max(1, r.frames.value));
    const g = (P, C) => {
      const T = toValue(P), b = () => {
        if (h2)
          return Ve(se[h2], C);
      };
      if (T !== void 0)
        return T;
      const E = b();
      return E !== void 0 ? E : Ve(u, C);
    }, d = (P, C) => qn(a.value, C, g(P, C));
    d(t.shadows, "shadowMap.enabled"), d(t.toneMapping ?? ACESFilmicToneMapping, "toneMapping"), d(t.shadowMapType, "shadowMap.type"), mr$1 < 150 && d(!t.useLegacyLights, "physicallyCorrectLights"), d(t.outputColorSpace, "outputColorSpace"), d(t.toneMappingExposure, "toneMappingExposure");
    const _ = g(t.clearColor, "clearColor");
    _ && a.value.setClearColor(
      _ ? hr$1(_) : new Color(0)
      // default clear color is not easily/efficiently retrievable from three
    );
  }), onUnmounted(() => {
    a.value.dispose(), a.value.forceContextLoss();
  }), {
    renderer: a
  };
}
function vr(e, t, n = 10) {
  const r = toValue(e) ? useWindowSize() : useElementSize(computed(() => toValue(t).parentElement)), s = readonly(refDebounced(r.width, n)), l = readonly(refDebounced(r.height, n)), i = computed(() => s.value / l.value);
  return {
    height: l,
    width: s,
    aspectRatio: i
  };
}
const yr = (e, t) => {
  const n = computed(() => t.renderer.value.domElement), r = shallowRef([]), { x: s, y: l } = usePointer({ target: n });
  let i = 0;
  const { width: a, height: c, top: o, left: f } = useElementBounding(n), y = ({ x: m, y: S }) => {
    if (n.value)
      return {
        x: (m - f.value) / a.value * 2 - 1,
        y: -((S - o.value) / c.value) * 2 + 1
      };
  }, u = ({ x: m, y: S }) => {
    if (t.camera.value)
      return t.raycaster.value.setFromCamera(new Vector2(m, S), t.camera.value), r.value = t.raycaster.value.intersectObjects(e.value, true), r.value;
  }, v = (m) => {
    const S = y({
      x: (m == null ? void 0 : m.clientX) ?? s.value,
      y: (m == null ? void 0 : m.clientY) ?? l.value
    });
    return S ? u(S) || [] : [];
  }, h2 = createEventHook(), g = createEventHook(), d = createEventHook(), _ = createEventHook(), P = createEventHook(), C = createEventHook(), T = createEventHook(), b = createEventHook();
  function E(m) {
    const S = {};
    for (const U in m)
      typeof U != "function" && (S[U] = m[U]);
    return S;
  }
  const M = (m, S) => {
    var Be, Ie, $e;
    const U = E(S), ne = new Vector3(S == null ? void 0 : S.clientX, S == null ? void 0 : S.clientY, 0).unproject((Be = t.camera) == null ? void 0 : Be.value);
    m.trigger({
      ...U,
      intersections: r.value,
      // The unprojectedPoint is wrong, math needs to be fixed
      unprojectedPoint: ne,
      ray: (Ie = t.raycaster) == null ? void 0 : Ie.value.ray,
      camera: ($e = t.camera) == null ? void 0 : $e.value,
      sourceEvent: S,
      delta: i,
      stopPropagating: false
    });
  };
  let A;
  const p = (m) => {
    v(m), M(d, m), A = m;
  }, w = () => {
    A && p(A);
  };
  let k, L, R;
  const j = (m) => {
    var S;
    k = (S = r.value[0]) == null ? void 0 : S.object, i = 0, L = new Vector2(
      (m == null ? void 0 : m.clientX) ?? s.value,
      (m == null ? void 0 : m.clientY) ?? l.value
    ), M(P, m);
  };
  let O, Y = false;
  const Re = (m) => {
    var S, U, ne;
    m instanceof PointerEvent && (r.value.length === 0 && M(C, m), k === ((S = r.value[0]) == null ? void 0 : S.object) && (R = new Vector2(
      (m == null ? void 0 : m.clientX) ?? s.value,
      (m == null ? void 0 : m.clientY) ?? l.value
    ), i = L == null ? void 0 : L.distanceTo(R), m.button === 0 ? (M(h2, m), O === ((U = r.value[0]) == null ? void 0 : U.object) ? Y = true : (O = (ne = r.value[0]) == null ? void 0 : ne.object, Y = false)) : m.button === 2 && M(T, m)), M(_, m));
  }, Oe2 = (m) => {
    Y && (M(g, m), O = void 0, Y = false);
  }, De2 = (m) => M(d, m), je = (m) => M(b, m);
  return n.value.addEventListener("pointerup", Re), n.value.addEventListener("pointerdown", j), n.value.addEventListener("pointermove", p), n.value.addEventListener("pointerleave", De2), n.value.addEventListener("dblclick", Oe2), n.value.addEventListener("wheel", je), onUnmounted(() => {
    n != null && n.value && (n.value.removeEventListener("pointerup", Re), n.value.removeEventListener("pointerdown", j), n.value.removeEventListener("pointermove", p), n.value.removeEventListener("pointerleave", De2), n.value.removeEventListener("dblclick", Oe2), n.value.removeEventListener("wheel", je));
  }), {
    intersects: r,
    onClick: (m) => h2.on(m).off,
    onDblClick: (m) => g.on(m).off,
    onContextMenu: (m) => T.on(m).off,
    onPointerMove: (m) => d.on(m).off,
    onPointerUp: (m) => _.on(m).off,
    onPointerDown: (m) => P.on(m).off,
    onPointerMissed: (m) => C.on(m).off,
    onWheel: (m) => b.on(m).off,
    forceUpdate: w
  };
};
function _e$1(e, t) {
  if (Array.isArray(e))
    for (const n of e)
      n(t);
  typeof e == "function" && e(t);
}
function _r(e, t, n) {
  var A;
  const r = shallowRef(), s = shallowRef();
  e && (r.value = e), t && (s.value = t);
  const l = (p) => {
    var w;
    return ((w = p.__tres) == null ? void 0 : w.eventCount) > 0;
  }, i = (p) => {
    var w;
    return ((w = p.children) == null ? void 0 : w.some((k) => i(k))) || l(p);
  }, a = shallowRef(((A = r.value) == null ? void 0 : A.children).filter(i) || []);
  function c(p, w) {
    const k = [], L = () => w.stopPropagating = true;
    w.stopPropagation = L;
    for (const R of w == null ? void 0 : w.intersections) {
      if (w.stopPropagating)
        return;
      w = { ...w, ...R };
      const { object: j } = R;
      w.eventObject = j, _e$1(j[p], w), k.push(j);
      let O = j.parent;
      for (; O !== null && !w.stopPropagating && !k.includes(O); )
        w.eventObject = O, _e$1(O[p], w), k.push(O), O = O.parent;
      const Y = Vn(p.slice(2));
      n(Y, { intersection: R, event: w });
    }
  }
  const {
    onClick: o,
    onDblClick: f,
    onContextMenu: y,
    onPointerMove: u,
    onPointerDown: v,
    onPointerUp: h2,
    onPointerMissed: g,
    onWheel: d,
    forceUpdate: _
  } = yr(a, t);
  h2((p) => c("onPointerUp", p)), v((p) => c("onPointerDown", p)), o((p) => c("onClick", p)), f((p) => c("onDoubleClick", p)), y((p) => c("onContextMenu", p)), d((p) => c("onWheel", p));
  let P = [];
  u((p) => {
    const w = p.intersections.map(({ object: L }) => L), k = p.intersections;
    P.forEach(({ object: L }) => {
      w.includes(L) || (p.intersections = P, c("onPointerLeave", p), c("onPointerOut", p));
    }), p.intersections = k, p.intersections.forEach(({ object: L }) => {
      P.includes(L) || (c("onPointerEnter", p), c("onPointerOver", p));
    }), c("onPointerMove", p), P = p.intersections;
  });
  const C = [];
  g((p) => {
    const w = () => p.stopPropagating = true;
    p.stopPropagation = w, C.forEach((k) => {
      p.stopPropagating || (p.eventObject = k, _e$1(k.onPointerMissed, p));
    }), n("pointer-missed", { event: p });
  });
  function T(p) {
    re(p) && N(p) && a.value.push(p);
  }
  function b(p) {
    if (re(p) && N(p)) {
      const w = a.value.indexOf(p);
      w > -1 && a.value.splice(w, 1);
    }
  }
  function E(p) {
    re(p) && N(p) && p.onPointerMissed && C.push(p);
  }
  function M(p) {
    if (re(p) && N(p)) {
      const w = C.indexOf(p);
      w > -1 && C.splice(w, 1);
    }
  }
  return t.eventManager = {
    forceUpdate: _,
    registerObject: T,
    deregisterObject: b,
    registerPointerMissedObject: E,
    deregisterPointerMissedObject: M
  }, {
    forceUpdate: _,
    registerObject: T,
    deregisterObject: b,
    registerPointerMissedObject: E,
    deregisterPointerMissedObject: M
  };
}
function wr(e, t, n = 100) {
  n = n <= 0 ? 100 : n;
  const r = createEventHook(), s = /* @__PURE__ */ new Set();
  let l = false, i = false, a = null;
  function c() {
    a && clearTimeout(a), !i && !l && e() ? (r.trigger(t), s.forEach((u) => u()), s.clear(), l = true) : !i && !l && (a = setTimeout(c, n));
  }
  function o() {
    i = true, a && clearTimeout(a);
  }
  c();
  const f = (u, ...v) => {
    u(...v);
  };
  return {
    on: (u) => {
      if (l)
        return f(u, t), { off: () => {
        } };
      {
        const v = r.on(u);
        return s.add(v.off), r.on(u);
      }
    },
    off: r.off,
    trigger: r.trigger,
    cancel: o
  };
}
const ee = /* @__PURE__ */ new WeakMap();
function yt(e) {
  if (e = e || me(), ee.has(e))
    return ee.get(e);
  const t = 100, n = Date.now(), l = wr(() => {
    if (Date.now() - n >= t)
      return true;
    {
      const i = e.renderer.value, a = (i == null ? void 0 : i.domElement) || { width: 0, height: 0 };
      return !!(i && a.width > 0 && a.height > 0);
    }
  }, e);
  return ee.set(e, l), l;
}
function br({
  scene: e,
  canvas: t,
  windowSize: n,
  rendererOptions: r,
  emit: s
}) {
  const l = shallowRef(e), i = vr(n, t), {
    camera: a,
    cameras: c,
    registerCamera: o,
    deregisterCamera: f,
    setCameraActive: y
  } = ar$1({ sizes: i }), u = {
    mode: ref(r.renderMode || "always"),
    priority: ref(0),
    frames: ref(0),
    maxFrames: 60,
    canBeInvalidated: computed(() => u.mode.value === "on-demand" && u.frames.value === 0)
  };
  function v(R = 1) {
    r.renderMode === "on-demand" && (u.frames.value = Math.min(u.maxFrames, u.frames.value + R));
  }
  function h2() {
    r.renderMode === "manual" && (u.frames.value = 1);
  }
  const { renderer: g } = gr(
    {
      canvas: t,
      options: r,
      // TODO: replace contextParts with full ctx at https://github.com/Tresjs/tres/issues/516
      contextParts: { sizes: i, render: u, invalidate: v, advance: h2 }
    }
  ), d = {
    sizes: i,
    scene: l,
    camera: a,
    cameras: readonly(c),
    renderer: g,
    raycaster: shallowRef(new Raycaster()),
    controls: ref(null),
    perf: {
      maxFrames: 160,
      fps: {
        value: 0,
        accumulator: []
      },
      memory: {
        currentMem: 0,
        allocatedMem: 0,
        accumulator: []
      }
    },
    render: u,
    advance: h2,
    extend: Ee,
    invalidate: v,
    registerCamera: o,
    setCameraActive: y,
    deregisterCamera: f,
    loop: dr$1()
  };
  provide("useTres", d), d.scene.value.__tres = {
    root: d
  }, d.loop.register(() => {
    a.value && u.frames.value > 0 && (g.value.render(e, a.value), s("render", d.renderer.value)), u.priority.value = 0, u.mode.value === "always" ? u.frames.value = 1 : u.frames.value = Math.max(0, u.frames.value - 1);
  }, "render");
  const { on: _, cancel: P } = yt(d);
  d.loop.setReady(false), d.loop.start(), _(() => {
    s("ready", d), d.loop.setReady(true), _r(e, d, s);
  }), onUnmounted(() => {
    P(), d.loop.stop();
  });
  const C = 100, T = useFps({ every: C }), { isSupported: b, memory: E } = useMemory({ interval: C }), M = 160;
  let A = performance.now();
  const p = ({ timestamp: R }) => {
    d.scene.value && (d.perf.memory.allocatedMem = ke(d.scene.value)), R - A >= C && (A = R, d.perf.fps.accumulator.push(T.value), d.perf.fps.accumulator.length > M && d.perf.fps.accumulator.shift(), d.perf.fps.value = T.value, b.value && E.value && (d.perf.memory.accumulator.push(E.value.usedJSHeapSize / 1024 / 1024), d.perf.memory.accumulator.length > M && d.perf.memory.accumulator.shift(), d.perf.memory.currentMem = d.perf.memory.accumulator.reduce((j, O) => j + O, 0) / d.perf.memory.accumulator.length));
  };
  let w = 0;
  const k = 1, { pause: L } = useRafFn(({ delta: R }) => {
    (void 0).__TRES__DEVTOOLS__ && (p({ timestamp: performance.now() }), w += R, w >= k && ((void 0).__TRES__DEVTOOLS__.cb(d), w = 0));
  }, { immediate: true });
  return onUnmounted(() => {
    L();
  }), d;
}
function me() {
  const e = inject("useTres");
  if (!e)
    throw new Error("useTresContext must be used together with useTresContextProvider");
  return e;
}
const Xr$1 = me;
function Zr$1() {
  const {
    camera: e,
    scene: t,
    renderer: n,
    loop: r,
    raycaster: s,
    controls: l,
    invalidate: i,
    advance: a
  } = me();
  r.setContext({
    camera: e,
    scene: t,
    renderer: n,
    raycaster: s,
    controls: l,
    invalidate: i,
    advance: a
  });
  function c(y, u = 0) {
    return r.register(y, "before", u);
  }
  function o(y) {
    return r.register(y, "render");
  }
  function f(y, u = 0) {
    return r.register(y, "after", u);
  }
  return {
    pause: r.pause,
    resume: r.resume,
    pauseRender: r.pauseRender,
    resumeRender: r.resumeRender,
    isActive: r.isActive,
    onBeforeRender: c,
    render: o,
    onAfterRender: f
  };
}
const _t = createEventHook(), wt = createEventHook(), Le = createEventHook(), te = new Clock();
let ce = 0, ue = 0;
useRafFn(
  () => {
    _t.trigger({ delta: ce, elapsed: ue, clock: te }), wt.trigger({ delta: ce, elapsed: ue, clock: te }), Le.trigger({ delta: ce, elapsed: ue, clock: te });
  },
  { immediate: false }
);
Le.on(() => {
  ce = te.getDelta(), ue = te.getElapsedTime();
});
function Cr(e, t = {}, n = {}) {
  let r = e;
  const s = (a) => {
    r = a;
  };
  let l = new Proxy({}, {});
  const i = {
    has(a, c) {
      return c in t || c in r;
    },
    get(a, c, o) {
      return c in t ? t[c](r) : r[c];
    },
    set(a, c, o) {
      return n[c] ? n[c](o, r, l, s) : r[c] = o, true;
    }
  };
  return l = new Proxy({}, i), l;
}
const { logError: Xe$1 } = V(), Ze$1 = [
  "onClick",
  "onContextMenu",
  "onPointerMove",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  "onDoubleClick",
  "onPointerDown",
  "onPointerUp",
  "onPointerCancel",
  "onPointerMissed",
  "onLostPointerCapture",
  "onWheel"
], Er = (e) => {
  const t = e.scene.value;
  function n(o, f, y, u) {
    if (u || (u = {}), u.args || (u.args = []), o === "template" || zn(o))
      return null;
    let v = o.replace("Tres", ""), h2;
    if (o === "primitive") {
      (!H(u.object) || isRef(u.object)) && Xe$1(
        "Tres primitives need an 'object' prop, whose value is an object or shallowRef<object>"
      ), v = u.object.type;
      const g = {};
      h2 = Cr(
        u.object,
        {
          object: (_) => _,
          isPrimitive: () => true,
          __tres: () => g
        },
        {
          object: (_, P, C, T) => {
            sr$1(_, C, T, { patchProp: l, remove: s, insert: r }, e);
          },
          __tres: (_) => {
            Object.assign(g, _);
          }
        }
      );
    } else {
      const g = Ce.value[v];
      g || Xe$1(
        `${v} is not defined on the THREE namespace. Use extend to add it to the catalog.`
      ), h2 = new g(...u.args);
    }
    return h2 ? (h2.isCamera && (u != null && u.position || h2.position.set(3, 3, 3), u != null && u.lookAt || h2.lookAt(0, 0, 0)), h2 = z(h2, {
      ...h2.__tres,
      type: v,
      memoizedProps: u,
      eventCount: 0,
      primitive: o === "primitive",
      attach: u.attach
    }, e), h2) : null;
  }
  function r(o, f) {
    var v, h2, g;
    if (!o)
      return;
    f = f || t;
    const y = o.__tres ? o : z(o, {}, e), u = f.__tres ? f : z(f, {}, e);
    o = Q(y), f = Q(u), o.__tres && ((v = o.__tres) == null ? void 0 : v.eventCount) > 0 && ((h2 = e.eventManager) == null || h2.registerObject(o)), e.registerCamera(o), (g = e.eventManager) == null || g.registerPointerMissedObject(o), y.__tres.attach ? nr$1(u, y, y.__tres.attach) : N(o) && N(u) && (u.add(o), o.dispatchEvent({ type: "added" })), y.__tres.parent = u, u.__tres.objects && !u.__tres.objects.includes(y) && u.__tres.objects.push(y);
  }
  function s(o, f) {
    var h2, g, d, _;
    if (!o)
      return;
    o != null && o.__tres && ((h2 = o.__tres) == null ? void 0 : h2.eventCount) > 0 && ((g = e.eventManager) == null || g.deregisterObject(o)), f = Me$1(f) ? "default" : f;
    const y = (d = o.__tres) == null ? void 0 : d.dispose;
    Me$1(y) || (y === null ? f = false : f = y);
    const u = (_ = o.__tres) == null ? void 0 : _.primitive, v = f === "default" ? !u : !!f;
    if (o.__tres && "objects" in o.__tres && [...o.__tres.objects].forEach((P) => s(P, f)), v && o.children && [...o.children].forEach((P) => s(P, f)), gt(o, e), vt(o, e), v && !Fn$1(o)) {
      if (G(f))
        f(o);
      else if (G(o.dispose))
        try {
          o.dispose();
        } catch {
        }
    }
    "__tres" in o && delete o.__tres;
  }
  function l(o, f, y, u) {
    var P, C;
    if (!o)
      return;
    let v = o, h2 = f;
    if (o.__tres && (o.__tres.memoizedProps[f] = u), f === "attach") {
      const T = ((P = o.__tres) == null ? void 0 : P.parent) || o.parent;
      s(o), z(o, { attach: u }, e), T && r(o, T);
      return;
    }
    if (f === "dispose") {
      o.__tres || (o = z(o, {}, e)), o.__tres.dispose = u;
      return;
    }
    if (N(o) && h2 === "blocks-pointer-events") {
      u || u === "" ? o[h2] = u : delete o[h2];
      return;
    }
    Ze$1.includes(f) && o.__tres && (o.__tres.eventCount += 1);
    let g = oe(h2), d = v == null ? void 0 : v[g];
    if (h2 === "args") {
      const T = o, b = y ?? [], E = u ?? [], M = ((C = o.__tres) == null ? void 0 : C.type) || o.type;
      M && b.length && !Kn(b, E) && (v = Object.assign(
        T,
        new Ce.value[M](...u)
      ));
      return;
    }
    if (v.type === "BufferGeometry") {
      if (h2 === "args")
        return;
      v.setAttribute(
        oe(h2),
        new BufferAttribute(...u)
      );
      return;
    }
    if (h2.includes("-") && d === void 0) {
      const T = h2.split("-");
      d = T.reduce((b, E) => b[oe(E)], v), h2 = T.pop(), g = h2, d != null && d.set || (v = T.reduce((b, E) => b[oe(E)], v));
    }
    let _ = u;
    if (_ === "" && (_ = true), G(d)) {
      Ze$1.includes(f) || (de(_) ? o[g](..._) : o[g](_)), g.startsWith("on") && G(_) && (v[g] = _);
      return;
    }
    !(d != null && d.set) && !G(d) ? v[g] = _ : d.constructor === _.constructor && (d != null && d.copy) ? d == null || d.copy(_) : de(_) ? d.set(..._) : !d.isColor && d.setScalar ? d.setScalar(_) : d.set(_), ht(o);
  }
  function i(o) {
    var f;
    return ((f = o == null ? void 0 : o.__tres) == null ? void 0 : f.parent) || null;
  }
  function a(o) {
    const f = z(new Object3D(), { type: "Comment" }, e);
    return f.name = o, f;
  }
  function c(o) {
    var v;
    const f = i(o), y = ((v = f == null ? void 0 : f.__tres) == null ? void 0 : v.objects) || [], u = y.indexOf(o);
    return u < 0 || u >= y.length - 1 ? null : y[u + 1];
  }
  return {
    insert: r,
    remove: s,
    createElement: n,
    patchProp: l,
    parentNode: i,
    createText: () => void 0,
    createComment: a,
    setText: () => void 0,
    setElementText: () => void 0,
    nextSibling: c,
    querySelector: () => void 0,
    setScopeId: () => void 0,
    cloneNode: () => void 0,
    insertStaticContent: () => void 0
  };
};
reactive({
  sceneGraph: null
});
const $r$1 = ["data-scene", "data-tres"], Hr = /* @__PURE__ */ defineComponent({
  __name: "TresCanvas",
  props: {
    shadows: { type: Boolean, default: void 0 },
    clearColor: {},
    toneMapping: {},
    shadowMapType: {},
    useLegacyLights: { type: Boolean, default: void 0 },
    outputColorSpace: {},
    toneMappingExposure: {},
    renderMode: { default: "always" },
    dpr: {},
    camera: {},
    preset: {},
    windowSize: { type: Boolean, default: void 0 },
    enableProvideBridge: { type: Boolean, default: true },
    context: {},
    alpha: { type: Boolean, default: void 0 },
    premultipliedAlpha: { type: Boolean },
    antialias: { type: Boolean, default: void 0 },
    stencil: { type: Boolean, default: void 0 },
    preserveDrawingBuffer: { type: Boolean, default: void 0 },
    powerPreference: {},
    depth: { type: Boolean, default: void 0 },
    failIfMajorPerformanceCaveat: { type: Boolean, default: void 0 },
    precision: {},
    logarithmicDepthBuffer: { type: Boolean, default: void 0 },
    reverseDepthBuffer: { type: Boolean }
  },
  emits: [
    "render",
    "click",
    "double-click",
    "context-menu",
    "pointer-move",
    "pointer-up",
    "pointer-down",
    "pointer-enter",
    "pointer-leave",
    "pointer-over",
    "pointer-out",
    "pointer-missed",
    "wheel",
    "ready"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, s = n, l = useSlots(), { logWarning: i } = V(), a = ref(), c = shallowRef(new Scene()), o = getCurrentInstance();
    Ee(Jn);
    const f = (g, d = false) => defineComponent({
      setup() {
        var T;
        const _ = (T = getCurrentInstance()) == null ? void 0 : T.appContext;
        _ && (_.app = o == null ? void 0 : o.appContext.app);
        const P = {};
        function C(b) {
          b && (b.parent && C(b.parent), b.provides && Object.assign(P, b.provides));
        }
        return o != null && o.parent && r.enableProvideBridge && (C(o.parent), Reflect.ownKeys(P).forEach((b) => {
          provide(b, P[b]);
        })), provide("useTres", g), provide("extend", Ee), () => h(Fragment, null, d ? [] : l.default());
      }
    }), y = (g, d = false) => {
      const _ = f(g, d), { render: P } = createRenderer(Er(g));
      P(h(_), c.value);
    }, u = (g, d = false) => {
      mt(g.scene.value), d && (g.renderer.value.dispose(), g.renderer.value.renderLists.dispose(), g.renderer.value.forceContextLoss()), c.value.__tres = {
        root: g
      };
    }, v = shallowRef(null);
    t({ context: v, dispose: () => u(v.value, true) });
    const h$1 = () => {
      u(v.value), y(v.value, true);
    };
    return onMounted(() => {
      const g = a;
      v.value = br({
        scene: c.value,
        canvas: g,
        windowSize: r.windowSize ?? false,
        rendererOptions: r,
        emit: s
      });
      const { registerCamera: d, camera: _, cameras: P, deregisterCamera: C } = v.value;
      y(v.value);
      const T = () => {
        const b = new PerspectiveCamera(
          45,
          (void 0).innerWidth / (void 0).innerHeight,
          0.1,
          1e3
        );
        b.position.set(3, 3, 3), b.lookAt(0, 0, 0), d(b);
        const E = watchEffect(() => {
          P.value.length >= 2 && (b.removeFromParent(), C(b), E == null || E());
        });
      };
      watch(
        () => r.camera,
        (b, E) => {
          b && d(b), E && (E.removeFromParent(), C(E));
        },
        {
          immediate: true
        }
      ), _.value || (i(
        "No camera found. Creating a default perspective camera. To have full control over a camera, please add one to the scene."
      ), T());
    }), onUnmounted(h$1), (g, d) => (openBlock(), createElementBlock("canvas", {
      ref_key: "canvas",
      ref: a,
      "data-scene": c.value.uuid,
      class: normalizeClass(g.$attrs.class),
      "data-tres": `tresjs ${unref(Rn).version}`,
      style: normalizeStyle({
        display: "block",
        width: "100%",
        height: "100%",
        position: g.windowSize ? "fixed" : "relative",
        top: 0,
        left: 0,
        pointerEvents: "auto",
        touchAction: "none",
        ...g.$attrs.style
      })
    }, null, 14, $r$1));
  }
});
var Ml = Object.defineProperty;
var Sl = (r, e, t) => e in r ? Ml(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
var pe = (r, e, t) => Sl(r, typeof e != "symbol" ? e + "" : e, t);
function ci(r) {
  return getCurrentScope() ? (onScopeDispose(r), true) : false;
}
function ct(r) {
  return typeof r == "function" ? r() : unref(r);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Fc = Object.prototype.toString, zc = (r) => Fc.call(r) === "[object Object]", wn = () => {
};
const ln = void 0;
function gn(r) {
  var e;
  const t = ct(r);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
function Xe(...r) {
  let e, t, n, s;
  if (typeof r[0] == "string" || Array.isArray(r[0]) ? ([t, n, s] = r, e = ln) : [e, t, n, s] = r, !e)
    return wn;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const i = [], o = () => {
    i.forEach((f) => f()), i.length = 0;
  }, a = (f, u, d, h2) => (f.addEventListener(u, d, h2), () => f.removeEventListener(u, d, h2)), l = watch(
    () => [gn(e), ct(s)],
    ([f, u]) => {
      if (o(), !f)
        return;
      const d = zc(u) ? { ...u } : u;
      i.push(
        ...t.flatMap((h2) => n.map((m) => a(f, h2, m, d)))
      );
    },
    { immediate: true, flush: "post" }
  ), c = () => {
    l(), o();
  };
  return ci(c), c;
}
defineComponent({
  name: "GlobalAudio",
  props: [
    "src",
    "loop",
    "volume",
    "playbackRate",
    "playTrigger",
    "stopTrigger"
  ],
  async setup(r, { expose: e, emit: t }) {
    var u;
    const { camera: n, renderer: s } = me(), i = new AudioListener();
    (u = n.value) == null || u.add(i);
    const o = new Audio(i), a = new AudioLoader();
    e({ instance: o }), onUnmounted(() => {
      o && o.disconnect();
    }), watch(() => [r.playbackRate], () => o.setPlaybackRate(r.playbackRate ?? 1), { immediate: true }), watch(() => [r.volume], () => o.setVolume(r.volume ?? 0.5), { immediate: true }), watch(() => [r.loop], () => o.setLoop(r.loop ?? false), { immediate: true }), watch(() => [r.src], async () => {
      const d = await a.loadAsync(r.src);
      o.setBuffer(d);
    }, { immediate: true });
    const c = (void 0).getElementById(r.playTrigger ?? "") || s.value.domElement;
    Xe(c, "click", () => {
      o.isPlaying ? o.pause() : o.play(), t("isPlaying", o.isPlaying);
    });
    const f = (void 0).getElementById(r.stopTrigger ?? "");
    return f && Xe(f, "click", () => {
      o.stop(), t("isPlaying", o.isPlaying);
    }), null;
  }
});
function No(r, e, t, n) {
  const s = class extends ShaderMaterial {
    constructor(o = {}) {
      const a = Object.entries(r);
      super({
        uniforms: a.reduce((l, [c, f]) => {
          const u = UniformsUtils.clone({ [c]: { value: f } });
          return {
            ...l,
            ...u
          };
        }, {}),
        vertexShader: e,
        fragmentShader: t
      });
      pe(this, "key", "");
      a.forEach(
        ([l]) => Object.defineProperty(this, l, {
          get: () => this.uniforms[l].value,
          set: (c) => this.uniforms[l].value = c
        })
      ), Object.assign(this, o);
    }
  };
  return s.key = MathUtils.generateUUID(), s;
}
No(
  {
    color: /* @__PURE__ */ new Color("white"),
    scale: /* @__PURE__ */ new Vector2(1, 1),
    imageBounds: /* @__PURE__ */ new Vector2(1, 1),
    resolution: 1024,
    map: null,
    zoom: 1,
    radius: 0,
    grayscale: 0,
    opacity: 1
  },
  /* glsl */
  `
    varying vec2 vUv;
    varying vec2 vPos;
    void main() {
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
      vUv = uv;
      vPos = position.xy;
    }
  `,
  /* glsl */
  `
    // mostly from https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44
    varying vec2 vUv;
    varying vec2 vPos;
    uniform vec2 scale;
    uniform vec2 imageBounds;
    uniform float resolution;
    uniform vec3 color;
    uniform sampler2D map;
    uniform float radius;
    uniform float zoom;
    uniform float grayscale;
    uniform float opacity;
    const vec3 luma = vec3(.299, 0.587, 0.114);
    vec4 toGrayscale(vec4 color, float intensity) {
      return vec4(mix(color.rgb, vec3(dot(color.rgb, luma)), intensity), color.a);
    }
    vec2 aspect(vec2 size) {
      return size / min(size.x, size.y);
    }
    
    const float PI = 3.14159265;
      
    // from https://iquilezles.org/articles/distfunctions
    float udRoundBox( vec2 p, vec2 b, float r ) {
      return length(max(abs(p)-b+r,0.0))-r;
    }
  
    void main() {
      vec2 s = aspect(scale);
      vec2 i = aspect(imageBounds);
      float rs = s.x / s.y;
      float ri = i.x / i.y;
      vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
      vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
      vec2 uv = vUv * s / new + offset;
      vec2 zUv = (uv - vec2(0.5, 0.5)) / zoom + vec2(0.5, 0.5);
  
      vec2 res = vec2(scale * resolution);
      vec2 halfRes = 0.5 * res;
      float b = udRoundBox(vUv.xy * res - halfRes, halfRes, resolution * radius);    
        vec3 a = mix(vec3(1.0,0.0,0.0), vec3(0.0,0.0,0.0), smoothstep(0.0, 1.0, b));
      gl_FragColor = toGrayscale(texture2D(map, zUv) * vec4(color, opacity * a), grayscale);
      
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `
);
const Ss = parseInt(REVISION.replace(/\D+/g, ""));
function er(r, e) {
  if (e === TrianglesDrawMode)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === TriangleFanDrawMode || e === TriangleStripDrawMode) {
    let t = r.getIndex();
    if (t === null) {
      const o = [], a = r.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++)
          o.push(l);
        r.setIndex(o), t = r.getIndex();
      } else
        return console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        ), r;
    }
    const n = t.count - 2, s = [];
    if (t)
      if (e === TriangleFanDrawMode)
        for (let o = 1; o <= n; o++)
          s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
      else
        for (let o = 0; o < n; o++)
          o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
    s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = r.clone();
    return i.setIndex(s), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
var fu = Object.defineProperty, du = (r, e, t) => e in r ? fu(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, pu = (r, e, t) => (du(r, e + "", t), t);
async function tr(r) {
  const e = await r.arrayBuffer(), t = btoa(String.fromCharCode(...new Uint8Array(e)));
  return `data:${r.type || ""};base64,${t}`;
}
let Bs, bi, Fn, Us;
function Ei(r, e = 1 / 0, t = null) {
  bi || (bi = new PlaneGeometry(2, 2, 1, 1)), Fn || (Fn = new ShaderMaterial({
    uniforms: { blitTexture: new Uniform(r) },
    vertexShader: (
      /* glsl */
      `
        varying vec2 vUv;
        void main(){
            vUv = uv;
            gl_Position = vec4(position.xy * 1.0,0.,.999999);
        }
      `
    ),
    fragmentShader: (
      /* glsl */
      `
          uniform sampler2D blitTexture; 
          varying vec2 vUv;

          void main(){ 
              gl_FragColor = vec4(vUv.xy, 0, 1);
              
              #ifdef IS_SRGB
              gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
              #else
              gl_FragColor = texture2D( blitTexture, vUv);
              #endif
          }
      `
    )
  })), Fn.uniforms.blitTexture.value = r, Fn.defines.IS_SRGB = "colorSpace" in r ? r.colorSpace === "srgb" : r.encoding === 3001, Fn.needsUpdate = true, Us || (Us = new Mesh(bi, Fn), Us.frustrumCulled = false);
  const n = new PerspectiveCamera(), s = new Scene();
  s.add(Us), t || (t = Bs = new WebGLRenderer({ antialias: false })), t.setSize(Math.min(r.image.width, e), Math.min(r.image.height, e)), t.clear(), t.render(s, n);
  const i = new Texture(t.domElement);
  return i.minFilter = r.minFilter, i.magFilter = r.magFilter, i.wrapS = r.wrapS, i.wrapT = r.wrapT, i.name = r.name, Bs && (Bs.dispose(), Bs = null), i;
}
const nr = {
  POSITION: [
    "byte",
    "byte normalized",
    "unsigned byte",
    "unsigned byte normalized",
    "short",
    "short normalized",
    "unsigned short",
    "unsigned short normalized"
  ],
  NORMAL: ["byte normalized", "short normalized"],
  TANGENT: ["byte normalized", "short normalized"],
  TEXCOORD: ["byte", "byte normalized", "unsigned byte", "short", "short normalized", "unsigned short"]
};
class Uo {
  constructor() {
    this.pluginCallbacks = [], this.register(function(e) {
      return new Eu(e);
    }), this.register(function(e) {
      return new Mu(e);
    }), this.register(function(e) {
      return new Pu(e);
    }), this.register(function(e) {
      return new Ru(e);
    }), this.register(function(e) {
      return new Cu(e);
    }), this.register(function(e) {
      return new Iu(e);
    }), this.register(function(e) {
      return new Su(e);
    }), this.register(function(e) {
      return new Au(e);
    }), this.register(function(e) {
      return new Ou(e);
    }), this.register(function(e) {
      return new Du(e);
    }), this.register(function(e) {
      return new Lu(e);
    });
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  /**
   * Parse scenes and generate GLTF output
   * @param  {Scene or [THREE.Scenes]} input   Scene or Array of THREE.Scenes
   * @param  {Function} onDone  Callback on completed
   * @param  {Function} onError  Callback on errors
   * @param  {Object} options options
   */
  parse(e, t, n, s) {
    const i = new bu(), o = [];
    for (let a = 0, l = this.pluginCallbacks.length; a < l; a++)
      o.push(this.pluginCallbacks[a](i));
    i.setPlugins(o), i.write(e, t, s).catch(n);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, i) {
      n.parse(e, s, i, t);
    });
  }
}
pu(Uo, "Utils", {
  insertKeyframe: function(r, e) {
    const n = r.getValueSize(), s = new r.TimeBufferType(r.times.length + 1), i = new r.ValueBufferType(r.values.length + n), o = r.createInterpolant(new r.ValueBufferType(n));
    let a;
    if (r.times.length === 0) {
      s[0] = e;
      for (let l = 0; l < n; l++)
        i[l] = 0;
      a = 0;
    } else if (e < r.times[0]) {
      if (Math.abs(r.times[0] - e) < 1e-3)
        return 0;
      s[0] = e, s.set(r.times, 1), i.set(o.evaluate(e), 0), i.set(r.values, n), a = 0;
    } else if (e > r.times[r.times.length - 1]) {
      if (Math.abs(r.times[r.times.length - 1] - e) < 1e-3)
        return r.times.length - 1;
      s[s.length - 1] = e, s.set(r.times, 0), i.set(r.values, 0), i.set(o.evaluate(e), r.values.length), a = s.length - 1;
    } else
      for (let l = 0; l < r.times.length; l++) {
        if (Math.abs(r.times[l] - e) < 1e-3)
          return l;
        if (r.times[l] < e && r.times[l + 1] > e) {
          s.set(r.times.slice(0, l + 1), 0), s[l + 1] = e, s.set(r.times.slice(l + 1), l + 2), i.set(r.values.slice(0, (l + 1) * n), 0), i.set(o.evaluate(e), (l + 1) * n), i.set(r.values.slice((l + 1) * n), (l + 2) * n), a = l + 1;
          break;
        }
      }
    return r.times = s, r.values = i, a;
  },
  mergeMorphTargetTracks: function(r, e) {
    const t = [], n = {}, s = r.tracks;
    for (let i = 0; i < s.length; ++i) {
      let o = s[i];
      const a = PropertyBinding.parseTrackName(o.name), l = PropertyBinding.findNode(e, a.nodeName);
      if (a.propertyName !== "morphTargetInfluences" || a.propertyIndex === void 0) {
        t.push(o);
        continue;
      }
      if (o.createInterpolant !== o.InterpolantFactoryMethodDiscrete && o.createInterpolant !== o.InterpolantFactoryMethodLinear) {
        if (o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)
          throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");
        console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."), o = o.clone(), o.setInterpolation(InterpolateLinear);
      }
      const c = l.morphTargetInfluences.length, f = l.morphTargetDictionary[a.propertyIndex];
      if (f === void 0)
        throw new Error("THREE.GLTFExporter: Morph target name not found: " + a.propertyIndex);
      let u;
      if (n[l.uuid] === void 0) {
        u = o.clone();
        const h2 = new u.ValueBufferType(c * u.times.length);
        for (let m = 0; m < u.times.length; m++)
          h2[m * c + f] = u.values[m];
        u.name = (a.nodeName || "") + ".morphTargetInfluences", u.values = h2, n[l.uuid] = u, t.push(u);
        continue;
      }
      const d = o.createInterpolant(new o.ValueBufferType(1));
      u = n[l.uuid];
      for (let h2 = 0; h2 < u.times.length; h2++)
        u.values[h2 * c + f] = d.evaluate(u.times[h2]);
      for (let h2 = 0; h2 < o.times.length; h2++) {
        const m = this.insertKeyframe(u, o.times[h2]);
        u.values[m * c + f] = o.values[h2];
      }
    }
    return r.tracks = t, r;
  }
});
const De = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  BYTE: 5120,
  UNSIGNED_BYTE: 5121,
  SHORT: 5122,
  UNSIGNED_SHORT: 5123,
  INT: 5124,
  UNSIGNED_INT: 5125,
  FLOAT: 5126,
  ARRAY_BUFFER: 34962,
  ELEMENT_ARRAY_BUFFER: 34963,
  NEAREST: 9728,
  LINEAR: 9729,
  NEAREST_MIPMAP_NEAREST: 9984,
  LINEAR_MIPMAP_NEAREST: 9985,
  NEAREST_MIPMAP_LINEAR: 9986,
  LINEAR_MIPMAP_LINEAR: 9987,
  CLAMP_TO_EDGE: 33071,
  MIRRORED_REPEAT: 33648,
  REPEAT: 10497
}, Mi = "KHR_mesh_quantization", Tt = {};
Tt[NearestFilter] = De.NEAREST;
Tt[NearestMipmapNearestFilter] = De.NEAREST_MIPMAP_NEAREST;
Tt[NearestMipmapLinearFilter] = De.NEAREST_MIPMAP_LINEAR;
Tt[LinearFilter] = De.LINEAR;
Tt[LinearMipmapNearestFilter] = De.LINEAR_MIPMAP_NEAREST;
Tt[LinearMipmapLinearFilter] = De.LINEAR_MIPMAP_LINEAR;
Tt[ClampToEdgeWrapping] = De.CLAMP_TO_EDGE;
Tt[RepeatWrapping] = De.REPEAT;
Tt[MirroredRepeatWrapping] = De.MIRRORED_REPEAT;
const sr = {
  scale: "scale",
  position: "translation",
  quaternion: "rotation",
  morphTargetInfluences: "weights"
}, mu = new Color(), ir = 12, gu = 1179937895, vu = 2, or = 8, yu = 1313821514, _u = 5130562;
function vs(r, e) {
  return r.length === e.length && r.every(function(t, n) {
    return t === e[n];
  });
}
function xu(r) {
  return new TextEncoder().encode(r).buffer;
}
function wu(r) {
  return vs(r.elements, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function Tu(r, e, t) {
  const n = {
    min: new Array(r.itemSize).fill(Number.POSITIVE_INFINITY),
    max: new Array(r.itemSize).fill(Number.NEGATIVE_INFINITY)
  };
  for (let s = e; s < e + t; s++)
    for (let i = 0; i < r.itemSize; i++) {
      let o;
      r.itemSize > 4 ? o = r.array[s * r.itemSize + i] : (i === 0 ? o = r.getX(s) : i === 1 ? o = r.getY(s) : i === 2 ? o = r.getZ(s) : i === 3 && (o = r.getW(s)), r.normalized === true && (o = MathUtils.normalize(o, r.array))), n.min[i] = Math.min(n.min[i], o), n.max[i] = Math.max(n.max[i], o);
    }
  return n;
}
function Ba(r) {
  return Math.ceil(r / 4) * 4;
}
function Si(r, e = 0) {
  const t = Ba(r.byteLength);
  if (t !== r.byteLength) {
    const n = new Uint8Array(t);
    if (n.set(new Uint8Array(r)), e !== 0)
      for (let s = r.byteLength; s < t; s++)
        n[s] = e;
    return n.buffer;
  }
  return r;
}
function rr() {
  return typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : (void 0).createElement("canvas");
}
function ar(r, e) {
  if (r.toBlob !== void 0)
    return new Promise((n) => r.toBlob(n, e));
  let t;
  return e === "image/jpeg" ? t = 0.92 : e === "image/webp" && (t = 0.8), r.convertToBlob({
    type: e,
    quality: t
  });
}
class bu {
  constructor() {
    this.plugins = [], this.options = {}, this.pending = [], this.buffers = [], this.byteOffset = 0, this.buffers = [], this.nodeMap = /* @__PURE__ */ new Map(), this.skins = [], this.extensionsUsed = {}, this.extensionsRequired = {}, this.uids = /* @__PURE__ */ new Map(), this.uid = 0, this.json = {
      asset: {
        version: "2.0",
        generator: "THREE.GLTFExporter"
      }
    }, this.cache = {
      meshes: /* @__PURE__ */ new Map(),
      attributes: /* @__PURE__ */ new Map(),
      attributesNormalized: /* @__PURE__ */ new Map(),
      materials: /* @__PURE__ */ new Map(),
      textures: /* @__PURE__ */ new Map(),
      images: /* @__PURE__ */ new Map()
    };
  }
  setPlugins(e) {
    this.plugins = e;
  }
  /**
   * Parse scenes and generate GLTF output
   * @param  {Scene or [THREE.Scenes]} input   Scene or Array of THREE.Scenes
   * @param  {Function} onDone  Callback on completed
   * @param  {Object} options options
   */
  async write(e, t, n = {}) {
    this.options = Object.assign(
      {
        // default options
        binary: false,
        trs: false,
        onlyVisible: true,
        maxTextureSize: 1 / 0,
        animations: [],
        includeCustomExtensions: false
      },
      n
    ), this.options.animations.length > 0 && (this.options.trs = true), this.processInput(e), await Promise.all(this.pending);
    const s = this, i = s.buffers, o = s.json;
    n = s.options;
    const a = s.extensionsUsed, l = s.extensionsRequired, c = new Blob(i, { type: "application/octet-stream" }), f = Object.keys(a), u = Object.keys(l);
    f.length > 0 && (o.extensionsUsed = f), u.length > 0 && (o.extensionsRequired = u), o.buffers && o.buffers.length > 0 && (o.buffers[0].byteLength = c.size), n.binary === true ? c.arrayBuffer().then((d) => {
      const h2 = Si(d), m = new DataView(new ArrayBuffer(or));
      m.setUint32(0, h2.byteLength, true), m.setUint32(4, _u, true);
      const g = Si(xu(JSON.stringify(o)), 32), v = new DataView(new ArrayBuffer(or));
      v.setUint32(0, g.byteLength, true), v.setUint32(4, yu, true);
      const p = new ArrayBuffer(ir), b = new DataView(p);
      b.setUint32(0, gu, true), b.setUint32(4, vu, true);
      const _ = ir + v.byteLength + g.byteLength + m.byteLength + h2.byteLength;
      b.setUint32(8, _, true), new Blob([p, v, g, m, h2], {
        type: "application/octet-stream"
      }).arrayBuffer().then(t);
    }) : o.buffers && o.buffers.length > 0 ? tr(c).then((d) => {
      o.buffers[0].uri = d, t(o);
    }) : t(o);
  }
  /**
   * Serializes a userData.
   *
   * @param {THREE.Object3D|THREE.Material} object
   * @param {Object} objectDef
   */
  serializeUserData(e, t) {
    if (Object.keys(e.userData).length === 0)
      return;
    const n = this.options, s = this.extensionsUsed;
    try {
      const i = JSON.parse(JSON.stringify(e.userData));
      if (n.includeCustomExtensions && i.gltfExtensions) {
        t.extensions === void 0 && (t.extensions = {});
        for (const o in i.gltfExtensions)
          t.extensions[o] = i.gltfExtensions[o], s[o] = true;
        delete i.gltfExtensions;
      }
      Object.keys(i).length > 0 && (t.extras = i);
    } catch (i) {
      console.warn(
        "THREE.GLTFExporter: userData of '" + e.name + "' won't be serialized because of JSON.stringify error - " + i.message
      );
    }
  }
  /**
   * Returns ids for buffer attributes.
   * @param  {Object} object
   * @return {Integer}
   */
  getUID(e, t = false) {
    if (this.uids.has(e) === false) {
      const s = /* @__PURE__ */ new Map();
      s.set(true, this.uid++), s.set(false, this.uid++), this.uids.set(e, s);
    }
    return this.uids.get(e).get(t);
  }
  /**
   * Checks if normal attribute values are normalized.
   *
   * @param {BufferAttribute} normal
   * @returns {Boolean}
   */
  isNormalizedNormalAttribute(e) {
    if (this.cache.attributesNormalized.has(e))
      return false;
    const n = new Vector3();
    for (let s = 0, i = e.count; s < i; s++)
      if (Math.abs(n.fromBufferAttribute(e, s).length() - 1) > 5e-4)
        return false;
    return true;
  }
  /**
   * Creates normalized normal buffer attribute.
   *
   * @param {BufferAttribute} normal
   * @returns {BufferAttribute}
   *
   */
  createNormalizedNormalAttribute(e) {
    const t = this.cache;
    if (t.attributesNormalized.has(e))
      return t.attributesNormalized.get(e);
    const n = e.clone(), s = new Vector3();
    for (let i = 0, o = n.count; i < o; i++)
      s.fromBufferAttribute(n, i), s.x === 0 && s.y === 0 && s.z === 0 ? s.setX(1) : s.normalize(), n.setXYZ(i, s.x, s.y, s.z);
    return t.attributesNormalized.set(e, n), n;
  }
  /**
   * Applies a texture transform, if present, to the map definition. Requires
   * the KHR_texture_transform extension.
   *
   * @param {Object} mapDef
   * @param {THREE.Texture} texture
   */
  applyTextureTransform(e, t) {
    let n = false;
    const s = {};
    (t.offset.x !== 0 || t.offset.y !== 0) && (s.offset = t.offset.toArray(), n = true), t.rotation !== 0 && (s.rotation = t.rotation, n = true), (t.repeat.x !== 1 || t.repeat.y !== 1) && (s.scale = t.repeat.toArray(), n = true), n && (e.extensions = e.extensions || {}, e.extensions.KHR_texture_transform = s, this.extensionsUsed.KHR_texture_transform = true);
  }
  buildMetalRoughTexture(e, t) {
    if (e === t)
      return e;
    function n(h2) {
      return ("colorSpace" in h2 ? h2.colorSpace === "srgb" : h2.encoding === 3001) ? function(g) {
        return g < 0.04045 ? g * 0.0773993808 : Math.pow(g * 0.9478672986 + 0.0521327014, 2.4);
      } : function(g) {
        return g;
      };
    }
    console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."), e instanceof CompressedTexture && (e = Ei(e)), t instanceof CompressedTexture && (t = Ei(t));
    const s = e ? e.image : null, i = t ? t.image : null, o = Math.max(s ? s.width : 0, i ? i.width : 0), a = Math.max(s ? s.height : 0, i ? i.height : 0), l = rr();
    l.width = o, l.height = a;
    const c = l.getContext("2d");
    c.fillStyle = "#00ffff", c.fillRect(0, 0, o, a);
    const f = c.getImageData(0, 0, o, a);
    if (s) {
      c.drawImage(s, 0, 0, o, a);
      const h2 = n(e), m = c.getImageData(0, 0, o, a).data;
      for (let g = 2; g < m.length; g += 4)
        f.data[g] = h2(m[g] / 256) * 256;
    }
    if (i) {
      c.drawImage(i, 0, 0, o, a);
      const h2 = n(t), m = c.getImageData(0, 0, o, a).data;
      for (let g = 1; g < m.length; g += 4)
        f.data[g] = h2(m[g] / 256) * 256;
    }
    c.putImageData(f, 0, 0);
    const d = (e || t).clone();
    return d.source = new Texture(l).source, "colorSpace" in d ? d.colorSpace = "" : d.encoding = 3e3, d.channel = (e || t).channel, e && t && e.channel !== t.channel && console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."), d;
  }
  /**
   * Process a buffer to append to the default one.
   * @param  {ArrayBuffer} buffer
   * @return {Integer}
   */
  processBuffer(e) {
    const t = this.json, n = this.buffers;
    return t.buffers || (t.buffers = [{ byteLength: 0 }]), n.push(e), 0;
  }
  /**
   * Process and generate a BufferView
   * @param  {BufferAttribute} attribute
   * @param  {number} componentType
   * @param  {number} start
   * @param  {number} count
   * @param  {number} target (Optional) Target usage of the BufferView
   * @return {Object}
   */
  processBufferView(e, t, n, s, i) {
    const o = this.json;
    o.bufferViews || (o.bufferViews = []);
    let a;
    switch (t) {
      case De.BYTE:
      case De.UNSIGNED_BYTE:
        a = 1;
        break;
      case De.SHORT:
      case De.UNSIGNED_SHORT:
        a = 2;
        break;
      default:
        a = 4;
    }
    const l = Ba(s * e.itemSize * a), c = new DataView(new ArrayBuffer(l));
    let f = 0;
    for (let h2 = n; h2 < n + s; h2++)
      for (let m = 0; m < e.itemSize; m++) {
        let g;
        e.itemSize > 4 ? g = e.array[h2 * e.itemSize + m] : (m === 0 ? g = e.getX(h2) : m === 1 ? g = e.getY(h2) : m === 2 ? g = e.getZ(h2) : m === 3 && (g = e.getW(h2)), e.normalized === true && (g = MathUtils.normalize(g, e.array))), t === De.FLOAT ? c.setFloat32(f, g, true) : t === De.INT ? c.setInt32(f, g, true) : t === De.UNSIGNED_INT ? c.setUint32(f, g, true) : t === De.SHORT ? c.setInt16(f, g, true) : t === De.UNSIGNED_SHORT ? c.setUint16(f, g, true) : t === De.BYTE ? c.setInt8(f, g) : t === De.UNSIGNED_BYTE && c.setUint8(f, g), f += a;
      }
    const u = {
      buffer: this.processBuffer(c.buffer),
      byteOffset: this.byteOffset,
      byteLength: l
    };
    return i !== void 0 && (u.target = i), i === De.ARRAY_BUFFER && (u.byteStride = e.itemSize * a), this.byteOffset += l, o.bufferViews.push(u), {
      id: o.bufferViews.length - 1,
      byteLength: 0
    };
  }
  /**
   * Process and generate a BufferView from an image Blob.
   * @param {Blob} blob
   * @return {Promise<Integer>}
   */
  processBufferViewImage(e) {
    const t = this, n = t.json;
    return n.bufferViews || (n.bufferViews = []), e.arrayBuffer().then((s) => {
      const i = Si(s), o = {
        buffer: t.processBuffer(i),
        byteOffset: t.byteOffset,
        byteLength: i.byteLength
      };
      return t.byteOffset += i.byteLength, n.bufferViews.push(o) - 1;
    });
  }
  /**
   * Process attribute to generate an accessor
   * @param  {BufferAttribute} attribute Attribute to process
   * @param  {THREE.BufferGeometry} geometry (Optional) Geometry used for truncated draw range
   * @param  {Integer} start (Optional)
   * @param  {Integer} count (Optional)
   * @return {Integer|null} Index of the processed accessor on the "accessors" array
   */
  processAccessor(e, t, n, s) {
    const i = this.json, o = {
      1: "SCALAR",
      2: "VEC2",
      3: "VEC3",
      4: "VEC4",
      9: "MAT3",
      16: "MAT4"
    };
    let a;
    if (e.array.constructor === Float32Array)
      a = De.FLOAT;
    else if (e.array.constructor === Int32Array)
      a = De.INT;
    else if (e.array.constructor === Uint32Array)
      a = De.UNSIGNED_INT;
    else if (e.array.constructor === Int16Array)
      a = De.SHORT;
    else if (e.array.constructor === Uint16Array)
      a = De.UNSIGNED_SHORT;
    else if (e.array.constructor === Int8Array)
      a = De.BYTE;
    else if (e.array.constructor === Uint8Array)
      a = De.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.GLTFExporter: Unsupported bufferAttribute component type: " + e.array.constructor.name
      );
    if (n === void 0 && (n = 0), s === void 0 && (s = e.count), s === 0)
      return null;
    const l = Tu(e, n, s);
    let c;
    t !== void 0 && (c = e === t.index ? De.ELEMENT_ARRAY_BUFFER : De.ARRAY_BUFFER);
    const f = this.processBufferView(e, a, n, s, c), u = {
      bufferView: f.id,
      byteOffset: f.byteOffset,
      componentType: a,
      count: s,
      max: l.max,
      min: l.min,
      type: o[e.itemSize]
    };
    return e.normalized === true && (u.normalized = true), i.accessors || (i.accessors = []), i.accessors.push(u) - 1;
  }
  /**
   * Process image
   * @param  {Image} image to process
   * @param  {Integer} format of the image (RGBAFormat)
   * @param  {Boolean} flipY before writing out the image
   * @param  {String} mimeType export format
   * @return {Integer}     Index of the processed texture in the "images" array
   */
  processImage(e, t, n, s = "image/png") {
    if (e !== null) {
      const i = this, o = i.cache, a = i.json, l = i.options, c = i.pending;
      o.images.has(e) || o.images.set(e, {});
      const f = o.images.get(e), u = s + ":flipY/" + n.toString();
      if (f[u] !== void 0)
        return f[u];
      a.images || (a.images = []);
      const d = { mimeType: s }, h2 = rr();
      h2.width = Math.min(e.width, l.maxTextureSize), h2.height = Math.min(e.height, l.maxTextureSize);
      const m = h2.getContext("2d");
      if (n === true && (m.translate(0, h2.height), m.scale(1, -1)), e.data !== void 0) {
        t !== RGBAFormat && console.error("GLTFExporter: Only RGBAFormat is supported.", t), (e.width > l.maxTextureSize || e.height > l.maxTextureSize) && console.warn("GLTFExporter: Image size is bigger than maxTextureSize", e);
        const v = new Uint8ClampedArray(e.height * e.width * 4);
        for (let p = 0; p < v.length; p += 4)
          v[p + 0] = e.data[p + 0], v[p + 1] = e.data[p + 1], v[p + 2] = e.data[p + 2], v[p + 3] = e.data[p + 3];
        m.putImageData(new ImageData(v, e.width, e.height), 0, 0);
      } else
        m.drawImage(e, 0, 0, h2.width, h2.height);
      l.binary === true ? c.push(
        ar(h2, s).then((v) => i.processBufferViewImage(v)).then((v) => {
          d.bufferView = v;
        })
      ) : h2.toDataURL !== void 0 ? d.uri = h2.toDataURL(s) : c.push(
        ar(h2, s).then(tr).then((v) => {
          d.uri = v;
        })
      );
      const g = a.images.push(d) - 1;
      return f[u] = g, g;
    } else
      throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.");
  }
  /**
   * Process sampler
   * @param  {Texture} map Texture to process
   * @return {Integer}     Index of the processed texture in the "samplers" array
   */
  processSampler(e) {
    const t = this.json;
    t.samplers || (t.samplers = []);
    const n = {
      magFilter: Tt[e.magFilter],
      minFilter: Tt[e.minFilter],
      wrapS: Tt[e.wrapS],
      wrapT: Tt[e.wrapT]
    };
    return t.samplers.push(n) - 1;
  }
  /**
   * Process texture
   * @param  {Texture} map Map to process
   * @return {Integer} Index of the processed texture in the "textures" array
   */
  processTexture(e) {
    const n = this.options, s = this.cache, i = this.json;
    if (s.textures.has(e))
      return s.textures.get(e);
    i.textures || (i.textures = []), e instanceof CompressedTexture && (e = Ei(e, n.maxTextureSize));
    let o = e.userData.mimeType;
    o === "image/webp" && (o = "image/png");
    const a = {
      sampler: this.processSampler(e),
      source: this.processImage(e.image, e.format, e.flipY, o)
    };
    e.name && (a.name = e.name), this._invokeAll(function(c) {
      c.writeTexture && c.writeTexture(e, a);
    });
    const l = i.textures.push(a) - 1;
    return s.textures.set(e, l), l;
  }
  /**
   * Process material
   * @param  {THREE.Material} material Material to process
   * @return {Integer|null} Index of the processed material in the "materials" array
   */
  processMaterial(e) {
    const t = this.cache, n = this.json;
    if (t.materials.has(e))
      return t.materials.get(e);
    if (e.isShaderMaterial)
      return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."), null;
    n.materials || (n.materials = []);
    const s = { pbrMetallicRoughness: {} };
    e.isMeshStandardMaterial !== true && e.isMeshBasicMaterial !== true && console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");
    const i = e.color.toArray().concat([e.opacity]);
    if (vs(i, [1, 1, 1, 1]) || (s.pbrMetallicRoughness.baseColorFactor = i), e.isMeshStandardMaterial ? (s.pbrMetallicRoughness.metallicFactor = e.metalness, s.pbrMetallicRoughness.roughnessFactor = e.roughness) : (s.pbrMetallicRoughness.metallicFactor = 0.5, s.pbrMetallicRoughness.roughnessFactor = 0.5), e.metalnessMap || e.roughnessMap) {
      const a = this.buildMetalRoughTexture(e.metalnessMap, e.roughnessMap), l = {
        index: this.processTexture(a),
        channel: a.channel
      };
      this.applyTextureTransform(l, a), s.pbrMetallicRoughness.metallicRoughnessTexture = l;
    }
    if (e.map) {
      const a = {
        index: this.processTexture(e.map),
        texCoord: e.map.channel
      };
      this.applyTextureTransform(a, e.map), s.pbrMetallicRoughness.baseColorTexture = a;
    }
    if (e.emissive) {
      const a = e.emissive;
      if (Math.max(a.r, a.g, a.b) > 0 && (s.emissiveFactor = e.emissive.toArray()), e.emissiveMap) {
        const c = {
          index: this.processTexture(e.emissiveMap),
          texCoord: e.emissiveMap.channel
        };
        this.applyTextureTransform(c, e.emissiveMap), s.emissiveTexture = c;
      }
    }
    if (e.normalMap) {
      const a = {
        index: this.processTexture(e.normalMap),
        texCoord: e.normalMap.channel
      };
      e.normalScale && e.normalScale.x !== 1 && (a.scale = e.normalScale.x), this.applyTextureTransform(a, e.normalMap), s.normalTexture = a;
    }
    if (e.aoMap) {
      const a = {
        index: this.processTexture(e.aoMap),
        texCoord: e.aoMap.channel
      };
      e.aoMapIntensity !== 1 && (a.strength = e.aoMapIntensity), this.applyTextureTransform(a, e.aoMap), s.occlusionTexture = a;
    }
    e.transparent ? s.alphaMode = "BLEND" : e.alphaTest > 0 && (s.alphaMode = "MASK", s.alphaCutoff = e.alphaTest), e.side === DoubleSide && (s.doubleSided = true), e.name !== "" && (s.name = e.name), this.serializeUserData(e, s), this._invokeAll(function(a) {
      a.writeMaterial && a.writeMaterial(e, s);
    });
    const o = n.materials.push(s) - 1;
    return t.materials.set(e, o), o;
  }
  /**
   * Process mesh
   * @param  {THREE.Mesh} mesh Mesh to process
   * @return {Integer|null} Index of the processed mesh in the "meshes" array
   */
  processMesh(e) {
    const t = this.cache, n = this.json, s = [e.geometry.uuid];
    if (Array.isArray(e.material))
      for (let _ = 0, M = e.material.length; _ < M; _++)
        s.push(e.material[_].uuid);
    else
      s.push(e.material.uuid);
    const i = s.join(":");
    if (t.meshes.has(i))
      return t.meshes.get(i);
    const o = e.geometry;
    let a;
    e.isLineSegments ? a = De.LINES : e.isLineLoop ? a = De.LINE_LOOP : e.isLine ? a = De.LINE_STRIP : e.isPoints ? a = De.POINTS : a = e.material.wireframe ? De.LINES : De.TRIANGLES;
    const l = {}, c = {}, f = [], u = [], d = {
      ...Ss >= 152 ? {
        uv: "TEXCOORD_0",
        uv1: "TEXCOORD_1",
        uv2: "TEXCOORD_2",
        uv3: "TEXCOORD_3"
      } : {
        uv: "TEXCOORD_0",
        uv2: "TEXCOORD_1"
      },
      color: "COLOR_0",
      skinWeight: "WEIGHTS_0",
      skinIndex: "JOINTS_0"
    }, h2 = o.getAttribute("normal");
    h2 !== void 0 && !this.isNormalizedNormalAttribute(h2) && (console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."), o.setAttribute("normal", this.createNormalizedNormalAttribute(h2)));
    let m = null;
    for (let _ in o.attributes) {
      if (_.slice(0, 5) === "morph")
        continue;
      const M = o.attributes[_];
      if (_ = d[_] || _.toUpperCase(), /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_) || (_ = "_" + _), t.attributes.has(this.getUID(M))) {
        c[_] = t.attributes.get(this.getUID(M));
        continue;
      }
      m = null;
      const w = M.array;
      _ === "JOINTS_0" && !(w instanceof Uint16Array) && !(w instanceof Uint8Array) && (console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'), m = new BufferAttribute(new Uint16Array(w), M.itemSize, M.normalized));
      const E = this.processAccessor(m || M, o);
      E !== null && (_.startsWith("_") || this.detectMeshQuantization(_, M), c[_] = E, t.attributes.set(this.getUID(M), E));
    }
    if (h2 !== void 0 && o.setAttribute("normal", h2), Object.keys(c).length === 0)
      return null;
    if (e.morphTargetInfluences !== void 0 && e.morphTargetInfluences.length > 0) {
      const _ = [], M = [], R = {};
      if (e.morphTargetDictionary !== void 0)
        for (const w in e.morphTargetDictionary)
          R[e.morphTargetDictionary[w]] = w;
      for (let w = 0; w < e.morphTargetInfluences.length; ++w) {
        const E = {};
        let x = false;
        for (const T in o.morphAttributes) {
          if (T !== "position" && T !== "normal") {
            x || (console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."), x = true);
            continue;
          }
          const y = o.morphAttributes[T][w], A = T.toUpperCase(), C = o.attributes[T];
          if (t.attributes.has(this.getUID(y, true))) {
            E[A] = t.attributes.get(this.getUID(y, true));
            continue;
          }
          const N2 = y.clone();
          if (!o.morphTargetsRelative)
            for (let U = 0, Y = y.count; U < Y; U++)
              for (let V2 = 0; V2 < y.itemSize; V2++)
                V2 === 0 && N2.setX(U, y.getX(U) - C.getX(U)), V2 === 1 && N2.setY(U, y.getY(U) - C.getY(U)), V2 === 2 && N2.setZ(U, y.getZ(U) - C.getZ(U)), V2 === 3 && N2.setW(U, y.getW(U) - C.getW(U));
          E[A] = this.processAccessor(N2, o), t.attributes.set(this.getUID(C, true), E[A]);
        }
        u.push(E), _.push(e.morphTargetInfluences[w]), e.morphTargetDictionary !== void 0 && M.push(R[w]);
      }
      l.weights = _, M.length > 0 && (l.extras = {}, l.extras.targetNames = M);
    }
    const g = Array.isArray(e.material);
    if (g && o.groups.length === 0)
      return null;
    const v = g ? e.material : [e.material], p = g ? o.groups : [{ materialIndex: 0, start: void 0, count: void 0 }];
    for (let _ = 0, M = p.length; _ < M; _++) {
      const R = {
        mode: a,
        attributes: c
      };
      if (this.serializeUserData(o, R), u.length > 0 && (R.targets = u), o.index !== null) {
        let E = this.getUID(o.index);
        (p[_].start !== void 0 || p[_].count !== void 0) && (E += ":" + p[_].start + ":" + p[_].count), t.attributes.has(E) ? R.indices = t.attributes.get(E) : (R.indices = this.processAccessor(o.index, o, p[_].start, p[_].count), t.attributes.set(E, R.indices)), R.indices === null && delete R.indices;
      }
      const w = this.processMaterial(v[p[_].materialIndex]);
      w !== null && (R.material = w), f.push(R);
    }
    l.primitives = f, n.meshes || (n.meshes = []), this._invokeAll(function(_) {
      _.writeMesh && _.writeMesh(e, l);
    });
    const b = n.meshes.push(l) - 1;
    return t.meshes.set(i, b), b;
  }
  /**
   * If a vertex attribute with a
   * [non-standard data type](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#meshes-overview)
   * is used, it is checked whether it is a valid data type according to the
   * [KHR_mesh_quantization](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_mesh_quantization/README.md)
   * extension.
   * In this case the extension is automatically added to the list of used extensions.
   *
   * @param {string} attributeName
   * @param {THREE.BufferAttribute} attribute
   */
  detectMeshQuantization(e, t) {
    if (this.extensionsUsed[Mi])
      return;
    let n;
    switch (t.array.constructor) {
      case Int8Array:
        n = "byte";
        break;
      case Uint8Array:
        n = "unsigned byte";
        break;
      case Int16Array:
        n = "short";
        break;
      case Uint16Array:
        n = "unsigned short";
        break;
      default:
        return;
    }
    t.normalized && (n += " normalized");
    const s = e.split("_", 1)[0];
    nr[s] && nr[s].includes(n) && (this.extensionsUsed[Mi] = true, this.extensionsRequired[Mi] = true);
  }
  /**
   * Process camera
   * @param  {THREE.Camera} camera Camera to process
   * @return {Integer}      Index of the processed mesh in the "camera" array
   */
  processCamera(e) {
    const t = this.json;
    t.cameras || (t.cameras = []);
    const n = e.isOrthographicCamera, s = {
      type: n ? "orthographic" : "perspective"
    };
    return n ? s.orthographic = {
      xmag: e.right * 2,
      ymag: e.top * 2,
      zfar: e.far <= 0 ? 1e-3 : e.far,
      znear: e.near < 0 ? 0 : e.near
    } : s.perspective = {
      aspectRatio: e.aspect,
      yfov: MathUtils.degToRad(e.fov),
      zfar: e.far <= 0 ? 1e-3 : e.far,
      znear: e.near < 0 ? 0 : e.near
    }, e.name !== "" && (s.name = e.type), t.cameras.push(s) - 1;
  }
  /**
   * Creates glTF animation entry from AnimationClip object.
   *
   * Status:
   * - Only properties listed in PATH_PROPERTIES may be animated.
   *
   * @param {THREE.AnimationClip} clip
   * @param {THREE.Object3D} root
   * @return {number|null}
   */
  processAnimation(e, t) {
    const n = this.json, s = this.nodeMap;
    n.animations || (n.animations = []), e = Uo.Utils.mergeMorphTargetTracks(e.clone(), t);
    const i = e.tracks, o = [], a = [];
    for (let l = 0; l < i.length; ++l) {
      const c = i[l], f = PropertyBinding.parseTrackName(c.name);
      let u = PropertyBinding.findNode(t, f.nodeName);
      const d = sr[f.propertyName];
      if (f.objectName === "bones" && (u.isSkinnedMesh === true ? u = u.skeleton.getBoneByName(f.objectIndex) : u = void 0), !u || !d)
        return console.warn('THREE.GLTFExporter: Could not export animation track "%s".', c.name), null;
      const h2 = 1;
      let m = c.values.length / c.times.length;
      d === sr.morphTargetInfluences && (m /= u.morphTargetInfluences.length);
      let g;
      c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline === true ? (g = "CUBICSPLINE", m /= 3) : c.getInterpolation() === InterpolateDiscrete ? g = "STEP" : g = "LINEAR", a.push({
        input: this.processAccessor(new BufferAttribute(c.times, h2)),
        output: this.processAccessor(new BufferAttribute(c.values, m)),
        interpolation: g
      }), o.push({
        sampler: a.length - 1,
        target: {
          node: s.get(u),
          path: d
        }
      });
    }
    return n.animations.push({
      name: e.name || "clip_" + n.animations.length,
      samplers: a,
      channels: o
    }), n.animations.length - 1;
  }
  /**
   * @param {THREE.Object3D} object
   * @return {number|null}
   */
  processSkin(e) {
    const t = this.json, n = this.nodeMap, s = t.nodes[n.get(e)], i = e.skeleton;
    if (i === void 0)
      return null;
    const o = e.skeleton.bones[0];
    if (o === void 0)
      return null;
    const a = [], l = new Float32Array(i.bones.length * 16), c = new Matrix4();
    for (let u = 0; u < i.bones.length; ++u)
      a.push(n.get(i.bones[u])), c.copy(i.boneInverses[u]), c.multiply(e.bindMatrix).toArray(l, u * 16);
    return t.skins === void 0 && (t.skins = []), t.skins.push({
      inverseBindMatrices: this.processAccessor(new BufferAttribute(l, 16)),
      joints: a,
      skeleton: n.get(o)
    }), s.skin = t.skins.length - 1;
  }
  /**
   * Process Object3D node
   * @param  {THREE.Object3D} node Object3D to processNode
   * @return {Integer} Index of the node in the nodes list
   */
  processNode(e) {
    const t = this.json, n = this.options, s = this.nodeMap;
    t.nodes || (t.nodes = []);
    const i = {};
    if (n.trs) {
      const a = e.quaternion.toArray(), l = e.position.toArray(), c = e.scale.toArray();
      vs(a, [0, 0, 0, 1]) || (i.rotation = a), vs(l, [0, 0, 0]) || (i.translation = l), vs(c, [1, 1, 1]) || (i.scale = c);
    } else
      e.matrixAutoUpdate && e.updateMatrix(), wu(e.matrix) === false && (i.matrix = e.matrix.elements);
    if (e.name !== "" && (i.name = String(e.name)), this.serializeUserData(e, i), e.isMesh || e.isLine || e.isPoints) {
      const a = this.processMesh(e);
      a !== null && (i.mesh = a);
    } else e.isCamera && (i.camera = this.processCamera(e));
    if (e.isSkinnedMesh && this.skins.push(e), e.children.length > 0) {
      const a = [];
      for (let l = 0, c = e.children.length; l < c; l++) {
        const f = e.children[l];
        if (f.visible || n.onlyVisible === false) {
          const u = this.processNode(f);
          u !== null && a.push(u);
        }
      }
      a.length > 0 && (i.children = a);
    }
    this._invokeAll(function(a) {
      a.writeNode && a.writeNode(e, i);
    });
    const o = t.nodes.push(i) - 1;
    return s.set(e, o), o;
  }
  /**
   * Process Scene
   * @param  {Scene} node Scene to process
   */
  processScene(e) {
    const t = this.json, n = this.options;
    t.scenes || (t.scenes = [], t.scene = 0);
    const s = {};
    e.name !== "" && (s.name = e.name), t.scenes.push(s);
    const i = [];
    for (let o = 0, a = e.children.length; o < a; o++) {
      const l = e.children[o];
      if (l.visible || n.onlyVisible === false) {
        const c = this.processNode(l);
        c !== null && i.push(c);
      }
    }
    i.length > 0 && (s.nodes = i), this.serializeUserData(e, s);
  }
  /**
   * Creates a Scene to hold a list of objects and parse it
   * @param  {Array} objects List of objects to process
   */
  processObjects(e) {
    const t = new Scene();
    t.name = "AuxScene";
    for (let n = 0; n < e.length; n++)
      t.children.push(e[n]);
    this.processScene(t);
  }
  /**
   * @param {THREE.Object3D|Array<THREE.Object3D>} input
   */
  processInput(e) {
    const t = this.options;
    e = e instanceof Array ? e : [e], this._invokeAll(function(s) {
      s.beforeParse && s.beforeParse(e);
    });
    const n = [];
    for (let s = 0; s < e.length; s++)
      e[s] instanceof Scene ? this.processScene(e[s]) : n.push(e[s]);
    n.length > 0 && this.processObjects(n);
    for (let s = 0; s < this.skins.length; ++s)
      this.processSkin(this.skins[s]);
    for (let s = 0; s < t.animations.length; ++s)
      this.processAnimation(t.animations[s], e[0]);
    this._invokeAll(function(s) {
      s.afterParse && s.afterParse(e);
    });
  }
  _invokeAll(e) {
    for (let t = 0, n = this.plugins.length; t < n; t++)
      e(this.plugins[t]);
  }
}
class Eu {
  constructor(e) {
    this.writer = e, this.name = "KHR_lights_punctual";
  }
  writeNode(e, t) {
    if (!e.isLight)
      return;
    if (!e.isDirectionalLight && !e.isPointLight && !e.isSpotLight) {
      console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.", e);
      return;
    }
    const n = this.writer, s = n.json, i = n.extensionsUsed, o = {};
    e.name && (o.name = e.name), o.color = e.color.toArray(), o.intensity = e.intensity, e.isDirectionalLight ? o.type = "directional" : e.isPointLight ? (o.type = "point", e.distance > 0 && (o.range = e.distance)) : e.isSpotLight && (o.type = "spot", e.distance > 0 && (o.range = e.distance), o.spot = {}, o.spot.innerConeAngle = (e.penumbra - 1) * e.angle * -1, o.spot.outerConeAngle = e.angle), e.decay !== void 0 && e.decay !== 2 && console.warn(
      "THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."
    ), e.target && (e.target.parent !== e || e.target.position.x !== 0 || e.target.position.y !== 0 || e.target.position.z !== -1) && console.warn(
      "THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."
    ), i[this.name] || (s.extensions = s.extensions || {}, s.extensions[this.name] = { lights: [] }, i[this.name] = true);
    const a = s.extensions[this.name].lights;
    a.push(o), t.extensions = t.extensions || {}, t.extensions[this.name] = { light: a.length - 1 };
  }
}
let Mu = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_unlit";
  }
  writeMaterial(e, t) {
    if (!e.isMeshBasicMaterial)
      return;
    const s = this.writer.extensionsUsed;
    t.extensions = t.extensions || {}, t.extensions[this.name] = {}, s[this.name] = true, t.pbrMetallicRoughness.metallicFactor = 0, t.pbrMetallicRoughness.roughnessFactor = 0.9;
  }
}, Su = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_clearcoat";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.clearcoat === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.clearcoatFactor = e.clearcoat, e.clearcoatMap) {
      const o = {
        index: n.processTexture(e.clearcoatMap),
        texCoord: e.clearcoatMap.channel
      };
      n.applyTextureTransform(o, e.clearcoatMap), i.clearcoatTexture = o;
    }
    if (i.clearcoatRoughnessFactor = e.clearcoatRoughness, e.clearcoatRoughnessMap) {
      const o = {
        index: n.processTexture(e.clearcoatRoughnessMap),
        texCoord: e.clearcoatRoughnessMap.channel
      };
      n.applyTextureTransform(o, e.clearcoatRoughnessMap), i.clearcoatRoughnessTexture = o;
    }
    if (e.clearcoatNormalMap) {
      const o = {
        index: n.processTexture(e.clearcoatNormalMap),
        texCoord: e.clearcoatNormalMap.channel
      };
      n.applyTextureTransform(o, e.clearcoatNormalMap), i.clearcoatNormalTexture = o;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Au = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_iridescence";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.iridescence === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.iridescenceFactor = e.iridescence, e.iridescenceMap) {
      const o = {
        index: n.processTexture(e.iridescenceMap),
        texCoord: e.iridescenceMap.channel
      };
      n.applyTextureTransform(o, e.iridescenceMap), i.iridescenceTexture = o;
    }
    if (i.iridescenceIor = e.iridescenceIOR, i.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], i.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1], e.iridescenceThicknessMap) {
      const o = {
        index: n.processTexture(e.iridescenceThicknessMap),
        texCoord: e.iridescenceThicknessMap.channel
      };
      n.applyTextureTransform(o, e.iridescenceThicknessMap), i.iridescenceThicknessTexture = o;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Pu = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_transmission";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.transmissionFactor = e.transmission, e.transmissionMap) {
      const o = {
        index: n.processTexture(e.transmissionMap),
        texCoord: e.transmissionMap.channel
      };
      n.applyTextureTransform(o, e.transmissionMap), i.transmissionTexture = o;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Ru = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_volume";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.thicknessFactor = e.thickness, e.thicknessMap) {
      const o = {
        index: n.processTexture(e.thicknessMap),
        texCoord: e.thicknessMap.channel
      };
      n.applyTextureTransform(o, e.thicknessMap), i.thicknessTexture = o;
    }
    i.attenuationDistance = e.attenuationDistance, i.attenuationColor = e.attenuationColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Cu = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_ior";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.ior === 1.5)
      return;
    const s = this.writer.extensionsUsed, i = {};
    i.ior = e.ior, t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Iu = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_specular";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.specularIntensity === 1 && e.specularColor.equals(mu) && !e.specularIntensityMap && !e.specularColorTexture)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (e.specularIntensityMap) {
      const o = {
        index: n.processTexture(e.specularIntensityMap),
        texCoord: e.specularIntensityMap.channel
      };
      n.applyTextureTransform(o, e.specularIntensityMap), i.specularTexture = o;
    }
    if (e.specularColorMap) {
      const o = {
        index: n.processTexture(e.specularColorMap),
        texCoord: e.specularColorMap.channel
      };
      n.applyTextureTransform(o, e.specularColorMap), i.specularColorTexture = o;
    }
    i.specularFactor = e.specularIntensity, i.specularColorFactor = e.specularColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Ou = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_sheen";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.sheen == 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (e.sheenRoughnessMap) {
      const o = {
        index: n.processTexture(e.sheenRoughnessMap),
        texCoord: e.sheenRoughnessMap.channel
      };
      n.applyTextureTransform(o, e.sheenRoughnessMap), i.sheenRoughnessTexture = o;
    }
    if (e.sheenColorMap) {
      const o = {
        index: n.processTexture(e.sheenColorMap),
        texCoord: e.sheenColorMap.channel
      };
      n.applyTextureTransform(o, e.sheenColorMap), i.sheenColorTexture = o;
    }
    i.sheenRoughnessFactor = e.sheenRoughness, i.sheenColorFactor = e.sheenColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Du = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_anisotropy";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.anisotropy == 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (e.anisotropyMap) {
      const o = { index: n.processTexture(e.anisotropyMap) };
      n.applyTextureTransform(o, e.anisotropyMap), i.anisotropyTexture = o;
    }
    i.anisotropyStrength = e.anisotropy, i.anisotropyRotation = e.anisotropyRotation, t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
}, Lu = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_emissive_strength";
  }
  writeMaterial(e, t) {
    if (!e.isMeshStandardMaterial || e.emissiveIntensity === 1)
      return;
    const s = this.writer.extensionsUsed, i = {};
    i.emissiveStrength = e.emissiveIntensity, t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var Pt = Uint8Array, vn = Uint16Array, mo = Uint32Array, Ua = new Pt([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), Fa = new Pt([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), za = function(r, e) {
  for (var t = new vn(31), n = 0; n < 31; ++n)
    t[n] = e += 1 << r[n - 1];
  for (var s = new mo(t[30]), n = 1; n < 30; ++n)
    for (var i = t[n]; i < t[n + 1]; ++i)
      s[i] = i - t[n] << 5 | n;
  return [t, s];
}, Ga = za(Ua, 2), Ha = Ga[0], Nu = Ga[1];
Ha[28] = 258, Nu[258] = 28;
za(Fa, 0);
var go = new vn(32768);
for (var Ze = 0; Ze < 32768; ++Ze) {
  var fn = (Ze & 43690) >>> 1 | (Ze & 21845) << 1;
  fn = (fn & 52428) >>> 2 | (fn & 13107) << 2, fn = (fn & 61680) >>> 4 | (fn & 3855) << 4, go[Ze] = ((fn & 65280) >>> 8 | (fn & 255) << 8) >>> 1;
}
var As = new Pt(288);
for (var Ze = 0; Ze < 144; ++Ze)
  As[Ze] = 8;
for (var Ze = 144; Ze < 256; ++Ze)
  As[Ze] = 9;
for (var Ze = 256; Ze < 280; ++Ze)
  As[Ze] = 7;
for (var Ze = 280; Ze < 288; ++Ze)
  As[Ze] = 8;
var ja = new Pt(32);
for (var Ze = 0; Ze < 32; ++Ze)
  ja[Ze] = 5;
var Vu = /* @__PURE__ */ new Pt(0);
var Xu = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), $u = 0;
try {
  Xu.decode(Vu, { stream: true }), $u = 1;
} catch {
}
var Zu = Object.defineProperty, Ku = (r, e, t) => e in r ? Zu(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, qu = (r, e, t) => (Ku(r, e + "", t), t);
const Va = class extends Mesh {
  constructor(r, e = {}) {
    super(r), this.isReflector = true, this.type = "Reflector", this.camera = new PerspectiveCamera();
    const t = this, n = e.color !== void 0 ? new Color(e.color) : new Color(8355711), s = e.textureWidth || 512, i = e.textureHeight || 512, o = e.clipBias || 0, a = e.shader || Va.ReflectorShader, l = e.multisample !== void 0 ? e.multisample : 4, c = new Plane(), f = new Vector3(), u = new Vector3(), d = new Vector3(), h2 = new Matrix4(), m = new Vector3(0, 0, -1), g = new Vector4(), v = new Vector3(), p = new Vector3(), b = new Vector4(), _ = new Matrix4(), M = this.camera, R = new WebGLRenderTarget(s, i, {
      samples: l,
      type: HalfFloatType
    }), w = new ShaderMaterial({
      uniforms: UniformsUtils.clone(a.uniforms),
      fragmentShader: a.fragmentShader,
      vertexShader: a.vertexShader
    });
    w.uniforms.tDiffuse.value = R.texture, w.uniforms.color.value = n, w.uniforms.textureMatrix.value = _, this.material = w, this.onBeforeRender = function(E, x, T) {
      if (u.setFromMatrixPosition(t.matrixWorld), d.setFromMatrixPosition(T.matrixWorld), h2.extractRotation(t.matrixWorld), f.set(0, 0, 1), f.applyMatrix4(h2), v.subVectors(u, d), v.dot(f) > 0)
        return;
      v.reflect(f).negate(), v.add(u), h2.extractRotation(T.matrixWorld), m.set(0, 0, -1), m.applyMatrix4(h2), m.add(d), p.subVectors(u, m), p.reflect(f).negate(), p.add(u), M.position.copy(v), M.up.set(0, 1, 0), M.up.applyMatrix4(h2), M.up.reflect(f), M.lookAt(p), M.far = T.far, M.updateMatrixWorld(), M.projectionMatrix.copy(T.projectionMatrix), _.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), _.multiply(M.projectionMatrix), _.multiply(M.matrixWorldInverse), _.multiply(t.matrixWorld), c.setFromNormalAndCoplanarPoint(f, u), c.applyMatrix4(M.matrixWorldInverse), g.set(c.normal.x, c.normal.y, c.normal.z, c.constant);
      const y = M.projectionMatrix;
      b.x = (Math.sign(g.x) + y.elements[8]) / y.elements[0], b.y = (Math.sign(g.y) + y.elements[9]) / y.elements[5], b.z = -1, b.w = (1 + y.elements[10]) / y.elements[14], g.multiplyScalar(2 / g.dot(b)), y.elements[2] = g.x, y.elements[6] = g.y, y.elements[10] = g.z + 1 - o, y.elements[14] = g.w, t.visible = false;
      const A = E.getRenderTarget(), C = E.xr.enabled, N2 = E.shadowMap.autoUpdate, U = E.toneMapping;
      let Y = false;
      "outputColorSpace" in E ? Y = E.outputColorSpace === "srgb" : Y = E.outputEncoding === 3001, E.xr.enabled = false, E.shadowMap.autoUpdate = false, "outputColorSpace" in E ? E.outputColorSpace = "srgb-linear" : E.outputEncoding = 3e3, E.toneMapping = NoToneMapping, E.setRenderTarget(R), E.state.buffers.depth.setMask(true), E.autoClear === false && E.clear(), E.render(x, M), E.xr.enabled = C, E.shadowMap.autoUpdate = N2, E.toneMapping = U, "outputColorSpace" in E ? E.outputColorSpace = Y ? "srgb" : "srgb-linear" : E.outputEncoding = Y ? 3001 : 3e3, E.setRenderTarget(A);
      const V2 = T.viewport;
      V2 !== void 0 && E.state.viewport(V2), t.visible = true;
    }, this.getRenderTarget = function() {
      return R;
    }, this.dispose = function() {
      R.dispose(), t.material.dispose();
    };
  }
};
let vo = Va;
qu(vo, "ReflectorShader", {
  uniforms: {
    color: {
      value: null
    },
    tDiffuse: {
      value: null
    },
    textureMatrix: {
      value: null
    }
  },
  vertexShader: (
    /* glsl */
    `
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <${Ss >= 154 ? "colorspace_fragment" : "encodings_fragment"}>

		}`
  )
});
var Qu = Object.defineProperty, Ju = (r, e, t) => e in r ? Qu(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, Ya = (r, e, t) => (Ju(r, typeof e != "symbol" ? e + "" : e, t), t);
const ui = new BufferGeometry(), eh = new Float32Array([-1, -1, 0, 0, 0, 1, -1, 0, 1, 0, 1, 1, 0, 1, 1, -1, 1, 0, 0, 1]), Wa = new InterleavedBuffer(eh, 5);
ui.setIndex([0, 1, 2, 0, 2, 3]);
ui.setAttribute("position", new InterleavedBufferAttribute(Wa, 3, 0, false));
ui.setAttribute("uv", new InterleavedBufferAttribute(Wa, 2, 3, false));
const yo = class extends Mesh {
  constructor() {
    super(yo.Geometry, new MeshBasicMaterial({ opacity: 0, transparent: true })), this.isLensflare = true, this.type = "Lensflare", this.frustumCulled = false, this.renderOrder = 1 / 0;
    const r = new Vector3(), e = new Vector3(), t = new DataTexture(new Uint8Array(16 * 16 * 3), 16, 16, RGBAFormat);
    t.minFilter = NearestFilter, t.magFilter = NearestFilter, t.wrapS = ClampToEdgeWrapping, t.wrapT = ClampToEdgeWrapping;
    const n = new DataTexture(new Uint8Array(16 * 16 * 3), 16, 16, RGBAFormat);
    n.minFilter = NearestFilter, n.magFilter = NearestFilter, n.wrapS = ClampToEdgeWrapping, n.wrapT = ClampToEdgeWrapping;
    const s = yo.Geometry, i = new RawShaderMaterial({
      uniforms: {
        scale: { value: null },
        screenPosition: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`
      ),
      fragmentShader: (
        /* glsl */
        `

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`
      ),
      depthTest: true,
      depthWrite: false,
      transparent: false
    }), o = new RawShaderMaterial({
      uniforms: {
        map: { value: t },
        scale: { value: null },
        screenPosition: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`
      ),
      fragmentShader: (
        /* glsl */
        `

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`
      ),
      depthTest: false,
      depthWrite: false,
      transparent: false
    }), a = new Mesh(s, i), l = [], c = $a.Shader, f = new RawShaderMaterial({
      uniforms: {
        map: { value: null },
        occlusionMap: { value: n },
        color: { value: new Color(16777215) },
        scale: { value: new Vector2() },
        screenPosition: { value: new Vector3() }
      },
      vertexShader: c.vertexShader,
      fragmentShader: c.fragmentShader,
      blending: AdditiveBlending,
      transparent: true,
      depthWrite: false
    }), u = new Mesh(s, f);
    this.addElement = function(v) {
      l.push(v);
    };
    const d = new Vector2(), h2 = new Vector2(), m = new Box2(), g = new Vector4();
    this.onBeforeRender = function(v, p, b) {
      v.getCurrentViewport(g);
      const _ = g.w / g.z, M = g.z / 2, R = g.w / 2;
      let w = 16 / g.w;
      if (d.set(w * _, w), m.min.set(g.x, g.y), m.max.set(g.x + (g.z - 16), g.y + (g.w - 16)), e.setFromMatrixPosition(this.matrixWorld), e.applyMatrix4(b.matrixWorldInverse), !(e.z > 0) && (r.copy(e).applyMatrix4(b.projectionMatrix), h2.x = g.x + r.x * M + M - 8, h2.y = g.y + r.y * R + R - 8, m.containsPoint(h2))) {
        v.copyFramebufferToTexture(h2, t);
        let E = i.uniforms;
        E.scale.value = d, E.screenPosition.value = r, v.renderBufferDirect(b, null, s, i, a, null), v.copyFramebufferToTexture(h2, n), E = o.uniforms, E.scale.value = d, E.screenPosition.value = r, v.renderBufferDirect(b, null, s, o, a, null);
        const x = -r.x * 2, T = -r.y * 2;
        for (let y = 0, A = l.length; y < A; y++) {
          const C = l[y], N2 = f.uniforms;
          N2.color.value.copy(C.color), N2.map.value = C.texture, N2.screenPosition.value.x = r.x + x * C.distance, N2.screenPosition.value.y = r.y + T * C.distance, w = C.size / g.w;
          const U = g.w / g.z;
          N2.scale.value.set(w * U, w), f.uniformsNeedUpdate = true, v.renderBufferDirect(b, null, s, f, u, null);
        }
      }
    }, this.dispose = function() {
      i.dispose(), o.dispose(), f.dispose(), t.dispose(), n.dispose();
      for (let v = 0, p = l.length; v < p; v++)
        l[v].texture.dispose();
    };
  }
};
let Xa = yo;
Ya(Xa, "Geometry", ui);
class $a {
  constructor(e, t = 1, n = 0, s = new Color(16777215)) {
    this.texture = e, this.size = t, this.distance = n, this.color = s;
  }
}
Ya($a, "Shader", {
  uniforms: {
    map: { value: null },
    occlusionMap: { value: null },
    color: { value: null },
    scale: { value: null },
    screenPosition: { value: null }
  },
  vertexShader: (
    /* glsl */
    `

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`
  )
});
var nh = Object.defineProperty, sh = (r, e, t) => e in r ? nh(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, Za = (r, e, t) => (sh(r, typeof e != "symbol" ? e + "" : e, t), t);
const Qs = {
  uniforms: {
    turbidity: { value: 2 },
    rayleigh: { value: 1 },
    mieCoefficient: { value: 5e-3 },
    mieDirectionalG: { value: 0.8 },
    sunPosition: { value: new Vector3() },
    up: { value: new Vector3(0, 1, 0) }
  },
  vertexShader: (
    /* glsl */
    `
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `
  ),
  fragmentShader: (
    /* glsl */
    `
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${Ss >= 154 ? "colorspace_fragment" : "encodings_fragment"}>

      }
    `
  )
}, Ka = new ShaderMaterial({
  name: "SkyShader",
  fragmentShader: Qs.fragmentShader,
  vertexShader: Qs.vertexShader,
  uniforms: UniformsUtils.clone(Qs.uniforms),
  side: BackSide,
  depthWrite: false
});
class Fo extends Mesh {
  constructor() {
    super(new BoxGeometry(1, 1, 1), Ka);
  }
}
Za(Fo, "SkyShader", Qs);
Za(Fo, "material", Ka);
new Triangle();
new Vector3();
new Euler(0, 0, 0, "YXZ");
new Vector3();
var mh = Object.defineProperty, gh = (r, e, t) => e in r ? mh(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, _e = (r, e, t) => (gh(r, typeof e != "symbol" ? e + "" : e, t), t);
const zs = new Ray(), cr = new Plane(), vh = Math.cos(70 * (Math.PI / 180)), ur = (r, e) => (r % e + e) % e;
class Qa extends EventDispatcher {
  constructor(e, t) {
    super(), _e(this, "object"), _e(this, "domElement"), _e(this, "enabled", true), _e(this, "target", new Vector3()), _e(this, "minDistance", 0), _e(this, "maxDistance", 1 / 0), _e(this, "minZoom", 0), _e(this, "maxZoom", 1 / 0), _e(this, "minPolarAngle", 0), _e(this, "maxPolarAngle", Math.PI), _e(this, "minAzimuthAngle", -1 / 0), _e(this, "maxAzimuthAngle", 1 / 0), _e(this, "enableDamping", false), _e(this, "dampingFactor", 0.05), _e(this, "enableZoom", true), _e(this, "zoomSpeed", 1), _e(this, "enableRotate", true), _e(this, "rotateSpeed", 1), _e(this, "enablePan", true), _e(this, "panSpeed", 1), _e(this, "screenSpacePanning", true), _e(this, "keyPanSpeed", 7), _e(this, "zoomToCursor", false), _e(this, "autoRotate", false), _e(this, "autoRotateSpeed", 2), _e(this, "reverseOrbit", false), _e(this, "reverseHorizontalOrbit", false), _e(this, "reverseVerticalOrbit", false), _e(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }), _e(this, "mouseButtons", {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN
    }), _e(this, "touches", { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN }), _e(this, "target0"), _e(this, "position0"), _e(this, "zoom0"), _e(this, "_domElementKeyEvents", null), _e(this, "getPolarAngle"), _e(this, "getAzimuthalAngle"), _e(this, "setPolarAngle"), _e(this, "setAzimuthalAngle"), _e(this, "getDistance"), _e(this, "getZoomScale"), _e(this, "listenToKeyEvents"), _e(this, "stopListenToKeyEvents"), _e(this, "saveState"), _e(this, "reset"), _e(this, "update"), _e(this, "connect"), _e(this, "dispose"), _e(this, "dollyIn"), _e(this, "dollyOut"), _e(this, "getScale"), _e(this, "setScale"), this.object = e, this.domElement = t, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => f.phi, this.getAzimuthalAngle = () => f.theta, this.setPolarAngle = (W) => {
      let le = ur(W, 2 * Math.PI), Ee2 = f.phi;
      Ee2 < 0 && (Ee2 += 2 * Math.PI), le < 0 && (le += 2 * Math.PI);
      let Ue = Math.abs(le - Ee2);
      2 * Math.PI - Ue < Ue && (le < Ee2 ? le += 2 * Math.PI : Ee2 += 2 * Math.PI), u.phi = le - Ee2, n.update();
    }, this.setAzimuthalAngle = (W) => {
      let le = ur(W, 2 * Math.PI), Ee2 = f.theta;
      Ee2 < 0 && (Ee2 += 2 * Math.PI), le < 0 && (le += 2 * Math.PI);
      let Ue = Math.abs(le - Ee2);
      2 * Math.PI - Ue < Ue && (le < Ee2 ? le += 2 * Math.PI : Ee2 += 2 * Math.PI), u.theta = le - Ee2, n.update();
    }, this.getDistance = () => n.object.position.distanceTo(n.target), this.listenToKeyEvents = (W) => {
      W.addEventListener("keydown", Nt), this._domElementKeyEvents = W;
    }, this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", Nt), this._domElementKeyEvents = null;
    }, this.saveState = () => {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = () => {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(s), n.update(), l = a.NONE;
    }, this.update = (() => {
      const W = new Vector3(), le = new Vector3(0, 1, 0), Ee2 = new Quaternion().setFromUnitVectors(e.up, le), Ue = Ee2.clone().invert(), nt = new Vector3(), qt = new Quaternion(), hn2 = 2 * Math.PI;
      return function() {
        const Xo = n.object.position;
        Ee2.setFromUnitVectors(e.up, le), Ue.copy(Ee2).invert(), W.copy(Xo).sub(n.target), W.applyQuaternion(Ee2), f.setFromVector3(W), n.autoRotate && l === a.NONE && U(C()), n.enableDamping ? (f.theta += u.theta * n.dampingFactor, f.phi += u.phi * n.dampingFactor) : (f.theta += u.theta, f.phi += u.phi);
        let Qt = n.minAzimuthAngle, Jt = n.maxAzimuthAngle;
        isFinite(Qt) && isFinite(Jt) && (Qt < -Math.PI ? Qt += hn2 : Qt > Math.PI && (Qt -= hn2), Jt < -Math.PI ? Jt += hn2 : Jt > Math.PI && (Jt -= hn2), Qt <= Jt ? f.theta = Math.max(Qt, Math.min(Jt, f.theta)) : f.theta = f.theta > (Qt + Jt) / 2 ? Math.max(Qt, f.theta) : Math.min(Jt, f.theta)), f.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, f.phi)), f.makeSafe(), n.enableDamping === true ? n.target.addScaledVector(h2, n.dampingFactor) : n.target.add(h2), n.zoomToCursor && T || n.object.isOrthographicCamera ? f.radius = we(f.radius) : f.radius = we(f.radius * d), W.setFromSpherical(f), W.applyQuaternion(Ue), Xo.copy(n.target).add(W), n.object.matrixAutoUpdate || n.object.updateMatrix(), n.object.lookAt(n.target), n.enableDamping === true ? (u.theta *= 1 - n.dampingFactor, u.phi *= 1 - n.dampingFactor, h2.multiplyScalar(1 - n.dampingFactor)) : (u.set(0, 0, 0), h2.set(0, 0, 0));
        let os = false;
        if (n.zoomToCursor && T) {
          let rs = null;
          if (n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera) {
            const as = W.length();
            rs = we(as * d);
            const Os = as - rs;
            n.object.position.addScaledVector(E, Os), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const as = new Vector3(x.x, x.y, 0);
            as.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / d)), n.object.updateProjectionMatrix(), os = true;
            const Os = new Vector3(x.x, x.y, 0);
            Os.unproject(n.object), n.object.position.sub(Os).add(as), n.object.updateMatrixWorld(), rs = W.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = false;
          rs !== null && (n.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(rs).add(n.object.position) : (zs.origin.copy(n.object.position), zs.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(zs.direction)) < vh ? e.lookAt(n.target) : (cr.setFromNormalAndCoplanarPoint(n.object.up, n.target), zs.intersectPlane(cr, n.target))));
        } else n.object instanceof OrthographicCamera && n.object.isOrthographicCamera && (os = d !== 1, os && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / d)), n.object.updateProjectionMatrix()));
        return d = 1, T = false, os || nt.distanceToSquared(n.object.position) > c || 8 * (1 - qt.dot(n.object.quaternion)) > c ? (n.dispatchEvent(s), nt.copy(n.object.position), qt.copy(n.object.quaternion), os = false, true) : false;
      };
    })(), this.connect = (W) => {
      n.domElement = W, n.domElement.style.touchAction = "none", n.domElement.addEventListener("contextmenu", is), n.domElement.addEventListener("pointerdown", Re), n.domElement.addEventListener("pointercancel", He), n.domElement.addEventListener("wheel", En2);
    }, this.dispose = () => {
      var W, le, Ee2, Ue, nt, qt;
      n.domElement && (n.domElement.style.touchAction = "auto"), (W = n.domElement) == null || W.removeEventListener("contextmenu", is), (le = n.domElement) == null || le.removeEventListener("pointerdown", Re), (Ee2 = n.domElement) == null || Ee2.removeEventListener("pointercancel", He), (Ue = n.domElement) == null || Ue.removeEventListener("wheel", En2), (nt = n.domElement) == null || nt.ownerDocument.removeEventListener("pointermove", Ke2), (qt = n.domElement) == null || qt.ownerDocument.removeEventListener("pointerup", He), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", Nt);
    };
    const n = this, s = { type: "change" }, i = { type: "start" }, o = { type: "end" }, a = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let l = a.NONE;
    const c = 1e-6, f = new Spherical(), u = new Spherical();
    let d = 1;
    const h2 = new Vector3(), m = new Vector2(), g = new Vector2(), v = new Vector2(), p = new Vector2(), b = new Vector2(), _ = new Vector2(), M = new Vector2(), R = new Vector2(), w = new Vector2(), E = new Vector3(), x = new Vector2();
    let T = false;
    const y = [], A = {};
    function C() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function N2() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function U(W) {
      n.reverseOrbit || n.reverseHorizontalOrbit ? u.theta += W : u.theta -= W;
    }
    function Y(W) {
      n.reverseOrbit || n.reverseVerticalOrbit ? u.phi += W : u.phi -= W;
    }
    const V2 = (() => {
      const W = new Vector3();
      return function(Ee2, Ue) {
        W.setFromMatrixColumn(Ue, 0), W.multiplyScalar(-Ee2), h2.add(W);
      };
    })(), ne = (() => {
      const W = new Vector3();
      return function(Ee2, Ue) {
        n.screenSpacePanning === true ? W.setFromMatrixColumn(Ue, 1) : (W.setFromMatrixColumn(Ue, 0), W.crossVectors(n.object.up, W)), W.multiplyScalar(Ee2), h2.add(W);
      };
    })(), Z = (() => {
      const W = new Vector3();
      return function(Ee2, Ue) {
        const nt = n.domElement;
        if (nt && n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera) {
          const qt = n.object.position;
          W.copy(qt).sub(n.target);
          let hn2 = W.length();
          hn2 *= Math.tan(n.object.fov / 2 * Math.PI / 180), V2(2 * Ee2 * hn2 / nt.clientHeight, n.object.matrix), ne(2 * Ue * hn2 / nt.clientHeight, n.object.matrix);
        } else nt && n.object instanceof OrthographicCamera && n.object.isOrthographicCamera ? (V2(
          Ee2 * (n.object.right - n.object.left) / n.object.zoom / nt.clientWidth,
          n.object.matrix
        ), ne(
          Ue * (n.object.top - n.object.bottom) / n.object.zoom / nt.clientHeight,
          n.object.matrix
        )) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = false);
      };
    })();
    function ee2(W) {
      n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera || n.object instanceof OrthographicCamera && n.object.isOrthographicCamera ? d = W : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
    }
    function te2(W) {
      ee2(d / W);
    }
    function fe(W) {
      ee2(d * W);
    }
    function he(W) {
      if (!n.zoomToCursor || !n.domElement)
        return;
      T = true;
      const le = n.domElement.getBoundingClientRect(), Ee2 = W.clientX - le.left, Ue = W.clientY - le.top, nt = le.width, qt = le.height;
      x.x = Ee2 / nt * 2 - 1, x.y = -(Ue / qt) * 2 + 1, E.set(x.x, x.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function we(W) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, W));
    }
    function I(W) {
      m.set(W.clientX, W.clientY);
    }
    function B(W) {
      he(W), M.set(W.clientX, W.clientY);
    }
    function D(W) {
      p.set(W.clientX, W.clientY);
    }
    function O(W) {
      g.set(W.clientX, W.clientY), v.subVectors(g, m).multiplyScalar(n.rotateSpeed);
      const le = n.domElement;
      le && (U(2 * Math.PI * v.x / le.clientHeight), Y(2 * Math.PI * v.y / le.clientHeight)), m.copy(g), n.update();
    }
    function z2(W) {
      R.set(W.clientX, W.clientY), w.subVectors(R, M), w.y > 0 ? te2(N2()) : w.y < 0 && fe(N2()), M.copy(R), n.update();
    }
    function S(W) {
      b.set(W.clientX, W.clientY), _.subVectors(b, p).multiplyScalar(n.panSpeed), Z(_.x, _.y), p.copy(b), n.update();
    }
    function P(W) {
      he(W), W.deltaY < 0 ? fe(N2()) : W.deltaY > 0 && te2(N2()), n.update();
    }
    function L(W) {
      let le = false;
      switch (W.code) {
        case n.keys.UP:
          Z(0, n.keyPanSpeed), le = true;
          break;
        case n.keys.BOTTOM:
          Z(0, -n.keyPanSpeed), le = true;
          break;
        case n.keys.LEFT:
          Z(n.keyPanSpeed, 0), le = true;
          break;
        case n.keys.RIGHT:
          Z(-n.keyPanSpeed, 0), le = true;
          break;
      }
      le && (W.preventDefault(), n.update());
    }
    function X() {
      if (y.length == 1)
        m.set(y[0].pageX, y[0].pageY);
      else {
        const W = 0.5 * (y[0].pageX + y[1].pageX), le = 0.5 * (y[0].pageY + y[1].pageY);
        m.set(W, le);
      }
    }
    function H2() {
      if (y.length == 1)
        p.set(y[0].pageX, y[0].pageY);
      else {
        const W = 0.5 * (y[0].pageX + y[1].pageX), le = 0.5 * (y[0].pageY + y[1].pageY);
        p.set(W, le);
      }
    }
    function j() {
      const W = y[0].pageX - y[1].pageX, le = y[0].pageY - y[1].pageY, Ee2 = Math.sqrt(W * W + le * le);
      M.set(0, Ee2);
    }
    function K() {
      n.enableZoom && j(), n.enablePan && H2();
    }
    function se2() {
      n.enableZoom && j(), n.enableRotate && X();
    }
    function ie(W) {
      if (y.length == 1)
        g.set(W.pageX, W.pageY);
      else {
        const Ee2 = pi(W), Ue = 0.5 * (W.pageX + Ee2.x), nt = 0.5 * (W.pageY + Ee2.y);
        g.set(Ue, nt);
      }
      v.subVectors(g, m).multiplyScalar(n.rotateSpeed);
      const le = n.domElement;
      le && (U(2 * Math.PI * v.x / le.clientHeight), Y(2 * Math.PI * v.y / le.clientHeight)), m.copy(g);
    }
    function G2(W) {
      if (y.length == 1)
        b.set(W.pageX, W.pageY);
      else {
        const le = pi(W), Ee2 = 0.5 * (W.pageX + le.x), Ue = 0.5 * (W.pageY + le.y);
        b.set(Ee2, Ue);
      }
      _.subVectors(b, p).multiplyScalar(n.panSpeed), Z(_.x, _.y), p.copy(b);
    }
    function k(W) {
      const le = pi(W), Ee2 = W.pageX - le.x, Ue = W.pageY - le.y, nt = Math.sqrt(Ee2 * Ee2 + Ue * Ue);
      R.set(0, nt), w.set(0, Math.pow(R.y / M.y, n.zoomSpeed)), te2(w.y), M.copy(R);
    }
    function oe2(W) {
      n.enableZoom && k(W), n.enablePan && G2(W);
    }
    function ge(W) {
      n.enableZoom && k(W), n.enableRotate && ie(W);
    }
    function Re(W) {
      var le, Ee2;
      n.enabled !== false && (y.length === 0 && ((le = n.domElement) == null || le.ownerDocument.addEventListener("pointermove", Ke2), (Ee2 = n.domElement) == null || Ee2.ownerDocument.addEventListener("pointerup", He)), Cs(W), W.pointerType === "touch" ? yt2(W) : Et(W));
    }
    function Ke2(W) {
      n.enabled !== false && (W.pointerType === "touch" ? Bt(W) : un(W));
    }
    function He(W) {
      var le, Ee2, Ue;
      di(W), y.length === 0 && ((le = n.domElement) == null || le.releasePointerCapture(W.pointerId), (Ee2 = n.domElement) == null || Ee2.ownerDocument.removeEventListener("pointermove", Ke2), (Ue = n.domElement) == null || Ue.ownerDocument.removeEventListener("pointerup", He)), n.dispatchEvent(o), l = a.NONE;
    }
    function Et(W) {
      let le;
      switch (W.button) {
        case 0:
          le = n.mouseButtons.LEFT;
          break;
        case 1:
          le = n.mouseButtons.MIDDLE;
          break;
        case 2:
          le = n.mouseButtons.RIGHT;
          break;
        default:
          le = -1;
      }
      switch (le) {
        case MOUSE.DOLLY:
          if (n.enableZoom === false)
            return;
          B(W), l = a.DOLLY;
          break;
        case MOUSE.ROTATE:
          if (W.ctrlKey || W.metaKey || W.shiftKey) {
            if (n.enablePan === false)
              return;
            D(W), l = a.PAN;
          } else {
            if (n.enableRotate === false)
              return;
            I(W), l = a.ROTATE;
          }
          break;
        case MOUSE.PAN:
          if (W.ctrlKey || W.metaKey || W.shiftKey) {
            if (n.enableRotate === false)
              return;
            I(W), l = a.ROTATE;
          } else {
            if (n.enablePan === false)
              return;
            D(W), l = a.PAN;
          }
          break;
        default:
          l = a.NONE;
      }
      l !== a.NONE && n.dispatchEvent(i);
    }
    function un(W) {
      if (n.enabled !== false)
        switch (l) {
          case a.ROTATE:
            if (n.enableRotate === false)
              return;
            O(W);
            break;
          case a.DOLLY:
            if (n.enableZoom === false)
              return;
            z2(W);
            break;
          case a.PAN:
            if (n.enablePan === false)
              return;
            S(W);
            break;
        }
    }
    function En2(W) {
      n.enabled === false || n.enableZoom === false || l !== a.NONE && l !== a.ROTATE || (W.preventDefault(), n.dispatchEvent(i), P(W), n.dispatchEvent(o));
    }
    function Nt(W) {
      n.enabled === false || n.enablePan === false || L(W);
    }
    function yt2(W) {
      switch (Is(W), y.length) {
        case 1:
          switch (n.touches.ONE) {
            case TOUCH.ROTATE:
              if (n.enableRotate === false)
                return;
              X(), l = a.TOUCH_ROTATE;
              break;
            case TOUCH.PAN:
              if (n.enablePan === false)
                return;
              H2(), l = a.TOUCH_PAN;
              break;
            default:
              l = a.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (n.enableZoom === false && n.enablePan === false)
                return;
              K(), l = a.TOUCH_DOLLY_PAN;
              break;
            case TOUCH.DOLLY_ROTATE:
              if (n.enableZoom === false && n.enableRotate === false)
                return;
              se2(), l = a.TOUCH_DOLLY_ROTATE;
              break;
            default:
              l = a.NONE;
          }
          break;
        default:
          l = a.NONE;
      }
      l !== a.NONE && n.dispatchEvent(i);
    }
    function Bt(W) {
      switch (Is(W), l) {
        case a.TOUCH_ROTATE:
          if (n.enableRotate === false)
            return;
          ie(W), n.update();
          break;
        case a.TOUCH_PAN:
          if (n.enablePan === false)
            return;
          G2(W), n.update();
          break;
        case a.TOUCH_DOLLY_PAN:
          if (n.enableZoom === false && n.enablePan === false)
            return;
          oe2(W), n.update();
          break;
        case a.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === false && n.enableRotate === false)
            return;
          ge(W), n.update();
          break;
        default:
          l = a.NONE;
      }
    }
    function is(W) {
      n.enabled !== false && W.preventDefault();
    }
    function Cs(W) {
      y.push(W);
    }
    function di(W) {
      delete A[W.pointerId];
      for (let le = 0; le < y.length; le++)
        if (y[le].pointerId == W.pointerId) {
          y.splice(le, 1);
          return;
        }
    }
    function Is(W) {
      let le = A[W.pointerId];
      le === void 0 && (le = new Vector2(), A[W.pointerId] = le), le.set(W.pageX, W.pageY);
    }
    function pi(W) {
      const le = W.pointerId === y[0].pointerId ? y[1] : y[0];
      return A[le.pointerId];
    }
    this.dollyIn = (W = N2()) => {
      fe(W), n.update();
    }, this.dollyOut = (W = N2()) => {
      te2(W), n.update();
    }, this.getScale = () => d, this.setScale = (W) => {
      ee2(W), n.update();
    }, this.getZoomScale = () => N2(), t !== void 0 && this.connect(t), this.update();
  }
}
function ns(r) {
  if (typeof TextDecoder < "u")
    return new TextDecoder().decode(r);
  let e = "";
  for (let t = 0, n = r.length; t < n; t++)
    e += String.fromCharCode(r[t]);
  try {
    return decodeURIComponent(escape(e));
  } catch {
    return e;
  }
}
const In = "srgb", sn = "srgb-linear", hr = 3001, _h = 3e3;
class xh extends Loader {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Mh(t);
    }), this.register(function(t) {
      return new Sh(t);
    }), this.register(function(t) {
      return new kh(t);
    }), this.register(function(t) {
      return new Nh(t);
    }), this.register(function(t) {
      return new Bh(t);
    }), this.register(function(t) {
      return new Ph(t);
    }), this.register(function(t) {
      return new Rh(t);
    }), this.register(function(t) {
      return new Ch(t);
    }), this.register(function(t) {
      return new Ih(t);
    }), this.register(function(t) {
      return new Eh(t);
    }), this.register(function(t) {
      return new Oh(t);
    }), this.register(function(t) {
      return new Ah(t);
    }), this.register(function(t) {
      return new Lh(t);
    }), this.register(function(t) {
      return new Dh(t);
    }), this.register(function(t) {
      return new Th(t);
    }), this.register(function(t) {
      return new Uh(t);
    }), this.register(function(t) {
      return new Fh(t);
    });
  }
  load(e, t, n, s) {
    const i = this;
    let o;
    if (this.resourcePath !== "")
      o = this.resourcePath;
    else if (this.path !== "") {
      const c = LoaderUtils.extractUrlBase(e);
      o = LoaderUtils.resolveURL(c, this.path);
    } else
      o = LoaderUtils.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      s ? s(c) : console.error(c), i.manager.itemError(e), i.manager.itemEnd(e);
    }, l = new FileLoader(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(
      e,
      function(c) {
        try {
          i.parse(
            c,
            o,
            function(f) {
              t(f), i.manager.itemEnd(e);
            },
            a
          );
        } catch (f) {
          a(f);
        }
      },
      n,
      a
    );
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, s) {
    let i;
    const o = {}, a = {};
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (ns(new Uint8Array(e.slice(0, 4))) === Ja) {
        try {
          o[Oe.KHR_BINARY_GLTF] = new zh(e);
        } catch (f) {
          s && s(f);
          return;
        }
        i = JSON.parse(o[Oe.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(ns(new Uint8Array(e)));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Jh(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const f = this.pluginCallbacks[c](l);
      f.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[f.name] = f, o[f.name] = true;
    }
    if (i.extensionsUsed)
      for (let c = 0; c < i.extensionsUsed.length; ++c) {
        const f = i.extensionsUsed[c], u = i.extensionsRequired || [];
        switch (f) {
          case Oe.KHR_MATERIALS_UNLIT:
            o[f] = new bh();
            break;
          case Oe.KHR_DRACO_MESH_COMPRESSION:
            o[f] = new Gh(i, this.dracoLoader);
            break;
          case Oe.KHR_TEXTURE_TRANSFORM:
            o[f] = new Hh();
            break;
          case Oe.KHR_MESH_QUANTIZATION:
            o[f] = new jh();
            break;
          default:
            u.indexOf(f) >= 0 && a[f] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + f + '".');
        }
      }
    l.setExtensions(o), l.setPlugins(a), l.parse(n, s);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, i) {
      n.parse(e, t, s, i);
    });
  }
}
function wh() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const Oe = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Th {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let s = t.cache.get(n);
    if (s)
      return s;
    const i = t.json, l = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let c;
    const f = new Color(16777215);
    l.color !== void 0 && f.setRGB(l.color[0], l.color[1], l.color[2], sn);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new DirectionalLight(f), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new PointLight(f), c.distance = u;
        break;
      case "spot":
        c = new SpotLight(f), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, en(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, i = n.json.nodes[e], a = (i.extensions && i.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(t.cache, a, l);
    });
  }
}
class bh {
  constructor() {
    this.name = Oe.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return MeshBasicMaterial;
  }
  extendParams(e, t, n) {
    const s = [];
    e.color = new Color(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const o = i.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], sn), e.opacity = o[3];
      }
      i.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", i.baseColorTexture, In));
    }
    return Promise.all(s);
  }
}
class Eh {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class Mh {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Vector2(a, a);
    }
    return Promise.all(i);
  }
}
class Sh {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
  }
}
class Ah {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && i.push(
      n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)
    ), Promise.all(i);
  }
}
class Ph {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new Color(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = s.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], sn);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, In)), o.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(i);
  }
}
class Rh {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(i);
  }
}
class Ch {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Color().setRGB(
      a[0],
      a[1],
      a[2],
      sn
    ), Promise.all(i);
  }
}
class Ih {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class Oh {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Color().setRGB(a[0], a[1], a[2], sn), o.specularColorTexture !== void 0 && i.push(
      n.assignTexture(t, "specularColorMap", o.specularColorTexture, In)
    ), Promise.all(i);
  }
}
class Dh {
  constructor(e) {
    this.parser = e, this.name = Oe.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && i.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(i);
  }
}
class Lh {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && i.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(i);
  }
}
class kh {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name])
      return null;
    const i = s.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, o);
  }
}
class Nh {
  constructor(e) {
    this.parser = e, this.name = Oe.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const o = i.extensions[t], a = s.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, o.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Bh {
  constructor(e) {
    this.parser = e, this.name = Oe.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const o = i.extensions[t], a = s.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, o.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Uh {
  constructor(e) {
    this.name = Oe.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name], i = this.parser.getDependency("buffer", s.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(a) {
        const l = s.byteOffset || 0, c = s.byteLength || 0, f = s.count, u = s.byteStride, d = new Uint8Array(a, l, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(f, u, d, s.mode, s.filter).then(function(h2) {
          return h2.buffer;
        }) : o.ready.then(function() {
          const h2 = new ArrayBuffer(f * u);
          return o.decodeGltfBuffer(
            new Uint8Array(h2),
            f,
            u,
            d,
            s.mode,
            s.filter
          ), h2;
        });
      });
    } else
      return null;
  }
}
class Fh {
  constructor(e) {
    this.name = Oe.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const s = t.meshes[n.mesh];
    for (const c of s.primitives)
      if (c.mode !== At.TRIANGLES && c.mode !== At.TRIANGLE_STRIP && c.mode !== At.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in o)
      a.push(
        this.parser.getDependency("accessor", o[c]).then((f) => (l[c] = f, l[c]))
      );
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const f = c.pop(), u = f.isGroup ? f.children : [f], d = c[0].count, h2 = [];
      for (const m of u) {
        const g = new Matrix4(), v = new Vector3(), p = new Quaternion(), b = new Vector3(1, 1, 1), _ = new InstancedMesh(m.geometry, m.material, d);
        for (let M = 0; M < d; M++)
          l.TRANSLATION && v.fromBufferAttribute(l.TRANSLATION, M), l.ROTATION && p.fromBufferAttribute(l.ROTATION, M), l.SCALE && b.fromBufferAttribute(l.SCALE, M), _.setMatrixAt(M, g.compose(v, p, b));
        for (const M in l)
          if (M === "_COLOR_0") {
            const R = l[M];
            _.instanceColor = new InstancedBufferAttribute(R.array, R.itemSize, R.normalized);
          } else M !== "TRANSLATION" && M !== "ROTATION" && M !== "SCALE" && m.geometry.setAttribute(M, l[M]);
        Object3D.prototype.copy.call(_, m), this.parser.assignFinalMaterial(_), h2.push(_);
      }
      return f.isGroup ? (f.clear(), f.add(...h2), f) : h2[0];
    }));
  }
}
const Ja = "glTF", ls = 12, fr = { JSON: 1313821514, BIN: 5130562 };
class zh {
  constructor(e) {
    this.name = Oe.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, ls);
    if (this.header = {
      magic: ns(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, true),
      length: t.getUint32(8, true)
    }, this.header.magic !== Ja)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - ls, s = new DataView(e, ls);
    let i = 0;
    for (; i < n; ) {
      const o = s.getUint32(i, true);
      i += 4;
      const a = s.getUint32(i, true);
      if (i += 4, a === fr.JSON) {
        const l = new Uint8Array(e, ls + i, o);
        this.content = ns(l);
      } else if (a === fr.BIN) {
        const l = ls + i;
        this.body = e.slice(l, l + o);
      }
      i += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Gh {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Oe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, s = this.dracoLoader, i = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const f in o) {
      const u = _o[f] || f.toLowerCase();
      a[u] = o[f];
    }
    for (const f in e.attributes) {
      const u = _o[f] || f.toLowerCase();
      if (o[f] !== void 0) {
        const d = n.accessors[e.attributes[f]], h2 = Qn[d.componentType];
        c[u] = h2.name, l[u] = d.normalized === true;
      }
    }
    return t.getDependency("bufferView", i).then(function(f) {
      return new Promise(function(u, d) {
        s.decodeDracoFile(
          f,
          function(h2) {
            for (const m in h2.attributes) {
              const g = h2.attributes[m], v = l[m];
              v !== void 0 && (g.normalized = v);
            }
            u(h2);
          },
          a,
          c,
          sn,
          d
        );
      });
    });
  }
}
class Hh {
  constructor() {
    this.name = Oe.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class jh {
  constructor() {
    this.name = Oe.KHR_MESH_QUANTIZATION;
  }
}
class el extends Interpolant {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, i = e * s * 3 + s;
    for (let o = 0; o !== s; o++)
      t[o] = n[i + o];
    return t;
  }
  interpolate_(e, t, n, s) {
    const i = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, f = s - t, u = (n - t) / f, d = u * u, h2 = d * u, m = e * c, g = m - c, v = -2 * h2 + 3 * d, p = h2 - d, b = 1 - v, _ = p - d + u;
    for (let M = 0; M !== a; M++) {
      const R = o[g + M + a], w = o[g + M + l] * f, E = o[m + M + a], x = o[m + M] * f;
      i[M] = b * R + _ * w + v * E + p * x;
    }
    return i;
  }
}
const Vh = new Quaternion();
class Yh extends el {
  interpolate_(e, t, n, s) {
    const i = super.interpolate_(e, t, n, s);
    return Vh.fromArray(i).normalize().toArray(i), i;
  }
}
const At = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Qn = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, dr = {
  9728: NearestFilter,
  9729: LinearFilter,
  9984: NearestMipmapNearestFilter,
  9985: LinearMipmapNearestFilter,
  9986: NearestMipmapLinearFilter,
  9987: LinearMipmapLinearFilter
}, pr = {
  33071: ClampToEdgeWrapping,
  33648: MirroredRepeatWrapping,
  10497: RepeatWrapping
}, Ri = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, _o = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  // uv => uv1, 4 uv channels
  // https://github.com/mrdoob/three.js/pull/25943
  // https://github.com/mrdoob/three.js/pull/25788
  ...Ss >= 152 ? {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3"
  } : {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2"
  },
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, dn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Wh = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: InterpolateLinear,
  STEP: InterpolateDiscrete
}, Ci = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Xh(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new MeshStandardMaterial({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: false,
    depthTest: true,
    side: FrontSide
  })), r.DefaultMaterial;
}
function An(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function en(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function $h(r, e, t) {
  let n = false, s = false, i = false;
  for (let c = 0, f = e.length; c < f; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (s = true), u.COLOR_0 !== void 0 && (i = true), n && s && i)
      break;
  }
  if (!n && !s && !i)
    return Promise.resolve(r);
  const o = [], a = [], l = [];
  for (let c = 0, f = e.length; c < f; c++) {
    const u = e[c];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      o.push(d);
    }
    if (s) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      a.push(d);
    }
    if (i) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(l)
  ]).then(function(c) {
    const f = c[0], u = c[1], d = c[2];
    return n && (r.morphAttributes.position = f), s && (r.morphAttributes.normal = u), i && (r.morphAttributes.color = d), r.morphTargetsRelative = true, r;
  });
}
function Zh(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, s = t.length; n < s; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Kh(r) {
  let e;
  const t = r.extensions && r.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ii(t.attributes) : e = r.indices + ":" + Ii(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, s = r.targets.length; n < s; n++)
      e += ":" + Ii(r.targets[n]);
  return e;
}
function Ii(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, s = t.length; n < s; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function xo(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function qh(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Qh = new Matrix4();
class Jh {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new wh(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, s = false;
    typeof createImageBitmap > "u" || n || s ? this.textureLoader = new TextureLoader(this.options.manager) : this.textureLoader = new ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, s = this.json, i = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(
      this._invokeAll(function(o) {
        return o.beforeRoot && o.beforeRoot();
      })
    ).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(o) {
      const a = {
        scene: o[0][s.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: s.asset,
        parser: n,
        userData: {}
      };
      return An(i, a, s), en(a, s), Promise.all(
        n._invokeAll(function(l) {
          return l.afterRoot && l.afterRoot(a);
        })
      ).then(function() {
        for (const l of a.scenes)
          l.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const o = t[s].joints;
      for (let a = 0, l = o.length; a < l; a++)
        e[o[a]].isBone = true;
    }
    for (let s = 0, i = e.length; s < i; s++) {
      const o = e[s];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = true)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const s = n.clone(), i = (o, a) => {
      const l = this.associations.get(o);
      l != null && this.associations.set(a, l);
      for (const [c, f] of o.children.entries())
        i(f, a.children[c]);
    };
    return i(n, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s)
        return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      i && n.push(i);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
          }), !s)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(
        s.map(function(i, o) {
          return n.getDependency(e, o);
        })
      ), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(i, o) {
      n.load(LoaderUtils.resolveURL(t.uri, s.path), i, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const s = t.byteLength || 0, i = t.byteOffset || 0;
      return n.slice(i, i + s);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const o = Ri[s.type], a = Qn[s.componentType], l = s.normalized === true, c = new a(s.count * o);
      return Promise.resolve(new BufferAttribute(c, o, l));
    }
    const i = [];
    return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(o) {
      const a = o[0], l = Ri[s.type], c = Qn[s.componentType], f = c.BYTES_PER_ELEMENT, u = f * l, d = s.byteOffset || 0, h2 = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, m = s.normalized === true;
      let g, v;
      if (h2 && h2 !== u) {
        const p = Math.floor(d / h2), b = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + p + ":" + s.count;
        let _ = t.cache.get(b);
        _ || (g = new c(a, p * h2, s.count * h2 / f), _ = new InterleavedBuffer(g, h2 / f), t.cache.add(b, _)), v = new InterleavedBufferAttribute(
          _,
          l,
          d % h2 / f,
          m
        );
      } else
        a === null ? g = new c(s.count * l) : g = new c(a, d, s.count * l), v = new BufferAttribute(g, l, m);
      if (s.sparse !== void 0) {
        const p = Ri.SCALAR, b = Qn[s.sparse.indices.componentType], _ = s.sparse.indices.byteOffset || 0, M = s.sparse.values.byteOffset || 0, R = new b(
          o[1],
          _,
          s.sparse.count * p
        ), w = new c(o[2], M, s.sparse.count * l);
        a !== null && (v = new BufferAttribute(
          v.array.slice(),
          v.itemSize,
          v.normalized
        ));
        for (let E = 0, x = R.length; E < x; E++) {
          const T = R[E];
          if (v.setX(T, w[E * l]), l >= 2 && v.setY(T, w[E * l + 1]), l >= 3 && v.setZ(T, w[E * l + 2]), l >= 4 && v.setW(T, w[E * l + 3]), l >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return v;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, i = t.textures[e].source, o = t.images[i];
    let a = this.textureLoader;
    if (o.uri) {
      const l = n.manager.getHandler(o.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, i, a);
  }
  loadTextureImage(e, t, n) {
    const s = this, i = this.json, o = i.textures[e], a = i.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(f) {
      f.flipY = false, f.name = o.name || a.name || "", f.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (f.name = a.uri);
      const d = (i.samplers || {})[o.sampler] || {};
      return f.magFilter = dr[d.magFilter] || LinearFilter, f.minFilter = dr[d.minFilter] || LinearMipmapLinearFilter, f.wrapS = pr[d.wrapS] || RepeatWrapping, f.wrapT = pr[d.wrapT] || RepeatWrapping, s.associations.set(f, { textures: e }), f;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, s = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const o = s.images[e], a = self.URL || self.webkitURL;
    let l = o.uri || "", c = false;
    if (o.bufferView !== void 0)
      l = n.getDependency("bufferView", o.bufferView).then(function(u) {
        c = true;
        const d = new Blob([u], { type: o.mimeType });
        return l = a.createObjectURL(d), l;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const f = Promise.resolve(l).then(function(u) {
      return new Promise(function(d, h2) {
        let m = d;
        t.isImageBitmapLoader === true && (m = function(g) {
          const v = new Texture(g);
          v.needsUpdate = true, d(v);
        }), t.load(LoaderUtils.resolveURL(u, i.path), m, void 0, h2);
      });
    }).then(function(u) {
      return c === true && a.revokeObjectURL(l), en(u, o), u.userData.mimeType = o.mimeType || qh(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = f, f;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, s) {
    const i = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o)
        return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), i.extensions[Oe.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Oe.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = i.associations.get(o);
          o = i.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), i.associations.set(o, l);
        }
      }
      return s !== void 0 && (typeof s == "number" && (s = s === hr ? In : sn), "colorSpace" in o ? o.colorSpace = s : o.encoding = s === In ? hr : _h), e[t] = o, o;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new PointsMaterial(), Material.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new LineBasicMaterial(), Material.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
    }
    if (s || i || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      s && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), i && (l.vertexColors = true), o && (l.flatShading = true), s && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return MeshStandardMaterial;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, s = this.extensions, i = n.materials[e];
    let o;
    const a = {}, l = i.extensions || {}, c = [];
    if (l[Oe.KHR_MATERIALS_UNLIT]) {
      const u = s[Oe.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), c.push(u.extendParams(a, i, t));
    } else {
      const u = i.pbrMetallicRoughness || {};
      if (a.color = new Color(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], sn), a.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", u.baseColorTexture, In)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(
        Promise.all(
          this._invokeAll(function(d) {
            return d.extendMaterialParams && d.extendMaterialParams(e, a);
          })
        )
      );
    }
    i.doubleSided === true && (a.side = DoubleSide);
    const f = i.alphaMode || Ci.OPAQUE;
    if (f === Ci.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, f === Ci.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && o !== MeshBasicMaterial && (c.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new Vector2(1, 1), i.normalTexture.scale !== void 0)) {
      const u = i.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    if (i.occlusionTexture !== void 0 && o !== MeshBasicMaterial && (c.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && o !== MeshBasicMaterial) {
      const u = i.emissiveFactor;
      a.emissive = new Color().setRGB(
        u[0],
        u[1],
        u[2],
        sn
      );
    }
    return i.emissiveTexture !== void 0 && o !== MeshBasicMaterial && c.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, In)), Promise.all(c).then(function() {
      const u = new o(a);
      return i.name && (u.name = i.name), en(u, i), t.associations.set(u, { materials: e }), i.extensions && An(s, u, i), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = PropertyBinding.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, s = this.primitiveCache;
    function i(a) {
      return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return mr(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], f = Kh(c), u = s[f];
      if (u)
        o.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[Oe.KHR_DRACO_MESH_COMPRESSION] ? d = i(c) : d = mr(new BufferGeometry(), c, t), s[f] = { primitive: c, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, s = this.extensions, i = n.meshes[e], o = i.primitives, a = [];
    for (let l = 0, c = o.length; l < c; l++) {
      const f = o[l].material === void 0 ? Xh(this.cache) : this.getDependency("material", o[l].material);
      a.push(f);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), f = l[l.length - 1], u = [];
      for (let h2 = 0, m = f.length; h2 < m; h2++) {
        const g = f[h2], v = o[h2];
        let p;
        const b = c[h2];
        if (v.mode === At.TRIANGLES || v.mode === At.TRIANGLE_STRIP || v.mode === At.TRIANGLE_FAN || v.mode === void 0)
          p = i.isSkinnedMesh === true ? new SkinnedMesh(g, b) : new Mesh(g, b), p.isSkinnedMesh === true && p.normalizeSkinWeights(), v.mode === At.TRIANGLE_STRIP ? p.geometry = er(p.geometry, TriangleStripDrawMode) : v.mode === At.TRIANGLE_FAN && (p.geometry = er(p.geometry, TriangleFanDrawMode));
        else if (v.mode === At.LINES)
          p = new LineSegments(g, b);
        else if (v.mode === At.LINE_STRIP)
          p = new Line(g, b);
        else if (v.mode === At.LINE_LOOP)
          p = new LineLoop(g, b);
        else if (v.mode === At.POINTS)
          p = new Points(g, b);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + v.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && Zh(p, i), p.name = t.createUniqueName(i.name || "mesh_" + e), en(p, i), v.extensions && An(s, p, v), t.assignFinalMaterial(p), u.push(p);
      }
      for (let h2 = 0, m = u.length; h2 < m; h2++)
        t.associations.set(u[h2], {
          meshes: e,
          primitives: h2
        });
      if (u.length === 1)
        return i.extensions && An(s, u[0], i), u[0];
      const d = new Group();
      i.extensions && An(s, d, i), t.associations.set(d, { meshes: e });
      for (let h2 = 0, m = u.length; h2 < m; h2++)
        d.add(u[h2]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new PerspectiveCamera(
      MathUtils.radToDeg(s.yfov),
      s.aspectRatio || 1,
      s.znear || 1,
      s.zfar || 2e6
    ) : n.type === "orthographic" && (t = new OrthographicCamera(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), en(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let s = 0, i = t.joints.length; s < i; s++)
      n.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
      const i = s.pop(), o = s, a = [], l = [];
      for (let c = 0, f = o.length; c < f; c++) {
        const u = o[c];
        if (u) {
          a.push(u);
          const d = new Matrix4();
          i !== null && d.fromArray(i.array, c * 16), l.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Skeleton(a, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, s = t.animations[e], i = s.name ? s.name : "animation_" + e, o = [], a = [], l = [], c = [], f = [];
    for (let u = 0, d = s.channels.length; u < d; u++) {
      const h2 = s.channels[u], m = s.samplers[h2.sampler], g = h2.target, v = g.node, p = s.parameters !== void 0 ? s.parameters[m.input] : m.input, b = s.parameters !== void 0 ? s.parameters[m.output] : m.output;
      g.node !== void 0 && (o.push(this.getDependency("node", v)), a.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", b)), c.push(m), f.push(g));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(l),
      Promise.all(c),
      Promise.all(f)
    ]).then(function(u) {
      const d = u[0], h2 = u[1], m = u[2], g = u[3], v = u[4], p = [];
      for (let b = 0, _ = d.length; b < _; b++) {
        const M = d[b], R = h2[b], w = m[b], E = g[b], x = v[b];
        if (M === void 0)
          continue;
        M.updateMatrix && M.updateMatrix();
        const T = n._createAnimationTracks(M, R, w, E, x);
        if (T)
          for (let y = 0; y < T.length; y++)
            p.push(T[y]);
      }
      return new AnimationClip(i, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(i) {
      const o = n._getNodeRef(n.meshCache, s.mesh, i);
      return s.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh)
          for (let l = 0, c = s.weights.length; l < c; l++)
            a.morphTargetInfluences[l] = s.weights[l];
      }), o;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, s = t.nodes[e], i = n._loadNodeShallow(e), o = [], a = s.children || [];
    for (let c = 0, f = a.length; c < f; c++)
      o.push(n.getDependency("node", a[c]));
    const l = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
    return Promise.all([i, Promise.all(o), l]).then(function(c) {
      const f = c[0], u = c[1], d = c[2];
      d !== null && f.traverse(function(h2) {
        h2.isSkinnedMesh && h2.bind(d, Qh);
      });
      for (let h2 = 0, m = u.length; h2 < m; h2++)
        f.add(u[h2]);
      return f;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const i = t.nodes[e], o = i.name ? s.createUniqueName(i.name) : "", a = [], l = s._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), i.camera !== void 0 && a.push(
      s.getDependency("camera", i.camera).then(function(c) {
        return s._getNodeRef(s.cameraCache, i.camera, c);
      })
    ), s._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let f;
      if (i.isBone === true ? f = new Bone() : c.length > 1 ? f = new Group() : c.length === 1 ? f = c[0] : f = new Object3D(), f !== c[0])
        for (let u = 0, d = c.length; u < d; u++)
          f.add(c[u]);
      if (i.name && (f.userData.name = i.name, f.name = o), en(f, i), i.extensions && An(n, f, i), i.matrix !== void 0) {
        const u = new Matrix4();
        u.fromArray(i.matrix), f.applyMatrix4(u);
      } else
        i.translation !== void 0 && f.position.fromArray(i.translation), i.rotation !== void 0 && f.quaternion.fromArray(i.rotation), i.scale !== void 0 && f.scale.fromArray(i.scale);
      return s.associations.has(f) || s.associations.set(f, {}), s.associations.get(f).nodes = e, f;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], s = this, i = new Group();
    n.name && (i.name = s.createUniqueName(n.name)), en(i, n), n.extensions && An(t, i, n);
    const o = n.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++)
      a.push(s.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let f = 0, u = l.length; f < u; f++)
        i.add(l[f]);
      const c = (f) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, h2] of s.associations)
          (d instanceof Material || d instanceof Texture) && u.set(d, h2);
        return f.traverse((d) => {
          const h2 = s.associations.get(d);
          h2 != null && u.set(d, h2);
        }), u;
      };
      return s.associations = c(i), i;
    });
  }
  _createAnimationTracks(e, t, n, s, i) {
    const o = [], a = e.name ? e.name : e.uuid, l = [];
    dn[i.path] === dn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(a);
    let c;
    switch (dn[i.path]) {
      case dn.weights:
        c = NumberKeyframeTrack;
        break;
      case dn.rotation:
        c = QuaternionKeyframeTrack;
        break;
      case dn.position:
      case dn.scale:
        c = VectorKeyframeTrack;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = NumberKeyframeTrack;
            break;
          case 2:
          case 3:
          default:
            c = VectorKeyframeTrack;
            break;
        }
        break;
    }
    const f = s.interpolation !== void 0 ? Wh[s.interpolation] : InterpolateLinear, u = this._getArrayFromAccessor(n);
    for (let d = 0, h2 = l.length; d < h2; d++) {
      const m = new c(
        l[d] + "." + dn[i.path],
        t.array,
        u,
        f
      );
      s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), o.push(m);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = xo(t.constructor), s = new Float32Array(t.length);
      for (let i = 0, o = t.length; i < o; i++)
        s[i] = t[i] * n;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const s = this instanceof QuaternionKeyframeTrack ? Yh : el;
      return new s(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function ef(r, e, t) {
  const n = e.attributes, s = new Box3();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (s.set(new Vector3(l[0], l[1], l[2]), new Vector3(c[0], c[1], c[2])), a.normalized) {
        const f = xo(Qn[a.componentType]);
        s.min.multiplyScalar(f), s.max.multiplyScalar(f);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const a = new Vector3(), l = new Vector3();
    for (let c = 0, f = i.length; c < f; c++) {
      const u = i[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], h2 = d.min, m = d.max;
        if (h2 !== void 0 && m !== void 0) {
          if (l.setX(Math.max(Math.abs(h2[0]), Math.abs(m[0]))), l.setY(Math.max(Math.abs(h2[1]), Math.abs(m[1]))), l.setZ(Math.max(Math.abs(h2[2]), Math.abs(m[2]))), d.normalized) {
            const g = xo(Qn[d.componentType]);
            l.multiplyScalar(g);
          }
          a.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(a);
  }
  r.boundingBox = s;
  const o = new Sphere();
  s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, r.boundingSphere = o;
}
function mr(r, e, t) {
  const n = e.attributes, s = [];
  function i(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      r.setAttribute(a, l);
    });
  }
  for (const o in n) {
    const a = _o[o] || o.toLowerCase();
    a in r.attributes || s.push(i(n[o], a));
  }
  if (e.indices !== void 0 && !r.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      r.setIndex(a);
    });
    s.push(o);
  }
  return en(r, e), ef(r, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? $h(r, e.targets, t) : r;
  });
}
new Vector3();
const nf = {
  uniforms: {
    tDiffuse: { value: null },
    h: { value: 1 / 512 }
  },
  vertexShader: (
    /* glsl */
    `
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `
  ),
  fragmentShader: (
    /* glsl */
    `
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `
  )
}, sf = {
  uniforms: {
    tDiffuse: { value: null },
    v: { value: 1 / 512 }
  },
  vertexShader: (
    /* glsl */
    `
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `
  ),
  fragmentShader: (
    /* glsl */
    `

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `
  )
};
new Euler();
new Vector3();
var Ef = Object.defineProperty, Mf = (r, e, t) => e in r ? Ef(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, zo = (r, e, t) => (Mf(r, typeof e != "symbol" ? e + "" : e, t), t);
class Go {
  constructor(e) {
    zo(this, "data"), this.data = e;
  }
  generateShapes(e, t = 100, n) {
    const s = [], i = { letterSpacing: 0, lineHeight: 1, ...n }, o = Af(e, t, this.data, i);
    for (let a = 0, l = o.length; a < l; a++)
      Array.prototype.push.apply(s, o[a].toShapes(false));
    return s;
  }
}
zo(Go, "isFont");
zo(Go, "type");
function Af(r, e, t, n) {
  const s = Array.from(r), i = e / t.resolution, o = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, a = [];
  let l = 0, c = 0;
  for (let f = 0; f < s.length; f++) {
    const u = s[f];
    if (u === `
`)
      l = 0, c -= o * n.lineHeight;
    else {
      const d = Pf(u, i, l, c, t);
      d && (l += d.offsetX + n.letterSpacing, a.push(d.path));
    }
  }
  return a;
}
function Pf(r, e, t, n, s) {
  const i = s.glyphs[r] || s.glyphs["?"];
  if (!i) {
    console.error('THREE.Font: character "' + r + '" does not exists in font family ' + s.familyName + ".");
    return;
  }
  const o = new ShapePath();
  let a, l, c, f, u, d, h2, m;
  if (i.o) {
    const g = i._cachedOutline || (i._cachedOutline = i.o.split(" "));
    for (let v = 0, p = g.length; v < p; )
      switch (g[v++]) {
        case "m":
          a = parseInt(g[v++]) * e + t, l = parseInt(g[v++]) * e + n, o.moveTo(a, l);
          break;
        case "l":
          a = parseInt(g[v++]) * e + t, l = parseInt(g[v++]) * e + n, o.lineTo(a, l);
          break;
        case "q":
          c = parseInt(g[v++]) * e + t, f = parseInt(g[v++]) * e + n, u = parseInt(g[v++]) * e + t, d = parseInt(g[v++]) * e + n, o.quadraticCurveTo(u, d, c, f);
          break;
        case "b":
          c = parseInt(g[v++]) * e + t, f = parseInt(g[v++]) * e + n, u = parseInt(g[v++]) * e + t, d = parseInt(g[v++]) * e + n, h2 = parseInt(g[v++]) * e + t, m = parseInt(g[v++]) * e + n, o.bezierCurveTo(u, d, h2, m, c, f);
          break;
      }
  }
  return { offsetX: i.ha * e, path: o };
}
const Li = /* @__PURE__ */ new WeakMap();
class Cf extends Loader {
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  load(e, t, n, s) {
    const i = new FileLoader(this.manager);
    i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(
      e,
      (o) => {
        const a = {
          attributeIDs: this.defaultAttributeIDs,
          attributeTypes: this.defaultAttributeTypes,
          useUniqueIDs: false
        };
        this.decodeGeometry(o, a).then(t).catch(s);
      },
      n,
      s
    );
  }
  /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
  decodeDracoFile(e, t, n, s) {
    const i = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: s || this.defaultAttributeTypes,
      useUniqueIDs: !!n
    };
    this.decodeGeometry(e, i).then(t);
  }
  decodeGeometry(e, t) {
    for (const l in t.attributeTypes) {
      const c = t.attributeTypes[l];
      c.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[l] = c.name);
    }
    const n = JSON.stringify(t);
    if (Li.has(e)) {
      const l = Li.get(e);
      if (l.key === n)
        return l.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let s;
    const i = this.workerNextTaskID++, o = e.byteLength, a = this._getWorker(i, o).then((l) => (s = l, new Promise((c, f) => {
      s._callbacks[i] = { resolve: c, reject: f }, s.postMessage({ type: "decode", id: i, taskConfig: t, buffer: e }, [e]);
    }))).then((l) => this._createGeometry(l.geometry));
    return a.catch(() => true).then(() => {
      s && i && this._releaseTask(s, i);
    }), Li.set(e, {
      key: n,
      promise: a
    }), a;
  }
  _createGeometry(e) {
    const t = new BufferGeometry();
    e.index && t.setIndex(new BufferAttribute(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const s = e.attributes[n], i = s.name, o = s.array, a = s.itemSize;
      t.setAttribute(i, new BufferAttribute(o, a));
    }
    return t;
  }
  _loadLibrary(e, t) {
    const n = new FileLoader(this.manager);
    return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((s, i) => {
      n.load(e, s, void 0, i);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
      const s = n[0];
      e || (this.decoderConfig.wasmBinary = n[1]);
      const i = If.toString(), o = [
        "/* draco decoder */",
        s,
        "",
        "/* worker */",
        i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([o]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const s = new Worker(this.workerSourceURL);
        s._callbacks = {}, s._taskCosts = {}, s._taskLoad = 0, s.postMessage({ type: "init", decoderConfig: this.decoderConfig }), s.onmessage = function(i) {
          const o = i.data;
          switch (o.type) {
            case "decode":
              s._callbacks[o.id].resolve(o);
              break;
            case "error":
              s._callbacks[o.id].reject(o);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + o.type + '"');
          }
        }, this.workerPool.push(s);
      } else
        this.workerPool.sort(function(s, i) {
          return s._taskLoad > i._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return n._taskCosts[e] = t, n._taskLoad += t, n;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((e) => e._taskLoad)
    );
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this;
  }
}
function If() {
  let r, e;
  onmessage = function(o) {
    const a = o.data;
    switch (a.type) {
      case "init":
        r = a.decoderConfig, e = new Promise(function(f) {
          r.onModuleLoaded = function(u) {
            f({ draco: u });
          }, DracoDecoderModule(r);
        });
        break;
      case "decode":
        const l = a.buffer, c = a.taskConfig;
        e.then((f) => {
          const u = f.draco, d = new u.Decoder(), h2 = new u.DecoderBuffer();
          h2.Init(new Int8Array(l), l.byteLength);
          try {
            const m = t(u, d, h2, c), g = m.attributes.map((v) => v.array.buffer);
            m.index && g.push(m.index.array.buffer), self.postMessage({ type: "decode", id: a.id, geometry: m }, g);
          } catch (m) {
            console.error(m), self.postMessage({ type: "error", id: a.id, error: m.message });
          } finally {
            u.destroy(h2), u.destroy(d);
          }
        });
        break;
    }
  };
  function t(o, a, l, c) {
    const f = c.attributeIDs, u = c.attributeTypes;
    let d, h2;
    const m = a.GetEncodedGeometryType(l);
    if (m === o.TRIANGULAR_MESH)
      d = new o.Mesh(), h2 = a.DecodeBufferToMesh(l, d);
    else if (m === o.POINT_CLOUD)
      d = new o.PointCloud(), h2 = a.DecodeBufferToPointCloud(l, d);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!h2.ok() || d.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + h2.error_msg());
    const g = { index: null, attributes: [] };
    for (const v in f) {
      const p = self[u[v]];
      let b, _;
      if (c.useUniqueIDs)
        _ = f[v], b = a.GetAttributeByUniqueId(d, _);
      else {
        if (_ = a.GetAttributeId(d, o[f[v]]), _ === -1)
          continue;
        b = a.GetAttribute(d, _);
      }
      g.attributes.push(s(o, a, d, v, p, b));
    }
    return m === o.TRIANGULAR_MESH && (g.index = n(o, a, d)), o.destroy(d), g;
  }
  function n(o, a, l) {
    const f = l.num_faces() * 3, u = f * 4, d = o._malloc(u);
    a.GetTrianglesUInt32Array(l, u, d);
    const h2 = new Uint32Array(o.HEAPF32.buffer, d, f).slice();
    return o._free(d), { array: h2, itemSize: 1 };
  }
  function s(o, a, l, c, f, u) {
    const d = u.num_components(), m = l.num_points() * d, g = m * f.BYTES_PER_ELEMENT, v = i(o, f), p = o._malloc(g);
    a.GetAttributeDataArrayForAllPoints(l, u, v, g, p);
    const b = new f(o.HEAPF32.buffer, p, m).slice();
    return o._free(p), {
      name: c,
      array: b,
      itemSize: d
    };
  }
  function i(o, a) {
    switch (a) {
      case Float32Array:
        return o.DT_FLOAT32;
      case Int8Array:
        return o.DT_INT8;
      case Int16Array:
        return o.DT_INT16;
      case Int32Array:
        return o.DT_INT32;
      case Uint8Array:
        return o.DT_UINT8;
      case Uint16Array:
        return o.DT_UINT16;
      case Uint32Array:
        return o.DT_UINT32;
    }
  }
}
new Box3();
new Vector3();
new Vector4();
new Vector3();
new Vector3();
new Vector4();
new Vector4();
new Vector4();
new Vector3();
new Matrix4();
new Line3();
new Vector3();
new Box3();
new Sphere();
new Vector4();
MathUtils.clamp;
MathUtils.lerp;
No(
  {
    screenspace: false,
    color: new Color("black"),
    opacity: 1,
    thickness: 0.05,
    size: new Vector2(1, 1)
  },
  `#include <common>
   #include <morphtarget_pars_vertex>
   #include <skinning_pars_vertex>
   uniform float thickness;
   uniform bool screenspace;
   uniform vec2 size;
   void main() {
     #if defined (USE_SKINNING)
       #include <beginnormal_vertex>
       #include <morphnormal_vertex>
       #include <skinbase_vertex>
       #include <skinnormal_vertex>
       #include <defaultnormal_vertex>
     #endif
     #include <begin_vertex>
     #include <morphtarget_vertex>
     #include <skinning_vertex>
     #include <project_vertex>
     vec4 tNormal = vec4(normal, 0.0);
     vec4 tPosition = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       tNormal = instanceMatrix * tNormal;
       tPosition = instanceMatrix * tPosition;
     #endif
     if (screenspace) {
       vec3 newPosition = tPosition.xyz + tNormal.xyz * thickness;
       gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
     } else {
       vec4 clipPosition = projectionMatrix * modelViewMatrix * tPosition;
       vec4 clipNormal = projectionMatrix * modelViewMatrix * tNormal;
       vec2 offset = normalize(clipNormal.xy) * thickness / size * clipPosition.w * 2.0;
       clipPosition.xy += offset;
       gl_Position = clipPosition;
     }
   }`,
  `uniform vec3 color;
   uniform float opacity;
   void main(){
     gl_FragColor = vec4(color, opacity);
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
   }`
);
const id = ["args", "material-uniforms-color-value"];
/* @__PURE__ */ defineComponent({
  __name: "Reflector",
  props: {
    color: { default: "#333" },
    textureWidth: { default: 512 },
    textureHeight: { default: 512 },
    clipBias: { default: 0 },
    multisample: { default: 4 },
    shader: { default: vo.ReflectorShader }
  },
  setup(r, { expose: e }) {
    const t = r, { extend: n, invalidate: s } = me(), i = shallowRef();
    n({ Reflector: vo });
    const { color: o, textureWidth: a, textureHeight: l, clipBias: c, multisample: f, shader: u } = toRefs$1(t);
    return watch(t, () => s()), e({
      instance: i
    }), (d, h2) => (openBlock(), createElementBlock("TresReflector", {
      ref_key: "reflectorRef",
      ref: i,
      args: [void 0, { textureWidth: unref(a), textureHeight: unref(l), clipBias: unref(c), multisample: unref(f), shader: unref(u) }],
      "material-uniforms-color-value": unref(o)
    }, [
      renderSlot(d.$slots, "default", {}, () => [
        h2[0] || (h2[0] = createElementVNode("TresPlaneGeometry", { args: [5, 5] }, null, -1))
      ])
    ], 8, id));
  }
});
new Jn.Vector3();
new Jn.Vector3();
new Jn.Vector3();
var Gi;
/Mac/.test((Gi = globalThis == null ? void 0 : globalThis.navigator) === null || Gi === void 0 ? void 0 : Gi.platform);
const bd = ["target", "auto-rotate", "auto-rotate-speed", "enable-damping", "damping-factor", "enable-pan", "key-pan-speed", "keys", "max-azimuth-angle", "min-azimuth-angle", "max-polar-angle", "min-polar-angle", "min-distance", "max-distance", "min-zoom", "max-zoom", "touches", "enable-zoom", "zoom-speed", "enable-rotate", "rotate-speed", "mouse-buttons", "args"], av = /* @__PURE__ */ defineComponent({
  __name: "OrbitControls",
  props: {
    makeDefault: { type: Boolean, default: false },
    camera: {},
    domElement: {},
    target: { default: () => [0, 0, 0] },
    enableDamping: { type: Boolean, default: true },
    dampingFactor: { default: 0.05 },
    autoRotate: { type: Boolean, default: false },
    autoRotateSpeed: { default: 2 },
    enablePan: { type: Boolean, default: true },
    keyPanSpeed: { default: 7 },
    keys: {},
    maxAzimuthAngle: { default: Number.POSITIVE_INFINITY },
    minAzimuthAngle: { default: Number.NEGATIVE_INFINITY },
    maxPolarAngle: { default: Math.PI },
    minPolarAngle: { default: 0 },
    minDistance: { default: 0 },
    maxDistance: { default: Number.POSITIVE_INFINITY },
    minZoom: { default: 0 },
    maxZoom: { default: Number.POSITIVE_INFINITY },
    touches: { default: () => ({ ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN }) },
    enableZoom: { type: Boolean, default: true },
    zoomSpeed: { default: 1 },
    enableRotate: { type: Boolean, default: true },
    rotateSpeed: { default: 1 },
    mouseButtons: { default: () => ({ LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN }) }
  },
  emits: ["change", "start", "end"],
  setup(r, { expose: e, emit: t }) {
    const n = r, s = t, {
      makeDefault: i,
      autoRotate: o,
      autoRotateSpeed: a,
      enableDamping: l,
      dampingFactor: c,
      enablePan: f,
      keyPanSpeed: u,
      maxAzimuthAngle: d,
      minAzimuthAngle: h2,
      maxPolarAngle: m,
      minPolarAngle: g,
      minDistance: v,
      maxDistance: p,
      minZoom: b,
      maxZoom: _,
      enableZoom: M,
      zoomSpeed: R,
      enableRotate: w,
      touches: E,
      rotateSpeed: x,
      target: T,
      mouseButtons: y
    } = toRefs$1(n), { camera: A, renderer: C, extend: N2, controls: U, invalidate: Y } = me(), V2 = shallowRef(null);
    N2({ OrbitControls: Qa }), watch(V2, (ee2) => {
      ne(), ee2 && i.value ? U.value = ee2 : U.value = null;
    });
    function ne() {
      Xe(V2.value, "change", () => {
        s("change", V2.value), Y();
      }), Xe(V2.value, "start", () => s("start", V2.value)), Xe(V2.value, "end", () => s("end", V2.value));
    }
    const { onBeforeRender: Z } = Zr$1();
    return Z(({ invalidate: ee2 }) => {
      V2.value && (l.value || o.value) && (V2.value.update(), o.value && ee2());
    }), onUnmounted(() => {
      V2.value && V2.value.dispose();
    }), e({ instance: V2 }), (ee2, te2) => (ee2.camera || unref(A)) && (ee2.domElement || unref(C)) ? (openBlock(), createElementBlock("TresOrbitControls", {
      key: 0,
      ref_key: "controlsRef",
      ref: V2,
      target: unref(T),
      "auto-rotate": unref(o),
      "auto-rotate-speed": unref(a),
      "enable-damping": unref(l),
      "damping-factor": unref(c),
      "enable-pan": unref(f),
      "key-pan-speed": unref(u),
      keys: ee2.keys,
      "max-azimuth-angle": unref(d),
      "min-azimuth-angle": unref(h2),
      "max-polar-angle": unref(m),
      "min-polar-angle": unref(g),
      "min-distance": unref(v),
      "max-distance": unref(p),
      "min-zoom": unref(b),
      "max-zoom": unref(_),
      touches: unref(E),
      "enable-zoom": unref(M),
      "zoom-speed": unref(R),
      "enable-rotate": unref(w),
      "rotate-speed": unref(x),
      "mouse-buttons": unref(y),
      args: [ee2.camera || unref(A), ee2.domElement || unref(C).domElement]
    }, null, 8, bd)) : createCommentVNode("", true);
  }
});
class Od extends Loader {
  constructor(t) {
    super(t);
    pe(this, "gltfLoader");
    this.gltfLoader = new xh(t);
  }
  /**
   * Load a GLTF model from a URL or array of URLs.
   * If an array is provided, only the first URL will be used.
   *
   * @param {(string | string[])} url - URL or array of URLs to load
   * @param {(result: GLTF) => void} onLoad - Callback when the model is loaded
   * @param {(event: ProgressEvent<EventTarget>) => void} [onProgress] - Loading progress callback
   * @param {(event: ErrorEvent) => void} [onError] - Error callback
   */
  load(t, n, s, i) {
    const o = Array.isArray(t) ? t[0] : t;
    this.gltfLoader.load(o, n, s, i);
  }
  /**
   * Asynchronously load a GLTF model.
   *
   * @param {string | string[]} url - URL or array of URLs to load
   * @returns {Promise<GLTF>} Promise that resolves with the loaded model
   */
  async loadAsync(t) {
    const n = Array.isArray(t) ? t[0] : t;
    return this.gltfLoader.loadAsync(n);
  }
  /**
   * Set the DRACO loader for compressed models.
   *
   * @param {DRACOLoader} dracoLoader - The DRACO loader instance
   * @returns {GLTFLoader} The loader instance for chaining
   */
  setDRACOLoader(t) {
    return this.gltfLoader.setDRACOLoader(t);
  }
}
const Dd = Od;
let yn = null;
function Ld(r, e) {
  return (t) => {
    r.draco && (yn || (yn = new Cf()), yn.setDecoderPath(r.decoderPath || "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"), t.setDRACOLoader && t.setDRACOLoader(yn));
  };
}
async function kd(r, e = {
  draco: false
}, t) {
  const n = await Dn(Dd, r, Ld(e));
  return yn == null || yn.dispose(), yn = null, n;
}
function Ps(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Ks(r) {
  throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Xi = { exports: {} }, jr;
function zd() {
  return jr || (jr = 1, function(r, e) {
    (function(t) {
      r.exports = t();
    })(function() {
      return function t(n, s, i) {
        function o(c, f) {
          if (!s[c]) {
            if (!n[c]) {
              var u = typeof Ks == "function" && Ks;
              if (!f && u) return u(c, true);
              if (a) return a(c, true);
              throw new Error("Cannot find module '" + c + "'");
            }
            f = s[c] = { exports: {} }, n[c][0].call(f.exports, function(d) {
              var h2 = n[c][1][d];
              return o(h2 || d);
            }, f, f.exports, t, n, s, i);
          }
          return s[c].exports;
        }
        for (var a = typeof Ks == "function" && Ks, l = 0; l < i.length; l++) o(i[l]);
        return o;
      }({ 1: [function(t, n, s) {
        (function(i, o, a, l, c, f, u, d, h2) {
          var m = t("crypto");
          function g(w, E) {
            E = b(w, E);
            var x;
            return (x = E.algorithm !== "passthrough" ? m.createHash(E.algorithm) : new R()).write === void 0 && (x.write = x.update, x.end = x.update), M(E, x).dispatch(w), x.update || x.end(""), x.digest ? x.digest(E.encoding === "buffer" ? void 0 : E.encoding) : (w = x.read(), E.encoding !== "buffer" ? w.toString(E.encoding) : w);
          }
          (s = n.exports = g).sha1 = function(w) {
            return g(w);
          }, s.keys = function(w) {
            return g(w, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
          }, s.MD5 = function(w) {
            return g(w, { algorithm: "md5", encoding: "hex" });
          }, s.keysMD5 = function(w) {
            return g(w, { algorithm: "md5", encoding: "hex", excludeValues: true });
          };
          var v = m.getHashes ? m.getHashes().slice() : ["sha1", "md5"], p = (v.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
          function b(w, E) {
            var x = {};
            if (x.algorithm = (E = E || {}).algorithm || "sha1", x.encoding = E.encoding || "hex", x.excludeValues = !!E.excludeValues, x.algorithm = x.algorithm.toLowerCase(), x.encoding = x.encoding.toLowerCase(), x.ignoreUnknown = E.ignoreUnknown === true, x.respectType = E.respectType !== false, x.respectFunctionNames = E.respectFunctionNames !== false, x.respectFunctionProperties = E.respectFunctionProperties !== false, x.unorderedArrays = E.unorderedArrays === true, x.unorderedSets = E.unorderedSets !== false, x.unorderedObjects = E.unorderedObjects !== false, x.replacer = E.replacer || void 0, x.excludeKeys = E.excludeKeys || void 0, w === void 0) throw new Error("Object argument required.");
            for (var T = 0; T < v.length; ++T) v[T].toLowerCase() === x.algorithm.toLowerCase() && (x.algorithm = v[T]);
            if (v.indexOf(x.algorithm) === -1) throw new Error('Algorithm "' + x.algorithm + '"  not supported. supported values: ' + v.join(", "));
            if (p.indexOf(x.encoding) === -1 && x.algorithm !== "passthrough") throw new Error('Encoding "' + x.encoding + '"  not supported. supported values: ' + p.join(", "));
            return x;
          }
          function _(w) {
            if (typeof w == "function") return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(w)) != null;
          }
          function M(w, E, x) {
            x = x || [];
            function T(y) {
              return E.update ? E.update(y, "utf8") : E.write(y, "utf8");
            }
            return { dispatch: function(y) {
              return this["_" + ((y = w.replacer ? w.replacer(y) : y) === null ? "null" : typeof y)](y);
            }, _object: function(y) {
              var A, C = Object.prototype.toString.call(y), N2 = /\[object (.*)\]/i.exec(C);
              if (N2 = (N2 = N2 ? N2[1] : "unknown:[" + C + "]").toLowerCase(), 0 <= (C = x.indexOf(y))) return this.dispatch("[CIRCULAR:" + C + "]");
              if (x.push(y), a !== void 0 && a.isBuffer && a.isBuffer(y)) return T("buffer:"), T(y);
              if (N2 === "object" || N2 === "function" || N2 === "asyncfunction") return C = Object.keys(y), w.unorderedObjects && (C = C.sort()), w.respectType === false || _(y) || C.splice(0, 0, "prototype", "__proto__", "constructor"), w.excludeKeys && (C = C.filter(function(U) {
                return !w.excludeKeys(U);
              })), T("object:" + C.length + ":"), A = this, C.forEach(function(U) {
                A.dispatch(U), T(":"), w.excludeValues || A.dispatch(y[U]), T(",");
              });
              if (!this["_" + N2]) {
                if (w.ignoreUnknown) return T("[" + N2 + "]");
                throw new Error('Unknown object type "' + N2 + '"');
              }
              this["_" + N2](y);
            }, _array: function(y, U) {
              U = U !== void 0 ? U : w.unorderedArrays !== false;
              var C = this;
              if (T("array:" + y.length + ":"), !U || y.length <= 1) return y.forEach(function(Y) {
                return C.dispatch(Y);
              });
              var N2 = [], U = y.map(function(Y) {
                var V2 = new R(), ne = x.slice();
                return M(w, V2, ne).dispatch(Y), N2 = N2.concat(ne.slice(x.length)), V2.read().toString();
              });
              return x = x.concat(N2), U.sort(), this._array(U, false);
            }, _date: function(y) {
              return T("date:" + y.toJSON());
            }, _symbol: function(y) {
              return T("symbol:" + y.toString());
            }, _error: function(y) {
              return T("error:" + y.toString());
            }, _boolean: function(y) {
              return T("bool:" + y.toString());
            }, _string: function(y) {
              T("string:" + y.length + ":"), T(y.toString());
            }, _function: function(y) {
              T("fn:"), _(y) ? this.dispatch("[native]") : this.dispatch(y.toString()), w.respectFunctionNames !== false && this.dispatch("function-name:" + String(y.name)), w.respectFunctionProperties && this._object(y);
            }, _number: function(y) {
              return T("number:" + y.toString());
            }, _xml: function(y) {
              return T("xml:" + y.toString());
            }, _null: function() {
              return T("Null");
            }, _undefined: function() {
              return T("Undefined");
            }, _regexp: function(y) {
              return T("regex:" + y.toString());
            }, _uint8array: function(y) {
              return T("uint8array:"), this.dispatch(Array.prototype.slice.call(y));
            }, _uint8clampedarray: function(y) {
              return T("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(y));
            }, _int8array: function(y) {
              return T("int8array:"), this.dispatch(Array.prototype.slice.call(y));
            }, _uint16array: function(y) {
              return T("uint16array:"), this.dispatch(Array.prototype.slice.call(y));
            }, _int16array: function(y) {
              return T("int16array:"), this.dispatch(Array.prototype.slice.call(y));
            }, _uint32array: function(y) {
              return T("uint32array:"), this.dispatch(Array.prototype.slice.call(y));
            }, _int32array: function(y) {
              return T("int32array:"), this.dispatch(Array.prototype.slice.call(y));
            }, _float32array: function(y) {
              return T("float32array:"), this.dispatch(Array.prototype.slice.call(y));
            }, _float64array: function(y) {
              return T("float64array:"), this.dispatch(Array.prototype.slice.call(y));
            }, _arraybuffer: function(y) {
              return T("arraybuffer:"), this.dispatch(new Uint8Array(y));
            }, _url: function(y) {
              return T("url:" + y.toString());
            }, _map: function(y) {
              return T("map:"), y = Array.from(y), this._array(y, w.unorderedSets !== false);
            }, _set: function(y) {
              return T("set:"), y = Array.from(y), this._array(y, w.unorderedSets !== false);
            }, _file: function(y) {
              return T("file:"), this.dispatch([y.name, y.size, y.type, y.lastModfied]);
            }, _blob: function() {
              if (w.ignoreUnknown) return T("[blob]");
              throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
            }, _domwindow: function() {
              return T("domwindow");
            }, _bigint: function(y) {
              return T("bigint:" + y.toString());
            }, _process: function() {
              return T("process");
            }, _timer: function() {
              return T("timer");
            }, _pipe: function() {
              return T("pipe");
            }, _tcp: function() {
              return T("tcp");
            }, _udp: function() {
              return T("udp");
            }, _tty: function() {
              return T("tty");
            }, _statwatcher: function() {
              return T("statwatcher");
            }, _securecontext: function() {
              return T("securecontext");
            }, _connection: function() {
              return T("connection");
            }, _zlib: function() {
              return T("zlib");
            }, _context: function() {
              return T("context");
            }, _nodescript: function() {
              return T("nodescript");
            }, _httpparser: function() {
              return T("httpparser");
            }, _dataview: function() {
              return T("dataview");
            }, _signal: function() {
              return T("signal");
            }, _fsevent: function() {
              return T("fsevent");
            }, _tlswrap: function() {
              return T("tlswrap");
            } };
          }
          function R() {
            return { buf: "", write: function(w) {
              this.buf += w;
            }, end: function(w) {
              this.buf += w;
            }, read: function() {
              return this.buf;
            } };
          }
          s.writeToStream = function(w, E, x) {
            return x === void 0 && (x = E, E = {}), M(E = b(w, E), x).dispatch(w);
          };
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
      }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(t, n, s) {
        (function(i, o, a, l, c, f, u, d, h2) {
          (function(m) {
            var g = typeof Uint8Array < "u" ? Uint8Array : Array, v = 43, p = 47, b = 48, _ = 97, M = 65, R = 45, w = 95;
            function E(x) {
              return x = x.charCodeAt(0), x === v || x === R ? 62 : x === p || x === w ? 63 : x < b ? -1 : x < b + 10 ? x - b + 26 + 26 : x < M + 26 ? x - M : x < _ + 26 ? x - _ + 26 : void 0;
            }
            m.toByteArray = function(x) {
              var T, y;
              if (0 < x.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
              var A = x.length, A = x.charAt(A - 2) === "=" ? 2 : x.charAt(A - 1) === "=" ? 1 : 0, C = new g(3 * x.length / 4 - A), N2 = 0 < A ? x.length - 4 : x.length, U = 0;
              function Y(V2) {
                C[U++] = V2;
              }
              for (T = 0; T < N2; T += 4, 0) Y((16711680 & (y = E(x.charAt(T)) << 18 | E(x.charAt(T + 1)) << 12 | E(x.charAt(T + 2)) << 6 | E(x.charAt(T + 3)))) >> 16), Y((65280 & y) >> 8), Y(255 & y);
              return A == 2 ? Y(255 & (y = E(x.charAt(T)) << 2 | E(x.charAt(T + 1)) >> 4)) : A == 1 && (Y((y = E(x.charAt(T)) << 10 | E(x.charAt(T + 1)) << 4 | E(x.charAt(T + 2)) >> 2) >> 8 & 255), Y(255 & y)), C;
            }, m.fromByteArray = function(x) {
              var T, y, A, C, N2 = x.length % 3, U = "";
              function Y(V2) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(V2);
              }
              for (T = 0, A = x.length - N2; T < A; T += 3) y = (x[T] << 16) + (x[T + 1] << 8) + x[T + 2], U += Y((C = y) >> 18 & 63) + Y(C >> 12 & 63) + Y(C >> 6 & 63) + Y(63 & C);
              switch (N2) {
                case 1:
                  U = (U += Y((y = x[x.length - 1]) >> 2)) + Y(y << 4 & 63) + "==";
                  break;
                case 2:
                  U = (U = (U += Y((y = (x[x.length - 2] << 8) + x[x.length - 1]) >> 10)) + Y(y >> 4 & 63)) + Y(y << 2 & 63) + "=";
              }
              return U;
            };
          })(s === void 0 ? this.base64js = {} : s);
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
      }, { buffer: 3, lYpoI2: 11 }], 3: [function(t, n, s) {
        (function(i, o, v, l, c, f, u, d, h2) {
          var m = t("base64-js"), g = t("ieee754");
          function v(S, P, L) {
            if (!(this instanceof v)) return new v(S, P, L);
            var X, H2, j, K, se2 = typeof S;
            if (P === "base64" && se2 == "string") for (S = (K = S).trim ? K.trim() : K.replace(/^\s+|\s+$/g, ""); S.length % 4 != 0; ) S += "=";
            if (se2 == "number") X = Z(S);
            else if (se2 == "string") X = v.byteLength(S, P);
            else {
              if (se2 != "object") throw new Error("First argument needs to be a number, array or string.");
              X = Z(S.length);
            }
            if (v._useTypedArrays ? H2 = v._augment(new Uint8Array(X)) : ((H2 = this).length = X, H2._isBuffer = true), v._useTypedArrays && typeof S.byteLength == "number") H2._set(S);
            else if (ee2(K = S) || v.isBuffer(K) || K && typeof K == "object" && typeof K.length == "number") for (j = 0; j < X; j++) v.isBuffer(S) ? H2[j] = S.readUInt8(j) : H2[j] = S[j];
            else if (se2 == "string") H2.write(S, 0, P);
            else if (se2 == "number" && !v._useTypedArrays && !L) for (j = 0; j < X; j++) H2[j] = 0;
            return H2;
          }
          function p(S, P, L, X) {
            return v._charsWritten = we(function(H2) {
              for (var j = [], K = 0; K < H2.length; K++) j.push(255 & H2.charCodeAt(K));
              return j;
            }(P), S, L, X);
          }
          function b(S, P, L, X) {
            return v._charsWritten = we(function(H2) {
              for (var j, K, se2 = [], ie = 0; ie < H2.length; ie++) K = H2.charCodeAt(ie), j = K >> 8, K = K % 256, se2.push(K), se2.push(j);
              return se2;
            }(P), S, L, X);
          }
          function _(S, P, L) {
            var X = "";
            L = Math.min(S.length, L);
            for (var H2 = P; H2 < L; H2++) X += String.fromCharCode(S[H2]);
            return X;
          }
          function M(S, P, L, j) {
            j || (z2(typeof L == "boolean", "missing or invalid endian"), z2(P != null, "missing offset"), z2(P + 1 < S.length, "Trying to read beyond buffer length"));
            var H2, j = S.length;
            if (!(j <= P)) return L ? (H2 = S[P], P + 1 < j && (H2 |= S[P + 1] << 8)) : (H2 = S[P] << 8, P + 1 < j && (H2 |= S[P + 1])), H2;
          }
          function R(S, P, L, j) {
            j || (z2(typeof L == "boolean", "missing or invalid endian"), z2(P != null, "missing offset"), z2(P + 3 < S.length, "Trying to read beyond buffer length"));
            var H2, j = S.length;
            if (!(j <= P)) return L ? (P + 2 < j && (H2 = S[P + 2] << 16), P + 1 < j && (H2 |= S[P + 1] << 8), H2 |= S[P], P + 3 < j && (H2 += S[P + 3] << 24 >>> 0)) : (P + 1 < j && (H2 = S[P + 1] << 16), P + 2 < j && (H2 |= S[P + 2] << 8), P + 3 < j && (H2 |= S[P + 3]), H2 += S[P] << 24 >>> 0), H2;
          }
          function w(S, P, L, X) {
            if (X || (z2(typeof L == "boolean", "missing or invalid endian"), z2(P != null, "missing offset"), z2(P + 1 < S.length, "Trying to read beyond buffer length")), !(S.length <= P)) return X = M(S, P, L, true), 32768 & X ? -1 * (65535 - X + 1) : X;
          }
          function E(S, P, L, X) {
            if (X || (z2(typeof L == "boolean", "missing or invalid endian"), z2(P != null, "missing offset"), z2(P + 3 < S.length, "Trying to read beyond buffer length")), !(S.length <= P)) return X = R(S, P, L, true), 2147483648 & X ? -1 * (4294967295 - X + 1) : X;
          }
          function x(S, P, L, X) {
            return X || (z2(typeof L == "boolean", "missing or invalid endian"), z2(P + 3 < S.length, "Trying to read beyond buffer length")), g.read(S, P, L, 23, 4);
          }
          function T(S, P, L, X) {
            return X || (z2(typeof L == "boolean", "missing or invalid endian"), z2(P + 7 < S.length, "Trying to read beyond buffer length")), g.read(S, P, L, 52, 8);
          }
          function y(S, P, L, X, H2) {
            if (H2 || (z2(P != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 1 < S.length, "trying to write beyond buffer length"), B(P, 65535)), H2 = S.length, !(H2 <= L)) for (var j = 0, K = Math.min(H2 - L, 2); j < K; j++) S[L + j] = (P & 255 << 8 * (X ? j : 1 - j)) >>> 8 * (X ? j : 1 - j);
          }
          function A(S, P, L, X, H2) {
            if (H2 || (z2(P != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 3 < S.length, "trying to write beyond buffer length"), B(P, 4294967295)), H2 = S.length, !(H2 <= L)) for (var j = 0, K = Math.min(H2 - L, 4); j < K; j++) S[L + j] = P >>> 8 * (X ? j : 3 - j) & 255;
          }
          function C(S, P, L, X, H2) {
            H2 || (z2(P != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 1 < S.length, "Trying to write beyond buffer length"), D(P, 32767, -32768)), S.length <= L || y(S, 0 <= P ? P : 65535 + P + 1, L, X, H2);
          }
          function N2(S, P, L, X, H2) {
            H2 || (z2(P != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 3 < S.length, "Trying to write beyond buffer length"), D(P, 2147483647, -2147483648)), S.length <= L || A(S, 0 <= P ? P : 4294967295 + P + 1, L, X, H2);
          }
          function U(S, P, L, X, H2) {
            H2 || (z2(P != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 3 < S.length, "Trying to write beyond buffer length"), O(P, 34028234663852886e22, -34028234663852886e22)), S.length <= L || g.write(S, P, L, X, 23, 4);
          }
          function Y(S, P, L, X, H2) {
            H2 || (z2(P != null, "missing value"), z2(typeof X == "boolean", "missing or invalid endian"), z2(L != null, "missing offset"), z2(L + 7 < S.length, "Trying to write beyond buffer length"), O(P, 17976931348623157e292, -17976931348623157e292)), S.length <= L || g.write(S, P, L, X, 52, 8);
          }
          s.Buffer = v, s.SlowBuffer = v, s.INSPECT_MAX_BYTES = 50, v.poolSize = 8192, v._useTypedArrays = function() {
            try {
              var S = new ArrayBuffer(0), P = new Uint8Array(S);
              return P.foo = function() {
                return 42;
              }, P.foo() === 42 && typeof P.subarray == "function";
            } catch {
              return false;
            }
          }(), v.isEncoding = function(S) {
            switch (String(S).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "raw":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, v.isBuffer = function(S) {
            return !(S == null || !S._isBuffer);
          }, v.byteLength = function(S, P) {
            var L;
            switch (S += "", P || "utf8") {
              case "hex":
                L = S.length / 2;
                break;
              case "utf8":
              case "utf-8":
                L = fe(S).length;
                break;
              case "ascii":
              case "binary":
              case "raw":
                L = S.length;
                break;
              case "base64":
                L = he(S).length;
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                L = 2 * S.length;
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return L;
          }, v.concat = function(S, P) {
            if (z2(ee2(S), `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`), S.length === 0) return new v(0);
            if (S.length === 1) return S[0];
            if (typeof P != "number") for (H2 = P = 0; H2 < S.length; H2++) P += S[H2].length;
            for (var L = new v(P), X = 0, H2 = 0; H2 < S.length; H2++) {
              var j = S[H2];
              j.copy(L, X), X += j.length;
            }
            return L;
          }, v.prototype.write = function(S, P, L, X) {
            isFinite(P) ? isFinite(L) || (X = L, L = void 0) : (ie = X, X = P, P = L, L = ie), P = Number(P) || 0;
            var H2, j, K, se2, ie = this.length - P;
            switch ((!L || ie < (L = Number(L))) && (L = ie), X = String(X || "utf8").toLowerCase()) {
              case "hex":
                H2 = function(G2, k, oe2, ge) {
                  oe2 = Number(oe2) || 0;
                  var Re = G2.length - oe2;
                  (!ge || Re < (ge = Number(ge))) && (ge = Re), z2((Re = k.length) % 2 == 0, "Invalid hex string"), Re / 2 < ge && (ge = Re / 2);
                  for (var Ke2 = 0; Ke2 < ge; Ke2++) {
                    var He = parseInt(k.substr(2 * Ke2, 2), 16);
                    z2(!isNaN(He), "Invalid hex string"), G2[oe2 + Ke2] = He;
                  }
                  return v._charsWritten = 2 * Ke2, Ke2;
                }(this, S, P, L);
                break;
              case "utf8":
              case "utf-8":
                j = this, K = P, se2 = L, H2 = v._charsWritten = we(fe(S), j, K, se2);
                break;
              case "ascii":
              case "binary":
                H2 = p(this, S, P, L);
                break;
              case "base64":
                j = this, K = P, se2 = L, H2 = v._charsWritten = we(he(S), j, K, se2);
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                H2 = b(this, S, P, L);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return H2;
          }, v.prototype.toString = function(S, P, L) {
            var X, H2, j, K, se2 = this;
            if (S = String(S || "utf8").toLowerCase(), P = Number(P) || 0, (L = L !== void 0 ? Number(L) : se2.length) === P) return "";
            switch (S) {
              case "hex":
                X = function(ie, G2, k) {
                  var oe2 = ie.length;
                  (!G2 || G2 < 0) && (G2 = 0), (!k || k < 0 || oe2 < k) && (k = oe2);
                  for (var ge = "", Re = G2; Re < k; Re++) ge += te2(ie[Re]);
                  return ge;
                }(se2, P, L);
                break;
              case "utf8":
              case "utf-8":
                X = function(ie, G2, k) {
                  var oe2 = "", ge = "";
                  k = Math.min(ie.length, k);
                  for (var Re = G2; Re < k; Re++) ie[Re] <= 127 ? (oe2 += I(ge) + String.fromCharCode(ie[Re]), ge = "") : ge += "%" + ie[Re].toString(16);
                  return oe2 + I(ge);
                }(se2, P, L);
                break;
              case "ascii":
              case "binary":
                X = _(se2, P, L);
                break;
              case "base64":
                H2 = se2, K = L, X = (j = P) === 0 && K === H2.length ? m.fromByteArray(H2) : m.fromByteArray(H2.slice(j, K));
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                X = function(ie, G2, k) {
                  for (var oe2 = ie.slice(G2, k), ge = "", Re = 0; Re < oe2.length; Re += 2) ge += String.fromCharCode(oe2[Re] + 256 * oe2[Re + 1]);
                  return ge;
                }(se2, P, L);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return X;
          }, v.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          }, v.prototype.copy = function(S, P, L, X) {
            if (P = P || 0, (X = X || X === 0 ? X : this.length) !== (L = L || 0) && S.length !== 0 && this.length !== 0) {
              z2(L <= X, "sourceEnd < sourceStart"), z2(0 <= P && P < S.length, "targetStart out of bounds"), z2(0 <= L && L < this.length, "sourceStart out of bounds"), z2(0 <= X && X <= this.length, "sourceEnd out of bounds"), X > this.length && (X = this.length);
              var H2 = (X = S.length - P < X - L ? S.length - P + L : X) - L;
              if (H2 < 100 || !v._useTypedArrays) for (var j = 0; j < H2; j++) S[j + P] = this[j + L];
              else S._set(this.subarray(L, L + H2), P);
            }
          }, v.prototype.slice = function(S, P) {
            var L = this.length;
            if (S = ne(S, L, 0), P = ne(P, L, L), v._useTypedArrays) return v._augment(this.subarray(S, P));
            for (var X = P - S, H2 = new v(X, void 0, true), j = 0; j < X; j++) H2[j] = this[j + S];
            return H2;
          }, v.prototype.get = function(S) {
            return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(S);
          }, v.prototype.set = function(S, P) {
            return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(S, P);
          }, v.prototype.readUInt8 = function(S, P) {
            if (P || (z2(S != null, "missing offset"), z2(S < this.length, "Trying to read beyond buffer length")), !(S >= this.length)) return this[S];
          }, v.prototype.readUInt16LE = function(S, P) {
            return M(this, S, true, P);
          }, v.prototype.readUInt16BE = function(S, P) {
            return M(this, S, false, P);
          }, v.prototype.readUInt32LE = function(S, P) {
            return R(this, S, true, P);
          }, v.prototype.readUInt32BE = function(S, P) {
            return R(this, S, false, P);
          }, v.prototype.readInt8 = function(S, P) {
            if (P || (z2(S != null, "missing offset"), z2(S < this.length, "Trying to read beyond buffer length")), !(S >= this.length)) return 128 & this[S] ? -1 * (255 - this[S] + 1) : this[S];
          }, v.prototype.readInt16LE = function(S, P) {
            return w(this, S, true, P);
          }, v.prototype.readInt16BE = function(S, P) {
            return w(this, S, false, P);
          }, v.prototype.readInt32LE = function(S, P) {
            return E(this, S, true, P);
          }, v.prototype.readInt32BE = function(S, P) {
            return E(this, S, false, P);
          }, v.prototype.readFloatLE = function(S, P) {
            return x(this, S, true, P);
          }, v.prototype.readFloatBE = function(S, P) {
            return x(this, S, false, P);
          }, v.prototype.readDoubleLE = function(S, P) {
            return T(this, S, true, P);
          }, v.prototype.readDoubleBE = function(S, P) {
            return T(this, S, false, P);
          }, v.prototype.writeUInt8 = function(S, P, L) {
            L || (z2(S != null, "missing value"), z2(P != null, "missing offset"), z2(P < this.length, "trying to write beyond buffer length"), B(S, 255)), P >= this.length || (this[P] = S);
          }, v.prototype.writeUInt16LE = function(S, P, L) {
            y(this, S, P, true, L);
          }, v.prototype.writeUInt16BE = function(S, P, L) {
            y(this, S, P, false, L);
          }, v.prototype.writeUInt32LE = function(S, P, L) {
            A(this, S, P, true, L);
          }, v.prototype.writeUInt32BE = function(S, P, L) {
            A(this, S, P, false, L);
          }, v.prototype.writeInt8 = function(S, P, L) {
            L || (z2(S != null, "missing value"), z2(P != null, "missing offset"), z2(P < this.length, "Trying to write beyond buffer length"), D(S, 127, -128)), P >= this.length || (0 <= S ? this.writeUInt8(S, P, L) : this.writeUInt8(255 + S + 1, P, L));
          }, v.prototype.writeInt16LE = function(S, P, L) {
            C(this, S, P, true, L);
          }, v.prototype.writeInt16BE = function(S, P, L) {
            C(this, S, P, false, L);
          }, v.prototype.writeInt32LE = function(S, P, L) {
            N2(this, S, P, true, L);
          }, v.prototype.writeInt32BE = function(S, P, L) {
            N2(this, S, P, false, L);
          }, v.prototype.writeFloatLE = function(S, P, L) {
            U(this, S, P, true, L);
          }, v.prototype.writeFloatBE = function(S, P, L) {
            U(this, S, P, false, L);
          }, v.prototype.writeDoubleLE = function(S, P, L) {
            Y(this, S, P, true, L);
          }, v.prototype.writeDoubleBE = function(S, P, L) {
            Y(this, S, P, false, L);
          }, v.prototype.fill = function(S, P, L) {
            if (P = P || 0, L = L || this.length, z2(typeof (S = typeof (S = S || 0) == "string" ? S.charCodeAt(0) : S) == "number" && !isNaN(S), "value is not a number"), z2(P <= L, "end < start"), L !== P && this.length !== 0) {
              z2(0 <= P && P < this.length, "start out of bounds"), z2(0 <= L && L <= this.length, "end out of bounds");
              for (var X = P; X < L; X++) this[X] = S;
            }
          }, v.prototype.inspect = function() {
            for (var S = [], P = this.length, L = 0; L < P; L++) if (S[L] = te2(this[L]), L === s.INSPECT_MAX_BYTES) {
              S[L + 1] = "...";
              break;
            }
            return "<Buffer " + S.join(" ") + ">";
          }, v.prototype.toArrayBuffer = function() {
            if (typeof Uint8Array > "u") throw new Error("Buffer.toArrayBuffer not supported in this browser");
            if (v._useTypedArrays) return new v(this).buffer;
            for (var S = new Uint8Array(this.length), P = 0, L = S.length; P < L; P += 1) S[P] = this[P];
            return S.buffer;
          };
          var V2 = v.prototype;
          function ne(S, P, L) {
            return typeof S != "number" ? L : P <= (S = ~~S) ? P : 0 <= S || 0 <= (S += P) ? S : 0;
          }
          function Z(S) {
            return (S = ~~Math.ceil(+S)) < 0 ? 0 : S;
          }
          function ee2(S) {
            return (Array.isArray || function(P) {
              return Object.prototype.toString.call(P) === "[object Array]";
            })(S);
          }
          function te2(S) {
            return S < 16 ? "0" + S.toString(16) : S.toString(16);
          }
          function fe(S) {
            for (var P = [], L = 0; L < S.length; L++) {
              var X = S.charCodeAt(L);
              if (X <= 127) P.push(S.charCodeAt(L));
              else for (var H2 = L, j = (55296 <= X && X <= 57343 && L++, encodeURIComponent(S.slice(H2, L + 1)).substr(1).split("%")), K = 0; K < j.length; K++) P.push(parseInt(j[K], 16));
            }
            return P;
          }
          function he(S) {
            return m.toByteArray(S);
          }
          function we(S, P, L, X) {
            for (var H2 = 0; H2 < X && !(H2 + L >= P.length || H2 >= S.length); H2++) P[H2 + L] = S[H2];
            return H2;
          }
          function I(S) {
            try {
              return decodeURIComponent(S);
            } catch {
              return "�";
            }
          }
          function B(S, P) {
            z2(typeof S == "number", "cannot write a non-number as a number"), z2(0 <= S, "specified a negative value for writing an unsigned value"), z2(S <= P, "value is larger than maximum value for type"), z2(Math.floor(S) === S, "value has a fractional component");
          }
          function D(S, P, L) {
            z2(typeof S == "number", "cannot write a non-number as a number"), z2(S <= P, "value larger than maximum allowed value"), z2(L <= S, "value smaller than minimum allowed value"), z2(Math.floor(S) === S, "value has a fractional component");
          }
          function O(S, P, L) {
            z2(typeof S == "number", "cannot write a non-number as a number"), z2(S <= P, "value larger than maximum allowed value"), z2(L <= S, "value smaller than minimum allowed value");
          }
          function z2(S, P) {
            if (!S) throw new Error(P || "Failed assertion");
          }
          v._augment = function(S) {
            return S._isBuffer = true, S._get = S.get, S._set = S.set, S.get = V2.get, S.set = V2.set, S.write = V2.write, S.toString = V2.toString, S.toLocaleString = V2.toString, S.toJSON = V2.toJSON, S.copy = V2.copy, S.slice = V2.slice, S.readUInt8 = V2.readUInt8, S.readUInt16LE = V2.readUInt16LE, S.readUInt16BE = V2.readUInt16BE, S.readUInt32LE = V2.readUInt32LE, S.readUInt32BE = V2.readUInt32BE, S.readInt8 = V2.readInt8, S.readInt16LE = V2.readInt16LE, S.readInt16BE = V2.readInt16BE, S.readInt32LE = V2.readInt32LE, S.readInt32BE = V2.readInt32BE, S.readFloatLE = V2.readFloatLE, S.readFloatBE = V2.readFloatBE, S.readDoubleLE = V2.readDoubleLE, S.readDoubleBE = V2.readDoubleBE, S.writeUInt8 = V2.writeUInt8, S.writeUInt16LE = V2.writeUInt16LE, S.writeUInt16BE = V2.writeUInt16BE, S.writeUInt32LE = V2.writeUInt32LE, S.writeUInt32BE = V2.writeUInt32BE, S.writeInt8 = V2.writeInt8, S.writeInt16LE = V2.writeInt16LE, S.writeInt16BE = V2.writeInt16BE, S.writeInt32LE = V2.writeInt32LE, S.writeInt32BE = V2.writeInt32BE, S.writeFloatLE = V2.writeFloatLE, S.writeFloatBE = V2.writeFloatBE, S.writeDoubleLE = V2.writeDoubleLE, S.writeDoubleBE = V2.writeDoubleBE, S.fill = V2.fill, S.inspect = V2.inspect, S.toArrayBuffer = V2.toArrayBuffer, S;
          };
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
      }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(t, n, s) {
        (function(i, o, m, l, c, f, u, d, h2) {
          var m = t("buffer").Buffer, g = 4, v = new m(g);
          v.fill(0), n.exports = { hash: function(p, b, _, M) {
            for (var R = b(function(y, A) {
              y.length % g != 0 && (C = y.length + (g - y.length % g), y = m.concat([y, v], C));
              for (var C, N2 = [], U = A ? y.readInt32BE : y.readInt32LE, Y = 0; Y < y.length; Y += g) N2.push(U.call(y, Y));
              return N2;
            }(p = m.isBuffer(p) ? p : new m(p), M), 8 * p.length), b = M, w = new m(_), E = b ? w.writeInt32BE : w.writeInt32LE, x = 0; x < R.length; x++) E.call(w, R[x], 4 * x, true);
            return w;
          } };
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 5: [function(t, n, s) {
        (function(i, o, m, l, c, f, u, d, h2) {
          var m = t("buffer").Buffer, g = t("./sha"), v = t("./sha256"), p = t("./rng"), b = { sha1: g, sha256: v, md5: t("./md5") }, _ = 64, M = new m(_);
          function R(y, A) {
            var C = b[y = y || "sha1"], N2 = [];
            return C || w("algorithm:", y, "is not yet supported"), { update: function(U) {
              return m.isBuffer(U) || (U = new m(U)), N2.push(U), U.length, this;
            }, digest: function(U) {
              var Y = m.concat(N2), Y = A ? function(V2, ne, Z) {
                m.isBuffer(ne) || (ne = new m(ne)), m.isBuffer(Z) || (Z = new m(Z)), ne.length > _ ? ne = V2(ne) : ne.length < _ && (ne = m.concat([ne, M], _));
                for (var ee2 = new m(_), te2 = new m(_), fe = 0; fe < _; fe++) ee2[fe] = 54 ^ ne[fe], te2[fe] = 92 ^ ne[fe];
                return Z = V2(m.concat([ee2, Z])), V2(m.concat([te2, Z]));
              }(C, A, Y) : C(Y);
              return N2 = null, U ? Y.toString(U) : Y;
            } };
          }
          function w() {
            var y = [].slice.call(arguments).join(" ");
            throw new Error([y, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join(`
`));
          }
          M.fill(0), s.createHash = function(y) {
            return R(y);
          }, s.createHmac = R, s.randomBytes = function(y, A) {
            if (!A || !A.call) return new m(p(y));
            try {
              A.call(this, void 0, new m(p(y)));
            } catch (C) {
              A(C);
            }
          };
          var E, x = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], T = function(y) {
            s[y] = function() {
              w("sorry,", y, "is not implemented yet");
            };
          };
          for (E in x) T(x[E]);
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(t, n, s) {
        (function(i, o, a, l, c, f, u, d, h2) {
          var m = t("./helpers");
          function g(w, E) {
            w[E >> 5] |= 128 << E % 32, w[14 + (E + 64 >>> 9 << 4)] = E;
            for (var x = 1732584193, T = -271733879, y = -1732584194, A = 271733878, C = 0; C < w.length; C += 16) {
              var N2 = x, U = T, Y = y, V2 = A, x = p(x, T, y, A, w[C + 0], 7, -680876936), A = p(A, x, T, y, w[C + 1], 12, -389564586), y = p(y, A, x, T, w[C + 2], 17, 606105819), T = p(T, y, A, x, w[C + 3], 22, -1044525330);
              x = p(x, T, y, A, w[C + 4], 7, -176418897), A = p(A, x, T, y, w[C + 5], 12, 1200080426), y = p(y, A, x, T, w[C + 6], 17, -1473231341), T = p(T, y, A, x, w[C + 7], 22, -45705983), x = p(x, T, y, A, w[C + 8], 7, 1770035416), A = p(A, x, T, y, w[C + 9], 12, -1958414417), y = p(y, A, x, T, w[C + 10], 17, -42063), T = p(T, y, A, x, w[C + 11], 22, -1990404162), x = p(x, T, y, A, w[C + 12], 7, 1804603682), A = p(A, x, T, y, w[C + 13], 12, -40341101), y = p(y, A, x, T, w[C + 14], 17, -1502002290), x = b(x, T = p(T, y, A, x, w[C + 15], 22, 1236535329), y, A, w[C + 1], 5, -165796510), A = b(A, x, T, y, w[C + 6], 9, -1069501632), y = b(y, A, x, T, w[C + 11], 14, 643717713), T = b(T, y, A, x, w[C + 0], 20, -373897302), x = b(x, T, y, A, w[C + 5], 5, -701558691), A = b(A, x, T, y, w[C + 10], 9, 38016083), y = b(y, A, x, T, w[C + 15], 14, -660478335), T = b(T, y, A, x, w[C + 4], 20, -405537848), x = b(x, T, y, A, w[C + 9], 5, 568446438), A = b(A, x, T, y, w[C + 14], 9, -1019803690), y = b(y, A, x, T, w[C + 3], 14, -187363961), T = b(T, y, A, x, w[C + 8], 20, 1163531501), x = b(x, T, y, A, w[C + 13], 5, -1444681467), A = b(A, x, T, y, w[C + 2], 9, -51403784), y = b(y, A, x, T, w[C + 7], 14, 1735328473), x = _(x, T = b(T, y, A, x, w[C + 12], 20, -1926607734), y, A, w[C + 5], 4, -378558), A = _(A, x, T, y, w[C + 8], 11, -2022574463), y = _(y, A, x, T, w[C + 11], 16, 1839030562), T = _(T, y, A, x, w[C + 14], 23, -35309556), x = _(x, T, y, A, w[C + 1], 4, -1530992060), A = _(A, x, T, y, w[C + 4], 11, 1272893353), y = _(y, A, x, T, w[C + 7], 16, -155497632), T = _(T, y, A, x, w[C + 10], 23, -1094730640), x = _(x, T, y, A, w[C + 13], 4, 681279174), A = _(A, x, T, y, w[C + 0], 11, -358537222), y = _(y, A, x, T, w[C + 3], 16, -722521979), T = _(T, y, A, x, w[C + 6], 23, 76029189), x = _(x, T, y, A, w[C + 9], 4, -640364487), A = _(A, x, T, y, w[C + 12], 11, -421815835), y = _(y, A, x, T, w[C + 15], 16, 530742520), x = M(x, T = _(T, y, A, x, w[C + 2], 23, -995338651), y, A, w[C + 0], 6, -198630844), A = M(A, x, T, y, w[C + 7], 10, 1126891415), y = M(y, A, x, T, w[C + 14], 15, -1416354905), T = M(T, y, A, x, w[C + 5], 21, -57434055), x = M(x, T, y, A, w[C + 12], 6, 1700485571), A = M(A, x, T, y, w[C + 3], 10, -1894986606), y = M(y, A, x, T, w[C + 10], 15, -1051523), T = M(T, y, A, x, w[C + 1], 21, -2054922799), x = M(x, T, y, A, w[C + 8], 6, 1873313359), A = M(A, x, T, y, w[C + 15], 10, -30611744), y = M(y, A, x, T, w[C + 6], 15, -1560198380), T = M(T, y, A, x, w[C + 13], 21, 1309151649), x = M(x, T, y, A, w[C + 4], 6, -145523070), A = M(A, x, T, y, w[C + 11], 10, -1120210379), y = M(y, A, x, T, w[C + 2], 15, 718787259), T = M(T, y, A, x, w[C + 9], 21, -343485551), x = R(x, N2), T = R(T, U), y = R(y, Y), A = R(A, V2);
            }
            return Array(x, T, y, A);
          }
          function v(w, E, x, T, y, A) {
            return R((E = R(R(E, w), R(T, A))) << y | E >>> 32 - y, x);
          }
          function p(w, E, x, T, y, A, C) {
            return v(E & x | ~E & T, w, E, y, A, C);
          }
          function b(w, E, x, T, y, A, C) {
            return v(E & T | x & ~T, w, E, y, A, C);
          }
          function _(w, E, x, T, y, A, C) {
            return v(E ^ x ^ T, w, E, y, A, C);
          }
          function M(w, E, x, T, y, A, C) {
            return v(x ^ (E | ~T), w, E, y, A, C);
          }
          function R(w, E) {
            var x = (65535 & w) + (65535 & E);
            return (w >> 16) + (E >> 16) + (x >> 16) << 16 | 65535 & x;
          }
          n.exports = function(w) {
            return m.hash(w, g, 16);
          };
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(t, n, s) {
        (function(i, o, a, l, c, f, u, d, h2) {
          n.exports = function(m) {
            for (var g, v = new Array(m), p = 0; p < m; p++) !(3 & p) && (g = 4294967296 * Math.random()), v[p] = g >>> ((3 & p) << 3) & 255;
            return v;
          };
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 8: [function(t, n, s) {
        (function(i, o, a, l, c, f, u, d, h2) {
          var m = t("./helpers");
          function g(b, _) {
            b[_ >> 5] |= 128 << 24 - _ % 32, b[15 + (_ + 64 >> 9 << 4)] = _;
            for (var M, R, w, E = Array(80), x = 1732584193, T = -271733879, y = -1732584194, A = 271733878, C = -1009589776, N2 = 0; N2 < b.length; N2 += 16) {
              for (var U = x, Y = T, V2 = y, ne = A, Z = C, ee2 = 0; ee2 < 80; ee2++) {
                E[ee2] = ee2 < 16 ? b[N2 + ee2] : p(E[ee2 - 3] ^ E[ee2 - 8] ^ E[ee2 - 14] ^ E[ee2 - 16], 1);
                var te2 = v(v(p(x, 5), (te2 = T, R = y, w = A, (M = ee2) < 20 ? te2 & R | ~te2 & w : !(M < 40) && M < 60 ? te2 & R | te2 & w | R & w : te2 ^ R ^ w)), v(v(C, E[ee2]), (M = ee2) < 20 ? 1518500249 : M < 40 ? 1859775393 : M < 60 ? -1894007588 : -899497514)), C = A, A = y, y = p(T, 30), T = x, x = te2;
              }
              x = v(x, U), T = v(T, Y), y = v(y, V2), A = v(A, ne), C = v(C, Z);
            }
            return Array(x, T, y, A, C);
          }
          function v(b, _) {
            var M = (65535 & b) + (65535 & _);
            return (b >> 16) + (_ >> 16) + (M >> 16) << 16 | 65535 & M;
          }
          function p(b, _) {
            return b << _ | b >>> 32 - _;
          }
          n.exports = function(b) {
            return m.hash(b, g, 20, true);
          };
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(t, n, s) {
        (function(i, o, a, l, c, f, u, d, h2) {
          function m(_, M) {
            var R = (65535 & _) + (65535 & M);
            return (_ >> 16) + (M >> 16) + (R >> 16) << 16 | 65535 & R;
          }
          function g(_, M) {
            var R, w = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), E = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), x = new Array(64);
            _[M >> 5] |= 128 << 24 - M % 32, _[15 + (M + 64 >> 9 << 4)] = M;
            for (var T, y, A = 0; A < _.length; A += 16) {
              for (var C = E[0], N2 = E[1], U = E[2], Y = E[3], V2 = E[4], ne = E[5], Z = E[6], ee2 = E[7], te2 = 0; te2 < 64; te2++) x[te2] = te2 < 16 ? _[te2 + A] : m(m(m((y = x[te2 - 2], p(y, 17) ^ p(y, 19) ^ b(y, 10)), x[te2 - 7]), (y = x[te2 - 15], p(y, 7) ^ p(y, 18) ^ b(y, 3))), x[te2 - 16]), R = m(m(m(m(ee2, p(y = V2, 6) ^ p(y, 11) ^ p(y, 25)), V2 & ne ^ ~V2 & Z), w[te2]), x[te2]), T = m(p(T = C, 2) ^ p(T, 13) ^ p(T, 22), C & N2 ^ C & U ^ N2 & U), ee2 = Z, Z = ne, ne = V2, V2 = m(Y, R), Y = U, U = N2, N2 = C, C = m(R, T);
              E[0] = m(C, E[0]), E[1] = m(N2, E[1]), E[2] = m(U, E[2]), E[3] = m(Y, E[3]), E[4] = m(V2, E[4]), E[5] = m(ne, E[5]), E[6] = m(Z, E[6]), E[7] = m(ee2, E[7]);
            }
            return E;
          }
          var v = t("./helpers"), p = function(_, M) {
            return _ >>> M | _ << 32 - M;
          }, b = function(_, M) {
            return _ >>> M;
          };
          n.exports = function(_) {
            return v.hash(_, g, 32, true);
          };
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(t, n, s) {
        (function(i, o, a, l, c, f, u, d, h2) {
          s.read = function(m, g, v, p, A) {
            var _, M, R = 8 * A - p - 1, w = (1 << R) - 1, E = w >> 1, x = -7, T = v ? A - 1 : 0, y = v ? -1 : 1, A = m[g + T];
            for (T += y, _ = A & (1 << -x) - 1, A >>= -x, x += R; 0 < x; _ = 256 * _ + m[g + T], T += y, x -= 8) ;
            for (M = _ & (1 << -x) - 1, _ >>= -x, x += p; 0 < x; M = 256 * M + m[g + T], T += y, x -= 8) ;
            if (_ === 0) _ = 1 - E;
            else {
              if (_ === w) return M ? NaN : 1 / 0 * (A ? -1 : 1);
              M += Math.pow(2, p), _ -= E;
            }
            return (A ? -1 : 1) * M * Math.pow(2, _ - p);
          }, s.write = function(m, g, v, p, b, C) {
            var M, R, w = 8 * C - b - 1, E = (1 << w) - 1, x = E >> 1, T = b === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = p ? 0 : C - 1, A = p ? 1 : -1, C = g < 0 || g === 0 && 1 / g < 0 ? 1 : 0;
            for (g = Math.abs(g), isNaN(g) || g === 1 / 0 ? (R = isNaN(g) ? 1 : 0, M = E) : (M = Math.floor(Math.log(g) / Math.LN2), g * (p = Math.pow(2, -M)) < 1 && (M--, p *= 2), 2 <= (g += 1 <= M + x ? T / p : T * Math.pow(2, 1 - x)) * p && (M++, p /= 2), E <= M + x ? (R = 0, M = E) : 1 <= M + x ? (R = (g * p - 1) * Math.pow(2, b), M += x) : (R = g * Math.pow(2, x - 1) * Math.pow(2, b), M = 0)); 8 <= b; m[v + y] = 255 & R, y += A, R /= 256, b -= 8) ;
            for (M = M << b | R, w += b; 0 < w; m[v + y] = 255 & M, y += A, M /= 256, w -= 8) ;
            m[v + y - A] |= 128 * C;
          };
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
      }, { buffer: 3, lYpoI2: 11 }], 11: [function(t, n, s) {
        (function(i, o, a, l, c, f, u, d, h2) {
          var m, g, v;
          function p() {
          }
          (i = n.exports = {}).nextTick = (g = "undefined" < "u", v = "undefined" < "u", g ? function(b) {
            return (void 0).setImmediate(b);
          } : v ? (m = [], (void 0).addEventListener("message", function(b) {
            var _ = b.source;
            _ !== void 0 && _ !== null || b.data !== "process-tick" || (b.stopPropagation(), 0 < m.length && m.shift()());
          }, true), function(b) {
            m.push(b), (void 0).postMessage("process-tick", "*");
          }) : function(b) {
            setTimeout(b, 0);
          }), i.title = "browser", i.browser = true, i.env = {}, i.argv = [], i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.binding = function(b) {
            throw new Error("process.binding is not supported");
          }, i.cwd = function() {
            return "/";
          }, i.chdir = function(b) {
            throw new Error("process.chdir is not supported");
          };
        }).call(this, t("lYpoI2"), typeof self < "u" ? self : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
      }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
    });
  }(Xi)), Xi.exports;
}
zd();
var $i, Vr;
function vl() {
  return Vr || (Vr = 1, $i = [
    // current
    "precision",
    "highp",
    "mediump",
    "lowp",
    "attribute",
    "const",
    "uniform",
    "varying",
    "break",
    "continue",
    "do",
    "for",
    "while",
    "if",
    "else",
    "in",
    "out",
    "inout",
    "float",
    "int",
    "uint",
    "void",
    "bool",
    "true",
    "false",
    "discard",
    "return",
    "mat2",
    "mat3",
    "mat4",
    "vec2",
    "vec3",
    "vec4",
    "ivec2",
    "ivec3",
    "ivec4",
    "bvec2",
    "bvec3",
    "bvec4",
    "sampler1D",
    "sampler2D",
    "sampler3D",
    "samplerCube",
    "sampler1DShadow",
    "sampler2DShadow",
    "struct",
    "asm",
    "class",
    "union",
    "enum",
    "typedef",
    "template",
    "this",
    "packed",
    "goto",
    "switch",
    "default",
    "inline",
    "noinline",
    "volatile",
    "public",
    "static",
    "extern",
    "external",
    "interface",
    "long",
    "short",
    "double",
    "half",
    "fixed",
    "unsigned",
    "input",
    "output",
    "hvec2",
    "hvec3",
    "hvec4",
    "dvec2",
    "dvec3",
    "dvec4",
    "fvec2",
    "fvec3",
    "fvec4",
    "sampler2DRect",
    "sampler3DRect",
    "sampler2DRectShadow",
    "sizeof",
    "cast",
    "namespace",
    "using"
  ]), $i;
}
var Zi, Yr;
function jd() {
  return Yr || (Yr = 1, Zi = [
    "<<=",
    ">>=",
    "++",
    "--",
    "<<",
    ">>",
    "<=",
    ">=",
    "==",
    "!=",
    "&&",
    "||",
    "+=",
    "-=",
    "*=",
    "/=",
    "%=",
    "&=",
    "^^",
    "^=",
    "|=",
    "(",
    ")",
    "[",
    "]",
    ".",
    "!",
    "~",
    "*",
    "/",
    "%",
    "+",
    "-",
    "<",
    ">",
    "&",
    "^",
    "|",
    "?",
    ":",
    "=",
    ",",
    ";",
    "{",
    "}"
  ]), Zi;
}
var Ki, Wr;
function yl() {
  return Wr || (Wr = 1, Ki = [
    // Keep this list sorted
    "abs",
    "acos",
    "all",
    "any",
    "asin",
    "atan",
    "ceil",
    "clamp",
    "cos",
    "cross",
    "dFdx",
    "dFdy",
    "degrees",
    "distance",
    "dot",
    "equal",
    "exp",
    "exp2",
    "faceforward",
    "floor",
    "fract",
    "gl_BackColor",
    "gl_BackLightModelProduct",
    "gl_BackLightProduct",
    "gl_BackMaterial",
    "gl_BackSecondaryColor",
    "gl_ClipPlane",
    "gl_ClipVertex",
    "gl_Color",
    "gl_DepthRange",
    "gl_DepthRangeParameters",
    "gl_EyePlaneQ",
    "gl_EyePlaneR",
    "gl_EyePlaneS",
    "gl_EyePlaneT",
    "gl_Fog",
    "gl_FogCoord",
    "gl_FogFragCoord",
    "gl_FogParameters",
    "gl_FragColor",
    "gl_FragCoord",
    "gl_FragData",
    "gl_FragDepth",
    "gl_FragDepthEXT",
    "gl_FrontColor",
    "gl_FrontFacing",
    "gl_FrontLightModelProduct",
    "gl_FrontLightProduct",
    "gl_FrontMaterial",
    "gl_FrontSecondaryColor",
    "gl_LightModel",
    "gl_LightModelParameters",
    "gl_LightModelProducts",
    "gl_LightProducts",
    "gl_LightSource",
    "gl_LightSourceParameters",
    "gl_MaterialParameters",
    "gl_MaxClipPlanes",
    "gl_MaxCombinedTextureImageUnits",
    "gl_MaxDrawBuffers",
    "gl_MaxFragmentUniformComponents",
    "gl_MaxLights",
    "gl_MaxTextureCoords",
    "gl_MaxTextureImageUnits",
    "gl_MaxTextureUnits",
    "gl_MaxVaryingFloats",
    "gl_MaxVertexAttribs",
    "gl_MaxVertexTextureImageUnits",
    "gl_MaxVertexUniformComponents",
    "gl_ModelViewMatrix",
    "gl_ModelViewMatrixInverse",
    "gl_ModelViewMatrixInverseTranspose",
    "gl_ModelViewMatrixTranspose",
    "gl_ModelViewProjectionMatrix",
    "gl_ModelViewProjectionMatrixInverse",
    "gl_ModelViewProjectionMatrixInverseTranspose",
    "gl_ModelViewProjectionMatrixTranspose",
    "gl_MultiTexCoord0",
    "gl_MultiTexCoord1",
    "gl_MultiTexCoord2",
    "gl_MultiTexCoord3",
    "gl_MultiTexCoord4",
    "gl_MultiTexCoord5",
    "gl_MultiTexCoord6",
    "gl_MultiTexCoord7",
    "gl_Normal",
    "gl_NormalMatrix",
    "gl_NormalScale",
    "gl_ObjectPlaneQ",
    "gl_ObjectPlaneR",
    "gl_ObjectPlaneS",
    "gl_ObjectPlaneT",
    "gl_Point",
    "gl_PointCoord",
    "gl_PointParameters",
    "gl_PointSize",
    "gl_Position",
    "gl_ProjectionMatrix",
    "gl_ProjectionMatrixInverse",
    "gl_ProjectionMatrixInverseTranspose",
    "gl_ProjectionMatrixTranspose",
    "gl_SecondaryColor",
    "gl_TexCoord",
    "gl_TextureEnvColor",
    "gl_TextureMatrix",
    "gl_TextureMatrixInverse",
    "gl_TextureMatrixInverseTranspose",
    "gl_TextureMatrixTranspose",
    "gl_Vertex",
    "greaterThan",
    "greaterThanEqual",
    "inversesqrt",
    "length",
    "lessThan",
    "lessThanEqual",
    "log",
    "log2",
    "matrixCompMult",
    "max",
    "min",
    "mix",
    "mod",
    "normalize",
    "not",
    "notEqual",
    "pow",
    "radians",
    "reflect",
    "refract",
    "sign",
    "sin",
    "smoothstep",
    "sqrt",
    "step",
    "tan",
    "texture2D",
    "texture2DLod",
    "texture2DProj",
    "texture2DProjLod",
    "textureCube",
    "textureCubeLod",
    "texture2DLodEXT",
    "texture2DProjLodEXT",
    "textureCubeLodEXT",
    "texture2DGradEXT",
    "texture2DProjGradEXT",
    "textureCubeGradEXT"
  ]), Ki;
}
var qi, Xr;
function Vd() {
  if (Xr) return qi;
  Xr = 1;
  var r = vl();
  return qi = r.slice().concat([
    "layout",
    "centroid",
    "smooth",
    "case",
    "mat2x2",
    "mat2x3",
    "mat2x4",
    "mat3x2",
    "mat3x3",
    "mat3x4",
    "mat4x2",
    "mat4x3",
    "mat4x4",
    "uvec2",
    "uvec3",
    "uvec4",
    "samplerCubeShadow",
    "sampler2DArray",
    "sampler2DArrayShadow",
    "isampler2D",
    "isampler3D",
    "isamplerCube",
    "isampler2DArray",
    "usampler2D",
    "usampler3D",
    "usamplerCube",
    "usampler2DArray",
    "coherent",
    "restrict",
    "readonly",
    "writeonly",
    "resource",
    "atomic_uint",
    "noperspective",
    "patch",
    "sample",
    "subroutine",
    "common",
    "partition",
    "active",
    "filter",
    "image1D",
    "image2D",
    "image3D",
    "imageCube",
    "iimage1D",
    "iimage2D",
    "iimage3D",
    "iimageCube",
    "uimage1D",
    "uimage2D",
    "uimage3D",
    "uimageCube",
    "image1DArray",
    "image2DArray",
    "iimage1DArray",
    "iimage2DArray",
    "uimage1DArray",
    "uimage2DArray",
    "image1DShadow",
    "image2DShadow",
    "image1DArrayShadow",
    "image2DArrayShadow",
    "imageBuffer",
    "iimageBuffer",
    "uimageBuffer",
    "sampler1DArray",
    "sampler1DArrayShadow",
    "isampler1D",
    "isampler1DArray",
    "usampler1D",
    "usampler1DArray",
    "isampler2DRect",
    "usampler2DRect",
    "samplerBuffer",
    "isamplerBuffer",
    "usamplerBuffer",
    "sampler2DMS",
    "isampler2DMS",
    "usampler2DMS",
    "sampler2DMSArray",
    "isampler2DMSArray",
    "usampler2DMSArray"
  ]), qi;
}
var Qi, $r;
function Yd() {
  if ($r) return Qi;
  $r = 1;
  var r = yl();
  return r = r.slice().filter(function(e) {
    return !/^(gl\_|texture)/.test(e);
  }), Qi = r.concat([
    // the updated gl_ constants
    "gl_VertexID",
    "gl_InstanceID",
    "gl_Position",
    "gl_PointSize",
    "gl_FragCoord",
    "gl_FrontFacing",
    "gl_FragDepth",
    "gl_PointCoord",
    "gl_MaxVertexAttribs",
    "gl_MaxVertexUniformVectors",
    "gl_MaxVertexOutputVectors",
    "gl_MaxFragmentInputVectors",
    "gl_MaxVertexTextureImageUnits",
    "gl_MaxCombinedTextureImageUnits",
    "gl_MaxTextureImageUnits",
    "gl_MaxFragmentUniformVectors",
    "gl_MaxDrawBuffers",
    "gl_MinProgramTexelOffset",
    "gl_MaxProgramTexelOffset",
    "gl_DepthRangeParameters",
    "gl_DepthRange",
    "trunc",
    "round",
    "roundEven",
    "isnan",
    "isinf",
    "floatBitsToInt",
    "floatBitsToUint",
    "intBitsToFloat",
    "uintBitsToFloat",
    "packSnorm2x16",
    "unpackSnorm2x16",
    "packUnorm2x16",
    "unpackUnorm2x16",
    "packHalf2x16",
    "unpackHalf2x16",
    "outerProduct",
    "transpose",
    "determinant",
    "inverse",
    "texture",
    "textureSize",
    "textureProj",
    "textureLod",
    "textureOffset",
    "texelFetch",
    "texelFetchOffset",
    "textureProjOffset",
    "textureLodOffset",
    "textureProjLod",
    "textureProjLodOffset",
    "textureGrad",
    "textureGradOffset",
    "textureProjGrad",
    "textureProjGradOffset"
  ]), Qi;
}
var Ji, Zr;
function Wd() {
  if (Zr) return Ji;
  Zr = 1, Ji = M;
  var r = vl(), e = jd(), t = yl(), n = Vd(), s = Yd(), i = 999, o = 9999, a = 0, l = 1, c = 2, f = 3, u = 4, d = 5, h2 = 6, m = 7, g = 8, v = 9, p = 10, b = 11, _ = [
    "block-comment",
    "line-comment",
    "preprocessor",
    "operator",
    "integer",
    "float",
    "ident",
    "builtin",
    "keyword",
    "whitespace",
    "eof",
    "integer"
  ];
  function M(R) {
    var w = 0, E = 0, x = i, T, y, A = [], C = [], N2 = 1, U = 0, Y = 0, V2 = false, ne = false, Z = "", ee2;
    R = R || {};
    var te2 = t, fe = r;
    R.version === "300 es" && (te2 = s, fe = n);
    for (var he = {}, we = {}, w = 0; w < te2.length; w++)
      he[te2[w]] = true;
    for (var w = 0; w < fe.length; w++)
      we[fe[w]] = true;
    return function(G2) {
      return C = [], G2 !== null ? B(G2) : D();
    };
    function I(G2) {
      G2.length && C.push({
        type: _[x],
        data: G2,
        position: Y,
        line: N2,
        column: U
      });
    }
    function B(G2) {
      w = 0, G2.toString && (G2 = G2.toString()), Z += G2.replace(/\r\n/g, `
`), ee2 = Z.length;
      for (var k; T = Z[w], w < ee2; ) {
        switch (k = w, x) {
          case a:
            w = L();
            break;
          case l:
            w = P();
            break;
          case c:
            w = S();
            break;
          case f:
            w = X();
            break;
          case u:
            w = K();
            break;
          case b:
            w = j();
            break;
          case d:
            w = se2();
            break;
          case o:
            w = ie();
            break;
          case v:
            w = z2();
            break;
          case i:
            w = O();
            break;
        }
        if (k !== w)
          switch (Z[k]) {
            case `
`:
              U = 0, ++N2;
              break;
            default:
              ++U;
              break;
          }
      }
      return E += w, Z = Z.slice(w), C;
    }
    function D(G2) {
      return A.length && I(A.join("")), x = p, I("(eof)"), C;
    }
    function O() {
      return A = A.length ? [] : A, y === "/" && T === "*" ? (Y = E + w - 1, x = a, y = T, w + 1) : y === "/" && T === "/" ? (Y = E + w - 1, x = l, y = T, w + 1) : T === "#" ? (x = c, Y = E + w, w) : /\s/.test(T) ? (x = v, Y = E + w, w) : (V2 = /\d/.test(T), ne = /[^\w_]/.test(T), Y = E + w, x = V2 ? u : ne ? f : o, w);
    }
    function z2() {
      return /[^\s]/g.test(T) ? (I(A.join("")), x = i, w) : (A.push(T), y = T, w + 1);
    }
    function S() {
      return (T === "\r" || T === `
`) && y !== "\\" ? (I(A.join("")), x = i, w) : (A.push(T), y = T, w + 1);
    }
    function P() {
      return S();
    }
    function L() {
      return T === "/" && y === "*" ? (A.push(T), I(A.join("")), x = i, w + 1) : (A.push(T), y = T, w + 1);
    }
    function X() {
      if (y === "." && /\d/.test(T))
        return x = d, w;
      if (y === "/" && T === "*")
        return x = a, w;
      if (y === "/" && T === "/")
        return x = l, w;
      if (T === "." && A.length) {
        for (; H2(A); ) ;
        return x = d, w;
      }
      if (T === ";" || T === ")" || T === "(") {
        if (A.length) for (; H2(A); ) ;
        return I(T), x = i, w + 1;
      }
      var G2 = A.length === 2 && T !== "=";
      if (/[\w_\d\s]/.test(T) || G2) {
        for (; H2(A); ) ;
        return x = i, w;
      }
      return A.push(T), y = T, w + 1;
    }
    function H2(G2) {
      var k = 0, oe2, ge;
      do {
        if (oe2 = e.indexOf(G2.slice(0, G2.length + k).join("")), ge = e[oe2], oe2 === -1) {
          if (k-- + G2.length > 0) continue;
          ge = G2.slice(0, 1).join("");
        }
        return I(ge), Y += ge.length, A = A.slice(ge.length), A.length;
      } while (true);
    }
    function j() {
      return /[^a-fA-F0-9]/.test(T) ? (I(A.join("")), x = i, w) : (A.push(T), y = T, w + 1);
    }
    function K() {
      return T === "." || /[eE]/.test(T) ? (A.push(T), x = d, y = T, w + 1) : T === "x" && A.length === 1 && A[0] === "0" ? (x = b, A.push(T), y = T, w + 1) : /[^\d]/.test(T) ? (I(A.join("")), x = i, w) : (A.push(T), y = T, w + 1);
    }
    function se2() {
      return T === "f" && (A.push(T), y = T, w += 1), /[eE]/.test(T) || (T === "-" || T === "+") && /[eE]/.test(y) ? (A.push(T), y = T, w + 1) : /[^\d]/.test(T) ? (I(A.join("")), x = i, w) : (A.push(T), y = T, w + 1);
    }
    function ie() {
      if (/[^\d\w_]/.test(T)) {
        var G2 = A.join("");
        return we[G2] ? x = g : he[G2] ? x = m : x = h2, I(A.join("")), x = i, w;
      }
      return A.push(T), y = T, w + 1;
    }
  }
  return Ji;
}
var eo, Kr;
function Xd() {
  if (Kr) return eo;
  Kr = 1;
  var r = Wd();
  eo = e;
  function e(t, n) {
    var s = r(n), i = [];
    return i = i.concat(s(t)), i = i.concat(s(null)), i;
  }
  return eo;
}
Xd();
function tp(r, e) {
  if (typeof r != "object" || r === null) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function _l(r) {
  var e = tp(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Ge(r, e, t) {
  return e = _l(e), e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : r[e] = t, r;
}
var Me = {
  position: "csm_Position",
  positionRaw: "csm_PositionRaw",
  pointSize: "csm_PointSize",
  fragColor: "csm_FragColor",
  // PBR
  diffuseColor: "csm_DiffuseColor",
  // Color + alpha
  normal: "csm_Normal",
  // Normal
  roughness: "csm_Roughness",
  // Roughness
  metalness: "csm_Metalness",
  // Metalness
  emissive: "csm_Emissive",
  // Emissive
  ao: "csm_AO",
  // AO
  bump: "csm_Bump",
  // Bump
  depthAlpha: "csm_DepthAlpha"
  // Depth
}, dt, $n;
dt = {}, Ge(dt, "".concat(Me.normal), {
  "#include <beginnormal_vertex>": `
    vec3 objectNormal = `.concat(Me.normal, `;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)
}), Ge(dt, "".concat(Me.position), {
  "#include <begin_vertex>": `
    vec3 transformed = `.concat(Me.position, `;
  `)
}), Ge(dt, "".concat(Me.positionRaw), {
  "#include <begin_vertex>": `
    vec4 csm_internal_positionUnprojected = `.concat(Me.positionRaw, `;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)
}), Ge(dt, "".concat(Me.pointSize), {
  "gl_PointSize = size;": `
    gl_PointSize = `.concat(Me.pointSize, `;
    `)
}), Ge(dt, "".concat(Me.diffuseColor), {
  "#include <color_fragment>": `
    #include <color_fragment>
    diffuseColor = `.concat(Me.diffuseColor, `;
  `)
}), Ge(dt, "".concat(Me.fragColor), {
  "#include <dithering_fragment>": `
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Me.fragColor, `;
  `)
}), Ge(dt, "".concat(Me.emissive), {
  "vec3 totalEmissiveRadiance = emissive;": `
    vec3 totalEmissiveRadiance = `.concat(Me.emissive, `;
    `)
}), Ge(dt, "".concat(Me.roughness), {
  "#include <roughnessmap_fragment>": `
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Me.roughness, `;
    `)
}), Ge(dt, "".concat(Me.metalness), {
  "#include <metalnessmap_fragment>": `
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Me.metalness, `;
    `)
}), Ge(dt, "".concat(Me.ao), {
  "#include <aomap_fragment>": `
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Me.ao, `;
    `)
}), Ge(dt, "".concat(Me.bump), {
  "#include <normal_fragment_maps>": `
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Me.bump, " - (dot(").concat(Me.bump, `, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)
}), Ge(dt, "".concat(Me.depthAlpha), {
  "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );": `
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Me.depthAlpha, ` );
    `),
  "gl_FragColor = packDepthToRGBA( fragCoordZ );": `
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Me.depthAlpha, `;
    `)
}), dt;
$n = {}, Ge($n, "".concat(Me.position), {
  "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );": `
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Me.position, `, 1.0 );
  `)
}), Ge($n, "".concat(Me.positionRaw), {
  "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );": `
    gl_Position = `.concat(Me.position, `;
  `)
}), Ge($n, "".concat(Me.diffuseColor), {
  "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );": `
    gl_FragColor = `.concat(Me.diffuseColor, `;
  `)
}), Ge($n, "".concat(Me.fragColor), {
  "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );": `
    gl_FragColor = `.concat(Me.fragColor, `;
  `)
}), $n;
var pt;
pt = {}, Ge(pt, "".concat(Me.position), "*"), Ge(pt, "".concat(Me.positionRaw), "*"), Ge(pt, "".concat(Me.normal), "*"), Ge(pt, "".concat(Me.pointSize), ["PointsMaterial"]), Ge(pt, "".concat(Me.diffuseColor), "*"), Ge(pt, "".concat(Me.fragColor), "*"), Ge(pt, "".concat(Me.emissive), ["MeshStandardMaterial", "MeshPhysicalMaterial"]), Ge(pt, "".concat(Me.roughness), ["MeshStandardMaterial", "MeshPhysicalMaterial"]), Ge(pt, "".concat(Me.metalness), ["MeshStandardMaterial", "MeshPhysicalMaterial"]), Ge(pt, "".concat(Me.ao), ["MeshStandardMaterial", "MeshPhysicalMaterial", "MeshBasicMaterial", "MeshLambertMaterial", "MeshPhongMaterial", "MeshToonMaterial"]), Ge(pt, "".concat(Me.bump), ["MeshLambertMaterial", "MeshMatcapMaterial", "MeshNormalMaterial", "MeshPhongMaterial", "MeshPhysicalMaterial", "MeshStandardMaterial", "MeshToonMaterial", "ShadowMaterial"]), Ge(pt, "".concat(Me.depthAlpha), "*"), pt;
defineComponent({
  name: "BakeShadows",
  setup() {
    const { renderer: r } = me();
    watchEffect(() => {
      r.value.shadowMap.autoUpdate = false, r.value.shadowMap.needsUpdate = true;
    });
  }
});
var zp = `void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}`, Gp = `#include <common>

void main() {
  vec2 center = vec2(0., 1.);
  float rotation = 0.0;

  
  
  float size = 0.03;

  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
  vec2 scale;
  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

  bool isPerspective = isPerspectiveMatrix( projectionMatrix );
  if ( isPerspective ) scale *= - mvPosition.z;

  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;

  gl_Position = projectionMatrix * mvPosition;
}`;
const Rs = new Vector3(0, 0, 0), Vo = new Vector3(0, 0, 0), Hp = new Vector3(0, 0, 0);
function sa(r, e, t) {
  const n = Rs.setFromMatrixPosition(r.matrixWorld);
  n.project(e);
  const s = t.width / 2, i = t.height / 2;
  return [
    (Number.isNaN(n.x) ? 0 : n.x) * s + s,
    -(n.y * i) + i,
    n.z
  ];
}
function jp(r, e) {
  const t = Rs.setFromMatrixPosition(r.matrixWorld), n = Vo.setFromMatrixPosition(e.matrixWorld), s = t.sub(n), i = e.getWorldDirection(Hp);
  return s.angleTo(i) > Math.PI / 2;
}
function Vp(r, e, t, n) {
  const s = Rs.setFromMatrixPosition(r.matrixWorld), i = s.clone();
  i.project(e), t.setFromCamera(new Vector2(i.x, i.y), e);
  const o = t.intersectObjects(n, true);
  if (o.length > 0) {
    const a = o[0].distance;
    return s.distanceTo(t.ray.origin) < a;
  }
  return true;
}
function Yp(r, e) {
  if (e instanceof OrthographicCamera)
    return e.zoom;
  if (e instanceof PerspectiveCamera) {
    const t = Rs.setFromMatrixPosition(r.matrixWorld), n = Vo.setFromMatrixPosition(e.matrixWorld), s = e.fov * Math.PI / 180, i = t.distanceTo(n);
    return 1 / (2 * Math.tan(s / 2) * i);
  } else
    return 1;
}
function Wp(r, e, t) {
  if (e instanceof PerspectiveCamera || e instanceof OrthographicCamera) {
    const n = Rs.setFromMatrixPosition(r.matrixWorld), s = Vo.setFromMatrixPosition(e.matrixWorld), i = n.distanceTo(s), o = (t[1] - t[0]) / (e.far - e.near), a = t[1] - o * e.far;
    return Math.round(o * i + a);
  }
}
const bo = (r) => Math.abs(r) < 1e-10 ? 0 : r;
function wl(r, e, t = "") {
  let n = "matrix3d(";
  for (let s = 0; s !== 16; s++)
    n += bo(e[s] * r.elements[s]) + (s !== 15 ? "," : ")");
  return t + n;
}
const Xp = /* @__PURE__ */ ((r) => (e) => wl(e, r))([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]), $p = /* @__PURE__ */ ((r) => (e, t) => wl(e, r(t), "translate(-50%,-50%)"))((r) => [1 / r, 1 / r, 1 / r, 1, -1 / r, -1 / r, -1 / r, -1, 1 / r, 1 / r, 1 / r, 1, 1, 1, 1, 1]), Zp = ["geometry", "material"];
/* @__PURE__ */ defineComponent({
  __name: "HTML",
  props: {
    geometry: { default: new PlaneGeometry() },
    material: {},
    as: { default: "div" },
    transform: { type: Boolean, default: false },
    portal: {},
    wrapperClass: {},
    eps: { default: 1e-4 },
    distanceFactor: {},
    fullscreen: { type: Boolean },
    center: { type: Boolean },
    pointerEvents: { default: "auto" },
    sprite: { type: Boolean, default: false },
    zIndexRange: { default: () => [16777271, 0] },
    occlude: { type: [Object, null, Array, Boolean, String] }
  },
  emits: ["onOcclude"],
  setup(r, { expose: e, emit: t }) {
    const n = r, s = t, i = useSlots(), o = useAttrs(), a = ref(), l = ref(), {
      geometry: c,
      material: f,
      as: u,
      transform: d,
      portal: h2,
      wrapperClass: m,
      eps: g,
      distanceFactor: v,
      fullscreen: p,
      center: b,
      pointerEvents: _,
      sprite: M,
      occlude: R,
      zIndexRange: w
    } = toRefs$1(n), { renderer: E, scene: x, camera: T, raycaster: y, sizes: A } = me(), C = computed(() => (void 0).createElement(u.value)), N2 = ref([0, 0, 0]), U = ref(0), Y = ref(), V2 = computed(() => d.value ? {
      position: "absolute",
      top: 0,
      left: 0,
      width: `${A.width.value}px`,
      height: `${A.height.value}px`,
      transformStyle: "preserve-3d",
      pointerEvents: "none",
      zIndex: 2
    } : {
      position: "absolute",
      transform: b.value ? "translate3d(-50%,-50%,0)" : "none",
      ...p.value && {
        top: -A.height.value / 2,
        left: -A.width.value / 2,
        width: `${A.width.value}px`,
        height: `${A.height.value}px`
      },
      zIndex: 2,
      ...Object.assign({}, o.style)
    }), ne = computed(() => ({
      position: "absolute",
      pointerEvents: _.value
    })), Z = ref(null), ee2 = ref(false), te2 = computed(
      () => (R == null ? void 0 : R.value) && (R == null ? void 0 : R.value) !== "blending" || Array.isArray(R == null ? void 0 : R.value) && (R == null ? void 0 : R.value.length) && isRef(R.value[0])
    );
    watch(
      () => R,
      ({ value: B }) => {
        B === "blending" ? (C.value.style.zIndex = `${Math.floor(w.value[0] / 2)}`, C.value.style.position = "absolute", C.value.style.pointerEvents = "none") : (C.value.style.zIndex = null, C.value.style.position = null, C.value.style.pointerEvents = null);
      }
    ), watch(
      () => {
        var B;
        return [a.value, E.value, A.width.value, A.height.value, (B = i.default) == null ? void 0 : B.call(i)];
      },
      ([B, D]) => {
        var O, z2, S, P, L, X;
        if (B && D) {
          const H2 = (h2 == null ? void 0 : h2.value) || D.domElement;
          if ((O = x.value) == null || O.updateMatrixWorld(), d.value)
            C.value.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
          else {
            const j = sa(B, T.value, {
              width: A.width.value,
              height: A.height.value
            });
            C.value.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${j[0]}px,${j[1]}px,0);transform-origin:0 0;`;
          }
          H2 && !C.value.parentNode && ((z2 = H2.parentNode) == null || z2.appendChild(C.value)), d.value ? Y.value = createVNode("div", { id: "outer", style: V2.value }, [
            createVNode("div", { id: "inner", style: ne.value }, [
              createVNode("div", {
                key: (S = l.value) == null ? void 0 : S.uuid,
                id: x == null ? void 0 : x.value.uuid,
                class: o.class,
                style: o.style
              }, (P = i.default) == null ? void 0 : P.call(i))
            ])
          ]) : Y.value = createVNode("div", {
            key: (L = l.value) == null ? void 0 : L.uuid,
            id: x == null ? void 0 : x.value.uuid,
            style: V2.value
          }, (X = i.default) == null ? void 0 : X.call(i)), render(Y.value, C.value);
        }
      }
    ), watchEffect(() => {
      m != null && m.value && (C.value.className = m.value);
    });
    const fe = ref(true), { onBeforeRender: he } = Zr$1();
    he(({ invalidate: B }) => {
      var D, O, z2, S, P, L, X;
      if (B(), a.value && T.value && E.value) {
        (D = T.value) == null || D.updateMatrixWorld(), a.value.updateWorldMatrix(true, false);
        const H2 = d.value ? N2.value : sa(a.value, T.value, {
          width: A.width.value || 0,
          height: A.height.value || 0
        });
        if (d.value || Math.abs(U.value - T.value.zoom) > g.value || Math.abs(N2.value[0] - H2[0]) > g.value || Math.abs(N2.value[1] - H2[1]) > g.value || Math.abs(N2.value[2] - H2[2]) > g.value) {
          const j = jp(a.value, T.value);
          let K = false;
          te2.value && (Array.isArray(R == null ? void 0 : R.value) ? K = R == null ? void 0 : R.value : (R == null ? void 0 : R.value) !== "blending" && (K = [x.value]));
          const se2 = fe.value;
          if (K) {
            const k = Vp(
              a.value,
              T.value,
              y.value,
              K
            );
            fe.value = k && !j;
          } else
            fe.value = !j;
          se2 !== fe.value && (s("onOcclude", !fe.value), C.value.style.display = fe.value ? "block" : "none");
          const ie = Math.floor(w.value[0] / 2), G2 = R != null && R.value ? te2.value ? [w.value[0], ie] : [ie - 1, 0] : w.value;
          if (C.value.style.zIndex = `${Wp(a.value, T.value, G2)}`, d.value) {
            const [k, oe2] = [
              A.width.value / 2,
              A.height.value / 2
            ], ge = T.value.projectionMatrix.elements[5] * oe2, { isOrthographicCamera: Re, top: Ke2, left: He, bottom: Et, right: un } = T.value, En2 = Xp(T.value.matrixWorldInverse), Nt = Re ? `scale(${ge})translate(${bo(-(un + He) / 2)}px,${bo((Ke2 + Et) / 2)}px)` : `translateZ(${ge}px)`;
            let yt2 = a.value.matrixWorld;
            if (M.value && (yt2 = T.value.matrixWorldInverse.clone().transpose().copyPosition(yt2).scale(a.value.scale), yt2.elements[3] = yt2.elements[7] = yt2.elements[11] = 0, yt2.elements[15] = 1), C.value.style.width = `${A.width.value}px`, C.value.style.height = `${A.height.value}px`, C.value.style.perspective = Re ? "" : `${ge}px`, (O = Y.value) != null && O.el && ((z2 = Y.value) != null && z2.children) && Array.isArray(Y.value.children)) {
              Y.value.el.style.transform = `${Nt}${En2}translate(${k}px,${oe2}px)`;
              const Bt = Y.value.children[0];
              Bt && Bt.el && (Bt.el.style.transform = $p(
                yt2,
                1 / (((v == null ? void 0 : v.value) || 10) / 400)
              ));
            }
          } else {
            const k = (v == null ? void 0 : v.value) === void 0 ? 1 : Yp(a.value, T.value) * (v == null ? void 0 : v.value);
            C.value.style.transform = `translate3d(${H2[0]}px,${H2[1]}px,0) scale(${k})`;
          }
        }
        N2.value = H2, U.value = T.value.zoom;
      }
      if (!te2.value && l.value && !ee2.value)
        if (d.value) {
          if ((S = Y.value) != null && S.el && ((P = Y.value) != null && P.children)) {
            const H2 = ((L = Y.value) == null ? void 0 : L.children)[0];
            if (H2 != null && H2.clientWidth && (H2 != null && H2.clientHeight)) {
              const { isOrthographicCamera: j } = T.value;
              if (j || c)
                o.scale && (Array.isArray(o.scale) ? o.scale instanceof Vector3 ? l.value.scale.copy(o.scale.clone().divideScalar(1)) : l.value.scale.set(1 / o.scale[0], 1 / o.scale[1], 1 / o.scale[2]) : l.value.scale.setScalar(1 / o.scale));
              else {
                const K = ((v == null ? void 0 : v.value) || 10) / 400, se2 = H2.clientWidth * K, ie = H2.clientHeight * K;
                l.value.scale.set(se2, ie, 1);
              }
              ee2.value = true;
            }
          }
        } else {
          const H2 = C.value.children[0];
          if (H2 != null && H2.clientWidth && (H2 != null && H2.clientHeight)) {
            const K = H2.clientWidth * 1, se2 = H2.clientHeight * 1;
            l.value.scale.set(K, se2, 1), ee2.value = true;
          }
          Z.value.lookAt((X = T.value) == null ? void 0 : X.position);
        }
    });
    const we = computed(() => ({
      vertexShader: d.value ? void 0 : Gp,
      fragmentShader: zp
    })), I = computed(() => {
      const B = we.value;
      return f.value || new ShaderMaterial({
        vertexShader: B.vertexShader,
        fragmentShader: B.fragmentShader,
        side: DoubleSide
      });
    });
    return onUnmounted(() => {
      I.value && I.value.dispose(), C.value.remove();
    }), e({ instance: a }), (B, D) => (openBlock(), createElementBlock("TresGroup", {
      ref_key: "groupRef",
      ref: a
    }, [
      unref(R) && !te2.value ? (openBlock(), createElementBlock("TresMesh", {
        key: 0,
        ref_key: "meshRef",
        ref: l,
        geometry: unref(c),
        material: I.value
      }, null, 8, Zp)) : createCommentVNode("", true)
    ], 512));
  }
});
var Js = { exports: {} }, Kp = Js.exports, ia;
function qp() {
  return ia || (ia = 1, function(r, e) {
    (function(t, n) {
      r.exports = n();
    })(Kp, function() {
      var t = function() {
        function n(h2) {
          return o.appendChild(h2.dom), h2;
        }
        function s(h2) {
          for (var m = 0; m < o.children.length; m++) o.children[m].style.display = m === h2 ? "block" : "none";
          i = h2;
        }
        var i = 0, o = (void 0).createElement("div");
        o.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", o.addEventListener("click", function(h2) {
          h2.preventDefault(), s(++i % o.children.length);
        }, false);
        var a = (performance || Date).now(), l = a, c = 0, f = n(new t.Panel("FPS", "#0ff", "#002")), u = n(new t.Panel("MS", "#0f0", "#020"));
        if (self.performance && self.performance.memory) var d = n(new t.Panel("MB", "#f08", "#201"));
        return s(0), { REVISION: 16, dom: o, addPanel: n, showPanel: s, begin: function() {
          a = (performance || Date).now();
        }, end: function() {
          c++;
          var h2 = (performance || Date).now();
          if (u.update(h2 - a, 200), h2 > l + 1e3 && (f.update(1e3 * c / (h2 - l), 100), l = h2, c = 0, d)) {
            var m = performance.memory;
            d.update(m.usedJSHeapSize / 1048576, m.jsHeapSizeLimit / 1048576);
          }
          return h2;
        }, update: function() {
          a = this.end();
        }, domElement: o, setMode: s };
      };
      return t.Panel = function(n, s, i) {
        var o = 1 / 0, a = 0, l = Math.round, c = l((void 0).devicePixelRatio || 1), f = 80 * c, u = 48 * c, d = 3 * c, h2 = 2 * c, m = 3 * c, g = 15 * c, v = 74 * c, p = 30 * c, b = (void 0).createElement("canvas");
        b.width = f, b.height = u, b.style.cssText = "width:80px;height:48px";
        var _ = b.getContext("2d");
        return _.font = "bold " + 9 * c + "px Helvetica,Arial,sans-serif", _.textBaseline = "top", _.fillStyle = i, _.fillRect(0, 0, f, u), _.fillStyle = s, _.fillText(n, d, h2), _.fillRect(m, g, v, p), _.fillStyle = i, _.globalAlpha = 0.9, _.fillRect(m, g, v, p), { dom: b, update: function(M, R) {
          o = Math.min(o, M), a = Math.max(a, M), _.fillStyle = i, _.globalAlpha = 1, _.fillRect(0, 0, f, g), _.fillStyle = s, _.fillText(l(M) + " " + n + " (" + l(o) + "-" + l(a) + ")", d, h2), _.drawImage(b, m + c, g, v - c, p, m, g, v - c, p), _.fillRect(m + v - c, g, c, p), _.fillStyle = i, _.globalAlpha = 0.9, _.fillRect(m + v - c, g, c, l((1 - M / R) * p));
        } };
      }, t;
    });
  }(Js)), Js.exports;
}
var Qp = qp();
const Jp = /* @__PURE__ */ Ps(Qp);
defineComponent({
  name: "Stats",
  props: {
    showPanel: {
      type: Number,
      default: 0
    }
  },
  setup(r, { expose: e }) {
    const t = new Jp();
    e({ instance: t });
    const n = (void 0).body;
    t.showPanel(r.showPanel || 0), n == null || n.appendChild(t.dom);
    const { onBeforeRender: s, onAfterRender: i } = Zr$1();
    s(() => t.begin(), Number.NEGATIVE_INFINITY), i(() => t.end(), Number.POSITIVE_INFINITY), onUnmounted(() => {
      n == null || n.removeChild(t.dom);
    });
  }
});
class em {
  constructor(e, t, n) {
    this.name = e, this.fg = t, this.bg = n, this.gradient = null, this.PR = Math.round((void 0).devicePixelRatio || 1), this.WIDTH = 90 * this.PR, this.HEIGHT = 48 * this.PR, this.TEXT_X = 3 * this.PR, this.TEXT_Y = 2 * this.PR, this.GRAPH_X = 3 * this.PR, this.GRAPH_Y = 15 * this.PR, this.GRAPH_WIDTH = 84 * this.PR, this.GRAPH_HEIGHT = 30 * this.PR, this.canvas = (void 0).createElement("canvas"), this.canvas.width = this.WIDTH, this.canvas.height = this.HEIGHT, this.canvas.style.width = "90px", this.canvas.style.height = "48px", this.canvas.style.position = "absolute", this.canvas.style.cssText = "width:90px;height:48px", this.context = this.canvas.getContext("2d"), this.initializeCanvas();
  }
  createGradient() {
    if (!this.context)
      throw new Error("No context");
    const e = this.context.createLinearGradient(
      0,
      this.GRAPH_Y,
      0,
      this.GRAPH_Y + this.GRAPH_HEIGHT
    );
    let t;
    const n = this.fg;
    switch (this.fg.toLowerCase()) {
      case "#0ff":
        t = "#006666";
        break;
      case "#0f0":
        t = "#006600";
        break;
      case "#ff0":
        t = "#666600";
        break;
      case "#e1e1e1":
        t = "#666666";
        break;
      default:
        t = this.bg;
        break;
    }
    return e.addColorStop(0, t), e.addColorStop(1, n), e;
  }
  initializeCanvas() {
    this.context && (this.context.font = "bold " + 9 * this.PR + "px Helvetica,Arial,sans-serif", this.context.textBaseline = "top", this.gradient = this.createGradient(), this.context.fillStyle = this.bg, this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT), this.context.fillStyle = this.fg, this.context.fillText(this.name, this.TEXT_X, this.TEXT_Y), this.context.fillStyle = this.fg, this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT), this.context.fillStyle = this.bg, this.context.globalAlpha = 0.9, this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT));
  }
  update(e, t, n, s, i = 0) {
    if (!this.context || !this.gradient)
      return;
    const o = Math.min(1 / 0, e), a = Math.max(n, e);
    s = Math.max(s, t), this.context.globalAlpha = 1, this.context.fillStyle = this.bg, this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y), this.context.fillStyle = this.fg, this.context.fillText(
      `${e.toFixed(i)} ${this.name} (${o.toFixed(i)}-${parseFloat(
        a.toFixed(i)
      )})`,
      this.TEXT_X,
      this.TEXT_Y
    ), this.context.drawImage(
      this.canvas,
      this.GRAPH_X + this.PR,
      this.GRAPH_Y,
      this.GRAPH_WIDTH - this.PR,
      this.GRAPH_HEIGHT,
      this.GRAPH_X,
      this.GRAPH_Y,
      this.GRAPH_WIDTH - this.PR,
      this.GRAPH_HEIGHT
    );
    const l = this.GRAPH_HEIGHT - (1 - t / s) * this.GRAPH_HEIGHT;
    l > 0 && (this.context.globalAlpha = 1, this.context.fillStyle = this.gradient, this.context.fillRect(
      this.GRAPH_X + this.GRAPH_WIDTH - this.PR,
      this.GRAPH_Y + this.GRAPH_HEIGHT - l,
      this.PR,
      l
    ));
  }
}
const Tl = class Zn {
  constructor({
    trackGPU: e = false,
    logsPerSecond: t = 30,
    samplesLog: n = 60,
    samplesGraph: s = 10,
    precision: i = 2,
    minimal: o = false,
    horizontal: a = true,
    mode: l = 0
  } = {}) {
    this.gl = null, this.ext = null, this.activeQuery = null, this.gpuQueries = [], this.threeRendererPatched = false, this.frames = 0, this.renderCount = 0, this.isRunningCPUProfiling = false, this.totalCpuDuration = 0, this.totalGpuDuration = 0, this.totalGpuDurationCompute = 0, this.totalFps = 0, this.gpuPanel = null, this.gpuPanelCompute = null, this.averageFps = { logs: [], graph: [] }, this.averageCpu = { logs: [], graph: [] }, this.averageGpu = { logs: [], graph: [] }, this.averageGpuCompute = { logs: [], graph: [] }, this.handleClick = (c) => {
      c.preventDefault(), this.showPanel(++this.mode % this.dom.children.length);
    }, this.handleResize = () => {
      this.resizePanel(this.fpsPanel, 0), this.resizePanel(this.msPanel, 1), this.gpuPanel && this.resizePanel(this.gpuPanel, 2), this.gpuPanelCompute && this.resizePanel(this.gpuPanelCompute, 3);
    }, this.mode = l, this.horizontal = a, this.minimal = o, this.trackGPU = e, this.samplesLog = n, this.samplesGraph = s, this.precision = i, this.logsPerSecond = t, this.dom = (void 0).createElement("div"), this.initializeDOM(), this.beginTime = performance.now(), this.prevTime = this.beginTime, this.prevCpuTime = this.beginTime, this.fpsPanel = this.addPanel(new Zn.Panel("FPS", "#0ff", "#002"), 0), this.msPanel = this.addPanel(new Zn.Panel("CPU", "#0f0", "#020"), 1), this.setupEventListeners();
  }
  initializeDOM() {
    this.dom.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0.9;
      z-index: 10000;
      ${this.minimal ? "cursor: pointer;" : ""}
    `;
  }
  setupEventListeners() {
    this.minimal ? (this.dom.addEventListener("click", this.handleClick), this.showPanel(this.mode)) : (void 0).addEventListener("resize", this.handleResize);
  }
  async init(e) {
    if (!e) {
      console.error('Stats: The "canvas" parameter is undefined.');
      return;
    }
    this.handleThreeRenderer(e) || await this.handleWebGPURenderer(e) || this.initializeWebGL(e);
  }
  handleThreeRenderer(e) {
    return e.isWebGLRenderer && !this.threeRendererPatched ? (this.patchThreeRenderer(e), this.gl = e.getContext(), this.trackGPU && this.initializeGPUTracking(), true) : false;
  }
  async handleWebGPURenderer(e) {
    return e.isWebGPURenderer ? (this.trackGPU && (e.backend.trackTimestamp = true, await e.hasFeatureAsync("timestamp-query") && this.initializeWebGPUPanels()), this.info = e.info, true) : false;
  }
  initializeWebGPUPanels() {
    this.gpuPanel = this.addPanel(new Zn.Panel("GPU", "#ff0", "#220"), 2), this.gpuPanelCompute = this.addPanel(
      new Zn.Panel("CPT", "#e1e1e1", "#212121"),
      3
    );
  }
  initializeWebGL(e) {
    if (e instanceof WebGL2RenderingContext)
      this.gl = e;
    else if (e instanceof HTMLCanvasElement || e instanceof OffscreenCanvas) {
      if (this.gl = e.getContext("webgl2"), !this.gl)
        return console.error("Stats: Unable to obtain WebGL2 context."), false;
    } else
      return console.error(
        "Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas."
      ), false;
    return true;
  }
  initializeGPUTracking() {
    this.gl && (this.ext = this.gl.getExtension("EXT_disjoint_timer_query_webgl2"), this.ext && (this.gpuPanel = this.addPanel(new Zn.Panel("GPU", "#ff0", "#220"), 2)));
  }
  begin() {
    this.isRunningCPUProfiling || this.beginProfiling("cpu-started"), !(!this.gl || !this.ext) && (this.activeQuery && this.gl.endQuery(this.ext.TIME_ELAPSED_EXT), this.activeQuery = this.gl.createQuery(), this.activeQuery && this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, this.activeQuery));
  }
  end() {
    this.renderCount++, this.gl && this.ext && this.activeQuery && (this.gl.endQuery(this.ext.TIME_ELAPSED_EXT), this.gpuQueries.push({ query: this.activeQuery }), this.activeQuery = null);
  }
  update() {
    this.info ? this.processWebGPUTimestamps() : this.processGpuQueries(), this.endProfiling("cpu-started", "cpu-finished", "cpu-duration"), this.updateAverages(), this.resetCounters();
  }
  processWebGPUTimestamps() {
    this.totalGpuDuration = this.info.render.timestamp, this.totalGpuDurationCompute = this.info.compute.timestamp, this.addToAverage(this.totalGpuDurationCompute, this.averageGpuCompute);
  }
  updateAverages() {
    this.addToAverage(this.totalCpuDuration, this.averageCpu), this.addToAverage(this.totalGpuDuration, this.averageGpu);
  }
  resetCounters() {
    this.renderCount = 0, this.totalCpuDuration === 0 && this.beginProfiling("cpu-started"), this.totalCpuDuration = 0, this.totalFps = 0, this.beginTime = this.endInternal();
  }
  resizePanel(e, t) {
    e.canvas.style.position = "absolute", this.minimal ? e.canvas.style.display = "none" : (e.canvas.style.display = "block", this.horizontal ? (e.canvas.style.top = "0px", e.canvas.style.left = t * e.WIDTH / e.PR + "px") : (e.canvas.style.left = "0px", e.canvas.style.top = t * e.HEIGHT / e.PR + "px"));
  }
  addPanel(e, t) {
    return e.canvas && (this.dom.appendChild(e.canvas), this.resizePanel(e, t)), e;
  }
  showPanel(e) {
    for (let t = 0; t < this.dom.children.length; t++) {
      const n = this.dom.children[t];
      n.style.display = t === e ? "block" : "none";
    }
    this.mode = e;
  }
  processGpuQueries() {
    !this.gl || !this.ext || (this.totalGpuDuration = 0, this.gpuQueries.forEach((e, t) => {
      if (this.gl) {
        const n = this.gl.getQueryParameter(e.query, this.gl.QUERY_RESULT_AVAILABLE), s = this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);
        if (n && !s) {
          const o = this.gl.getQueryParameter(e.query, this.gl.QUERY_RESULT) * 1e-6;
          this.totalGpuDuration += o, this.gl.deleteQuery(e.query), this.gpuQueries.splice(t, 1);
        }
      }
    }));
  }
  endInternal() {
    this.frames++;
    const e = (performance || Date).now(), t = e - this.prevTime;
    if (e >= this.prevCpuTime + 1e3 / this.logsPerSecond) {
      const n = Math.round(this.frames * 1e3 / t);
      this.addToAverage(n, this.averageFps), this.updatePanel(this.fpsPanel, this.averageFps, 0), this.updatePanel(this.msPanel, this.averageCpu, this.precision), this.updatePanel(this.gpuPanel, this.averageGpu, this.precision), this.gpuPanelCompute && this.updatePanel(this.gpuPanelCompute, this.averageGpuCompute), this.frames = 0, this.prevCpuTime = e, this.prevTime = e;
    }
    return e;
  }
  addToAverage(e, t) {
    t.logs.push(e), t.logs.length > this.samplesLog && t.logs.shift(), t.graph.push(e), t.graph.length > this.samplesGraph && t.graph.shift();
  }
  beginProfiling(e) {
    (void 0).performance && ((void 0).performance.mark(e), this.isRunningCPUProfiling = true);
  }
  endProfiling(e, t, n) {
    if ((void 0).performance && t && this.isRunningCPUProfiling) {
      (void 0).performance.mark(t);
      const s = performance.measure(n, e, t);
      this.totalCpuDuration += s.duration, this.isRunningCPUProfiling = false;
    }
  }
  updatePanel(e, t, n = 2) {
    if (t.logs.length > 0) {
      let s = 0, i = 0.01;
      for (let l = 0; l < t.logs.length; l++)
        s += t.logs[l], t.logs[l] > i && (i = t.logs[l]);
      let o = 0, a = 0.01;
      for (let l = 0; l < t.graph.length; l++)
        o += t.graph[l], t.graph[l] > a && (a = t.graph[l]);
      e && e.update(s / Math.min(t.logs.length, this.samplesLog), o / Math.min(t.graph.length, this.samplesGraph), i, a, n);
    }
  }
  get domElement() {
    return this.dom;
  }
  patchThreeRenderer(e) {
    const t = e.render, n = this;
    e.render = function(s, i) {
      n.begin(), t.call(this, s, i), n.end();
    }, this.threeRendererPatched = true;
  }
};
Tl.Panel = em;
let tm = Tl;
defineComponent({
  name: "StatsGl",
  props: [
    "logsPerSecond",
    "samplesLog",
    "samplesGraph",
    "precision",
    "horizontal",
    "minimal",
    "mode"
  ],
  setup(r, { expose: e }) {
    const t = new tm({
      logsPerSecond: r.logsPerSecond,
      samplesLog: r.samplesLog,
      samplesGraph: r.samplesGraph,
      precision: r.precision,
      horizontal: r.horizontal,
      minimal: r.minimal,
      mode: r.mode
    });
    e({ instance: t });
    const n = (void 0).body, s = t.dom || t.container;
    n == null || n.appendChild(s);
    const { renderer: i } = me(), { onAfterRender: o } = Zr$1();
    t.init(i.value), o(() => t.update(), Number.POSITIVE_INFINITY), onUnmounted(() => {
      n == null || n.removeChild(s);
    });
  }
});
const jm = ["object"], Yv = /* @__PURE__ */ defineComponent({
  __name: "ContactShadows",
  props: {
    opacity: { default: 1 },
    blur: { default: 1 },
    color: { default: "#000000" },
    tint: { default: void 0 },
    scale: { default: 10 },
    width: { default: 1 },
    height: { default: 1 },
    far: { default: 10 },
    smooth: { type: Boolean, default: true },
    resolution: { default: 512 },
    frames: { default: Number.POSITIVE_INFINITY },
    depthWrite: { type: Boolean, default: false }
  },
  setup(r, { expose: e }) {
    const t = r;
    function n(h2, m, g) {
      g.blurPlane.visible = true, g.blurPlane.material = g.horizontalBlurMaterial, g.horizontalBlurMaterial.uniforms.tDiffuse.value = g.renderTarget.texture, g.horizontalBlurMaterial.uniforms.h.value = h2 / 256, m.setRenderTarget(g.renderTargetBlur), m.render(g.blurPlane, g.shadowCamera), g.blurPlane.material = g.verticalBlurMaterial, g.verticalBlurMaterial.uniforms.tDiffuse.value = g.renderTargetBlur.texture, g.verticalBlurMaterial.uniforms.v.value = h2 / 256, m.setRenderTarget(g.renderTarget), m.render(g.blurPlane, g.shadowCamera), g.blurPlane.visible = false;
    }
    function s(h2, m, g, v) {
      const {
        renderTarget: p,
        shadowCamera: b,
        depthMaterial: _
      } = v, M = m.background;
      m.background = null, m.overrideMaterial = _;
      const R = g.getClearAlpha();
      g.setClearAlpha(0), g.setRenderTarget(p), g.render(m, b), m.overrideMaterial = null, n(h2.blur, g, v), h2.smooth && n(h2.blur * 0.4, g, v), g.setRenderTarget(null), g.setClearAlpha(R), m.background = M;
    }
    function i(h2) {
      const m = new Group(), g = new WebGLRenderTarget(h2.resolution, h2.resolution);
      g.texture.generateMipmaps = false;
      const v = new WebGLRenderTarget(h2.resolution, h2.resolution);
      v.texture.generateMipmaps = false;
      const p = new PlaneGeometry(h2.width, h2.height).rotateX(Math.PI / 2), b = new MeshBasicMaterial({
        map: g.texture,
        opacity: h2.opacity,
        transparent: true,
        depthWrite: h2.depthWrite,
        color: new Color(h2.color ?? "black")
      }), _ = new Mesh(p, b);
      m.add(_), _.scale.y = -1;
      const M = new Mesh(p);
      M.visible = false, m.add(M);
      const R = new OrthographicCamera(-h2.width / 2, h2.width / 2, h2.height / 2, -h2.height / 2, 0, 0.3);
      R.rotation.x = Math.PI / 2, m.add(R);
      const w = new MeshDepthMaterial(), E = new ShaderMaterial(nf);
      E.depthTest = false;
      const x = new ShaderMaterial(sf);
      return x.depthTest = false, {
        renderTarget: g,
        renderTargetBlur: v,
        shadowCamera: R,
        depthMaterial: w,
        horizontalBlurMaterial: E,
        verticalBlurMaterial: x,
        shadowGroup: m,
        plane: _,
        blurPlane: M
      };
    }
    function o(h2, m) {
      const g = m.shadowCamera;
      g.left = -h2.width / 2, g.right = h2.width / 2, g.top = h2.height / 2, g.bottom = -h2.height / 2, g.far = h2.far;
      const v = h2.width * (Array.isArray(h2.scale) ? h2.scale[0] : h2.scale || 1), p = h2.height * (Array.isArray(h2.scale) ? h2.scale[1] : h2.scale || 1);
      m.shadowGroup.scale.set(v, h2.far, p);
    }
    function a(h2, m) {
      m.renderTarget.dispose(), m.renderTargetBlur.dispose(), m.renderTarget = new WebGLRenderTarget(h2, h2), m.renderTarget.texture.generateMipmaps = false, m.renderTargetBlur = new WebGLRenderTarget(h2, h2), m.renderTargetBlur.texture.generateMipmaps = false, m.plane.material.map = m.renderTarget.texture;
    }
    function l(h2, m) {
      m.plane.material.color = new Color(h2.color ?? "black"), m.depthMaterial.dispose(), m.depthMaterial = new MeshDepthMaterial(), m.depthMaterial.onBeforeCompile = function(g) {
        const v = h2.tint ? new Color(h2.tint) : new Color("white"), { r: p, g: b, b: _ } = v, M = g.fragmentShader.replace(
          "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );",
          `gl_FragColor = vec4( ${p}, ${b}, ${_}, ( 1.0 - fragCoordZ ) * opacity);`
        );
        g.fragmentShader = M;
      };
    }
    const { onBeforeRender: c } = Zr$1(), f = i(t);
    let u = 0;
    const d = () => u = u >= t.frames ? t.frames - 1 : u;
    return c(
      ({ renderer: h2, scene: m, invalidate: g }) => {
        u < t.frames && (u++, s(t, m, h2, f), g());
      }
    ), watch(() => [t.opacity, t.depthWrite, t.blur, t.smooth], () => {
      f.plane.material.opacity = t.opacity ?? 1, f.plane.material.depthWrite = t.depthWrite ?? false, d();
    }, { immediate: true }), watch(() => [t.color, t.tint], () => {
      l(t, f), d();
    }, { immediate: true }), watch(() => [t.resolution], () => {
      a(t.resolution, f), d();
    }), watch(() => [t.width, t.height, t.scale, t.far], () => {
      o(t, f), d();
    }, { immediate: true }), onUnmounted(() => {
      for (const h2 of Object.values(f))
        h2 && "dispose" in h2 && typeof h2.dispose == "function" && h2.dispose();
    }), e({ instance: f.shadowGroup }), (h2, m) => (openBlock(), createElementBlock("primitive", {
      object: unref(f).shadowGroup
    }, null, 8, jm));
  }
}), eg = `
return PCSS( shadowMap, shadowCoord );
`, Qv = /* @__PURE__ */ defineComponent({
  __name: "SoftShadows",
  props: {
    size: { default: 25 },
    samples: { default: 10 },
    focus: { default: 0 }
  },
  setup(r) {
    const e = r, t = ({ focus: c = 0, size: f = 25, samples: u = 10 } = {}) => `
#define PENUMBRA_FILTER_SIZE float(${f})
#define RGB_NOISE_FUNCTION(uv) (randRGB(uv))
vec3 randRGB(vec2 uv) {
  return vec3(
    fract(sin(dot(uv, vec2(12.75613, 38.12123))) * 13234.76575),
    fract(sin(dot(uv, vec2(19.45531, 58.46547))) * 43678.23431),
    fract(sin(dot(uv, vec2(23.67817, 78.23121))) * 93567.23423)
  );
}

vec3 lowPassRandRGB(vec2 uv) {
  // 3x3 convolution (average)
  // can be implemented as separable with an extra buffer for a total of 6 samples instead of 9
  vec3 result = vec3(0);
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0, +1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0, +1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0, +1.0));
  result *= 0.111111111; // 1.0 / 9.0
  return result;
}
vec3 highPassRandRGB(vec2 uv) {
  // by subtracting the low-pass signal from the original signal, we're being left with the high-pass signal
  // hp(x) = x - lp(x)
  return RGB_NOISE_FUNCTION(uv) - lowPassRandRGB(uv) + 0.5;
}


vec2 vogelDiskSample(int sampleIndex, int sampleCount, float angle) {
  const float goldenAngle = 2.399963f; // radians
  float r = sqrt(float(sampleIndex) + 0.5f) / sqrt(float(sampleCount));
  float theta = float(sampleIndex) * goldenAngle + angle;
  float sine = sin(theta);
  float cosine = cos(theta);
  return vec2(cosine, sine) * r;
}
float penumbraSize( const in float zReceiver, const in float zBlocker ) { // Parallel plane estimation
  return (zReceiver - zBlocker) / zBlocker;
}
float findBlocker(sampler2D shadowMap, vec2 uv, float compare, float angle) {
  float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
  float blockerDepthSum = float(${c});
  float blockers = 0.0;

  int j = 0;
  vec2 offset = vec2(0.);
  float depth = 0.;

  #pragma unroll_loop_start
  for(int i = 0; i < ${u}; i ++) {
    offset = (vogelDiskSample(j, ${u}, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
    depth = unpackRGBAToDepth( texture2D( shadowMap, uv + offset));
    if (depth < compare) {
      blockerDepthSum += depth;
      blockers++;
    }
    j++;
  }
  #pragma unroll_loop_end

  if (blockers > 0.0) {
    return blockerDepthSum / blockers;
  }
  return -1.0;
}

        
float vogelFilter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius, float angle) {
  float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
  float shadow = 0.0f;
  int j = 0;
  vec2 vogelSample = vec2(0.0);
  vec2 offset = vec2(0.0);
  #pragma unroll_loop_start
  for (int i = 0; i < ${u}; i++) {
    vogelSample = vogelDiskSample(j, ${u}, angle) * texelSize;
    offset = vogelSample * (1.0 + filterRadius * float(${f}));
    shadow += step( zReceiver, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
    j++;
  }
  #pragma unroll_loop_end
  return shadow * 1.0 / ${u}.0;
}

float PCSS (sampler2D shadowMap, vec4 coords) {
  vec2 uv = coords.xy;
  float zReceiver = coords.z; // Assumed to be eye-space z in this code
  float angle = highPassRandRGB(gl_FragCoord.xy).r * PI2;
  float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver, angle);
  if (avgBlockerDepth == -1.0) {
    return 1.0;
  }
  float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);
  return vogelFilter(shadowMap, uv, zReceiver, 1.25 * penumbraRatio, angle);
}`, n = ShaderChunk.shadowmap_pars_fragment, { renderer: s, scene: i, camera: o } = Xr$1();
    function a(c, f) {
      let u = n;
      u = u.replace(
        "#ifdef USE_SHADOWMAP",
        `#ifdef USE_SHADOWMAP
    ${t(f)}`
      ), u = u.replace(
        "#if defined( SHADOWMAP_TYPE_PCF )",
        `${eg} 
    #if defined( SHADOWMAP_TYPE_PCF )`
      ), ShaderChunk.shadowmap_pars_fragment = u, c.shadowMap.enabled = true;
    }
    function l(c, f, u) {
      f.traverse((d) => {
        var h2, m;
        "material" in d && d.material && (c.properties.remove(d.material), typeof d.material == "object" && "dispose" in d.material && typeof d.material.dispose == "function" && ((m = (h2 = d.material).dispose) == null || m.call(h2)));
      }), c.info.programs && (c.info.programs.length = 0), c.compile(f, u);
    }
    return onUnmounted(() => {
      o.value && (ShaderChunk.shadowmap_pars_fragment = n, l(s.value, i.value, o.value));
    }), watch(e, () => {
      o.value && (a(s.value, e), l(s.value, i.value, o.value));
    }, { immediate: true }), (c, f) => (openBlock(), createElementBlock("TresGroup"));
  }
});
const yg = {
  key: 0,
  args: [0, 1, 64]
}, _g = {
  key: 1,
  args: [0.5, 1, 64]
}, xg = { key: 2 }, wg = ["tone-mapped", "map", "side", "color"];
/* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    args: { default: null },
    form: { default: "rect" },
    toneMapped: { type: Boolean, default: false },
    map: { default: null },
    intensity: { default: 1 },
    color: { default: new Color(16777215) }
  },
  setup(r, { expose: e }) {
    const t = r, n = ref(), s = ref();
    return watchEffect(() => {
      n.value && (n.value.color.copy(new Color(t.color)), n.value.color.multiplyScalar(t.intensity), n.value.needsUpdate = true);
    }), e({ mesh: s }), (i, o) => (openBlock(), createElementBlock("TresMesh", {
      ref_key: "mesh",
      ref: s
    }, [
      i.form === "circle" ? (openBlock(), createElementBlock("TresRingGeometry", yg)) : i.form === "ring" ? (openBlock(), createElementBlock("TresRingGeometry", _g)) : i.form === "rect" ? (openBlock(), createElementBlock("TresPlaneGeometry", xg)) : (openBlock(), createBlock(t.form, {
        key: 3,
        args: i.args
      }, null, 8, ["args"])),
      createElementVNode("TresMeshBasicMaterial", {
        ref_key: "material",
        ref: n,
        "tone-mapped": i.toneMapped,
        map: i.map,
        side: unref(DoubleSide),
        color: i.color
      }, null, 8, wg)
    ], 512));
  }
});
const path = "/models/precast_concrete_box_texture.glb";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PipeModel",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { scene } = ([__temp, __restore] = withAsyncContext(() => kd(path, { draco: true })), __temp = await __temp, __restore(), __temp);
    scene.traverse((child) => {
      if (child instanceof Jn.Mesh) {
        const materialName = child.material.name;
        if (materialName === "Black") {
          child.material = child.material.clone();
          child.material.color.set("#353535");
          child.material.roughness = 1;
        }
        if (materialName !== "Black") {
          child.material.color.set("#e4e4e4");
          child.material.roughness = 0.7;
        }
        child.material.needsUpdate = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<primitive${ssrRenderAttrs(mergeProps({
        object: unref(scene),
        scale: [0.8, 1.8, 0.8],
        position: [0, 0, 0],
        rotation: [-Math.PI / 2, -Math.PI / 2, 0]
      }, _attrs))}></primitive>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/model/PipeModel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CubeScene",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Hr), mergeProps({
        "clear-color": "#0e0013",
        class: "h-screen"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<TresAmbientLight${ssrRenderAttr("intensity", 1)}${_scopeId}></TresAmbientLight><TresDirectionalLight cast-shadow${ssrRenderAttr("position", [10, 5, -8])}${ssrRenderAttr("intensity", 4)}${_scopeId}></TresDirectionalLight><TresPerspectiveCamera${ssrRenderAttr("position", [2, 2, 3])}${ssrRenderAttr("look-at", [0, 0, 0])}${_scopeId}></TresPerspectiveCamera><TresMesh${_scopeId}>`);
            ssrRenderSuspense(_push2, {
              default: () => {
                _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
              },
              _: 1
            });
            _push2(`</TresMesh>`);
            _push2(ssrRenderComponent(unref(Yv), {
              "position-y": -1,
              color: "#335",
              scale: 20
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Qv), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(av), {
              autoRotate: true,
              autoRotateSpeed: 0.3,
              enableDamping: true,
              dampingFactor: 0.05,
              minDistance: 1.5,
              maxDistance: 5
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("TresAmbientLight", { intensity: 1 }),
              createVNode("TresDirectionalLight", {
                "cast-shadow": "",
                position: [10, 5, -8],
                intensity: 4
              }),
              createVNode("TresPerspectiveCamera", {
                position: [2, 2, 3],
                "look-at": [0, 0, 0]
              }),
              createVNode("TresMesh", null, [
                (openBlock(), createBlock(Suspense, null, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$2)
                  ]),
                  _: 1
                }))
              ]),
              createVNode(unref(Yv), {
                "position-y": -1,
                color: "#335",
                scale: 20
              }),
              createVNode(unref(Qv)),
              createVNode(unref(av), {
                autoRotate: true,
                autoRotateSpeed: 0.3,
                enableDamping: true,
                dampingFactor: 0.05,
                minDistance: 1.5,
                maxDistance: 5
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/scene/CubeScene.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(true);
    const sceneKey = ref(Date.now());
    const route = useRoute();
    useRouter();
    watch(
      () => route.fullPath,
      () => {
        sceneKey.value = Date.now();
      }
    );
    const labels = ["소개", "연혁", "시공 사례"];
    const projects = [
      {
        image: "/img/main1.png",
        title: "영광 중점관리지역 시공",
        date: "2024년 ~ 진행중"
      },
      {
        image: "/img/main2.png",
        title: "장성 주거 단지 시공",
        date: "2022년 11월"
      },
      { image: "/img/main3.png", title: "담양 공공 건축물", date: "2021년 8월" },
      {
        image: "/img/main4.png",
        title: "해수소통로",
        date: "2024년 1월"
      },
      { image: "/img/main3.png", title: "부산 공공 건축물", date: "2021년 8월" },
      { image: "/img/main4.png", title: "인천 산업 단지", date: "2024년 1월" }
    ];
    const history = [
      { year: "1994", event: "대광 PC 설립" },
      { year: "2017", event: "광주 하남3지구 오수관로 설치" },
      { year: "2025", event: "영광 중점관리지역 PC 암거설치" },
      { year: "2025", event: "영광 중점관리지역 PC 암거설치" }
    ];
    const currentSection = ref(0);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "index-page relative" }, _attrs))} data-v-166dd318><section id="paths" class="scene-paths relative" data-v-166dd318><div class="scene-overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10" data-v-166dd318><div class="flex" data-v-166dd318><img${ssrRenderAttr("src", _imports_0)} alt="로고" class="logo mr-2" data-v-166dd318><h1 class="title text-primary" data-v-166dd318>대광 PC</h1></div><p class="subtitle" data-v-166dd318>PC BOX 설치 전문기업</p></div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</section><div class="section-indicator fixed left-6 z-50 top-1/2 -translate-y-1/2 transition-transform duration-300" data-v-166dd318><ul class="flex flex-col gap-4" data-v-166dd318><!--[-->`);
      ssrRenderList(labels, (label, i) => {
        _push(`<li data-v-166dd318><button class="${ssrRenderClass([
          currentSection.value === i ? "bg-black text-white" : "bg-gray-200 text-gray-600",
          "text-xl font-bold px-4 py-2 rounded-lg transition-all duration-300"
        ])}" data-v-166dd318>${ssrInterpolate(label)}</button></li>`);
      });
      _push(`<!--]--></ul></div><section id="intro" class="scene-wrapper section-dark" data-v-166dd318><div class="scene-intro text-center space-y-6" data-v-166dd318><div class="flex justify-center items-center" data-v-166dd318><img${ssrRenderAttr("src", _imports_0)} alt="로고" class="logo mr-3" data-v-166dd318><h1 class="title text-white" data-v-166dd318>대광 PC</h1></div><p class="subtitle text-xl text-white leading-relaxed max-w-xl mx-auto" data-v-166dd318><strong class="text-accent" data-v-166dd318>PC 박스</strong>는 <strong data-v-166dd318>미리 제작된 콘크리트 구조물</strong>로,<br data-v-166dd318><strong data-v-166dd318>배수로</strong> 및 <strong data-v-166dd318>지하 구조물 시공</strong>에 사용됩니다.<br data-v-166dd318><br data-v-166dd318><strong data-v-166dd318>정밀한 시공</strong>과 <strong data-v-166dd318>전문 설치 기술</strong>을 바탕으로,<br data-v-166dd318> 인프라의 든든한 기반을 만들어 갑니다. </p></div><section class="three-section" data-v-166dd318>`);
      _push(ssrRenderComponent(_sfc_main$1, { key: sceneKey.value }, null, _parent));
      _push(`</section></section><section id="history" class="history-section section-light" data-v-166dd318><h2 class="section-heading" data-v-166dd318>🏗️ 주요 이력</h2><ul class="history-list" data-v-166dd318><!--[-->`);
      ssrRenderList(history, (item) => {
        _push(`<li class="history-item" data-v-166dd318><span class="year" data-v-166dd318>${ssrInterpolate(item.year)}</span><span class="event" data-v-166dd318>${ssrInterpolate(item.event)}</span></li>`);
      });
      _push(`<!--]--></ul></section><section id="projects" class="projects section-muted" data-v-166dd318><h2 class="projects-title" data-v-166dd318>시공 사례</h2><div class="projects-grid" data-v-166dd318><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<div class="project-card" data-v-166dd318><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="project-image" data-v-166dd318><div class="project-info" data-v-166dd318><h3 class="project-title" data-v-166dd318>${ssrInterpolate(project.title)}</h3><p class="project-date" data-v-166dd318>${ssrInterpolate(project.date)}</p></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-166dd318"]]);
export {
  index as default
};
//# sourceMappingURL=index-CW4bNMd5.js.map
