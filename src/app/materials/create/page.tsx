import { MaterialPageFetch } from "@/app/components/materials/create/material-create-fetch";
import Footer from "../../components/home/footer";
import Navbar from "../../components/home/navbar";

export default function Page() {
    return (
        <div>
            <Navbar />
            <MaterialPageFetch />
            <Footer />
        </div>
    );
}
