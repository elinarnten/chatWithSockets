import "./layout.css";

export default function layout() {
  let footer = document.createElement('footer');
  let creatorNames = document.createElement('p');
  creatorNames.innerHTML = "Elin Arntén, Jannie Bäckman Kuurne, Ella Larsson, Anna Özmehak"
  creatorNames.id = "namesFooter";

  let aside = document.createElement('aside');
  aside.id = "aside";

  footer.append(creatorNames)
  document.body.append(footer, aside);
}


// function Layout() {
//   const container = document.createElement("div");
//   container.id = "container";
//   let header = document.createElement("header");
//   header.id = "header";
//   let title = document.createElement("h1");
//   title.innerHTML = "Chit & Chat";

//   container.append(header, title);
//   document.body.append(container);
// }

