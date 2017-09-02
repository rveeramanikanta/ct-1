<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>iframe-svg-canvas</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<style type="text/css">
.margin-top-10 {
	margin-top: 10px;
}

.margin-top-20 {
	margin-top: 20px;
}

.input-css0 {
	border: medium none;
	width : 70px;
}

.input-css1 {
	border: medium none;
	width : 200px;
}

.input-css2 {
	border: medium none;
	width : 40px;
}

.input-css3 {
	border: medium none;
	width : 165px;
}

.input-css4 {
	border: medium none;
	width : 135px;
}

.input-css5 {
	border: medium none;
	width : 203px;
}

.input-css6 {
	border: medium none;
	width : 56px;
}

.input-css7 {
	border: medium none;
	width : 90px;
}

.input-css8 {
	border: medium none;
	width : 80px;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.user-btn {
	background-color: green;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 99999999;
}

.creampretab {
    -moz-tab-size: 2;
    tab-size: 2;
    background-color: #f5f5f5;
    border: 1px solid gray;
    border-radius: 6px;
    color: #333;
    display: block;
    font-size: 12.4px;
    line-height: 1.4;
    margin-bottom: 0;
    padding: 5px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}



.display-inline-block {
	display: inline-block;
}

.padding5 {
	padding: 5px;
}

.padding6 {
	padding: 6px;
}

.bg-yellow {
	background: yellow;
}

.css-rules {
	color:red;
	font-size: 20px;
}

input:focus {
	background:#fff85a;
}

.visited {
	background: green;
}


#outputDiv1, #outputDiv2 {
	border: 1px solid gray;
    font-family: monospace;
    min-height: 500px;
    max-height: 500px;
    padding: 10px;
}

.container {
	padding: 0px;
	border: 1px solid grey;
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

ul.tabs > li.active{
  background: #efefef;
}

ul.tabs > li{
  	border-top-left-radius: 8px;
    border-top-right-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    min-width: 170px;
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
	border: 1px solid gray;
	border-radius: 6px;`
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.zIndex {
	position: relative;
	z-index: 10000001 !important;
}
</style>
</head>
<body>
<script type="text/javascript">
var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
$(document).ready(function() {
	introGuide();
	$('#restart').click(function() {
		location.reload();
	});
	
	$("#marqueeData").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		var max = $(this).attr("maxlength");
		if ($(this).text().length > max) {
			e.preventDefault();
		}
		$("body").keypress(function(e) {
			 if (e.which === 13) {
				 e.preventDefault();
			}
		});
		$("[contenteditable=true]").keydown(function(e) {
			if (e.which === 9) {
				e.preventDefault();
			}
		});
	});
	$(".validate").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			//$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only</div>")
			e.preventDefault();
		}
	});
});

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#demoTitle",
					intro : "",
					position : "right"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#totalMarquee",
					intro : "",
					position : "right"
				},{
			 		element : "#totalMarqueeH1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#marqueeData",
					intro : "",
					position : "bottom"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#totalWidth",
					intro : "",
					position : "right"
				},{
			 		element : "#totalHeight",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#totalIframe",
					intro : "",
					position : "right"
				},{
			 		element : "#src",
					intro : "",
					position : "bottom"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#totalIframeWidth",
					intro : "",
					position : "right"
				},{
			 		element : "#totalIframeHeight",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#totalSvg",
					intro : "",
					position : "right"
				},{
			 		element : "#totalSvgHeight",
					intro : "",
					position : "right"
				},{
			 		element : "#totalSvgWidth",
					intro : "",
					position : "right"
				},{
			 		element : "#lineTag",
					intro : "",
					position : "right"
				},{
			 		element : "#totalX1",
					intro : "",
					position : "right"
				},{
			 		element : "#totalY1",
					intro : "",
					position : "right"
				},{
			 		element : "#totalX2",
					intro : "",
					position : "right"
				},{
			 		element : "#totalY2",
					intro : "",
					position : "right"
				},{
			 		element : "#totalStyle",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#totalCanvas",
					intro : "",
					position : "right"
				},{
			 		element : "#totalCanvasHeight",
					intro : "",
					position : "right"
				},{
			 		element : "#totalCanvasWidth",
					intro : "",
					position : "right"
				},{
			 		element : "#totalCanvasStyle",
					intro : "",
					position : "right"
				},{
			 		element : "#scriptTag",
					intro : "",
					position : "right"
				},{
			 		element : "#browser",
					intro : "",
					position : "left"
				},{
			 		element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "demoTitle":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var text = "In this live demo we are going to learn about <b class='ct-code-b-yellow'>Marquee</b>, <b class='ct-code-b-yellow'>iframe</b>,"
				+ "<b class='ct-code-b-yellow'> svg</b>, <b class='ct-code-b-yellow'>canvas</b>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton').show();
			})
		break;
		case "code":
			introjs.refresh();
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a basic <b class ='ct-code-b-yellow'>HTML</b> page.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalMarquee":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Marquee is a scrolling piece of text displayed either horizontally across or vertically down your webpage depending on the settings.'
				+ ' Let us create a marquee.';
				typing($(".introjs-tooltiptext"), text, function() {
					$("#marqueeOpenTag, #marqueeCloseTag").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalMarqueeH1":
			$("#totalMarqueeH1").removeClass("opacity00");
			introjs.refresh();
			setTimeout(function(){
				introjs.nextStep();
			}, 1000);
		break;
		case "marqueeData":
			introjs.refresh();
			$("#marqueeData").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter marquee data as you want.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("marqueeData");
				});
			});
		break;
		case "browser":
			if (introjs._currentStep == 5) {
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>marquee</b> with width and height.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div><marquee id='marqueeId1'><h3>"+ $("#marqueeData").text() +"</h3></marquee></div>");
						$("#totalMarquee").addClass("z-index");
						$('#totalMarquee').effect("transfer", {to: $('#marqueeId1'), className: "ui-effects-transfer"}, 1000, function() {
							introjs.refresh();
							$("#totalMarquee").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 8) {
				$('.introjs-nextbutton').hide();
				$("#marqueeId1").hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>marquee</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div><marquee id='marqueeId2' width="+$("#width").text()+" height="+$("#height").text()+"><h3>"+ $("#marqueeData").text() +"</h3></marquee></div>");
						$("#totalMarquee").addClass("z-index");
						$('#totalMarquee').effect("transfer", {to: $('#marqueeId2'), className: "ui-effects-transfer"}, 1000, function() {
							introjs.refresh();
							$("#totalMarquee").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 11) {
				$('.introjs-nextbutton').hide();
				$("#marqueeId2").hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>iframe</b>. And let add width and height to the iframe.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div><marquee id='marqueeId3' width="+$("#width").text()+" height="+$("#height").text()+"><h3>"+ $("#marqueeData").text() +"</h3></marquee></div>"
							+ "<iframe id='browserIframe1' src='https://www.codetantra.com'></iframe>");
						$("#totalIframe").addClass("z-index");
						$('#totalIframe').effect("transfer", {to: $('#browserIframe1'), className: "ui-effects-transfer"}, 1000, function() {
							introjs.refresh();
							$("#totalIframe").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 14) {
				$('.introjs-nextbutton').hide();
				$("#marqueeId3").hide();
				$("#browserIframe1").hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>iframe</b>. And let add width and height to the iframe.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div><marquee id='marqueeId4' width="+$("#width").text()+" height="+$("#height").text()+"><h3>"+ $("#marqueeData").text() +"</h3></marquee></div>"
							+ "<iframe id='browserIframe2' src='https://www.codetantra.com' width="+$("#iframeWidth").text()+"%"+" height="+$("#iframeHeight").text()+"px"+"></iframe>");
						$("#totalIframe").addClass("z-index");
						$('#totalIframe').effect("transfer", {to: $('#browserIframe2'), className: "ui-effects-transfer"}, 1000, function() {
							introjs.refresh();
							$("#totalIframe").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 24) {
				$('.introjs-nextbutton').hide();
				$("#marqueeId4").hide();
				$("#browserIframe2").hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>svg line</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div><marquee id='marqueeId5' width="+$("#width").text()+" height="+$("#height").text()+"><h3>"+ $("#marqueeData").text() +"</h3></marquee></div>"
							+ "<iframe id='browserIframe3' src='https://www.codetantra.com' width="+$("#iframeWidth").text()+"%"+" height="+$("#iframeHeight").text()+"px"+"></iframe>"
							+ "<svg id='browserSvg1' height="+ $("#svgHeight").text() +" width="+ $("#svgWidth").text() +">"
							+ "<rect x="+ $("#x1").text() +" y="+ $("#y1").text() +" width="+ $("#x2").text() +" height="+ $("#y2").text() +" style='fill:blue; stroke:black; stroke-width:2'/>"
							+ "</svg>");
						$("#totalIframe").addClass("z-index");
						$('#totalIframe').effect("transfer", {to: $('#browserSvg1'), className: "ui-effects-transfer"}, 1000, function() {
							introjs.refresh();
							$("#totalIframe").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 30) {
				$(".bg-yellow").removeClass("bg-yellow");
				$('.introjs-nextbutton').hide();
				$("#marqueeId5").hide();
				$("#browserIframe3").hide();
				$("#browserSvg1").hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The output of the <b class ='ct-code-b-yellow'>canvas arc</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#outputDiv1").append("<div><marquee id='marqueeId6' width="+$("#width").text()+" height="+$("#height").text()+"><h3>"+ $("#marqueeData").text() +"</h3></marquee></div>"
							+ "<iframe id='browserIframe4' src='https://www.codetantra.com' width="+$("#iframeWidth").text()+"%"+" height="+$("#iframeHeight").text()+"px"+"></iframe>"
							+ "<svg id='browserSvg2' height="+ $("#svgHeight").text() +" width="+ $("#svgWidth").text() +">"
							+ "<rect x="+ $("#x1").text() +" y="+ $("#y1").text() +" width="+ $("#x2").text() +" height="+ $("#y2").text() +" style='fill:blue; stroke:black; stroke-width:2'/>"
							+ "</svg>"
							+ "<canvas id='browserCanvas1' height="+ $("#canvasHeight").text() +" width="+ $("#canvasWidth").text() + " style='border:1px solid black;'></canvas>");
						canvasFunction();
						$("#totalIframe").addClass("z-index");
						$('#totalIframe').effect("transfer", {to: $('#browserCanvas1'), className: "ui-effects-transfer"}, 1000, function() {
							introjs.refresh();
							$("#totalIframe").removeClass("z-index");
							$('.introjs-nextbutton').show();
						});
					});
				});
			}
		break;
		case "totalWidth":
			$("#totalWidth").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("width");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalHeight":
			$("#totalHeight").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("height");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalIframe":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'An iframe is used to display a web page within a web page. Let us create an iframe.';
				typing($(".introjs-tooltiptext"), text, function() {
					$("#iframeOpenTag, #iframeCloseTag").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "src":
			introjs.refresh();
			$("#src").removeClass("hide");
			$("#url").removeClass("hide");
			introjs.refresh();
			textFocus("url");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'Enter action="<b class ="ct-code-b-yellow">https://www.codetantra.com</b>".<br>'
				+ 'The src attribute specifies the address of the document to embed in the &lt;iframe&gt;.';
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("url");
				});
			});
		break;
		case "totalIframeWidth":
			$("#totalIframeWidth").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("iframeWidth");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalIframeHeight":
			$("#totalIframeHeight").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("iframeHeight");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalSvg":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'SVG stands for Scalable Vector Graphics. SVG defines vector-based graphics in XML format.';
				typing($(".introjs-tooltiptext"), text, function() {
					$("#svgOpenTag, #svgCloseTag").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalSvgHeight":
			$("#totalSvgHeight").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("svgHeight");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalSvgWidth":
			$("#totalSvgWidth").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("svgWidth");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "lineTag":
			$("#lineTag").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create svg line.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalX1":
			$("#totalX1").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This attribute indicates an x-axis coordinate in the user coordinate system. You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("x1");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalY1":
			$("#totalY1").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The y attribute indicates a y-axis coordinate in the current SVG coordinate system. You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("y1");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalX2":
			$("#totalX2").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This attribute indicates an horizontal length in the user coordinate system. You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("x2");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalY2":
			$("#totalY2").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This attribute indicates a vertical length in the user coordinate system. You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("y2");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalStyle":
			$("#totalStyle").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The style attribute is used to define CSS properties for the rectangle. fill property defines the fill color of the rectangle."
				+ " stroke property defines the color of the border of the rectangle. stroke-width property defines the width of the border of the rectangle.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalCanvas":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 'canvas element is used to draw graphics on a web page.';
				typing($(".introjs-tooltiptext"), text, function() {
					$("#canvasOpenTag, #canvasCloseTag").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalCanvasHeight":
			$("#totalCanvasHeight").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("canvasHeight");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalCanvasWidth":
			$("#totalCanvasWidth").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can chenge the value.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("canvasWidth");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalCanvasStyle":
			$("#totalCanvasStyle").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "border property defines the border of the rectangle.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "scriptTag":
			$("#scriptTag").removeClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You must use JavaScript to actually draw the graphics. Canvas has several methods for drawing paths, boxes, circles, text, and adding images.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="getElementFun()">Next &#8594;</a>');
				});
			});
		break;
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "115px"});
			$('#restart').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function canvasFunction() {
	var canvasId = document.getElementById("browserCanvas1");
	var ctx = canvasId.getContext("2d");
	ctx.beginPath();
	ctx.arc(100, 50, 30, 0, 2 * Math.PI);
	ctx.stroke();
}

function getElementFun() {
	$(".user-btn").remove();
	$("#getElem").removeClass("opacity00");
	$("#getElem").addClass("bg-yellow")
	$(".introjs-tooltiptext").empty()
	var text = "The getElementById() method returns the element that has the ID attribute with the specified value.";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="varCtx()">Next &#8594;</a>');
	});
}

function varCtx() {
	$(".user-btn").remove();
	$(".bg-yellow").removeClass("bg-yellow");
	$("#ctx").removeClass("opacity00");
	$("#ctx").addClass("bg-yellow")
	$(".introjs-tooltiptext").empty()
	var text = "getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported.";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="beginPath()">Next &#8594;</a>');
	});
}

function beginPath() {
	$(".user-btn").remove();
	$(".bg-yellow").removeClass("bg-yellow");
	$("#beginPath").removeClass("opacity00");
	$("#beginPath").addClass("bg-yellow")
	$(".introjs-tooltiptext").empty()
	var text = "The beginPath() method begins a path, or resets the current path.";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="arc()">Next &#8594;</a>');
	});
}

function arc() {
	$(".user-btn").remove();
	$(".bg-yellow").removeClass("bg-yellow");
	$("#arc").removeClass("opacity00");
	$("#arc").addClass("bg-yellow")
	$(".introjs-tooltiptext").empty()
	var text = "The arc() method creates an arc/curve (used to create circles, or parts of circles).";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="stroke()">Next &#8594;</a>');
	});
}

function stroke() {
	$(".user-btn").remove();
	$(".bg-yellow").removeClass("bg-yellow");
	$("#stroke").removeClass("opacity00");
	$("#stroke").addClass("bg-yellow")
	$(".introjs-tooltiptext").empty()
	var text = "The stroke() method actually draws the path you have defined with all those moveTo() and lineTo() methods. The default color is black.";
	typing($(".introjs-tooltiptext"), text, function() {
		$('.introjs-nextbutton').show();
	});
}

function textFocus(selector) {
	$("#"+selector).focus();
	editText('#'+ selector);
}

function editText(selector) {
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($(this).text().length > max-1) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
				return;
			}
			if (e.keyCode == 13 && e.keyCode == 9) {
				e.preventDefault();
			}
			e.preventDefault();
		}		
	});
	
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		introjs.refresh();
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
			return;
		}
		
		if (e.altKey && e.keyCode == 77) {
			$(selector).val($(selector).attr("originalText"));
		}
		
		if ($(this).val() == $(selector).attr("originalText")) {
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
		}
	});
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	
	return step;
}
</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>iframe, svg, canvas</h4>
</div>
<div class="col-xs-12 margin-top-20 padding00">
	<div class="col-xs-offset-0 col-xs-7">
		<div id="code">
<pre class="creampretab"><span id="htmlOpenTag">&lt;html&gt;</span>
<span id="headOpenTag">&lt;head&gt;</span>
<span id="totalTitle"><span id="titleOpenTag">&lt;title&gt;</span>iframe, svg, canvas<span id="titleCloseTag">&lt;/title&gt;</span></span>
<span id="headCloseTag">&lt;/head&gt;</span>
<span id="bodyOpenTag">&lt;body&gt;</span>
<span id="totalMarquee"><span id="marqueeOpenTag" class="opacity00">&lt;marquee <span id="totalWidth" class="hide">width="<div style="display: inline-block;" contenteditable='true' id="width" class="padding5 validate" maxlength='2' spellcheck="false">200</div>"</span> <span id="totalHeight" class="hide">height="<div style="display: inline-block;" contenteditable='true' id="height" class="padding5 validate" maxlength='1' spellcheck="false">50</div>"</span>&gt;</span>
	<span id="totalMarqueeH1" class="opacity00"><span id="marqueeOpenH1">&lt;h1&gt;</span><div style="display: inline-block;" contenteditable='true' id="marqueeData" class="hide padding5" maxlength='20' spellcheck="false"></div><span id="marqueeCloseH1">&lt;h1&gt;</span></span>
<span id="marqueeCloseTag" class="opacity00">&lt;marquee&gt;</span></span>
<span id="totalIframe"><span id="iframeOpenTag" class="opacity00">&lt;iframe <span id="src" class="hide">src="<input id="url" class="hide input-css5" maxlength='26' originalText="https://www.codetantra.com">"</span> <span id="totalIframeWidth" class="hide">width="<div style="display: inline-block;" contenteditable='true' id="iframeWidth" class="padding5 validate" maxlength='2' spellcheck="false">100</div>%"</span> <span id="totalIframeHeight" class="hide">height="<div style="display: inline-block;" contenteditable='true' id="iframeHeight" class="padding5 validate" maxlength='2' spellcheck="false">200</div>px"</span>&gt;</span>
<span id="iframeCloseTag" class="opacity00">&lt;/iframe&gt;</span></span>
<span id="totalSvg"><span id="svgOpenTag" class="opacity00">&lt;svg <span id="totalSvgHeight" class="hide">height="<div style="display: inline-block;" contenteditable='true' id="svgHeight" class="padding5 validate" maxlength='2' spellcheck="false">100</div>"</span> <span id="totalSvgWidth" class="hide">width="<div style="display: inline-block;" contenteditable='true' id="svgWidth" class="padding5 validate" maxlength='2' spellcheck="false">500</div>"</span> &gt;</span>
<span id="lineTag" class="opacity00">&lt;rect <span id="totalX1" class="hide">x="<div style="display: inline-block;" contenteditable='true' id="x1" class="padding5 validate" maxlength='1' spellcheck="false">25</div>"</span> <span id="totalY1" class="hide">y="<div style="display: inline-block;" contenteditable='true' id="y1" class="padding5 validate" maxlength='1' spellcheck="false">25</div>"</span> <span id="totalX2" class="hide">width="<div style="display: inline-block;" contenteditable='true' id="x2" class="padding5 validate" maxlength='2' spellcheck="false">200</div>"</span> <span id="totalY2" class="hide">height="<div style="display: inline-block;" contenteditable='true' id="y2" class="padding5 validate" maxlength='2' spellcheck="false">50</div>"</span> <span id="totalStyle" class="hide">style="fill:blue; stroke:black; stroke-width:2"</span>/&gt;</span>
<span id="svgCloseTag" class="opacity00">&lt;/svg&gt;</span></span>
<span id="totalCanvas"><span id="canvasOpenTag" class="opacity00">&lt;canvas id="myCanvas" <span id="totalCanvasHeight" class="hide">height="<div style="display: inline-block;" contenteditable='true' id="canvasHeight" class="padding5 validate" maxlength='2' spellcheck="false">100</div>"</span> <span id="totalCanvasWidth" class="hide">width="<div style="display: inline-block;" contenteditable='true' id="canvasWidth" class="padding5 validate" maxlength='2' spellcheck="false">200</div>"</span> <span id="totalCanvasStyle" class="hide">style="border:1px solid black;"</span>&gt;</span>
<span id="canvasCloseTag" class="opacity00">&lt;/canvas&gt;</span></span>
<span id="scriptTag" class="opacity00">&lt;script&gt;
<span id="getElem" class="opacity00">var canvasId = document.getElementById("myCanvas");</span>
<span id="ctx" class="opacity00">var ctx = canvasId.getContext("2d");</span>
<span id="beginPath" class="opacity00">ctx.beginPath();</span>
<span id="arc" class="opacity00">ctx.arc(100, 75, 50, 0, 2 * Math.PI);</span>
<span id="stroke" class="opacity00">ctx.stroke();</span>
&lt;/script&gt;</span>
<span id="bodyCloseTag">&lt;/body&gt;</span>
<span id="htmlCloseTag">&lt;/html&gt;</span></pre> 
		</div>
	</div>
	<div class="col-xs-5">
		<div id="browser" class="col-xs-12 padding00">
			<div class='tab-container'>
				<ul class="tabs clearfix" >
					<li class="active">
						<div class="col-xs-10">iframe, svg..</div>
						<i class="col-xs-2 fa fa-times fa-sm padding00"></i>
					</li>
				</ul>
				<span id ="plus"><i class="fa fa-plus"></i></span>
			</div>
			<span class="col-xs-12 padding00" style="border-bottom: 1px solid gray; padding: 2px;">
				<span class='col-xs-2 padding00 text-center'>
					<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow" id="inActiveArrow"></i><i class="fa fa-arrow-left hide" id="activeArrow" onclick='returnArrow()'></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
					<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"  id="spinArrow"></i></span>
				</span>
				<span class='col-xs-8 padding00 text-center url' id="changeUrl">
					<span id="urlText">localhost:8080/iframes-svg-canvas.jsp</span>
					<span id="urlText2" class="hide">localhost:8080/data.jsp</span>
				</span>
				<span class='col-xs-2 padding00 fa-display text-center'>	
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-down fa-1x" ></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
					<span class='col-xs-4 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
				</span>
			</span>
			<div class ="html-body" id="outputDiv1">
				
			</div>
			</div>
		</div>	
	</div>
<div class="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
</body>
</html>