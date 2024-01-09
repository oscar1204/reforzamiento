

export const ObjetosLiterales = () => {
    const persona={
        nombre: 'dana',
        edad: 15 ,
        direccion:{
            pais: 'asia',
            casa: 656
            
        }
    }
  return (
    <>
    <h3>ObjetosLiterales</h3>
   <code>
    <pre>
    {JSON.stringify(persona, null, 2)}
    </pre>
   </code>

    </>
  )
}
