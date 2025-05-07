// Add event listener for form submission
document.getElementById('vendorForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = event.target;
  const formData = {
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

  try {
      const response = await fetch('http://localhost:3000/api/vendors', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          alert('✅ Vendor registered successfully!');
          form.reset(); // Reset the form after successful submission
      } else {
          const errorData = await response.json();
          alert('❌ Error: ${errorData.error || "Something went wrong"}');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('❌ Network error, please try again.');
  }
});
