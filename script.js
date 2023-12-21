var introContainer = document.getElementById("introContainer");
var tabAndImages = document.getElementById("tabAndImages");

function updateTransform() {
    var scrollY = window.scrollY || window.pageYOffset;
    tabAndImages.style.transform = "translateY(-" + scrollY + "px)";
    introContainer.style.transform = "translateY(0)";
}

window.addEventListener("scroll", function (event) {
    // 获取鼠标滚动事件发生的元素
    var targetElement = event.target || event.srcElement;

    // 检查滚动事件是否发生在图片容器上
    if (targetElement === document.documentElement || targetElement === document.body) {
        requestAnimationFrame(updateTransform);
    }
});

updateTransform();

document.addEventListener("DOMContentLoaded", function () {
    openTab('tab1');
    changeLanguage();
});

function openTab(tabName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = (tabcontent[i].id === tabName) ? "block" : "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    var activeButton = document.querySelector('[onclick="openTab(\'' + tabName + '\')"]');
    if (activeButton) {
        activeButton.classList.add("active");
    }
}

function changeLanguage() {
    var language = document.getElementById("language").value;
    var translations = {
        "zh": {
            "name": "Astricia",
            "feature": "兽耳，法杖，异瞳，星辰魔法",
            "age": "18岁",
            "birthday": "12月8日",
            "height": "165cm",
            "personality": "活泼，开朗，乐于助人",
            "hobby": "收集古老故事，冰果布丁，温泉，毛茸茸的东西"
        },
        "en": {
            "name": "Astricia",
            "feature": "Animal ears, staff, heterochromia, star magic",
            "age": "18 years old",
            "birthday": "December 8th",
            "height": "165cm",
            "personality": "Lively, cheerful, helpful",
            "hobby": "Collecting ancient stories, ice fruit pudding, hot springs, furry things"
        },
        "ja": {
            "name": "アストリシア",
            "feature": "動物の耳、杖、異色の瞳、星魔法",
            "age": "18歳",
            "birthday": "12月8日",
            "height": "165cm",
            "personality": "活発で明るく、助けることが好き",
            "hobby": "古い物語を集めること、アイスフルーツプリン、温泉、毛皮のもの"
        }
    };

    var updateTranslation = function (selector, translation) {
        var element = document.querySelector(selector);
        if (element) {
            element.innerHTML = translation;
        }
    };

    var languageTranslations = translations[language];
    if (languageTranslations) {
        updateTranslation(".name", languageTranslations.name);
        updateTranslation(".feature", languageTranslations.feature);
        updateTranslation(".age", languageTranslations.age);
        updateTranslation(".birthday", languageTranslations.birthday);
        updateTranslation(".height", languageTranslations.height);
        updateTranslation(".personality", languageTranslations.personality);
        updateTranslation(".hobby", languageTranslations.hobby);
    }
}
