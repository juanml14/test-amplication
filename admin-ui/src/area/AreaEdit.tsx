import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AreaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="empleados" source="empleados" />
        <TextInput label="nombre" source="nombre" />
      </SimpleForm>
    </Edit>
  );
};
