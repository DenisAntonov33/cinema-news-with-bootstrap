<template>
  <section class="container">
    <div class="wrapper column is-four-fifths-tablet">
      <h1 class="page-title">Фильтрация новостей</h1>
      <div class="inputs columns is-multiline is-mobile">
        <div class="input-wrapper column"><v-select class="select-input" :options="cities" v-model="selectedCity" @input="addTheatres"></v-select></div>
        <div class="input-wrapper column"><v-select class="select-input" :options="cinemas" v-model="selectedTheatre" @input="addNews"></v-select></div>
      </div>
      <div class="news columns is-multiline is-mobile">
        <MovieNews v-for="item in news" :key="item.id" :item="item" class="news-component column is-one-quarter-desktop is-one-third-tablet is-half-mobile"/>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import MovieNews from '~/components/MovieNews.vue';


export default {
  components: {
    MovieNews
  },
  data() {
    return {
      selectedCity: null,
      selectedTheatre: null
    }
  },
  computed: {
    ...mapState(["cities", "cinemas", "news"])
  },
  mounted() {
    this.$store.dispatch('GET_CITIES');
  },
  methods: {
    addTheatres: function() {
      let cityId = this.selectedCity.value;
      this.$store.dispatch('GET_THEATRES', cityId);
    },
    addNews: function () {
      let theatreId = this.selectedTheatre.value;
      this.$store.dispatch('GET_NEWS', theatreId);
    }
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
}

.page-title {
  font-family: 'Open Sans';
  font-weight: bold;
}

.inputs {
  margin-top: 20px;
  max-width: 100%;
}

.input-wrapper {
  margin: 10px;
}

.news {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.news-component {
  width: 22%;
}

.select-input,
.dropdown-toggle {
  width: 100%;
}

@media screen and (max-width: 425px) {
  .column.is-half-mobile {
    flex: none;
    width: 100%;
  }
}



</style>

