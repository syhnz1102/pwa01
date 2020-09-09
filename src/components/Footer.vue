<template>
  
  <div class="footertest">
    <h3>{{ msg }}</h3>
    
  </div>

</template>

<script>
export default {
  name: 'Footer',
  created() {
    console.log('푸터');
  },
  data () {
    return {
      msg: 'footertest'
    }
  },
  methods: {

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
.footertest {
  background-color: grey;
}
</style>
