import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  margin: 10px;
  color: #e88ca6;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Heading2 = styled.p`
  font-size: clamp(0.9rem, 3vw, 1rem);
  margin: 10px;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const PointTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  line-height: 1.2;
  margin: 0;
  color: #e88ca6;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: clamp(1.1rem, 4vw, 1.3rem);
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  font-size: clamp(0.9rem, 3vw, 1rem);
  padding: 0 20px;
  margin: 0 auto;
  max-width: 100%;
  
  @media screen and (max-width: 400px) {
    padding: 0 15px;
    font-size: 0.9rem;
  }
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  font-size: clamp(0.8rem, 2.5vw, 0.9rem);
  padding: 0 15px;
  margin: 0 auto;
  max-width: 100%;
  
  @media screen and (max-width: 400px) {
    padding: 0 10px;
    font-size: 0.8rem;
  }
`;
