/*######################################피드 본문 사용자의 글 내용 더보기 버튼*/
function seeMore() {
    const plus = document.getElementById("seeMore");
    const btn =  document.getElementById("plus_btn");
    plus.classList.remove("hidden");
    btn.classList.add("hidden");
}
function seeMore1() {
    const plus = document.getElementById("seeMore1");
    const btn =  document.getElementById("plus_btn1");
    plus.classList.remove("hidden");
    btn.classList.add("hidden");
}
function seeMore2() {
    const plus = document.getElementById("seeMore2");
    const btn =  document.getElementById("plus_btn2");
    plus.classList.remove("hidden");
    btn.classList.add("hidden");
}

/*######################################스토리 부분 클릭하면 테두리 사라지는 거 구현*/
function changeBorder() {
    const first = document.getElementById("first_img_1");
    const second =  document.getElementById("sec_img_1");
    second.classList.remove("hidden");
    first.classList.add("hidden");
}
function changeBorder1() {
    const first = document.getElementById("first_img_2");
    const second =  document.getElementById("sec_img_2");
    second.classList.remove("hidden");
    first.classList.add("hidden");
}
function changeBorder2() {
    const first = document.getElementById("first_img_3");
    const second =  document.getElementById("sec_img_3");
    second.classList.remove("hidden");
    first.classList.add("hidden");
}
function changeBorder3() {
    const first = document.getElementById("first_img_4");
    const second =  document.getElementById("sec_img_4");
    second.classList.remove("hidden");
    first.classList.add("hidden");
}
function changeBorder4() {
    const first = document.getElementById("first_img_5");
    const second =  document.getElementById("sec_img_5");
    second.classList.remove("hidden");
    first.classList.add("hidden");
}

/*######################################home 모양 아이콘 클릭*/
$(function () {
        $("#home").on("click", function () {
            location.reload();
        })
    })

$(document).ready(function () {
    /*######################################모달 부분*/
    $('.trigger').on('click', function () {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        console.log("modal")
         // body 스크롤 방지
        document.body.classList.add("stop-scroll");
        return false;
    });
    $(function () {
        $("#close").on("click", function () {
            $("#modal-wrapper").hide();
            // 스크롤 방지 해제
            document.body.classList.remove("stop-scroll");
            location.reload();
        })
    });

    /*######################################게시 버튼 클릭*/
    $(function () {
        $('#post-button').on('click', function () {
            alert('게시 완료!')
        })
    })
    $(function () {
        $('#post-button1').on('click', function () {
            alert('게시 완료!')
        })
    })
    $(function () {
        $('#post-button2').on('click', function () {
            alert('게시 완료!')
        })
    })

    // show_reply();
});

 /*댓글 포스팅, 댓글 내용 가져와 보여주기 기능*/
// function show_reply() {
//         $.ajax({
//             type: 'GET',
//             url: '/insta',
//             data: {},
//             success: function (response) {
//                 const rows = response['replies']
//                 for (let i = 0; i < rows.length; i++) {
//                     const nickname = rows[i]['nickname']
//                     const reply = rows[i]['reply']
//
//                     let temp_html = `<p class="card-text id-text"><span style="font-weight: bold">${nickname}</span>${reply}</p>`
//                     $('#replying').append(temp_html);
//                 }
//             }
//         })
// }
//
// function save_reply() {
//         const nickname = $('#nickname').val();
//         const reply = $('#reply').val();
//
//         $.ajax({
//             type: 'POST',
//             url: '/insta',
//             data: {nickname_give: nickname, reply_give: reply},
//             success: function (response) {
//                 alert(response['msg'])
//                 window.location.reload();
//             }
//         });
//     }
