const toggleButton = document.getElementById('addcust');
const sidebar = document.getElementById('custsidebar');
const content = document.querySelector('.estinv'); // Targeting the main content

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Toggle the 'active' class on the sidebar
    content.classList.toggle('active'); // Move the main content when the sidebar is active
});

document.getElementById('addline').addEventListener('click', function() {
    const table = document.getElementById('items');
    const newRow = table.insertRow();

    // Create cells and input elements
    const numCell = newRow.insertCell(0);
    numCell.textContent = table.rows.length - 1; // Auto-increment row number

    const descCell = newRow.insertCell(1);
    descCell.innerHTML = `<textarea name="descln${table.rows.length - 1}" id="descln${table.rows.length - 1}" rows="1"></textarea>`;

    const matCell = newRow.insertCell(2);
    matCell.innerHTML = `<input type="number" id="matln${table.rows.length - 1}" name="matln${table.rows.length - 1}" class="material" step="0.01" placeholder="0.00">`;

    const labCell = newRow.insertCell(3);
    labCell.innerHTML = `<input type="number" id="labln${table.rows.length - 1}" name="labln${table.rows.length - 1}" class="labor" step="0.01" placeholder="0.00">`;

    const totCell = newRow.insertCell(4);
    totCell.innerHTML = `<input type="number" id="totln${table.rows.length - 1}" name="totln${table.rows.length - 1}" class="total" step="0.01" placeholder="0.00" readonly>`;

    const inclCell = newRow.insertCell(5);
    inclCell.innerHTML = `<input type="checkbox" id="linclln${table.rows.length - 1}" name="linclln${table.rows.length - 1}">`;
});


document.getElementById('items').addEventListener('input', function(e) {
    if (e.target && (e.target.classList.contains('material') || e.target.classList.contains('labor'))) {
        const row = e.target.closest('tr');
        const mat = row.querySelector('.material').value || 0;
        const lab = row.querySelector('.labor').value || 0;
        const total = parseFloat(mat) + parseFloat(lab);
        row.querySelector('.total').value = total.toFixed(2);
    }
});