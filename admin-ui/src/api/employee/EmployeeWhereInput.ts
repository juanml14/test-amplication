import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeWhereInput = {
  area?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
