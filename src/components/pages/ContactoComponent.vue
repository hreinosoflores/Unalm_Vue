<template>
    <div class="bg-white p-4 shadow rounded">
        <b-form id="contactForm" name="contactForm" @submit="sendMessage">
            <h2 class="rojo">Escríbanos para mayor información</h2>
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
                    v-model="mensaje.nombres"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="apellidos"
                    type="text"
                    placeholder="* Apellidos..."
                    class="shadow-sm"
                    name="apellidos"
                    v-model="mensaje.apellidos"
                ></b-form-input>
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
                    v-model="mensaje.comentarios"
                ></b-form-textarea>
            </b-form-group>

            <b-button class="btn-lg btn-block" type="submit" variant="primary">
                Enviar Comentarios
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
    name: "ContactoComponent",
    data(){
        return {
            mensaje:{
                nombres: '',
                apellidos: '',
                email: '',
                telefono: '',
                comentarios: '',
                createdAt:undefined,
                updatedAt:undefined

            }
        }
    },
    methods:{
        sendMessage(event){
            event.preventDefault();

            let config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            this.mensaje.createdAt = new Date();
            this.mensaje.updatedAt = new Date();


            axios
                .post(Global.url + Global.urlBandeja,this.mensaje,config)
                .then(res=>{
                    if (res.status == 200 || res.status == 201) {
                        document.contactForm.reset();
                        console.log(res.data);
                        this.$router.push("/");
                    }else{
                        console.log(res.status);
                    }

                })
                .catch(exception => {
                    console.log(exception);
                });
        }
    }
};
</script>