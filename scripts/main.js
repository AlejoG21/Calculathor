let currentV=0;
let lastV=0;
let resultV=null;
let operatorActive=false;
let valueHistory= [];
function add(a,b){
return a+b;
};
function substract(a,b){
return a-b;
};
function multiply(a,b){
return a*b;
};
function divide(a,b){
if(b==0){
    alert("fuck off.");
    return;
}
return a/b;
};
function write(number){
    if(operatorActive==true){
        if(currentV ===0){
            currentV=number;
            document.getElementById("display3").textContent=currentV;
            return;
        };
        currentV= currentV+`${number}`;
        document.getElementById("display3").textContent=currentV;
        return;
    };
    if(lastV ===0){
        lastV=number;
        document.getElementById("display1").textContent=lastV;
        return;
    };
    lastV= lastV+`${number}`;
    document.getElementById("display1").textContent=lastV;
    return;
};
function resolve(){
    let value= document.getElementById("display2").textContent;
    switch (value) {
        case "+":
            return add(lastV,currentV);
            
        case "-":
            return substract(lastV,currentV);
            
        case "*":
            return multiply(lastV,currentV);
            
        case "/":
            return divide(lastV,currentV);
            
        default:
            break;
    };
};
function operate(e){
    let value;
    if(e.keyCode==undefined){
    value=e.target.id; 
    }else{value=e.keyCode}
        switch (value) {
            case 107:
            case "add":
                lastV=parseFloat(lastV);
                currentV=parseFloat(currentV);
                if(resultV!==null){
                    lastV=resultV;
                    resultV=null;
                    operatorActive=true;
                    document.getElementById("display1").textContent=lastV;
                    document.getElementById("display2").textContent="+";
                    document.getElementById("display3").textContent="";
                    document.getElementById("display4").textContent="";
                }else if(operatorActive==true){
                    lastV= resolve();
                    if(lastV===undefined){
                        reset();
                        return;
                    };
                    currentV=0;
                    document.getElementById("display1").textContent=lastV;
                    document.getElementById("display2").textContent="+";
                    document.getElementById("display3").textContent="";
                    break;
                }else{
                    operatorActive=true;
                    document.getElementById("display2").textContent="+";
                };
                break;    
            
            case 109:
            case "substract":
                lastV=parseFloat(lastV);
                currentV=parseFloat(currentV);
                if(resultV!==null){
                    lastV=resultV;
                    resultV=null;
                    operatorActive=true;
                    document.getElementById("display1").textContent=lastV;
                    document.getElementById("display2").textContent="-";
                    document.getElementById("display3").textContent="";
                    document.getElementById("display4").textContent="";
                }else if(operatorActive==true){
                    lastV= resolve();
                    if(lastV===undefined){
                        reset();
                        return;
                    };
                    currentV=0;
                    document.getElementById("display1").textContent=lastV;
                    document.getElementById("display2").textContent="-";
                    document.getElementById("display3").textContent="";
                    break;
                }else{
                    operatorActive=true;
                    document.getElementById("display2").textContent="-";
                };
                break;

            case 106:
            case "multiply":
                lastV=parseFloat(lastV);
                currentV=parseFloat(currentV);
                if(resultV!==null){
                    lastV=resultV;
                    resultV=null;
                    operatorActive=true;
                    document.getElementById("display1").textContent=lastV;
                    document.getElementById("display2").textContent="*";
                    document.getElementById("display3").textContent="";
                    document.getElementById("display4").textContent="";
                }else if(operatorActive==true){
                    lastV= resolve();
                    if(lastV===undefined){
                        reset();
                        return;
                    };
                    currentV=0;
                    document.getElementById("display1").textContent=lastV;
                    document.getElementById("display2").textContent="*";
                    document.getElementById("display3").textContent="";
                    break;
                }else{
                    operatorActive=true;
                    document.getElementById("display2").textContent="*";
                };
                break;

            case 111:
            case "divide":
                lastV=parseFloat(lastV);
                currentV=parseFloat(currentV);
                if(resultV!==null){
                    lastV=resultV;
                    resultV=null;
                    operatorActive=true;
                    document.getElementById("display1").textContent=lastV;
                    document.getElementById("display2").textContent="/";
                    document.getElementById("display3").textContent="";
                    document.getElementById("display4").textContent="";
                }else if(operatorActive==true){
                    lastV= resolve();
                    if(lastV===undefined){
                        reset();
                        return;
                    };
                    currentV=0;
                    document.getElementById("display1").textContent=lastV;
                    document.getElementById("display2").textContent="/";
                    document.getElementById("display3").textContent="";
                    break;
                }else{
                    operatorActive=true;
                    document.getElementById("display2").textContent="/";
                };
                break;

            case 13:
            case "equal":
                lastV=parseFloat(lastV);
                currentV=parseFloat(currentV);
                if(operatorActive==true && document.getElementById("display3").textContent==""){
                    alert("Syntax Error");
                }else if(operatorActive==true){
                    resultV= resolve();
                    resultV=resultV.toFixed(2);
                    if(resultV.toString().slice(resultV.length-2)=="00"){
                    resultV=parseInt(resultV);
                    };
                    if(resultV===undefined){
                        reset();
                        return;
                    };
                    currentV=0;
                    lastV=0;
                    document.getElementById("display4").textContent="= "+resultV;
                    operatorActive=false;
                };
                break;

            case 8:
            case "backspace":
                if(resultV!==null){
                    break;
                }else if(operatorActive==true){
                    if(document.getElementById("display3").textContent!==""){
                        document.getElementById("display3").textContent=document.getElementById("display3").textContent.slice(0,(document.getElementById("display3").textContent.length-1));
                        if(document.getElementById("display3").textContent==""){
                            currentV=0;
                        }else{currentV=parseFloat(document.getElementById("display3").textContent);
                        };
                        
                    }else{ document.getElementById("display2").textContent="";
                            operatorActive=false;
                    };
                }else{
                    document.getElementById("display1").textContent=document.getElementById("display1").textContent.slice(0,(document.getElementById("display1").textContent.length-1));
                    if(document.getElementById("display1").textContent==""){
                        lastV=0;
                    }else{lastV=parseFloat(document.getElementById("display1").textContent);
                    };
                };
                break;
            
            case 46:
            case "reset":
                lastV=undefined;
                reset();
                break;

            case 49:
            case 97:
            case "n1":
                reset();
                write(1);
                break;

            case 50:
            case 98:
            case "n2":
                reset();
                write(2);
                break;

            case 51:
            case 99:
            case "n3":
                reset();
                write(3);
                break;

            case 52:
            case 100:
            case "n4":
                reset();
                write(4);
                break;

            case 53:
            case 101:
            case "n5":
                reset();
                write(5);
                break;

            case 54:
            case 102:
            case "n6":
                reset();
                write(6);
                break;

            case 55:
            case 103:
            case "n7":
                reset();
                write(7);
                break;

            case 56:
            case 104:
            case "n8":
                reset();
                write(8);
                break;

            case 57:
            case 105:
            case "n9":
                reset();
                write(9);
                break;

            case 48:
            case 96:
            case "n0":
                reset();
                write(0);
                break;

            case 110:
            case 190:
            case "dot":
                if (operatorActive==true){
                    if(currentV.toString().indexOf(".")==-1){
                        currentV=currentV+".";
                        document.getElementById("display3").textContent=currentV;
                    }else{
                        break;
                    };
                }else{
                    if(lastV.toString().indexOf(".")==-1){
                        lastV=lastV+".";
                        document.getElementById("display1").textContent=lastV;
                    }else{
                        break;
                    };
                };
                break;
            default:
                break;}
};
window.addEventListener('keydown', operate);
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',operate);
});
function reset(){
    if(resultV!==null||lastV==undefined){
        document.getElementById("display1").textContent="";
        document.getElementById("display2").textContent="";
        document.getElementById("display3").textContent="";
        document.getElementById("display4").textContent="";
        resultV=null;
        currentV=0;
        lastV=0;
        operatorActive=false;
    };
}