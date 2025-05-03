const form = document.getElementById("vendorForm");
const list = document.getElementById("vendorList");

const apiUrl = "http://localhost:5000/api/vendors";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const vendor = {
    vendorName: form.vendorName.value,
    contactPerson: form.contactPerson.value,
    email: form.email.value,
    phone: form.phone.value,
    category: form.category.value,
    address: form.address.value,
    taxId: form.taxId.value,
    paymentMethod: form.paymentMethod.value,
    contractStart: form.contractStart.value,
    isActive: form.isActive.checked
  };

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(vendor)
  });

  form.reset();
  loadVendors();
});

async function loadVendors() {
  const res = await fetch(apiUrl);
  const vendors = await res.json();

  list.innerHTML = "";
  vendors.forEach(v => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${v.vendorName}</strong> (${v.email}) 
      <button onclick="deleteVendor('${v._id}')">Delete</button>
    `;
    list.appendChild(div);
  });
}

async function deleteVendor(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  loadVendors();
}

loadVendors();
