function ScrollToTopBtn() {
    return (
        <button onClick={topFunction} id="scrollToTop" title="Go to top">
            <i className="fas fa-arrow-up fa-lg"></i>
        </button>
    )

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

export default ScrollToTopBtn;