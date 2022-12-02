let $elform = document.querySelector('#form')
let $eltext = document.querySelector('#text')
// let $eltext = document.querySelector('#text')
// let $el = document.querySelector('#text')

let $eliteam = document.querySelector('.iteam')

let $elul = document.querySelector('.list')
let $eldeletedbtn = document.querySelector('#deletedbtn')



$elform.addEventListener('submit', (evn)=> {
    evn.preventDefault()

    
    let $elli = document.createElement('li')
    $elli.classList.add('iteam')


    $elli.innerHTML= `
    <input type="checkbox" name="checkbox" id="checkbox">
    <p class="iteamText">${$eltext.value}</p>
    <button class="btn">Deleted</button>
    `
  $elul.append($elli)
  
  $eltext.value = ''


  deleted($elli)
})


let deleteBox = []

function deleted(ele) {
    ele.addEventListener("click", (evn)=>{
        if (evn.target.classList == 'btn') {
            let split = ele.innerHTML
            let split2 = split
            deleteBox += split2


            console.log(deleteBox);



            ele.remove()

        }          
    })
}

// deleteBox

$eldeletedbtn.addEventListener('click', (evn)=> {
    // evn.preventDefault()
    let join = deleteBox.join(" ")

    console.log(deleteBox);
    for (let i = 0; i < join.length; i++) {
       console.log(join);
    
    }

})
