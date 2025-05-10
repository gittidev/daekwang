// middleware/auth.global.ts
import { useCookie, navigateTo, defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to) => {
  // 클라이언트에서만 실행
  if (process.server) return;

  // 쿠키명은 실제 사용 중인 키로
  const token = useCookie("admin_token").value;

  // 로그인 페이지는 패스
  if (to.path === "/admin") return;

  // /admin/** 진입 시 토큰 없으면 로그인으로 리다이렉트
  if (to.path.startsWith("/admin") && !token) {
    return navigateTo("/admin");
  }
});
