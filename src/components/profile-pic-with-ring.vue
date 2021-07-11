<template>
    <div class="bg-gradient-to-tr from-yellow-500 to-red-600 p-4 rounded-full">
        <figure>
          
            <img
            src="../assets/test.png"
            class=" ring-8 ring-white h-48 w-48 rounded-full transform transition hover:rotate-6 cursor-pointer"
          />
        </figure>
        </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfilePicWithRing",
  props: ['src-img'],
});
</script>