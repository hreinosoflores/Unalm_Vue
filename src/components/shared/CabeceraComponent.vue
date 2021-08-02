<template>
    <div>
        <b-navbar toggleable="lg" variant="white" fixed="top">
            <b-navbar-brand class="text-secondary text-break" id="titulo">
                <router-link to="/" title="Home">
                    <img src="../../assets/unalm-logo.png" alt="unalm logo" />
                </router-link>
                Universidad Nacional Agraria La Molina
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- <b-nav pills class="ml-auto">
                    <b-nav-item
                        to="/"
                        exact-active-class="active"
                        title="Lista de Cursos"
                        >Nuestros Cursos</b-nav-item
                    >
                    <b-nav-item
                        to="/about"
                        exact-active-class="active"
                        title="Acerca de nosotros"
                        >¿Quiénes somos?</b-nav-item
                    >
                    <b-nav-item
                        to="/contactenos"
                        exact-active-class="active"
                        title="Contáctenos!"
                        >Contacto</b-nav-item
                    >
                </b-nav> -->

                <ul class="nav nav-pills ml-auto">
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            to="/"
                            exact
                            active-class="active"
                            title="Lista de Cursos"
                        >
                            Nuestros Cursos
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            to="/about"
                            active-class="active"
                            title="Acerca de nosotros"
                        >
                            ¿Quiénes somos?
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            to="/contactenos"
                            active-class="active"
                            title="Contáctenos!"
                        >
                            Contacto
                        </router-link>
                    </li>
                </ul>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "CabeceraComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-toggler {
    font-size: 12px;
}

nav {
    #titulo {
        font-size: 16px;
    }

    img {
        width: 48px;
        margin-right: 10px;
    }

    .menuActivo {
        color: #fff !important;
        font-weight: 700;
        background-color: #ff0080 !important;
    }
}

/*X-Large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
    nav {
        .nav-link {
            font-size: 18px;
        }

        #titulo {
            font-size: 24px;
        }

        img {
            width: 64px;
        }
    }
}
</style>

