import Link from 'next/link';
import {Botao} from './styles';
import React from 'react';
import Image from 'next/image';



export  function Button02(){
  return(
    <Botao>
    
        <a href='#'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Botão
        </a>
    </Botao>
  )
}