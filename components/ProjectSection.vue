<template>
  <section
    id="project"
    class="bg-[#202020] pb-[100px] sm:pb-[162px] font-[Poppins]"
  >
    <div class="flex flex-col items-center">
      <h1
        class="text-4xl sm:text-[50px] text-white font-bold mt-20 sm:mt-[126px]"
      >
        PROJECTS
      </h1>
      <div class="w-[65px] bg-[#13ff00] h-1 rounded-md"></div>
      <!-- here card div starts -->
      <div
        class="card-wrapper container grid grid-cols-3 justify-center flex-wrap mt-[67px] gap-2 sm:gap-5"
      >
        <!-- card number 1 -->
        <div
          class="card flex flex-col bg-[#272727] shadow-lg overflow-hidden rounded-[18px]"
        >
          <img src="../assets/images/pr2.png" alt="project1" />
          <div class="p-6">
            <h1 class="text-xl text-white font-bold">
              VIPAIRASSIST provides customised assistance with meet and greet,
              transfers, baggage handling, and more.
            </h1>
            <div class="flex items-center mt-2 mb-8">
              <i class="bx bx-code-alt text-[#13ff00] text-4xl"></i>
              <p class="text-white ml-3 text-lg">Frontend sides</p>
            </div>
            <div class="flex justify-center">
              <a
                href="https://vip-air-front-end2.vercel.app/"
                target="_blank"
                class="py-1 sm:py-2 text-md hover:bg-cyan-500 sm:text-lg px-4 sm:px-9 rounded-md sm:rounded-xl bg-[#13ff00]"
              >
                Live preview
              </a>
            </div>
          </div>
        </div>
        <!-- card number 2 -->

        <div
          class="card flex flex-col bg-[#272727] shadow-lg rounded-[18px] overflow-hidden"
        >
          <img src="../assets/images/pr3.png" alt="project1" />
          <div class="p-6">
            <h1 class="text-xl text-white font-bold">
              Anora-The main goal of the Anora project is to help women to
              enrich and reveal themselves externally as well as internally
            </h1>
            <div class="flex items-center mt-2 mb-8">
              <i class="bx bx-code-alt text-[#13ff00] text-4xl"></i>
              <p class="text-white ml-3 text-lg">Backend & frontend</p>
            </div>
            <div class="flex justify-center">
              <a
                href="https://anora-project.vercel.app"
                target="_blank"
                class="py-1 sm:py-2 text-md hover:bg-cyan-500 sm:text-lg px-4 sm:px-9 rounded-md sm:rounded-xl bg-[#13ff00]"
              >
                Live preview
              </a>
            </div>
          </div>
        </div>
        <!-- card number 3 -->
        <div
          class="card flex flex-col bg-[#272727] overflow-hidden justify-between shadow-lg rounded-[18px]"
        >
          <div>
            <img src="../assets/images/pr1.png" alt="project1" />
            <h1 class="text-xl p-10  text-white font-bold">Aytma</h1>
          </div>
          <div class="p-6">
            <div class="flex items-center mt-2 mb-8">
              <i class="bx bx-code-alt text-[#13ff00] text-4xl"></i>
              <p class="text-white ml-3 text-lg">Frontend</p>
            </div>
            <div class="flex justify-center">
              <a
                href="https://aytma-frontend.vercel.app"
                target="_blank"
                class="py-1 sm:py-2 text-md hover:bg-cyan-500 sm:text-lg px-4 sm:px-9 rounded-md sm:rounded-xl bg-[#13ff00]"
              >
                Live preview
              </a>
            </div>
          </div>
        </div>
        <!-- card number 4 -->
        <!-- card number 5 -->
      </div>
      <!-- card wrapper ends here -->
      <ul
        class="hidden sm:flex justify-between items-center mt-[111px] w-[100px]"
      >
        <li class="circle-shadow text-white rounded-full w-4 h-4"></li>
        <li class="border-4 text-white rounded-full w-4 h-4"></li>
        <li class="border-4 text-white rounded-full w-4 h-4"></li>
        <li class="border-4 text-white rounded-full w-4 h-4"></li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "ProjectSection",
};
</script>
<style lang="css">
.circle-shadow {
  box-shadow: 0 0 10px 5px #13ff00;
  background-color: #13ff00;
}
</style>
