<template>
    <div class="bg-white p-4 shadow rounded">
        <b-form id="saveForm">
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
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="nombre"
                    type="text"
                    placeholder="* Nombre del curso..."
                    class="shadow-sm"
                    name="nombre"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="creditos"
                    type="number"
                    placeholder="* Cantidad de créditos..."
                    class="shadow-sm"
                    name="creditos"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="horas_teoria"
                    type="number"
                    placeholder="* Horas de teoría..."
                    class="shadow-sm"
                    name="horas_teoria"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="horas_practica"
                    type="number"
                    placeholder="* Horas de práctica..."
                    class="shadow-sm"
                    name="horas_practica"
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-textarea
                    id="sumilla"
                    placeholder="* Escriba una sumilla..."
                    class="shadow-sm"
                    name="sumilla"
                    rows="10"
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
export default {
    name: "CursoSaveComponent",
};
</script>