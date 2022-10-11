
import styled from "styled-components";

export const Botao = styled.div`

body{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #350048;
}

.container{
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.container .btn{
    position: relative;
    width: 155px;
    height: 80px;
    margin: 20px;
}

.container .btn a {
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255, 0.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255,255,255, 0.1);
    border-bottom: 1px solid rgba(255,255,255, 0.1);
    border-radius: 30px;
    color: #fff;
    z-index: 1;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(15px);
}

.container .btn:hover a{
    letter-spacing: 3px;
}

.container .btn a::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255,255,255,0.15), transparent);
    transform: skewX(45deg) translateX(0);
    transition: 0.5s;
}

.container .btn:hover a::before{
    transform: skewX(45deg) translateX(200%) ;
}

.container .btn::before{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 24px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: 0.5s;
}

.container .btn:hover::before{
    bottom: 24px;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
}

.container .btn::after{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: 0.5s;
}

.container .btn:hover::after{
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
}

.container .btn:nth-child(1)::before,
.container .btn:nth-child(1)::after{
    background: #ff1f71;
    box-shadow: 0 0 5px #ff1f71,
    0 0 15px #ff1f71,
    0 0 30px #ff1f71,
    0 0 60px #ff1f71;
}

.container .btn:nth-child(2)::before,
.container .btn:nth-child(2)::after{
    background: #2bd2ff;
    box-shadow: 0 0 5px #2bd2ff,
    0 0 15px #2bd2ff,
    0 0 30px #2bd2ff,
    0 0 60px #2bd2ff;
}

.container .btn:nth-child(3)::before,
.container .btn:nth-child(3)::after{
    background: #1eff45;
    box-shadow: 0 0 5px #1eff45,
    0 0 15px #1eff45,
    0 0 30px #1eff45,
    0 0 60px #1eff45;
}
`
