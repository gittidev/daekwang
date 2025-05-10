import { ref, computed } from "vue";
import "hookable";
import { parse } from "cookie-es";
import { getRequestHeader, setCookie, getCookie, deleteCookie } from "h3";
import destr from "destr";
import { isEqual } from "ohash";
import { klona } from "klona";
import { b as useNuxtApp } from "../server.mjs";
import { a as useRequestEvent } from "./ssr-6SqBYcwq.js";
import "defu";
import "#internal/nuxt/paths";
import { useRouter } from "vue-router";
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key) => key === name);
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const useAdminToken = () => {
  const token = useCookie("admin_token");
  const router = useRouter();
  const setToken = (value) => {
    token.value = value;
  };
  const clearToken = () => {
    token.value = null;
    router.push("/admin");
  };
  const isLoggedIn = computed(() => !!token.value);
  return {
    token,
    setToken,
    clearToken,
    isLoggedIn
  };
};
export {
  useAdminToken as a,
  useCookie as u
};
//# sourceMappingURL=useAdminToken-CF0QWcUQ.js.map
