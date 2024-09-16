var PriceMen = document.querySelector("p.priceM")
var PriceYea = document.querySelector("p.priceG")
var menuBod = document.querySelectorAll("button.tempO").forEach((item, index)=>{

    item.onclick = () =>{

        document.querySelectorAll("button.tempO").forEach((item, index)=>{
            item.classList.remove("selc")
        })

        item.classList.add("selc");
        if(item.innerText == "Plano Mensal" || item.innerText == "Monthly Plan"){
            PriceMen.innerText = "29,99/mo"
            PriceYea.innerHTML = "49,99/mo"
        }else{
            PriceMen.innerText = "299,99/mo"
            PriceYea.innerHTML = "499,99/mo" 
        }
    }

});

