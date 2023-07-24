{
	"_Name": "Proveedores",
	"Version": "/Proveedores/Globals/AppDefinition_Version.global",
	"MainPage": "/Proveedores/Pages/Main.page",
	"OnLaunch": [
		"/Proveedores/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/Proveedores/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/Proveedores/Actions/Service/InitializeOnline.action",
	"Styles": "/Proveedores/Styles/Styles.less",
	"Localization": "/Proveedores/i18n/i18n.properties",
	"_SchemaVersion": "23.4"
}