<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<title>semantic elements</title>
<style type="text/css">

.border {
	border: 0px solid;
}

.article {
    text-align: left;
}

.browser-demo {
	border: 1px solid;
	font-size: 12px;
	padding: 0;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-5 {
	margin-top: 5%;
}

.margin-top-10 {
	margin-top: 10%;
}

.ct-code-b-red {
	color: red;
}

.z-index {
	z-index: 9999999;
	background-color: white;
	padding: 2px;
	position: relative;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
}

input {
	background-color: transparent;
	border: medium none;
}

.width-11 {
	width: 11%;
}

.width-12 {
	width: 12%;
}

.width-8 {
	width: 8%;
}

#footerTag1 {
	color: white;
	background-color: blueviolet;
	clear: left;
	text-align: center;
	font-size: 13px;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background: turquoise;
	}
}

pre {
	-moz-tab-size: 3;
	font-size: 12px;
	 /* height: auto;
    max-height: 200px;
    overflow: auto;
    background-color: #eeeeee;
    word-break: normal !important;
    word-wrap: normal !important;
    white-space: pre !important; */
}
</style>
</head>

<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Web Page Layout</span>
		</h3>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-5 col-xs-offset-3 browser-demo margin-top-2" id="layoutExample">
			<img src="../images/page-layout-browser-img.png" style="width: 100%;">
			<header class="text-center" style="border-top: 1px solid;" id="headerTag1">
				<h2 style="margin-top: 1%; background-color: yellow;">CodeTantra</h2>
			</header>
			<div class="col-xs-10 col-xs-offset-1" id="navTag1">
				<nav>
					<ul class="nav navbar-nav" style="font-size: 17px; display: ;">
						<li><a href="#">HTML</a></li>
						<li><a href="#">CSS</a></li>
						<li><a href="#">JAVA</a></li>
						<li><a href="#">HADOOP</a></li>
						<li><a href="#">SQL</a></li>
					</ul>
				</nav>
			</div>
			<div class="col-xs-12" id="sectionTag1">
						<section>
							<h5>Java:-</h5>
							<span>This section covers all the fundamentals of Java programming language. </span>
						</section>
					</div>
			<div class="col-xs-12">
				<div class="col-xs-7">
					<div class="col-xs-12" id="articleTag1">
						<article class="article">
							<h3>about</h3>
								<p>CodeTantra was founded by Ramana TSV. Ramana loves coding and sharing what he knows 
								about coding. He has over 16 years experience in the IT industry.</p>
						</article>
					</div>
				</div>
				<div class="col-xs-5 margin-top-5" id="asideTag1">
					<aside>
						<h4 style="color: seagreen;">The salient features of the platform are:</h4>
						<ul style="color: olive;">
							<li>Encourages Active Learning</li>
							<li>Self-Paced Learning</li>
							<li>Intelligent Live Feedback</li>
							<li>Extensive Practical Labs</li>
						</ul>
					</aside>
				</div>
			</div>
			<div>
				<footer id="footerTag1">contact us :- support@codetantra.com</footer>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-5 margin-top-1">
<pre class="visibility-hidden" id="preCodeDiv">
<span class="opacity00" id="doctype">&lt;!DOCTYPE html&gt;</span>
<span class="opacity00" id="openHtml">&lt;html&gt;</span>
	<span class="opacity00" id="headSpan">&lt;head&gt;
		&lt;title&gt;Welcome to codetantra&lt;/title&gt;
		<span class="opacity00" id="openStyle">&lt;style&gt;</span>
			<span id="h2Selector" class="opacity00">h2</span>
		<span class="opacity00" id="closeStyle">&lt;/style&gt;</span>
	&lt;/head&gt;</span>
	<span class="opacity00" id="openBody">&lt;body&gt;</span>
		<span id="headerSpan"><span id='openHeaderTag' class="opacity00">&lt;header&gt;</span>
			<span id="openh2" class="opacity00">&lt;h2&gt;</span><span  id="h2TagText" class="opacity00">CodeTantra</span><span  id="closeh2" class="opacity00">&lt;/h2&gt;</span>
		<span id='closedHeaderTag' class="opacity00">&lt;/header&gt;</span></span>
		<span id="navSpan"><span id="openNavTag" class="opacity00">&lt;nav&gt;</span>
		<span id="navUlTag" class="">	<span id='ulOpenTag' class='opacity00'>&lt;ul class='list'&gt;</span>
				<span id='list1' class='opacity00'>&lt;li&gt;&lt;a href='#'&gt;HTML&lt;/a&gt;&lt;/li&gt;</span>
				<span id='list2' class='opacity00'>&lt;li&gt;&lt;a href='#'&gt;CSS&lt;/a&gt;&lt;/li&gt;</span>
				<span id='list3' class='opacity00'>&lt;li&gt;&lt;a href='#'&gt;JAVA&lt;/a&gt;&lt;/li&gt;</span>
				<span id='list4' class='opacity00'>&lt;li&gt;&lt;a href='#'&gt;HADOOP&lt;/a&gt;&lt;/li&gt;</span>
				<span id='list5' class='opacity00'>&lt;li&gt;&lt;a href='#'&gt;SQL&lt;/a&gt;&lt;/li&gt;</span>
			<span id='ulCloseTag' class='opacity00'>&lt;/ul&gt;</span></span>
		<span id="closedNavTag" class="opacity00">&lt;/nav&gt;</span></span>
		<span id="sectionSpan"><span id="openSectionTag" class="opacity00">&lt;section&gt;</span>
			<span id="h5Tag" class="opacity00"></span>
		<span id="closedSectionTag" class="opacity00">&lt;/section&gt;</span></span>
		<span id="articleSpan"><span id="openArticleTag" class="opacity00">&lt;article&gt;</span>
			<span id="h3Tag" class="opacity00"></span>
		<span id="closedArticleTag" class="opacity00">&lt;/article&gt;</span></span>
		<span id="asideSpan"><span id="openAsideTag" class="opacity00">&lt;aside&gt;</span>
			<span id="h4Tag" class="opacity00"></span>
		<span id="closedAsideTag" class="opacity00">&lt;/aside&gt;</span></span>
		<span id="footerSpan"><span id="openFooterTag" class="opacity00">&lt;footer&gt;</span>
			<span id="footerText" class="opacity00"></span>
		<span id="closedFooterTag" class="opacity00">&lt;/footer&gt;</span></span>
	<span class="opacity00" id="closedBody">&lt;/body&gt;</span>
<span class="opacity00" id="closedHtml">&lt;/html&gt;</span>
</pre>	
		</div>
		<div class="col-xs-6 col-xs-offset-1">
			<div class="col-xs-12 browser-demo margin-top-5 visibility-hidden" id="browser">
				<img src="../images/page-layout-browser-img.png" style="width: 100%;">
				<header class="" style="border-top: 1px solid;">
					<h2 id="headerTag" style="margin-top: 1%;">CodeTantra</h2>
				</header>
				<div class="" id="navTag">
					<nav id="navId">
						<ul id="listStyleInBrowser" style="font-size: 17px;">
							<li><a href="#">HTML</a></li>
							<li><a href="#">CSS</a></li>
							<li><a href="#">JAVA</a></li>
							<li><a href="#">HADOOP</a></li>
							<li><a href="#">SQL</a></li>
						</ul>
					</nav>
				</div>
				<div id="sectionTag">
					<section>
						<h5>Java:-</h5>
						<span>This section covers all the fundamentals of Java programming language. </span>
					</section>
				</div>
				<div class="" id="articleTag">
					<article class="article">
						<h3>about</h3>
							<p>CodeTantra was founded by Ramana TSV. Ramana loves coding and sharing what he knows 
							about coding. He has over 16 years experience in the IT industry.</p>
					</article>
				</div>
				<div id="asideTag">	
					<aside>
						<h4 style="color: seagreen;">The salient features of the platform are:</h4>
						<ul style="color: olive;">
							<li>Encourages Active Learning</li>
							<li>Self-Paced Learning</li>
							<li>Intelligent Live Feedback</li>
							<li>Extensive Practical Labs</li>
						</ul>
					</aside>
				</div>
				<div id="footerTag">
					<footer>contact us :- support@codetantra.com</footer>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="text-center margin-top-2" id="restartDiv">
					<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
				</div>
			</div>
		</div>
	</div>
</div>
</body>

<script type="text/javascript">
var typingInterval = 10;
$(document).ready(function() {
	introGuide();
	$("body").attr({ondragstart :"return false"});   /* ondragstart: fires when the user starts to drag an element */
});

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :'#layoutExample',
			intro : '',
			tooltipClass : ''
		}, {
			element : '#headerTag1',
			intro : '',
		}, {
			element : '#footerTag1',
			intro : '',
		}, {
			element : '#navTag1',
			intro : '',
		}, {
			element : '#sectionTag1',
			intro : '',
		}, {
			element : '#articleTag1',
			intro : '',
		}, {
			element : '#asideTag1',
			intro : '',
		}, {
			element : '#preCodeDiv',
			intro : '',
			position : 'bottom'
		}, {
			element : '#openHeaderTag',
			intro : '',
		}, {
			element : '#closedHeaderTag',
			intro : '',
		}, {
			element : '#openh2',
			intro : '',
		}, {
			element : '#closeh2',
			intro : '',
		}, {
			element : '#h2TagText',
			intro : '',
		}, {
			element : '#headerSpan',
			intro : '',
		}, {
			element : '#h2Selector',
			intro : ''
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'h2BgmColor'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'h2textCenter'
		}, {
			element : '#openNavTag',
			intro : '',
		}, {
			element : '#closedNavTag',
			intro : '',
		}, {
			element : '#ulOpenTag',
			intro : '',
		}, {
			element : '#ulCloseTag',
			intro : '',
		}, {
			element : '#list1',
			intro : '',
		}, {
			element : '#list2',
			intro : '',
		}, {
			element : '#list3',
			intro : '',
		}, {
			element : '#list4',
			intro : '',
		}, {
			element : '#list5',
			intro : '',
		}, {
			element : '#navSpan',
			intro : '',
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'listDisplayInline'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'listPadding'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'listTextDecoration'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'navTextMarginLeft'
		}, {
			element : '#openSectionTag',
			intro : '',
		}, {
			element : '#closedSectionTag',
			intro : '',
		}, {
			element : '#sectionSpan',
			intro : '',
		}, {
			element : '#openArticleTag',
			intro : '',
		}, {
			element : '#closedArticleTag',
			intro : '',
		}, {
			element : '#articleSpan',
			intro : '',
		}, {
			element : '#openAsideTag',
			intro : '',
		}, {
			element : '#closedAsideTag',
			intro : '',
		}, {
			element : '#asideSpan',
			intro : '',
		}, {
			element : '#openFooterTag',
			intro : '',
			position: 'top',
		}, {
			element : '#closedFooterTag',
			intro : '',
			position: 'top',
		}, {
			element : '#footerSpan',
			intro : '',
			position: 'top',
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'footerTextCenterEffect'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'footerBgmColorEffect'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'articleWidthMin'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'articleDispalyInBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'asideFloatRight'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'asideWidthBrowser'
		}, {
			element : '#browser',
			intro : '',
			tooltipClass: 'hide',
			animateStep : 'footerClearRightInBrowser'
		}, {
			element :'#restart',
			intro : "Click to restart",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'layoutExample' :
		//	$('.introjs-helperLayer').one('transitionend', function() {
			$("#preCodeDiv").hide();
			$("#browser").hide();	
			introjs.refresh();
			var text = "Let us consider a web page.";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
		//	});
			break;
		case 'headerTag1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "This is the <span class='ct-code-b-yellow'> &lt;header&gt; </span> element.<br>"+
					"<ul><li>It represents a container for introduction of the content.</li>"+
					"<li>We can have several <span class='ct-code-b-yellow'>&lt;header&gt;</span> tags used in one document.</li>"+
					"<li>This tag can not be placed within <span class='ct-code-b-yellow'>&lt;footer&gt;</span> or another "+
					"<span class='ct-code-b-yellow'>&lt;header&gt;</span> elements.</li>";
				typing('.introjs-tooltiptext', text, 20, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'footerTag1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "This is the <span class='ct-code-b-yellow'>&lt;footer&gt;</span> element."+
					"<ul><li>This tag defines a footer for a document.</li>"+
					"Like authorship information, copyright information, contact, etc.</li></ul>";
				typing('.introjs-tooltiptext', text, 20, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'navTag1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "This is the <span class='ct-code-b-yellow'>&lt;nav&gt;</span> element.<br>"+
					"The <span class='ct-code-b-yellow'>&lt;nav&gt;</span> element defines a set of navigation links.";
					typing('.introjs-tooltiptext', text, 20, 'white', function() {
						$('.introjs-nextbutton').show();
					});
			});
			break;
		case 'sectionTag1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "This is the <span class='ct-code-b-yellow'>&lt;section&gt;</span> element."+
					"<ul><li>The <span class='ct-code-b-yellow'>&lt;section&gt;</span> element defines a section in a document.</li>"+
					"<li>It hold the main content of the document.</li></ul>";
				typing('.introjs-tooltiptext', text, 20, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'articleTag1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "This is the <span class='ct-code-b-yellow'>&lt;article&gt;</span> element."+
					"<ul><li>The <span class='ct-code-b-yellow'>&lt;article&gt;</span> element specifies independent, self-contained content.</li>"+
					"<li>It seperate article of text from the rest of the site.</li></ul>";
				typing('.introjs-tooltiptext', text, 20, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'asideTag1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "This is the <span class='ct-code-b-yellow'>&lt;aside&gt;</span> element."+
					"<ul><li>The <span class='ct-code-b-yellow'>&lt;aside&gt;</span> element defines some content aside from "+
					"the content it is placed in.</li>"+
					"<li>The <span class='ct-code-b-yellow'>&lt;aside&gt;</span> content should be related to the surrounding content.</li></ul>";
				typing('.introjs-tooltiptext', text, 20, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preCodeDiv':
			$("#layoutExample").hide();
			$("#preCodeDiv").removeClass("visibility-hidden").show();
			$("#headerTag, #navTag, #sectionTag, #articleTag, #asideTag, #footerTag").addClass("opacity00");
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Let us create a web document using semantic elements.";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					TweenMax.to($("#doctype"), 1, {opacity: 1, onComplete: function() {
						TweenMax.to($("#openHtml, #closedHtml"), 1, {opacity: 1, onComplete: function() {
							TweenMax.to($("#headSpan"), 1, {opacity: 1, onComplete: function() {
								TweenMax.to($("#openStyle, #closeStyle"), 1, {opacity: 1, onComplete: function() {
									TweenMax.to($("#openBody, #closedBody"), 1, {opacity: 1, onComplete: function() {
										$("#browser").removeClass("visibility-hidden").show();
										$("#browser").addClass("z-index");
										zoomingEffect($("#browser"), function() {
											$("#browser").off();
											$('.introjs-nextbutton').show();
										});
									}});
								}});
							}});
						}});
					}});
				});
			});
			break;
		case 'openHeaderTag':
			$("#browser").removeClass("z-index");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter open header element i.e. <span class='ct-code-b-yellow'>&lt;header&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'closedHeaderTag':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter close header element i.e. <span class='ct-code-b-yellow'>&lt;/header&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'openh2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter open h2 tag. i.e. <span class='ct-code-b-yellow'>&lt;h2&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'closeh2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter close h2 tag. i.e. <span class='ct-code-b-yellow'>&lt;/h2&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'h2TagText':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter text inside the h2 tag. i.e. <span class='ct-code-b-yellow'>CodeTantra</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		 case 'headerSpan':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>header</span> element content represented on the web document as.";
				typing('.introjs-tooltiptext', text, 20, 'white', function() {
					$("#browser").addClass("z-index");
					$("#headerSpan").effect( "transfer", { to: $("#headerTag"), className: "ui-effects-transfer" }, 2000 , function() {
						$("#headerTag").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		 case 'h2Selector':
			 $("#browser").removeClass("z-index");
			 $("#h2Selector").after("\t<span id='openBrace1' class='opacity00'>{</span>");
			 $("#openBrace1").after("<br>\t\t\t<span id='closeBrace1' class='opacity00'>}</span>");
			 $("#openBrace1").after("<br>\t\t\t\t<span id='h2SelectorBgm' class='opacity00'>background-color: yellow;</span>");
			 $("#h2SelectorBgm").after("<br>\t\t\t\t<span id='h2SelectorTextAlign' class='opacity00'>text-align: center;</span>");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter selector h2. i.e. <span class='ct-code-b-yellow'>h2</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
					dynamicSteps("#openBrace1");
				});
			});
			break;
		 case 'openBrace1':
			 $('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter open brace. i.e. <span class='ct-code-b-yellow'>{</span>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						customIntroWithoutTyping(elementId);
						dynamicSteps("#closeBrace1");
					});
				});
			 break;
		 case 'closeBrace1':
			 $('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter close brace. i.e. <span class='ct-code-b-yellow'>}</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
					dynamicSteps("#h2SelectorBgm");
				});
			});
			 break;
		 case 'h2SelectorBgm':
			 $('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter background color property for h2 tag. i.e. <span class='ct-code-b-yellow'>background-color: yellow;</span>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						customIntroWithoutTyping(elementId);
					});
				});
			 break;
		 case 'h2SelectorTextAlign':
			 $('.introjs-helperLayer').one('transitionend', function() {
					var text = "Enter text-align property for h2 tag. i.e. <span class='ct-code-b-yellow'>text-align: center;</span>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						customIntroWithoutTyping(elementId);
					});
				});
			 break;
		 case 'browser':
			 var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'h2BgmColor':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#h2SelectorBgmInput"), $("#headerTag"), function() {
							$("#headerTag").css({"background-color": "yellow"});
							setTimeoutFunction();
						});
					});
					dynamicSteps("#h2SelectorTextAlign");
					break;
				case 'h2textCenter':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#h2SelectorTextAlign"), $("#headerTag"), function() {
							$("#headerTag").css({"text-align": "center"});
							setTimeoutFunction();
						});
					});
					break;
				case 'listStyleNone':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#listStyleInput"), $("#navTag"), function() {
							setTimeoutFunction();
						});
					});
					break;
				case 'listDisplayInline':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#listDisplayInput"), $("#navTag"), function() {
							$("#listStyleInBrowser > li").css({"display": "inline-block"});
							setTimeoutFunction();
							dynamicSteps("#listSub");
						});
					});
					break;
				case 'listPadding':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#listSubPaddingInput"), $("#navTag"), function() {
							$("#listStyleInBrowser > li > a").css({"padding": "16px"});
							setTimeoutFunction();
							dynamicSteps("#listSubDecoration");
						});
					});
					break;
				case 'listTextDecoration':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#listSubDecorationInput"), $("#navTag"), function() {
							$("#listStyleInBrowser > li > a").css({"text-decoration": "none"});
							setTimeoutFunction();
							dynamicSteps("#navSelector");
						});
					});
					break;
				case 'navTextMarginLeft':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#navTextAlignInput"), $("#navTag"), function() {
							$("#navId").css({"text-align": "center"});
							setTimeoutFunction();
						});
					});
					break;
				case 'footerTextCenterEffect':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#footerTextAlignInput"), $("#footerTag"), function() {
							$("#footerTag").css({"text-align": "center"});
							setTimeoutFunction();
							dynamicSteps("#footerBgmColor");
						});
					});
					break;
				case 'footerBgmColorEffect':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#footerBgmColorInput"), $("#footerTag"), function() {
							$("#footerTag").css({"background-color": "blueviolet"});
							setTimeoutFunction();
							dynamicSteps("#articleSelector");
						});
					});
					break;
				case 'articleWidthMin':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#articleWidthInput"), $("#articleTag"), function() {
							$("#articleTag").css({"width": "50%"});
							setTimeoutFunction();
							dynamicSteps("#articledispalyInline");
						});
					});
					break;
				case 'articleDispalyInBrowser':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#articledispalyInline"), $("#articleTag"), function() {
							$("#articleTag").css({"display": "inline-block"});
							setTimeoutFunction();
							dynamicSteps("#asideSelector");
						});
					});
					break;
				case 'asideFloatRight':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#asideFloatInput"), $("#asideTag"), function() {
							$("#asideTag").css({"float": "right"});
							setTimeoutFunction();
							dynamicSteps("#asideWidth");
						});
					});
					break;
				case 'asideWidthBrowser':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#asideWidthInput"), $("#asideTag"), function() {
							$("#asideTag").css({"width": "50%"});
							setTimeoutFunction();
							dynamicSteps("#footerClearRight");
						});
					});
					break;
				case 'footerClearRightInBrowser':
					$('.introjs-helperLayer').one('transitionend', function() {
						transferEffect($("#footerClearRightInput"), $("#footerTag"), function() {
							$("#footerTag").css({"clear": "right"});
							setTimeoutFunction();
						});
					});
					break;
				}
			 break;
		case 'openNavTag':
			$("#closeBrace1").after("<br>\t\t\t<span id='ulClass' class='opacity00'>.list > li</span>");
			$("#ulClass").after("\t<span id='openBrace2' class='opacity00'>{</span>");
			$("#openBrace2").after("<br>\t\t\t<span id='closeBrace2' class='opacity00'>}</span>");
			$("#openBrace2").after("<br>\t\t\t\t<span id='listDisplay' class='opacity00'>display: inline-block;</span>");
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter open nav tag. i.e. <span class='ct-code-b-yellow'>&lt;nav&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'closedNavTag':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter close nav tag. i.e. <span class='ct-code-b-yellow'>&lt;/nav&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'ulOpenTag':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter open ul tag with class name <span class='ct-code-b-yellow'>list</span>.<br>"+
					"Hint: <span class='ct-code-b-yellow'>&lt;ul class='list'&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'ulCloseTag':
			customIntro(elementId);
			break;
		case 'list1':
			customIntro(elementId);
			break;
		case 'list2':
			customIntro(elementId);
			break;
		case 'list3':
			customIntro(elementId);
			break;
		case 'list4':
			customIntro(elementId);
			break;
		case 'list5':
			customIntro(elementId);
			break;
		case 'navSpan':
			$('.introjs-helperLayer').one('transitionend', function() {
				TweenMax.to($("#navUlTag"), 1, {opacity: 1, onComplete: function() {
					var text = "The <span class='ct-code-b-yellow'>nav</span> element content represented on the web document as.";
					typing('.introjs-tooltiptext', text, 20, 'white', function() {
						$("#browser").addClass("z-index");
						$("#navSpan").effect( "transfer", { to: $("#navTag"), className: "ui-effects-transfer" }, 2000 , function() {
							$("#navTag").removeClass("opacity00");
							$("#listStyleInBrowser > li > a").css({"text-decoration": "underline"});
							$('.introjs-nextbutton').show();
							dynamicSteps("#ulClass");
						});
					});
				}});
			});
			break;
		case 'ulClass':
			customIntro(elementId);
			dynamicSteps("#openBrace2");
			break;
		case 'openBrace2':
				customIntro(elementId);
				dynamicSteps("#closeBrace2");
			break;
		case 'closeBrace2':
			customIntro(elementId);
			dynamicSteps("#listDisplay");
		break;
		case 'listStyle':
			customIntro(elementId);
		break;
		case 'listDisplay':
			customIntro(elementId);
			$("#closeBrace2").after("<br>\t\t\t<span id='listSub' class='opacity00'>.list > li > a</span>");
			$("#listSub").after("\t<span id='openBrace3' class='opacity00'>{</span>");
			$("#openBrace3").after("<br>\t\t\t\t<span id='listSubPadding' class='opacity00'>padding: 16px;</span>");
			$("#listSubPadding").after("<br>\t\t\t\t<span id='listSubDecoration' class='opacity00'>text-decoration: none;</span>");
			$("#listSubDecoration").after("<br>\t\t\t<span id='closeBrace3' class='opacity00'>}</span>");
			break;
		case 'listSub':
			customIntro(elementId);
			dynamicSteps("#openBrace3");
			break;
		case 'openBrace3':
			customIntro(elementId);
			dynamicSteps("#closeBrace3");
			break;
		case 'closeBrace3':
			customIntro(elementId);
			dynamicSteps("#listSubPadding");
			$("#closeBrace3").after("<br>\t\t\t<span id='navSelector' class='opacity00'>nav</span>");
			$("#navSelector").after("\t<span id='openBrace4' class='opacity00'>{</span>");
			$("#openBrace4").after("<br>\t\t\t\t<span id='navTextAlign' class='opacity00'>text-align: center;</span>");
			$("#navTextAlign").after("<br>\t\t\t<span id='closeBrace4' class='opacity00'>}</span>");
			break;
		case 'listSubPadding':
			customIntro(elementId);
			break;
		case 'listSubDecoration':
			customIntro(elementId);
			break;
		case 'navSelector':
			customIntro(elementId);
			dynamicSteps("#openBrace4");
			break;
		case 'openBrace4':
			customIntro(elementId);
			dynamicSteps("#closeBrace4");
			break;
		case 'navTextAlign':
			customIntro(elementId);
			break;
		case 'closeBrace4':
			customIntro(elementId);
			dynamicSteps("#navTextAlign");
			break;
		case'openSectionTag':
			$("#browser").removeClass("z-index");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter open section element i.e. <span class='ct-code-b-yellow'>&lt;section&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
				$("#h5Tag").append("&lt;h5&gt;Java:-&lt;/h5&gt;<br>" +
						"\t\t\t\t&lt;span&gt;This section covers all the fundamentals of<br>"+
						"\t\t\t\t\t\t Java programming language.&lt;/span&gt;");
			});
			break;
		case 'closedSectionTag':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter close section element i.e. <span class='ct-code-b-yellow'>&lt;/section&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'sectionSpan':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#h5Tag").removeClass("opacity00");
				var text = $("#h5Tag").html();
				typing('#h5Tag', text, typingInterval, 'white', function() {
					var text = "The <span class='ct-code-b-yellow'>section</span> element content represented on the web document as."
					typing('.introjs-tooltiptext', text, 20, 'white', function() {
						$("#browser").addClass("z-index");
						$("#sectionSpan").effect( "transfer", { to: $("#sectionTag"), className: "ui-effects-transfer" }, 2000 , function() {
							$("#sectionTag").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
			break;
		case 'openArticleTag':
			$("#browser").removeClass("z-index");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter open article element i.e. <span class='ct-code-b-yellow'>&lt;article&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
				$("#h3Tag").append("&lt;h3&gt;about&lt;/h3&gt;<br>"+
						"\t\t\t\t&lt;p&gt;CodeTantra was founded by Ramana TSV. Ramana loves <br>"+ 
						"\t\t\t\t\tcoding and sharing what he knows about coding. He has <br>"+ 
		  				"\t\t\t\t\tover 16 years experience in the IT industry.&lt;p&gt;");
			});
			break;
		case 'closedArticleTag':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter close article element i.e. <span class='ct-code-b-yellow'>&lt;/article&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'articleSpan':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#h3Tag").removeClass("opacity00");
				var text = $("#h3Tag").html();
				typing('#h3Tag', text, typingInterval, 'white', function() {
					var text = "The <span class='ct-code-b-yellow'>article</span> element content represented on the web document as."
					typing('.introjs-tooltiptext', text, 20, 'white', function() {
						$("#browser").addClass("z-index");
						$("#articleSpan").effect( "transfer", { to: $("#articleTag"), className: "ui-effects-transfer" }, 2000 , function() {
							$("#articleTag").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
			break;
		case 'openAsideTag':
			$("#browser").removeClass("z-index");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter open aside element i.e. <span class='ct-code-b-yellow'>&lt;aside&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
				$("#h4Tag").append("&lt;h4 style=color: seagreen;'&gt;"+
						"<br>\t\t\t\tThe salient features of the platform are:&lt;/h4&gt;<br>"+
						"\t\t\t\t&lt;ul style='color: olive;'&gt;<br>\t\t\t\t\t&lt;li&gt;Encourages Active Learning&lt;/li&gt;<br>"+
						"\t\t\t\t\t&lt;li&gt;Self-Paced Learning&lt;/li&gt;<br>"+
						"\t\t\t\t\t&lt;li&gt;Intelligent Live Feedback&lt;/li&gt;<br>"+
						"\t\t\t\t\t&lt;li&gt;Extensive Practical Labs&lt;/li&gt;<br>"+
						"\t\t\t\t&lt;/ul&gt;");
			});
			break;
		case 'closedAsideTag':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter close aside element i.e. <span class='ct-code-b-yellow'>&lt;/aside&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'asideSpan':
			$("#footerText").append("contact us :- support@codetantra.com");
			$("#closeBrace4").after("<br>\t\t\t<span id='footerSelector' class='opacity00'>footer</span>");
			$("#footerSelector").after("\t<span id='openBrace5' class='opacity00'>{</span>");
			$("#openBrace5").after("<br>\t\t\t\t<span id='footerTextAlign' class='opacity00'>text-align: center;</span>");
			$("#footerTextAlign").after("<br>\t\t\t\t<span id='footerBgmColor' class='opacity00'>background-color: blueviolet;</span>");
			$("#footerBgmColor").after("<br>\t\t\t\t<span id='footerClearRight' class='opacity00'>clear: right;</span>");
			$("#footerClearRight").after("<br>\t\t\t<span id='closeBrace5' class='opacity00'>}</span>");
			
			$("#closeBrace5").after("<br>\t\t\t<span id='articleSelector' class='opacity00'>article</span>");
			$("#articleSelector").after("\t<span id='openBrace6' class='opacity00'>{</span>");
			$("#openBrace6").after("<br>\t\t\t\t<span id='articleWidth' class='opacity00'>width: 50%;</span>");
			$("#articleWidth").after("<br>\t\t\t\t<span id='articledispalyInline' class='opacity00'>display: inline-block;</span>");
			$("#articledispalyInline").after("<br>\t\t\t<span id='closeBrace6' class='opacity00'>}</span>");
			$("#closeBrace6").after("<br>\t\t\t<span id='asideSelector' class='opacity00'>aside</span>");
			$("#asideSelector").after("\t<span id='openBrace7' class='opacity00'>{</span>");
			$("#openBrace7").after("<br>\t\t\t\t<span id='asideFloat' class='opacity00'>float: right;</span>");
			$("#asideFloat").after("<br>\t\t\t\t<span id='asideWidth' class='opacity00'>width: 50%;</span>");
			$("#asideWidth").after("<br>\t\t\t<span id='closeBrace7' class='opacity00'>}</span>");
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				TweenMax.to($("#h4Tag"), 1, {opacity: 1, onComplete: function() {
					var text = "The <span class='ct-code-b-yellow'>aside</span> element content represented on the web document as."
					typing('.introjs-tooltiptext', text, 20, 'white', function() {
						$("#browser").addClass("z-index");
						$("#asideSpan").effect( "transfer", { to: $("#asideTag"), className: "ui-effects-transfer" }, 2000 , function() {
							$("#asideTag").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				}});
			});
			break;
		case 'openFooterTag':
			introjs.refresh();
			$("#browser").removeClass("z-index");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter open footer element i.e. <span class='ct-code-b-yellow'>&lt;footer&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'footerSelector':
			customIntro(elementId);
			dynamicSteps("#openBrace5");
			break;
		case 'openBrace5':
			customIntro(elementId);
			dynamicSteps("#closeBrace5");
			break;
		case 'closeBrace5':
			customIntro(elementId);
			dynamicSteps("#footerTextAlign");
			break;
		case 'footerTextAlign':
			customIntro(elementId);
			break;
		case 'footerBgmColor':
			customIntro(elementId);
			break;
		case 'footerClearRight':
			customIntro(elementId);
			break;
		case 'closedFooterTag':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Enter close footer element i.e. <span class='ct-code-b-yellow'>&lt;/footer&gt;</span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					customIntroWithoutTyping(elementId);
				});
			});
			break;
		case 'articleSelector':
			customIntro(elementId);
			dynamicSteps("#openBrace6");
			break;
		case 'openBrace6':
			customIntro(elementId);
			dynamicSteps("#closeBrace6");
			break;
		case 'articleWidth':
			customIntro(elementId);
			break;
		case 'articledispalyInline':
			customIntro(elementId);
			break;
		case 'closeBrace6':
			customIntro(elementId);
			dynamicSteps("#articleWidth");
			break;
		case 'asideSelector':
			customIntro(elementId);
			dynamicSteps("#openBrace7");
			break;
		case 'openBrace7':
			customIntro(elementId);
			dynamicSteps("#closeBrace7");
			break;
		case 'asideFloat':
			customIntro(elementId);
			break;
		case 'asideWidth':
			customIntro(elementId);
			break;
		case 'closeBrace7':
			customIntro(elementId);
			dynamicSteps("#asideFloat");
			break;
		case 'footerSpan':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#footerText").removeClass("opacity00");
				var text = $("#footerText").html();
				typing('#footerText', text, typingInterval, 'white', function() {
					var text = "The <span class='ct-code-b-yellow'>footer</span> element content represented on the web document as."
					typing('.introjs-tooltiptext', text, 20, 'white', function() {
						$("#browser").addClass("z-index");
						$("#footerSpan").effect( "transfer", { to: $("#footerTag"), className: "ui-effects-transfer" }, 2000 , function() {
							$("#footerTag").removeClass("opacity00");
							$('.introjs-nextbutton').show();
							dynamicSteps("#footerSelector");
						});
					});
				});
			});
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function typing(typingId, text, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(text, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

/**** bind :- multiple event types can be bounded at once ***/

function keyCodeCondition(id, tag) {
	$(id).focus();
	$(id).off("paste");
	$(id).on("paste",function(e) { 
		e.preventDefault();
	});
	$(id).on("keydown", function(e) {
		$('.error-text').remove();
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
			return;
		}	
	});
	$(id).on("keyup", function(e) {
		$('.length-error-text').remove();
		tag = tag.trim();
		if ($(id).val()== tag) {
			$(".length-error-text").remove();
			$(id).attr({disabled : "disabled"});
			$(".introjs-nextbutton").show();
		} else {
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br> Please enter a proper tag.</span>");
		}
	});
}

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	},500);
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index");
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 2000 , function() {
		$(selector1).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
	
}

//****dynamic steps*************
function dynamicSteps(stepName, animatedStep) {
	var options = {
			element :stepName,
			intro :'',
			tooltipClass : "",
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
}

function customIntroWithoutTyping(elementId) {
	validationWithoutTyping("#"+elementId,elementId+"Input");
}

function validationWithoutTyping(selector1,selector2) {
	var textInput = $(selector1).text();
	var w = $(selector1).width();
	var l = textInput.length;
	$(selector1).empty().removeClass('opacity00');
	$(selector1).append('<input id="'+selector2+'" style="width: '+ (w + 3) +'px;" maxlength='+ (l + 3) +'>');
	keyCodeCondition("#"+selector2,textInput);
}

function customIntro(elementId) {
	$(".introjs-nextbutton").hide();
	$('.introjs-helperLayer').one('transitionend', function() {
		validation("#"+elementId,elementId+"Input");
	});
}

function validation(selector1,selector2) {
	var textInput = $(selector1).text();
	var w = $(selector1).width();
	var l = textInput.length;
	var text = "Enter <span class='ct-code-b-yellow'>"+$(selector1).html()+ "</span>";
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
		$(selector1).empty().removeClass('opacity00');
		$(selector1).append('<input id="'+selector2+'" style="width: '+ (w + 3) +'px;" maxlength='+ (l + 3) +'>');
		keyCodeCondition("#"+selector2,textInput);
	}); 
}
</script>
</html>
