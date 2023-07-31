/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarCantYFecha(clientAPI) {
    try {
        let oInpCantidad = clientAPI.evaluateTargetPath('#Page:CrearProducto/#Control:InpCantidadDisponible'),
        oDpFechaCompra = clientAPI.evaluateTargetPath('#Page:CrearProducto/#Control:DpFechaCompra');

        let cantidadValida = oInpCantidad.getValue() && Number(oInpCantidad.getValue()) > 0;

        if (cantidadValida) {
            let fechaValida = oDpFechaCompra.getValue() && oDpFechaCompra.getValue() !== undefined;
            if (fechaValida) {
                clientAPI.executeAction('/Proveedores/Actions/CRUD/CrearProducto.action');

            } else {
                clientAPI.executeAction('/Proveedores/Actions/CRUD/ErrorValidarFecha.action');
            }
        } else {
            clientAPI.executeAction('/Proveedores/Actions/CRUD/ErrorValidarCantidad.action');
        }
    } catch (error) {
        alert(error);
    }
}
