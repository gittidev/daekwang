<script setup lang="ts">
import { ref } from "vue";

const emailAddress = "pyw4733@hanmail.net";
const subject = ref("");
const location = ref("");
const timeline = ref("");
const specification = ref("");
const length = ref("");
const equipment = ref("");
const otherRequests = ref("");
const contact = ref("");
const estimatedCost = ref("");

const pcBoxSpecs = ref<{ spec: string; length: string }[]>([
  { spec: "", length: "" },
]);

const addSpec = () => {
  pcBoxSpecs.value.push({ spec: "", length: "" });
};

const removeSpec = (index: number) => {
  pcBoxSpecs.value.splice(index, 1);
};

const createAndDownloadExcel = async () => {
  const { default: ExcelJS } = await import("exceljs");
  const module = await import("file-saver");
  const saveAs = module.default;

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("견적서");

  const titleStyle: Partial<import("exceljs").Style> = {
    font: { bold: true, size: 14, color: { argb: "FFFFFF" } },
    alignment: { vertical: "middle", horizontal: "center" },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "3182CE" } },
    border: {
      top: { style: "thin" },
      bottom: { style: "thin" },
      left: { style: "thin" },
      right: { style: "thin" },
    },
  };

  const headerStyle: Partial<import("exceljs").Style> = {
    font: { bold: true, size: 12, color: { argb: "FFFFFF" } },
    alignment: { vertical: "middle", horizontal: "center" },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "4A5568" } },
    border: {
      top: { style: "thin" },
      bottom: { style: "thin" },
      left: { style: "thin" },
      right: { style: "thin" },
    },
  };

  const cellStyle: Partial<import("exceljs").Style> = {
    font: { size: 10 },
    alignment: { vertical: "middle", horizontal: "left" },
    border: {
      top: { style: "thin" },
      bottom: { style: "thin" },
      left: { style: "thin" },
      right: { style: "thin" },
    },
  };

  worksheet.mergeCells("A1:B1");
  worksheet.getCell("A1").value = `${location.value} 견적서`;
  worksheet.getCell("A1").style = titleStyle;

  worksheet.columns = [
    { key: "A", width: 20 },
    { key: "B", width: 30 },
  ];

  worksheet
    .addRow(["이름/직책", contact.value])
    .eachCell((cell) => (cell.style = cellStyle));
  worksheet
    .addRow(["연락처", contact.value])
    .eachCell((cell) => (cell.style = cellStyle));
  worksheet
    .addRow(["시공 시기", timeline.value])
    .eachCell((cell) => (cell.style = cellStyle));
  worksheet
    .addRow(["시공 장소", location.value])
    .eachCell((cell) => (cell.style = cellStyle));
  worksheet.addRow([]);

  worksheet
    .addRow(["PC 예상 시공 내역", ""])
    .eachCell((cell) => (cell.style = headerStyle));
  worksheet.mergeCells("A6:B6");

  worksheet
    .addRow(["PC 박스 규격", "길이(M)"])
    .eachCell((cell) => (cell.style = headerStyle));
  worksheet
    .addRow([specification.value, length.value])
    .eachCell((cell) => (cell.style = cellStyle));
  pcBoxSpecs.value.forEach((item) => {
    worksheet
      .addRow([item.spec, item.length])
      .eachCell((cell) => (cell.style = cellStyle));
  });

  worksheet.addRow([]);

  worksheet
    .addRow(["장비 지원 여부", equipment.value])
    .eachCell((cell) => (cell.style = cellStyle));
  worksheet
    .addRow(["기타 요청 사항", otherRequests.value])
    .eachCell((cell) => (cell.style = cellStyle));

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, `${location.value}_견적서.xlsx`);
};

const openEmailClient = () => {
  let mailBody = `다음 세부사항이 포함된 견적을 제공해 주세요:
- 시공 장소: ${location.value}
- 시공 시기: ${timeline.value}
- 장비 지원 여부: ${equipment.value}
- 기타 요청: ${otherRequests.value}`;

  pcBoxSpecs.value.forEach((item, index) => {
    mailBody += `\nPC 박스 ${index + 1} 규격: ${item.spec}   설치 길이: ${
      item.length
    }`;
  });

  subject.value = `${location.value} 견적 요청드립니다`;

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject.value
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

        <!-- 시공 장소 -->
        <div class="form-group">
          <label>시공 장소</label>
          <input v-model="location" placeholder="전라남도 나주시" />
        </div>

        <!-- 시공 시기 -->
        <div class="form-group">
          <label>시공 시기</label>
          <input v-model="timeline" placeholder="2025년 3월" />
        </div>

        <!-- 연락처 -->
        <div class="form-group">
          <label>연락처</label>
          <input v-model="contact" placeholder="010-1234-5678" />
        </div>

        <!-- 예상 시공 견적비용 -->
        <div class="form-group">
          <label>예상 시공 견적비용</label>
          <input v-model="estimatedCost" placeholder="100,000 원" />
        </div>

        <!-- PC 박스 규격 및 설치 길이 (동적 추가) -->
        <div class="form-group">
          <label>PC 박스 규격 및 설치 길이</label>
          <div
            v-for="(item, index) in pcBoxSpecs"
            :key="index"
            class="pc-box-entry"
          >
            <input
              v-model="item.spec"
              placeholder="300x200x150mm"
              class="input-spec"
            />
            <input
              v-model="item.length"
              placeholder="50m"
              class="input-length"
            />
            <button @click="removeSpec(index)" class="remove-btn">❌</button>
          </div>
          <button @click="addSpec" class="add-btn">+ 항목 추가</button>
        </div>

        <!-- 기타 요청 -->
        <div class="form-group">
          <label>기타 요청 사항</label>
          <textarea
            v-model="otherRequests"
            placeholder="기타 요청 사항을 작성해 주세요."
          ></textarea>
        </div>
      </div>

      <!-- 엑셀 다운로드 버튼 -->
      <button class="contact-button" @click="createAndDownloadExcel">
        엑셀 파일 다운로드
      </button>

      <!-- 이메일 전송 버튼 -->
      <button class="contact-button" @click="openEmailClient">
        견적 요청 이메일 전송
      </button>
    </div>
  </div>
</template>
<style scoped>
/* 기본 컨테이너 */
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 입력 폼 */
.contact-content {
  width: 100%;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 제목 */
h2 {
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  text-align: center;
}

/* 부제목 */
p {
  color: #718096;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* 입력 필드 스타일 */
.form-group {
  margin: 1rem 0;
}

label {
  display: block;
  color: #2d3748;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: #fafafa;
  font-size: 1rem;
  color: #4a5568;
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #3182ce;
  outline: none;
  box-shadow: 0 0 0 2px rgba(50, 144, 221, 0.3);
}

/* 버튼 스타일 */
.contact-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #3182ce;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 0.5rem 0;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.contact-button:hover {
  background-color: #2b6cb0;
  transform: translateY(-2px);
}

.contact-button:active {
  transform: translateY(0);
}

/* 추가/삭제 버튼 */
.add-btn,
.remove-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f6ad55;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.remove-btn {
  background-color: #e53e3e;
}

.add-btn:hover,
.remove-btn:hover {
  background-color: #dd6b20;
}

/* 항목 추가 필드 */
.pc-box-entry {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.input-spec,
.input-length {
  flex: 1;
  padding: 0.75rem;
}

/* 모바일 반응형 */
@media (max-width: 600px) {
  .container {
    padding: 1rem;
  }

  .contact-content {
    padding: 1.25rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .form-group {
    margin: 1rem 0;
  }

  input,
  textarea {
    font-size: 0.95rem;
  }

  .contact-button {
    padding: 0.75rem;
    margin: 0.5rem 0;
    font-size: 1rem;
  }
}
</style>
