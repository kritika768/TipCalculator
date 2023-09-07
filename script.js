console.log("hello");

const getEachShare = () => {
  let bill = parseFloat(document.getElementById("bill").value);
  let share = parseFloat(document.getElementById("share").value);
  let percent = document.getElementById("percent").value;
  if(isNaN(bill) || bill<1){
    alert("Invalid input");
  }
  if(isNaN(share)){
    alert("Invalid input");
  }
  let total = (percent * bill) / share;
  total = Math.round(total);
  document.getElementById("tip").innerHTML = `Rs ${total}`;
};
