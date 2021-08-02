<template>
    <div class="bg-white p-4 shadow rounded">
        <b-form
            novalidate
            id="saveForm"
            name="saveForm"
            @submit.prevent="submit"
        >
            <h1 class="rojo">{{ formTitle }}</h1>
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
                    v-model="$v.curso.codigo.$model"
                    maxLength="6"
                    :state="
                        $v.curso.codigo.$dirty
                            ? !$v.curso.codigo.$invalid
                            : null
                    "
                ></b-form-input>

                <small
                    class="text-danger"
                    v-if="$v.curso.codigo.$dirty && !$v.curso.codigo.required"
                >
                    El curso necesita un código.
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.curso.codigo.$dirty && !$v.curso.codigo.formatoCodigo
                    "
                >
                    El código ingresado no coincide con el patrón "AA####".
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.curso.codigo.$dirty && !$v.curso.codigo.maxLength
                    "
                >
                    Código demasiado largo.
                </small>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="nombre"
                    type="text"
                    placeholder="* Nombre del curso..."
                    class="shadow-sm"
                    name="nombre"
                    v-model="$v.curso.nombre.$model"
                    maxLength="100"
                    :state="
                        $v.curso.nombre.$dirty
                            ? !$v.curso.nombre.$invalid
                            : null
                    "
                ></b-form-input>
                <small
                    class="text-danger"
                    v-if="$v.curso.nombre.$dirty && !$v.curso.nombre.required"
                >
                    El curso necesita un nombre.
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.curso.nombre.$dirty && !$v.curso.nombre.maxLength
                    "
                >
                    Nombre demasiado largo.
                </small>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="creditos"
                    type="number"
                    placeholder="* Cantidad de créditos..."
                    class="shadow-sm"
                    name="creditos"
                    v-model="$v.curso.creditos.$model"
                    :state="
                        $v.curso.creditos.$dirty
                            ? !$v.curso.creditos.$invalid
                            : null
                    "
                ></b-form-input>

                <small
                    class="text-danger"
                    v-if="
                        $v.curso.creditos.$dirty &&
                        (!$v.curso.creditos.required ||
                            !$v.curso.creditos.integer)
                    "
                >
                    Ingresar un numero entero positivo menor de 4 dígitos.
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.curso.creditos.$dirty && !$v.curso.creditos.minValue
                    "
                >
                    Debe ser mayor que cero.
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.curso.creditos.$dirty && !$v.curso.creditos.maxValue
                    "
                >
                    Debe ser menor de 4 dígitos.
                </small>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="horas_teoria"
                    type="number"
                    placeholder="* Horas de teoría..."
                    class="shadow-sm"
                    name="horas_teoria"
                    v-model="$v.curso.horasTeoria.$model"
                    :state="
                        $v.curso.horasTeoria.$dirty
                            ? !$v.curso.horasTeoria.$invalid
                            : null
                    "
                ></b-form-input>

                <small
                    class="text-danger"
                    v-if="
                        $v.curso.horasTeoria.$dirty &&
                        (!$v.curso.horasTeoria.required ||
                            !$v.curso.horasTeoria.integer)
                    "
                >
                    Ingresar un numero entero positivo menor de 4 dígitos.
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.curso.horasTeoria.$dirty &&
                        !$v.curso.horasTeoria.minValue
                    "
                >
                    Debe ser mayor que cero.
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.curso.horasTeoria.$dirty &&
                        !$v.curso.horasTeoria.maxValue
                    "
                >
                    Debe ser menor de 4 dígitos.
                </small>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="horas_practica"
                    type="number"
                    placeholder="* Horas de práctica..."
                    class="shadow-sm"
                    name="horas_practica"
                    v-model="$v.curso.horasPractica.$model"
                    :state="
                        $v.curso.horasPractica.$dirty
                            ? !$v.curso.horasPractica.$invalid
                            : null
                    "
                ></b-form-input>

                <small
                    class="text-danger"
                    v-if="
                        $v.curso.horasPractica.$dirty &&
                        (!$v.curso.horasPractica.required ||
                            !$v.curso.horasPractica.integer)
                    "
                >
                    Ingresar un numero entero positivo menor de 4 dígitos.
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.curso.horasPractica.$dirty &&
                        !$v.curso.horasPractica.minValue
                    "
                >
                    Debe ser mayor que cero.
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.curso.horasPractica.$dirty &&
                        !$v.curso.horasPractica.maxValue
                    "
                >
                    Debe ser menor de 4 dígitos.
                </small>
            </b-form-group>
            <b-form-group>
                <b-form-textarea
                    id="sumilla"
                    placeholder="* Escriba una sumilla..."
                    class="shadow-sm"
                    name="sumilla"
                    rows="10"
                    v-model="$v.curso.sumilla.$model"
                    :state="
                        $v.curso.sumilla.$dirty
                            ? !$v.curso.sumilla.$invalid
                            : null
                    "
                ></b-form-textarea>
                <small
                    class="text-danger"
                    v-if="$v.curso.sumilla.$dirty && !$v.curso.sumilla.required"
                >
                    El curso necesita una breve sumilla.
                </small>
            </b-form-group>

            <b-button class="btn-lg btn-block" type="submit" variant="primary">
                {{ formButton }}
            </b-button>
  
            <router-link
                class="btn btn-lg btn-block btn-outline-primary"
                to="/"
            >
                Cancelar
            </router-link>
        </b-form>
    </div>
</template>

<script>
import { Global } from "../../util/Global";
import axios from "axios";
import {
    required,
    maxLength,
    minValue,
    maxValue,
    integer,
} from "vuelidate/lib/validators";

const formatoCodigo = (value) => {
    let regex = /^[A-Z]{2}[0-9]{4}$/;
    return regex.test(value);
};

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
            formTitle: "Nuevo Curso",
            formButton: "Registrar",
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
                        alert("El curso fue registrado con éxito.");
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
                        alert("El curso fue modificado con éxito.");
                        this.$router.push("/");
                    } else {
                        console.log(res.status);
                    }
                })
                .catch((exception) => {
                    console.log(exception);
                });
        },

        submit() {
            this.$v.$touch();

            console.log("Invalido? -> " + this.$v.$invalid);

            if (this.$v.$invalid) {
                return false;
            }

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
            this.formTitle = "Editando Curso";
            this.formButton = "Guardar Cambios";
            document.title = Global.title + this.formTitle;
            this.getCurso(id);
        }
        document.title = Global.title + this.formTitle;
    },
    validations: {
        curso: {
            codigo: {
                required,
                formatoCodigo,
                maxLength: maxLength(6),
            },
            nombre: {
                required,
                maxLength: maxLength(100),
            },
            creditos: {
                required,
                integer,
                minValue: minValue(1),
                maxValue: maxValue(9999),
            },
            horasTeoria: {
                required,
                integer,
                minValue: minValue(1),
                maxValue: maxValue(9999),
            },
            horasPractica: {
                required,
                integer,
                minValue: minValue(0),
                maxValue: maxValue(9999),
            },
            sumilla: {
                required,
            },
        },
    },
};
</script>