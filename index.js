const body = document.querySelector('body')

function getKeyboard(){
    const container = document.createElement('div')
    container.classList.add('container')
    body.appendChild(container)

    container.innerHTML = `
    <h1>RS Virtual-Keyboard</h1>
    <textarea class = "textarea" name="text" id="#" cols="30" rows="15"></textarea>
    <div class="boardArea">
        <div class="row1">
            <div class="row1_item"></div>
            <div class="row1_item">1</div>
            <div class="row1_item">2</div>
            <div class="row1_item">3</div>
            <div class="row1_item">4</div>
            <div class="row1_item">5</div>
            <div class="row1_item">6</div>
            <div class="row1_item">7</div>
            <div class="row1_item">8</div>
            <div class="row1_item">9</div>
            <div class="row1_item">0</div>
            <div class="row1_item">-</div>
            <div class="row1_item">=</div>
            <div class="row1_item">Backspace</div>
        </div>
        <div class="row2">
            <div class="row1_item">Tab</div>
            <div class="row1_item">q</div>
            <div class="row1_item">w</div>
            <div class="row1_item">e</div>
            <div class="row1_item">r</div>
            <div class="row1_item">t</div>
            <div class="row1_item">y</div>
            <div class="row1_item">u</div>
            <div class="row1_item">i</div>
            <div class="row1_item">o</div>
            <div class="row1_item">p</div>
            <div class="row1_item">[</div>
            <div class="row1_item">]</div>
            <div class="row1_item">\</div>
            <div class="row1_item">del</div>
        </div>
        <div class="row3">
            <div class="row1_item">CapsLock</div>
            <div class="row1_item">a</div>
            <div class="row1_item">s</div>
            <div class="row1_item">d</div>
            <div class="row1_item">f</div>
            <div class="row1_item">g</div>
            <div class="row1_item">h</div>
            <div class="row1_item">j</div>
            <div class="row1_item">k</div>
            <div class="row1_item">l</div>
            <div class="row1_item">;</div>
            <div class="row1_item">'</div>
            <div class="row1_item">Enter</div>
        </div>
        <div class="row4">
            <div class="row1_item">Shift</div>
            <div class="row1_item">z</div>
            <div class="row1_item">x</div>
            <div class="row1_item">c</div>
            <div class="row1_item">v</div>
            <div class="row1_item">b</div>
            <div class="row1_item">n</div>
            <div class="row1_item">m</div>
            <div class="row1_item">,</div>
            <div class="row1_item">.</div>
            <div class="row1_item">/</div>
            <div class="row1_item">up</div>
            <div class="row1_item">Shift</div>
        </div>
        <div class="row5">
            <div class="row1_item">Ctrl</div>
            <div class="row1_item">Win</div>
            <div class="row1_item">Alt</div>
            <div class="row1_item">Space</div>
            <div class="row1_item">Alt</div>
            <div class="row1_item">left</div>
            <div class="row1_item">down</div>
            <div class="row1_item">rigft</div>
            <div class="row1_item">Ctrl</div>
        </div>
    </div>
</div>
<p class="text">Клавиатура создана в ОС Windows</p>
<p class="text">Для переключения языка: левые ctrl + alt</p>
    `


}
getKeyboard()