var http= require('http');
var url=require('url');
var datalist=[
    {
        userid: "vidhi987",
        password: "vidhipassword",
        name: "Vidhi Dixit",
        company: "Student",
        country: "India",
        college: "AKGEC",
        image: "images/women-vector.jpg",
        description: "A college student with an ambition to be a part of the world of Software Engineering",
        skills: ["C Programming","C++","Java Core", "HTML", "CSS","Big Data Analytics","JavaScript"]
    },
    {
        userid: "gaurav",
        password: "gauravpassword",
        name: "Gaurav Chauhan",
        company: "Medicops",
        country: "India",
        college: "xyz",
        image: "images/men-vector.jpg",
        description: "",
        skills: ""
    },
    {
        userid: "devansh",
        password: "devanshpassword",
        name: "Devansh Srivastava",
        comapny: "MIT UJN",
        country: "India",
        college: "xyz",
        image: "images/men-vector.jpg",
        description: "",
        skills: ""
    },
    {
        userid: "riddhi",
        password: "riddipassword",
        name: "Riddi Sehgal",
        company: "Student",
        country: "India",
        college: "AKGEC",
        image: "images/women-vector.jpg",
        description: "",
        skills: ""
    },
    {
        userid: "dainik",
        password: "dainikpassword",
        name: "Dainik Singh",
        company: "IBM",
        country: "India",
        college: "IMS",
        image: "images/men-vector.jpg",
        description: "",
        skills: ""
    },
    {
        userid: "viraj",
        password: "virajpassword",
        name: "Virag Mishra",
        company: "Student",
        country: "India",
        college: "IMS",
        image: "images/men-vector.jpg",
        description: "",
        skills: ""
    }
];
var server= http.createServer((req,res)=>{
    var  queryString=url.parse(req.url,true).query;
    var collegefilter=queryString.college;
    var namefilter=queryString.name;
    var response=[];
    for(var i=0;i<datalist.length;i++)
    {
            if(collegefilter)
            {
                if(collegefilter===datalist[i].college)
                response.push(datalist[i]);
            }
            else
            {
                if(namefilter===datalist[i].name)
                response.push(datalist[i]);
            }
        
    }
    if(response.length===0)
    {
        response=datalist;
    }
    var resp=response;
    var response=JSON.stringify(resp);
   // var response=JSON.stringify(datalist);
    res.writeHead(200,{'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    res.write(response);
    res.end();

});
server.listen(8081);