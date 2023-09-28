/*Vamos primeiramente criar uma função que recebe a data no formato YYYY/MM/DD

Que é o formato universal para datas.

Vamos criar objetos a partir da classe Date, serão dois:

Um com a data atual;
E o outro com a data baseada na data de aniversário;
Depois vamos fazer subtrações com os valores, para resgatar a diferença entre anos

Que justamente é a idade final! 🙂*/
function getAge(dateString){
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if(m < 0 || (m === 0 && today,getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}
console.log(getAge("2000/09/13"));