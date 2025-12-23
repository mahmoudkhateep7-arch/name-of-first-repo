let btn = document.querySelector('button')

let input = document.querySelector('input')

let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let p3 = document.querySelector('.p3')
let as = () => {
  p1.textContent = `${input.value} meters= ${(Number(input.value) * 3.281).toFixed(2)} feet 
   | ${input.value} feet =   ${(Number(input.value) / 3.281).toFixed(3)} meters`

  p2.textContent = `${input.value} liters= ${(Number(input.value) * 0.264).toFixed(2)} gallon 
   | ${input.value} gallon =   ${(Number(input.value) / 0.264).toFixed(3)} liters`

  p3.textContent = `${input.value} kilograms= ${(Number(input.value) * 2.204).toFixed(2)} pounds 
   | ${input.value} pounds =   ${(Number(input.value) / 2.204).toFixed(3)} kilograms`
}


input.addEventListener('input', () => {
as()
})
btn.addEventListener('click', () => {
as()
})
as()