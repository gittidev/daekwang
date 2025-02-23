<template>
  <v-footer class="footer">
    <div class="contact-info">
      <h2>_ADDRESS</h2>
      <p>광주광역시 광산구 사암로 340번길 30</p>
      <h2>_PHONE/FAX</h2>
      <p>010-2684-6408/062-961-6408</p>
      <h2>_EMAIL</h2>
      <p>pyw4733@hanmail.net</p>
      <h2>CONTACT US</h2>
      <p>© 1994 대광PC. All Rights Reserved.</p>
    </div>
  </v-footer>
</template>

<style lang="postcss" scoped>
.footer {
  background-color: var(--footer-bg, #083d77);
  color: var(--footer-text, #fff);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  text-align: left;
}

.contact-info p {
  margin: 4px 0;
  font-size: 1rem;
}
</style>
