import DayNightToggle from 'react-day-and-night-toggle';
import React, { useState } from "react";
import { useThemeContext } from '../provider/Theme';
import { NovoMenu } from './NovoMenu';


export const NovaTopBar = (props) => {
  const { theme } = useThemeContext();

  const [isDarkMode, setIsDarkMode] = useState(theme.mode === "light");

  const Botao = () => {
    return (
      <>
      <button
        type="button"
        className="layout-menu-button p-shadow-6 p-link"
        onClick={()=>""}
        >
       <i className="pi pi-chevron-right"></i>
      </button>
      </>
    )
  }

  return (
    <div
      className="layout-topbar p-shadow-4"
      style={{ backgroundColor: "#19BB9D", height: "80px" }}
    >
      <div className="layout-topbar-right">
        <div className="layout-topbar-actions-left"></div>
        <h2 style={{ color: "#fff" }}>{props.title}</h2>

        <div className="layout-topbar-actions-right">
          <ul className="layout-topbar-items">
            <li className="layout-topbar-item">
              <button className="layout-topbar-action p-d-flex p-dir-row p-jc-center p-ai-center p-px-2 rounded-circle p-link">
                <i className={`pi ${props.icons} fs-xxlarge`}></i>

                {/* <i className="pi ${pi-cog} fs-xxlarge"></i> */}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};