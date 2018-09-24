const handleList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var quesList = [
 {
    option: {
        A: false,
        B: false,
        C: false,
        D: false,
    },
    optionNum: 4,
    more: false
 }
];
var quesNum = 0;
var time = ['10', '00'];
var processId = null;
var lastMore = false;
var status = "paused";
function countdown() {
    if(time[1] == "00"){
        if(time[0] == "00"){
            clearInterval(processId);
            time = ["00", "00"];
            processId = setInterval(count, 1000);
            document.getElementById("time").style.color="rgb(255,125,125)";
        }else{
            time[0] = addZero(Number(time[0]) - 1);
            time[1] = "59"
        }
    }else{
        time[1] = addZero(Number(time[1]) - 1);
    }
    document.getElementById("time").innerText = time[0] + ':' + time[1];
}
function count() {
    if(time[1] == "59"){
            time[0] = addZero(Number(time[0]) + 1);
            time[1] = "00"
    }else{
        time[1] = addZero(Number(time[1]) + 1);
    }
    document.getElementById("time").innerText = time[0] + ':' + time[1];
}
function addZero(num) {
    return (num < 10) ? ('0' + String(num)) : String(num); 
}
function start_pause() {
    if(status === "paused") {
        processId = setInterval(countdown, 1000);
        document.getElementById("start_pause").innerText = "pause";
        document.getElementById("mark").style.display = "none";
        status = "start";
    }else if(status === "start") {
        clearInterval(processId);
        document.getElementById("start_pause").innerText = "start";
        document.getElementById("mark").style.display = "block";
        status = "paused"
    }
}
function display() {
    document.getElementById("optionArea").innerHTML = "";
    for(var i in quesList[quesNum].option) {
        document.getElementById("optionArea").innerHTML +=
            "<div class='optionLi'><div class='optionHandle_"
            + quesList[quesNum].option[i] + "' onclick=\"choose('"+ i + "')\">" + i + "</div></div>";
    }
    document.getElementById("modifyOptionNum").value = String(quesList[quesNum].optionNum);
    document.getElementById("quesNum").innerText = (1 + quesNum) + '/' + quesList.length;
    if(quesList[quesNum].more !== lastMore){
        lastMore = quesList[quesNum].more;
        if(quesList[quesNum].more) {
            document.getElementById("modifyMore").style.backgroundColor = "rgb(161,26,188)";
            document.getElementById("modifyMore").style.borderColor = "rgb(161,26,188)";
            document.getElementById("modifyMoreHandle").style.backgroundColor = "white";
            var left = 0;
            var animation = setInterval(
                () => {
                    left += 2;
                    document.getElementById("modifyMoreHandle").style.left = left + "px";
                    if(left >= 25) {clearInterval(animation);}
                },
                5
            )
        }else{
            document.getElementById("modifyMore").style.backgroundColor = "";
            document.getElementById("modifyMore").style.borderColor = "rgb(29,0,116)";
            document.getElementById("modifyMoreHandle").style.backgroundColor = "rgb(29,0,116)";
            var left = 25;
            var animation = setInterval(
                () => {
                    left -= 2;
                    document.getElementById("modifyMoreHandle").style.left = left + "px";
                    if(left <= 0) {clearInterval(animation);}
                },
                5
            )
        }
    }
}
function modifyOptionNum() {
    var optionNum = Number(document.getElementById("modifyOptionNum").value);
    quesList[quesNum] = {
        option: {},
        optionNum: optionNum,
        more: (optionNum > 4)
    };
    for(var i = 0; i < optionNum; ++i) {
        quesList[quesNum].option[handleList[i]] = false
    }
    quesList[quesNum].optionNum = optionNum;
    display();
}
function back() {
    if(quesNum > 0) {
        --quesNum;
        display();
    }
}
function next() {
    ++quesNum
    if(quesNum === quesList.length) {
        quesList[quesNum]= {
            option:{
                'A': false,
                'B': false,
                'C': false,
                'D': false
            },
            optionNum: 4,
            more: false
        };
        display();
    }
}
function choose(optionHandle) {
    if(!quesList[quesNum].more) {
        for(var i in quesList[quesNum].option){
            quesList[quesNum].option[i] = false;
        }
    }
    quesList[quesNum].option[optionHandle] = !quesList[quesNum].option[optionHandle];
    display();
}
function finish(){
    if(confirm("Are you sure to finish this exam?")){
        clearInterval(processId);
        status = "finished";
        document.getElementById("topBar").innerHTML = "Result";
        document.getElementsByClassName("config")[0].innerHTML =
            document.getElementsByClassName("config")[1].innerHTML = " ";
        document.getElementById("optionArea").innerHTML = "<div id='result'></div>"
        var text = "";
        for(var i in quesList){
            text += "<span class='result_quesNum'>" + (Number(i) + 1) + ".&nbsp;</span>";
            for(var j in quesList[i].option){
                if(quesList[i].option[j]){
                    text += j
                }
            }
            text += "<br/>\n"
        }
        document.getElementById("result").innerHTML = text;
    }
}
function modifyMore() {
    quesList[quesNum].more = !quesList[quesNum].more;
    display();
}
function modifyTime() {
    var inputStr = prompt("Please enter the time.\nFormat: <minute>:<second>.", time[0] + ':' + time[1]);
    var match1 = inputStr.match(/\d+\s*:\s*\d+/);
    if(match1 != null){
        match2 = match1[0].match(/\d+/g);
        if(Number(match2[1]) <= 59){
            time = [addZero(Number(match2[0])), addZero(Number(match2[1]))];
            document.getElementById("modifyTime").innerText = time[0] + ':' + time[1] + " (click to modify)";
        }else{
            alert("Invalid input second.\nThe input second must less than 60.");
        }
    }else{
        alert("Invalid input format.\nThe format must be \"<minute>:<second>\".");
    }
}
display();