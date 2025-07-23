import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting, mapInfo } = data;
  
  // Create Google Calendar URL
  const createGoogleCalendarUrl = () => {
    const title = `${greeting.host.groom.name} & ${greeting.host.bride.name}'s Wedding`;
    const details = greeting.message.replace(/\n/g, ' ');
    const location = mapInfo.address1;
    
    // Parse the date from eventDetail - "October 18, 2025 (Saturday) 6:00 PM"
    // Convert to Google Calendar format: YYYYMMDDTHHMMSS
    const eventDate = "20251018T180000"; // October 18, 2025 6:00 PM
    const endDate = "20251018T230000";   // End at 11:00 PM (5 hours later)
    
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      dates: `${eventDate}/${endDate}`,
      details: details,
      location: location,
      trp: 'false'
    });
    
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <RoundButton
        target="_blank"
        href={createGoogleCalendarUrl()}
        rel="noreferrer">
        Add to Google Calendar
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
