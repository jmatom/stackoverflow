<?php 
	$name = isset($_POST['name']) && isset($_POST['name'][0]) ? $_POST['name'] : 'Guest';
	$suggestion = isset($_POST['suggestion']) && isset($_POST['suggestion'][0]) ? $_POST['suggestion'] : 'No suggestion';
?>

<h2>Process contact form</h2>
<p>Hi <?php echo htmlentities($name); ?>, we received your suggestion:</p>
<p><?php echo htmlentities($suggestion); ?></p>