<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<title>palindrome</title>
</head>
<style>
.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
 	/* margin-top: 20px;  */
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 120px;
	overflow: auto;
	padding: 10px;
	white-space: pre-line;
}

#informationdiv {
	background-color: rgb(243, 235, 235);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    height: 85px;
    margin-top: 10px;
  /*   color: green; */
    padding: 10px;
}

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext > span{
	display: inline-block;
}

.introjs-tooltip {
	min-width: 280px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-prevbutton, .introjs-nextbutton, .introjs-skipbutton {
	border-radius: 3px !important;
}

.introjs-prevbutton {
	background-color: #5bc0de !important;
}

.introjs-nextbutton {
	background-color: green !important;
}

.introjs-skipbutton {
	margin-right: 15px !important;
	background-color: orange !important;
}

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
	outline: none;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.ct-code-b-brown {
	font-family: monospace;
	font-weight: bold;
	color: brown;
}

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

#typewritingId {
	height: 167px; 
}

.position-relative {
	position: relative;
}

.display-inline {
	display: inline-block;
}

.address-box {
	height: 222px;
	border: 1px solid lightgray;
	border-radius: 4px;
}

.opacity00 {
	opacity: 0.0;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}

.creamPreTab4 {
	height: 390px;
}

.padding0 {
	padding: 0px;
}

.z-index9999999 {
	z-index: 9999999;
}

.panel-heading {
	padding: 0px 0px;
}

.panel-body {
	height: 45px;
}

.panel {
	margin-top: 10px;'
}

#startBtn {
	margin-top: 5px;
}

#animationDiv {
	border: 1px solid lightgray;
	height: 390px;
	border-radius: 4px;
}

.input-char {
   width: 200px;
 /* padding: 8px; */
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
}

.input-char1 {
   width: 300px;
 /* padding: 8px; */
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
}

</style>
<body>

<div class="col-xs-12 text-center">
	<div class="margin-padding-css text-center" >
		<div class="col-xs-1"></div>
		<div class="col-xs-offset-3 col-xs-3">
			<h3><span class="ct-demo-heading label label-default" id="titleName">Sample palindrome program on Strings</span></h3>
		</div>
	</div>
</div>

<div class="body-div col-xs-12 padding0">
<br>
<div class="col-xs-5">
<!-- <pre id="typewritingId"></pre> -->
<pre class="creamPreTab4" id="preBody">
#include&lt;stdio.h&gt;
<span id="line1">main()</span> {
 <span id="line2">int len, i, j, c = 0;</span>
 <span id="line3">char a[20];</span>
 <span id="line4">printf("Enter a string:");</span>
 <span id="line5">scanf("<span id="scanPercentA">%s</span>", <span id="scanAmpPercentA">a</span>);</span>
 <span id="line6">len = strlen(a);</span>
 <span id="line7">printf("\n Length of string : %d", len);</span>
 <span id="loopOne"><span id="line8">for(i = <span id="iValues">0</span>, j = <span id="jValues">len</span> - 1; i &lt; <span id="iLength">len</span> / 2; <span>i++</span>, <span>j--</span>) {</span>
  <span id="line9">if(a[i] != a[j]) {</span>
   <span id="line10">c++;</span>
   <span id="line11">break;</span>
  <span id="line12">}</span>
 <span id="line13">}</span></span>
 <span id="line14">if (c == 0) {</span>
  <span id="line15">printf("The given string %s is a palindrome \n : ", a);</span>
 <span id="line16">} else {</span>
  <span id="line17">printf("The given string %s is not a palindrome \n : ", a);</span>
 <span id="line18">}</span>
<span id="line19">}</span>
</pre>
</div>
	<div class="col-xs-7">
		<div class="col-xs-12" id="animationDiv">
		<div class="col-xs-12" id="animateTables">
			<div class="col-xs-offset-2 col-xs-2">
				<div class="panel-group text-center position-relative opacity00" id="panelId1">
					<div class="panel panel-info">
						<div class="panel-heading ">len</div>
						<div class="panel-body">
							<span id="lenPanelId" class="position-relative display-inline ct-code-b-green visibility-hidden"></span>
						</div>
					</div>
					<span id="addressId1" class="ab-adress-css">5260</span>
				</div>
			</div>
			
			<div class="col-xs-2">
				<div class="panel-group text-center position-relative opacity00" id="panelId2">
					<div class="panel panel-info">
						<div class="panel-heading ">i</div>
						<div class="panel-body ">
							<span id="panelBodyIValue" class="position-relative display-inline visibility-hidden">0</span>
						</div>
					</div>
					<span id="addressId2" class="ab-adress-css">1520</span>
				</div>
			</div>
			
			<div class="col-xs-2">
				<div class="panel-group text-center position-relative opacity00" id="panelId3">
					<div class="panel panel-info">
						<div class="panel-heading ">j</div>
						<div class="panel-body">
							<span id="panelBodyJValue" class="position-relative display-inline visibility-hidden"></span>
						</div>
					</div>
					<span id="addressId3" class="ab-adress-css">1024</span>
				</div>
			</div>
			
			<div class="col-xs-2">
				<div class="panel-group text-center position-relative opacity00" id="panelId4">
					<div class="panel panel-info">
						<div class="panel-heading">c</div>
						<div class="panel-body">
							<span id="" class="position-relative ct-code-b-green display-inline">0</span>
						</div>
					</div>
					<span id="addressId" class="ab-adress-css">4835</span>
				</div>
			</div>
		</div>
		
		<div class="col-xs-12">
			<table id="tableId" class="table visibility-hidden" style="margin-top: 10px;">
				<tbody>
					<tr class="">
						<td class=""> <b class="ct-code-b-brown"></b></td>
						<td class="">0</td>
						<td class="">1</td>
						<td class="">2</td>
						<td class="">3</td>
						<td class="">4</td>
						<td class="">5</td>
						<td class="">6</td>
						<td class="">7</td>
						<td class="">8</td>
						<td class="">9</td>
						<td class="">10</td>
						<td class="">11</td>
						<td class="">12</td>
						<td class="">13</td>
						<td class="">14</td>
						<td class="">15</td>
						<td class="">16</td>
						<td class="">17</td>
						<td class="">18</td>
						<td class="">19</td>
					</tr>
					
					<tr class="table-bordered">
						<td class="table-bordered"> <b class="ct-code-b-brown">ch</b></td>
						<td class="table-bordered opacity00"></td>
						<td class="table-bordered opacity00"></td>
						<td class="table-bordered opacity00"></td>
						<td class="table-bordered opacity00"></td>
						<td class="table-bordered opacity00"></td>
						<td class="table-bordered opacity00"></td>
						<td class="table-bordered opacity00"></td>
						<td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
				        <td class="table-bordered opacity00"></td>
					</tr>
					
				</tbody>
			</table>
			</div>
			<div class="col-xs-12">
				<div id="consoleId" class="center opacity00" style="margin-top: 15px;">
					<div class="output-console-title-bar">
						<span class="title"><b>Console</b></span>
					</div>
					<div class="output-console-body" id="consoleBodyDiv">
						<span id="typeChar"></span>
						<span id="hiddenTypeChar" class="hidden">Enter a string : <input id='inputChar' class='input-char' maxlength='19' tabindex='0'></span>
						<span id="enterNumStrings"></span>
						<span id="hiddenEnterNumStrings" class="hidden">Enter <span id="enterVal"></span> strings : <input id='inputCharNumString' class='input-char1' tabindex='0'></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div><button type="button" class="col-sm-1 col-sm-offset-6 btn btn-warning opacity00" id="restartBtn" style="margin-top: 10px;">Restart </button></div>
<script>
var t1;
var arr;
var count = 1;
var sortedArr;
var finalIndex;
$(document).ready(function() {
	t1 = new TimelineLite();
	$("#restartBtn").click(function() {
		$("#inputChar").attr("disabled", false);
		$("#inputChar").val("");
		location.reload();
	});
	
	$("#inputChar").keyup(function() {
		console.log("hello");
		if ($("#inputChar").val().length < 1) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		}
	});
	
	console.log();
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps : [{
					element :'#preBody',
					intro :'',
					position:"right"
				},{
					element :'#line1',
					intro :'',
					position:"bottom"
				},{
					element :'#line2',
					intro :'',
					position:"bottom"
				},{
					element :'#animateTables',
					intro :'',
					position:"bottom"
				},{
					element :'#line3',
					intro :'',
					position:"bottom"
				},{
					element :'#tableId',
					intro :'',
					position:"bottom"
				},{
					element :'#line4',
					intro :'',
					position:"bottom"
				},{
					element :'#consoleId',               
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line5',
					intro :'',
					position:"bottom"
				},{
					element :'#inputChar',
					intro :'',
					position:"bottom"
				},{
					element :'#tableId',
					intro :'',
					position:"bottom"
				},{
					element :'#line6',
					intro :'',
					position:"bottom"
				},{
					element :'#tableId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#panelId1',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line7',
					intro :'',
					position:"bottom"
				},{
					element :'#consoleId',           
					intro :'',
					position:"bottom"
				},{
					element :'#loopOne',
					intro :'',
					position:"bottom"
				},{
					element :'#restartBtn',
					intro :'',
					position:"bottom"
				}]
	});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is the operating system call.<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any c program.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "int is a datatype.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "animateTables" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#panelId1").removeClass("opacity00");
				TweenMax.staggerFrom("#panelId1", 0.6, {opacity:0, top: -100}, -0.5, function() {
					$("#panelId2").removeClass("opacity00");
					TweenMax.staggerFrom("#panelId2", 0.6, {opacity:0, top: -100}, -0.5, function() {
						$("#panelId3").removeClass("opacity00");
						TweenMax.staggerFrom("#panelId3", 0.6, {opacity:0, top: -100}, -0.5, function() {
							$("#panelId4").removeClass("opacity00");
							TweenMax.staggerFrom("#panelId4", 0.6, {opacity:0, top: -100}, -0.5, function() {
								typing(".introjs-tooltiptext", "char", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
			});
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, used to display anything in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#enterNValueId").addClass("hidden");
				$("#hiddenTypeChar").removeClass("hidden");
				$("#scanPercentA").effect("highlight", {color: '#008000'}, 1000, function() {
					$("#scanAmpPercentA").effect("highlight",{color: '#008000'}, 1000, function() {
						typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>scanf()</span> function reads the given int value by the user from the keyboard and it stores in the memory of the variable.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line7" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, uesd to display anything in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "loopOne" :
			$('.introjs-nextbutton').hide();
			var totalLength = $("#inputChar").val().length;
			var decreaseLength = totalLength - 1;
			$("#panelBodyJValue").text(totalLength);
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#panelId2").addClass("z-index9999999");
				$("#panelId3").addClass("z-index9999999");
				$("#panelBodyIValue").removeClass("visibility-hidden");
				$("#panelBodyJValue").removeClass("visibility-hidden");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>for loop :</span> </br>i = <span id='forIValues' class='ct-code-b-yellow position-relative display-inline'>0</span>, <span style='margin-left: 10px;'>j = <span id='forJValues' class='ct-code-b-yellow position-relative display-inline'><span id='forLenCondition' class='position-relative display-inline'>len</span> - 1</span></span><br/><span id='totalIfId'></span>", 10, "", function() {
					t1.to("#forLenCondition", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#forLenCondition").text(totalLength);
					}});
					
					t1.to("#forLenCondition", 0.5, {opacity:1, rotationX: 0});
					
					t1.to("#forJValues", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#forJValues").text(decreaseLength);
					}});
					
					/* var str = "madam";
					for (var i = 0; i < str.length; i++) {
					  if(str[i] == str[str.length - 1 - i]) {
					    console.log("true");
					  } else {
					    console.log("false");
					  }
					} */
					
					t1.to("#forJValues", 0.5, {opacity:1, rotationX: 0});
					typing("#totalIfId", "a[i] != a[j]", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "inputChar" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "enter the value of n.", 10, "", function() {
					$("#inputChar").focus();
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "panelId1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#lenPanelId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#inputChar").attr("disabled", true);
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				});
			});
			break;
			
		case "tableId" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 5) {
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#tableId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						typing(".introjs-tooltiptext", "tableId", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				
			} else if (intro._currentStep == 10) {
				var result = $("#inputChar").val();
				finalIndex = result.indexOf(" ");
				console.log(finalIndex);
				if (finalIndex != -1) {
					toFillCharacterArray(finalIndex, result, finalIndex);
				} else {
					if (result.length >= 0 && result.length < 20) {
						toFillCharacterArray(result.length, result, result.length);
					} else {
						toFillCharacterArray(result.length, result, 19);
					}
				}
				
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableId tr:nth-child(n+2) td:nth-child(n+2)").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						typing(".introjs-tooltiptext", "text", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				
			} else if(intro._currentStep == 12) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					blink($("table tr:nth-child(2) td:eq("+ (count) +")"), function() {
						setTimeout(function() {
							intro.nextStep();						
						}, 1000);
					});
				});
			}
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 7) {
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#typeChar", "<span id='enterNValueId'>Enter a string : </span>", 10, "",function() {
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					});
				});
				
			} else if(intro._currentStep == 15) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					var inputLength = $("#inputChar").val().length;
					var result = $("#inputChar").val();
					var splitText = result.substring(0, result.indexOf(" ")).length;
					if(result.includes(" ")) {
						typing("#enterNumStrings", "length of string : <span class='ct-code-b-green' style='position: relative; z-index:9999999;'>" + splitText + "</span>", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					} else {
						typing("#enterNumStrings", "length of string : <span class='ct-code-b-green' style='position: relative; z-index:9999999;'>" + inputLength + "</span>", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					}
				});
			}
			break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
					
				});
			});
			break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typing(".introjs-tooltiptext", "Let us learn execution of sample program on <span class='ct-code-b-yellow'>Strings</span>.", 10, "",function() {
		$('.introjs-nextbutton').show();
	});
	
}); // end of document.ready function


function toFillCharacterArray(arraySize, resultString, finalIndexVal) {
	console.log("arraySize = " + arraySize + " resultString = " + resultString + " finalIndexVal = " + finalIndexVal);
	for(var i = 0; i <= arraySize; i++) {
		if(i == finalIndexVal) {
			$("table tr:nth-child(2) td:eq("+ (i+1) +")").html('<span class="ct-code-b-green">\\0</span>');
		} else if(i < arraySize) {
			$("table tr:nth-child(2) td:eq("+ (i+1) +")").addClass("table-bordered").text(resultString[i]);
		}
	}
}

function blink(id, callBackFunction) {
	var inputLength = $("#inputChar").val().length;
	var result = $("#inputChar").val();
	var splitText = result.substring(0, result.indexOf(" ")).length;
	var finalVal = result.indexOf(" ");
	$(id).effect("highlight", {color: '#008000'}, 800, function() {
		if(result.includes(" ")) {
			if (count < finalVal) {
				++count;
				blink($("table tr:nth-child(2) td:eq("+ (count) +")"), callBackFunction);
				$("#lenPanelId").text(splitText);
				if (count == finalVal) {
					if(typeof callBackFunction === "function") {
						c+
						
						onsole.log("In callback function...");
						callBackFunction();
					}
				}
			} 
		} else {
			if (count < inputLength) {
				++count;
				blink($("table tr:nth-child(2) td:eq("+ (count) +")"), callBackFunction);
				$("#lenPanelId").text(inputLength);
				if (count == inputLength) {
					if(typeof callBackFunction === "function") {
						console.log("In callback function...");
						callBackFunction();
					}
				}
			}
		}
	});
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
	});
}
</script>
</body>
</html>