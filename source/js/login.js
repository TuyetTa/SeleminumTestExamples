$(document).ready(function(){
    $("#cal").click(function(){      
        if($("#fnum").val()=="" || $("#snum").val()==""){
            $("#result").text("Enter fully");
        }else if (isNaN($("#fnum").val()) || isNaN($("#snum").val())){
            $("#result").text("Enter a number!");        
        } else {
            var x = parseInt($("#fnum").val());
            var y = parseInt($("#snum").val());          
          
            var opp = $('input[name=operation]:checked').val();
            var rs = 0;
            if(opp == "add"){
                rs = x + y;
            }
            if (opp == "sub"){
                rs = x - y;                
            }
            if (opp == "mul"){
                rs = x * y;
            }
            if (opp == "divi"){
                rs = x / y;
            }
            $("#result").text(rs);
        }
    });
});