export const blobToBase64 = async (imageUrl: string) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUri = reader.result;
        resolve(dataUri);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error(error);
  }
};

export const extractTags = (imaggaResponse: any) => {
  return imaggaResponse.result.tags.map((tagObj: any) => tagObj.tag.en);
};
