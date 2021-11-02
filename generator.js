$("#generator").click(() => {
  let wishValue = $("#wish").val();
  if (wishValue.length === 0) {
    alert("Please fill your wish!");
    return;
  }
  $("#result").html("");
  gods.map((item) => {
    $("#result").append(`<li>Dear ${item}, i wish ${wishValue} </li>`);
  });
});
