<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="./assets/wallpaper_profil_final_01.jpg"
      scroll-target="#scrolling-techniques-2"
    >
      <img class="mt-3 w-24 h-24" src="./assets/fedora-hut.png" />
      <div class="flex flex-col space-y-2 h-full justify-center">
        <v-btn><nav-router-link to="/">Anmeldung!</nav-router-link> </v-btn>
        <v-btn>
          <nav-router-link to="/fights">Zu den Kämpfen!</nav-router-link>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main class="bg-gray-800">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavRouterLink from "./components/NavRouterLink.vue";

export default {
  components: { NavRouterLink },
};
</script>
