import { inputMatcher, inputTypes } from "../../constants";
import countryList from "../../json-data-files/countryList.json";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FieldRenderer = ({
  fieldName,
  value,
  setFieldVal,
  options,
  island,
}) => {
  const inputType = inputMatcher[fieldName] || "";
  const setValue = (val) =>
    setFieldVal({ target: { name: fieldName, value: val } });

  switch (inputType) {
    case inputTypes.file:
      return (
        <Input type="file" name={fieldName} onChange={setFieldVal} />
      );
    case inputTypes.textarea:
      return (
        <Textarea value={value || ""} name={fieldName} onChange={setFieldVal} />
      );
    case inputTypes.select: {
      if (fieldName === "dimotiki_enotita") {
        const municipalities = island
          ? Object.values(options.attributes.toponimia[island] || {})
          : [];
        return (
          <Select value={value || ""} onValueChange={setValue} disabled={!island}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {municipalities.map((municipality) => (
                <SelectItem key={municipality} value={municipality}>
                  {municipality}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }

      if (fieldName === "island" || fieldName === "birth_place") {
        return (
          <Select value={value || ""} onValueChange={setValue}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(options.attributes.toponimia).map((key) => (
                <SelectItem key={key} value={key}>
                  {key}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }

      if (fieldName === "current_country") {
        return (
          <Select value={value || ""} onValueChange={setValue}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {countryList.map(({ label }) => (
                <SelectItem key={label} value={label}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }

      return null;
    }
    case inputTypes.number:
      return (
        <Input
          type="number"
          value={value || ""}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    case inputTypes.email:
      return (
        <Input
          type="email"
          value={value || ""}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    case inputTypes.date:
      return (
        <Input
          type="date"
          value={value || ""}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    default:
      return (
        <Input
          type="text"
          value={value || ""}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
  }
};
