import { useEffect, useRef, useState } from "react";
import { ReqResListado, usuarios } from "../Interfaces/reqRes";
import { reqResapi } from "../Api/reqRes";


export const useUsuarios = () => {
    const [usuarios, setusuarios] = useState<usuarios[]>([])
     const paginaref = useRef(1)
    useEffect(() => {
      
    Cargarusuarios();
     
    }, [])
    const Cargarusuarios=async()=>{
        const resp =await  reqResapi<ReqResListado>('/users', {
          params:{
            page: paginaref.current
          }
        })
        if(resp.data.data.length>0){
            setusuarios(resp.data.data);
            
        }else{
          alert('no hay mas registros')
        }
        
      }  
      const PaginaAnterior=()=>{
        if(paginaref.current>0){
           paginaref.current--;
           Cargarusuarios();
        }

      }
      const PaginaSiguiente=()=>{
        paginaref.current ++;
        Cargarusuarios();

      }
  return {
    usuarios,
    Cargarusuarios,
    PaginaSiguiente,
    PaginaAnterior
    
  }
}