import { computed, toValue, reactive, defineComponent, ref, watch, mergeProps, useSSRContext, withAsyncContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderTeleport, ssrRenderComponent } from "vue/server-renderer";
import { f as fetchDefaults, u as useRuntimeConfig, a as useRouter, _ as _export_sfc } from "../server.mjs";
import { hash } from "ohash";
import { u as useRequestFetch } from "./ssr-6SqBYcwq.js";
import { u as useAsyncData } from "./asyncData-DgKxqO7c.js";
import { u as useCookie, a as useAdminToken } from "./useAdminToken-CF0QWcUQ.js";
import "defu";
import "#internal/nuxt/paths";
import "destr";
import "klona";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "cookie-es";
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watch2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConstructionForm",
  __ssrInlineRender: true,
  props: {
    construction: {}
  },
  emits: ["saved", "cancel"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c;
    useCookie("access_token").value;
    const config = useRuntimeConfig();
    const {
      public: { apiUrl }
    } = config;
    const props = __props;
    const form = ref({ ...props.construction });
    ref(null);
    const previewUrl = ref(form.value.thumbnail || null);
    const isUploading = ref(false);
    const startDate = ref(((_a = form.value.period) == null ? void 0 : _a.split(" ~ ")[0]) || "");
    const endDate = ref(((_b = form.value.period) == null ? void 0 : _b.split(" ~ ")[1]) || "");
    const totalPriceText = ref(((_c = form.value.total_price) == null ? void 0 : _c.toLocaleString()) || "");
    watch(totalPriceText, (val) => {
      const digits = val.replace(/[^\d]/g, "");
      form.value.total_price = parseInt(digits || "0");
      totalPriceText.value = digits ? Number(digits).toLocaleString() : "";
    });
    watch([startDate, endDate], ([start, end]) => {
      if (start && end) {
        form.value.period = `${start} ~ ${end}`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div><label class="block font-medium mb-1">썸네일 이미지</label><input type="file" accept="image/*" class="block">`);
      if (!previewUrl.value) {
        _push(`<p class="text-sm text-gray-500 mt-1"> 이미지를 선택하거나 드래그하세요. </p>`);
      } else {
        _push(`<!---->`);
      }
      if (previewUrl.value) {
        _push(`<div class="mt-2 relative w-fit"><img${ssrRenderAttr("src", previewUrl.value)} alt="미리보기" class="w-48 h-auto border rounded"><button type="button" class="absolute top-1 right-1 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded hover:bg-opacity-80"> 삭제 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block font-medium mb-1">장소</label><input${ssrRenderAttr("value", form.value.place)} type="text" class="w-full px-3 py-2 border rounded"></div><div><label class="block font-medium mb-1">기간</label><div class="flex gap-2"><input${ssrRenderAttr("value", startDate.value)} type="date" class="px-3 py-2 border rounded"><span class="self-center">~</span><input${ssrRenderAttr("value", endDate.value)} type="date" class="px-3 py-2 border rounded"></div></div><div><label class="block font-medium mb-1">설명</label><textarea rows="3" class="w-full px-3 py-2 border rounded resize-none">${ssrInterpolate(form.value.description)}</textarea></div><div><label class="block font-medium mb-1">총 금액</label><input${ssrRenderAttr("value", totalPriceText.value)} type="text" inputmode="numeric" placeholder="예: 1,000,000" class="w-full px-3 py-2 border rounded"></div><div><label class="inline-flex items-center space-x-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.is_published) ? ssrLooseContain(form.value.is_published, null) : form.value.is_published) ? " checked" : ""}><span>공개 여부</span></label></div><div class="flex justify-end gap-2 mt-4"><button type="button" class="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"> 취소 </button><button type="submit"${ssrIncludeBooleanAttr(isUploading.value) ? " disabled" : ""} class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50">${ssrInterpolate(isUploading.value ? "저장 중..." : "저장")}</button></div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/ConstructionForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "constructions",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    const { isLoggedIn } = useAdminToken();
    const config = useRuntimeConfig();
    const token = useCookie("admin_token").value;
    if (!isLoggedIn.value) {
      router.push("/admin/login");
    }
    const { data: constructions2, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiUrl}/admin/constructions`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      "$JjEZL0jZfU"
    )), __temp = await __temp, __restore(), __temp);
    const editingConstruction = ref(null);
    const showModal = ref(false);
    const closeModal = () => {
      editingConstruction.value = null;
      showModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-page" }, _attrs))} data-v-c89d3b24><div class="flex justify-between items-center mb-6" data-v-c89d3b24><div data-v-c89d3b24><h1 class="text-3xl font-bold" data-v-c89d3b24>🛠️ 시공 내역 관리</h1><p class="text-gray-500 text-sm mt-1" data-v-c89d3b24> 등록된 모든 시공 정보를 확인하고 관리할 수 있습니다. </p></div><button class="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition" data-v-c89d3b24> ➕ 등록하기 </button></div>`);
      if ((_a = unref(constructions2)) == null ? void 0 : _a.length) {
        _push(`<div class="overflow-x-auto bg-white shadow-sm rounded-lg" data-v-c89d3b24><table class="min-w-full table-auto border-collapse" data-v-c89d3b24><thead data-v-c89d3b24><tr class="bg-gray-100" data-v-c89d3b24><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>ID</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>장소</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>기간</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>설명</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>공개 여부</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>가격</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>등록일</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>수정/삭제</th></tr></thead><tbody data-v-c89d3b24><!--[-->`);
        ssrRenderList(unref(constructions2), (item) => {
          var _a2;
          _push(`<tr class="border-b hover:bg-gray-50" data-v-c89d3b24><td class="px-4 py-2" data-v-c89d3b24>${ssrInterpolate(item.id)}</td><td class="px-4 py-2" data-v-c89d3b24>${ssrInterpolate(item.place)}</td><td class="px-4 py-2" data-v-c89d3b24>${ssrInterpolate(item.period)}</td><td class="px-4 py-2" data-v-c89d3b24>${ssrInterpolate(item.description || "설명 없음")}</td><td class="px-4 py-2" data-v-c89d3b24>${ssrInterpolate(item.is_published ? "공개" : "비공개")}</td><td class="px-4 py-2" data-v-c89d3b24>${ssrInterpolate(((_a2 = item.total_price) == null ? void 0 : _a2.toLocaleString()) || "미입력")}</td><td class="px-4 py-2" data-v-c89d3b24>${ssrInterpolate(item.created_at.slice(0, 10))}</td><td class="px-4 py-2" data-v-c89d3b24><button class="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200" data-v-c89d3b24> ✏️ 수정 </button><button class="text-sm px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200" data-v-c89d3b24> 🗑️ 삭제 </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<div class="overflow-x-auto bg-white shadow-sm rounded-lg" data-v-c89d3b24><table class="min-w-full table-auto border-collapse" data-v-c89d3b24><thead data-v-c89d3b24><tr class="bg-gray-100" data-v-c89d3b24><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>ID</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>장소</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>기간</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>설명</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>공개 여부</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>가격</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>등록일</th><th class="px-4 py-2 text-left text-gray-600" data-v-c89d3b24>수정/삭제</th></tr></thead><tbody data-v-c89d3b24><!--[-->`);
        ssrRenderList(2, (i) => {
          _push(`<tr class="border-b hover:bg-gray-50" data-v-c89d3b24><td class="px-4 py-2" data-v-c89d3b24>1</td><td class="px-4 py-2" data-v-c89d3b24>예시 장소 ${ssrInterpolate(i)}</td><td class="px-4 py-2" data-v-c89d3b24>2023.01 ~ 2023.03</td><td class="px-4 py-2" data-v-c89d3b24>예시 설명</td><td class="px-4 py-2" data-v-c89d3b24>공개</td><td class="px-4 py-2" data-v-c89d3b24>100,000</td><td class="px-4 py-2" data-v-c89d3b24>2023-01-01</td><td class="px-4 py-2" data-v-c89d3b24><button disabled class="text-sm px-3 py-1 bg-gray-200 text-gray-400 cursor-not-allowed" data-v-c89d3b24> ✏️ 수정 </button><button disabled class="text-sm px-3 py-1 bg-gray-200 text-gray-400 cursor-not-allowed" data-v-c89d3b24> 🗑️ 삭제 </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      ssrRenderTeleport(_push, (_push2) => {
        var _a2;
        if (showModal.value) {
          _push2(`<div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" data-v-c89d3b24><div class="bg-white p-6 rounded-lg w-full max-w-xl shadow-lg relative" data-v-c89d3b24><button class="absolute top-3 right-3 text-gray-400 hover:text-black text-xl" data-v-c89d3b24> × </button><h2 class="text-xl font-bold mb-4" data-v-c89d3b24>${ssrInterpolate(((_a2 = editingConstruction.value) == null ? void 0 : _a2.id) === 0 ? "📝 시공 등록" : "✏️ 시공 수정")}</h2>`);
          _push2(ssrRenderComponent(_sfc_main$1, {
            construction: editingConstruction.value,
            onSaved: () => {
              closeModal();
              unref(refresh)();
            },
            onCancel: closeModal
          }, null, _parent));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/constructions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const constructions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c89d3b24"]]);
export {
  constructions as default
};
//# sourceMappingURL=constructions-Crqj9fCA.js.map
