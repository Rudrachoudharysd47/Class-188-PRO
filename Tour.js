AFRAME.registerComponent("tour", {
    schema: {
      state: { type: "string", default: "places-list" },
      selectedCard: { type: "string", default: "#card1" },
      zoomAspectRatio:{type:"number",default:1}
    },
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    tick: function () {
      const { state } = this.el.getAttribute("tour");
  
      if (state === "view") {
        this.hideEl([this.placesContainer]);
        this.showView();
      }
    },
    hideEl: function (elList) {
      elList.map(el => {
        el.setAttribute("visible", false);
      });
    },
 
    update:function(){
      window.addEventListener("keydown", e => {
        if(e.key === "ArrowUp"){
          if(
            (this.data.zoomAspectRatio<=10&&this.data.state === "view")||
            (this.data.zoomAspectRatio<=10&&this.data.state === "change-view")
          )
          {
            this.data.zoomAspectRatio+=0.002;
            this.cameraEl.setAttribute("zoom",this.data.zoomAspectRatio);
          }
        }
        if(e.key === "ArrowDown"){
          if(
            (this.data.zoomAspectRatio>1&&this.data.state === "view")||
            (this.data.zoomAspectRati>1&&this.data.state === "change-view")
          )
          {
            this.data.zoomAspectRatio-=0.002;
            this.cameraEl.setAttribute("zoom",this.data.zoomAspectRatio);
          }
        }
      });
    }
  });