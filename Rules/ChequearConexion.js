/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ChequearConexion(clientAPI) {
    try {
        //se usa otro modulo nativescript para ver si tiene conexion
        let moduloConexion = clientAPI.nativescript.connectivityModule;
        let type = moduloConexion.getConnectionType();
        // let pageProxy = context.getPageProxy();

        if (type === moduloConexion.connectionType.none) {
            //no está conectado a internet
            clientAPI.executeAction('/Proveedores/Actions/SinConexionAInternet.action');
        } else {
            //sí está conectado
            clientAPI.executeAction('/Proveedores/Actions/ConectadoAInternet.action');
        }

    } catch (error) {
        alert(error);
    }
}
