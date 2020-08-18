const main = () => {
    const kampusList = document.getElementById("kampus-list");
    let pkampus = [];
    console.log(searchBar);

    // Pencarian
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filterkampus = pkampus.filter((kampus) => {
            return (
                kampus.first_name.toLowerCase().includes(searchString) || kampus.last_name.toLowerCase().includes(searchString)
            );
        });
        displaykampus(filteredkampus);
    });

    const loadkampus = async () => {
        try {
            const res = await fetch('https://my-json-server.typicode.com/yahyadwiyantara/apikampus/kampus');
            pkampus = await res.json();
            displaykampus(pkampus);
            console.log(pkampus);
        } catch (err) {
            console.error(err);
        }
    };

    const displaykampus = (kampus) => {
        const htmlString = kampus
            .map((kampus) => {
                return `
            <div class="col-xl-3 col-md-6 mb-4 ">
            <div class="card border-0 shadow">
                <img src="../src/${kampus.image}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                <h5 class="card-title mb-0"><a href="${kampus.link}" target="_blank">${kampus.first_name}</a></h5>
                <div class="card-text text-black-50">(${kampus.last_name})</div>
                </div>
            </div>
            </div>`;
            })
            .join('');
        kampusList.innerHTML = htmlString;
    };

    loadkampus();
};
export default main;