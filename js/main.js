document.querySelector('#clickMe').addEventListener('click', makeReq);

async function makeReq() {

  const res = await fetch(`/api`);
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
