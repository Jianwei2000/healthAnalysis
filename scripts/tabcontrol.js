//頁籤控制
const tabs = document.querySelectorAll('.tab');
const tabLinks = document.querySelectorAll('.tabs li');

tabLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        //1.先移除所有標籤的active
        tabLinks.forEach(link => link.classList.remove('active'));
        
        //2.給被點擊的標籤添加active
        link.classList.add('active');

        // 3.隱藏所有標籤內容
        tabs.forEach(tab => {
            tab.style.display = 'none';
            tab.classList.remove('active');
        });

        // 4.顯示被點擊的標籤
        tabs[index].style.display = 'block';
        setTimeout(() => {
            tabs[index].classList.add('active');
        }, 100); // 延遲100毫秒以確保樣式更新
    });
});