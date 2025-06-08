function updateTime() {
    //获取时间
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    //获取日期
    // 获取日期部分
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始
    const day = now.getDate().toString().padStart(2, '0');

    // 获取星期几
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = weekdays[now.getDay()];

    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${year}-${month}-${day} ${weekday}`
    document.getElementById('currentTime').innerHTML = `
    <div class="date">${dateString}</div>
    <div class="time">${timeString}</div>
`;
}

// 初始化时间并每秒更新一次
updateTime();
setInterval(updateTime, 1000);