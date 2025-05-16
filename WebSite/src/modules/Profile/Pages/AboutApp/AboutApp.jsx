import BackHeader from "../../../../components/BackHeader/BackHeader";
import AboutAppFAQ from "./Components/AboutAppFAQ";
import AboutAppText from "./Components/AboutAppText";

export default function AboutApp() {
    return (
        <>
            <BackHeader text={"О прило"} span={"жения"} />
            <AboutAppText />
            <AboutAppFAQ />
        </>
    )
}
