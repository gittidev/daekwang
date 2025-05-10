import { defineComponent, mergeProps, useSSRContext, ref, withAsyncContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./NuxtImg-B1SZBIN_.js";
import { _ as _export_sfc, u as useRuntimeConfig } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-DgKxqO7c.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ufo";
import "h3";
import "./ssr-6SqBYcwq.js";
import "@unhead/shared";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
import "radix3";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConstructionCard",
  __ssrInlineRender: true,
  props: {
    place: {},
    period: {},
    description: {},
    thumbnail: {},
    totalPrice: {},
    isAdmin: { type: Boolean }
  },
  setup(__props) {
    const formatPrice = (price) => {
      return new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
        maximumFractionDigits: 0
      }).format(price);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "construction-card" }, _attrs))} data-v-ef904016>`);
      if (_ctx.thumbnail) {
        _push(`<div class="thumbnail" data-v-ef904016>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: _ctx.thumbnail,
          alt: _ctx.place
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-ef904016><h3 class="place" data-v-ef904016>${ssrInterpolate(_ctx.place)}</h3><p class="period" data-v-ef904016>${ssrInterpolate(_ctx.period)}</p><p class="description" data-v-ef904016>${ssrInterpolate(_ctx.description)}</p>`);
      if (_ctx.isAdmin && _ctx.totalPrice) {
        _push(`<p class="price" data-v-ef904016>${ssrInterpolate(formatPrice(_ctx.totalPrice))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConstructionCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ConstructionCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ef904016"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "works",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const isAdmin = ref(false);
    const config = useRuntimeConfig();
    const {
      data: constructions,
      pending: isLoading,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "constructions",
      () => $fetch(`${config.public.apiUrl}/constructions`)
    )), __temp = await __temp, __restore(), __temp);
    const fallbackData = [
      {
        id: 1,
        place: "전남 여수시 돌산읍",
        period: "2024.01 ~ 2024.04",
        description: "해안도로 배수로 정비 공사",
        is_published: true,
        created_at: (/* @__PURE__ */ new Date("2024-01-15")).toISOString(),
        thumbnail: "/img/main4.png",
        total_price: 15e7
      },
      {
        id: 2,
        place: "전남 순천시 해룡면",
        period: "2023.12 ~ 2024.02",
        description: "순천만 습지 보호구역 하수관 설치",
        is_published: true,
        created_at: (/* @__PURE__ */ new Date("2023-12-01")).toISOString(),
        thumbnail: "/img/main4.png",
        total_price: 9e7
      },
      {
        id: 3,
        place: "전남 목포시 용해동",
        period: "2023.10 ~ 2023.11",
        description: "목포 항구 주변 도로 보강 공사",
        is_published: true,
        created_at: (/* @__PURE__ */ new Date("2023-10-10")).toISOString(),
        thumbnail: "/img/main4.png",
        total_price: 7e7
      },
      {
        id: 4,
        place: "전남 나주시 금천면",
        period: "2023.08 ~ 2023.09",
        description: "농업용수 공급을 위한 관로 설치",
        is_published: true,
        created_at: (/* @__PURE__ */ new Date("2023-08-20")).toISOString(),
        thumbnail: "/img/main4.png",
        total_price: 45e6
      },
      {
        id: 5,
        place: "전남 광양시 중마동",
        period: "2024.02 ~ 2024.05",
        description: "광양제철소 인근 배수시설 개선 공사",
        is_published: true,
        created_at: (/* @__PURE__ */ new Date("2024-02-05")).toISOString(),
        thumbnail: "/img/main4.png",
        total_price: 18e7
      },
      {
        id: 6,
        place: "전남 담양군 담양읍",
        period: "2023.11 ~ 2023.12",
        description: "죽녹원 주변 보행로 정비",
        is_published: true,
        created_at: (/* @__PURE__ */ new Date("2023-11-15")).toISOString(),
        thumbnail: "/img/main4.png",
        total_price: 6e7
      },
      {
        id: 7,
        place: "전남 장흥군 장흥읍",
        period: "2023.09 ~ 2023.10",
        description: "탐진강 제방 보강 공사",
        is_published: true,
        created_at: (/* @__PURE__ */ new Date("2023-09-25")).toISOString(),
        thumbnail: "/img/main4.png",
        total_price: 85e6
      },
      {
        id: 8,
        place: "전남 화순군 화순읍",
        period: "2024.03 ~ 2024.06",
        description: "화순 온천지구 하수처리시설 확장",
        is_published: true,
        created_at: (/* @__PURE__ */ new Date("2024-03-01")).toISOString(),
        thumbnail: "/img/main4.png",
        total_price: 13e7
      }
    ];
    const displayedConstructions = computed(() => {
      var _a;
      return ((_a = constructions.value) == null ? void 0 : _a.length) ? constructions.value : fallbackData;
    });
    const selectedConstruction = ref(null);
    const showPopup = ref(false);
    const openPopup = (item) => {
      selectedConstruction.value = item;
      showPopup.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "works-page" }, _attrs))} data-v-d08c7505><section class="projects fade-up section-muted" data-v-d08c7505><h2 class="projects-title" data-v-d08c7505>시공 사례</h2><div class="projects-grid" data-v-d08c7505><!--[-->`);
      ssrRenderList(displayedConstructions.value, (item) => {
        _push(ssrRenderComponent(ConstructionCard, {
          key: item.id,
          place: item.place,
          period: item.period,
          description: item.description,
          thumbnail: item.thumbnail || "/img/placeholder.png",
          totalPrice: isAdmin.value ? item.total_price : void 0,
          isAdmin: isAdmin.value,
          onClick: ($event) => openPopup(item)
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
      if (showPopup.value) {
        _push(`<div class="modal-overlay" data-v-d08c7505><div class="modal-content" data-v-d08c7505><button class="close-btn" data-v-d08c7505>×</button><h2 data-v-d08c7505>${ssrInterpolate((_a = selectedConstruction.value) == null ? void 0 : _a.place)}</h2><p data-v-d08c7505>${ssrInterpolate((_b = selectedConstruction.value) == null ? void 0 : _b.period)}</p><img${ssrRenderAttr("src", ((_c = selectedConstruction.value) == null ? void 0 : _c.thumbnail) || "/img/placeholder.png")} alt="thumbnail" class="modal-image" data-v-d08c7505><p data-v-d08c7505>${ssrInterpolate((_d = selectedConstruction.value) == null ? void 0 : _d.description)}</p>`);
        if (isAdmin.value) {
          _push(`<p data-v-d08c7505> 💰 ${ssrInterpolate((_f = (_e = selectedConstruction.value) == null ? void 0 : _e.total_price) == null ? void 0 : _f.toLocaleString())}원 </p>`);
        } else {
          _push(`<!---->`);
        }
        if (isAdmin.value) {
          _push(`<div data-v-d08c7505><button class="edit-btn" data-v-d08c7505>수정하기</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const works = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d08c7505"]]);
export {
  works as default
};
//# sourceMappingURL=works-JosgnV_A.js.map
