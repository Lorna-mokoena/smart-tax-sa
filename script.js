function calcPAYE(){

let salary=
parseFloat(
document.getElementById("salary").value
)||0;

let tax=salary*.18;

let net=salary-tax;

document.getElementById(
"result"
).innerHTML=
"Net salary estimate: R"+
net.toFixed(2);

}



function calcUIF(){

let salary=
parseFloat(
document.getElementById("salary").value
)||0;

let uif=salary*.01;

document.getElementById(
"result"
).innerHTML=
"Estimated UIF: R"+
uif.toFixed(2);

}