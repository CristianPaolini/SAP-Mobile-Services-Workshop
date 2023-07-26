/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function RefreshListaProveedores(clientAPI) {
    try {
        if (clientAPI) {
            if (clientAPI.getControls()) {
                var controls = clientAPI.getControls();
                for (var i = 0; i < controls.length; i++) {
                    controls[i].redraw();
                }
            }
        }
    } catch (error) {
        alert(error)
    }
}
