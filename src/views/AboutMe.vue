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
        <ProfilePicWithRing src-img="../assets/test.png"/>
        <div class="flex items-start flex-col px-10 w-3/5">
          <p class="text-gray-400 text-lg my-1">QA Engineer</p>
          <p class="text-white font-bold">Manoj Sharma</p>
          <p class="break-words text-left text-gray-200 text-lg my-5">
            Quality Engineer at Mercedes-Benz.io <br>
            Stuttgart, Baden-Württemberg, Germany
          </p>
        </div>
      </div>
    </section>
    <section class="mx-20 mb-10 mt-20">
      <div class="flex text-white flex-col">
        <p class="text-white text-2xl font-bold text-left">What I Do</p>
        <span class="border-b-4 w-14 border-green-600"></span>
        <ul class="text-left text-lg my-5 flex flex-col break-words list-disc pl-16">
          <li>Senior QA Engineer, with a total experience of 10+ years.</li>
          <li>Experience in designing an Automation framework for APIs and Web UI.</li>
          <li>Experience in designing Java, Python, and Javascript based automation frameworks for REST APIs.</li>
          <li>Experience in designing/writing Selenium Webdriver based UI automation.</li>
          <li>Experience in designing/writing Selenium JS (Webdriver.io) based UI automation.</li>
          <li>CI/CD pipeline using Jenkins.</li>
          <li>Experience in Dockerizing Automation Code.</li>
          <li>Experience in Server SideTesting.</li>
          <li>Experience in testing in Micro service Service architecture.</li>
          <li>Strong analytical, presentation, problem-solving, decision-making, and communication skills. </li>
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
  components:{
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
