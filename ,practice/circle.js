/* Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız. */
var r,pi;
function circleArea (r,pi){
let alan=pi*r*r;
console.log(alan);
}


function circleCircumference(r,pi){
let cevre=2*pi*r;
console.log(cevre);
}
module.exports ={
    circleArea,
    circleCircumference
} 

