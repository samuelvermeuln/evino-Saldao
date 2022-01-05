import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import { Axios } from "axios";

import { addLocale } from 'primereact/api';
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from "primereact/inputtext";

import { MdOutlineApps } from 'react-icons/md';
import { BiSelectMultiple } from 'react-icons/bi';


import { CardPersonalizado } from "../components/CardPersonalizado/CardPersonalizado";
import { TabelaPersonalizada } from "../components/TabelaPersonalizada/TabelaPersonalizada";
import { Ripple } from "primereact/ripple";
import { NovaTopBar } from "../components/NovaTopBar";
import MyHead from "../components/MyHead";

export default function ondasGeradas() {

  let TamanhoIcon = 80;
  
  const [itemsDash, setItemsDash] = useState({
    produzir: 0,
    producao: 0,
    produzidos: 0,
    embarque: 0,
    embarcados: 0,
    erp:0,
    intelipost:0,
    unilog:0,
  });

  const [IsPainel, setIsPainel] = useState(false)
  const [InputArea, setInputArea] = useState('')
  const [depositanteSelecionado,setdepositanteSelecionado] = useState('Selecione o Depositante')

  useEffect(async() => {
    try {
      const { data } = await Axios.get("http://20.0.0.187:5000/api");

      setItemsDash(data);
    } catch (error) {
      console.log("ERROR DASHBOARD",error)
    }
  }, []);


  const depositantes = [
    {label: 'CREAMY', value: '1'},
    {label: 'SKELT', value: '2'},
    {label: 'AC BRAZIL', value: '3'},
    {label: 'PRESTIGE', value: '4'},
    {label: 'SALLVE SP', value: '5'},
    {label: 'SALLVE ES', value: '6'},
    {label: 'BEYOUNG ES', value: '7'},
  ];

  addLocale('pt-br', {
    firstDayOfWeek: 1,
    dayNames: ['Domingo', 'Segunda', 'terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dez'],
    today: 'Hoje',
    clear: 'Claro'
  });

  const templateBodyTable = {
    layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport ',
    'PrevPageLink': (options) => {
        return (
            <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                <span className="p-p-3">Anterior</span>
                <Ripple />
            </button>
        )
    },
    'NextPageLink': (options) => {
        return (
            <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                <span className="p-p-3">Proximo</span>
                <Ripple />
            </button>
        )
    },
    'CurrentPageReport': (options) => {
        return (
           <></>
        )
    }
};

  const custonHeader = (
    <div className="table-header">
       <div style={{width:'102%',marginLeft:'-10px'}}>
            <div className="headTable">
                <h5 >Ondas Geradas</h5>
            </div>
        </div>
    </div>
);

  const colunasTabela = [
    {field: 'cConda', header: 'Codigo Onda'},
    {field: 'ondaERP', header: 'Nº Onda ERP'},
    {field: 'data', header: 'Data	'},
    {field: 'linha', header: 'Linha de Produção'},
    {field: 'transportadora', header: 'Transportadora'},
    {field: 'situacao', header: 'Situação'},
    {field: 'acao', header: 'Ações'},

  ]

  const TrataColunas = colunasTabela.map((col,i) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  return (
    <div style={{overflowX: 'hidden',overflowY:'hidden'}}>
      <MyHead title="Ondas Geradas" />
        <NovaTopBar title="Ondas Geradas" icons="pi-bars"/>
          
          <div  style={{marginTop:'100px',marginLeft:'10px',marginRight:'10px'}}>

            {/* CONTROLA FILTROS */}
            <div className="card" style={{marginTop:"-15px"}} >

                <h2>Ondas Geradas</h2>

                <div className="card" style={{}}>
                    <Fieldset legend="Filtros" toggleable collapsed={IsPainel} onToggle={(e) => setIsPainel(e.value)}>

                      <div className="p-field">
                          <span className="p-float-label">
                            <Dropdown 
                                id="dropdown"
                                value={depositanteSelecionado} 
                                options={depositantes} 
                                onChange={(e) => setdepositanteSelecionado(e.value)} 
                                placeholder="Selecione o Depositante"
                                optionLabel="label" optionValue="value"
                            />
                        </span>
                      </div>

                      <div style={{marginTop:'50px'}}>
                        <span className="p-float-label">
                            <InputText autoFocus />
                          <label htmlFor="name">Código Onda</label>
                        </span>

                        <span className="p-float-label" style={{marginTop:'30px'}}>
                            <InputText autoFocus />
                          <label htmlFor="name">nº Onda ERP</label>
                        </span>
                      </div>

                      <div style={{marginTop:'40px'}}>
                          <Button className="p-button-raised" label="Filtrar" icon="pi pi-check" iconPos="right" />
                          &emsp;
                          <Button className="p-button-raised p-button-danger" label="Limpar" icon="pi pi-times" iconPos="right"  />
                      </div>
                    </Fieldset>
                </div>
            </div>
            {/* CONTROLA FILTROS */}

            {/* CONTROLA APARECE/ESCONDE DATA TABLE */}
              <div style={{marginTop:'-15px'}}>
              {
                    true ? (
                        <TabelaPersonalizada
                            title={custonHeader}
                            Colunas={TrataColunas}
                            paginator={true}
                            templateBodyTable={templateBodyTable}
                            rows={5}
                        />
                    ) : null
                }
              </div>
            {/* CONTROLA APARECE/ESCONDE DATA TABLE */}

          </div>
    </div>
  );
}