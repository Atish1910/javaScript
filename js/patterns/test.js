function dsiplayASCI(){
    for(i = 0; i< 127; i++){
        ASCI = String.fromCharCode(17 + i);
        document.write(ASCI+ "\n");
    }
}

dsiplayASCI();