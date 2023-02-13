function reset(){
    location.reload()
}

function tambah(){
    var a = parseFloat(document.getElementById("angka1").value)
    var b = parseFloat(document.getElementById("angka2").value)
    var hasil;
    if(isNaN(a)|| isNaN(b)){
        alert("Lengkapi Angka 1 atau Angka 2")
        reset()
    }else{
        hasil = a + b;
        document.getElementById("hasil_utama").style.display='';
        document.getElementById("hasil").innerHTML = hasil;
    }
}

function kurang(){
    var a = parseFloat(document.getElementById("angka1").value)
    var b = parseFloat(document.getElementById("angka2").value)
    var hasil;
    if(isNaN(a)|| isNaN(b)){
        alert("Lengkapi Angka 1 atau Angka 2")
        reset()
    }else{
        hasil = a - b;
        document.getElementById("hasil_utama").style.display='';
        document.getElementById("hasil").innerHTML = hasil;
    }
}

function kali(){
    var a = parseFloat(document.getElementById("angka1").value)
    var b = parseFloat(document.getElementById("angka2").value)
    var hasil;
    if(isNaN(a)|| isNaN(b)){
        alert("Lengkapi Angka 1 atau Angka 2")
        reset()
    }else{
        hasil = a * b;
        document.getElementById("hasil_utama").style.display='';
        document.getElementById("hasil").innerHTML = hasil;
    }
}

function bagi(){
    var a = parseFloat(document.getElementById("angka1").value)
    var b = parseFloat(document.getElementById("angka2").value)
    var hasil;
    if(isNaN(a)|| isNaN(b)){
        alert("Lengkapi Angka 1 atau Angka 2")
        reset()
    }else{
        hasil = a / b;
        document.getElementById("hasil_utama").style.display='';
        document.getElementById("hasil").innerHTML = hasil;
    }
}

function modulo(){
    var a = parseFloat(document.getElementById("angka1").value)
    var b = parseFloat(document.getElementById("angka2").value)
    var hasil;
    if(isNaN(a)|| isNaN(b)){
        alert("Lengkapi Angka 1 atau Angka 2")
        reset()
    }else{
        hasil = a % b;
        document.getElementById("hasil_utama").style.display='';
        document.getElementById("hasil").innerHTML = hasil;
    }
}