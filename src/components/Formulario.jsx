import {useState, useEffect} from 'react'

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    
        <p className="text-lg m-5 text-center">
            Añade pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5">
            <div className="m-5">
                <label htmlFor="mascota" className="block text-gray-700 font-bold">Nombre Mascota</label>
                <input id="mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" ></input>
            </div>

            <div className="m-5">
                <label htmlFor="propietario" className="block text-gray-700 font-bold">Nombre Propietario</label>
                <input id="propietario" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" ></input>
            </div>

            <div className="m-5">
                <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
                <input id="email" type="email" placeholder="example@mail.com" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" ></input>
            </div>

            <div className="m-5">
                <label htmlFor="alta" className="block text-gray-700 font-bold">Fecha de alta</label>
                <input id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" ></input>
            </div>

            <div className="m-5">
                <label htmlFor="sintomas" className="block text-gray-700 font-bold">Síntomas</label>
                <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describa los síntomas"></textarea>
            </div>

            <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-all" value="Agregar paciente"></input>

        </form>
    </div>
  )
}

export default Formulario
