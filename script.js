//credits:-

//1)https://jsonplaceholder.typicode.com
//2)https://picsum.photos



const centerdiv=document.getElementById('centerdiv');

fetch("https://jsonplaceholder.typicode.com/photos?_limit=30")
.then((apidata)=>{
    return (apidata.json());
})
.then((jsondata)=>{
    jsondata.map((val)=>{
        key=val.id;
        let img=document.createElement("img");
        img.src=`https://picsum.photos/200/300?random=${val.id}`;
        centerdiv.appendChild(img);
        console.log(val.url);
    })
});