
import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import { Button } from "primereact/button";

export function CardPersonalizado ({hexCor, icons, title, value, isButton,tabela,altura}) {

    return(
        <>
           <div className="p-col-12 p-md-6 p-lg-3 " style={{height:`${altura}`}}>
                <div className="card overview-box p-d-flex p-flex-column p-pt-2 solid-surface-text-color" style={{backgroundColor:`${hexCor}`,height:'100%'}}>                   
                   <div style={{}}>
                        <div className="p-d-flex p-jc-between p-mt-3 p-flex-wrap">
                            <div className="p-d-flex p-flex-column" style={{ }}>
                                {isButton ? (
                                    <div className="p-d-flex p-ai-center muted-text solid-surface-text-color" style={{marginTop:'30%'}}>
                                        {icons}
                                    </div>
                                ): (
                                    <div className="p-d-flex p-ai-center muted-text solid-surface-text-color" style={{marginTop:'4%'}}>
                                        {icons}
                                    </div>
                                )}
                            </div>
                            <div className=" p-ai-end "  style={{textAlign:'end'}}>
                                {isButton ? 
                                    (
                                    <div style={{fontSize:'20px',marginTop:'-10px'}} >
                                        <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text p-button-plain solid-surface-text-color" 
                                            onClick={(event) => console.log('menu1.current.toggle(event)',event)}/>
                                    </div>
                                    )
                                    :   null
                                }
                                {isButton ? (
                                    <>
                                        <span className="p-mb-1 fs-xlarge">{title}</span>
                                        <h2>{value}</h2>
                                    </>
                                ): (
                                   <>
                                        <h4 style={{fontSize:'120%'}}>{title}</h4>
                                        <h2 style={{fontSize:'250%', paddingBottom:'10px'}} >{value}</h2>
                                   </>
                                )}

                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}

