
export default function SingleInfo({ info }) {
    return (
        <div className='px-[16px] py-[10px]'>
            <h2 className='text-[17px] text-[#1E1E1E] font-semibold font-openSans'>Информация</h2>
            <div className='border-[1px] border-[#1e1e1e] rounded-[5px] mt-[10px]'>
                <table className='w-full border-[1px] border-[#000] rounded-[8px] overflow-hidden'>
                    <tbody>
                        {info?.map((item, index) => (
                            <tr key={index}>
                                <td className='w-[50%] pl-[10px] text-[14px] text-[#1e1e1e] border-[1px] border-[#000]'>{item.key}</td>
                                <td className='w-[50%] pl-[10px] text-[14px] text-[#1e1e1e] border-[1px] border-[#000]'>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}