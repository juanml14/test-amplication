import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AreaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="empleados" source="empleados" />
        <TextInput label="nombre" source="nombre" />
      </SimpleForm>
    </Create>
  );
};
