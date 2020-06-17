<template>
    <div class='nav'>
        <div class='nav-leftside'>
            <img src='@/assets/logo.png' />
            <h1>Focust</h1>
            <router-link to="/">
                <p>Notifications Control</p>
            </router-link>
            <router-link to="/">
                <p>My Account</p>
            </router-link>
            <router-link to="/">
                <p>FAQ</p>
            </router-link>
            <router-link to="/">
                <p>Contact</p>
            </router-link>
        </div>
        <div class='nav-rightside'>
            <p>My Profile</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import './animate';

.nav {
    height: 62px;
    width: 100%;
    box-shadow: #d4d4d4 0px 0px 15px 0px;;
    background: #fff;
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    z-index: 1;

    &-leftside {
        display: flex;
        align-items: center;
        padding-left: 8px;

        img {
            height: 30px;
            margin-bottom: 4px;
            margin-right: 5px;
        }

        h1 {
            margin-right: 10px;
            font-size: 25px;
        }

        a {
            text-decoration: unset;
        }
        p {
            margin-right: 3px;
            transition: .3s;
            font-size: 15px;
            margin-top: 18px;
            margin-right: 10px;
            margin-left: 10px; 
            font-weight: bold; 
            text-decoration: unset;
            color: #434040;
        }

        p:hover {
            color: #0cd49a;
            cursor: pointer;
        }

    }

    &-rightside {
        float: right;
        margin-right: 20px;
        background: linear-gradient(75deg, #1d93c6, #0cd49a);
        padding: 5px;
        color: white;
        border-radius: 15px;
        height: 30px;
        display: flex;
        align-items: center;
        border: solid 1px #cecece;
        transition: .9s;

        p {
            padding: 5px;
        }

    }

    &-rightside:hover {
        box-shadow: #1d93c6 0px 0px 8px 0px;
        cursor: pointer;
    }
}
</style>