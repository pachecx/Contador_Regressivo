import { Title } from '../components/Title';
import { Counter } from '../components/Couter';
import { useCountdown } from '../hooks/useConuntdown';

export const Countdown = () => {
  const [day, hour, minute, second] = useCountdown("jan 1, 2025 00:00:00");

    return(
        <div>
            <Title title="Contagem regressiva para 2025"/>
            <div className="countdow-container">
                <Counter title="Dias" number={day}/>
                <Counter title="Horas" number={hour}/>
                <Counter title="Minutos" number={minute}/>
                <Counter title="Segundos" number={second}/>
            </div>
        </div>
    )
};