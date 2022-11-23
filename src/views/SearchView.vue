<template>
  <div class="AddPage">
    <div class="Container">
      <div class="AddContent">
        <div class="InputWrapper">
          <input
            class="Input"
            type="text"
            placeholder="Search for a movie"
            v-model="query"
            @input="onChange"
          />
        </div>
        <ul class="Results" v-for="movie in results" :key="movie.id">
          <li class="ResultsItem" :key="movie.id">
            <ResultCard v-bind:movie="movie" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ResultCard from "../components/ResultCard.vue";
import { ref } from "vue";

export default {
  name: "SearchView",
  components: {
    ResultCard,
  },
  setup() {
    const query = ref("");
    const results = ref([]);
    const onChange = (e) => {
      e.preventDefault();
      if (query.value !== "") {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${query.value}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (!data.errors) {
              results.value = data.results;
            } else {
              results = [];
            }
          });
      }
    };
    return { query, results, onChange };
  },
};
</script>

<style scoped>
.AddPage {
  padding: 80px 0 0 0;
}
.Container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
}
.AddContent {
  padding: 50px 0;
  max-width: 600px;
  margin: 0 auto;
}
/* .InputWrapper {} */
.Input {
  display: block;
  margin: 0 auto;
  width: 80vw;
  max-width: 85%;
  background-color: #032541;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 1.25rem;
}
.Input:focus {
  outline: none;
}
.Results {
  padding: 0;
  margin: 0;
  margin-top: 20px;
  list-style-type: none;
}
.ResultItem {
  list-style-type: none;
}
</style>
