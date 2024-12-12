import Header from '../../../components/Header/Header'
import SearchInput from '../../../components/SearchInput/SearchInput'
import NutritionAll from './NutritionAll/NutritionAll'
import NutritionTitle from './NutritionTitle/NutritionTitle'

export default function Nutritions() {
    return (
        <>
            <Header text="П" span="итание" />
            <SearchInput />
            <NutritionTitle />
            <NutritionAll />
        </>
    )
}