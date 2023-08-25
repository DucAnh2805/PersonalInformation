const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailInput = document.getElementById('emailInput');
const submitBtn = document.getElementById('submitBtn');
const infoList = document.getElementById('infoList');
const InputList = document.getElementById('beforeinput')
submitBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();

    if (regex.test(email)) {
        // Hiển thị thông tin cá nhân và ẩn form nhập email
        infoList.classList.remove('hidden');
        InputList.classList.add('hidden');
    } else {
        // Hiển thị thông báo lỗi
        alert('Email không hợp lệ');
    }
});
var check=true;
let viewmore = document.querySelectorAll(".viewmore")
viewmore.forEach(button =>{
    button.addEventListener('click',function(){
        let parent= button.closest(".bigbox")
        let box2 = parent.querySelector('.box2')
        if (check){
            parent.querySelector('.viewmore').innerHTML="View less"
            box2.classList.remove('hide')
            check = false;
        }
        else {
            check=true;
            box2.classList.add('hide')
            parent.querySelector('.viewmore').innerHTML="View more"

        }
    })
})
