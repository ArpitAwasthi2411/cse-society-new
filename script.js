// Dark mode
document.getElementById("darkModeToggle").onclick = ()=>{
    document.body.classList.toggle("dark");
    };
    
    // Contact validation
    document.getElementById("contactForm").addEventListener("submit",function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
    this.reset();
    });
    
    // Gallery upload
    document.getElementById("imageUpload").addEventListener("change",function(){
    let file=this.files[0];
    if(file){
    let reader=new FileReader();
    reader.onload=function(e){
    let img=document.createElement("img");
    img.src=e.target.result;
    document.getElementById("galleryContainer").appendChild(img);
    }
    reader.readAsDataURL(file);
    }
    });
    