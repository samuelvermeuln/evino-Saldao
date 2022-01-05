import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Timeline } from "primereact/timeline";
import { Menu } from "primereact/menu";
import classNames from "classnames";

export const TimeLime = () => {
  
    const menu7 = useRef(null);

    const timelineEvents = [
      {
        status: "Compra",
        date: "15/10/2020 10:30",
        icon: "pi pi-shopping-cart",
        color: "#E91E63",
        description: "Chevalier Lacassan Rosé",
      },
      {
        status: "Processando pagamento",
        date: "15/10/2020 14:00",
        icon: "pi pi-cog",
        color: "#FB8C00",
        description: "Pagamento realizado com Cartão",
      },
      {
        status: "Pagamento Aprovado",
        date: "15/10/2020 16:15",
        icon: "pi pi-compass",
        color: "#673AB7",
        description: "Numero da compra id=3878",
      },
      {
        status: "Entregue",
        date: "16/10/2020 10:00",
        icon: "pi pi-check-square",
        color: "#0097A7",
        description: "Entregue a Samuel",
      },
    ];
    const content = (item) => {
      return (
        <div>
          <Card className="p-mb-3" title={item.status} subTitle={item.date}>
            <p>{item.description}</p>
          </Card>
        </div>
      );
    };
    const marker = (item) => {
        return (
        <span
            className="custom-marker p-shadow-2 p-p-2"
            style={{ backgroundColor: item.color }}
        >
            <i className={classNames("marker-icon", item.icon)}></i>
        </span>
        );
    };

    return (
      <div className="p-grid dashboard" style={{ width: "46rem" }}>
        <div style={{ width: "50rem", marginLeft: "18px" }}>
          <div className="p-col-12 p-lg-6">
            <div className="card card-w-title">
              <div>
                <Timeline
                  value={timelineEvents}
                  align="left"
                  className="customized-timeline"
                  marker={marker}
                  content={content}
                  style={{ width: "100px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
