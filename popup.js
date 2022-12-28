$(() => {
  chrome.storage.sync.get("total", (budget) => {
    $("#total").text(budget.total);
  });
  $("#spendBtn").on("click", () => {
    chrome.storage.sync.get("total", (budget) => {
      let newTotal = 0;
      if (budget.total) {
        newTotal += parseInt(budget.total);
      }

      let inputValue = $("#amount").val();
      if (inputValue) {
        newTotal += parseInt(inputValue);
      }

      chrome.storage.sync.set({ total: newTotal });

      $("#total").text(newTotal);
      $("amount").val("");
    });
  });
});
