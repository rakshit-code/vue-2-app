<template>
    <div class="Increment">
    <h1>{{ count }}</h1>
    <VBtn color="secondary"
  elevation="2"
  outlined @click="increment">Increment</VBtn>
  </div>
</template>

<script>
import { VBtn } from 'vuetify/lib/components';


  export default {
    name: 'IncrementView',
    components:{
      VBtn
    },
    computed: {
    count() {
      return this.$store.getters.getCount;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
  }
  }
</script>
