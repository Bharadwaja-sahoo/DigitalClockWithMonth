function currentDate(){
        var date=new Date();
        var hh=date.getHours();
        var mm=date.getMinutes();
        var ss=date.getSeconds();
        var dd=date.getDate();
        var mo=date.getMonth();
        var yy=date.getFullYear();
        var dy=date.getDay();
        
        var am_pm="Am";
        if(hh>=12){
            am_pm="Pm";
            if(hh>=12){
                hh-=12;
            }
            var day=["SUNDAY","MONDAY","TUESDAY","WEDNEEDAY","THRUSDAY","FRIDAY","SATURDAY"]
            dy=day[dy];
            var month=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
            mo=month[mo];
            // console.log(dy,mo);
            var allh1=document.querySelectorAll("h1");
            allh1[0].innerHTML=`${hh}:${mm} ${am_pm}`;
            allh1[1].innerHTML=`${dd}/${mo}/${yy}`;
            allh1[2].innerHTML=dy;
            allh1[3].innerHTML=ss;
            setTimeout(currentDate,1000)
        }
        // console.log(hh,mm,ss,dd,mo,yy,dy)
}
currentDate();