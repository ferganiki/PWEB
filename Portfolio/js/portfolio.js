function verProjeto(){
    alert("O Projeto ainda não está hospedado em nenhum local, possivelmente no futuro irei colocá-los.");
}

function goToTop(){
    const backToTop = document.createElement('a');
    const backToTopIcon = document.createElement('span');
    backToTop.classList.add('goToTop');
    backToTop.setAttribute('href', '#home');
    backToTop.style.display = "none";
    backToTopIcon.classList.add('iconePreto', 'iconeBotao', 'iconify');
    backToTopIcon.setAttribute('data-icon', 'mdi:arrow-up-circle-outline');
    backToTop.appendChild(backToTopIcon);
    return backToTop;
}

function scrollFunction(){
    const scrollThresholdToShow = 65;
    if (document.body.scrollTop > scrollThresholdToShow || document.documentElement.scrollTop > scrollThresholdToShow){
        backToTopButton.style.display = "block";
        return;
    }
    backToTopButton.style.display = "none";
}

const backToTopButton = goToTop();
document.body.appendChild(backToTopButton);
window.addEventListener('scroll', scrollFunction);