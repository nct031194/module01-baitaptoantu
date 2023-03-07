let inputphysic;
let inputchemistry;
let inputbiology;

inputphysic = prompt('Điểm môn vật lý của bạn là:');
let physic = parseInt(inputphysic);
document.write('Điểm môn vật lý là : ' + physic + '</br>');

inputchemistry = prompt('Điểm môn hóa của bạn là:');
let chemistry = parseInt(inputchemistry);
document.write('Điểm môn hóa là : ' + inputchemistry + '</br>');

inputbiology = prompt('Điểm môn sinh của bạn là:');
let biology = parseInt(inputbiology)
document.write('Điểm môn sinh là : ' + inputbiology + '</br>');

let tb = (physic + chemistry + biology ) / 3
let diemtb = parseInt(tb)
let tong = physic + chemistry + biology
document.write('Tổng điểm : ' + tong + '  .Điểm trung bình : ' + diemtb)