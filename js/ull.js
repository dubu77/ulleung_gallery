$(document).ready(function(){
    //버튼을 클릭하면 썸네일 이미지 주소를 get한다.
    $("#small button").click(function(){
        //클릭한 버튼의 타이틀 값을 가져온다.
        const x1 = $(this).attr("title");

        //이미 활성화되어있는 버튼 이미지 주소를 변경한다.
        const x2 = $(".active img").attr("src");
        //alert( x2 ); //images/01_active.jpg

        const x3 = x2.replace("_active.jpg",".jpg");
        //alert ( x3 ); //images/01.jpg

        $(".active img").attr("src", x3); //set (값을 변경)

        $("#small button").removeClass("active");

        $(this).addClass("active"); //클릭한 버튼에 클래스 추가

        const x4 = $(this).children().attr("src"); //src 값이 뜸
        // alert(x4); //images/o4.jpg

        const x5 = x4.replace(".jpg","_active.jpg"); //src값에서 해당 텍스트를 변경시킨 후 x5 변수를 생성한 후 값을 대입시킴
        //alert(x5); //images/0n_active.jpg

        $(this).children().attr("src",x5); //클릭한 버튼의 자식요소에서 이미지 주소가 변경되어 이미지가 바뀜


        //const y1 = $(this).children().attr("src");
        //alert(y1); 이미지 주소 데려오기

        const x6 = x4.replace(".jpg","_big.jpg"); //큰 이미지 주소를 변경시켜서 x6 변수를 생성하면서 값을 대입

        $("#big img").attr("src",x6); //이미지 바뀜



    }); //버튼 클릭 부분
}); //끝부분