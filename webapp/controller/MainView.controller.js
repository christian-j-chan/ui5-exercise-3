sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

(Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.training.exer3chan.controller.MainView", {
        onInit() {
        },

        onAddItem: function (){
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var sSelectedText = oEvent.getParameter("selectedItem").getProperty("text");
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");

            var oCCLabel = this.getView().byId("idLblCC");
            var oCCInput = this.getView().byId("idInputCC");

            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var MOPMsg = oTextBundle.getText("MOPMsg");

            if (sSelectedKey === "GCASH"){
                // show the mobile field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
            } else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
            }

            if (sSelectedKey === "CC"){
                // show the CC field
                oCCLabel.setVisible(true);
                oCCInput.setVisible(true);
            } else {
                oCCLabel.setVisible(false);
                oCCInput.setVisible(false);
            }

            let mop = sSelectedText + " " + MOPMsg;

            this.fnDisplayMsg(mop);
        },


        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onPressCheckout: function (){
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();

            // Check if first name is blank
            if (oInputFNameValue === "" && oInputLNameValue === ""){ //if both are blank.
                sap.m.MessageToast.show("Required Fields are blank."); 
            } else if (oInputFNameValue === "" || oInputLNameValue === ""){ //if either first name or last name is blank
                sap.m.MessageToast.show("Required Field is blank"); 
            } 
        },

    });
});