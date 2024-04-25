<template>
  <TheHeader />

  <div class="p-10 md:p-20">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8">
      <section class="w-12/12 md:w-11/12 flex-inline flex-col">
        <h1 class="font-sans mb-6 text-2xl font-black tracking-tighter text-black md:text-5xl text-sky-500">Calculadora de treino de corrida</h1>
        <p class="font-sans text-base leading-relaxed text-left text-sky-950 mb-5">Esta página é para você que pratica corrida de rua, em muitos casos com acompanhamento de planilhas de treino e assessorias de corrida, em outros apenas no amor e na raça.</p>
        <p class="font-sans text-base leading-relaxed text-left text-sky-950 mb-5">Os aplicativos que monitoram corridas geralmente fornecem apenas os dados de Pace e Km/h. Com a calculadora, você poderá verificar a média de tempo dos treinos, como os intervalados e os de tiro, por exemplo, e comparar com sua VAM atual.</p>
        <p class="font-sans text-base leading-relaxed text-left text-sky-950">Aproveite e compartilhe com seus colegas corredores e corredoras!</p>
      </section>
      <section class="flex justify-center mt-10 md:mt-0">
        <img alt="Running" class="w-12/12 object-contain" src="./assets/illustration-running.jpg">
      </section>
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
