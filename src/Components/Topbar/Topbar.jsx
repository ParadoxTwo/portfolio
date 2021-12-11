import { Mail, Person } from '@material-ui/icons'
import './topbar.scss'

export default function Topbar({menuOpened, toggleMenu}) {
    return (
        <div className={"topbar "+(menuOpened && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#introduction" className='logo'>Croso</a>
                    <div className="itemContainer">
                        <Person/>
                        <span>+61 491 187 911</span>
                    </div>
                    <div className="itemContainer">
                        <Mail/>
                        <span>winbro2.ej@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="sandwich" onClick={()=>toggleMenu(!menuOpened)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
