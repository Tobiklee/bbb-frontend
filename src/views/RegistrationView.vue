<template>
  <div data-app>
    <div class="container mx-auto m-5 bg-black bg-opacity-75 p-4">
      <h2 class="text-center text-white text-2xl mb-2">BATTLE OF BADEMÄNTEL</h2>
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
    </div>
    <div
      class="container mx-auto flex flex-col m-5 bg-black bg-opacity-75 p-4"
    >
      <h2 class="text-center text-white text-2xl mb-2">Trag dich ein!</h2>
      <v-autocomplete
        v-model="fighter1"
        :items="followers"
        dense
        rounded
        solo
        label="Du:"
      ></v-autocomplete>
      <h2 class="text-center text-white text-2xl mb-6">VS</h2>
      <v-autocomplete
        v-model="fighter2"
        :items="followers"
        dense
        rounded
        solo
        label="Dein Gegner:"
      ></v-autocomplete>
      <v-btn elevation="2">FIGHT!</v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      fighter1: "",
      fighter2: "",
      followers: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3300/followers");
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

