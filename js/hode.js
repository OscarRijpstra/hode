const e = document.getElementById('e');
const hodediv = document.getElementsByClassName('hode')[0];

function hode(count){
    if (count < 0) return;
    e.innerText = 'E'.repeat(count);
    hodediv.style.fontSize = `${parseInt(count) + 11}pt`;
    hodediv.style.color = "#"+((1<<24)*Math.random()|0).toString(16);
}