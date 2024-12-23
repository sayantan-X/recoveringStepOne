// var element = document.getElementById("mainContainer");
// element.innerHTML= "this is from js"
function show() {
    var firstNo = parseInt(document.getElementById("FirstNumber").value);
    console.log(firstNo);
    var scndNo = parseInt(document.getElementById("scndNumber").value);
    console.log(scndNo);
    var sum = firstNo + scndNo;
    console.log(sum);
    document.getElementById("demoSum").innerHTML = "this is sum: " + sum;
}
