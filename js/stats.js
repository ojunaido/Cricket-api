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