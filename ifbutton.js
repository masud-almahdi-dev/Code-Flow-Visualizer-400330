
var ifbutton = document.querySelector('#ifbutton');
ifbutton.addEventListener('click', (event) => {
    let mousepos = { x: event.clientX, y: event.clientY };
    placing = true;
    let latestnode = `<div class="node placing" style="width:20em;position: absolute; left: ${mousepos.x}px; top: ${mousepos.y}px; display:flex; flex-direction:column"><div class="title">If</div>
    <div class="nodebody" style="display:flex;flex-direction:column;width:100%;height:100%;">
        <div class="line" style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;font-size:0.8em;margin:0.5em 0em">
            <span style="display:flex;gap:1rem"><div class="circle ash"></div>Condition</span>
            <span style="display:flex;gap:1rem">True<div class="circle red"></div></span>
        </div>
        <div class="line" style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;font-size:0.8em;margin:0.5em 0em">
                <span style="display:flex;gap:1rem"><div class="plus transpash"></div>Else If</span>
                <span style="display:flex;gap:1rem">False<div class="circle red"></div></span>
        </div>
    </div>
    </div>`;
    document.querySelector('#screen').insertAdjacentHTML('beforeend', latestnode);
    let thisitem = document.querySelector(".placing")
    if(thisitem){
        let mousepos = { x: event.clientX, y: event.clientY };
        thisitem.style.left = mousepos.x - thisitem.offsetWidth / 2 + 'px';
        thisitem.style.top = mousepos.y - thisitem.offsetHeight / 2 + 'px';
    }
    
});

var stringbutton = document.querySelector('#stringbutton');
stringbutton.addEventListener('click', (event) => {
    let mousepos = { x: event.clientX, y: event.clientY };
    placing = true;
    let latestnode = `<div class="node string placing" style="width:20em;position: absolute; left: ${mousepos.x}px; top: ${mousepos.y}px; display:flex; flex-direction:column"><div class="title">String</div>
    <div class="nodebody" style="display:flex;flex-direction:column;width:100%;height:100%;">
        <div class="line" style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;font-size:0.8em;margin:0.5em 0em">
            <span style="display:flex;gap:1rem; align-items:center"><div class="circle ash"></div><span contenteditable="true" spellcheck="false">Name</span></span>
        </div>
        <div class="line" style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;font-size:0.8em;margin:0.5em 0em">
            <span style="display:flex;gap:1rem; align-items:center"><div class="circle ash"></div><span contenteditable="true" spellcheck="false">Alias</span></span>
        </div>
        <div class="line" style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;font-size:0.8em;margin:0.5em 0em">
            <span style="display:flex;gap:1rem; align-items:center">
                <div class="circle ash"></div>
                <span contenteditable="true" spellcheck="false">Data</span>
            </span>
            <span style="display:flex;gap:1rem"><div class="circle red"></div></span>
        </div>
    </div>
    </div>`;
    document.querySelector('#screen').insertAdjacentHTML('beforeend', latestnode);
    let thisitem = document.querySelector(".placing")
    if(thisitem){
        let mousepos = { x: event.clientX, y: event.clientY };
        thisitem.style.left = mousepos.x - thisitem.offsetWidth / 2 + 'px';
        thisitem.style.top = mousepos.y - thisitem.offsetHeight / 2 + 'px';
    }
    
});