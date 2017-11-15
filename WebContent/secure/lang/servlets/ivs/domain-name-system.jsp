
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<title>review</title>
<style type="text/css">

.container {
	padding: 0px;
	border: 2px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 3px;
	padding-bottom: 6px;
}

#plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
}

.fa-display {
	display: flex;
	align-items: center;
}

ul.tabs {
    margin: 0 0 -4px;
    max-height: 26px;
    overflow: hidden;
    line-height: 25px;
    list-style-type: none;
    display: inline-block;
}

.padding00 {
	padding: 0;
}

ul.tabs > li.active {
  background: #efefef;
}

ul.tabs > li {
	margin: 2px 0 -4px;
	position: relative;
	width: 170px;
	border-left: 20px solid rgb(10, 5, 5);
	border-bottom: 24px solid rgba(211, 211, 211, 0.21);
	border-right: 20px solid rgb(10, 5, 5);
	height: 0px;
}

.arrow {
	color: lightgray;
    font-size: 15px;
}

.fa {
    cursor: default;
}

.tabs {
  height:25px;
  padding: 0;
  overflow:visible;
}

.usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	height: 120px;
	border: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
} 

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.ct-demo-heading {
	font-size: 18px;
}

.text-right, .text-align {
	text-align: right;
}

.margin-top50 {
	margin-top: 50px;
}


.margin-top70 {
	margin-top: 70px;
}


.margin-top100 {
	margin-top: 100px;
}

.bg-info {
	background-color: #f5f5f5;	
}

input:FOCUS {
	background: yellow;
}

.introjs-button {
	background-color: green;
}

.popover-content {
    color: white;
    font-size: 10px;
}

.popover {
	max-width: 157px;
}

.popover,.z-index {
	z-index: 10000000;
}

.error-msg {
	color: red;
	font-weight: bold;
}

.text-color {
	color: #008080;
}

.color-grey {
	background: grey;
}

</style>

</head>
<body>

<script type="text/javascript">
var intro;
var typingSpeed = 5;
var count = 1;
var web = "google";
$(document).ready(function () {
	$('.fa-server, .container, .text-color').addClass('opacity00');
	$('input').attr('disabled','disabled');
	$('line').hide();
	var typingId;
	var typingContent;
	var typingInterval;
	var cursorColor;
	var typingCallbackFunction;
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps: [
		  {
		    element: '#heading',
		    intro: '',
		    position: 'bottom'
		  }, {
		    element: '#restart',
		    intro: '',
		    position: 'right'
		  }
	]});
	intro.onafterchange(function (targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
		switch (elementId) {
			case 'heading':
				$('.introjs-nextbutton').hide();
				var text = 'In this live demo  you are going to learn how <b class =\'ct-code-b-yellow\'>Domain name System</b> works.';
				typing('.introjs-tooltiptext', text, function () {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn a" onclick="client()">Next &#8594;</a>');
				});
		    	break;
		    
			case "restart":
				$('#popover10').parent().addClass('color-grey');
				$('.user-btn').remove();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#restart').removeClass("opacity00");
					var text = "Click to restart.";
					typing(".introjs-tooltiptext", text, function() {
						console.log("I am in restart");
					});
				});
				break;
		}
	});
	intro.start();
});

function client() {
	$('#mainDiv').addClass('z-index');
	$('.introjs-tooltip').hide();
	$('.user-btn').remove();
	$('.container, .text-color:eq(0)').removeClass('opacity00');
	var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>Enter the web address of google server <br> Hint: &nbsp;<b class="ct-code-b-yellow">www.google.com</b>';
	popover($('.text-color:eq(0) > span'),'left', text, function () {
		inputValidation();
	});
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
	'typing_interval': typingSpeed,
	'cursor_color': 'white',
	}, function () {
	$(selector).removeClass('typingCursor');
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	});
}

function popover(selector, position, text, callBackFunction) {
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: 'focus',
		container: 'body',
		content: '<div id="popover' + count + '">'
		+ text + '</div>',
	 });
	$(selector).popover('show');
	$('#popover' + count).removeClass('opacity00');
		typing('#popover' + count, text, function () {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}); 
}

function inputValidation() {
	$("input").prop('disabled', false).focus();
	$('input').on("keyup", function(e) {
		$('.error-msg').remove();
		 if ((e.keyCode > 36 && e.keyCode < 41) || e.keyCode == 13 || e.keyCode == 17 || e.keycode == 9) {
			 e.preventDefault();
		 } else	if ($('input').val().substring(4,($('input').val().lastIndexOf('.'))) == web && $('input').val() == "www.google.com") {
			$('.error-msg').remove();
			 $(".user-btn").parent().remove();
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="resolving()">Next &#8594;</a><div>');
		} else {
			if ($('.error-msg').length == 0) {
				var text = $(this).val();
				if (text.split(".").length > 2 && !(text.substring(text.indexOf(".") + 1, text.lastIndexOf(".")).toLowerCase() == "google")) {
					$('#popover' + count).append('<div class="text-align error-msg">We have entered other than google server address.<div>');
				}
		  	}
		$('.user-btn').remove();
		}
	});
}


function resolving() {
	$("input").prop('disabled', true);
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	arrowReveal('#arrowMark1', function () {
		$('.fa-server:eq(3), .text-color:eq(4)').removeClass('opacity00');
    	var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>fist time  callingfist time callingfist time callingfist time.';
	    popover($('.text-color:eq(4) > span'), 'right', text, function () {
	    	$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="rootName()">Next &#8594;</a><div>');
	    });
	});
}


function rootName()  {
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	$('#arrowMark2').show().css('marker-end', 'url(\'#arrow\')');
	arrowReveal('#arrowMark2', function () {
		$('.fa-server:eq(1), .text-color:eq(2)').removeClass('opacity00');
		var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>second time calling.';
		popover($('.text-color:eq(2) > span'), 'left', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="resolvingTwo()">Next &#8594;</a><div>');
		});
	});
}

function resolvingTwo() {
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	$('#arrowMark3').show().css('marker-end', 'url(\'#arrow\')');
	arrowReveal('#arrowMark3', function () {
	var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>second time calling this popover second time calling this popover.';
		popover($('.text-color:eq(4)'), 'bottom', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="TLDNameServer()">Next &#8594;</a><div>');
		});
	});
}

function TLDNameServer() {
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	$('#arrowMark4').show().css('marker-end', 'url(\'#arrow\')');
	arrowReveal('#arrowMark4', function () {
		$('.fa-server:eq(2), .text-color:eq(3)').removeClass('opacity00');
		var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>tlp name server tlp name server tlp name server tlp name server tlp name server tlp name server .';
		popover($('.text-color:eq(3) > span'), 'left', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="resolvingThree()">Next &#8594;</a><div>');
		});
	});
}

function resolvingThree() {
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	$('#arrowMark5').show().css('marker-end', 'url(\'#arrow\')');
	arrowReveal('#arrowMark5', function () {
		$( ".text-color:eq(4)" ).wrap( "<div class='col-xs-12 padding00'></div>" );
		var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br> This is third calling for resolving name div';
		popover($('.text-color:eq(4)').parent(),'top', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="authoritative()">Next &#8594;</a><div>');
		});
	});
}

function authoritative() {
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	$('#arrowMark6').show().css('marker-end', 'url(\'#arrow\')');
	arrowReveal('#arrowMark6', function () {
		$('.fa-server:last, .text-color:last').removeClass('opacity00');
		var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br> This is third calling for resolving name div';
		popover($('.fa-server:last'),'right', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="resolvingFour()">Next &#8594;</a><div>');
		});
	});
}

function resolvingFour() {
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	$('#arrowMark7').show().css('marker-end', 'url(\'#arrow\')');
	arrowReveal('#arrowMark7', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count +'</b> </br> This is third calling for resolving name div';
		popover($('.fa-server:eq(3)'),'bottom', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="clientTwo()">Next &#8594;</a><div>');
		});
	});
}

function clientTwo() {
	$('.user-btn').remove();
	$('.fa-server').eq(0).addClass('completed');
	$('div[class="popover-content"]').addClass('color-grey');
	arrowReveal('#arrowMark8', function () {
		var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br>second time calling of client server.';
		popover($('.container').parent(), 'left', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="server()">Next &#8594;</a><div>');
		});
	});
}

function server() {
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	arrowReveal('#arrowMark9', function () {
		$('.completed, .text-color:eq(1)').removeClass('opacity00');
		 var text = '<b class="ct-code-b-yellow">Step : '+ count+'</b> </br> This is final response.';
		popover($('.text-color:eq(1) > span'), 'right', text, function () {
			$('#popover' + count).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="finalStep()">Next &#8594;</a><div>');
		}); 
	});
}

function finalStep() {
	$('.user-btn').remove();
	$('div[class="popover-content"]').addClass('color-grey');
	arrowReveal('#arrowMark10', function () {
		$("#htmlBody").effect('highlight',{color:'blue'}, 1000, function() {
			$("#googleHomePage").removeClass("hide");
			$('#popover10').parent().removeClass('color-grey');
			$('.user-btn:eq(0)').remove();
			$('#popover' + (count-1)).append('<div class="text-align"><a class="introjs-button user-btn a" onclick="intro.nextStep()">Next &#8594;</a><div>');
		});
	});
}

function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr('x2');
	var y2 = $(lineId).attr('y2');
	$(lineId).attr('x2', $(lineId).attr('x1'));
	$(lineId).attr('y2', $(lineId).attr('y1'));
	$(lineId).show();
	TweenMax.to(lineId, 1, {
		attr: {
			x2: x2,
			y2: y2
	},
		onComplete: function () {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
	 	}
	});
}
	
</script>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="heading">DNS</h1>
			</div>
		</div>

		<div class="col-xs-12">
			<div id="mainDiv" class="col-xs-offset-1 col-xs-10 bg-info border">
				<div class='col-xs-offset-1 col-xs-10' id='innerMainDiv'>
					<svg class='svg-css'>
					<marker refX="4" refY="2.5"
						markerWidth="5" markerHeight="5" orient="auto" style="fill: blue;"
						id="arrow"> <path d="M0,0 L5,2.5 L0,5 Z"
						class="arrow-one" /> </marker>
					<line id="arrowMark1" class="line" x1="44%" y1="26%" x2="44%" y2="61%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark2" class="line" x1="42%" y1="61%" x2="19%" y2="42%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark3" class="line" x1="18%" y1="45%" x2="39%" y2="62%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark4" class="line" x1="40%" y1="65%" x2="19%" y2="65%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark5" class="line" x1="19%" y1="67%" x2="39%" y2="67%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark6" class="line" x1="39%" y1="68%" x2="12%" y2="84%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark7" class="line" x1="15%" y1="85%" x2="39%" y2="70%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark8" class="line" x1="46%" y1="61%" x2="46%" y2="27%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark9" class="line" x1="50%" y1="10%" x2="80%" y2="10%" stroke-dasharray="5, 5"
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');" />
						
					<line id="arrowMark10" class="line" x1="80%" y1="13%" x2="51%" y2="13%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					

					<div class='col-xs-12'>
						<div class="col-xs-6 padding00">
							 <div class='container col-xs-12'>
								<div class='tab-container'>
									<ul class="tabs clearfix">
										<li class="active">
											<div class="col-xs-10 margin-top20">insert title</div> <i
											class="col-xs-2 fa fa-times fa-sm margin-top20"></i>
										</li>
									</ul>
									<span id="plus"><i class="fa fa-plus"></i></span>
								</div>
								<div id='browser' class='col-xs-12 padding00'>
									<div class='col-xs-2 padding00 text-center'>
										<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i
											class="fa fa-arrow-left arrow"></i></span> <span
											class='col-xs-4 padding00 margin-top5'><i
											class="fa fa-arrow-right arrow"></i></span> <span
											class='col-xs-4 padding00 margin-top5'><i
											class="fa fa-rotate-right fa-1x"></i></span>
									</div>
									<div class='col-xs-8 padding00 text-center url'>
										<input type="text" maxlength="100" class="usr-text"
											class="padding00"> <span class='col-xs-1 padding00'><i
											class="fa fa-star-o fa-1x"></i></span>
									</div>
									<div class='col-xs-2 padding00 fa-display text-center'>
										<span class='col-xs-6 padding00 margin-top5'><i
											class="fa fa-home fa-1x"></i></span> <span
											class='col-xs-6 padding00 margin-top5'><i
											class="fa fa-bars fa-1x"></i></span>
									</div>
								</div>
								<div class="col-xs-12 html-body padding00" id="htmlBody">
								<img alt="google" src="/secure/lang/servlets/images/google.png" id='googleHomePage' class="hide" width="100%" height="100%">
								</div>
							</div> 
							<div class="col-xs-12 text-center text-color"><span>Browser</span></div>
						</div>
						<div class="col-xs-offset-3 col-xs-3 text-center margin-top50">
						
							<i class="fa fa-server fa-5x" aria-hidden="true"></i>
							<div class="col-xs-12 text-color"><span>google server</span></div>
						</div>
					</div>
					<div class='col-xs-12 margin-top70 padding00'>
						<div class="col-xs-3 text-center">
							<i class="fa fa-server fa-5x" aria-hidden="true"></i>
							<div class="col-xs-12 text-color"><span>Root name server</span></div>
						</div>
					</div>
					<div class='col-xs-12 margin-top70 padding00'>
						<div class="col-xs-3 text-center">
							<i class="fa fa-server fa-5x" aria-hidden="true"></i>
							<div class="col-xs-12 text-color"><span>TLD name server</span></div>
						</div>
						<div class="col-xs-3 text-align">
							<i class="fa fa-server fa-5x" aria-hidden="true"></i>
						</div>
						<div class="col-xs-5 text-center">
							<div class="col-xs-12 text-color margin-top20"><span>Resolving name server</span></div>
						</div>
					</div>
					<div class='col-xs-12 margin-top70 padding00'>
						<div class="col-xs-3 text-center">
							<i class="fa fa-server fa-5x" aria-hidden="true"></i>
							<div class="col-xs-12 text-color"><span>Authoritative name server</span></div>
						</div>
					</div>
					</svg>
				</div>
			</div>
		</div>
		<div class='col-xs-12 margin-top20 text-center'>
			<span id='restart' class='btn btn-warning btn-sm opacity00'>
			<i class='fa fa-refresh'></i>&nbsp;Restart</span>
		</div>
	</div>
</body>
</html>