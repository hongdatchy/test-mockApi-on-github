$.ajax("https://5f5741881a07d600167e693d.mockapi.io/api/v1/product").then(function(resole){
    console.log(resole);
    let innerSiteShowProduct = resole.map(function(item){
        return `<tr>
                    <td>${item.name}</td>
                </tr>`
    })
    $("#site-show-product").html(innerSiteShowProduct.join(""));
})
async function ajaxPost(url, data) {
    let rs = null;
    await $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        url: url,
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            rs = result
        }
    });
    return rs;
}
// id: "2",
// name: "name 2",
// description: "description 2",
// image: "image 2",
// price: 96
// let product = {
//     id: "2",
//     name: "name 2",
//     description: "description 2",
//     image: "image 2",
//     price: 96
// }
// ajaxPost("https://5f5741881a07d600167e693d.mockapi.io/api/v1/product",product);