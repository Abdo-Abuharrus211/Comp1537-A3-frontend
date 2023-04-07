console.log('setup');
const setup = () => {
    $('#nameSearchButton').click(async () => {
        //todo send ajax to backend/server 
        const query = {
            type : "nameSearch",
            name: $('#nameSearchInput').val(),
            projectionFilters: {
                name: true,
                weight: false,
            }
        }

       const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

        $("#searchResults").empty();
        $("#searchResults").html(JSON.stringify(res.data));

    });
}

$(document).ready(setup);