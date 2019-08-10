var e = num_item.value

function cong() {
    e++
    document.getElementById("num_item").value = e;
    document.getElementById("sum_price").value = e * 6990000
    localStorage.setItem("name", e)
    localStorage.setItem("tong", e * 6990000)
}

function tru() {
    if (e > 0) {
        e--;
        document.getElementById("num_item").value = e
        document.getElementById("sum_price").value = e * 6990000
        localStorage.setItem("name", e)
        localStorage.setItem("tong", e * 6990000)
    }
}

