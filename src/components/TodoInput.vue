<template>

  <div>
    <!-- <input type="text" v-bind:value="todotext"> -->
    데이터: {{ person.age }}세 {{ person.name }}님 to-do-list를 추가하세요.<br />
    메소드: {{ addPlease('안녕하세요! ') }}<br />
    메소드2: {{ otherMethod() }}<br />

    <br />
    <form @submit.prevent="submit">
      <input v-bind:type="type" v-bind:value="todotext">
      <button @click="addList">{{ add }}</button>
    </form>
    

    <br /><br />
    <a v-bind:href="link_N">naver(데이터)</a><br />
    <a v-bind:href="toNaver()">naver(메소드)</a><br />
    <a @click="addYear">naver(이벤트)</a><br />
    <br />
    <button @click="test01('test!!')">test01</button>
    <br />
    단방향바인딩(v-on, v-bind)<input :type="type" :value="text1" @keyup="updateText"> <br />
    <div>{{ text1 }}</div>
    양방향바인딩(v-model)<input :type="type" v-model="text2"> <br />
    <div>{{ text2 }}</div>
    
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
      add:'추가',
      todotext : 'hihi!!',
      person:{
        name:'윤호',
        age:'28'
      },
      type: 'text',
      link_N:'https://www.naver.com',
      text1:'text1',
      text2:'text2'

      
    }
  },
  methods: {
    addList() {
      return this.todotext = 'ㅎㅇ'
    },
    addPlease(hello){
      return hello + this.person.age+ '세 ' + this.person.name + '님 to-do-list를 추가하세요.';
    },
    otherMethod(){
      return this.addPlease().substring(9);
    },
    toNaver(){
      return this.link_N;
    },
    addYear(){
      return this.person.age++;
    },
    submit(){
      alert('gg');
      console.log('reload확인');
    },
    test01(contento){
      alert(contento);
    },
    updateText(event){
      console.log(event);
      console.log("g");
      this.text1=event.target.value; //단방향 바인딩 이기 때문에 여기서는 dom지정을 해줘야한다.
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
