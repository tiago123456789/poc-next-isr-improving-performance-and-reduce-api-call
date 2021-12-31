import React from "react"

export default ({ isNotFound }) => {
    if (!isNotFound) return false;

    return (
        <>Event don't available!!!!</>
    )
}