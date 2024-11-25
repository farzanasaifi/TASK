document.getElementById("data").addEventListener("submit" , function (event){

const a = document.getElementById("n1").value;
const b = document.getElementById("n2").value;
const c = document.getElementById("n3").value;

if (a =="" || b =="" || c ==""){
    alert("All feild are mandatory");
    event.preventDefault();
}else{
    window.location.href="submit.html";
    event.preventDefault();
}
});
