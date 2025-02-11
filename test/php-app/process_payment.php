<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $amount = $_POST['amount'] ?? 0;
    
    // Here you would typically:
    // 1. Validate the amount
    // 2. Create an order in your database
    // 3. Initialize payment gateway
    // 4. Return payment response
    
    $response = [
        'status' => 'success',
        'message' => 'Payment initiated',
        'amount' => $amount,
        'order_id' => uniqid('ORD_')
    ];
    
    // For demonstration, we're just sending back a JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

// If not POST request, redirect to home page
header('Location: index.php');
exit;
?>