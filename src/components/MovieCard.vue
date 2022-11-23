<template>
  <div class="MovieCardContainer">
    <div class="Overlay"></div>

    <img
      class="MovieCardImage"
      :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path"
      :alt="movie.title + '_Poster'"
    />

    <MovieControls :type="type" v-bind:movie="movie" />
  </div>
</template>

<script>
import MovieControls from "./MovieControls.vue";

export default {
  name: "MovieCard",
  components: {
    MovieControls,
  },
  props: { type: String, movie: Object },
};
</script>

<style scoped>
.MovieCardContainer {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  border: 0;
  display: block;
}
.Overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  transition: all 0.15s ease;
  box-sizing: border-box;

  /* ${MovieCardContainer}:hover & {
    border: 3px solid #21d07a;
  } */
}
.MovieCardImage {
  width: 100%;
  display: block;
}
</style>
