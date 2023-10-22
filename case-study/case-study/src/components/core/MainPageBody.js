import Iframe from "./Iframe";
import Banner from "./Banner";
import ItemCard from "./ItemCard";

export function MainPageBody() {
    return(
        <>
            <Banner/>
            <div className="container">
                <div className="row mt-4">
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>

                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>

                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                </div>
            </div>
            <Iframe/>
        </>
    );
}