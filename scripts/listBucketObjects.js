import {Storage} from '@google-cloud/storage';

async function listBucketObjects(bucketName) {
  const storage = new Storage();
    try {
        const [files] = await storage.bucket(bucketName).getFiles();
        console.log('Files:');
        files.forEach(file => console.log(file.name));
    } catch (err) {
        console.error('ERROR:', err);
    }
}

listBucketObjects('jg-website-assets');
