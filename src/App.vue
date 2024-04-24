<template>
  <TheHeader />

  <div class="p-10 md:p-20">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-14">
      <div class="flex justify-center mb-10 md:mb-0">
        <img alt="Running" class="w-11/12" src="./assets/illustration-running.jpg">
      </div>
      <div class="w-12/12 md:w-11/12 flex-inline flex-col">
        <h2 class="font-sans mb-2 p-1 bg-sky-500 text-xs font-semibold tracking-widest text-black uppercase inline-block text-white">Velocidade Aeróbica Máxima</h2>
        <h1 class="font-sans mb-6 text-2xl font-black tracking-tighter text-black md:text-5xl text-sky-500">VAM</h1>
        <p class="font-sans text-base leading-relaxed text-left text-sky-950">É a velocidade que você atinge durante a corrida no momento em que seu organismo consome a maior quantidade de oxigênio.</p>
      </div>
    </div>
  </div>

  <CalcTime />
 
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import CalcTime from './components/CalcTime.vue'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    TheHeader,
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
