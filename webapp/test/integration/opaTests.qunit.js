/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"northwind1/Northwind1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});