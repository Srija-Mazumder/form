function validateForm() {
    const form = document.forms["myform"];
    let isValid = true;

    // Clearing previous errors
   document.querySelectorAll("p.head, p.heads, p.authname, p.valn, #pdate, .ptime, .sorurl , .errorSum, .errorFull , .imgi , .imgo, .urls")
        .forEach(p => p.textContent = "");

    // Headline Validation
    const headline = form["headi"].value.trim();
    if (!headline || headline.length < 5) {
        document.querySelector("p.head").textContent = "Headline must be at least 5 characters.";
        document.querySelector("p.head").style.color = "red";
        isValid = false;
    }

    // Subheading Validation
    const subhead = form["subheadi"].value.trim();
    if (!subhead || subhead.length < 3) {
    const errEl = document.querySelector("p.heads");
    errEl.textContent = "Subheading must be at least 3 characters.";
    errEl.style.color = "red";
    isValid = false;
}
    // Summary 
    const summary = form["summar"].value.trim();
    const charC = document.getElementById("charCount");
    if (!summary) {
       charC.textContent = "Summary must not be empty";
        charC.style.color = "red";
        isValid = false;
    } 

    // Fullstory
    const fullStory = form["fulls"].value.trim();
    const charCou = document.getElementById("charCounts");
    if (!fullStory) {
        charCou.textContent = "Full story must not be empty";
        charCou.style.color = "red";
        isValid = false;
    } 

    // Author Name Validation
    const author = form["auth"].value.trim();
    if (!author || /\d/.test(author)) {
        document.querySelector("p.authname").textContent = "Author name must not contain numbers and should not be empty.";
        document.querySelector("p.authname").classList.add("text-danger");
        isValid = false;
    }

    // Author Email Validation
    const email = form["authe"].value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.querySelector("p.valn").innerHTML = "Please enter a valid email.";
        document.querySelector("p.valn").classList.add("text-danger");
        isValid = false;
    }

    // Date Validation
    const date = form["datepub"].value;
    const today = new Date();
    if (!date) {
        document.getElementById("pdate").textContent = "Please select a publish date.";
        document.getElementById("pdate").classList.add("text-danger");
        isValid = false;
    }
    else if ( (date > today)){
        document.getElementById("pdate").textContent = "Please select a publish date till today.";
        document.getElementById("pdate").classList.add("text-danger");
        isValid = false;
    }

 // Time Validation (Optional)
        const time = form["timepub"].value;
        const curtime = new Date();

        if (time && !/^\d{2}:\d{2}$/.test(time)) {
            document.getElementById("ptime").textContent = "Please enter a valid time format (HH:MM).";
            document.getElementById("ptime").classList.add("text-danger");
            isValid = false;
        } else if (!time){
            document.getElementById("ptime").textContent = "Please enter a valid time";
            document.getElementById("ptime").classList.add("text-danger");
        }
        else if (time) {
            const [hours, minutes] = time.split(":").map(Number);
            const inputTime = new Date();
            inputTime.setHours(hours, minutes, 0, 0);
            console.log("here here");

            if (inputTime > curtime) {
                document.getElementById("ptime").textContent = "Please enter a valid time, it can't be in the future.";
                document.getElementById("ptime").classList.add("text-danger");
                console.log("here");
                isValid = false;
            }
            
        }

            const tags = document.querySelectorAll("#selected-tags > span");
            const errorElement = document.querySelector(".category .error");

            if (tags.length === 0) {
                errorElement.style.display = "block";
                isValid = false;
            } else {
                errorElement.style.display = "none";
            }


    // Tags Validation
    const tagText = form["tag"].value.trim();
    const tagOutput = document.querySelector(".tag-output");
    if (tagOutput.children.length === 0 && tagText === "") {
        document.querySelector(".tags .error").style.display = "block";
        isValid = false;
    } else {
        document.querySelector(".tags .error").style.display = "none";
    }

    // Location Validation
    const locOutput = document.querySelector(".loc");
    const locInput = document.querySelector(".location input");
    if (locOutput.children.length === 0 && locInput.value.trim() === "") {
        document.querySelector(".location .error").style.display = "block";
        isValid = false;
    } else {
        document.querySelector(".location .error").style.display = "none";
    }


        //Source URL validation 
        const sorOutput = document.querySelector(".sorurl");
        const sorTextarea = document.getElementById("videoUrlInput");
        const sorError = document.querySelector(".sourceurl .error");

        if (sorOutput.children.length === 0 && sorTextarea.value.trim() === "") {
            sorError.style.display = "block";
            isValid = false;
        } else {
            sorError.style.display = "none";
        }

    // Featured Image Validation
        const imageFields = [
            {
                input: document.querySelector('.featuredimg input[type="file"]'),
                output: document.querySelector('.imgi'),
                errorMessage: "Please upload a featured image."
            },
            {
                input: document.querySelector('.galleryimg input[type="file"]'),
                output: document.querySelector('.imgo'),
                errorMessage: "Please upload at least one gallery image."
            }
        ];

        imageFields.forEach(field => {
            if (!field.input.files.length) {
                field.output.innerHTML = field.errorMessage;
                field.output.style.color = "red";
                isValid = false;
            } else {
                field.output.innerHTML = ""; // Clear previous errors if valid
            }
        });

       // Related Articles Validation
        const articleOutput = document.querySelector(".urls");
        const articleTextarea = document.getElementById("articleUrlsInput");
        const articleError = document.querySelector(".realtedarticles .error");

        if (articleOutput.children.length === 0 && articleTextarea.value.trim() === "") {
            articleError.style.display = "block";
            isValid = false;
        } else {
            articleError.style.display = "none";
        }


    // Terms & Conditions Checkbox
    const termsChecked = document.getElementById("terms").checked;
    const term =  document.querySelector(".term ");
    if (!termsChecked) {
        term.style.display  = "block";
        term.style.color = "red";
        isValid = false;
    }

    return isValid;
}


