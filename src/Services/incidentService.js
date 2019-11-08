import { MOCK_API } from "../config";

export async function getData() {
  let data = null;
  await fetch(MOCK_API)
    .then(res => res.json())
    .then(
      result => {
        data = result;
      },
      error => (data = "Error")
    );

  return data;
}
