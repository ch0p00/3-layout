$(function() {
  $("form[name='feedback']").validate({
    rules: {
      firstname: "required",
      tel: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      firstname: "Це поле необхідно заповнити",
      email: "Це поле необхідно заповнити",
      tel: "Це поле необхідно заповнити"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
