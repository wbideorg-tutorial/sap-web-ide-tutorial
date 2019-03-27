sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator,M) {
	"use strict";

	return Controller.extend("northwind1.Northwind1.controller.View1", {
		onInit: function () {

		},
		handleListItemPress: function (evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var selectedProductId = evt.getSource().getBindingContext().getProperty("ProductID");
			oRouter.navTo("detail", {
				productId: selectedProductId
			});

		},
		onChange: function () {
			var cntry = this.getView().byId("combo1").getSelectedItem().getProperty("text");
			var oItemTemplate = new sap.m.StandardListItem({
				title: "{Country}"
			});
			this.getView().byId("list1").unbindItems();
			var vPath = "/Customers";
			var oFilter = new sap.ui.model.Filter({path:"Country",operator:FilterOperator.EQ,value1:cntry});
			var oPath = {path:vPath,filters:oFilter,template:oItemTemplate,templateShareable:false };
			// ?$filter= Country eq '" + cntry + "'"
			this.getView().byId("list1").bindItems(oPath);
		}
	});
});