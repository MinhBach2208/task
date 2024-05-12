const nameInput = document.querySelector("#name");
const button = document.querySelector("button");
const h1 = document.querySelector(".content");
// add event listener
button.addEventListener('click' , ()=>{
    // console.log("hihi");
    // step 1 : nhap thong tin tu the input
    const nameValue = nameInput.value
    //step 2 : an click
    // step 3 : hien thi name value trong giao dien, the h1
    h1.innerHTML = "Xin chao hahah" + nameValue;
    //step 4 xoa thong tin trong input
    nameInput.value="";
    //them class red trong h1
    h1.classList.add("red");
})
// tao 1 form them sp productid, name, price
//hien thi thong tin san pham tren giao dien