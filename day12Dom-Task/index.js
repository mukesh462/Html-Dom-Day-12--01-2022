
const firstimg = document.createElement("img")
firstimg.setAttribute("src","https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg")
firstimg.setAttribute("class","img1")
document.body.append(firstimg)


 
const secimg = document.createElement("img")
secimg.setAttribute("src","https://dvyvvujm9h0uq.cloudfront.net/com/articles/1525892354-portrait-featured.jpg")
secimg.setAttribute("class","img2")
document.body.append(secimg)


 
const thirdimg = document.createElement("img")
thirdimg.setAttribute("src","https://dvyvvujm9h0uq.cloudfront.net/com/articles/1525891879-886386-sam-burriss-457746-unsplashjpg.jpg")
thirdimg.setAttribute("class","img3")
document.body.append(thirdimg)


 
const fourimg = document.createElement("img")
fourimg.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeoCkhNjUT6EyBTMtsO2mZg3nD1U9I6csrg&usqp=CAU")
fourimg.setAttribute("class","img4")
document.body.append(fourimg)


 
const fivimg = document.createElement("img")
fivimg.setAttribute("src","https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2020/11/ways-to-take-stunning-portraits-3.jpg?resize=554%2C600&ssl=1")
fivimg.setAttribute("class","img5")
document.body.append(fivimg)



let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    }
  
]
const details = countriesInfo.map((items)=>items)
for (const pop of details) {
  pop.key

  console.log(pop);
}

const divitems = document.createElement("div")
divitems.setAttribute("class","element")
const img = document.createElement("img")
img.setAttribute("src",  "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png")
img.setAttribute("class","Flags")
divitems.append(img)
const list = document.createElement("p")
list.innerText= "Name: India \n Population :1,394,975,829\n Region: Asia\n Capital : New Delhi"
divitems.append(list)

document.body.append(divitems)


// const list = document.createElement("p")
// list.innerText = "hii"
// document.div.append(list)
