const root = document.querySelector(':root')
const cssVariables = getComputedStyle(root)

function change(prop, value) {
    root.style.setProperty('--' + prop, value)
    updateOutput()
}

function reset(element, value, px = '') {
    document.getElementById(element).value = value
    change(element, value + px)
}

function updateOutput() {
    const outputElement = document.querySelector('#output')

    outputElement.innerHTML = '<span style="color: #0075ff">-webkit-</span>'

    outputElement.innerHTML += `box-shadow: 
        ${cssVariables.getPropertyValue('--x')} 
        ${cssVariables.getPropertyValue('--y')} 
        ${cssVariables.getPropertyValue('--blur')} 
        ${cssVariables.getPropertyValue('--spread')} 
        ${cssVariables.getPropertyValue('--color')}`

    if(document.querySelector('#box').className == 'twobs') {
        outputElement.innerHTML += `, 
        ${cssVariables.getPropertyValue('--x2')} 
        ${cssVariables.getPropertyValue('--y2')} 
        ${cssVariables.getPropertyValue('--blur2')} 
        ${cssVariables.getPropertyValue('--spread2')} 
        ${cssVariables.getPropertyValue('--color2')}`
    }

    outputElement.innerHTML += ';'
}

function shadowController() {
    document.querySelector('#box').classList.toggle('bs')
    document.querySelector('#box').classList.toggle('twobs')
    document.querySelector('#additional').classList.toggle('open')

    if(document.querySelector('#box').className == 'twobs')
        document.querySelector('#action-btn').innerHTML = 'Remove shadow'
    else
        document.querySelector('#action-btn').innerHTML = 'Add shadow'

    updateOutput()
}