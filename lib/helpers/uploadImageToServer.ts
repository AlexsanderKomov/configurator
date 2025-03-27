export const uploadImageToServer = async (blob: Blob): Promise<string> => {
  const formData = new FormData();
  formData.append("file", blob, "image.png");

  const response = await fetch("http://localhost:3001/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    console.log(response);
    throw new Error("Ошибка при загрузке изображения");
  }

  const data = await response.json();

  return data.url; // Ссылка на сохраненное изображение
};
