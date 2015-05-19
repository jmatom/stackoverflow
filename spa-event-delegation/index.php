<!DOCTYPE html>
<html>
<head>
	<title>SPA Event Delegation</title>
</head>
<body>
	<nav class="menu">
		<ul>
			<li><a href="home.php">Home</a></li>
			<li><a href="contact.php">Contact</a></li>
		</ul>
	</nav>

	<div id="module-wrapper"></div>

<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script>
(function() {
	var $moduleWrapper = $('#module-wrapper');

	var loadIntoModuleWrapper = function(e) {
		e.preventDefault();

		var $anchor = $(this);
		var page = $anchor.attr('href');

		$moduleWrapper.load(page);
	};

	var sendFormAndLoadIntoModuleWrapper = function(e) {
		e.preventDefault();

		var $form = $(this);
		var method = $form.attr('method') || 'GET';

		$.ajax({
			type: $form.attr('method') || 'GET',
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(data) {
				$moduleWrapper.html(data);
			}
		});
	};

	// manage menu links to load content links onto module wrapper
	$('.menu').on('click', 'a', loadIntoModuleWrapper);

	// manage module-wrapper links to load onto module wrapper
	$moduleWrapper.on('click', '.open', loadIntoModuleWrapper);

	// manage submits form and load result onto module wrapper
	$moduleWrapper.on('submit', '.open-form', sendFormAndLoadIntoModuleWrapper);
}());
</script>
</body>
</html>