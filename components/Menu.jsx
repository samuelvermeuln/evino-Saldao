import 'primeicons/primeicons.css';
import Link from 'next/link'


export const Menu = () => {
  
  return (
    <div className="menu-wrapper" >
      <div className="layout-menu-container" >
        <div>

        </div>
        <ul role="menu" className="layout-menu">
          <li className="layout-root-menuitem" role="menuitem">
            <a
              data-pr-tooltip="DASHBOARD"
              type="button"
              className="p-ripple tooltip p-link"
            >
              <i className="layout-menuitem-icon pi pi-fw pi-home"></i>
              <span className="layout-menuitem-text">MENU</span>
              <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
              <span className="p-ink"></span>
            </a>
            <div>
              <span
                className="layout-menuitem-text"
                style={{ textTransform: "uppercase" }}
              >
                MENU
              </span>
            </div>
            <ul role="menu" >
              <MenuItem href="/" label="Home" icon="p-menuitem-icon pi pi-home"/>
              <MenuItem href="/Dashboard" label="Dashboard" icon="p-menuitem-icon pi pi-chart-bar" /> 
              <MenuItem href="/" label="Configurações" icon="p-menuitem-icon pi pi-cog"/>
              <MenuItem href="/" label="Sair" icon="p-menuitem-icon pi pi-sign-out"/>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MenuItem = (props) => {
  // console.log("props=>>",props)
  return (
    <li>
      <a href={props.href}>
        <span className={props.icon} style={{padding: '5px'}} ></span>{props.label}
      </a>
    </li>
  );
};

export default Menu;
