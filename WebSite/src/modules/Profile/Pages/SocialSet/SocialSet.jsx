import BackHeader from "../../../../components/BackHeader/BackHeader";
import SocialSetList from "./Components/SocialSetList";
import SocialSetText from "./Components/SocialSetText";

export default function SocialSet() {
    return (
        <>
            <BackHeader text="Cоциальные " span="сети " />
            <SocialSetText />
            <SocialSetList />
        </>
    )
}
