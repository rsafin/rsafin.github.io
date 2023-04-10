window.onload = () => {
    console.log("load");

    document.querySelector('.gamburger').onclick = (e) => {
        document.querySelector('.content').style.display = 'none';
        document.querySelector('.gamburger-menu-wrapper').style.display = 'block';
    }

    document.querySelector('.gamburger-close').onclick = () => {
        document.querySelector('.content').style.display = 'block';
        document.querySelector('.gamburger-menu-wrapper').style.display = 'none';
    }

    console.log(document.querySelectorAll('.gamburger-nav a'));

    document.querySelectorAll('.gamburger-nav a').forEach((element) => {
        element.onclick = (e) => {
            console.log(e);
            document.querySelector('.content').style.display = 'block';
            document.querySelector('.gamburger-menu-wrapper').style.display = 'none';
        }
    });
}