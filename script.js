let aprobado 
let desaprobado 

do {
    aprobado = parseInt(prompt ("ingresar nota"))
    if( aprobado >= 7){
        alert("felicitaciones estas aprobado!")
    }
    
    desaprobado = parseInt(prompt ("ingrese nota"))
    if(desaprobado <= 6){
    alert("lo siento, estas desaprobado")
    }

}while(
        (aprobado >=7)
        (desaprobado <=6)
)

console.log(aprobado,desaprobado)