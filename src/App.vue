
<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Nunito&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navbar v-if="loggedIn" />
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Nunito',sans-serif;
  margin: 0;
}
</style>

<script>
import Navbar from './Navbar/Navbar';
import { mapState } from 'vuex';

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(['loggedIn'])
  }
}
</script>