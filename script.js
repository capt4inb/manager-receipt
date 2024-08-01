// script.js

// Replace this URL with the actual API endpoint
const apiUrl = 'https://66aa4c56613eced4eba853b3.mockapi.io/receipts';

// Fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Display the fetched data in the "danhsach" table
function displayData(data) {
  const danhsachTableBody = document.querySelector('.danhsach tbody');
  danhsachTableBody.innerHTML = '';

  data.forEach((item) => {
    const row = document.createElement('tr');
    row.classList.add('border-b', 'border-gray-200', 'hover:bg-gray-100');

    const createdAtCell = document.createElement('td');
    createdAtCell.textContent = new Date(item.createdAt).toLocaleString();
    row.appendChild(createdAtCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = item['ten-sp'];
    row.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = item['so-tien'] + ' 원';
    row.appendChild(priceCell);

    const editCell = document.createElement('td');
    row.appendChild(editCell);
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"/></g></svg>';
    editBtn.classList.add('hover:scale-150');
    editCell.appendChild(editBtn);

    const delCell = document.createElement('td');
    row.appendChild(delCell);
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"/></svg>';
    delBtn.classList.add('hover:scale-150');
    delCell.appendChild(delBtn);

    danhsachTableBody.appendChild(row);
  });
}

// Call the fetchData function when the page loads
document.addEventListener('DOMContentLoaded', fetchData);