<template>
  <div class="p-10 md:p-20 bg-zinc-50">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-14">
      <div>
        <header class="text-left mb-4">
          <h2 class="font-sans px-2 py-1 bg-sky-500 text-base font-semibold tracking-widest text-black uppercase inline-block text-white">Calcule o seu treino</h2>
        </header>
        <div class="input-section grid grid-cols-4 md:grid-cols-5 gap-2">
          <div class="field">
            <label for="hour">Hs:</label>
          </div>
          <div class="field">
            <label for="minute">Min:</label>
          </div>
          <div class="field">
            <label for="second">Seg:</label>
          </div>
        </div>
        <div v-for="(input, index) in inputs" :key="index" class="input-section grid grid-cols-4 md:grid-cols-5 gap-1 mb-2">
          <div class="field">
            <input class="w-full" type="number" v-model="input.hour" @input="updateSubtotal">
          </div>
          <div class="field">
            <input class="w-full" type="number" v-model="input.minute" @input="updateSubtotal">
          </div>
          <div class="field">
            <input class="w-full" type="number" v-model="input.second" @input="updateSubtotal">
          </div>
          <div class="field">
            <button title="Remover" @click="removeInput(index)" class="remove-btn font-sans font-semibold">
              <svg title="Remover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-6">
                <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <button @click="addInput" class="add-btn bg-sky-500 mt-2 mb-4 font-sans font-semibold">Adicionar Campo</button>
        <div class="operation-section">
          <div class="field mb-4">
            <label for="operation" class="mb-1">Operação:</label>
            <select v-model="operation" id="operation">
              <option value="add">Somar</option>
              <option value="subtract">Subtrair</option>
              <option value="multiply">Multiplicar</option>
              <option value="divide">Dividir</option>
            </select>
          </div>
        </div>
  
        <div v-if="operation === 'divide'" class="subtotal-section mb-4">
          <div class="field mr-2">
            <label for="subtotal">Subtotal:</label>
            <input class="w-full" type="text" :value="formatTime(subtotal)" id="subtotal" disabled>
          </div>

          <div class="field">
            <label for="divisor">Divisor:</label>
            <input class="w-full" type="number" v-model="divisor" id="divisor">
          </div>
        </div>
        <div v-if="operation === 'multiply'" class="subtotal-section multiplier-section mb-4">
          <div class="field mr-2">
            <label for="subtotal">Subtotal:</label>
            <input class="w-full" type="text" :value="formatTime(subtotal)" id="subtotal" disabled>
          </div>
          
          <div class="field">
            <label for="multiplier">Multiplicador:</label>
            <input class="w-full" type="number" v-model="multiplier" id="multiplier">
          </div>
        </div>

        <div class="operation-section grid grid-cols-4 md:grid-cols-5 gap-2">
          <div class="field col-start-4">
            <button @click="calculate" class="calculate-btn bg-sky-500 font-sans font-semibold">Calcular</button>
          </div>
        </div>
      </div>

      <div class="md:w-12/12 md:w-10/12 flex-inline flex-col mt-2 md:mt-0">
        <div class="mb-6">
          <p class="text-sky-500 font-sans font-semibold tracking-widest text-black uppercase mb-4">Resultado:</p>
          <p>{{ formatTemplateTime(result) }}</p>
        </div>
        <div class="vam-section mb-4">
          <label for="vam">Inserir minha VAM:</label>
          <input class="w-full" type="text" v-model="vam" id="vam">
        </div>
        <div class="share-section">
          <p>Texto para compartilhar o seu treino:</p>
          <p class="font-sans font-semibold text-sky-500"><small>Clicando no bloco, você consegue editar o texto.</small></p>
          <div class="template-share" contenteditable="true">
            <p>Treino:</p>
            <p>VAM abaixo de {{ vam }}</p>
            <p>Feito: {{ formatTemplateTime(result) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcTime',
  data() {
    return {
      inputs: [{ hour: 0, minute: 0, second: 0 }],
      operation: 'add',
      subtotal: 0,
      divisor: 1,
      multiplier: 1,
      result: 0,
      vam: '',
    };
  },
  computed: {
    calculateSubtotal() {
      return this.inputs.reduce((acc, input) => {
        return acc + input.hour * 3600 + input.minute * 60 + input.second;
      }, 0);
    }
  },
  methods: {
    addInput() {
      this.inputs.push({ hour: 0, minute: 0, second: 0 });
    },
    removeInput(index) {
      this.inputs.splice(index, 1);
    },
    updateSubtotal() {
      this.subtotal = this.calculateSubtotal;
    },
    formatTime(totalSeconds) {
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let seconds = totalSeconds % 60;

      // Format the time components to two digits
      hours = ('0' + hours).slice(-2);
      minutes = ('0' + minutes).slice(-2);
      seconds = ('0' + seconds).slice(-2);

      return `${hours}:${minutes}:${seconds}`;
    },
    formatTemplateTime(segundos) {
      const minutos = Math.floor(segundos / 60);
      const segundosRestantes = segundos % 60;
      return `${minutos}'${segundosRestantes.toString().padStart(2, '0')}"`;
    },
    calculate() {
      let totalSeconds = 0;

      switch (this.operation) {
        case 'add':
          totalSeconds = this.inputs.reduce((acc, input) => {
            return acc + input.hour * 3600 + input.minute * 60 + input.second;
          }, 0);
          break;
        case 'subtract':
          totalSeconds = this.subtotal - this.calculateSubtotal;
          break;
        case 'multiply':
          totalSeconds = this.calculateSubtotal * this.multiplier;
          break;
        case 'divide':
          totalSeconds = this.calculateSubtotal / this.divisor;
          break;
        default:
          totalSeconds = 0;
          break;
      }

      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let seconds = Math.floor(totalSeconds % 60);

      if (seconds >= 60) {
        minutes += Math.floor(seconds / 60);
        seconds %= 60;
      }
      if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes %= 60;
      }

      this.result = hours * 3600 + minutes * 60 + seconds;
      
    }
  }
};
</script>

<style scoped>
.input-section input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.field label {
  display: block;
}

.operation-section select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.subtotal-section {
  display: flex;
}

.template-share,
.subtotal-section input,
.divisor-section input,
.multiplier-section input,
.vam-section input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.add-btn,
.remove-btn,
.calculate-btn {
  color: white;
  padding: 9px 11px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.remove-btn {
  background-color: #c90000;
}

.remove-btn:hover {
  background-color: #a30000;
}
</style>
