import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente}) => {
    
    let listado
    if(pacientes.length == 0){
       listado =  "No hay pacientes"
    }

    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-3">
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl m-5 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>



    
            {pacientes.length == 0 ? 
                (<p className="text-xl py-10 mt-60 text-center">
                No hay pacientes
                </p>)
            :
                pacientes.map(paciente=>(
                    <Paciente
                        key = {paciente.id}
                        paciente = {paciente}
                    />
                )
            )
            }
            

        </div>
    )
}

export default ListadoPacientes
