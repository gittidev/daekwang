<template>
  <div class="login-page">
    <div class="login-container">
      <h2>관리자 로그인</h2>
      <form @submit.prevent="login" class="login-form">
        <input v-model="username" placeholder="아이디" class="input-field" />
        <input
          v-model="password"
          type="password"
          placeholder="비밀번호"
          class="input-field"
        />
        <button type="submit" class="login-button">로그인</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useAdminToken } from "@/composables/useAdminToken";
import { useAdminAuth } from "@/composables/useAdminAuth";

// 타입 명시적으로 정의
const username = ref<string>("");
const password = ref<string>("");

const router = useRouter();
const { login: doLogin } = useAdminAuth(); // login 함수 불러오기
const { setToken } = useAdminToken();

const login = async () => {
  try {
    await doLogin(username.value, password.value);
    setToken("ok"); // isLoggedIn 상태를 true로 만들기 위한 임의 토큰
    router.push("/admin");
  } catch (error) {
    alert("로그인에 실패했습니다. 아이디 또는 비밀번호를 확인하세요.");
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  background: white;
  padding: 2rem 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-field {
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.login-button {
  padding: 0.75rem 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-button:hover {
  background: #2980b9;
}

.login-button:active {
  background: #2471a3;
}
</style>
