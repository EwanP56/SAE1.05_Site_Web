let i = 0;
let j = 0;
let tab = [i,j];

function nextCar(nb) {
  let width = window.innerWidth;

  if (width > 550) {

    if (tab[nb] == 0) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-550px * 1))';
      tab[nb]++;
    } else if(tab[nb] == 1) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-550px * 2))';
      tab[nb]++;
    }else if(tab[nb] == 2) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-550px * 3))';
      tab[nb]++;
    }else if(tab[nb] == 3) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-550px * 4))';
      tab[nb]++;
    }else if(tab[nb] == 4) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-550px * 5))';
      tab[nb]++;
    }
  }else {
    if (tab[nb] == 0) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-480px * 1))';
      tab[nb]++;
    } else if(tab[nb] == 1) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-480px * 2))';
      tab[nb]++;
    }else if(tab[nb] == 2) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-480px * 3))';
      tab[nb]++;
    }else if(tab[nb] == 3) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-480px * 4))';
      tab[nb]++;
    }else if(tab[nb] == 4) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-480px * 5))';
      tab[nb]++;
    }
  }
};

function prevCar(nb) {
  let width = window.innerWidth;

  if (width > 550) {

    if (tab[nb] == 2) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-550px * 1))';
      tab[nb]--;
    } else if(tab[nb] == 1) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(0)';
      tab[nb]--;
    }else if(tab[nb] == 3) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-550px * 2))';
      tab[nb]--;
    }else if(tab[nb] == 4) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-550px * 3))';
      tab[nb]--;
    }else if(tab[nb] == 5) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-550px * 4))';
      tab[nb]--;
    }
  }else {
    if (tab[nb] == 2) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-480px * 1))';
      tab[nb]--;
    } else if(tab[nb] == 1) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(0)';
      tab[nb]--;
    }else if(tab[nb] == 3) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-480px * 2))';
      tab[nb]--;
    }else if(tab[nb] == 4) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-480px * 3))';
      tab[nb]--;
    }else if(tab[nb] == 5) {
      document.querySelectorAll('.slides')[nb].style.transform = 'translateX(calc(-480px * 4))';
      tab[nb]--;
    }
  }
};

