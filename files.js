var fs = require('fs');
const { connected } = require('process');

fs.writeFile('example.txt','Hi this naveen',function(err){
    if(err){
        console.log(err)
    }else{
        //console.log("Created the file")
        fs.readFile('example.txt','utf8',function(err,file){
            if(err){
                console.log(err)
            }else{
                console.log(file)
            }

        })
    }

})

fs.rename('example.txt','example1.txt',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('changed the file name')
    }
})

fs.appendFile('example1.txt',' From KRIFY',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('APPENDED')
    }
})
