
    animate = ['data-aos="fade-left"','data-aos="fade-right"','data-aos="fade-up-right"','data-aos="fade-down"','data-aos="zoom-in"','data-aos="zoom-in-left"','data-aos="flip-up"','data-aos="flip-right"']
    $.ajax({
    url:"http://cricapi.com/api/matches?apikey=XYduQCdXDmRmszfo8WhJZqCvg1A3",
    success:function(data){
        console.log(data.matches[1]["team-1"]);
        for(i=0;i<5;i++){
            document.querySelector(".b-box").innerHTML += 
            `<div class="news-box n-${i}" ${animate[i]}>
            <h2><span class="team">${data.matches[i]["team-1"]}</span> vs <span class="team">${data.matches[i]["team-2"]}</span></h2>
            <h6><span class="type">${data.matches[i].type}</span></h6>
            <h5>Toss won by ${data.matches[i].toss_winner_team}</h5>
            <h5>Winner Team: ${data.matches[i].winner_team}</h5>
          </div>`
        }
        for(i=5;i<13;i++){
            document.querySelector(".s-box").innerHTML += 
            `<div class="news-box" ${animate[i-5]}>
            <h2><span class="team">${data.matches[i]["team-1"]}</span> vs <span class="team">${data.matches[i]["team-2"]}</span></h2>
            <h6><span class="type">${data.matches[i].type}</span></h6>
            <h5>Toss won by ${data.matches[i].toss_winner_team}</h5>
            <h5>Winner Team: ${data.matches[i].winner_team}</h5>
          </div>`
        }
    }
    })


