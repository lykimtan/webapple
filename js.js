
// // $(document).ready(function(){
// //   $("#signup").click(function(event){
// //     var pass = $("#passsignup").val();
// //     var users = $("#users").val();
// //     event.preventDefault();
// //     if(users !="")
// //     {
// //       if(users.length < 6)
// //       {
// //         alert("Tên đăng nhập phải từ 6 kí tự trở lên.")
// //         $("#users").focus();
// //         return false;
// //       }
// //     }
// //     else{
// //     alert("Vui lòng nhập tên đăng nhập.");
// //     $("#users").focus();
// //       return false;
// //     }

// //     if(pass !="")
// //     {
// //       if(pass.length < 8)
// //       {
// //         alert("Mật khẩu phải từ 8 kí tự");
// //         $("#passsignup").focus();
// //         return false;
// //       }
// //     }
// //     else{
// //       alert("Vui lòng nhập mật khẩu");
// //       return false;
// //     }
// //     alert("Chào mừng " + $("#users").val() + "\nChúc bạn có một trải nghiệm mua sắm tuyệt vời...");
// //     return true;
// //   });
// // })





























// function checkform(event)
// {
//   event.preventDefault();
//     var lastname = document.getElementById('lastname');
//     var firstname = document.getElementById('firstname');
//     var  email= document.getElementById('email');
//     var pass1 = document.getElementById('pass1');
//     var pass2 = document.getElementById('pass2');
//     var number = document.getElementById('number');
//     var user = document.getElementById('user');

//     if(lastname.value != '')
//     {
//         if(lastname.value.length <2)
//         {
//             alert('Nhập họ và tên lót hợp lệ');
//             lastname.focus();
//             return false;
//         }
//     }
    
//     else
//     {
//         alert('Vui lòng nhập họ và tên lót');
//         return false;
//     }

//     if(firstname.value != '')
//     {
//         if(firstname.value.length <2)
//         {
//             alert('Nhập tên lót hợp lệ.');
//             firstname.focus();
//             return false;
//         }
//     }
    
//     else
//     {
//         alert('Vui lòng nhập tên của bạn.');
//         firstname.focus();
//         return false;
//     }

//     if(email.value == '')
//     {
//             alert('Vui lòng nhập địa chỉ Email..');
//             email.focus();
//             return false;
//     }

//     if(number.value != '')
//     {
//         if(number.value.length !=10)
//         {
//             alert('Vui lòng nhập sdt hợp lệ (gồm 10 chữ số)');
//             number.focus();
//             return false;
//         }
//     }
    
//     else
//     {
//         alert('Vui lòng nhập số điện thoại.');
//         number.focus();
//         return false;
//     }

//     if(user.value != '')
//     {
//         if(user.value.length < 8)
//         {
//             alert('Nhập tên lớn hơn 8 kí tự');
//             user.focus();
//             return false;
//         }
//     }
    
//     else
//     {
//         alert('Vui lòng nhập tên đăng nhập');
//         user.focus();
//         return false;
//     }
    


//     if(pass1.value!= '')
//     {
//         if(pass1.value.lenght < 8 )
//         {
//             alert('Mật khẩu hợp lệ từ 8 kí tự trở lên');
//             pass1.focus();
//             return false;
//         }
//     }

//     else{
//         alert('Vui lòng nhập mật khẩu');
//         pass1.focus();
//         return false;
//     }

//     if(pass2.value!= '')
//     {
//         if(pass2.value != pass1.value )
//         {
//             alert('Mat khau khong khop nhau');
//             pass2.focus();
//             return false;
//         }
//     }

//     else{
//         alert('Vui lòng nhập mật khẩu');
//         pass2.focus();
//         return false;
//     }
//     var kq = "Chúc mừng "+ $("#lastname").val()  +" "+ $("#firstname").val() + " đã trở thành thành viên của Apple store.\n Nhanh tay đăng nhập vào biểu mẫu bên phải để nhận nhiều ưu đãi cho thành viên mới nào !";

//     alert(kq);
//     return true; 
// }

