//trasformDegree('50F')

function trasformDegree(degree)
{
    const celsiusExists = degree.toUpperCase().includes('C')
    const farenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !farenheitExists) {
        throw  new Error ('Grau não indetificado')

    }
    

    //fluxo ideal F -> C
let updateDegree = Number(degree.toUpperCase().replace("F", ""));    
let formula  =(farenheit) => (farenheit - 32) * 5/9
let degreeSign = 'C'

if(celsiusExists) {

     updateDegree = Number(degree.toUpperCase().replace("C", ""));    
    formula  =(celsuis) => celsuis * 9/5 + 32
     degreeSign = 'F'
    

}


}


return formula {updateDegree} + degreeSign

    

    try {
       console.log(trasformDegree) ('10C')
       console.log(trasformDegree) ('50F')
        trasformDegree (`50Z`)

    } catch (error) {
    console.log (error.message)

    }