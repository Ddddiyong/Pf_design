$(function(){
    $('.clicker').click(function(){
        $('.info_click').slideToggle();
    })
    $('.clicker2').click(function(){
        $('.info_click2').slideToggle();
    })
    $('.clicker3').click(function(){
        $('.info_click3').slideToggle();
    })
    $('.clicker4').click(function(){
        $('.info_click4').slideToggle();
    })
    $('.clicker5').click(function(){
        $('.info_click5').slideToggle();
    })
    $('.clicker6').click(function(){
        $('.info_click6').slideToggle();
    })
})

$(function(){
    $('.sub1').show();
    $('.sub2').hide();
    $('.sub3').hide();
    $('#main1').show();
    $('#main2').hide();
    $('#main3').hide();
    $('#main4').hide();
    $('#gp1').hide();
    $('#gp2').hide();
    $('#gp3').hide();
    $('#gp4').hide();

    //그래픽 로고 본이미지 하이드
    $('#cen1').show();
    $('#cen2').hide();
    $('#cen3').hide();
    $('#cen4').hide();
    $('#cen5').hide();
    $('#cen6').hide();

    //그래픽 배너 본이미지 하이드
    $('#ban1-1').show();
    $('#ban2-1').hide();
    $('#ban3-1').hide();
    $('#ban4-1').hide();
    $('#ban5-1').hide();

    //그래픽 광고 본이미지 하이드
    $('#ad1').show();
    $('#ad2').hide();
    $('#ad3').hide();
    $('#ad4').hide();
    $('#ad5').hide();

    //그래픽 아이콘 본이미지 하이드
    $('#ic1').show();
    $('#ic2').hide();
    $('#ic3').hide();
    $('#ic4').hide();
    $('#ic5').hide();

    $('.btnWd').click(function(){
        $('.sub1').slideDown();
        $('.sub2').hide();
        $('.sub3').hide();
        $('#main1').fadeIn();
        $('#main2').fadeOut();
        $('#main3').fadeOut();
        $('#main4').fadeOut();
        $('#gp1').hide();
        $('#gp2').hide();
        $('#gp3').hide();
        $('#gp4').fadeOut();
    })
    $('.btnGp').click(function(){
        $('.sub2').slideDown();
        $('.sub1').hide();
        $('.sub3').hide();
        $('#main1').fadeOut();
        $('#main2').fadeOut();
        $('#main3').fadeOut();
        $('#main4').fadeOut();
        $('#gp1').fadeIn();
            $('#p1').fadeIn();
            $('#p2').fadeOut();
            $('#p3').fadeOut();
            $('#p4').fadeOut();
            $('#p5').fadeOut();
            $('#p6').fadeOut();
        $('#gp2').fadeOut();
        $('#gp3').fadeOut();
        $('#gp4').fadeOut();
    })
    $('.btnUi').click(function(){
        $('.sub3').slideDown();
        $('.sub1').hide();
        $('.sub2').hide();
        $('#main1').fadeOut();
        $('#main2').fadeOut();
        $('#main3').fadeOut();
        $('#main4').fadeOut();
        $('#gp1').fadeOut();
        $('#gp2').fadeOut();
        $('#gp3').fadeOut();
        $('#gp4').fadeOut();
    })


    //웹디자인 내부 메뉴 클릭시
    $('#sub1-1').click(function(){
        $('#main1').fadeIn();
        $('#main2').fadeOut();
        $('#main3').fadeOut();
        $('#main4').fadeOut();
        
        $('#gp1').hide();
        $('#gp2').hide();
        $('#gp3').hide();
        $('#gp4').hide();
    })
    $('#sub1-2').click(function(){
        $('#main1').fadeOut();
        $('#main2').fadeIn();
        $('#main3').fadeOut();
        $('#main4').fadeOut();
        $('#gp1').hide();
        $('#gp2').hide();
        $('#gp3').hide();
        $('#gp4').hide();
    })
    $('#sub1-3').click(function(){
        $('#main1').fadeOut();
        $('#main2').fadeOut();
        $('#main3').fadeIn();
        $('#main4').fadeOut();
        $('#gp1').hide();
        $('#gp2').hide();
        $('#gp3').hide();
        $('#gp4').hide();
    })
    $('#sub1-4').click(function(){
        $('#main1').fadeOut();
        $('#main2').fadeOut();
        $('#main3').fadeOut();
        $('#main4').fadeIn();
        $('#gp1').hide();
        $('#gp2').hide();
        $('#gp3').hide();
        $('#gp4').hide();
    })

    //그래픽 내부 메뉴 클릭시
    $('#sub2-1').click(function(){
        $('#main4').fadeOut();
        $('#main3').fadeOut();
        $('#main2').fadeOut();
        $('#main1').fadeOut();
        $('#gp1').fadeIn();
        $('#gp2').fadeOut();
        $('#gp3').fadeOut();
        $('#gp4').fadeOut();
        $('#p1').fadeIn();
        $('#p2').fadeOut();
        $('#p3').fadeOut();
        $('#p4').fadeOut();
        $('#p5').fadeOut();
        $('#p6').fadeOut();
    })
    $('#sub2-2').click(function(){
        $('#main4').fadeOut();
        $('#main3').fadeOut();
        $('#main2').fadeOut();
        $('#main1').fadeOut();
        $('#gp1').fadeOut();
        $('#gp2').fadeIn();
        $('#gp3').fadeOut();
        $('#gp4').fadeOut();
    })
    $('#sub2-3').click(function(){
        $('#main4').fadeOut();
        $('#main3').fadeOut();
        $('#main2').fadeOut();
        $('#main1').fadeOut();
        $('#gp1').fadeOut();
        $('#gp2').fadeOut();
        $('#gp3').fadeIn();
        $('#gp4').fadeOut();
    })
    $('#sub2-4').click(function(){
        $('#main4').fadeOut();
        $('#main3').fadeOut();
        $('#main2').fadeOut();
        $('#main1').fadeOut();
        $('#gp1').fadeOut();
        $('#gp2').fadeOut();
        $('#gp3').fadeOut();
        $('#gp4').fadeIn();
    })

    //UXUI 내부 메뉴 클릭시
    $('#sub3-1').click(function(){
        $('#main4').fadeOut();
        $('#main3').fadeOut();
        $('#main2').fadeOut();
        $('#main1').fadeOut();
        $('#gp1').fadeOut();
        $('#gp2').fadeOut();
        $('#gp3').fadeOut();
        $('#gp4').fadeOut();
    })

    //로고 내 아이콘 클릭시
    $('#lo1').click(function(){
        $('#p1').fadeIn();
        $('#p2').fadeOut();
        $('#p3').fadeOut();
        $('#p4').fadeOut();
        $('#p5').fadeOut();
        $('#p6').fadeOut();

        //본문 이미지 생성
        $('#cen1').fadeIn();
        $('#cen2').fadeOut();
        $('#cen3').fadeOut();
        $('#cen4').fadeOut();
        $('#cen5').fadeOut();
        $('#cen6').fadeOut();
    })
    $('#lo2').click(function(){
        $('#p1').fadeOut();
        $('#p2').fadeIn();
        $('#p3').fadeOut();
        $('#p4').fadeOut();
        $('#p5').fadeOut();
        $('#p6').fadeOut();

        $('#cen1').fadeOut();
        $('#cen2').fadeIn();
        $('#cen3').fadeOut();
        $('#cen4').fadeOut();
        $('#cen5').fadeOut();
        $('#cen6').fadeOut();
    })
    $('#lo3').click(function(){
        $('#p1').fadeOut();
        $('#p2').fadeOut();
        $('#p3').fadeIn();
        $('#p4').fadeOut();
        $('#p5').fadeOut();
        $('#p6').fadeOut();

        $('#cen1').fadeOut();
        $('#cen2').fadeOut();
        $('#cen3').fadeIn();
        $('#cen4').fadeOut();
        $('#cen5').fadeOut();
        $('#cen6').fadeOut();
    })
    $('#lo4').click(function(){
        $('#p1').fadeOut();
        $('#p2').fadeOut();
        $('#p3').fadeOut();
        $('#p4').fadeIn();
        $('#p5').fadeOut();
        $('#p6').fadeOut();

        $('#cen1').fadeOut();
        $('#cen2').fadeOut();
        $('#cen3').fadeOut();
        $('#cen4').fadeIn();
        $('#cen5').fadeOut();
        $('#cen6').fadeOut();
    })
    $('#lo5').click(function(){
        $('#p1').fadeOut();
        $('#p2').fadeOut();
        $('#p3').fadeOut();
        $('#p4').fadeOut();
        $('#p5').fadeIn();
        $('#p6').fadeOut();

        $('#cen1').fadeOut();
        $('#cen2').fadeOut();
        $('#cen3').fadeOut();
        $('#cen4').fadeOut();
        $('#cen5').fadeIn();
        $('#cen6').fadeOut();
    })
    $('#lo6').click(function(){
        $('#p1').fadeOut();
        $('#p2').fadeOut();
        $('#p3').fadeOut();
        $('#p4').fadeOut();
        $('#p5').fadeOut();
        $('#p6').fadeIn();

        $('#cen1').fadeOut();
        $('#cen2').fadeOut();
        $('#cen3').fadeOut();
        $('#cen4').fadeOut();
        $('#cen5').fadeOut();
        $('#cen6').fadeIn();
    })
    

    //배너 내 아이콘 클릭시
    $('#ban1').click(function(){
        //본문 이미지 생성
        $('#ban1-1').fadeIn();
        $('#ban2-1').fadeOut();
        $('#ban3-1').fadeOut();
        $('#ban4-1').fadeOut();
        $('#ban5-1').fadeOut();
    })
    $('#ban2').click(function(){
        //본문 이미지 생성
        $('#ban2-1').fadeIn();
        $('#ban1-1').fadeOut();
        $('#ban3-1').fadeOut();
        $('#ban4-1').fadeOut();
        $('#ban5-1').fadeOut();
    })
    $('#ban3').click(function(){
        //본문 이미지 생성
        $('#ban3-1').fadeIn();
        $('#ban1-1').fadeOut();
        $('#ban2-1').fadeOut();
        $('#ban4-1').fadeOut();
        $('#ban5-1').fadeOut();
    })
    $('#ban4').click(function(){
        //본문 이미지 생성
        $('#ban4-1').fadeIn();
        $('#ban1-1').fadeOut();
        $('#ban3-1').fadeOut();
        $('#ban2-1').fadeOut();
        $('#ban5-1').fadeOut();
    })
    $('#ban5').click(function(){
        //본문 이미지 생성
        $('#ban5-1').fadeIn();
        $('#ban1-1').fadeOut();
        $('#ban3-1').fadeOut();
        $('#ban4-1').fadeOut();
        $('#ban2-1').fadeOut();
    })

    //광고 내 아이콘 클릭시
    $('#adB1').click(function(){
        //본문 이미지 생성
        $('#ad1').fadeIn();
        $('#ad2').fadeOut();
        $('#ad3').fadeOut();
        $('#ad4').fadeOut();
        $('#ad5').fadeOut();
    })
    $('#adB2').click(function(){
        $('#ad2').fadeIn();
        $('#ad1').fadeOut();
        $('#ad3').fadeOut();
        $('#ad4').fadeOut();
        $('#ad5').fadeOut();
    })
    $('#adB3').click(function(){
        $('#ad3').fadeIn();
        $('#ad1').fadeOut();
        $('#ad2').fadeOut();
        $('#ad4').fadeOut();
        $('#ad5').fadeOut();
    })
    $('#adB4').click(function(){
        $('#ad4').fadeIn();
        $('#ad1').fadeOut();
        $('#ad3').fadeOut();
        $('#ad2').fadeOut();
        $('#ad5').fadeOut();
    })
    $('#adB5').click(function(){
        $('#ad5').fadeIn();
        $('#ad1').fadeOut();
        $('#ad3').fadeOut();
        $('#ad4').fadeOut();
        $('#ad2').fadeOut();
    })

    //아이콘 내 아이콘 클릭시
    $('#icB1').click(function(){
        //본문 이미지 생성
        $('#ic1').fadeIn();
        $('#ic2').fadeOut();
        $('#ic3').fadeOut();
    })
    $('#icB2').click(function(){
        $('#ic2').fadeIn();
        $('#ic1').fadeOut();
        $('#ic3').fadeOut();
    })
    $('#icB3').click(function(){
        $('#ic3').fadeIn();
        $('#ic1').fadeOut();
        $('#ic2').fadeOut();
    })
})
$(function(){
    $('.subMenu > ul > li').click(function(){
        // 클래스 제거(상태 초기화)
        $('.subMenu li').removeClass('selected');
    
        // 클래스 추가
        $(this).addClass('selected');
    
        // a태그 하이퍼링크 기본 이벤트 해제
        return false;
    });
})