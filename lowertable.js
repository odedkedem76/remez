var table = document.getElementById("guesses");

      // Clear existing table content except for the header row
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }

      // Create table rows and cells
      for (var i = 0; i < 5; i++) {
        var row = table.insertRow(i + 1);

        for (var j = 0; j < 6; j++) {
          var cell = row.insertCell(j);

          if (j === 0) {
            cell.innerHTML = `
              <select>
                <option value="-1"></option>
                <option value="גרין">גרין</option>
                <option value="חרדלי">חרדלי</option>
                <option value="אורכידאה">אורכידאה</option>
                <option value="רקיע">רקיע</option>
                <option value="שזיפי">שזיפי</option>
                <option value="שני">שני</option>
              </select>
            `;
          } else if (j === 1) {
            cell.innerHTML = `
              <select>
                <option value="-1"></option>
                <option value="פמוט">פמוט</option>
                <option value="פגיון">פגיון</option>
                <option value="מוט ברזל">מוט ברזל</option>
                <option value="אקדח">אקדח</option>
                <option value="חבל">חבל</option>
                <option value="מפתח צינורות">מפתח צינורות</option>
              </select>
            `;
          } else if (j === 2) {
            cell.innerHTML = `
              <select>
                <option value="-1"></option>
                <option value="אולם נשפים">אולם נשפים</option>
                <option value="חדר ביליארד">חדר ביליארד</option>
                <option value="חממה">חממה</option>
                <option value="חדר אוכל">חדר אוכל</option>
                <option value="מסדרון">מסדרון</option>
                <option value="מטבח">מטבח</option>
                <option value="ספרייה">ספרייה</option>
                <option value="סלון">סלון</option>
                <option value="חדר עבודה">חדר עבודה</option>
              </select>
            `;
          } else {
            cell.innerHTML = `
              <select>
                <option value="-1"></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            `;
          }
        }
      }