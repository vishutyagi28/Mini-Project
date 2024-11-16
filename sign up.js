<script>
function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

let generatedOtp = "";

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('signup-password').value;
    const signupPasswordError = document.getElementById('signupPasswordError');
    const email = document.getElementById('signup-email').value;
    const mobile = document.getElementById('signup-mobile').value;
    
    if (validatePassword(password)) {
        signupPasswordError.style.display = 'none';

        // Simulate sending OTP
        generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
        alert(`OTP sent to ${email} and ${mobile}: ${generatedOtp}`);
        
        document.getElementById('otpSection').style.display = 'block';
    } else {
        signupPasswordError.style.display = 'block';
    }
});

document.getElementById('verifyOtp').addEventListener('click', function () {
    const enteredOtp = document.getElementById('otp').value;
    const otpSuccess = document.getElementById('otpSuccess');
    const otpError = document.getElementById('otpError');

    if (enteredOtp === generatedOtp) {
        otpSuccess.style.display = 'block';
        otpError.style.display = 'none';
        alert('Sign up complete!');
    } else {
        otpError.style.display = 'block';
        otpSuccess.style.display = 'none';
    }
});

// document.getElementById('switchToLogin').addEventListener('click', function (e) {
//     e.preventDefault();
//     alert('Login functionality is not implemented in this example.');
// });
</script>