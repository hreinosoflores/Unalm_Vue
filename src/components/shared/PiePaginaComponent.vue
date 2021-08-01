<template>
    <footer
        class="
            bg-white
            fixed-bottom
            text-center text-secondary
            py-3
            px-3
            shadow-sm
        "
    >
        <span>
            Universidad Nacional Agraria La Molina | Todos los derechos
            reservados ® {{ date.getFullYear() }} | Desarrollado en Vue v2.6
            <img src="../../assets/logo.png" width="32" alt="Vue Logo" />
        </span>
    </footer>
</template>

<script>
export default {
    name: "PiePaginaComponent",
    data() {
        return {
            date: new Date(),
        };
    },
};
</script>


