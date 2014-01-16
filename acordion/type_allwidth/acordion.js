// JavaScript Document
//アコーディオン
jQuery(function(){
	jQuery("#acordion dt").on("click", function() {
		jQuery(this).next().slideToggle();
		jQuery(this).toggleClass("active");
	});
});
