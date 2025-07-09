
function headValid(texts) {
    const t = String(texts).toLowerCase().trim();
    const rg = /^[a-z0-9]/;
    const he = document.querySelector("p.head");

    if (!t.length || t.length < 5) {
        he.innerHTML = "Headline must be 5 characters atleast";
        he.style.color = "red";
    } else{
      he.innerHTML = "";
    }
}


function headValids(texts) {
    const t = String(texts).toLowerCase().trim();
    const rg = /^[a-z0-9]/;
    const he = document.querySelector("p.heads");

    if (t.length  < 3 ) {
        he.innerHTML = "Subheading must be 3 characters atleast.";
        he.style.color = "red";
    } else{
      he.innerHTML = "";
    }
}


function validateSummary() {
    const textarea = document.getElementById("sum");
    const charCount = document.getElementById("charCount");
    
    if (!textarea.value.trim()) {
        charCount.innerHTML = "Summary must not be empty";
        charCount.style.color = "red";
        return false;
    }  else {
        charCount.textContent = `${textarea.value.length} / 200 characters`;
        charCount.style.color = "gray";
        return true;
    }
}


function validateDetailSummary() {
    const textarea = document.getElementById("summ");
    const charC = document.getElementById("charCounts");
    const length = textarea.value.trim().length;

      if (length <= 0) {
      charC.innerHTML = "Full story must not be empty";
      charC.style.color = "red";
      return false;
      }  else {
      charC.textContent = `${length} / 3000 characters`;
      charC.style.color = "gray";
      return true;
      }
      }


function updateCount() {
    const textarea = document.getElementById("sum");
    const charCount = document.getElementById("charCount");
    const value = textarea.value.trim();
    const length = value.length;

    if (!value) {
        charCount.innerHTML = "Summary must not be empty";
        charCount.style.color = "red";
    } else {
        charCount.textContent = `${length} / 200 characters`;
        charCount.style.color = "gray";
    }
}


function updateCounts() {
    const textarea = document.getElementById("summ");
    const charC = document.getElementById("charCounts");
    const value = textarea.value.trim();
    const length = value.length;

    if (!value) {
        charC.innerHTML = "Full story must not be empty";
        charC.style.color = "red";
    } else {
        charC.textContent = `${length} / 3000 characters`;
        charC.style.color = "gray";
    }
}


function validEmail(mail) {
    const s = String(mail).trim().toLowerCase(); 
    const rg = /^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/;
    const he = document.querySelector("p.valn");

    if (s.length === 0) {
        he.innerHTML = "Author mail must not be empty";
        he.style.color = "red";
        return false;
    } else if (rg.test(s)) {
        he.innerHTML = "";
        return true;
    } else {
        he.innerHTML = "Invalid Author mail";
        he.style.color = "red";
        return false;
    }
}

function validName(name) {
    const s = String(name).trim().toLowerCase(); 
    const rg = /^[a-z]+ [a-z]+$/;
    const he = document.querySelector("p.authname");

    if (s.length === 0) {
        he.innerHTML = "Author name must not be empty";
        he.style.color = "red";
        return false;
    } else if (rg.test(s)) {
        he.innerHTML = "";
        return true;
    } else {
        he.innerHTML = "Invalid Author Name";
        he.style.color = "red";
        return false;
    }
}


function dateVali(dates) {
    let isValid = true;
    const da = String(dates);
    const d = da.split("-");

    if (d.length !== 3) {
        console.log("Invalid date format. Expected format: YYYY-MM-DD");
        document.getElementById("pdate").innerHTML = "Date is invalid";
        document.getElementById("pdate").style.color = "red";
        return false;
    }

    let year, month, day;

    d.forEach((element, index) => {
        if (isNaN(element)) {
            console.log(`Invalid value: ${element} is not a number`);
            isValid = false;
            return;
        }
        const num = parseInt(element, 10);

        if (index === 0) {
            year = num;
            if (num < 1000 || num > 9999) {
                console.log(`Invalid year: ${num}`);
                isValid = false;
            }
        } else if (index === 1) {
            month = num;
            if (num < 1 || num > 12) {
                console.log(`Invalid month: ${num}`);
                isValid = false;
            }
        } else if (index === 2) {
            day = num;
            if (num < 1 || num > 31) {
                console.log(`Invalid day: ${num}`);
                isValid = false;
            }
        }
    });

    if (isValid) {
        const inputDate = new Date(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
        const today = new Date();
        today.setHours(0, 0, 0, 0); 

        if (inputDate > today) {
            console.log("Future date not allowed");
            document.getElementById("pdate").innerHTML = "Please select a publish date till today.";
            document.getElementById("pdate").style.color = "red";
            return false;
        }
    }

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
        document.querySelector(".ptime").innerHTML = "Please enter time in 24-hour format (HH:MM)";
        document.querySelector(".ptime").style.color = "red";
        return false;
    }

    const [hours, minutes] = time.split(":").map(Number);
    const totalInputMinutes = hours * 60 + minutes;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    if (totalInputMinutes > currentMinutes) {
        document.querySelector(".ptime").innerHTML = "Future time is not allowed";
        document.querySelector(".ptime").style.color = "red";
        return false;
    }

    document.querySelector(".ptime").innerHTML = "Valid time";
    document.querySelector(".ptime").style.color = "green";
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
  if (!dropdownContent.contains(e.target)) {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
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
  const output = document.querySelector("output.sorurl");

  if ((key === "Enter" || key === ",")) {
    event.preventDefault(); 

    if (isValidUrl(url)) {
      const tag = createTag(url, output);
      output.appendChild(tag);
      this.value = "";
    } 
    else {
      output.innerHTML = "";
      output.style = "";
      document.querySelector(".sorurl").innerHTML = "Invalid URL , Enter a proper one";
      document.querySelector(".sorurl").style.color = "red";
    }
  }
});


document.getElementById("videoUrlInputs").addEventListener("keydown", function (event) {
  const key = event.key;
  const url = this.value.trim();

  const output = document.querySelector("output.isValidurl");
  let tagsContainer = output.querySelector(".url-tags");
  if (!tagsContainer) {
    tagsContainer = document.createElement("div");
    tagsContainer.className = "url-tags d-flex flex-wrap gap-2";
    output.appendChild(tagsContainer);
  }

  let errorDisplay = output.querySelector(".url-error");
  if (!errorDisplay) {
    errorDisplay = document.createElement("p");
    errorDisplay.className = "url-error mt-1 text-danger";
    output.appendChild(errorDisplay);
  }

  if (key === "Enter" || key === ",") {
    event.preventDefault();

    if (isValidUrl(url)) {
      errorDisplay.textContent = "";
      errorDisplay.style.color = "";
      const tag = createTag(url, tagsContainer);
      tagsContainer.appendChild(tag);
      this.value = "";
    } else {
      errorDisplay.textContent = "Invalid URL, enter a proper one";
      errorDisplay.style.color = "red";
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
      output.innerHTML = "Invalid URL(s)";
      output.style.color = "red";
    } else {
      output.style.color = ""; 
      urls.forEach(url => {
        const tag = createTag(url, output);
        output.appendChild(tag);
      });
      textarea.value = "";
    }
  }
});

function createTag(url, parentOutput) {
  const tag = document.createElement("div");
  tag.className = "tag badge badge-light border border-secondary text-dark p-2 d-flex align-items-center";

  const icon = document.createElement("img");
  icon.style.width = "16px";
  icon.style.marginRight = "6px";

  const span = document.createElement("span");
  span.textContent = url;

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.className = "btn-close  ms-2";
  closeBtn.style.fontSize = "10px";
  closeBtn.onclick = () => parentOutput.removeChild(tag);

  tag.appendChild(icon);
  tag.appendChild(span);
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
const locInput = document.querySelector(".location input");

if (locOutput.children.length === 0 && locInput.value.trim() === "") {
    document.querySelector(".location .error").style.display = "block";
    isValid = false;
} else {
    document.querySelector(".location .error").style.display = "none";
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
        return false;
    } else {
        errorMsg.style.display = "none";
        return true;
    }
}

