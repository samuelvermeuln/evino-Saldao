import React, { useEffect, useState } from "react";
import Modal from 'react-modal';


export function ModalPersonalizado ({abreModal,fechaModal,itens}) {


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    };
    
    return (
        <>
            <Modal 
                isOpen={abreModal}
                onRequestClose={fechaModal}
                style={customStyles}
            >
                {itens}
            </Modal>
        </>
    )


}