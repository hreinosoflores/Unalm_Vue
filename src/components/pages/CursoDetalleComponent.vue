<template>
    <div class="bg-white p-4 shadow rounded">
        <h1 class="rojo">Detalles del Curso</h1>

        <hr />

        <div class="btn-group d-flex">
            <router-link
                class="btn btn-primary"
                :to="{ name: 'curso-save', params: { id: $route.params.id } }"
            >
                Editar Información
            </router-link>

            <button
                type="button"
                class="btn btn-danger"
                v-on:click="deleteCurso(curso.id)"
            >
                Eliminar Curso
            </button>
        </div>

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

        <router-link
            class="btn btn-lg btn-block btn-outline-primary"
            :to="{ name: 'curso-save', params: { id: $route.params.id } }"
        >
            Regresar
        </router-link>
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
                    document.title = Global.title + this.curso.nombre;
                } else {
                    console.log(res.status);
                }
            });
        },
        formatFecha(date) {
            return FormatFecha(date);
        },
        deleteCurso(id) {
            var aceptado = window.confirm("¿Desea eliminar este curso?");
            if (aceptado) {
                axios.delete(Global.url + Global.urlCursos + id).then((res) => {
                    if (res.status == 200 || res.status == 204) {
                        alert("El curso fue eliminado con éxito.");
                        this.$router.push("/");
                    } else {
                        console.log(res.status);
                    }
                });
            }
        },
    },
    mounted() {
        //recuperamos el parametro pasado mediante la url con $route
        var id = this.$route.params.id;
        this.getCurso(id);
    },
};
</script>