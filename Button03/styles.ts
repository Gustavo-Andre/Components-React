import styled from "styled-components";

export const Botao = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

a{
    position: relative;
    width: 160px;
    height: 60px;
    display: inline-block;
    background:#fff;
    margin: 20px;
}

a::before,
a::after{
    content: '';
    position: absolute;
    inset: 0;
    background: #f00;
    transition: 0.5s;
}

a:nth-child(1)::before,
a:nth-child(1)::after{
background: linear-gradient(45deg, #00ccff, #121214, #121214, #d400d4);
}

a:nth-child(2)::before,
a:nth-child(2)::after{
background: linear-gradient(45deg, #ff075b, #121214, #121214, #1aff22);
}

a:hover::before{
    inset: -3px;
}

a:hover::after{
    inset: -3px;
    filter: blur(10px);
}

a span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: #0e1538;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    border: 1px solid #040a29;
    overflow: hidden;
}

a span::before{
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.075);
    transform: skew(25deg);

}
`;