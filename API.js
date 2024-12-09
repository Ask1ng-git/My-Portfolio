// function to GET by request GET the projects in the API

document.addEventListener("DOMContentLoaded", async () => {
  try {
      const response = await fetch("http://85.215.241.20:5005/api/projects"); // get every elements of the API
      const projects = await response.json(); // Transform every elements in JSON
      const rootDiv = document.getElementById("root"); 
      // Loop for each project in projects
      projects.forEach((project) => {
          // Card Creation
          const projectDiv = document.createElement("div");
          projectDiv.classList.add("card");

          // Container for flip effect
          const cardInner = document.createElement("div");
          cardInner.classList.add("card-inner");

          // Front face (image + type)
          const frontFace = document.createElement("div");
          frontFace.classList.add("card-front");

          // Creation for image's element and request GET in the API 
          const frontImage = document.createElement("img");
          frontImage.src = `http://85.215.241.20:5005/uploads/${project.image}`;
          frontImage.alt = project.title;

          // creation for title's type of project for mobile screen and the badge
          const frontType = document.createElement("h3");
          frontType.textContent = project.type;

          const frontBadge = document.createElement("div");
          frontBadge.classList.add("top-left-badge");
          // add image to the div "frontBadge" according to the "project.type"
          const badgeImg = document.createElement("img");
          badgeImg.src = `./img/${project.type}.png`;
          frontBadge.appendChild(badgeImg);

          frontFace.appendChild(frontBadge);
          frontFace.appendChild(frontImage);
          frontFace.appendChild(frontType);

          // Back face (description + button GitHub )
          const backFace = document.createElement("div");
          backFace.classList.add("card-back");

          const backDescription = document.createElement("p");
          backDescription.textContent = project.description;

          // Link GitHub with replacing of the space with "-"
          const repoName = project.title.replace(/ /g, "-");
          const githubUrl = `https://github.com/Ask1ng-git/${repoName}`;

          // creation of a button with the title of project
          const githubButton = document.createElement("button");
          githubButton.textContent = project.title;
          githubButton.classList.add("github-button");

          // Function on click, open the "githubUrl" in a new tab
          githubButton.addEventListener("click", (e) => {
              e.stopPropagation(); // prevent card from flipping
              window.open(githubUrl, "_blank");
          });

          // Add the faces to the backcard
          backFace.appendChild(backDescription);
          backFace.appendChild(githubButton);

          // Add the faces to the frontcard
          cardInner.appendChild(frontFace);
          cardInner.appendChild(backFace);

          // Add the intern card to the principal card
          projectDiv.appendChild(cardInner);

          // Add the card to the principal div
          rootDiv.appendChild(projectDiv);

          // Click management for the flip effect (added on cardInner)
          cardInner.addEventListener("click", () => {
              cardInner.classList.toggle("flipped");
          });
      });
  } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
  }
});