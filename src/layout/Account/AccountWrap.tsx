import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.png?url';
import toss from '@/assets/icons/toss.png?url';

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
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert('Account number copied! 😉😉');
      },
      () => {
        alert('Failed to copy account number. 🥲🥲');
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
        <AccountInfo>
          {account}
        </AccountInfo>
        <CopyButton onClick={handleCopy}>
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
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
const Relation = styled.span`
  color: #44484d;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

const AccountInfo = styled.div`
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-family: monospace;
  font-size: 0.9rem;
  color: #333;
  background: white;
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;
const CopyButton = styled.button`
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  outline: none;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 36px;
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
