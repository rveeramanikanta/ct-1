<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>HTML CSS Status Sheet</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/custom-styles.css">
<link rel="stylesheet" href="/css/font-awesome.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>

<script type="text/javascript">


	function opendialog(className, url, width, height) {
		if (width == undefined) {
			width = 600;
		} else {
			width = jQuery(window).width() * width;
		}
		if (height == undefined) {
			height = 400;
		} else {
			height = jQuery(window).height() * height;
		}
		var $dialog = $('#javaDocBrowserDiv').html(
				'<iframe id="javaDocIFrame" style="border: 0px; " src="' + url
						+ '" width="100%" height="100%"></iframe>').dialog({
			title : className,
			autoOpen : false,
			dialogClass : 'dialog_fixed ui-widget-header jqueryUIPopupDialog',
			modal : false,
			height : height,
			minWidth : width,
			minHeight : height,
			draggable : true
		});
		$dialog.dialog('open');
		$dialog.closest('.ui-dialog').css("z-index", "1043");
	}
</script>

</head>
<body>
	<div id="javaDocBrowserDiv"></div>
	<div class='container'>

		<div class='well text-center' style='margin-top: 40px;'>
			<h1>HTML & CSS Interactive Video's</h1>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-1 HTML Introduction</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-2 Basic Page Structure</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Structure of HTML Page</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Structure of HTML Page', 'structure-of-html-page.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Structure of HTML Page</td>
						<td>Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>h1 - h6 tags</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('h1-h6 tags', 'heading-tags.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; h1-h6 tags</td>
						<td>Mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-3 CSS Introduction</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Inline Style Sheet HTML</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Inline Style Sheet', 'inline-style-sheet-html.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Inline Style Sheet HTML</td>
						<td>Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<!-- <tr>
						<td>2</td>
						<td>Inline Style Sheet</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Inline Style Sheet', 'inline-style-sheet.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Inline Style Sheet</td>
						<td>Mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr> -->



					<tr>
						<td>2</td>
						<td>Internal Style Sheet With Attributes</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Internal Style Sheet With Attributes', 'internal-style-sheet-with-attributes.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Internal Style Sheet With Attributes</td>
						<td>Mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>3</td>
						<td>External Style Sheet</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('External Style Sheet', 'external-style-sheet.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; External Style Sheet</td>
						<td>Mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-4 Content Formatting</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td> Paragraph Tag</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Paragraph Tag', 'paragraph-tag.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Paragraph Tag</td>
						<td>Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Break Tag</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Break Tag', 'break-tag.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Break Tag<br>
						<td>Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>3</td>
						<td>Alignments</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Alignments', 'alignments.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Alignments</td>
						<td>Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>4</td>
						<td>Borders</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Borders', 'borders.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Borders</td>
						<td>Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Font and Color</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Font and color', 'font-and-color.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Font and Color</td>
						<td>Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Formatting Tags</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Formatting Tags', 'formatting-tags.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Formatting Tags</td>
						<td>Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Margins and Padding</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Margins and Padding', 'margins-and-padding.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Margins and Padding</td>
						<td>Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-5 Basic Selectors</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
				<tr>
						<td>1</td>
						<td>Class Id Selector</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Class Id Selector', 'class-id-selector.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; class-id selectors</td>
						<td>Durga Mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-6 Creating Links - 1</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Links - 1</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Links - 1', 'links-1.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Links - 1</td>
						<td>Mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Links - 2</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Links - 2', 'links-2.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Links - 2</td>
						<td>Mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<!-- <tr>
						<td>3</td>
						<td>Links - 3</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Links - 3', 'links-3.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Links - 3</td>
						<td>Mallika</td>
						<td></td>
						<td>Work In Progress</td>
						<td></td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Menus</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Links - 3', 'menus.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Menus</td>
						<td>Mallika</td>
						<td></td>
						<td>Not yet started</td>
						<td></td>
					</tr> -->

				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-7 Working with Images</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Images Tag</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Images Tag', 'images-tag.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Images Tag</td>
						<td>Padmaja</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>2</td>
						<td>Images with Style Tag</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Images with Style Tag', 'image-with-style-tag.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Images with Style Tag</td>
						<td>Padmaja</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>3</td>
						<td>Images with Float</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Images with Float', 'images-with-float.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Images with Float</td>
						<td>Padmaja</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>4</td>
						<td>Images with Opacity</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Images with Opacity', 'image-with-opacity.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Images with Opacity</td>
						<td>Padmaja</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-8 Working with Lists</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Types of List</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Types of List', 'types-of-lists.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Types of List</td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>2</td>
						<td>Nested List</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Nested List', 'nested-lists3.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Nested List</td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Styling Different Types of Lists</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Styling Different Types of Lists', 'styling-different-types-of-lists.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Styling Different Types of Lists</td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-9 Working with Tables</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Tables-1</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Tables-1', 'table-1.0.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Tables-1</td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>2</td>
						<td>Tables-2</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Tables-2', 'table-2.1.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Tables-2</td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Tables-3</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Tables-3', 'tables-3.0.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Tables-3</td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-10 Attribute Selectors</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Attribute selectors</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Tables-1', 'attribute-selectors.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Attribute selectors</td>
						<td>Durga Mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-11 Working with forms</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
				<tr>
						<td>1</td>
						<td>html inputs 1</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Html input types', 'html-input-types-1.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; html input 1</td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>html inputs 2</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Html input types', 'html-input-types-2.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; html inputs 2</td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>form elements</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Form elements', 'form-elements99.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; form elements</td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-12 Pseudo-Class Selectors</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
				<tr>
						<td>1</td>
						<td>pseudo before after elements</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('pseudo before after first-line first-letter', 'pseudo-before-after.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; pseudo before after</td>
						<td>durga mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>pseudo :empty :not</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('pseudo before after first-line first-letter', 'pseudo-empty-not.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; pseudo :empty :not</td>
						<td>durga mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-13 Structural Selectors</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
				<tr>
						<td>1</td>
						<td>pseudo first last element</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('pseudo before after first-line first-letter', 'pseudo-first-last-element.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; pseudo first last</td>
						<td>durga mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Only child type</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('pseudo before after first-line first-letter', 'only-child-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; only child type</td>
						<td>durga mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>nth child type</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('nth selector', 'nth-selector-final1.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; nth child type</td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>nth of type</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('nth selector', 'nth-selector-final2.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; nth of type</td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-14 Combinators</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
				<tr>
						<td>1</td>
						<td>combinator selectors 1</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('combinator selectors 1', 'basic-selector-combinators-part1.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Basic Selectors - 1</td>
						<td>Durga Mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>2</td>
						<td>combinator selecotors 2</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('combinator selecotors 2', 'basic-selector-combinators-part2.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Basic Selectors - 2</td>
						<td>Durga Mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-15 Structuring Content</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Page Layout Using Semantic Elements</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Page Layout Using Semantic Elements', 'page-layout-using-semantic-elements.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Page Layout Using Semantic Elements</td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Building Two Column Layout</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Building Two Column Layout', 'building-two-column-layout.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Building Two Column Layout</td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Multiple Column Layout</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Multiple Column Layout', 'multiple-column-layout.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Multiple Column Layout</td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>Frames</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Frames', 'frames.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Frames</td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

		</div>
	</div>
</body>
</html>
