sap.ui.define([], function () {
    "use strict";

    // Este objeto contendrá todas nuestras funciones de formato
    return {

        /**
         * Formatea el estado del stock para cambiar el color del número.
         * @param {string} sStock La cantidad de stock como string.
         * @returns {sap.ui.core.ValueState} El estado para el color (Success, Warning, Error).
         */
        formatStockState: function (sStock) {
            var iStock = parseFloat(sStock);
            if (iStock < 10) {
                return "Error"; // Rojo para stock muy bajo
            } else if (iStock >= 10 && iStock < 50) {
                return "Warning"; // Naranja para stock bajo
            } else {
                return "Success"; // Verde para stock suficiente
            }
        },

        /**
         * Formatea el texto del estado del stock.
         * @param {string} sStock La cantidad de stock como string.
         * @returns {string} El texto descriptivo del estado.
         */
        formatStockStatusText: function(sStock) {
            var iStock = parseFloat(sStock);
            if (iStock < 10) {
                return "Stock Crítico";
            } else if (iStock >= 10 && iStock < 50) {
                return "Bajo Stock";
            } else {
                return "En Stock";
            }
        }
    };
});
