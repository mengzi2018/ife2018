document.getElementById("hobby1").onclick = function () {
    console.log("爬山")
}
document.getElementById("hobby2").onclick = function () {
    console.log("羽毛球")
}
document.getElementById("hobby3").onclick = function () {
    console.log("电影")
}
document.getElementById("resume").onclick = function () {
    var content=''
    var day = new Date()
    var time = day.getHours()
    if(time >=0 && time<12){
        content="goodMorning"
    }else if(time>=12&&time<18){
        content="goodafternoon"
    }else if(time>=14&&time<24){
        content = "goodevening"
    }
}