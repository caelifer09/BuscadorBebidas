import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import Carrousel from './components/Carrousel'
import Acerde from './components/Acerde'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'



function App() {
  const [sobre, setSobre] = useState(false)

  const handleMouseOver = () => {
    setSobre(true);
  };

  const handleMouseOut = () => {
    setSobre(false);
  };

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
           <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            Buscador de Bebidas
            {sobre && (
              <Acerde />
            )}            
            </h1>
        </header>
        <Container className='mt-5'>
          <Carrousel />

          <Formulario />

          <ListadoBebidas />

          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}
export default App
