
const setup = () => {


    $('#nameSearchButton').click(async () => {
        //todo send ajax to backend/server 
        const query = {
            type: "nameSearch",
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

    $('#weightSearchButton').click(async () => {
        // if ($("weightSearchCheckbox").is(':checked')) {}
        const query = {
            type: "weightSearch",
            minWeight: $('#weightLowerLimitInput').val(),
            maxWeight: $('#weightUpperLimitInput').val(),
            projectionFilters: {
                name: true,
                weight: true,
            }

        }
        const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

        $("#searchResults").empty();
        $("#searchResults").html(JSON.stringify(res.data));

    });

    $('#foodSearchButton').click(async () => {
        if ($('#appleCheckbox').is(':checked')) {
            const query = {
                type: "foodSearch",
                loves: "apple",
                projectionFilters: {
                    name: true,
                    loves: true,
                    weight: true,
                }
            }
            const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

            $("#searchResults").empty();
            $("#searchResults").html(JSON.stringify(res.data));
        }
        else if ($('#carrotCheckbox').is(':checked')) {
            const query = {
                type: "foodSearch",
                loves: "carrot",
                projectionFilters: {
                    name: true,
                    loves: true,
                    weight: true,
                }
            }
            const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

            $("#searchResults").empty();
            $("#searchResults").html(JSON.stringify(res.data));
        }
        else {
            const query = {
                type: "foodSearch",
                loves: ["apple", "carrot"],
                projectionFilters: {
                    name: true,
                    loves: true,
                    weight: true,
                }
            }
            const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

            $("#searchResults").empty();
            $("#searchResults").html(JSON.stringify(res.data));
        }
    });
}

$(document).ready(setup);