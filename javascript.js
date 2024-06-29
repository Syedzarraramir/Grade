    function best() {
        var mark = document.getElementById("mark").value;
        var resultStatus = document.getElementById("resultstatus");

        if (mark >= 90) {
            resultStatus.innerHTML = "Congratulations, you have got an A+ Grade!";
            resultStatus.style.color = "green";
            resultStatus.style.fontSize = "30px";
        } 
        else if (mark >= 80) {
            resultStatus.innerHTML = "Good you get A Grade.";
            resultStatus.style.color = "green";
        }
        else if (mark >= 70) {
            resultStatus.innerHTML = "Good you get B Grade.";
            resultStatus.style.color = "green";
        }
        else if (mark >= 60) {
            resultStatus.innerHTML = "You get C Grade Pass.";
            resultStatus.style.color = "green";
        }
        else if (mark >= 55) {
            resultStatus.innerHTML = "Satisfactory, you get D+ Grade Pass.";
            resultStatus.style.color = "green";
        }
        else if (mark >= 50) {
            resultStatus.innerHTML = "You get D Grade Pass.";
            resultStatus.style.color = "yellow";
            resultStatus.style.fontSize = "25px";
        }
        else {
            resultStatus.innerHTML = "You are Fail.";
            resultStatus.style.color = "red";
        }
    }
