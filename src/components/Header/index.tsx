import { Link } from 'react-router-dom'
//import { HashLink } from 'react-router-hash-link'
import * as S from './styles'
import logo from '../../assets/images/logo.png'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/'
import { useState } from 'react'
import { Imagem, Links } from './styles'
//import { Imagem } from './styles'
const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <div>
        <Link to="/">
          <Imagem>
            <img src={logo} alt="EFOOD" />
          </Imagem>
        </Link>
        <nav>
          <Links>
            <Link to="/Restaurantes">Restaurantes</Link>
          </Links>
        </nav>
      </div>
      <S.CartButton role="button" onClick={openCart}>
        <a>
          {items.length} - produto(s) no carrinho
          <img src={carrinho} alt="Carrinho" />
        </a>
      </S.CartButton>
    </S.HeaderBar>
  )
}
export default Header

/*
 <S.HeaderBar>
    <div>
      <Link to="/">
        <Imagem>
          <img src={logo} alt="EFOOD" />
        </Imagem>
      </Link>
      <nav>
        <Links>
          <S.LinkItem>
            <Link to="/Restaurantes">Restaurantes</Link>
          </S.LinkItem>
        </Links>
      </nav>
    </div>
    <S.CartButton role="button" onClick={openCart}>
        {items.length} - produto(s) no carrinho
        <img src={carrinho} alt="Carrinho" />
      </S.CartButton>
  </S.HeaderBar>
*/
