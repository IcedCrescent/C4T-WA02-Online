const navbarCart = document.getElementById('cart')
const h1Count = document.getElementById('count') 
const itemContainer = document.querySelector('.all-items')
const h2Total = document.getElementById('total')
const checkoutBtn = document.getElementById('checkout')
const clearBtn = document.getElementById('clear')

// if cart not exists, insert an empty array
if (localStorage.getItem('cart') == null || localStorage.getItem('cart') === '') {
    localStorage.setItem('cart', '[]')
}
let cart = JSON.parse(localStorage.getItem('cart'))

navbarCart.innerText = `🛒 (${cart.length})`
h1Count.innerText = `${cart.length} sản phẩm trong giỏ hàng`

let total = 0

for (const item of cart) {
    let itemDiv = document.createElement('div')
    itemDiv.classList.add('item')
    let img = document.createElement('img')
    img.src = item.img
    itemDiv.appendChild(img)
    let infoDiv = document.createElement('div')
    infoDiv.classList.add('info')
    let h3 = document.createElement('h3')
    h3.innerText = item.name
    let p = document.createElement('p')
    p.innerText = `${item.price.toLocaleString()} đ`
    infoDiv.appendChild(h3)
    infoDiv.appendChild(p)
    itemDiv.appendChild(infoDiv)
    itemContainer.appendChild(itemDiv)
    total += item.price
}

h2Total.innerText = `Tổng: ${total.toLocaleString()} đ`

clearBtn.onclick = clearCart
checkoutBtn.onclick = checkout

function clearCart() {
    let notify = confirm('Bạn có muốn làm sạch giỏ hàng?')
    if (notify == true) {
        localStorage.setItem('cart', '[]')
        location.reload()
    }
}

function checkout() {
    alert('Thanh toán thành công')
    localStorage.setItem('cart', '[]')
    location.href = 'index.html'
}