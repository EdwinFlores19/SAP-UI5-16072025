sap.ui.define([
"sap/ui/core/mvc/Controller"
], function (Controller) {
"use strict";

return Controller.extend("com.logaligroup.controller.App", {

        /**
         * onInit es un hook del ciclo de vida que se llama cuando se instancia la vista.
         * En este caso, el controlador de la vista raíz no necesita lógica inicial,
         * ya que su única función es servir de contenedor para las demás vistas.
         * La lógica principal estará en los controladores de las vistas específicas.
         */
        onInit: function () {
            // Este controlador está intencionalmente vacío por ahora.
        }
});
});
