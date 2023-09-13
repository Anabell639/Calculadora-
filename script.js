const ERROR = document.getElementById('error')
const VOLUMEN_DIARIO = document.getElementById('volumen_diario')
const MANTENIMIENTO = document.getElementById('mantenimiento')
const MANTENIMIENTO_Y_MEDIO = document.getElementById('mantenimiento_y_medio')
const INPUT = document.getElementById('peso')
const BUTTON = document.getElementById('calcular')

BUTTON.addEventListener('click', () => {
  let peso = INPUT.value
  const parsedPeso = parseInt(peso)

  if (parsedPeso > 0) {
    ERROR.style.display = 'block'
    ERROR.style.visibility = 'hidden'
    VOLUMEN_DIARIO.style.visibility = 'visible'
    MANTENIMIENTO.style.visibility = 'visible'
    MANTENIMIENTO_Y_MEDIO.style.visibility = 'visible'

    let res = holliday(parsedPeso)

    showResult(res, parsedPeso)
  } else {
    ERROR.style.visibility = 'visible'
    ERROR.innerHTML = '*Debe completar con un número positivo'
    VOLUMEN_DIARIO.style.visibility = 'hidden'
    MANTENIMIENTO.style.visibility = 'hidden'
    MANTENIMIENTO_Y_MEDIO.style.visibility = 'hidden'
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
  const calculoMantenimiento = Math.round(mantent / 24)
  const calculoMantenimientoYMedio = Math.round(
    calculoMantenimiento + calculoMantenimiento * 0.5
  )

  if (peso < 30) {
    VOLUMEN_DIARIO.innerHTML = 'Volumen diario ' + mantent + ' cc'

    MANTENIMIENTO.innerHTML = 'Mantenimiento ' + calculoMantenimiento + ' cc/h'

    MANTENIMIENTO_Y_MEDIO.innerHTML =
      'Mantenimiento y medio ' + calculoMantenimientoYMedio + ' cc/h'
  } else {
    const xMinValue = 1500
    const xMaxValue = 2000

    const calculoMantenimientoXMinValue = Math.round(mantent * xMinValue)
    const calculoMantenimientoXMaxValue = Math.round(mantent * xMaxValue)
    VOLUMEN_DIARIO.innerHTML =
      'Volumen diario ' + calculoMantenimientoXMinValue + ' cc'
    MANTENIMIENTO.innerHTML =
      'Volumen diario ' + calculoMantenimientoXMaxValue + ' cc'
    MANTENIMIENTO_Y_MEDIO.innerHTML = ' '
  }
}
