
function dividir (num1,num2){
    if(num1==0||num2==0){
        return 'Não se pode dividir por 0'
    }
    return num1/num2
}
module.exports = dividir