<template>
  <section class="WelcomeContainer">
    <h1 class="Title">Welcome to MyMovieList!</h1>
    <div class="Card">
      <router-link class="GetStartedContainer" to="/search">
        <h2 class="Subheading">Get Started!</h2>
        <p class="Textbox">
          Click here to get started with your own MovieList now.
        </p>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.WelcomeContainer {
  max-width: max-content;
  display: grid;
  margin: 0 auto;
  padding: 80px 0 0 0;
}
.Title {
  text-align: center;
  font-size: 3rem;
  padding: 2rem;
}
.Card {
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #f1e1fc;
}
.GetStartedContainer {
  cursor: pointer;
  text-decoration: inherit;
  color: inherit;
}
.Subheading {
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
}
.Textbox {
  text-align: center;
  font-size: 1rem;
  padding: 1rem;
}
</style>
