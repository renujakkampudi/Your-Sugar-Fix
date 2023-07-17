<!DOCTYPE html>
<html>
<head>
  <title>Profile Page</title>
</head>
<body>
  <h1>Welcome <?php echo $row['name']; ?></h1>
  <table>
    <tr>
      <th>Name</th>
      <td><?php echo $row['name']; ?></td>
    </tr>
    <tr>
      <th>Username</th>
      <td><?php echo $row['username']; ?></td>
    </tr>
    <tr>
      <th>Email</th>
      <td><?php echo $row['email']; ?></td>
    </tr>
  </table>
  <br>
  <a href="Logout.php">Logout</a>
</body>
</html>
<?php
  session_start();
  if (!isset($_SESSION['username'])) {
    header("Location: LoginRegistration.php");
    exit();
  }

  $username = $_SESSION['username'];

  // Connect to database
  $servername = "localhost";
  $username_db = "root";
  $password_db = "";
  $dbname = "customers";
  $conn = new mysqli($servername, $username_db, $password_db, $dbname);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT * FROM customers WHERE username = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();

?>