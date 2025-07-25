import styled from '@emotion/styled';

const Wrapper = styled.section`
  padding: 8px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #222;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  
  @media screen and (max-width: 500px) {
    padding: 6px 20px;
  }
`;

export default Wrapper;
