<template>
    <div class="bg-white p-4 shadow rounded">
        <h2 class="rojo">Detalles del Curso</h2>

        <hr />

        <b-button-group class="d-flex">
            <b-button variant="primary" :to="{ name: 'curso-save', params: { id: curso.id } }">Editar Información</b-button>
            <b-button variant="danger">Eliminar Curso</b-button>
        </b-button-group>

        <br />

        <strong class="text-secondary">Creado a las:</strong>
        <p class="text-secondary">{{ formatFecha(curso.createdAt) }}</p>

        <strong class="text-secondary">Última modificación a las: </strong>
        <p class="text-secondary">{{ formatFecha(curso.updatedAt) }}</p>

        <strong class="text-secondary">Código</strong>
        <p class="text-secondary">{{ curso.codigo }}</p>

        <strong class="text-secondary">Nombre</strong>
        <p class="text-secondary">{{ curso.nombre }}</p>

        <strong class="text-secondary">Créditos</strong>
        <p class="text-secondary">{{ curso.creditos }}</p>

        <strong class="text-secondary">Horas de teoría</strong>
        <p class="text-secondary">{{ curso.horasTeoria }}</p>

        <strong class="text-secondary">Horas de práctica</strong>
        <p class="text-secondary">{{ curso.horasPractica }}</p>

        <strong class="text-secondary">Sumilla</strong>
        <p class="text-secondary">{{ curso.sumilla }}</p>

        <b-button class="btn-lg btn-block" to="/" variant="outline-primary">
            Regresar
        </b-button>
    </div>
</template>

<script>
import { Global } from "../../util/Global";
import axios from "axios";
import FormatFecha from "../../util/FormatFecha";

export default {
    name: "CursoDetalleComponent",
    data() {
        return {
            curso: {},
        };
    },
    methods: {
        getCurso(id) {
            axios.get(Global.url + Global.urlCursos + id).then((res) => {
                if (res.status == 200 || res.status == 201) {
                    this.curso = res.data;
                } else {
                    console.log(res.status);
                }
            });
        },
        formatFecha(date) {
            return FormatFecha(date);
        },
    },
    mounted() {
        //recuperamos el parametro pasado mediante la url con $route
        var id = this.$route.params.id;
        this.getCurso(id);
    },
};
</script>