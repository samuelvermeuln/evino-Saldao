import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaIdCard, FaSearch, FaTruck } from "react-icons/fa";
import {
  MdDashboard,
  MdLibraryAdd,
  MdOutlineAddShoppingCart,
} from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useState } from 'react';
import MyHead from './MyHead';

export const NovoMenu = () => {

    const [isAberto, setAberto] = useState(true);

    function controlaHeadSideMenu () {
      return (
        <>
            {isAberto ? (
              <div style={{display:'block'}}>
              <img 
                src="/profile-bg.png"
                style={{width:'250px',height:'55px'}}
              />
              <div style={{display:'flex'}}>
              <img
                  id="app-logo"
                  src="/icon-allpick.png"
                  alt="ultima-layout"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "25%",
                    marginTop: "-48px",
                  }}
                />
              </div>
              </div>
            ) : (
              <div style={{display:'block'}}>
              <img 
                src="/profile-bg.png"
                style={{width:'250px',height:'55px'}}
              />
              <div style={{display:'flex'}}>
              <img
                  id="app-logo"
                  src="/icon-allpick.png"
                  alt="ultima-layout"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "40%",
                    marginTop: "-48px",
                  }}
                />
              </div>
              </div>
            )}
        </>
       )
    }

    return (
      <>
        <MyHead title="sideBar" />
        <div
          style={{ height: "100vh", margin: "0px 0 0 -238px" }}
          className="novoMenu"
        >
          <ProSidebar collapsed={isAberto} width="238px">

          {controlaHeadSideMenu()}

            <Menu iconShape="square" popperArrow={true}>
              {/* <MenuItem icon={<MdDashboard size="50" />}>Dashboard</MenuItem> */}

              <SubMenu title="Dashboard" icon={<MdDashboard size="30" />}>
                <MenuItem>Dashboard</MenuItem>
              </SubMenu>

              <SubMenu title="Components" icon={<MdLibraryAdd size="30" />}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>

              <SubMenu title="Components" icon={<FaSearch size="30" />}>
                <MenuItem>Component</MenuItem>
              </SubMenu>

              <SubMenu
                title="Components"
                icon={<BsFillCheckSquareFill size="30" />}>
                <MenuItem>Component</MenuItem>
              </SubMenu>

              <SubMenu
                title="Components"
                icon={<MdOutlineAddShoppingCart size="30" />}>
                <MenuItem>Component</MenuItem>
              </SubMenu>

              <SubMenu title="Components" icon={<FaTruck size="30" />}>
                <MenuItem>Component</MenuItem>
              </SubMenu>

              <SubMenu title="Components" icon={<FaIdCard size="30" />}>
                <MenuItem>Component</MenuItem>
              </SubMenu>
            </Menu>
          </ProSidebar>
          ;
        </div>
      </>

    );
}