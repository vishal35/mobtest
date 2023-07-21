const tableDataArray = [
    {
        index: 1,
        unitName: 'Godrage jumbo set of 4 plastic chair and 1 jumbo table',
        priceBeforeTax: 8000,
        gst: '18%',
        priceAfterTax: 8000,
        discount: 200,
        quantity: 2,
        total: 8600
    },
    {
        index: 2,
        unitName: 'Godrage jumbo set of 4 plastic chair and 1 jumbo table',
        priceBeforeTax: 8000,
        gst: '18%',
        priceAfterTax: 8000,
        discount: 200,
        quantity: 2,
        total: 8600
    },
    {
        index: 3,
        unitName: 'Godrage jumbo set of 4 plastic chair and 1 jumbo table',
        priceBeforeTax: 8000,
        gst: '18%',
        priceAfterTax: 8000,
        discount: 200,
        quantity: 2,
        total: 8600
    },
    {
        index: 4,
        unitName: 'Godrage jumbo set of 4 plastic chair and 1 jumbo table',
        priceBeforeTax: 8000,
        gst: '18%',
        priceAfterTax: 8000,
        discount: 200,
        quantity: 2,
        total: 8600
    }
];

// Function to create the table rows from the array
function createTableRows(data) {
    const tableBody = document.querySelector('#data-table tbody');
    let rows = '';
    data.forEach(item => {
        rows += `
            <tr>
                <td><span class="input-editable" onclick="makeEditable(this, 1)">${item.unitName}</span>
                </td>
                <td data-actualprice="1"><span class="editableinput" onclick="makeEditable(this, 1)">${item.priceBeforeTax}</span>
                </td>
                <td>${item.gst}</td>
                <td data-priceaftertex="1">${item.priceAfterTax}</td>
                <td>${item.discount}</td>
                <td>${item.quantity}</td>
                <td data-totalprice="1">${item.total}</td>
            </tr>
        `;
    });
    tableBody.innerHTML = rows;
}

// Call the function to create the table
createTableRows(tableDataArray);

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');

    const content = document.getElementById('content');
    content.classList.toggle('collapsed');
}

function makeEditable(cell) {
    const text = cell.textContent;
    const isInputType = cell.classList.contains('input-editable');
    if (isInputType) {
        cell.innerHTML = `<textarea class="inputhover" style="width:100%" onblur="makeNormal(this)" onclick="event.stopPropagation()">${text}</textarea>`;
    } else {
        cell.innerHTML = `<input class="inputhover" style="width:100%" type="text" value="${text}" onblur="makeNormal(this)" onclick="event.stopPropagation()">`;
    }
    const element = cell.querySelector(isInputType ? 'textarea' : 'input');
    element.focus();
}

function makeNormal(element) {
    const cell = element.parentElement;
    const value = element.value;
    cell.innerHTML = value;
    const isInputType = cell.classList.contains('input-editable');
    if (!isInputType) {
        changePricesAndTexes(value)
    }

}

function changePricesAndTexes(value) {
    const div = document.getElementById("first")
    // console.log(div);
    const align = div.getAttribute("data-priceaftertex");
    // console.log(align);
    // console.log(value);
    let total = value * 18 / 100
    total = parseInt(value) + parseInt(total)
    console.log(total)
}

document.addEventListener('click', function (event) {
    const editableElements = document.querySelectorAll('.editable textarea, .editable input');
    var rows = document.getElementsByTagName("table")[0].rows;
    // console.log(rows)
    editableElements.forEach(function (element) {
        if (!element.contains(event.target)) {
            makeNormal(element);
        }
    });
});

function addNewRow() {
    console.log("inside");
    // Generate a random ID and dummy data for the new row
    const newRowId = Math.floor(Math.random() * 100) + 6; // Generates ID from 6 to 105
    const dummyData = ['Godrage jumbo set of 4 plastic chair and 1 jumbo table', 8000, '18%', 8000, 200, 5, 8500];

    // Create a new row and insert it into the table
    const tableBody = document.querySelector('#data-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${dummyData[0]}</td>
      <td>${dummyData[1]}</td>
      <td>${dummyData[2]}</td>
      <td>${dummyData[3]}</td>
      <td>${dummyData[4]}</td>
      <td>${dummyData[5]}</td>
      <td>${dummyData[6]}</td>
    `;
    tableBody.appendChild(newRow);
}