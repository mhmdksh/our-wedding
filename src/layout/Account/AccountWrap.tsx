import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.png?url';
import toss from '@/assets/icons/toss.png?url';
import { useMediaQuery } from 'react-responsive';

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}
const AccountWrap = ({
  name,
  relation,
  bank,
  account,
  kakaopayAccount,
  tossAccount,
}: IAccountProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert('Copied successfully!');
      },
      () => {
        alert('Failed to copy');
      },
    );
  };

  return (
    <Wrapper>
      <Info>
        <Name>{name}</Name>
      </Info>
      <BankInfo>
        <BankName>{bank}</BankName>
      </BankInfo>
      <Details>
        <AccountInfo $isMobile={isMobile} $isTablet={isTablet}>
          {account}
        </AccountInfo>
        <CopyButton $isMobile={isMobile} onClick={handleCopy}>
          <Copy fill="#dfdfdf" />
        </CopyButton>
      </Details>
      <AccountLinks>
        {kakaopayAccount && (
          <AccountButton href={kakaopayAccount} target="_blank" rel="noreferrer">
            <KakaopayImg src={kakaopay} alt="kakaopay" />
          </AccountButton>
        )}
        {tossAccount && (
          <AccountButton href={tossAccount} target="_blank" rel="noreferrer">
            <TossImg src={toss} alt="toss" />
          </AccountButton>
        )}
      </AccountLinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: 'SUITE-Regular';
  padding: 18px;
  margin: 12px 0;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const Info = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Name = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
`;

const BankInfo = styled.div`
  display: flex;
  align-items: center;
`;

const BankName = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  width: 100%;
  min-height: 40px;
  align-items: center;
`;

const AccountInfo = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-family: monospace;
  font-size: ${({ $isMobile, $isTablet }) => 
    $isMobile ? '0.75rem' : $isTablet ? '0.85rem' : '0.9rem'
  };
  color: #333;
  background: white;
  padding: ${({ $isMobile, $isTablet }) => 
    $isMobile ? '8px' : $isTablet ? '10px' : '12px'
  };
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CopyButton = styled.button<{ $isMobile: boolean }>`
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: ${({ $isMobile }) => $isMobile ? '6px' : '10px'};
  cursor: pointer;
  outline: none;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $isMobile }) => $isMobile ? '32px' : '40px'};
  height: ${({ $isMobile }) => $isMobile ? '32px' : '40px'};
  flex-shrink: 0;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const AccountLinks = styled.div`
  display: flex;
  width: 100%;
  gap: 2px;
`;

const AccountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  margin: 5px 0;
  padding: 0 0.8em;
  width: inherit;
  font-size: 0.7rem;
  cursor: pointer;
  gap: 2px;
  color: #1a1a1a;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  background: white;
`.withComponent('a');

const KakaopayImg = styled.img`
  width: 50px;
`;

const TossImg = styled.img`
  width: 70px;
`;

export default AccountWrap;
