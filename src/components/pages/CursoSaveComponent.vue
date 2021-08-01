<template>
    <div class="bg-white p-4 shadow rounded">
        <b-form id="saveForm" name="saveForm" @submit="submit">
            <h2 class="rojo">Save</h2>
            <hr />
            <h5>(*) Campos obligatorios</h5>
            <br />
            <b-form-group>
                <b-form-input
                    id="codigo"
                    type="text"
                    placeholder="* Código del curso..."
                    class="shadow-sm"
                    name="codigo"
                    v-model="curso.codigo"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="nombre"
                    type="text"
                    placeholder="* Nombre del curso..."
                    class="shadow-sm"
                    name="nombre"
                    v-model="curso.nombre"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="creditos"
                    type="number"
                    placeholder="* Cantidad de créditos..."
                    class="shadow-sm"
                    name="creditos"
                    v-model="curso.creditos"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="horas_teoria"
                    type="number"
                    placeholder="* Horas de teoría..."
                    class="shadow-sm"
                    name="horas_teoria"
                    v-model="curso.horasTeoria"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="horas_practica"
                    type="number"
                    placeholder="* Horas de práctica..."
                    class="shadow-sm"
                    name="horas_practica"
                    v-model="curso.horasPractica"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-textarea
                    id="sumilla"
                    placeholder="* Escriba una sumilla..."
                    class="shadow-sm"
                    name="sumilla"
                    rows="10"
                    v-model="curso.sumilla"
                ></b-form-textarea>
            </b-form-group>

            <b-button class="btn-lg btn-block" type="submit" variant="primary">
                Submit
            </b-button>
            <b-button class="btn-lg btn-block" to="/" variant="outline-primary">
                Cancelar
            </b-button>
        </b-form>
    </div>
</template>

<script>
import { Global } from "../../util/Global";
import axios from "axios";

export default {
    name: "CursoSaveComponent",
    data() {
        return {
            curso: {
                id: 0,
                codigo: "",
                nombre: "",
                creditos: "",
                horasTeoria: "",
                horasPractica: "",
                sumilla: "",
                createdAt: undefined,
                updatedAt: undefined,
            },
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

        addCurso(config) {
            axios
                .post(Global.url + Global.urlCursos, this.curso, config)
                .then((res) => {
                    if (res.status == 200 || res.status == 201) {
                        document.saveForm.reset();
                        console.log(res.data);
                        this.$router.push("/");
                    } else {
                        console.log(res.status);
                    }
                })
                .catch((exception) => {
                    console.log(exception);
                });
        },

        updateCurso(id, config) {
            axios
                .put(Global.url + Global.urlCursos + id, this.curso, config)
                .then((res) => {
                    if (res.status == 200 || res.status == 201) {
                        document.saveForm.reset();
                        console.log(res.data);
                        this.$router.push("/");
                    } else {
                        console.log(res.status);
                    }
                })
                .catch((exception) => {
                    console.log(exception);
                });
        },

        submit(event) {
            event.preventDefault();

            let config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            var id = this.$route.params.id;

            if (id != 0) {
                this.curso.updatedAt = new Date();
                this.updateCurso(id, config);
            } else {
                this.curso.createdAt = new Date();
                this.curso.updatedAt = new Date();
                this.addCurso(config);
            }
        },
    },
    mounted() {
        var id = this.$route.params.id;
        if (id != 0) {
            this.getCurso(id);
        }
    },
};
</script>