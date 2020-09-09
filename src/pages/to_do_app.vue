<template>
   
  <div>
    <Header></Header>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <Footer></Footer>

  </div>


</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

export default {
  components: {
    'Header': Header,
    'Footer': Footer,
    'TodoInput': TodoInput,
    'TodoList': TodoList,

  },
  name: 'hello',
  data () {
    return {
      pageTitle: 'to-do-app'
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
