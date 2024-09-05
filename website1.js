function expensesForm(event){
    event.preventDefault();
    const amount=event.target.amount.value;
    const typeofexp=event.target.typeofexp.value;
    const name=event.target.name.value;
    console.log(typeofexp)
    const obj={
        amount,
        typeofexp,
        name,

    }
    localStorage.setItem(obj.name, JSON.stringify(obj))
    ShowUserOnScreen(obj)
}
function ShowUserOnScreen(obj){
    const parent=document.getElementById('list')
    const childele=document.createElement('li')
    childele.textContent=`${obj.amount}`+" "+ `${obj.name}`+" " +`${obj.typeofexp}`
    parent.appendChild(childele)
    
    const delbtn=document.createElement("button")
    delbtn.type='button'
    delbtn.textContent='Delete'
    delbtn.onclick=()=>{
        localStorage.removeItem(obj.name)
        parent.removeChild(childele)
    }
    childele.appendChild(delbtn)

    const edbtn=document.createElement("button")
    edbtn.type="button"
    edbtn.textContent="Edit"
    edbtn.onclick=()=>{
        localStorage.removeItem(obj.name)
        parent.removeChild(childele)
        document.getElementById("amount").value=obj.amount
        document.getElementById("name").value=obj.name
        document.getElementById("typeofexp").value=obj.typeofexp
    }
      childele.appendChild(edbtn)
     


}