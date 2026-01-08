function submitBtn() {
        const value1 = document.getElementById("firstValue").value;
        const value2 = document.getElementById("secondValue").value;
        const finalResult = document.getElementById("finalResult");

        const numberValue1 = Number(value1);
        const numberValue2 = Number(value2);

        if (isNaN(numberValue1) || isNaN(numberValue2)) {
          alert("Please inter valid Number Exple :2020");
          finalResult.innerHTML =
            "<span style='color:red'>Please Inter Valid Number</span>";
          return;
        }

        if (numberValue1 > numberValue2) {
          finalResult.innerHTML = `<span style="color:red">Start Years (${numberValue1}) should be <= (${numberValue2})</span>`;
          return;
        }

        let sundayYears = [];
        for (let year = numberValue1; year <= numberValue2; year++) {
          const firstJan = new Date(year, 0, 1);
          if (firstJan.getDay() === 5) {
            sundayYears.push(year);
          }
        }

        if (sundayYears.length === 0) {
          finalResult.innerHTML = `<span style="color: blue">No year found with january 1st on Friday between ${numberValue1} to ${numberValue2}`;
        } else {
          let yearList = sundayYears
            .map(
              (year) => `<li>${year} is a holy day (1st january is Friday)</li>`
            )
            .join("");

          finalResult.innerHTML = `
                        <h2>Years with january 1st on Friday ${numberValue1}-${numberValue2}</h2>
                        <ul>${yearList}</ul>
                        <p>Total:${sundayYears.length} years</p>
                    
                    `;
        }
      }