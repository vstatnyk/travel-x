const { RekognitionClient, CompareFacesCommand } = require("@aws-sdk/client-rekognition");
const fs = require('fs');
require('dotenv').config();
// const lionel1 = require('../src/components/images/LionelDMV.png');
// const lionel2 = require('../src/components/images/LionelDOS.png');


const client = new RekognitionClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
});

const compareFaces = async () => {
    const params = {
        "SourceImage": {
            "Bytes": fs.readFileSync('../src/components/images/LionelDMV.png')
        },
        "TargetImage": {
            "Bytes": fs.readFileSync('../src/components/images/brianbeilbypic.jpg')
        },
        "SimilarityThreshold": 70
    };
    
    const command = new CompareFacesCommand(params);
    
    try {
        const data = await client.send(command);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

compareFaces();