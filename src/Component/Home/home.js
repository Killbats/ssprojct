import '../../CSS/HeaderApp.css';
import Sidebar from '../Sidebar/sidebar';
import Feeds from '../Feeds/feeds';
import Rightbar from '../Rightbar/rightbar';
import './home.css';

export default function home(){
    return(
        <div className="layoutSetting">
            <div>
                <header className="headerMain">
                    <div className="headerTxt">SS Media</div>
                </header>
            </div>
        <div className="layotContainer">
        <Sidebar/>
        <Feeds/>
        <Rightbar/>
        </div>
        </div>
    )
}