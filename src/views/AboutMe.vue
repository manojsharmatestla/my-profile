<template>
  <div class="flex justify-center flex-col">
    <section class="">
      <div class="flex justify-center flex-row">
        <!-- <div class="bg-gradient-to-tr from-yellow-500 to-red-600 p-4 rounded-full">
        <figure>
          
            <img
            src="../assets/test.png"
            class=" ring-8 ring-white h-48 w-48 rounded-full transform transition hover:rotate-6 cursor-pointer"
          />
          
          
        </figure>
        </div> -->
        <ProfilePicWithRing src-img="../assets/test.png" />
        <div class="flex items-start flex-col px-10 w-3/5">
          <p class="text-lg my-1 bg-clip-text text-white">
            QA Engineer | Tech Enthusiast
          </p>
          <p
            class="font-bold bg-clip-text text-transparent bg-gradient-to-l from-gray-200 to-gray-400"
          >
            Manoj Sharma
          </p>
          <p class="break-words text-left text-lg my-5 text-gray-400">
            Quality Engineer at Mercedes-Benz.io <br />
            Stuttgart, Baden-Württemberg, Germany
          </p>
        </div>
      </div>
    </section>
    <section class="mx-20 mb-10 mt-20">
      <div class="flex text-white flex-col">
        <div class="flex flex-row items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-400 animate-spin "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-yellow-600 animate-spin "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>

          <p class="text-2xl font-bold text-left ">What I Do</p>
        </div>

        <div
          class="h-2 w-14  mt-2 ml-16 rounded text-transparent bg-gradient-to-l from-red-600 to-yellow-500"
        ></div>
        <ul
          class="text-left text-lg my-5 flex flex-col break-words list-disc pl-16"
        >
          <li>Senior QA Engineer, with a total experience of 10+ years.</li>
          <li>
            Experience in designing an Automation framework for APIs and Web UI.
          </li>
          <li>
            Experience in designing Java, Python, and Javascript based
            automation frameworks for REST APIs.
          </li>
          <li>
            Experience in designing/writing Selenium Webdriver based UI
            automation.
          </li>
          <li>
            Experience in designing/writing Selenium JS (Webdriver.io) based UI
            automation.
          </li>
          <li>CI/CD pipeline using Jenkins.</li>
          <li>Experience in Dockerizing Automation Code.</li>
          <li>Experience in Server SideTesting.</li>
          <li>Experience in testing in Micro service Service architecture.</li>
          <li>
            Strong analytical, presentation, problem-solving, decision-making,
            and communication skills.
          </li>
          <li>Team player and independent contributor.</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfilePicWithRing from "../components/profile-pic-with-ring.vue";
export default defineComponent({
  name: "AboutMe",
  components: {
    ProfilePicWithRing,
  },
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
a {
  color: #42b983;
}
</style>
