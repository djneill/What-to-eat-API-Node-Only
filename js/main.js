document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()

  let randomNum=Math.floor(Math.random()*10)+1
  document.querySelector('#typeOfCuisine').textContent = data[randomNum].typeOfFood
  document.getElementById('clickMe').style.display='none'
}
