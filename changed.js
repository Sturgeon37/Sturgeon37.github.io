function find_edit(){
    const item  = document.getElementById('name')
    console.log(item.innerText)
    item.innerHTML="<b>Nikita</b>"

    const item0  = document.getElementById('surname')
    console.log(item0.innerText)
    item0.innerHTML="<b>Lenkov</b>"

    const item1  = document.getElementById('father')
    console.log(item1.innerText)
    item1.innerHTML="<b>Olegovich</b>"

    const item2  = document.getElementById('sex')
    console.log(item2.innerText)
    item2.innerHTML="<b>male</b>"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)