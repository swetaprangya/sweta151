AFRAME.registerComponent("base",{
    
        schema: {
         radius:{type:"number",default:150},
         height:{type:"number",default:3}
        },
      
        init: function () {
      this.el.setAttribriute("geometry",{
        primitive:"cylinder",
        radius:this.data.radius,
        height:this.data.height
      })
      this.el.setAttribriute("meterial",{color:"white"})
        }
      });