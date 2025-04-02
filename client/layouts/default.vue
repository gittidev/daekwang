<template>
  <v-app>
    <nav>
      <CommonNavbar />
    </nav>

    <v-main>
      <slot />
    </v-main>

    <footer>
      <CommonFooter />
    </footer>
    <Cursur />
  </v-app>
</template>
