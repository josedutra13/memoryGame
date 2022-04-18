import styled from 'styled-components'

export const ModalStyle = styled.div`
    background-color: #15181F;
    width: 500px;
    height: 260px;
    border-radius: 15px;
    
   .modal-header{
     border-bottom:none;
     padding:5px 0 10px 0;
   } 

   .h4{
      padding-left: 85px;
      font-family: 'October Crow';
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      text-align: center;
      letter-spacing: 0.1em;
      color: #ECC839;
      text-shadow: 0px 0px 8px #FF5B00;
   }
   
   .modal-body{
       color:#FFFFFF;
       text-align:justify;
       margin: 0 15px 10px 15px;
   }

   .modal-footer{
     justify-content: center;
     border-top:none;
   }

   .modal-footer .btn{
     width: 300px;
     height: 40px;
     background-color:#2B0E11;
     border-color:#EE9430;
     font-family: 'Righteous', cursive;
     font-style: normal;
     font-weight: 600;
     font-size: 16px;
     line-height: 22px;
     text-transform: uppercase;
  }



`