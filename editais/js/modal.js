$(function() {

	$("#i-export_image").click(function(event) {
		
		html2canvas(document.getElementById("p-notification")).then(function(canvas) {
			
			let crm = document.getElementById("b-crm").innerHTML;
			
			let dataURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
				
			downloadImage(dataURL, 'notificação_' + crm + '.png');
			
		});

	});

	$("#i-export_pdf").click(function(event) {
	 
		html2canvas(document.getElementById("p-notification")).then(function(canvas) {

			dataURL = canvas.toDataURL("image/jpeg",1);
			
			$.ajax({
				type: "POST",
				url: "/common/saveImage.php",
				dataType: 'json',
				cache: false,
				data: {
					image: dataURL
				}
			}).done(function() {
				openInNewTab('/library/modulos/editais/exportHTMLToPDF.php');
			});
		});
	});

});

function downloadImage(data, filename = 'untitled.jpeg') {
	var a = document.createElement('a');
	a.href = data;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
}

function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}