
const units = {
  unitsLength: {
    meter: 1,
    feet: 3.281
  },
  unitsVolume: {
    liter: 1,
    gallon: 0.264
  },
  unitMass:{
    kilos: 1,
    pound: 2.204
  }
}

const numEl = document.querySelector("#num-el")
const convertBtn = document.querySelector("#convert-btn")

const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")

convertBtn.addEventListener("click", function(){
  let num = Number(numEl.value)
  if (num) {

    let feet =    (num * units.unitsLength.feet).toFixed(3)
    let meters =  (num / units.unitsLength.feet).toFixed(3)
    let gallons = (num * units.unitsVolume.gallon).toFixed(3)
    let liters =  (num / units.unitsVolume.gallon).toFixed(3)
    let pounds =  (num * units.unitMass.pound).toFixed(3)
    let kilos =   (num / units.unitMass.pound).toFixed(3)
    
    lengthEl.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
    volumeEl.textContent = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
    massEl.textContent =   `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`
  
  } else {
    alert("Please, put a number before clicking the button")
    lengthEl.textContent =  `"Please, put a number before clicking the button"`
    volumeEl.textContent =   `"Please, put a number before clicking the button"`
    massEl.textContent =     `"Please, put a number before clicking the button"`
  }
})

  