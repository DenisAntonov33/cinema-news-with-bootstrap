import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {
        cities: [],
        cinemas: [],
        news: []
    },
    mutations: {
        GET_CITIES(state, payload) {
            state.cities = payload;
        },
        GET_THEATRES(state, payload) {
            state.cinemas = payload;
        },
        GET_NEWS(state, payload) {
            console.log(payload);
            state.news = payload;
        }
    },
    actions: {
        GET_CITIES(context) {
            axios
                .get('http://api.air-sales-api.mt125.mt-pc.ru/v1/city/all')
                .then(response => context.commit('GET_CITIES', response.data))
                .catch(error => console.log(error));
        },
        GET_THEATRES(context, cityId) {
            axios
                .get(`http://api.air-sales-api.mt125.mt-pc.ru/v1/theatre/all?cityId=${cityId}`)
                .then(response => context.commit('GET_THEATRES', response.data))
                .catch(error => console.log(error));
        },
        GET_NEWS(context, theatreId) {
            axios
                .get(`http://api.air-sales-api.mt125.mt-pc.ru/v1/news/all?theatreId=${theatreId}`)
                .then(response => context.commit('GET_NEWS', response.data))
                .catch(error => console.log(error));
        }
    }
  });
};

export default store;