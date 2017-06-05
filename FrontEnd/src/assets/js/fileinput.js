var fileUpload = document.getElementById("fileUpload"),
uploadLabel = document.querySelector("label[for='fileUpload']"),
fileInsert = document.createElement("button");
fileInsert.id = "fileSelector";

fileInsert.innerHTML = uploadLabel.innerHTML;
fileUpload.parentNode.insertBefore(fileInsert, fileUpload.nextSibling);
fileUpload.style.display = "none";
uploadLabel.style.display = "none";
fileInsert.addEventListener('click', function(e){
	e.preventDefault();
	fileUpload.click();
}, false);

function previewImage(input) {
    var preview = document.getElementById('preview');
    var imgForm = document.getElementById('filehandler');
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
	  var imgPreview = document.getElementById('imgpreview');
        imgPreview.setAttribute('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    } else {
 // imgPreview.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fibre-optic-tips-2x.jpg');
    } 
  }