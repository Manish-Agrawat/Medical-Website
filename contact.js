document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone1 = document.getElementById("phone1").value;
    const phone2 = document.getElementById("phone2").value;
    // const enquiryType = document.getElementById("enquiryType").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone1 || !message) {
      alert("Please fill in all required fields!");
      return;
    }

    // Send data via WhatsApp (Optional)
    const whatsappNumber = "919876543210";
    const whatsappMessage =
      `📝 *New Enquiry Received!*%0A%0A` +
      `🔹 *Name:* ${name}%0A` +
      `📧 *Email:* ${email}%0A` +
      `📞 *Phone 1:* ${phone1}%0A` +
      `📞 *Phone 2:* ${phone2}%0A` +
      //   `📌 *Enquiry Type:* ${enquiryType}%0A` +
      `💬 *Message:* ${message}%0A%0A` +
      `🔔 Please respond as soon as possible.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    alert("Your message has been sent successfully!");
    document.getElementById("contactForm").reset(); // Clear form
  });
