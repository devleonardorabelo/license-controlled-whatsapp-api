import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Contacts(){

    const [ contacts, setContacts ] = useState()
    const [ customers, setCustomers] = useState([])
    const header = ["Name,Given Name,Additional Name,Family Name,Yomi Name,Given Name Yomi,Additional Name Yomi,Family Name Yomi,Name Prefix,Name Suffix,Initials,Nickname,Short Name,Maiden Name,Birthday,Gender,Location,Billing Information,Directory Server,Mileage,Occupation,Hobby,Sensitivity,Priority,Subject,Notes,Language,Photo,Group Membership,Phone 1 - Type,Phone 1 - Value,Phone 2 - Type,Phone 2 - Value,Organization 1 - Type,Organization 1 - Name,Organization 1 - Yomi Name,Organization 1 - Title,Organization 1 - Department,Organization 1 - Symbol,Organization 1 - Location,Organization 1 - Job Description"]


    useEffect(() => {

        async function loadContacts(){

            const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/panel/contacts`, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
            setContacts(response.data.encContacts)
            setCustomers(response.data.customers)

        }

        loadContacts()

            
    }, [])
    
    console.log(contacts)


    return (
        <div>
            <a href={contacts} download="mydata.csv">Baixar</a>
            <ul>
                {customers.map(customer => (
                    <li key={customer._id}>
                        <p>{customer.name}</p>
                        <p>{customer.whatsapp}</p>
                    </li>
                ))}
            </ul>
            <a href="https://contacts.google.com">aa</a>
        </div>
    )
}

export default Contacts