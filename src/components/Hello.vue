<template>
  <div class="hello">
    <h1 v-text="listtext"></h1>
  </div>
  <button @click="showLine">点击变大</button>
</template>

<script>
export default {
  data () {
    return {
      hText:'dfafa'
    }
  },
  ready(){
    console.log(this.listtext)
  },
  props:['listtext'],
  methods:{
    showLine(){
      this.$emit('addline');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
