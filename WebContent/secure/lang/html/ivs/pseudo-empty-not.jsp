<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<!-- <script src="/js/jquery-ui-latest.js"></script> -->
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<title>pseudo-empty-not</title>
<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.margin-top-20 {
	margin-top: 20px;
}

img {
	width: 100%;
}

.btn-success {
	font-weight: 700;
	font-style: italic;
    min-width: 140px;
    font-family: monospace;
}

pre {
    tab-size:4;
    -moz-tab-size: 4;
    -o-tab-size:  4;
 	white-space: pre-wrap;
 	border : 2px solid black;
 	font-size: 11px;
}

input {
	background-color: transparent;
	border: medium none;
	outline: none;
	
}

.padding0 {
	padding: 0;
}

#browserText {
	margin: 4px;
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

.skip-btn {
	background-color: orange;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 99999999;
}

.bg-yellow {
	background: yellow;
}

.css-rules {
	color:blue;
	border:2px solid red;
}

input:focus {
	background:#fff85a;
}

.visited {
	background: green;
}


/* #selector {
	width: 60px;
}
 */
#browserText > div :empty {
	background: lightseagreen;
}

/*	
 #browserText :EMPTY {
	height: 20px;
	background: yellow;
	width:40px;
}
 
#browserText div :not(p) {
	color: red;
}  */

/* *********************** starting of the browser styles ********************* */
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
	margin-top: 0px;
}

#browser1 {
	padding-bottom: 6px;
	padding-top: 6px;
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

#browser .usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	border: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
}


/* *********************** Ending of of the browser styles ********************* */

.position {
	position: relative;
	display: inline-block;
	min-width: 15px;
	min-height: 15px;
}

.length-error-text {
	color: red;
	font-weight: bold;
}

[contenteditable="true"] {
    outline: medium none;
}

</style>
</head>
<body>

<script type="text/javascript">
	var emptyFlag = true;
	var flagCount = 0;
	$(document).ready(function() {
		$('#codeDiv input').attr('disabled','disabled').val('');
		$('#browser input').attr('disabled','disabled');
		$('button').attr('disabled','disabled');
		initIntroJS();
		$('#restart').click(function() {
			location.reload();
			$("pre input").val("");
		});
		
		 /* $("body").attr({ondragstart :"return false"});
	  	$('*').bind("cut copy paste",function(e) { 
	    	e.preventDefault();
	  	}); */ 
	});
	
	var str = [];
	function initIntroJS() {
		intro = introJs();
		intro.setOptions({
			steps : [  {
				element :"#heading",
				intro : "",
				position : "bottom",
			}, {
				element : "#topicsDiv",
				intro : "",
				position : "bottom"
			}, {
				element : "#codeDiv",
				intro : "",
				position : "top"
			}, {
				element : "#emptyButton",
				intro : "",
				position : "bottom"
			} , {
				element : "#selector",
				intro : "",
				position : "bottom"
			}, {
				element : "#totalStyle",
				intro : "",
				position : "right"
			}, {
				element : "#notButton",
				intro : "",
				position : "right"
			}, {
				element : "#selector1",
				intro : "",
				position : "bottom"
			}, {
				element : "#totalStyle1",
				intro : "",
				position : "top"
			},  {
				element : "#topicsDiv",
				intro : "",
				position : "bottom"
			}, {
				element : "#restart",
				intro : "",
				position : "right"
			}]});
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "heading":
				$(".introjs-nextbutton").hide();
				var text = "<b class='ct-code-b-yellow'>selectors</b> are patterns used to select the element(s) those you want to style.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
				
			case "topicsDiv":
				$('#topicsDiv,pre').removeClass('opacity00');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (intro._currentStep == 1) {
						var text = "In this live demo you are going to learn following <b class='ct-code-b-yellow'>:empty</b> and "
									+" <b class='ct-code-b-yellow'>:not()</b>";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					} else {
						$('#htmlCode, #browser').removeClass('z-index');
						$('.user-btn').remove();
						$('.bg-yellow').removeClass('bg-yellow');
						$('#emptyButton, #notButton').removeAttr('disabled');
						var text = "You can select anyone.";
						typing(".introjs-tooltiptext", text, function() {
							intro.insertOption(intro._currentStep + 1, getStep("#restart", "", "right"));
							$('.skip-btn').remove();
							$(".introjs-tooltipbuttons").append('<a class="introjs-button skip-btn" onclick="intro.goToStep(11)">Skip →</a>');
						});
					}
				});
				break;
				
			case "codeDiv":
				$('#codeDiv').removeClass('opacity00');
				$(".introjs-nextbutton").hide();
				var text = "This HTML code will be displayed in the browser.";
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="browserReveal()">Next →</a>');
					});
				});
				break;
				
			case "totalProperty":
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<b class='ct-code-b-yellow'>color:blue</b> proprerty value can change the color of the element text.<br>"
								+" <b class='ct-code-b-yellow'> border:2px solid red</b> proprerty value can use to draw border around the element.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "emptyButton":
				$('div.z-index').removeClass('z-index');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<b class='ct-code-b-yellow'>:empty</b> pseudo element can be used to select all the elements which does not"
								+" have any content.";
					typing(".introjs-tooltiptext", text, function() {
						$('#emptyButton').removeAttr('disabled').addClass('visited z-index');
						intro.refresh();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(5)">Next →</a>');
					});
				});
				break;
				
			case "notButton":
				$('.user-btn').remove();
				$('div.z-index').removeClass('z-index');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<b class='ct-code-b-yellow'>:not()</b> pseudo element can be used to select all the elements which does not"
								+" have any content.";
					typing(".introjs-tooltiptext", text, function() {
						$('#notButton, #emptyButton').removeAttr('disabled').addClass('visited z-index');
						intro.refresh();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(8)">Next →</a>');
					});
				});
				break;
				
			case "selector":
				$('[contenteditable="false"]').attr('contenteditable', 'true');
				$('.user-btn').remove();
				$('button').attr('disabled','disabled');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Enter <b class='ct-code-b-yellow'>:empty</b>";
					typing(".introjs-tooltiptext", text, function() {
						$('#selector').removeAttr('disabled').focus();
						if (emptyFlag) {
							emptyFlag = !emptyFlag;
							flagCount++;
						}
						selectorChecking('#selector', ':empty');
					});
				});
				break;
				
			case "selector1":
				$('[contenteditable="false"]').attr('contenteditable', 'true');
				$('button').attr('disabled','disabled');
				$(".introjs-nextbutton").hide();
				$('.user-btn').remove();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Enter <b class='ct-code-b-yellow'>div :not(p)</b>";
					typing(".introjs-tooltiptext", text, function() {
						$('#selector1').removeAttr('disabled').focus();
						selectorChecking('#selector1', 'div :not(p)');
					});
				});
				break;
				
			 case "totalStyle":
				 $('[contenteditable="true"]').attr('contenteditable', 'false');
				 $("#browserText > div :empty").removeAttr('style');
				$(".introjs-nextbutton").hide();
					$('[contenteditable="true"]').attr('contenteditable', 'false');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Apply these set of css rules to <b class='ct-code-b-yellow'>empty</b> elements.";
					typing(".introjs-tooltiptext", text, function() {
						$('.empty-element').addClass('bg-yellow');
						$('#codeDiv,#browser').addClass('z-index');
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="emptyAnimation()">Next →</a>');
					});
				});
				break; 
				
			 case "totalStyle1":
				 $('[contenteditable="true"]').attr('contenteditable', 'false');
				 $("#browserText h4").removeAttr('style');
			 	$(".bg-yellow").removeClass("bg-yellow"); //This is my modification on 25/07/2017
			 	$('[contenteditable="false"]').attr('contenteditable', 'true');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<b class='ct-code-b-yellow'>div :not(p)</b> selector can be used to select the "
					+"all inside div elements except <b class='ct-code-b-yellow'>p</b> elements.";
					typing(".introjs-tooltiptext", text, function() {
						$('.not-p').addClass('bg-yellow');
						$('#codeDiv,#browser').addClass('z-index');
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="notAnimation()">Next →</a>');
					});
				});
				break; 
				
			case "restart":
				$('.user-btn, .skip-btn').remove();
				$('.z-index').removeClass('z-index');
				$('button').attr('disabled','disabled');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Click to restart.";
					typing(".introjs-tooltiptext", text, function() {
						$('#restart').removeClass('opacity00');
					});
				});
				break;
			}
		});
		intro.setOption('showStepNumbers', false);
		intro.setOption('exitOnOverlayClick', false);
		intro.setOption('exitOnEsc', false);
		intro.setOption('keyboardNavigation', false);
		intro.start();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
	}
	
	function typing(selector, text, callBackFunction) {
		$(selector).typewriting(text, {
			"typing_interval" : 10,
			"cursor_color" : 'white',
		}, function() {
			$(selector).removeClass("typingCursor");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	 function browserReveal() {
		$('.user-btn').remove();
		$('#browser').removeClass('opacity00').addClass('z-index');
		$('#codeDiv').effect("transfer", {to: $('#browserText'), className: "ui-effects-transfer"}, 800, function() {
			$('#browserText').removeClass('opacity00');
			$('.introjs-nextbutton').show();
		});
	}
	 
	 function selectorClick(element) {
		 $('#selector').removeAttr('class').attr('class','input-css').addClass(element).val("");
		 intro.goToStep(6);
	 }
	 
	function selectorChecking(selector,pseudoSelector,stepNumber) {
		$(selector).text("").focus();
		$(selector).on("keyup", function(e) {
			intro.refresh();
			var selectedText = $(selector).text().trim();
			if (selectedText == pseudoSelector) {
				if ($('.introjs-nextbutton[style ="display: inline-block;"]').length == 1 && e.keyCode === 13) {
					intro.nextStep()
				} 
				$('.introjs-nextbutton').show();
				
			} else {
				$('.introjs-nextbutton').hide();
			}
		});
		$(selector).on("keydown", function(e) {
			$('.length-error-text').remove();
			var max = $(this).attr("maxlength");
			if(e.keyCode === 13) {
				e.preventDefault();
			    return false;
			}
			
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
				return;
			}
			if ($(this).text().length > max-1) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to "+ max +".</span>");
				e.preventDefault();
			}
		});
	 }
	
	
	function transfer(classCount,count) {
		$('.bg-yellow:eq('+classCount+')').effect("transfer", {to: $('.class-transfer-move:eq('+classCount+')'), className: "ui-effects-transfer"}, 800, function() {
			$('.class-transfer-move:eq('+classCount+')').addClass('css-rules');
			if (count == classCount) {
				$('.class-transfer-move').removeClass('class-transfer-move');
				dynamicCalling();
			} else {
				classCount++;
				transfer(classCount,count);
			}
		});
	}
	
	function dynamicCalling() {
		classCount = 0;
		if (flagCount == 1) {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(8)">Next &#8594;</a>');
		} else if (flagCount == 2) {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(9)">Next &#8594;</a>');
		} 
	}
	
	function emptyAnimation() {
		$('.user-btn').remove();
		$(".bg-yellow").eq(0).effect("transfer", {to: $("#browserText > div :empty:eq(0)"), className: "ui-effects-transfer"}, 800, function() {
			$('#browserText > div :empty:eq(0)').animate({height:'20px'},'slow', function() {
				$(".bg-yellow").eq(1).effect("transfer", {to: $("#browserText > div :empty:eq(1)"), className: "ui-effects-transfer"}, 800, function() {
					$('#browserText > div :empty:eq(1)').animate({height:'20px'},'slow', function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(7)">Next &#8594;</a>');
					});
				});
			});
		});
	}
	
	function notAnimation() {
		$('.user-btn').remove();
		$(".bg-yellow").eq(0).effect("transfer", {to: $("#browserText h4:eq(0)"), className: "ui-effects-transfer"}, 800, function() {
			$('#browserText h4:eq(0)').css('color','red');
			$(".bg-yellow").eq(1).effect("transfer", {to: $("#browserText h4:eq(1)"), className: "ui-effects-transfer"}, 800, function() {
				$('#browser h4:eq(1)').css('color','red');
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(10)">Next &#8594;</a>');
			});
		});
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
		<h4 class='label ct-demo-heading' id='heading'>Pseudo Classes</h4>
	</div>	

	<div class='col-xs-12 text-center margin-top-20'>
		<span id='restart'
			class='btn btn-warning btn-sm opacity00 margin-top20'>Restart
			&nbsp;<i class='fa fa-refresh'></i>
		</span>
	</div>
	<div class='col-xs-12 text-center margin-top-20'>
		<div class='col-xs-offset-4 col-xs-4 opacity00' id='topicsDiv'>
			<div class='col-xs-6 padding0'>
				<button id='emptyButton' onclick="intro.goToStep(5)" type="button"
					class="btn btn-success">:empty</button>
			</div>
			<div class='col-xs-6 padding0'>
				<button id='notButton' onclick="intro.goToStep(8)" type="button"
					class="btn btn-success">:not()</button>
			</div>
		</div>
	</div>
	<div class='col-xs-12 margin-top-20'>
		<div id='htmlCode' class='col-xs-6'>
			<pre class='opacity00'>
&lt;html&gt;				
<span class='openStyle'>&lt;style&gt;</span>
<div id='styleDiv'>
<span id='totalStyle'><div id="selector" class="position" contenteditable='true' spellcheck='false'  maxlength='10'></div> {
	height:&nbsp;20px;
	background:&nbsp;lightseagreen;
}</span>
<span id='totalStyle1'><div id="selector1" class="position" contenteditable='true' spellcheck='false'  maxlength='12'></div> {
	color:&nbsp;red;
}</span>
</div>
&lt;/style&gt;
&lt;body&gt;
	<div id='codeDiv' class='opacity00'>	&lt;div&gt;
		&lt;p&gt;1: Using relative position&lt;/p&gt;
		<span class='empty-element'>&lt;p&gt;&lt;/p&gt;</span>
		<span class='not-p'>&lt;h4&gt;Assignment&lt;/h4&gt;</span>
	&lt;/div&gt;
	&lt;div&gt;
		&lt;p&gt;2: This is second div p&lt;/p&gt;
		<span class="not-p">&lt;h4&gt;second div h4 elements&lt;/h4&gt;</span>
	&lt;/div&gt;
	&lt;div&gt;
		&lt;p&gt;3: This is not an empty element.&lt;/p&gt;
		<span class='empty-element'>&lt;p&gt;&lt;/p&gt;</span>
	&lt;/div&gt;
	&lt;div&gt;
		&lt;p&gt;4: Using absolute position&lt;/p&gt;
		&lt;p&gt;Summary&lt;p&gt;
	&lt;/div&gt;</div>
&lt;/body&gt;
&lt;/html&gt;</pre>
		</div>
		
		<div class='col-xs-6'>

<div id="browser" class='container col-xs-12 opacity00'>
	<div class='tab-container'>
		<ul class="tabs clearfix">
			<li class="active">
				<div class="col-xs-10 margin-top20">insert title</div>
				<i class="col-xs-2 fa fa-times fa-sm margin-top20"></i>
			</li>
		</ul>
		<span id ="plus"><i class="fa fa-plus"></i></span>
	</div>
	<div id='browser1' class='col-xs-12 padding00'>
		<div class='col-xs-2 padding00 text-center'>
			<span id='arrowCircle' class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-left arrow"></i></span>
			<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-arrow-right arrow"></i></span>
			<span  class='col-xs-4 padding00 margin-top5'><i class="fa fa-rotate-right fa-1x"></i></span>
		</div>
		<div class='col-xs-8 padding00 text-center url'>
			<input type="text" maxlength="100" class="usr-text" class="padding00" value="www.codetantra.com/pseudo-empty-not.jsp">
			<span class='col-xs-1 padding00'><i class="fa fa-star-o fa-1x"></i></span>
		</div>
		<div class='col-xs-2 padding00 fa-display text-center'>	
			<span class='col-xs-6 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
			<span class='col-xs-6 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
		</div>
	</div>
	<div class ="col-xs-12 html-body padding00" id = "htmlBody">
		<div id='browserText' class='opacity00'>
					<div>
						<p>1: Using relative position</p>
						<p></p>
						<h4>Assignment</h4>
					</div>
					<div>
						<p>2: This is second div p</p>
						<h4>second div h4 elements</h4>
					</div>
					<div>
						<p>3: This is not an empty element.</p>
						<p></p>
					</div>
					<div>
						<p>4: Using absolute position</p>
						<p>Summary
						<p>
					</div>
				</div>
		</div>
	</div>
		</div>
	</div>
	 
</body>
</html>