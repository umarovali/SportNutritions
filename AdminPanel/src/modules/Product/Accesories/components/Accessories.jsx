import Header from '../../../../components/Header/Header'
import ProductTitle from '../../components/ProductTitle/ProductTitle'
import SearchInput from '../../components/SearchInput/SearchInput'
import AccessoriesAll from './AccessoriesAll/AccessoriesAll'

export default function Accessories() {
    return (
        <>
            <Header text="А" span="ксессуары" />
            <SearchInput />
            <ProductTitle text={"аксессуары"} link={"/accesories/accessories-add"} />
            <AccessoriesAll />
        </>
    )
}
