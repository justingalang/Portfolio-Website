import {Storage} from '@google-cloud/storage';
import type {GetSignedUrlConfig} from '@google-cloud/storage';

const ASSETS_BUCKET = 'jg-website-assets';
const storage = new Storage();

/** 
 * lists all the objects in a bucket
 * @param bucketName 
 */
async function listBucketObjects(bucketName: string) {
    try {
        const [files] = await storage.bucket(bucketName).getFiles();
        console.log('Files:');
        files.forEach(file => console.log(file.name));
    } catch (err) {
        console.error('ERROR:', err);
    }
}

/**
 * gets a file from a bucket
 * @param bucketName name of the bucket
 * @param fileName name of the file
 * @returns the file
 */
async function getFile(bucketName: string = ASSETS_BUCKET, fileName: string) {
    try {
        console.log('getFile')
        const file = await storage.bucket(bucketName).file(fileName).download();
        console.log('File:', file);
        return file;
    } catch (err) {
        console.error('ERROR:', err);
    }
}

async function getSignedUrl(bucketName: string, fileName: string) {
    const options = {
        version: 'v4',
        action: 'read',
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    };

    // Get a v4 signed URL for reading the file
    const [url] = await storage.bucket(bucketName).file(fileName).getSignedUrl(options as GetSignedUrlConfig);

    console.log('Generated GET signed URL:');
    console.log(url);
}


export {
    ASSETS_BUCKET,
    getFile,
    getSignedUrl,
}

