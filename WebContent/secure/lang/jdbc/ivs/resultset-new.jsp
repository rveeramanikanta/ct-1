<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">

<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<title>Result Set</title>
<style>

.code-div {
	border: 2px solid gray;
	border-radius: 10px;
}

.animation-div {
	border: 2px solid gray;
	border-radius: 10px;
	height:665px;
}

.creampretab4 {
	-moz-tab-size: 2;
	background-color: lavender !important;
	font-size: 12px;
	font-style: inherit;
	line-height: 1.7;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
	position: relative;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px; 
	border-bottom-right-radius: 6px;
	height: 135px;
	padding: 10px;
}

.output {
	font-size: 14px;
	font-weight: bold;
}

.border {
	border: 2px solid gray;
	border-radius: 10px;
}

.database-box {
	border: 1px solid gray;
	border-radius: 8px;
	height: 100px;
	border-top:none;
	display: table;
	margin-bottom: 0;
	padding:0;
}

 .oval {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 28px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	background-color: antiquewhite;
}

.database-text-middle {
	vertical-align: middle;
	text-align: center;
	display: table-cell;
}

.margin-top20 {
	margin-top: 20px;
}

.popover {
	z-index:99999999;
}

.tooltip-height {
	height: 20px;
	margin-top: 5px;
}

.ct-btn-next {
	float: right;
	padding: 2px 5px;
	cursor: pointer;
}

.ui-effects-transfer {
	border: 1px solid black; 
	border-radius: 15px;
	z-index: 999999999;
 }
 
 .introjs-fixParent {
	position: relative !important;
}
 
.box-border {
	 align-items: center;
    border: 2px solid gray;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    text-align: center;
}

.padding0 {
	padding:0;
}

#table2 th, #table2 td {
	width: 80px;
}

.table-border {
	border: 2px solid gray;
	text-align: center;
	padding:5px;
}

.table-heading, .headings {
	border: 2px solid gray;
	text-align: center;
	padding:5px;
	
}

.panel-body {
	display: flex;
	justify-content: center;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 1;
	animation-direction: alternate;
}

@keyframes blink {
	50% {
		background: #008000;
	}
}

.arrow-red-css {
	color: red;
	white-space: normal;
}

#table2 tr > td:FIRST-CHILD {
	text-align: right;
}

.panel2-css {
	position: relative;
	width: 70px;
	height: 50px;
}

.panel {
	background-color: transparent;
}

.svg-css {
	top: 0;
	left: 0;
	position: absolute;
	height: 100%;
	width: 100%;
}

.green-color {
	background-color: gold;
}

</style>
</head>
<body>

	<script>

var intro;
var typingInterval = 5;
var tl = new TimelineLite();
$(document).ready(function() {
	$(".line").hide();
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#codeDiv",
				intro : "",
				position:"right"
			},{
				element : "#callJavaBox",
				intro : "",
				position:"right"
			},{
				element : "#forName",
				intro : "",
				position:"right"
			},{
				element : "#driverBox",
				intro : "",
				position:"right"
			},{
				element : "#connection",
				intro : "",
				position:"right"
			},{
				element : "#animationDiv",
				intro : "",
				position:"left"
			},{
				element : "#statement",
				intro : "",
				position:"right"
			},{
				element : "#animationDiv",
				intro : "",
				position:"left"
			},{
				element : "#resultSet",
				intro : "",
				position:"right"
			},{
				element : "#animationDiv",
				intro : "",
				position:"left"
			},{
				element : "#loop",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#id",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#name",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#salary",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#age",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#print",
				intro : "",
				position:"right"
			},{
				element : "#outputDiv",
				intro : "",
				position:"right"
			},{
				element : "#loop",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#id",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#name",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#salary",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#age",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#print",
				intro : "",
				position:"right"
			},{
				element : "#outputDiv",
				intro : "",
				position:"right"
			},{
				element : "#loop",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#id",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#name",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#salary",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#age",
				intro : "",
				position:"right"
			},{
				element : "#resultSetObject",
				intro : "",
				position:"left"
			},{
				element : "#print",
				intro : "",
				position:"right"
			},{
				element : "#outputDiv",
				intro : "",
				position:"right"
			},{
				element : "#loop",
				intro : "",
				position:"right"
			},{
				element : "#connectionEnd",
				intro : "",
				position:"right"
			}
			]});
		
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "codeDiv":
				$('.introjs-nextbutton').hide();
					var text = "This code shows us how the connection establishs between user and the database.";
					typing(".introjs-tooltiptext", text, function() {
					});
			break;	
			case "callJavaBox":
				$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#callJavaBox").removeClass("opacity00").hide().fadeIn(2000,function() {
							$("#codeDiv").effect( "highlight",{color: 'white'}, 1500 ).css({"z-index": "99999999"});
							$("#codeDiv").effect("transfer",{ to: $("#file"), className: "ui-effects-transfer"}, 1000, function (){
								$("#file").removeClass("opacity00");
								$("#client").removeClass("opacity00").hide().fadeIn(2000,function() {
									var text = "This is the source code written by the user.";
									typing(".introjs-tooltiptext", text, function() {
										$("#codeDiv").css({"z-index": "0"});
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					});
			break;	
			case "forName":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to load the driver.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
					});
				
			break;	
			case "driverBox":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#driverBox").removeClass("opacity00").hide().fadeIn(2000,function() {
					var text = "This statement is used to load the driver.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
					});
				});
			break;	
			case "connection":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						var text = "This statement is to establish the connection.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
			case "animationDiv":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if(intro._currentStep == 5) {
						$("#databaseBox").removeClass("opacity00").hide().fadeIn(2000,function() {
							$("#table").removeClass("opacity00").hide().fadeIn(2000,function() {
								$("#arrowMark6").show();
								TweenMax.to("#arrowMark6", 1, {attr:{x2: "73%", y2: "56.4%" },onComplete:function(){
									$("#arrowMark1").show();
									TweenMax.to("#arrowMark1", 1, {attr:{x2: "42.2%", y2: "17%" },onComplete:function(){
										$("#arrowMark4").show();
										TweenMax.to("#arrowMark4", 1, {attr:{x2: "65%", y2: "16%" },onComplete:function(){
											$("#arrowMark3").show();
											TweenMax.to("#arrowMark3", 1, {attr:{x2: "57.8%", y2: "24%" },onComplete:function(){
												$("#arrowMark2").show();
												TweenMax.to("#arrowMark2", 1, {attr:{x2: "35%", y2: "25%" },onComplete:function(){
													var text = "Here the connection from user to database is established through driver.";
													typing(".introjs-tooltiptext", text, function() {
														$('.introjs-nextbutton').show();
													});
												}});
											}});
										}});
									}});
								}});
							});
						});
					} else if (intro._currentStep == 7){
							$("#statementBox").removeClass("opacity00").hide().fadeIn(2000,function() {
								$("#arrowMark5").show();
								TweenMax.to("#arrowMark5", 1, {attr:{x2: "50%", y2: "34%" },onComplete:function(){
									var text = "Statement object is created i.e, stmt.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
							});
					} else if (intro._currentStep == 9){
							$("#resultSetObject").removeClass("opacity00").hide().fadeIn(2000,function() {
								$("#query").removeClass("opacity00").hide().fadeIn(2000,function() {
									$("#query").effect("highlight", {color: '#FF0000'}, 1000, function() {
										$("#arrowMark8").show();
										TweenMax.to("#arrowMark8", 1, {attr:{x2: "50%", y2: "34%" },onComplete:function(){
											$("#arrowMark7").show();
											TweenMax.to("#arrowMark7", 1, {attr:{x2: "65%", y2: "16%" },onComplete:function(){
												$("#table").addClass('blinking').one('animationend', function() {
													$("#table").effect("transfer",{ to: $("#table2"), className: "ui-effects-transfer"}, 1000, function (){
														$("#table2").removeClass("opacity00");
														$("#redArrow1").removeClass("opacity00").hide().fadeIn(2000,function() {
															$("#table").removeClass('blinking');
															var text = "Here it will create result set object i.e, rs and copies the table from " 
																		+ "database to resultSet object if it is present.";
															typing(".introjs-tooltiptext", text, function() {
																$('.introjs-nextbutton').show();
															});
														});
													});
												});
											}});
										}});
									});
								});
							});
					} else {
						
					}
				});
			break;	
				
			case "statement":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used send the query to the database.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "resultSet":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement will execute the query and produces the result.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "loop":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if(intro._currentStep == 46) {
						var text = "Here, the condition fails so loop termiantes.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					} else {
						var text = "This loop will check whether the result set is having data or not and gets the data from the Database.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					}
				});
			break;
			case "resultSetObject":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if(intro._currentStep == 11) {
						var l1=$('#redArrow1').offset();
						var l2=$('#redArrow2').offset({
						  "top" : l1.top,
						  "left":l1.left
						});
						$("#redArrow1").addClass("opacity00");
						 $("#redArrow2").removeClass("opacity00");
						TweenMax.to("#redArrow2", 1,{top:0 ,onComplete:function(){
							var text = "Here this arrow will focus on the records.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						}});
					} else if(intro._currentStep == 13){
						$('.introjs-nextbutton').hide();
						$("#id1").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#id1").addClass("green-color");
							var text = "This statement is used to read id.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 15){
						$('.introjs-nextbutton').hide();
						$("#name1").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#name1").addClass("green-color");
							var text = "This statement is used to get name.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 17){
						$('.introjs-nextbutton').hide();
						$("#salary1").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#salary1").addClass("green-color");
							var text = "This statement is used to get salary.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 19){
						$('.introjs-nextbutton').hide();
						$("#age1").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#age1").addClass("green-color");
							var text = "This statement is used to get age.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 25){
						$('.introjs-nextbutton').hide();
						$("#id2").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#id2").addClass("green-color");
							var text = "This statement is used to read id";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 27){
						$('.introjs-nextbutton').hide();
						$("#name2").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#name2").addClass("green-color");
							var text = "This statement is used to read name.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 29){
						$('.introjs-nextbutton').hide();
						$("#salary2").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#salary2").addClass("green-color");
							var text = "This statement is used to read salary.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 31){
						$('.introjs-nextbutton').hide();
						$("#age2").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#age2").addClass("green-color");
							var text = "This statement is used to read age.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 37){
						$('.introjs-nextbutton').hide();
						$("#id3").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#id3").addClass("green-color");
							var text = "This statement is used to get id.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 39){
						$('.introjs-nextbutton').hide();
						$("#name3").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#name3").addClass("green-color");
							var text = "This statement is used to get name.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 41){
						$('.introjs-nextbutton').hide();
						$("#salary3").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#salary3").addClass("green-color");
							var text = "This statement is used to get salary.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 43){
						$('.introjs-nextbutton').hide();
						$("#age3").effect("highlight", {color: '#FFD700'}, 1000, function() {
							$("#age3").addClass("green-color");
							var text = "This statement is used to get age.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 23) {
						var l1=$('#redArrow2').offset();
						var l2=$('#redArrow3').offset({
						  "top" : l1.top,
						  "left":l1.left
						});
						$("#redArrow2").addClass("opacity00");
						$("#redArrow3").removeClass("opacity00");
						TweenMax.to("#redArrow3", 1,{top:0 ,onComplete:function(){
							var text = "Here this arrow will focus on the records.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});	
						}});
					} else if(intro._currentStep == 35) {
						var l1=$('#redArrow3').offset();
						var l2=$('#redArrow4').offset({
						  "top" : l1.top,
						  "left":l1.left
						});
						$("#redArrow3").addClass("opacity00");
						$("#redArrow4").removeClass("opacity00");
						TweenMax.to("#redArrow4", 1,{top:0,left:0 ,onComplete:function(){
							var text = "Here this arrow will focus on the records.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						}});
					}
				});
			break;
			case "outputDiv": 
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if(intro._currentStep == 21) {
						$("#output1").removeClass("opacity00").hide().fadeIn(2000,function() {
							$('.green-color').removeClass('green-color');
							var text = "This is the output.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 33) {
						$("#output2").removeClass("opacity00").hide().fadeIn(2000,function() {
							$('.green-color').removeClass('green-color');
						 	var text = "This is the output.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if(intro._currentStep == 45) {
						$("#output3").removeClass("opacity00").hide().fadeIn(2000,function() {
							$('.green-color').removeClass('green-color');
							var text = "This is the output.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
			case "id":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to read the id.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "name":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to read the name.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "salary":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to read the salary.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "print":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to print the output.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "loopEnd":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "loop will terminate.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "connectionEnd":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to close the connection between the user and the database.";
					typing(".introjs-tooltiptext", text, function() {
						//$('.introjs-nextbutton').show();
					});
				});
			break;
			}
		});
		intro.start();
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
});

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
	
</script>

	<h2 class="text-center">
		<span class="label label-default ct-demo-heading">Result Set</span>
	</h2>
	<br>
	<div class="col-xs-12">
		<div class="col-xs-5">
			<pre class="code-div creampretab4" id="codeDiv">

<span id="package">import java.sql.*;</span>

<span>public class resultSetDemo {</span>
	<span>public static void main(String args[]) throws Exception {</span>
		<span id="forName">Class.forName("com.mysql.jdbc.Driver");</span>
		<span id="driver">// DriverManager.registerDriver(new com.mysql.jdbc.Driver());</span>
		<span id="connection">Connection con = DriverManager.getConnection(
				"jdbc:mysql://localhost:3306/Employee", "root", "ramana");</span>
		<span id="statement">Statement stmt = con.createStatement();</span>
		<span id="resultSet">ResultSet rs = stmt.executeQuery("select * from emp");</span>
		<span id="loop">while (rs.next()) {</span>
		<span id="id">String id = rs.getString("id");</span>
			<span id="name">String name = rs.getString("name");</span>
			<span id="salary">String salary = rs.getString("salary");</span>
			<span id="age">String age = rs.getString("Age");</span>
			<span id="print">System.out.println
			("Id : " + id + ", Name :" + name + ", Salary :" + salary + "Age : " + Age);</span>
		<span id="endLoop">}</span>
		<span id="connectionEnd">con.close();</span>
	<span>}</span>
<span>}</span>
           </pre>
			<div id="outputDiv">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body"><span class="output" id="output"><span class="opacity00" id="output1">Id : 101, Name : abc, Salary : 20,000, Age : 21</span> 
<span class="opacity00" id="output2">Id : 102, Name : xyz, Salary : 40,000, Age : 35</span> 
<span class="opacity00" id="output3">Id : 103, Name : pqr, Salary : 35,000, Age : 31</span> 
</span>
				</div>
			</div>
		</div>
		<div class="col-xs-7">
			<div id="animationDiv" class="col-xs-12 animation-div">
				<div class="col-xs-12">
						<svg class="svg-css"> 
						<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;" id="arrow"> 
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" /> 
						</marker> 
						<line id="arrowMark1" class="line" x1="34%" y1="17%" x2="34%" y2="17%" style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;"/> 
						<line id="arrowMark2" class="line" x1="42.5%" y1="25%" x2="42.5%" y2="25%" style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;"/>
						<line id="arrowMark3" class="line" x1="66.2%" y1="24%" x2="66.2%" y2="24%" style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;"/>
						<line id="arrowMark4" class="line" x1="57.6%" y1="16%" x2="57.6%" y2="16%" style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;"/>
						<line id="arrowMark7" class="line" x1="57.6%" y1="16%" x2="57.6%" y2="16%" style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;"/>
						<line id="arrowMark5" class="line" x1="28%" y1="67%" x2="28%" y2="67%" style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;"/> 
						<line id="arrowMark8" class="line" x1="28%" y1="67%" x2="28%" y2="67%" style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;"/> 
						<line id="arrowMark6" class="line" x1="73%" y1="34%" x2="73%" y2="34%" style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;"/>
						</svg>
					<div class="col-xs-12 ">
					<div style="background-color: #fffac2;"
						class="col-xs-offset-2 col-xs-2 box-border margin-top20 padding0 opacity00"
						id="callJavaBox">
						<div class="text-font">
							<b>Client<br> <i class="fa fa-file-text-o opacity00"
								id="file" style="font-size: 36px;"></i><br> <span
								class="opacity00" id="client">Java Application</span></b>
						</div>
					</div>
					<div
						style="background-color: rgba(249, 145, 145, 0.26); height: 100px;"
						class="col-xs-offset-1 col-xs-2 box-border margin-top20 padding0 opacity00"
						id="driverBox">
						<span class="text-font"><b>Driver</b></span>
					</div>
					<div style="background-color: antiquewhite;"
						class="col-xs-offset-1 col-xs-2 database-box opacity00 padding0 margin-top20"
						id="databaseBox">
						<div class="oval"></div>
						<span class="text-font database-text-middle"><b>Database</b></span>
					</div>
				</div>
				<div class="col-xs-12" style="margin-top: 80px;">
					<div style="background-color: #fffac2; height: 85px; margin-top: 33px;"
						class="col-xs-offset-2 col-xs-3 box-border padding0 opacity00"
						id="statementBox">
						<div class="text-font">
							<b>stmt<br>(Object)<br> <span class="opacity00"
								id="query" style="color: red">select * from emp;</span>
							</b>
						</div>
					</div>
					<table class="col-xs-offset-2 col-xs-4 opacity00" id="table">
						<tr class="table-heading">
							<th class="text-center" colspan="4">emp Table</th>
						</tr>
						<tr>
							<th class="headings">Id</th>
							<th class="headings">Name</th>
							<th class="headings">Salary</th>
							<th class="headings">Age</th>
						</tr>
						<tr>
							<td class="table-border">101</td>
							<td class="table-border">abc</td>
							<td class="table-border">20,000</td>
							<td class="table-border">21</td>
						</tr>
						<tr>
							<td class="table-border">102</td>
							<td class="table-border">xyz</td>
							<td class="table-border">40,000</td>
							<td class="table-border">35</td>
						</tr>
						<tr>
							<td class="table-border">103</td>
							<td class="table-border">pqr</td>
							<td class="table-border">35,000</td>
							<td class="table-border">31</td>
						</tr>
					</table>
				</div>
				</div>
				<div class="col-xs-12 margin-top20">
					<div
						class="col-xs-offset-2 col-xs-8 panel panel-primary padding0 text-center margin-top20 opacity00"
						id="resultSetObject">
						<div class="panel-heading ">ResultSet Object</div>
						<div class="panel-body">
							<table id="table2" class="opacity00">
								<tbody>
									<tr>
										<th></th>
										<th class="text-center" colspan="4">emp Table</th>
									</tr>
									<tr>
										<td><span
											class='fa fa-long-arrow-right fa-2x arrow-red-css arrow-right opacity00'
											id='redArrow1'></span></td>
										<td class="headings table-border" id="rsId"><b>Id</b></td>
										<td class="headings table-border" id="rsName"><b>Name</b></td>
										<td class="headings table-border" id="rsSalary"><b>Salary</b></td>
										<td class="headings table-border" id="rsAge"><b>Age</b></td>
									</tr>
									<tr>
										<td><span
											class='fa fa-long-arrow-right fa-2x arrow-red-css arrow-right opacity00'
											id='redArrow2'></span></td>
										<td class="table-border" id="id1">101</td>
										<td class="table-border" id="name1">abc</td>
										<td class="table-border" id="salary1">20,000</td>
										<td class="table-border" id="age1">21</td>
									</tr>
									<tr>
										<td><span
											class='fa fa-long-arrow-right fa-2x arrow-red-css arrow-right opacity00'
											id='redArrow3'></span></td>
										<td class="table-border" id="id2">102</td>
										<td class="table-border" id="name2">xyz</td>
										<td class="table-border" id="salary2">40,000</td>
										<td class="table-border" id="age2">35</td>
									</tr>
									<tr>
										<td><span
											class='fa fa-long-arrow-right fa-2x arrow-red-css arrow-right opacity00'
											id='redArrow4'></span></td>
										<td class="table-border" id="id3">103</td>
										<td class="table-border" id="name3">pqr</td>
										<td class="table-border" id="salary3">35,000</td>
										<td class="table-border" id="age3">31</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>