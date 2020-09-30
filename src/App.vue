<template>
  <div id="app">
    <div class="back"></div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to your vue.js app!</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <h3>Contact me</h3>
    <ul>
      <li><a href="tencent://message/?uin=2445743081&Site=&Menu=yes" target="_blank" rel="noopener"><span class="social fa fa-qq">QQ</span></a></li>
      <li><a href="mailto:angelbeats177@gmail.com?subject=welcome&body=Welcome to my page!" target="_blank" rel="noopener"><span class="social fa fa-envelope-o">E-mail</span></a></li>
      <li><a href="https://github.com/AngelBeats-Kanade" target="_blank" rel="noopener"><span class="social fa fa-github">Github</span></a></li>
      <li><a href="" target="_blank" rel="noopener"><span class="social fa fa-phone">(+86)18960519068</span></a></li>
    </ul>
  </div>
</template>

<style>
@import "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
.back{
  background:url('./assets/back.jpg') center center no-repeat;
  background-size: 100% 100%;
  background-color: #cccccc;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: -1;
  top: 0;
  left: 0;
}
</style>
