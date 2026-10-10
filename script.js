
function readMore(button) {
    let extra = button.nextElementSibling;

    if (extra.style.display === "none") {
        extra.style.display = "block";
        button.innerText = "Read Less";
    } else {
        extra.style.display = "none";
        button.innerText = "Read More";
    }
}

function searchBlogs() {
    let search = document.getElementById("search")
        .value.toLowerCase();

    let blogs = document.querySelectorAll(".blog-card");

    blogs.forEach(function(blog) {
        let text = blog.innerText.toLowerCase();

        blog.style.display =
            text.includes(search) ? "" : "none";
    });
}

function addBlog() {
    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Please enter the title and content!");
        return;
    }

    let blog = document.createElement("div");
    blog.className = "blog-card";

    let heading = document.createElement("h3");
    heading.textContent = title;

    let paragraph = document.createElement("p");
    paragraph.textContent = content;

    blog.appendChild(heading);
    blog.appendChild(paragraph);

    document.getElementById("blogs").appendChild(blog);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    alert("Blog published successfully!");
}
