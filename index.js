
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

    // if ($('#nameCheckbox').prop('checked')) {
    //     userProjectionFilters.name = true;}

    // if ($('#weightCheckbox').prop('checked')) {
    //     userProjectionFilters.weight = true;}
    // });

    var lastClicked = "";
    // default projection filters
    var userProjectionFilters = {
        name: true,
        weight: false,
    }

    // If user checks a checkbox and clicks, change the corresponding projection filter to true
    $('#filterSubmitButton').click(async () => {
        if ($('#nameCheckbox').prop('checked')) {
            userProjectionFilters.name = true;
        } else {
            userProjectionFilters.name = false;}
        if ($('#weightCheckbox').prop('checked')) {
            userProjectionFilters.weight = true;
        } else {
            userProjectionFilters.weight = false;}
            

        $(lastClicked).trigger('click');
    });


    // Determining Query Type
    $('#nameSearchButton').click(async () => {
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

        lastClicked = "#nameSearchButton";
        console.log(lastClicked);
        const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

        $("#searchResults").empty();
        $("#searchResults").html(JSON.stringify(res.data));

    });



    // Weight Search
    $('#weightSearchButton').click(async () => {
        var userProjectionFilters = {
            name: true,
            weight: false,
            loves: false,
        }

        // If user checks a checkbox, change the corresponding projection filter to true
        $('#filterSubmitButton').click(async () => {

            if ($('#nameCheckbox').prop('checked')) {
                userProjectionFilters.name = true;
            }

            if ($('#weightCheckbox').prop('checked')) {
                userProjectionFilters.weight = true;
            }
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

    // Food Search
    $('#foodSearchButton').click(async () => {
        if ($('#appleCheckbox').prop('checked')) {
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
        else if ($('#carrotCheckbox').prop('checked')) {
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