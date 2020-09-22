'use strict';

var modal = document.getElementById('modal');
var getClass = document.getElementById('menu-trigger');


// menu-triggerにactiveクラスを付与するイベント
getClass.addEventListener('click', function() {

    // アイコンの変更: ifでactiveを持っていた場合は取り除き、activeがないときはつけることにする
    if( getClass.classList.contains('active') === true ) {
        // activeクラスがある時(アイコンがclose=modalが出ているとき)に押すと
        // activeクラスを取り除いて、menuに戻す
        getClass.classList.remove('active');
        // 上記はgetClass.className += ' active";でも可

        // ついでにactiveクラスを取り除いたときにmodalを隠れるようにする
        modal.style.display = 'none';
    } else {
        // activeクラスがないとき(menuの時)は付与(closeにする)
        getClass.classList.add('active');
        modal.style.display = 'block';
    }
})

// modal部分以外をクリックで閉じるように。ボタンも元に戻る
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        getClass.classList.remove('active');
    }
});

var closeModal = document.querySelectorAll('#close-modal');

closeModal.forEach(function(item, index) {
    item.onclick = function () {
        modal.style.display = 'none';
        getClass.classList.remove('active');
    }
})


// https://yuyauver98.me/scroll-slide-animation/



// window.onscroll = function(){
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//     // ウィンドウのビューポートの下端の位置
//     var bottom = scrollTop + document.documentElement.clientHeight;

//     // 対象とする要素の上端の位置
//     var worksTop = document.getElementById('works-trigger').offsetTop;

//     if( worksTop < bottom ){
//         document.getElementById('works-trigger').classList.add('animation');
//     // }

//     // var workContentsY = document.getElementById
//         var worksImage = document.getElementsByClassName('works-image');

//         for(let i = 0; i < worksImage.length; i++) {

//             var element = worksImage[i];
//             element.classList.add('animation3');

//             if( i === 1) {
//                 element.classList.remove('animation3');
//                 element.classList.add('animation2');
//             }
//         }
//     }

//     var blogTop = document.getElementById('blog-trigger').offsetTop;

//     if( blogTop < bottom + 100 ){

//         document.getElementById('blog-trigger').classList.add('animation');

//         var flexImage = document.getElementsByClassName('flex-image');

//         for(let i = 0; i < flexImage.length; i++) {

//             var element = flexImage[i];
//             element.classList.add('animation3');

//             if( i === 1) {
//                 element.classList.remove('animation3');
//                 element.classList.add('animation2');
//             }
//         }

//         var flexH2 = document. querySelector('.blog-container h2');
//         flexH2.classList.add('animation2');
//     }
// }


window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // ウィンドウのビューポートの下端の位置
    var bottom = scrollTop + document.documentElement.clientHeight;

    // 対象とする要素の上端の位置
    var worksTop = document.getElementById('works-trigger').offsetTop;

    if( worksTop < bottom ){
        document.getElementById('works-trigger').classList.add('animation');

        var workContentsY = document.getElementById
        var worksImage = document.getElementsByClassName('works-image');

        for(let i = 0; i < worksImage.length; i++) {

            var element = worksImage[i];
            element.classList.add('animation3');

            if( i === 1) {
                element.classList.remove('animation3');
                element.classList.add('animation2');
            }
        }
    }

    var blogTop = document.getElementById('blog-trigger').offsetTop;

    if( blogTop < bottom + 100 ){

        document.getElementById('blog-trigger').classList.add('animation');

        var flexImage = document.getElementsByClassName('flex-image');

        for(let i = 0; i < flexImage.length; i++) {

            var element = flexImage[i];
            element.classList.add('animation3');

            if( i === 1) {
                element.classList.remove('animation3');
                element.classList.add('animation2');
            }
        }

        var flexH2 = document. querySelector('.blog-container h2');
        flexH2.classList.add('animation2');
    }
}


// https://so-zou.jp/web-app/tech/programming/javascript/event/handler/onscroll.htm
// https://techacademy.jp/magazine/27026

