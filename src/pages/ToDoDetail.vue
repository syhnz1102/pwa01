<template>
  <div>
      <Header/>
      <div style="width:300px;height:400px;overflow:auto;">
        <!-- {{ $route.query.id }} -->
        
        <div v-if="!update">{{todoText}}</div>
        <div v-if="update">
            <input type="text" v-model="todoText">
        </div>
        <button v-if="!update" @click="updateTodo">수정</button>
        <button v-if="update" @click="okTodo">수정완료</button>
        <button @click="deleteTodo">삭제</button>
      </div>



      <!-- <TodoList
      v-for="todo in todos"
      v-bind:key="todo.id"
      v-bind:todo="todo"
      @detailbtn="detailButton"
      /> -->
      
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';


export default {
    created() {
        // console.log(this.$route.params.id);
        // console.log(this.$route.params.text);
        console.log(this.$route.query.id);
        console.log(this.$route.query.text);
    },

    components: {
        'Header':Header,
        'Footer':Footer,
        'TodoList':TodoList
    },
    data(){
        return{
            todos: [],
            update:0,
            todoText:this.$route.query.text
        }
    },
    methods: {
        deleteTodo(){
            let con = confirm("삭제하시겠습니까");
            if(con){
                alert("삭제되었습니다");
                this.$router.push({path: '/'});
            }
        },
        updateTodo(){
            this.update=1;
        },
        okTodo(){
            this.update=0;
        }
    }

}
</script>

<style>

</style>