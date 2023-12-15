var introContainer = document.getElementById("introContainer");
var tabAndImages = document.getElementById("tabAndImages");

window.addEventListener("scroll", function() {
    var scrollY = window.scrollY || window.pageYOffset;
    tabAndImages.style.transform = "translateY(-" + scrollY + "px)";
    introContainer.style.transform = "translateY(0)";
});

document.addEventListener("DOMContentLoaded", function() {
    openTab('tab1');
    changeLanguage();
});

function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
}

function changeLanguage() {
    var language = document.getElementById("language").value;
    var name = document.querySelector(".name");
    var feature = document.querySelector(".feature");
    var age = document.querySelector(".age");
    var birthday = document.querySelector(".birthday");
    var height = document.querySelector(".height");
    var personality = document.querySelector(".personality");
    var hobby = document.querySelector(".hobby");

    switch (language) {
        case "zh":
            name.innerHTML = "Astricia";
            feature.innerHTML = "兽耳，法杖，异瞳，星辰魔法";
            age.innerHTML = "18岁";
            birthday.innerHTML = "12月8日";
            height.innerHTML = "165cm";
            personality.innerHTML = "活泼，开朗，乐于助人";
            hobby.innerHTML = "收集古老故事，冰果布丁，温泉，毛茸茸的东西";
            break;
        case "en":
            name.innerHTML = "Astricia";
            feature.innerHTML = "Animal ears, staff, heterochromia, star magic";
            age.innerHTML = "18 years old";
            birthday.innerHTML = "December 8th";
            height.innerHTML = "165cm";
            personality.innerHTML = "Lively, cheerful, helpful";
            hobby.innerHTML = "Collecting ancient stories, ice fruit pudding, hot springs, furry things";
            break;
        case "ja":
            name.innerHTML = "アストリシア";
            feature.innerHTML = "動物の耳、杖、異色の瞳、星魔法";
            age.innerHTML = "18歳";
            birthday.innerHTML = "12月8日";
            height.innerHTML = "165cm";
            personality.innerHTML = "活発で明るく、助けることが好き";
            hobby.innerHTML = "古い物語を集めること、アイスフルーツプリン、温泉、毛皮のもの";
            break;
    }
}
