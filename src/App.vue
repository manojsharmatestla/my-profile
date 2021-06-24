<template>
  <div class="justify-center flex bg-blue-400 h-screen">
    <div class="text-4xl flex-row  w-3/4 py-20">
      <div class="bg-gray-900 rounded-lg p-10">
        <nav>
          <div class="flex text-lg">
            <div class="flex-col flex-auto justify-items-start">
              <p class="text-white justify-items-start mx-0 w-60 font-bold text-2xl"> <span class="text-2xl text-yellow-400">M</span>anoj Sharma</p>
            </div>
            <div class="flex-col">
              <ul class="flex justify-items-end text-white">
                <li class="px-5">about me</li>
                <li class="px-5">profile</li>
                <li class="px-5">resume</li>
                <li class="px-5">contact</li>
              </ul>
            </div>
            
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
