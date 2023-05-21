

function create_single_section(template, csv, name){
	
	// Split the CSV data into lines
		var lines = csv.split('\n');
		var html = '';

		// Generate HTML based on the contents of the CSV data
		for (var i = 0; i < lines.length; i++) {
			var parts = lines[i].split(',');
			var column1 = parts[0].trimStart();
			var column2 = parts[1].trimStart();
			var column3 = parts[2].trimStart();

			// Replace placeholders in the section HTML with CSV data
			var dynamicSection = section.replace(/AAA/g, column1)
				.replace(/BBB/g, column2)
				.replace(/CCC/g, column3);

			html += dynamicSection;
		}
		
		var res = "<fieldset style=\"border: 2px solid red; width: 95vw; position: relative\">\n";
		res += "<legend style=\"font-size: 6rem;\">" + name + "</legend>\n";
		res += html + "\n";
		res += "</fieldset>";
				
		return res;
	
}


var section = `
<div id="mmAAA">
  
  
  <div style="display: flex; align-items: center; width: 100%; position: relative">  
    <img src="images/BBB" class="main-img">  
    <div class="square">
      <img src="images/x.png" >
    </div>
    <label for="lebAAA" class="my-label">CCC:</label>
	<select id="lebAAA" class="my-select">
      <option value="1">לא יודע</option>
      <option value="2">רמז</option>
      <option value="3">אמא</option>
	  <option value="4">אבא</option>
	  <option value="5">א</option>
	  <option value="6">ר</option>
	  <option value="7">נ</option>
	  <option value="8">!!!</option>
    </select>
    <input type="text"  name="lebAAA" class="my-input">
  </div>
</div>
<br><br>`;

		// The CSV data string
		var suspects = `5, green.png, גרין
6, mustard.png, חרדלי
7, orchid.png, אורכידאה
8, rakia.png, רקיע
9, plum.png, שזיפי
10, shani.png, שני`;

		var weapons = `11, candlestick.png, פמוט
12, dagger.png, פגיון
13, pipe.png, מוט ברזל
14, gun.png, אקדח
15, rope.png, חבל
16, wrench.png, מפתח צינורות`;

		var rooms = `17, ballroom.jpg, אולם נשפים
18, billiard.jpg, חדר ביליארד
19, greenhouse.jpg, חממה
20, dining.jpg, חדר אוכל
21, misdaron.jpg, מסדרון
22, kitchen.jpg, מטבח
23, library.jpg, ספרייה
24, salon.jpg, סלון
25, workroom.jpg, חדר עבודה`;



var html = create_single_section(section,suspects,"חשודים") + "<br><br>";
html += create_single_section(section,weapons,"נשקים") + "<br><br>";
html += create_single_section(section,rooms,"חדרים") + "<br><br>";
		

// Add the generated HTML to the page
document.getElementById('dynamic-content').innerHTML = html;
		
		
		

cbs = document.querySelectorAll("div[id^='mm']");
cbs.forEach((dv) => {  
 
 mainid = dv.id;
 //alert("mainid = " + mainid);
 
 //x box
 var squareDiv = dv.querySelector('.square');
 var squareImage = squareDiv.querySelector("img");
 var squareImageName = mainid + "-x"; 
 if (localStorage.getItem(squareImageName) === "true") {
	squareImage.style.display = "block";
 }else{
    squareImage.style.display = "none";
 }  
  squareDiv.addEventListener("click", () => {    
    if (squareImage.style.display === "none") {
      squareImage.style.display = "block";	  
	  localStorage.setItem(squareImageName, "true");
    } else {
      squareImage.style.display = "none";
	  localStorage.setItem(squareImageName, "false");
    }	
  });
  
  //right image
 var rightimage = dv.querySelector('.main-img'); 
 rightimage.addEventListener('click', function() {  
  squareDiv.click();
});

var textbox = dv.querySelector('input[type="text"]');
var textboxname = mainid + "-text";
var txt = localStorage.getItem(textboxname);
textbox.value = txt;
textbox.addEventListener('input', function() {
    localStorage.setItem(textboxname, this.value);
  });
  
  
});
