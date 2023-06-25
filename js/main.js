document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`https://what-to-eat-api-node-only.vercel.app/`)
  const data = await res.json()

  console.log(data)
  // let randomNum=Math.floor(Math.random()*10)+1
  document.querySelector('#typeOfCuisine').textContent = data.typeOfFood
  // document.getElementById('clickMe').style.display='none'
}
