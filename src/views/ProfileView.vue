<template>
  <div class="ProfileContentContainer">
    <div class="MovieListSection">
      <div clss="SectionContainer">
        <div class="SectionHeader">
          <h1 class="SectionTitle">Watchlist</h1>

          <span v-if="watchlistMovies.length === 1" class="CountPill">
            1 Movie
          </span>
          <span v-else class="CountPill">
            {{ watchlistMovies.length }} Movies
          </span>
        </div>

        <div v-if="watchlistMovies.length > 0" class="MovieGrid">
          <MovieCard
            v-for="movie in watchlistMovies"
            v-bind:movie="movie"
            :type="'watchlist'"
            :key="movie.id"
          />
        </div>
        <h2 v-else class="NoMovies">No movies in your list! Add some!</h2>
      </div>
    </div>
    <div class="MovieListSection">
      <div clss="SectionContainer">
        <div class="SectionHeader">
          <h1 class="SectionTitle">Watched</h1>

          <span v-if="watchedMovies.length === 1" class="CountPill">
            1 Movie
          </span>
          <span v-else class="CountPill">
            {{ watchedMovies.length }} Movies
          </span>
        </div>

        <div v-if="watchedMovies.length > 0" class="MovieGrid">
          <MovieCard
            v-for="movie in watchedMovies"
            v-bind:movie="movie"
            :type="'watched'"
            :key="movie.id"
          />
        </div>
        <h2 v-else class="NoMovies">No movies in your list! Add some!</h2>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
import { mapState } from "vuex";

export default {
  name: "ProfileView",
  computed: mapState({
    watchlistMovies: (state) => state.watchlist,
    watchedMovies: (state) => state.watched,
  }),
  components: {
    MovieCard,
  },
};
</script>

<style scoped>
.ProfileContentContainer {
  padding: 80px 0 0 0;
}
.MovieListSection {
  padding: 30px 10px;
}
.SectionContainer {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.SectionHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.SectionTitle {
  color: #032541;
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
  width: 100%;
  border-bottom: 3px solid #032541;
}
@media (max-width: 450px) {
  .SectionTitle {
    font-size: 1.7rem;
  }
}
.CountPill {
  display: block;
  background-color: #21d07a;
  padding: 5px 15px;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 999px;
  color: #032541;
  min-width: 80px;
  margin: 35px 0 0 8px;
}
.MovieGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
@media (min-width: 992px) {
  .MovieGrid {
    grid-template-columns: repeat(5, 1fr);
  }
}
.NoMovies {
  color: #c4c4c4;
  font-size: 3rem;
  text-align: center;
}
</style>
