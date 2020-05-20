document.addEventListener("DOMContentLoaded", () => {
    let counter = document.querySelector("#counter")
    
    let count = setInterval(function () {
        counter.innerText++; 
    }, 1000); 

 
    let love = document.getElementById("<3")
    let pause = document.getElementById("pause")
    let likes = document.querySelector(".likes")

    let submitBtn = document.querySelector("#submit")
    let commentList = document.querySelector("#list")
    
    let counter_id = document.getElementById("counter")
    let pause_id = document.getElementById("pause")
    let minus_id = document.getElementById("-")
    let plus_id = document.getElementById("+")
    let heart_id = document.getElementById("<3")
    let list_id = document.getElementById("list")
    let comment_id = document.getElementsByTagName("form")[0]
        

    
    
    
    minus.addEventListener("click", function(e){
        counter.innerText--;
    });
    
    plus.addEventListener("click", function(e){
        counter.innerText++;
    });
    
    pause.addEventListener("click", function(e){
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(count)
            
            plus.disabled = true;
            minus.disabled = true;
            love.disabled = true; 
            submitBtn.disabled = true;
        }
        else {
            count = setInterval(function () {
                counter.innerText++; 
            }, 1000);
            pause.innerText = "pause"

            plus.disabled = false;
            minus.disabled = false;
            love.disabled = false; 
            submitBtn.disabled = false;
        }
    });
    
    love.addEventListener("click", function(e){
        let obj = document.getElementById(`${counter.innerText}`);
        obj ? obj.children[0].innerText++ : 
        likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    });
    
    submitBtn.addEventListener("click", function(e){
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });
    
});