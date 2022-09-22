window.addEventListener('load',function(){
  const buttonAside = document.getElementById("show-aside");
  const asideMenu = document.getElementById("aside-menu");

  buttonAside.addEventListener('click', function(){
      asideMenu.classList.toggle("open")
  })

  let elementsArray = document.querySelectorAll(".discurssion-card-default");
  elementsArray.forEach(function(elem) {
      elem.addEventListener("click", function() {
          this.closest(".discurssion-card").classList.toggle('open');
      });
  });

});

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn-read-more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "ver mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "ver menos";
    moreText.style.display = "inline";
  }
}

function topicStep( divToShow, getForm = null ) {
  if( getForm ) {
    let form = getForm.closest("form");
    let subject = form.querySelector('#input-subject').value;
    let inputContent = form.querySelector('#input-content').value;
    if( !subject || !inputContent ) return alert("Preencha os campos corretamente!");
    creatNewTopic(subject, inputContent);
  }

  var steps = document.querySelectorAll('.discurssion-form-step');
  steps.forEach((element) => {
    element.style.display = 'none';
    if( element.id == divToShow ) element.style.display = 'block';
  });
}

function creatNewTopic (subject, content) {
  var discussionCard = document.createElement("div");
  discussionCard.classList.add("discussion-card", "blur");

  discussionCard.innerHTML = `<div class="discurssion-card discurssion-card-blur">
    <div class="discurssion-card-default">
        <h6 class="discurssion-card-title">${subject}</h6>
        <div class="discurssion-card-user">
            <div class="user">alguem12@galoascience.com</div>
        </div>
        <div class="discurssion-card-content">
            <p>${content}</p>
        </div>
        <div class="discurssion-card-actions">
            <a href="#"><img src="assets/image/icon-3dots.svg" alt="menu de opções"></a>
            <button class="like-button slaca-button "><img src="assets/image/icon-like.svg" alt="curtir"></button>
            <div class="discurssion-likes">0 like</div>
            <div class="dircurssion-counter">0 resposta</div>
        </div>
    </div>
    <div class="discussion-answer">
    </div>
    <div class="discussion-blur-area">
        <div class="discussion-blur-area-icon"><img src="assets/image/icon-2checks-black.svg" alt="icone de check duplo"></div>
        <div class="discussion-blur-area-status">Aguardando feedback dos autores</div>
        <a href="#" class="discussion-blur-area-link">Editar tópico</a>
    </div>
  </div>`;

  var divTopicos = document.getElementById("discurssion-topics");
  divTopicos.prepend(discussionCard);
}

var retorno = $.get('https://pokeapi.co/api/v2/pokemon/ditto', function(data){
  console.log(data.abilities[1].ability.name)
  console.log( "success" );
})
  .done(function() {
  console.log( "second success" );
  })