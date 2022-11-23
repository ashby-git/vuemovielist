<template>
  <div class="InnerCardControls">
    <div v-show="type === 'watchlist'">
      <button class="ControlButton" @click="addMovieToWatched(movie)">
        <i class="fas fa-eye" />
      </button>

      <button class="ControlButton" @click="removeMovieFromWatchlist(movie)">
        <i class="fas fa-times" />
      </button>
    </div>

    <div v-show="type === 'watched'">
      <button class="ControlButton" @click="moveMovieToWatchlist(movie)">
        <i class="fas fa-eye-slash" />
      </button>

      <button class="ControlButton" @click="removeMovieFromWatched(movie)">
        <i class="fas fa-times" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MovieControls",
  props: { type: String, movie: Object },
  methods: {
    ...mapActions([
      "moveMovieToWatchlist",
      "addMovieToWatched",
      "removeMovieFromWatchlist",
      "removeMovieFromWatched",
    ]),
  },
};
</script>

<style scoped>
.InnerCardControls {
  display: inline;
  background-color: red;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  padding: 3px;
  opacity: 1;
  transition: all 0.3s ease;
  width: max-content;

  /* ${MovieCardContainer}:hover & {
    opacity: 1;
  } */
}
.ControlButton {
  color: #fefefe;
  background-color: transparent;
  border: none;
  transition: all 0.3s ease;
  font-size: 1.25rem;
  padding: 5px;
  margin: 0;
}
.ControlButton:hover {
  color: #21d07a;
  cursor: pointer;
}
</style>
