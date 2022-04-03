$(document).ready(function(){
    $("#ex_01 .input_box").focus(function(){
        $("#ex_01 .input_text").text("focus");
    });
    $("#ex_01 .input_box").blur(function(){
        $("#ex_01 .input_text").text("blur");
    });
    
    $("#ex_02 .submit_form").submit(function(){
        var $value=$("#ex_02 input[type='text']").val();
        console.log($value);
        if($value.length < 1){
            $(this).attr("action", "");
            $("#ex_02 .input_text").text("내용을 입력하십시오.").show();
            return false;
        }else{
            $(this).attr("action", "login.php");
        }
    });
});