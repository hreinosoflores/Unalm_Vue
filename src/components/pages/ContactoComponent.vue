<template>
    <div class="bg-white p-4 shadow rounded">
        <b-form
            novalidate
            id="contactForm"
            name="contactForm"
            @submit.prevent="sendMessage"
        >
            <h1 class="rojo">Escríbanos para mayor información</h1>
            <hr />
            <h5>(*) Campos obligatorios</h5>
            <br />
            <b-form-group>
                <b-form-input
                    id="nombres"
                    type="text"
                    placeholder="* Nombres..."
                    class="shadow-sm"
                    name="nombres"
                    v-model="$v.mensaje.nombres.$model"
                    maxLength="255"
                    :state="
                        $v.mensaje.nombres.$dirty
                            ? !$v.mensaje.nombres.$invalid
                            : null
                    "
                ></b-form-input>
                <small
                    class="text-danger"
                    v-if="
                        $v.mensaje.nombres.$dirty &&
                        !$v.mensaje.nombres.required
                    "
                >
                    Nombre obligatorio
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.mensaje.nombres.$dirty &&
                        !$v.mensaje.nombres.maxLength
                    "
                >
                    Nombre demasiado largo
                </small>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="apellidos"
                    type="text"
                    placeholder="* Apellidos..."
                    class="shadow-sm"
                    name="apellidos"
                    v-model="$v.mensaje.apellidos.$model"
                    maxLength="255"
                    :state="
                        $v.mensaje.apellidos.$dirty
                            ? !$v.mensaje.apellidos.$invalid
                            : null
                    "
                ></b-form-input>
                <small
                    class="text-danger"
                    v-if="
                        $v.mensaje.apellidos.$dirty &&
                        !$v.mensaje.apellidos.required
                    "
                >
                    Apellido obligatorio
                </small>
                <small
                    class="text-danger"
                    v-else-if="
                        $v.mensaje.apellidos.$dirty &&
                        !$v.mensaje.apellidos.maxLength
                    "
                >
                    Apellido demasiado largo
                </small>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="email"
                    type="text"
                    placeholder="E-mail..."
                    class="shadow-sm"
                    name="email"
                    v-model="mensaje.email"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="telefono"
                    type="text"
                    placeholder="Teléfono..."
                    class="shadow-sm"
                    name="telefono"
                    v-model="mensaje.telefono"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-textarea
                    id="comentarios"
                    placeholder="* Comentarios..."
                    class="shadow-sm"
                    name="comentarios"
                    rows="10"
                    v-model="$v.mensaje.comentarios.$model"
                    :state="
                        $v.mensaje.comentarios.$dirty
                            ? !$v.mensaje.comentarios.$invalid
                            : null
                    "
                ></b-form-textarea>
                <small
                    class="text-danger"
                    v-if="
                        $v.mensaje.comentarios.$dirty &&
                        !$v.mensaje.comentarios.required
                    "
                >
                    Insertar Comentario.
                </small>
            </b-form-group>

            <b-button class="btn-lg btn-block" type="submit" variant="primary">
                Enviar Comentarios
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
import { required, maxLength } from "vuelidate/lib/validators";

export default {
    name: "ContactoComponent",
    data() {
        return {
            mensaje: {
                nombres: "",
                apellidos: "",
                email: "",
                telefono: "",
                comentarios: "",
                createdAt: undefined,
                updatedAt: undefined,
            },
        };
    },
    methods: {
        sendMessage() {
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

            this.mensaje.createdAt = new Date();
            this.mensaje.updatedAt = new Date();

            axios
                .post(Global.url + Global.urlBandeja, this.mensaje, config)
                .then((res) => {
                    if (res.status == 200 || res.status == 201) {
                        document.contactForm.reset();
                        console.log(res.data);
                        alert("Se enviaron los comentarios.");
                        this.$router.push("/");
                    } else {
                        console.log(res.status);
                    }
                })
                .catch((exception) => {
                    console.log(exception);
                });
        },
    },
    mounted() {
        document.title = Global.title + "Contáctenos";
    },
    validations: {
        mensaje: {
            nombres: {
                required,
                maxLength: maxLength(255),
            },
            apellidos: {
                required,
                maxLength: maxLength(255),
            },
            comentarios: {
                required,
            },
        },
    },
};
</script>