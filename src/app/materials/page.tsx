import Footer from "../components/home/footer";
import Navbar from "../components/home/navbar";
import { MaterialPageFetch } from "../components/materials/material-page-fetch";

export default function Page() {
    return (
        <div>
            <Navbar />
            <MaterialPageFetch />
            <Footer />
        </div>
    );
}
