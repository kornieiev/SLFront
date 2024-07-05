import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../../redux/keys/selectors";
import { KeyList } from "../../components/KeyList/KeyList";

export default function KeyFilter() {
  const keys = useSelector(selectAllTasks);

  const uniqueMakers = [...new Set(keys.map((item) => item.Maker))];

  const filtersInitialState = {
    Maker: "",
    Year: "",
    Model: "",
  };
  const [filters, setFilters] = useState(filtersInitialState);
  const [keysFilteredByMaker, setKeysFilteredByMaker] = useState([]);
  const [keysFilteredByMakerAndModel, setKeysFilteredByMakerAndModel] =
    useState([]);
  const [showMakerSelect, setShowMakerSelect] = useState(false);
  const [showModelSelect, setShowModelSelect] = useState(false);
  const [showYearSelect, setShowYearSelect] = useState(false);

  console.log("🚀 ~ KeyFilter ~ keysFilteredByMaker:", keysFilteredByMaker);

  const handleMakerChange = (e) => {
    setShowModelSelect(false);
    setShowYearSelect(false);

    const { value } = e.target;

    const data = keys.filter((item) => {
      return item.Maker.toLowerCase().includes(value.toLowerCase());
    });
    setKeysFilteredByMaker(data);
    setShowMakerSelect(true);
  };

  const handleModelChange = (e) => {
    setShowYearSelect(false);

    const { value } = e.target;

    const data = keysFilteredByMaker.filter((item) => {
      return item.Model.toLowerCase().includes(value.toLowerCase());
    });
    setKeysFilteredByMakerAndModel(data);
    setShowModelSelect(true);
  };

  const uniqueModels = [
    ...new Set(keysFilteredByMaker.map((item) => item.Model)),
  ];
  const uniqueYears = [
    ...new Set(keysFilteredByMakerAndModel.map((item) => item.Year)),
  ];

  // Обработчик изменения ввода
  const handleYearChange = (e) => {
    const { name, value } = e.target;

    setFilters({ ...filters, [name]: value });

    setShowYearSelect(true);
  };

  // Фильтрация данных
  const filteredData = keysFilteredByMakerAndModel.filter((item) => {
    return item.Year.toLowerCase().includes(filters.Year.toLowerCase());
  });

  return (
    <div>
      {/* Step one - Maker*/}
      <div>
        <p>Step one:</p>
        <label htmlFor='Maker'>Choose Maker: </label>
        <select
          type='text'
          name='Maker'
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
      </div>
      {/* Step two - Model*/}
      {showMakerSelect && (
        <div>
          <p>Step two:</p>
          <label htmlFor='Model'>Choose Model: </label>
          <select
            type='text'
            name='Model'
            placeholder='Model'
            // value={filters.Model}
            onChange={handleModelChange}
          >
            <option>--Please choose model--</option>

            {uniqueModels.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
      {/* Step three - Year */}
      {showModelSelect && (
        <div>
          <p>Step three:</p>
          <label htmlFor='Year'>Choose Year: </label>
          <select
            type='text'
            name='Year'
            placeholder='Year'
            // value={filters.Year}
            onChange={handleYearChange}
          >
            <option>--Please choose year--</option>

            {uniqueYears.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}

      {showMakerSelect &&
        showModelSelect &&
        showYearSelect &&
        filters !== filtersInitialState && <KeyList data={filteredData} />}
    </div>
  );
}
