import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
const AgGridWrapper = () => {
    const defaultColDef = {
        resizable: true,
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
            suppressAndOrCondition: true,
        },
        floatingFilter: true,
        minWidth: 200,
        flex: 1,
        cellStyle: { textAlign: "center" },
    };
    const columnTypes = {
        actionColumn: {
            cellRenderer: 'ActionRenderer'
        },
    };
    const options = {
        animateRows: true,
        pagination: true,
        paginationPageSize: 50,
    };
    const columnDefs = [
        {
            headerName: "# ID",
            field: "srno",
            filter: "agNumberColumnFilter",
            pinned: "left",
            minWidth: 120,
            width: 120,
        },
        {
            headerName: "Name",
            field: "name",
        },
    ]
    return (
        <AgGridReact
            rowHeight={40}
            headerHeight={40}
            modules={AllModules}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            columnTypes={columnTypes}
            overlayNoRowsTemplate={"No Records Found."}
            // onGridReady={setupGrid}
            gridOptions={options}
        />
    )
}
export default AgGridWrapper;