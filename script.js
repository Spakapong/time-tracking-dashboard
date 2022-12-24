import data from './data.json' assert {type: 'json'};

// data[i].title.toLowerCase() is a name of kind
let time = 'hr';

function switchText(e) {
    if(e.target.value==="Daily"){
        for (let i = 0; i < 6; i++) {
            if (data[i].timeframes.daily.current===1) {
                time = 'hr';
            } else {
                time = 'hrs';
            }
            document.getElementById(`${data[i].title.replace(/\s+/g, '-').toLowerCase()}-time`).innerHTML = `${data[i].timeframes.daily.current}${time}`;
            if (data[i].timeframes.daily.previous===1) {
                time = 'hr';
            } else {
                time = 'hrs';
            }
            document.getElementById(`${data[i].title.replace(/\s+/g, '-').toLowerCase()}-last`).innerHTML = `Previous - ${data[i].timeframes.daily.previous}${time}`;
        }
    }   
    else if(e.target.value==="Weekly"){
        for (let i = 0; i < 6; i++) {
            document.getElementById(`${data[i].title.replace(/\s+/g, '-').toLowerCase()}-time`).innerHTML = `${data[i].timeframes.weekly.current}hrs`;
            document.getElementById(`${data[i].title.replace(/\s+/g, '-').toLowerCase()}-last`).innerHTML = `Previous - ${data[i].timeframes.weekly.previous}hrs`;
        }
    }
    else if(e.target.value==="Monthly"){
        for (let i = 0; i < 6; i++) {
            document.getElementById(`${data[i].title.replace(/\s+/g, '-').toLowerCase()}-time`).innerHTML = `${data[i].timeframes.monthly.current}hrs`;
            document.getElementById(`${data[i].title.replace(/\s+/g, '-').toLowerCase()}-last`).innerHTML = `Previous - ${data[i].timeframes.monthly.previous}hrs`;
        }
    }
}

document.querySelector("form").addEventListener('change',switchText);