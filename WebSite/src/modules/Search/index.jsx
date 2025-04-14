import BackHeader from "../../components/BackHeader/BackHeader";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useEffect, useState } from "react";
import api from "../../utils/axiosInstance";
import useModalData from "../../components/SearchInput/Store/useModalData";
import SearchChoose from "./Components/SearchChoose";
import SearchProducts from "./Components/SearchProducts";
import useSearchValue from "../../components/SearchInput/Store/useSearchValue";
import { MdImageSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/icons/Back_icon.svg"
export default function Search() {
  const { modalData } = useModalData();
  const { searchValue } = useSearchValue();
  const [searchData, setSearchData] = useState();
  const [choose, setChoose] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    api.get(`/search/?q=${searchValue}&min_price=${modalData.minPrice}&max_price=${modalData.maxPrice}&brand_id=${modalData.brand}&category_id=${modalData.category}&goal_id=${modalData.goal}`)
      .then((data) => {
        setSearchData(data.data);
      })
  }, [searchValue, modalData])

  return (
    <>
      <header className="bg-[#ffffff00] w-[100%] py-[8px] fixed left-0 top-0 z-[100] shadow-sm">
        <div className="container">
          <div className="flex justify-between items-center">
            <img
              onClick={() => navigate("/catalog")}
              className="w-[35px] h-[35px] cursor-pointer"
              src={BackIcon}
              alt="back"
            />
            <h1 className='font-golos font-[500] text-[22px] text-[#1E1E1E] z-1000'>{"П"}<span className='text-[#CF2516]'>{"оиск"}</span></h1>
          </div>
        </div>
      </header>
      <SearchInput />
      <SearchChoose choose={choose} setChoose={setChoose} />
      {searchValue || modalData.minPrice || modalData.maxPrice || modalData.brand || modalData.category || modalData.goal ? (
        <SearchProducts data={searchData} choose={choose} />
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-medium text-gray-500 flex items-center gap-3">
            Для поиска напишите что-то <MdImageSearch className="text-[25px] pt-[4px]" />
          </p>
        </div>
      )}
    </>
  )
}
