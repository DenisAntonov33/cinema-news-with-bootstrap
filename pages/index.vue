<template>
  <section class="container">
    <div class="wrapper">
      <h1 class="page-title">Фильтрация новостей</h1>
      <div class="inputs row">
        <div class="input-wrapper col-md"><v-select class="select-input" :options="cities" v-model="selectedCity" @input="addTheatres"></v-select></div>
        <div class="input-wrapper col-md"><v-select class="select-input" :options="cinemas" v-model="selectedTheatre" @input="addNews"></v-select></div>
      </div>
      <div class="news row">
        <MovieNews v-for="item in news" :key="item.id" :item="item" class="news-component col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"/>
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
}

.news-component {
  margin-bottom: 10px;
}

.select-input,
.dropdown-toggle {
  width: 100%;
}

</style>

