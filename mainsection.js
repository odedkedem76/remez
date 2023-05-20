var section = `
<div id="mmAAA">
  <div class="unchecked">
    <span class="checkboxV"></span>
  </div>
  
  <div style="display: flex; align-items: center; width: 100%; position: relative">  
    <img src="images/BBB" class="main-img">  
    <div class="square">
      <img src="images/x.png" >
    </div>
    <label for="lebAAA" class="my-label">CCC:</label>
    <input type="text" id="lebAAA" name="lebAAA" class="my-input">
  </div>
</div>
<br><br>`;

		// The CSV data string
		var csvData = `5, green.png, גרין
6, mustard.png, חרדלי
7, orchid.png, אורכידאה
8, rakia.png, רקיע
9, plum.png, שזיפי
10, shani.png, שני
11, candlestick.png, פמוט
12, dagger.png, פגיון
13, pipe.png, מוט ברזל
14, gun.png, אקדח
15, rope.png, חבל
16, wrench.png, מפתח צינורות
17, ballroom.jpg, אולם נשפים
18, billiard.jpg, חדר ביליארד
19, greenhouse.jpg, חממה
20, dining.jpg, חדר אוכל
21, misdaron.jpg, מסדרון
22, kitchen.jpg, מטבח
23, library.jpg, ספרייה
24, salon.jpg, סלון
25, workroom.jpg, חדר עבודה`;

		// Split the CSV data into lines
		var lines = csvData.split('\n');
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
 
  
  
  
});
