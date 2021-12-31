import React from "react";

export default ({ isShow }) => {
    if (!isShow) return false;
    return <>Loading....</>
}