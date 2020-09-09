<template>
  
  <div class="headertest">
    <!-- <h1 @click="handleClick">to-do-app</h1> -->
    <h1>{{ msg }}</h1>
    <form>
      <!-- <input v-if="seen" type="text"><button type="submit">추가</button> -->
    </form>
  </div>

</template>

<script>
export default {
  name: 'Header',
  created() {
    console.log('헤더');
  },
  data () {
    return {
      msg: 'to-do-app',
      // seen: false
    }
  },
  methods: {
    // handleClick() {
    //   this.seen = true
    // }
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

/*추가 */
.headertest {
  background-color: lightgrey;
}
</style>
