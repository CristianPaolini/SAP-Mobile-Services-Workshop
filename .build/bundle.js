(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/Proveedores/i18n/i18n.properties":
/*!************************************************************!*\
  !*** ./build.definitions/Proveedores/i18n/i18n.properties ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/Proveedores/Rules/AppUpdateFailure.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/Proveedores/Rules/AppUpdateFailure.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/Proveedores/Actions/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/Proveedores/Rules/AppUpdateSuccess.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/Proveedores/Rules/AppUpdateSuccess.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/Proveedores/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/Proveedores/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/Proveedores/Rules/Formatters/FormatterColorEstado.js":
/*!********************************************************************************!*\
  !*** ./build.definitions/Proveedores/Rules/Formatters/FormatterColorEstado.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormatterColorEstado)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function FormatterColorEstado(clientAPI) {
  const oData = clientAPI.binding,
    baja = oData.Baja;
  let sColor = "";
  !baja ? sColor = "Green" : sColor = "Red";
  return sColor;
}

/***/ }),

/***/ "./build.definitions/Proveedores/Rules/Formatters/FormatterTextEstado.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/Proveedores/Rules/Formatters/FormatterTextEstado.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormatterTextEstado)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function FormatterTextEstado(clientAPI) {
  const oData = clientAPI.binding,
    baja = oData.Baja;
  let sText = "";
  !baja ? sText = "Activo" : sText = "Inactivo";
  return sText;
}

/***/ }),

/***/ "./build.definitions/Proveedores/Rules/OnWillUpdate.js":
/*!*************************************************************!*\
  !*** ./build.definitions/Proveedores/Rules/OnWillUpdate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/Proveedores/Actions/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/Proveedores/Rules/ResetAppSettingsAndLogout.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/Proveedores/Rules/ResetAppSettingsAndLogout.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
function ResetAppSettingsAndLogout(context) {
  let logger = context.getLogger();
  let platform = context.nativescript.platformModule;
  let appSettings = context.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = context.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return context.getPageProxy().executeAction('/Proveedores/Actions/Logout.action');
  }
}

/***/ }),

/***/ "./build.definitions/Proveedores/Styles/Styles.css":
/*!*********************************************************!*\
  !*** ./build.definitions/Proveedores/Styles/Styles.css ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/Proveedores/Styles/Styles.less":
/*!**********************************************************!*\
  !*** ./build.definitions/Proveedores/Styles/Styles.less ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/Proveedores/Styles/Styles.nss":
/*!*********************************************************!*\
  !*** ./build.definitions/Proveedores/Styles/Styles.nss ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!********************************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.7.0/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./build.definitions/Proveedores/Pages/Inicio.page":
/*!*********************************************************!*\
  !*** ./build.definitions/Proveedores/Pages/Inicio.page ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.Image","_Name":"SectionImage0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Image":"/Proveedores/Images/Fondo.jpg","Alignment":"Center","ContentMode":"ScaleAspectFit"}]}],"_Type":"Page","_Name":"Inicio","Caption":"Inicio","PrefersLargeCaption":true,"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"ToolbarItem","Enabled":true,"Visible":true,"Clickable":true,"Style":""}]}}

/***/ }),

/***/ "./build.definitions/Proveedores/Pages/ListaProveedores.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/Proveedores/Pages/ListaProveedores.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/Proveedores/Services/PROVEEDORES.service","EntitySet":"ProveedorSet","QueryOptions":"$orderby=Nombre"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"Proveedor: {Nombre}","Subhead":"Email: {Email}","Footnote":"Teléfono: {Telefono}","Description":"Description","DisplayDescriptionInMobile":true,"StatusText":"Status","SubstatusText":"Substatus","PreserveIconStackSpacing":false,"AccessoryType":"none","ProgressIndicator":"inProgress","Tags":[{"Color":"Red","Text":"/Proveedores/Rules/Formatters/FormatterTextEstado.js"}],"AvatarStack":{"Avatars":[{"Image":"sap-icon://customer","ImageText":""}],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[{"Image":"sap-icon://customer","ImageText":""}],"ImageIsCircular":true},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ListaProveedores","Caption":"ListaProveedores","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Proveedores/Pages/Main.page":
/*!*******************************************************!*\
  !*** ./build.definitions/Proveedores/Pages/Main.page ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Header":{"Headline":"Proveedores","SubHeadline":"Gestión de Proveedores y Productos","Alignment":"left","IconIsCircular":false,"DisableIconText":false},"Sections":[{"_Name":"SideDrawerSection0","Items":[{"Title":"Inicio","Image":"sap-icon://home","PageToOpen":"/Proveedores/Pages/Inicio.page","_Name":"SideDrawerSection0Item0","Visible":true,"TextAlignment":"left","Styles":{}},{"Title":"Proveedores","Image":"sap-icon://supplier","PageToOpen":"/Proveedores/Pages/ListaProveedores.page","_Name":"SideDrawerSection0Item1","Visible":true,"TextAlignment":"left","Styles":{}}],"Visible":true,"PreserveImageSpacing":true,"SeparatorEnabled":true}],"_Type":"Control.Type.SideDrawer","_Name":"SideDrawer0","AlwaysShowDrawerButton":false,"ClearHistory":false}],"_Type":"Page","_Name":"Main","Caption":"Main"}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"Proveedores","Version":"/Proveedores/Globals/AppDefinition_Version.global","MainPage":"/Proveedores/Pages/Main.page","OnLaunch":["/Proveedores/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/Proveedores/Rules/OnWillUpdate.js","OnDidUpdate":"/Proveedores/Actions/Service/InitializeOnline.action","Styles":"/Proveedores/Styles/Styles.less","Localization":"/Proveedores/i18n/i18n.properties","_SchemaVersion":"23.4","StyleSheets":{"Styles":{"css":"/Proveedores/Styles/Styles.css","ios":"/Proveedores/Styles/Styles.nss","android":"/Proveedores/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/AppUpdate.action":
/*!****************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/AppUpdate.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/Proveedores/Rules/AppUpdateFailure.js","OnSuccess":"/Proveedores/Rules/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/AppUpdateFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/AppUpdateFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/AppUpdateProgressBanner.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/AppUpdateProgressBanner.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/Proveedores/Actions/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/AppUpdateSuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/AppUpdateSuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/ClosePage.action":
/*!****************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/ClosePage.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/Logout.action":
/*!*************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/Logout.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"SkipReset":false,"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/LogoutMessage.action":
/*!********************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/LogoutMessage.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"No","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","OKCaption":"Yes","OnOK":"/Proveedores/Rules/ResetAppSettingsAndLogout.js","Title":"Logout","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/OnWillUpdate.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/OnWillUpdate.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/Service/InitializeOnline.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/Service/InitializeOnline.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/Proveedores/Services/PROVEEDORES.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/Proveedores/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/Proveedores/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/Service/InitializeOnlineFailureMessage.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/Proveedores/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/Proveedores/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/Proveedores/Globals/AppDefinition_Version.global":
/*!****************************************************************************!*\
  !*** ./build.definitions/Proveedores/Globals/AppDefinition_Version.global ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/Proveedores/Services/PROVEEDORES.service":
/*!********************************************************************!*\
  !*** ./build.definitions/Proveedores/Services/PROVEEDORES.service ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"PROVEEDORES","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "1.1\n"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let proveedores_actions_appupdate_action = __webpack_require__(/*! ./Proveedores/Actions/AppUpdate.action */ "./build.definitions/Proveedores/Actions/AppUpdate.action")
let proveedores_actions_appupdatefailuremessage_action = __webpack_require__(/*! ./Proveedores/Actions/AppUpdateFailureMessage.action */ "./build.definitions/Proveedores/Actions/AppUpdateFailureMessage.action")
let proveedores_actions_appupdateprogressbanner_action = __webpack_require__(/*! ./Proveedores/Actions/AppUpdateProgressBanner.action */ "./build.definitions/Proveedores/Actions/AppUpdateProgressBanner.action")
let proveedores_actions_appupdatesuccessmessage_action = __webpack_require__(/*! ./Proveedores/Actions/AppUpdateSuccessMessage.action */ "./build.definitions/Proveedores/Actions/AppUpdateSuccessMessage.action")
let proveedores_actions_closepage_action = __webpack_require__(/*! ./Proveedores/Actions/ClosePage.action */ "./build.definitions/Proveedores/Actions/ClosePage.action")
let proveedores_actions_logout_action = __webpack_require__(/*! ./Proveedores/Actions/Logout.action */ "./build.definitions/Proveedores/Actions/Logout.action")
let proveedores_actions_logoutmessage_action = __webpack_require__(/*! ./Proveedores/Actions/LogoutMessage.action */ "./build.definitions/Proveedores/Actions/LogoutMessage.action")
let proveedores_actions_onwillupdate_action = __webpack_require__(/*! ./Proveedores/Actions/OnWillUpdate.action */ "./build.definitions/Proveedores/Actions/OnWillUpdate.action")
let proveedores_actions_service_initializeonline_action = __webpack_require__(/*! ./Proveedores/Actions/Service/InitializeOnline.action */ "./build.definitions/Proveedores/Actions/Service/InitializeOnline.action")
let proveedores_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./Proveedores/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/Proveedores/Actions/Service/InitializeOnlineFailureMessage.action")
let proveedores_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./Proveedores/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/Proveedores/Actions/Service/InitializeOnlineSuccessMessage.action")
let proveedores_globals_appdefinition_version_global = __webpack_require__(/*! ./Proveedores/Globals/AppDefinition_Version.global */ "./build.definitions/Proveedores/Globals/AppDefinition_Version.global")
let proveedores_i18n_i18n_properties = __webpack_require__(/*! ./Proveedores/i18n/i18n.properties */ "./build.definitions/Proveedores/i18n/i18n.properties")
let proveedores_jsconfig_json = __webpack_require__(/*! ./Proveedores/jsconfig.json */ "./build.definitions/Proveedores/jsconfig.json")
let proveedores_pages_inicio_page = __webpack_require__(/*! ./Proveedores/Pages/Inicio.page */ "./build.definitions/Proveedores/Pages/Inicio.page")
let proveedores_pages_listaproveedores_page = __webpack_require__(/*! ./Proveedores/Pages/ListaProveedores.page */ "./build.definitions/Proveedores/Pages/ListaProveedores.page")
let proveedores_pages_main_page = __webpack_require__(/*! ./Proveedores/Pages/Main.page */ "./build.definitions/Proveedores/Pages/Main.page")
let proveedores_rules_appupdatefailure_js = __webpack_require__(/*! ./Proveedores/Rules/AppUpdateFailure.js */ "./build.definitions/Proveedores/Rules/AppUpdateFailure.js")
let proveedores_rules_appupdatesuccess_js = __webpack_require__(/*! ./Proveedores/Rules/AppUpdateSuccess.js */ "./build.definitions/Proveedores/Rules/AppUpdateSuccess.js")
let proveedores_rules_formatters_formattercolorestado_js = __webpack_require__(/*! ./Proveedores/Rules/Formatters/FormatterColorEstado.js */ "./build.definitions/Proveedores/Rules/Formatters/FormatterColorEstado.js")
let proveedores_rules_formatters_formattertextestado_js = __webpack_require__(/*! ./Proveedores/Rules/Formatters/FormatterTextEstado.js */ "./build.definitions/Proveedores/Rules/Formatters/FormatterTextEstado.js")
let proveedores_rules_onwillupdate_js = __webpack_require__(/*! ./Proveedores/Rules/OnWillUpdate.js */ "./build.definitions/Proveedores/Rules/OnWillUpdate.js")
let proveedores_rules_resetappsettingsandlogout_js = __webpack_require__(/*! ./Proveedores/Rules/ResetAppSettingsAndLogout.js */ "./build.definitions/Proveedores/Rules/ResetAppSettingsAndLogout.js")
let proveedores_services_proveedores_service = __webpack_require__(/*! ./Proveedores/Services/PROVEEDORES.service */ "./build.definitions/Proveedores/Services/PROVEEDORES.service")
let proveedores_styles_styles_css = __webpack_require__(/*! ./Proveedores/Styles/Styles.css */ "./build.definitions/Proveedores/Styles/Styles.css")
let proveedores_styles_styles_json = __webpack_require__(/*! ./Proveedores/Styles/Styles.json */ "./build.definitions/Proveedores/Styles/Styles.json")
let proveedores_styles_styles_less = __webpack_require__(/*! ./Proveedores/Styles/Styles.less */ "./build.definitions/Proveedores/Styles/Styles.less")
let proveedores_styles_styles_nss = __webpack_require__(/*! ./Proveedores/Styles/Styles.nss */ "./build.definitions/Proveedores/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	proveedores_actions_appupdate_action : proveedores_actions_appupdate_action,
	proveedores_actions_appupdatefailuremessage_action : proveedores_actions_appupdatefailuremessage_action,
	proveedores_actions_appupdateprogressbanner_action : proveedores_actions_appupdateprogressbanner_action,
	proveedores_actions_appupdatesuccessmessage_action : proveedores_actions_appupdatesuccessmessage_action,
	proveedores_actions_closepage_action : proveedores_actions_closepage_action,
	proveedores_actions_logout_action : proveedores_actions_logout_action,
	proveedores_actions_logoutmessage_action : proveedores_actions_logoutmessage_action,
	proveedores_actions_onwillupdate_action : proveedores_actions_onwillupdate_action,
	proveedores_actions_service_initializeonline_action : proveedores_actions_service_initializeonline_action,
	proveedores_actions_service_initializeonlinefailuremessage_action : proveedores_actions_service_initializeonlinefailuremessage_action,
	proveedores_actions_service_initializeonlinesuccessmessage_action : proveedores_actions_service_initializeonlinesuccessmessage_action,
	proveedores_globals_appdefinition_version_global : proveedores_globals_appdefinition_version_global,
	proveedores_i18n_i18n_properties : proveedores_i18n_i18n_properties,
	proveedores_jsconfig_json : proveedores_jsconfig_json,
	proveedores_pages_inicio_page : proveedores_pages_inicio_page,
	proveedores_pages_listaproveedores_page : proveedores_pages_listaproveedores_page,
	proveedores_pages_main_page : proveedores_pages_main_page,
	proveedores_rules_appupdatefailure_js : proveedores_rules_appupdatefailure_js,
	proveedores_rules_appupdatesuccess_js : proveedores_rules_appupdatesuccess_js,
	proveedores_rules_formatters_formattercolorestado_js : proveedores_rules_formatters_formattercolorestado_js,
	proveedores_rules_formatters_formattertextestado_js : proveedores_rules_formatters_formattertextestado_js,
	proveedores_rules_onwillupdate_js : proveedores_rules_onwillupdate_js,
	proveedores_rules_resetappsettingsandlogout_js : proveedores_rules_resetappsettingsandlogout_js,
	proveedores_services_proveedores_service : proveedores_services_proveedores_service,
	proveedores_styles_styles_css : proveedores_styles_styles_css,
	proveedores_styles_styles_json : proveedores_styles_styles_json,
	proveedores_styles_styles_less : proveedores_styles_styles_less,
	proveedores_styles_styles_nss : proveedores_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/Proveedores/Styles/Styles.json":
/*!**********************************************************!*\
  !*** ./build.definitions/Proveedores/Styles/Styles.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/Proveedores/jsconfig.json":
/*!*****************************************************!*\
  !*** ./build.definitions/Proveedores/jsconfig.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});