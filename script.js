import data from './data.json' assert {type: 'json'};
console.log(data);

// function switchText(e) {
//     if(e.target.value==="Daily"){
//         document.getElementById('work-time').innerHTML = '5';
//         document.getElementById('play-time').innerHTML = '5';
//         document.getElementById('study-time').innerHTML = '5';
//         document.getElementById('exercise-time').innerHTML = '5';
//         document.getElementById('social-time').innerHTML = '5';
//         document.getElementById('self-time').innerHTML = '5';
//         document.getElementById('work-last').innerHTML = '5';
//         document.getElementById('play-last').innerHTML = '5';
//         document.getElementById('study-last').innerHTML = '5';
//         document.getElementById('exercise-last').innerHTML = '5';
//         document.getElementById('social-last').innerHTML = '5';
//         document.getElementById('self-last').innerHTML = '5';
//     }   
//     else if(e.target.value==="Weekly"){
//         document.getElementById('work-time').innerHTML = '15';
//         document.getElementById('play-time').innerHTML = '15';
//         document.getElementById('study-time').innerHTML = '15';
//         document.getElementById('exercise-time').innerHTML = '15';
//         document.getElementById('social-time').innerHTML = '15';
//         document.getElementById('self-time').innerHTML = '15';
//         document.getElementById('work-last').innerHTML = '15';
//         document.getElementById('play-last').innerHTML = '15';
//         document.getElementById('study-last').innerHTML = '15';
//         document.getElementById('exercise-last').innerHTML = '15';
//         document.getElementById('social-last').innerHTML = '15';
//         document.getElementById('self-last').innerHTML = '15';
//     }
//     else if(e.target.value==="Monthly"){
//         document.getElementById('work-time').innerHTML = '100';
//         document.getElementById('play-time').innerHTML = '100';
//         document.getElementById('study-time').innerHTML = '100';
//         document.getElementById('exercise-time').innerHTML = '100';
//         document.getElementById('social-time').innerHTML = '100';
//         document.getElementById('self-time').innerHTML = '100';
//         document.getElementById('work-last').innerHTML = '100';
//         document.getElementById('play-last').innerHTML = '100';
//         document.getElementById('study-last').innerHTML = '100';
//         document.getElementById('exercise-last').innerHTML = '100';
//         document.getElementById('social-last').innerHTML = '100';
//         document.getElementById('self-last').innerHTML = '100';
//     }
// }

// document.querySelector("form").addEventListener('change',switchText);