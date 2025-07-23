import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: 'Cormorant SC', HSSanTokki20-Regular, serif;
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  font-weight: 600;
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
  font-family: 'Pinyon Script', HSSanTokki20-Regular, serif;
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
  font-size: clamp(0.9rem, 3vw, 1rem);
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: clamp(0.8rem, 2.5vw, 0.9rem);
`;
