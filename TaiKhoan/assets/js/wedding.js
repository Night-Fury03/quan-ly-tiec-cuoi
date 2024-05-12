
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
console.log(listCart)

function createCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

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

        let startDateDiv = document.createElement('div');
        let startDateLabel = document.createElement('label');
        startDateLabel.textContent = "Ngày bắt đầu: ";
        let startDateInput = document.createElement('input');
        startDateInput.type = "date";
        startDateInput.id = "start-date";
        startDateInput.name = "start-date";
        if (getCookie('startDate')) {
          startDateInput.value = getCookie('startDate');
        }
        startDateDiv.appendChild(startDateLabel);
        startDateDiv.appendChild(startDateInput);
        checkoutForm.appendChild(startDateDiv);

        let paymentTimeDiv = document.createElement('div');
        let paymentTimeLabel = document.createElement('label');
        paymentTimeLabel.textContent = "Thời gian thanh toán:  ";
        let paymentTimeInput = document.createElement('input');
        paymentTimeInput.type = "datetime-local";
        paymentTimeInput.id = "payment-time";
        paymentTimeInput.name = "payment-time";
        if (getCookie('paymentTime')) {
          paymentTimeInput.value = getCookie('paymentTime');
        }
        paymentTimeDiv.appendChild(paymentTimeLabel);
        paymentTimeDiv.appendChild(paymentTimeInput);
        checkoutForm.appendChild(paymentTimeDiv);
  
        let totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<h3>Tổng thanh toán: $${total}</h3>`;
        checkoutForm.appendChild(totalDiv);
  
        let confirmButton = document.createElement('button');
        confirmButton.textContent = 'Xác nhận';
        confirmButton.addEventListener('click', () => {
          let startDate = startDateInput.value;
          let paymentTime = paymentTimeInput.value;
          alert('Sản phẩm sẽ được thanh toán');
          createCookie('startDate', startDate, 7); 
          createCookie('paymentTime', paymentTime, 7); 
        });
        checkoutForm.appendChild(confirmButton);
        let space = document.createElement('span');
      space.innerHTML = '&nbsp;&nbsp;&nbsp;';
      checkoutForm.appendChild(space);
      
        let cancelButton = document.createElement('button');
        cancelButton.textContent = 'Hủy Đăng ký';
        cancelButton.addEventListener('click', () => {
          alert('Đã hủy đăng ký sản phẩm');
        });
        checkoutForm.appendChild(cancelButton);
      } else {
        let noProductDiv = document.createElement('div');
        noProductDiv.innerHTML = `<p>Không có sản phẩm trong giỏ hàng</p>`;
        checkoutForm.appendChild(noProductDiv);
      }
    } else {
      let noProductDiv = document.createElement('div');
      noProductDiv.innerHTML = `<p>Không có sản phẩm trong giỏ hàng</p>`;
      checkoutForm.appendChild(noProductDiv);
    }
  }
  
  createCheckoutForm();