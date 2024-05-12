// xac dinh the input co id la image, category, price, button
const imageInput= document.querySelector("#image")
const categoryInput= document.querySelector("#category")
const priceInput= document.querySelector("#price")
const button= document.querySelector("#btn")
// lay gia tri - value
button.addEventListener('click',
  // ham co mui ten
 (e)=>{
    // lay value cua image
    e.preventDefault();
    const imageValue = imageInput?.value
    const categoryValue= categoryInput.value;
    const priceValue = priceInput.value

    // dong goi du lieu
    const product={
        image: imageValue,
        category: categoryValue,
        price: priceValue,
    }
    // xuat product
  
      
      fetch('https://657e75a13e3f5b189463b9f3.mockapi.io/product/product', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(product)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
      }).catch(error => {
        // handle error
      })
 } 
)