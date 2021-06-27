<template>
  <div>
    <div
      class=" ring-2 p-2 rounded-full mr-5 pl-4 pr-4 font-semibold ring-blue-400 my-auto"
    >
      <p class="text-sm text-center">{{msg}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Capsule",
  props: ['msg'],
});
</script>
