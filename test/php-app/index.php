<?php require_once __DIR__ . '/config.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Payment Test</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>PHP Payment Test</h1>
        </header>
        
        <main>
            <div class="payment-box">
                <h2>Sample Product</h2>
                <p>Price: ₹500.00</p>
                <div id="payment-form">
                    <button id="pay-button" class="payment-button">Pay Now</button>
                </div>
            </div>
        </main>
    </div>

    <!-- Move scripts to end of body -->
    <script src="../../dist/cyg.umd.js"></script>
    <script>
        // Debug check for Cyg availability
        console.log("Cyg object:", Cyg); // Use Cyg directly, not window.Cyg

        document.getElementById('pay-button').addEventListener('click', function() {
            // Create new instance using Cyg directly
            const cyg = new window.Cyg({
                key_id: '<?php echo MERCHANT_KEY; ?>'
            });

            cyg.open({
                amount: 50000, // amount in paise
                currency: "INR",
                name: "Test Corp",
                description: "Test Transaction",
                handler: function(response) {
                    console.log("Payment ID:", response.razorpay_payment_id);
                    if (response.razorpay_payment_id) {
                        window.location.href = 'process_payment.php?payment_id=' + response.razorpay_payment_id;
                    }
                },
                modal: {
                    ondismiss: function() {
                        console.log("Payment modal closed");
                    }
                }
            });
        });
    </script>
</body>
</html>