import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const BebidasContext = createContext()

const BebidasProvider = ({children}) => {
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [bebida, setBebida] = useState({})
    const [cargando, setCargando] = useState(false)
    const [carBebidas, setCarBebidas] = useState([])
    const [abilitacar, setAbilitaCar] = useState(false)

    useEffect(() => {
        setCargando(true)
        const obtenerReceta = async () => {
            if(!bebidaId) return
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const { data } = await axios(url)
                setBebida(data.drinks[0])
            } catch (error) {
                console.log(error)
            }finally {
                setCargando(false)
            }
        }   
        obtenerReceta()
    },[bebidaId])

    useEffect(() => {
        if(carBebidas.length === 0 ){
            setAbilitaCar(false)
        }else{
            setAbilitaCar(true)
        }
    },[carBebidas])

    const consultarBebidas = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const { data } = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }
    const handleModalClick = () => {
        setModal(!modal)
    }
    const handleBebidaId = id => {
        setBebidaId(id)
    }
    const handleAddCarousel = bebida => {
        if(carBebidas.some(bebidaState => bebidaState.idDrink === bebida.idDrink)){
           return
        }else {
            setCarBebidas([...carBebidas, bebida])
        }
       setModal(false)
       goToTop()
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <BebidasContext.Provider
         value={{
            consultarBebidas,
            bebidas,
            handleModalClick,
            modal,
            handleBebidaId,
            bebida,
            cargando,
            handleAddCarousel,
            carBebidas,
            abilitacar
         }}
        >
            {children}
        </BebidasContext.Provider>
    )
}
export {
    BebidasProvider
}

export default BebidasContext