
function tableRow(){
    var table = document.getElementById("table"),rIndex,cIndex;

            // table rows
            for(var i = 1; i < table.rows.length; i++)
            {
                // row cells
                for(var j = 1; j < table.rows[i].cells.length; j++)
                {
                    table.rows[i].cells[j].onclick = function()
                    {
                        rIndex = this.parentElement.rowIndex;
                        cIndex = this.cellIndex;
                        var colname = "colu"+cIndex;
                        var colvalue = document.getElementById(colname).value;
                        // document.getElementById("colname").innerHTML= colvalue;
                        var rowname = "row"+rIndex;
                        var data = document.getElementById(rowname).value;
                        // document.getElementById("rowname").innerHTML= data;   


                        var divIncriment = ($('.yourDivClass').length);    
                        $('#myDiv').append('<div class="yourDivClass" id="div-'+divIncriment+'">You have successfully booked '+data+' on '+colvalue+'</div>');
                        
                    };
                }

            }
}
function tablecan(){
    var table = document.getElementById("table"),rIndex,cIndex;

            // table rows
            for(var i = 1; i < table.rows.length; i++)
            {
                // row cells
                for(var j = 1; j < table.rows[i].cells.length; j++)
                {
                    table.rows[i].cells[j].onclick = function()
                    {
                        rIndex = this.parentElement.rowIndex;
                        cIndex = this.cellIndex;
                        var colname = "colu"+cIndex;
                        var colvalue = document.getElementById(colname).value;
                        // document.getElementById("colname").innerHTML= colvalue;
                        var rowname = "row"+rIndex;
                        var data = document.getElementById(rowname).value;
                        // document.getElementById("rowname").innerHTML= data;   


                        var divIncriment = ($('.yourDivClass').length);    
                        $('#myDiv').append('<div class="yourDivClass" id="div-'+divIncriment+'">You have cancelled '+data+' on '+colvalue+'</div>');
                        
                    };
                }

            }
}
function  Row1_btn1()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn1').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();

    } else {
        document.getElementById('row-1-btn1').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn2()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn2').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn2').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
} 
function  Row1_btn3()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn3').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn3').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn4()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn4').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn4').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn5()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn5').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn5').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn6()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn6').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn6').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn7()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn7').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn7').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn8()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn8').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn8').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn9()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn9').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn9').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
} 
function  Row1_btn10()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn10').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn10').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn11()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn11').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn11').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn12()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn12').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn12').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn13()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn13').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn13').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}
function  Row1_btn14()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-1-btn14').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row1_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-1-btn14').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row1_btn()", 2000);
        tablecan();
    }
}

// row ends here

// row 2 starts here
function  Row2_btn1()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn1').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn1').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn2()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn2').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn2').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
} 
function  Row2_btn3()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn3').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn3').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn4()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn4').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn4').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn5()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn5').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn5').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn6()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn6').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn6').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn7()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn7').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn7').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn8()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn8').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn8').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn9()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn9').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn9').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
} 
function  Row2_btn10()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn10').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn10').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn11()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn11').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn11').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn12()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn12').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn12').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn13()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn13').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn13').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row2_btn14()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-2-btn14').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row2_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-2-btn14').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
// row 2 ends here
// row 3 starts
function  Row3_btn1()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn1').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn1').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn2()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn2').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn2').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
} 
function  Row3_btn3()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn3').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn3').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn4()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn4').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn4').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn5()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn5').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn5').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn6()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn6').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn6').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn7()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn7').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn7').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn8()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn8').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn8').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn9()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn9').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn9').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
} 
function  Row3_btn10()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn10').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn10').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn11()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn11').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn11').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn12()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn12').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn12').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn13()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn13').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn13').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
function  Row3_btn14()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-3-btn14').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row3_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-3-btn14').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row3_btn()", 2000);
        tablecan();
    }
}
// row 3 ends here
// row 4 starts here
function  Row4_btn1()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn1').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn1').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn2()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn2').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn2').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
} 
function  Row4_btn3()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn3').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn3').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn4()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn4').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn4').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn5()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn5').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn5').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn6()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn6').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn6').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn7()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn7').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn7').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn8()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn8').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn8').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn9()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn9').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn9').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
} 
function  Row4_btn10()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn10').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn10').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn11()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn11').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn11').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn12()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn12').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn12').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn13()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn13').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn13').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
function  Row4_btn14()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-4-btn14').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row4_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-4-btn14').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row4_btn()", 2000);
        tablecan();
    }
}
//  row 4 ends here
//  row 5 starts here
function  Row5_btn1()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn1').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn1').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn2()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn2').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn2').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
} 
function  Row5_btn3()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn3').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn3').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn4()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn4').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn4').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn5()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn5').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn5').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn6()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn6').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn6').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn7()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn7').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn7').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn8()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn8').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn8').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn9()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn9').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn9').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
} 
function  Row5_btn10()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn10').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn10').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn11()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn11').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn11').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn12()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn12').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn12').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn13()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn13').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn13').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
function  Row5_btn14()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-5-btn14').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row5_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-5-btn14').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row5_btn()", 2000);
        tablecan();
    }
}
// row 5 ends here
// row 6 starts here
function  Row6_btn1()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn1').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn1').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn2()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn2').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn2').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
} 
function  Row6_btn3()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn3').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn3').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn4()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn4').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn4').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn5()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn5').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn5').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn6()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn6').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn6').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn7()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn7').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn7').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn8()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn8').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn8').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn9()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn9').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn9').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
} 
function  Row6_btn10()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn10').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn10').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn11()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn11').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn11').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn12()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn12').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn12').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn13()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn13').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn13').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
function  Row6_btn14()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-6-btn14').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row6_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-6-btn14').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row6_btn()", 2000);
        tablecan();
    }
}
// row 6 ends here
// row 7 starts here
function  Row7_btn1()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn1').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn1').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row2_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn2()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn2').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn2').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
} 
function  Row7_btn3()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn3').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn3').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn4()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn4').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn4').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn5()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn5').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn5').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn6()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn6').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn6').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn7()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn7').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn7').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn8()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn8').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn8').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn9()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn9').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn9').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
} 
function  Row7_btn10()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn10').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn10').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn11()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn11').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn11').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn12()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn12').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn12').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn13()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn13').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn13').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
function  Row7_btn14()   
{  
    var txt;
    var r = confirm("confirm your booking");
    if (r == true) {
        document.getElementById('row-7-btn14').style.backgroundColor = ' #ff4d4d'; 
        setTimeout("Row7_btn()", 2000);
        tableRow();
    } else {
        document.getElementById('row-7-btn14').style.backgroundColor = '#d9d9d9';  
        setTimeout("Row7_btn()", 2000);
        tablecan();
    }
}
// row 7 ends here

      
