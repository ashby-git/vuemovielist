<template>
  <!-- {showModal && (
        <MovieDetailModal onCloseModal={closeModal} movie={movie} />
      )} -->

  <div class="Card">
    <div class="ResultCardContainer">
      <div class="PosterWrapper">
        <img
          v-if="movie.poster_path"
          class="Image"
          :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path"
          alt="movie.title + '_Poster'"
        />
        <div v-else class="FillerPoster" />
      </div>

      <div class="Info">
        <div class="Header">
          <h3 class="Title">{{ movie.title }}</h3>
          <h4 v-if="movie.release_date" class="ReleaseDate">
            {{ movie.release_date.substring(0, 4) }}
          </h4>
        </div>

        <div class="Controls">
          <button
            class="Btn"
            @click="addMovieToWatchlist(movie)"
            :disabled="checkWatchlistMovies(movie.id)"
          >
            Plan To Watch
          </button>

          <button
            class="Btn"
            @click="addMovieToWatched(movie)"
            :disabled="checkWatchedMovies(movie.id)"
          >
            Watched
          </button>
          <button class="Btn">
            <i class="fas fa-info" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ResultCard",
  props: { movie: Object },

  methods: {
    ...mapActions([
      "addMovieToWatchlist",
      "addMovieToWatched",
      "findWatchedMovie",
    ]),
    checkWatchlistMovies(id) {
      return this.$store.state.watchlist.find((item) => item.id === id)
        ? true
        : this.$store.state.watched.find((item) => item.id === id)
        ? true
        : false;
    },
    checkWatchedMovies(id) {
      return this.$store.state.watched.find((item) => item.id === id);
    },
  },
};
</script>

<style scoped>
.Card {
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
}
.ResultCardContainer {
  display: flex;
}
.PosterWrapper {
  margin: auto 0;
}
.Image {
  width: 75px;
  height: 113px;
  background-color: #dbdada;
  border-radius: 5px;
  margin-right: 15px;
  display: block;
  color: transparent;
}
.FillerPoster {
  width: 75px;
  height: 113px;
  background-color: #dbdada;
  border-radius: 5px;
  margin-right: 15px;
  display: block;
  color: transparent;
}
.Info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Title {
  font-size: 1.25rem;
  color: #032541;
  font-weight: 600;
  margin: 0;
}
/* .Header {} */
.ReleaseDate {
  font-size: 1.25rem;
  font-weight: 300;
  color: #032541;
  margin: 0;
}
/* .Controls {} */
.Btn {
  margin-right: 10px;
  padding: 10px 15px;
  background-color: #21d07a;
  color: #032541;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  border: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  line-height: 1.1;
}
@media (max-width: 500px) {
  .Btn {
    padding: 5px 10px;
    margin-top: 5px;
  }
}
.Btn:hover {
  background-color: #1aa762;
  opacity: 1;
  cursor: pointer;
}
.Btn:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
