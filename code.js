let data = "";
let container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);
async function getEvents() {
  const response = await fetch(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events"
  );
  const data = await response.json();
  return data;
}
console.log(getEvents());

getEvents().then((response) => {
  //   let asyncObjList = [];
  //   asyncObjList.push(response);
  //   Array.from(asyncObjList);
  //   console.log(asyncObjList);
  displayEventText(response.data);
});

async function newEvents() {
  const rsp = await fetch(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events",
    {
      method: "POST",
      // send back information
      //   body: JSON.stringify({
      //     name: " ",
      //     id: " ",
      //     description: " ",
      //     location: " ",
      //   }),
    }
  );
  return rsp;
}
console.log(newEvents);

function displayEventText(info) {
  info.forEach((i, idx) => {
    let partyDivElement = document.createElement("div");
    partyDivElement.setAttribute("class", "party");
    partyDivElement.setAttribute("id", idx + 1);
    container.appendChild(partyDivElement);

    let partyName = document.createElement("h2");
    partyName.innerHTML = ` ${idx + 1}. ${i.name}`;
    partyDivElement.appendChild(partyName);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    partyDivElement.appendChild(deleteButton);

    let dateInfo = document.createElement("p");
    dateInfo.innerHTML = `Date: ${i.date} `;
    partyDivElement.appendChild(dateInfo);

    let descriptionInfo = document.createElement("p");
    descriptionInfo.innerHTML = `Description: ${i.description} `;
    partyDivElement.appendChild(descriptionInfo);

    let locationInfo = document.createElement("p");
    locationInfo.innerHTML = `Location: ${i.location} `;
    partyDivElement.appendChild(locationInfo);
  });

  //   nameDivElement.setAttribute("id", "names");
  //   container.appendChild(nameDivElement);
  //   const names_list = document.createElement("ol");
  //   names_list.setAttribute("class", "name");
  //   nameDivElement.appendChild(names_list);
  //   info.forEach((i) => {
  //     let nameValue = document.createElement("li");
  //     nameValue.innerHTML = i.name;
  //     names_list.appendChild(nameValue);
  //   });
}

function form() {
  let formElement = document.createElement("form");
  formElement.setAttribute("id", "newParty");

  let dateLabel = document.createElement("label");
  dateLabel.innerHTML = "Date:";
  let dateInput = document.createElement("input");
  dateInput.setAttribute("type", "text");
  dateInput.setAttribute("name", "date");

  let nameLabel = document.createElement("label");
  nameLabel.innerHTML = "Name:";
  let nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");

  let descriptionLabel = document.createElement("label");
  descriptionLabel.innerHTML = "Description:";
  let descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("name", "description");

  let locationLabel = document.createElement("label");
  locationLabel.innerHTML = "Location:";
  let locationInput = document.createElement("input");
  locationInput.setAttribute("type", "text");
  locationInput.setAttribute("name", "location");

  formElement.appendChild(dateLabel);
  formElement.appendChild(dateInput);

  formElement.appendChild(locationLabel);
  formElement.appendChild(locationInput);

  formElement.appendChild(descriptionLabel);
  formElement.appendChild(descriptionInput);

  container.appendChild(formElement);
  formElement.appendChild(nameLabel);
  formElement.appendChild(nameInput);

  let submitButton = document.createElement("button");
  submitButton.id = "submit";
  submitButton.innerHTML = "Submit";

  formElement.appendChild(submitButton);

  let newEventList = [];

  submitButton.addEventListener("click", () => {
    formElement;
  });
}

form();
