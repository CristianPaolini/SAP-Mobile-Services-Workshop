/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterColorEstado(clientAPI) {
    const oData = clientAPI.binding,
        baja = oData.Baja;
    let sColor = "";

    !baja ? sColor = "Green" : sColor = "Red";

    return sColor;
}
