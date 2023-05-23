<template>
  <Header />
  <HomeSection />
  <main>
    <AboutMeSection />
    <ProjectSection />
    <ContactSection />
  </main>
  <Footer />
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Abbos Ashirboyev || Full-Stack developer",
  ogTitle: "Abbos Ashirboyev || Frontend Vuejs developer",
  description:
    "Abbos Ashirboyev Fullstack developer focused on creating Websites and Web applications. I really like different projects that solve real problems.",
  ogDescription:
    "I'm Abbos, I'm 23 years old and I live in Uzbekistan, Tashkent. Fullstack developer",
  ogImage: "https://a99os.uz/Image_Portfolio.png",
  twitterCard: "summary_large_image",
});
</script>

<style lang="scss" scoped></style>
