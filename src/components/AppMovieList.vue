<script>
import {store} from "../store";

export default {
data() {
return {  
    store,
}
}}
</script>

<template>
    <h1>ciao da app movielist</h1>
    <ul>
        <li v-for="movie in store.movieList">
            <p>{{ movie.title }}</p>
            <p>{{ movie.original_title }}</p>
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>
        </li>
    </ul>
</template>

<style scoped>
</style>