<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Servlets & JSP Status Sheet</title>
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
			<h1>Servlets & JSP Interactive Video's</h1>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-1 Basics</h3>
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
						<td>Client-Server Architecture</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'client-server-architecture.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Client-Server Architecture</td>
						<td>Ajay/Mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>1</td>
						<td>TCP-IP Protocol</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'tcp-ip-protocol.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;TCP-IP Protocol</td>
						<td>Ajay/Mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>1</td>
						<td>DNS</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'domain-name-system.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;DNS-Domain Name System</td>
						<td>Mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-2 HTTP Protocol and Servlets</h3>
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
				<h3>UNIT-3 Servlet Lifecycle</h3>
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
						<td>LifeCycle of a Servlet</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'servlet-life-cycle.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Lifecycle of Servlet</td>
						<td>Suresh/Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>2</td>
						<td>MultiThreaded Servlet</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('Internal Style Sheet With Attributes', 'multi-threading.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; MultiThreaded Servlet</td>
						<td>Mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-4 Understanding Request</h3>
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
						<td> Request Dispatcher</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'request-dispatcher.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Request Dispatcher</td>
						<td>Ajay/Mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-5 Understanding Response</h3>
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
				<h3>UNIT-6 Understanding Session</h3>
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
						<td>Cookies</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'cookies.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Cookies</td>
						<td>Ajay/mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>2</td>
						<td>URL rewriting</td>
						<td><button disabled="disabled" class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'http-session.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</button> &emsp; URL rewriting</td>
						<td>Ajay</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>3</td>
						<td>HTTPSession</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'session.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;HTTPSession</td>
						<td>Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>4</td>
						<td>Hidden Form Fields</td>
						<td><button disabled="disabled" class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'image-with-opacity.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</button> &emsp; Hidden Form Fields</td>
						<td>-----</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-8 Filters, Wrappers & Exceptions</h3>
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
						<td>Filters</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'servlets-filters.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Filters</td>
						<td>Mahesh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-9 Java Server Pages -JSP</h3>
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
						<td>JSP Life cycle</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'jsp-life-cycle.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; JSP life cycle</td>
						<td>Suresh/Poorna</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-10 Understanding Listeners</h3>
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
						<td>Understanding Types of Listeners</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'listeners.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Listener Types</td>
						<td>Ajay</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>1</td>
						<td> How do Listeners work</td>
						<td><a class='btn btn-xs btn-success'
								href="javascript:opendialog('JSP and Servlets', 'listeners-working.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Listener Working Model</td>
						<td>Ajay/Mallika</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-11 Security and Internationalization</h3>
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

			
		
	
</body>
</html>
