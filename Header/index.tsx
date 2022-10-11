
import Link from 'next/link';
import {Html} from './styles';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineBars, AiOutlineCloseCircle } from "react-icons/ai" ; 



export  function Header(){

    const [menu, setMenu] = useState(true);

    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
        } else {
            menuMobile.classList.add('open');
            
        }
        setMenu(!menu);
    }

    
  return(
    <Html>
    <header>
        <nav className="nav-bar">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="nav-list">
                <ul>
                    <li className="nav-item"><a href="#" className="nav-link">Início</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Projetos</a></li>
                    <li className="nav-item"><a href="#" className="nav-link"> Sobre</a></li>
                </ul>
            </div>
            <div className="login-button">
                <button><a href="#">Entrar</a></button>
            </div>

            <div className="mobile-menu-icon">
                <button onClick={()=> menuShow()}>{(
                   menu
                   ?<AiOutlineBars   className="icon" />
                   :<AiOutlineCloseCircle   className="icon" />
                )}
                    
                </button>
            </div>
        </nav>
        <div className="mobile-menu">
            <ul>
                <li className="nav-item"><a href="#" className="nav-link">Início</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Projetos</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Sobre</a></li>
            </ul>

            <div className="login-button">
                <button><a href="#">Entrar</a></button>
            </div>
        </div>
    </header>
    </Html>

  )
}