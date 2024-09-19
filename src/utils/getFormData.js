function getFormData(event) {
  let data = {};
  const formData = new FormData(event.currentTarget);
  console.log("🚀 ~ handleSubmit ~ formData:", formData);
  event.preventDefault();
  for (let [key, value] of formData.entries()) {
    data = { ...data, [key]: value };
  }
  return data;
}

export default getFormData;
