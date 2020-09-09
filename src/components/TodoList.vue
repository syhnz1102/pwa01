<template>
  
  <div>
    <div>{{ msg }}</div>
    <div>
      <div class="lists"></div>
    </div>
    
  </div>

</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      msg: 'list'
    }
  },
  methods:{
    function () {
      
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

/* 추가 */

.alignleft{text-align: left;}
.box{width:100px;height:200px;}
</style>
