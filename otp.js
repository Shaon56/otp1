$(document).ready(function() {
  $('#otpForm').submit(function(e) {
    e.preventDefault();

    var otp = $('#otp').val();

    // Add your OTP verification logic here

    // Redirect to success page or perform desired actions after successful OTP verification
    location.href = 'success.html';
  });
});
