function calc(){
    const salin=document.getElementById("sal").value
    const taxin=document.getElementById("tax").value
    const totalsalary=document.getElementById("tsal")
    const tax=document.getElementById("taxamt")
    const handsalary=document.getElementById("hand")
const app=(taxin/100)*salin
totalsalary.innerText=`TotalSalary:${salin}`
tax.innerText=`TaxAmount:${app}`
handsalary.innerText=`Handsalary:${salin-app}`

}
