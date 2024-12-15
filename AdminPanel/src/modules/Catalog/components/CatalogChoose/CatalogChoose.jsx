import Foto1 from "../../../../assets/images/catalog/foto_1.jpg";
import Foto2 from "../../../../assets/images/catalog/foto_2.jpg";
import Foto3 from "../../../../assets/images/catalog/foto_3.jpg";
import Foto4 from "../../../../assets/images/catalog/foto_4.jpg";
import CatalogChooseItem from './CatalogChooseItem';

export default function CatalogChoose() {
    return (
        <section>
            <div className="container">
                <ul className='flex flex-col gap-[10px] pt-[70px] pb-[100px]'>
                    <CatalogChooseItem Foto={Foto1} text={"Категории"} link="/category" />
                    <CatalogChooseItem Foto={Foto2} text={"Бренды"} link="/brand" />
                    <CatalogChooseItem Foto={Foto3} text={"Цели"} link="/goals" />
                    <CatalogChooseItem Foto={Foto4} text={"Аксесуары"} link="/access-category" />
                </ul>
            </div>
        </section>
    )
}
