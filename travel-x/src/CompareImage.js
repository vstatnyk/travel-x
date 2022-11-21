const { RekognitionClient, CompareFacesCommand } = require("@aws-sdk/client-rekognition");


const client = new RekognitionClient({
  region: process.env.REACT_APP_AWS_REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  }
});

export const compareFaces = async (source, targetData) => {
    let fileName = targetData.name + 'DMV.jpg';
    const params = {
        "SourceImage": {
            "Bytes": source
        },
        "TargetImage": {
            "S3Object": {
                "Bucket": 'travel-x',
                "Name": fileName
            }
        },
        "SimilarityThreshold": 70
    };
    
    const command = new CompareFacesCommand(params);
    
    try {
        const data = await client.send(command);
        return data;
    } catch (error) {
        console.log(error);
    }
}