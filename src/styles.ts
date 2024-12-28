import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3',
  fundo: '#E3C097',
  salmao: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  celular: '480px',
  telagrande: '1200px',
  tv: '1920px 1080px'
}

export const GlobalCss = createGlobalStyle`

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }

`
/*
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branca};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }*/
