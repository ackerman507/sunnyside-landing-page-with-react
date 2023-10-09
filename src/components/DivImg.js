import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
export default function DivImg(props) {
    return (
        <img src={props.url} className={`img-fluid p-0 z-2 ${props.class}`} alt="" />
    );
}
