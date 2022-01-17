function footToMeter(foot){
    return 0.305 * foot;
}
function meterToFoot(meter){
    return 3.279 * meter
}
function convertToMeters(){
    let number = parseFloat(document.getElementById("inputNumber").value);
    let result = footToMeter(number)
    document.getElementById("result").innerText = result;
}
function convertToFeet(){
    let number = parseFloat(document.getElementById("inputNumber").value);
    let result = meterToFoot(number);
    document.getElementById("result").innerText = result;
}