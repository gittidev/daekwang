import { _ as __nuxt_component_1 } from "./client-only-Db1Q_2tj.js";
import { defineComponent, ref, withAsyncContext, computed, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { a as useAdminToken } from "./useAdminToken-CF0QWcUQ.js";
import { useRouter } from "vue-router";
import { u as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-DgKxqO7c.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useAdminToken();
    useRouter();
    ref(false);
    ref("");
    ref("");
    const config = useRuntimeConfig();
    const { data: constructions, pending } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "admin-constructions-summary",
      () => $fetch(`${config.public.apiUrl}/admin/constructions`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`
        }
      })
    )), __temp = await __temp, __restore(), __temp);
    computed(() => {
      var _a;
      return ((_a = constructions.value) == null ? void 0 : _a.length) || 0;
    });
    computed(
      () => {
        var _a;
        return ((_a = constructions.value) == null ? void 0 : _a.filter((c) => c.is_published).length) || 0;
      }
    );
    computed(() => {
      var _a;
      return (_a = constructions.value) == null ? void 0 : _a[0];
    });
    ref([
      { month: "1월", count: 5 },
      { month: "2월", count: 8 },
      { month: "3월", count: 12 },
      { month: "4월", count: 15 },
      { month: "5월", count: 7 },
      { month: "6월", count: 9 },
      { month: "7월", count: 10 },
      { month: "8월", count: 6 },
      { month: "9월", count: 11 },
      { month: "10월", count: 14 },
      { month: "11월", count: 13 },
      { month: "12월", count: 16 }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_1;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-58abfb9e"]]);
export {
  dashboard as default
};
//# sourceMappingURL=dashboard-ByyoKSNF.js.map
