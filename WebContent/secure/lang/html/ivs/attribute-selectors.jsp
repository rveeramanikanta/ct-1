<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css"/>
<link rel="stylesheet" href="/css/introjs-ct.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<link rel="stylesheet" href="/css/jquery-ui.css">
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>


<title>Attribute Selectors reviews</title>

<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.margin-top20 {
	margin-top: 20px;
}

pre {
    tab-size:4;
    -moz-tab-size: 4;
    -o-tab-size:  4;
 	white-space: pre-wrap;
 	border : 2px solid black;
 	font-size: 14px;
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

#browserText {
	margin: 4px;
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

/* *********************** Ending of the browser styles ********************* */

.user-btn {
	background: green;
}

.skip-btn {
	background: orange;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 99999999;
}

.bg-yellow {
	background: yellow;
}

.css-rules {
	background: #2d66d8;
}

.css-rules1 {
	color: red;
}

.introjs-tooltiptext ul > li > span > b {
	color: yellow;
}

// 

</style>

</head>
<body>

	<div class='text-center margin-top20'>
		<h4 class='label ct-demo-heading' id='heading'>Attribute Selectors</h4>
	</div>

	<div class='col-xs-12 text-center margin-top20'>
		<span id='restart'
			class='btn btn-warning btn-sm opacity00 margin-top20'>Restart
			&nbsp;<i class='fa fa-refresh'></i>
		</span>
	</div>

	<div class='col-xs-12 margin-top20'>
	<div id='htmlCode' class='col-xs-6'>
		<pre id="preTag" class='opacity00'>
&lt;html&gt;				
<span class='openStyle'>&lt;style&gt;</span>
<div id='styleDiv'>
<span id='totalStyle' class="opacity00">[<span id="firstSelect"><select><option selected>none</option><option>id</option><option>class</option></select></span>] {
	background:&nbsp; #b3d9ff;
}</span>
<span id='totalStyle1' class="opacity00">[<span id="secondSelect"><select><option selected>id</option><option>class</option></select><select><option selected>none</option><option>~</option><option>^</option><option>|</option><option>$</option><option>*</option></select>=grade</span>] {
	color:&nbsp;red;
}</span>
</div>
&lt;/style&gt;
&lt;body&gt;
<div id='codeDiv' class='opacity00'>	<span id="gradeFirst" class="grade-first">&lt;p <span>id="gradeFirst"</span> <span>class="grade-first"</span>&gt;first standard&lt;/p&gt;</span>
	<span class="second grade">&lt;p <span>class="second grade"</span>&gt;second standard&lt;/p&gt;</span>
	<span class="gradethree">&lt;p <span>class="gradethree"</span>&gt;third standard&lt;/p&gt;</span>
	<span class="fourth-grade">&lt;p <span>class="fourth-grade"</span>&gt;fourth standard&lt;/p&gt;</span>
	<span class="grade_fifth">&lt;p <span>class="grade_fifth"</span>&gt;fifth standard&lt;/p&gt;</span>
	<span class="grade">&lt;p <span>class="grade"</span>&gt;six standard&lt;/p&gt;</span>
	<span id="grade">&lt;p <span>id="grade"</span>&gt;standard standard&lt;/p&gt;</span></div>&lt;/body&gt;
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
			<input type="text" maxlength="100" class="usr-text" class="padding00" disabled="disabled" value="www.codetantra.com/attribute-selector.jsp">
			<span class='col-xs-1 padding00'><i class="fa fa-star-o fa-1x"></i></span>
		</div>
		<div class='col-xs-2 padding00 fa-display text-center'>	
			<span class='col-xs-6 padding00 margin-top5'><i class="fa fa-home fa-1x"></i></span>
			<span class='col-xs-6 padding00 margin-top5'><i  class="fa fa-bars fa-1x"></i></span>
		</div>
	</div>
	<div class ="col-xs-12 html-body padding00" id = "htmlBody">
		<div id='browserText' class='opacity00'>
			<p id="gradeFirst" class="grade-first">first standard</p>
			<p class="second grade">second standard</p>
			<p class="gradethree">Third standard</p>
			<p class="fourth-grade">fourth standard</p>
			<p class="grade_fifth">fifth standard</p>
			<p class="grade">six standard</p>
			<p id="grade">seven standard</p>
		</div>
	</div>
	</div>
	</div>
	
</body>
<script type="text/javascript">
var classCount = 0;
var flag = false, text1, text2;
 $(document).ready(function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		 window.location.search = "?restart=1";
	});
	initIntroJS();
	
	$('#restart').click(function() {
		location.reload();
	});
	
	 $("select:first").keypress(function(e) {
		console.log("key is pressed");
		e.preventDefault();
	 });
		
 });	
 
 function initIntroJS() {
	 intro = introJs();
	 intro.setOptions({
			steps : [{
				element :"#heading",
				intro : "",
				position : "bottom",
			},  {
				element :"#codeDiv",
				intro : "",
				position : "bottom",
			},  {
				element :"#firstSelect",
				intro : "",
				position : "right",
			},  {
				element :"#totalStyle",
				intro : "",
				position : "right",
			},  {
				element :"#secondSelect",
				intro : "",
				position : "right",
			},  {
				element :"#totalStyle1",
				intro : "",
				position : "top",
				animateStep: "attribute-Selector"
			},  {
				element :"#restart",
				intro : "",
				position : "top"
			}]});
	 
	 intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "heading":
			$(".introjs-nextbutton").hide();
			var text = "The <b class='ct-code-b-yellow'>[attribute]</b> selector is used to select elements with a specified attribute and attribute value.This selector"
						+" must be encolosed with <b class='ct-code-b-yellow'>square brackets</b>.";
			$(".introjs-tooltiptext").html(text);
			//typing(".introjs-tooltiptext", text, function() {
				$('pre').removeClass('opacity00');
				$('.introjs-nextbutton').show();
			//});
			break;
			
		case "codeDiv":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the sample HTML<b class='ct-code-b-yellow'>code</b>.";
				$(".introjs-tooltiptext").html(text);
				//typing(".introjs-tooltiptext", text, function() {
					$('#codeDiv').removeClass('opacity00');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="revealingBrowser()">Next &#8594;</a>');
				//});
			});
			break;
			
		case "firstSelect":
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Select the valid <b class='ct-code-b-yellow'>attribute</b>.";
				$(".introjs-tooltiptext").html(text);
				//typing(".introjs-tooltiptext", text, function() {
					$("#firstSelect").click('keypress',function(e) {
						if ($(this).find(":selected").text() != "none") {
							$('.introjs-nextbutton').show();
						} else {
							$('.introjs-nextbutton').hide();
						}
					});
				//});
			});
			break;
			
		case "secondSelect":
			$('#codeDiv').removeClass("z-index");
			$('.bg-yellow').removeClass("bg-yellow");
			$(".introjs-nextbutton").hide();
			$('#totalStyle1').removeClass('opacity00');
			$(".introjs-fixParent").removeClass("introjs-fixParent");
			$('.introjs-tooltip').css('min-width','400px');
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "We can select the attribute from the first select option and different signs "
							+"from the second select <br>Note: option sign value may be <b class='ct-code-b-yellow'>none</b><ul>"
							+"<li id='text1' class='opacity00'><span><b>~</b></span> an element whose attribute value is a list of whitespace-separated values,"
							+" One of which is exactly equal.</li>" 
							+"<li id='text2' class='opacity00'><span><b>^</b></span> an element whose attribute value begins exactly with the string. </li>"
							+"<li id='text3'class='opacity00'><span><b>|</b></span> an element whose attribute has a hyphen-separated list of values beginning (from the left) </li>"
							+"<li id='text4'class='opacity00'><span><b>$</b></span> an element whose attribute value ends exactly with the string.</li>"
							+"<li id='text5' class='opacity00'><span><b>*</b></span> an element whose attribute value contains the substring.</li></ul>"
				$(".introjs-tooltiptext").html(text);
				//typing(".introjs-tooltiptext", text, function() {
				$('#text1').fadeTo(800, 1, function() {
					$('#text2').fadeTo(800, 1, function() {
						$('#text3').fadeTo(800, 1, function() {
							$('#text4').fadeTo(800, 1, function() {
								$('#text5').fadeTo(800, 1, function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
				//});
			});
			break;
			
		case "totalStyle":
			$(".introjs-nextbutton").hide();
			$('#totalStyle').removeClass('opacity00');
			//$('#firstSelect > select').addClass('hide');
			$('#firstSelect').text($('#firstSelect > select').find(':selected').text());
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Now all the <b class='ct-code-b-yellow'>"+ $('#firstSelect').text() +"</b> attribute elements are selected.";
				$(".introjs-tooltiptext").html(text);
				//typing(".introjs-tooltiptext", text, function() {
					$("#codeDiv").addClass("z-index");
					$('#codeDiv > span['+$('#totalStyle > span').text()+']').addClass('bg-yellow');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="firstSelectorAnimation()">Next &#8594;</a>');
				//});
			});
			break;
			
		case "totalStyle1":
			$('.introjs-tooltip').css('min-width','200px');
			$(".introjs-nextbutton").hide();
			$('#secondSelect select').addClass('hide');
			flag = true;
			
			text1 = $('#secondSelect > select:last').find(':selected').text();
			text2 = $('#secondSelect > select:first').find(':selected').text();
			
			if ($('#secondSelect > select:last').find(':selected').text() == "none") {
				$('#secondSelect').text($('#secondSelect > select:first').find(':selected').text()+"=grade");  
			} else {
				$('#secondSelect').text($('#secondSelect > select').find(':selected').text()+"=grade");
			}
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				var text = "<b class='ct-code-b-yellow'>selectors</b> are patterns used to select the element(s) those you want"
							+" to style.<br/><br/><div id='appendDiv'></div>";
				$(".introjs-tooltiptext").html(text);
				selectorText($('#secondSelect').text());
				//typing(".introjs-tooltiptext", text, function() {
					$("#codeDiv").addClass("z-index");
					$('#codeDiv > span['+$('#totalStyle1 > span').text()+']').addClass('bg-yellow');
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="secondSelectorAnimation()">Next &#8594;</a>');
				//});
			});
			break;
			
		case "restart":
			$('.user-btn, .skip-btn').remove();
			$(".introjs-nextbutton").hide();
			$("#restart").removeClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Click to restart.";
				$(".introjs-tooltiptext").html(text);
				//typing(".introjs-tooltiptext", text, function() {
				//});
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
 
 function revealingBrowser() {
	$('.user-btn').remove();
	$('#browser').removeClass('opacity00').addClass('z-index');
	$('#codeDiv').effect("transfer", {to: $('#browserText'), className: "ui-effects-transfer"}, 800, function() {
		$('#browserText').removeClass('opacity00');
		$('.introjs-nextbutton').show();
	});
 }
 
function firstSelectorAnimation() {
	$('.user-btn').remove();
	$('#browserText > p['+$('#totalStyle > span').text()+']').addClass('class-transfer-move');
	var  count = ($('.class-transfer-move').length)-1;
	transfer(classCount,count,"background","#b3d9ff");
}

function secondSelectorAnimation() {
	$('.user-btn').remove();
	$('#browserText > p['+$('#totalStyle1 > span').text()+']').addClass('class-transfer-move');
	var  count = ($('.class-transfer-move').length)-1;
	transfer(classCount,count,"color","red");
}

 function transfer(classCount,count,property,value) {
	$('.bg-yellow:eq('+classCount+')').effect("transfer", {to: $('.class-transfer-move:eq('+classCount+')'), className: "ui-effects-transfer"}, 800, function() {
		$('.class-transfer-move:eq('+classCount+')').css(property,value);
		if (count == classCount) {
			$('.class-transfer-move').removeClass('class-transfer-move');
			if (!flag) {
				$('.introjs-nextbutton').show();
			} else {
				$('#secondSelect').empty().append('<select><option>id</option><option>class</option></select>'
						+ '<select><option>none</option><option>~</option><option>^</option>'
						+ '<option>|</option><option>$</option><option>*</option></select>=grade');
				
				firstSelected();
				intro.refresh();
				var text = "User choice to select the <b class='ct-code-b-yellow'>Selector</span>";
				$(".introjs-tooltiptext").html(text);
				//typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="userChoie()">Next &#8594;</a>');
				//});
			}
		} else {
			classCount++;
			transfer(classCount,count,property,value);
		}
	});
}
 
 function firstSelected() {
	 var len = $('#secondSelect > select:last > option').length
		for (var i = 0; i <= len; i++) {
			var newTxt = $('#secondSelect > select:last > option').eq(i).text();
			if (text1 == newTxt) {
				$('#secondSelect > select:last > option').eq(i).attr('selected', '');
			}
		}
	 
	 var len = $('#secondSelect > select:first > option').length
		for (var i = 0; i <= len; i++) {
			var newTxt = $('#secondSelect > select:first > option').eq(i).text();
			if (text2 == newTxt) {
				$('#secondSelect > select:first > option').eq(i).attr('selected', '');
			}
		}
 }
 
 function userChoie() {
	 $('.bg-yellow').removeClass('bg-yellow');
	 $('.user-btn').remove();
	 $('#secondSelect select').addClass('hide');
		flag = true;
		text1 = $('#secondSelect > select:last').find(':selected').text();
		text2 = $('#secondSelect > select:first').find(':selected').text();
		if ($('#secondSelect > select:last').find(':selected').text() == "none") {
			$('#secondSelect').text($('#secondSelect > select:first').find(':selected').text()+"=grade");  
		} else {
			$('#secondSelect').text($('#secondSelect > select').find(':selected').text()+"=grade");
		}
		intro.refresh();
		$("#codeDiv").addClass("z-index");
		$('#codeDiv > span['+$('#totalStyle1 > span').text()+']').addClass('bg-yellow');
		var text = "<b class='ct-code-b-yellow'>selectors</b> are patterns used to select the element(s) those you want"
				+" to style.<br/><br/><div id='appendDiv'></div>";
		$(".introjs-tooltiptext").html(text); 
		selectorText($('#secondSelect').text());
		$('#browserText > p').css('color', '');
		$('.skip-btn').remove();
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="secondSelectorAnimation()">Next &#8594;</a>');
		$(".introjs-tooltipbuttons").append('<a class="introjs-button skip-btn" onclick="intro.goToStep(7)">Skip &#8594;</a>');
 }
 
 
 function selectorText(selectorText) {
	 switch(selectorText) {
	 	case "class=grade":
	 		text = "The given selector is <b class='ct-code-b-yellow'>[class=grade]</b>.....";
		break;
	 	case "class~=grade" :
	 		text = "The given selector is <b class='ct-code-b-yellow'>[class~=grade]</b>.....";
	 	break;
	 	case "class^=grade":
	 		text = "The given selector is <b class='ct-code-b-yellow'>[class^=grade]</b>.....";
	 	break;
	 	case "class|=grade":
	 		text = "The given selector is <b class='ct-code-b-yellow'>[class|=grade]</b>.....";
	 	break;
	 	case "class$=grade":
	 		text = "The given selector is <b class='ct-code-b-yellow'>[class$=grade]</b>.....";
	 	break;
	 	case "class*=grade":
	 		text = "The given selector is <b class='ct-code-b-yellow'>[class*=grade]</b>.....";
	 	break;
	 	
	 	case "id=grade":
	 		text = "The given selector is <b class='ct-code-b-yellow'>[id=grade]</b>.....";
		break;
	 	case "id~=grade" :
	 		text = "The given selector is <b class='ct-code-b-yellow'>[id~=grade]</b>.....";
	 	break;
	 	case "id^=grade":
	 		text = "The given selector is <b class='ct-code-b-yellow'>[id^=grade]</b>.....";
	 	break;
	 	case "id|=grade":
	 		text = "The given selector is <b class='ct-code-b-yellow'>[id|=grade]</b>.....";
	 	break;
	 	case "id$=grade":
	 		text = "The given selector is <b class='ct-code-b-yellow'>[id$=grade]</b>.....";
	 	break;
	 	case "id*=grade":
	 		text = "The given selector is <b class='ct-code-b-yellow'>[id*=grade]</b>.....";
	 	break;
	 }
	 $("#appendDiv").html(text);
 }
 
 function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : 5,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
 
</script>
</html>