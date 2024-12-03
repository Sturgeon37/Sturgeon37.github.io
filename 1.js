function find_edit_name(){
    const item  = document.getElementById('name')
    console.log(item.innerText)
    item.innerHTML="<b>Nikita</b>"

}

function find_edit_surname(){
    const item0  = document.getElementById('surname')
    console.log(item0.innerText)
    item0.innerHTML="<b>Lenkov</b>"

}

function find_edit_father(){
    const item1  = document.getElementById('father')
    console.log(item1.innerText)
    item1.innerHTML="<b>Olegovich</b>"

}

function find_edit_sex(){
    const item2  = document.getElementById('sex')
    console.log(item2.innerText)
    item2.innerHTML="<b>male</b>"

}

const node_for_click = document.getElementById("name")
node_for_click.addEventListener("click",find_edit_name)

const node_for_click0 = document.getElementById("surname")
node_for_click0.addEventListener("click",find_edit_surname)

const node_for_click1 = document.getElementById("father")
node_for_click1.addEventListener("click",find_edit_father)

const node_for_click2 = document.getElementById("sex")
node_for_click2.addEventListener("click",find_edit_sex)