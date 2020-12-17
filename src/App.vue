<template>
  <div class="relative bg-brick-wall-texture h-screen pt-16">
    <img
      class="absolute w-24 h-24 top-6 left-2"
      src="./assets/fedora-hut.png"
    />
    <nav
      class="container mx-auto flex justify-center bg-gray-600 bg-opacity-75 border-2 border-red-800 p-6 space-x-2"
    >
      <nav-router-link to="/">Anmeldung!</nav-router-link>
      <nav-router-link to="/fights">Zu den Kämpfen!</nav-router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import NavRouterLink from "./components/NavRouterLink.vue";

export default {
  components: { NavRouterLink },
};
</script>
