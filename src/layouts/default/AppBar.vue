<template>
  <v-app-bar flat
             color="teal-darken-4"
             image="https://picsum.photos/1920/1080?random">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)" />
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon />
    </template>

    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />
      Essentials Preset
    </v-app-bar-title>

    <v-spacer />

    <v-btn icon
           @click="toggleTheme"
           class="mr-12">
      <v-icon>mdi-theme-light-dark</v-icon>
      <v-tooltip activator="parent"
                 location="start">
        Toogle theme
      </v-tooltip>
    </v-btn>

    <div id="nav"
         class="pr-15">
      <router-link icon
                   to="/">
        <v-icon icon="mdi-home-circle-outline" />
        <v-tooltip activator="parent"
                   location="start">
          Home
        </v-tooltip>
      </router-link>
      |
      <router-link icon
                   to="/about">
        <v-icon icon="mdi-information-outline" />
        <v-tooltip activator="parent"
                   location="start">
          About
        </v-tooltip>
      </router-link>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { useTheme } from 'vuetify';

export default {
  setup() {
    const theme = useTheme();

    return {
      theme,
      'toggleTheme': () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    };
  }
};
</script>

<style scoped>
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1867C0;
}
</style>
