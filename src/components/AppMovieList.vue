<script>
import {store} from "../store";
// import {library} from "../../node_modules/@fortawesome/fontawesome-free"

// import { FontAwesomeIcon } from '../fortawesome/vue-fontawesome' 
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/vue-fontawesome' 
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
// import { byPrefixAndName } from '../../node_modules/@fortawesome/fontawesome-free'


export default {
data() {
return {  
    store,
    FontAwesomeIcon,
    // byPrefixAndName,
    // library
}
},
methods: {
    displayVoteAverage: function(voteValue){
        const newVote =  Math.ceil(voteValue / 2);
        let voteString = "";
        for (let index = 0; index < newVote; index++) {
            voteString += `<font-awesome-icon :icon="['fas', 'star']/>`
        }
        return voteString;
    }
},
computed(){
    
}}
</script>

<template>
    <h2>MOVIE LIST</h2>
    <ul>
        <li v-for="movie in store.movieList">
            <p>{{ movie.title }}</p>
            <p>{{ movie.original_title }}</p>
            <span class="lang-icon" :class="`lang-icon-${movie.original_language}`"></span>
            <p>{{ displayVoteAverage(movie.vote_average) }}</p>
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