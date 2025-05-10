import { defineComponent, ref, withAsyncContext, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ping",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const pingMessage = ref(null);
    const errorMessage = ref("");
    ref(false);
    {
      console.log("🚀 SSR 중");
    }
    const { data } = ([__temp, __restore] = withAsyncContext(() => fetch("http://localhost:8000/api/ping")), __temp = await __temp, __restore(), __temp);
    console.log("data", data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (pingMessage.value === null && !errorMessage.value) {
        _push(`<p>⏳ 로딩 중...</p>`);
      } else if (errorMessage.value) {
        _push(`<p>❌ 에러: ${ssrInterpolate(errorMessage.value)}</p>`);
      } else {
        _push(`<p>✅ 응답: ${ssrInterpolate(pingMessage.value)}</p>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ping.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ping-BD47Gvsz.js.map
