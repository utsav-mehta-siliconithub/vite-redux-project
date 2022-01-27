import React, { useEffect } from "react";
import { connect } from "react-redux";
import getPosts from "../apis/crudAPIs";
import AgGridWrapper from "../common/AgGridWrapper";
function ListComponent(props) {
    useEffect(() => {
        if (!props.list_data.length) {
            props.getPosts()
        }

    }, []);
    return (
        <AgGridWrapper />
    )
}

function mapStateToProps(state) {
    const { list_data } = state.crudReducer;
    return {
        list_data
    };
}

export default connect(mapStateToProps, { getPosts })(ListComponent);