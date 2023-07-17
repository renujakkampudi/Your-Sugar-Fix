<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Feedback</title>
    <link rel="stylesheet" href="FeedbackStyles.css" />
  </head>
  <body>
    <section class="content">
      <div class="feedback-description">
        <h1 class="title">Have any questions?</h1>
        <p class="subtitle">Leave a message and we will help!</p>
      </div>
      <form class="feedback-form" method="POST">
        <input class="feedback-form__email" type="email" placeholder="Email" name="email" required="">
        <textarea class="feedback-form__message" cols="30" name="message" placeholder="Message" required="" rows="5"></textarea>
        <button class="feedback-form__submit" name="submit">Submit</button>
      </form>

    </section>
  </body>
</html>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "yoursugarfix";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO feeds (email, msg) VALUES ('$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
