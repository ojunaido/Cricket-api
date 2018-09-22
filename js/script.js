animate = ['data-aos="fade-left"', 'data-aos="fade-right"', 'data-aos="fade-up-right"', 'data-aos="fade-down"', 'data-aos="zoom-in"', 'data-aos="zoom-in-left"', 'data-aos="zoom-in-right"', 'data-aos="zoom-in-left"', 'data-aos="zoom-in-left"']
$.ajax({
    url: "https://cricapi.com/api/matches?apikey=XYduQCdXDmRmszfo8WhJZqCvg1A3",
    success: function(data) {

        console.log(data.matches[1]["team-1"]);
        for (i = 0; i < 5; i++) {
            if (data.matches[i].winner_team) {
                winner = data.matches[i].winner_team;
            } else {
                winner = "To Be decided";
            }
            if (data.matches[i].winner_team) {
                tossWinner = data.matches[i].toss_winner_team;
            } else {
                tossWinner = "To Be decided";
            }

            document.querySelector(".b-box").innerHTML +=
                `<div class="news-box n-${i}" ${animate[i]}>
            <h2><span class="team">${data.matches[i]["team-1"]}</span> vs <span class="team">${data.matches[i]["team-2"]}</span></h2>
            <h6><span class="type">${data.matches[i].type}</span></h6>
            <h5>Toss Winning Team: ${tossWinner}</h5>
            <h5>Winner Team: ${winner}</h5>
          </div>`
        }
    }
})

$.ajax({
    url: "https://cricapi.com/api/matchCalendar?apikey=CdEzfLBSkHZ3nXRpB6iPbvMmOwG3",
    success: function(data) {
        console.log(data)
        for (i = 0; i < 9; i++) {
            document.querySelector(".s-box").innerHTML +=
                `<div class="news-box" ${animate[i]}>
        <h2>${data.data[i].name}</h2>
        <h4>${data.data[i].date}</h4>
      </div>`
        }
    }
})

function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}