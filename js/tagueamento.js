// Analytics.js library download
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// Create trackers
ga('create', 'UA-12345-6', 'auto');
// Logs the tracker created above to the console.
ga(function(tracker) {
    console.log(tracker);
});

// Event - Send pageview (This event is activated on everypage loaded)
ga('send', 'pageview');

// Event - Menu tab 'Entre em contato' clicked
jQuery('.menu-lista-contato').on('click tap', function () {
    console.log('contato');
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
      });
});

// Event - Menu tab 'Download' clicked
jQuery('.menu-lista-download').on('click tap', function () {
    console.log('download');
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
      });
});

// Event - 'Montadoras' button clicked
jQuery('.card-montadoras').on('click tap', function () {
    var data = jQuery(this).data();
    console.log(data.name);
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: data.name
      });
});

// Event - Contact info filled
// Sent when the user fills that field with some info (whatever that info is) and unfocus.
// Depending on the application, we could do this diferently:
//   - We could check if the form was on focus (And presume that the user filled with something)
//   - We could do this event only once (For whatever method of detection we pick)
jQuery('#email, #nome, #telefone, #aceito').on('blur', function() {
    if(jQuery(this).val().length >= 1) {
        console.log(jQuery(this)[0].id);
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: jQuery(this)[0].id,
            eventLabel: 'preencheu'
          });
    }
});

// Event - The form is submited
jQuery('.contato').on('submit', function () {
    console.log('enviado o formulario de contato');
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
      });
});
