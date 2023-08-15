/* eslint-disable react/prop-types */
import Paciente from "./Paciente";
import imgCat from "../img/cat.png";

// eslint-disable-next-line react/prop-types
const Listado = ({ pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="mt-5 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega un nuevo paciente
          </p>
          <img src={imgCat} alt="Cat" className="h-auto max-w-full" />
        </>
      )}
    </div>
  );
};

export default Listado;
