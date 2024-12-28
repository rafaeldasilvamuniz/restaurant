import styled from 'styled-components'

import { Props } from '.'
import { breakpoints, cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'massas'>>`
  background-color: ${(props) =>
    props.background === 'black' ? cores.fundo : cores.salmao};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'white' ? cores.fundo : cores.salmao};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  margin-top: 80px;
  padding: 12px 0;

  @media (max-width: ${breakpoints.desktop} and min-width: ${breakpoints.celular}) {
    margin-left: 0;
    display: block;
    justify-content: center;
  }
`

/*display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
  padding: 24px;
  padding: 32px 0;*/

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.salmao};
`
