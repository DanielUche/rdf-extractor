const {promises: fs} = require('fs');
const path = require('path');
const xml2js = require('xml2js');


const fileReader = async () => {
    const ff = 'caches';
    const baseDir = `${ff}/epub`;
    try {
        const folders = await fs.readdir(`${baseDir}`);
        for await (const folder of folders) {
           const isDir = await fs.lstat(`${baseDir}/${folder}`);
           if(isDir.isDirectory()) {
                const rdfFolder = await fs.readdir(`${baseDir}/${folder}`);
                for await (const files of rdfFolder) {
                    console.log('file =', files );
                }
            } 
        } 
    } catch (error) {
        console.log(error.message);
    }  
}





module.exports = () => {
  try {

  }
  catch (error) {

  }
};

fileReader();
