console.log('setup');
const setup = () => {
    $('#nameSearchButton').click(async () => {
        //todo send ajax to backend/server 
        const query = {
            type: "nameSearch",
            name: $('#nameSearchInput').val(),
            loves: $('input[name="food"]:checked').map(function () {
                return $(this).val();
            }).get(),
            minWeight: $('#minWeightInput').val(),
            maxWeight: $('#maxWeightInput').val(),
            projectionFilters: {
                name: true,
                weight: false,
                loves: false,
            }
        }

        // Check if weight search is selected
        if ($('#weightSearchCheckbox').is(':checked')) {
            query.type = "weightSearch";
            query.selectionArgument = { weight: { $gte: query.minWeight, $lte: query.maxWeight } };
            query.projectionFilters = {
                name: false,
                weight: true,
                loves: false,
            }
        }

        const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

        $("#searchResults").empty();
        $("#searchResults").html(JSON.stringify(res.data));
    });

    $('#weightSearchCheckbox').click(function () {
        if ($(this).is(':checked')) {
            $('#minWeightInput').prop('disabled', false);
            $('#maxWeightInput').prop('disabled', false);
        } else {
            $('#minWeightInput').prop('disabled', true);
            $('#maxWeightInput').prop('disabled', true);
        }
    });
}

$(document).ready(setup);
