<template>
    <div class="d-flex flex-column">
        <CabeceraComponent />
        <main class="container-fluid col-lg-8 mx-auto">
            <router-view></router-view>
        </main>
        <PiePaginaComponent />
    </div>
</template>

<script>
import CabeceraComponent from "./components/shared/CabeceraComponent.vue";
import PiePaginaComponent from "./components/shared/PiePaginaComponent.vue";

export default {
    name: "App",
    components: {
        CabeceraComponent,
        PiePaginaComponent,
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merriweather&display=swap");

// Define variable defaults
$body-bg: #008f5d;
$body-color: #008f5d;
$primary: #008f5d;

// Then import Bootstrap an BootstrapVue SCSS files (order is important)
@import "node_modules/bootstrap/scss/bootstrap.scss";
@import "node_modules/bootstrap-vue/src/index.scss";

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: "Merriweather", serif;

    .amarillo {
        color: #fff400;
    }

    .rojo {
        color: #fe2116;
    }

    main {
        padding: 50px 0;
    }
}

/*X-Large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
    footer {
        font-size: 18px;
    }
}
</style>
