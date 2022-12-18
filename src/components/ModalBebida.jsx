import { Modal, Image, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'


export default function ModalBebida() {
  const { handleModalClick, modal, bebida, cargando, handleAddCarousel } = useBebidas()
  
  const mostrarIngredientes = () => {
    let ingredientes = []
    for(let i = 1; i < 16; i++){
      if( bebida[`strIngredient${i}`] ) {
        ingredientes.push(
          <li>{bebida[`strIngredient${i}`]} {bebida[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes
  }
  return (
    !cargando && (<Modal show={modal} onHide={handleModalClick}>
      <Image 
      src={bebida.strDrinkThumb}
      alt={`Imagen receta ${bebida.strDrink}`}
      />
      <Modal.Header>
        <Modal.Title>{bebida.strDrink}</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <div className='p-3'>
            <h2>Instrucciones</h2>
            {bebida.strInstructions}
            <h2>ingredientes y cantidades</h2>
              {mostrarIngredientes()}
          </div>
          <Button
            variant='danger'
            className='text-uppercase w-100'
            type="button"
            onClick={() => handleAddCarousel(bebida)}
            >
               Agregar
            </Button>
        </Modal.Body>
    </Modal>)
  )
}
