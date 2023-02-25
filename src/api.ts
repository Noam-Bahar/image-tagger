import FormData from 'form-data';
import { extractTags } from './utils';
import { Buffer } from 'buffer';

export const getTags = async (
  imageUrl: any,
  { username = '', password = '' }
) => {
  try {
    const credentials = Buffer.from(`${username}:${password}`).toString(
      'base64'
    );

    const formData = new FormData();
    formData.append('image_base64', imageUrl);

    const response = await fetch('https://api.imagga.com/v2/tags', {
      method: 'POST',
      // @ts-ignore
      body: formData,
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });
    const result = await response.json();
    return extractTags(result);
  } catch (error) {
    console.log(error);
  }
};
