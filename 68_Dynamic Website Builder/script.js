function create(title,cNmae,views2,monthsAgo,duration,thumbnail){
    let viewsStr
    if (views2 < 1000000){
        let viewsStr = views2 / 1000 + "K"
    }
    else if(views2> 1000000){
        let viewsStr = views2 / 1000 + "M"
    }
    else{
        let viewsStr = views2 / 1000 + "b"
    }
    let htnml = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                    <div class="capsule">${duration}</div>
            </div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cNmae} . ${views2} views . ${monthsAgo}</p>

            </div>
        </div>`
        document.querySelector(".container").innerHTML += html
}
create("How to make a website","Dev Ed",1000000,1,"10:00","https://i.ytimg.com/vi/3JluqTojuME/maxresdefault.jpg")