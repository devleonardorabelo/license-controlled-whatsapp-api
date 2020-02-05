import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Panel() {

  const [user, setUser] = useState()  
  
  useEffect(() => {

    async function getPanel() {
      const response = await axios.get('http://localhost:21068/panel', { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })

      setUser(response.data.user.username)
    
    }
    getPanel()
    
  }, [])

  

	return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default Panel