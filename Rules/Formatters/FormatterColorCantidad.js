/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterColorCantidad(clientAPI) {
    const oData = clientAPI.binding,
        cantidad = oData.CantDisponible;
    let sColor = "Red";
    if (cantidad && Number(cantidad) > 0) {
        sColor = "Green";
    }

    return sColor;
}
