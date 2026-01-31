function clearData() {
  document.getElementById("values1").value = "";
  document.getElementById("values2").value = "";
}

function sum() {
  const value1 = document.getElementById("values1").value || 0;
  const value2 = document.getElementById("values2").value || 0;
  const total = Number(value1) + Number(value2);
  document.getElementById("total").innerHTML = `Total:${total}`;
  clearData()
}

 
function minas() {
  const value1 = document.getElementById("values1").value || 0;
  const value2 = document.getElementById("values2").value || 0;
  const total = Number(value1) + Number(value2);
  document.getElementById("total").innerHTML = `Total:${total}`;
  clearData()
}

function maltiple() {
  const value1 = document.getElementById("values1").value || 0;
  const value2 = document.getElementById("values2").value || 0;
  const total = Number(value1) * Number(value2);
  document.getElementById("total").innerHTML = `Total:${total}`;
  clearData()
}

function devided() {
  const value1 = document.getElementById("values1").value || 0;
  const value2 = document.getElementById("values2").value || 0;
  const total = Number(value1) / Number(value2);
  document.getElementById("total").innerHTML = `Total:${total}`;
  clearData()
}