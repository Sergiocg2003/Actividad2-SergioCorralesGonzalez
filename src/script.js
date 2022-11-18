let aniosbisiestos = [];
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 */
function isLeapYear(num1 ,num2){
    let año1 = num1
    let año2 = num2 
    if(typeof(año1) != "number" || typeof(año2) != "number"){
        document.getElementById("respuesta").innerHTML = `Has escrito algun parametro no acepatdo`
    }
    else{
        año1 = Math.floor(año1)
        año2 = Math.floor(año2)
        if(año1 < 2001 || año2 > 2500){
            document.getElementById("respuesta").innerHTML = `Has escrito algun parametro por debajo de 2001 o por encima de 2500`
        }
        else{
            let comprobar = año1
            while(comprobar<año2){
                if(comprobar%4 === 0 || comprobar%100 === 0 && comprobar%400 === 0){
                    aniosbisiestos.pop(comprobar)
                    console.log(comprobar)
                    break
                }
                else{
                    comprobar = comprobar + 1
                }
            }
            return document.getElementById("respuesta").innerHTML = aniosbisiestos.toString()
        }
    }
    
}
isLeapYear(2003, 2050)