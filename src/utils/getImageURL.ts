const getImageURL = async (image: File) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=cfc1b09dd65dc11748a5dc06b669f693`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Image upload failed.");
    }

    const data = await response.json();
    return data.data.display_url;
  } catch (error) {
    console.error(error);
  }
};

export default getImageURL;
