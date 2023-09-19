AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function () {
      this.handleClickEvents();
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handleClickEvents: function () {
      //Cursor 'click' Events
      this.el.addEventListener("click", evt => {
        const placesContainer = document.querySelector("#places-container");
        const { state } = placesContainer.getAttribute("tour");
  
        if (state === "places-list") {
          const id = this.el.getAttribute("id");
          const placesId = [
            "taj-mahal",
            "budapest",
            "new-york-city",
            "eiffel-tower"
          ];
          if (placesId.includes(id)) {
            placesContainer.setAttribute("tour", {
              state: "view",
              selectedCard: id
            });
          }
        }
      });
    },
  
  });