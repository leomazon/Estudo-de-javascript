// Verifique se a sua idade é maior do que a de algum parente 
// Compare o total de habitantes do Brasil com China (valor em mi

const idadeMazon = 20;
const idadeAna = 19;

if(idadeMazon > idadeAna) {
    console.log("A idade do leonardo que é " + idadeMazon + ", é maior à idade da ana que é " + idadeAna);
} else{
    console.log('As idades não são iguais')
}


// Qual valor é retornado na seguinte expressão? 
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); 

console.log(expressao)
 
// Verifique se as seguintes variáveis são Truthy ou Falsy 
var nome = 'Andre'; 
var idade = 28; 
var possuiDoutorado = false; 
var empregoFuturo; 
var dinheiroNaConta = 0; 

// O que irá aparecer no console? 
if(('Gato' === 'gato') && (5 > 2)) { 
    console.log('Verdadeiro'); 
  } else { 
    console.log('Falso'); 
  } 
  // O que irá aparecer no console? 
  if(('Gato' === 'gato') || (5 > 2)) { 
    console.log('Gato' && 'Cão'); 
  } else { 
    console.log('Falso'); 
  }

  let numero2 = cor == "Vermelho" ? 10 : 20

  console.log(numero2())
