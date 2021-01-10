<template>
  <div data-app>
    <v-card class="p-4 mb-4" color="black">
      <v-card-title class="text-center justify-center py-6">
        <h2 class="text-white text-2xl">Die aktuellen Kämpfe</h2>
      </v-card-title>
      <v-card-text>
        <span class="text-white">
          Hier siehst du welche Kämpfer als nächsten antreten, um sich die
          Fäuste blutig zu schlagen!
        </span>
      </v-card-text>
    </v-card>
    <v-card class="p-4 mb-4" color="black">
      <v-card-title class="text-center justify-center py-6">
        <h2 class="text-white text-2xl">Gerade Live!</h2>
      </v-card-title>
      <div
        class="flex flex-col lg:flex-row items-center lg:justify-center space-x-2 text-white text-2xl m-2"
      >
        <div>Fighter 1</div>
        <div>VS</div>
        <div>Fighter 2</div>
      </div>
    </v-card>
    <v-card color="black" class="flex flex-col items-center p-4 mb-4">
      <v-card-title class="text-center justify-center py-6">
        <h2 class="text-white text-2xl">Alle Kämpfe</h2>
      </v-card-title>
      <v-tabs
        background-color="transparent"
        grow
        center-active
        dark
        class="mb-8 lg:max-w-md"
      >
        <v-tab @click="tab = 0">kommende</v-tab>
        <v-tab @click="tab = 1">vergangene</v-tab>
      </v-tabs>
      <div v-if="tab == 0">
        <div
          class="flex flex-col lg:flex-row items-center lg:justify-center space-x-2 text-white text-2xl m-2"
        >
          <div>Fighter 1</div>
          <div>VS</div>
          <div>Fighter 2</div>
        </div>
        <v-divider dark />
        <div
          class="flex flex-col lg:flex-row items-center lg:justify-center space-x-2 text-white text-2xl m-2"
        >
          <div>Fighter 1</div>
          <div>VS</div>
          <div>Fighter 2</div>
        </div>
        <v-divider dark />
        <div
          class="flex flex-col lg:flex-row items-center lg:justify-center space-x-2 text-white text-2xl m-2"
        >
          <div>Fighter 1</div>
          <div>VS</div>
          <div>Fighter 2</div>
        </div>
      </div>
      <div v-if="tab == 1">
        <div
          class="flex flex-col lg:flex-row items-center lg:justify-center space-x-2 text-white text-2xl m-2"
        >
          <div>Fighter 1</div>
          <div>Fighter 11</div>
          <div>VS</div>
          <div>Fighter 2</div>
          <div>Fighter 22</div>
        </div>
        <v-divider dark />
        <div
          class="flex flex-col lg:flex-row items-center lg:justify-center space-x-2 text-white text-2xl m-2"
        >
          <div>Fighter 1</div>
          <div>Fighter 11</div>
          <div>VS</div>
          <div>Fighter 2</div>
          <div>Fighter 22</div>
        </div>
        <v-divider dark />
        <div
          class="flex flex-col lg:flex-row items-center lg:justify-center space-x-2 text-white text-2xl m-2"
        >
          <div>Fighter 1</div>
          <div>Fighter 11</div>
          <div>VS</div>
          <div>Fighter 2</div>
          <div>Fighter 22</div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    };
  },
};
</script>