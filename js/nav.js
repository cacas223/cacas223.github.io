document.addEventListener('pjax:complete', tonav);
document.addEventListener('DOMContentLoaded', tonav);
//响应pjax
function tonav() {

    var position = $(window).scrollTop();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > position) {

            document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");
        } else {
            document.getElementsByClassName("menus_items")[1].setAttribute("style", "");

        }
        position = scroll;
    });


}

function scrollToTop() {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");
    btf.scrollToDest(0, 500);
}