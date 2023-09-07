import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente}) => {

    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")
    const [error, setError] = useState(false)

    const generarId =() => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString()

        return random + fecha
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        // Validacion formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log("Hay al menos un campo vacío")
            setError(true)
        }else{
            console.log("Todos llenos")
            setError(false)

            const objetoPaciente = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
                id: generarId()
            }
            setPacientes([...pacientes, objetoPaciente])

            // Reinicio form

            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')

        }

    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3">
            
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        
            <p className="text-lg m-5 text-center">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5">
                
                {error && <Error mensaje ="Todos los campos son obligatorios"/>}
                <div className="m-5">
                    <label htmlFor="mascota" className="block text-gray-700 font-bold">Nombre Mascota</label>
                    <input 
                        id="mascota" type="text" 
                        placeholder="Nombre de la mascota" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value ={nombre}
                        onChange={(e) => setNombre(e.target.value)}>
                    </input>
                </div>

                <div className="m-5">
                    <label htmlFor="propietario" className="block text-gray-700 font-bold">Nombre Propietario</label>
                    <input id="propietario" type="text" 
                    placeholder="Nombre del propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value ={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    >
                    </input>
                </div>

                <div className="m-5">
                    <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
                    <input id="email" type="email" 
                    placeholder="example@mail.com" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value ={email}
                    onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>
                </div>

                <div className="m-5">
                    <label htmlFor="alta" className="block text-gray-700 font-bold">Fecha de alta</label>
                    <input id="alta" type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value ={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    >
                    </input>
                </div>

                <div className="m-5">
                    <label htmlFor="sintomas" className="block text-gray-700 font-bold">Síntomas</label>
                    <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    placeholder="Describa los síntomas"
                    value ={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                    >
                    </textarea>
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-all" value="Agregar paciente"></input>

            </form>
        </div>
    )
}

export default Formulario
