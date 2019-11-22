var blogContent = document.getElementById('blog-content'),
blogFilters = document.getElementsByClassName('blog-filter'),
blogItems = document.getElementsByClassName('blog-item');

for (var i = 0; i < blogFilters.length; i++) {
blogFilters[i].addEventListener('click', function() {
    var filter=this.dataset.filter,
    filterElems= document.getElementsByClassName(filter);
    
    /*clear bold filters*/
    for(var i=0; i<blogFilters.length;i++){
            blogFilters[i].classList.remove("strong");

        }
    this.classList.add("strong");

    if(filter!=="all"){
        for(var i=0; i<blogItems.length;i++){
            blogItems[i].style.display="none";

        }
        for(var i=0; i<filterElems.length;i++){
            filterElems[i].style.display="block";
            
        }

    }
    else{
        for(var i=0; i<blogItems.length;i++){
            blogItems[i].style.display="block";

        }
    }
});
}