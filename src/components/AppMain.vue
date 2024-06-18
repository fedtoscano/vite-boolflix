<script>
import axios from "axios";
import {store} from "../store";
import AppSearch from "./AppSearch.vue";
import AppMovieList from "./AppMovieList.vue";


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
        //chiamata per i film
        console.log(searchString)
        axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
            api_key: "ff07d065bccfc4f4e1b8022ceb9484c2",
            query: searchString,
            }
        })
        .then((response) => {
            console.log(response.data.results)
            this.store.movieList = response.data.results;
        })
        .catch(function (error) {
            console.log(error);
        });
        
        //chiamata per le serie tv
        axios.get("https://api.themoviedb.org/3/search/tv", {
            params:{
                api_key: "ff07d065bccfc4f4e1b8022ceb9484c2",
                query: searchString,
            }
        })
        .then((response) =>{
            console.log(response.data.results)
            this.store.tvShowsList = response.data.results
        })
    }
}}
</script>

<template>

            <AppSearch @searched="searchMovie"/>
            <AppMovieList/>

</template>

<style scoped lang="scss">
@use "../style/general.scss";
.container{
    color: white;
    .main-container{
        max-width: 1200px;
    margin: 0 auto;
    }
}

</style>