document.addEventListener('click', function(e) {
    console.log(e.path[0].id);
    history.pushState('','',"#"+e.path[0].id);
}, false);
