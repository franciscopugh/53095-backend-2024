const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";

const buscarCiudad = async (ciudad, provincia, pais) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${provincia},${pais}&limit=1&appid=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (e) {
        console.log("Error al consultar la ciudad: ", e)
        return e
    }

}
//Desestructurar en los parametros de una funcion
const buscarClima = async ({ lat, lon }) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (e) {
        console.log("Error al buscar clima: ", e)
        return e
    }

}

//buscarCiudad("Buenos Aires", "Buenos Aires", "Argentina").then(data => buscarClima(...data))

const consultarTiempo = async (ciudad, provincia, pais) => {
    try {
        const datosCiudad = await buscarCiudad(ciudad, provincia, pais)
        const datosClima = await buscarClima(datosCiudad[0])
        console.log(datosClima)
    } catch (e) {
        console.log("Error al consultar el tiempo: ", e)
    }

}

consultarTiempo("Florianopolis", "Santa Catarina", "Brasil")