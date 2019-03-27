/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"northwind1/Northwind1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});