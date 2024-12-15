import Header from '../../../../components/Header/Header'
import SearchInput from '../../components/SearchInput/SearchInput'
import NutritionAll from './NutritionAll/NutritionAll'
import ProductTitle from '../../components/ProductTitle/ProductTitle'

export default function Nutritions() {
    return (
        <>
            <Header text="П" span="итание" />
            <SearchInput />
            <ProductTitle text={"питание"} link={"/nutritions/nutrition-add"} />
            <NutritionAll />
        </>
    )
}