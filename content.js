document.addEventListener('click', function(e) {
    if(e.path[0].id)
    history.pushState('','',"#"+e.path[0].id);
}, false);
