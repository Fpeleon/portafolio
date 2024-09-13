//Data Range Picker
$(document).ready(function () {
  $(".custom_range_picker").daterangepicker({
    locale: {
      format: "DD-MM-YYYY",
      cancelLabel: "Limpiar",
      applyLabel: "Aplicar"
    },
    autoUpdateInput: true,
    drops: "down",
    opens: "right"
  });

  $(".custom_range_picker").on("apply.daterangepicker", function (ev, picker) {
    $(this).attr(
      "value",
      picker.startDate.format("DD-MM-YYYY") +
        "/" +
        picker.endDate.format("DD-MM-YYYY")
    );
  });

  $(".custom_range_picker").on("apply.daterangepicker", function (ev, picker) {
    var days = picker.endDate.diff(picker.startDate, "days") + 1;
    $(this).attr("data-passing-date", days);
  });

  $(".custom_range_picker").on("cancel.daterangepicker", function (ev, picker) {
    $(this).attr("value", "");
    $(this).attr("data-passing-date", "");
  });
});
