module.exports = function toReadable (n) {
    let n1=String(n);
    let n2=n1.split('');
    let n3=n2.reverse();
    let first='';
    if (n3[0]==1){first='one';}
    if (n3[0]==2){first='two';}
    if (n3[0]==3){first='three';}
    if (n3[0]==4){first='four';}
    if (n3[0]==5){first='five';}
    if (n3[0]==6){first='six'}
    if (n3[0]==7){first='seven';}
    if (n3[0]==8){first='eight';}
    if (n3[0]==9){first='nine';}
    
    
    let second='';
    if (n2[0]==0 && n2[1]==1){second='ten';}
    if (n2[0]==1 && n2[1]==1){second='eleven';}
    if (n2[0]==2 && n2[1]==1){second='twelve';}
    if (n2[0]==3 && n2[1]==1){second='thirteen';}
    if (n2[0]==4 && n2[1]==1){second='fourteen';}
    if (n2[0]==5 && n2[1]==1){second='fifteen';}
    if (n2[0]==6 && n2[1]==1){second='sixteen';}
    if (n2[0]==7 && n2[1]==1){second='seventeen';}
    if (n2[0]==8 && n2[1]==1){second='eighteen';}
    if (n2[0]==9 && n2[1]==1){second='nineteen';}
    
    if (n2[1]==2){second='twenty';}
    if ( n2[1]==2){second='twenty';}
    if ( n2[1]==3){second='thirty';}
    if ( n2[1]==4){second='forty';}
    if ( n2[1]==5){second='fifty';}
    if ( n2[1]==6){second='sixty';}
    if ( n2[1]==7){second='seventy';}
    if ( n2[1]==8){second='eighty';}
    if ( n2[1]==9){second='ninety';}
    
    let therd='';
    if (n3[2]==1){therd='one';}
    if (n3[2]==2){therd='two';}
    if (n3[2]==3){therd='three';}
    if (n3[2]==4){therd='four';}
    if (n3[2]==5){therd='five';}
    if (n3[2]==6){therd='six'}
    if (n3[2]==7){therd='seven';}
    if (n3[2]==8){therd='eight';}
    if (n3[2]==9){therd='nine';}
    
    
    let str='';
    if (n==0){str='zero';}
    if(n<10){str=first;}

    if(n>9 && n<20){str=second;}
    if (n>20 && n<100){
        if(n3[0]==0){str=second;}
        else{str=second+' '+first;}
    }
    if(n>99 && n<1000){
       
        if(n3[1]==0 && n3[0]==0){str=therd+' hundred';}
    
        else if((n3[0]==9 && n3[1]==1)||(n3[0]==8 && n3[1]==1)||(n3[0]==7 && n3[1]==1)||(n3[0]==6 && n3[1]==1)||(n3[0]==5 && n3[1]==1)||(n3[0]==4 && n3[1]==1)||(n3[0]==3 && n3[1]==1)||(n3[0]==2 && n3[1]==1)||(n3[0]==1 && n3[1]==1)||(n3[0]==0 && n3[1]==1)){str=therd+' hundred '+second;}
        else if(second==''){str=therd+' hundred'+second +' '+first;}
        else if(first==''){str=therd+' hundred '+second;}
        else if(n3[0]!==0){str=therd+' hundred '+second +' '+first;}
      
        
        return str; 
}
}
