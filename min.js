let display=document.getElementById("display");
// فنكشن اظهار النتيجيه واضافه الارقام
function appendtodisplat(value){
     display.value+=value
}
// فنكشن مسح عنصر واحد فقط
function caler(){
    display.value=""
};
// فنكشن لمسح كل العتاضر
function deletlast(){
    display.value=display.value.slice(0,-1)
}
// فنكشن للعملليات الحسابيه
function calculate(){
    try{
        display.value =eval(display.value);
    }
    catch{
        display.value="errror"
    }
}