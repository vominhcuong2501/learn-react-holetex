import React, { useId } from "react";

export default function FormUseId() {
    // useId(): giải quyết vấn đề dùng lại cùng component mà không trùng id có thể dùng ở client và server side rendering
    // có thể setup tiển tố cho id ở file index.js
    // const root = createRoot(document.getElementById('root'), {identifierPrefix: "holetex"});
    const id = useId()
    console.log(id);
    return (
        <>
            <h3>FORM</h3>
            <label htmlFor={id}>Name: </label>
            <input type="text" name="name" id={id} />
        </>
    );
}
