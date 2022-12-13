import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'


export default function Bebida({bebida}) {
  const { handleModalClick, handleBebidaId } = useBebidas()
  const { strDrink, strDrinkThumb, idDrink } = bebida

  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img 
        variant='top'
        src={strDrinkThumb}
        alt={`imagen de bebida: ${strDrink}`}

        />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Button
          variant='warning'
          className='w-100 uppercase mt-2'
          onClick={() => {
            handleModalClick()
            handleBebidaId(idDrink)
          }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
