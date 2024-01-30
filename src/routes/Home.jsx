import "./HomeStyle.scss";
import { useState, useContext } from "react";
import { CountdownContext } from "../context/countdownContext";
import { useNavigate } from "react-router-dom";

import { Countdown } from "./countdown";

export const Home = () => {

    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [color, setColor] = useState();

    const [setEvent] = useContext(CountdownContext);

    const navigate = useNavigate();

    const handleSumit = (e) => {
        e.preventDefault();

        const eventObject = {
            title,
            date,
            image,
            color,
        }
    
        setEvent(eventObject)
        
        navigate("/countdown");
    };

    
    return(
        <div>
            <h1>Monte sua contagem regressiva</h1>
            <form className="countdown-form" onSubmit={handleSumit}>
                <label>
                    <span>Titulo:</span>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Digite o titulo do evento"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Data do evento</span>
                    <input 
                        type="date" 
                        name="date"
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Imagem</span>
                    <input 
                        type="text" 
                        name="image"
                        placeholder="Insira a Url da imagem"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <label>
                    <span>Cor do tema</span>
                    <input 
                        type="color" 
                        name="color"
                        onChange={(e) => setColor(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
}