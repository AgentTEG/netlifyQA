<script setup>
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="app-fog" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
:root {
  --primary: #658a43;
  --primary-dark: #3f5f2f;
  --bg-dark: #0f1a12;
  --bg-darker: #0b140e;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}


html,
body {
  width: 100%;

  min-height: 100vh;
  background-color: var(--bg-dark);
  color: #e5e7eb;
  overflow-x: hidden;
  overflow-y: auto;
}


.app-fog-enter-active,
.app-fog-leave-active {
  transition:
    opacity 0.8s ease,
    transform 0.8s ease,
    filter 0.8s ease;
}

.app-fog-enter-from {
  opacity: 0;
  transform: scale(1.06);
  filter: blur(22px);
}

.app-fog-leave-to {
  opacity: 0;
  transform: scale(0.96);
  filter: blur(18px);
}
</style>