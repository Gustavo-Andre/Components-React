import Link from 'next/link';
import {Botao} from './styles';
import React from 'react';
import Image from 'next/image';



export  function Button03(){
  return(
    <Botao>
        <a href='#'>
          <span>botao</span>
        </a>
        <a href='#'>
          <span>botao</span>
        </a>
    </Botao>
  )
}