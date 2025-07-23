import styled from '@emotion/styled';

const Container = styled.div`
  border: 20px solid transparent;
  border-image-source: url('/background.png');
  border-image-slice: 30% 49%;
  border-image-width: 20px;
  background-color: #ffffff;
  width: calc(100vw - 40px);
  max-width: 460px;
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  
  @media screen and (min-width: 500px) {
      width: 460px;
      border: 30px solid transparent;
      border-image-width: 30px;
  }
  
  @media screen and (max-width: 400px) {
      border: 15px solid transparent;
      border-image-width: 15px;
      width: calc(100vw - 30px);
  }
`;
export default Container;
