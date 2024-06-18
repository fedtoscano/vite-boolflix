<script>


export default {
    components:{
    },
data() {
return {  
}
}}
</script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="logo-container">
                <img src="../assets/BrandAssets_Logos_01-Wordmark.jpg" alt="Netflix Main logo">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";

.container{
    margin: 0 auto;
    background-color: rgb(15, 15, 15);
    .header-container{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo-container{
        width: 150px;
        img{
            width: 100%;
        }
    }
}
</style>