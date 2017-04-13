$(document).ready(function(){
	// 鼠标移入显示下拉菜单
	// $('dom').hover(over,out) over:鼠标移入执行 out:鼠标离开执行
	$(".j_hover").hover(function () {
		// 隐藏所有下拉菜单
  		$(".dropdown-menu").hide();
  		// 显示当前下拉菜单
	    $(this).addClass("active").find(".dropdown-menu").slideDown();
	}, function () {
		// 隐藏当前下拉菜单
	    $(this).removeClass("active").find(".dropdown-menu").slideUp();
	});
});
