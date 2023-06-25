document.querySelector('#clickMe').addEventListener('click', makeReq);

async function makeReq() {
  const pick = document.querySelector("button[name=button]").value
  const res = await fetch(`https://what-to-eat-api.onrender.com/api${pick}`);
  const responseText = await res.text();
  console.log(responseText);

  try {
    const data = JSON.parse(responseText);
    console.log(data);
    document.querySelector('#typeOfCuisine').textContent = data.typeOfFood;
  } catch (error) {
    console.error('Failed to parse JSON:', error);
  }
}
