

// mycode
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
}

function updateCounts(){
    const textarea = document.getElementById("summ");
    const charC = document.getElementById("charCounts");
    charC.textContent = `${textarea.value.length} / 3000 characters`;
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
    const g = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/


}


// function timeVali(time){
//     ti = 
// }

document.querySelector("#files").addEventListener("change", (e) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const files = e.target.files;
      const im = document.querySelector("output.imgo");
      im.innerHTML = ""; 

      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.match("image")) continue;
        const pic = new FileReader();

        pic.addEventListener("load", function (event) {
          const picf = event.target;
          const div = document.createElement("div");
          div.innerHTML = `<img class="thumbnail" src="${picf.result}" title="${files[i].name}" 
          style="width: 150px; height: auto; margin: 5px; display=flex; flex-direction:row; justify-content:center;" />`;
          im.appendChild(div);
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

      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.match("image")) continue;
        const pic = new FileReader();

        pic.addEventListener("load", function (event) {
          const picf = event.target;
          const div = document.createElement("div");
          div.innerHTML = `<img class="thumbnail" src="${picf.result}" title="${files[i].name}" 
          style="width: 150px; height: auto; margin: 5px; display=flex; flex-direction:row; justify-content:center;" />`;
          im.appendChild(div);
        });

        pic.readAsDataURL(files[i]);
      }
    } else {
      alert("upload properly");
    }
  });