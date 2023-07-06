const opinionComponent = `
<a href="">
<div class="feedback-card">
  <h5></h5>
  <div class="feedback-details">
    <img src="" alt="...">
  <span class="feedback-name"></span>
  </div>
</div>
</a>
`;



class   OpinionComponent extends HTMLElement {
    constructor()
    {
        super();
    }
    connectedCallback() {
        this.innerHTML = opinionComponent;
        this.querySelector('h5').innerText = this.getAttribute('title');
        this.querySelector('span').innerText = this.getAttribute('text');
        this.querySelector('img').setAttribute('src' ,this.getAttribute('src'));
        this.querySelector('a').setAttribute('href' ,this.getAttribute('href'));
    }
}


window.customElements.define('opinions-card', OpinionComponent);
