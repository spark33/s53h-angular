<!-- This is the back-end file for Seoul 53 Hotel's web app. -->

<!-- Organizes reservation information and sends e-mail to administrator. -->

<?php
  $data = json_decode(file_get_contents("php://input"));
  if($data == NULL) header("Location: index.html");
  $name = $data->name;
  $email = $data->email;
  $phone = $data->phone;
  $checkin = $data->checkin;
  $checkout = $data->checkout;
  $room = $data->room;

  $subject = "Reservation from Website for " . $name . "!";
  $message = "Room Type: " . $room . "\n\n";
  $message = $message . "Check-in: " . $checkin . "\n" . "Check-out: " . $checkout . ".\n\n";
  $message = $message . "Email: " . $email . "\nPhone: " . $phone;

  $email = "seanpark1107@gmail.com";

  // mail("seanpark1107@gmail.com", $subject, $message);
  echo $subject . "/n" . $message;

?>