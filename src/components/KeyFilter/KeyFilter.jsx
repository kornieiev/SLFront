import { useState } from "react";

export default function KeyFilter() {
  // Исходные данные
  const initialData = [
    { id: "1", firstName: "Petro", secondName: "Karpyk", birthdayYear: "1990" },
    { id: "2", firstName: "Pavlo", secondName: "Rotkov", birthdayYear: "1991" },
    { id: "3", firstName: "Igor", secondName: "Rotov", birthdayYear: "1990" },
  ];

  // Состояние для данных и фильтров
  const [data] = useState(initialData);
  const [filters, setFilters] = useState({
    firstName: "",
    secondName: "",
    birthdayYear: "",
  });

  // Обработчик изменения ввода
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Фильтрация данных
  const filteredData = data.filter((item) => {
    return (
      item.firstName.toLowerCase().includes(filters.firstName.toLowerCase()) &&
      item.secondName
        .toLowerCase()
        .includes(filters.secondName.toLowerCase()) &&
      item.birthdayYear.includes(filters.birthdayYear)
    );
  });

  return (
    <div>
      <div>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={filters.firstName}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='secondName'
          placeholder='Second Name'
          value={filters.secondName}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='birthdayYear'
          placeholder='Birthday Year'
          value={filters.birthdayYear}
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
              <td>{item.firstName}</td>
              <td>{item.secondName}</td>
              <td>{item.birthdayYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
