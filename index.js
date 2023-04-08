
const setup = () => {

    // Determining Projection Filters
    // Begin with default projection filters
    // var userProjectionFilters = {
    //     name: true,
    //     weight: false,
    //     loves: false,
    // }

    // // If user checks a checkbox, change the corresponding projection filter to true
    // $('#filterSubmitButton').click(async()  => {

    // if ($('#nameCheckbox').is(':checked')) {
    //     userProjectionFilters.name = true;}

    // if ($('#weightCheckbox').is(':checked')) {
    //     userProjectionFilters.weight = true;}
    // });


    // Determining Query Type
    $('#nameSearchButton').click(async () => {
        // default projection filters
        var userProjectionFilters = {
            name: true,
            weight: false,
            loves: false,
        }
    
        // If user checks a checkbox, change the corresponding projection filter to true
        $('#filterSubmitButton').click(async()  => {
        if ($('#nameCheckbox').is(':checked')) {
            userProjectionFilters.name = true;}
        if ($('#weightCheckbox').is(':checked')) {
            userProjectionFilters.weight = true;}
        });
    
    // setup query object
        const query = {
            type: "nameSearch",
            name: $('#nameSearchInput').val(),
            // projectionFilters: {
            //     name: true,
            //     weight: false,
            // }
            projectionFilters: userProjectionFilters
        }

        const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

        $("#searchResults").empty();
        $("#searchResults").html(JSON.stringify(res.data));

    });

    $('#weightSearchButton').click(async () => {
        var userProjectionFilters = {
            name: true,
            weight: false,
            loves: false,
        }
    
        // If user checks a checkbox, change the corresponding projection filter to true
        $('#filterSubmitButton').click(async()  => {
    
        if ($('#nameCheckbox').is(':checked')) {
            userProjectionFilters.name = true;}
    
        if ($('#weightCheckbox').is(':checked')) {
            userProjectionFilters.weight = true;}
        });
    
    
        const query = {
            type: "weightSearch",
            minWeight: parseInt($('#weightLowerLimitInput').val()),
            maxWeight: parseInt($('#weightUpperLimitInput').val()),
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
        var userProjectionFilters = {
            name: true,
            weight: false,
            loves: false,
        }
    
        // If user checks a checkbox, change the corresponding projection filter to true
        $('#filterSubmitButton').click(async()  => {
    
        if ($('#nameCheckbox').is(':checked')) {
            userProjectionFilters.name = true;}
    
        if ($('#weightCheckbox').is(':checked')) {
            userProjectionFilters.weight = true;}
        });
    
    
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