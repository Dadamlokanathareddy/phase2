function addData() {
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var roll=document.querySelector("#roll").value;
  var mobile=document.querySelector("#mobile").value;

  var college1=document.querySelector("#college1").value;
  var degree1=document.querySelector("#degree1").value;
  var branch11=document.querySelector("#branch11").value;
  var percentage=document.querySelector("#percentage").value;

    var college2=document.querySelector("#college2").value;
    var degree2=document.querySelector("#degree2").value;
    var group=document.querySelector("#group").value;
    var percentage1=document.querySelector("#percentage1").value;

var school=document.querySelector("#school").value;
var medium=document.querySelector("#medium").value;
var group=document.querySelector("#group").value;
var percentage2=document.querySelector("#percentage2").value;

var skills=document.querySelector("#skills").value;
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
storeDB.put({
  career:career,
  name:name,
  email:email,
  roll:roll,
  mobile:mobile,
  education:[{
  college1:college1,
  degree1:degree1,
  branch11:branch11,
  percentage:percentage
},
{
  college1:college2,
  degree1:degree2,
  group11:group,
  percentage:percentage1
},
{
college1:school,
degree1:medium,
group11:"",
percentage:percentage2
}],
  skills:skills
});
window.open("index.html");
}
}
