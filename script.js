//GENERADOR DE PERSONAJES DE DUNGEONS AND DRAGONS



/* let stat = 0
let fuerza = 0
let destreza = 0
let constitucion = 0
let inteligencia = 0
let sabiduria = 0
let  carisma = 0

for (let i = 0; i < 6; i++) {
    
        
    if (i = 1) {
        fuerza = Number(prompt("Ingrese la stat de fuerza de su personaje (es un número del 8 al 15)"))
        stat = fuerza
        
        
    }if (i = 2) {
        destreza = Number(prompt("Ingrese la stat de destreza de su personaje (es un número del 8 al 15)"))
        stat = destreza
         
    } if (i = 3) {
        constitucion = Number(prompt("Ingrese la stat de constitución de su personaje (es un número del 8 al 15)"))
        stat = constitucion
         
    } if (i = 4) {
        inteligencia = Number(prompt("Ingrese la stat de inteligencia de su personaje (es un número del 8 al 15)"))
        stat = inteligencia
    } if (i = 5) {
        sabiduría = Number(prompt("Ingrese la stat de sabiduría de su personaje(es un número del 8 al 15)"))
        stat = sabiduria
    } if (i = 6) {
        carisma = Number(prompt("Ingrese la stat de carisma de su personaje(es un número del 8 al 15)"))
        stat = carisma
    }
    if (stat < 8 || stat > 15 || isNaN(stat)){
                            
        alert("ingrese un número válido")
        i--
    }
               
    }

    alert("su fuerza es " + fuerza)

    function ataqueBase */

    

    /* while (stat < 8 || stat > 15 || stat = NaN) {
        alert("Ingreso no válido, inténtalo de nuevo")
    }
}*/

//Generamos los primeros datos de nuestro personaje

let nombre = String (prompt("Ingrese el nombre de su personaje"))
let clase = Number (prompt("¿Qué clase es su personaje? \n 1- Bárbaro\n 2- Guerrero\n 3- Explorador \n 4- Mago"))
let clasePersonaje = clase


//Verificamos si los datos son válidos
if (clasePersonaje < 1 || clasePersonaje > 4 || isNaN(clase)){

do {
    alert("El valor ingresado es inválido, intente de nuevo")
    let clase = Number (prompt("¿Qué clase es su personaje? \n 1- Bárbaro\n 2- Guerrero\n 3- Explorador \n 4- Mago"))
    clasePersonaje = clase
}


while (clasePersonaje < 1 || clasePersonaje > 4 || isNaN(clase))
}

let raza = Number (prompt("¿Qué raza es su personaje? \n 1- Humano \n 2- Elfo \n 3- Enano \n 4- Orco"))
    razaPersonaje = raza

//Verificamos también para la raza
if (razaPersonaje < 1 || razaPersonaje > 4 || isNaN(raza)){

do {
    alert("El valor ingresado es inválido, intente de nuevo")
    raza = Number (prompt("¿Qué raza es su personaje? \n 1- Humano \n 2- Elfo \n 3- Enano \n 4- Orco"))
    razaPersonaje = raza
}
while (razaPersonaje < 1 || razaPersonaje > 4 || isNaN(raza))
}

//Selección de clase y raza

switch(clasePersonaje){
    case 1 :
        clasePersonaje = "Bárbaro"
        break
    case 2 :
        clasePersonaje = "Guerrero"
        break
    case 3 :
        clasePersonaje = "Explorador"
        break
    case 4 :
        clasePersonaje = "Mago"
        break
        
}

switch(razaPersonaje){
    case 1 :
        razaPersonaje = "Humano"
        break
    case 2 :
        razaPersonaje = "Elfo"
        break
    case 3 :
        razaPersonaje = "Enano"
        break
    case 4 :
        razaPersonaje = "Orco"
}

alert("Su personaje se llama " + nombre + " y es un " + clasePersonaje + " " + razaPersonaje)

// GENERAMOS STATS

//FUERZA

let fuerza = Number(prompt("Ingrese la stat de FUERZA de su personaje (es un número del 8 al 15)"))
let fuerzaPersonaje = fuerza

// Verificamos stat

if (fuerzaPersonaje < 8 || fuerzaPersonaje > 15 || isNaN(fuerza)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        fuerza = Number(prompt("Ingrese la stat de FUERZA de su personaje (es un número del 8 al 15)"))
        fuerzaPersonaje = fuerza
    }
    
    
    while (fuerzaPersonaje < 8 || fuerzaPersonaje > 15 || isNaN(fuerza))
    }


//DESTREZA

let destreza = Number(prompt("Ingrese la stat de DESTREZA de su personaje (es un número del 8 al 15)"))
let destrezaPersonaje = destreza

// Verificamos stat

if (destrezaPersonaje < 8 || destrezaPersonaje > 15 || isNaN(destreza)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        destreza = Number(prompt("Ingrese la stat de DESTREZA de su personaje (es un número del 8 al 15)"))
        destrezaPersonaje = destreza
    }
    
    
    while (destrezaPersonaje < 8 || destrezaPersonaje > 15 || isNaN(destreza))
    }

//CONSTITUCIÓN

let constitucion = Number(prompt("Ingrese la stat de CONSTITUCIÓN de su personaje (es un número del 8 al 15)"))
let constitucionPersonaje = constitucion

// Verificamos stat

if (constitucionPersonaje < 8 || constitucionPersonaje > 15 || isNaN(constitucion)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        constitucion = Number(prompt("Ingrese la stat de CONSTITUCION de su personaje (es un número del 8 al 15)"))
        constitucionPersonaje = constitucion
    }
    
    
    while (constitucionPersonaje < 8 || constitucionPersonaje > 15 || isNaN(constitucion))
    }

//INTELIGENCIA

let inteligencia = Number(prompt("Ingrese la stat de INTELIGENCIA de su personaje (es un número del 8 al 15)"))
let inteligenciaPersonaje = inteligencia

// Verificamos stat

if (inteligenciaPersonaje < 8 || inteligenciaPersonaje > 15 || isNaN(inteligencia)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        inteligencia = Number(prompt("Ingrese la stat de INTELIGENCIA de su personaje (es un número del 8 al 15)"))
        inteligenciaPersonaje = inteligencia
    }
    
    
    while (inteligenciaPersonaje < 8 || inteligenciaPersonaje > 15 || isNaN(inteligencia))
    }

//SABIDURIA

let sabiduria = Number(prompt("Ingrese la stat de SABIDURÍA de su personaje (es un número del 8 al 15)"))
let sabiduriaPersonaje = sabiduria

// Verificamos stat

if (sabiduriaPersonaje < 8 || sabiduriaPersonaje > 15 || isNaN(sabiduria)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        sabiduria = Number(prompt("Ingrese la stat de SABIDURÍA de su personaje (es un número del 8 al 15)"))
        sabiduriaPersonaje = sabiduria
    }
    
    
    while (sabiduriaPersonaje < 8 || sabiduriaPersonaje > 15 || isNaN(sabiduria))
    }

//CARISMA

let carisma = Number(prompt("Ingrese la stat de CARISMA de su personaje (es un número del 8 al 15)"))
let carismaPersonaje = carisma

// Verificamos stat

if (carismaPersonaje < 8 || carismaPersonaje > 15 || isNaN(carisma)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        carisma = Number(prompt("Ingrese la stat de CARISMA de su personaje (es un número del 8 al 15)"))
        carismaPersonaje = carisma
    }
    
    
    while (carismaPersonaje < 8 || carismaPersonaje > 15 || isNaN(carisma))
    }

alert("Sus stats son:\nFuerza: " + fuerzaPersonaje + "\nDestreza: " + destrezaPersonaje + "\nConstitución: " + constitucionPersonaje + "\nInteligencia: " + inteligenciaPersonaje + "\nSabiduría: " + sabiduriaPersonaje + "\nCarisma: " + carismaPersonaje)

//MENÚ
let volverMenu = 1

while (volverMenu == 1) {
    let menuPersonaje = Number(prompt("¿Qué desea saber de su personaje?\n 1-Ver hoja con los datos del personaje\n 2-Simular daño de los ataques"))
    let menuEleccion = menuPersonaje

    //Verificamos si los datos son válidos
    if (menuEleccion < 1 || menuEleccion > 2 || isNaN(menuPersonaje)){

        do {
        alert("El valor ingresado es inválido, intente de nuevo")
        menuPersonaje = Number(prompt("¿Qué desea saber de su personaje?\n 1-Ver hoja con los datos del personaje\n 2-Simular daño de los ataques"))
        menuEleccion = menuPersonaje
        }
    
    
        while (menuEleccion < 1 || menuEleccion > 2 || isNaN(menuPersonaje))
        }

    switch(menuEleccion){
        case 1 :
            alert("Su personaje se llama " + nombre + " y es un " + clasePersonaje + " " + razaPersonaje + "\n \n \nSus stats son:\nFuerza: " + fuerzaPersonaje + "\nDestreza: " + destrezaPersonaje + "\nConstitución: " + constitucionPersonaje + "\nInteligencia: " + inteligenciaPersonaje + "\nSabiduría: " + sabiduriaPersonaje + "\nCarisma: " + carismaPersonaje)
        }

        volverMenu = Number(prompt())



}

    




