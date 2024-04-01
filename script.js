const app_var = ['X','O','X Turn','O Turn','X Win','O Win','Match Tie','NO'];
function gameStart(){
    const startBtn = document.querySelector('.start-btn');
    const game = document.querySelector('.wrap');
    const turnMsg = document.getElementById("turn-msg");
    const reload = document.getElementById("reload");

    startBtn.style.display = 'none';
    turnMsg.style.display = 'block';
    reload.style.display = 'block';
    game.style.display = 'block';
    if(flag === 1){
        turnMsg.innerText = 'X Turn'
    }
    else{
        turnMsg.innerText = 'O Turn';
    }
}

var flag = 1;
function loadData(){
    const boxes = document.querySelectorAll(".box");
    const strike = document.querySelector('.strike');
    const game = document.querySelector('.wrap');
    const resetBtn = document.querySelector('.reset-btn');
    const turnMsg = document.getElementById("turn-msg");
    const reload = document.getElementById("reload");

    boxes.forEach(box =>{
        box.addEventListener('click', (event)=>{
            if(flag == 1){
                event.target.value = app_var[0];
                event.target.style.color = 'darkblue';
                validate(app_var[3]);
                flag = 0;
            }else{
                event.target.value = app_var[1];
                event.target.style.color = 'red';
                validate(app_var[2]);
                flag = 1;
            }
            event.target.disabled = 'true';
        })
    });
    strike.style.display = 'none';
    game.style.display = 'none';   
    resetBtn.style.display = 'none'; 
    turnMsg.style.display = 'none'; 
    reload.style.display = 'none';
}

function validate(turn){
    const resetBtn = document.querySelector('.reset-btn');
    const turnMsg = document.getElementById("turn-msg");
    const strike = document.querySelector('.strike');
    var [win,win_index] = checkWining();
    var isTie = checkMatchTie();
    if(win !== app_var[7]){
        resetBtn.style.display = 'block';
        if(win === app_var[4]){
            strike.style.border = '2px solid blue';
            strike.style.boxShadow = '0 0 10px blue';
        }
        else if(win === app_var[5]){
            strike.style.border = '2px solid red';
            strike.style.boxShadow = '0 0 10px red';
        }
        if(win_index === 0){
            strike.style.width = '270px';
            strike.style.transform = 'rotate(0deg)';
            strike.style.top = '44px';
            strike.style.left = '65px';
        }
        else if(win_index === 1){
            strike.style.width = '270px';
            strike.style.transform = 'rotate(0deg)';
            strike.style.top = '150px';
            strike.style.left = '65px';
        }
        else if(win_index === 2){
            strike.style.width = '270px';
            strike.style.transform = 'rotate(0deg)';
            strike.style.top = '253px';
            strike.style.left = '65px';
        }
        else if(win_index === 3){
            strike.style.width = '270px';
            strike.style.transform = 'rotate(90deg)';
            strike.style.top = '150px';
            strike.style.left = '-45px';
        }
        else if(win_index === 4){
            strike.style.width = '270px';
            strike.style.transform = 'rotate(90deg)';
            strike.style.top = '150px';
            strike.style.left = '65px';
        }
        else if(win_index === 5){
            strike.style.width = '270px';
            strike.style.transform = 'rotate(90deg)';
            strike.style.top = '150px';
            strike.style.left = '170px';
        }
        else if(win_index === 6){
            strike.style.width = '330px'
            strike.style.transform = 'rotate(45deg)';
            strike.style.top = '160px';
            strike.style.left = '40px';
        }
        else if(win_index === 7){
            strike.style.width = '330px'
            strike.style.transform = 'rotate(135deg)';
            strike.style.top = '160px';
            strike.style.left = '25px';
        }
        strike.style.display = 'block';
        turnMsg.innerText = win;
    }
    else if(isTie){
        turnMsg.innerText = app_var[6];
    }
    else{
        turnMsg.innerText = turn;
    }
}

const winning_combinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function checkWining(){
    var result = [];
    for(let i =0;i<winning_combinations.length;i++){
        const [val1,val2,val3] = winning_combinations[i];
        let b1Value = document.getElementById('box' + val1).value;
        let b2Value = document.getElementById('box' + val2).value;
        let b3Value = document.getElementById('box' + val3).value;

        if(b1Value === app_var[0] && b2Value === app_var[0] && b3Value === app_var[0]){
            result[0] = app_var[4];
            result[1] = i;
            disabledAll();
            break;
        }
        else if(b1Value === app_var[1] && b2Value === app_var[1] && b3Value === app_var[1]){
            result[0] = app_var[5];
            result[1] = i;
            disabledAll();
            break;
        }else{
            result[0] = app_var[7];
        }
    }
    return result;
}

function checkMatchTie(){
    var result = true;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box)=>{
        if(box.value === ""){
            result = false;
        }
    });
    return result;
}

function disabledAll(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box)=>{
        box.disabled = true;
    });
}

function reset(){
    const resetBtn = document.querySelector('.reset-btn');
    const strike = document.querySelector('.strike');
    const turnMsg = document.getElementById("turn-msg");
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box)=>{
        box.value = '';
        box.disabled = false;
    });
    strike.style.display = 'none';
    resetBtn.style.display = 'none';
    if(flag === 1){
        turnMsg.innerText = 'X Turn'
    }
    else{
        turnMsg.innerText = 'O Turn';
    }
}

function reload(){
    location.reload();
}