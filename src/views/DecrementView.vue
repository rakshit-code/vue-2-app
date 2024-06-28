<template>
  <div class="Decrement">
    <h1>{{ count }}</h1>
    <VBtn color="secondary"
  elevation="2"
  outlined @click="decrement">Decrement</VBtn>
  </div>
</template>

<script>
import { VBtn } from 'vuetify/lib/components';


export default{
  name:'DecrementView',
  components:{
    VBtn
  },
  computed:{
    count(){
      return this.$store.getters.getCount;
    }
  },
  methods:{
    decrement() {
      this.$store.dispatch('decrement')
    }
  }
}
</script>
