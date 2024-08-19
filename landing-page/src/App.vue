<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <Footer />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    HeroSection,
    FeaturesSection,
    Footer,
  },
};
</script>
