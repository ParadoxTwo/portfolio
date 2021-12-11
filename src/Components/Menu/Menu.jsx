import './menu.scss'

export default function Menu({menuOpened, toggleMenu}) {
    const items = ['Introduction', 'Portfolio', 'Projects', 'Testimonials', 'Contacts']
    return (
        <div className={"menu "+(menuOpened && "active")}>
            <ul>
                {items.map((item,i)=>
                    <li key={i}>
                        <a onClick={()=>toggleMenu(!menuOpened)} href={"#"+item.toLowerCase()}>{item}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}
