
const setup = () => {
    // Setup event listeners


    var lastClicked = "";
    // default projection filters
    var userProjectionFilters = {}

    // If user checks a checkbox and clicks btn, change the corresponding projection filter to true
    $('#filterSubmitButton').click(async () => {
        if ($('#nameCheckbox').prop('checked')) {
            console.log("name checked");
            userProjectionFilters = {
                name: true,
                weight: false,
            }
        }
        if ($('#weightCheckbox').prop('checked')) {
            console.log("weight checked");
            userProjectionFilters = {
                name: false,
                weight: true,
            }
        }
        if ($('#nameCheckbox').prop('checked') && $('#weightCheckbox').prop('checked')) {
            console.log("both checked");
            userProjectionFilters = {
                name: true,
                weight: true,
            }
        }


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
        console.log(query);

        lastClicked = "#nameSearchButton";
        console.log(lastClicked);
        const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

        $("#searchResults").empty();
        $("#searchResults").html(JSON.stringify(res.data));

        $("#tabledResults").empty(); // clear tabled results first
        // make a table using res.data
        // const makeTable = (data) => {
        //     const table = document.createElement('table');
        //     const thead = document.createElement('thead');
        //     const tbody = document.createElement('tbody');
        const table = $('<table>');
        const headerRow = $('<tr">');
        const nameHeader = $('<thead style="padding: 10%;>').html('Name');
        const weightHeader = $('<thead>').html('Weight');
        const vaccinatedHeader = $('<thead style="padding: 10%;>').html('Vaccinated');

        // Add headers to header row and then onto table
        headerRow.append(nameHeader);
        headerRow.append(weightHeader);
        headerRow.append(vaccinatedHeader);
        table.append(headerRow);

        for (let i = 0; i < res.data.length; i++) {
            const row = $('<tr style="padding: 10%;>');
            const name = $('<td style="padding: 10%;>').html(res.data[i].name);
            const weight = $('<td style="padding: 10%;>').html(res.data[i].weight);
            const vaccinated = $('<td style="padding: 10%;>').html(res.data[i].vaccinated);
            if (res.data[i].vaccinated) {
                vaccinated.css("backgroud-color", "green"); //Change color later
            } else {
                vaccinated.css("backgroud-color", "red"); //Change color later
            }
            row.append(name);
            row.append(weight);
            row.append(vaccinated);
            table.append(row);
        }
        $('#tabledResults').append(table);
    });





    // Weight Search
    $('#weightSearchButton').click(async () => {
        const query = {
            type: "weightSearch",
            minWeight: parseInt($('#weightLowerLimitInput').val()),
            maxWeight: parseInt($('#weightUpperLimitInput').val()),
            projectionFilters: userProjectionFilters
        }
        console.log(query);
        lastClicked = "#weightSearchButton";
        console.log(lastClicked);

        const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)
        $("#searchResults").empty();
        $("#searchResults").html(JSON.stringify(res.data));

    });

    // Food Search
    $('#foodSearchButton').click(async () => {

        if ($('#appleCheckbox').prop('checked') && $('#carrotCheckbox').prop('checked')) {
            const query = {
                type: "foodSearch",
                loves: ["apple", "carrot"],
                projectionFilters: userProjectionFilters
            }

            lastClicked = "#foodSearchButton";

            console.log(query);
            const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

            $("#searchResults").empty();
            $("#searchResults").html(JSON.stringify(res.data));
        }

        else if ($('#appleCheckbox').prop('checked')) {
            console.log("apple checked");
            const query = {
                type: "foodSearch",
                loves: "apple",
                projectionFilters: userProjectionFilters
            }

            lastClicked = "#foodSearchButton";
            console.log(query);
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

            lastClicked = "#foodSearchButton";

            console.log(query);
            const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

            $("#searchResults").empty();
            $("#searchResults").html(JSON.stringify(res.data));
        }

    });
}

$(document).ready(setup);