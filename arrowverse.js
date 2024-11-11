
document.addEventListener("DOMContentLoaded", function () {
    const seriesItems = document.querySelectorAll(".series-item");

    seriesItems.forEach((item) => {
        item.addEventListener("click", function () {
            const seriesLink = item.querySelector("a");
            window.location.href = seriesLink.getAttribute("href");
        });
    });
});




