const textArea = document.getElementById("areaText");
const speedArea = document.getElementById("areaSpeed");
const outputArea = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", start);
function start() {
    if (speedArea.value == '' || isNaN(speedArea.value) || textArea.value == '') {
        return;
    }
    let words = (textArea.value + " End.").split(" ");
    let speed = speedArea.value;
    let i = { value: 0 };
    function output() {
        if (words[i.value] == undefined) {
            return;
        }
        outputArea.innerText = words[i.value];
        i.value++;
    }
    setInterval(output, parseInt(60 / speed * 1000));
}
