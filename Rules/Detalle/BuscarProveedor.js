/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function BuscarProveedor(clientAPI) {
    try {
        let pageProxy = clientAPI.getPageProxy();
        let oNombreProv = clientAPI.evaluateTargetPath('#Page:BuscarProveedor/#Control:InpNombreProvBusq/#Value');
        if (!oNombreProv) {
            clientAPI.executeAction('/Proveedores/Actions/Detalle/NoIngresoNombre.action');
            return;
        }
        oNombreProv = oNombreProv.toString().trim();
        // oNombreProv = String(oNombreProv);
        //hacer un read desde una regla
        pageProxy.showActivityIndicator("Buscando Proveedor...");
        clientAPI.read("/Proveedores/Services/PROVEEDORES.service", "ProveedorSet", [], `$filter=Nombre eq '${oNombreProv}'`).then(function (oData) {
            pageProxy.dismissActivityIndicator();
            if (oData.getItem(0)) {
                //binding
                pageProxy.setActionBinding(oData.getItem(0)); // bindear objeto actual a la vista
                let oClientData = pageProxy.getClientData();
                oClientData.IdProveedor = oData.getItem(0).IdProveedor; // si bien puedo usar el .Datos, también puedo asignar una por una
                oClientData.Nombre = oData.getItem(0).Nombre;
                oClientData.Direccion = oData.getItem(0).Direccion;
                oClientData.Telefono = oData.getItem(0).Telefono;
                oClientData.Email = oData.getItem(0).Email;
                oClientData.Datos = oData.getItem(0); // esto es válido, pero algo como lo del comentario de debajo no es posible: 
                pageProxy.redraw();                  // oClientData = {Nombre: "Name", Direccion: "Address 123", etc.}
                // clientAPI.executeAction('/Proveedores/Actions/Detalle/NavToDetalle.action');
            } else {
                clientAPI.executeAction('/Proveedores/Actions/Detalle/ProveedorNoExiste.action');
            }
        }).catch(function (error) {
            pageProxy.dismissActivityIndicator();
            alert(error);
        });
    } catch (error) {
        alert(error)
    }
}
