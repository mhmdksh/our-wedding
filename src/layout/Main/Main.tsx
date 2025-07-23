import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: min(90%, 400px);
  max-width: 400px;
  padding-top: 20px;
  height: auto;
`;

const MainTitle = styled.p`
  font-family: 'Cormorant SC', HSSanTokki20-Regular, serif;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 700;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0 10px;
`;

const SubTitle = styled.p`
  font-size: clamp(1rem, 3.5vw, 1.1rem);
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0 15px;
`;
