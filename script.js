function showMaha() {
    const maha = document.getElementById("maha");
    const button = document.getElementById("playButton");

    maha.classList.toggle("show");

    if (maha.classList.contains("show")) {
        button.innerHTML = "⏸";
    } else {
        button.innerHTML = "▶";
    }
}