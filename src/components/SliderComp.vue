<template>
<div class="containertwp">
      <div class="cards">
          <div class="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_X3kCeWYJuVS-vouoQhCfcRWKwbBX6RG1bA&usqp=CAU" alt="" />
              <div class="card__content">
              <h1>Coderpad</h1>
              <p>
                  CoderPad is a simple yet powerful online technical assessment software that makes it easy to interview in the candidate's language of choice so hiring!
              </p>
            </div>
          </div>
          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jt3d-_xLuJFSQPmo6Tqepn4_wtLlgb9RHA&usqp=CAU" alt="" />
            <div class="card__content">
              <h1>Coderpad</h1>
              <p>
                  CoderPad is a simple yet powerful online technical assessment software that makes it easy to interview in the candidate's language of choice so hiring!
              </p>
            </div>
          </div>
          <div class="card">
            <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqsuPapsSkvE1CmgIDKLzz7wae5kXblPhan-of6_uEBgiVuikb7SXAKJuhkEL-7I47Vg&usqp=CAU" alt="" />
            <div class="card__content">
              <h1>Coderpad</h1>
              <p>
                  CoderPad is a simple yet powerful online technical assessment software that makes it easy to interview in the candidate's language of choice so hiring!
              </p>
            </div>
          </div>
          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IO5pV7-yK2sN_BWo1UKij8xoRE9g2RoPHgqVD44wG0UAwXJyhPLGr4_-intJUVg-I0w&usqp=CAU
            " alt="" />
            <div class="card__content">
              <h1>Coderpad</h1>
              <p>
                  CoderPad is a simple yet powerful online technical assessment software that makes it easy to interview in the candidate's language of choice so hiring!
              </p>
            </div>
          </div>
          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykw4RpJXpvKdG2mioMW0HfzNjXfGtzS_ojZ3adk_IBqp3xSbSVBIv0jJ2khhML_sZv5s&usqp=CAU" alt="" />
            <div class="card__content">
              <h1>Coderpad</h1>
              <p>
                  CoderPad is a simple yet powerful online technical assessment software that makes it easy to interview in the candidate's language of choice so hiring!
              </p>
            </div>
          </div>
          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5G4dIuaf2GvJH8qrsqK8fJI8jcJbxo_SLQapss5k0fgcS0weQz8T2iL19MoQhBLzJQw&usqp=CAU"
            alt="" />
            <div class="card__content">
              <h1>Coderpad</h1>
              <p>
                  CoderPad is a simple yet powerful online technical assessment software that makes it easy to interview in the candidate's language of choice so hiring!
              </p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
const slider = document.querySelector('.containertwp')
const cards = document.querySelector('.cards')

let isPressed = false;

let cursorX;

slider.addEventListener("mousedown", (e) => {
    isPressed = true;
    cursorX = e.offsetX - cards.offsetLeft;
    slider.style.cursor = "grabbing";
  });
  
  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
  });
  
  window.addEventListener("mouseup", () => {
    isPressed = false;
  });
  
  slider.addEventListener("mousemove", (e) => {
    if (!isPressed) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorX}px`;
    boundSlides();
  });

  function boundSlides() {
    const containerRect = slider.getBoundingClientRect();
    const cardsRect = cards.getBoundingClientRect();
  console.log(cardsRect)
    if (parseInt(cards.style.left) > 0) {
      cards.style.left = 0;
    } else if (cardsRect.right < containerRect.right) {
      cards.style.left = `-${cardsRect.width - containerRect.width}px`;
    }
  }


</script>



<style scoped>
img {
  width: 100%;
}

h1 {
  margin: 0.7rem 0;
}

/* container */
.container {
  width: 1000px;
  height: 500px;
  position: relative;
  
}

.cards {
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(6, 400px);
  grid-gap: 20px;
  pointer-events: none;
}

.card {
  border: 1px solid rgb(204, 204, 204);
  border-radius: 10px;
  overflow: none;
  box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.2);
}

.card__content {
  color: rgb(139, 137, 137);
  padding: 10px;
}


</style>