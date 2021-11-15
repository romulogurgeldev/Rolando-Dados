const rollDice = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

const generateResult = (number) => {
    let result = [0,0,0,0,0,0,0,0,0,0,0]
    for (let i = 1; i<number;i++){
        result[rollDice(0,6) + rollDice(0,6)]++
    }
    return result
}

const appendNumbers = (results) => {
    const resultado = document.getElementById('numbers')
    for(let i = 0; i <=10 ; i++ ){
        const line = document.createElement('p')
        line.innerText = `${i + 2}: ${results[i]}`
        resultado.appendChild(line)
    }
}

const graphs = (results) => {
    const graphs = document.getElementById('graphs')
    for(let i = 0; i <=10 ; i++ ){
        const column = document.createElement('span')
        column.style.width = 'calc(100%/11)'
        column.style.height = results[i]*3 + 'px'
        column.classList.add('column')
        column.innerText = i+2
        graphs.appendChild(column)
    }
}

const reset = () => {
    const graphs = document.getElementById('graphs')
    const resultado = document.getElementById('numbers')
    graphs.innerHTML = ''
    resultado.innerHTML = ''
    buttonOn = true
}

const rolarDados = () => {
    reset()
    let buttonOn = true
    if (buttonOn === true){
        let results = generateResult(1000)
        appendNumbers(results)
        graphs(results)
        buttonOn = false
    }
}

const button = document.getElementById('roll')
button.addEventListener('click', rolarDados)

const buttonReset = document.getElementById('reset')
buttonReset.addEventListener('click', reset)

