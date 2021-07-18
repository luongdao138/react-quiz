import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
       :root{
         --primary-color: #5cdb95;
         --secondary-color: #05386B;
         --text-color: #edf5e1;
         --med-color: #8ee4af;
         --dark-color: #379683;
       }

       * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         font-family: 'Roboto', sans-serif; 
       }

       button{
         outline: none;
         border: none;
         cursor: pointer;
       }

       a {
        text-decoration: none;
       }

       li{
        list-style: none;
       }

       input{
         outline: none;
       }

       ::-webkit-scrollbar{
          width:8px;
          height: 0;
       }

       ::-webkit-scrollbar-track{
          background-color: #202020;
       }

       ::-webkit-scrollbar-thumb{
          background-color: var(--grey-color);
          border-radius: 10px;
       }
`;

const Wrapper = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--primary-color);
  color: var(--text-color);
`;

export default GlobalStyle;

export { Wrapper };
