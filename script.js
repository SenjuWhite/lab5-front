function validateForm() {
    const fullName = document.getElementById("fullName");
    const variant = document.getElementById("variant");
    const group = document.getElementById("group");
    const phone = document.getElementById("phone");
    const idCard = document.getElementById("idCard");

    fullName.classList.remove("error");
    variant.classList.remove("error");
    group.classList.remove("error");
    phone.classList.remove("error");
    idCard.classList.remove("error");

    const fullNamePattern = /^[А-ЯІЇЄҐ]{1}[а-яіїєґ]{5,}\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const variantPattern = /^\d{2}$/;
    const groupPattern = /^[А-ЯІЇЄҐ]{2}-\d{2}$/;
    const phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const idCardPattern = /^[A-Za-z]{2}\s№\d{6}$/;

    let isValid = true;

    if (!fullNamePattern.test(fullName.value)) {
      fullName.classList.add("error");
      isValid = false;
    }

    if (!variantPattern.test(variant.value)) {
      variant.classList.add("error");
      isValid = false;
    }

    if (!groupPattern.test(group.value)) {
      group.classList.add("error");
      isValid = false;
    }

    if (!phonePattern.test(phone.value)) {
      phone.classList.add("error");
      isValid = false;
    }

    if (!idCardPattern.test(idCard.value)) {
      idCard.classList.add("error");
      isValid = false;
    }

    if (isValid) {
      alert(`Введена інформація:\n
        ПІБ: ${fullName.value}\n
        Варіант: ${variant.value}\n
        Група: ${group.value}\n
        Телефон: ${phone.value}\n
        ID-card: ${idCard.value}`);
    } else {
      alert("Будь ласка, виправте помилки в полях, що виділені червоним.");
    }
  }