import { computed, ref, defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { u as useCookie, a as useAdminToken } from "./useAdminToken-CF0QWcUQ.js";
import { u as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import "defu";
import "#internal/nuxt/paths";
import "destr";
import "klona";
import "hookable";
import "cookie-es";
import "h3";
import "ohash";
import "./ssr-6SqBYcwq.js";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "radix3";
import "ufo";
const ADMIN_TOKEN_KEY = "admin_token";
const useAdminAuth = () => {
  const token = useCookie(ADMIN_TOKEN_KEY);
  const isLoggedIn = computed(() => !!token.value);
  const loading = ref(false);
  const error = ref(null);
  const config = useRuntimeConfig();
  const login = async (username, password) => {
    var _a;
    try {
      loading.value = true;
      error.value = null;
      const res = await fetch(`${config.public.apiUrl}/admin/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });
      if (!res.ok) {
        throw new Error("로그인에 실패했습니다.");
      }
      const result = await res.json();
      const newToken = ((_a = result.data) == null ? void 0 : _a.access_token) || null;
      token.value = newToken;
      return result;
    } catch (err) {
      error.value = err.message || "알 수 없는 오류";
      throw err;
    } finally {
      loading.value = false;
    }
  };
  const logout = () => {
    token.value = null;
  };
  return {
    token,
    isLoggedIn,
    login,
    logout,
    loading,
    error
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const password = ref("");
    useRouter();
    useAdminAuth();
    useAdminToken();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-page" }, _attrs))} data-v-005fe0b7><div class="login-container" data-v-005fe0b7><h2 data-v-005fe0b7>관리자 로그인</h2><form class="login-form" data-v-005fe0b7><input${ssrRenderAttr("value", username.value)} placeholder="아이디" class="input-field" data-v-005fe0b7><input${ssrRenderAttr("value", password.value)} type="password" placeholder="비밀번호" class="input-field" data-v-005fe0b7><button type="submit" class="login-button" data-v-005fe0b7>로그인</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-005fe0b7"]]);
export {
  index as default
};
//# sourceMappingURL=index-B2kWDzzT.js.map
