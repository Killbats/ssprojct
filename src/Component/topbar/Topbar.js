import React, {useState} from 'react';
import './topbar.css';
import { Search, Group, Chat, Notifications, Home, Dashboard, ArrowDropDown } from "@material-ui/icons";
import worry from "../../dummyimg/worry.png";
import Dropdown from '@restart/ui/esm/Dropdown';




export default function Topbar() {
    function NavItem(props){
    
        const [open, setOpen] = useState(false);
    
        return(
            <li className="nav-item">
                <a href="#" className="icon-btn" onClick={() => setOpen(!open)}>
                    {props.icon}
                </a>
                {open && props.children}
            </li>
        );
    }

    // function DropdownMenu() {
    //     const [activeMenu, setActiveMenu] = useState('main');
    //     const [menuHeight, setMenuHeight] = useState(null);
    //     const dropdownRef = useRef(null);
      
    //     useEffect(() => {
    //       setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    //     }, [])
    // }
        
    return(
            <div>
                <div className="headerMain">
                    
                    <div className="headerLeft">
                        <span className="logo">SSM</span>
                            <div className="searchbar">
                                <Search className="searchIcon" />
                                <input placeholder="Search for" className="searchCri"/>
                            </div>
                    </div>

                    <div className="headerCenter">                        
                        <Home className="icosize"/>
                        <Dashboard className="icosize"/>
                        <Group className="icosize"/>
                    </div>

                    <div className="headerRight">
                        <div className="imgandname">
                        <img src={worry} className="imghead"/>
                        <div style={{fontSize: "20px"}}>Leanne</div>
                        </div>
                        <Notifications />
                        <Chat />
                            <NavItem className="arwclr" icon={<ArrowDropDown/>}>
                            {/* <DropdownMenu>
                                MyProfile
                            </DropdownMenu> */}

                            </NavItem>
                        
                    </div>

                </div>
            </div>
    )
}