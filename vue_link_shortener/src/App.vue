<template>
  <div class="main-container">
    <nav class="navbar">
      <a href="/" class="navbar-brand">swizzl</a>
      <div class="spacer"></div>
      <i class="fa fa-bars" aria-hidden="true"></i>
    </nav>
    <div class="container">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: { Home },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Limelight&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  height: 80px;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: left;
  padding: 0 50px;
  margin-bottom: 50px;
  background-color: white;
}

.navbar-brand {
  font-family: "Limelight", cursive;
  text-decoration: none;
  font-size: 2em;
  color: #16df95;
}

.spacer {
  flex: 1;
}

.fa-bars {
  display: flex;
  justify-content: flex-end;
  font-size: 1.5em;
  padding: 10px 0;
  cursor: pointer;
}

@media screen and (max-width: 2560px) {
  .main-container {
    padding: 0 25%;
  }
}

@media screen and (max-width: 1440px) {
  .main-container {
    padding: 0 20%;
  }
}

@media screen and (max-width: 1024px) {
  .main-container {
    padding: 0 15%;
  }
}

@media screen and (max-width: 768px) {
  .main-container {
    padding: 0;
  }

  .navbar {
    padding: 0 80px;
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 0 50px;
  }
}

@media screen and (max-width: 375px) {
  .navbar {
    padding: 0 30px;
  }
}
</style>
