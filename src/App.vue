<template>
  <div class="justify-center flex bg-blue-400 h-full box-content">
    <div class="text-4xl flex-col w-3/4 py-20 justify-center">
      <div class="bg-gray-900 rounded-3xl pt-10">
        <nav class="px-10 pb-20">
          <div class="flex text-lg">
            <div class="flex-col flex-auto justify-items-start">
              <p
                class="justify-items-start mx-0 w-60 font-bold text-2x uppercase bg-clip-text text-transparent bg-gradient-to-l from-red-600 to-yellow-500 "
              >
                Manoj  Sharma
              </p>
            </div>
            <div class="flex-col">
              <ul class="flex justify-items-end text-white">
                <router-link to="/"><li class="px-5 transition ease-out duration-500 transform hover:text-yellow-300 hover:underline font-bold hover:scale-105">About Me</li></router-link>
                <router-link to="/resume" class="px-5 transition ease-out duration-500 transform hover:text-yellow-300 hover:underline font-bold hover:scale-105">Resume</router-link>
                <li class="px-5 transition ease-out duration-500 transform hover:text-yellow-300 hover:underline font-bold hover:scale-105">About</li>
                <li class="px-5 transition ease-out duration-500 transform hover:text-yellow-300 hover:underline font-bold hover:scale-105">Contact</li>
              </ul>
            </div>
          </div>
        </nav>
        <router-view />
        <footer
          class="border-t-2 border-gray-700 py-2 bg-gray-800 rounded-b-3xl text-gray-500 text-lg text-left pl-10 pt-4 pb-4 pr-10"
        >
          <div class="flex flex-row">
            <div class="flex flex-row flex-1">
              <p class="mr-5">LinkedIn</p>
              <p>twitter</p>
            </div>
            <div>
              <p class="text-gray-300 text-sm">© 2021 All rights reserved.</p>
            </div>
          </div>
        </footer>
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
