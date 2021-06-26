<template>
  <div class="justify-center flex bg-blue-400 h-screen box-content">
    <div class="text-4xl flex-col w-3/4 py-20 justify-center">
      <div class="bg-gray-900 rounded-3xl pt-10">
        <nav class="px-10">
          <div class="flex text-lg">
            <div class="flex-col flex-auto justify-items-start">
              <p
                class="justify-items-start mx-0 w-60 font-bold text-2xl text-green-600">
                Manoj Sharma
              </p>
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
        <section class="my-20">
          <div class="flex justify-center ">
            <figure>
              <img
                src="./assets/test.png"
                class=" ring-8 ring-gray-400 h-40 w-40 rounded-full"
              />
            </figure>
            <div class="flex items-start flex-col px-10 w-3/5">
              <p class="text-gray-400 text-lg my-1">QA Engineer</p>
              <p class="text-white font-bold">Manoj Sharma</p>
              <p class="break-words text-left text-gray-400 text-lg my-5">
                Testing this is very long messag, jahahfkahfa
                ahflahwfhawfhahwfhawf awhfakwhfahfhwfkahkl
              </p>
            </div>
          </div>
        </section>
        <section class="mx-20 mb-10">
            <div class="flex text-white flex-col">
                <p class="text-white text-2xl font-bold text-left">What I Do</p>
                <span class="border-b-4 w-14 border-green-600"></span>
                <ul class="text-left text-lg my-5">
                  <li> Quality </li>
                  <li> Quality 2</li>
                  <li> Quality 3</li>
                </ul>
            </div>
        </section>
        <footer class="border-t-2 border-gray-700 py-2 bg-gray-800 rounded-b-3xl text-gray-500 text-lg text-left pl-10 pt-4 pb-4 pr-10">
          <div class="flex flex-row">
            <div class="flex flex-row flex-1">
              <p class="mr-5">LinkedIn</p>
              <p>twitter</p>
            </div>
            <div>
              <p class="text-gray-300 text-sm"> © 2021 All rights reserved.</p>
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
