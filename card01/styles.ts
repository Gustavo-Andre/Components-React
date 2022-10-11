import styled from "styled-components";

export const Card = styled.div`

.container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #444;
}

.card {
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(#333, #333);
    transition: all .5s;
}

.card:hover {
    background-image: linear-gradient(#672abf, #380e74);
}

.card .img {
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-image: url('/images/ceu.jpg');
    background-size: cover;
    background-position: center;
    transition: all .5s;
    z-index: 2;
    position: relative;
    opacity: .8;
}

.card .img span {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 100;
    font-style: italic;
    transition: all .5s;
}

.card:hover .img {
    width: 430px;
    opacity: 1;
}

.card:hover .img span {
    font-size: 28px;
}

.card .content {
    padding: 0px 20px;
    height: 0;
    opacity: 0;
    transition: all .5s;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    transform: translateY(30px);
}

.card:hover .content {
    height: 260px;
    padding: 20px;
    opacity: 1;
    transform: translateY(0);
}

.card .content p {
    margin: 0;
}

.card .content .title {
    font-size: 20px;
    font-weight: 600;
}

.card .content .desc {
    font-size: 14px;
    font-weight: 100;
    opacity: .8;
    margin-top: 8px;
}

.card .arrow {
    padding: 15px;
    transform: rotate(-180deg);
    transition: all .5s;
}

.card:hover .arrow {
    transform: rotate(0);
}

.card .arrow span {
    font-size: 24px;
}

`;