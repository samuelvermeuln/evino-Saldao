import React, { useEffect, useState } from "react";
import classNames from 'classnames';

import { addLocale } from "primereact/api";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Column } from "primereact/column";
import { InputTextarea } from "primereact/inputtextarea";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
// import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";

import { ModalPersonalizado } from "../Modal/Modal";
import { CardPersonalizado } from "../CardPersonalizado/CardPersonalizado";
import MyHead from "../MyHead";
import { TimeLime } from './../TimeLine/TimeLine';
import TableCards from './../TableCards/TableCards';



export function Homer () {  

    

return (
  <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
    <MyHead title="(EVINO) - Saldão" />
    {/* CARDS */}
    <div style={{ marginTop: "-5vh", marginLeft: "-16%" }}>
      <img
        className="p-text-center"
        src="https://evino-res.cloudinary.com/image/upload/f_auto,w_1280,dpr_1.0,t_banner/v1601325999/campaigns/2020/ICs_genericas/Kits/campaign_banner.jpg"
        alt="unilog-logo"
        style={{ display: "block", width: "84%" }}
      />
    </div>
    {/* CARDS */}

    {/* INPUT DE DADOS */}
    <div
      className="card card-w-title"
      style={{ marginTop: "8px", marginLeft: "18px" }}
    >
      <div className="p-grid dashboard">
        <div className="p-col-12 p-md-4">
          <div className="p-inputgroup">
            <InputText placeholder="Buscar Vinhos" />
            <Button icon="pi pi-search" className="p-button-success" />
          </div>
        </div>
      </div>
    </div>
    {/* INPUT DE DADOS */}
    <div
      className=""
      style={{display:'flex',marginLeft: "0px" }}
    >
            <TimeLime />
            <TableCards/>
    </div>
  </div>
);
}