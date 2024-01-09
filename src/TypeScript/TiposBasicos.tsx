

export const TiposBasicos = () => {
    const nombre: string = 'Fernando';
    const edad: number = 35;
    const estaActivo:boolean = false;

    const poderes: (string|number)[] = []; // 'Velocidad','Volar','Respirar en el agua'
    
  return (
    <>
    <h3>Tipos Vasicos</h3>
    { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
    {poderes.join(', ')}

    
    </>
  )
}
