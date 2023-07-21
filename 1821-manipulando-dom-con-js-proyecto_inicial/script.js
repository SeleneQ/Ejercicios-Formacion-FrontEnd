const btn = document.querySelector('[data-form-btn]');
    console.log(btn);


                    //el click es un listener
btn.addEventListener("click", function () {
    const input = document.querySelector('[data-form-input]');
         console.log(input.value);
});


