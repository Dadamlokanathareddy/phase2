var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for(i in query){
  param=query[i].split("=");
  paramValue=parseInt(param[1]);
}
var request;
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitindexedDB;

var open=idb.open("storeData",1)
console.log("IndexedDB is created");

open.onupgradeneeded=function(event){
  var request=event.target.result;
var storeDB=request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(error){
  console.log("Object store is not created",+error);
}
open.onsuccess=function(event){
  request=event.target.result;
//var request=event.target.result;
var transaction=request.transaction("Formdata","readwrite");

var storeDB=transaction.objectStore("Formdata");
var info=storeDB.get(paramValue);
console.log(info);
info.onsuccess=function(data) {
  console.log(data.target.result);
  display(data.target.result);
}
}
var left=document.querySelector(".left");

var right=document.querySelector(".right");
function display(data) {
  var img=document.createElement("img");
  img.src="image/one.svg";
  left.append(img);
  var h2=document.createElement("h2");
  h2.textContent=data.name;
  left.append(h2);
  var h2=document.createElement("h2");
  h2.textContent=data.email;
  left.append(h2);

  var h2=document.createElement("h2");
  h2.textContent=data.roll;
  left.append(h2);
  var h2=document.createElement("h2");
  h2.textContent=data.mobile;
  left.append(h2);

  var h2=document.createElement("h2");
  h2.textContent="educaton details";
  right.appendChild(h2);
  var hr=document.createElement("hr");
  right.appendChild(hr);


  var table=document.createElement('table');
  let row='';
  row+="<tr>"+"<th>"+"college"+"</th>"+
  "<th>"+"degree"+"</th>"+
  "<th>"+"group"+"</th>"+
  "<th>"+"percentage"+"</th>"+"</tr>";
  for(i in data.education){

  row +="<tr>"+"<td>"+data.education[i].college1+"</td>"+
  "<td>"+data.education[i].degree1+"</td>"+
  "<td>"+data.education[i].group11+"</td>"+
  "<td>"+data.education[i].percentage+"</td>"+"</tr>";
table.innerHTML=row;
right.appendChild(table);
}
}
