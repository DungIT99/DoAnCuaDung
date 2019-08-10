var _Hoten = /^([A-Z\s*]{1,})$/;
var _Dc_email =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var _Sdt = /^(0)([3||9]{1,})([0-9]{8})$/;
var _Diachi = /^([a-z||A-Z||0-9\s*]{1,})$/;
var _Tieude = /^([a-z||A-Z||0-9]{1,})$/;

function guidi() {

    if (Hoten.value=="" || Dc_email.value == "" || Sdt.value == "" || Diachi.value == "" || Tieude.value=="") {
        alert("Bạn chưa điền đầy đủ thông tin");
        
        return false;
    }
    if (!_Hoten.test(Hoten.value)) {
        alert(" Họ tên phải viết hoa")
        return false;
    }
    if (!_Dc_email.test(Dc_email.value)) {
        alert(" Địa chỉ email chưa đúng cú pháp")
        return false;
    }
    if (!_Sdt.test(Sdt.value)) {
        alert("Số điện thoại chưa đúng cú pháp ")
        return false;
    }
    if (!_Diachi.test(Diachi.value)) {
        alert("Địa chỉ chưa đúng cú pháp ")
        return false;
    }
    if (!_Tieude.test(Tieude.value)) {
        alert("Tiêu đề không xác định ")
        return false;
    }
    
    else{
        alert("Bạn đã đăng ký thành công");
        return true;
    }


}
function chonlai(){
 alert("Mời bạn chỉnh sửa lại thông tin")
    
}
