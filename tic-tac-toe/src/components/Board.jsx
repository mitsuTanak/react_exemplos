import React, {useState} from "react";
import Square from "./Square"

const Board = () => {
    // Estado para armazenar o estado atual dos quadrados no tabuleiro
    const [squares, setSquares] = useState(Array(9).fill(null));

    // Estado para determinar se é a vez do jogador "X" ou "O"
    const [xIsNext, setxIsNext] = useState(true);

    // Função para calcular o vencedor com base nos quadrados preenchidos
    const Winner = calculateWinner(squares);

    // Função para lidar com o clique em um quadrado
    const handleClick = (i) => {
        // Verifica se o quadrado já está preenchido ou se há um vencedor
        if (squares[i] || Winner) return;

        // Cria uma uma copia do array de quadrados para evitar mutações diteras
        const newSquares = squares.slice();

        // Preenche o quadrado com "X" ou "O" com base na vez do jogador
        newSquares[i] = xIsNext ? "X" : "O";

        // Atualiza o estado dos quadrados e passa a vez para o próximo jogador
        setSquares(newSquares);
        setxIsNext(!xIsNext);
    };

    // Função para Reiniciar o jogo
    const resetGame = () =>{
        // Reinicia o estado dos quadrados e define a vez do jogador como "X"
        setSquares(Array(9).fill(null));
        setxIsNext(true);
    };

    // Renderização do componente
    return (
        <div>

            <div className="status">

                Status:{" "}
                {Winner ? (
                    // Exibe o vencedor, se hover
                    <p className="winner">O Vencedor é: {Winner}!!</p>
                ) : (
                    // Exibe o próximo jogador se não hover vencedor
                    `Proximo a jogar: ${xIsNext ? "X" : "O"}`
                )}
            </div>

            {/* Renderização das linhas do tabuleiro com componentes Square */}
            <div className="board-row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>

            {/* Botão para reiniciar o jogo */}
            <button className="reset-button" onClick={resetGame}>
                Reiniciar Jogo
            </button>

        </div>
    );
};

// Função para calcular o vencedor com base nos quadros preenchidos
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Verifica todas as linhas para determinar se há um vencedor
    for (let i=0; i<lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares [a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }

    // retorna null se hover empate
    return null
}

// Exporta o componente Board como padrão
export default Board;