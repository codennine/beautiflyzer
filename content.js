alert('hello world')
// const titleElem = document.querySelector('h2');
// const title = titleElem.innerText.toLowerCase();
// const tables = document.querySelectorAll('table');


// function createNavbar() {
//   return `
//   <nav class="navbar is-link" role="navigation" aria-label="main navigation">
//     <div class="navbar-brand">
//       <a class="navbar-item" href="https://bulma.io">
//         <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
//       </a>

//       <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
//         <span aria-hidden="true"></span>
//         <span aria-hidden="true"></span>
//         <span aria-hidden="true"></span>
//       </a>
//     </div>

//     <div id="navbarBasicExample" class="navbar-menu">
//       <div class="navbar-start">
//         <a class="navbar-item">
//           Home
//         </a>

//         <a class="navbar-item">
//           Documentation
//         </a>

//         <div class="navbar-item has-dropdown is-hoverable">
//           <a class="navbar-link">
//             More
//           </a>

//           <div class="navbar-dropdown">
//             <a class="navbar-item">
//               About
//             </a>
//             <a class="navbar-item">
//               Jobs
//             </a>
//             <a class="navbar-item">
//               Contact
//             </a>
//             <hr class="navbar-divider">
//             <a class="navbar-item">
//               Report an issue
//             </a>
//           </div>
//         </div>
//       </div>

//       <div class="navbar-end">
//         <div class="navbar-item">
//           <div class="buttons">
//             <a class="button is-primary">
//               <strong>Sign up</strong>
//             </a>
//             <a class="button is-light">
//               Log in
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
// </nav>
//   `;
// }


// const divHeader = document.createElement('header');
// divHeader.innerHTML = createNavbar();
// document.body.insertBefore(divHeader, document.body.firstChild);

// // titleElem.style.color = 'red';
// function processarMensal() {
//   const headTableRows = tables[0].querySelectorAll('tr');
//   const row2Cells = headTableRows[2].querySelectorAll('td');
//   const row9Cells = headTableRows[9].querySelectorAll('td');

//   const fiiCode = `${row2Cells[1].innerText.substring(2, 6)}11`;
//   titleElem.innerText = titleElem.innerText + ` (${fiiCode})`;

//   let link = row9Cells[1].innerText.replace('www.', '');
//   let email = row9Cells[3].innerText;
//   row9Cells[1].innerHTML = `
//     <a href="https://${link}" target="_blank">${link}</a>
//   `;
//   row9Cells[3].innerHTML = `
//   <a href="mailto:${email}" target="_blank">${email}</a>
//   `;

// }


// if (title.includes('mensal')) processarMensal();
