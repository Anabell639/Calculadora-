const ERROR = document.getElementById('error')
const MANTENIMIENTO = document.getElementById('mantenimiento')
const MANTENIMIENTO_Y_MEDIO = document.getElementById('mantenimiento_y_medio')
const INPUT = document.getElementById('peso')
const BUTTON = document.getElementById('calcular')

BUTTON.addEventListener('click', () => {
  let peso = INPUT.value
  const parsedPeso = parseInt(peso)

  if (parsedPeso > 0) {
    ERROR.style.display = 'block'

    let res = holliday(parsedPeso)

    showResult(res, parsedPeso)
  } else {
    console.log('error')
    ERROR.innerHTML = '*Debe completar con un número positivo'
  }
})

function holliday (peso) {
  let volumen

  if (peso <= 10) {
    volumen = peso * 100
  } else if (peso > 10 && peso <= 20) {
    volumen = 1000 + (peso - 10) * 50
  } else if (peso > 20 && peso <= 30) {
    volumen = 1500 + (peso - 20) * 20
  } else if (peso > 30) {
    volumen = (peso * 4 + 7) / (peso + 90)
  }
  return volumen
}

function showResult (mantent, peso) {
  const calculoMantenimientoYMedio = mantent + mantent * 0.5

  if (peso < 30) {
    MANTENIMIENTO.innerHTML = 'Mantenimiento ' + mantent + ' cc/h'

    MANTENIMIENTO_Y_MEDIO.innerHTML =
      'Mantenimiento y medio ' + calculoMantenimientoYMedio + ' cc/h'
  } else {
    const xMinValue = 1500
    const xMaxValue = 2000

    const calculoMantenimientoXMinValue = Math.round(mantent * xMinValue)
    const calculoMantenimientoXMaxValue = Math.round(mantent * xMaxValue)
    MANTENIMIENTO.innerHTML =
      'Mantenimiento ' +
      calculoMantenimientoXMinValue +
      ' cc/h' +
      ' / ' +
      calculoMantenimientoXMaxValue +
      ' cc/h'

    const calculoMantenimientoYMedioXMinValue = Math.round(
      calculoMantenimientoYMedio * xMinValue
    )
    const calculoMantenimientoYMedioXMaxValue = Math.round(
      calculoMantenimientoYMedio * xMaxValue
    )
    MANTENIMIENTO_Y_MEDIO.innerHTML =
      'Mantenimiento y medio ' +
      calculoMantenimientoYMedioXMinValue +
      ' cc/h' +
      ' / ' +
      calculoMantenimientoYMedioXMaxValue +
      ' cc/h'
  }
}
