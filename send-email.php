<?php

// Recipient
$to = "abhusha@gmail.com"; 
 
// Sender 
$from = "abhushaghimire@gmail.com";
$returnpath = "-f" . $from;
$msg = "Peter Zhang, your email has successfully been subscribed to the Forecasting Enrollment alerting system. \nInventory Update: 50 kits. Forecasted Amount: 52 kits. No need to order more kits for now. \nMonthly Forecasting: 7 recruits predicted for this month.";
$msg = wordwrap($msg, 70);
$subject = "Forecast Enrollment Alerts"

$mail = mail($to, $subject, $message, $returnpath);

?>