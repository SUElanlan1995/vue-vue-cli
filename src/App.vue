<template>
  <div id="app">
    <h1>vue实操ByChenSUE</h1>
    <input type="text" v-model="liText" @keyup.enter="addLi"/>
    <ul>
      <li v-for="item in items" v-text="item.text" :class="[{'font-big':item.isBig},{'change-color':item.isChange}]"
      @click="changeColor(item)"
      ></li>
    </ul>
    <Hello :listtext='liText' @addline="addListLine()"></Hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import locS from './locls'
export default {
  data(){
    return{
      liText:'',
      items:[],
    }
},
  ready(){
    this.beforeSend();
  },
  watch:{
    items:{
      deep:true,
      handler(items){
         locS.setList(items)
      }
    }
  },
  components: {
    Hello
  },
  methods:{
  beforeSend(){
    this.items = locS.getList();
  },
  addLi(){
    let obj = {'text':this.liText,'isChange':false,'isBig':false};
    this.items.push(obj);
    this.liText = '';
  },
  addListLine(){
    this.items.forEach(function(item){
      item.isBig = !item.isBig
    })
  },
  changeColor(v){
    v.isChange = !v.isChange;
  }
}
}

</script>

<style>
.font-big{
  font-size:22px;
}
.change-color{
  color:red;
}
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
