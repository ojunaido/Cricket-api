function getStats(){
    let inputPID = document.querySelector(".player-stats").value;
$.ajax({
    url:`https://cricapi.com/api/playerStats?apikey=CdEzfLBSkHZ3nXRpB6iPbvMmOwG3&pid=${inputPID}`,
    success: function(data){
        document.querySelector(".pid").innerHTML = "";
        console.log(data)
        let bowling = [data.data.bowling.listA,data.data.bowling.firstClass,data.data.bowling.T20Is,data.data.bowling.ODIs];
        let batting = [data.data.batting.listA,data.data.batting.firstClass,data.data.batting.T20Is,data.data.batting.ODIs]; 
        setDesc();
        for(i=0;i<5;i++){
        var ctx = document.querySelector(`#bat-chart-${i}`).getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: ["Balls", "Wickets", "Matches", "Runs"],
                            datasets: [{
                                label: 'Batting',
                                data: [bowling[i].Balls, bowling[i].Wkts,bowling[i].Mat, bowling[i].Runs],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.7)',
                                    'rgba(54, 162, 235, 0.7)',
                                    'rgba(255, 206, 86, 0.7)',
                                    'rgba(75, 192, 192, 0.7)',
                                    'rgba(153, 102, 255, 0.7)',
                                    'rgba(255, 159, 64, 0.7)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                    });
                    var ctx = document.querySelector(`#bowl-chart-${i}`).getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: ["Runs", "Matches", "Inninings","Centuries"],
                            datasets: [{
                                label: '# of Votes',
                                data: [batting[i].Runs, batting[i].Mat, batting[i].Inns, batting[i]["100"]],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.7)',
                                    'rgba(54, 162, 235, 0.7)',
                                    'rgba(255, 206, 86, 0.7)',
                                    'rgba(75, 192, 192, 0.7)',
                                    'rgba(153, 102, 255, 0.7)',
                                    'rgba(255, 159, 64, 0.7)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                    });
                }
                function setDesc(){
                    document.querySelector(".p-stats").style.display = "flex";
                    document.querySelector(".dob").innerHTML = data.born;
                    document.querySelector(".bat-s").innerHTML = data.battingStyle;
                    document.querySelector(".ball-s").innerHTML = data.bowlingStyle;
                    document.querySelector(".names").innerHTML = data.name;
                    document.querySelector(".p-description").innerHTML = data.profile;
                    document.querySelector(".p-pic").src = data.imageURL;
                }
            }       
                
        })
    }
 
    function getPid(){
        let playerPid = document.querySelector(".pid-button").value;
        $.ajax({
        url:`https://cricapi.com/api/playerFinder?apikey=XYduQCdXDmRmszfo8WhJZqCvg1A3&name=${playerPid}`,
        success:function(data){
            document.querySelector(".p-stats").style.display = "none";
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
    function navBar() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    