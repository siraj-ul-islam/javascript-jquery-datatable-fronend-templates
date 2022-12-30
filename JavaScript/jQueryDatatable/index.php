<?php
$con=mysqli_connect('localhost','root','','northwind');
$res=mysqli_query($con,"select * from customer");
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dynamic Datatable</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="//cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css" rel="stylesheet">
</head>
<body>
	<div class="container" style="margin-top:50px;">
	  <table class="table table-striped">
		<thead>
			<tr>
				<th>Company Name</th>
				<th>Name</th>
				<th>Title</th>
				<th style="display:none;">Address</th>
				<th>City</th>
			</tr>
		</thead>
		<tbody>
			<?php while($row=mysqli_fetch_assoc($res)){?>
			<tr>
				<td><?php echo $row['company_name']?></td>
				<td><?php echo $row['name']?></td>
				<td><?php echo $row['title']?></td>
				<td style="display:none;"><?php echo $row['address']?></td>
				<td><?php echo $row['city']?></td>
			</tr>
			<?php } ?>
		</thead>
	  </table>
   </div>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" ></script>
  <script src="//cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
  <script>
  $(document).ready( function () {
		$('.table').DataTable();
  });
  </script>
</body>
</html>