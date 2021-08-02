<template>
    <div>
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h1 class="amarillo">Nuestros Cursos</h1>
            <router-link class="btn btn-info" to="/curso/save/0">
                Registrar Nuevo Curso
            </router-link>
        </div>

        <div v-if="cursos.length > 0">
            <div class="list-group">
                <router-link
                    v-for="curso in cursosXpagina"
                    :key="curso.id"
                    class="
                        bg-white
                        border-0
                        mb-3
                        shadow-sm
                        rounded
                        list-group-item list-group-item-action
                    "
                    :to="{
                        name: 'curso-detalle',
                        params: { id: curso.id },
                    }"
                >
                    <strong class="rojo d-block">
                        {{ curso.codigo + " | " + curso.nombre }}
                    </strong>
                    <small class="text-secondary d-block">
                        {{
                            "Última modificación: " +
                            formatFecha(curso.updatedAt)
                        }}
                    </small>
                </router-link>
            </div>

            <b-pagination
                class="text-secondary bg-light shadow-sm p-2"
                v-model="currentPage"
                :total-rows="cursos.length"
                :per-page="perPage"
                aria-controls="lista"
                align="center"
            ></b-pagination>
        </div>

        <div v-else>
            <b-list-group-item
                class="bg-white border-0 mb-3 shadow-sm rounded text-dark"
            >
                No se han cargado ningun curso en nuestro sistema
            </b-list-group-item>
        </div>
    </div>
</template>

<script>
import { Global } from "../../util/Global";
import axios from "axios";
import FormatFecha from "../../util/FormatFecha";

export default {
    name: "CursoListaComponent",
    data() {
        return {
            perPage: 4,
            currentPage: 1,
            cursos: [],
            get cursosXpagina() {
                return this.cursos.slice(
                    (this.currentPage - 1) * this.perPage,
                    this.currentPage * this.perPage
                );
            },
        };
    },
    methods: {
        getCursos() {
            axios.get(Global.url + Global.urlCursos).then((res) => {
                if (res.status == 200 || res.status == 201) {
                    this.cursos = res.data.sort((a, b) => {
                        let da = new Date(a.updatedAt),
                            db = new Date(b.updatedAt);
                        if (da === db) return 0;
                        if (da > db) return -1;
                        else return 1;
                    });
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
        this.getCursos();
        document.title = Global.title + "Nuestros Cursos";
    },
};
</script>