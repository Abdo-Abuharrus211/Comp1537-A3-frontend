
const setup = () => {
    // Setup event listeners


    var lastClicked = "";
    // default projection filters
    var userProjectionFilters = {
        name: true,
        weight: false,
    }

    // If user checks a checkbox and clicks btn, change the corresponding projection filter to true
    $('#filterSubmitButton').click(async () => {
        if ($('#nameCheckbox').prop('checked')) {
            console.log("name checked");
            userProjectionFilters.name = true;
        } else {
            userProjectionFilters.name = false;}
        if ($('#weightCheckbox').prop('checked')) {
            console.log("weight checked");
            userProjectionFilters.weight = true;
        } else {
            userProjectionFilters.weight = false;}


        console.log(lastClicked);
        $(lastClicked).trigger('click');
    });


    // Determining Query Type
    $('#nameSearchButton').click(async () => {
        // setup query object
        const query = {
            type: "nameSearch",
            name: $('#nameSearchInput').val(),
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
        const query = {
            type: "weightSearch",
            minWeight: parseInt($('#weightLowerLimitInput').val()),
            maxWeight: parseInt($('#weightUpperLimitInput').val()),
            projectionFilters: {
                name: true,
                weight: true,
            }
        }
        lastClicked = "#weightSearchButton";
        console.log(lastClicked);

        const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)
        $("#searchResults").empty();
        $("#searchResults").html(JSON.stringify(res.data));

    });

    // Food Search
    $('#foodSearchButton').click(async () => {
        if ($('#appleCheckbox').prop('checked')) {
            console.log("apple checked");
            const query = {
                type: "foodSearch",
                loves: "apple",
                projectionFilters: userProjectionFilters
            }
            const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

            $("#searchResults").empty();
            $("#searchResults").html(JSON.stringify(res.data));
        }
        else if ($('#carrotCheckbox').prop('checked')) {
            console.log("carrot checked");
            const query = {
                type: "foodSearch",
                loves: "carrot",
                projectionFilters: userProjectionFilters
            }
            const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

            $("#searchResults").empty();
            $("#searchResults").html(JSON.stringify(res.data));
        }
        else {
            const query = {
                type: "foodSearch",
                loves: ["apple", "carrot"],
                projectionFilters: userProjectionFilters
            }
            const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

            $("#searchResults").empty();
            $("#searchResults").html(JSON.stringify(res.data));
        }
    });
}

$(document).ready(setup);