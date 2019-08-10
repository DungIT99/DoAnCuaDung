var _hoten = /^([A-Z\s*]{1,})$/;
var _Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var _sdt = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
var _diachi = /^([a-z||A-Z||0-9]{1,})$/;
var _mk = /^([a-z||A-Z||0-9]{1,})$/;

function dangky() {

    if (hoten.value=="" || dc_email.value == "" || sdt.value == "" || diachi.value == "" || mk.value == "" || xn_mk.value == "") {
        alert("Bạn chưa điền đầy đủ thông tin");
        return false;
    }
    if (!_hoten.test(hoten.value)) {
        alert(" Họ tên phải viết hoa")
        return false;
    }
    if (!_Email.test(dc_email.value)) {
        alert(" Địa chỉ email chưa đúng cú pháp")
        return false;
    }
    if (!_sdt.test(sdt.value)) {
        alert("Số điện thoại chưa đúng cú pháp ")
        return false;
    }
    if (!_diachi.test(diachi.value)) {
        alert("Địa chỉ chưa đúng cú pháp ")
        return false;
    }
    if (!_mk.test(mk.value)) {
        alert("Mật khẩu chưa đúng cú pháp ")
        return false;
    }
    if ( mk.value != xn_mk.value) {
        alert("Xác nhận mật khẩu không khớp với mật khẩu ")
        return false;
    }
    else{
        alert("Bạn đã đăng ký thành công");
        return true;
    }


}
$('form.form_validate_dn').validate({
    rules:{
        _email:{
            required:true,
            email:true
        },
        _mk:{
            required:true,
        },

    },
    messages:{
        _email:{
            required:"Vui lòng nhập email",
            email:"Vui lòng nhập đúng định dạng email VD: abc123@gmail.com"
        },
        _mk:{
            required:"Vui lòng nhập mật khẩu",
        },
    }	
});
$('form.form_validate_dk').validate({
    rules:{
        hoten:{
            required:true,
            minlength:5,
            maxlength:30
        },
        _sdt:{
            required:true,
        },
        diachi:"required",
      
        _email:{
            required:true,
            email:true
        },
        mk:"required",
        xn_mk:{
            required:true,
            equalTo:'#_pass'
        }

    },
    messages:{
        hoten:{
            required:"Vui lòng nhập họ và tên",
            minlength:"Họ và tên phải có ít nhất 5 kí tự",
            maxlength:"Họ và tên không quá 30 kí tự"
        },
        sdt:{
            required:"Vui lòng nhập số điện thoại của bạn vào",

        },
        diachi:"Vui lòng nhập địa chỉ của bạn",
        
        _email:{
            required:"Vui lòng nhập email",
            email:"Vui lòng nhập đúng định dạng email VD: abc123@gmail.com"},
        mk:"Vui lòng nhập mật khẩu",
        xn_mk:{
            required:"Vui lòng nhập lại mật khẩu",
            equalTo:"Mật khẩu không khớp với mật khẩu đã nhập"
        },
    },	
});
// Form đặt hàng
$('form.form_validate_dh').validate({
    rules:{
        hoten:{
            required:true,
            minlength:5,
            maxlength:30
        },
        sdt:"required",
        _email:{
            required:true,
            email:true
        },
        diachi:"required",

    },
    messages:{
        ten:{
            required:"Vui lòng nhập họ và tên",
            minlength:"Họ và tên phải có ít nhất 5 kí tự",
            maxlength:"Họ và tên không quá 30 kí tự"
        },
        sdt:"Vui lòng nhập email",
        _email:{
            required:"Vui lòng nhập email",
            email:"Vui lòng nhập đúng định dạng email VD: abc123@gmail.com"
        },
    diachi:"Vui lòng nhập địa chỉ của bạn",

    }	
});
// Form liên hệ
$('form.form_validate_lh').validate({
    rules:{
        hoten:{
            required:true,
            minlength:5,
            maxlength:30
        },
        sdt:"required",
        _email:{
            required:true,
            email:true
        },
        _note:"required",

    },
    messages:{
        ten:{
            required:"Vui lòng nhập họ và tên",
            minlength:"Họ và tên phải có ít nhất 5 kí tự",
            maxlength:"Họ và tên không quá 30 kí tự"
        },
        sdt:"Vui lòng nhập email",
        _email:{
            required:"Vui lòng nhập email",
            email:"Vui lòng nhập đúng định dạng email VD: abc123@gmail.com"
        },
        _note:"Vui lòng nhập lí do của bạn",

    }	
});