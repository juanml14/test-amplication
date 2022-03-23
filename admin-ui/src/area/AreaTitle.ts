import { Area as TArea } from "../api/area/Area";

export const AREA_TITLE_FIELD = "empleados";

export const AreaTitle = (record: TArea): string => {
  return record.empleados || record.id;
};
