import styled from "styled-components";

export const Html = styled.html`
   margin: 0;
   padding: 0;
   box-sizing: border-box;

   body{
      background: #111;
   }

   section{
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   section h2{
      position: relative;
      font-size: 12em;
   }

   section img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   #gradient{
      background: linear-gradient(0.9turn, #e089ff, #47bdff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }
   #flutuante{
      animation: float 3s ease-in-out infinite;
   }
   @keyframes float {
      0%{
         transform: translateY(0);
      }
      50%{
         transform: translateY(-25px);
      }
      100%{
         transform: translateY(0);
      }
   }
`;