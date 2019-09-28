var agendaContent = document.getElementById('agenda-content'),
    agendaFilters = document.querySelectorAll('.agenda-filter'),
    deleteFilters = document.getElementById('delete-filters'),
    filterWrapper = document.getElementById('agenda__filter-wrapper'),
    filterText = document.getElementById('agenda__filter-text'),
    errorText = document.getElementById('agenda-error');

for (var i = 0; i < agendaFilters.length; i++) {
    agendaFilters[i].addEventListener('click', function() {
        var filter = this.dataset.filter,
            filteredItems = document.querySelectorAll('.agenda-list__item.'+filter),
            agendaItems = document.querySelectorAll('.agenda-list__item');
        deleteFilters.style.display = "block";
        filterWrapper.style.display = "block";

        switch (filter) {
            case "cours" :
                filterText.innerHTML = "les cours collectifs";
                break;
            case "ateliers" :
                filterText.innerHTML = "les ateliers";
                break;
            case "stages" :
                filterText.innerHTML = "les stages";
                break;
            case "retraites" :
                filterText.innerHTML = "les retraites";
                break;
        }

        function filterItems() {
            for (var i = 0; i < agendaItems.length; i++) {
                agendaItems[i].style.display = 'none';
            }
            for (var i = 0; i < filteredItems.length; i++) {
                filteredItems[i].style.display = 'block';
            }
        }
        
        if (filteredItems.length == 0) {
            filterItems();
            errorText.style.display = 'block';
            
        } else {
            filterItems();
            errorText.style.display = 'none';
        }
    });
}

deleteFilters.addEventListener('click', function() {
    var agendaItems = document.querySelectorAll('.agenda-list__item');
    for (var i = 0; i < agendaFilters.length; i++) {
        agendaItems[i].style.display = 'block';
    }
    deleteFilters.style.display = 'none';
    filterWrapper.style.display = 'none';
    errorText.style.display = 'none';
});