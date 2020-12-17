<template>
  <router-link
    :to="to"
    class="p-2 bg-gray-700 text-white border-2 border-red-800"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
