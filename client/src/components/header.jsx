import "../css/main.css"
function Header(){
    return(
        <div className="header">
            <a href="#" className="logo">Arda Kaya</a>
            <ul className="items">
                <li>
                    <a href="#" className="login">Login</a>
                </li>
            </ul>
        </div>
    )
}

export default Header