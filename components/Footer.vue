<template>
    <div class="footer-wrapper">
        <div class="socials">
            <a href="https://www.linkedin.com/in/finnpaes/" rel="nofollow" aria-label="Bekijk mijn LinkedIn pagina" target="_blank"><Icons-LinkedIn width="40" height="40" /></a>
            <a href="https://github.com/finnpaes" rel="nofollow" aria-label="Bekijk mijn GitHub pagina" target="_blank"><Icons-Github width="40" height="40" /></a>
        </div>

        <p>Finn Paes &copy; {{ new Date().getFullYear() }} - KVK: 84498862</p>
    </div>
</template>

<style scoped>
.footer-wrapper {
    width: 1380px;
    padding: 30px 15px;
    background-color: var(--white);
    border-radius: 10px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    margin: auto;
    margin-bottom: 20px;
}

.socials {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 20px;
}

.socials a {
    text-decoration: none;
}

.footer-wrapper p {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    opacity: .8;
    margin-top: 20px;
    color: var(--dark);
}

@media only screen and (max-width: 1440px) {
    .footer-wrapper {
        width: calc(100% - 40px);
    }
}
</style>