    var BUTON = document.querySelectorAll("button"),

    BUTONsayi = BUTON.length,

    sonuc = document.querySelector("#sonuc"),

    baslangic = 0;

for (baslangic = 0; baslangic < BUTONsayi; baslangic++)
 {
    BUTON[baslangic].onclick = doit;
}

function doit() {

    var mdeger = this.innerHTML;

    if (mdeger == "=") 
    {
        try 
        {
            sonuc.value = eval(sonuc.value);
        } catch (e) 
        {
            sonuc.value = 0;
        }
        return;
    }

    sonuc.value = sonuc.value + mdeger;
}