const inputStart = document.querySelector('#start')
const inputEnd = document.querySelector('#end')
const button = document.querySelector('#button')
const span = document.querySelector('h1 > span')

function calculateDateDiff () {
  let start = inputStart.nodeValue
  let end = inputEnd.nodeValue
  
  start = new Date(start)
  end = new Date(end)

  let diffITime = Math.abs(end - start)
  let timeIndOneDay = 1000 * 60 * 60 * 24 // milisegundos * segundos * minutos * horas dia
  let diffInDays = diffInTime / timeIndOneDay 

  return diffInDays 
  }

  button.addEventListener('click', () => { 
   const diffInDays = calculateDateDiff()
    span.innerHTML = diffInDays


  })
    
