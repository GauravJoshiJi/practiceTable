fetch("https://fakestoreapi.com/products/")
  .then((data) => data.json())
  .then((jsonData) => {
    // console.log(jsonData);
    let tableData = "";
    jsonData.map((values, key) => {
      tableData += `
      <tr>
            <td>${key + 1}</td>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td><img src="${values.image}" /></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  });
