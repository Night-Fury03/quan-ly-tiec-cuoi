let listCart = [];
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();

document.getElementById("appointment-time").value = localStorage.getItem('appointmentTime');
document.getElementById("meeting-time").value = localStorage.getItem('meetingTime');
  document.getElementById("confirmButton").onclick = function() {
        var appointmentTime = document.getElementById('appointment-time').value;
        var meetingTime = document.getElementById('meeting-time').value;
        localStorage.setItem('appointmentTime', appointmentTime);
        localStorage.setItem('meetingTime', meetingTime);
        window.location.reload();
    };
  document.getElementById("cancelButton").onclick = function() {
      localStorage.removeItem('appointmentTime');
      localStorage.removeItem('meetingTime');
      document.getElementById("appointment-time").value = "";
      document.getElementById("meeting-time").value = "";
      window.location.reload();

  };


function createCheckoutForm() {
    let checkoutForm = document.getElementById('checkoutForm');
  
    if (listCart && listCart.length > 0) {
  
      let validProducts = listCart.filter(product => product !== null);
  
      if (validProducts.length > 0) {
        let total = 0; 
        let types = ['Sảnh cưới', 'Thực đơn đã chọn', 'Dịch vụ đã chọn'];
  
        types.forEach((type) => {
          let typeTitleDiv = document.createElement('div');
          typeTitleDiv.innerHTML = `<h2>${type}</h2>`;
          
          let typeProducts = listCart.filter((product) => (
            product && product.type && product.type.toLowerCase().replaceAll(' ', '') === type.toLowerCase().replaceAll(' ', '')
          ));
          
          typeProducts.forEach((product) => {
            total = total + (product.price * product.quantity);
            let productDiv = document.createElement('div');
            productDiv.classList.add('item');
            productDiv.innerHTML = 
            `<img src="${product.image}">
             <div class="info">
                <div class="name">${product.name}</div>
                <div class="price">$${product.price}</div>
            </div>
            <div class="quantity">SL: ${product.quantity}</div>
            <div class="returnPrice">$${product.price * product.quantity}</div>`;
            typeTitleDiv.appendChild(productDiv);
          });
  
          checkoutForm.appendChild(typeTitleDiv);
        });

        let totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<div class="total-price">Tổng thanh toán: $${total}</div>`;
        checkoutForm.appendChild(totalDiv);

      } else {
        let noProductDiv = document.createElement('div');
        noProductDiv.innerHTML = `<p>Chưa có dịch vụ nào được đăng ký</p>`;
        checkoutForm.appendChild(noProductDiv);
      }
    }
  }
  
  createCheckoutForm();
