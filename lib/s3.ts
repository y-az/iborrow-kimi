import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
    endpoint: process.env.HETZNER_STORAGE_ENDPOINT,
    region: "eu-central-1",
    credentials: {
        accessKeyId: process.env.HETZNER_ACCESS_KEY_ID!,
        secretAccessKey: process.env.HETZNER_SECRET_ACCESS_KEY!,
    },
});
