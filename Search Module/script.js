var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function showResult(str) {
  if (str.length==0) { 
    document.getElementById("livesearch").innerHTML="";
    document.getElementById("livesearch"); 
    return;
  }
  if (window.XMLHttpRequest) {
    xmlhttp=new XMLHttpRequest();
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("livesearch").innerHTML=this.responseText;
      document.getElementById("livesearch"); 
    }
  }
  xmlhttp.open("GET","livesearch.php?q="+str,true);
  xmlhttp.send();
}

function showAnswer() {
	document.getElementById("show").disabled = true;
	//1
	document.getElementById("a08").value = "P";
	document.getElementById("b08").value = "E";
	document.getElementById("c08").value = "R";
	document.getElementById("d08").value = "S";
	document.getElementById("e08").value = "O";
	document.getElementById("f08").value = "N";
	document.getElementById("g08").value = "A";
	document.getElementById("h08").value = "L";
	document.getElementById("a08").disabled = true;
	document.getElementById("b08").disabled = true;
	document.getElementById("c08").disabled = true;
	document.getElementById("d08").disabled = true;
	document.getElementById("e08").disabled = true;
	document.getElementById("f08").disabled = true;
	document.getElementById("g08").disabled = true;
	document.getElementById("h08").disabled = true;
	document.getElementById("a08").style.borderColor = "red";
	document.getElementById("b08").style.borderColor = "red";
	document.getElementById("c08").style.borderColor = "red";
	document.getElementById("d08").style.borderColor = "red";
	document.getElementById("e08").style.borderColor = "red";
	document.getElementById("f08").style.borderColor = "red";
	document.getElementById("g08").style.borderColor = "red";
	document.getElementById("h08").style.borderColor = "red";
	//2
	document.getElementById("a16").value = "D";
	document.getElementById("b16").value = "E";
	document.getElementById("c16").value = "S";
	document.getElementById("d16").value = "T";
	document.getElementById("e16").value = "R";
	document.getElementById("f16").value = "O";
	document.getElementById("g16").value = "Y";
	document.getElementById("a16").disabled = true;
	document.getElementById("b16").disabled = true;
	document.getElementById("c16").disabled = true;
	document.getElementById("d16").disabled = true;
	document.getElementById("e16").disabled = true;
	document.getElementById("f16").disabled = true;
	document.getElementById("g16").disabled = true;
	document.getElementById("a16").style.borderColor = "red";
	document.getElementById("b16").style.borderColor = "red";
	document.getElementById("c16").style.borderColor = "red";
	document.getElementById("d16").style.borderColor = "red";
	document.getElementById("e16").style.borderColor = "red";
	document.getElementById("f16").style.borderColor = "red";
	document.getElementById("g16").style.borderColor = "red";
	//3
	document.getElementById("c04").value = "S";
	document.getElementById("d04").value = "E";
	document.getElementById("e04").value = "R";
	document.getElementById("f04").value = "V";
	document.getElementById("g04").value = "L";
	document.getElementById("h04").value = "E";
	document.getElementById("i04").value = "T";
	document.getElementById("c04").disabled = true;
	document.getElementById("d04").disabled = true;
	document.getElementById("e04").disabled = true;
	document.getElementById("f04").disabled = true;
	document.getElementById("g04").disabled = true;
	document.getElementById("h04").disabled = true;
	document.getElementById("i04").disabled = true;
	document.getElementById("c04").style.borderColor = "red";
	document.getElementById("d04").style.borderColor = "red";
	document.getElementById("e04").style.borderColor = "red";
	document.getElementById("f04").style.borderColor = "red";
	document.getElementById("g04").style.borderColor = "red";
	document.getElementById("h04").style.borderColor = "red";
	document.getElementById("i04").style.borderColor = "red";
	//4
	document.getElementById("b18").value = "B";
	document.getElementById("c18").value = "R";
	document.getElementById("d18").value = "O";
	document.getElementById("e18").value = "K";
	document.getElementById("f18").value = "E";
	document.getElementById("g18").value = "N";
	document.getElementById("h18").value = "A";
	document.getElementById("i18").value = "C";
	document.getElementById("j18").value = "C";
	document.getElementById("k18").value = "E";
	document.getElementById("l18").value = "S";
	document.getElementById("m18").value = "S";
	document.getElementById("b18").disabled = true;
	document.getElementById("c18").disabled = true;
	document.getElementById("d18").disabled = true;
	document.getElementById("e18").disabled = true;
	document.getElementById("f18").disabled = true;
	document.getElementById("g18").disabled = true;
	document.getElementById("h18").disabled = true;
	document.getElementById("i18").disabled = true;
	document.getElementById("j18").disabled = true;
	document.getElementById("k18").disabled = true;
	document.getElementById("l18").disabled = true;
	document.getElementById("m18").disabled = true;
	document.getElementById("b18").style.borderColor = "red";
	document.getElementById("c18").style.borderColor = "red";
	document.getElementById("d18").style.borderColor = "red";
	document.getElementById("e18").style.borderColor = "red";
	document.getElementById("f18").style.borderColor = "red";
	document.getElementById("g18").style.borderColor = "red";
	document.getElementById("h18").style.borderColor = "red";
	document.getElementById("i18").style.borderColor = "red";
	document.getElementById("j18").style.borderColor = "red";
	document.getElementById("k18").style.borderColor = "red";
	document.getElementById("l18").style.borderColor = "red";
	document.getElementById("m18").style.borderColor = "red";		
	//5
	document.getElementById("g02").value = "S";
	document.getElementById("h02").value = "E";
	document.getElementById("i02").value = "R";
	document.getElementById("j02").value = "V";
	document.getElementById("k02").value = "E";
	document.getElementById("l02").value = "R";
	document.getElementById("g02").disabled = true;
	document.getElementById("h02").disabled = true;
	document.getElementById("i02").disabled = true;
	document.getElementById("j02").disabled = true;
	document.getElementById("k02").disabled = true;
	document.getElementById("l02").disabled = true;
	document.getElementById("g02").style.borderColor = "red";
	document.getElementById("h02").style.borderColor = "red";
	document.getElementById("i02").style.borderColor = "red";
	document.getElementById("j02").style.borderColor = "red";
	document.getElementById("k02").style.borderColor = "red";
	document.getElementById("l02").style.borderColor = "red";
	//6
	document.getElementById("k04").value = "X";
	document.getElementById("l04").value = "X";
	document.getElementById("m04").value = "S";
	document.getElementById("k04").disabled = true;
	document.getElementById("l04").disabled = true;
	document.getElementById("m04").disabled = true;
	document.getElementById("k04").style.borderColor = "red";
	document.getElementById("l04").style.borderColor = "red";
	document.getElementById("m04").style.borderColor = "red";	
	//7	
	document.getElementById("h06").value = "I";
	document.getElementById("i06").value = "N";
	document.getElementById("j06").value = "J";
	document.getElementById("k06").value = "E";
	document.getElementById("l06").value = "C";
	document.getElementById("m06").value = "T";
	document.getElementById("n06").value = "I";
	document.getElementById("o06").value = "O";
	document.getElementById("p06").value = "N";	
	document.getElementById("h06").disabled = true;
	document.getElementById("i06").disabled = true;
	document.getElementById("j06").disabled = true;
	document.getElementById("k06").disabled = true;
	document.getElementById("l06").disabled = true;
	document.getElementById("m06").disabled = true;
	document.getElementById("n06").disabled = true;
	document.getElementById("o06").disabled = true;
	document.getElementById("p06").disabled = true;
	document.getElementById("h06").style.borderColor = "red";
	document.getElementById("i06").style.borderColor = "red";
	document.getElementById("j06").style.borderColor = "red";
	document.getElementById("k06").style.borderColor = "red";
	document.getElementById("l06").style.borderColor = "red";
	document.getElementById("m06").style.borderColor = "red";
	document.getElementById("n06").style.borderColor = "red";
	document.getElementById("o06").style.borderColor = "red";
	document.getElementById("p06").style.borderColor = "red";	
	//8
	document.getElementById("j14").value = "P";
	document.getElementById("k14").value = "H";
	document.getElementById("l14").value = "P";
	document.getElementById("m14").value = "P";
	document.getElementById("n14").value = "A";
	document.getElementById("o14").value = "R";
	document.getElementById("p14").value = "S";
	document.getElementById("q14").value = "E";
	document.getElementById("r14").value = "R";
	document.getElementById("j14").disabled = true;
	document.getElementById("k14").disabled = true;
	document.getElementById("l14").disabled = true;
	document.getElementById("m14").disabled = true;
	document.getElementById("n14").disabled = true;
	document.getElementById("o14").disabled = true;
	document.getElementById("p14").disabled = true;
	document.getElementById("q14").disabled = true;
	document.getElementById("r14").disabled = true;
	document.getElementById("j14").style.borderColor = "red";
	document.getElementById("k14").style.borderColor = "red";
	document.getElementById("l14").style.borderColor = "red";
	document.getElementById("m14").style.borderColor = "red";
	document.getElementById("n14").style.borderColor = "red";
	document.getElementById("o14").style.borderColor = "red";
	document.getElementById("p14").style.borderColor = "red";
	document.getElementById("q14").style.borderColor = "red";
	document.getElementById("r14").style.borderColor = "red";		
	
	//1	
	document.getElementById("c07").value = "P";
	document.getElementById("c08").value = "R";
	document.getElementById("c09").value = "E";
	document.getElementById("c10").value = "P";
	document.getElementById("c11").value = "R";
	document.getElementById("c12").value = "O";
	document.getElementById("c13").value = "C";
	document.getElementById("c14").value = "E";
	document.getElementById("c15").value = "S";
	document.getElementById("c16").value = "S";
	document.getElementById("c17").value = "O";
	document.getElementById("c18").value = "R";
	document.getElementById("c07").disabled = true;
	document.getElementById("c08").disabled = true;
	document.getElementById("c09").disabled = true;
	document.getElementById("c10").disabled = true;
	document.getElementById("c11").disabled = true;
	document.getElementById("c12").disabled = true;
	document.getElementById("c13").disabled = true;
	document.getElementById("c14").disabled = true;
	document.getElementById("c15").disabled = true;
	document.getElementById("c16").disabled = true;
	document.getElementById("c17").disabled = true;
	document.getElementById("c18").disabled = true;
	document.getElementById("c07").style.borderColor = "red";
	document.getElementById("c08").style.borderColor = "red";
	document.getElementById("c09").style.borderColor = "red";
	document.getElementById("c10").style.borderColor = "red";
	document.getElementById("c11").style.borderColor = "red";
	document.getElementById("c12").style.borderColor = "red";
	document.getElementById("c13").style.borderColor = "red";
	document.getElementById("c14").style.borderColor = "red";
	document.getElementById("c15").style.borderColor = "red";
	document.getElementById("c16").style.borderColor = "red";
	document.getElementById("c17").style.borderColor = "red";
	document.getElementById("c18").style.borderColor = "red";
	//2
	document.getElementById("f08").value = "N";
	document.getElementById("f09").value = "O";
	document.getElementById("f10").value = "D";
	document.getElementById("f11").value = "E";
	document.getElementById("f12").value = "J";
	document.getElementById("f13").value = "S";
	document.getElementById("f08").disabled = true;
	document.getElementById("f09").disabled = true;
	document.getElementById("f10").disabled = true;
	document.getElementById("f11").disabled = true;
	document.getElementById("f12").disabled = true;
	document.getElementById("f13").disabled = true;
	document.getElementById("f08").style.borderColor = "red";
	document.getElementById("f09").style.borderColor = "red";
	document.getElementById("f10").style.borderColor = "red";
	document.getElementById("f11").style.borderColor = "red";
	document.getElementById("f12").style.borderColor = "red";
	document.getElementById("f13").style.borderColor = "red";
	//3
	document.getElementById("h01").value = "D";
	document.getElementById("h02").value = "E";
	document.getElementById("h03").value = "S";
	document.getElementById("h04").value = "E";
	document.getElementById("h05").value = "R";
	document.getElementById("h06").value = "I";
	document.getElementById("h07").value = "A";
	document.getElementById("h08").value = "L";
	document.getElementById("h09").value = "I";
	document.getElementById("h10").value = "Z";
	document.getElementById("h11").value = "A";
	document.getElementById("h12").value = "T";
	document.getElementById("h13").value = "I";
	document.getElementById("h14").value = "O";
	document.getElementById("h15").value = "N";
	document.getElementById("h01").disabled = true;
	document.getElementById("h02").disabled = true;
	document.getElementById("h03").disabled = true;
	document.getElementById("h04").disabled = true;
	document.getElementById("h05").disabled = true;
	document.getElementById("h06").disabled = true;
	document.getElementById("h07").disabled = true;
	document.getElementById("h08").disabled = true;
	document.getElementById("h09").disabled = true;
	document.getElementById("h10").disabled = true;
	document.getElementById("h11").disabled = true;
	document.getElementById("h12").disabled = true;
	document.getElementById("h13").disabled = true;
	document.getElementById("h14").disabled = true;
	document.getElementById("h15").disabled = true;
	document.getElementById("h01").style.borderColor = "red";
	document.getElementById("h02").style.borderColor = "red";
	document.getElementById("h03").style.borderColor = "red";
	document.getElementById("h04").style.borderColor = "red";
	document.getElementById("h05").style.borderColor = "red";
	document.getElementById("h06").style.borderColor = "red";
	document.getElementById("h07").style.borderColor = "red";
	document.getElementById("h08").style.borderColor = "red";
	document.getElementById("h09").style.borderColor = "red";
	document.getElementById("h10").style.borderColor = "red";
	document.getElementById("h11").style.borderColor = "red";
	document.getElementById("h12").style.borderColor = "red";
	document.getElementById("h13").style.borderColor = "red";
	document.getElementById("h14").style.borderColor = "red";
	document.getElementById("h15").style.borderColor = "red";
	//4
	document.getElementById("n06").value = "I";
	document.getElementById("n07").value = "N";
	document.getElementById("n08").value = "I";
	document.getElementById("n09").value = "T";
	document.getElementById("n06").disabled = true;
	document.getElementById("n07").disabled = true;
	document.getElementById("n08").disabled = true;
	document.getElementById("n09").disabled = true;
	document.getElementById("n06").style.borderColor = "red";
	document.getElementById("n07").style.borderColor = "red";
	document.getElementById("n08").style.borderColor = "red";
	document.getElementById("n09").style.borderColor = "red";
	//5
	document.getElementById("p03").value = "A";
	document.getElementById("p04").value = "S";
	document.getElementById("p05").value = "Y";
	document.getElementById("p06").value = "N";
	document.getElementById("p07").value = "C";
	document.getElementById("p08").value = "H";
	document.getElementById("p09").value = "R";
	document.getElementById("p10").value = "O";
	document.getElementById("p11").value = "N";
	document.getElementById("p12").value = "O";
	document.getElementById("p13").value = "U";
	document.getElementById("p14").value = "S";
	document.getElementById("p03").disabled = true;
	document.getElementById("p04").disabled = true;
	document.getElementById("p05").disabled = true;
	document.getElementById("p06").disabled = true;
	document.getElementById("p07").disabled = true;
	document.getElementById("p08").disabled = true;
	document.getElementById("p09").disabled = true;
	document.getElementById("p10").disabled = true;
	document.getElementById("p11").disabled = true;
	document.getElementById("p12").disabled = true;
	document.getElementById("p13").disabled = true;
	document.getElementById("p14").disabled = true;
	document.getElementById("p03").style.borderColor = "red";
	document.getElementById("p04").style.borderColor = "red";
	document.getElementById("p05").style.borderColor = "red";
	document.getElementById("p06").style.borderColor = "red";
	document.getElementById("p07").style.borderColor = "red";
	document.getElementById("p08").style.borderColor = "red";
	document.getElementById("p09").style.borderColor = "red";
	document.getElementById("p10").style.borderColor = "red";
	document.getElementById("p11").style.borderColor = "red";
	document.getElementById("p12").style.borderColor = "red";
	document.getElementById("p13").style.borderColor = "red";
	document.getElementById("p14").style.borderColor = "red";
	//6
	document.getElementById("k04").value = "X";
	document.getElementById("k05").value = "X";
	document.getElementById("k06").value = "E";
	document.getElementById("k04").disabled = true;
	document.getElementById("k05").disabled = true;
	document.getElementById("k06").disabled = true;
	document.getElementById("k04").style.borderColor = "red";
	document.getElementById("k05").style.borderColor = "red";
	document.getElementById("k06").style.borderColor = "red";
}

function enterLetter(event) {
	
	var d1L = 0;
	var d1N = 0;
	var d1R = 0;
	var d2S = 0;
	var d2R = 0;
	var d3E = 0;
	var d5E = 0;
	var d6X = 0;
	var d7E = 0;
	var d7I = 0;
	var d7I2 = 0;
	var d7N = 0;
	var d8S = 0;
	var score = 0;
	
	//DOWN
	//1. PERSONAL
	if((a08.value == "p" || a08.value == "P") && (b08.value == "e" || b08.value == "E") && (c08.value == "r" || c08.value == "R") && (d08.value == "s" || d08.value == "S") && (e08.value == "o" || e08.value == "O") && (f08.value == "n" || f08.value == "N") && (g08.value == "a" || g08.value == "A") && (h08.value == "l" || h08.value == "L")) {
		document.getElementById("a08").style.borderColor = "green";
		document.getElementById("b08").style.borderColor = "green";
		document.getElementById("c08").style.borderColor = "green";
		document.getElementById("d08").style.borderColor = "green";
		document.getElementById("e08").style.borderColor = "green";
		document.getElementById("f08").style.borderColor = "green";
		document.getElementById("g08").style.borderColor = "green";
		document.getElementById("h08").style.borderColor = "green";
		document.getElementById("a08").disabled = true;
		document.getElementById("b08").disabled = true;
		document.getElementById("c08").disabled = true;
		document.getElementById("d08").disabled = true;
		document.getElementById("e08").disabled = true;
		document.getElementById("f08").disabled = true;
		document.getElementById("g08").disabled = true;
		document.getElementById("h08").disabled = true;
		document.getElementById("a08").style.fontWeight = "700";
		document.getElementById("b08").style.fontWeight = "700";
		document.getElementById("c08").style.fontWeight = "700";
		document.getElementById("d08").style.fontWeight = "700";
		document.getElementById("e08").style.fontWeight = "700";
		document.getElementById("f08").style.fontWeight = "700";
		document.getElementById("g08").style.fontWeight = "700";
		document.getElementById("h08").style.fontWeight = "700";
		d1R = 1;
		d1N = 1;
		d1L = 1;
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("a08").style.borderColor = "black";
		document.getElementById("b08").style.borderColor = "black";
		document.getElementById("c08").style.borderColor = "black";
		document.getElementById("d08").style.borderColor = "black";
		document.getElementById("e08").style.borderColor = "black";
		document.getElementById("f08").style.borderColor = "black";
		document.getElementById("g08").style.borderColor = "black";
		document.getElementById("h08").style.borderColor = "black";
		document.getElementById("a08").style.fontWeight = "100";
		document.getElementById("b08").style.fontWeight = "100";
		document.getElementById("c08").style.fontWeight = "100";
		document.getElementById("d08").style.fontWeight = "100";
		document.getElementById("e08").style.fontWeight = "100";
		document.getElementById("f08").style.fontWeight = "100";
		document.getElementById("g08").style.fontWeight = "100";
	}
	
	//2. DESTROY
	if((a16.value == "d" || a16.value == "D") && (b16.value == "e" || b16.value == "E") && (c16.value == "s" || c16.value == "S") && (d16.value == "t" || d16.value == "T") && (e16.value == "r" || e16.value == "R") && (f16.value == "o" || f16.value == "O") && (g16.value == "y" || g16.value == "Y")) {
		document.getElementById("a16").style.borderColor = "green";
		document.getElementById("b16").style.borderColor = "green";
		document.getElementById("c16").style.borderColor = "green";
		document.getElementById("d16").style.borderColor = "green";
		document.getElementById("e16").style.borderColor = "green";
		document.getElementById("f16").style.borderColor = "green";
		document.getElementById("g16").style.borderColor = "green";
		document.getElementById("a16").disabled = true;
		document.getElementById("b16").disabled = true;
		document.getElementById("c16").disabled = true;
		document.getElementById("d16").disabled = true;
		document.getElementById("e16").disabled = true;
		document.getElementById("f16").disabled = true;
		document.getElementById("g16").disabled = true;
		document.getElementById("a16").style.fontWeight = "700";
		document.getElementById("b16").style.fontWeight = "700";
		document.getElementById("c16").style.fontWeight = "700";
		document.getElementById("d16").style.fontWeight = "700";
		document.getElementById("e16").style.fontWeight = "700";
		document.getElementById("f16").style.fontWeight = "700";
		document.getElementById("g16").style.fontWeight = "700";
		d2S = 1;
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("a16").style.borderColor = "black";
		document.getElementById("b16").style.borderColor = "black";
		document.getElementById("c16").style.borderColor = "black";
		document.getElementById("d16").style.borderColor = "black";
		document.getElementById("e16").style.borderColor = "black";
		document.getElementById("f16").style.borderColor = "black";
		document.getElementById("g16").style.borderColor = "black";
		document.getElementById("a16").style.fontWeight = "100";
		document.getElementById("b16").style.fontWeight = "100";
		document.getElementById("c16").style.fontWeight = "100";
		document.getElementById("d16").style.fontWeight = "100";
		document.getElementById("e16").style.fontWeight = "100";
		document.getElementById("f16").style.fontWeight = "100";
		document.getElementById("g16").style.fontWeight = "100";	
	}
	
	//3. SERVLET
	if((c04.value == "s" || c04.value == "S") && (d04.value == "e" || d04.value == "E") && (e04.value == "r" || e04.value == "R") && (f04.value == "v" || f04.value == "V") && (g04.value == "l" || g05.value == "L") && (h04.value == "e" || h04.value == "E") && (i04.value == "t" || i04.value == "T")) {
		document.getElementById("c04").style.borderColor = "green";
		document.getElementById("d04").style.borderColor = "green";
		document.getElementById("e04").style.borderColor = "green";
		document.getElementById("f04").style.borderColor = "green";
		document.getElementById("g04").style.borderColor = "green";
		document.getElementById("h04").style.borderColor = "green";
		document.getElementById("i04").style.borderColor = "green";
		document.getElementById("c04").disabled = true;
		document.getElementById("d04").disabled = true;
		document.getElementById("e04").disabled = true;
		document.getElementById("f04").disabled = true;
		document.getElementById("g04").disabled = true;
		document.getElementById("h04").disabled = true;
		document.getElementById("i04").disabled = true;
		document.getElementById("c04").style.fontWeight = "700";
		document.getElementById("d04").style.fontWeight = "700";
		document.getElementById("e04").style.fontWeight = "700";
		document.getElementById("f04").style.fontWeight = "700";
		document.getElementById("g04").style.fontWeight = "700";
		document.getElementById("h04").style.fontWeight = "700";
		document.getElementById("i04").style.fontWeight = "700";
		d3E = 1;
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("c04").style.borderColor = "black";
		document.getElementById("d04").style.borderColor = "black";
		document.getElementById("e04").style.borderColor = "black";
		document.getElementById("f04").style.borderColor = "black";
		document.getElementById("g04").style.borderColor = "black";
		document.getElementById("h04").style.borderColor = "black";
		document.getElementById("i04").style.borderColor = "black";
		document.getElementById("c04").style.fontWeight = "100";
		document.getElementById("d04").style.fontWeight = "100";
		document.getElementById("e04").style.fontWeight = "100";
		document.getElementById("f04").style.fontWeight = "100";
		document.getElementById("g04").style.fontWeight = "100";	
		document.getElementById("h04").style.fontWeight = "100";
		document.getElementById("i04").style.fontWeight = "100";
	}
	
	//4. BROKENACCESS
	if((b18.value == "b" || b18.value == "B") && (c18.value == "r" || c18.value == "R") && (d18.value == "o" || d18.value == "O") && (e18.value == "k" || e18.value == "K") && (f18.value == "e" || f18.value == "E") && (g18.value == "n" || g18.value == "N") && (h18.value == "a" || h18.value == "A") && (i18.value == "c" || i18.value == "C") && (j18.value == "c" || j18.value == "C") && (k18.value == "e" || k18.value == "E") && (l18.value == "s" || l18.value == "S") && (m18.value == "s" || m18.value == "S")) {
		document.getElementById("b18").style.borderColor = "green";
		document.getElementById("c18").style.borderColor = "green";
		document.getElementById("d18").style.borderColor = "green";
		document.getElementById("e18").style.borderColor = "green";
		document.getElementById("f18").style.borderColor = "green";
		document.getElementById("g18").style.borderColor = "green";
		document.getElementById("h18").style.borderColor = "green";
		document.getElementById("i18").style.borderColor = "green";
		document.getElementById("j18").style.borderColor = "green";
		document.getElementById("k18").style.borderColor = "green";
		document.getElementById("l18").style.borderColor = "green";
		document.getElementById("m18").style.borderColor = "green";
		document.getElementById("b18").disabled = true;
		document.getElementById("c18").disabled = true;
		document.getElementById("d18").disabled = true;
		document.getElementById("e18").disabled = true;
		document.getElementById("f18").disabled = true;
		document.getElementById("g18").disabled = true;
		document.getElementById("h18").disabled = true;
		document.getElementById("i18").disabled = true;
		document.getElementById("j18").disabled = true;
		document.getElementById("k18").disabled = true;
		document.getElementById("l18").disabled = true;
		document.getElementById("m18").disabled = true;	
		document.getElementById("b18").style.fontWeight = "700";
		document.getElementById("c18").style.fontWeight = "700";
		document.getElementById("d18").style.fontWeight = "700";
		document.getElementById("e18").style.fontWeight = "700";
		document.getElementById("f18").style.fontWeight = "700";
		document.getElementById("g18").style.fontWeight = "700";
		document.getElementById("h18").style.fontWeight = "700";
		document.getElementById("i18").style.fontWeight = "700";
		document.getElementById("j18").style.fontWeight = "700";
		document.getElementById("k18").style.fontWeight = "700";
		document.getElementById("l18").style.fontWeight = "700";
		document.getElementById("m18").style.fontWeight = "700";
		d2R = 1;
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("b18").style.borderColor = "black";
		document.getElementById("c18").style.borderColor = "black";
		document.getElementById("d18").style.borderColor = "black";
		document.getElementById("e18").style.borderColor = "black";
		document.getElementById("f18").style.borderColor = "black";
		document.getElementById("g18").style.borderColor = "black";
		document.getElementById("h18").style.borderColor = "black";
		document.getElementById("i18").style.borderColor = "black";
		document.getElementById("j18").style.borderColor = "black";
		document.getElementById("k18").style.borderColor = "black";
		document.getElementById("l18").style.borderColor = "black";
		document.getElementById("m18").style.borderColor = "black";
		document.getElementById("b18").style.fontWeight = "100";
		document.getElementById("c18").style.fontWeight = "100";
		document.getElementById("d18").style.fontWeight = "100";
		document.getElementById("e18").style.fontWeight = "100";
		document.getElementById("f18").style.fontWeight = "100";
		document.getElementById("g18").style.fontWeight = "100";
		document.getElementById("h18").style.fontWeight = "100";
		document.getElementById("i18").style.fontWeight = "100";
		document.getElementById("j18").style.fontWeight = "100";
		document.getElementById("k18").style.fontWeight = "100";
		document.getElementById("l18").style.fontWeight = "100";
		document.getElementById("m18").style.fontWeight = "100";
	}
	
	//5. SERVER
	if((g02.value == "s" || g02.value == "S") && (h02.value == "e" || h02.value == "E") && (i02.value == "r" || i02.value == "R") && (j02.value == "v" || j02.value == "V") && (k02.value == "e" || k02.value == "E") && (l02.value == "r" || l02.value == "R")) {
		document.getElementById("g02").style.borderColor = "green";
		document.getElementById("h02").style.borderColor = "green";
		document.getElementById("i02").style.borderColor = "green";
		document.getElementById("j02").style.borderColor = "green";
		document.getElementById("k02").style.borderColor = "green";
		document.getElementById("l02").style.borderColor = "green";
		document.getElementById("g02").disabled = true;
		document.getElementById("h02").disabled = true;
		document.getElementById("i02").disabled = true;
		document.getElementById("j02").disabled = true;
		document.getElementById("k02").disabled = true;
		document.getElementById("l02").disabled = true;
		document.getElementById("g02").style.fontWeight = "700";
		document.getElementById("h02").style.fontWeight = "700";
		document.getElementById("i02").style.fontWeight = "700";
		document.getElementById("j02").style.fontWeight = "700";
		document.getElementById("k02").style.fontWeight = "700";
		document.getElementById("l02").style.fontWeight = "700";
		d5E = 1;
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("g02").style.borderColor = "black";
		document.getElementById("h02").style.borderColor = "black";
		document.getElementById("i02").style.borderColor = "black";
		document.getElementById("j02").style.borderColor = "black";
		document.getElementById("k02").style.borderColor = "black";
		document.getElementById("l02").style.borderColor = "black";
		document.getElementById("g02").style.fontWeight = "100";
		document.getElementById("h02").style.fontWeight = "100";
		document.getElementById("i02").style.fontWeight = "100";
		document.getElementById("j02").style.fontWeight = "100";
		document.getElementById("k02").style.fontWeight = "100";
		document.getElementById("l02").style.fontWeight = "100";
	}
	
	//6. XXS
	if((k04.value == "x" || k04.value == "X") && (l04.value == "x" || l04.value == "X") && (m04.value == "s" || m04.value == "S")) {
		document.getElementById("k04").style.borderColor = "green";
		document.getElementById("l04").style.borderColor = "green";
		document.getElementById("m04").style.borderColor = "green";
		document.getElementById("k04").disabled = true;
		document.getElementById("l04").disabled = true;
		document.getElementById("m04").disabled = true;
		document.getElementById("k04").style.fontWeight = "700";
		document.getElementById("l04").style.fontWeight = "700";
		document.getElementById("m04").style.fontWeight = "700";
		d6X = 1;
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("k04").style.borderColor = "black";
		document.getElementById("l04").style.borderColor = "black";
		document.getElementById("m04").style.borderColor = "black";
		document.getElementById("k04").style.fontWeight = "100";
		document.getElementById("l04").style.fontWeight = "100";
		document.getElementById("m04").style.fontWeight = "100";
	}
	
	//7. INJECTION
	if((h06.value == "i" || h06.value == "I") && (i06.value == "n" || i06.value == "N") && (j06.value == "j" || j06.value == "J") && (k06.value == "e" || k06.value == "E") && (l06.value == "c" || l06.value == "C") && (m06.value == "t" || m06.value == "T") && (n06.value == "i" || n06.value == "I") && (o06.value == "o" || o06.value == "O") && (p06.value == "n" || p06.value == "N")) {
		document.getElementById("h06").style.borderColor = "green";
		document.getElementById("i06").style.borderColor = "green";
		document.getElementById("j06").style.borderColor = "green";
		document.getElementById("k06").style.borderColor = "green";
		document.getElementById("l06").style.borderColor = "green";
		document.getElementById("m06").style.borderColor = "green";
		document.getElementById("n06").style.borderColor = "green";
		document.getElementById("o06").style.borderColor = "green";
		document.getElementById("p06").style.borderColor = "green";
		document.getElementById("h06").disabled = true;
		document.getElementById("i06").disabled = true;
		document.getElementById("j06").disabled = true;
		document.getElementById("k06").disabled = true;
		document.getElementById("l06").disabled = true;
		document.getElementById("m06").disabled = true;
		document.getElementById("n06").disabled = true;
		document.getElementById("o06").disabled = true;
		document.getElementById("p06").disabled = true;
		document.getElementById("h06").style.fontWeight = "700";
		document.getElementById("i06").style.fontWeight = "700";
		document.getElementById("j06").style.fontWeight = "700";
		document.getElementById("k06").style.fontWeight = "700";
		document.getElementById("l06").style.fontWeight = "700";
		document.getElementById("m06").style.fontWeight = "700";
		document.getElementById("n06").style.fontWeight = "700";
		document.getElementById("o06").style.fontWeight = "700";
		document.getElementById("p06").style.fontWeight = "700";
		d7I = 1;
		d7E = 1;
		d7I2 = 1;
		d7N = 1;
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("h06").style.borderColor = "black";
		document.getElementById("i06").style.borderColor = "black";
		document.getElementById("h06").style.borderColor = "black";
		document.getElementById("i06").style.borderColor = "black";
		document.getElementById("j06").style.borderColor = "black";
		document.getElementById("k06").style.borderColor = "black";
		document.getElementById("l06").style.borderColor = "black";
		document.getElementById("m06").style.borderColor = "black";
		document.getElementById("n06").style.borderColor = "black";
		document.getElementById("o06").style.borderColor = "black";
		document.getElementById("p06").style.borderColor = "black";
		document.getElementById("h06").style.fontWeight = "100";
		document.getElementById("i06").style.fontWeight = "100";
		document.getElementById("j06").style.fontWeight = "100";
		document.getElementById("k06").style.fontWeight = "100";
		document.getElementById("l06").style.fontWeight = "100";
		document.getElementById("m06").style.fontWeight = "100";
		document.getElementById("n06").style.fontWeight = "100";
		document.getElementById("o06").style.fontWeight = "100";
		document.getElementById("p06").style.fontWeight = "100";
	}

	//8. PHPPARSER
	if((j14.value == "p" || j14.value == "P") && (k14.value == "h" || k14.value == "H") && (l14.value == "p" || l14.value == "P") && (m14.value == "p" || m14.value == "P") && (n14.value == "a" || n14.value == "A") && (o14.value == "r" || o14.value == "R") && (p14.value == "s" || p14.value == "S") && (q14.value == "e" || q14.value == "E") && (r14.value == "r" || r14.value == "R")) {
		document.getElementById("j14").style.borderColor = "green";
		document.getElementById("k14").style.borderColor = "green";
		document.getElementById("l14").style.borderColor = "green";
		document.getElementById("m14").style.borderColor = "green";
		document.getElementById("n14").style.borderColor = "green";
		document.getElementById("o14").style.borderColor = "green";
		document.getElementById("p14").style.borderColor = "green";
		document.getElementById("q14").style.borderColor = "green";
		document.getElementById("r14").style.borderColor = "green";
		document.getElementById("j14").disabled = true;
		document.getElementById("k14").disabled = true;
		document.getElementById("l14").disabled = true;
		document.getElementById("m14").disabled = true;
		document.getElementById("n14").disabled = true;
		document.getElementById("o14").disabled = true;
		document.getElementById("p14").disabled = true;
		document.getElementById("q14").disabled = true;
		document.getElementById("r14").disabled = true;
		document.getElementById("j14").style.fontWeight = "700";
		document.getElementById("k14").style.fontWeight = "700";
		document.getElementById("l14").style.fontWeight = "700";
		document.getElementById("m14").style.fontWeight = "700";
		document.getElementById("n14").style.fontWeight = "700";
		document.getElementById("o14").style.fontWeight = "700";
		document.getElementById("p14").style.fontWeight = "700";
		document.getElementById("q14").style.fontWeight = "700";
		document.getElementById("r14").style.fontWeight = "700";
		d8S = 1;
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("j14").style.borderColor = "black";
		document.getElementById("k14").style.borderColor = "black";
		document.getElementById("l14").style.borderColor = "black";
		document.getElementById("m14").style.borderColor = "black";
		document.getElementById("n14").style.borderColor = "black";
		document.getElementById("o14").style.borderColor = "black";
		document.getElementById("p14").style.borderColor = "black";
		document.getElementById("q14").style.borderColor = "black";
		document.getElementById("r14").style.borderColor = "black";
		document.getElementById("j14").style.fontWeight = "100";
		document.getElementById("k14").style.fontWeight = "100";
		document.getElementById("l14").style.fontWeight = "100";
		document.getElementById("m14").style.fontWeight = "100";
		document.getElementById("n14").style.fontWeight = "100";
		document.getElementById("o14").style.fontWeight = "100";
		document.getElementById("p14").style.fontWeight = "100";
		document.getElementById("q14").style.fontWeight = "100";
		document.getElementById("r14").style.fontWeight = "100";
	}
	
	//ACROSS
	//1. PREPROCESSOR
	if((c07.value == "p" || c07.value == "P") && (c08.value == "r" || c08.value == "R") && (c09.value == "e" || c09.value == "E") && (c10.value == "p" || c10.value == "P") && (c11.value == "r" || c11.value == "R") && (c12.value == "o" || c12.value == "O") && (c13.value == "c" || c13.value == "C") && (c14.value == "e" || c14.value == "E") && (c15.value == "s" || c15.value == "S") && (c16.value == "s" || c16.value == "S") && (c17.value == "o" || c17.value == "O") && (c18.value == "r" || c18.value == "R")) {
		document.getElementById("c07").style.borderColor = "green";
		document.getElementById("c08").style.borderColor = "green";
		document.getElementById("c09").style.borderColor = "green";
		document.getElementById("c10").style.borderColor = "green";
		document.getElementById("c11").style.borderColor = "green";
		document.getElementById("c12").style.borderColor = "green";
		document.getElementById("c13").style.borderColor = "green";
		document.getElementById("c14").style.borderColor = "green";
		document.getElementById("c15").style.borderColor = "green";
		document.getElementById("c16").style.borderColor = "green";
		document.getElementById("c17").style.borderColor = "green";
		document.getElementById("c18").style.borderColor = "green";
		document.getElementById("c07").disabled = true;
		document.getElementById("c08").disabled = true;
		document.getElementById("c09").disabled = true;
		document.getElementById("c10").disabled = true;
		document.getElementById("c11").disabled = true;
		document.getElementById("c12").disabled = true;
		document.getElementById("c13").disabled = true;
		document.getElementById("c14").disabled = true;
		document.getElementById("c15").disabled = true;
		document.getElementById("c16").disabled = true;
		document.getElementById("c17").disabled = true;
		document.getElementById("c18").disabled = true;
		document.getElementById("c07").style.fontWeight = "700";
		document.getElementById("c08").style.fontWeight = "700";
		document.getElementById("c09").style.fontWeight = "700";
		document.getElementById("c10").style.fontWeight = "700";
		document.getElementById("c11").style.fontWeight = "700";
		document.getElementById("c12").style.fontWeight = "700";
		document.getElementById("c13").style.fontWeight = "700";
		document.getElementById("c14").style.fontWeight = "700";
		document.getElementById("c15").style.fontWeight = "700";
		document.getElementById("c16").style.fontWeight = "700";
		document.getElementById("c17").style.fontWeight = "700";
		document.getElementById("c18").style.fontWeight = "700";
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("c07").style.borderColor = "black";
		document.getElementById("c08").style.borderColor = "black";
		document.getElementById("c09").style.borderColor = "black";
		document.getElementById("c10").style.borderColor = "black";
		document.getElementById("c11").style.borderColor = "black";
		document.getElementById("c12").style.borderColor = "black";
		document.getElementById("c13").style.borderColor = "black";
		document.getElementById("c14").style.borderColor = "black";
		document.getElementById("c15").style.borderColor = "black";
		document.getElementById("c16").style.borderColor = "black";
		document.getElementById("c17").style.borderColor = "black";
		document.getElementById("c18").style.borderColor = "black";
		document.getElementById("c07").style.fontWeight = "100";
		document.getElementById("c08").style.fontWeight = "100";
		document.getElementById("c09").style.fontWeight = "100";
		document.getElementById("c10").style.fontWeight = "100";
		document.getElementById("c11").style.fontWeight = "100";
		document.getElementById("c12").style.fontWeight = "100";
		document.getElementById("c13").style.fontWeight = "100";
		document.getElementById("c14").style.fontWeight = "100";
		document.getElementById("c15").style.fontWeight = "100";
		document.getElementById("c16").style.fontWeight = "100";
		document.getElementById("c17").style.fontWeight = "100";
		document.getElementById("c18").style.fontWeight = "100";
	}

	//2. NODEJS
	if((f08.value == "n" || f08.value == "N") && (f09.value == "o" || f09.value == "O") && (f10.value == "d" || f10.value == "D") && (f11.value == "e" || f11.value == "E") && (f12.value == "j" || f12.value == "J") && (f13.value == "s" || c13.value == "S")) {
		document.getElementById("f08").style.borderColor = "green";
		document.getElementById("f09").style.borderColor = "green";
		document.getElementById("f10").style.borderColor = "green";
		document.getElementById("f11").style.borderColor = "green";
		document.getElementById("f12").style.borderColor = "green";
		document.getElementById("f13").style.borderColor = "green";
		document.getElementById("f08").disabled = true;
		document.getElementById("f09").disabled = true;
		document.getElementById("f10").disabled = true;
		document.getElementById("f11").disabled = true;
		document.getElementById("f12").disabled = true;
		document.getElementById("f13").disabled = true;
		document.getElementById("f08").style.fontWeight = "700";
		document.getElementById("f09").style.fontWeight = "700";
		document.getElementById("f10").style.fontWeight = "700";
		document.getElementById("f11").style.fontWeight = "700";
		document.getElementById("f12").style.fontWeight = "700";
		document.getElementById("f13").style.fontWeight = "700";
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("f08").style.borderColor = "black";
		document.getElementById("f09").style.borderColor = "black";
		document.getElementById("f10").style.borderColor = "black";
		document.getElementById("f11").style.borderColor = "black";
		document.getElementById("f12").style.borderColor = "black";
		document.getElementById("f13").style.borderColor = "black";
		document.getElementById("f08").style.fontWeight = "100";
		document.getElementById("f09").style.fontWeight = "100";
		document.getElementById("f10").style.fontWeight = "100";
		document.getElementById("f11").style.fontWeight = "100";
		document.getElementById("f12").style.fontWeight = "100";
		document.getElementById("f13").style.fontWeight = "100";
	}

	//3. DESERIALIZATION
	if((h01.value == "d" || h01.value == "D") && (h02.value == "e" || h02.value == "E") && (h03.value == "s" || h03.value == "S") && (h04.value == "e" || h04.value == "E") && (h05.value == "r" || h05.value == "R") && (h06.value == "i" || h06.value == "I") && (h07.value == "a" || h07.value == "A") && (h08.value == "l" || h08.value == "L") && (h09.value == "i" || h09.value == "I") && (h10.value == "z" || h10.value == "Z") && (h11.value == "a" || h11.value == "A") && (h12.value == "t" || h12.value == "T") && (h13.value == "i" || h13.value == "I") && (h14.value == "o" || h14.value == "O") && (h15.value == "n" || h15.value == "N")) {
		document.getElementById("h01").style.borderColor = "green";
		document.getElementById("h02").style.borderColor = "green";
		document.getElementById("h03").style.borderColor = "green";
		document.getElementById("h04").style.borderColor = "green";
		document.getElementById("h05").style.borderColor = "green";
		document.getElementById("h06").style.borderColor = "green";
		document.getElementById("h07").style.borderColor = "green";
		document.getElementById("h08").style.borderColor = "green";
		document.getElementById("h09").style.borderColor = "green";
		document.getElementById("h10").style.borderColor = "green";
		document.getElementById("h11").style.borderColor = "green";
		document.getElementById("h12").style.borderColor = "green";
		document.getElementById("h13").style.borderColor = "green";
		document.getElementById("h14").style.borderColor = "green";
		document.getElementById("h15").style.borderColor = "green";
		document.getElementById("h01").disabled = true;
		document.getElementById("h02").disabled = true;
		document.getElementById("h03").disabled = true;
		document.getElementById("h04").disabled = true;
		document.getElementById("h05").disabled = true;
		document.getElementById("h06").disabled = true;
		document.getElementById("h07").disabled = true;
		document.getElementById("h08").disabled = true;
		document.getElementById("h09").disabled = true;
		document.getElementById("h10").disabled = true;
		document.getElementById("h11").disabled = true;
		document.getElementById("h12").disabled = true;
		document.getElementById("h13").disabled = true;
		document.getElementById("h14").disabled = true;
		document.getElementById("h15").disabled = true;
		document.getElementById("h01").style.fontWeight = "700";
		document.getElementById("h02").style.fontWeight = "700";
		document.getElementById("h03").style.fontWeight = "700";
		document.getElementById("h04").style.fontWeight = "700";
		document.getElementById("h05").style.fontWeight = "700";
		document.getElementById("h06").style.fontWeight = "700";
		document.getElementById("h07").style.fontWeight = "700";
		document.getElementById("h08").style.fontWeight = "700";
		document.getElementById("h09").style.fontWeight = "700";
		document.getElementById("h10").style.fontWeight = "700";
		document.getElementById("h11").style.fontWeight = "700";
		document.getElementById("h12").style.fontWeight = "700";
		document.getElementById("h13").style.fontWeight = "700";
		document.getElementById("h14").style.fontWeight = "700";
		document.getElementById("h15").style.fontWeight = "700";
		score++;
		document.getElementById("score").innerHTML = score;		
	} else {
		document.getElementById("h01").style.borderColor = "black";
		document.getElementById("h02").style.borderColor = "black";
		document.getElementById("h03").style.borderColor = "black";
		document.getElementById("h04").style.borderColor = "black";
		document.getElementById("h05").style.borderColor = "black";
		document.getElementById("h06").style.borderColor = "black";
		document.getElementById("h07").style.borderColor = "black";
		document.getElementById("h08").style.borderColor = "black";
		document.getElementById("h09").style.borderColor = "black";
		document.getElementById("h10").style.borderColor = "black";
		document.getElementById("h11").style.borderColor = "black";
		document.getElementById("h12").style.borderColor = "black";
		document.getElementById("h13").style.borderColor = "black";
		document.getElementById("h14").style.borderColor = "black";
		document.getElementById("h15").style.borderColor = "black";
		document.getElementById("h01").style.fontWeight = "100";
		document.getElementById("h02").style.fontWeight = "100";
		document.getElementById("h03").style.fontWeight = "100";
		document.getElementById("h04").style.fontWeight = "100";
		document.getElementById("h05").style.fontWeight = "100";
		document.getElementById("h06").style.fontWeight = "100";
		document.getElementById("h07").style.fontWeight = "100";
		document.getElementById("h08").style.fontWeight = "100";
		document.getElementById("h09").style.fontWeight = "100";
		document.getElementById("h10").style.fontWeight = "100";
		document.getElementById("h11").style.fontWeight = "100";
		document.getElementById("h12").style.fontWeight = "100";
		document.getElementById("h13").style.fontWeight = "100";
		document.getElementById("h14").style.fontWeight = "100";
		document.getElementById("h15").style.fontWeight = "100";
	}
	
    //4. INIT
	if((n06.value == "i" || n06.value == "I") && (n07.value == "n" || n07.value == "N")  && (n08.value == "i" || n08.value == "I") && (n09.value == "t" || n09.value == "T")){
		document.getElementById("n06").style.borderColor = "green";
		document.getElementById("n07").style.borderColor = "green";
		document.getElementById("n08").style.borderColor = "green";
		document.getElementById("n09").style.borderColor = "green";
		document.getElementById("n06").disabled = true;
		document.getElementById("n07").disabled = true;
		document.getElementById("n08").disabled = true;
		document.getElementById("n09").disabled = true;
		document.getElementById("n06").style.fontWeight = "700";
		document.getElementById("n07").style.fontWeight = "700";
		document.getElementById("n08").style.fontWeight = "700";
		document.getElementById("n09").style.fontWeight = "700";
		score++;
		document.getElementById("score").innerHTML = score;
	}
	else {
		document.getElementById("n06").style.borderColor = "black";
		document.getElementById("n07").style.borderColor = "black";
		document.getElementById("n08").style.borderColor = "black";
		document.getElementById("n09").style.borderColor = "black";
		document.getElementById("n06").style.fontWeight = "100";
		document.getElementById("n07").style.fontWeight = "100";
		document.getElementById("n08").style.fontWeight = "100";
		document.getElementById("n09").style.fontWeight = "100";
	}

	//5. ASYNCHRONOUS
	if((p03.value == "a" || p03.value == "A") && (p04.value == "s" || p04.value == "S") && (p05.value == "y" || p05.value == "Y") && (p06.value == "n" || p06.value == "N") && (p07.value == "c" || p07.value == "C") && (p08.value == "h" || p08.value == "H")  && (p09.value == "r" || p09.value == "R") && (p10.value == "o" || p10.value == "O") && (p11.value == "n" || p11.value == "N") && (p12.value == "o" || p12.value == "O")  && (p13.value == "u" || p13.value == "U")  && (p14.value == "s" || p14.value == "S")) {
		document.getElementById("p03").style.borderColor = "green";
		document.getElementById("p04").style.borderColor = "green";
		document.getElementById("p05").style.borderColor = "green";
		document.getElementById("p06").style.borderColor = "green";
		document.getElementById("p07").style.borderColor = "green";
		document.getElementById("p08").style.borderColor = "green";
		document.getElementById("p09").style.borderColor = "green";
		document.getElementById("p10").style.borderColor = "green";
		document.getElementById("p11").style.borderColor = "green";
		document.getElementById("p12").style.borderColor = "green";
		document.getElementById("p13").style.borderColor = "green";
		document.getElementById("p14").style.borderColor = "green";
		document.getElementById("p03").disabled = true;
		document.getElementById("p04").disabled = true;
		document.getElementById("p05").disabled = true;
		document.getElementById("p06").disabled = true;
		document.getElementById("p07").disabled = true;
		document.getElementById("p08").disabled = true;
		document.getElementById("p09").disabled = true;
		document.getElementById("p10").disabled = true;
		document.getElementById("p11").disabled = true;
		document.getElementById("p12").disabled = true;
		document.getElementById("p13").disabled = true;
		document.getElementById("p14").disabled = true;
		document.getElementById("p03").style.fontWeight = "700";
		document.getElementById("p04").style.fontWeight = "700";
		document.getElementById("p05").style.fontWeight = "700";
		document.getElementById("p06").style.fontWeight = "700";
		document.getElementById("p07").style.fontWeight = "700";
		document.getElementById("p08").style.fontWeight = "700";
		document.getElementById("p09").style.fontWeight = "700";
		document.getElementById("p10").style.fontWeight = "700";
		document.getElementById("p11").style.fontWeight = "700";
		document.getElementById("p12").style.fontWeight = "700";
		document.getElementById("p13").style.fontWeight = "700";
		document.getElementById("p14").style.fontWeight = "700";
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("p03").style.borderColor = "black";
		document.getElementById("p04").style.borderColor = "black";
		document.getElementById("p05").style.borderColor = "black";
		document.getElementById("p06").style.borderColor = "black";
		document.getElementById("p07").style.borderColor = "black";
		document.getElementById("p08").style.borderColor = "black";
		document.getElementById("p09").style.borderColor = "black";
		document.getElementById("p10").style.borderColor = "black";
		document.getElementById("p11").style.borderColor = "black";
		document.getElementById("p12").style.borderColor = "black";
		document.getElementById("p13").style.borderColor = "black";
		document.getElementById("p14").style.borderColor = "black";
		document.getElementById("p03").style.fontWeight = "100";
		document.getElementById("p04").style.fontWeight = "100";
		document.getElementById("p05").style.fontWeight = "100";
		document.getElementById("p06").style.fontWeight = "100";
		document.getElementById("p07").style.fontWeight = "100";
		document.getElementById("p08").style.fontWeight = "100";
		document.getElementById("p09").style.fontWeight = "100";
		document.getElementById("p10").style.fontWeight = "100";
		document.getElementById("p11").style.fontWeight = "100";
		document.getElementById("p12").style.fontWeight = "100";
		document.getElementById("p13").style.fontWeight = "100";
		document.getElementById("p14").style.fontWeight = "100";
	}
	
	//6. XXE
	if((k04.value == "x" || k04.value == "X") && (k05.value == "x" || k05.value == "X") && (k06.value == "e" || k06.value == "E")) {
		document.getElementById("k04").style.borderColor = "green";
		document.getElementById("k05").style.borderColor = "green";
		document.getElementById("k06").style.borderColor = "green";
		document.getElementById("k04").disabled = true;
		document.getElementById("k05").disabled = true;
		document.getElementById("k06").disabled = true;
		document.getElementById("k04").style.fontWeight = "700";
		document.getElementById("k05").style.fontWeight = "700";
		document.getElementById("k06").style.fontWeight = "700";
		score++;
		document.getElementById("score").innerHTML = score;
	} else {
		document.getElementById("k04").style.borderColor = "black";
		document.getElementById("k05").style.borderColor = "black";
		document.getElementById("k06").style.borderColor = "black";
		document.getElementById("k04").style.fontWeight = "100";
		document.getElementById("k05").style.fontWeight = "100";
		document.getElementById("k06").style.fontWeight = "100";
	}
	
	//PERSONAL
	if ((c08.value == "R" || c08.value == "r") && d1R == 1) {
		document.getElementById("c08").style.borderColor = "green";
		document.getElementById("c08").style.fontWeight = "700";	
	}
	
	if ((f08.value == "N" || f08.value == "n") && d1N == 1) {	
		document.getElementById("f08").style.borderColor = "green";
		document.getElementById("f08").style.fontWeight = "700";	
	}

	if ((h08.value == "L" || h08.value == "l") && d1L == 1){
		document.getElementById("h08").style.borderColor = "green";
		document.getElementById("h08").style.fontWeight = "700";	
	}
	
	//DESTROY
	if ((c16.value == "S" || c16.value == "s") && d2S == 1) {
		document.getElementById("c16").style.borderColor = "green";
		document.getElementById("c16").style.fontWeight = "700";	
	}

	//BROKENACCESS
	if ((c18.value == "R" || c18.value == "r") && d2R == 1) {
		document.getElementById("c18").style.borderColor = "green";
		document.getElementById("c18").style.fontWeight = "700";	
	}
	
	//SERVER
	if ((h02.value == "E" || h02.value == "e") && d5E == 1) {
		document.getElementById("h02").style.borderColor = "green";
		document.getElementById("h02").style.fontWeight = "700";	
	}
	
	//SERVLET
	if ((h04.value == "E" || h04.value == "e") && d3E == 1) {
		document.getElementById("h04").style.borderColor = "green";
		document.getElementById("h04").style.fontWeight = "700";	
	}
	
	//INJECTION
	if ((h06.value == "I" || h06.value == "i") && d7I == 1) {
		document.getElementById("h06").style.borderColor = "green";
		document.getElementById("h06").style.fontWeight = "700";	
	}
	
	if ((k06.value == "E" || k06.value == "e") && d7E == 1) {
		document.getElementById("k06").style.borderColor = "green";
		document.getElementById("k06").style.fontWeight = "700";	
	}
	
	if ((n06.value == "I" || n06.value == "i") && d7I2 == 1) {
		document.getElementById("n06").style.borderColor = "green";
		document.getElementById("n06").style.fontWeight = "700";	
	}
	
	if ((p06.value == "N" || p06.value == "n") && d7N == 1) {
		document.getElementById("p06").style.borderColor = "green";
		document.getElementById("p06").style.fontWeight = "700";	
	}
	
	//ASYNCHRONOUS
	if ((p14.value == "S" || p14.value == "s") && d8S == 1) {
		document.getElementById("p14").style.borderColor = "green";
		document.getElementById("p14").style.fontWeight = "700";	
	}
	
	//XXS
	if ((k04.value == "X" || k04.value == "x") && d6X == 1) {
		document.getElementById("k04").style.borderColor = "green";
		document.getElementById("k04").style.fontWeight = "700";	
	}
	
	//WIN
	if (score == 14) {
		document.getElementById("show").disabled = true;
		alert("Congratulations! You have answered the puzzle.");
	}
}