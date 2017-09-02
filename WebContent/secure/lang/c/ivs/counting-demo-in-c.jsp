<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Counting</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/cdic.min.js"></script>
<style type="text/css">

body {
	-moz-tab-size: 4;
	tab-size: 4;
}

.margin10 {
	margin-top : 10px;
}

.margin20 {
	margin-top : 30px;
}

.box-border {
	min-height: 565px;
	margin-top: 10px;
}

#expTypingArea {
	background-color: rgba(255, 255, 255, 0.85);
	z-index: 9999998; 
}

.continueBtn {
	background-color: green !important;
	left: 15px;
}

.introjsNextBtn, .introjsNextBtn1, .introjsNextBtn2 {
	background-color: green !important;
}

.introjs-button {
	margin: 0px !important;
}
 
#expTypingArea > ul {
	margin-left: -20px;
}

.monospace-text {
	font: monospace;
}

.ct-code-b-red {
	color: #923838;
	font-weight: bold;
}

.introjs-tooltiptext {
	min-width: 250px;
}

.allowNumbers {
    outline: none;
}

#animationDivArea {
	background-color: lemonchiffon;
	border: 1px solid gray;
	border-radius: 10px;
	display: inline-flex;
	min-height: 270px;
	margin-top: 10px;
	padding: 2px;
	position: absolute;
	width: inherit;
	font-family: monospace;
	font-size: 11px;
}

.focus {
	background: rgba(255, 255, 255, 0.850);
	z-index: 9999999;
	position: relative;
}

.introjs-fixParent {
	position: relative !important;
	z-index: 99999999 !important;
}

pre {
	font-size: 12px;
}

.display-inline-block {
	display: inline-block;
}

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.ct-code-b-blue {
	color: blue;
}

 .position-relative {
	position: relative;
}

#outputDiv {
	margin-top: 10px;
	padding: 0px;
	z-index: 9999999;
}

#output {
	padding: 2px;
}

#restart {
	margin-top: 10px;
}

.errorMsg {
	color: red;
	font-weight: bold;
}

.padding0 {
	padding: 0;
}

.padding3 {
	padding: 3px;
}

#outputbody {
	height: 70px;
}

.totalmathsMarks ,.totalscienceMarks, .totalsocialMarks {
	position: relative;
	display: inline-block;
}

.nextBtn5,.nextBtn6 {
	background-color: green !important;
}

#javaCodeDiv {
	margin-left: 10px!important;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

</style>

</head>
<body>
	<div class='text-center'>
		<h4>
			<span class="label label-default ct-demo-heading" id='demoTitle'>Counting Demo</span>
		</h4>
	</div>
	<div class='col-xs-offset-3 col-xs-7 margin10 opacity00' id='expTypingArea'>Counting is a very common requirement while solving programming problems.
	<span id=button1><a style="background-color:green" class="introjs-button animation-nextbtn1" onclick="animate1()">Next &#8594;</a></span></div>
	<br> 
<div class ='col-xs-6'>
	<div class='col-xs-12 box-border padding3' id='animationDiv'>
		<div class = "col-xs-12">
			<div style="display: inline-block;"><div class='opacity00 mathsMarksDiv '><b class='ct-code-b-red'>int</b> external_maths_marks = <span id="mathsMarks" class="allowNumbers" maxlength="1" contenteditable="true">28</span>;</div>
				<div class='opacity00 scienceMarksDiv'><b class='ct-code-b-red'>int</b> external_science_marks = <span id="scienceMarks" class="allowNumbers" maxlength="1" contenteditable="true">40</span>;</div>
				<div class='opacity00 socialMarksDiv'><b class='ct-code-b-red'>int</b> external_social_marks = <span id="socialMarks" class="allowNumbers" maxlength="1" contenteditable="true">65</span>;</div>
				<div class='opacity00 internalmathsMarks'><b class='ct-code-b-red'>int</b> internal_maths_marks = <span id="internalmathsMarks" class="allowNumbers" maxlength="1" contenteditable="true">11</span>;</div>
				<div class='opacity00 internalscienceMarks'><b class='ct-code-b-red'>int</b> internal_science_marks = <span id="internalscienceMarks" class="allowNumbers" maxlength="1" contenteditable="true">15</span>;</div>
				<div class='opacity00 internalsocialMarks'><b class='ct-code-b-red'>int</b> internal_social_marks = <span id="internalsocialMarks" class="allowNumbers" maxlength="1" contenteditable="true">8</span>;</div>
				<div class='opacity00 externalpassMark'><b class='ct-code-b-red'>int</b> external_pass_mark = <span class='totalpassMark'>26</span>;</div>
				<div class='opacity00 passMarkDiv'><b class='ct-code-b-red'>int</b> total_pass_mark = <span class='totalpassMark'>40</span>;</div>
				<div class='opacity00 totaldeclareDiv'><b class='ct-code-b-red'>int</b> total_maths_marks, total_science_marks, total_social_marks;</div>
				<div class='opacity00 totalmathsMark'><b class='ct-code-b-red'></b> total_maths_marks = <span class='totalmathsMarks'></span>;</div>
				<div class='opacity00 totalscienceMark'><b class='ct-code-b-red'></b> total_science_marks = <span class='totalscienceMarks'></span>;</div>
				<div class='opacity00 totalsocialMark'><b class='ct-code-b-red'></b> total_social_marks = <span class='totalsocialMarks'></span>;</div>
				<div class='opacity00 passCountDiv'><b class='ct-code-b-red'>int</b> pass_count = 0;</div>
			</div>
		</div>
		<div class = "col-xs-12 padding0">
		<div id='animationDivArea' class='padding0 opacity00 margin20'>
			<div style="display: inline-block; width: 60%;">
				<div class='opacity00 mathsIf'>
					if ((<span>external_maths_marks >= external_pass_mark</span>)<br> && <br>
					(<span>total_maths_marks >= total_pass_mark</span>))
					{ <br>&emsp;&emsp;&emsp;<span>pass_count = pass_count + 1</span>;<br> }
				</div><br/>
				<div class='opacity00 scienceIf'>
					if ((<span>external_science_marks >= external_pass_mark</span>) && <br>
					 (<span>total_science_marks >= total_pass_mark</span>))
					{ <br>&emsp;&emsp;&emsp;<span>pass_count = pass_count + 1;</span> <br> }
				</div><br/>
				<div class='opacity00 socialIf'>
					if ((<span>external_social_marks >= external_pass_mark</span>) && <br>
					(<span>total_social_marks >= total_pass_mark</span>))
					{ <br>&emsp;&emsp;&emsp;<span>pass_count = pass_count + 1;</span> <br> }
				</div><br/>
			</div>

			<div style="display: inline-block; margin-left: 4%;">
				<div id = "mathsconDiv" class = "margin10">
					<div class='maths-ifblk-condition-in-animation opacity00'>
						<span class='subMark display-inline-block'>subjectMark</span> <span>
							>= </span> <span class='passmark-in-animation display-inline-block'>external_pass_mark</span>
					</div>
					<div class='maths-ifblk-condition1-in-animation opacity00'>
						<span class='subMark1 display-inline-block'>subjectMark1</span> <span>
							>= </span> <span class='passmark1-in-animation display-inline-block'>total_pass_mark</span>
					</div>
					<div class='maths-ifblk-body-in-animation opacity00'>
						<span class=''>pass_count</span> <span class=''>=</span> <span
							class='passCount-rightside display-inline-block'> <span
							class='display-inline-block'>pass_count</span><span> + 1</span>
						</span>
					</div>
				</div>
				<div id = "scienceconDiv" class = "margin20">
					<div class='science-ifblk-condition-in-animation opacity00'>
						<span class='subMark display-inline-block'>subjectMark</span> <span>
							>= </span> <span class='passmark-in-animation display-inline-block'>external_pass_mark</span>
					</div>
					<div class='science-ifblk-condition1-in-animation opacity00'>
						<span class='subMark1 display-inline-block'>subjectMark1</span> <span>
							>= </span> <span class='passmark1-in-animation display-inline-block'>total_pass_mark</span>
					</div>
					<div class='science-ifblk-body-in-animation opacity00'>
						<span class=''>pass_count</span> <span class=''>=</span> <span
							class='passCount-rightside display-inline-block'> <span
							class='display-inline-block'>pass_count</span><span> + 1</span>
						</span>
					</div>
				</div>
				<br/>
				<div id = "socialconDiv" style = "margin-top : 30px;">
					<div class='social-ifblk-condition-in-animation opacity00'>
						<span class='subMark display-inline-block'>subjectMark</span> <span>
							>= </span> <span class='passmark-in-animation display-inline-block'>external_pass_mark</span>
					</div>
					<div class='social-ifblk-condition1-in-animation opacity00'>
						<span class='subMark1 display-inline-block'>subjectMark1</span> <span>
							>= </span> <span class='passmark1-in-animation display-inline-block'>total_pass_mark</span>
					</div>
					<div class='social-ifblk-body-in-animation opacity00'>
						<span class=''>pass_count</span> <span class=''>=</span> <span
							class='passCount-rightside display-inline-block'> <span
							class='display-inline-block'>pass_count</span><span> + 1</span>
						</span>
					</div>
				</div>
				<br/>
			</div>
		</div>
	</div>
</div>
</div>
<div class='col-xs-6'>
	<pre class='box-border opacity00' id='javaCodeDiv'>#include&ltstdio.h&gt 
void main() {
	int external_maths_marks = <span class='javacode-maths-marks'>70</span>, external_science_marks = <span class='javacode-science-marks'>40</span>, external_social_marks = <span class='javacode-social-marks'>60</span>;
	int internal_maths_marks = 10;
	int internal_science_marks =20;
	int internal_social_marks = 12;
	int external_pass_mark = 26;
	int total_pass_mark = 40;
	int total_maths_marks, total_science_marks, total_social_marks;
	total_maths_marks = external_maths_marks + internal_maths_marks;
	total_science_marks = external_science_marks + internal_science_marks;	
	total_social_marks = external_social_marks + internal_social_marks;
	int pass_count = 0;
	
	if ((external_maths_marks >= external_pass_mark) && (total_maths_marks >= total_pass_mark)) {
		pass_count = pass_count + 1;
	}
	
	if ((external_science_marks >= external_pass_mark) && (total_science_marks >= total_pass_mark)) {
		pass_count = pass_count + 1;
	}
	
	if ((external_science_marks >= external_pass_mark) && (total_social_marks >= total_pass_mark)) {
		pass_count = pass_count + 1;
	}

	printf("Number of subjects passed = %d\n",pass_count);
}</pre>
</div>
	<div class="col-xs-offset-3 col-xs-6 padding0 opacity00" id="outputDiv">
		<div class="output-console-title-bar">
			<span class="title">Output</span>
		</div>
		<div class="output-console-body" id="outputbody"><span id="output"></span></div>
	</div>
	<div class="text-center col-xs-12">
		<a class="btn btn-warning opacity00" id='restart'><i
			class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
	
<script type="text/javascript">
	$(document).ready(function() {
		countingDemoInCReady();
	});
</script>
</body>
</html>
