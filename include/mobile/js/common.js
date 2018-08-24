/***** menu *****/
function admin() { location.href = "../adm/index.php"; }
function logo() { location.href = "../"; }
function home() { location.href = "../"; }
function login() { location.href = "/bbs/login.php?url=%2Findex.php&bo_table=m00"; }
function logout() { location.href = "/bbs/logout.php"; }
function modify() { location.href = "/bbs/member_confirm.php?url=register_form.php&bo_table=m00"; }
function join() { location.href = "/bbs/register.php?bo_table=m00"; }

function fav() { window.external.AddFavorite('http://hompy114.kr/', '�덊뵾114'); }
function webhard() { window.open("http://www.webhard.co.kr/","_blank"); }
function naver() { window.open("http://search.naver.com/search.naver?where=nexearch&query=%ED%99%88%ED%94%BC114","_blank"); }

function pop(val) { window.open("/pop.php?val="+val,"popup","width=500px,height=600px,scrollbars=yes,0,0,0,0,0,0"); }

function m1() { location.href = "/sub.php?bo_table=m11"; }
function m1s1() { location.href = "/sub.php?bo_table=m11"; }


/***** add *****/
function flash_obj(obj,width,height) {
  htmlstr="<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width=\""+width+"\" height=\""+height+"\">";
  htmlstr+="<param name=\"movie\" value=\""+obj+"\">";
  htmlstr+="<param name=\"quality\" value=\"high\">";
  htmlstr+="<param name=\"wmode\" value=\"transparent\">";
  htmlstr+="<embed src=\""+obj+"\" quality=\"high\" wmode=\"transparent\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" width=\""+width+"\" height=\""+height+"\"></embed>";
  htmlstr+="</object>";
  document.write(htmlstr);
}

function setPng24(obj) {
    obj.width=obj.height=1;
    obj.className=obj.className.replace(/\bpng24\b/i,'');
    obj.style.filter =
    "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
    return '';
}

function formatNumber() {
   if( (window.event.keyCode < 48) || (window.event.keyCode > 57) ) {
       if(window.event.keyCode != 13)
            event.returnValue = false;
       }
}

function ShowHide(id){
    var DivID = document.getElementById(id);
    if(DivID.style.display == 'none'){
        DivID.style.display = '';
    }else{
        DivID.style.display = 'none';
    }
}

function Display(id,val){
    var DivID = document.getElementById(id);
    DivID.style.display = val;
}

// 湲��먯닔 �쒗븳
function checkTextNum(obj,num,idnm) {
    var msgList = obj.value;
    var msgListLength = msgList.length;

    var limitSize = num;
    var charOne = "";
    var charByte = 0;
    var msgLen = 0;
    var msgLast = "";

    for(var i = 0; i < msgListLength; i++) {
     charOne = msgList.charAt(i);
     charByte++;

     if(charByte <= limitSize) {
      msgLen = i + 1;
     }
    }

    if(charByte > limitSize) {
     alert(num+"�먮� 珥덇낵�� �� �놁뒿�덈떎.");
     msgLast = msgList.substr(0, num);
     obj.value = msgLast;
     charByte = limitSize;
    }
    document.getElementById(idnm).innerHTML = charByte;
}

// readonly �띿꽦二쇨린
function input_readonly(id){
    var obj = document.getElementById(id);
    obj.value="";
    obj.readOnly=true;
    obj.disabled=true;
    obj.className="ed readonly";
}

// readonly �띿꽦��湲�
function input_insert(id){
    var obj = document.getElementById(id);
    obj.readOnly=false;
    obj.disabled=false;
    obj.className="point";
}

// radio �꾩닔 泥댄겕�щ� 寃���
function radio_check(nm)
{
    var redioCnt = document.getElementsByName(nm).length;
    var itemname = document.getElementsByName(nm)[0].getAttribute("itemname");
    var checkRadio = -1;
    for (var i = 0; i < redioCnt; i++) {
      if (document.getElementsByName(nm)[i].checked) {
        checkRadio = i;
      }
    }
    if(checkRadio == -1){
        wrestMsg = itemname + " : �꾩닔 �좏깮�낅땲��.\n";
        alert(wrestMsg);
        return false;
    }
}

// Element X媛� �뚯븘�닿린
function Element_X(Element) {
    var x=0;
    while (Element) {
        x+=Element.offsetLeft;
        Element=Element.offsetParent;
    }
    return x;
}

// Element Y媛� �뚯븘�닿린
function Element_Y(Element) {
    var y=0;
    while (Element) {
        y+=Element.offsetTop;
        Element=Element.offsetParent;
    }
    return y;
}

// �대떦 �ㅻ툕�앺듃�� 媛믨낵 val媛믪씠 �숈씪�섎㈃ 媛� 吏��곌린
function setTextField(obj,val){
    if(obj.value == val){
            obj.value = "";
    }
}

// 吏��뺣맂 ID�� 湲곕낯 value媛� �ㅼ젙
function set_value(id)
{
    var obj = document.getElementById(id);
    if(obj.value==""){
        obj.value = obj.title;
    }
}
/***** basic *****/

if (typeof(COMMON_JS) == 'undefined') { // �쒕쾲留� �ㅽ뻾
    var COMMON_JS = true;
    // �꾩뿭 蹂���
    var errmsg = "";
    var errfld;
    // �꾨뱶 寃���
    function check_field(fld, msg)
    {
        if ((fld.value = trim(fld.value)) == "")
            error_field(fld, msg);
        else
            clear_field(fld);
        return;
    }
    // �꾨뱶 �ㅻ쪟 �쒖떆
    function error_field(fld, msg)
    {
        if (msg != "")
            errmsg += msg + "\n";
        if (!errfld) errfld = fld;
        fld.style.background = "#BDDEF7";
    }
    // �꾨뱶瑜� 源⑤걮�섍쾶
    function clear_field(fld)
    {
        fld.style.background = "#FFFFFF";
    }
    function trim(s)
    {
        var t = "";
        var from_pos = to_pos = 0;
        for (i=0; i<s.length; i++)
        {
            if (s.charAt(i) == ' ')
                continue;
            else
            {
                from_pos = i;
                break;
            }
        }
        for (i=s.length; i>=0; i--)
        {
            if (s.charAt(i-1) == ' ')
                continue;
            else
            {
                to_pos = i;
                break;
            }
        }
        t = s.substring(from_pos, to_pos);
        //        alert(from_pos + ',' + to_pos + ',' + t+'.');
        return t;
    }
    // �먮컮�ㅽ겕由쏀듃濡� PHP�� number_format �됰궡瑜� ��
    // �レ옄�� , 瑜� 異쒕젰
    function number_format(data)
    {
        var tmp = '';
        var number = '';
        var cutlen = 3;
        var comma = ',';
        var i;
        len = data.length;
        mod = (len % cutlen);
        k = cutlen - mod;
        for (i=0; i<data.length; i++)
        {
            number = number + data.charAt(i);
            if (i < data.length - 1)
            {
                k++;
                if ((k % cutlen) == 0)
                {
                    number = number + comma;
                    k = 0;
                }
            }
        }
        return number;
    }
    // �� 李�
    function popup_window(url, winname, opt)
    {
        window.open(url, winname, opt);
    }
    // �쇰찓�� 李�
    function popup_formmail(url)
    {
        opt = 'scrollbars=yes,width=417,height=385,top=10,left=20';
        popup_window(url, "wformmail", opt);
    }
    // , 瑜� �놁븻��.
    function no_comma(data)
    {
        var tmp = '';
        var comma = ',';
        var i;
        for (i=0; i<data.length; i++)
        {
            if (data.charAt(i) != comma)
                tmp += data.charAt(i);
        }
        return tmp;
    }
    // ��젣 寃��� �뺤씤
    function del(href)
    {
        if(confirm("�쒕쾲 ��젣�� �먮즺�� 蹂듦뎄�� 諛⑸쾿�� �놁뒿�덈떎.\n\n�뺣쭚 ��젣�섏떆寃좎뒿�덇퉴?")) {
            if (g4_charset.toUpperCase() == 'EUC-KR')
                document.location.href = href;
            else
                document.location.href = encodeURI(href);
        }
    }
    // 荑좏궎 �낅젰
    function set_cookie(name, value, expirehours, domain)
    {
        var today = new Date();
        today.setTime(today.getTime() + (60*60*1000*expirehours));
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";";
        if (domain) {
            document.cookie += "domain=" + domain + ";";
        }
    }
    // 荑좏궎 �살쓬
    function get_cookie(name)
    {
        var find_sw = false;
        var start, end;
        var i = 0;
        for (i=0; i<= document.cookie.length; i++)
        {
            start = i;
            end = start + name.length;
            if(document.cookie.substring(start, end) == name)
            {
                find_sw = true
                break
            }
        }
        if (find_sw == true)
        {
            start = end + 1;
            end = document.cookie.indexOf(";", start);
            if(end < start)
                end = document.cookie.length;
            return document.cookie.substring(start, end);
        }
        return "";
    }
    // 荑좏궎 吏���
    function delete_cookie(name)
    {
        var today = new Date();
        today.setTime(today.getTime() - 1);
        var value = get_cookie(name);
        if(value != "")
            document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
    }
    // �대�吏��� �ш린�� �곕씪 �덉갹�� �ш린媛� 蹂�寃쎈맗�덈떎.
    // zzzz�섍퍡�� �뚮젮二쇱뀲�듬땲��. 2005/04/12
    function image_window(img)
    {
        var w = img.tmp_width;
        var h = img.tmp_height;
        var winl = (screen.width-w)/2;
        var wint = (screen.height-h)/3;
        if (w >= screen.width) {
            winl = 0;
            h = (parseInt)(w * (h / w));
        }
        if (h >= screen.height) {
            wint = 0;
            w = (parseInt)(h * (w / h));
        }
        var js_url = "<script language='JavaScript1.2'> \n";
            js_url += "<!-- \n";
            js_url += "var ie=document.all; \n";
            js_url += "var nn6=document.getElementById&&!document.all; \n";
            js_url += "var isdrag=false; \n";
            js_url += "var x,y; \n";
            js_url += "var dobj; \n";
            js_url += "function movemouse(e) \n";
            js_url += "{ \n";
            js_url += "  if (isdrag) \n";
            js_url += "  { \n";
            js_url += "    dobj.style.left = nn6 ? tx + e.clientX - x : tx + event.clientX - x; \n";
            js_url += "    dobj.style.top  = nn6 ? ty + e.clientY - y : ty + event.clientY - y; \n";
            js_url += "    return false; \n";
            js_url += "  } \n";
            js_url += "} \n";
            js_url += "function selectmouse(e) \n";
            js_url += "{ \n";
            js_url += "  var fobj      = nn6 ? e.target : event.srcElement; \n";
            js_url += "  var topelement = nn6 ? 'HTML' : 'BODY'; \n";
            js_url += "  while (fobj.tagName != topelement && fobj.className != 'dragme') \n";
            js_url += "  { \n";
            js_url += "    fobj = nn6 ? fobj.parentNode : fobj.parentElement; \n";
            js_url += "  } \n";
            js_url += "  if (fobj.className=='dragme') \n";
            js_url += "  { \n";
            js_url += "    isdrag = true; \n";
            js_url += "    dobj = fobj; \n";
            js_url += "    tx = parseInt(dobj.style.left+0); \n";
            js_url += "    ty = parseInt(dobj.style.top+0); \n";
            js_url += "    x = nn6 ? e.clientX : event.clientX; \n";
            js_url += "    y = nn6 ? e.clientY : event.clientY; \n";
            js_url += "    document.onmousemove=movemouse; \n";
            js_url += "    return false; \n";
            js_url += "  } \n";
            js_url += "} \n";
            js_url += "document.onmousedown=selectmouse; \n";
            js_url += "document.onmouseup=new Function('isdrag=false'); \n";
            js_url += "//--> \n";
            js_url += "</"+"script> \n";
        var settings;
        if (g4_is_gecko) {
            settings  ='width='+(w+10)+',';
            settings +='height='+(h+10)+',';
        } else {
            settings  ='width='+w+',';
            settings +='height='+h+',';
        }
        settings +='top='+wint+',';
        settings +='left='+winl+',';
        settings +='scrollbars=no,';
        settings +='resizable=yes,';
        settings +='status=no';
        win=window.open("","image_window",settings);
        win.document.open();
        win.document.write ("<html><head> \n<meta http-equiv='imagetoolbar' CONTENT='no'> \n<meta http-equiv='content-type' content='text/html; charset="+g4_charset+"'>\n");
        var size = "�대�吏� �ъ씠利� : "+w+" x "+h;
        win.document.write ("<title>"+size+"</title> \n");
        if(w >= screen.width || h >= screen.height) {
            win.document.write (js_url);
            var click = "ondblclick='window.close();' style='cursor:move' title=' "+size+" \n\n �대�吏� �ъ씠利덇� �붾㈃蹂대떎 �쎈땲��. \n �쇱そ 踰꾪듉�� �대┃�� �� 留덉슦�ㅻ� ��吏곸뿬�� 蹂댁꽭��. \n\n �붾툝 �대┃�섎㈃ �ロ���. '";
        }
        else
            var click = "onclick='window.close();' style='cursor:pointer' title=' "+size+" \n\n �대┃�섎㈃ �ロ���. '";
        win.document.write ("<style>.dragme{position:relative;}</style> \n");
        win.document.write ("</head> \n\n");
        win.document.write ("<body leftmargin=0 topmargin=0 bgcolor=#dddddd style='cursor:arrow;'> \n");
        win.document.write ("<table width=100% height=100% cellpadding=0 cellspacing=0><tr><td align=center valign=middle><img src='"+img.src+"' width='"+w+"' height='"+h+"' border=0 class='dragme' "+click+"></td></tr></table>");
        win.document.write ("</body></html>");
        win.document.close();
        if(parseInt(navigator.appVersion) >= 4){win.window.focus();}
    }
    // a �쒓렇�먯꽌 onclick �대깽�몃� �ъ슜�섏� �딄린 �꾪빐
    function win_open(url, name, option)
    {
        var popup = window.open(url, name, option);
        popup.focus();
    }
    // �고렪踰덊샇 李�
    function win_zip(frm_name, frm_zip1, frm_zip2, frm_addr1, frm_addr2)
    {
        url = g4_path + "/" + g4_bbs + "/zip.php?frm_name="+frm_name+"&frm_zip1="+frm_zip1+"&frm_zip2="+frm_zip2+"&frm_addr1="+frm_addr1+"&frm_addr2="+frm_addr2;
        win_open(url, "winZip", "left=50,top=50,width=616,height=460,scrollbars=1");
    }
    // 履쎌� 李�
    function win_memo(url)
    {
        if (!url)
            url = g4_path + "/" + g4_bbs + "/memo.php";
        win_open(url, "winMemo", "left=50,top=50,width=620,height=460,scrollbars=1");
    }
    // �ъ씤�� 李�
    function win_point(url)
    {
        win_open(g4_path + "/" + g4_bbs + "/point.php", "winPoint", "left=20, top=20, width=616, height=635, scrollbars=1");
    }
    // �ㅽ겕�� 李�
    function win_scrap(url)
    {
        if (!url)
            url = g4_path + "/" + g4_bbs + "/scrap.php";
        win_open(url, "scrap", "left=20, top=20, width=616, height=500, scrollbars=1");
    }
    // �⑥뒪�뚮뱶 遺꾩떎 李�
    function win_password_forget()
    {
        win_open(g4_path + "/" + g4_bbs + "/password_forget.php", 'winPasswordForget', 'left=50, top=50, width=616, height=500, scrollbars=1');
    }
    // 肄붾찘�� 李�
    function win_comment(url)
    {
        win_open(url, "winComment", "left=50, top=50, width=800, height=600, scrollbars=1");
    }
    // �쇰찓�� 李�
    function win_formmail(mb_id, name, email)
    {
    if (g4_charset.toLowerCase() == 'euc-kr')
          win_open(g4_path+"/" + g4_bbs + "/formmail.php?mb_id="+mb_id+"&name="+name+"&email="+email, "winFormmail", "left=50, top=50, width=600, height=500, scrollbars=0");
    else
          win_open(g4_path+"/" + g4_bbs + "/formmail.php?mb_id="+mb_id+"&name="+encodeURIComponent(name)+"&email="+email, "winFormmail", "left=50, top=50, width=600, height=480, scrollbars=0");
    }
    // �щ젰 李�
    function win_calendar(fld, cur_date, delimiter, opt)
    {
        if (!opt)
            opt = "left=50, top=50, width=240, height=230, scrollbars=0,status=0,resizable=0";
        win_open(g4_path+"/" + g4_bbs + "/calendar.php?fld="+fld+"&cur_date="+cur_date+"&delimiter="+delimiter, "winCalendar", opt);
    }
    // �ㅻЦ議곗궗 李�
    function win_poll(url)
    {
        if (!url)
            url = "";
        win_open(url, "winPoll", "left=50, top=50, width=616, height=500, scrollbars=1");
    }
    // �먭린�뚭컻 李�
    function win_profile(mb_id)
    {
        win_open(g4_path+"/" + g4_bbs + "/profile.php?mb_id="+mb_id, 'winProfile', 'left=50,top=50,width=620,height=510,scrollbars=1');
    }
    var last_id = null;
    function menu(id)
    {
        if (id != last_id)
        {
            if (last_id != null)
                document.getElementById(last_id).style.display = "none";
            document.getElementById(id).style.display = "block";
            last_id = id;
        }
        else
        {
            document.getElementById(id).style.display = "none";
            last_id = null;
        }
    }
    function textarea_decrease(id, row)
    {
        if (document.getElementById(id).rows - row > 0)
            document.getElementById(id).rows -= row;
    }
    function textarea_original(id, row)
    {
        document.getElementById(id).rows = row;
    }
    function textarea_increase(id, row)
    {
        document.getElementById(id).rows += row;
    }
    // 湲��レ옄 寃���
    function check_byte(content, target)
    {
        var i = 0;
        var cnt = 0;
        var ch = '';
        var cont = document.getElementById(content).value;
        for (i=0; i<cont.length; i++) {
            ch = cont.charAt(i);
            if (escape(ch).length > 4) {
                cnt += 2;
            } else {
                cnt += 1;
            }
        }
        // �レ옄瑜� 異쒕젰
        document.getElementById(target).innerHTML = cnt;
        return cnt;
    }
    // 釉뚮씪�곗��먯꽌 �ㅻ툕�앺듃�� �쇱そ 醫뚰몴
    function get_left_pos(obj)
    {
        var parentObj = null;
        var clientObj = obj;
        //var left = obj.offsetLeft + document.body.clientLeft;
        var left = obj.offsetLeft;
        while((parentObj=clientObj.offsetParent) != null)
        {
            left = left + parentObj.offsetLeft;
            clientObj = parentObj;
        }
        return left;
    }
    // 釉뚮씪�곗��먯꽌 �ㅻ툕�앺듃�� �곷떒 醫뚰몴
    function get_top_pos(obj)
    {
        var parentObj = null;
        var clientObj = obj;
        //var top = obj.offsetTop + document.body.clientTop;
        var top = obj.offsetTop;
        while((parentObj=clientObj.offsetParent) != null)
        {
            top = top + parentObj.offsetTop;
            clientObj = parentObj;
        }
        return top;
    }
    function flash_movie(src, ids, width, height, wmode)
    {
        var wh = "";
        if (parseInt(width) && parseInt(height))
            wh = " width='"+width+"' height='"+height+"' ";
        return "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' "+wh+" id="+ids+"><param name=wmode value="+wmode+"><param name=movie value="+src+"><param name=quality value=high><embed src="+src+" quality=high wmode="+wmode+" type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash' "+wh+"></embed></object>";
    }
    function obj_movie(src, ids, width, height, autostart)
    {
        var wh = "";
        if (parseInt(width) && parseInt(height))
            wh = " width='"+width+"' height='"+height+"' ";
        if (!autostart) autostart = false;
        return "<embed src='"+src+"' "+wh+" autostart='"+autostart+"'></embed>";
    }
    function doc_write(cont)
    {
        document.write(cont);
    }

    // �レ옄留� �낅젰 媛���
    function only_number()
    {
        var c = event.keyCode;
        if ((c < 48) || (57 < c)) {
            event.returnValue = false;
        }
    }
}