function  clickcss(){
//$(".m_Box15 .clickmore2").css({"width":"174px","letter-spacing":"2em","text-indent":"1.5em"});
$(".m_Box15 .clickmore").css({"width":"174px","letter-spacing":"2em","text-indent":"1.5em"});
$('.m_Box15').find('br').remove();}
jQuery(function(){ 
$('#feedAv').remove();
//设置分集展开
	 var moreHeight = $(".m_Box15").height();
	 
		//var allarri= $(".m_Box15").children().length;
	if ($('.m_Box15').children('a').length > 16){
	 if(parseInt(moreHeight) > 90){
//$(".m_Box15.asaa a").each(function(){$(this).prependTo(".m_Box15.asaa")});//倒叙倒序
var $link = $('<a href="javascript:;" class="clickmore">\u5c55\u5f00<i></i></a>');
$('.m_Box15 a:nth-child(11)').after($link);
$(".m_Box15").css({"height":"90px","overflow":"hidden"});
//设置底部上下集
clickcss();
}
	}
///
var thisarr=$('.m_Box15 .thisclass').index(); //当前位置
var lens=12;												 //截断位置
var lastnum=3;												//最后数量
var arri=$(".m_Box15 a:not(:hidden)");			//可显数量
var allarri= $(".m_Box15").children().length;	//总数量
var myarri = allarri - lastnum -1; 							//最后显示位置
var thisarrs = allarri - thisarr;							//位置判断
if(arri.length>lens){
         $('.m_Box15 a:gt('+(lens-1)+')').hide();
		 //$(".m_Box15 a:lt(12)").hide();lt 之前固定数量
		 //$('.m_Box15 a').slice(36,40).show();不能变量

		$('.m_Box15 a:gt('+myarri+')').show();//显示最后四个

		 //
}///
});
//展开按钮
    $(document).on("click",".clickmore",function(){
      $(".m_Box15").css("height","auto");
      $(".clickmore").remove();
	  var $link2 = $('<a href="javascript:;" class="clickmore2">\u6536\u8d77<i></i></a>');
	  $('.m_Box15 a:last-child').after($link2);
	  $('.m_Box15 a').show();
//alert($(".m_Box15 a.thisclass").next().html());
clickcss();
    })
//收起按钮
    $(document).on("click",".clickmore2",function(){
$(".m_Box15").css({"height":"90px","overflow":"hidden"});
      $(".clickmore2").remove();
var $link = $('<a href="javascript:;" class="clickmore">\u5c55\u5f00<i></i></a>');
$('.m_Box15 a:nth-child(11)').after($link);
$(".m_Box15").css({"height":"90px","overflow":"hidden"});
clickcss();
///
var thisarr=$('.m_Box15 .thisclass').index(); //当前位置
var lens=12;												 //截断位置
var lastnum=3;												//最后数量
var arri=$(".m_Box15 a:not(:hidden)");			//可显数量
var allarri= $(".m_Box15").children().length;	//总数量
var myarri = allarri - lastnum -1; 							//最后显示位置
var thisarrs = allarri - thisarr;							//位置判断
if(arri.length>lens){
         $('.m_Box15 a:gt('+(lens-1)+')').hide();
		 //$(".m_Box15 a:lt(12)").hide();lt 之前固定数量
		 //$('.m_Box15 a').slice(36,40).show();不能变量

		$('.m_Box15 a:gt('+myarri+')').show();//显示最后四个

		 //
}///
    });
//
