
const setup = () => {

    // Determining Projection Filters
    // Begin with default projection filters
    var userProjectionFilters = {
        name: true,
        weight: false,
        loves: false,
    }

    if ($('#nameCheckbox').is(':checked')) {
        userProjectionFilters.name = true;}
    if ($('#weightCheckbox').is(':checked')) {
        userProjectionFilters.weight = true;}
    if ($('#lovesCheckbox').is(':checked')) {
        userProjectionFilters.loves = true;}


    // Determining Query Type
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

        console.log(query.minWeight);
        console.log(query.maxWeight);
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