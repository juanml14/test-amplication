import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AreaWhereInput = {
  id?: StringFilter;
  nombre?: StringNullableFilter;
};
