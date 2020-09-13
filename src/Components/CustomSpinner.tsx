import React from 'react';
import { Spinner } from "reactstrap";

const CustomSpinner = () => {
    return (
        <Spinner 
            color="#f4e9cd" 
            style={{width: '6rem', height: '6rem', color:'#031926'}}
            type='grow'
        ></Spinner>
    )
}

export default CustomSpinner;