const nameInput = document.querySelector("#name");
const productidInput = document.querySelector("#productID");
const priceInput = document.querySelector("#price")
const button = document.querySelector("button");
const h1 = document.querySelector(".content")
button.addEventListener('click', (e)=>{
    e.preventDefault()
    const nameValue = nameInput.value;
    const productidValue = productidInput.value;
    const priceValue = priceInput.value;
   const task={
    name : nameValue,
    createdAt : productidValue,
    id: priceValue,
   }
   fetch('https://658681bd468ef171392e5320.mockapi.io/bachquangminh/Task', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(task)
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
})