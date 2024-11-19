import Foto from "../../../../../../assets/images/catalog/foto_2.jpg";
import BrandItem from "./BrandItem";

export default function Brand() {
    return (
        <section>
            <div className="container">
                <ul className="flex flex-col gap-[15px] mt-[15px] pb-[95px]">
                    <BrandItem Foto={Foto} text="AMIX" />
                    <BrandItem Foto={Foto} text="AMIX" />
                    <BrandItem Foto={Foto} text="AMIX" />
                    <BrandItem Foto={Foto} text="AMIX" />
                </ul>
            </div>
        </section>
    )
}
