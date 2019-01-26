<template>
  <section class="container">
    <div class="wrapper">
      <h1 class="page-title">Фильтрация новостей</h1>
      <div class="inputs">
        <div class="input-wrapper"><v-select :options="cities" v-model="selectedCity" @input="addTheatres"></v-select></div>
        <div class="input-wrapper"><v-select :options="cinemas" v-model="selectedTheatre" @input="addNews"></v-select></div>
      </div>
      <div class="news">
        <MovieNews v-for="item in news" :key="item.id" :item="item" class="news-component"/>
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

.wrapper {
  margin: 0 20% 0 20%;
  width: 100%;
}

.page-title {
  font-family: 'Open Sans';
}

.inputs {
  display: flex;
  margin-top: 20px;
}

.input-wrapper {
  margin: 10px;
  flex: 1 1 50%;
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


</style>

