<template>
  <TheHeader />
  <HeroSection />
  <CalcTime />
 
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import CalcTime from './components/CalcTime.vue'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    TheHeader,
    HeroSection,
    CalcTime,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
