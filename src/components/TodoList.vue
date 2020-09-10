<template>
  
  <div>
    
    <div style="width:300px; text-align:left; ">
      <input class="todo1"
        type="checkbox"
        :checked="todo.checked"
      >
      <a @click="detailButton"> {{todo.text}} </a>
    </div>
    
  </div>

</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
    }
  },
  props:{
    todo:{
      type:Object
    }
  },
  methods: {
    detailButton(){
      // alert(this.todo.id);
      // this.$emit("detailbtn",{
      //   id : this.todo.id,
      //   text: this.todo.text,
      //   checked:this.todo.checked
      // })
      // alert("d");

      this.$router.push({path: 'ToDoDetail', query: {id: this.todo.id, text: this.todo.text}});
      // this.$router.push({path: 'ToDoDetail/' + this.todo.id +'/'+ this.todo.text});
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
