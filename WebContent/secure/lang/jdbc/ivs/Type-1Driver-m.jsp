<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="../js/ct-svg-lines.js"></script>
<title>new-rdm</title>
<style>
.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke-width: 2; 
	position: relative;
	marker-end: url("#arrowEnd"); 
}

.svg-dotted-line {
	stroke-dasharray: 5;
}

.margin-top-10 {
	margin-top: 10px;
}

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-50 {
	margin-top: 50px;
}

.border-radius {
	border: 2px solid grey;
	border-radius: 8px;
	font-family: monospace;
}

.database-box {
	border-top: none;
	border-radius: 0 0 8px 8px;
	min-height: 50px;
}

.oval-shape {
	height: 22px;
	border-radius: 50%;
	border: 2px solid grey;
	top : 10px;
	
}

.popover-content {
    color: black;
    font-size: 12px;
    background: #ccc;
    font-family: monospace;
}

.popover {
	width :215px;
}

.popover {
	z-index: 10000000;
}


.text-color {
	color: #008080;
}

.ct-btn-next {
	background: green;
	margin: 0;
}

.z-index {
	z-index: 10000000000 !important;
}

.padding00 {
	padding: 0;
}

.display-css {
	display: inline-block;
}
/* .arrow {
	top:20% !important;
}
 */

</style>
</head>
<body>
<script type="text/javascript">
var count = 1;
var introjs;
$(document).ready(function() {
	svgAppend("#driverOne","totalSvg","","blue");
	//$('.opacity00').removeClass('opacity00');
	svgLineRightAndLeft("#driverOne", "#span1", "#span2", "line111","grey", "left","right", "","", true);
	$('#line111').css({'marker-end' : '', 'opacity' : '0'});
	svgLineRightAndLeft("#driverOne", "#span3", "#span4", "line112","grey", "left","right", "","", true);
	$('#line112').css({'marker-end' : '', 'opacity' : '0'});
	svgLineRightAndLeft("#driverOne", "#span5", "#span6", "line113","grey", "left","right", "","", true);
	$('#line113').css({'marker-end' : '', 'opacity' : '0'});
	initIntroJs();
});


function initIntroJs() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps: [
		  {
		    element: '#driverOne',
		    intro: '',
		   	tooltipClass: 'hide'
		  }, {
		    element: '#restart',
		    intro: '',
		    position: 'right'
		  }
	]});
	
	introjs.onafterchange (function(targetElement) {
		$('.introjs-button').hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case "driverOne":
			var text = "Type-1 driver is also called as <b>JDBC-ODBC Bridge Driver.</b><br> <span id ='jdbc'>Here,<br> "
						+"<b>JDBC</b>- Java Database Connectivity.</span><br><span id = 'odbc'><b>ODBC</b>- Open Database Connectivity.<br></span>";
			popover("#driverOne", "right", text,function() {
				$('#popover1').parents(".popover-content").append('<div class = "text-right">'
						+'<span class="introjs-button ct-btn-next" onclick="client();">Next &#8594;</span><div>');
			});
			break;
		}
	});
	introjs.start();
}

function client() {
	count++;
	$('.text-right').remove();
	zoomInEffect('#javaApp',function() {
		$('#line111').css('opacity', '');
		svgText('#line111', 'layer 1');
		var text = "This is the Client's java application.";
		popover("#javaApp", "right", text,function() {
			$('#popover2').parents(".popover-content").append('<div class = "text-right">'
					+'<span class="introjs-button ct-btn-next" onclick="javaApi();">Next &#8594;</span><div>');
			
		});
	});
}

function javaApi() {
	count++;
	$('.text-right').remove();
	svgLineTopAndBottom("#driverOne","#javaApp", "#jAPI", "line1","grey", "bottom","top", "left","left", "", function() {
		zoomInEffect('#jAPI',function() {
			var text = "<span class='start-text'>It provides various methods and interfaces </span><span class='end-text'> for "
						+"easy communication with database.</span>";
			popover("#jAPI", "right", text,function() {
				$('#popover3').parents(".popover-content").append('<div class = "text-right">'
						+'<span class="introjs-button ct-btn-next" onclick="driverManager();">Next &#8594;</span><div>');
			});
		});
	}); 
}

function driverManager() {
	popoverGrayOut();
	svgLineTopAndBottom("#driverOne","#jAPI", "#jDriveManager", "line2","grey", "bottom","top", "left", "left", "", function() {
		zoomInEffect('#jDriveManager',function() {
			$('#line112').css('opacity', '1');
			svgText('#line112', 'layer 2');
			var text = "<span class='start-text'>Driver Manager is responsible for </span><span class='end-text'>establishing "
						+"the connection to the database through the driver "
						+" for that it loads database specific drivers in a application.";
			popover("#jDriveManager", "right", text,function() {
				$('#popover4').parents(".popover-content").append('<div class = "text-right">'
						+'<span class="introjs-button ct-btn-next" onclick="type1();">Next &#8594;</span><div>');
			});
		});
	});
	
}

function type1() {
	popoverGrayOut();
	svgLineTopAndBottom("#driverOne","#jDriveManager","#bridge", "line3","grey", "bottom","top", "left", "left", "", function() {
		zoomInEffect('#bridge',function() {
			var text = "<span class='start-text'>The JDBC-ODBC </span><span class='end-text'>Bridge will convert JDBC "
						+"methods into ODBC function calls.";
			popover("#bridge", "left", text,function() {
				$('#popover5').parents(".popover-content").append('<div class = "text-right">'
						+'<span class="introjs-button ct-btn-next" onclick="odbcDriver();">Next &#8594;</span><div>');
			});
		});
	});
	
}

function odbcDriver() {
	popoverGrayOut();
	svgLineTopAndBottom("#driverOne","#bridge","#oDriver" ,"line4","grey", "bottom","top", "left", "left", "", function() {
		zoomInEffect('#oDriver',function() {
			var text = "<span class='start-text'>ODBC driver must be </span><span class='end-text'> installed in the client's system,"
			+" this ODBC depends on native libraries of the operating system.";
			popover("#oDriver", "right", text,function() {
				$('#popover6').parents(".popover-content").append('<div class = "text-right">'
						+'<span class="introjs-button ct-btn-next" onclick="databaseLibrary();">Next &#8594;</span><div>');
			});
		});
	});	
}

function databaseLibrary() {
	popoverGrayOut();
	svgLineTopAndBottom("#driverOne","#oDriver","#DLApi" ,"line5","grey", "bottom","top", "left", "left", "", function() {
		zoomInEffect('#DLApi',function() {
			$('#line113').css('opacity', '1');
			svgText('#line113', 'layer 3');
			var text = "This is the Database related library.";
			popover("#DLApi", "left", text,function() {
				$('#popover7').parents(".popover-content").append('<div class = "text-right">'
						+'<span class="introjs-button ct-btn-next" onclick="database();">Next &#8594;</span><div>');
			});
		});
	});	
}

function database() {
	popoverGrayOut();
	svgLineTopAndBottom("#driverOne","#DLApi","#database" ,"line6","grey", "bottom","top", "left", "left", "", function() {
		zoomInEffect('#database',function() {
			var text = "<span class='start-text'>This is the Database </span><span class='end-text'>"
							+"which the executes query and gives result.";
			popover("#database", "left", text,function() {
				popoverGrayOut();
				svgLineTopAndBottom("#driverOne","#database" ,"#DLApi" ,"line7","grey", "top","bottom", "right", "right", "", function() {
					svgLineTopAndBottom("#driverOne","#DLApi","#oDriver" ,"line8","grey", "top","bottom", "right", "right", "", function() {
						svgLineTopAndBottom("#driverOne","#oDriver","#bridge" ,"line9","grey", "top","bottom", "right", "right", "", function() {
							svgLineTopAndBottom("#driverOne","#bridge","#jDriveManager" ,"line10","grey", "top","bottom", "right", "right", "", function() {
								svgLineTopAndBottom("#driverOne","#jDriveManager","#jAPI" ,"line11","grey", "top","bottom", "right", "right", "", function() {
									svgLineTopAndBottom("#driverOne","#jAPI","#javaApp" ,"line12","grey", "top","bottom", "right", "right", "", function() {
										
									});
								});
							});
						});
					});
				});
			});
		});
	});	
}

function popover(selector, position, text, callBackFunction) {
	//count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: 'focus',
		container: selector,
		content: '<div id="popover' + count + '">'
		+ text + '</div>',
	 });
	$(selector).popover('show');
	$('#popover' + count).removeClass('opacity00');
	$(".popover").css("top" , "0");
	typing('#popover' + count, text, function () {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}); 
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
	'typing_interval': 1,
	'cursor_color': 'white',
	}, function () {
	$(selector).removeClass('typingCursor');
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	});
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		callBackFunction();
	});
}

function mouseEvents() {
	$('.popover-gray-out > div').mouseover(function () {
		var t = this.id;
		$('#' + t + ' .more').css({'display': 'none'});
		$('#' + t + ' .end-text').css({'display': 'inline'});
		$(this).parents('.popover').addClass('z-index');
	});
	
	$('.popover-gray-out > div').mouseout(function () {
		var t = this.id;
		$('#' + t + ' .end-text').not('#popover' + count).css({'display': 'none'});
		$('#' + t + ' .more').not('#popover' + count).css({'display': 'inline'});
		$(this).parents('.popover').removeClass('z-index');
	});
}

function popoverGrayOut() {
	$('.text-right').remove();
	$("#popover"+ count).parent().addClass("popover-gray-out");
	$('#popover' + count + ' .end-text').css({'display' : 'none'});
	$('#popover' + count + ' .start-text').after('<span class="more" style="display: inline">.....</span>');
	mouseEvents();
	count++;
} 

function svgText(lineId, textValue) {
	var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text.setAttribute('x', +$(lineId).attr('x1') + 10);
	text.setAttribute('y', +$(lineId).attr('y1') + 20);
	text.setAttribute('fill', 'black');
	text.textContent = textValue;
	text.setAttribute('style', 'font-family: monospace;');
	$('#totalSvg').append(text);
	
	TweenMax.to($("text").last(), 1, {opacity : "1", onComplete:function() {
		$("text").last().removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


</script>
	<div class="col-xs-12 margin-top-20">
		<div class="col-xs-12 text-center">
			<h1 class="label ct-demo-heading">JDBC Driver - 1</h1>
		</div>
		<div class="col-xs-12 margin-top-20">
			<div class="col-xs-offset-3 col-xs-6 border-radius" id="driverOne">
				<div class="col-xs-12 margin-top-10 padding00">
					<span class="col-xs-1 text-left padding00"><div class="display-css" id="span1"></div></span>
					<span class="col-xs-1 col-xs-offset-10 text-right padding00"><div class="display-css" id="span2"></div></span>
				</div>
				<div class="col-xs-12 margin-top-20">
					<div id="javaApp" class="col-xs-offset-4 col-xs-4 border-radius text-center opacity00">Calling
						Java Application</div>
				</div>
				<div class="col-xs-12 margin-top-50">
					<div id="jAPI" class="col-xs-offset-4 col-xs-4 border-radius text-center opacity00">JDBC
						API</div>
				</div>
				<div class="col-xs-12 margin-top-20 padding00">
					<span class="col-xs-1 text-left padding00"><div class="display-css" id="span3"></div></span>
					<span class="col-xs-1 col-xs-offset-10 text-right padding00"><div class="display-css" id="span4"></div></span>
				</div>
				<div class="col-xs-12 margin-top-20">
					<div id="jDriveManager" class="margin-top-10 col-xs-offset-4 col-xs-4 border-radius text-center opacity00">JDBC
						Driver Manager</div>
				</div>
				<div class="col-xs-12 margin-top-50">
					<div id="bridge" class="col-xs-offset-4 col-xs-4 border-radius text-center opacity00">JDBC-ODBC
						Bridge (Type-1 Driver)</div>
				</div>
				<div class="col-xs-12 margin-top-50">
					<div id="oDriver" class="col-xs-offset-4 col-xs-4 border-radius text-center opacity00">
						ODBC Driver</div>
				</div>
				<div class="col-xs-12 margin-top-20 padding00">
					<span class="col-xs-1 text-left padding00"><div class="display-css" id="span5"></div></span>
					<span class="col-xs-1 col-xs-offset-10 text-right padding00"><div class="display-css" id="span6"></div></span>
				</div>
				<div class="col-xs-12 margin-top-20">
					<div id="DLApi" class="margin-top-10 col-xs-offset-4 col-xs-4 border-radius text-center opacity00">
						Database library APIs</div>
				</div>
				<div class="col-xs-12 margin-top-50">
					<div id="database" class="col-xs-offset-4 col-xs-4 text-center opacity00">
						<div  class="col-xs-12 oval-shape"></div>
						<div class="col-xs-12 database-box border-radius">
							<div class="margin-top-20">
								Database
								<div></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 margin-top-20"></div>
			</div>
		</div>
	</div>

</body>
</html>