import{selectElement} from '../elementBox/selectElement'
let bars = selectElement('#bars_icon');

bars.addEventListener('click', (e)=>{
    console.log(bars.classList.toggle('change'));
      
        if(bars.className === 'change'){
            selectElement('#header_content').classList.add('header_content_open');
            selectElement('#header_content').classList.remove('header_content_hide');

            
        }else {
            selectElement('#header_content').classList.remove('header_content_open');
            selectElement('#header_content').classList.add('header_content_hide');
        }
});

export default bars;