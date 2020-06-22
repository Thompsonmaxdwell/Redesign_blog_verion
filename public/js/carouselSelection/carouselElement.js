import{selectElement,selectAllElement} from '../elementBox/selectElement'


const btn_left = selectElement('.left');
const btn_right = selectElement('.right');
const carousel_track = selectElement('.carousel_content');

const carousel_ul = selectAllElement('.carousel_ul');
const carousel_width = carousel_ul[1].getBoundingClientRect().width;


const health_sl_lf = selectElement('.health_sl_lf')
const health_sl_rg = selectElement('.health_sl_rg');
const health_carousel = selectElement('.health_carousel');

const health_carousel_ul = selectAllElement('.health_carousel_ul');
const health_carousel_width = health_carousel_ul[1].getBoundingClientRect().width;


export {
    btn_left , 
    btn_right, 
    carousel_track,
    carousel_ul , 
    carousel_width,


    health_sl_lf,
    health_sl_rg,
    health_carousel,
    health_carousel_ul,
    health_carousel_width

}
