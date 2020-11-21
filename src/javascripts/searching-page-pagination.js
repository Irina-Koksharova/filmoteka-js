import paginationCard from '../templates/pagination.hbs';
// import paginationList from '../templates/pagination-list.hbs'
import { imageApiService, refs, renderMarkup } from './search-movies';

// let page = 1;
// import refs from './pagination-btns-refs';

// refs.previousBtn.addEventListener('click', onClickPreviousBtn);
// refs.nextBtn.addEventListener('click', onClickNextBtn);
// refs.firstBtn.addEventListener('click', onClickFirstBtn);
// refs.secondBtn.addEventListener('click', onClickSecondBtn);
// refs.thirdBtn.addEventListener('click', onClickThirdBtn);
// refs.fourthBtn.addEventListener('click', onClickFourthBtn);
// refs.fifthBtn.addEventListener('click', onClickFifthBtn);
// refs.sixthBtn.addEventListener('click', onClickSixthBtn);
// refs.seventhBtn.addEventListener('click', onClickSeventhBtn);
// refs.eighthBtn.addEventListener('click', onClickEighthBtn);

function makesPagination() {
    for (let i = 0; i < imageApiService.totalPages.length; i += 1) {
        imageApiService.totalPages[i] = i + 1;
        }
    refs.pageButton.insertAdjacentHTML('beforeend', paginationCard(imageApiService.totalPages));
    refs.pageButton.addEventListener('click', changePage);

    const pages = document.querySelectorAll('.page');
    
    for (let i = 0; i < pages.length; i += 1) {
        if (pages[i].id > 5)
        pages[i].classList.add('ishidden')
    }  
}

function changePage(e) {
    imageApiService.setPage(e.target.textContent);
    imageApiService.fetchImages().then(renderMarkup);  
}

function scrollMovies() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function clearPagination() {
    imageApiService.resetPage();
    refs.pageButton.innerHTML = '';
}

export { makesPagination, changePage, clearPagination, scrollMovies };