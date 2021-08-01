<template>
    <div class="bg-white p-4 shadow rounded">
        <b-form id="contactForm">
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
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="apellidos"
                    type="text"
                    placeholder="* Apellidos..."
                    class="shadow-sm"
                    name="apellidos"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="email"
                    type="text"
                    placeholder="E-mail..."
                    class="shadow-sm"
                    name="email"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="telefono"
                    type="text"
                    placeholder="Teléfono..."
                    class="shadow-sm"
                    name="telefono"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-textarea
                    id="comentarios"
                    placeholder="* Comentarios..."
                    class="shadow-sm"
                    name="comentarios"
                    rows="10"
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
export default {
    name: "ContactoComponent",
};
</script>