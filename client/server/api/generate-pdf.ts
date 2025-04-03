import { createPDF } from "#pdf";
import { send } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const pdfBuffer = await createPDF({
    content: `
      <h1>견적 요청서</h1>
      <p><strong>시공 장소:</strong> ${body.location}</p>
      <p><strong>시공 시기:</strong> ${body.timeline}</p>
      <p><strong>PC 박스 규격:</strong> ${body.specification}</p>
      <p><strong>설치 길이:</strong> ${body.length}</p>
      <p><strong>장비 지원:</strong> ${body.equipment}</p>
    `,
  });

  // PDF 다운로드 응답
  return send(event, pdfBuffer, "application/pdf", {
    "Content-Disposition": 'attachment; filename="estimate.pdf"',
  });
});
