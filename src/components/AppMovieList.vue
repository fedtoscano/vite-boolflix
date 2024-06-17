<script>
import {store} from "../store";

export default {
data() {
return {  
    store,
}
},
computer(){
    
}}
</script>

<template>
    <h2>MOVIE LIST</h2>
    <ul>
        <li v-for="movie in store.movieList">
            <p>{{ movie.title }}</p>
            <p>{{ movie.original_title }}</p>
            <span class="lang-icon" :class="`lang-icon-${movie.original_language}`"></span>
            <p>{{ movie.vote_average }}</p>
            <img :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`" alt="">
        </li>
    </ul>

    <h2>TV SHOWS LIST</h2>
    <ul>
        <li v-for="show in store.tvShowsList">
            <p>{{ show.name }}</p>
            <p>{{ show.original_name }}</p>
            <span class="lang-icon" :class="`lang-icon-${show.original_language}`"></span>
            <p>{{ show.vote_average }}</p>
            <img :src="`https://image.tmdb.org/t/p/w185${show.poster_path}`" alt="">

        </li>
    </ul>
</template>

<style scoped lang="scss">
@use "../style/flag-icons.scss" as *;

ul{
    list-style-type: none;
}
.lang-icon {
            background-image: url(../../node_modules/@textabledev/langs-flags-list/lang-flags.png);
        }

</style>