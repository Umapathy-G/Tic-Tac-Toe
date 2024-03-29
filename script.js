function loadData(){
    var flag = 1;
    const boxes = document.querySelectorAll(".box");
    const turnMsg = document.getElementById("turn-msg");
    boxes.forEach(box =>{
        box.addEventListener('click', (event)=>{
            if(flag == 1){
                event.target.value = 'X';
                event.target.style.color = 'darkblue';
                var win = checkWining();
                var isTie = checkMatchTie();
                alert(win)
                if(win !== "NO"){
                    alert("into no")
                    if(win === "X Win"){
                        alert('w')
                        turnMsg.innerText = win;
                    }
                    else if(win === "O Win"){
                        turnMsg.innerText = win;
                    }
                }
                else if(isTie){
                    turnMsg.innerText = 'Match Tie'
                }
                else{
                    turnMsg.innerText = 'O Turn'
                }
                flag = 0;
            }else{
                event.target.value = 'O';
                event.target.style.color = 'red';
                var win = checkWining();
                var isTie = checkMatchTie();
                if(win !== "NO"){
                    if(win === "X Win"){
                        turnMsg.innerText = win;
                    }
                    else if(win === "O Win"){
                        turnMsg.innerText = win;
                    }
                }
                else if(isTie){
                    turnMsg.innerText = 'Match Tie'
                }
                else{
                    turnMsg.innerText = 'X Turn'
                }
                flag = 1;
            }
            event.target.disabled = 'true';
        })
    });
}

const winning_combinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function checkWining(){
    var result = "";
    for(let i =0;i<winning_combinations.length;i++){
        const [val1,val2,val3] = winning_combinations[i];
        let b1Value = document.getElementById('box' + val1).value;
        let b2Value = document.getElementById('box' + val2).value;
        let b3Value = document.getElementById('box' + val3).value;

        if(b1Value === 'X' && b2Value ==='X' && b3Value === 'X'){
            // alert('X win');
            result = "X Win";
            disabledAll();
            break;
        }
        else if(b1Value === 'O' && b2Value ==='O' && b3Value === 'O'){
            // alert('O Win');
            result = "O Win";
            disabledAll();
            break;
        }else{
            result = "NO";
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
        box.disabled = 'true';
    });
}