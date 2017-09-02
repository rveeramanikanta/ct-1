<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/jquery-ui.css">
	<link rel="stylesheet" href="/css/introjs.css" >
	<link rel="stylesheet" href="/css/introjs-ct.css" >
	<link rel="stylesheet" href="/css/animate.css">
	<link rel="stylesheet" href="/css/font-awesome.min.css">

	<script src="/js/jquery-latest.js"></script>
	<script src="/js/jquery-ui-latest.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/intro.js" type="text/javascript"></script>
	<script src="/js/typewriting.min.js" type="text/javascript"></script>
	<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<title>Insert title here</title>
<style>

.container {
	padding: 0px;
	margin-top: 20px;
	border: 2px solid grey;
	width: 100%
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 3px;
	padding-bottom: 6px;
	background: white;
}

#plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
	padding-left: 3px;
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

ul.tabs > li.active{
  background: #efefef;
}

ul.tabs > li{
  	border-top-left-radius: 8px;
    border-top-right-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    min-width: 185px;
    margin: 2px 0 -4px;
    position: relative;
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

.position {
	position: relative;
	display: inline-block;
}

.padding {
	padding: 0 40px;
}

.absolute-div-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.html-body {
	height: 160px;
	border: 1px solid gray;
	background: white;
}

.creamPreTab4 {
    tab-size: 4;
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 4;
    border-radius: 8px;
    background-color: #fffae6;
}
	
.arrow1 {
	margin-top: 100px;
	color : green;
}

.img-responsive {
	display: inline-block;
	max-height: 75px;
}

.img-responsive1 {
	display: inline-block;
	max-height: 60px;
}

.file-top {
    margin-top: 45px;
}

#codeAndDisplay {
	position: absolute;
}

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div,span {
	position: relative;
}

.margin-top {
    margin-top: 20px;
}

.faa-passing {
    position: relative;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

/* Standard syntax */
@keyframes example {
      0%   { left:0px; top:0px;}
    100%  {top:0px; left:15px;}
}

.loading:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    -moz-animation: ellipsis 2s infinite;
    content: "\2026"; /* ascii code for the ellipsis character */
}
@-moz-keyframes ellipsis {
    from {
        width: 0px;
    }
    to {
        width: 12px;
    }
}

.pulse {
	animation: pulse 1s linear 2;
}

@-moz-keyframes pulse {
 0% {
   -moz-transform: scale(0.6);
   transform: scale(0.8);
 }

 100% {
   -moz-transform: scale(1);
   transform: scale(1);
   font-weight: bold;
 }
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background:  #ff66b3;
	}
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
  }

</style>
</head>
<body>

<script type="text/javascript">
var intro;
var typingInterval = 10;
var fontsizeCount = 1;
var countPropertyAndValue = 1;
var multipleChoice;

$(document).ready(function() {
	introGuide();
	
	$('#urlPlaceHolder1').attr("placeholder", "https://www.codetantra.com/webdevelopment/example.html");
	$('#search1').attr("placeholder", "Search");
	
	$('#urlPlaceHolder').attr("placeholder", "https://www.codetantra.com/webdevelopment/example.html");
	$('#search').attr("placeholder", "Search");
	$('#restartBtn').click(function() {
		location.reload();
	});
});
	
	function introGuide() { 
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			
				steps : [{
							element : "#htmlDisplay1",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "samplePage",
						},{
							element : "#titleOfThePage1",
							intro : "",
							tooltipClass : "hide",
						},{
							element : "#htmlBody1",
							intro : "",
							tooltipClass : "hide",
						},{
							element : "#htmlDisplay1",
							intro	: "",
							tooltipClass : "hide",
							animateStep: "NowCreateWebPage",
						},{
							element : "#code",
							intro	: "",
							tooltipClass : "hide",
							position : "right",
							animateStep: "samplePage",
						},{
							element : "#docType",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#restartBtn",
							intro : "Click to restart",
							tooltipClass: "introjs-tooltip-min-width-custom",
							position : "right"
						}]
		});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "htmlDisplay1" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "samplePage" :
						$('.introjs-tooltip').removeClass('hide');
						text = 'This is sample web page.';
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					break;
					
					case "NowCreateWebPage" :
						$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer').one('transitionend', function () {
							$('.introjs-tooltip').removeClass('hide');
							text = 'Let us see how to create a html page.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					break;
				}
			break;
			
			case "titleOfThePage1" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is <span class="ct-code-b-yellow">title</span> of the web page.<br>'+
							'Here, the title of the web page is <span class="ct-code-b-yellow">New Tab</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "htmlBody1" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is <span class="ct-code-b-yellow">Body</span> of the web page.<br>'+
							'Here, the body of the html is <span class="ct-code-b-yellow">Hello World!</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
		
			case "code" :
				$("#htmlDisplay1").addClass("visibility-hidden");
				$("#codeAndDisplay").removeClass("opacity00");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "samplePage" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here we will learn the <span class="ct-code-b-yellow">basic structure of HTML</span> page.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "htmlTags" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'HTML page contant is enclosed between open and close'+
									' <span class="ct-code-b-yellow">&lt;html&gt;</span> tags.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
								$('.introjs-duplicate-nextbutton').click(function() {
									$('.introjs-duplicate-nextbutton').remove();
									zoomInEffect("#hClosedTag");
									zoomInEffect("#hOpenTag", function() {
										$("#hOpenTag").effect( "highlight",{color: '#ff3385'}, 900);
										$("#hClosedTag").effect( "highlight",{color: '#ff3385'}, 900, function() {
											$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
												"onclick=explainSectionsOfHtml()>Next &#8594;</a>");
										});
									});
								});
							});
						break;
					}
				});
			break;
			
			case "docType" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					zoomInEffect("#docType", function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'Every HTML page starts with a <span class="ct-code-b-yellow">DOCTYPE</span> declaration,'+
								'this is not a HTML tag. It only informs the HTML version of the Browser.';
						typing('.introjs-tooltiptext', text, function() {
							nextSteps("#code", "htmlTags");
							$('.introjs-nextbutton').show();
						});
					});
				});
			break;
			
			case "headdingSection" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'In <span class="ct-code-b-yellow">head section</span> we use'+
							' open and close <span class="ct-code-b-yellow">&lt;head&gt;</span> tags ';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
						$('.introjs-duplicate-nextbutton').click(function() {
							$('.introjs-duplicate-nextbutton').remove();
							headSection('#headSection', '#headdingSection', '#openHead', '#closeHead', '#bodySection', 'headSection', '#headdingSection1');
							
						});
					});
				});
			break;
			
			case "bodySection" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'In <span class="ct-code-b-yellow">body section</span> we use' +
							' open and close <span class="ct-code-b-yellow">&lt;body&gt;</span> tags.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
						$('.introjs-duplicate-nextbutton').click(function() {
							$('.introjs-duplicate-nextbutton').remove();
							headSection('#bodyySection', '#bodySection', '#openBody', '#closeBody', '#savingFileStep', 'bodySection', '#headdingSection2');
						});
					});
				});	
			break;
			
			case "savingFileStep" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					$("#code").addClass("blinking").effect( "highlight",{color: 'yellow'},1100);
					text = 'Now the <span class="ct-code-b-yellow">html</span> content is stored in a file and the ' +
							' extention of that the file is <span class="ct-code-b-yellow">.html</span>.<br>'+
							'example file name is  <span class="ct-code-b-yellow">example.html</span>.<br>'+
							'<span id="appendedSpan"></span>';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick=saveFile()>Next &#8594;</a>");
					});
				});
			break;
			
			case "doubleClickToOpenFile" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'double click to open a html file.';
					typing('.introjs-tooltiptext', text, function() {
						$("#doubleClickToOpenFile").addClass("blinking");
						DoubleClickFunction();
					});
				});
			break;
			
			case "htmlDisplay" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					zoomInEffect("#htmlDisplay", function() {
						$("#code").addClass('z-index1000000');
						displayTitleAndBody();
					});
				});
			break;
			
			case "restartBtn":
				$("#code").removeClass('z-index1000000');
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
				});
			break;
		}
	});
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	
	}
	
	function explainSectionsOfHtml() {
		$('.introjs-duplicate-nextbutton').remove();
		text = 'There are two section in html page <ol><li><span class="ct-code-b-yellow">Head section</span></li>'+
				'<span id="secondSection"></span><ol>';
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
			$('.introjs-duplicate-nextbutton').click(function() {
				$('.introjs-duplicate-nextbutton').remove();
				zoomInEffect("#headdingSection", function() {
					$("#headdingSection1").removeClass('box-border')
					$("#headdingSection1").addClass('box-border').effect( "highlight",{color: '#ff3385'}, 900, function() {
						text = '<li><span class="ct-code-b-yellow">Body section</span></li>'+
								'<span id="secondSection"></span>';
						typing('#secondSection', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
							"onclick=htmlSecondSectionExplain()>Next &#8594;</a>");
						});
					});
				});
			});
		});
	}
	
	function htmlSecondSectionExplain() {
		$('.introjs-duplicate-nextbutton').remove();
		zoomInEffect("#bodySection", function() {
			$("#headdingSection2").removeClass('box-border')
			$("#headdingSection2").addClass('box-border').effect( "highlight",{color: '#ff3385'}, 900, function() {
				$('.introjs-tooltip').removeClass('hide');
				nextSteps("#headdingSection", "headTag");
				$('.introjs-nextbutton').show();
			});
		});
	}
	
	function headSection(selector1, selector2, selector3, selector4, selector5, text, selector6) {
		$('.introjs-duplicate-nextbutton').remove();
		zoomOutEffect(selector1, function() {
			$(selector1).text('').addClass('opacity00');
			$(selector2).removeClass('padding');
			$(selector6).remove();
			if (text == 'headSection') {
				$(selector1).html('\t<span id="titleTag">&lt;title&gt;'+
					'<span id="titletext">My First Page Title</span>&lt;/title&gt;</span>');
			} else {
				$(selector1).html('\t<span id="bodyText">Hello World!</span>');
			}
			intro.refresh();
			zoomInEffect(selector3);
			zoomInEffect(selector4, function() {
				if (text == 'headSection') {
					text = 'In head section we use open and close the <span class="ct-code-b-yellow">&lt;title&gt;</span> tag. '+
					'The <span class="ct-code-b-yellow">title</span> tag is used to display the text in the title bar.';
				} else {
					text = 'The content of the body.';	
				}
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
					$('.introjs-duplicate-nextbutton').click(function() {
						$('.introjs-duplicate-nextbutton').remove();	
						zoomInEffect(selector1, function() {
							nextSteps(selector5, "bodyTag");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	}
	
	//save file animation
	function saveFile() {
		$("#code").removeClass('blinking');
		$('.introjs-duplicate-nextbutton').remove();	
		$('.arrow1').append('<i class="fa fa-arrow-right faa-passing animated"></i>');
		$('#htmlFileAboveText').show(1000).text('Saving').addClass('loading');
		$('.htmlFile').fadeTo(3000,1,function() {
			$('.arrow1 i').removeClass('faa-passing')
			$('#htmlFileAboveText').text('Saved').removeClass('loading');
			$("#className").text('example'),$("#extention").text('.html'),
			nextSteps("#doubleClickToOpenFile", "doubleClick");
			$('#htmlFileBelowText').addClass('pulse').on('animationend',function() {
				text = 'When ever we change the extention of the file to'+
						' <span class="ct-code-b-yellow">.html</span> the file icon will be changed.';	
				typing('#appendedSpan', text, function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick=fileTypeChangeToChrome()>Next &#8594;</a>");
				});
			});         
		});
	}

	function fileTypeChangeToChrome() {
		$('.introjs-duplicate-nextbutton').remove();
		zoomOutEffect('.htmlFile', function() {
		    $(".htmlFile").remove();
		    $("#fileIcon").append("<img src ='../images/chrome-icon.png' class='img-responsive1 htmlFile fa opacity00'>");
		    zoomInEffect('.htmlFile', function() {
				$('.introjs-nextbutton').show();
		    });
		})
	}
	
	//Double click to open a file
	function DoubleClickFunction() {
		$('.introjs-duplicate-nextbutton').remove();
		nextSteps("#htmlDisplay", "htmlDisplay");
		$("#doubleClickToOpenFile").removeClass("blinking")
		$(".htmlFile").css({cursor:"pointer"});
		$(".htmlFile").click(function() {
			$(this).click(function() {
				$(".htmlFile").removeClass("blinking");
				intro.nextStep();
			});  
		});
	}
	
	function displayTitleAndBody() {
		$('.introjs-tooltip').removeClass('hide');
		text = 'The <span class="ct-code-b-yellow">Title</span> of the web page is '+
				'<span class="ct-code-b-yellow">My First Page Title</span>.';	
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
			$('.introjs-duplicate-nextbutton').click(function() {
				$('.introjs-tooltip').addClass('hide');
				$('.introjs-duplicate-nextbutton').remove();
				transferEffect('#titletext', '#titleOfThePage', function() {
					$('.introjs-tooltip').removeClass('hide');
					
					text = 'The <span class="ct-code-b-yellow">Body</span> of the web page is '+
							'<span class="ct-code-b-yellow">Hello World!</span>.';	
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
						$('.introjs-duplicate-nextbutton').click(function() {
							$('.introjs-tooltip').addClass('hide');
							$('.introjs-duplicate-nextbutton').remove();
							transferEffect('#bodyText', '#content', function() {
								$('.introjs-tooltip').removeClass('hide');
								$('.introjs-nextbutton').show();
							});
						});	
					});
				});
			});
		});
	}
	
	//****dynamic steps*************
	function nextSteps(stepName, animatedStep) {
		var options = {
				element :stepName,
				intro :'',
				tooltipClass : "hide",
				animateStep: animatedStep
		}
		intro.insertOption(intro._currentStep + 1, options);
	}
	
	//setTime out to intro go next step********
	function introNextStep() {
		setTimeout(function() {
			intro.nextStep();
		},1200);
	}
	
	//********* Transfer effect function ********* 
	function transferEffect(selector1, selector2, callBackFunction) {
		$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
			$(selector2).removeClass("opacity00");
			$(selector1).removeClass("z-index1000000")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	//zooming effect function
	function zoomInEffect(selector1, callBackFunction) {
		$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector1).removeClass("animated zoomIn")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	function zoomOutEffect(selector1, callBackFunction) {
		$(selector1).removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
			$(selector1).removeClass("animated zoomOut")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	//********** Typing function **********
	function typing(typingId, typingContent, typingCallbackFunction) {
		$(typingId).typewriting(typingContent, {
			"typing_interval" : typingInterval,
			"cursor_color" : 'white',
		}, function() {
			$(typingId).removeClass("typingCursor");
			typingCallbackFunction();
			$('.introjs-tooltip').show();
		});
	}
</script>

	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="fontIntroduction">Structure of a HTML Page </h1>
			</div>
			
			<div class="col-xs-12 margin-top">
				<div class="col-xs-6 col-xs-offset-3">
				<div class='container' id = "htmlDisplay1">
					<div class='tab-container'>
						<ul class="tabs clearfix" >
							<li class="active" id="titleOfThePage1">
								<div class="col-xs-10">New Tab</div>
								<i class="col-xs-2 fa fa-times fa-sm padding00"></i>
							</li>
						</ul>
							<span id ="plus"><i class="fa fa-plus"></i></span>
					</div>
					<div id='browser' class='col-xs-12 padding00'>
						<div class='col-xs-2 padding00 text-center'>
							<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow"></i></span>
							<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
							<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"></i></span>
						</div>
						<div class='col-xs-5 padding00 text-center url'>
							<span class='col-xs-10'>
								<input type="text" maxlength="100" class="usr-text" class="padding00" id="urlPlaceHolder1">
							</span>
							<span class='col-xs-2 padding00'><i class="fa fa-star-o fa-1x"></i></span>
						</div>
						<div class='col-xs-3'>
							<div class='url'>
								<span class="col-xs-3 padding00 fa-display"><i class="fa fa-search fa-1x"></i></span>
								<span class="col-xs-9 padding00"><input type="text" maxlength="100" class="usr-text" id="search1"></span>
							</div>
						</div>
						<div class='col-xs-2 padding00 fa-display text-center'>	
							<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
							<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
							<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
						</div>
					</div>
					<div class ="col-xs-12 html-body" id = "htmlBody1">Hello World!</div>
				</div>
			</div>
				
			</div>
			

			<div class="col-xs-12 margin-top opacity00" id="codeAndDisplay">
				<div class = "col-xs-5 padding00" id = "savingFileStep">
					<div class="col-xs-9 padding00" id="fontHtmlText">
						<pre class='creamPreTab4 padding00' id="code">
<span id="docType" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="hOpenTag" class="opacity00"> &lt;html&gt; </span>
	<div id="headdingSection" class="opacity00 padding" style="display: inline-block"><div class="box-border absolute-div-css" id="headdingSection1"></div><span class="opacity00" id="openHead">&lt;head&gt;</span>
<span id="headSection">HEAD section</span>
<span class="opacity00" id="closeHead">&lt;/head&gt;</span></div>
	<div id="bodySection" class="margin-top opacity00 padding" style="display: inline-block"><div class="box-border absolute-div-css" id="headdingSection2"></div><span class="opacity00" id="openBody">&lt;body&gt;</span>
<span id="bodyySection">Body section</span>
<span id="closeBody" class="opacity00">&lt;/body&gt;</span></div>
<span id="hClosedTag" class="opacity00">&lt;/html&gt;</span></pre>
				</div>
				<div class="col-xs-3 padding00" id="HowToSaveFile">
					<div class="col-xs-3 arrow1 padding00"></div>
					<div class="col-xs-8 text-center file-top padding00">
						<div class="padding00"><span id="htmlFileAboveText"></span></div>
						<div class="col-xs-12 text-center padding00" id="doubleClickToOpenFile">
							<div class="padding00" id="fileIcon">
								<i class="img-responsive htmlFile fa fa-file-code-o fa-4x opacity00"></i>
							</div>
							<div class="padding00">
								<span id="htmlFileBelowText"><span id = "className"></span><span id ="extention"></span></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="col-xs-6">
				<div class='container opacity00' id = "htmlDisplay">
					<div class='tab-container'>
						<ul class="tabs clearfix" >
							<li class="active" id="titleOfThePage">
								<div class="col-xs-10">My First Page Title</div>
								<i class="col-xs-2 fa fa-times fa-sm padding00"></i>
							</li>
						</ul>
							<span id ="plus"><i class="fa fa-plus"></i></span>
					</div>
					<div id='browser' class='col-xs-12 padding00'>
						<div class='col-xs-2 padding00 text-center'>
							<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow"></i></span>
							<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
							<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"></i></span>
						</div>
						<div class='col-xs-5 padding00 text-center url'>
							<span class='col-xs-10'><input type="text" maxlength="100" class="usr-text" class="padding00" id="urlPlaceHolder"></span>
							<span class='col-xs-2 padding00'><i class="fa fa-star-o fa-1x"></i></span>
						</div>
						<div class='col-xs-3'>
							<div class='url'>
								<span class="col-xs-3 padding00 fa-display"><i class="fa fa-search fa-1x"></i></span>
								<span class="col-xs-9 padding00"><input type="text" maxlength="100" class="usr-text" id="search" ></span>
							</div>
						</div>
						<div class='col-xs-2 padding00 fa-display text-center'>	
							<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
							<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
							<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
						</div>
					</div>
					<div class ="col-xs-12 html-body" id = "htmlBody">
						<span id = "content">Hello World!</span>
					</div>
				</div>
			</div>
		</div>
		<div class = 'col-xs-12 buttons-div text-center'>
					<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
		</div> 
	</div>
</div>
</body>
</html>