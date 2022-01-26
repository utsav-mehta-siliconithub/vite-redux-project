import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    reset, getAllFlights
} from "../redux/actions/index";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Counter = (props) => {

    useEffect(() => {
        if (props) {
            props.selectFlight()
        }
    }, [props.visible]);
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>

            <h3>count is: {counter}</h3>
            <p>
                <button type="button"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button type="button"
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>
                <button type="button"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </p>
        </div>
    )
}
function mapStateToProps(state) {
    const { list_data } = state.crudReducer;
    return {
        list_data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectFlight: getAllFlights }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);