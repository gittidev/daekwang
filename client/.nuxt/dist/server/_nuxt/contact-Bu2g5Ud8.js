import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    const location = ref("");
    const timeline = ref("");
    ref("");
    ref("");
    ref("");
    const otherRequests = ref("");
    const contact2 = ref("");
    const estimatedCost = ref("");
    const pcBoxSpecs = ref([
      { spec: "", length: "" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-ca2b6124><div class="contact-content" data-v-ca2b6124><div class="info-section" data-v-ca2b6124><h2 data-v-ca2b6124>견적 요청</h2><p data-v-ca2b6124>아래 정보를 입력해 주세요.</p><div class="form-group" data-v-ca2b6124><label data-v-ca2b6124>시공 장소</label><input${ssrRenderAttr("value", location.value)} placeholder="전라남도 나주시" data-v-ca2b6124></div><div class="form-group" data-v-ca2b6124><label data-v-ca2b6124>시공 시기</label><input${ssrRenderAttr("value", timeline.value)} placeholder="2025년 3월" data-v-ca2b6124></div><div class="form-group" data-v-ca2b6124><label data-v-ca2b6124>연락처</label><input${ssrRenderAttr("value", contact2.value)} placeholder="010-1234-5678" data-v-ca2b6124></div><div class="form-group" data-v-ca2b6124><label data-v-ca2b6124>예상 시공 견적비용</label><input${ssrRenderAttr("value", estimatedCost.value)} placeholder="100,000 원" data-v-ca2b6124></div><div class="form-group" data-v-ca2b6124><label data-v-ca2b6124>PC 박스 규격 및 설치 길이</label><!--[-->`);
      ssrRenderList(pcBoxSpecs.value, (item, index) => {
        _push(`<div class="pc-box-entry" data-v-ca2b6124><input${ssrRenderAttr("value", item.spec)} placeholder="300x200x150mm" class="input-spec" data-v-ca2b6124><input${ssrRenderAttr("value", item.length)} placeholder="50m" class="input-length" data-v-ca2b6124><button class="remove-btn" data-v-ca2b6124>❌</button></div>`);
      });
      _push(`<!--]--><button class="add-btn" data-v-ca2b6124>+ 항목 추가</button></div><div class="form-group" data-v-ca2b6124><label data-v-ca2b6124>기타 요청 사항</label><textarea placeholder="기타 요청 사항을 작성해 주세요." data-v-ca2b6124>${ssrInterpolate(otherRequests.value)}</textarea></div></div><button class="contact-button" data-v-ca2b6124> 엑셀 파일 다운로드 </button><button class="contact-button" data-v-ca2b6124> 견적 요청 이메일 전송 </button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca2b6124"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-Bu2g5Ud8.js.map
