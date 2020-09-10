<template>

  <div>
 
    <div style="width:260px; text-align:left">
      <!-- <form @submit.prevent="submit">
        <input v-bind:type="type"
        placeholder="type text"
        style="width:200px;"
        @keyup.enter="addList">
      </form> -->
       <!-- <hr> -->
       
    </div>

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
      // type:'text',
      // add:'추가'
     

      
    }
  },
  methods: {
    // addList(e) {
    //   console.log(e)
    // },
    
    
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
