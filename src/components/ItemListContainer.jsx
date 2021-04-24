import React, { Fragment } from 'react'

const ItemListContainer = (props) => {
    console.log(props)
    return ( 
        <Fragment>
            <h2>Hola {props.usuario}! Bienvenido a mi sitio web!</h2>
        </Fragment>
    );

}

export default ItemListContainer;