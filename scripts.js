document.addEventListener('DOMContentLoaded', (event) => {
    const translations = {
        jp: {
            title: "「Astricia」参考資料",
            "basic-info-title": "基本情報",
            name: "名前: Astricia",
            feature: "特徴: 獣耳、杖、異なる目、星の魔法",
            age: "年齢: 18歳",
            birthday: "誕生日: 12月8日",
            height: "身長: 165cm",
            cup: "好み: 古い物語の収集、アイスフルーツプリン、温泉、ふわふわしたもの",
            character: "性格: 活発、明るい、助け合い",
            "warn-title": "作者：Yini_Ruohong",
            "warn-desc": "何かを書くのが好きな人",
            "healer-ver": "ノーマル",
            "healer-desc": "普段着",
            "idol-ver": "ウィンター",
            "idol-desc": "冬服"
        },
        zh: {
            title: "「Astricia」参考资料",
            "basic-info-title": "基本信息",
            name: "名字: Astricia",
            feature: "特征: 兽耳，法杖，异瞳，星辰魔法",
            age: "年龄: 18岁",
            birthday: "生日: 12月8日",
            height: "身高: 165cm",
            cup: "喜好: 收集古老故事，冰果布丁，温泉，毛茸茸的东西",
            character: "性格: 活泼，开朗，乐于助人",
            "warn-title": "作者：Yini_Ruohong",
            "warn-desc": "一个喜欢随便写点什么人",
            "healer-ver": "常服",
            "healer-desc": "常服",
            "idol-ver": "冬装",
            "idol-desc": "冬装"
        },
        en: {
            title: "Astricia Reference",
            "basic-info-title": "Basic Information",
            name: "Name: Astricia",
            feature: "Features: Beast ears, Staff, Heterochromia, Star Magic",
            age: "Age: 18",
            birthday: "Birthday: December 8",
            height: "Height: 165cm",
            cup: "Likes: Collecting ancient stories, Ice fruit pudding, Hot springs, Fluffy things",
            character: "Character: Lively, Cheerful, Helpful",
            "warn-title": "Author: Yini_Ruohong",
            "warn-desc": "A person who likes to write something",
            "healer-ver": "Normal",
            "healer-desc": "Normal attire",
            "idol-ver": "Winter",
            "idol-desc": "Winter attire"
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            el.textContent = translations[lang][key];
        });
    }

    document.querySelectorAll('[data-lang-switch]').forEach(el => {
        el.addEventListener('click', (event) => {
            event.preventDefault();  // 防止默认的链接跳转行为
            const lang = el.getAttribute('data-lang-switch');
            changeLanguage(lang);
        });
    });
});
// 获取模态框
var modal = document.getElementById('imageModal');

// 获取图片并将其插入到模态框中
var images = document.getElementsByClassName('clickable');
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// 获取 <span> 元素并设置关闭模态框的功能
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}
