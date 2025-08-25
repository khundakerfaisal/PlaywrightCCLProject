const fs=require("fs");
const writeJSONFile=(data,filePath="./userData.json")=>{
    let existingData=[];
    if(fs.existsSync(filePath)){
        existingData=JSON.parse(fs.readFileSync(filePath,"utf8"));
    }
    existingData.push(data);
    fs.writeFileSync(filePath,json.stringyfy(existingData,null,2));
}
const readFromJSONFile=(filepath="./userData.json")=>{
    if(!fs.existsSync(filepath)){
        console.log("file not found",filepath);
        return null;
    }
    const data=JSON.parse(fs.readFileSync(filepath,"utf8"));
    return data.length?data[data.length-1]:null;
};
module.exports={writeJSONFile,readFromJSONFile}