import React from 'react'
import Countdown from 'react-countdown'
import styled from '@emotion/styled'

const CountdownContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  background: linear-gradient(135deg, #ffeaa7, #fab1a0);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`

const CountdownTitle = styled.h3`
  color: #2d3436;
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
`

const CountdownDisplay = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

const TimeUnit = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 12px 8px;
  min-width: 60px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const TimeValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d3436;
  line-height: 1;
`

const TimeLabel = styled.div`
  font-size: 0.75rem;
  color: #636e72;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const CompletedMessage = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #00b894;
  text-align: center;
  padding: 20px;
`

interface CountdownRendererProps {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

const CountdownRenderer: React.FC<CountdownRendererProps> = ({
  days,
  hours,
  minutes,
  seconds,
  completed
}) => {
  if (completed) {
    return (
      <CompletedMessage>
        🎉 It's Wedding Day! 🎉
      </CompletedMessage>
    )
  }

  return (
    <CountdownDisplay>
      <TimeUnit>
        <TimeValue>{days}</TimeValue>
        <TimeLabel>Days</TimeLabel>
      </TimeUnit>
      <TimeUnit>
        <TimeValue>{hours}</TimeValue>
        <TimeLabel>Hours</TimeLabel>
      </TimeUnit>
      <TimeUnit>
        <TimeValue>{minutes}</TimeValue>
        <TimeLabel>Minutes</TimeLabel>
      </TimeUnit>
      <TimeUnit>
        <TimeValue>{seconds}</TimeValue>
        <TimeLabel>Seconds</TimeLabel>
      </TimeUnit>
    </CountdownDisplay>
  )
}

const WeddingCountdown: React.FC = () => {
  const weddingDate = import.meta.env.VITE_WEDDING_DATE

  if (!weddingDate) {
    return (
      <CountdownContainer>
        <CountdownTitle>Wedding Countdown</CountdownTitle>
        <div style={{ color: '#e17055', fontStyle: 'italic' }}>
          Wedding date not configured
        </div>
      </CountdownContainer>
    )
  }

  const targetDate = new Date(weddingDate)

  return (
    <CountdownContainer>
      <CountdownTitle>💒 Time Until Our Wedding 💍</CountdownTitle>
      <Countdown
        date={targetDate}
        renderer={CountdownRenderer}
      />
    </CountdownContainer>
  )
}

export default WeddingCountdown