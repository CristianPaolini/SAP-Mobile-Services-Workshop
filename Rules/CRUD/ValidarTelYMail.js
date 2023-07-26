/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarTelYMail(clientAPI) {
    try {
        let oTelefono = clientAPI.evaluateTargetPath('#Page:CrearProveedor/#Control:InpTelefono/#Value'),
            oEmail = clientAPI.evaluateTargetPath('#Page:CrearProveedor/#Control:InpEmailProv/#Value');
        const regexCelular = /^(15|11)\d{8}$/,
            regexTelefono = /^(011)?\d{8}$/;

            let telefonoValido = (oTelefono && (oTelefono.match(regexCelular) || oTelefono.match(regexTelefono)));

        if (telefonoValido) {
            // Teléfono válido, ahora validar email
            const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            let emailValido = oEmail && oEmail.match(regexEmail);

            if (emailValido) {
                // Teléfono y email son válidos, ejecutar acción para crear proveedor
                clientAPI.executeAction('/Proveedores/Actions/CRUD/CrearProveedor.action');
            } else {
                clientAPI.executeAction('/Proveedores/Actions/CRUD/ErrorValidarEmail.action');
                // alert("El email ingresado no es válido.");
            }
        } else {
            // alert("El teléfono ingresado no es válido.");
            clientAPI.executeAction('/Proveedores/Actions/CRUD/ErrorValidarTelefono.action');
        }
    } catch (error) {
        alert(error);
    }

}
