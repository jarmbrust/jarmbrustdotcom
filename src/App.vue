<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="wrapper blue">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/misc">Misc</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>
    <body>
      <router-view />
    </body>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 10rem;
  width: 100%;
  margin: 1.5rem 4rem;
}

body {
  margin: 0 4rem;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
  }
}
</style>
