function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');

    const content = document.getElementById('content');
    content.classList.toggle('collapsed');
}

function makeEditable(cell) {
    console.log(cell)
    const text = cell.textContent;
    const isInputType = cell.classList.contains('input-editable');
    if (isInputType) {
        cell.innerHTML = `<textarea onblur="makeNormal(this)" onclick="event.stopPropagation()">${text}</textarea>`;
    } else {
        cell.innerHTML = `<input type="text" value="${text}" onblur="makeNormal(this)" onclick="event.stopPropagation()">`;
    }
    const element = cell.querySelector(isInputType ? 'textarea' : 'input');
    element.focus();
}

function makeNormal(element) {
    const cell = element.parentElement;
    console.log(cell)
    const value = element.value;
    cell.innerHTML = value;
    const isInputType = cell.classList.contains('input-editable');
    if (!isInputType) {
        changePricesAndTexes(value)
    }

}

function changePricesAndTexes(value) {
    const div = document.getElementById("first")
    console.log(div);
    const align = div.getAttribute("data-priceaftertex");
    console.log(align);
    console.log(value);
    let total = value * 18 / 100
    total = parseInt(value) + parseInt(total)
    console.log(total)
}

document.addEventListener('click', function (event) {
    const editableElements = document.querySelectorAll('.editable textarea, .editable input');
    var rows = document.getElementsByTagName("table")[0].rows;
    console.log(rows)
    editableElements.forEach(function (element) {
        if (!element.contains(event.target)) {
            makeNormal(element);
        }
    });
});