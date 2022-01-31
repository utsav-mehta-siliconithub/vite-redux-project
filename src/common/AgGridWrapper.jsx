import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
function AgGridWrapper(props) {
    const { list_data, colDefs } = props;


    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowHeight={40}
                headerHeight={40}
                defaultColDef={{ sortable: true, filter: true, flex: 1, floatingFilter: true }}
                pagination={true}
                rowData={list_data}
                gridOptions={{
                    paginationPageSize: 20,
                }}
                columnDefs={colDefs}
            >
            </AgGridReact>
        </div>
    )
};

export default AgGridWrapper;