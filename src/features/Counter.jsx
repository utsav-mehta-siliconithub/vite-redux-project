import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    reset
} from "../redux/actions/index";
import { connect } from 'react-redux';

const Counter = (props) => {

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


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getList: getList }, dispatch);
// }
export default connect(null, null)(Counter);