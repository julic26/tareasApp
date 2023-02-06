function $(element){
    return document.querySelector(element)
} // atrapo todos los elementos de mi dom


window.addEventListener('load' , () =>{

    // form
    const $form = $('.form-create') //atrapo todo el formulario
    const $formErrors = $('#form-errorss') //atrapo el error del formulario


    //Tittle
    const $tittle = $('#tittle')
    const $tittleErrors = $('#tittleErrors') //atrapo  el error del titulo


    //state
    const $state = $('#state')
    const $stateErrors = $('#stateErrors')

    //modal
    const $openModal = $('#create-modal')
    const $closeModal = $('#close-modal')
    const $modal = $('.contain-modal')

    const input = $('input')


    const ul = $('ul')


    //para abrir el modal cuando aprieto el crear 
    $openModal.addEventListener('click' , () =>{
        $modal.classList.add('show-modal')
    })

     //para cerrar el modal cuando aprieto la x 
     $closeModal.addEventListener('click' , () =>{
        $modal.classList.remove('show-modal')
    })

    //validacion de formulario

    let validacionErrors = false

    $form.addEventListener('submit' , (event) => {
        event.preventDefault()//importante 

        if($tittle.value.length <= 5){
            let errors = false
            $tittleErrors.innerText = 'Invalido , debe ser mayor a 5'
            $tittleErrors.style.color = 'gray'
            $tittleErrors.style.fontSize = '8px'
            errors = true
        } else {
            $tittleErrors.innerText = ''
        }

        if($state.value == " "){
            $stateErrors.innerText = 'Debe ingresar si o si un estado'
            $stateErrors.style.color = 'gray'
            $stateErrors.style.fontSize = '8px'
            errors = true
        } else {
            $stateErrors.innerText = ' '
            const text = input.value
            const li = document.createElement('li')
            const p = document.createElement('p')
            p.textContent = text 
   
            li.appendChild(p)
            li.appendChild(deleteTarea ())
            ul.appendChild(li)
        }

        
          
    })

    function deleteTarea (){
        const deleteBtn = document.createElement('button')
    
        deleteBtn.textContent = 'x'
        deleteBtn.className = 'btn-delete'
    
        deleteBtn.addEventListener ('click', (e) => {
            const item = e.target.parentElement
            ul.removeChild(item)
        })
    
        return deleteBtn
    }
    
})




