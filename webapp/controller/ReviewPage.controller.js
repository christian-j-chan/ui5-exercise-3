sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";


        return Controller.extend("com.training.day3demo.controller.ReviewPage", {
            onInit: function () {
                // Get the router object
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouteReviewPage").attachPatternMatched(this._onObjectMatched, this);
            },


            _onObjectMatched: function (oEvent) {
                // Get the passed value from arguments
                var aArgs = oEvent.getParameter("arguments");
                // Display the first name value from previous page
                MessageToast.show(aArgs.firstName);
            }
        });
    });
