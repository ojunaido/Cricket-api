animate = ['data-aos="fade-left"','data-aos="fade-right"','data-aos="fade-up-right"','data-aos="fade-down"','data-aos="zoom-in"','data-aos="zoom-in-left"','data-aos="zoom-in-right"','data-aos="zoom-in-left"','data-aos="zoom-in-left"']
    $.ajax({
    url:"https://cricapi.com/api/matchCalendar?apikey=CdEzfLBSkHZ3nXRpB6iPbvMmOwG3",
    success:function(data){
        
        for(i=0;i<5;i++){
             document.querySelector(".b-box").innerHTML += 
            `<div class="news-box n-${i}" ${animate}>
            <h2><span class="team">${data.data[i].name}</h2>
            <h6 class="s-date"><span class="type">${data.data[i].date}</span></h6>
          </div>`
        }
     
    }
    
    })
    function loadMore(){
    $(".load-more").remove();
    $.ajax({
        url:"https://cricapi.com/api/matchCalendar?apikey=CdEzfLBSkHZ3nXRpB6iPbvMmOwG3",
        success:function(data){
            for(i=5;i<11;i++){
                 document.querySelector(".b-box").innerHTML += 
                `<div class="news-box n-${i}" ${animate}>
                <h2><span class="team">${data.data[i].name}</h2>
                <h6 class="s-date"><span class="type">${data.data[i].date}</span></h6>
              </div>`
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
    
