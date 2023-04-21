const {getClient, getOriginalImage, processImage, uploadProcessedImage} = require('./s3-image-processing.js')

async function main(){
  client = getClient()
  const srcBucket = 'assets.tayofolayan.com'
  const srcKey = 'avatars/original/joker.jpg'
  const dstBucket = 'assets.tayofolayan.com'
  const dstKey = 'avatars/processed/joker.jpg'
  const width = 256
  const height = 256

  const originalImage = await getOriginalImage(client,srcBucket,srcKey)
  console.log(originalImage)
  const processedImage = await processImage(originalImage,width,height)
  await uploadProcessedImage(client,dstBucket,dstKey,processedImage)
}

main()