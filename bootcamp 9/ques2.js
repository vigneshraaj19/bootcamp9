var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload = function()
{
    var data=JSON.parse(request.response);
         
         var res=data.filter((item)=>
         {
             if(item.population <= 200000)
             {
                console.log(item.name);
             }
         });
     
     }