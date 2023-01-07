var productcontainer = [];
if(localStorage.getItem("our_products") != null)
{
    productcontainer =JSON.parse(localStorage.getItem("our_products"));
    display_product()
};


var allProductName =document.getElementById('ProductName');
var allProductPrice =document.getElementById('ProductPrice');
var allProductGatagory =document.getElementById('ProductGatagory');
var allProductDescription =document.getElementById('ProductDescription');


function go ()
{
    if(validatname() == true)
    {
        var product = {
        proName:allProductName.value,
        proPrice:allProductPrice.value,
        proGatagory:allProductGatagory.value,
        proDes:allProductDescription.value,
    };
    productcontainer.push(product);
    localStorage.setItem("our_products" , JSON.stringify(productcontainer))

    clear_Form()
    display_product()
    }
    else
    {
        document.getElementById('wor1').style.color="red";
        document.getElementById('wor1').style.fontSize="18px";

    };

};


function display_product()
{
    var cartoon='';
    for(var i=0; i<productcontainer.length;i++)
    {
        cartoon+=`<tr>
        <td>${i+1}</td>
        <td>${productcontainer[i].proName}</td>
        <td>${productcontainer[i].proPrice}</td>
        <td>${productcontainer[i].proGatagory}</td>
        <td>${productcontainer[i].proDes}</td>
        <td><button onclick="delet_product(${i})" class=" btn btn-outline-danger">Delet</button></td>
        </tr>`
    }
    document.getElementById('tablebody').innerHTML=cartoon;

};

function clear_Form()
{
    allProductName.value="";
    allProductPrice.value="";
    allProductGatagory.value="";
    allProductDescription.value="";
};

function delet_product(index)
{
    productcontainer.splice(index,1);
    localStorage.setItem("our_products" , JSON.stringify(productcontainer));
    display_product();
};

function search_product(item)
{   
    var cartoon='';
    for(var i =0 ;i <productcontainer.length ; i++ )
    {
        if(productcontainer[i].proName.toLowerCase().includes(item.toLowerCase()) == true)
        {
        cartoon+=`<tr>
        <td>${i+1}</td>
        <td>${productcontainer[i].proName}</td>
        <td>${productcontainer[i].proPrice}</td>
        <td>${productcontainer[i].proGatagory}</td>
        <td>${productcontainer[i].proDes}</td>
        <td><button onclick="delet_product(${i})" class=" btn btn-outline-danger">Delet</button></td>
        </tr>`
        }
    }

    document.getElementById('tablebody').innerHTML=cartoon;
};

function validatname()
{
    var regex = /^[a-zA-Z0-9 .]{1,}$/;
    if(regex.test(allProductName.value) == true)
    {
        return true;
    }
    else
    {
        return false;
    }
}
document.addEventListener('keydown' , function(e){
    if(e.key == "Enter")
    {
        go ()
    }
});




