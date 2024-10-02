
import { useEffect, useContext, useState} from 'react'
import { AppContext } from "../../../App";
import { useNavigate } from 'react-router-dom';
import { CreateContact } from '../../ContactAPI/ContactAPIs';



export default function CreateContactsForm() {
    const { formData, setFormData, contacts, setContacts } = useContext(AppContext)
    const navigate = useNavigate()


    const handleChange = (event) => {
        const {name, value, type} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //setFormData(formData)
        //setContacts([...contacts, formData])
        CreateContact(formData)
        resetForm()

        navigate("/contacts")

    }

    const resetForm = () => {
        setFormData(formData)
    }
    return (
        <>
        <form className="CreateContactsForm" onSubmit={handleSubmit}>
            <h4>New Contact</h4>
            <h3>Enter your first name: </h3>
            <input type="text" name="firstName" onChange={handleChange} value ={formData.firstName}></input>

            <h3>Enter your last name: </h3>
            <input type="text" name="lastName" onChange={handleChange} value ={formData.lastName}></input>

            <h3>Enter your city: </h3>
            <input type="text" name="city" onChange={handleChange} value ={formData.city}></input>

            <h3>Enter your address: </h3>
            <input type="text" name="street" onChange={handleChange} value ={formData.street}></input>
            <h3> </h3>
            <input className="form_submit" type="submit" value="Add Contact!"></input>
        </form>
        </>
    )
}