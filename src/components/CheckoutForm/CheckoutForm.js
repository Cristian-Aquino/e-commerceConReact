import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const usuarioData = {
            nombre, telefono, email
        }

        onConfirm(usuarioData)
    }

    return(
        <div className='container'>
            <form onSubmit={{handleConfirm}} className='form'>
                <h2 className='checkout'>Checkout</h2>
                <div className='label'> 
                    <label className='elemento'>Nombre:</label>
                    <input className='input' type='text' value={nombre} onChange={({ target }) => setNombre(target.value)} />
                </div>
                <div className='label'> 
                    <label className='elemento'>Telefono:</label>
                    <input className='input' type='text' value={telefono} onChange={({ target }) => setTelefono(target.value)} />
                </div>
                <div className='label'> 
                    <label className='elemento'>Email:</label>
                    <input className='input' type='text' value={email} onChange={({ target }) => setEmail(target.value)} />
                </div>
                <div className='label'>
                    <button type='submit' onClick={handleConfirm} className='confirmar'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm