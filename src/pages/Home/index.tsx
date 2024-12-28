import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Massa from '../../models/Massa'
import Button from '../../components/Button'
import pizza from '../../assets/images/pizza.png'

const promocoes: Massa[] = [
  {
    id: 1,
    description:
      'A clássica Real com Espinafre: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Real com Espinafre',
    infos: ['10%', 'R$ 65,00'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        to="/carrinho"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  },
  {
    id: 2,
    description:
      'A clássica Real com Espinafre: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Bauru com tomate',
    infos: ['5%', 'R$ 60,00'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        to="/carrinho"
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
    title: 'Azeitona Mista',
    infos: ['10%', 'R$ 80,00'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        to="/carrinho"
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
        to="/carrinho"
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
        to="/carrinho"
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
        to="/carrinho"
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
    title: 'Aipim com Salada',
    infos: ['37,88'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        to="/carrinho"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  },
  {
    id: 8,
    description:
      'A clássica Dez Queijos: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Dez Queijos',
    infos: ['25,50'],
    image: pizza,
    button: (
      <Button
        type="button"
        title="Clique para adicionar a pizza"
        to="/carrinho"
        onClick={addToCart}
      >
        Adicionar
      </Button>
    )
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList massas={promocoes} title="Promoções" background="white" />
    <ProductsList massas={emBreve} title="Tradicionais" background="white" />
  </>
)

export default Home
function addToCart(): void {
  throw new Error('Function not implemented.')
}
