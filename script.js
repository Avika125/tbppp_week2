const getFact = document.getElementById('getFact');
    const catFact = document.getElementById('catFact');

    getFact.addEventListener('click', async () => {
        document.getElementById('getFact').innerText = 'Loading...';
        const response =  await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        catFact.value = data.fact;
        document.getElementById('getFact').innerText = 'Get Fact';

        console.log(response);

    });