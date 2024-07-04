import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../../redux/keys/selectors";

export default function KeyFilter() {
  const keys = useSelector(selectAllTasks);
  console.log("🚀 ~ KeyFilter ~ keys:", keys);

  // Исходные данные
  const initialData = [
    { id: "1", firstName: "Petro", secondName: "Karpyk", birthdayYear: "1990" },
    { id: "2", firstName: "Pavlo", secondName: "Rotkov", birthdayYear: "1991" },
    { id: "3", firstName: "Igor", secondName: "Rotov", birthdayYear: "1990" },
  ];

  // Состояние для данных и фильтров
  const [data] = useState(keys);
  const [filters, setFilters] = useState({
    Maker: "",
    Year: "",
    Model: "",
  });

  // Обработчик изменения ввода
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Фильтрация данных
  const filteredData = data.filter((item) => {
    return (
      item.Year.toLowerCase().includes(filters.Year.toLowerCase()) &&
      item.Maker.toLowerCase().includes(filters.Maker.toLowerCase()) &&
      item.Model.includes(filters.Model)
    );
  });

  return (
    <div>
      <div>
        <input
          type='text'
          name='Year'
          placeholder='Year'
          value={filters.Year}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='Maker'
          placeholder='Maker'
          value={filters.Maker}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='Model'
          placeholder='Model'
          value={filters.Model}
          onChange={handleInputChange}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Birthday Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Year}</td>
              <td>{item.Maker}</td>
              <td>{item.Model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
