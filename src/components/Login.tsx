import {useReducer, useEffect} from 'react'
interface AuthState{
    validando: boolean;
    token: string|null;
    username: string;
    nombre: string
}

const initialState: AuthState={
    validando: true,
    token: null,
    username:'',
    nombre:''

}
type LoginPyload={
    username: string
    nombre: string
}
type AuthAcction =
 |{type:'logaut' }
 |{type:'login', payload:LoginPyload};

 
 
 
const authreducer=(state:AuthState, action:AuthAcction ):AuthState=>{
    switch (action.type) {
        case "logaut":
            
            return{
                validando : false,
                token : null,
                username : '',
                nombre : ''
    
    
            }
            case 'login':
                const {nombre, username}= action.payload; 
                return{
                    validando:false,
                    token: 'abc123',
                    nombre,
                    username
                }
            default:
                return state;
        
}
}

   


export const Login = () => {

   const [{validando, token, nombre}, dispatch] = useReducer(authreducer, initialState)
   useEffect(() => {
    setTimeout(() => {
        dispatch({type:'logaut'})
    }, 1500);

    const login=()=>{
        dispatch(
            {
                type:'login',
                payload:{
                    nombre:'camilo',
                    username: 'c123'

                }
            }
        )
    }

   
     
   }, [])
   if(validando){
    return(
        
        <>
         <h3>Login</h3>
    <div className="alert alert-info">
        Validando....
    </div>

        </>

 )  }
   
  return (
    
    <>
    <h3>Login</h3>
    {
        (token)
        ?<div className="alert alert-success">Autenticado como:{nombre}</div>
        : <div className="alert alert-danger"> No autenticado</div>
   }
    {
    (token)
    ?(
        <button className="btn btn-danger">
        Logaut
    </button>
    )
    :(
        <button className="btn btn-primary" onClick={Login}>
        Login
    </button>
    
    )
    }
    
    
    </>
  )
  }
