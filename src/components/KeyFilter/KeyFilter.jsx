import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks, selectKeysByMaker } from "../../redux/keys/selectors";
import { KeyList } from "../../components/KeyList/KeyList";

import css from "./KeyFilter.module.css";
import { fetchKeysByMaker } from "../../redux/keys/operations";

import MAKERS from "../../constants/MakerModelList.json";

export default function KeyFilter() {
  const keys = useSelector(selectAllTasks);

  // const keysByMaker = useSelector(selectKeysByMaker);

  // const dispatch = useDispatch();

  const getKeyes = (arr) => {
    return arr.map((item) => {
      // console.log("item", item);
      return item;
    });
  };

  const arrData = getKeyes(keys);
  console.log("🚀 ~ KeyFilter ~ arrData:", arrData);

  const filtersInitialState = {
    Maker: "",
    Model: "",
    Year: "",
    ModelsArr: [],
    arr: [],
  };

  const [filters, setFilters] = useState(filtersInitialState);
  const [uniqueKeys, setUniqueKeys] = useState();
  console.log("🚀 ~ KeyFilter ~ uniqueKeys:", uniqueKeys);
  console.log("🚀 ~ KeyFilter ~ filters:", filters);

  const [showMakerSelect, setShowMakerSelect] = useState(false);
  const [showModelSelect, setShowModelSelect] = useState(false);
  const [showYearSelect, setShowYearSelect] = useState(false);

  const uniqueMakers = MAKERS.map((maker) => {
    return maker.Maker;
  });

  const getUniqueModels = async (value) => {
    await MAKERS.map((item) => {
      if (item.Maker === value) {
        setFilters({ ...filters, Maker: value, ModelsArr: item.Model });
      }
    });
  };

  const getUniqueKeysByMakerAndModel = () => {
    const arr = arrData.filter(
      (key) => key.Maker === filters.Maker && key.Model === filters.Model
    );
    console.log("🚀 ~ getUniqueKeysByMakerAndModel ~ arr:", arr);

    setUniqueKeys(arr);
  };

  // MAKER CHANGE
  const handleMakerChange = async (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: "" });

    getUniqueModels(value);

    setShowMakerSelect(true);
    setShowModelSelect(false);
    setShowYearSelect(false);
  };

  // MODEL CHANGE
  const handleModelChange = (e) => {
    const { value } = e.target;
    setShowYearSelect(false);
    setFilters({ ...filters, Model: value });

    getUniqueKeysByMakerAndModel();

    setShowModelSelect(true);
  };

  // Обработчик изменения ввода
  // const handleYearChange = (e) => {
  //   // const { name, value } = e.target;

  //   // setFilters({ ...filters, [name]: value });

  //   setShowYearSelect(true);
  // };

  // Фильтрация данных
  // const filteredData = keysFilteredByMakerAndModel.filter((item) => {
  //   return item.Year.toLowerCase().includes(filters.Year.toLowerCase());
  // });

  return (
    <ul className={css.list}>
      {/* Step one - Maker*/}
      <li className={css.item}>
        <label className={css.label} htmlFor='Maker'>
          Choose Maker:{" "}
        </label>
        <select
          className={css.select}
          type='text'
          name='Maker'
          value={filters.Maker}
          // multiple={true}
          onChange={handleMakerChange}
        >
          <option>--Please choose maker--</option>

          {uniqueMakers.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </li>
      {/* Step two - Model*/}
      {showMakerSelect && (
        <li className={css.item}>
          <label className={css.label} htmlFor='Model'>
            Choose Model:{" "}
          </label>
          <select
            className={css.select}
            type='text'
            name='Model'
            placeholder='Model'
            value={filters.Model}
            onChange={handleModelChange}
          >
            <option>--Please choose model--</option>

            {filters.ModelsArr.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </li>
      )}
      {/* Step three - Year */}
      {showModelSelect && (
        <li className={css.item}>
          <label className={css.label} htmlFor='Year'>
            Choose Year:{" "}
          </label>
          <select
            className={css.select}
            type='text'
            name='Year'
            placeholder='Year'
            // value={filters.Year}
            // onChange={handleYearChange}
          >
            <option>--Please choose year--</option>

            {/* {uniqueYears.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))} */}
          </select>
        </li>
      )}

      {showYearSelect &&
        filters !== filtersInitialState &&
        {
          /* <KeyList data={filteredData} /> */
        }}
    </ul>
  );
}

//

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// import { useState, useEffect } from "react";
// import css from "./KeyFilter.module.css";

// const data = [
//   {
//     _id: {
//       $oid: "6686ba751b8d4527ae2acd4d",
//     },
//     Year: "1998-2003",
//     Maker: "Acura",
//     Model: "CL",
//     "Type of Ignition": "Keyed Turn Ignition",
//     "Type of Key": "Transponder Key",
//     "No Buttons": "0",
//     "Price All Keys Lost": "150-180",
//     "Price Add a Key": "75-95",
//     "Price Program Only": "no data",
//     "Dealer Price": "no data",
//     "Dealer Program": "no data",
//     "Dealer Emergency Blade": "no data",
//     "Dealer Price Total": "",
//     "Dealer Location": "",
//     "Secure Locks Parts": "5",
//     "Part #": "",
//     Link: "https://transponderisland.com/shop/product/tik-ilc-hd106pt5-ilco-honda-acura-cloneable-transponder-key-hd106-pt5-nova-id-t5-1926#attr=",
//     Comments: "$180-220+ if far or busy; $130-150 min",
//   },
//   {
//     _id: {
//       $oid: "6686ba751b8d4527ae2acd4e",
//     },
//     Year: "1998-2003",
//     Maker: "Acura",
//     Model: "CL",
//     "Type of Ignition": "Keyed Turn Ignition",
//     "Type of Key": "Keyless Entry Remote",
//     "No Buttons": "0",
//     "Price All Keys Lost": "80-120",
//     "Price Add a Key": "80-120",
//     "Price Program Only": "50-100",
//     "Dealer Price": "no data",
//     "Dealer Program": "no data",
//     "Dealer Emergency Blade": "no data",
//     "Dealer Price Total": "",
//     "Dealer Location": "",
//     "Secure Locks Parts": "15",
//     "Part #": "",
//     Link: "https://transponderisland.com/shop/product/tik-acu-18-1999-2003-acura-cl-tl-keyless-entry-remote-4b-trunk-e4eg8d-444h-a-3535#attr=24",
//     Comments:
//       "if customer buys a key from us and wants a remote, charge $50-90",
//   },
// ];

// export default function KeyFilter() {
//   const [filters, setFilters] = useState({
//     Maker: "",
//     Model: "",
//     Year: "",
//   });
//   const [models, setModels] = useState([]);
//   const [years, setYears] = useState([]);

//   useEffect(() => {
//     if (filters.Maker) {
//       const uniqueModels = [
//         ...new Set(
//           data
//             .filter((item) => item.Maker === filters.Maker)
//             .map((item) => item.Model)
//         ),
//       ];
//       setModels(uniqueModels);
//       setFilters((prevFilters) => ({ ...prevFilters, Model: "", Year: "" }));
//     } else {
//       setModels([]);
//       setYears([]);
//       setFilters({ Maker: "", Model: "", Year: "" });
//     }
//   }, [filters.Maker]);

//   useEffect(() => {
//     if (filters.Model) {
//       const uniqueYears = [
//         ...new Set(
//           data
//             .filter(
//               (item) =>
//                 item.Maker === filters.Maker && item.Model === filters.Model
//             )
//             .map((item) => item.Year)
//         ),
//       ];
//       setYears(uniqueYears);
//       setFilters((prevFilters) => ({ ...prevFilters, Year: "" }));
//     } else {
//       setYears([]);
//       setFilters((prevFilters) => ({ ...prevFilters, Year: "" }));
//     }
//   }, [filters.Model]);

//   const handleMakerChange = (e) => {
//     setFilters({ ...filters, Maker: e.target.value });
//   };

//   const handleModelChange = (e) => {
//     setFilters({ ...filters, Model: e.target.value });
//   };

//   const handleYearChange = (e) => {
//     setFilters({ ...filters, Year: e.target.value });
//   };

//   return (
//     <div className={css.container}>
//       <label className={css.label}>
//         Choose Maker:
//         <select value={filters.Maker} onChange={handleMakerChange}>
//           <option value=''>--Please choose maker--</option>
//           {[...new Set(data.map((item) => item.Maker))].map((maker) => (
//             <option key={maker} value={maker}>
//               {maker}
//             </option>
//           ))}
//         </select>
//       </label>

//       {models.length > 0 && (
//         <label className={css.label}>
//           Choose Model:
//           <select value={filters.Model} onChange={handleModelChange}>
//             <option value=''>--Please choose model--</option>
//             {models.map((model) => (
//               <option key={model} value={model}>
//                 {model}
//               </option>
//             ))}
//           </select>
//         </label>
//       )}

//       {years.length > 0 && (
//         <label className={css.label}>
//           Choose Year:
//           <select value={filters.Year} onChange={handleYearChange}>
//             <option value=''>--Please choose year--</option>
//             {years.map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </label>
//       )}
//     </div>
//   );
// }
