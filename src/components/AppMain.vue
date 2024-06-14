<script>
import axios from "axios"
import {store} from "../store";
import AppSearch from "./AppSearch.vue"
import AppMovieList from "./AppMovieList.vue"


export default {

components: {
    AppSearch,
    AppMovieList,
},

data() {
return {
    store
}
},
methods: {
    searchMovie(searchString){
        console.log(searchString)
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
            api_key: "ff07d065bccfc4f4e1b8022ceb9484c2",
            query: searchString,
            }
        })
        .then((response) => {
            // console.log(response)
            this.store.movieList = response.data.results;
        })
        .catch(function (error) {
            console.log(error);
        })
        ;  
    }
}}
</script>

<template>
    <AppSearch @searched="searchMovie"/>
    <AppMovieList/>
</template>

<style scoped>
</style>