<template>
  <section
    id="home"
    class="home bg-[#343434] h-[970px] sticky overflow-hidden font-[Poppins]"
  >
    <div class="container mx-auto px-[20px] md:px-0 relative z-20"></div>
    <div class="relative min-h-full">
      <!-- left side of home section -->
      <div
        class="yarmiqora w-full flex justify-end bg-[#202020] h-full sm:h-[1080px] absolute top-0 sm:-top-20 z-10"
      >
        <div class="container mx-auto px-[20px] md:px-0">
          <div class="mt-[150px] px-5 sm:px-0 sm:mt-[324px] flex flex-col">
            <h1
              class="text-4xl text-center sm:text-left sm:text-[44px] text-[#13ff00] font-bold"
            >
              Abbos Ashirboyev
            </h1>
            <div
              class="h-[5px] mt-2 mb-4 sm:my-3 mx-auto block sm:ml-48 rounded-md w-[60%] sm:w-[416px] text-end bg-[#13ff00]"
            ></div>
            <h2
              class="text-white text-center text-4xl sm:leading-[50px] sm:text-left sm:text-[50px] font-bold max-w-[600px]"
            >
              Backend & Frontend Developer
            </h2>
            <p
              class="text-[#8F8F8F] text-center sm:text-left text-xl mt-[28px] max-w-[600px]"
            >
              Fullstack developer focused on creating Websites and Web
              applications. I really like different projects that solve real
              problems.
            </p>
            <div
              class="flex flex-col items-center sm:flex-row sm:justify-start mt-11"
            >
              <a
                href="/docs/AbbosAshirboyev.pdf"
                download="AbbosAshirboyev.pdf"
                class="flex items-center text-white hover:text-[#0fcf01] p-2 rounded-lg w-[65%] sm:w-auto"
              >
                <i class="bx bx-cloud-download text-3xl"></i>
                <p class="text-xl ml-3">Download CV</p>
                <!-- <img src="../assets/images/cloud_down.svg" alt=""> -->
              </a>
              <a
                href="#project"
                class="flex items-center bg-[#13ff00] hover:bg-[#0fcf01] rounded-lg w-[65%] sm:w-auto p-2 mt-5 sm:mt-0 sm:ml-[120px]"
              >
                <!-- <img src="../assets/images/circle_down.svg" alt="circle down"> -->
                <i class="bx bx-down-arrow-circle text-3xl"></i>
                <p class="text-xl ml-3">Explore portfolio</p>
              </a>
              <!-- social media links -->
            </div>
            <ul
              class="flex justify-between items-center mx-auto sm:mx-0 max-w-[428px] h-[62px] mt-[98px]"
            >
              <a href="https://instagram.com/a99os_?igshid=ZDdkNTZiNTM=">
                <li
                  class="flex justify-center items-center mx-1 sm:mx-0 w-[50px] h-[50px] sm:w-[61px] sm:h-[61px] bg-[#353535] rounded-full group hover:bg-[#13ff00] duration-150 hover:scale-125"
                >
                  <i
                    class="bx bxl-instagram text-white text-2xl sm:text-3xl group-hover:text-black"
                  ></i>
                </li>
              </a>
              <a href="https://github.com/a99os">
                <li
                  class="flex justify-center items-center mx-1 sm:mx-0 w-[50px] h-[50px] sm:w-[61px] sm:h-[61px] bg-[#353535] rounded-full group hover:bg-[#13ff00] duration-150 hover:scale-125"
                >
                  <i
                    class="bx bxl-github text-white text-2xl sm:text-3xl group-hover:text-black"
                  ></i>
                </li>
              </a>
              <a href="https://www.linkedin.com/in/abbos-ashirboyev-503918177/">
                <li
                  class="flex justify-center items-center mx-1 sm:mx-0 w-[50px] h-[50px] sm:w-[61px] sm:h-[61px] bg-[#353535] rounded-full group hover:bg-[#13ff00] duration-150 hover:scale-125"
                >
                  <i
                    class="bx bxl-linkedin text-white text-2xl sm:text-3xl group-hover:text-black"
                  ></i>
                </li>
              </a>
              <a href="https://t.me/A99oc">
                <li
                  class="flex justify-center items-center mx-1 sm:mx-0 w-[50px] h-[50px] sm:w-[61px] sm:h-[61px] bg-[#353535] rounded-full group hover:bg-[#13ff00] duration-150 hover:scale-125"
                >
                  <i
                    class="bx bxl-telegram text-white text-2xl sm:text-3xl group-hover:text-black"
                  ></i>
                </li>
              </a>
              <a href="https://twitter.com/a99oc">
                <li
                  class="flex justify-center items-center mx-1 sm:mx-0 w-[50px] h-[50px] sm:w-[61px] sm:h-[61px] bg-[#353535] rounded-full group hover:bg-[#13ff00] duration-150 hover:scale-125"
                >
                  <i
                    class="bx bxl-twitter text-white text-3xl group-hover:text-black"
                  ></i>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <!-- right side of home section -->
      <div
        class="inline-block absolute left-1/2 top-[139px] -translate-x-1/2 mx-auto"
      >
        <div
          class="green-circle hidden sm:flex justify-center items-center h-[900px] w-[900px] rounded-full border-[8px] border-[#13ff00]"
        >
          <div class="h-[885px] w-[885px] rounded-full bg-transparent">
            <div class="relative">
              <img
                src="../assets/images/Image_Portfolio.png"
                class="image absolute hidden sm:block top-[100px] left-[400px]"
                alt="my photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HomeSection",
  components: {},
};
</script>
<style lang="css" scoped>
.yarmiqora {
  clip-path: polygon(0 0, 40% 0, 66% 100%, 0% 100%);
}

.green-circle {
  box-shadow: 0 0 40px #13ff00, inset 0px 0px 40px #13ff00;
}
.image {
  animation: identifier 0.65s ease-in-out;
  transform: scale(170%);
}
@media screen and (max-width: 640px) {
  .yarmiqora {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

@keyframes identifier {
  0% {
    transform: translateX(-400px) scale(170%);
  }
  70% {
    transform: translateX(200px) scale(170%);
  }
  100% {
    transform: translateX(0px) scale(170%);
  }
}
</style>
