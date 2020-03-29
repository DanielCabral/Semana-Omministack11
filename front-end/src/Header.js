import React from 'react';

//props são os parametos recebidos. Ex.: id, class, name, etc.
//export default function Header(props){
//desestruturar props
export default function Header({children}){
    return (
        <header>
            <h1>{children}</h1>
        </header>       
    );
}