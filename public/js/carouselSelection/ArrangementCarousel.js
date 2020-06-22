export const Arrange_Carousel_image = (ul_slider, slide_width)=>{
    
  ul_slider.forEach(function(ul, index){
        ul.style.left =  slide_width  * index  + 'px'
      
      })

}
