/************************************************************
 // &lt;QuerySet [&lt;Group: Manager&gt;]&gt
 console.log(group)

 // <QuerySet [<Group: Manager>]>
 group = ((group.replace(/&(l|g|quo)t;/g, function (a, b) {
    return {
        l: '<',
        g: '>',
        quo: '"'
    }[b]
})))
 console.log(group)
 *************************************************************/


group = ((group.replace(/&(l|g|quo)t;/g, function (a, b) {
    return {
        l: '<',
        g: '>',
        quo: '"'
    }[b]
})))


if (group.includes("Manager")) {

    document.getElementById("group").innerHTML = "Manager"

    var d3_4_h5 = document.createElement("h5")
    d3_4_h5.innerText = "1-d3_4"
    document.getElementById("graph").appendChild(d3_4_h5)

    var d3_4_div = document.createElement("div")
    d3_4_div.id = "d3_4"
    document.getElementById("graph").appendChild(d3_4_div)

}

if (group.includes("Customer")) {

    document.getElementById("group").innerHTML = "Customer"

    var d3_15_h5 = document.createElement("h5")
    d3_15_h5.innerText = "2-d3_15"
    document.getElementById("graph").appendChild(d3_15_h5)

        var d3_15_div = document.createElement("div")
    d3_15_div.id = "d3_15"
    document.getElementById("graph").appendChild(d3_15_div)

}

if (group.includes("Supplier")) {

    document.getElementById("group").innerHTML = "Supplier"

    var d3_15_h5 = document.createElement("h5")
    d3_15_h5.innerText = "3-d3_15"
    document.getElementById("graph").appendChild(d3_15_h5)

        var d3_15_div = document.createElement("div")
    d3_15_div.id = "d3_15"
    document.getElementById("graph").appendChild(d3_15_div)
}
