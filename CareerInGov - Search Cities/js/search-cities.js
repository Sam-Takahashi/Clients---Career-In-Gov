const data = ["Apple", "Banana", "Cherry", "Apricot", "Blueberry", "Date"];
const sortedData = data.slice().sort();
const groupedData = {};

sortedData.forEach(item => {
  const firstLetter = item.charAt(0).toUpperCase();
  if (!groupedData[firstLetter]) {
    groupedData[firstLetter] = [];
  }
  groupedData[firstLetter].push(item);
});

const tableBody = $("#grouped-data-table");

for (const letter in groupedData) {
  if (groupedData.hasOwnProperty(letter)) {
    const items = groupedData[letter].join(", ");
    const row = $("<tr>");
    row.append($("<td>").text(letter).addClass("toggle-items"));
    row.append($("<td>").text(items).addClass("items-cell"));
    tableBody.append(row);
  }
}

// Toggle visibility of the items cell when clicking on the letter cell
$(".toggle-items").click(function () {
  $(this).next(".items-cell").toggle();
});




// const data = ["Apple", "Banana", "Cherry", "Apricot", "Blueberry", "Date"];
// const sortedData = data.slice().sort();
// const groupedData = {};

// sortedData.forEach(item => {
//   const firstLetter = item.charAt(0).toUpperCase();
//   if (!groupedData[firstLetter]) {
//     groupedData[firstLetter] = [];
//   }
//   groupedData[firstLetter].push(item);
// });

// const tableBody = $("#grouped-data-table");

// for (const letter in groupedData) {
//   if (groupedData.hasOwnProperty(letter)) {
//     const items = groupedData[letter].join(", ");
//     const row = $("<tr>");
//     row.append($("<td>").text(letter));
//     row.append($("<td>").text(items));
//     tableBody.append(row);
//   }
// }




// const data = ["Apple", "Banana", "Cherry", "Apricot", "Blueberry", "Date"];
// const sortedData = data.slice().sort();
// const groupedData = {};

// sortedData.forEach(item => {
//   const firstLetter = item.charAt(0).toUpperCase();
//   if (!groupedData[firstLetter]) {
//     groupedData[firstLetter] = [];
//   }
//   groupedData[firstLetter].push(item);
// });

// const tableBody = document.getElementById("grouped-data-table");

// for (const letter in groupedData) {
//   if (groupedData.hasOwnProperty(letter)) {
//     const row = document.createElement("tr");
//     const letterCell = document.createElement("td");
//     letterCell.textContent = letter;
//     row.appendChild(letterCell);

//     const itemsCell = document.createElement("td");
//     itemsCell.textContent = groupedData[letter].join(", ");
//     row.appendChild(itemsCell);

//     tableBody.appendChild(row);
//   }
// }