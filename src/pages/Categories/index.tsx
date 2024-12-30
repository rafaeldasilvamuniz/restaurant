import ProductsList from '../../components/ProductsList'
import Massa from '../../models/Massa'
import pizza from '../../assets/images/pizza.png'
import Button from '../../components/Button'
//import { title } from 'process'
import Banner from '../../components/Banner'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { parseToBrl } from '../../utils'

type Props = {
  game: Game
}

/*const dispatch = useDispatch();

function addToCart({game}:Props){
        dispatch(add(game));
        return dispatch(open())
}*/

/*const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }*/
const addToCart = () => {
  const addCart = ({ game }: Props) => {
    const dispatch = useDispatch()

    dispatch(add(game))
    dispatch(open())
  }
}

const promocoes: Massa[] = [
  {
    id: 1,
    description:
      'A clássica Real com Espinafre: Espinafre com mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Real com Espinafre',
    infos: ['10%', 'R$ 65,00'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        //variant="primary"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  },
  {
    id: 2,
    description:
      'A clássica Bauru: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Bauru',
    infos: ['5%', 'R$ 60,00'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        //variant="primary"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  },
  {
    id: 3,
    description:
      'A clássica Azeitona Mista: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Azeitona',
    infos: ['10%', 'R$ 80,00'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        //variant="primary"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  },
  {
    id: 4,
    description:
      'A clássica Aipim com tomate seco: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Aipim com Tomate Seco',
    infos: ['10%', 'R$ 35,00'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        //variant="primary"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  }
]

const emBreve: Massa[] = [
  {
    id: 5,
    description:
      'A clássica Frango com Catupiry: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Frango com Catupiry',
    infos: ['R$ 48,50'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        //variant="primary"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Marguerita',
    infos: ['R$ 45,00'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        //variant="primary"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  },
  {
    id: 7,
    description:
      'A clássica Pizza de Aipim com salada: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Aipim com Salada Mista',
    infos: ['37,88'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        //variant="primary"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  },
  {
    id: 8,
    description:
      'A clássica Quatro Dez: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Dez Queijos',
    infos: ['25,50'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        //variant="primary"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  }
]

function Categories() {
  return (
    <>
      <Banner />
      <ProductsList massas={promocoes} title="Promoções" background="white" />
      <ProductsList massas={emBreve} title="Tradicionais" background="white" />
    </>
  )
}

export default Categories
