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


export default function Nova_onda (props) {

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

  const [IsPainel, setIsPainel] = useState(true)
  const [InputArea, setInputArea] = useState('')

    console.log(InputArea)

  useEffect(() => {
    const fetchitemsDash = async () => {
      try {
        const { data } = await Axios.get("http://20.0.0.187:5000/api");

      setItemsDash(data);
      } catch (error) {
        console.log("ERROR DASHBOARD",error)
      }
    };
    fetchitemsDash();
  }, []);


  const citySelectItems = [
    {label: 'Selecione o Depositante', value: '0'},
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
                <h5 >PEDIDOS A ENTRAR NA ONDA</h5>
            </div>
        </div>
    </div>
);

  const colunasTabela = [
    {field: 'pedido', header: 'check box'},
    {field: 'pedido', header: 'Nº Pedido'},
    {field: 'depositante', header: 'Depositante	'},
    {field: 'data', header: 'Data'},
    {field: 'hora', header: 'Hora'}
  ]

  const TrataColunas = colunasTabela.map((col,i) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  return (
    <div style={{overflowX: 'hidden',overflowY:'hidden'}}>
      <MyHead title="Gerar Onda de Produção" />
        <NovaTopBar title="Gerar Onda de Produção" icons="pi-bars"/>
          
          <div  style={{marginTop:'70px',marginLeft:'10px',marginRight:'10px'}}>

            {/* CARDS */}
            <div style={{}}>
              <div className="p-grid dashboard">
                <CardPersonalizado 
                  hexCor={'#4CAF50'} 
                  icons={<MdOutlineApps size={TamanhoIcon} />}
                  title={'Notas a Produzir'}
                  value={itemsDash.produzir}
                  isButton={false}
                  altura={'130px'}
                />

                <CardPersonalizado 
                  hexCor={'#FFC107'} 
                  icons={<BiSelectMultiple size={70} />}
                  title={'Pedidos Selecionados'}
                  value={itemsDash.produzir}
                  isButton={false}
                  altura={'130px'}
                />
              </div>
            </div>
            {/* CARDS */}

            {/* INPUT DE DADOS */}
            <div className="card card-w-title" style={{marginTop:"8px"}}>
                <div className="p-grid dashboard"  >
                    <Dropdown 
                        value={'city'} 
                        options={citySelectItems} 
                        onChange={(e) => console.log(e.value)} 
                        placeholder="Selecione o Depositante"
                    />
                    &emsp;

                    <Dropdown 
                        value={'city'} 
                        options={citySelectItems} 
                        onChange={(e) => console.log(e.value)} 
                        placeholder="Selecione a Transportadora"
                    />
                    &emsp;

                    <Dropdown 
                        value={'city'} 
                        options={citySelectItems} 
                        onChange={(e) => console.log(e.value)} 
                        placeholder="Selecione a Linha"
                    />
                    &emsp;

                    <span className="p-float-label">
                        <InputText autoFocus />
                      <label htmlFor="name">Quantidade</label>
                    </span>

                    

                    <div style={{height:'35px', marginTop:'2px'}}>
                        &emsp;
                        <Button label="Pesquisar" icon="pi pi-check" iconPos="right" />
                        &emsp;
                        <Button label="Limpar" icon="pi pi-times" iconPos="right" style={{backgroundColor:'#FF0000'}} />

                        &emsp;
                        <Button label="Montar onda" icon="pi pi-check" iconPos="right" style={{backgroundColor:"#4CAF50"}} />
                    </div>
                </div>
            </div>
            {/* INPUT DE DADOS */}

            {/* CONTROLA FILTROS */}
            <div className="card" style={{marginTop:"-15px"}} >
                <Fieldset legend="Filtros" toggleable collapsed={IsPainel} onToggle={(e) => setIsPainel(e.value)}>
                  <div className="p-field">
                      <span className="p-float-label">
                        <InputTextarea id="textarea"  className="p-inputtextarea" rows={5} cols={30} value={InputArea} onChange={(e) => setInputArea(e.target.value)}/>
                      <label htmlFor="textarea">Insira aqui um ou mais Nº de Pedidos</label>
                    </span>
                  </div>
                </Fieldset>
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
};

