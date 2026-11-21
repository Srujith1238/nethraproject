function updateCurrentTime(){
    const now=new Date();
    const timeString=now.tolocaleTimeString();
    document.getElementById('current-time').textContent=timeString;

    setInterval(updateCurrentTime,1000);
    updateCurrentTime();
}