<template>
  <div class="flex flex-col min-h-screen antialiased">
    <header>
      <navigation-bar />
    </header>
    <main class="flex-grow bg-gray-100 text-gray-900 flex flex-col">
      <Nuxt />
    </main>

    <footer>
      <footer-component />
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
