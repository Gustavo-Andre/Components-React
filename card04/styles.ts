import styled from "styled-components";

export const Card = styled.div`

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 40px 0;
}

.container .card{
    position: relative;
    min-width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0,0,0,0.2),
                inset -5px -5px 15px rgba(255,255,255,0.1),
                5px 5px 15px rgba(0,0,0,0.3),
                -5px -5px 15px rgba(255,255,255,0.1);
    border-radius: 15px;
    margin: 30px;
}

.container .card::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255,255,255,0.1);
}

.container .card .box{
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: #2a2b2f;
    border: 2px solid #1e1f23;
    border-radius: 15px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.container .card .box::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255,255,255,0.05);
    pointer-events: none;
}

.container .card .box:hover{
    transform: translateY(-50px);
    box-shadow: 0 40px 70px rgba(0,0,0,0.5);
}

.container .card .box .content{
    padding: 20px;
    text-align: center;
}

.container .card .box .content h2{
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8em;
    color: rgba(255,255,255,0.05);
}

.container .card .box .content h3{
    font-size: 1.8em;
    color: rgba(255,255,255,0.5);
    z-index: 1;
    transition: 0.5s;
}

.container .card .box .content p{
    font-size: 16px;
    font-weight: 300;
    color: rgba(255,255,255,0.5);
    z-index: 1;
    transition: 0.5s;
}

.container .card .box .content a{
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: #000;
    margin-top: 15px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 400;
    color: #fff;
}

.container .card:nth-child(1) .box .content a{
    background: #2196f3;
}

.container .card:nth-child(2) .box .content a{
    background: #e91e63;
}

.container .card:nth-child(3) .box .content a{
    background: #97dc47;
}
`;