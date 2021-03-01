export default function fixHeight() {
    const main$$ = document.querySelector('main');
    console.log(main$$);
    const totalHeight = window.innerHeight;
    main$$.style.height = `${totalHeight}px`;

    window.addEventListener('resize', fixHeight);
}