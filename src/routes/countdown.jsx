import { Title } from '../components/Title';
import { Counter } from '../components/Couter';
import { useCountdown } from '../hooks/useConuntdown';

import { CountdownContext } from '../context/countdownContext';
import { useContext } from 'react';

import { Navigate } from 'react-router-dom';

export const Countdown = () => {
    const { event } = useContext(CountdownContext); 

    if(!event) return <Navigate to="/" />;

    const eventTitle = event.title;

    const eventColor = event.color;
  
    const [day, hour, minute, second] = useCountdown(event.date);

    return(
        <div>
            <Title title={eventTitle}/>
            <div className="countdow-container">
                <Counter title="Dias" number={day}/>
                <Counter title="Horas" number={hour}/>
                <Counter title="Minutos" number={minute}/>
                <Counter title="Segundos" number={second}/>
            </div>
        </div>
    )
};