<?php

require_once "/var/www/cremesp.com/common/fpdf153/fpdf.php";

exportPDF("");

function exportPDF($html)
{
    $pdf = new FPDF('P','mm','A4');
    $pdf->AddPage();
    $pdf->Image('images/notification_header_transparency.png', 60, 12, 90);
    $pdf->Image('images/temp_notification.jpeg', 40, 60, 132);
    $pdf->Image("images/notification_footer_transparency.png", 25, 270, 155);

    $pdf->Output("notificação.pdf", "D");

    break;
}

?>