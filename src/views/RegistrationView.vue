<template>
  <div data-app>
    <v-card class="p-4 mb-4" color="black">
      <v-card-title class="text-center justify-center py-6">
        <h2 class="text-white text-2xl">BATTLE OF BADEMÄNTEL</h2>
      </v-card-title>
    </v-card>
    <v-card class="p-4 mb-4" color="black">
      <p class="text-white mb-1">
        Willkommen in der Gasse, wo die schlimmsten Verbrechner, die
        knallhartesten Kämpfer und die gemeinsten Brawhallaspieler um die Gunst
        des Paten kämpfen.
      </p>
      <p class="text-white mb-1">
        Such dir dein Gegner im Twitch - Chat und sei dabei. Gewinn Bademäntel
        um die Gunst des Patens zu erlangen und nehme an einzigartigen Turnieren
        teil.
      </p>
      <p class="text-white mb-1">
        Die Einzige Regel: Keiner darf zwei Kämpfe hintereinander austragen,
        denn blutwütige Mitspieler gibt es genügend.
      </p>
    </v-card>
    <v-card color="black" class="flex flex-col items-center p-4 mb-4">
      <v-card-title class="text-center justify-center py-6">
        <h2 class="text-white text-2xl">Trag dich ein!</h2>
      </v-card-title>
      <v-tabs
        background-color="transparent"
        grow
        center-active
        dark
        class="mb-8 lg:max-w-md"
      >
        <v-tab @click="tab = 0">1 vs. 1</v-tab>
        <v-tab @click="tab = 1">2 vs. 2</v-tab>
      </v-tabs>
      <div class="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center">
        <v-autocomplete
          v-model="fighter1"
          :items="followers"
          dense
          rounded
          solo
          label="Du:"
          class="self-center lg:max-w-xs mr-2"
        />
        <v-autocomplete
          v-if="tab == 1"
          v-model="fighter11"
          :items="followers"
          dense
          rounded
          solo
          label="Dein Partner:"
          class="self-center lg:max-w-xs"
        />
        <h2 class="text-center text-white text-2xl mb-6 lg:mr-6 lg:ml-6">VS</h2>
        <v-autocomplete
          v-model="fighter2"
          :items="followers"
          dense
          rounded
          solo
          label="Dein Gegner:"
          class="self-center lg:max-w-xs mr-2"
        />
        <v-autocomplete
          v-if="tab == 1"
          v-model="fighter22"
          :items="followers"
          dense
          rounded
          solo
          label="Sein Partner:"
          class="self-center lg:max-w-xs"
        />
      </div>
      <v-btn
        class="justify-self-center place-self-center items-center"
        elevation="2"
        >FIGHT!</v-btn
      >
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      fighter1: "",
      fighter11: "",
      fighter2: "",
      fighter22: "",
      tab: 0,
      followers: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://207.154.243.130:3000/followers");
      this.followers = response.data;
    } catch (error) {
      // TEST DATA
      this.followers = [
        "trissl_g09",
        "joshxk19",
        "monkey_emil_13",
        "paulbidlingmaier",
        "xjasonimus",
        "Gilgamesch14515",
        "diekeksmafia",
        "FoonixYT",
        "zqueueofficial",
        "pokemeistercool",
        "ncflax",
        "benkre1265",
      ];
    }
  },
};
</script>

