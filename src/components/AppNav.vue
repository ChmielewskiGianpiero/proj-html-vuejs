<script>


export default  {
    props: {
        
    },
    data (){
      return {
    }
    },
    methods:{

    },
    created (){
      
    }
}
</script>

<template>
    <nav class="app-nav">
        <div class="container-md">
            <div class="row">
                <div class="app-nav-address gap">
                    <font-awesome-icon icon="location-dot" class="nav-icon"/>
                    <span>  </span>
                </div>
                <div class="app-nav-info">
                    <div class="phone-contact gap">
                        <font-awesome-icon icon="phone" class="nav-icon"/>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <button class="btn-nav">Donate</button>
                </div>
            </div>
            <div class="row">
                <div>logo</div>
                <div>menu</div>
            </div>
        </div>
        
    </nav>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.app-nav{
    background-color: $dark_grey;
    padding: 20px;
    color: $primary_color;
    font-size: 15px;
}

.nav-icon{
    color: $secondary_color;
}

.btn-nav{
    font-weight: bold;
    font-size: 17px;
    background-color: $primary_color;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 55px;
}


.app-nav-info{
    display: flex;
    gap: 110px;
}

.row{
    justify-content: space-between;
}

.app-nav-info,
.row{
    align-items: center;
}
</style>