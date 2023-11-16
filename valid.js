// check form đăng nhập.
$(document).ready(function(event){
    $("#form-signup").validate({
        rules:{
            usered:{
                required: true,
                minlength: 8
            },
            passsignup:{
                required: true,
                minlength: 8,
            },
        }
        ,
        messages:{
            usered:{
                required: "Vui lòng nhập tên đăng nhập",
                minlength: "Tên đăng nhập phải từ 8 kí tự trở lên",
            },
            passsignup:{
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu phải từ 8 kí tự trở lên",
            }
        },
        submitHandler: function (form) {
            alert("Chúc mừng " + $("usered").val() + " đã đăng nhập thành công. Chúc bạn có một trải nghiệm mua sắm vui vẻ.");
            return false;
        }
        
    })

    })

$(document).ready(function(){
    //check from đăng kí
    $("#plugin").validate({

        rules:{
            lastname:{
                required: true,
                minlength: 2,
            },
            firstname: {
                required: true,
                minlength: 2,
            },
            email: {
                email: true,
                required: true,
            },
            number: {
                required: true,
                minlength: 10,
            },
            users:{
                required: true,
                minlength: 8,
            },
            pass1:{
                required: true,
                minlength: 8,
            },
            pass2: 
            {
                equalTo : "#pass1",
            },
        },
        messages:
        {
            lastname:{
                required: "Vui lòng nhập họ và tên lót",
                minlength: "Vui lòng nhập họ và tên lót phù hợp",
            },
            firstname:{
                required: "Vui lòng nhập tên",
                minlength: "Vui lòng nhập tên phù hợp",
            },
            email:{
                required: "Vui lòng nhập Email",
                email: "Vui lòng nhập địa chỉ Email phù hợp",
            },
            number:{
                required: "Vui lòng nhập số điện thoại của bạn",
                minlength: "Số điện thoại không phù hợp (Số điện thoại phù hợp phải có 10 chữ số)",
            },
            users:{
                required: "Vui lòng nhập tên đăng nhập",
                minlength: "Tên đăng nhập phải có ít nhât 8 kí tự",
            },
            pass1:{
                required: "Vui lòng đặt mật khẩu cho tài khoản của bạn.",
                minlength: "Mật khẩu hợp lệ phải có 8 kí tự.",
            },
            pass2:{
                equalTo: "Mật khẩu và đặt lại mật khẩu không khớp nhau",
            }
        },
        submitHandler: function(from)
        {
            alert("Chúc mừng " + $("#lastname").val() + $("#firstname").val() + " đã tạo tài khoản thành công! Hãy đăng nhập vào biểu mẫu bên phải để nhận nhiều ưu đãi hấp dẫn cho thành viên mới nào!" );
           return false;
        }
    })
})


