import { useState, useEffect } from "react";

export default function NutritionAddInfo({ setExtraInfo }) {
  const [rows, setRows] = useState([{ id: Date.now(), key: "", value: "" }]);

  const addRow = (evt) => {
    evt.preventDefault();
    setRows([...rows, { id: Date.now(), key: "", value: "" }]);
  };

  const removeRow = (evt) => {
    evt.preventDefault();
    if (rows.length > 1) {
      setRows(rows.slice(0, -1));
    }
  };

  const handleInputChange = (id, col, value) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, [col]: value } : row
      )
    );
  };

  useEffect(() => {
    const formattedRows = rows.map(({ id, ...rest }) => rest); 
    setExtraInfo(formattedRows);
  }, [rows, setExtraInfo]);

  return (
    <div className="flex flex-col gap-[6px]">
      <h4 className="font-openSans font-[500] text-[#1E1E1E]">Информация</h4>
      <div className="overflow-hidden rounded-[5px] border-[1px] border-b-[0px] border-[#A29E9E]">
        <table className="w-full">
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="grid grid-cols-2 border-b-[1px] border-[#A29E9E]"
              >
                <td className="border-r-[1px] border-[#A29E9E]">
                  <input
                    className="w-full h-[28px] font-openSans text-[#A29E9E] text-[14px] font-[400] px-[8px] outline-none"
                    type="text"
                    value={row.key}
                    onChange={(e) =>
                      handleInputChange(row.id, "key", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    className="w-full h-[28px] font-openSans text-[#A29E9E] text-[14px] font-[400] px-[8px] outline-none"
                    type="text"
                    value={row.value}
                    onChange={(e) =>
                      handleInputChange(row.id, "value", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
            <tr className="grid grid-cols-2 border-b-[1px] border-[#A29E9E]">
              <td className="border-r-[1px] border-[#A29E9E]">
                <button
                  className="w-[100%] h-[30px] font-openSans text-[#1e1e1e] text-[16px] tracking-[1px] font-[500]"
                  onClick={addRow}
                >
                  Доб - Столб
                </button>
              </td>
              <td>
                <button
                  className="w-[100%] h-[30px] font-openSans text-[#1e1e1e] text-[16px] tracking-[1px] font-[500]"
                  onClick={removeRow}
                >
                  Уд - Столб
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}