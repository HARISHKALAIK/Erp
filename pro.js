document.addEventListener("click",() => {

    var a1=parseInt(document.getElementById("a1").innerText);
    var a2=parseInt(document.getElementById("a2").innerText);
    var a3=parseInt(document.getElementById("a3").innerText);
    var math=a1+a2+a3;

    var b1=parseInt(document.getElementById("b1").innerText);
    var b2=parseInt(document.getElementById("b2").innerText);
    var b3=parseInt(document.getElementById("b3").innerText);
    var dbms=b1+b2+b3;

    var c1=parseInt(document.getElementById("c1").innerText);
    var c2=parseInt(document.getElementById("c2").innerText);
    var c3=parseInt(document.getElementById("c3").innerText);
    var ds=c1+c2+c3;

    var d1=parseInt(document.getElementById("d1").innerText);
    var d2=parseInt(document.getElementById("d2").innerText);
    var d3=parseInt(document.getElementById("d3").innerText);
    var se=d1+d2+d3;

    var e1=parseInt(document.getElementById("e1").innerText);
    var e2=parseInt(document.getElementById("e2").innerText);
    var e3=parseInt(document.getElementById("e3").innerText);
    var py=e1+e2+e3;

    var f1=parseInt(document.getElementById("f1").innerText);
    var f2=parseInt(document.getElementById("f2").innerText);
    var f3=parseInt(document.getElementById("f3").innerText);
    var mad=f1+f2+f3;

    var totmarks=[]

totmarks[1]=math;
totmarks[2]=dbms;
totmarks[3]=ds;
totmarks[4]=se;
totmarks[5]=py;
totmarks[6]=mad;



let i=0;
var row=document.getElementById(i);
var col=document.createElement("th");
col.innerText="TOTAL";
row.appendChild(col);
for(k in totmarks){ 
    var row = document.getElementById(i+1); 
    var col = document.createElement("td");
    col.innerText=totmarks[i+1];
    row.appendChild(col);
    i++;
    
}

});
