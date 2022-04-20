
var proudctname=document.getElementById("name")
var proudctprice=document.getElementById("price")
var proudctmodel=document.getElementById("model")
var proudctdescription=document.getElementById("description")
var v=0;
var allproudct;

if (localStorage.getItem("proudct")==null)
{
    allproudct=[]
}else
{
    allproudct=JSON.parse(localStorage.getItem("proudct"))
    displayproduct()
}
function proudcet()
{
    if (document.getElementById("add").innerText=="Add proudcet")
    {
        allproudcet()
    }
else
{
    edit()
}
}

function allproudcet()
{
    var x=
    {
        name:proudctname.value
        ,price:proudctprice.value
        ,model:proudctmodel.value
        ,desc:proudctdescription.value
    }
    allproudct.push(x)
    displayproduct()

localStorage.setItem("proudct",JSON.stringify(allproudct))


  //  console.log(allproudct)
}
 
function displayproduct()
{
    var display=''
    for(var i=0;i<allproudct.length;i++)
    {
        display+=`<tr>
        <td>${i}</td>
        <td>${allproudct[i].name}</td>
        <td>${allproudct[i].price}</td>
        <td>${allproudct[i].model}</td>
        <td>${allproudct[i].desc}</td>
        <td><button class="btn btn-primary" onclick="update(${i})">updet</button></td>
        <td><button class="btn btn-danger" onclick="deleteproudct(${i})" >delete</button></td>
    </tr>`
    }
    document.getElementById("insertrow").innerHTML=display
}
function update(index)
{
    v=index
    proudctname.value= allproudct[index].name
    proudctprice.value= allproudct[index].price
    proudctmodel.value= allproudct[index].model
    proudctdescription.value= allproudct[index].desc
    document.getElementById("add").innerText="updet data"
}

function edit()
{
    allproudct[v].name=proudctname.value
    allproudct[v].price= proudctprice.value
    allproudct[v].model= proudctmodel.value
    allproudct[v].desc=proudctdescription.value
    localStorage.setItem("proudct",JSON.stringify(allproudct))
    displayproduct()

    document.getElementById("add").innerText="Add proudcet"
}



function deleteproudct(index)
{
    allproudct.splice(index,1)
    displayproduct()
    localStorage.setItem("proudct",JSON.stringify(allproudct))
}

function searchproudct(tearm)
{
var cartona=''
for (var i=0;i<allproudct.length;i++)
{
    if (allproudct[i].name.toLowerCase().includes(tearm.toLowerCase()))
    {
        cartona+=`<tr>
        <td>${i}</td>
        <td>${allproudct[i].name}</td>
        <td>${allproudct[i].price}</td>
        <td>${allproudct[i].model}</td>
        <td>${allproudct[i].desc}</td>
        <td><button class="btn btn-primary" onclick="update(${i})">updet</button></td>
        <td><button class="btn btn-danger" onclick="deleteproudct(${i})" >delete</button></td>
    </tr>`
    }
    document.getElementById("insertrow").innerHTML=cartona

}


}




  