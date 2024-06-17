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
    <ul>
        <li v-for="movie in store.movieList">
            <p>{{ movie.title }}</p>
            <p>{{ movie.original_title }}</p>
            <span class="lang-icon" :class="`lang-icon-${movie.original_language}`"></span>
            <p>{{ movie.vote_average }}</p>
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