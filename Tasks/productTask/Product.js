let serial = 1;

document.getElementById('productForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('productName').value.trim();
  const price = parseFloat(document.getElementById('productPrice').value.trim());

  if (!name || isNaN(price)) {
    alert("Please fill in both fields correctly.");
    return;
  }

  const tableBody = document.getElementById('tableBody');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${serial++}</td>
    <td>${name}</td>
    <td class="price" data-base-price="${price}">₹${price.toFixed(2)}</td>
    <td>
      <button class="decrease-btn">➖</button>
      <span class="quantity">1</span>
      <button class="increase-btn">➕</button>
    </td>
    <td>
      <button class="delete-btn">🗑️</button>
    </td>
  `;

  tableBody.appendChild(row);
  document.getElementById('productForm').reset();
});

document.getElementById('tableBody').addEventListener('click', function (e) {
  const target = e.target;
  const row = target.closest('tr');
  const qtySpan = row.querySelector('.quantity');
  const priceCell = row.querySelector('.price');
  const basePrice = parseFloat(priceCell.dataset.basePrice);

  if (target.classList.contains('increase-btn')) {
    let qty = parseInt(qtySpan.textContent);
    qty++;
    qtySpan.textContent = qty;
    priceCell.textContent = `₹${(basePrice * qty).toFixed(2)}`;
  }

  if (target.classList.contains('decrease-btn')) {
    let qty = parseInt(qtySpan.textContent);
    if (qty > 1) {
      qty--;
      qtySpan.textContent = qty;
      priceCell.textContent = `₹${(basePrice * qty).toFixed(2)}`;
    }
  }

  if (target.classList.contains('delete-btn')) {
    row.remove();
  }
});

document.getElementById('resetBtn').addEventListener('click', function () {
  document.getElementById('productForm').reset();
});
