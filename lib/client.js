import { createClient } from '../sanity_estore/node_modules/@sanity/client';
import imageUrlBuilder from '../sanity_estore/node_modules/@sanity/image-url';


   export const client = createClient({
    projectId: '40yonde4',
    dataset: 'production',
    apiVersion: '2023-03-03',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);