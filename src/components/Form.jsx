import { Button, MenuItem, Select } from "@mui/material";

const Form = ({
  handleAdd,
  course,
  teacher,
  schedule,
  price,
  handleTeacherChange,
  handlePriceChange,
  handleScheduleChange,
}) => {
  const teachers = [
    "Sapargul Abdinabieva",
    "Syimyk Zhyrgalbekov",
    "Benazir Baialieva",
    "Aiperi Usman",
    "Adina Tilek",
    "Nursultan Asylov",
  ];
  const schedules = [
    "Mn, Tu, Wd 10:00",
    "Mn, Wd, Fr 13:00",
    "Tu, Th, Sat 16:00",
  ];
  const prices = [
    "100$/month(standard)",
    "120$/month(medium)",
    "150$/month(premium)",
  ];

  return (
    <div className="tw-flex tw-flex-col tw-gap-[10px]  tw-border-[#d6c3a5] tw-border-[1px] tw-border-solid tw-w-[220px] tw-p-[10px]">
      <Select
        sx={{
          background: "#d6c3a5",
        }}
        className="tw-text-[#7a1d39]"
        labelId="te-label"
        id="teacher"
        name="teacher"
        label="teacher"
        value={teacher}
        onChange={handleTeacherChange}
      >
        {teachers.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
      <Select
        sx={{
          background: "#d6c3a5",
        }}
        className="tw-text-[#7a1d39]"
        labelId="sche-label"
        id="schedule"
        name="schedule"
        label="schedule"
        value={schedule}
        onChange={handleScheduleChange}
      >
        {schedules.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
      <Select
        sx={{
          background: "#d6c3a5",
        }}
        className="tw-text-[#7a1d39]"
        labelId="pri-label"
        id="price"
        name="price"
        label="price"
        value={price}
        onChange={handlePriceChange}
      >
        {prices.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
      <Button
        onClick={handleAdd}
        variant="contained"
        className="tw-bg-[#d6c3a5] tw-text-[#7a1d39]"
      >
        Add course
      </Button>
    </div>
  );
};

export default Form;
