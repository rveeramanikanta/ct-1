var typingSpeed = 10;
var cLanguageTimelineReady = function() {
	var l = $(".timeline li").offset();
	$(".animation-bar").offset({
		top : l.top + $(".timeline li").outerHeight() / 2 - 2,
		left : l.left
	});
	$("[data-toggle='popover']").popover({html : true});
	timeline(".li1", "animation2()");
	$('#restart').click(function() {
		location.reload();
	});
}
function timeline(liSelector, nextAnimation) {
	$(liSelector).removeClass("hide");
	$(liSelector + " [data-toggle='popover']").popover("show");
	var text = $(liSelector + ' .popover-content').html(); 
	typing(liSelector + ' .popover-content', text, function() {
		$(liSelector).addClass("animate").one("transitionend", function() {
			if (liSelector == ".li1" || liSelector == ".li2") {
				$(liSelector + " .developer-name").removeClass("hide").addClass("animated  zoomIn").one("animationend", function() {
					nextBtnAnimation(liSelector, nextAnimation);
				});
			} else {
				$(liSelector + " .image").removeClass("hide").addClass("animated  zoomIn").one("animationend", function() {
					$(liSelector + " .developer-name").removeClass("hide").addClass("animated  zoomIn").one("animationend", function() {
						if (liSelector != ".li5") {
							nextBtnAnimation(liSelector, nextAnimation);
						} else {
							$(".li5 .popover-content").addClass("bgColor-lightgray");
							$("#restart").removeClass("hide").popover({
								trigger : "focus",
								content: "Click to restart."
							});
							$("#restart").popover("show");
							$('#restart').next().css("width", "auto").addClass("animated bounceInDown").one("animationend", function() {
								$(this).removeClass("animated bounceInDown");
							});
						}
					});
				});
			}
		});
	});
}

function nextBtnAnimation(liSelector, nextAnimation) {
	$(liSelector).popover({
		trigger : "focus",
		content: "<a class='btn next-btn' onclick='" + nextAnimation + "'>Next →</a>",
		html : true
	});
	$(liSelector).popover("show");
	$('.next-btn').parents(".popover").css("width", "auto").addClass("animated bounce").one("animationend", function() {
		$(this).removeClass("animated bounce");
	});
}

function animation2() {
	$(".next-btn").parents(".popover").remove();
	$(".li1 .popover-content").addClass("bgColor-lightgray");
	animatebar(22, function() {
		timeline(".li2", "animation3()");
	});
}

function animation3() {
	$(".next-btn").parents(".popover").remove();
	$(".li2 .popover-content").addClass("bgColor-lightgray");
	animatebar(44, function() {
		timeline(".li3", "animation4()");
	});
}

function animation4() {
	$(".next-btn").parents(".popover").remove();
	$(".li3 .popover-content").addClass("bgColor-lightgray");
	animatebar(66, function() {
		timeline(".li4", "animation5()");
	});
}

function animation5() {
	$(".next-btn").parents(".popover").remove();
	$(".li4 .popover-content").addClass("bgColor-lightgray");
	animatebar(87, function() {
		timeline(".li5", "animation6()");
	});
}

function animation6() {
	$(".next-btn").parents(".popover").remove();
	$(".li5 .popover-content").addClass("bgColor-lightgray");
	animatebar(87, function() {
		timeline(".li6");
	});
}

function animatebar(width, callBackFunction) {
	$(".animation-bar").animate({
		"width" : width + "%"
	}, 1500, function() {
		callBackFunction();
	});
}

function typing(id, text, callBackFunction) {
	$('html, body').animate({scrollTop: '+=200px'}, 800);
	$(id).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(id).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}