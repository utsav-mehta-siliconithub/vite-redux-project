import React, { useEffect } from "react";
import { connect } from "react-redux";
import getPosts from "../apis/crudAPIs";
import AgGridWrapper from "../common/AgGridWrapper";
function ListComponent(props) {
    const { list_data } = props
    useEffect(() => {
        if (!list_data.length) {
            props.getPosts()
        }

    }, []);
    const colDefs = [
        {
            headerName: "# ID",
            field: 'id',
            filter: 'agTextColumnFilter'
        },
        {
            headerName: "Title",
            field: 'title'
        },
    ]
    return (
        <AgGridWrapper list_data={list_data} colDefs={colDefs} />
    )
}

function mapStateToProps(state) {
    const { list_data } = state.crudReducer;
    return {
        list_data
    };
}

export default connect(mapStateToProps, { getPosts })(ListComponent);