import styled from "styled-components";

export const Card = styled.div`

display: flex;
justify-content: center;
align-items: center;
background: #222;
min-height: 100vh;

.container{
    position: relative;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px;
}

.container .card{
    position: relative;
    height: 250px;
    background: #fff;
    display: flex;
    width: 45%;
    margin: 30px 0;
}

.container .card .imgbx{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s ease-in-out;
}

.container .card:hover .imgbx{
    width: 150px;
    height: 150px;
    left: -75px;
    top: calc(50% - 75px);
    transition: 0.5s ease-in-out;
    background: #ff0057;
}

.container .card .imgbx::before{
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size:6em;
    color: rgba(255,255,255,.05);
    font-weight: 700;
}

.container .card .imgbx img{
    max-width: 100px;
    transition: 0.5s ease-in-out;
}

.container .card:hover .imgbx img{
    max-width: 75px;
}

.container .card .content{
    position: absolute;
    right: 0;
    width: calc(100% - 75px);
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .card .content h3{
    margin-bottom: 5px;
    font-size: 24px;
}

.container .card .content a{
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    background: #333;
    text-decoration: none;
    color: #fff;
}

@media (max-width: 992px){
    .container{
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    .container .card{
        width: 400px;
    }
}

@media (max-width: 768px){
    .container .card{
        max-width: 300px;
        flex-direction: column;
        height: auto;
    }

    .container .card .imgbx{
        position: relative;
    }

    .container .card .imgbx,
    .container .card:hover .imgbx{
        width: 100%;
        height: 200px;
        left: 0;
    }

    .container .card .imgbx img,
    .container .card:hover .imgbx img{
        max-width: 100px;
    }
    .container .card .content{
        position: relative;
        width: 100%;
    }
}


`;