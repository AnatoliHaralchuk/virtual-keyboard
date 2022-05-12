const obj = {
  en: {
    Backquote: '`',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Backspace: 'Backspace',
    Tab: 'Tab',
    KeyQ: 'q',
    KeyW: 'w',
    KeyE: 'e',
    KeyR: 'r',
    KeyT: 't',
    KeyY: 'y',
    KeyU: 'u',
    KeyI: 'i',
    KeyO: 'o',
    KeyP: 'p',
    BracketLeft: '[',
    BracketRight: ']',
    Backslash: '\\',
    Delete: 'del',
    CapsLock: 'CapsLock',
    KeyA: 'a',
    KeyS: 's',
    KeyD: 'd',
    KeyF: 'f',
    KeyG: 'g',
    KeyH: 'h',
    KeyJ: 'j',
    KeyK: 'k',
    KeyL: 'l',
    Semicolon: ';',
    Quote: '\'',
    Enter: 'Enter',
    ShiftLeft: 'Shift',
    KeyZ: 'z',
    KeyX: 'x',
    KeyC: 'c',
    KeyV: 'v',
    KeyB: 'b',
    KeyN: 'n',
    KeyM: 'm',
    Comma: ',',
    Period: '.',
    Slash: '/',
    ArrowUp: 'Up',
    ShiftRight: 'Shift',
    ControlLeft: 'Ctrl',
    Meta: 'Win',
    AltLeft: 'Alt',
    Space: 'Space',
    AltRight: 'Alt',
    ArrowLeft: 'left',
    ArrowDown: 'down',
    ArrowRight: 'right',
    ControlRight: 'Ctrl',
  },
  ru: {
    Backquote: 'ё',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Backspace: 'Backspace',
    Tab: 'Tab',
    KeyQ: 'й',
    KeyW: 'ц',
    KeyE: 'у',
    KeyR: 'к',
    KeyT: 'е',
    KeyY: 'н',
    KeyU: 'г',
    KeyI: 'ш',
    KeyO: 'щ',
    KeyP: 'з',
    BracketLeft: 'х',
    BracketRight: 'ъ',
    Backslash: '\\',
    Delete: 'del',
    CapsLock: 'CapsLock',
    KeyA: 'ф',
    KeyS: 'ы',
    KeyD: 'в',
    KeyF: 'а',
    KeyG: 'п',
    KeyH: 'р',
    KeyJ: 'о',
    KeyK: 'л',
    KeyL: 'д',
    Semicolon: 'ж',
    Quote: 'э',
    Enter: 'Enter',
    ShiftLeft: 'Shift',
    KeyZ: 'я',
    KeyX: 'ч',
    KeyC: 'с',
    KeyV: 'м',
    KeyB: 'и',
    KeyN: 'т',
    KeyM: 'ь',
    Comma: 'б',
    Period: 'ю',
    Slash: '.',
    ArrowUp: 'Up',
    ShiftRight: 'Shift',
    ControlLeft: 'Ctrl',
    Meta: 'Win',
    AltLeft: 'Alt',
    Space: 'Space',
    AltRight: 'Alt',
    ArrowLeft: 'left',
    ArrowDown: 'down',
    ArrowRight: 'right',
    ControlRight: 'Ctrl',
  },
};
let lang = 'en';

const body = document.querySelector('body');

function getKeyboard() {
  const container = document.createElement('div');
  container.classList.add('container');
  body.appendChild(container);

  container.innerHTML = `
    <h1>RS Virtual-Keyboard</h1>
    <textarea autofocus spellcheck = 'false' class = "textarea" name="text" id="#" cols="30" rows="15"></textarea>
    <div class="boardArea">
        <div class="row row1">
            <div class="r row1_item" data-text = 'Backquote'>\`</div>
            <div class="r row1_item" data-text = 'Digit1'>1</div>
            <div class="r row1_item" data-text = 'Digit2'>2</div>
            <div class="r row1_item" data-text = 'Digit3'>3</div>
            <div class="r row1_item" data-text = 'Digit4'>4</div>
            <div class="r row1_item" data-text = 'Digit5'>5</div>
            <div class="r row1_item" data-text = 'Digit6'>6</div>
            <div class="r row1_item" data-text = 'Digit7'>7</div>
            <div class="r row1_item" data-text = 'Digit8'>8</div>
            <div class="r row1_item" data-text = 'Digit9'>9</div>
            <div class="r row1_item" data-text = 'Digit0'>0</div>
            <div class="r row1_item" data-text = 'Minus'>-</div>
            <div class="r row1_item" data-text = 'Equal'>=</div>
            <div class="row1_item" data-text = 'Backspace'>Backspace</div>
        </div>
        <div class="row row2">
            <div class="row1_item" data-text = 'Tab'>Tab</div>
            <div class="r row1_item" data-text = 'KeyQ'>q</div>
            <div class="r row1_item" data-text = 'KeyW'>w</div>
            <div class="r row1_item" data-text = 'KeyE'>e</div>
            <div class="r row1_item" data-text = 'KeyR'>r</div>
            <div class="r row1_item" data-text = 'KeyT'>t</div>
            <div class="r row1_item" data-text = 'KeyY'>y</div>
            <div class="r row1_item" data-text = 'KeyU'>u</div>
            <div class="r row1_item" data-text = 'KeyI'>i</div>
            <div class="r row1_item" data-text = 'KeyO'>o</div>
            <div class="r row1_item" data-text = 'KeyP'>p</div>
            <div class="r row1_item" data-text = 'BracketLeft'>[</div>
            <div class="r row1_item" data-text = 'BracketRight'>]</div>
            <div class="r row1_item" data-text = 'Backslash'>\\</div>
            <div class="row1_item" data-text = 'Delete'>del</div>
        </div>
        <div class="row row3">
            <div class="row1_item" data-text = 'CapsLock'>CapsLock</div>
            <div class="r row1_item" data-text = 'KeyA'>a</div>
            <div class="r row1_item" data-text = 'KeyS'>s</div>
            <div class="r row1_item" data-text = 'KeyD'>d</div>
            <div class="r row1_item" data-text = 'KeyF'>f</div>
            <div class="r row1_item" data-text = 'KeyG'>g</div>
            <div class="r row1_item" data-text = 'KeyH'>h</div>
            <div class="r row1_item" data-text = 'KeyJ'>j</div>
            <div class="r row1_item" data-text = 'KeyK'>k</div>
            <div class="r row1_item" data-text = 'KeyL'>l</div>
            <div class="r row1_item" data-text = 'Semicolon'>;</div>
            <div class="r row1_item" data-text = 'Quote'>'</div>
            <div class="row1_item" data-text = 'Enter'>Enter</div>
        </div>
        <div class="row row4">
            <div class="row1_item" data-text = 'ShiftLeft'>Shift</div>
            <div class="r row1_item" data-text = 'KeyZ'>z</div>
            <div class="r row1_item" data-text = 'KeyX'>x</div>
            <div class="r row1_item" data-text = 'KeyC'>c</div>
            <div class="r row1_item" data-text = 'KeyV'>v</div>
            <div class="r row1_item" data-text = 'KeyB'>b</div>
            <div class="r row1_item" data-text = 'KeyN'>n</div>
            <div class="r row1_item" data-text = 'KeyM'>m</div>
            <div class="r row1_item" data-text = 'Comma'>,</div>
            <div class="r row1_item" data-text = 'Period'>.</div>
            <div class="r row1_item" data-text = 'Slash'>/</div>
            <div class="row1_item" data-text = 'ArrowUp'>up</div>
            <div class="row1_item" data-text = 'ShiftRight'>Shift</div>
        </div>
        <div class="row row5">
            <div class="row1_item" data-text = 'ControlLeft'>Ctrl</div>
            <div class="row1_item" data-text = 'Meta'>Win</div>
            <div class="row1_item" data-text = 'AltLeft'>Alt</div>
            <div class="row1_item" data-text = 'Space'>Space</div>
            <div class="row1_item" data-text = 'AltRight'>Alt</div>
            <div class="row1_item" data-text = 'ArrowLeft'>left</div>
            <div class="row1_item" data-text = 'ArrowDown'>down</div>
            <div class="row1_item" data-text = 'ArrowRight'>rigft</div>
            <div class="row1_item" data-text = 'ControlRight'>Ctrl</div>
        </div>
    </div>
</div>
<p class="text">Клавиатура создана в ОС Windows</p>
<p class="text">Для переключения языка: левые ctrl(держать) + Shift</p>
    `;
}
getKeyboard();

const keys = document.querySelectorAll('.row1_item');
let caps = false;

function getTranslate() {
  keys.forEach((e) => { e.textContent = `${obj[lang][e.dataset.text]}`; });
}

function getLocalStorag() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    getTranslate();
  }
}
getLocalStorag();

const row = document.querySelectorAll('.row');
const textarea = document.querySelector('.textarea');
const r = document.querySelectorAll('.r');

function checkKey(code) {
  if (code === 'Backspace') {
    const a = textarea.value.slice(textarea.selectionEnd).length;
    textarea.value = textarea.value.slice(0, textarea.selectionEnd - 1)
     + textarea.value.slice(textarea.selectionEnd);
    textarea.selectionEnd = textarea.value.length - a;
  } else if (code === 'CapsLock') {
    if (!caps) {
      caps = true;
      r.forEach((e) => { e.textContent = e.textContent.toUpperCase(); });
    } else {
      caps = false;
      r.forEach((e) => { e.textContent = e.textContent.toLowerCase(); });
    }
  } else if (code === 'Space') {
    textarea.value += ' ';
  } else if (code === 'Tab') {
    textarea.value += '    ';
  } else if (code === 'Enter') {
    textarea.value += '\n';
  } else if (code === 'Delete') {
    const a = textarea.value.slice(textarea.selectionEnd + 1).length;
    textarea.value = textarea.value.slice(0, textarea.selectionEnd)
     + textarea.value.slice(textarea.selectionEnd + 1);
    textarea.selectionEnd = textarea.value.length - a;
  } else if (code === 'ArrowLeft') {
    textarea.selectionEnd -= 1;
  } else if (code === 'ArrowRight') {
    textarea.selectionStart += 1;
  } else if (code === 'ArrowDown') {
    const o = ' ';
    textarea.value += o.repeat(textarea.length);
  }
}

function mousedown(event) {
  textarea.focus();
  if (event.target.classList.contains('row1_item')) {
    event.target.classList.add('item_active');
    const code = event.target.dataset.text;
    checkKey(code);
    r.forEach((e) => {
      if (e === event.target) textarea.value += e.textContent;
    });
  }
}

function mouseup(event) {
  textarea.focus();
  if (event.target.classList.contains('row1_item')) event.target.classList.remove('item_active');
}

function focuc() {
  textarea.focus();
}

function keydown(event) {
  let key;
  keys.forEach((e) => {
    if (e.dataset.text === event.code) key = e;
  });
  key.classList.add('item_active');
}

function keyup(event) {
  let key;
  keys.forEach((e) => {
    if (e.dataset.text === event.code) key = e;
  });
  key.classList.remove('item_active');
  if ((key.dataset.text === 'ShiftLeft') && (event.ctrlKey === true)) {
    if (lang === 'en') { lang = 'ru'; } else { lang = 'en'; }
    getTranslate();
  }
  if (key.dataset.text === 'CapsLock') {
    if (!caps) {
      caps = true;
      r.forEach((e) => { e.textContent = e.textContent.toUpperCase(); });
    } else {
      caps = false;
      r.forEach((e) => { e.textContent = e.textContent.toLowerCase(); });
    }
  }
}

row.forEach((e) => e.addEventListener('mousedown', () => mousedown()));
row.forEach((e) => e.addEventListener('mouseup', () => mouseup()));
row.forEach((e) => e.addEventListener('mouseout', () => mouseup()));
row.forEach((e) => e.addEventListener('mouseover', () => focuc()));

textarea.addEventListener('keydown', () => keydown());
textarea.addEventListener('keyup', () => keyup());

function setLocalStorag() {
  localStorage.setItem('lang', lang);
}

window.addEventListener('beforeunload', setLocalStorag);
