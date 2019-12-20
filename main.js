// for basic version of converter
let convertButton = document.getElementById("convertColor")
convertButton.addEventListener("click", event => {
  let valueOfRed = document.querySelector('#red input').value
  let valueOfGreen = document.querySelector('#green input').value
  let valueOfBlue = document.querySelector('#blue input').value
  let stringOfDoubleZero = '00'

  let red = combineString(valueOfRed, stringOfDoubleZero, stringOfDoubleZero)
  let green = combineString(stringOfDoubleZero, valueOfGreen, stringOfDoubleZero)
  let blue = combineString(stringOfDoubleZero, stringOfDoubleZero, valueOfBlue)
  let color = combineString(valueOfRed, valueOfGreen, valueOfBlue)
  let confinedRangeForRed = 0 <= +valueOfRed && +valueOfRed <= 255 && valueOfRed.trim().length !== 0
  let confinedRangeForGreen = 0 <= +valueOfGreen && +valueOfGreen <= 255 && valueOfGreen.trim().length !== 0
  let confinedRangeForBlue = 0 <= +valueOfBlue && +valueOfBlue <= 255 && valueOfBlue.trim().length !== 0

  if (confinedRangeForRed) {
    document.querySelector('#red .color').style = `background-color:${red}`
  }

  if (confinedRangeForGreen) {
    document.querySelector('#green .color').style = `background-color:${green}`
  }

  if (confinedRangeForBlue) {
    document.querySelector('#blue .color').style = `background-color:${blue}`
  }

  let colorCode = convertToHEX(valueOfRed) + convertToHEX(valueOfGreen) + convertToHEX(valueOfBlue);

  if (confinedRangeForRed && confinedRangeForGreen && confinedRangeForBlue) {
    document.querySelector('#showColor input').value = colorCode
    document.querySelector('#showColor .color').style = `background-color:${color}`
  }
})

// for advance version of converter
let sliders = document.getElementById('containerForSlider')
sliders.addEventListener('input', event => {
  let id = event.target.id
  let value = event.target.value
  let valueOfRed = document.querySelector('#sliderForR input').value
  let valueOfGreen = document.querySelector('#sliderForG input').value
  let valueOfBlue = document.querySelector('#sliderForB input').value
  let colorCode = convertToHEX(valueOfRed) + convertToHEX(valueOfGreen) + convertToHEX(valueOfBlue);

  if (id === 'sliderR') {
    document.querySelector('#sliderForR .color').innerText = value
  } else if (id === 'sliderG') {
    document.querySelector('#sliderForG .color').innerText = value
  } else if (id === 'sliderB') {
    document.querySelector('#sliderForB .color').innerText = value
  }

  document.querySelector('#containerForSlider #inputForRGB').value = "#" + colorCode

  document.querySelector('#containerForSlider').style = `background-color:${combineString(valueOfRed, valueOfGreen, valueOfBlue)}`
})


function convertToHEX(value) {
  if (value.trim().length !== 0 && 0 <= +value && +value <= 255) {
    let zero = '0'
    let number = +value
    if (number < 10) {
      return zero + number.toString(16)
    } else if (number < 16) {
      return zero + number.toString(16)
    }
    return number.toString(16)
  }
  return
}

function combineString(red, green, blue) {
  if (convertToHEX(red) !== undefined && convertToHEX(green) !== undefined && convertToHEX(blue) !== undefined) {
    return "#" + convertToHEX(red) + convertToHEX(green) + convertToHEX(blue)
  }
  return
}