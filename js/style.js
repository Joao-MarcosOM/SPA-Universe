const navHome = document.getElementById("navHome")
const navUniverso = document.getElementById("navUniverso")
const navExploracao = document.getElementById("navExploracao")

function atualizarRota() {
    const { pathname } = window.location;
    console.log(pathname)
  
    if (pathname === "/") {
      navHome.classList.add("bold");
      navUniverso.classList.remove("bold");
      navExploracao.classList.remove("bold");
    } else if (pathname === "/universe") {
      navUniverso.classList.add("bold");
      navHome.classList.remove("bold");
      navExploracao.classList.remove("bold");
    } else if (pathname === "/exploration") {
      navExploracao.classList.add("bold");
      navUniverso.classList.remove("bold");
      navHome.classList.remove("bold");
    }
  }
  
  window.addEventListener("popstate", atualizarRota);
  
  // Chame a função atualizarRota também no carregamento inicial da página
  export {atualizarRota};
