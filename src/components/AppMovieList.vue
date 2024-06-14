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
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>
            <span class="lang-icon lang-icon-en"></span>
        </li>
    </ul>
</template>

<style scoped>
ul{
    list-style-type: none;
}
.lang-icon {
            background-image: url(../../node_modules/@textabledev/langs-flags-list/lang-flags.png);
        }

</style>