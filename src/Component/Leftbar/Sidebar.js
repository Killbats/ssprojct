import React from 'react';
import worry from '../../dummyimg/worry.png';
import './sidebar.css';
import {People, GroupWork, Event, Announcement} from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sideWrap">
                <ul className="sideList">
                    <li className="sideListItem">
                        <a href=""> 
                        <img src={worry} className="imghead sideIcon"/>
                        <span style={{fontSize: "20px"}}>Leanne Graham</span>
                        </a>
                    </li>

                    <li className="sideListItem">
                        <a href=""> 
                        <People className="sideIcon"/>
                        <span style={{fontSize: "20px"}}>Friends</span>
                        </a>
                    </li>

                    <li className="sideListItem">
                        <a href=""> 
                        <GroupWork className="sideIcon"/>
                        <span style={{fontSize: "20px"}}>Group</span>
                        </a>
                    </li>

                    <li className="sideListItem">
                        <a href=""> 
                        <Event className="sideIcon"/>
                        <span style={{fontSize: "20px"}}>Events</span>
                        </a>
                    </li>

                    <li className="sideListItem">
                        <a href=""> 
                        <Announcement className="sideIcon"/>
                        <span style={{fontSize: "20px"}}>News</span>
                        </a>
                    </li>
                </ul>
                <button className="sideBtn">Show More</button>
            </div>
        </div>
    )
}
