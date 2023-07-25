/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterTextEstado(clientAPI) {
    const oData = clientAPI.binding,
        baja = oData.Baja;
    let sText = "";

    !baja ? sText = "Activo" : sText = "Inactivo";

    return sText;
}
