async function getD(){
    try{
        let i = await fetch('https://dog.ceo/api/breeds/image/random');
        return await i.json()}
    catch(err)
        {alert(err) }
    }

let g = await getD();


//this is a somewhat concise pattern for fetching data,
//however important to consider exactly where you would dispatch events based on success or errors