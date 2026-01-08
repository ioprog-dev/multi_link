document.addEventListener('click', function (e) {
    const target = e.target.closest('a, button');
    if (!target) return;

    if (document.activeElement === target) {
        target.blur();
    }
});