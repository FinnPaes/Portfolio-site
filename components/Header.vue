<template>
    <nav>
        <div class="header-wrapper">
            <div>
                <p>Finn Paes</p>
                <span class="small">Web Developer</span>
            </div>

            <!-- Desktop -->
            <div class="menu-right-desktop">
                <span class="navigator" @click="goTo('skills')">Skills</span>
                <span class="navigator" @click="goTo('projecten')">Projecten</span>
                <span class="navigator" @click="goTo('contact')">Contact</span>
            </div>
        </div>

        <!-- Mobile nav out of flex -->
        <div class="mobile-nav">
            <span class="navigator" @click="goTo('skills')">Skills</span>
            <span class="navigator" @click="goTo('projecten')">Projecten</span>
            <span class="navigator" @click="goTo('contact')">Contact</span>
        </div>
    </nav>
</template>

<style scoped>
nav {
    position: fixed;
    top: 20px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
    z-index: 100;

    width: 1380px;
    padding: 15px;
    background-color: var(--white);
    border-radius: 10px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.header-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}

.header-wrapper p {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: var(--light-blue);
}

.header-wrapper span.small {
    font-weight: 400;
    font-size: .8rem;
    letter-spacing: 1px;
}

.header-wrapper span.navigator {
    text-decoration: none;
    color: var(--dark);
    font-size: 1rem;
    margin: 0px 8px;
    cursor: pointer;
    -webkit-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

.header-wrapper span.navigator:last-of-type {
    margin: 0px 0px 0px 8px!important;
}

.header-wrapper span.navigator:hover {
    color: var(--light-blue);
}

.mobile-nav {
    margin-top: 10px;
    border-top: 1px solid rgb(224, 224, 224, 0.5);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 10px;
    padding-top: 10px;
}

.mobile-nav span {
    cursor: pointer;
}

@media only screen and (max-width: 1440px) {
    nav {
        width: calc(100% - 40px);
    }
}

@media only screen and (min-width: 650px) {
    .menu-right-desktop {
        display: block;
    }
    .mobile-nav {
        display: none;
    }
}

@media only screen and (max-width: 650px) {
    .menu-right-desktop {
        display: none;
    }
    .header-wrapper {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    .header-wrapper p {
        text-align: center;
    }
    .header-wrapper span.small {
        display: none;
    }
}
</style>

<script>
export default {
    methods: {
        goTo(elementID) {
            const element = document.getElementById(elementID);
            let top = element.offsetTop;
            if (window.matchMedia("(max-width: 650px)").matches) {
                top = top - 90;
            }
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
    }
}
</script>