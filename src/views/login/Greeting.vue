<template>
    <div class='home'>
        <div class='home-LeftContent'>
            <h1>
                Control Notifications, Get Shit Done!
            </h1>
            <h2>Notifications:</h2>
            <div class='home-LeftContent-btn animated bounceInLeft'>
                <div class="home-row">
                    <router-link to="/phones" class="home-nav-btn">
                        <i class="material-icons icon-image-preview">phone</i>
                        <p>Phone</p>
                    </router-link>
                    <router-link to="/calendar" class="home-nav-btn">
                        <i class="material-icons icon-image-preview">contacts</i>
                        <p>Calendar</p>
                    </router-link>
                    <router-link to="/communications" class="home-nav-btn">
                        <i class="material-icons icon-image-preview">comment</i>
                        <p>Communications Software</p>
                    </router-link>
                </div>
                <div class="home-row">
                    <router-link to="/email" class="home-nav-btn">
                        <i class="material-icons icon-image-preview">email</i>
                        <p>Email</p>
                    </router-link>
                <div class="home-nav-btn">
                    <i class="material-icons icon-image-preview">live_help</i>
                    <p>Help</p>
                </div>
                <div class="home-nav-btn">
                    <i class="material-icons icon-image-preview">phone_disabled</i>
                    <p>Change Information</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {    
    height: auto;
    background-size: cover;
    padding-right: 15%;
    padding-left: 10%;
    padding-bottom: 10%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    box-shadow: #e6e6e6 0px 0px 13px 0px;

    &-row {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 25px;
    }
    &-nav {
        &-btn {
            height: 180px;
            width: 30%;
            box-shadow: 0px 0px 3px #cacaca;
            border-radius: 15px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            color: #0cd49a;;
            text-decoration: unset;
            transition: .3s;

            i {
                font-size: 50px;
            }

            p {
                margin: 5px;
                font-size: 18px;
            }

            &:hover {
                box-shadow: 0px 0px 7px grey;
                background: #0cd49a;
                color: white;
                cursor: pointer;

                i {
                    color: white;
                }
            }
        }
    }
    &-LeftContent {
        height: 88%;
        width: 95%;
        padding-top: 40px;
        display: flex;
        flex-flow: column;
        align-items: center;
        h1 {
            color: #0cd49a;
        }
        h2 {
            color: #7d7d7d;
        }

        &-btn {
            padding: 5px;
            color: black;
            height: auto;
            display: flex;
            align-items: center;
            transition: 0.9s;
            justify-content: space-between;
            flex-flow: column;
            width: 90%;
            p {
                padding: 5px;
            }
        }
    }
}
</style>