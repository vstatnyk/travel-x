const {
  RekognitionClient,
  CompareFacesCommand,
} = require("@aws-sdk/client-rekognition");

const client = new RekognitionClient({
  region: "us-west-1",
  credentials: {
    accessKeyId: "AKIA4VOFC6VNUIWXIKMB",
    secretAccessKey:"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",
  },
});

export const compareFaces = async (source, targetData) => {
  let fileName = targetData.name + "DMV.jpg";
  const params = {
    SourceImage: {
      Bytes: source,
    },
    TargetImage: {
      S3Object: {
        Bucket: "travel-x",
        Name: fileName,
      },
    },
    SimilarityThreshold: 70,
  };

  const command = new CompareFacesCommand(params);

  try {
    const data = await client.send(command);
    return data;
  } catch (error) {
    console.log(error);
  }
};
