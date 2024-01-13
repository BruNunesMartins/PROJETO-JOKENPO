const result = document.querySelector(".result") /* paragrafo mapeado*/
const humanScore = document.querySelector("#score-human") /*span human mapeado*/
const machineScore = document.querySelector("#score-machine") /*span machine mapeado*/

let humanScoreNumber = 0 /*contadores dos pontos*/
let machineScoreNumber = 0



/*função: escolha do usuario*/
const playHuman = (humanChoice) => { /*quando o usuario clicar em algum botao eu chamo essa função*/
    playTheGame(humanChoice, playMachine()) /*chama a funcao playTheGame e mostra as duas ecolhas*/

}

/*função: escolha da máquina*/

const playMachine = () => { /*a máquina só retorna um valor pra mim*/
    const choices = ["pedra", "papel", "tesoura"] /*array*/


    /*numero arredonda para baixo*/   /*numeros aleatórios*/
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    return choices[randomNumber]

}


/*função: verificar quem  ganhou*/

/*vai receber 2 valores= humano e maquina*/
const playTheGame = (human, machine) => {

    console.log("Humano: " + human + " Máquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate! &#x1F914;"

    } else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')) {


        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        result.innerHTML = "Você ganhou! &#x1F60D"

    } else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

        result.innerHTML = "Você perdeu para a Alexa! &#x1F61E"
    }


}





