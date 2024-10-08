$(document).ready(function () {

    $(".mgnb_wrap").hide();
    $(".btn_sitemap").click(function(){
        $(".mgnb_wrap").stop().slideDown();
    });

    $(".mgnb_close").click(function(){
        $(".mgnb_wrap").stop().slideUp();
    });

    $(".m_gnb > li > a").click(function(event) {
        event.preventDefault(); 
        var target = $(this).attr("href"); 
    
        // 메뉴 닫기
        $(".mgnb_wrap").stop().slideUp(function() {
            // 섹션으로 스크롤 이동
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 500); // 500ms에 애니메이션으로 이동
        });
    });
    
});