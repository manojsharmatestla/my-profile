<template>
  <div class="flex justify-center flex-col">
    <section class="">
      <div class="flex justify-center flex-row">
        <figure>
          <img
            src="../assets/test.png"
            class=" ring-8 ring-gray-400 h-48 w-48 rounded-full"
          />
        </figure>
        <div class="flex items-start flex-col px-10 w-3/5">
          <p class="text-gray-400 text-lg my-1">QA Engineer</p>
          <p class="text-white font-bold">Manoj Sharma</p>
          <p class="break-words text-left text-gray-400 text-lg my-5">
            Testing this is very long messag, jahahfkahfa ahflahwfhawfhahwfhawf
            awhfakwhfahfhwfkahkl
          </p>
        </div>
      </div>
    </section>
    <section class="mx-20 mb-10 mt-20">
      <div class="flex text-white flex-col">
        <p class="text-white text-2xl font-bold text-left">What I Do</p>
        <span class="border-b-4 w-14 border-green-600"></span>
        <ul class="text-left text-lg my-5 flex flex-col">
          <li>Quality</li>
          <li>Quality 2</li>
          <li>Quality 3</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
