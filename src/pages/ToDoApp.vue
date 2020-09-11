<template>
   
  <div>
    <Header/>
    <div style="width:300px;height:400px;overflow:auto;">
      <form @submit.prevent="addList">
        <input id="input01"
            type="text"
            v-model="inputText"
            placeholder="할 일을 입력하세요."
            style="width:244px; height:26px;"
        >
        <button style="height:33px;"> {{ add }} </button>
      </form>
      <p style="text-align:center">할일 리스트</p>
      <hr>

    <!--
      
    밑에 TodoList 설명
    1.컴포넌트를 불러옴
    2.v-bind:todoprop="tododata"
      prop에 등록한 todoprop에 넣어줄 부모콤포넌트의 데이터인 tododata를 바인드
    3.v-for="tododata in todos"
      컴포넌트안에 for를 통해 원하는 데이터를 쭉 출력
      (이때 in앞에 오는 게 todos안의 데이터에 대한 이름정의)
    4.v-bind:key="tododata.id"
      키값으로 tododata.id를 지정(v-for에서는 key등록 필수)
    5.자식콤포넌트는 받은 데이터를 "todoprop.데이터안의 key값" 형식으로 사용가능

    -->

      <TodoList
        v-for="tododata in todos"
        v-bind:key="tododata.id"
        v-bind:todoprop="tododata"
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

let idnum = 0;

export default {
  components: {
    'Header': Header,
    'Footer': Footer,
    'TodoList': TodoList
  },
  name: 'hello',
  data () {
    return {
      add:'추가',
      todos: [],
      inputText:''
    }
  },
  methods:{
    addList(e) {
      if(this.inputText==''){
        alert('할 일을 입력하세요');
      }else{
        idnum ++;
        this.todos.push({//todos안에 밑의 내용들을 push한다(화면구성)
          id: idnum,
          text: this.inputText,
          checked:false
        });
      }
      this.inputText=''
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
