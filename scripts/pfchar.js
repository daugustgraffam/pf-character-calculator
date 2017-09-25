var totalPoints = 10; 

$(document).ready(function(){
   $("#totalPoints").html(totalPoints);
});

var str, dex, con, int, wis, cha
str = dex = con = int = wis = cha = 10;



$(document).ready(function(){
    $("#lowfant").on("click", function() {
        totalPoints=10;
    $("#totalPoints").html(totalPoints);
        str = dex = con = int = wis = cha = 10;
        $("#str").html(str);
        $("#dex").html(dex);
        $("#con").html(con);
        $("#int").html(int);
        $("#wis").html(wis);
        $("#cha").html(cha);
    });
    
});

$(document).ready(function(){
    $("#stanfant").on("click", function() {
        totalPoints=15;
    $("#totalPoints").html(totalPoints);
    str = dex = con = int = wis = cha = 10;
        $("#str").html(str);
        $("#dex").html(dex);
        $("#con").html(con);
        $("#int").html(int);
        $("#wis").html(wis);
        $("#cha").html(cha);
    });
});

$(document).ready(function(){
    $("#highfant").on("click", function() {
        totalPoints=20;
  $(".avail4").css("background-color", "");
        $(this).css("background-color", "#3897e0");  $("#totalPoints").html(totalPoints);
        str = dex = con = int = wis = cha = 10;
        $("#str").html(str);
        $("#dex").html(dex);
        $("#con").html(con);
        $("#int").html(int);
        $("#wis").html(wis);
        $("#cha").html(cha);
    });
    $("#highfant").click();
});

$(document).ready(function(){
    $("#epicfant").on("click", function() {
        totalPoints=25;
    $("#totalPoints").html(totalPoints);
        str = dex = con = int = wis = cha = 10;
        $("#str").html(str);
        $("#dex").html(dex);
        $("#con").html(con);
        $("#int").html(int);
        $("#wis").html(wis);
        $("#cha").html(cha);
    });
});

$(document).ready(function(){
    $(".avail4").on("click", function() {
        $(".avail4").css("background-color", "");
        $(this).css("background-color", "#3897e0");    
});

//STR


$(document).ready(function(){
    $("#strUp").click(function(){
       prevPoints=totalPoints; 
       
        if(str<13){
            totalPoints--;
        }else if(str>=13 && str<15) {
            totalPoints= totalPoints-2;
        }else if (str>=15 && str<17){
            totalPoints= totalPoints-3; 
        }else {
            totalPoints= totalPoints-4;
        }
       
       if(totalPoints<0){
                    //alert("The gods have not gifted you this many abilities!");
           totalPoints=prevPoints;
        }else{
            str++;
            $("#str").html(str);
 $("#totalPoints").html(totalPoints);
        }
       var endstr= str;
       console.log(endstr);
    });
    
// Attribute Down
    
    $("#strDown").click(function(){
        prevPoints=totalPoints;
        if(str<14){
            totalPoints++;
        }else if(str>=14 && str<16) {
            totalPoints= totalPoints+2;
        }else if(str>=16 && str<18){
            totalPoints= totalPoints+3;
        }
        else{
            totalPoints= totalPoints+4;
        }
        
        if(str<=1){
            alert("This will make you too weak.")
            totalPoints=prevPoints;
        } else {
            str--;
        $("#str").html(str);
        $("#totalPoints").html(totalPoints);
        }
        var endstr= str;
        console.log(endstr);
    }); totalPoints=totalPoints;
});


//DEX


$(document).ready(function(){
   $("#dexUp").click(function(){
       prevPoints=totalPoints; 
       
        if(dex<13){
            totalPoints--;
        }else if(dex>=13 && dex<15) {
            totalPoints= totalPoints-2;
        }else if (dex>=15 && dex<17){
            totalPoints= totalPoints-3; 
        }else {
            totalPoints= totalPoints-4;
        }
       
       if(totalPoints<0){
                    //alert("The gods have not gifted you this many abilities!");
           totalPoints=prevPoints;
        }else{
            dex++;
            $("#dex").html(dex);
 $("#totalPoints").html(totalPoints);
        } 
       console.log(dex);
    });
    
// Attribute Down
    
    $("#dexDown").click(function(){
        prevPoints=totalPoints;
        if(dex<14){
            totalPoints++;
        }else if(dex>=14 && dex<16) {
            totalPoints= totalPoints+2;
        }else if(dex>=16 && dex<18){
            totalPoints= totalPoints+3;
        }
        else{
            totalPoints= totalPoints+4;
        }
        
        if(dex<=1){
            alert("This will make you too weak.");
            totalPoints=prevPoints;
        } else {
            dex--;
        $("#dex").html(dex);
        $("#totalPoints").html(totalPoints);
        }
         
    }); totalPoints=totalPoints;
});

//CON


$(document).ready(function(){
   $("#conUp").click(function(){
       prevPoints=totalPoints; 
       
        if(con<13){
            totalPoints--;
        }else if(con>=13 && con<15) {
            totalPoints= totalPoints-2;
        }else if (con>=15 && con<17){
            totalPoints= totalPoints-3; 
        }else {
            totalPoints= totalPoints-4;
        }
       
       if(totalPoints<0){
                    //alert("The gods have not gifted you this many abilities!");
           totalPoints=prevPoints;
        }else{
            con++;
            $("#con").html(con);
 $("#totalPoints").html(totalPoints);
        }
    });
    
// Attribute Down
    
    $("#conDown").click(function(){
        prevPoints=totalPoints;
        if(con<14){
            totalPoints++;
        }else if(con>=14 && con<16) {
            totalPoints= totalPoints+2;
        }else if(con>=16 && con<18){
            totalPoints= totalPoints+3;
        }
        else{
            totalPoints= totalPoints+4;
        }
        
        if(con<=1){
            alert("This will make you too weak.");
            totalPoints=prevPoints;
        } else {
            con--;
        $("#con").html(con);
        $("#totalPoints").html(totalPoints);
        }
         
    }); totalPoints=totalPoints;
});


//INT


$(document).ready(function(){
   $("#intUp").click(function(){
       prevPoints=totalPoints; 
       
        if(int<13){
            totalPoints--;
        }else if(int>=13 && int<15) {
            totalPoints= totalPoints-2;
        }else if (int>=15 && int<17){
            totalPoints= totalPoints-3; 
        }else {
            totalPoints= totalPoints-4;
        }
       
       if(totalPoints<0){
                    //alert("The gods have not gifted you this many abilities!");
           totalPoints=prevPoints;
        }else{
            int++;
            $("#int").html(int);
 $("#totalPoints").html(totalPoints);
        }
    });
    
// Attribute Down
    
    $("#intDown").click(function(){
        prevPoints=totalPoints;
        if(int<14){
            totalPoints++;
        }else if(int>=14 && int<16) {
            totalPoints= totalPoints+2;
        }else if(int>=16 && int<18){
            totalPoints= totalPoints+3;
        }
        else{
            totalPoints= totalPoints+4;
        }
        
        if(int<=1){
            alert("This will make you too weak.");
            totalPoints=prevPoints;
        } else {
            int--;
        $("#int").html(int);
        $("#totalPoints").html(totalPoints);
        }
         
    }); totalPoints=totalPoints;
});


//WIS

$(document).ready(function(){
   $("#wisUp").click(function(){
       prevPoints=totalPoints; 
       
        if(wis<13){
            totalPoints--;
        }else if(wis>=13 && wis<15) {
            totalPoints= totalPoints-2;
        }else if (wis>=15 && wis<17){
            totalPoints= totalPoints-3; 
        }else {
            totalPoints= totalPoints-4;
        }
       
       if(totalPoints<0){
                    //alert("The gods have not gifted you this many abilities!");
           totalPoints=prevPoints;
        }else{
            wis++;
            $("#wis").html(wis);
 $("#totalPoints").html(totalPoints);
        }
    });
    
// Attribute Down
    
    $("#wisDown").click(function(){
        prevPoints=totalPoints;
        if(wis<14){
            totalPoints++;
        }else if(wis>=14 && wis<16) {
            totalPoints= totalPoints+2;
        }else if(wis>=16 && wis<18){
            totalPoints= totalPoints+3;
        }
        else{
            totalPoints= totalPoints+4;
        }
        
        if(wis<=1){
            alert("This will make you too weak.");
            totalPoints=prevPoints;
        } else {
            wis--;
        $("#wis").html(wis);
        $("#totalPoints").html(totalPoints);
        }
         
    }); totalPoints=totalPoints;
});


//CHA

$(document).ready(function(){
   $("#chaUp").click(function(){
       prevPoints=totalPoints; 
       
        if(cha<13){
            totalPoints--;
        }else if(cha>=13 && cha<15) {
            totalPoints= totalPoints-2;
        }else if (cha>=15 && cha<17){
            totalPoints= totalPoints-3; 
        }else {
            totalPoints= totalPoints-4;
        }
       
       if(totalPoints<0){
                    //alert("The gods have not gifted you this many abilities!");
           totalPoints=prevPoints;
        }else{
            cha++;
            $("#cha").html(cha);
 $("#totalPoints").html(totalPoints);
        }
    });
    
// Attribute Down
    
    $("#chaDown").click(function(){
        prevPoints=totalPoints;
        if(cha<14){
            totalPoints++;
        }else if(cha>=14 && cha<16) {
            totalPoints= totalPoints+2;
        }else if(cha>=16 && cha<18){
            totalPoints= totalPoints+3;
        }
        else{
            totalPoints= totalPoints+4;
        }
        
        if(cha<=1){
            alert("This will make you too weak.");
            totalPoints=prevPoints;
        } else {
            cha--;
        $("#cha").html(cha);
        $("#totalPoints").html(totalPoints);
        }
         
    }); totalPoints=totalPoints;
});


//RASCALLY RACES

//$("gnome").click(function() {
//    $(this).addClass(“.selected”);
//});

$(document).ready(function(){
    
    $("#gnome").click(function(){
        var finalStr= str-2;
        var finalDex= dex;
        var finalCon= con +2;
        var finalInt= int;
        var finalWis= wis;
        var finalCha= cha+2;
        $("#fSTR").html(finalStr);
        $("#fDEX").html(finalDex);
        $("#fCON").html(finalCon);
        $("#fINT").html(finalInt);
        $("#fWIS").html(finalWis);
        $("#fCHA").html(finalCha);
    });
});

$(document).ready(function(){
    
    $("#elf").click(function(){
        var finalStr= str;
        var finalDex= dex+2;
        var finalCon= con-2;
        var finalInt= int+2;
        var finalWis= wis;
        var finalCha= cha;
        $("#fSTR").html(finalStr);
        $("#fDEX").html(finalDex);
        $("#fCON").html(finalCon);
        $("#fINT").html(finalInt);
        $("#fWIS").html(finalWis);
        $("#fCHA").html(finalCha);
    });
});
    

$(document).ready(function(){
    
    $("#dwarf").click(function(){
        var finalStr= str;
        var finalDex= dex;
        var finalCon= con+2;
        var finalInt= int;
        var finalWis= wis+2;
        var finalCha= cha-2;
        $("#fSTR").html(finalStr);
        $("#fDEX").html(finalDex);
        $("#fCON").html(finalCon);
        $("#fINT").html(finalInt);
        $("#fWIS").html(finalWis);
        $("#fCHA").html(finalCha);
    });
});

$(document).ready(function(){
    
    $("#halfling").click(function(){
        var finalStr= str;
        var finalDex= dex;
        var finalCon= con+2;
        var finalInt= int;
        var finalWis= wis+2;
        var finalCha= cha-2;
        $("#fSTR").html(finalStr);
        $("#fDEX").html(finalDex);
        $("#fCON").html(finalCon);
        $("#fINT").html(finalInt);
        $("#fWIS").html(finalWis);
        $("#fCHA").html(finalCha);
    });
});

$(document).ready(function(){
    
    $("#STRb").click(function(){
        var finalStr= str+2;
        var finalDex= dex;
        var finalCon= con;
        var finalInt= int;
        var finalWis= wis;
        var finalCha= cha;
        $("#fSTR").html(finalStr);
        $("#fDEX").html(finalDex);
        $("#fCON").html(finalCon);
        $("#fINT").html(finalInt);
        $("#fWIS").html(finalWis);
        $("#fCHA").html(finalCha);
    });
});

$(document).ready(function(){
    
    $("#DEXb").click(function(){
        var finalStr= str;
        var finalDex= dex+2;
        var finalCon= con;
        var finalInt= int;
        var finalWis= wis;
        var finalCha= cha;
        $("#fSTR").html(finalStr);
        $("#fDEX").html(finalDex);
        $("#fCON").html(finalCon);
        $("#fINT").html(finalInt);
        $("#fWIS").html(finalWis);
        $("#fCHA").html(finalCha);
    });
});

$(document).ready(function(){
    
    $("#CONb").click(function(){
        var finalStr= str;
        var finalDex= dex;
        var finalCon= con+2;
        var finalInt= int;
        var finalWis= wis;
        var finalCha= cha;
        $("#fSTR").html(finalStr);
        $("#fDEX").html(finalDex);
        $("#fCON").html(finalCon);
        $("#fINT").html(finalInt);
        $("#fWIS").html(finalWis);
        $("#fCHA").html(finalCha);
    });
});

$(document).ready(function(){
    
    $("#INTb").click(function(){
        var finalStr= str;
        var finalDex= dex;
        var finalCon= con;
        var finalInt= int+2;
        var finalWis= wis;
        var finalCha= cha;
        $("#fSTR").html(finalStr);
        $("#fDEX").html(finalDex);
        $("#fCON").html(finalCon);
        $("#fINT").html(finalInt);
        $("#fWIS").html(finalWis);
        $("#fCHA").html(finalCha);
    });
});

$(document).ready(function(){
    
    $("#WISb").click(function(){
        var finalStr= str;
        var finalDex= dex;
        var finalCon= con;
        var finalInt= int;
        var finalWis= wis+2;
        var finalCha= cha;
        $("#fSTR").html(finalStr);
        $("#fDEX").html(finalDex);
        $("#fCON").html(finalCon);
        $("#fINT").html(finalInt);
        $("#fWIS").html(finalWis);
        $("#fCHA").html(finalCha);
    });
});

$(document).ready(function(){
    
    $("#CHAb").click(function(){
        var finalStr= str;
        var finalDex= dex;
        var finalCon= con;
        var finalInt= int;
        var finalWis= wis;
        var finalCha= cha+2;
        $("#fSTR").html(finalStr);
        $("#fDEX").html(finalDex);
        $("#fCON").html(finalCon);
        $("#fINT").html(finalInt);
        $("#fWIS").html(finalWis);
        $("#fCHA").html(finalCha);
    });
});

$(document).ready(function(){
    $(".races").on("click", function() {
        $(".races").css("background-color", "");
        $(".statsHuman").css("background-color", "");
        $(this).css("background-color", "#3897e0");    
});
});

$(document).ready(function(){
    $(".statsHuman").on("click", function() {
        $(".races").css("background-color", "");
        $(".statsHuman").css("background-color", "");
        $(this).css("background-color", "#3897e0");    
});
});});