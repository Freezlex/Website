<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "Big John";
  src: url("./assets/fonts/BigJohn.otf") format("truetype");
}

@font-face {
  font-family: "Slim Joe";
  src: url("./assets/fonts/SlimJoe.otf") format("truetype");
}

@font-face {
  font-family: "VcrOsdMono";
  src: url("./assets/fonts/VcrOsdMono.ttf") format("truetype");
}

@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-Light.ttf") format("truetype");
}

:root {
  --main-color: #171717;
  --secondary-color: #E5E5E5;
}

body, html {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--main-color);
}
</style>
