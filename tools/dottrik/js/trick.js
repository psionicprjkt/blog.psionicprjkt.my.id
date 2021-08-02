let counterLabel = document.getElementById("counter");
let count = 0;
let username = document.getElementById("username").value;
function* generate(email) {
    if (email.length <= 1) {
        yield email;
    } else {
        let head = email[0];
        let tail = email.slice(1);
        for (let item of generate(tail)) {
            yield head + item;
            yield head + "." + item;
        }
    }
}
function updateEmails() {
    let username = document.getElementById("username").value;
    document.getElementById("emails").value = "";
    count = 0;
    let startTime = new Date();
    for (let message of generate(username)) {
        document.getElementById("emails").value += message + "@gmail.com\r\n";
        count += 1;
        counterLabel.innerText = "Hasil: " + count;
    }
    document.getElementById("emails").value = document.getElementById("emails").value.slice(0, -1);
    let endTime = new Date();
    let timeDiff = endTime - startTime;
    console.log("Finished in " + timeDiff + "ms");
}
document.getElementById("username").oninput = function () {
    let newUsername = document.getElementById("username").value;
    if (username !== newUsername) {
        username = newUsername;
        if (username.length > 1) {
            setTimeout(updateEmails, 150);
        }
    }
};
document.getElementById("save").onclick = function () {
    blob = new Blob([document.getElementById("emails").value], { type: "text/plain;charset=utf-8", endings: "transparent" });
    FileSaver.saveAs(blob, document.getElementById("username").value + ".txt");
};
