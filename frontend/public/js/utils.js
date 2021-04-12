const sendModel = async (inp) => {
  const formData = new FormData();
  const model = inp.files[0];

  formData.append("model", model);

  try {
    const res = await fetch("http://localhost:3030/model", {
      method: "POST",
      body: formData,
    });
    console.log("HTTP response code:", res.status);
  } catch (e) {
    console.log(e);
  }
};