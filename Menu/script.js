let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

iconCart.addEventListener('click', function(){
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    }else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})
close.addEventListener('click', function (){
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})


let Menus = null;
fetch('/Menu/Menus.json')
    .then(response => response.json())
    .then(data => {
        Menus = data;
        addDataToHTML();
})

let Appetizers = null;
fetch('/Menu/Appetizers.json')
    .then(response => response.json())
    .then(data => {
        Appetizers = data;
        addDataToHTML();
})

let Mains = null;
fetch('/Menu/Mains.json')
    .then(response => response.json())
    .then(data => {
        Mains = data;
        addDataToHTML();
})

let Desserts = null;
fetch('/Menu/Desserts.json')
    .then(response => response.json())
    .then(data => {
        Desserts = data;
        addDataToHTML();
})

function addDataToHTML(){
    let listMenuHTML = document.querySelector('.listMenu');
    listMenuHTML.innerHTML = '';

    if(Menus != null) 
    {
        Menus.forEach(Menu => {
            let newMenu = document.createElement('div');
            newMenu.classList.add('item');
            newMenu.innerHTML = 
            `<img src="${Menu.image}" alt="">
            <h2>${Menu.name}</h2>
            <div class="price">Giá: $${Menu.price}</div>
            <div class="Menufood">
                <div class="Menu-name">${Menu.KhaiVi}</div>
                <div class="Menu-name">${Menu.Main1}</div>
                <div class="Menu-name">${Menu.Main2}</div>
                <div class="Menu-name">${Menu.Main3}</div>
                <div class="Menu-name">${Menu.Dessert}</div>
            </div>
            <button onclick="addCart(${Menu.id})">Đặt đơn</button>`;

            listMenuHTML.appendChild(newMenu);

        });
    }

    let listAppetizerHTML = document.querySelector('.listAppetizer');
    listAppetizerHTML.innerHTML = '';

    if(Appetizers != null) 
    {
        Appetizers.forEach(Appetizer => {
            let newAppetizer = document.createElement('div');
            newAppetizer.classList.add('item');
            newAppetizer.innerHTML = 
            `<img src="${Appetizer.image}" alt="">
            <h2>${Appetizer.name}</h2>
            <div class="price">Giá: $${Appetizer.price}</div>
            <button onclick="addAppetizer(${Appetizer.id})">Đặt món</button>`;

            listAppetizerHTML.appendChild(newAppetizer);

        });
    }

    let listMainHTML = document.querySelector('.listMain');
    listMainHTML.innerHTML = '';

    if(Mains != null) 
    {
        Mains.forEach(Main => {
            let newMain = document.createElement('div');
            newMain.classList.add('item');
            newMain.innerHTML = 
            `<img src="${Main.image}" alt="">
            <h2>${Main.name}</h2>
            <div class="price">Giá: $${Main.price}</div>
            <button onclick="addMain(${Main.id})">Đặt món</button>`;

            listMainHTML.appendChild(newMain);

        });
    }

    let listDessertHTML = document.querySelector('.listDessert');
    listDessertHTML.innerHTML = '';

    if(Desserts != null) 
    {
        Desserts.forEach(Dessert => {
            let newDessert = document.createElement('div');
            newDessert.classList.add('item');
            newDessert.innerHTML = 
            `<img src="${Dessert.image}" alt="">
            <h2>${Dessert.name}</h2>
            <div class="price">Giá: $${Dessert.price}</div>
            <button onclick="addDessert(${Dessert.id})">Đặt món</button>`;

            listDessertHTML.appendChild(newDessert);

        });
    }
}


let listCart = [];
function checkCart(){
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
    if(cookieValue){
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }else{
        listCart = [];
    }
}
checkCart();
function addCart($idMenu){
    let MenusCopy = JSON.parse(JSON.stringify(Menus));
    if(!listCart[$idMenu]) 
    {
        listCart[$idMenu] = MenusCopy.filter(Menu => Menu.id == $idMenu)[0];
        listCart[$idMenu].quantity = 1;
    }else{
        
        listCart[$idMenu].quantity++;
    }

    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

    addCartToHTML();
}

function addAppetizer($idAppetizer){
    let AppetizersCopy = JSON.parse(JSON.stringify(Appetizers));
    if(!listCart[$idAppetizer]) 
    {
        listCart[$idAppetizer] = AppetizersCopy.filter(Appetizer => Appetizer.id == $idAppetizer)[0];
        listCart[$idAppetizer].quantity = 1;
    }else{
        
        listCart[$idAppetizer].quantity++;
    }
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

    addCartToHTML();
}


function addMain($idMain){
    let MainsCopy = JSON.parse(JSON.stringify(Mains));
    if(!listCart[$idMain]) 
    {
        listCart[$idMain] = MainsCopy.filter(Main => Main.id == $idMain)[0];
        listCart[$idMain].quantity = 1;
    }else{
        
        listCart[$idMain].quantity++;
    }
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

    addCartToHTML();
}


function addDessert($idDessert){
    let DessertsCopy = JSON.parse(JSON.stringify(Desserts));
    if(!listCart[$idDessert]) 
    {
        listCart[$idDessert] = DessertsCopy.filter(Dessert => Dessert.id == $idDessert)[0];
        listCart[$idDessert].quantity = 1;
    }else{
        
        listCart[$idDessert].quantity++;
    }
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

    addCartToHTML();
}



addCartToHTML();
function addCartToHTML(){
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;

    if(listCart){
        listCart.forEach(Menu => {
            if(Menu){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${Menu.image}">
                    <div class="content">
                        <div class="name">${Menu.name}</div>
                        <div class="price">$${Menu.price * Menu.quantity}</div>
                    </div>

                    <div class="quantity">
                        <button onclick="changeQuantity(${Menu.id}, '-')">-</button>
                        <span class="value">${Menu.quantity}</span>
                        <button onclick="changeQuantity(${Menu.id}, '+')">+</button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + Menu.quantity;
            }
        })
    }

    totalHTML.innerText = totalQuantity;
}
function changeQuantity($idMenu, $type){
    switch ($type) {
        case '+':
            listCart[$idMenu].quantity++;
            break;
        case '-':
            listCart[$idMenu].quantity--;

            if(listCart[$idMenu].quantity <= 0){
                delete listCart[$idMenu];
            }
            break;
    
        default:
            break;
    }
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    addCartToHTML();
}