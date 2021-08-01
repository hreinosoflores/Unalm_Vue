<template>
    <div>
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2 class="amarillo">Nuestros Cursos</h2>
            <b-button variant="info" to="/curso/save/0">
                Registrar Nuevo Curso
            </b-button>
        </div>

        <div>
            <b-list-group v-for="curso in cursos" :key="curso.id">
                <b-list-group-item
                    class="bg-white border-0 mb-3 shadow-sm rounded"
                    :to="{ name: 'curso-detalle', params: { id: curso.id } }"
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
                </b-list-group-item>
            </b-list-group>
            <div id="paginacion"></div>
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
            cursos: [],
        };
    },
    methods: {
        getCursos() {
            axios.get(Global.url + Global.urlCursos).then((res) => {
                if (res.status == 200 || res.status == 201) {
                    this.cursos = res.data;
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
    }
};
</script>