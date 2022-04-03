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

    /* 
    //  선택자로 li 또는 input 가능
    $("#ex_05 .img-chk li").change(function(){
        $("#ex_05 .img-chk li").each(function(){
            var $index=$(this).index();
            var $checked=$(this).find("input").is(":checked");
            if($checked==true){
                $(this).find("input").attr("checked","checked");
                $("#ex_05 .img-group > div").eq($index).css("display", "inline-block");
                // $("#ex_05 .img-group > div").eq($index).css("opacity", "1");
            }else{
                $(this).find("input").removeAttr("checked","checked");
                $("#ex_05 .img-group > div").eq($index).hide();
                // $("#ex_05 .img-group > div").eq($index).css("opacity", "0");
            }
        });
    });
     */
    /* 
    $("#ex_06 p button").click(function(){
        $("#ex_06 .img-chk li").each(function(){
            var $index=$(this).index();
            var $checked=$(this).find("input").is(":checked");
            if($checked==true){
                $(this).find("input").attr("checked","checked");
                $("#ex_06 .img-group > div").eq($index).css("display", "inline-block");
            }else{
                $(this).find("input").removeAttr("checked","checked");
                $("#ex_06 .img-group > div").eq($index).hide();
            }
        });
    });
     */

    // 체크시 해당하는 이미지가 보여지도록 구성 change() 이벤트 + each문 + is() 메서드 => 현재 상태가 체크되어있는지 확인
    $("#ex_05 .img-chk li").change(function(){
        console.log("체인지 이벤트 발생");
        $("#ex_05 .img-chk li").each(function(index){ /* this 사용 안됨 */
            console.log(index);
            var $chk=$(this).find("input").is(":checked");
            console.log($chk);
            if($chk==true){
                $("#ex_05 .img-group > div").eq(index).css("display","inline-block"); /* show()(display: block;)가 아닌 display: inline-block; */
            }else{
                $("#ex_05 .img-group > div").eq(index).hide();
            }
        });
    });
    
    // 검색이라는 버튼에 대란 부분을 클릭시, click() 이벤트 + each문 + is() 메서드
    $("#ex_06 p button").click(function(){
        console.log("체인지 이벤트 발생");
        $("#ex_06 .img-chk li").each(function(index){
            var $chk=$(this).find("input").is(":checked");
            if($chk==true){
                $("#ex_06 .img-group > div").eq(index).css("display","inline-block");
            }else{
                $("#ex_06 .img-group > div").eq(index).hide();
            }
        });
    });

    $("#ex_07 p button").click(function(){
        $("#ex_07 .img-chk li").each(function(index){
            var $chk=$(this).find("input").is(":checked");
            if($chk==true){
                $("#ex_07 .img-group > div").eq(index).css("display","inline-block");
            }else{
                $("#ex_07 .img-group > div").eq(index).hide();
            }
        });
    });

    // click 이벤트 + val() 메서드 => value값을 추출
    // or 검색 : 여러가지 항목 중에서 하나라도 만족하면 결과를 보여준다. ex) 구글 검색
    // and 검색 : 모든 조건을 만족해야 결과를 보여준다. ex) 항공권 검색
    
    // 데이터의 값을 저장할 수 있는 전역변수
    var $sel_01=""; // 여행 지역 value값 저장
    var $sel_02=""; // 여행 타입 value값 저장
    var $txt_01=""; // 여행 지역의 실제 텍스트 문구 저장
    var $txt_02=""; // 여행 타입의 실제 텍스트 문구 저장

    $("#ex_08 .sel_btn").click(function(){
        $("#ex_08 .category_01 p input:checked").each(function(){
            $sel_01=$(this).val();
            $txt_01=$(this).next().text();
            console.log($sel_01);
            console.log($txt_01);
        });
        $("#ex_08 .category_02 p input:checked").each(function(){
            $sel_02=$(this).val();
            console.log($sel_02);
            $txt_02=$(this).next().text();
            console.log($txt_02);
        });

        $("#ex_08 .img-box div").hide(); // 전체 이미지 숨기기
        
        // or 검색(넓은 범위의 검색;타켓을 넓힐 시 사용)
        // $("#ex_08 .img-box div[data-region*='"+$sel_01+"']").show(); // 속성 data-region의 속성값이 $sel_01과 동일한 경우에만 보여준다
        // $("#ex_08 .img-box div[data-type*='"+$sel_02+"']").show(); // 속성 data-type의 속성값이 $sel_02과 동일한 경우에만 보여준다

        // and 검색(좁은 범위의 검색;타켓을 좁힐 때 사용)
        $("#ex_08 .img-box div[data-region*='"+$sel_01+"'][data-type*='"+$sel_02+"']").show();

        $("#ex_08 .img-txt").slideUp().slideDown().text("고객님이 선택한 여행지는 "+$txt_01+"이며, 여행 타입은 "+$txt_02+"입니다.");
        // chainning 기법 : 이벤트 효과를 순차적으로 적용하는 방법
    });
});