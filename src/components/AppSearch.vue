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
    <div class="search-container">
        <label for="research-input">Type your request</label>
        <input type="text" name="research-input" id="research-input" v-model="researchString">
        <button @click="makeResearch">Search</button>
    </div>
</template>

<style scoped>
</style>