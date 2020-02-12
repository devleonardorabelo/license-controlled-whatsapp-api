import React from 'react'
import { Link } from 'react-router-dom'

function Info(props) {
	return(
		<div className="info">
          <h1 className="spotlight">{props.newMessages}</h1>
          <h3>novas mensagens</h3>
          <div className="reports">
            <div className="reports-container">
              <h4 className="title">STATUS</h4>
              <div className="click single">
                <div>
                  <h5>HOJE</h5>
                  <h1>{props.today}</h1>    
                </div>
              </div>
              <div className="click double">
                <div>
                  <h5>ESTA SEMANA</h5>
                  <h4>{props.week}</h4>    
                </div>
                <div>
                  <h5>ESTE MÊS</h5>
                  <h4>{props.month}</h4>    
                </div>
              </div>
            </div>
            <div className="buttons">
              <a href="/contacts" className="button-contacts">Meus Clientes</a>
              <Link to="/contacts" className="button-add"></Link>
            </div>
          </div>
        </div>
	)
}

export default Info