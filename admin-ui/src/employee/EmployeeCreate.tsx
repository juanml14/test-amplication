import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="area" source="area" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
