import { v4 as uuidv4 } from "uuid";

export default () => {
  return {
    type: "uuid",
    random_uuid: uuidv4(),
  };
};
