<script>
import {store} from "../store";
import axios from "axios";



export default {
data() {
return {  
    store,
    castList: []

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
    },
    getCredits: function(id){
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
            params: {
                api_key: "ff07d065bccfc4f4e1b8022ceb9484c2",
            }
        })
        .then((response) => {
            // console.log(response.data.cast)
            let displayCast = response.data.cast.slice(0, 5);
            this.$set(this.castLists, id, displayCast.map(castMember => castMember.original_name));
            console.log(displayCast)
        })
        .catch( (error) => {
            console.log(error);
        });
    }
},
mounted(){
    this.store.movieList.forEach(movie =>{
        this.getCredits(movie.id)
    })
}
}
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
                        <p v-for="(castMember, index) in castList[movie.id]" :key="index">
                            {{ castMember }}
                            </p>

                        <span class="lang-icon" :class="`lang-icon-${movie.original_language}`"></span>

                        <div class="stars-container">
                            <font-awesome-icon v-for="(icon, index) in displayVoteAverage(movie.vote_average)"
                                :key="index"
                                :icon="icon"
                                class="star-icon"/>
                        </div>

                    </div>
                </div>
            </li>
        </ul>
    
        <h2>TV SHOWS LIST</h2>
        <ul>
            <li v-for="show in store.tvShowsList" >
                <div class="list-item" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${show.poster_path})`}">
                    <div class="item-info">
                        <p>{{ show.name }}</p>
                        <p>{{ show.original_name }}</p>

                        <span class="lang-icon" :class="`lang-icon-${show.original_language}`"></span>
                            <div class="stars-container">
                                <font-awesome-icon v-for="(icon, index) in displayVoteAverage(show.vote_average)"
                                    :key="index"
                                    :icon="icon"
                                    class="star-icon"
                                />
                            </div>
                    </div>
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
    min-height: 100vh;
    // background: rgb(121,9,9);
    // background: linear-gradient(142deg, rgba(121,9,9,0.48503151260504207) 1%, rgba(0,0,0,1) 76%);
}

ul{
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    gap: 2em;
    align-items: center;
    flex-wrap: wrap;

    li{
        width: calc((100% / 6) - 2em);
        height: 300px;
        display: flex;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            opacity: 0.7;
            filter: grayscale(90%);
        }

        .item-info{
            padding: 1em;
            text-align: center;
            font-weight: 600;
            opacity: 1;
        }
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