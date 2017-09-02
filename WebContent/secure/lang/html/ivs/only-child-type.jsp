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
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<title>first-last-child</title>
<style type="text/css">

.introjs-tooltip {
	min-width: 250px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.margin-top-20 {
	margin-top: 20px;
}

.btn-success {
	font-weight: 700;
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

#browserText  {
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

#browser {
	border: 2px solid;
}

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

p {
	margin: 0 !important;
}

/* ********************** Ending of the browser styles ********************* */

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
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='heading'>Structural Only Elements</h4>
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
				<button id='onlyChild' onclick="selectorClick('one')" type="button"
					class="btn btn-success">:only-child</button>
			</div>
			<div class='col-xs-6 padding0'>
				<button id='onlyOfType' onclick="selectorClick('two')" type="button"
					class="btn btn-success">:only-of-type</button>
			</div>
		</div>
	</div>
	<div class='col-xs-12 margin-top-20'>
		<div id='htmlCode' class='col-xs-6'>
			<pre class='opacity00'>
&lt;html&gt;				
<span class='openStyle'>&lt;style&gt;</span>
<div id='styleDiv'>
<span id='totalStyle'><div id="selector" class="position input-css" contenteditable='true' spellcheck='false'  maxlength='18'></div> {
	<span id='totalProperty'><span id='property'>color:&nbsp;blue;</span>
	<span id='property'>border:&nbsp;2px solid red;</span></span>
}</span></div>
&lt;/style&gt;
&lt;body&gt;
	<div id='codeDiv' class='opacity00'>	&lt;div&gt;
		&lt;p&gt;One&lt;/p&gt;
		&lt;p&gt;Two&lt;/p&gt;
		<span class='two'>&lt;span&gt;Three&lt;/span&gt;</span>
	&lt;/div&gt;
	&lt;div&gt;
		<span class='two'>&lt;span&gt;Four&lt;/span&gt;</span>
		&lt;p&gt;Five&lt;/p&gt;
	&lt;/div&gt;
	&lt;div&gt;
		<span class='two one'>&lt;span&gt;Six&lt;/span&gt;</span>
	&lt;/div&gt;
	</div>
&lt;/body&gt;
&lt;/html&gt;</pre>
		</div>
		<div class='col-xs-6'>
			<div class='opacity00 container col-xs-12' id="browser">
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
			<input type="text" maxlength="100" class="usr-text" class="padding00" disabled="disabled" value="basic.jsp">
			<span class='col-xs-1 padding00'><i class="fa fa-star-o fa-1x"></i></span>
		</div>
		<div class='col-xs-2 padding00 fa-display text-center'>
			<span class='col-xs-6 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
			<span class='col-xs-6 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
		</div>
	</div>
	<div class ="col-xs-12 html-body padding00" id ="htmlBody">
		<div id='browserText' class="opacity00">
			<div>
				<p>One</p>
				<p>Two</p>
				<span>Three</span>
			</div>
			<div>
				<span>Four</span>
				<p>Five</p>
			</div>
			<div>
				<span>Six</span>
			</div>
			<div>
				<span>Seven</span>
				<p>Eight</p>
				<span>Nine</span>
			</div>
		</div>
	</div>
	</div>
</div>
	</div>
	<script type="text/javascript">
	var onlyChildFlag = true;
	var onlyOfTypeFlag = true;
	var flagCount = 0;
	var classCount = 0;
	$(document).ready(function() {
		$('#styleDiv input').attr('disabled','disabled');
		$('button').attr('disabled','disabled');
		initIntroJS();
		$('#restart').click(function() {
			location.reload();
		});
		 $("body").attr({ondragstart :"return false"});
	  	$('*').bind("cut copy paste",function(e) { 
	    	e.preventDefault();
	  	}); 
	});
	
	var str = [];    
	function initIntroJS() {
		intro = introJs();
		intro.setOptions({
			steps : [{
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
				element : "#totalProperty",
				intro : "",
				position : "top"
			}, {
				element : "#onlyChild",
				intro : "",
				position : "bottom"
			}, {
				element : "#selector",
				intro : "",
				position : "bottom"
			}, {
				element : "#totalStyle",
				intro : "",
				position : "right"
			}, {
				element : "#onlyOfType",
				intro : "",
				position : "bottom"
			},{
				element : "#topicsDiv",
				intro : "",
				position : "bottom"
			}, {
				element : "#restart",
				intro : "",
				position : "bottom"
			}]});
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "heading":
				$(".introjs-nextbutton").hide();
				var text = "<b class='ct-code-b-yellow'>selectors</b> are patterns used to select the element(s) you want to style.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
				
			case "topicsDiv":
				$('#browser [maxlength]').prop('value','www.codetantra.com/only-child-type.jsp');
				$('#topicsDiv,pre').removeClass('opacity00');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (intro._currentStep == 1) {
						var text = "In this live demo you are going to learn following <b class='ct-code-b-yellow'>:only-child</b> and "
								+" <b class='ct-code-b-yellow'>:only-of-type</b>";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					} else {
						$('#htmlCode, #browser').removeClass('z-index');
						$('.user-btn').remove();
						$('.bg-yellow').removeClass('bg-yellow');
						$('#onlyOfType, #onlyChild').removeAttr('disabled');
						var text = "You can select anyone.";
						typing(".introjs-tooltiptext", text, function() {
							intro.insertOption(intro._currentStep + 1, getStep("#restart", "", "right"));
							$('.skip-btn').remove();
							$(".introjs-tooltipbuttons").append('<a class="introjs-button skip-btn" onclick="intro.goToStep(10)">Skip →</a>');
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
				
			case "onlyChild":
				$('div.z-index').removeClass('z-index');
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<b class='ct-code-b-yellow'></b>:only-child can be used to select the element if parent has only one child element.";
					typing(".introjs-tooltiptext", text, function() {
						$('#onlyChild').removeAttr('disabled').addClass('visited z-index');
						intro.refresh();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;one&#34;"+')">Next →</a>');
					});
				});
				break;
				
			case "selector":
				$('[contenteditable="false"]').attr('contenteditable', 'true');
				$('button').attr('disabled','disabled');
				$('.css-rules').removeClass('css-rules');
				$(".introjs-nextbutton").hide();
				$('.user-btn').remove();
				$('.introjs-helperLayer ').one('transitionend', function() {
					 if ($('#selector').hasClass('one')) {
						if (onlyChildFlag) {
							onlyChildFlag = !onlyChildFlag;
							flagCount++;
						}
						var text = "Enter <b class='ct-code-b-yellow'>span:only-child</b>";
						typing(".introjs-tooltiptext", text, function() {
							selectorChecking('span:only-child');
						});
					} else if($('#selector').hasClass('two')) {
						if (onlyOfTypeFlag) {
							onlyOfTypeFlag = !onlyOfTypeFlag;
							flagCount++;
						}
						var text = "Enter <b class='ct-code-b-yellow'>span:only-of-type</b>";
						typing(".introjs-tooltiptext", text, function() {
							selectorChecking('span:only-of-type');
						});
					}  
				});
				break;
				
			case "totalStyle":
				$('[contenteditable="true"]').attr('contenteditable', 'false');
				$('#styleDiv input').attr('disabled','disabled');
				$(".introjs-nextbutton").hide();
				$('.user-btn').remove();
				$('.introjs-helperLayer ').one('transitionend', function() {
						var text = "Apply this css-rules to based on the pseudo-element.";
					if ($('#selector').hasClass('one')) {
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="finalAnimation('+"&#34;one&#34;"+')">Next →</a>');
						});
					} else if($('#selector').hasClass('two')) {
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="finalAnimation('+"&#34;two&#34;"+')">Next →</a>');
						});
					}
				});
				break;
				
			case "onlyOfType":
				$('.user-btn').remove();
				$('.bg-yellow').removeClass('bg-yellow');
				$('div.z-index').removeClass('z-index');
				$(".introjs-nextbutton").hide();
				$('#onlyOfType').addClass('visited z-index');
				$('.visited').removeAttr('disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = ":only-of-type can be used to select the unique type elements in each parent element.";
					typing(".introjs-tooltiptext", text, function() {
						intro.refresh();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;two&#34;"+')">Next →</a>');
					});
				});
				break;
				
			case "firstOfType":
				$('.user-btn').remove();
				$('.bg-yellow').removeClass('bg-yellow');
				$('div.z-index').removeClass('z-index');
				$(".introjs-nextbutton").hide();
				$('#firstOfType').addClass('visited z-index');
				$('.visited').removeAttr('disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "This pseudo element targets the first of type of each element of diffrent parents.";
					typing(".introjs-tooltiptext", text, function() {
						intro.refresh();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;three&#34;"+')">Next →</a>');
					});
				});
				break;
				
			case "lastOfType":
				$('.user-btn').remove();
				$('.bg-yellow').removeClass('bg-yellow');
				$('div.z-index').removeClass('z-index');
				$(".introjs-nextbutton").hide();
				$('#lastOfType').addClass('visited z-index');
				$('.visited').removeAttr('disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "This pseudo element targets the last of type of each element of diffrent parents.";
					typing(".introjs-tooltiptext", text, function() {
						intro.refresh();
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="selectorClick('+"&#34;four&#34;"+')">Next →</a>');
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
		 $('#selector').removeAttr('class').attr('class','position input-css').addClass(element).text("");
		 intro.goToStep(6);
	 }
	 
	function selectorChecking(pseudoSelector) {
		$('#selector').focus();
		$('#selector').on("keydown", function(e) {
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
				$('.length-error-text').remove();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to "+ max +".</span>");
				e.preventDefault();
			}
		});
		$('#selector').on("keyup", function(e) {
			intro.refresh();
			if ($('#selector').text().trim() == pseudoSelector) {
				$('.length-error-text').remove();
				if ($('.user-btn').length == 0) {    
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="intro.goToStep(7)">Next &#8594;</a>');
				} else {
					$('.user-btn').remove();
				}
			} else {
				$('.user-btn').remove();
				$('.length-error-text').remove();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Enter the selector properly.</span>");
			}
		});
	}
	
	function finalAnimation(classValue) {
		$('#codeDiv,#browser').addClass('z-index');
		$('.user-btn').remove();
		$('span.'+classValue).addClass('bg-yellow');
		var count = ($('.bg-yellow').length)-1;
		$('#browserText '+$('#selector').text()).addClass('class-transfer-move');
		transfer(classCount,count);
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
</body>
</html>