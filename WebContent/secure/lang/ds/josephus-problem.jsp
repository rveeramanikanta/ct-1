<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Josephus Problem</title>
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
<script src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/ds/js/josephus-problem.js"></script>

<style type="text/css">
.margin-top25 {
	margin-top : 25px;
}

.margin-top15 {
	margin-top : 15px;
}

.border-css {
	border: 2px solid gray;
	border-radius: 8px;
	padding: 4px;
}

.pre-tab {
	-moz-tab-size: 4;
	tab-size: 4;
	margin: 6px;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11.5px;
}

.ct-css, .green-color, .blue-color, .brown-color {
	font-family: monospace;
	font-weight: bold;
}

.padding0 {
	padding: 0;
}

.green-color {
	color: green;
}

.blue-color {
	color: blue;
}

.brown-color {
	color: brown;
}

.box {
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
}

.margin-left {
	margin-left: 9%;
}

.div-border {
	margin: 0;
	padding: 0;
	width: 35px;
	min-height: 24px;
	text-align: center;
	display: inline-block;
	border: 2px solid gray;
	font-size: 11px;
}

.left-radius {
	border-right: none;
	border-color: blue;
	border-radius: 6px 0 0 6px;
	font-size: 10px;
	width: 65px;
}

.right-radius {
	border-color: green;
	border-radius: 0 6px 6px 0;
}

.position-css {
	display: inline-block;
	position: relative;
}

.btn-success {
	padding: 1px 7px;
	font-family: monospace;
	display: none;
}

.output-console-title-bar {
	border-radius: 8px 8px 0px 0px;
	font-weight: bold; 
}

.output-console-body {
	height: 200px;
	border-radius: 0px 0px 8px 8px;
	padding: 10px;
	white-space: initial;
	font-size: 11.5px;
}

.user-btn {
	background-color: green;
}

</style>
</head>
<body>

<script type="text/javascript">
	$(document).ready(function() {
		josephusProblemReady();
	});
</script>
<div class="col-xs-12 margin-top15"> 
	<div class="col-xs-12 text-center">
		<h1 class="label ct-demo-heading" id="headingSection">Josephus Problem</h1>
	</div>
	<div class="col-xs-12 margin-top15 padding0">
		<div class="col-xs-4 border-css padding0 opacity00" id="codeDiv">
		<div class="text-center" style="margin-top: 5px;"><span id="includeBtn" class="btn btn-success">Struct List</span></div>
<div id="includePre"><pre class="pre-tab">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#define max 20
struct list {
	char name[10];
	struct list *next;
};
typedef struct list *node;</pre></div>
<pre class="pre-tab hide" id="mainPre">int main() {
	node q, temp, first;
	first = NULL;
	char *end = "end";
	char sname[10];
	int i, n;
	printf("Enter Name of Soldier : ");
	scanf("%s", sname);
	while(strcmp(sname, "end") != 0) {
		temp = (node)malloc(sizeof(struct list));
		strcpy(temp -> name, sname);
		temp -> next = NULL;
		if (first == NULL) {
			first = temp;
		} else {
			q -> next = temp;
		}
		q = temp;
		printf("Enter Name of Soldier : ");
		scanf("%s", sname);
	}
	q -> next = first;
	printf("The Original Soldiers List is --> ");
	print(first);
	printf("Enter a Value : ");
	scanf("%d", &n);
	while(first != first -> next) {
		for(i = 1; i < n; i++) {
			q = first;
			first = first -> next;
		}
		q -> next = first -> next;
		printf("The Eliminated Soldier is --> %s\n", 
						first -> name);
		free(first);
		first = q -> next;
	}
	printf("The Escaped Soldier is  -->  %s\n",
					 first ->name);
}</pre>
		</div>
		<div class="col-xs-8">
			<div class="col-xs-12 padding0">
				<div class="col-xs-12 border-css opacity00" id="animationDiv">
					<div class="col-xs-12 margin-top15" id="variablesDiv">
						<div class="col-xs-1 text-center padding0 opacity00" id="firstMain">
							<div class="col-xs-12 green-color padding0">first<sub>main</sub></div>
							<div class="col-xs-12 box"><span id="firstValMain" class="green-color opacity00">1248</span></div>
						</div>
					</div>
					<div class="col-xs-12 padding0" id="nodesDiv">
						<div class="col-xs-12 margin-top25 padding0" id="listNodesDiv" style="font-size: 12px;">
							<div class="col-xs-12 padding0" id="row1" style="min-height: 55px;"></div>
							<div class="col-xs-12 padding0" id="row2"></div>
						</div>
						<div class="col-xs-12 margin-top25" id="variableNodesDiv" style="margin-bottom: 10px;"></div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 padding0">
<pre class="pre-tab hide" id="printPre">void print(node first) {
	node q = first;
	do {
		printf(" --> %s ", q -> name);
		q = q -> next;
	} while(q != first);
	printf("NULL\n");
}</pre>
			</div>
			<div class="col-xs-12 console padding0 opacity00" id="outputDiv">
				<div class="output-console-title-bar">Output</div>
				<div class="output-console-body" id="output"></div>
			</div>
		</div>
	</div>
</div>
</body>
</html>