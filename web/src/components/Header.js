import React from 'react'

function Header(props){
    return(
        <header className="d-row p-1">
            <div className="container-1">
                <form className="input-box nmf" action="teste" method="post">
                    <input className="input-text" type="text" placeholder="Busque por algo..." />
                    <button className="button-reset" type="reset"></button>
                    <button className="button-search" type="submit"></button>
                </form>
            </div>
        </header>        
    )
}

export default Header