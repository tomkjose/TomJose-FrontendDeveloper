<?php

 
$apiUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAM-sUnjZNJUkbzYEzPc0YeI51oeQD4GfM';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    $user_data = [
        'email' => $email,
        'password' => $password,
        'returnSecureToken' => true,
    ];
    
    $options = [
        'http' => [
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($user_data),
        ],
    ];
    
    $context = stream_context_create($options);
    
    $response = file_get_contents($apiUrl, false, $context);
    
    if ($response === false) {
        echo 'Failed to fetch data from the API.';
    } else {
        echo "response" . $response;
    }
}
?>
