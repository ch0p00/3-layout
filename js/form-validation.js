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
      firstname: {
        required: "Це поле необхідно заповнити",
        firstname: ""
      },
      email: {
        required: "Це поле необхідно заповнити",
        email: ""
      },
      phone: {
        required: "Це поле необхідно заповнити",
        phone: ""
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
