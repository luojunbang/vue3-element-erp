<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  --up-expand-width: 200px;
  --up-collapse-width: 64px;
  --up-header-height: 56px;
  --up-main-padding: 20px;
  .no-scroll-container {
    height: calc(100vh - var(--up-header-height) - var(--up-main-padding) * 2);
  }
}
</style>
