let butRows = document.querySelector('.button-rows');
let butSqr = document.querySelector('.button-sqr');

butSqr.onclick = function() {
  let wrapper = document.querySelector('.wrapper-col');
  wrapper.classList.remove('wrapper-col');
  wrapper.classList.add('wrapper');

  let article = document.querySelectorAll('.article-col');
  for (let i = 0; i < article.length; i++) {
          article[i].classList.remove('article-col');
          article[i].classList.add('article');
    }
     

  let articleText = document.querySelectorAll('.article-text-col');
  for (let i = 0; i < article.length; i++) {
      articleText[i].classList.remove('article-text-col');
      articleText[i].classList.add('article-text');
  }

  let bicycle = document.querySelectorAll('.bicycle-col');
  for (let i = 0; i < article.length; i++) {
      bicycle[i].classList.remove('bicycle-col');
      bicycle[i].classList.add('bicycle');
  }
}

butRows.onclick = function() {
    let wrapper = document.querySelector('.wrapper');
    wrapper.classList.remove('wrapper');
    wrapper.classList.add('wrapper-col');
  
    let article = document.querySelectorAll('.article');
    for (let i = 0; i < article.length; i++) {
            article[i].classList.remove('article');
            article[i].classList.add('article-col');
        }
       
  
    let articleText = document.querySelectorAll('.article-text');
    for (let i = 0; i < article.length; i++) {
        articleText[i].classList.remove('article-text');
        articleText[i].classList.add('article-text-col');
    }
  
    let bicycle = document.querySelectorAll('.bicycle');
    for (let i = 0; i < article.length; i++) {
        bicycle[i].classList.remove('bicycle');
        bicycle[i].classList.add('bicycle-col');
    }
}