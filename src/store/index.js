import { createStore } from "vuex";

export default createStore({
  state: {
    watchlist: [],
    watched: [],
    changed: false,
  },
  getters: {},
  mutations: {
    pushMovieToWatchlist(state, { movie }) {
      state.watchlist.push(movie);
    },
    filterMovieFromWatchlist(state, { id }) {
      state.watchlist = state.watchlist.filter(
        (watchlistMovie) => watchlistMovie.id !== id
      );
    },
    pushMovieToWatched(state, { movie }) {
      state.watched.push(movie);
      state.watchlist = state.watchlist.filter(
        (watchlistMovie) => watchlistMovie.id !== movie.id
      );
    },
    filterMovieFromWatched(state, { id }) {
      state.watched = state.watched.filter(
        (watchedMovie) => watchedMovie.id !== id
      );
    },
    transferMovieToWatchlist(state, { movie }) {
      state.watchlist.push(movie);
      state.watched = state.watched.filter(
        (watchedMovie) => watchedMovie.id !== movie.id
      );
    },
    setChanged(state, status) {
      state.changed = status;
    },
  },
  actions: {
    addMovieToWatchlist({ commit }, movie) {
      commit("setChanged", true);
      commit("pushMovieToWatchlist", { movie: movie });
    },
    removeMovieFromWatchlist({ commit }, movie) {
      commit("setChanged", true);
      commit("filterMovieFromWatchlist", { id: movie.id });
    },
    addMovieToWatched({ commit }, movie) {
      commit("setChanged", true);
      commit("pushMovieToWatched", { movie: movie });
    },
    removeMovieFromWatched({ commit }, movie) {
      commit("setChanged", true);
      commit("filterMovieFromWatched", { id: movie.id });
    },
    moveMovieToWatchlist({ commit }, movie) {
      commit("setChanged", true);
      commit("transferMovieToWatchlist", { movie: movie });
    },
  },
  modules: {},
});
