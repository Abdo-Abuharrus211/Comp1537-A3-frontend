
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

    $('#weightSearchCheckbox').click(async () => {
        if ($("weightSearchCheckbox").is(':checked')) {
            const query = {
                type: "weightSearch",
                minWeight: $('#weightLowerLimitInput').val(),
                maxWeight: $('#weightUpperLimitInput').val(),
                projectionFilters: {
                    name: true,
                    weight: true,

                }
            }
        }

        const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)



    });

    


}

$(document).ready(setup);




































// console.log('setup');
// const setup = () => {
//     $('#nameSearchButton').click(async () => {
//         //todo send ajax to backend/server
//         const query = {
//             type: "nameSearch",
//             name: $('#nameSearchInput').val(),
//             loves: $('input[name="food"]:checked').map(function () {
//                 return $(this).val();
//             }).get(),
//             minWeight: $('#weightLowerLimitInput').val(),
//             maxWeight: $('#weightUpperLimitInput').val(),
//             projectionFilters: {
//                 name: true,
//                 _id: false,
//                 weight: false,
//                 loves: false,
//             }
//         }

//         // Check if weight search is selected
//         if ($('#weightSearchCheckbox').is(':checked')) {
//             query.type = "weightSearch";
//             query.selectionArgument = { weight: { $gte: query.minWeight, $lte: query.maxWeight } };
//             query.projectionFilters = {
//                 name: false,
//                 _id: false,
//                 weight: true,
//                 loves: false,
//             }
//         }

//         const res = await axios.post('https://fantastic-cyan-dress.cyclic.app//search', query)

//         $("#searchResults").empty();
//         $("#searchResults").html(JSON.stringify(res.data));
//     });

//     $('#weightSearchCheckbox').click(function () {
//         if ($(this).is(':checked')) {
//             $('#weightLowerLimitInput').prop('disabled', false);
//             $('#weightUpperLimitInput').prop('disabled', false);
//         } else {
//             $('#weightLowerLimitInput').prop('disabled', true);
//             $('#weightUpperLimitInput').prop('disabled', true);
//         }
//     });
// }

// $(document).ready(setup);