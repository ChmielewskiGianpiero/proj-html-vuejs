<script>

export default  {
    props: {
        contactsProps: {
            type: Object,
            required: true
        },
        menu: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <nav class="app-nav">
        <div class="container-md">
            <div class="row app-nav-contacts">
                <div class="app-nav-address gap">
                    <font-awesome-icon icon="location-dot" class="nav-icon"/>
                    <a href="#"> {{ contactsProps.address }} </a>
                </div>
                <div class="app-nav-info">
                    <div class="phone-contact gap">
                        <font-awesome-icon icon="phone" class="nav-icon"/>
                        <a href="#">Call now {{ contactsProps.phoneNumber }}</a>
                    </div>
                    <button class="btn-nav">Donate</button>
                </div>
            </div>
            <div class="row app-nav-menu">
                <img src="/public/mt-2236-home-logo.png" alt="">
                <ul class="gap">
                    <li class="menu-item" v-for="(link,i) in menu" :key="i">
                        <a :href="link.href"> {{ link.text }} </a> 
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;



.app-nav-contacts{
    font-size: 12px;

    .app-nav-address:hover,
    .phone-contact:hover{
        color: $secondary_color;
    }
}

.app-nav-menu{
    margin: 15px 0px;

    li:hover{
        color: $secondary_color;
    }
}

.app-nav{
    background-color: $dark_grey;
    padding: 10px;
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

.gap{
    gap: 15px;
}

</style>