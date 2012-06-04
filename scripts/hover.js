     $(document).ready(function(){	   
		$('img.navElement').hover(function() {
		$(this).attr("src","img/" + this.name + "_over.gif");
			}, function() {
		$(this).attr("src","img/" + this.name + "_off.gif");
		});
     });