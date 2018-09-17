
    $.ajax({
    url:"http://cricapi.com/api/matches?apikey=XYduQCdXDmRmszfo8WhJZqCvg1A3",
    success:function(data){
        console.log(data.matches[1]["team-1"]);
        for(i=0;i<5;i++){
            document.querySelector(".b-box").innerHTML += 
            `<div class="news-box n-${i}">
            <h2><span class="team">${data.matches[i]["team-1"]}</span> vs <span class="team">${data.matches[i]["team-2"]}</span></h2>
            <h6><span class="type">${data.matches[i].type}</span></h6>
            <h5>Toss won by ${data.matches[i].toss_winner_team}</h5>
            <h5>Winner Team: ${data.matches[i].winner_team}</h5>
          </div>`
        }
        for(i=5;i<13;i++){
            document.querySelector(".s-box").innerHTML += 
            `<div class="news-box">
            <h2><span class="team">${data.matches[i]["team-1"]}</span> vs <span class="team">${data.matches[i]["team-2"]}</span></h2>
            <h6><span class="type">${data.matches[i].type}</span></h6>
            <h5>Toss won by ${data.matches[i].toss_winner_team}</h5>
            <h5>Winner Team: ${data.matches[i].winner_team}</h5>
          </div>`
        }
    }
    })
function getPid(){
    let playerPid = document.querySelector(".pid-button").value;
    $.ajax({
    url:`http://cricapi.com/api/playerFinder?apikey=XYduQCdXDmRmszfo8WhJZqCvg1A3&name=${playerPid}`,
    success:function(data){
        console.log(data.data[0].fullName);
        document.querySelector(".pid").innerHTML = "";
        for(i=0;i<data.data.length;i++){
            document.querySelector(".pid").innerHTML += 
            `<h3>FullName: ${data.data[i].name}</h3>
             <h3>PID: ${data.data[i].pid}</h3>
             <hr>`
        } 
    }
    })
}

