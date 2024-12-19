import LoadingFoto from "../../assets/icons/loading.svg";

export default function LoadingPage() {
    return (
        <div className="w-[100%] mt-[45%] flex items-center justify-center">
            <img className="w-[100px] h-[50px] object-cover" src={LoadingFoto} alt="" />
        </div>
    )
}
