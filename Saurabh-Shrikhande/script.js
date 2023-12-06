let month = (new Date()).getMonth() + 1;
document.getElementById("curDate").innerText = ("0" + (new Date()).getDate()).slice(-2) + "/" + ("0" + month).slice(-2) + "/" + (new Date()).getFullYear();

let currencyid = document.getElementById("currency");
let currency = currencyid.value;
// console.log(currency);

let arr1 = [];

let card =  document.getElementById("card");
let btn = document.getElementById("btn");


/* item add & delete functionality */ 
function form_card (){
    let currency = document.getElementById("currency").value;
    console.log(currency);
    let a0 = document.createElement("div");
    let a = document.createElement("div");
    a.classList.add("flex", "carditems");
    let b =  document.createElement("div");
    b.classList.add("flex1");
    let c = document.createElement("input");
    c.type = "text"
    c.classList.add('mb' , 'bg' , 'w');
    c.placeholder = "Item Name";
    c.required = true;
    let d = document.createElement("input");
    d.type = "text"
    d.classList.add('mb' , 'bg' , 'w');
    d.placeholder = "Item Name";
    d.required = true;
    b.append(c);
    b.append(d);
    a.append(b);
    let e = document.createElement("input");
    e.classList.add('mb' , 'bg' , 'w45' , 'qty');
    e.type = "number";
    e.value = 0;
    a.append(e);
    let f =  document.createElement("h3"); 
    f.classList.add("bg" , "right");
    let g = document.createElement("span");
    g.classList.add("bround" , "curry");
    g.innerText = currency;
    
    arr1.push(g);
    
    f.append(g);
    a.append(f);
    let h = document.createElement("input");
    h.classList.add('bg' , 'left' , 'w100' , 'rate');
    h.type = "number";
    h.value = 0;
    a.append(h);
    let i = document.createElement("div");
      
    i.addEventListener("click", (el) => {     
     i.parentElement.parentElement.remove();
     subtotaleverytime();
    })  //() => {}
    i.innerHTML = ` <svg class="bgred"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-white mt-1 btn btn-danger" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="height: 33px; width: 33px; padding: 7.5px;"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path></svg>`;  
      
    a.append(i); 

     a0.append(a);
     let hr = document.createElement("hr");
     a0.append(hr);
     card.append(a0);
     subtotaleverytime();
     
    //  <div>
    //  <div  class="flex">
    //       <div class="flex1 carditems">
    //       <input class="mb bg w" type="text" placeholder="Item Name" required> <br>
    //       <input class="mb bg w" type="text" placeholder="Item description" required>
    //       </div>
    //       <input class="mb bg w45" type="number" value="1" name="" id="">
    //       <h3 class="bg right"><span class="bround">$</span></h3>
    //       <input class="bg left w100" type="number" value="1.00">
    //      <div>
    //       <svg class="bgred"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-white mt-1 btn btn-danger" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="height: 33px; width: 33px; padding: 7.5px;"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path></svg>
    //      </div>
    //      </div> 
    //      <hr>
    //   </div>    
   
    // strfinal += str;
    // card.innerHTML = strfinal;

}

form_card();

btn.addEventListener("click",(ele) => {
    ele.preventDefault();
      form_card(); 
 })

   /*additional functionality currency*/ 
  currencyid.addEventListener("change" , funcurrrr)
  function funcurrrr (){
    // console.log("change")
    let currency = document.getElementById("currency").value;
   /* arr1.forEach(element => {             //no need provide class at the time of adding card.
        element.innerText= currency;
    }); */
     let curry = document.getElementsByClassName("curry");
     Array.from(curry).map(element => {
      element.innerText= currency;
     }) 
  }

     /* Calculate Subtotal, total with additional functionality tax & discount */
  function subtotaleverytime(){
   let total = 0;
  let qty = document.getElementsByClassName("qty");
  let rate = document.getElementsByClassName("rate");
  function funsubtotal (){
        total = 0;
    if(qty.length === 0){
      document.getElementById("subto").innerText = total;
    }
    for(let i = 0; i < qty.length; i++){
        total += parseFloat(Array.from(qty)[i].value) * parseFloat(Array.from(rate)[i].value);
        document.getElementById("subto").innerText = total;
        document.getElementById("subtotalamto").innerText = total;
        let tax = document.getElementById("tax").value;
        document.getElementById("taxp").innerText ="(" + tax + "%)" ; 
       let discount = document.getElementById("discount").value;
       document.getElementById("disp").innerText ="(" + discount+ "%)" ; 
       tax != 0 ? tax = total*tax/100 : tax = 0;
      document.getElementById("taxamt").innerText = tax;
      document.getElementById("taxamto").innerText = tax;
       discount != 0 ? discount = total*discount/100 : discount = 0;
       document.getElementById("disamt").innerText = discount;
       document.getElementById("discountamto").innerText = discount;
       let tot = total + tax - discount; 
        document.getElementById("tot").innerText = tot;
        document.getElementById("amtdueo").innerHTML = tot;
        document.getElementById("totalamto").innerHTML = tot;
    }
  } 
  
  /*whenever change qty */
  Array.from(qty).map(e => {
      e.addEventListener("change", funsubtotal); 
    })

    /*whenever change rate */
    Array.from(rate).map(e => {
      e.addEventListener("change", funsubtotal); 
    })

    funsubtotal();
  };
  subtotaleverytime();


          /*  tax Change  - additional functionality*/     
  document.getElementById("tax").addEventListener("change",() => {
    subtotaleverytime();
  })
        /* discount Change - additional functionality*/
  document.getElementById("discount").addEventListener("change",() => {
    subtotaleverytime();
  })
  


  /* Second page - load page 2  */
  function loadPage2 (){
        document.getElementById("displayy").style.display = 'block';

     document.getElementById("namefromo").innerText =  document.getElementById("namefrom").value;
      document.getElementById("invoicenum").innerText = document.getElementById("invoicenum").value;
       

      document.getElementById("nametoo").innerText = document.getElementById("nameto").value;
      document.getElementById("addtoo").innerText = document.getElementById("addto").value;
      document.getElementById("emailtoo").innerText = document.getElementById("emailto").value;

      document.getElementById("namefromo2").innerText = document.getElementById("namefrom").value;
      document.getElementById("addfromo").innerText = document.getElementById("addfrom").value;
      document.getElementById("emailfromo").innerText = document.getElementById("emailfrom").value;
    
      document.getElementById("duedateo").innerText = document.getElementById("duedate").value;

       /* append item name discription */
       let carditems = document.querySelectorAll(".carditems");
       let contu = document.getElementById("contu");
       contu.innerHTML = "";
        carditems.forEach(element => {
          let val1 = element.childNodes[1].value;
           let val2 = element.childNodes[0].childNodes[0].value;
           let val3 = element.childNodes[0].childNodes[1].value;
          let val4 = element.childNodes[3].value;
          
        let cdiv = document.createElement("div");
             cdiv.innerHTML =  
             `<div class="flex jsb fgap">
               <h4 class="m5 minline fontw">${val1}</h4>
               <h4 class="flex1 m5 fontw"><Span>${val2}</Span> - <span>${val3}</span></h4>
               <h4 class="m5 w70 fontw"><span class="curry">$ </span><span>${val4}</span></h4>
               <h4 class="m5 fontw"><span class="curry">$ </span><span>${val1 * val4}</span></h4>
            </div>
            <hr>`
             contu.append(cdiv);
            let dise = document.getElementById("displayy");
            dise.style.display = 'block';
             dise.addEventListener("click",(e) => {
               let disq = document.getElementById("disq");
                if(e.target == disq){
                  console.log("click");
                  dise.style.display = 'none';
                  document.getElementById('formfill').style.display = 'flex';
                }
                else{
                  console.log("wrongclick");
                }
             })
        });
               funcurrrr();

      }  
    document.getElementById("review").addEventListener("click" , elast => {
      let  formfill = document.getElementById("formfill");
      if(formfill.checkValidity()){
        elast.preventDefault();
        console.log("fill data");
        document.getElementById('formfill').style.display = 'none';
        loadPage2(); 
        
      }
      else{
        return;
      }
    });



   /* Download pdf */
  function fundownloadpdf(){ 
    const content = document.getElementById('content'); 
      html2pdf(content);
  }
  
 let down = document.getElementById("downloadecopy"); 
 
  down.addEventListener("click", fundownloadpdf);

  

  
 



  



