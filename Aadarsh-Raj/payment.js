const form = document.querySelector("form");
form.addEventListener("keyup", ()=>{
  const amountToBePaid = form.children[1].value;
initializeRazorpay(amountToBePaid);
});
function initializeRazorpay(amountToBePaid) {
  var options = {
    key: 'rzp_test_KMSATkL0yiCOMy',
    amount: amountToBePaid * 100,
    currency: 'INR',
    name: 'Arya Funds',
    description: 'Payment for your product or service',
    image: 'https://scalebranding.com/wp-content/uploads/2022/02/Thunder-Lion-Energy-Logo.jpg',
    handler: function (response) {
      // alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
    },
    prefill: {
      name: 'Aadarsh Raj',
      email: 'aryaraj.dev.js.com',
      contact: '9876543210',
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#191734',
    },
  };
  var rzp = new Razorpay(options);
  document.getElementById('rzp-button1').onclick = function (e) {
    if(amountToBePaid < 100){
      alert("Minimum value should be 100");
      return;
    }
    rzp.open();
    e.preventDefault();
  };
}