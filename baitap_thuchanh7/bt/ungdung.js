//<tr><td>newProduct</td><td><button>Edit</button></td><td><button>Delete</button></td>
let data = [];
let seri = 0;
// document.getElementById('numberProducts').innerHTML = data.length + ' products';

function addProduct() {
    let input = document.getElementById('newProduct');
    data[seri] = input.value;
    seri++;
    display();
}

function editProduct(seriEdit) {
    data[seriEdit] = prompt('Nhập tên mới cho sản phẩm');
    display();
}

function deleteProduct(seriDelete) {
    data.splice(seriDelete, 1);
    display();
}

function display() {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';
    for (let i in data) {
        productList.innerHTML += '<tr><td>' + data[i] + '</td><td><button onclick="editProduct(' + i + ')">Edit</button></td><td><button onclick="deleteProduct(' + i + ')">Delete</button></td>';
    }
    document.getElementById('numberProducts').innerHTML = data.length + ' products';
}