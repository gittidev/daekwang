<script setup>
import { ref } from "vue";

const emailAddress = "pyw4733@hanmail.net";
const subject = "PC암거 설치 견적 요청";

const location = ref("");
const timeline = ref("");
const specification = ref("");
const length = ref("");
const equipment = ref("");

const openEmailClient = () => {
  const mailBody = `다음 세부사항이 포함된 견적을 제공해 주세요:
- 시공 장소: ${location.value}
- 시공 시기: ${timeline.value}
- PC 박스 규격: ${specification.value}
- 규격당 설치 길이 (미터): ${length.value}
- 장비 지원 여부: ${equipment.value}`;

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(mailBody)}`;
  window.location.href = mailtoLink;
};
</script>

<template>
  <div class="container">
    <div class="contact-content">
      <div class="info-section">
        <h2>견적 요청</h2>
        <p>아래 정보를 입력해 주세요.</p>

        <div class="form-group">
          <label>시공 장소</label>
          <input v-model="location" placeholder="전라남도 나주시" />
        </div>

        <div class="form-group">
          <label>시공 시기</label>
          <input v-model="timeline" placeholder="2025년 3월" />
        </div>

        <div class="form-group">
          <label>PC 박스 규격</label>
          <input v-model="specification" placeholder="300x200x150mm" />
        </div>

        <div class="form-group">
          <label>설치 길이 (m)</label>
          <input v-model="length" placeholder="50m" />
        </div>

        <div class="form-group">
          <label>장비 지원</label>
          <input v-model="equipment" placeholder="있음/없음" />
        </div>
      </div>

      <button class="contact-button" @click="openEmailClient">견적 요청</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: var(--main-bg);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-content {
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  background: var(--sub-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.info-section {
  margin-bottom: 1.5rem;
}

h2 {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

p {
  color: var(--accent-color);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.form-group {
  margin: 0.75rem 0;
}

label {
  display: block;
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

input {
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--primary-color);
  font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
}

.contact-button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: var(--main-color);
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.contact-button:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
}

.contact-button:active {
  transform: translateY(0);
}

/* 다크 모드 지원 */
@media (prefers-color-scheme: dark) {
  .container {
    background: var(--main-bg);
  }

  .contact-content {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  h2,
  p,
  label {
    color: var(--primary-color);
  }

  input {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--primary-color);
  }
}

/* 반응형 */
@media (max-width: 600px) {
  .contact-content {
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style>
