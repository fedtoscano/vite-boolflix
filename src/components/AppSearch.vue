<script>
import {store} from "../store";

export default {
data() {
return {  
    store,
    researchString: ""
}
},
methods: {
    makeResearch: function(){
        this.$emit("searched", this.researchString)
    }
}}
</script>

<template>
    <div class="container">
        <div class="search-container">
            <input type="text" name="research-input" id="research-input" v-model="researchString" placeholder="Search...">
            <button @click="makeResearch">Search</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container{
    display: flex;
    justify-content: end;
    gap: 1em;
    width: 30%;
    margin: 3em;
    margin-bottom: 2em;
}
</style>