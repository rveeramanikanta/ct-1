
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/jquery-ui.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css" />
<script src="/secure/lang/jdbc/js/NewFile.js"></script>
<title>Array of objects</title>
<style type="text/css">
#informationDiv {
	border: 2px solid gray;
	border-radius: 5px;
}
.ct-green {
	color: green;
}
#text {
	border: 1px solid gray;
	background-color: #484a3f ;
	border-radius: 3px;
	color: white;
	font-weight: bolder;
}
.margin-top {
	margin-top : 20px;
}
.user-button,.user-btn{
	background-color: green;
}
.creamPreTab4 {
	tab-size: 4;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace;
	 background-color: #e5eecc;
}
.error-text {
	color: red;
}
.violet {
	color : #ad08ad;
}
.green {
	color : green;
}
.red {
	color : red;
}
.pink {
	color : deeppink;
}

table {
	width : 100%;
	text-align: center;
}
.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	min-height : 400px;
	padding-left : 10px;
	padding-right : 10px;
}
.box-border1 {
	border: 2px solid #1cc78f;
	border-radius: 8px;
	padding : 10px;
	height : 40px;
}
.output-console-body {
	/* background-color: black; */
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	padding: 10px;
	white-space: nowrap;
	min-height: 100px;
}
.position {
	position: relative;
}
.ui-effects-transfer {
    border: 2px dashed blue;
    z-index: 99999999 !important;
 }
  
.z-index1000000 {
	position:relative;
	background-color:white;
	z-index:1000000 !important;
}
.z-index10000000 {
  position: absolute;
 /*  background-color: white; */
  z-index: 10000000 !important;
}
[contenteditable="true"] {
 	display: inline;
	font-weight: normal;
	outline: medium none;
	
} 
input {
	background-color: white;
	color : black;
}
.ct-code-b-green {
 color :green;
 font-weight : bold;
}
#managerName {
	padding-left: 245px;
 	font-size: larger;
 	color : red;
 }
 #managerName1 {
	padding-left: 245px;
 	font-size: larger;
 	color : red;
 	margin-top: 20px;
 }
 #managerName2 {
	padding-left: 245px;
 	font-size: larger;
 	color : red;
 	margin-top: 20px;
 }
 .cupvalue {
	position: absolute;
	color: black;
	margin-top: 6px;
    margin-left: 15px;
}
</style>
</head>
<body>
<div class="col-xs-12">
	<div class="col-xs-12 text-center padding">
		<div class="col-xs-6 col-xs-offset-3" >
			<h3><span id="titleName" class="ct-demo-heading label">Array-Of-Objects</span></h3>
		</div>
	</div>
	<div class="col-xs-12">
		<div class=" col-xs-8 col-xs-offset-2 margin-top" id="informationDiv">
			<span id="infoText">The array of the objects can be created for the 
			class as <span id="text">classname-arrayname[size];</span><a class="introjs-button user-button" id="nextButton">Next&rarr;</a></span>
		</div>
	</div>
	<div class="col-xs-12 margin-top ">
		<div class="col-xs-5  padding">
			<pre class="creamPretab4" id="preBody">
<span id="declaration"><span class="violet">#include</span> <span class="pink">&lt;iostream&gt;</span></span>
<span class="red">using namespace</span> std;
<span id="class"><span class="red">class</span> Employee {
   <span id="char"><span class="green">char</span> <span id="createMemory">name[8]</span>;</span>
   <span id="int"><span class="green">int</span> <span id="age">age</span>;</span>
   <span id="method"><span class="red">public:</span> void getdata() {
      <span id="cout">cout << <span class="pink" id="enterText">"Enter employee name : "</span>;</span>
      <span id="cin">cin >> <span id="name">name</span>;</span>
      <span id="cout1">cout << <span class="pink" id="enterText1">"Enter age : "</span>;</span>
      <span id="cin1">cin >> <span id="age1">age</span>;</span>
    <span id="close">}</span></span>
   <span id="method1"><span class="green">void</span> putdata() {
      <span id="cout2">cout << <span id="textEnter" class="pink">"name : "</span> << name << endl;</span>
      <span id="cout3">cout << <span id="textEnter1" class="pink">"age : "</span> << age << endl;</span>
   }</span>
};	</span>
<span id="main">main() {
   <span id="manager">Employee manager[<span class="pink">3</span>];</span>
   <span id="int1">int i;</span>
   <span id="condition"><span id='forLoop' >for(<span id="iVal">i = <span class="pink position" id="num1">0</span></span>; <span id="iValComparision">i < <span class="pink">3</span></span>; <span id="iValIncrement">i++</span>) {</span>
      <span id="cout4">cout << <span id="enterDetails" class="pink">"Enter the manager details : "</span><< endl;</span>
      <span id="manager1">manager[i].getdata();</span>
   <span id="close1">}</span></span>
   <span id="cout5">cout << <span class="pink" id="enterDetails1">"The manager details are : "</span> << endl;</span>
   <span id="condition1"><span id='forLoop' >for (<span id="">i = <span class="pink">0</span>; i < <span class="pink">3</span>; <span id='iValIncrement1'>i++</span></span>) {</span>
       <span id="manager2">manager[i].putdata();</span>
    }</span>
    <span id="return" ><span class="red">return</span><span class="pink"> 0</span>;</span>
}    
</span>	
			</pre>
		</div>
		<div class="col-xs-7">
			<div class="col-xs-12 margin-top box-border opacity00" id="animationBox">
				<div class="col-xs-12">
					<div id="managerName" class="opacity00">manager[0]</div>
					<div class="col-xs-8">
						<table class='text-center margin-top opacity00' style='table-layout:fixed' id="table">
							<tr>
								
									
										<td></td>
									
								
									
										<td>0</td>
									
								
									
										<td>1</td>
									
								
									
										<td>2</td>
									
								
									
										<td>3</td>
									
								
									
										<td>4</td>
									
								
									
										<td>5</td>
									
								
									
										<td>6</td>
									
								
									
										<td>7</td>
									
								
							</tr>
							<tr>
							<td> <span class="green">name</span> :</td>
								
									<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table1"><span class='td-css position'></span></td>
								
									<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table1"><span class='td-css position'></span></td>
								
									<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table1"><span class='td-css position'></span></td>
								
									<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table1"><span class='td-css position'></span></td>
								
									<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table1"><span class='td-css position'></span></td>
								
									<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table1"><span class='td-css position'></span></td>
								
									<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table1"><span class='td-css position'></span></td>
								
									<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table1"><span class='td-css position'></span></td>
								
							
							</tr>
						</table>
					</div>
					<div class="col-xs-4">
						<div class="col-xs-12">
							<div class="col-xs-6 ">
								<div id="age2" class="text-center opacity00" style=" margin-top:15px;"><b style="color: maroon; margin-top:15px;">age</b>
									<div id="borderBox1" class="text-center box-border1 opacity00"><span id="box2" class=" text-center  "></span>
									</div>
								</div>
							</div>
							<div class="col-xs-6 text-center ">
								<div class="col-x-12 padding00 margin-top opacity00" id="countBox">
									<span id="countCupValue" class="cupvalue"></span>
										<i class="fa fa-coffee fa-3x count-cup"style="color: salmon;"></i><br>
										<span id="countCupVariable" class = "ct-code-b-black" style='font-weight: bold; color : green;'>i</span>
								</div>
					</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12">
					<div id="managerName1" class="opacity00">manager[1]</div>
					<div class="col-xs-8">
						<table class='  text-center margin-top opacity00 ' style='table-layout:fixed' id="table2">
							<tr>
								
									
										<td></td>
									
								
									
										<td>0</td>
									
								
									
										<td>1</td>
									
								
									
										<td>2</td>
									
								
									
										<td>3</td>
									
								
									
										<td>4</td>
									
								
									
										<td>5</td>
									
								
									
										<td>6</td>
									
								
									
										<td>7</td>
									
								
							</tr>
							<tr>
								<td> <span class="green">name</span> :</td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table3"><span class='td-css1 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table3"><span class='td-css1 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table3"><span class='td-css1 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table3"><span class='td-css1 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table3"><span class='td-css1 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table3"><span class='td-css1 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table3"><span class='td-css1 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table3"><span class='td-css1 position'></span></td>
									
							</tr>
						</table>
					</div>
					<div class="col-xs-4">
						<div class="col-xs-12">
							<div class="col-xs-6 " >
								<div id="age3" class="text-center opacity00" style=" margin-top:15px;"><b style="color: maroon; margin-top:15px;">age</b>
									<div id="borderBox2" class="text-center box-border1 opacity00"><span id="box3" class=" text-center  "></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12">
					<div id="managerName2" class="opacity00">manager[2]</div>
					<div class="col-xs-8">
						<table class='  text-center margin-top opacity00 ' style='table-layout:fixed' id="table4">
							<tr>
								
									
										<td></td>
									
								
									
										<td>0</td>
									
								
									
										<td>1</td>
									
								
									
										<td>2</td>
									
								
									
										<td>3</td>
									
								
									
										<td>4</td>
									
								
									
										<td>5</td>
									
								
									
										<td>6</td>
									
								
									
										<td>7</td>
									
								
							</tr>
							<tr>
								<td> <span class="green">name</span> :</td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table5"><span class='td-css2 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table5"><span class='td-css2 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table5"><span class='td-css2 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table5"><span class='td-css2 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table5"><span class='td-css2 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table5"><span class='td-css2 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table5"><span class='td-css2 position'></span></td>
									
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table5"><span class='td-css2 position'></span></td>
									
							</tr>
						</table>
					</div>
					<div class="col-xs-4">
						<div class="col-xs-12">
							<div class="col-xs-6 " id="total4">
								<div id="age4" class="text-center opacity00" style=" margin-top:15px;"><b style="color: maroon; margin-top:15px;">age</b>
									<div id="borderBox3" class="text-center box-border1 opacity00"><span id="box4" class=" text-center  "></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="output-console col-xs-12 margin-top padding00 " id='outputBox'>
				<div class="output-console-title-bar ">
					<span>Output</span>
				</div>
				<div class="output-console-body " id="outputBody">
				</div>
			</div>
		</div>
	</div>
	<div><button type="button" class="col-sm-1 col-sm-offset-5 btn btn-warning " id="restartBtn" style="margin-top : 15px;">Restart</button></div>
</div>
<script type="text/javascript">
$(document).ready(function() {
	readPrintStringUsingGetsPutsReady();
});
</script>
</body>
</html>