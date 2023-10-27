export function Error() {
    const IMG_URL = "https://desk.zoho.com/portal/api/uploads/edbsn52625a575bc0618c993ca8f4a38cd46b8e0fe1cb02c8efd00108efa7cd600465/content?portalId=edbsndbc3427e2df3c1b452d999bdeb1e3dcfd01d391e1bec5453a767c8a90e865881"
    return (
        <>
              <div className="div" id="error-div">
                  <img id="404-img" src={IMG_URL} alt="404-page"
                       width={"100%"}/>
              </div>
        </>
    );
}