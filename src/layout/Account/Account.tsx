import styled from '@emotion/styled';
import data from 'data.json';
import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/components/Accordion.tsx';

const Account = () => {
  const { hostInfo } = data;
  return (
    <HostInfoWrapper>
      {hostInfo.map((host) => {
        return (
          <Accordion title={host.host} key={host.host}>
            {host.accountInfo.map((account) => {
              return (
                <AccountWrap
                  key={account.name}
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
                  kakaopayAccount={account.kakaopayAccount}
                  tossAccount={account.tossAccount}
                />
              );
            })}
          </Accordion>
        );
      })}
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  padding: 5px;
  margin: 0 auto;
  
  @media screen and (max-width: 500px) {
    width: 98%;
    padding: 3px;
  }
  
  @media screen and (max-width: 400px) {
    width: 96%;
    padding: 2px;
  }
`;
