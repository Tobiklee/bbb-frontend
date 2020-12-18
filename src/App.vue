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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark absolute temporary>
      <div class="flex flex-col align-center">
        <v-btn class="w-full">
          <nav-router-link to="/">Anmeldung! </nav-router-link>
        </v-btn>
        <v-btn class="w-full">
          <nav-router-link to="/fights">Zu den Kämpfen!</nav-router-link>
        </v-btn>
      </div>
    </v-navigation-drawer>
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
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
