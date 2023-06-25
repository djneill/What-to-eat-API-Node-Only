document.querySelector('#clickMe').addEventListener('click', makeReq);

async function makeReq() {
  const pick = document.querySelector("button[name=button]").value
  const res = await fetch(`https://what-to-eat-api.onrender.com/api${pick}`);

  try {
    const data = JSON.parse;
    console.log(data);
    document.querySelector('#typeOfCuisine').textContent = data.typeOfFood;
  } catch (error) {
    console.error('Failed to parse JSON:', error);
  }
}
