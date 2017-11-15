<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>

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
	/*  width: 100%; */
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

.margin-top50 {
	margin-top: 50px;
}

.margin-top40 {
	margin-top: 40px;
}

.bar {
	border: 1px solid;
	margin-top: 3px;
}

.heading {
	font-weight: bold;
}

.bg-text-color {
	background: black;
	color: white;
}

.font-bold {
	font-weight: 700;
}

.file-box {
	background: #d3d3d3;
	border: 1px solid grey;
	height: 100px;
	color: black;
}

.border {
	border: 2px solid;
}

.align-right {
	text-align: right;
}

.height100 {
	height: 100px;
}

input:FOCUS, textarea:FOCUS {
	background: pink;
}

.fa-cloud {
	color: #d3d3d3;
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

.error-msg {
	color: red;
	font-weight: bold;
}

.ui-effects-transfer {
	border-radius: 6px;
	border: 1px solid #003399;
	z-index: 99999999;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

#httpServerText, #fileSystemName {
	font-size: 10px;
}

.fa-spin {
    animation: 1s linear 0s normal none infinite running fa-spin;
}

.fa-3x {
    font-size: 4em;
    color: blue;
}

.margin-bottom20 {
	margin-bottom: 20px;
}


</style>

<script type="text/javascript">
var count = 0;
var typingSpeed = 5;
$(document).ready(function() {
	$("#restart").click(function() {
		window.location.search =  "?restart = 1";
	});
	$('#codetantraURL').css('width','100%');
	$('textarea').val("");
	tl = new TimelineLite();
	$('line').hide();
	 $('textarea').on("keyup", function(e) {
		$('.error-msg').remove();
		 if ((e.keyCode > 36 && e.keyCode < 41) || e.keyCode == 13 || e.keyCode == 17 || e.keycode == 9) {
			 e.preventDefault();
		 } else	if ($('textarea').val().trim().length > 4) {
			$('.error-msg').remove();
				$(".user-btn").parent().remove();
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="textFile()">Next &#8594;</a><div>');
		} else {
			if ($('.error-msg').length == 0) {
				var text = $(this).val();
				if ($('textarea').val().trim().length <= 4) {
					$('#popover' + count).append('<div class="error-msg">Enter at least five characters.<div>');
				}
		  	}
		$('.user-btn').remove();
		}
	}); 
	
	$('body').append('<i id="filePage2" class="fa fa-file-text-o fa-2x opacity00" aria-hidden="true" style="color: red;"></i>');
	var folderValue = $('#closeFolder2').offset();
	
	var left = (parseInt($('#closeFolder2').offset().left) + 18);
	var top = (parseInt($('#closeFolder2').offset().top) + 15);
		$('#filePage2').offset({
		left : left,
		top : top
	});

	
	$('#codetantraURL').on("keyup", function(e) {
		$('.error-msg').remove();
		 if ((e.keyCode > 36 && e.keyCode < 41) || e.keyCode == 13 || e.keyCode == 17 || e.keycode == 9) {
			 e.preventDefault();
		 } else	if ($('input').val() == "www.codetantra.com") {
			$('.error-msg').remove();
				$(".user-btn").parent().remove();
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="firstRequestResponse()">Next &#8594;</a><div>');
		} else {
			$('.user-btn').remove();
		}
	});
	
	
	$('#fileName').on("keyup", function(e) {
		$('.error-msg').remove();
		 if ((e.keyCode > 36 && e.keyCode < 41) || e.keyCode == 13 || e.keyCode == 17 || e.keycode == 9) {
			 e.preventDefault();
		 } else	if ($('input').val() == "abc.html") {
			$('.error-msg').remove();
				$(".user-btn").parent().remove();
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="internetArrow()">Next &#8594;</a><div>');
		} else {
			$('.user-btn').remove();
		}
	});
	
	
	
	$('.container, #cloudIcon, #totalTextArea, .border, #serverText, #fileSystemHeading, #httpServerIcon, #browserText').addClass('opacity00');
	var text = "Client Server architecture is a computing model in which "
				+" the server stores, delivers and manages the data to be sent to the client when requested.";
	popover($('#heading'),'bottom',text, function() {
		$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="fileSystemReveal()">Next &#8594;</a><div>');
	});
});

function fileSystemReveal() {
	$('.popover').remove();
	$(".border").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		$("#serverText").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#fileSystemHeading").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				$("#httpServerIcon").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(".container").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#browserText").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "Enter <b class='ct-code-b-yellow'>www.codetantra.com</b>";
							popover($('#browserText'),'bottom',text, function() {
								$("#codetantraURL").focus();
							});
						});
					});
				});
			});
		});
	});
}

function firstRequestResponse() {
	$("input").attr('disabled','disabled');
	$(".popover").remove();
	arrowReveal('#arrowMark1',function() {
		$("#cloudIcon").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			arrowReveal('#arrowMark2',function() {
				arrowReveal('#arrowMark3',function() {
					arrowReveal('#arrowMark4',function() {
						arrowReveal('#arrowMark5',function() {
							arrowReveal('#arrowMark6',function() {
								$('#codetantraURL').val($('input').val() + '/index.jsp');
								$("img:first").removeClass("hide");
								$("span:contains(New Tab)").remove();
								$('#htmlBody').addClass('text-center').append('<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-top20"></i>');
								setTimeout(function() { 
									$('.fa-spin').remove();
									$('#htmlBody > img').removeClass("hide");
									var text = "Response get the information from the codetantra server.";
									popover($('#browserText').parent(),'bottom',text, function() {
										$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="textareaReveal()">Next &#8594;</a><div>');
									});
								}, 2000);
							});
						});
					});
				});
			});
		});
	});
}

function textareaReveal() {
	$(".popover").remove();
	$("#totalTextArea").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		var text = "Enter some text.";
		popover($('#totalTextArea').parent(),'bottom',text, function() {
			$('line').hide();
			$("textarea").focus();
		});
	});
}

function textFile() {
	$('.popover').remove();
	$('textarea').attr('disabled','disabled');
	$("textarea").effect("transfer", {to: $("#closeFolder2"), className: "ui-effects-transfer"}, 1500, function() {
		var text = "<b class='ct-code-b-yellow'>abc.html</b> file has been stored into file system.";
		popover($('#fileSystemName'),'right',text, function() {
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="browserReveal()">Next &#8594;</a><div>');
		});
	});
}

function browserReveal() {
	$('.popover').remove();
	$('#codetantraURL').remove();
	$('span[class=hide]').removeClass('hide');
	$('#fileName').removeClass('hide').removeAttr('disabled').css('width','50%').focus();
	$( "#browserText" ).wrap( "<span></span>");
	var text = "Enter <b class='ct-code-b-yellow'>abc.html</b>.";
	popover($("#browserText").parent(),'bottom',text, function() {
		
	});
}

function internetArrow() {
	$('.popover').remove();
	$('input').attr('disabled','disabled');
	arrowReveal('#arrowMark1',function() {
		var text = "This request  asking the required html file travels over the internet "+
					"to the destination computer.(here the server using the ip address of the server)";
		popover($('#internetIcon'),'right',text, function() {
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="internet()">Next &#8594;</a><div>');
		});
	});
}


function internet() {
	$('.popover').remove();
	arrowReveal('#arrowMark2',function() {
		var text = "This request reaches the Server which then reads the request and talks to the underlying file system.";
		popover($('.fa-tasks'),'right',text, function() {
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="httpServer()">Next &#8594;</a><div>');
		});			
	});
}


function httpServer() {
	
	$('.popover').remove();
	arrowReveal('#arrowMark3',function() {
		$("#closeFolder2").remove();
		$("#fileStack2").append('<i class="fa fa-folder-open-o fa-2x" aria-hidden="true"></i>');
		var text = "It picks up the <b class='ct-code-b-yellow'>abc.html</b> file.";
		popover($('#fileStack2').parent(),'left',text, function() {
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="fileResponse1()">Next &#8594;</a><div>');
		});
	});
}

function fileResponse1() {
	$(".user-btn").remove();
	$(".popover").remove();
	arrowReveal('#arrowMark4',function() {
		var l1 = $(".fa-tasks").offset();
		var l2 = $("#fileStack2").offset();
		$('#filePage2').removeClass('opacity00');
		var top = (l1.top - l2.top) + parseInt($("#filePage2").css("top"));
		var left = (l1.left - l2.left) + parseInt($("#filePage2").css("left"));
		tl.to("#filePage2", 1, {top : top, left : left});
		var text = "The picked up file is then added with the client address and is sent over the internet.";
		popover($('#httpServerText'),'right',text, function() {
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="fileResponse2()">Next &#8594;</a><div>');
		});
	});
}

function fileResponse2() {
	$(".user-btn").remove();
	$(".popover").remove();
	arrowReveal('#arrowMark5',function() {
		var l2 = $(".fa-tasks").offset();
		var l1 = $("#internetIcon").offset();
		var top = (l1.top - l2.top) + parseInt($("#filePage2").css("top"));
		var left = (l1.left - l2.left) + parseInt($("#filePage2").css("left"));
		tl.to("#filePage2", 1, {top : top, left : left});
		var text = "Now the file open in the client browser.";
		popover($('#internetIcon + div'),'bottom',text, function() {
			$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="finalResponse()">Next &#8594;</a><div>');
		});
	});
}

function finalResponse() {
	$(".user-btn").remove();
	$(".popover").remove();
	arrowReveal('#arrowMark6',function() {
		var l2 = $("#internetIcon").offset();
		var l1 = $("#htmlBody").offset();
		var top = (l1.top - l2.top) + parseInt($("#filePage2").css("top"));
		var left = (l1.left - l2.left) + parseInt($("#filePage2").css("left"));
		tl.to("#filePage2", 1, {top : top, left : left, onComplete:function() {
			$('#filePage2').remove();
			$("#htmlBody").empty();
			$('#htmlBody').addClass('text-center').append('<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-top20"></i>');
			setTimeout(function() { 
				$('.fa-spin').remove();
				$('#htmlBody').removeClass('text-center').append("<span>"+$('textarea').val()+"</span>");
				var text = "Now the file open in the client browser.";
				popover($('.container').parent(),'right',text, function() {
					$('#popover' + count).append('<div class="align-right"><a class="introjs-button user-btn a" onclick="restart()">Next &#8594;</a><div>');
				});
				 }, 2000);
		}});
	});
}


function restart() {
	$('.popover').remove();
	$('#restart').removeClass("opacity00");
	var text = "Click to restart.";
	popover($('#restart'),'bottom',text, function() {
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

</script>
</head>
<body>

<div class="text-center margin-top20">
	<h1 id="heading" class="label ct-demo-heading text-center">Client - Server Architecture</h1>
</div>

<div class='col-xs-12 margin-top20 text-center'>
			<span id='restart' class='btn btn-warning btn-sm opacity00'><i
				class='fa fa-refresh'></i>&nbsp;Restart</span>
</div>
	<div id="totalMainDiv" class="col-xs-12">
	<svg class="svg-css">
	<marker refX="4" refY="2.5"
						markerWidth="5" markerHeight="5" orient="auto" style="fill: blue;"
						id="arrow"> <path d="M0,0 L5,2.5 L0,5 Z"
						class="arrow-one" /> </marker>
					<line id="arrowMark1" class="line" x1="32%" y1="18%" x2="47%" y2="18%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark2" class="line" x1="53%" y1="18%" x2="79%" y2="18%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark3" class="line" x1="83%" y1="28%" x2="83%" y2="38%" stroke-dasharray="5, 5" 
					style="stroke: red; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					
					<line id="arrowMark4" class="line" x1="81%" y1="39%" x2="81%" y2="28%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark5" class="line" x1="79%" y1="22%" x2="54%" y2="22%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					<line id="arrowMark6" class="line" x1="47%" y1="22%" x2="32%" y2="22%" stroke-dasharray="5, 5" 
					style="stroke: green; stroke-width: 2; display: inline; marker-end: url('#arrow');"/>
					
					
		<div class="col-xs-12 margin-top20">
			<div class="col-xs-4">
				<div class="col-xs-12">
					<div class='container col-xs-12'>
						<div class='tab-container'>
							<ul class="tabs clearfix">
								<li class="active">
									<div class="col-xs-10 margin-top20">
										<img class="hide" alt="google" src="/secure/lang/servlets/images/logo.jpg" id='googleHomePage'
											width="100%" height="100%">
											<span>New Tab</span>
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
								<span class="hide">codetantra.com/</span> 
								<input id="codetantraURL" placeholder="search or enter address"
									type="text" maxlength="100" class="usr-text" class="padding00">
								<input id="fileName" placeholder="abc.html"
									type="text" maxlength="100" class="usr-text hide" class="padding00">
								<span class='col-xs-1 padding00'><i
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
							<img alt="google" src="/secure/lang/servlets/images/codetantra-homepage.png"
								id='googleHomePage' class="hide" width="100%" height="100%">
						</div>
					</div>
					<div class="col-xs-12 text-center">
						<span id="browserText" class="font-bold">Client/Browser</span>
					</div>
				</div>
			</div>
			<div class="col-xs-4">
				<div class="col-xs-12">
					<div id="cloudIcon"
						class="col-xs-12 text-center margin-top40">
						<i id="internetIcon" class="fa fa-cloud fa-5x" aria-hidden="true"></i>
						<div class="col-xs-12 align-center font-bold">Internet</div>
					</div>
				</div>
			</div>
			<div class="col-xs-4">
			<div class="col-xs-12 text-center font-bold">
					<span id="serverText">Codetantra Server</span>
				</div>
			<div class="col-xs-offset-4 col-xs-4 border">
				<div
							class="col-xs-12 font-bold text-center margin-top20"
							id="httpServerIcon">
						 <div
								id="httpServerText" class="col-xs-12 padding00">HTTP server</div>
								<i class="fa fa-tasks fa-5x" aria-hidden="true"></i>
					</div>
				
					<div id="fileSystemHeading"
							class="col-xs-offset-1 col-xs-10 bg-text-color margin-top50 font-bold padding00 margin-bottom20">
						<div id="fileSystemName" class="col-xs-12 padding00 text-center">File System</div>
						<div class="col-xs-12 file-box text-center">
							<span id="fileStack2" class="fa-stack fa-2x margin-top20">
								<i aria-hidden="true" class="fa fa-file-text-o fa-stack-1x"
									style="color: red;"></i> 
								<i id="closeFolder2" class="fa fa-folder-o fa-stack-2x"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-xs-12 margin-top50">
			<div class="col-xs-4">
			</div>
			<div class="col-xs-4">
			</div>
			<div class="col-xs-4">
				<div class="col-xs-offset-2 col-xs-8" id="totalTextArea">
					<div
						class="col-xs-offset-3 col-xs-6 bg-text-color font-bold padding00">
						<div class="col-xs-3">
							<div class="col-xs-12 bar"></div>
							<div class="col-xs-12 bar"></div>
							<div class="col-xs-12 bar"></div>
						</div>
						<div class="col-xs-offset-1 col-xs-8">abc.html</div>
					</div>
					<div class="col-xs-offset-3 col-xs-6 padding00">
						<textarea placeholder="Enter text here..."
							class="col-xs-12 padding00 height100"></textarea>
					</div>
				</div>
			</div>
		</div>
	</svg>
	</div>
</body>
</html> 