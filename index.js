Countdown_Config = {

    //日期展示列表
    Time_list:[
        {
            Title:"First",
            Time:"2025/2/14"
        },
        {
            Title:"Second",
            Time:"2024/12/31"
        },
        {
            Title:"Third",
            Time:"2024/6/1"
        }
    ],
    Img_list:[
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg'
    ]
};
function printdata(){
    console.log(data);
}
function UpdateTime() {
    var now = new Date();
    var time = now.getFullYear()+'/';
    time = time + (now.getMonth()+1)+'/';
    time = time + String(now.getDate()+' ');
    time = time + String(now.getHours()<10?'0'+now.getHours():now.getHours())+':';
    time = time + String(now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes())+':';
    time = time + String(now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds());
    document.getElementById("now-time").innerHTML = time;
    setTimeout(()=>{
        UpdateTime();
    },1000);
}
function calday(time) {
    return -1*Math.floor((new Date()-new Date(time))/(24*3600*1000));
}

window.onload = ()=>{

    //加载当前日期
    UpdateTime();

    //加载倒数模块
    const Day_item = document.getElementById("Day_list");
    Countdown_Config.Time_list.forEach(item => {
        console.log(item.Title+':'+item.Time);
        Day_item.innerHTML = Day_item.innerHTML+ '<div class="Day-box"><div class="Day-clip clip-left"></div><div class="Day-clip clip-right"></div><div class="Day-title"><span id="Day_title">'+item.Title+'</span></div><div class="Day-text"><span id="Day_text">'+calday(item.Time)+'</span></div></div>';
    });

    //加载照片模块
    const Img_item = document.getElementById("Img_list");
    Countdown_Config.Img_list.forEach(item => {
        Img_item.innerHTML = Img_item.innerHTML+ '<div class="Img-box" style="background-image: url('+item+');"></div>';
    });
}