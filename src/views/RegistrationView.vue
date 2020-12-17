<template>
  <div>
    <div class="container mx-auto m-5 bg-gray-600 bg-opacity-75 p-4">
      <h2 class="text-center text-white text-2xl mb-2">BATTLE OF BADEMÄNTEL</h2>
      <p class="text-white mb-1">Willkommen in der Gasse, wo die schlimmsten Verbrechner, die knallhartesten Kämpfer und die gemeinsten Brawhallaspieler um die Gunst des Paten kämpfen.</p>
      <p class="text-white mb-1">Such dir dein Gegner im Twitch - Chat und sei dabei. Gewinn Bademäntel um die Gunst des Patens zu erlangen und nehme an einzigartigen Turnieren teil.</p>
      <p class="text-white mb-1">Die Einzige Regel: Keiner darf zwei Kämpfe hintereinander austragen, denn blutwütige Mitspieler gibt es genügend.</p>
    </div>
    <div class="container mx-auto flex flex-col m-5 bg-gray-600 bg-opacity-75 p-4">
      <label class="flex flex-col text-center text-white m-4">
        Du:
        <input class="align-center" name="fighter1" />
      </label>
      <h2 class="text-center text-white text-2xl">VS</h2>
      <label class="flex flex-col text-center text-white m-4">
        Dein Opfer:
        <input name="fighter2" />
      </label>
      <button class="border-2 p-2 text-white hover:bg-red-800">FIGHT!</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

