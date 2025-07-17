sap.ui.define([
   "sap/ui/core/mvc/Controller",
    "../model/formatter" // Importamos nuestro archivo de formateadores
], function (Controller, formatter) {
   "use strict";

   return Controller.extend("com.logaligroup.controller.StockOverview", {
        // Hacemos que el formatter esté disponible en la vista XML
      formatter: formatter,
      /**
        * onInit: Se llama cuando se instancia el controlador.
        */
onInit: function () {
   var oModel = this.getView().getModel();
   if (oModel) {
      oModel.read("/StockSet", {
            success: function (data) {
            console.log("✅ Datos cargados desde /StockSet:", data.results);
            },
            error: function (err) {
            console.error("❌ Error al leer StockSet", err);
            }
   });
   }
}
   });
});
