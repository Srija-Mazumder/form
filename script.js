// document.getElementById("myform").addEventListener("submit", function(event) {
//     event.preventDefault(); 

//     let isValid = true;
//     const form = this;
//     const headline = form["headi"].value.trim();
//     const subheading = form["subheadi"].value.trim();
//     const summary = form["summar"].value.trim();
//     const fullStory = form["fulls"].value.trim();
//     const authorName = form["autori"].value.trim();
//     const authorMail = form["authorm"].value.trim();
//     const pdate = form["pdate"].value.trim();
//     const ptime = form["ptime"].value.trim();
//     const category = form["category"].value.trim();
//     const sourceURL = form["source"].value.trim();
//     const videoURL = form["video"].value.trim();
//     const relArt = form["related"].value.trim();
//     const img1 = form["img1"].value.trim();
//     const img2 = form["img2"].value.trim();
//     const termsChecked = document.getElementById("terms").checked;

//     if (!headValid(headline)) isValid = false;
//     if (!headValids(subheading)) isValid = false;
//     if (!updateCount()) isValid = false;
//     if (!updateCounts()) isValid = false;
//     if (!mailVal(authorMail)) isValid = false;
//     if (!dateVali(pdate)) isValid = false;
//     if (!timeVal(ptime)) isValid = false;
//     if (!urlVal(sourceURL, 'source')) isValid = false;
//     if (!urlVal(videoURL, 'video')) isValid = false;
//     if (!validateRelatedArticles(relArt)) isValid = false;
//     if (!validateImage(img1, 'img1')) isValid = false;
//     if (!validateImage(img2, 'img2')) isValid = false;
//     if (!validateCategory(category)) isValid = false;
//     if (!nameValid(authorName)) isValid = false;


//     if (!termsChecked) {
//         alert("You must agree to the terms and conditions.");
//         isValid = false;
//     }

//     if (isValid) {
//         form.submit();
//     }
// });




function headValid(texts) {
    const t = String(texts).toLowerCase().trim();
    const rg = /^[a-z0-9]/;
    const he = document.querySelector("p.head");

    if (t.length === 0) {
        he.innerHTML = "Headline must not be empty";
        he.style.color = "red";
    } else if (rg.test(t)) {
        he.innerHTML = "Valid Text";
        he.style.color = "green";
    } else {
        he.innerHTML = "Invalid Text";
        he.style.color = "red";
    }
}


function headValids(texts) {
    const t = String(texts).toLowerCase().trim();
    const rg = /^[a-z0-9]/;
    const he = document.querySelector("p.heads");

    if (t.length === 0) {
        he.innerHTML = "Subheading must not be empty";
        he.style.color = "red";
    } else if (rg.test(t)) {
        he.innerHTML = "Valid Text";
        he.style.color = "green";
    } else {
        he.innerHTML = "Invalid Text";
        he.style.color = "red";
    }
}


function updateCount() {
    const textarea = document.getElementById("sum");
    const charCount = document.getElementById("charCount");
    const zz =  charCount.textContent = `${textarea.value.length} / 200 characters`;

    if (!document.forms["myforms"]["summar"].value){
      document.getElementById("charCount").innerHTML = "Summary must not be empty";
      document.getElementById("charCount").style.color = "red";
    }else {
  document.getElementById("charCount").style.color = "gray";
}
}

function updateCounts(){
    const textarea = document.getElementById("summ");
    const charC = document.getElementById("charCounts");
    charC.textContent = `${textarea.value.length} / 3000 characters`;

    if (!textarea.value){
      document.getElementById("charCounts").innerHTML = "Summary must not be empty";
      document.getElementById("charCounts").style.color = "red";
    }else {
  document.getElementById("summaryError").style.color = "gray";
}
}

 function validEmail(mail) {
  const s = String(mail).trim().toLowerCase(); 
  const rg = /^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/;
  const he = document.querySelector("p.valn")

   if (s.length === 0) {
        he.innerHTML = "Author mail must not be empty";
        he.style.color = "red";
    } else if (rg.test(s)) {
        he.innerHTML = "Valid Author mail";
        he.style.color = "green";
    } else {
        he.innerHTML = "Invalid Author mail";
        he.style.color = "red";
    }
}

function validName(name) {
  const s = String(name).trim().toLowerCase(); 
  const rg = /^[a-z]+ [a-z]+$/;
  const he = document.querySelector("p.authname")

   if (s.length === 0) {
        he.innerHTML = "Author name must not be empty";
        he.style.color = "red";
    } else if (rg.test(s)) {
        he.innerHTML = "Valid Author Name";
        he.style.color = "green";
    } else {
        he.innerHTML = "Invalid Author Name";
        he.style.color = "red";
    }
}


function dateVali(dates){
    da = String(dates);
    d = da.split("-");
    if (d.length !== 3) {
    console.log("Invalid date format. Expected format: YYYY-MM-DD");
    return false;
  }

    d.forEach((element, index) => {
    if (isNaN(element)) {
      console.log(`Invalid value: ${element} is not a number`);
      isValid = false;
      return;
    }
    const num = parseInt(element, 10);

    if (index === 0) {
      if (num < 1000 || num > 9999) {
        console.log(`Invalid year: ${num}`);
        isValid = false;
      }
    } else if (index === 1) {
      if (num < 1 || num > 12) {
        console.log(`Invalid month: ${num}`);
        isValid = false;
      }
    } else if (index === 2) {
      if (num < 1 || num > 31) {
        console.log(`Invalid day: ${num}`);
        isValid = false;
      }
    }
  });

  if (isValid) {
    console.log("Date is valid");
    document.getElementById("pdate").innerHTML = "Date is valid";
    document.getElementById("pdate").style.color = "green";
  } else {
    document.getElementById("pdate").innerHTML = "Date is invalid";
    document.getElementById("pdate").style.color = "red";
  }

  return isValid;
}


function timeVali(time) {
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!timePattern.test(time)) {
        document.querySelector(".ptime").innerHTML = "Please enter time in 24 clock format";
        document.querySelector(".ptime").style.color = "red";
        return false;
    }

    const [hours, minutes] = time.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;

    const minTime = 0 * 60;   
    const maxTime = 24 * 60;  

    if (totalMinutes < minTime || totalMinutes > maxTime) {
        document.querySelector(".ptime").innerHTML = "Please enter time between 9 and 6";
        document.querySelector(".ptime").style.color = "red";
        return false;
    }

    return true;
}


document.querySelector(".file-uploader").addEventListener("change", (e) => {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    const files = e.target.files;
    const imgi = document.querySelector("output.imgi");
    imgi.innerHTML = "";

    for (let i = 0; i < files.length; i++) {
      if (!files[i].type.match("image")) continue;
      const pic = new FileReader();
      pic.addEventListener("load", function (event) {
        const picf = event.target;
        const div = document.createElement("div");
        div.style.position = "relative";
        div.style.display = "inline-block";
        div.style.margin = "5px";

        const img = document.createElement("img");
        img.className = "thumbnail";
        img.src = picf.result;
        img.title = files[i].name;
        img.style.width = "150px";
        img.style.height = "auto";
        img.style.display = "block";

        const but = document.createElement("p");
        but.textContent = "X";
        but.style.position = "absolute";
        but.style.top = "0px";
        but.style.right = "0px";
        but.style.backgroundColor = "red";
        but.style.color = "white";
        but.style.borderRadius = "4px";
        but.style.width = "25px";
        but.style.height = "25px";
        but.style.lineHeight = "25px";
        but.style.textAlign = "center";
        but.style.cursor = "pointer";
        but.style.margin = "0";

        but.addEventListener("click", () => div.remove());

        div.appendChild(img);
        div.appendChild(but);
        imgi.appendChild(div);
      });

      pic.readAsDataURL(files[i]);
    }
  } else {
    alert("upload properly");
  }
});


document.querySelector("#files").addEventListener("change", (e) => {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    const files = e.target.files;
    const im = document.querySelector("output.imgo");
    im.innerHTML = "";

    for (let i = 0; i < 5; i++) {
      if (!files[i].type.match("image")) continue;
      const pic = new FileReader();
      pic.addEventListener("load", function (event) {
        const picf = event.target;  
        const div = document.createElement("div");
        div.style.position = "relative"; 
        div.style.display = "inline-block";
        div.style.margin = "5px";

        const img = document.createElement("img");
        img.className = "thumbnail";
        img.src = picf.result;
        img.title = files[i].name;
        img.style.width = "150px";
        img.style.height = "auto";
        img.style.display = "block"; 

        const but = document.createElement("p");
        but.textContent = "X";
        but.style.position = "absolute";
        but.style.top = "0px";
        but.style.right = "0px";
        but.style.backgroundColor = "red";
        but.style.color = "white";
        but.style.borderRadius = "4px";
        but.style.width = "25px";
        but.style.height = "25px";
        but.style.lineHeight = "25px";
        but.style.textAlign = "center";
        but.style.cursor = "pointer";
        but.style.margin = "0";

        but.addEventListener("click", () => div.remove());

        div.appendChild(img);
        div.appendChild(but);
        im.appendChild(div);
      });

      pic.readAsDataURL(files[i]);
    }
  } else {
    alert("upload properly");
  }
});

const dropdown = document.getElementById('dropdown');
const dropdownContent = document.getElementById('dropdown-content');
const selectedTags = document.getElementById('selected-tags');

const options = ['Breaking', 'Exclusive', 'Analysis', 'Interview'];

options.forEach(option => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = option;
  checkbox.style.marginRight = "8px";

  const label = document.createElement('label');
  label.style.display = "block";
  label.style.cursor = "pointer";

  label.appendChild(checkbox);
  label.append(option);

  dropdownContent.appendChild(label);

  checkbox.addEventListener('change', () => {
    const existingTag = selectedTags.querySelector(`[data-tag="${option}"]`);

    if (checkbox.checked && !existingTag) {
      const tag = document.createElement('span');
      tag.innerText = option;
      tag.setAttribute('data-tag', option);
      tag.style.backgroundColor = "blue";
      tag.style.borderRadius = "10px";
      tag.style.padding = "8px";
      tag.style.margin = "4px";
      tag.style.color = "white";
      tag.style.display = "inline-block";

      selectedTags.appendChild(tag);
    } else if (!checkbox.checked && existingTag) {
      existingTag.remove();
    }
  });
});

dropdown.addEventListener('click', (e) => {
  if (e.target.id !== "dropdown-content" && e.target.tagName !== "INPUT") {
    dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';
  }
});

document.addEventListener('click', function (event) {
  if (!dropdown.contains(event.target)) {
    dropdownContent.style.display = 'none';
  }
});


// -------------------------------------------------
function isValidUrl(url) {
  const pattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
  return pattern.test(url);
}

document.getElementById("videoUrlInput").addEventListener("keydown", function (event) {
  const key = event.key;
  const url = this.value.trim();
  const output = document.querySelector("output.isValidurl");

  if ((key === "Enter" || key === ",")) {
    event.preventDefault(); 

    if (isValidUrl(url)) {
      const tag = createTag(url, output);
      output.appendChild(tag);
      this.value = "";
    } 
    else {
      document.querySelector("output.urls").innerHTML = "Invalid URL , Enter a proper one";
      document.querySelector("output.urls").style.color = "red";
    }
  }
});

document.getElementById("articleUrlsInput").addEventListener("keydown", function (event) {
  const key = event.key;
  const textarea = this;
  const output = document.querySelector("output.urls");

  if (key === "Enter" || key === ",") {
    event.preventDefault();

    const input = textarea.value.trim().replace(/,$/, ''); 
    const urls = input.split(",").map(u => u.trim()).filter(u => u !== "");

    const invalidUrls = urls.filter(u => !isValidUrl(u));

    if (invalidUrls.length > 0) {
      output.innerHTML = "Invalid URL(s) ";
      output.style.color = "red";
    } 
    else {
      output.style.color = ""; 
      urls.forEach(url => {
        const tag = createTag(url, output);
        output.appendChild(tag);
      });
      textarea.value = "";
    }
  }
});


function createTag(text, parent) {
  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = text;

  const closeBtn = document.createElement("span");
  closeBtn.className = "close-btn";
  closeBtn.textContent = "X";

  closeBtn.onclick = () => parent.removeChild(tag);
  tag.appendChild(closeBtn);

  return tag;
}



document.querySelector(".textbox").addEventListener("keydown", function(event) {
    const key = event.key;
    const text = this.value.trim();

    if (key === "Enter" || key === ",") {
        event.preventDefault();

        if (text !== "") {
            const container = document.createElement("div");
            container.className = "entry badge border border-secondary text-black m-1 p-2 d-flex align-items-center";

            const span = document.createElement("span");
            span.textContent = text;

            const cancelBtn = document.createElement("button");
            cancelBtn.textContent = "×";
            cancelBtn.className = "btn  bg-danger btn-sm btn-light ms-2";
            cancelBtn.onclick = function () {
                container.remove();
                validateLocations();
            };

            container.appendChild(span);
            container.appendChild(cancelBtn);
            document.querySelector(".loc").appendChild(container);

            this.value = ""; 
            validateLocations();
        }
    }
});

function validateLocations() {
    const locOutput = document.querySelector(".loc");
    const errorMsg = document.querySelector(".error");

    if (locOutput.children.length === 0) {
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
    }
}


document.getElementById("tg").addEventListener("keydown", function(event) {
    const key = event.key;
    const text = this.value.trim();

    if (key === "Enter" || key === ",") {
        event.preventDefault();

        if (text !== "") {
            const container = document.createElement("div");
            container.className = "entry badge text-dark border border-secondary m-1 p-2 d-flex align-items-center";

            const span = document.createElement("span");
            span.textContent = text;

            const cancelBtn = document.createElement("button");
            cancelBtn.textContent = "×";
            cancelBtn.className = "btn bg-danger btn-sm btn-light ms-2";
            cancelBtn.onclick = function () {
                container.remove();
                validateTags();
            };

            container.appendChild(span);
            container.appendChild(cancelBtn);
            document.querySelector(".tag-output").appendChild(container);

            this.value = "";
            validateTags();
        }
    }
});

function validateTags() {
    const tagOutput = document.querySelector(".tag-output");
    const errorMsg = document.querySelector(".tags .error");

    if (tagOutput.children.length === 0) {
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
    }
}
