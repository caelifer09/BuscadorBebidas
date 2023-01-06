import { Carousel } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'


function Carrousel() {
    const {carBebidas} = useBebidas()
    const mostrarIngredientes = bebida => {
        let ingredientes = []
        for(let i = 1; i < 16; i++){
          if( bebida[`strIngredient${i}`] ) {
            ingredientes.push(
              <li className='text-warning'>{bebida[`strIngredient${i}`]} {bebida[`strMeasure${i}`]}</li>
            )
          }
        }
        return ingredientes
      }
  return (
    <>
    <Carousel >
       {carBebidas.map( bebida => (        
        <Carousel.Item
            key={bebida.idDrinks}
            >
                <div className='bg-danger container d-flex justify-content-center d-flex align-items-center border border-success rounded'>
                  <div>
                  <img 
                     src={bebida.strDrinkThumb}
                     alt={`imagen de bebida: ${bebida.strDrink}`}
                    />
                  </div>                                  
                <Carousel.Caption>
                    <p className='text-warning font-weight-bold text-uppercase'>{bebida.strDrink}</p>  
                    {mostrarIngredientes(bebida)}
                </Carousel.Caption> 
                </div>
        </Carousel.Item>  
        ))}
    </Carousel>
</>
  )
}
export default Carrousel