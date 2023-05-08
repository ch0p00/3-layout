$.validator.addMethod("phone", function(value, element) {
  return this.optional(element) || /^\d{10}$/.test(value);
}, "Please enter a valid phone number.");

$(function() {
  $("form[name='feedback']").validate({
    rules: {
      firstname: "required",
      phone: {
        required: true,
        phone: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      firstname: "Це поле необхідно заповнити",
      email: "Це поле необхідно заповнити",
      phone: "Це поле необхідно заповнити"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});