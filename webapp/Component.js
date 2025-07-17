sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "./localService/mockserver" // Importamos nuestro mock server
], function (UIComponent, JSONModel, mockserver) {
   "use strict";

   // Este es el componente principal de la aplicación. Es el punto de entrada.
   return UIComponent.extend("com.logaligroup.Component", {

      // Metadatos del componente, aquí definimos el archivo manifest.json
      metadata : {
         manifest: "json"
      },

      /**
       * La función init es llamada automáticamente por el framework cuando se instancia el componente.
       * Aquí inicializamos la aplicación.
       */
      init : function () {
         // 1. Llamamos a la función init del componente padre (UIComponent)
         UIComponent.prototype.init.apply(this, arguments);

         // 2. Inicializamos nuestro mock server para simular la data del backend
         if (window.location.hostname === "localhost") {
         sap.ui.require(["com/logaligroup/localService/mockserver"], function (mockserver) {
            mockserver.init();
   });
}

         // 3. Creamos un modelo para los datos del dispositivo (móvil, tablet, desktop)
         var oDeviceModel = new JSONModel({
            isTouch : sap.ui.Device.support.touch,
            isNoTouch : !sap.ui.Device.support.touch,
            isPhone : sap.ui.Device.system.phone,
            isNoPhone : !sap.ui.Device.system.phone,
            listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
            listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
         });
         this.setModel(oDeviceModel, "device");

         // 4. Inicializamos el router que definimos en el manifest.json
         // El router se encarga de la navegación entre vistas.
         this.getRouter().initialize();
      }
   });
});
