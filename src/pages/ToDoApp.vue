<template>
   
  <div>
    <Header/>
    <div style="width:300px;height:400px;overflow:auto;">
      <form @submit.prevent="addList">
        <input id="input01"
            v-bind:type="type"
            placeholder="할 일을 입력하세요."
            style="width:244px; height:26px;"
        >

        <button style="height:33px;">{{add}}</button>
      </form>
      <p style="text-align:center">할일 리스트</p>
      <hr>
    
      <TodoList
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
      />
    </div>
    <Footer/>

  </div>


</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';//추가되는 한줄한줄을 컴포넌트로
// import datas from '../data/datas;

let idnum = 2;

export default {
  components: {
    'Header': Header,
    'Footer': Footer,
    'TodoList': TodoList
  },
  name: 'hello',
  data () {
    return {
      type:'text',
      add:'추가',
      todos: [
        // {id:1, text: '할일1', checked: false},//기본적으로 들어가있게
        // {id:2, text: '할일2', checked: false}
      ]
    }
  },
  methods:{
    addList(e) {
      let inputText=document.getElementById("input01");
      if(inputText.value!=''){
        idnum ++;
        this.todos.push({//todos안에 밑의 내용들을 push한다(화면구성)
          id: idnum,
          text: inputText.value,
          checked:false
        });
        inputText.value = '';
        // console.log(e.target.value);
      }else{
        alert('할 일을 입력하세요');
      }
    }
    // detailButton({id,text,checked}) {
    //   console.log(id,text,checked);
    //   // this.$router.push({path: 'detail'});
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

</style>
