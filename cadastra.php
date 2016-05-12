<?php
$sv = "";
$user = "";
$pass = "";
$db = "";

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

// Create connection
$conn = new mysqli($sv, $user, $pass, $db);
if ($conn->connect_error) {die("Falha ao conectar: " . $conn->connect_error);} 

if ($result = $conn->query("SELECT * FROM sakey_newsletter WHERE email = '$email'")) {

	// Verifica se existem cadastros com este email.
    $cadastros = $result->num_rows;

	    if($cadastros > 0){
		    echo '0';
		    $result->close();
		}

		else {
			$sql = "INSERT INTO sakey_newsletter (nome, email, telefone) VALUES ('$nome','$email','$telefone')";
			if ($conn->query($sql) === TRUE) {echo '1';}
			$result->close();
		}   
}
?>