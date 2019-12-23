var teamAccordeon = document.querySelectorAll('.team-accordeon__trigger');
//var teamAccordeonContent = document.querySelectorAll('.team-accordeon__content');

for (let i = 0; i < teamAccordeon.length; i++ ) {
    teamAccordeon[i].addEventListener('click', function() {
         if (teamAccordeon[i].className === 'team-accordeon__trigger') {
            for (let j = 0; j < teamAccordeon.length; j++) {
                teamAccordeon[j].className = 'team-accordeon__trigger';
            }
           teamAccordeon[i].className += " team-accordeon__trigger--active"; 
        } else {
            teamAccordeon[i].className = "team-accordeon__trigger"; 
        }

    })   
      
}
