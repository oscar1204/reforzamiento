
import {  usuarios } from "../Interfaces/reqRes"
import { useUsuarios } from "../hooks/useUsuarios"


export const Usuarios = () => {
    const {usuarios,PaginaAnterior,PaginaSiguiente}= useUsuarios();

    const renderItem=({id,first_name,last_name,avatar,email}:usuarios)=>{
          return(
            <tr key={id.toString()}>
              <td>
                <img src={avatar} alt={first_name} 
                style={{
                  width:35,
                  borderRadius: 100
                }}
                />
              </td>
              <td>{first_name} {last_name}</td>
              <td>{email}</td>
            </tr>
          )
    }
  return (
    <>
    <h3>Usuarios</h3>
    <table className="table">
        <thead> 
            <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
              usuarios.map(renderItem)
            }
        </tbody>
    </table>
    <button className="btn btn-primary" 
    onClick={PaginaSiguiente}>
      Siguiente
    </button>
    &nbsp;
    <button className="btn btn-success" 
    onClick={PaginaAnterior}>
      Anterior
    </button>
    

    </>
  )
}
