//设置cookie
export function setCookie(c_name, value, expiredays) {
    var exdate = new Date();　　　　
          exdate.setDate(exdate.getDate() + expiredays);　　　　
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "": ";expires=" + exdate.toGMTString());
}

//获取cookie key (验证账号)
function getCookieUserName(userName){
	var aCookie = document.cookie.split('=')
	for ( var i=0; i<aCookie.length; i++ ){
		if( aCookie[i] == userName ){
			return aCookie[i]
		}
	}　　
    return ""　　
}

//获取cookie value (验证密码)
export function getCookiePassword(password) {
    if (document.cookie.length > 0) {
        //检查这个cookie是否存在，不存在就为 -1
       let c_start = document.cookie.indexOf(password + "=")
        if (c_start != -1) {
            //获取cookie值的开始位置
            c_start = c_start + password.length + 1;
            //通过";"号是否存在来判断结束位置
            let c_end = document.cookie.indexOf(";", c_start);

            if (c_end == -1){
                c_end = document.cookie.length;
            }
            //通过substring()得到了值
            return document.cookie.substring(c_start, c_end)
        }　　　　
    }　　　　
    return ""　　
}

export default {
	install(Vue){
		Vue.prototype.$cookie = {
			setCookie,
			getCookiePassword,
			getCookieUserName
		}
	}
}