export const Home = () => {
    return(
        <div>
            <h1>MOnte sua contagem regressiva</h1>
            <form className="countdown-form">
                <label>
                    <span>Titulo:</span>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Digite o titulo do evento"
                    />
                </label>
                <label>
                    <span>Data do evento</span>
                    <input 
                        type="date" 
                        name="date"
                    />
                </label>
                <label>
                    <span>Imagem</span>
                    <input 
                        type="text" 
                        name="image"
                        placeholder="Insira a Url da imagem"
                    />
                </label>
                <label>
                    <span>Cor do tema</span>
                    <input 
                        type="color" 
                        name="color"
                    />
                </label>
            </form>
        </div>
    );
}