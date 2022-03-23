import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AreaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Areas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="empleados" source="empleados" />
        <TextField label="ID" source="id" />
        <TextField label="nombre" source="nombre" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
