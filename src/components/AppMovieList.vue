<script>
import {store} from "../store";


export default {
data() {
return {  
    store,
}
},
methods: {
    displayVoteAverage: function(voteValue){
        const newVote =  Math.ceil(voteValue / 2);
        let voteStars = [];
        for (let index = 0; index < newVote; index++) {
            voteStars.push(['fas', 'star'])
        }
        return voteStars;
    }
},
computed(){
    
}}
</script>

<template>

    <div class="container">
        <h2>MOVIE LIST</h2>
        <ul>
            <li v-for="movie in store.movieList" >
                <div class="list-item" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`}">
                    <div class="item-info">
                        <p>{{ movie.title }}</p>
                        <p>{{ movie.original_title }}</p>
                        <span class="lang-icon" :class="`lang-icon-${movie.original_language}`"></span>
                            <div class="stars-container">
                                <font-awesome-icon v-for="(icon, index) in displayVoteAverage(movie.vote_average)"
                                    :key="index"
                                    :icon="icon"
                                    class="star-icon"
                                />
                            </div>
                    </div>

                </div>
                <!-- <img :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`" alt=""> -->
            </li>
        </ul>
    
        <h2>TV SHOWS LIST</h2>
        <ul>
            <li v-for="show in store.tvShowsList">
                <p>{{ show.name }}</p>
                <p>{{ show.original_name }}</p>
                <span class="lang-icon" :class="`lang-icon-${show.original_language}`"></span>
                <!-- <p>{{ show.vote_average }}</p> -->
                <div class="stars-container">
                        <font-awesome-icon v-for="(icon, index) in displayVoteAverage(show.vote_average)"
                            :key="index"
                            :icon="icon"
                            class="star-icon"
                        />
                    </div>
                <div class="img-container">
                    <img :src="`https://image.tmdb.org/t/p/w185${show.poster_path}`" alt="">
                </div>
            </li>
        </ul>
    </div>
    
</template>

<style scoped lang="scss">
@use "../style/flag-icons.scss" as *;
@use "../style/general.scss";

.container{
    max-width: 1400px;
    margin: 0 auto;
}

ul{
    list-style-type: none;
    display: flex;
    gap: 2em;
    align-items: center;
    flex-wrap: wrap;

    li{
        width: calc((100% / 6) - 2em);
        height: 400px;
        .list-item{
            width: 100%;
            height: 100%;
            background-size: contain;
            background-repeat: no-repeat;
        }
    
    }
}

.lang-icon {
            background-image: url(../../node_modules/@textabledev/langs-flags-list/lang-flags.png);
        }

</style>