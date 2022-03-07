document.getElementById('btnNumber').onclick = function(){
    var numBer1 = parseInt(document.getElementById('number1').value);
    var numBer2 = parseInt(document.getElementById('number2').value);
    var numBer3 = parseInt(document.getElementById('number3').value);
    var KQ;
    if( numBer1 < numBer2 && numBer1 < numBer3 && numBer2 < numBer3 ){
        KQ = (numBer1+','+numBer2+','+numBer3);
    } else if( numBer1 < numBer2 && numBer1 < numBer3 && numBer3 < numBer2 ){
        KQ = (numBer1+','+numBer3+','+numBer2);
    } else if ( numBer2 < numBer1 && numBer2 < numBer3 && numBer1 < numBer3 ){    
        KQ = (numBer2+','+numBer1+','+numBer3);
    } else if ( numBer2 < numBer1 && numBer2 < numBer3 && numBer3 < numBer1 ){
        KQ = (numBer2+','+numBer3+','+numBer1);
    } else if ( numBer3 < numBer1 && numBer3 < numBer2 && numBer1 < numBer2 ){
        KQ = (numBer3+','+numBer1+','+numBer2);
    }
    else if(numBer3 < numBer1 && numBer3 < numBer2 && numBer2 < numBer1 ){
        KQ = (numBer3+','+numBer2+','+numBer1);
    }
    else{
        KQ = ('Không được có hai số trùng nhau');
    }
    document.getElementById('outputNumber').innerHTML = KQ; 
    document.getElementById('outputNumber').classList.add('thongbao');
}
document.getElementById('hi').onclick = function(){
    var nameFamily = document.getElementById('name').value;
    var people;
    if ( nameFamily == 'B') {
        people = 'Xin chào Bố';
    } else if (nameFamily == 'M'){
        people = 'Xin chào Mẹ';
    } else if (nameFamily == 'A')
    {
        people = 'Xin chào Anh';
    } else if (nameFamily == 'E'){
        people = 'Xin chào Em';
    }
    else{
        people = ('Mày không phải người trong nhà này');
    }
    document.getElementById('outputPeople').innerHTML = people;
    document.getElementById('outputPeople').classList.add('thongbao');
}
document.getElementById('btnXuat').onclick = function(){
    var a = parseInt(document.getElementById('n1').value);
    var b = parseInt(document.getElementById('n2').value);
    var c = parseInt(document.getElementById('n3').value);
    var chan = 0;
    var le = 0;
    var kqChanLe;
    if(a % 2 == 0){
        chan++;
    } else{
        le++;
    }
    if(b % 2 == 0){
        chan++;
    } else{
        le++;
    }
    if(c % 2 == 0){
        chan++;
    } else{
        le++;
    }
    kqChanLe = ('Vậy có ' + chan +' số chẵn '+'và '+ le + ' số lẻ');
    document.getElementById('outputChanLe').innerHTML = kqChanLe;
    document.getElementById('outputChanLe').classList.add('thongbao');  
}
document.getElementById('btnTamGiac').onclick = function(){
    var a,b,c;
    var kqTamGiac;
    a = parseInt(document.getElementById('canha').value);
    b = parseInt(document.getElementById('canhb').value);
    c = parseInt(document.getElementById('canhc').value);

    if( a == 0 || b == 0 || c == 0){
        kqTamGiac = 'Đây không phải là tam giác';
    }else if( a == b  && a == c){
        kqTamGiac = ('Đây là tam giác đều')
    }else if( a == b || a == c || b == c){
        kqTamGiac = ('Đây là tam giac cân');
    } else if(a*a ==  (b*b + c*c)  || b*b ==  (a*a + c*c)|| c*c ==  (a*a + b*b)){
        kqTamGiac = ('Đây là tam giác vuông');
    } else{
        kqTamGiac = ('Đây là tam giác thường');
    }
    document.getElementById('outputTamGiac').innerHTML = kqTamGiac;
    document.getElementById('outputTamGiac').classList.add('thongbao');
}


