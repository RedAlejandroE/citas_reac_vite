/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import Error from "./Error";

// eslint-disable-next-line react/prop-types
const Formulario = ({pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }

  }, [paciente]);

  const gernerarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = new Date().toString(36)

    return random + fecha;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      //console.log("Todos los campos son obligatorios");

      setError(true);
      return;
    }

    setError(false);

    //Crear objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      alta, 
      sintomas,
    }

    if(paciente.id){
      //Editando registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState );

      setPacientes(pacientesActualizados);
      setPaciente({})
    }else{
      //Nuevo registro
      objetoPaciente.id = gernerarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');

  }

  return (
    <div className=" mx-8 mb-10 md:mb-5 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10 ">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administra</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5">

        {error && <Error>Todos los campos son obligatorios</Error> }

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase">
            Nobre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase">
            Nobre propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}

          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Dirección de correo electrónico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">
            Alta
          </label>
          <input
            id="Alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}

          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
          
        </div>
        
        <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-900 cursor-pointer rounded-md transition-colors duration-1000"
            value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />

      </form>
    </div>
  );
};

export default Formulario;
