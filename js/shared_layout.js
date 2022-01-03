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

    const auth = firebase.auth();

    auth.onAuthStateChanged((user) => {
        if (user) {
            $("#auth").html("登出").attr("href", "index.html").click(() => {
                auth.signOut();
            });
        } else {
            console.log("not logined");
        }
    });
});