<template>
  <header
    class="font-[Poppins] fixed z-50 bg-[rgba(136,136,136,0.30)] backdrop-blur-[8px] w-screen text-xl font-medium text-white"
  >
    <div class="container mx-auto px-[20px] md:px-0">
      <nav class="px-4 lg:px-6 py-2.5 mx-auto">
        <div
          class="flex flex-wrap w-full justify-between items-center mx-auto max-w-screen-xl"
        >
          <div class="flex items-center lg:order-2 w-full">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-[#13ff00]"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden w-full bg-[#0c0b0bba] lg:bg-transparent absolute left-0 top-[60px] lg:static justify-between items-center lg:flex lg:w-full lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              class="flex w-full justify-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8"
            >
              <li>
                <a
                  href="#"
                  class="block duration-500 home py-2 pr-4 pl-3 text-white"
                  aria-current="page"
                  >Home</a
                >
              </li>
              <li>
                <a href="#about" class="block duration-500 about py-2 pr-4 pl-3"
                  >About Me</a
                >
              </li>
              <li>
                <a
                  href="#project"
                  class="block duration-500 project py-2 pr-4 pl-3"
                  >Projects</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  class="block duration-500 contact py-2 pr-4 pl-3"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  mounted() {
    if (window.scrollY < 840) {
      const el = document.querySelector(".active");
      if (el) el.classList.remove("active");
      document.querySelector(".home").classList.add("active");
    } else if (window.scrollY >= 840 && window.scrollY < 2880) {
      const el = document.querySelector(".active");
      if (el) el.classList.remove("active");
      document.querySelector(".about").classList.add("active");
    } else if (window.scrollY >= 2880 && window.scrollY < 3960) {
      const el = document.querySelector(".active");
      if (el) el.classList.remove("active");
      document.querySelector(".project").classList.add("active");
    } else if (window.scrollY >= 3960) {
      const el = document.querySelector(".active");
      if (el) el.classList.remove("active");
      document.querySelector(".contact").classList.add("active");
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY < 840) {
        const el = document.querySelector(".active");
        if (el) el.classList.remove("active");
        document.querySelector(".home").classList.add("active");
      } else if (window.scrollY >= 840 && window.scrollY < 2880) {
        const el = document.querySelector(".active");
        if (el) el.classList.remove("active");
        document.querySelector(".about").classList.add("active");
      } else if (window.scrollY >= 2880 && window.scrollY < 3960) {
        const el = document.querySelector(".active");
        if (el) el.classList.remove("active");
        document.querySelector(".project").classList.add("active");
      } else if (window.scrollY >= 3960) {
        const el = document.querySelector(".active");
        if (el) el.classList.remove("active");
        document.querySelector(".contact").classList.add("active");
      }
    });
  },
};
</script>
<style lang="css">
.active {
  position: relative;
  color: #13ff00 !important;
}
.active::after {
  content: "";
  position: absolute;
  top: -5px;
  left: 50%;
  display: block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #13ff00;
}
</style>
