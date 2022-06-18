import CONFIG from '../globals/config';

class CovidApiSource {
  static async ConfirmedCovidApi() {
    const response = await fetch(`${CONFIG.BASE_URL}`);
    const responseJson = await response.json();
    return responseJson.confirmed.value;
  }

  static async DeathCovidApi() {
    const response = await fetch(`${CONFIG.BASE_URL}`);
    const responseJson = await response.json();
    return responseJson.deaths.value;
  }

  static async RecoveredCovidApi() {
    const response = await fetch(`${CONFIG.BASE_URL}`);
    const responseJson = await response.json();
    return responseJson.recovered.value;
  }
}

export default CovidApiSource;
