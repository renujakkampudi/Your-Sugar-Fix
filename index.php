<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="indexstyle.css">
    <title>Document</title>
</head>
<body>
    <div class="bg-image">
        <img src="" class = "image">
    </div>

    <div class="login">
    <div class="form">
    <h1>Log In</h1>
    <form action="" method="post" name="login" onsubmit="return Login_validation()">
    <input type="text" name="username" id="username" placeholder="Username" required /><br>
    <input type="password" name="password" id="password" placeholder="Password" required />
    <br>
    <input name="submit" type="submit" value="Login" />
    </form>
    <p>Not registered yet? <a href='registration.php'>Register Here</a></p>
    </div>
</body>
<?php
    require('db.php');
    session_start();
    if(isset($_POST['submit'])){
        if (isset($_POST['username']))
        {

            $username = $_REQUEST['username'];
            $password = ($_REQUEST['password']);
        
            $query = "SELECT * FROM `users` WHERE `username`='$username' and `password`='' + '$password'";
            $result = mysqli_query($conn,$query) or die(mysqli_error($conn));
            $rows = mysqli_num_rows($result);
            if($rows==1){
                $_SESSION['username'] = $username;
                header("Location: HomePage.html");
            }
            else{
                echo "<div class='form'>
                <h3>Username/password is incorrect.</h3>
                <br/>Click here to <a href='index.php'>Login</a></div>";

            }
        }
}
?>

<script src="LoginRegistrationScript.js"></script>
</html>
