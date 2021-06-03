<template>
  <form class="relative grid p-4 text-center text-black rounded-2xl md:p-8 bg-light-200 dark:bg-dark-200 dark:text-white place-items-center" @submit.prevent="handleSubmit">
    <Yes v-if="requested && state === 'true'" />
    <No v-else-if="requested && state === 'false'" />
    <div v-else>
      <div v-if="loader" class="absolute top-0 left-0 z-10 grid w-full h-full text-2xl place-items-center">
        <div class="absolute top-0 left-0 w-full h-full opacity-90 bg-light-200 dark:bg-dark-200 rounded-2xl"></div>
        <div class="relative">Momentje<div class="absolute bottom-0 left-full">{{ dots }}</div></div>
      </div>
      <div class="grid mb-8 place-items-center">
        <div class="inline-block mb-4 text-2xl">Wat is je geboortejaar?</div>
        <div class="grid max-w-md grid-cols-4 gap-x-4">
          <input inputmode="decimal" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" v-model="digit1" @input="handleInput($event, 1)" @focus="handleFocus" type="text" maxlength="1" class="block w-full p-4 mt-1 text-2xl text-center sm:text-4xl border-light-300 bg-light-100 rounded-2xl dark:border-dark-600 dark:text-white dark:bg-dark-400 focus:border-red-600 focus:outline-none focus:ring focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-75" :class="[v$.digit1.$error && 'bg-red-200 border-red-600 dark:bg-red-900 dark:border-red-700']">
          <input inputmode="decimal" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" v-model="digit2" @input="handleInput($event, 2)" @focus="handleFocus" type="text" maxlength="1" class="block w-full p-4 mt-1 text-2xl text-center sm:text-4xl border-light-300 bg-light-100 rounded-2xl dark:border-dark-600 dark:text-white dark:bg-dark-400 focus:border-red-600 focus:outline-none focus:ring focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-75" :class="[v$.digit2.$error && 'bg-red-200 border-red-600 dark:bg-red-900 dark:border-red-700']">
          <input inputmode="decimal" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" v-model="digit3" @input="handleInput($event, 3)" @focus="handleFocus" type="text" maxlength="1" class="block w-full p-4 mt-1 text-2xl text-center sm:text-4xl border-light-300 bg-light-100 rounded-2xl dark:border-dark-600 dark:text-white dark:bg-dark-400 focus:border-red-600 focus:outline-none focus:ring focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-75" :class="[v$.digit3.$error && 'bg-red-200 border-red-600 dark:bg-red-900 dark:border-red-700']">
          <input inputmode="decimal" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" v-model="digit4" @input="handleInput($event, 4)" @focus="handleFocus" type="text" maxlength="1" class="block w-full p-4 mt-1 text-2xl text-center sm:text-4xl border-light-300 bg-light-100 rounded-2xl dark:border-dark-600 dark:text-white dark:bg-dark-400 focus:border-red-600 focus:outline-none focus:ring focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-75" :class="[v$.digit4.$error && 'bg-red-200 border-red-600 dark:bg-red-900 dark:border-red-700']">
        </div>
        <div v-if="v$.$dirty && v$.$error" class="px-4 py-2 mt-4 text-white bg-red-600 rounded-lg">
          <em>y i k e s</em> ... Vul een correcte geboortedatum in 🤷‍♂️
        </div>
      </div>
      <div class="mb-10">
        <div class="mb-4">
          <label class="inline-flex items-start text-lg">
            <input type="checkbox" class="w-6 h-6 border-gray-300 rounded shadow-sm check focus:border-red-600 focus:outline-none focus:ring focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-75" v-model="past">
            <span class="ml-4 text-left">Heb je in de afgelopen 6 maanden Corona gehad?</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-start text-lg">
            <input type="checkbox" class="w-6 h-6 border-gray-300 rounded shadow-sm check focus:border-red-600 focus:outline-none focus:ring focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-75" v-model="indication">
            <span class="ml-4 text-left">Heb je een medische indicatie? <a href="https://www.rijksoverheid.nl/onderwerpen/coronavirus-vaccinatie/vraag-en-antwoord/welke-medische-risicogroepen-krijgen-met-voorrang-een-coronavaccinatie" target="_blank" rel="noopener" class="inline-block text-sm text-blue-800 rounded-lg dark:text-blue-300 focus:outline-none focus:ring focus:ring-offset-8 focus:ring-offset-light-200 dark:focus:ring-offset-dark-200 focus:ring-blue-800 dark:focus:ring-blue-300 focus:ring-opacity-75 hover:underline focus:underline">(meer informatie)</a></span>
          </label>
        </div>
      </div>
      <div>
        <button class="pushable focus:border-red-600 focus:outline-none focus:ring focus:ring-offset-8 dark:focus:ring-offset-dark-200 focus:ring-red-400 focus:ring-opacity-75 focus:ring-offset-light-200" type="submit">
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">
            Mag ik al een prik? 💉
          </span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, decimal } from '@vuelidate/validators'

import Yes from '@/components/Yes.vue'
import No from '@/components/No.vue'

const validatorDigit1 = value => [1, 2].includes(Number.parseInt(value, 10));
const validatorDigit2 = value => [9, 0].includes(Number.parseInt(value, 10));

export default {
  setup () { return { v$: useVuelidate() } },
  components: {
    Yes,
    No,
  },
  data() {
    return {
      loader: null,
      dots: '.',
      requested: false,
      state: false,
      digit1: null,
      digit2: null,
      digit3: null,
      digit4: null,
      past: false,
      indication: false,
    }
  },
  validations () {
    return {
      digit1: {
        required,
        minLength: minLength(1),
        decimal,
        validatorDigit1
      },
      digit2: {
        required,
        minLength: minLength(1),
        decimal,
        validatorDigit2
      },
      digit3: {
        required,
        minLength: minLength(1),
        decimal,
      },
      digit4: {
        required,
        minLength: minLength(1),
        decimal,
      },
    }
  },
  computed: {
    fetchDOB() {
      return `${this.digit1 || 0}${this.digit2 || 0}${this.digit3 || 0}${this.digit4 || 0}`;
    },
    fetchPast() {
      return this.past ? true : false;
    },
    fetchIndication() {
      return this.indication ? true : false;
    },
  },
  methods: {
    handleInput($event, number) {
      this.v$[`digit${number}`].$reset()

      const { target } = $event;

      if(target.nextElementSibling && target.value) {
        target.nextElementSibling.focus();
      }
    },
    handleFocus($event) {
      const { target } = $event;

      this.$nextTick(target.select());
    },
    async handleSubmit() {
      this.v$.$touch();

      if (this.v$.$error) return;

      this.addLoader();

      const request = await fetch('/api/check', {
        method: 'POST',
        body: JSON.stringify({
          dob: this.fetchDOB,
          past: this.fetchPast,
          indication: this.fetchIndication,
        })
      });

      this.state = await request.text();
      this.requested = true;

      this.removeLoader();
    },
    addLoader() {
      this.loader = setInterval(() => {
        if (this.dots === '...') {
            this.dots = '' ;
        } else {
            this.dots += '.';
        }
      }, 200);
    },
    removeLoader() {
      clearInterval(this.loader);
      this.loader = null;
    },
  },
  beforeUnmount() {
    if (this.loader) {
        this.removeLoader();
    }
  },
}
</script>

<style scoped>
  .check {
    color: hsl(5deg 100% 47%);
  }
  .pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    transition: filter 250ms;
    border-radius: 1rem;
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: linear-gradient(
      to left,
      hsl(0deg 100% 16%) 0%,
      hsl(0deg 100% 32%) 8%,
      hsl(0deg 100% 32%) 92%,
      hsl(0deg 100% 16%) 100%
    );
  }
  .front {
    display: block;
    position: relative;
    padding: 12px 42px;
    border-radius: 1rem;
    font-size: 1.25rem;
    color: white;
    background: hsl(5deg 100% 47%);
    will-change: transform;
    transform: translateY(-4px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .pushable:hover {
    filter: brightness(110%);
  }
  .pushable:hover .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  .pushable:hover .shadow {
    transform: translateY(4px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  .pushable:focus:not(:focus-visible) {
    outline: none;
  }
</style>