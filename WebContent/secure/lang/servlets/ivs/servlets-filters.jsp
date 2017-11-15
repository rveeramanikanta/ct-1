
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

<title>filters-reviews</title>

<style type="text/css">

.border {
	border: 1px solid;
}

/************************** starting styles of  browser ****************************/
.container {
	padding: 0px;
	margin-top: 30px;
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

ul.tabs > li{
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
	height: 160px;
	border: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
}



/**************************** Ending styles of  browser ***********************************/

span.number-css {
  display: inline-block;
  padding: 6px 6px 4px;
  border-radius: 3px;
  background: #b09dc4;
  margin-right: -2px;
}
.center {
  text-align: center;
  /* width: 50%; */
  margin: 20px auto;
}

.oval { 
	width: 200px;
	height: 100px; 
	background: #6e8ab7; 
	-moz-border-radius: 100px / 50px; 
	-webkit-border-radius: 100px / 50px; 
	border-radius: 100px / 50px;
	display:inline-block;	
}

.ct-fonts {
    font-family: monospace;
    font-weight: bold;
    color: white;
}
.container-title {
    background: #856941 none repeat scroll 0 0;
    color: white;
}

.oval-text {
	line-height: 100px;
}
 .margin-top150 {
 	margin-top: 150px;

 }
 
 .margin-top75 {
 	margin-top: 75px;
 }
 
 .margin-top270 {
 	margin-top: 270px;
 }
 
 .margin-top409 {
 	margin-top : 409px;
 }
 
 .popover-content {
    color: white;
    font-size: 12px;
}

.popover {
	max-width: 160px;
}

.popover,.z-index {
	z-index: 10000000;
}

.introjs-button {
	background-color: green;
}

.align-right {
	text-align: right;
}

.font-bold {
	font-weight: 700;
}

input:focus {
	background: yellow;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.fa-spin {
    animation: 1s linear 0s normal none infinite running fa-spin;
}

.fa-3x {
    font-size: 4em;
    color: blue;
}

.label-input {
	background:#f1f1f1;
	border:1px solid #ccc;
}

.margin-top110 {
	margin-top: 110px;
}

.red {
	color: red;
}
 

</style>

</head>
<body>

<script type="text/javascript">
var count = 1;
var typingSpeed = 5;
$(document).ready(function () {
	
	$("#restart").click(function() {
		window.location.search =  "?restart = 1";
	});
	
	$('line').hide();
	$('#codetantraURL').on("keyup", function(e) {
		$('.error-msg').remove();
		 if ((e.keyCode > 36 && e.keyCode < 41) || e.keyCode == 13 || e.keyCode == 17 || e.keycode == 9) {
			 e.preventDefault();
		 } else	if ($('#codetantraURL').val() == "www.codetantra.com") {
			$('.error-msg').remove();
				$(".user-btn").parent().remove();
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="firstRequest()">Next &#8594;</a><div>');
		} else {
			$('.user-btn').remove();
		}
	});
	
		
	var text = "A <b class='ct-code-b-yellow'>filter</b> is an object that performs filtering tasks "
				+"on either the request to a resource (a servlet or static content), or on the response from a resource, or both. ";
	popover($(".ct-demo-heading"),'bottom',text,function() {
		$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="firstBrowserURL()">Next &#8594;</a><div>');
	});
});

function firstBrowserURL() {
	$('.popover').remove();
	$(".container:first()").parent().removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		$('#totalMainDiv > :last-child').removeClass('opacity00');
		var text = "Enter <b class='ct-code-b-yellow'>www.codetantra.com</b>";
		popover($("#browserText1"),'bottom',text,function() {
			$('input:first').focus();
		});
	});
}

function firstRequest() {
	$('#codetantraURL').attr('disabled','disabled');
	$('.popover').remove();
	arrowReveal('#arrowMark1',function() {
		$("#filterDiv > .col-xs-4:eq(0)").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$(".number-css:last").effect( "highlight", {color:"yellow"}, 1000 ,function() {
				flipEffect('.number-css:last',"1",function(){
					arrowReveal('#arrowMark2',function() {
						$(".margin-top75").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "Request coming form the client and get response towords client.";
							popover($(".oval:eq(0)"),'bottom',text,function() {
								$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="firstResponse()">Next &#8594;</a><div>');
							});
						});
					});
				});
			});
		});
	});
}

function firstResponse() {
	$('.popover').remove();
	arrowReveal('#arrowMark3',function() {
		arrowReveal('#arrowMark4',function() {
			$('#htmlBody1').addClass('text-center').append('<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-top20"></i>');
			setTimeout(function() {
				$('#googleHomePage').removeClass('hide');
				$('#googleHomePage + span').addClass('hide');
				$('.fa-spin').remove();
				$('#htmlBody1 > span').removeClass("hide");
				$('#codetantraURL').val("www.codetantra.com/welcome.jsp").css('font-size','13px');
				var text = "Got the response from the codetantra server.";
				popover($('#browserText1').parent(),'bottom',text, function() {
					$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="secondBrowser()">Next &#8594;</a><div>');
				});
			}, 2000);
		});
	});
}

function secondBrowser() {
	$(".popover").remove();
	$(".container:eq(1)").parent().removeClass("opacity00");
	$('#secondTab').removeClass('hide');	
	$("form span").removeClass("hide");
	$('label > input:eq(0)').focus();
	var text ="Enter user name as <b class='ct-code-b-yellow'>user</b> and password as <b class='ct-code-b-yellow'>pswd</b>";
	popover($('#browserText2').parent(),'bottom',text, function() {
		credentialesValidaiton();
	});
}

function secondRequest() {
	$('label > input').attr('disabled','disabled');
	$('.popover').remove();
	arrowReveal('#arrowMark5',function() {
		$(".number-css:last").effect( "highlight", {color:"yellow"}, 1000 ,function() {
			flipEffect('.number-css:last',"2",function() {
				arrowReveal('#arrowMark6',function() {
					$("#filterDiv > .col-xs-4:eq(1)").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						arrowReveal('#arrowMark7',function() {
							$("#loginServlet").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								var text ="loginServlet request and response.";
								popover($('.oval:eq(1)'),'bottom',text, function() {
									$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="secondResponse()">Next &#8594;</a><div>');
								});
							});
						});
					});
				});
			});
		});
	});
}

function secondResponse() {
	$('.popover').remove();
	arrowReveal('#arrowMark8',function() {
		arrowReveal('#arrowMark9',function() {
			arrowReveal('#arrowMark10',function() {
				$("form").addClass("hide");
				$('#htmlBody').addClass('text-center').append('<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-top20"></i>');
				setTimeout(function() {
					$('#secondTab + img').removeClass('hide');
					$('#secondTab').addClass('hide');
					$('.fa-spin').remove();
					$('#loginURL').val("www.codetantra.com/secure/home.jsp").css('font-size','11px');
					$('#htmlBody').append('<img alt="google" src="/secure/lang/servlets/images/codetantra-login.png" id="googleHomePage" class="" width="100%" height="100%">');
					var text = "After successful login user can access the their courses";
					popover($('#browserText2'),'bottom',text, function() {
						$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="invalidCredentials()">Next &#8594;</a><div>');
					});
				},2000);
			});
		});
	});
}

function invalidCredentials() {
	$('.popover, form + img').remove();
	$('.request-two').hide();
	$('#loginServlet').addClass('opacity00');
	$('form').removeClass('hide');
	$('label > input').removeAttr("disabled").val("");
	$("label > input:eq(0)").focus();
	$('#loginURL').val("www.codetantra.com/login.jsp").css('font-size','13px');
	$('#browserText2').wrap( "<span></span>");
	var text = "Enter wrong <b class='ct-code-b-yellow'>password</b> and wrong <b class='ct-code-b-yellow'>user name</b>  <br> <b class='red'>(Empty values and spaces not valid)</b>";
	popover($('#browserText2').parent(),'bottom',text, function() {
		wrongCredentialsValidation();
	});
}

function thirdRequest() {
	$('.popover').remove();
	$("label > input").attr('disabled','disabled');
	arrowReveal('#arrowMark5',function() {
		$(".number-css:last").effect( "highlight", {color:"yellow"}, 1000 ,function() {
			flipEffect('.number-css:last',"3",function() {
				arrowReveal('#arrowMark6',function() {
					var text = "Login filter find out that entered credentials are wrong by using sample database file.";
					popover($('.margin-top270 > div'),'right',text, function() {
						$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="thirdResponse()">Next &#8594;</a><div>');
					});
				});
			});
		});
	});
}

function thirdResponse() {
	$('.popover').remove();
	arrowReveal('#arrowMark9',function() {
		arrowReveal('#arrowMark10',function() {
			$("label > input").removeAttr("disabled");
			$("#formError").removeClass("hide").addClass("animated zoomIn").one("animationend", function() {
				$('#browserText2').wrap( "<span></span>");
				var text = "Now it shows the <b class='ct-code-b-yellow'>error</b> message";
				popover($('#browserText2').parent(),'bottom',text, function() {
					$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="adminCredentials()">Next &#8594;</a><div>');
				});
			});
		});
	});
}

function adminCredentials() {
	$('.user-btn').parent().remove();
	$('#popover11').empty();
	$('label > input').val("");
	$('label > input:eq(0)').focus();
	$('#formError').addClass('hide');
	var text = "Enter user name as <b class='ct-code-b-yellow'>admin</b> and password as <b class='ct-code-b-yellow'>admin</b>.";
	typing("#popover11", text, function() {
		adminValidation();
	});
}

function fourthRequest() {
	$('.popover').remove();
	$("label > input").attr('disabled','disabled');
	arrowReveal('#arrowMark11',function() {
		$(".number-css:last").effect( "highlight", {color:"yellow"}, 1000 ,function() {
			flipEffect('.number-css:last',"4",function() {
				arrowReveal('#arrowMark12',function() {
					arrowReveal('#arrowMark13',function() {
						$("#filterDiv > .col-xs-4:eq(2)").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							arrowReveal('#arrowMark14',function() {
								$("#adminServlet").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									var text = "Request reach the admin servlet and send the response to the borwser/client.";
									popover($('.oval:eq(2)'),'bottom',text, function() {
										$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="fourthResponse()">Next &#8594;</a><div>');
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function fourthResponse() {
	$('.popover').remove();
	arrowReveal('#arrowMark15',function() {
		arrowReveal('#arrowMark16',function() {
			arrowReveal('#arrowMark17',function() {
				arrowReveal('#arrowMark18',function() {
					$('form').remove();
					$('#htmlBody').addClass('text-center').append('<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-top20"></i>');
					setTimeout(function() {
						$('.fa-spin').remove();
						$('#loginURL').val("www.codetantra.com/secure/ch/welcom.jsp").css('font-size','12px');
						$('#adminLogin').removeClass('hide');
						$('#restart').parent().removeClass("hide");
						$("#totalMainDiv").addClass("margin-top20");
						var text = "next restart buttom.";
						popover($('#adminLogin').parent(),'bottom',text, function() {
							$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="restart()">Next &#8594;</a><div>');
						});
					}, 2000);
				});
			});
		});
	});
}

function restart() {
	$('.popover').remove();
	$('#restart').removeClass("opacity00");
	var text = "Click to restart.";
	popover($('#restart'),'bottom',text, function() {
	});
}

function adminValidation() {
	$('label > input:eq(0), label > input:eq(1)').on("keyup", function(e) {
		$('.error-msg').remove();
		 if ((e.keyCode > 36 && e.keyCode < 41) || e.keyCode == 13 || e.keyCode == 17 || e.keycode == 9) {
			 e.preventDefault();
		 } else	if ($('label > input:eq(0)').val() == "admin" && $('label > input:eq(1)').val() == "admin") {
			$('.error-msg').remove();
				$(".user-btn").parent().remove();
				$("#popover11").append('<div class="align-right"><a class="introjs-button user-btn a" onclick="fourthRequest()">Next &#8594;</a><div>');
		} else {
			$('.user-btn').remove();
		}
	});
}


function wrongCredentialsValidation() {
	$('label > input:eq(0), label > input:eq(1)').on("keyup", function(e) {
		$('.error-msg').remove();
		 if ((e.keyCode > 36 && e.keyCode < 41) || e.keyCode == 13 || e.keyCode == 17 || e.keycode == 9) {
			 e.preventDefault();
		 } else	if ($('label > input:eq(0)').val().trim().length > 0 && $('label > input:eq(1)').val().trim().length > 0) {
			$('.error-msg').remove();
				$(".user-btn").parent().remove();
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="thirdRequest()">Next &#8594;</a><div>');
		} else {
			$('.user-btn').remove();
		}
	});
}

function credentialesValidaiton() {
	$('label > input:eq(0), label > input:eq(1)').on("keyup", function(e) {
		$('.error-msg').remove();
		 if ((e.keyCode > 36 && e.keyCode < 41) || e.keyCode == 13 || e.keyCode == 17 || e.keycode == 9) {
			 e.preventDefault();
		 } else	if ($('label > input:eq(0)').val() == "user" && $('label > input:eq(1)').val() == "pswd") {
			$('.error-msg').remove();
				$(".user-btn").parent().remove();
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="secondRequest()">Next &#8594;</a><div>');
		} else {
			$('.user-btn').remove();
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

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}


//http://www.wiris.com/editor/demo/en/mathml-latex
//mathematics symbols for html.

	</script>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="headdingSection">Servlets
					Filters</h1>
			</div>
		</div>
		
		<div class='col-xs-12 margin-top20 text-center hide'>
			<span id='restart' class='btn btn-warning btn-sm opacity00'><i
				class='fa fa-refresh'></i>&nbsp;Restart</span>
		</div>
		
		
		<div class="col-xs-12" id="totalMainDiv">
		<svg class="svg-css">
		
		
		<marker refX="4" refY="2.5"
						markerWidth="5" markerHeight="5" orient="auto" style="fill: blue;"
						id="arrow"> <path d="M0,0 L5,2.5 L0,5 Z"
						class="arrow-one" /> </marker>
					<line id="arrowMark1" class="line" x1="31%" y1="22%" x2="37%" y2="22%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark2" class="line" x1="43%" y1="22%" x2="76%" y2="22%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark3" class="line" x1="76%" y1="31%" x2="43%" y2="31%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark4" class="line" x1="37%" y1="31%" x2="32%" y2="31%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark5" class="line request-two" x1="32%" y1="61%" x2="37%" y2="61%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark6" class="line request-two" x1="43%" y1="61%" x2="47%" y2="61%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark7" class="line request-two" x1="53%" y1="61%" x2="76%" y2="61%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark8" class="line request-two" x1="76%" y1="70%" x2="53%" y2="70%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark9" class="line request-two" x1="47%" y1="70%" x2="43%" y2="70%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark10" class="line request-two" x1="37%" y1="70%" x2="32%" y2="70%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark11" class="line" x1="32%" y1="82%" x2="37%" y2="82%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark12" class="line" x1="43%" y1="82%" x2="47%" y2="82%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark13" class="line" x1="53%" y1="82%" x2="57%" y2="82%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark14" class="line" x1="63%" y1="82%" x2="75%" y2="82%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark17" class="line" x1="47%" y1="87%" x2="43%" y2="87%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark16" class="line" x1="57%" y1="87%" x2="53%" y2="87%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark15" class="line" x1="75%" y1="87%" x2="63%" y2="87%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark18" class="line" x1="37%" y1="87%" x2="32%" y2="87%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
		</svg>
			<div class="col-xs-4">
				<div class="col-xs-12 opacity00">
					<div class='container col-xs-12'>
						<div class='tab-container'>
							<ul class="tabs clearfix">
								<li class="active">
									<div class="col-xs-10 margin-top20">
										<img class="hide" alt="google" src="/secure/lang/servlets/images/logo.jpg" id='googleHomePage'
											width="100%" height="100%">
											<span class="firstTab">New Tab</span>
									</div> 
									<i class="col-xs-2 fa fa-times fa-sm margin-top20"></i>
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
								<input id="codetantraURL" placeholder="Search or enter address" type="text" maxlength="100" class="usr-text"
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
						<div class="col-xs-12 html-body" id="htmlBody1">
							<span id="content1" class="hide">
							<img alt="google	" src="/secure/lang/servlets/images/codetantra-homepage.png" id="googleHomePage" class="" width="100%" height="100%">
							</span>
						</div>
					</div>
					<div class="col-xs-12 text-center">
						<span id="browserText1" class="font-bold">Client/Browser</span>
					</div>
				</div>
				<div class="col-xs-12 opacity00">
					<div class='container col-xs-12'>
						<div class='tab-container'>
							<ul class="tabs clearfix">
								<li class="active">
									<div class="col-xs-10 margin-top20">
									<img alt="google" src="/secure/lang/servlets/images/logo.jpg" id='googleHomePage'
											width="100%" height="100%">
									</div> <i
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
								<input id="loginURL" type="text" maxlength="100" class="usr-text" disabled="disabled"
									class="padding00" value="www.codetantra.com/login.jsp"> <span class='col-xs-1 padding00'>
									<i class="fa fa-star-o fa-1x"></i></span>
							</div>
							<div class='col-xs-2 padding00 fa-display text-center'>
								<span class='col-xs-6 padding00 margin-top5'><i
									class="fa fa-home fa-1x"></i></span> <span
									class='col-xs-6 padding00 margin-top5'><i
									class="fa fa-bars fa-1x"></i></span>
							</div>
						</div>
						<div class="col-xs-12 html-body padding00" id="htmlBody">
								<img id="adminLogin" class="hide" alt="google" src="/secure/lang/servlets/images/admin-login.png" id="codetantraLogo" width="100%" height="100%">
							<form>
  									<div class="text-center">
										<img class="" alt="google" src="/secure/lang/servlets/images/logo.jpg" id="codetantraLogo" width="30%" height="30%"><span class="font-bold">&nbsp;&nbsp;Login Form</span>
									</div>
								<label class="margin-top20">userName:<input class="label-input"></label>
								<label class="margin-top20">password:<input class="label-input"></label>
									<div id="formError" class="text-center hide red">
 										 incorrect password and/or user name 
  									</div>
							</form>
						</div>
					</div>
					<div class="col-xs-12 text-center">
						<span id="browserText2" class="font-bold">Client/Browser</span>
					</div>
				</div>
			</div>
			<div class="col-xs-8 border padding00 opacity00">
			 <div class="col-xs-12  ct-fonts container-title text-center">servlet container</div>
				<div class="col-xs-6" id="filterDiv">
					<div class="col-xs-4 opacity00">
						<div class="col-xs-12">
						<div class="col-xs-12 text-center">HITS</div>
						<div class="center">
							  <span class="number-css">0</span>
							  <span class="number-css">0</span>
							  <span class="number-css">0</span>
						</div>
							<div class="col-xs-12 padding00"><img src="/secure/lang/servlets/images/hits-filter.png" alt="Smiley face" width="100%" height="100%"></div>
						</div>
					</div>
					<div class="col-xs-4 opacity00">
						<div class="col-xs-12 margin-top270">
							<div class="col-xs-12 padding00"><img src="/secure/lang/servlets/images/login-filter.png" alt="Smiley face" width="100%" height="100%"></div>
						</div>
					</div>
					<div class="col-xs-4 opacity00">
						<div class="col-xs-12 margin-top409">
							<div class="col-xs-12 padding00"><img src="/secure/lang/servlets/images/admin-filter.png" alt="Smiley face" width="100%" height="100%"></div>
						</div>
					</div>
				</div>
				<div class="col-xs-6 text-center">
				<div id="welcomeServlet" class="col-xs-12 opacity00 margin-top75"><div class="oval"><span class="oval-text ct-fonts">Welcome Servlet</span></div></div>
				<div id="loginServlet" class="col-xs-12 opacity00 margin-top110"><div class="oval"><span class="oval-text ct-fonts">Login Servlet</span></div></div>
				<div id="adminServlet" class="col-xs-12 opacity00"><div class="oval"><span class="oval-text ct-fonts">Admin Servlet</span></div></div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>