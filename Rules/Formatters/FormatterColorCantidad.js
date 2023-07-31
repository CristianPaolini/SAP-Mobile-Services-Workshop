/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterColorCantidad(clientAPI) {
    const oData = clientAPI.binding,
        cantidad = oData.CantDisponible;
    let sColor;
    if (cantidad && Number(cantidad) >= 100) {
        sColor = "Green";
    } else if (cantidad && Number(cantidad) >= 50) {
        sColor = "Mango";
    } else {
        sColor = "Red";
    }

    return sColor;
}
