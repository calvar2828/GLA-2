
let data=[];// declare de array here and then fill it with the fetch. its a global variable so i can sort it later

//get the data with fetch 
async function fetchData(){
    try{
        const response =await fetch('https://fakestoreapi.com/products');
        data = await response.json();
        displayData(data)// I should have my dislay function here
    }
    catch(error){
        console.error('Error al obtener los datos:', error);
        document.getElementById('products').innerHTML = "Error al cargar los datos.";
    }
}

//function to display the data so i can call it in the sort function 
function displayData(products){
    const container = document.getElementById('products');
    container.innerHTML= '' //to cleand the content 

    for(let i in products){
        const productItem=document.createElement('div');
        productItem.classList.add('product-item')

        productItem.innerHTML=`
        <img src="${products[i].image}" id="img">
        <div id="product-info">ID:${products[i].id} <br>Title:${products[i].title} <br>Price:${products[i].price}</div>
        `
        container.appendChild(productItem)
    }
}
// sort function 
function sortAsc(){
    data.sort((a,b)=>a.price-b.price)
    displayData(data)
}
function sortDesc(){
    data.sort((a,b)=>b.price-a.price)
    displayData(data)
}


function sortList() {
    let selectedOption = document.getElementById('options').value;
    const container= document.getElementById('products')
    container.innerHTML=''
    for (let i in data){
        if(selectedOption === data[i].category){
            const productItem = document.createElement('div')
            productItem.classList.add('product-item')

            productItem.innerHTML=`
        <img src="${data[i].image}" id="img">
        <div id="product-info">ID:${data[i].id} <br>Title:${data[i].title} <br>Price:${data[i].price}</div>
        `
        container.appendChild(productItem)
        }
        
    }
    if (selectedOption===''){
        displayData(data)
    }
    
}

fetchData();