function findSum() {
    const num = parseInt(document.getElementById('num').value);
    if (isNaN(num) || num < 1) {
        document.getElementById('result').innerText = "Please enter a valid positive integer.";
        return;
    }

    let sum=0;

    for(let i=1;i<=num;i++){
        sum+=i;
    }

   document.getElementById("result").innerHTML=
   "Sum of numbers from 1 to "+num+" is = "+sum;
}