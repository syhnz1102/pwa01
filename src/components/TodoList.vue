<template>
  
  <div>
    
    <div style="width:300px; text-align:left; ">
      <input class="todo1" type="checkbox" :checked="todoprop.checked" @change="finished">
      <a style="word-break: break-all;" @click="detailButton" v-bind:class="{ line : linebool }"> {{ todoprop.text }} </a>
    </div>
    
  </div>

</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      linebool:false
    }
  },
  props:{
    todoprop:{
      type:Object
    }

  },
  methods: {
    detailButton(){
      this.$router.push({path: 'ToDoDetail', query: { id: this.todoprop.id, text: this.todoprop.text }});
    },
    finished(){
      // this.todoprop.text='끝';ddd
      
      if(this.linebool){
        this.linebool=false;
      }else{
        this.linebool=true;
      }
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
.line{text-decoration: line-through;color:grey}
</style>
