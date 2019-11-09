import { MOCK_API } from "../config";
import { connect } from 'react-redux';
import { Incidents } from './../store/actions/Incidents'

export async function getData() {
  let data = null;
  await fetch(MOCK_API)
    .then(res => res.json())
    .then(
      result => {
        data = result;
        dispatchEvent(Incidents(data));
      },
      error => (data = "Error")
    );

  return data;
}
