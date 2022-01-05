import { Menu } from "primereact/menu";
import { addLocale } from 'primereact/api';
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from "primereact/datatable";
import { Calendar } from 'primereact/calendar';
import { Column } from "primereact/column";

export function TabelaPersonalizada ({title,Colunas,paginator,templateBodyTable,rows}) {

    return(
        <>
            <div div className="card card-w-title" style={{paddingBottom:'5px'}}>
                <div className="card" >
                    <div>
                        <DataTable value={'products'} className="p-datatable-customers" rows={rows} dataKey="id" rowHover header={title}
                            paginator={paginator} paginatorTemplate={templateBodyTable} stripedRows responsiveLayout="scroll"
                        >
                            {Colunas}
                        </DataTable>
                    </div>
                </div>
            </div>
        </>
    )
}