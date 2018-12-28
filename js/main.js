// get the table by id
var rIndex, table = document.getElementById("table");

// add Row
function addHtmlTableRow() {
    var table = document.getElementById("table");
    // create a new row and cells
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),

        // get value from input text
        fullName = document.getElementById("fullName").value,
        address = document.getElementById("address").value,
        city = document.getElementById("city").value;
        pinCode = document.getElementById("pinCode").value;
        country = document.getElementById("country").value;
        newRow.setAttribute("id", `row${table.childNodes.length + 1}`, 0);
        
    // set the values into row cell"s
        cell1.innerHTML = fullName;
        cell2.innerHTML = address;
        cell3.innerHTML = city;
        cell4.innerHTML = pinCode;
        cell5.innerHTML = country;
        cell6.innerHTML = `<button class="editButton btn-secondary" onclick="updateSelectedRow(this)"><span class="fas fa-edit"></span></button>
        <button class="viewButton btn-info" onclick="readSelectedRow(this)"><span class="fas fa-eye"></span></button>
        <button class="deleteButton btn-danger" onclick="deleteSelectedRow(this)"><span class="fas fa-trash-alt"></span></button>`
       

    function clearFields() {
        document.getElementById("fullName").value = '';
        document.getElementById("address").value = '';
        document.getElementById("city").value = '';
        document.getElementById("pinCode").value = '';
        document.getElementById("country").value = '';
        document.getElementById("rowId").value = '';
    }
    clearFields();

    alert('Customer Added');
}

// display selected row data into alert box
function readSelectedRow() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // get the seected row index
            rIndex = this.rowIndex;

            var fullName = this.cells[0].innerHTML,
                address = this.cells[1].innerHTML,
                city = this.cells[2].innerHTML,
                pinCode = this.cells[3].innerHTML,
                country = this.cells[4].innerHTML

            // with Template literals
            alert(`Full Name: ${fullName}\nAddress: ${address}\nCity: ${city}\nPin Code: ${pinCode}\nCountry: ${country}`);
        }
    }
}

// hide selected row
function deleteSelectedRow(el) {
    var i = el.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // get the selected row index
            rIndex = this.rowIndex;
            table.rows[rIndex].style.display = 'none';
        };
    }
}

// update selected row
function updateSelectedRow(el) {
    document.getElementById('addButton').style.display = "none";

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {

            // get the selected row index
            rIndex = this.rowIndex;
            document.getElementById('fullName').value = this.cells[0].innerHTML;
            document.getElementById('address').value = this.cells[1].innerHTML;
            document.getElementById('city').value = this.cells[2].innerHTML;
            document.getElementById('pinCode').value = this.cells[3].innerHTML;
            document.getElementById('country').value = this.cells[4].innerHTML;
            document.getElementById('rowId').value = this.rowIndex;
        
        }
        document.getElementById('editButton').style.display = "block";

    }
    
}

// Save changes
function saveChages() {
    var index = document.getElementById('rowId').value;
    for (var i = 1; i < table.rows.length; i++) {
        if (parseInt(index) == i) {
            table.rows[i].cells[0].innerHTML = document.getElementById('fullName').value;
            table.rows[i].cells[1].innerHTML = document.getElementById('address').value;
            table.rows[i].cells[2].innerHTML = document.getElementById('city').value;
            table.rows[i].cells[3].innerHTML = document.getElementById('pinCode').value;
            table.rows[i].cells[4].innerHTML = document.getElementById('country').value;
            // table.rows[i].cells[5].innerHTML =  document.getElementById('rowId').value;

            function clearFields() {
                document.getElementById("fullName").value = '';
                document.getElementById("address").value = '';
                document.getElementById("city").value = '';
                document.getElementById("pinCode").value = '';
                document.getElementById("country").value = '';
                document.getElementById("rowId").value = '';
            }
            clearFields();
        }

    }

}

// validation 
function validateForm() {
    
    if (document.getElementById("fullName").value == '' || document.getElementById("address").value != '' || document.getElementById("city").value != '' || document.getElementById("pinCode").value != ''  || document.getElementById("country").value != '') {
        alert("Please Fill All Required Field");
        fullName = document.getElementById("fullName").value,
        address = document.getElementById("address").value,
        city = document.getElementById("city").value;
        pinCode = document.getElementById("pinCode").value;
        country = document.getElementById("country").value;
        return false;
    } 
}
