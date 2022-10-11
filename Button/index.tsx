
import Link from 'next/link';
import {Botao} from './styles';
import React from 'react';
import Image from 'next/image';



export  function Button(){
  return(
    <Botao>
    
        <div className='container'>
            <div className='btn'><a href='#'>Botão</a></div>
            <div className='btn'><a href='#'>Botão</a></div>
            <div className='btn'><a href='#'>Botão</a></div>
        </div>
    </Botao>
  )
}