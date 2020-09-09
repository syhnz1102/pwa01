<template>

  <div>
    <input type="text" v-bind:value="todotext">
    <button type="submit" v-on:submit="addlist">추가</button>
    
    
  </div>

</template>

<script>
export default {
  name: 'TodoInput',
  created() {
    console.log('인풋');
  },
  data () {
    return {
      todotext :  ''
      
    }
  },
  methods: {
    addlist() {
      console.log(this.todotext);
      // this.todotext = 'ㅎㅇ'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
