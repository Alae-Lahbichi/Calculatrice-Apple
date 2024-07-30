let input = document.querySelector('.result')
let btn = document.querySelectorAll('.nbr-btn')
let op = document.querySelectorAll('.operateur')
let solution = document.querySelector('.solution')
let res = document.querySelector('.res')
let signe = document.querySelector('.signe')
let pourcentage = document.querySelector('.pourcentage')

function fixer(value) {
    let str = String(value)
    
    let decimalIndex = str.indexOf('.')
    
    if (decimalIndex === -1 || str.length - decimalIndex - 1 <= 2) {
        return Number(str) 
    }
    
    return parseFloat(value).toFixed(5);
}

pourcentage.addEventListener('click' , function(){
      let x = Number(input.value)
      x /=100
      input.value = String(x)
})

signe.addEventListener('click' , ()=>{
    let x = Number(input.value)
     x *= -1
     input.value = String(x)
})

res.addEventListener('click' , ()=>{
    input.value = ''
})

btn.forEach((e)=>{
    e.addEventListener('click',()=>{
        input.value += e.textContent
    })
})

op.forEach((e)=>{
    e.addEventListener('click',()=>{
        input.value += e.value
    })
})

solution.addEventListener('click' , function(){
    try{
    let res = eval(input.value)
    res = fixer(res)
    input.value = String(res)  
    }
    catch(e){
        input.value = "Erreur"
    }
})

