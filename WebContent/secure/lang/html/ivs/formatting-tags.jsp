<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Formatting Tags</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>

<style type="text/css">

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-tooltip {
    width: 250px;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

[contenteditable="true"]:empty::before {
	color: #cbcbcb !important;
	content: attr(placeholder);
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
	min-width: 25px;
}

.margin-top {
    margin-top: 21px;
}

.padding00 {
	padding: 0px;
}

.position {
	position: relative;
	display: inline-block;
}

.z-index1000000 {
	position: relative;
	background-color : white;
	z-index: 1000000 !important;
}

.creamPreTab4 {
	tab-size: 3;
    margin: 8px;
    padding: 10px;
    font-size: 13px;
	-moz-tab-size: 3;
    border-radius: 8px;
    background-color: #fffae6;
    min-height: 150px;
}

input {
	background: transparent;
	border: none;
}

[contenteditable="true"] {
    outline: medium none;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
  }

#htmlDisplay {
	padding: 4px;
	margin-top: 30px;
}

.background {
	background: yellow;
}

#pcontent {
	margin-top: 5px;
}


 .container { /*Browser css  */
	padding: 0px;
	border: 2px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
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

ul.tabs > li.active{
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
	min-height: 100px;
	border-top: 1px solid gray;
	background: white;
	padding: 8px;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 15px;
} /* browse css closed */
 
 
</style>

</head>
<body>
<script type="text/javascript">

var intro;
var htmlTagsCounting = 1;
var tagContent = ['b', 'strong', 'i', 'em', 'u', 'mark',  'small', 'del', 'ins', 'sub', 'sup', 'q', 'abbr',
                  'blockquotes', 'address', 'cite', 'bdo', 'kbd', 'samp', 'code'];

var browserText = ['Bold Text', 'Strong Text', 'Italic Text', 'Emphasized Text', 'underline text', 'Marked Text', 
                   'Small Text', 'Deleted Text', 'Inserted Text', 'Subscript Text', 'Superscript Text',
                   'single quoted', 'abbreviation text', 'double quoted', 'Contact information', 'cite tag',
                   'bdo tag', 'kbd tag', 'samp tag', 'code tag'];
                   
var divOpenMaxLength = ['8', '3', '4', '4', '6', '7', '5', '5', '5', '5', '3', '6', '13', '9', '6', '5', '5', '6', '6'];
var divTextMaxLength = ['11', '11', '15', '15', '11', '10', '12', '13', '14', '16', '14', '17', '13', '19', '8', '8', '8', '8', '8'];
var divCloseMaxLength = ['9', '4', '5', '5', '7', '8', '6', '6', '6', '6', '4', '7', '14', '10', '7', '6', '6', '7', '7'];

$(document).ready(function() {
	introGuide();
	displaybrowser('#browser',1);
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
							element : "#code",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#openTag1",
							intro	: "",
							tooltipClass : "hide",
						},{
							element : "#restartBtn",
							intro : "Click to Restart",
							tooltipClass: "introjs-tooltip-min-width-custom",
							position : "right"
						}]
		});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "code" :
				$("#content").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us revise a basic HTML page syntax which already you are familiar with.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
			break;
			
			case "openTag"+ htmlTagsCounting :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Open <span class="ct-code-b-yellow">'+ tagContent[( htmlTagsCounting - 1)] +'</span> tag<br>'+
							'Hint: &lt;'+ tagContent[ (htmlTagsCounting -1) ] +'&gt;';
					typing('.introjs-tooltiptext', text, function() {
						$("#openTag" + htmlTagsCounting).focus();
						nextSteps("#closeTag" + htmlTagsCounting, "tagClose");
						textValidation("#openTag" + htmlTagsCounting, '<'+ tagContent[ (htmlTagsCounting -1) ] +'>' );
					});
				});
			break;
			
			case "closeTag" + htmlTagsCounting :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Close <span class="ct-code-b-yellow">'+ tagContent[ (htmlTagsCounting -1) ] +'</span> tag<br>'+
							'Hint: &lt;/'+ tagContent[ (htmlTagsCounting -1) ] +'&gt;';
					typing('.introjs-tooltiptext', text, function() {
						$("#closeTag" + htmlTagsCounting).focus();
						nextSteps("#tagBetweentext"+htmlTagsCounting, "bText");
						textValidation("#closeTag" + htmlTagsCounting, "</"+ tagContent[ (htmlTagsCounting -1) ] +">");
					});
				});
			break;
			
			case "tagBetweentext" + htmlTagsCounting :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Enter <span class="ct-code-b-yellow">'+ browserText[ (htmlTagsCounting -1) ] +'</span><br>';
					typing('.introjs-tooltiptext', text, function() {
						if (htmlTagsCounting < 20) {
							$("#tagExplain").append('<br><div id="tagNumber'+ (htmlTagsCounting + 1) +'" class="position">'+
									'<input id="openTag'+ (htmlTagsCounting + 1) +'" type="text" size='+ divOpenMaxLength[(htmlTagsCounting -1)] +
									' maxlength='+ divOpenMaxLength [(htmlTagsCounting - 1)]+'>'+
									'<input id="tagBetweentext'+ (htmlTagsCounting + 1) +'" type="text" size='+ divTextMaxLength[(htmlTagsCounting -1)] +
									' maxlength='+ divTextMaxLength[(htmlTagsCounting -1)] +'>'+
									'<input id="closeTag'+ (htmlTagsCounting + 1) +'" type="text" size='+ divCloseMaxLength[(htmlTagsCounting -1)] +
									' maxlength='+ divCloseMaxLength[(htmlTagsCounting -1)] +'>'+
									'</div>');
						}
						$("#tagBetweentext" + htmlTagsCounting).focus();
							textValidation("#tagBetweentext" + htmlTagsCounting, browserText[ (htmlTagsCounting -1) ]);
							nextSteps("#htmlDisplay", browserText[ (htmlTagsCounting -1) ]);
					});
				});
			break;
			
			case "htmlDisplay" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					if (htmlTagsCounting == 10) {
						$('#pcontent' + htmlTagsCounting).after('<br><div class = "opacity00" id = "pcontent'+ (htmlTagsCounting + 1) +'"></div>');
					} else {
						$('#pcontent' + htmlTagsCounting).after('<div class = "opacity00" id = "pcontent'+ (htmlTagsCounting + 1) +'"></div>');
					}
					$("#pcontent" + htmlTagsCounting).html('<'+ tagContent[ (htmlTagsCounting -1) ] +'>'+ 
					$("#tagBetweentext" + htmlTagsCounting).val()+'</'+ tagContent[ (htmlTagsCounting -1) ] +'>');
					intro.refresh();
					$("#tagNumber" + htmlTagsCounting).addClass("z-index1000000");
					transferEffect("#tagNumber" + htmlTagsCounting , "#pcontent" + htmlTagsCounting, function () {
						$("#tagNumber" + htmlTagsCounting ).removeClass("z-index1000000");
						htmlTagsCounting++;
						if (htmlTagsCounting < 21) {
							nextSteps("#openTag" + htmlTagsCounting, "openTag");
						}
						introNextStep();
					});
				});
			break;
				
			case "restartBtn":
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
	

	function displaybrowser(selector, num) {  
		$(selector).append('<div class="container col-xs-12 padding0" id="viewBrowser'+ num +'">'
					+ '<div class="tab-container"><ul class="tabs clearfix"><li class="active">'
					+ '<div class="col-xs-10 margin-top20 padding00" id="loadImg'+ num +'">Formatting Tags</div>'
					+ '<i class="fa fa-times fa-sm margin-top20"></i>'
					+ '</li></ul><span id ="plus"><i class="fa fa-plus"></i></span></div>'
					+ '<div id="browser" class="col-xs-12 padding00"><div class="col-xs-2 padding00 text-center">'
					+ '<span id="arrowCircle" class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-left arrow"></i></span>'
					+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-arrow-right arrow"></i></span>'
					+ '<span  class="col-xs-4 padding00 margin-top5"><i class="fa fa-rotate-right fa-1x"></i></span></div>'
					+ '<div class="col-xs-8 padding00 text-center url">'
					+ '<input type="text" maxlength="50" class="usr-text padding00" id="url'+  num +'">'
					+ '<span class="col-xs-1 padding00"><i class="fa fa-star-o fa-1x"></i></span></div>'
					+ '<div class="col-xs-2 padding00 fa-display text-center">'	
					+ '<span class="col-xs-6 padding00 margin-top5"><i class="fa fa-home fa-1x"></i></span>'
					+ '<span class="col-xs-6 padding00 margin-top5"><i  class="fa fa-bars fa-1x"></i></span></div></div>'
					+ '<div class ="col-xs-12 html-body padding00" id = "htmlBody">'
					+ '<div id="content'+ num +'" class="col-xs-12 html-text padding00">'
					+ '<div id = "pcontent1" class="opacity00"></div>'
					+ '</div></div></div>');
		
					$('#url1').attr("placeholder", "https://www.codetantra.com/webdevelopment/formatting-tags.html");
	}
	
	function appendNextBtn(callBackFunction) {
		$('.introjs-tooltiptext').append('<div class="text-right"><a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a></div>');
		$('.introjs-duplicate-nextbutton').click(function() {
			$('.introjs-duplicate-nextbutton').remove();
			callBackFunction();
		});
	}
	
	function introNextStep() {
		setTimeout(function() {
			intro.nextStep();
		},1200);
	}
	
	//********** zoomInDown effect function **********
	function zoomInLeftEffect(selector, callBackFunction) {
		$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector).removeClass("animated zoomIn")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
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
	
	//********* Transfer effect function ********* 
	function transferEffect(selector1, selector2, callBackFunction) {
		$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
			$(selector2).removeClass("opacity00");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	//********** Typing function **********
	function typing(typingId, typingContent, typingCallbackFunction) {
		$(typingId).typewriting(typingContent, {
			"typing_interval" : '5',
			"cursor_color" : 'white',
		}, function() {
			$(typingId).removeClass("typingCursor");
			typingCallbackFunction();
			$('.introjs-tooltip').show();
		});
	}

	//********** Check text color and font-size **************** 
	function textValidation(text, validationText1 ) {
		//******bind - Is used to combine Multiple event types at once
		 $("body").bind("cut copy paste", function(e) {
			e.preventDefault();
		}); 
		//When the keybord key deep press
		$(text).on("keydown", function(e) {
		$('.error-text').remove();
		//backspace[8], tab[9], escape[27], leftArrow[37], rightArrow[39], delete[46], enter[13]
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [8, 9, 27, 37, 39, 46, 13]) !== -1) {
			return;
		}
		//***** Check input text field to limited access *****
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>max length restricted to "+ max +".</span>");
			e.preventDefault();
		} 	
	});
	//*********When the keybord key is released*******
	$(text).on("keyup", function(e) {
		$(".introjs-duplicate-nextbutton").remove();
		$('.error-text').remove();
		intro.refresh();
		if (e.keyCode == 17) {
			$(text).val(validationText1);
		}
		//*******Text empty to show error message***********
		if ($(this).val() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter above text.</span>");
			$(".introjs-nextbutton").hide();
		} else {
			//************check the given text entered or not and display next button*********
			var trimText = $(text).val();
			if ( trimText.trim().toLowerCase() == validationText1.toLowerCase() ) {
				$(".introjs-nextbutton").show();
			} else {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter above text.</span>");
				$(".introjs-nextbutton").hide();
			}
		}
	});
} 

</script>

	<div class="col-xs-12">
		<div class="ct-box-main">
		
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="headding">Formatting Tags</h1>
			</div>

			<div class="col-xs-12 margin-top opacity00" id="content">
				<div class="col-xs-4 col-xs-offset-0 margin-top padding00" id="fontHtmlText">
					<pre class='col-xs-12 creamPreTab4 padding00' id="code">
<span id="docType">&lt;!DOCTYPE html&gt;</span>
<span id="hOpenTag"> &lt;html&gt; </span>
	<span id="bodyOpenTag">&lt;body&gt; </span>
		<div id="tagExplain" class="position"><div id='tagNumber1' class="position"><input id="openTag1" type="text" size="3" maxlength='3'><input id="tagBetweentext1" type="text" size="10" maxlength='10'><input id="closeTag1" type="text" size="4" maxlength='4'></div></div>
	<span id="bodyCloseTag">&lt;/body&gt;</span>
<span id="hClosedTag">&lt;/html&gt;</span>
						</pre>
					</div>

				<div class="col-xs-6 col-xs-offset-1">
					<div class = "col-xs-12" id = "htmlDisplay"><div id="browser"></div></div>
				</div>
			</div>
			<div class = 'col-xs-12 buttons-div text-center'>
				<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
			</div> 
		</div>
	</div>
	
</body>
</html>