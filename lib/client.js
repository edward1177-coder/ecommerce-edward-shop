import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'm8gg6gm6',
    dataset: 'production',
    apiVersion: '2022-08-26',
    useCDN: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source)
  }
  
  