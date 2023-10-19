function Footer() {
    return (
        <footer className="text-center text-white" style={{backgroundColor: "#202228"}}>
            <!-- Grid container -->
            <div className="container pt-4">
                <!-- Section: Social media -->
                <section className="mb-4">
                    <!-- Facebook -->
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                       href="https://www.facebook.com/5qua.chuoi9"
                       target="_blank" role="button"
                       data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"></i></a>

                    <!-- Instagram -->
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                       href="https://www.instagram.com/donefor.thien/"
                       target="_blank" role="button"
                       data-mdb-ripple-color="dark"><i className="fab fa-instagram"></i></a>

                    <!-- Github -->
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                       href="https://github.com/baothienc0523g1/"
                       target="_blank" role="button"
                       data-mdb-ripple-color="dark"><i className="fab fa-github"></i></a>
                </section>
                <!-- Section: Social media -->
            </div>
            <!-- Grid container -->

            <!-- Copyright -->
            <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <p style={{color: "white"}}>
                    © 2023 Copyright
                    <a href="https://codegym.vn/" target="_blank" style="text-decoration: none">Codegym.com</a>
                </p>
            </div>
            <!-- Copyright -->
        </footer>
    )
}

export default Footer;