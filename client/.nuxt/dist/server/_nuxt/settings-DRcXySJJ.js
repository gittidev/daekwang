import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { a as useAdminToken } from "./useAdminToken-CF0QWcUQ.js";
import "hookable";
import { a as useRouter, _ as _export_sfc } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "cookie-es";
import "h3";
import "ohash";
import "./ssr-6SqBYcwq.js";
import "vue-router";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "radix3";
import "ufo";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const { isLoggedIn } = useAdminToken();
    const router = useRouter();
    if (!isLoggedIn.value) {
      router.push("/admin/login");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-settings" }, _attrs))} data-v-f71881c1><div class="text-center mb-10" data-v-f71881c1><h1 class="text-4xl font-extrabold text-blue-600" data-v-f71881c1>관리자 설정</h1><p class="text-gray-600 mt-2 text-base" data-v-f71881c1> 시스템 설정, 권한 관리 등 고급 기능이 추가될 예정입니다. </p></div><div class="rounded-lg border border-blue-100 bg-blue-50 p-8 text-center shadow-sm" data-v-f71881c1><p class="text-blue-700 text-lg font-medium" data-v-f71881c1> ⚠️ 설정 기능이 아직 준비되지 않았습니다. </p><p class="text-sm text-blue-500 mt-2" data-v-f71881c1> 향후 업데이트에서 다양한 설정 항목이 제공될 예정입니다. </p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f71881c1"]]);
export {
  settings as default
};
//# sourceMappingURL=settings-DRcXySJJ.js.map
