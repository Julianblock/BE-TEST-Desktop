<template>
<div>
<div class="home-w" v-if="!loggedIn">
  <div class="home">
    <div style="display: flex;align-items: center;margin-bottom: 50px;width: 80%;justify-content: center;"><img alt="Focust Logo" src="@/assets/logo.png" class="home-img">
    <h1 style="font-family: unset;color: #767676;">Focust</h1>
    </div>

    <input type="email" placeholder="Email:" class="home__input">

    <input type="password" placeholder="Password:" class="home__input">

    <button class="home__btn-submit" @click="logIn">Submit</button>
  </div>
</div>
  <Dashboard v-else-if="loggedIn" />
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Dashboard from './Dashboard';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Dashboard,
  },
  computed: {
    ...mapState(['loggedIn']),
  },
  methods: {
    logIn() {
      this.$store.commit('set', {
         loggedIn: true,
      });
    }
  }
}
</script>

<style scoped>
  .home-w {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #62d3b0, #0062b0);
    height: 100vh;
  }
  .home {
    background: white;
    box-shadow: 0px 7px 15px #555555;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 350px;
    height: 470px;
  }
  .home__input {
    margin-top: 10px; 
    width: 90%; 
    height: 42px; 
    padding-left: 5px;
    font-size: 16px; 
    border-radius: 10px; 
    border: none; 
    margin-top: 20px;
    margin-bottom: 10px;
    box-shadow: dimgrey 0px 0px 2px; 
    cursor: auto;
  }
  .home-img {
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .home__btn-submit {
    margin-top: 100px;
    width: 65%;
    height: 45px;
    background: linear-gradient(75deg, #1d93c6, #0cd49a);
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #6b6b6b;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }
  .home__btn-submit:hover {
    box-shadow: 0px 5px 10px #6b6b6b;
  }
</style>