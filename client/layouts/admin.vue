<template>
  <div class="min-h-screen flex bg-gray-100">
    <aside class="w-64 bg-white shadow px-4 py-6">
      <h2 class="font-bold text-lg mb-4">대광PC 관리자</h2>
      <ul>
        <li><NuxtLink to="/admin">대시보드</NuxtLink></li>
        <li><NuxtLink to="/admin/constructions">시공사례</NuxtLink></li>
      </ul>
    </aside>
    <main class="flex-1 p-8">
      <slot />
    </main>
  </div>
</template>
