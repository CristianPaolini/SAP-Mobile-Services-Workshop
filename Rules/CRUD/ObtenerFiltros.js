import CommonLibrary from './../Libs/Common';

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ObtenerFiltros(clientAPI) {
    try {
        let filterResults = [];

        //sacar filtros de controles
        // let aEstado = clientAPI.evaluateTargetPath('#Page:FiltrosViajes/#Control:ComboEstado').getValue();
        // if(aEstado[0]) {
        //     filterResults.push(CommonLibrary.getQueryFilterEQ(clientAPI, "Estado", `'${aEstado[0].ReturnValue}'`));
        // }

        let sNombre = clientAPI.evaluateTargetPath("#Page:FiltrosProveedores/#Control:FiltroNombreProv").getValue();
        if (sNombre) {
            filterResults.push(CommonLibrary.getQueryFilterEQ(clientAPI, "Nombre", `'${sNombre}'`));
        }

        //traer ordenamiento
        let oOrder = clientAPI.evaluateTargetPath("#Page:FiltrosProveedores/#Control:Sorter").getValue();
        if (oOrder) {
            filterResults.push(oOrder);
        }

        //retornar array de filtros
        return filterResults;
    } catch (error) {
        alert(error);
    }
}
