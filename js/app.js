$(document).ready(() => {
  var $imagesPortfolio = $('.images-portfolio');
  var $dataModal = $('a[data-toggle=modal]');
  
  $imagesPortfolio.on('click', function(event) {
    /* Validamos si el atributo de la imagen es igual a un valor del array de objetos data */
    var name = $(this).attr('alt');
    event.preventDefault();
  
    /* Validamos el texto y mostramos las imagenes */
    data.forEach(element => {
      if (name === element.portfolio.name) {

        /* Cambiamos agregamos los otros atributos a las imagenes */
        $imagesPortfolio.attr('data-title', name);
        $imagesPortfolio.attr('data-description', element.portfolio.description);
        $imagesPortfolio.attr('data-objective', element.portfolio.objective);
        $imagesPortfolio.attr('data-technology', element.portfolio['used technology']);
        $imagesPortfolio.attr('data-members', element.portfolio.members);
        $imagesPortfolio.attr('data-href', element.portfolio.href);
      }
    });
  });
  /* Eventos para mostrar información del restaurante */
  /* Al pasar el mouse por la imagen se mostrará el valor de data-title */
  $dataModal
    .on('mouseover', function() {
      var dataTitle = $(this).children('img').attr('alt'); 
      console.log(dataTitle);
        
      $(this).children('p').text(dataTitle);
      $(this).children('img').addClass('container-hover');
    })
    
    .on('mouseout', function() {
      var dataTitle = $(this).children('img').attr('data-title'); 
    
      $(this).children('p').text('');
      $(this).children('img').removeClass('container-hover');
    });
  
  /* Al darle click a la imagen se mostrará un modal */
  $dataModal.on('click', function() {
    var dataTitle = $(this).children().attr('data-title');
    var dataDescription = $(this).children().attr('data-description');
    var dataObjective = $(this).children().attr('data-objective');
    var dataTechnology = $(this).children().attr('data-technology');
    var dataMembers = $(this).children().attr('data-members');
    var dataHref = $(this).children().attr('data-href');
              
    $($(this).data('target') + ' .modal-header h1').text(dataTitle);
    $($(this).data('target') + ' .modal-body #description').text(dataDescription);
    $($(this).data('target') + ' .modal-body #objective').text(dataObjective);
    $($(this).data('target') + ' .modal-body #technology').text(dataTechnology);
    $($(this).data('target') + ' .modal-body #members').text(dataMembers);
    $($(this).data('target') + ' .modal-body #link-github').attr('href', dataHref);
  });
});