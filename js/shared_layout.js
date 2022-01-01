$(function () {
    $("head").append(
        ``
    );
    $(".nav-ahr").load("shared_layout.html nav", function () {
        console.log("Navbar loaded.");
        $("nav").unwrap();
    });
    $(".footer-ahr").load("shared_layout.html footer", function () {
        console.log("footer loaded.");
        $("footer").unwrap();
    });
});