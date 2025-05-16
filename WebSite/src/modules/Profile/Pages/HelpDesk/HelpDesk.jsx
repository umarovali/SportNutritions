import BackHeader from "../../../../components/BackHeader/BackHeader";
import HelpDeskForm from "./Components/HelpDeskForm";
import HelpDeskText from "./Components/HelpDeskText";

export default function HelpDesk() {
    return (
        <>
            <BackHeader text={"Служба "} span={"поддержки"} />
            <HelpDeskText />
            <HelpDeskForm />
        </>
    )
}
